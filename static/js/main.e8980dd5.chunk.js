(this["webpackJsonpsynfutures-landing-v2"] =
  this["webpackJsonpsynfutures-landing-v2"] || []).push([
  [0],
  {
    160: function (e, t, a) {
      a(161), (e.exports = a(379));
    },
    180: function (e, t, a) {},
    186: function (e, t, a) {},
    347: function (e, t, a) {},
    348: function (e, t, a) {},
    350: function (e, t, a) {},
    351: function (e, t, a) {},
    358: function (e, t, a) {},
    359: function (e, t, a) {},
    360: function (e, t, a) {},
    361: function (e, t, a) {},
    362: function (e, t, a) {},
    363: function (e, t, a) {},
    367: function (e, t, a) {},
    368: function (e, t, a) {},
    375: function (e, t, a) {},
    376: function (e, t, a) {},
    377: function (e, t, a) {},
    378: function (e, t, a) {},
    379: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(0),
        l = a.n(i),
        r = a(27),
        n = a.n(r),
        o = a(19),
        C = (a(180), a(17)),
        c = a(38),
        s = function (e) {
          var t = e.children;
          return Object(c.useMediaQuery)({ minWidth: 1280 }) ? t : null;
        },
        p = function (e) {
          var t = e.children;
          return Object(c.useMediaQuery)({ minWidth: 768, maxWidth: 1279 })
            ? t
            : null;
        },
        d = function (e) {
          var t = e.children;
          return Object(c.useMediaQuery)({ maxWidth: 767 }) ? t : null;
        },
        L = function (e) {
          var t = e.children;
          return Object(c.useMediaQuery)({ minWidth: 768 }) ? t : null;
        };
      function h() {
        var e = Object(c.useMediaQuery)({ minWidth: 1279 }),
          t = Object(c.useMediaQuery)({ query: "(min-width: 1824px)" }),
          a = Object(c.useMediaQuery)({ minWidth: 768, maxWidth: 1279 }),
          l = Object(c.useMediaQuery)({ query: "(orientation: portrait)" }),
          r = Object(c.useMediaQuery)({ query: "(min-resolution: 2dppx)" }),
          n = Object(c.useMediaQuery)({ maxWidth: 767 }),
          o = Object(c.useMediaQuery)({ minWidth: 768 }),
          C = Object(i.useMemo)(
            function () {
              return n ? "mobile" : a ? "tablet" : e ? "desktop" : "";
            },
            [e, n, a]
          );
        return {
          isDesktop: e,
          isBigScreen: t,
          isTablet: a,
          isPortrait: l,
          isRetina: r,
          isMobile: n,
          isNotMobile: o,
          deviceType: C,
        };
      }
      a(71);
      var f,
        m,
        u,
        y = a(48),
        E = a.n(y),
        b = (a(182), a(155)),
        j = a.n(b),
        M = (a(112), a(63)),
        O = a.n(M),
        Z = (a(185), a(107)),
        g = a.n(Z),
        x = a(5),
        w = ["title", "titleId"];
      function v() {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          v.apply(this, arguments)
        );
      }
      function F(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function B(e, t) {
        var a = e.title,
          l = e.titleId,
          r = F(e, w);
        return i.createElement(
          "svg",
          v(
            {
              width: 33,
              height: 25,
              viewBox: "0 0 33 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          f ||
            (f = i.createElement("path", {
              d: "M31.5 0H1.5C0.673333 0 0 0.911915 0 2.03149C0 3.15107 0.673333 4.06299 1.5 4.06299H31.5C32.3267 4.06299 33 3.15107 33 2.03149C33 0.911915 32.3267 0 31.5 0Z",
              fill: "#1E878C",
            })),
          m ||
            (m = i.createElement("path", {
              d: "M31.5 10.063H1.5C0.673333 10.063 0 10.9749 0 12.0945C0 13.2141 0.673333 14.126 1.5 14.126H31.5C32.3267 14.126 33 13.2141 33 12.0945C33 10.9749 32.3267 10.063 31.5 10.063Z",
              fill: "#1E878C",
            })),
          u ||
            (u = i.createElement("path", {
              d: "M31.5 20.126H1.5C0.673333 20.126 0 21.0379 0 22.1575C0 23.277 0.673333 24.189 1.5 24.189H31.5C32.3267 24.189 33 23.277 33 22.1575C33 21.0379 32.3267 20.126 31.5 20.126Z",
              fill: "#1E878C",
            }))
        );
      }
      var _,
        k,
        V,
        S,
        H,
        N,
        D,
        A,
        P,
        T,
        U,
        I,
        G,
        R,
        W,
        z,
        Y,
        q,
        Q,
        J,
        K,
        X,
        $,
        ee,
        te = i.forwardRef(B),
        ae = (a.p, ["title", "titleId"]);
      function ie() {
        return (
          (ie =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          ie.apply(this, arguments)
        );
      }
      function le(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function re(e, t) {
        var a = e.title,
          l = e.titleId,
          r = le(e, ae);
        return i.createElement(
          "svg",
          ie(
            {
              width: 208,
              height: 40,
              viewBox: "0 0 208 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          _ ||
             (_ = i.createElement("path", {
              d: "M6.22288 8.15099C6.73954 7.34499 7.45254 6.69399 8.36188 6.19799C9.27121 5.70199 10.3355 5.45399 11.5549 5.45399C12.9809 5.45399 14.2725 5.81566 15.4299 6.53899C16.5872 7.26232 17.4965 8.29566 18.1579 9.63899C18.8399 10.9823 19.1809 12.5427 19.1809 14.32C19.1809 16.0973 18.8399 17.668 18.1579 19.032C17.4965 20.3753 16.5872 21.419 15.4299 22.163C14.2725 22.8863 12.9809 23.248 11.5549 23.248C10.3562 23.248 9.29188 23 8.36188 22.504C7.45254 22.008 6.73954 21.3673 6.22288 20.582V31.246H0.921875V5.70199H6.22288V8.15099ZM13.7869 14.32C13.7869 12.9973 13.4149 11.964 12.6709 11.22C11.9475 10.4553 11.0485 10.073 9.97388 10.073C8.91988 10.073 8.02088 10.4553 7.27688 11.22C6.55354 11.9847 6.19187 13.0283 6.19187 14.351C6.19187 15.6737 6.55354 16.7173 7.27688 17.482C8.02088 18.2467 8.91988 18.629 9.97388 18.629C11.0279 18.629 11.9269 18.2467 12.6709 17.482C13.4149 16.6967 13.7869 15.6427 13.7869 14.32Z",
              fill: "url(#paint0_linear_258_1124)",
            })),
          k ||
            (k = i.createElement("path", {
              d: "M28.9989 23.248C27.4902 23.248 26.1469 22.9897 24.9689 22.473C23.7909 21.9563 22.8609 21.2537 22.1789 20.365C21.4969 19.4557 21.1146 18.443 21.0319 17.327H26.2709C26.3329 17.9263 26.6119 18.412 27.1079 18.784C27.6039 19.156 28.2136 19.342 28.9369 19.342C29.5982 19.342 30.1046 19.218 30.4559 18.97C30.8279 18.7013 31.0139 18.3603 31.0139 17.947C31.0139 17.451 30.7556 17.0893 30.2389 16.862C29.7222 16.614 28.8852 16.3453 27.7279 16.056C26.4879 15.7667 25.4546 15.467 24.6279 15.157C23.8012 14.8263 23.0882 14.32 22.4889 13.638C21.8896 12.9353 21.5899 11.995 21.5899 10.817C21.5899 9.82499 21.8586 8.92599 22.3959 8.11999C22.9539 7.29332 23.7599 6.64232 24.8139 6.16699C25.8886 5.69166 27.1596 5.45399 28.6269 5.45399C30.7969 5.45399 32.5019 5.99132 33.7419 7.06599C35.0026 8.14066 35.7259 9.56666 35.9119 11.344H31.0139C30.9312 10.7447 30.6626 10.2693 30.2079 9.91799C29.7739 9.56666 29.1952 9.39099 28.4719 9.39099C27.8519 9.39099 27.3766 9.51499 27.0459 9.76299C26.7152 9.99032 26.5499 10.3107 26.5499 10.724C26.5499 11.22 26.8082 11.592 27.3249 11.84C27.8622 12.088 28.6889 12.336 29.8049 12.584C31.0862 12.9147 32.1299 13.2453 32.9359 13.576C33.7419 13.886 34.4446 14.4027 35.0439 15.126C35.6639 15.8287 35.9842 16.7793 36.0049 17.978C36.0049 18.9907 35.7156 19.9 35.1369 20.706C34.5789 21.4913 33.7626 22.1113 32.6879 22.566C31.6339 23.0207 30.4042 23.248 28.9989 23.248Z",
              fill: "url(#paint1_linear_258_1124)",
            })),
          V ||
             /*(V = i.createElement("path", {
              d: "M26.3948 25.1606L17.1332 19.6787L4.99316 26.8875L17.1527 34.0964L29.3319 26.8875V23.4136L26.3948 25.1606Z",
              fill: "url(#paint2_linear_258_1124)",
            })),*/
          S ||
            (S = i.createElement("path", {
              d: "M46.285 23.248C44.7764 23.248 43.433 22.9897 42.255 22.473C41.077 21.9563 40.147 21.2537 39.465 20.365C38.783 19.4557 38.4007 18.443 38.318 17.327H43.557C43.619 17.9263 43.898 18.412 44.394 18.784C44.89 19.156 45.4997 19.342 46.223 19.342C46.8844 19.342 47.3907 19.218 47.742 18.97C48.114 18.7013 48.3 18.3603 48.3 17.947C48.3 17.451 48.0417 17.0893 47.525 16.862C47.0084 16.614 46.1714 16.3453 45.014 16.056C43.774 15.7667 42.7407 15.467 41.914 15.157C41.0874 14.8263 40.3744 14.32 39.775 13.638C39.1757 12.9353 38.876 11.995 38.876 10.817C38.876 9.82499 39.1447 8.92599 39.682 8.11999C40.24 7.29332 41.046 6.64232 42.1 6.16699C43.1747 5.69166 44.4457 5.45399 45.913 5.45399C48.083 5.45399 49.788 5.99132 51.028 7.06599C52.2887 8.14066 53.012 9.56666 53.198 11.344H48.3C48.2174 10.7447 47.9487 10.2693 47.494 9.91799C47.06 9.56666 46.4814 9.39099 45.758 9.39099C45.138 9.39099 44.6627 9.51499 44.332 9.76299C44.0014 9.99032 43.836 10.3107 43.836 10.724C43.836 11.22 44.0944 11.592 44.611 11.84C45.1484 12.088 45.975 12.336 47.091 12.584C48.3724 12.9147 49.416 13.2453 50.222 13.576C51.028 13.886 51.7307 14.4027 52.33 15.126C52.95 15.8287 53.2704 16.7793 53.291 17.978C53.291 18.9907 53.0017 19.9 52.423 20.706C51.865 21.4913 51.0487 22.1113 49.974 22.566C48.92 23.0207 47.6904 23.248 46.285 23.248Z",
              fill: "url(#paint3_linear_258_1124)",
            })),
          H ||
            /*(H = i.createElement("path", {
              d: "M17.1724 17.0482V29.9799L22.185 27.008V14.0763L17.1724 17.0482Z",
              fill: "url(#paint4_linear_258_1124)",
            })),*/
          N ||
            (N = i.createElement("path", {
              d: "M66.1752 18.505V23H63.4782C61.5562 23 60.0578 22.535 58.9832 21.605C57.9085 20.6543 57.3712 19.1147 57.3712 16.986V10.104H55.2632V5.70199H57.3712V1.48599H62.6722V5.70199H66.1442V10.104H62.6722V17.048C62.6722 17.5647 62.7962 17.9367 63.0442 18.164C63.2922 18.3913 63.7055 18.505 64.2842 18.505H66.1752Z",
              fill: "url(#paint5_linear_258_1124)",
            })),
          D ||
            (D = i.createElement("path", {
              d: "M71.6079 23.248C70.6779 23.248 69.9133 22.9793 69.3139 22.442C68.7353 21.884 68.4459 21.202 68.4459 20.396C68.4459 19.5693 68.7353 18.877 69.3139 18.319C69.9133 17.761 70.6779 17.482 71.6079 17.482C72.5173 17.482 73.2613 17.761 73.8399 18.319C74.4393 18.877 74.7389 19.5693 74.7389 20.396C74.7389 21.202 74.4393 21.884 73.8399 22.442C73.2613 22.9793 72.5173 23.248 71.6079 23.248Z",
              fill: "url(#paint6_linear_258_1124)",
            })),
          A ||
            (A = i.createElement("path", {
              d: "M80.357 23.248C79.427 23.248 78.6623 22.9793 78.063 22.442C77.4843 21.884 77.195 21.202 77.195 20.396C77.195 19.5693 77.4843 18.877 78.063 18.319C78.6623 17.761 79.427 17.482 80.357 17.482C81.2663 17.482 82.0103 17.761 82.589 18.319C83.1883 18.877 83.488 19.5693 83.488 20.396C83.488 21.202 83.1883 21.884 82.589 22.442C82.0103 22.9793 81.2663 23.248 80.357 23.248Z",
              fill: "url(#paint7_linear_258_1124)",
            })),
          P ||
            (P = i.createElement("path", {
              d: "M89.106 23.248C88.176 23.248 87.4113 22.9793 86.812 22.442C86.2333 21.884 85.944 21.202 85.944 20.396C85.944 19.5693 86.2333 18.877 86.812 18.319C87.4113 17.761 88.176 17.482 89.106 17.482C90.0153 17.482 90.7593 17.761 91.338 18.319C91.9373 18.877 92.237 19.5693 92.237 20.396C92.237 21.202 91.9373 21.884 91.338 22.442C90.7593 22.9793 90.0153 23.248 89.106 23.248Z",
              fill: "url(#paint8_linear_258_1124)",
            })),
          T ||
            (T = i.createElement("path", {
              d: "M94.476 12.088C94.476 9.93866 94.941 8.02699 95.871 6.35299C96.801 4.65832 98.0927 3.34599 99.746 2.41599C101.42 1.46532 103.311 0.98999 105.419 0.98999C108.002 0.98999 110.214 1.67199 112.053 3.03599C113.892 4.39999 115.122 6.25999 115.742 8.61599H109.914C109.48 7.70666 108.86 7.01432 108.054 6.53899C107.269 6.06366 106.37 5.82599 105.357 5.82599C103.724 5.82599 102.402 6.39432 101.389 7.53099C100.376 8.66766 99.87 10.1867 99.87 12.088C99.87 13.9893 100.376 15.5083 101.389 16.645C102.402 17.7817 103.724 18.35 105.357 18.35C106.37 18.35 107.269 18.1123 108.054 17.637C108.86 17.1617 109.48 16.4693 109.914 15.56H115.742C115.122 17.916 113.892 19.776 112.053 21.14C110.214 22.4833 108.002 23.155 105.419 23.155C103.311 23.155 101.42 22.69 99.746 21.76C98.0927 20.8093 96.801 19.497 95.871 17.823C94.941 16.149 94.476 14.2373 94.476 12.088Z",
              fill: "url(#paint9_linear_258_1124)",
            })),
          U ||
            (U = i.createElement("path", {
              d: "M124.289 8.58499C124.909 7.63432 125.684 6.89032 126.614 6.35299C127.544 5.79499 128.578 5.51599 129.714 5.51599V11.127H128.257C126.935 11.127 125.943 11.4163 125.281 11.995C124.62 12.553 124.289 13.545 124.289 14.971V23H118.988V5.70199H124.289V8.58499Z",
              fill: "url(#paint10_linear_258_1124)",
            })),
          I ||
            (I = i.createElement("path", {
              d: "M149.918 5.70199L139.068 31.215H133.364L137.332 22.411L130.295 5.70199H136.216L140.215 16.521L144.183 5.70199H149.918Z",
              fill: "url(#paint11_linear_258_1124)",
            })),
          G ||
            (G = i.createElement("path", {
              d: "M157.136 8.15099C157.653 7.34499 158.366 6.69399 159.275 6.19799C160.184 5.70199 161.249 5.45399 162.468 5.45399C163.894 5.45399 165.186 5.81566 166.343 6.53899C167.5 7.26232 168.41 8.29566 169.071 9.63899C169.753 10.9823 170.094 12.5427 170.094 14.32C170.094 16.0973 169.753 17.668 169.071 19.032C168.41 20.3753 167.5 21.419 166.343 22.163C165.186 22.8863 163.894 23.248 162.468 23.248C161.269 23.248 160.205 23 159.275 22.504C158.366 22.008 157.653 21.3673 157.136 20.582V31.246H151.835V5.70199H157.136V8.15099ZM164.7 14.32C164.7 12.9973 164.328 11.964 163.584 11.22C162.861 10.4553 161.962 10.073 160.887 10.073C159.833 10.073 158.934 10.4553 158.19 11.22C157.467 11.9847 157.105 13.0283 157.105 14.351C157.105 15.6737 157.467 16.7173 158.19 17.482C158.934 18.2467 159.833 18.629 160.887 18.629C161.941 18.629 162.84 18.2467 163.584 17.482C164.328 16.6967 164.7 15.6427 164.7 14.32Z",
              fill: "url(#paint12_linear_258_1124)",
            })),
          R ||
            (R = i.createElement("path", {
              d: "M182.516 18.505V23H179.819C177.897 23 176.399 22.535 175.324 21.605C174.249 20.6543 173.712 19.1147 173.712 16.986V10.104H171.604V5.70199H173.712V1.48599H179.013V5.70199H182.485V10.104H179.013V17.048C179.013 17.5647 179.137 17.9367 179.385 18.164C179.633 18.3913 180.046 18.505 180.625 18.505H182.516Z",
              fill: " #002D4D",
            })),
          W ||
            (W = i.createElement("path", {
              d: "M193.343 23.248C191.648 23.248 190.119 22.8863 188.755 22.163C187.411 21.4397 186.347 20.4063 185.562 19.063C184.797 17.7197 184.415 16.149 184.415 14.351C184.415 12.5737 184.807 11.0133 185.593 9.66999C186.378 8.30599 187.453 7.26232 188.817 6.53899C190.181 5.81566 191.71 5.45399 193.405 5.45399C195.099 5.45399 196.629 5.81566 197.993 6.53899C199.357 7.26232 200.431 8.30599 201.217 9.66999C202.002 11.0133 202.395 12.5737 202.395 14.351C202.395 16.1283 201.992 17.699 201.186 19.063C200.4 20.4063 199.315 21.4397 197.931 22.163C196.567 22.8863 195.037 23.248 193.343 23.248ZM193.343 18.66C194.355 18.66 195.213 18.288 195.916 17.544C196.639 16.8 197.001 15.7357 197.001 14.351C197.001 12.9663 196.649 11.902 195.947 11.158C195.265 10.414 194.417 10.042 193.405 10.042C192.371 10.042 191.514 10.414 190.832 11.158C190.15 11.8813 189.809 12.9457 189.809 14.351C189.809 15.7357 190.139 16.8 190.801 17.544C191.483 18.288 192.33 18.66 193.343 18.66Z",
              fill: " #002D4D",
            })),
          z ||
            /*(z = i.createElement("path", {
              d: "M68.5887 35H71.4907L81.9494 12.8678H79.0474L72.6975 26.7142L66.5774 12.8678H63.6754L71.2609 29.6046L68.5887 35Z",
              fill: "#184858",
            })),*/
          Y ||
           /* (Y = i.createElement("path", {
              d: "M83.2424 15.5931C83.2424 13.8589 84.0182 12.8404 85.9146 12.8404H92.1783C95.971 12.8404 98.0973 14.4094 98.0973 18.2633V29.5771H95.3389V18.7588C95.3389 16.474 94.4769 14.9875 91.8335 14.9875H87.0351C86.403 14.9875 86.0008 15.2077 86.0008 16.0611V29.6047H83.2424V15.5931Z",
              fill: "#184858",
            })),*/
          q ||
            /*(q = i.createElement("path", {
              d: "M133.898 26.8518C133.898 28.6136 133.122 29.6046 131.226 29.6046H124.761C120.969 29.6046 118.842 28.0355 118.842 24.1817V12.8678H121.601V23.7137C121.601 25.9985 122.463 27.485 125.106 27.485H130.106C130.738 27.485 131.14 27.2647 131.14 26.4114V12.8678H133.898V26.8518Z",
              fill: "#184858",
            })),*/
          Q ||
            /*(Q = i.createElement("path", {
              d: "M138.237 24.2368C138.237 27.5951 139.472 29.6046 143.811 29.6046H145.909V27.4575H144.759C142.087 27.4575 141.024 26.6592 141.024 24.0716V15.015H145.909V12.8679H140.995V7.5H138.237V12.8679H135.651V15.015H138.237V24.2368Z",
              fill: "#184858",
            })),*/
          J ||
           /* (J = i.createElement("path", {
              d: "M162.717 26.8518C162.717 28.6136 161.941 29.6046 160.045 29.6046H153.58C149.787 29.6046 147.661 28.0355 147.661 24.1817V12.8678H150.42V23.7137C150.42 25.9985 151.282 27.485 153.925 27.485H158.924C159.557 27.485 159.959 27.2647 159.959 26.4114V12.8678H162.717V26.8518Z",
              fill: "#184858",
            })),*/
          K ||
           /* (K = i.createElement("path", {
              d: "M172.458 12.8404C168.148 12.8404 166.021 14.7398 166.021 18.8689L166.05 29.6047H168.808V19.5571C168.808 16.474 169.929 14.9875 172.946 14.9875H174.354V12.8404H172.458Z",
              fill: "#184858",
            })),*/
          X ||
            /*(X = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M181.106 29.6046C175.906 29.6046 174.814 26.3288 174.814 21.2913C174.814 15.1251 176.882 12.6752 182.773 12.6752C187.427 12.6752 190.732 14.1341 190.732 19.1717C190.732 21.0986 190.128 22.0896 188.117 22.0896H177.687C177.687 24.8148 178.175 27.43 181.71 27.43H190.272V29.5771L181.106 29.6046ZM186.996 19.9424C187.628 19.9424 187.801 19.4745 187.801 19.0891V18.979C187.801 15.8133 185.703 14.8223 182.773 14.8223C179.181 14.8223 177.658 16.1436 177.658 19.97L186.996 19.9424Z",
              fill: "#184858",
            })),*/
          $ ||
            /* ($ = i.createElement("path", {
              d: "M202.972 27.43H193.059V29.5771H203.69C206.994 29.5771 208 27.953 208 25.3654C208 22.1171 205.845 21.5115 202.311 20.6582L198.834 19.8048C196.938 19.3368 195.587 18.8689 195.587 17.0245C195.587 15.5105 196.22 14.9875 197.829 14.9875H206.994V12.8128H197.541C194.438 12.8128 192.8 14.1617 192.8 16.9695C192.8 19.7773 194.294 21.016 197.627 21.8143L200.817 22.5851L200.993 22.6264C203.586 23.2335 205.098 23.5873 205.098 25.3103C205.098 26.6867 204.408 27.43 202.972 27.43Z",
              fill: "#184858",
            })),*/
          ee ||
            (ee = i.createElement(
              "defs",
              null,
              i.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_258_1124",
                  x1: 25.2985,
                  y1: -5.22059,
                  x2: 24.7411,
                  y2: 25.9577,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_258_1124",
                  x1: 9.20769,
                  y1: 34.457,
                  x2: 9.20769,
                  y2: -3.71416,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_258_1124",
                  x1: -9.82251,
                  y1: 7.53311,
                  x2: 9.39417,
                  y2: 43.1875,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.27, stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_258_1124",
                  x1: 14.9173,
                  y1: 9.02689,
                  x2: 10.6599,
                  y2: 31.2961,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint4_linear_258_1124",
                  x1: 19.6835,
                  y1: -0.00883144,
                  x2: 19.6835,
                  y2: 30.052,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint5_linear_258_1124",
                  x1: 22.3106,
                  y1: 14.8935,
                  x2: 2.4515,
                  y2: 28.6801,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.27, stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint6_linear_258_1124",
                  x1: -9.6613,
                  y1: 10.8378,
                  x2: 12.3558,
                  y2: 49.813,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.27, stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint7_linear_258_1124",
                  x1: -10.8728,
                  y1: 4.87714,
                  x2: 45.3004,
                  y2: 48.7863,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", {
                  offset: 0.088,
                  stopColor: "#002D4DD",
                }),
                i.createElement("stop", { offset: 0.39, stopColor: "#002D4D" }),
                i.createElement("stop", {
                  offset: 0.631,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.869,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", { offset: 0.994, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint8_linear_258_1124",
                  x1: -13.8348,
                  y1: 15.1224,
                  x2: 53.2178,
                  y2: 48.3155,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", {
                  offset: 0.098,
                  stopColor: "#002D4DD",
                }),
                i.createElement("stop", {
                  offset: 0.381,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.631,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.869,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", { offset: 0.993, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint9_linear_258_1124",
                  x1: 38.9905,
                  y1: -6.34897,
                  x2: 22.4667,
                  y2: 57.209,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#002D4DD" }),
                i.createElement("stop", {
                  offset: 0.315,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.631,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.869,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint10_linear_258_1124",
                  x1: 2.6121,
                  y1: 23.6272,
                  x2: 40.4542,
                  y2: -47.2379,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#002D4DD" }),
                i.createElement("stop", {
                  offset: 0.315,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.631,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.869,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint11_linear_258_1124",
                  x1: 28.9704,
                  y1: -1.65128,
                  x2: 27.9663,
                  y2: 24.0474,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: " #002D4D" }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint12_linear_258_1124",
                  x1: -16.1635,
                  y1: 46.8476,
                  x2: 57.5829,
                  y2: 34.1684,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#002D4DD" }),
                i.createElement("stop", {
                  offset: 0.315,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.631,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", {
                  offset: 0.869,
                  stopColor: "#002D4D",
                }),
                i.createElement("stop", { offset: 1, stopColor: "#002D4D" })
              )
            ))
        );
      }
      var ne = i.forwardRef(re),
        oe = (a.p, a(3)),
        Ce = (a(186), a(1));
      function ce(e) {
        var t = h().deviceType;
        return Object(Ce.jsx)(
          O.a,
          Object(oe.a)(
            Object(oe.a)({}, e),
            {},
            {
              className: "syn-btn syn-btn-primary "
                .concat(e.className, " ")
                .concat(t),
            }
          )
        );
      }
      function se(e) {
        var t = h().deviceType;
        return Object(Ce.jsx)(
          O.a,
          Object(oe.a)(
            Object(oe.a)({}, e),
            {},
            {
              className: "syn-btn syn-btn-secondary "
                .concat(e.className, " ")
                .concat(t),
            }
          )
        );
      }
      var pe,
        de,
        Le,
        he = a(55),
        fe = ["title", "titleId"];
      function me() {
        return (
          (me =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          me.apply(this, arguments)
        );
      }
      function ue(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function ye(e, t) {
        var a = e.title,
          l = e.titleId,
          r = ue(e, fe);
        return i.createElement(
          "svg",
          me(
            {
              id: "\\u56FE\\u5C42_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 16 16",
              style: { enableBackground: "new 0 0 16 16" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          pe ||
            (pe = i.createElement(
              "style",
              { type: "text/css" },
              "\n\t\t.icon-popup-close-0 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #16D0FF;\n\t\t\tfill-opacity: 0;\n\t\t}\n\n\t\t.icon-popup-close-1 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #1E878C;\n\t\t}\n\n\t"
            )),
          de ||
            (de = i.createElement("path", {
              className: "icon-popup-close-0",
              d: "M0,0h16l0,0v16l0,0H0l0,0V0L0,0z",
            })),
          Le ||
            (Le = i.createElement("path", {
              className: "icon-popup-close-1",
              d: "M8,6.7L12.7,2L14,3.3L9.3,8l4.7,4.7L12.7,14L8,9.3L3.3,14L2,12.7L6.7,8L2,3.3L3.3,2L8,6.7z",
            }))
        );
      }
      var Ee,
        be,
        je = i.forwardRef(ye),
        Me = (a.p, a(133), a(24)),
        Oe = a.n(Me);
      function Ze(e, t, a, i, l) {
        o.a.event({
          category: e,
          action: t,
          value: i,
          label: a,
          nonInteraction: l,
        });
      }
      !(function (e) {
        (e.HOMEPAGE = "HomePage"), (e.HEADER = "Header"), (e.FOOTER = "Footer");
      })(Ee || (Ee = {}));
      var ge = ["title", "titleId"];
      function xe() {
        return (
          (xe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          xe.apply(this, arguments)
        );
      }
      function we(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function ve(e, t) {
        var a = e.title,
          l = e.titleId,
          r = we(e, ge);
        return i.createElement(
          "svg",
          xe(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          be ||
            (be = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z",
              fill: "#A1A7B2",
            }))
        );
      }
      var Fe = i.forwardRef(ve),
        Be = (a.p, Oe.a.SubMenu);
      function _e(e) {
        var t = e.mode,
          a = h(),
          l = a.deviceType,
          r = a.isDesktop,
          n = Object(i.useCallback)(function (e) {
            Ze(Ee.HEADER, "click ".concat(e.key));
          }, []);
        return Object(Ce.jsxs)(Oe.a, {
          className: "header-menu ".concat(l),
          mode: t,
          selectable: !1,
          onClick: n,
          children: [
            Object(Ce.jsxs)(
              Be,
              {
                popupClassName: "header-menu-popup ".concat(l),
                title: Object(Ce.jsxs)(Ce.Fragment, {
                  children: [
                    "Products",
                    " ",
                    Object(Ce.jsx)(s, { children: Object(Ce.jsx)(Fe, {}) }),
                  ],
                }),
                children: [
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: " ",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "Crypto Futures",
                      }),
                    },
                    "cryptoFutures"
                  ),
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: " ",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: " Futures",
                      }),
                    },
                    " Futures"
                  ),
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: " ",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "Decentralized Oracles",
                      }),
                    },
                    "Oracle Decentralized"
                  ),
                ],
              },
              "PRODUCTS"
            ),
            Object(Ce.jsx)(
              Oe.a.Item,
              {
                children: Object(Ce.jsx)("a", {
                  href: "http://psstcrypto.com/",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "Academy",
                }),
              },
              "academy"
            ),
            !r &&
              Object(Ce.jsxs)(
                Be,
                {
                  popupClassName: "header-menu-popup ".concat(l),
                  title: Object(Ce.jsxs)(Ce.Fragment, {
                    children: [
                      "Community",
                      " ",
                      Object(Ce.jsx)(s, { children: Object(Ce.jsx)(Fe, {}) }),
                    ],
                  }),
                  children: [
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https://twitter.com/",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Twitter",
                        }),
                      },
                      "twitter"
                    ),
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https://t.me/",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Telegram",
                        }),
                      },
                      "telegram"
                    ),
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https://discord.gg/",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Discord",
                        }),
                      },
                      "discord"
                    ),
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https:/.medium.com",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Medium",
                        }),
                      },
                      "medium"
                    ),
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https://github.com",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Github",
                        }),
                      },
                      "github"
                    ),
                    Object(Ce.jsx)(
                      Oe.a.Item,
                      {
                        children: Object(Ce.jsx)("a", {
                          href: "https://www.youtube.com/channel ",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "Youtube",
                        }),
                      },
                      "youtube"
                    ),
                  ],
                },
                "Community"
              ),
            Object(Ce.jsxs)(
              Be,
              {
                popupClassName: "header-menu-popup ".concat(l),
                title: Object(Ce.jsxs)(Ce.Fragment, {
                  children: [
                    "Resources",
                    " ",
                    Object(Ce.jsx)(s, { children: Object(Ce.jsx)(Fe, {}) }),
                  ],
                }),
                children: [
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "FAQ(In Progress)",
                      }),
                    },
                    "FAQ"
                  ),
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "White Paper (In Progress)",
                      }),
                    },
                    " WhitePaper"
                  ),
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "Audit Report(In Progress)",
                      }),
                    },
                    " AuditReport"
                  ),
                  Object(Ce.jsx)(
                    Oe.a.Item,
                    {
                      children: Object(Ce.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "White Paper (In Progress)",
                      }),
                    },
                    "whitePaper"
                  ),
                  Object(Ce.jsxs)(
                    Be,
                    {
                      className: "legacy-menu",
                      popupClassName: "legacy-popup",
                      title: Object(Ce.jsx)(Ce.Fragment, {
                        children: "Legacy",
                      }),
                      children: [
                        Object(Ce.jsx)(
                          Oe.a.Item,
                          {
                            children: Object(Ce.jsx)("a", {
                              href: "/",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: "Tech Paper(In Progress)",
                            }),
                          },
                          "techPaper"
                        ),
                        /*Object(Ce.jsx)(
                          Oe.a.Item,
                          {
                            children: Object(Ce.jsx)("a", {
                              href: "/",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: "Audit Report ",
                            }),
                          },
                          "auditReport"
                        ),
                        Object(Ce.jsx)(
                          Oe.a.Item,
                          {
                            children: Object(Ce.jsx)("a", {
                              href: "https://legacy.synfutures.com/#/trade",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: "  Dapp",
                            }),
                          },
                          "whitePaper"
                        ),*/
                      ],
                    },
                    "legacy"
                  ),
                ],
              },
              "resources"
            ),
          ],
        });
      }
      a(347);
      var ke = "https://trade-psst-crypto.vercel.app/";
      function Ve(e) {
        var t = Object(i.useState)(!1),
          a = Object(x.a)(t, 2),
          l = a[0],
          r = a[1],
          n = Object(he.useSpring)({
            from: { opacity: 0, width: "0%" },
            to: { opacity: 1, width: "100%" },
            config: he.config.stiff,
            reverse: l,
            onRest: function () {
              l && e.setIsShowSidebar(!1);
            },
          }),
          o = Object(i.useCallback)(function () {
            Ze(Ee.HOMEPAGE, "Click TRADE ON BETA");
          }, []),
          C = h().deviceType;
        return Object(Ce.jsx)("div", {
          className: "sidebar-container ".concat(C),
          onClick: function () {
            r(!0);
          },
          children: Object(Ce.jsxs)(he.animated.div, {
            className: "sidebar",
            onClick: function (e) {
              e.stopPropagation();
            },
            style: n,
            children: [
              Object(Ce.jsxs)("div", {
                className: "sidebar-header",
                children: [
                  Object(Ce.jsx)("div", {
                    className: "logo",
                    children: Object(Ce.jsx)(ne, {}),
                  }),
                  Object(Ce.jsx)("div", {
                    className: "sidebar-close",
                    onClick: function () {
                      r(!0);
                    },
                    children: Object(Ce.jsx)(je, {}),
                  }),
                ],
              }),
              Object(Ce.jsxs)("div", {
                className: "sidebar-body",
                children: [
                  Object(Ce.jsx)(_e, { mode: "inline" }),
                  Object(Ce.jsx)(ce, {
                    type: "primary",
                    href: ke,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: "header-app-btn v2",
                    onClick: o,
                    children: "\u270c\ud83c\udffb Trade Now",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Se,
        He = a(4),
        Ne = a(6),
        De = a.n(Ne),
        Ae = (a(348), ["title", "titleId"]);
      function Pe() {
        return (
          (Pe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Pe.apply(this, arguments)
        );
      }
      function Te(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Ue(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Te(e, Ae);
        return i.createElement(
          "svg",
          Pe(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Se ||
            (Se = i.createElement("path", {
              d: "M12.0002 12.0002L7.2002 16.8002M12.0002 12.0002L7.2002 7.2002L12.0002 12.0002ZM12.0002 12.0002L16.8002 16.8002L12.0002 12.0002ZM12.0002 12.0002L16.8002 7.2002L12.0002 12.0002Z",
              stroke: "white",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      }
      var Ie,
        Ge,
        Re = i.forwardRef(Ue),
        We = (a.p, ["title", "titleId"]);
      function ze() {
        return (
          (ze =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          ze.apply(this, arguments)
        );
      }
      function Ye(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function qe(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Ye(e, We);
        return i.createElement(
          "svg",
          ze(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Ie ||
            (Ie = i.createElement("path", {
              d: "M13 14.9998V6.99982M13 14.9998L18.504 18.1448C18.6561 18.2317 18.8283 18.2771 19.0034 18.2765C19.1785 18.2759 19.3504 18.2293 19.5019 18.1414C19.6533 18.0536 19.7791 17.9274 19.8665 17.7757C19.9539 17.624 19.9999 17.4519 20 17.2768V4.72282C19.9999 4.5477 19.9539 4.37567 19.8665 4.22393C19.7791 4.0722 19.6533 3.94608 19.5019 3.85819C19.3504 3.77031 19.1785 3.72374 19.0034 3.72315C18.8283 3.72256 18.6561 3.76796 18.504 3.85482L13 6.99982M13 14.9998H10M13 6.99982H7C5.93913 6.99982 4.92172 7.42125 4.17157 8.17139C3.42143 8.92154 3 9.93896 3 10.9998C3 12.0607 3.42143 13.0781 4.17157 13.8282C4.92172 14.5784 5.93913 14.9998 7 14.9998M10 14.9998V19.4998C10 19.8976 9.84196 20.2792 9.56066 20.5605C9.27936 20.8418 8.89782 20.9998 8.5 20.9998C8.10218 20.9998 7.72064 20.8418 7.43934 20.5605C7.15804 20.2792 7 19.8976 7 19.4998V14.9998M10 14.9998H7",
              stroke: "white",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          Ge ||
            (Ge = i.createElement("path", {
              d: "M7 19.5V15H10V19.5C10 19.8978 9.84196 20.2794 9.56066 20.5607C9.27936 20.842 8.89782 21 8.5 21C8.10218 21 7.72064 20.842 7.43934 20.5607C7.15804 20.2794 7 19.8978 7 19.5Z",
              fill: "white",
            }))
        );
      }
      var Qe = i.forwardRef(qe),
        Je =
          (a.p,
          function (e) {
            var t,
              a = e.className,
              i = e.visible,
              l = e.onClose,
              r = e.extra,
              n = e.children,
              o = h().isMobile;
            return Object(Ce.jsxs)("div", {
              className: De()(
                "syn-notice",
                ((t = {}),
                Object(He.a)(t, "syn-notice-hide", !i),
                Object(He.a)(t, "".concat(a), a),
                t)
              ),
              children: [
                Object(Ce.jsxs)("section", {
                  className: "syn-notice-left",
                  children: [
                    !o &&
                      Object(Ce.jsx)(Qe, {
                        className: "syn-notice-left-megaphone_icon",
                      }),
                    n,
                    Object(Ce.jsx)(d, {
                      children: Object(Ce.jsx)(Re, {
                        className: "syn-notice-extra-close_icon",
                        onClick: function () {
                          return l && l();
                        },
                      }),
                    }),
                  ],
                }),
                Object(Ce.jsxs)("section", {
                  className: "syn-notice-extra",
                  children: [
                    r,
                    !o &&
                      Object(Ce.jsx)(Re, {
                        className: "syn-notice-extra-close_icon",
                        onClick: function () {
                          return l && l();
                        },
                      }),
                  ],
                }),
              ],
            });
          }),
        Ke = a(70),
        Xe = function () {
          return Object(Ke.b)();
        },
        $e = Ke.c,
        et = a(42),
        tt = a(34),
        at = a(21),
        it = a.n(at),
        lt = Object(et.b)(
          "global/fetchAnnouncementConfig",
          Object(tt.a)(
            it.a.mark(function e() {
              var t, a;
              return it.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          fetch(
                            " "
                          )
                        );
                      case 3:
                        return (t = e.sent), (e.next = 6), t.json();
                      case 6:
                        if (
                          ((a = e.sent),
                          console.log(
                            "\ud83d\ude80 ~ file: announcement.ts ~ line 117 ~ res",
                            a
                          ),
                          !a)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 10:
                        e.next = 16;
                        break;
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "fetch global/fetchAnnouncementConfig error:  ".concat(
                              e.t0
                            )
                          ),
                          e.abrupt("return", void 0)
                        );
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 12]]
              );
            })
          )
        ),
        rt = Object(et.c)({
          name: "global",
          initialState: {
            announcementConfig: {
              nonce: 0,
              isShow: !1,
              desc: "",
              link: "",
              linkName: "",
              isOpenNewWindow: !1,
            },
          },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(lt.fulfilled, function (e, t) {
              var a = t.payload;
              a && (e.announcementConfig = a);
            });
          },
        }),
        nt = function (e) {
          return e.global;
        },
        ot = rt.reducer;
      function Ct() {
        var e = $e(nt).announcementConfig;
        return Object(i.useMemo)(
          function () {
            return e;
          },
          [e]
        );
      }
      a(350);
      var ct = "syn-nonce-id",
        st = function () {
          var e = Ct(),
            t = Object(i.useState)(!1),
            a = Object(x.a)(t, 2),
            l = a[0],
            r = a[1],
            n = h().deviceType;
          return (
            Object(i.useEffect)(
              function () {
                e &&
                  e.isShow &&
                  r(
                    (function (e) {
                      var t = localStorage.getItem(ct);
                      return e !== Number(t);
                    })(e.nonce)
                  );
              },
              [e]
            ),
            Object(Ce.jsx)(Ce.Fragment, {
              children:
                e &&
                Object(Ce.jsx)(Je, {
                  visible: l,
                  className: "top_notice ".concat(n),
                  extra: Object(Ce.jsxs)(se, {
                    className: "top_notice-link",
                    onClick: function () {
                      if (e.isOpenNewWindow) return window.open(e.link);
                      window.location.href = e.link;
                    },
                    ghost: !0,
                    children: [e.linkName, Object(Ce.jsx)(Fe, {})],
                  }),
                  onClose: function () {
                    localStorage.setItem(
                      ct,
                      "".concat(
                        (null === e || void 0 === e ? void 0 : e.nonce) || ""
                      )
                    ),
                      r(!1);
                  },
                  children: Object(Ce.jsx)("div", {
                    className: "top_notice-content",
                    children: e.desc,
                  }),
                }),
            })
          );
        },
        pt = (a(351), E.a.Header);
      function dt() {
        var e = h().deviceType,
          t = Object(i.useState)(!1),
          a = Object(x.a)(t, 2),
          l = a[0],
          r = a[1];
        Object(i.useCallback)(function () {
          Ze(Ee.HOMEPAGE, "Click TRADE ON BETA");
        }, []);
        return Object(Ce.jsxs)("div", {
          className: "header",
          children: [
            Object(Ce.jsx)(st, {}),
            Object(Ce.jsxs)(pt, {
              className: "header-container  ".concat(e),
              children: [
                Object(Ce.jsxs)(j.a, {
                  justify: "space-between",
                  children: [
                    Object(Ce.jsx)(g.a, {
                      children: Object(Ce.jsx)("a", {
                        id: "logo",
                        href: "/",
                        children: Object(Ce.jsx)("div", {
                          className: "logo",
                          children: Object(Ce.jsx)(ne, {}),
                        }),
                      }),
                    }),
                    Object(Ce.jsxs)(g.a, {
                      className: "header-main",
                      flex: "1",
                      children: [
                        Object(Ce.jsx)(s, {
                          children: Object(Ce.jsxs)(Ce.Fragment, {
                            children: [
                              Object(Ce.jsx)(_e, { mode: "horizontal" }),
                              Object(Ce.jsx)("div", {
                                className: "header-main-right",
                                children: Object(Ce.jsx)(
                                  ce,
                                  {
                                    href: ke,
                                    rel: "noreferrer noopener",
                                    target: "_blank",
                                    className: "header-app-btn syn-btn-primary",
                                    onClick: function () {
                                      Ze(Ee.HEADER, "click Trade Now");
                                    },
                                    children: "\u270c\ud83c\udffb Trade Now",
                                  },
                                  "signup"
                                ),
                              }),
                            ],
                          }),
                        }),
                        Object(Ce.jsx)(d, {
                          children: Object(Ce.jsx)(O.a, {
                            className: "header-mobile-menu-btn",
                            onClick: function () {
                              r(!0);
                            },
                            children: Object(Ce.jsx)(te, {}),
                          }),
                        }),
                        Object(Ce.jsx)(p, {
                          children: Object(Ce.jsxs)(Ce.Fragment, {
                            children: [
                              Object(Ce.jsx)(
                                ce,
                                {
                                  href: ke,
                                  rel: "noreferrer noopener",
                                  target: "_blank",
                                  className: "header-app-btn syn-btn-primary",
                                  onClick: function () {
                                    Ze(Ee.HEADER, "click Trade Now");
                                  },
                                  children: "\u270c\ud83c\udffb Trade Now",
                                },
                                "signup"
                              ),
                              Object(Ce.jsx)(O.a, {
                                className: "header-mobile-menu-btn",
                                onClick: function () {
                                  r(!0);
                                },
                                children: Object(Ce.jsx)(te, {}),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l &&
                  Object(Ce.jsx)(Ve, { isShowSidebar: l, setIsShowSidebar: r }),
              ],
            }),
          ],
        });
      }
      var Lt;
      a(358);
      function ht(e) {
        var t = Object(i.useMemo)(
          function () {
            return "_blank" === e.target
              ? { target: "_blank", rel: "noreferrer noopener" }
              : { target: e.target };
          },
          [e.target]
        );
        return Object(Ce.jsx)(
          "a",
          Object(oe.a)(
            Object(oe.a)(Object(oe.a)({}, e), t),
            {},
            {
              className: "syn-link syn-link-"
                .concat(e.type, " ")
                .concat(e.className),
              onClick: e.onClick,
            }
          )
        );
      }
      var ft = ["title", "titleId"];
      function mt() {
        return (
          (mt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          mt.apply(this, arguments)
        );
      }
      function ut(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function yt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = ut(e, ft);
        return i.createElement(
          "svg",
          mt(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Lt ||
            (Lt = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.95948 3.29289C8.35 2.90237 8.98317 2.90237 9.37369 3.29289L13.3737 7.29289C13.7642 7.68342 13.7642 8.31658 13.3737 8.70711L9.37369 12.7071C8.98317 13.0976 8.35 13.0976 7.95948 12.7071C7.56895 12.3166 7.56895 11.6834 7.95948 11.2929L10.2524 9H3.33325C2.78097 9 2.33325 8.55228 2.33325 8C2.33325 7.44772 2.78097 7 3.33325 7H10.2524L7.95948 4.70711C7.56895 4.31658 7.56895 3.68342 7.95948 3.29289Z",
              fill: "white",
            }))
        );
      }
      var Et = i.forwardRef(yt);
      a.p, a(359);
      function bt() {
        var e = h().deviceType;
        return Object(Ce.jsx)("form", {
          className: "subscribe-form omnisend-subscribe-form ".concat(e),
          children: Object(Ce.jsxs)("div", {
            className: "subscribe-input-group",
            children: [
              Object(Ce.jsx)("input", {
                className: "omnisend-subscribe-input-email",
                type: "text",
                placeholder: "Enter Your Email",
              }),
              Object(Ce.jsx)(ce, {
                className: "subscribe-input-btn",
                htmlType: "submit",
                children: Object(Ce.jsx)(Et, {}),
              }),
            ],
          }),
        });
      }
      var jt;
      a(360);
      function Mt(e) {
        return Object(Ce.jsx)("div", {
          className: "container-wrap",
          children: Object(Ce.jsx)("div", {
            className: De()("container", e.className),
            children: e.children,
          }),
        });
      }
      var Ot = ["title", "titleId"];
      function Zt() {
        return (
          (Zt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Zt.apply(this, arguments)
        );
      }
      function gt(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function xt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = gt(e, Ot);
        return i.createElement(
          "svg",
          Zt(
            {
              width: 32,
              height: 28,
              viewBox: "0 0 32 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          jt ||
            (jt = i.createElement("path", {
              d: "M32 3.92531C30.8 4.5407 29.6 4.74582 28.2 4.95095C29.6 4.13044 30.6 2.89967 31 1.25864C29.8 2.07916 28.4 2.48941 26.8 2.89967C25.6 1.6689 23.8 0.848389 22 0.848389C17.8 0.848389 14.6 4.95095 15.6 9.05352C10.2 8.84839 5.4 6.18172 2 2.07916C0.2 5.15608 1.2 9.05352 4 11.1048C3 11.1048 2 10.6945 1 10.2843C1 13.3612 3.2 16.233 6.2 17.0535C5.2 17.2586 4.2 17.4638 3.2 17.2586C4 19.9253 6.4 21.9766 9.4 21.9766C7 23.8227 3.4 24.8484 0 24.4381C3 26.2843 6.4 27.5151 10 27.5151C22.2 27.5151 29 17.0535 28.6 7.41249C30 6.59198 31.2 5.36121 32 3.92531Z",
              fill: "#1E878C",
            }))
        );
      }
      var wt,
        vt,
        Ft = i.forwardRef(xt),
        Bt = (a.p, ["title", "titleId"]);
      function _t() {
        return (
          (_t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          _t.apply(this, arguments)
        );
      }
      function kt(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Vt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = kt(e, Bt);
        return i.createElement(
          "svg",
          _t(
            {
              width: 32,
              height: 37,
              viewBox: "0 0 32 37",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          wt ||
            (wt = i.createElement("path", {
              d: "M12.6903 15.2545C11.648 15.2545 10.8251 16.1636 10.8251 17.2727C10.8251 18.3818 11.6663 19.2909 12.6903 19.2909C13.7326 19.2909 14.5554 18.3818 14.5554 17.2727C14.5737 16.1636 13.7326 15.2545 12.6903 15.2545ZM19.3646 15.2545C18.3223 15.2545 17.4994 16.1636 17.4994 17.2727C17.4994 18.3818 18.3406 19.2909 19.3646 19.2909C20.4069 19.2909 21.2297 18.3818 21.2297 17.2727C21.2297 16.1636 20.4069 15.2545 19.3646 15.2545Z",
              fill: "#1E878C",
            })),
          vt ||
            (vt = i.createElement("path", {
              d: "M28.2514 0H3.74857C1.68229 0 0 1.67273 0 3.74545V28.3273C0 30.4 1.68229 32.0727 3.74857 32.0727H24.4846L23.5154 28.7091L25.856 30.8727L28.0686 32.9091L32 36.3636V3.74545C32 1.67273 30.3177 0 28.2514 0ZM21.1931 23.7455C21.1931 23.7455 20.5349 22.9636 19.9863 22.2727C22.3817 21.6 23.296 20.1091 23.296 20.1091C22.5463 20.6 21.8331 20.9455 21.1931 21.1818C20.2789 21.5636 19.4011 21.8182 18.5417 21.9636C16.7863 22.2909 15.1771 22.2 13.8057 21.9455C12.7634 21.7455 11.8674 21.4545 11.1177 21.1636C10.6971 21 10.24 20.8 9.78286 20.5455C9.728 20.5091 9.67314 20.4909 9.61829 20.4545C9.58171 20.4364 9.56343 20.4182 9.54514 20.4C9.216 20.2182 9.03314 20.0909 9.03314 20.0909C9.03314 20.0909 9.91086 21.5455 12.2331 22.2364C11.6846 22.9273 11.008 23.7455 11.008 23.7455C6.96686 23.6182 5.43086 20.9818 5.43086 20.9818C5.43086 15.1273 8.064 10.3818 8.064 10.3818C10.6971 8.41818 13.2023 8.47273 13.2023 8.47273L13.3851 8.69091C10.0937 9.63636 8.576 11.0727 8.576 11.0727C8.576 11.0727 8.97829 10.8545 9.65486 10.5455C11.6114 9.69091 13.1657 9.45455 13.8057 9.4C13.9154 9.38182 14.0069 9.36364 14.1166 9.36364C15.232 9.21818 16.4937 9.18182 17.8103 9.32727C19.5474 9.52727 21.4126 10.0364 23.3143 11.0727C23.3143 11.0727 21.8697 9.70909 18.7611 8.76364L19.0171 8.47273C19.0171 8.47273 21.5223 8.41818 24.1554 10.3818C24.1554 10.3818 26.7886 15.1273 26.7886 20.9818C26.7886 20.9818 25.2343 23.6182 21.1931 23.7455Z",
              fill: "#1E878C",
            }))
        );
      }
      var St,
        Ht = i.forwardRef(Vt),
        Nt = (a.p, ["title", "titleId"]);
      function Dt() {
        return (
          (Dt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Dt.apply(this, arguments)
        );
      }
      function At(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Pt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = At(e, Nt);
        return i.createElement(
          "svg",
          Dt(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          St ||
            (St = i.createElement("path", {
              d: "M13.5375 12C13.5375 15.7275 10.5075 18.75 6.768 18.75C5.8804 18.7512 5.00125 18.5775 4.18076 18.239C3.36026 17.9004 2.61449 17.4035 1.98603 16.7767C1.35756 16.1499 0.858704 15.4055 0.517941 14.5859C0.177178 13.7663 0.00118111 12.8876 0 12C0 8.27101 3.03 5.25001 6.768 5.25001C7.65573 5.24863 8.53504 5.42214 9.3557 5.76063C10.1764 6.09912 10.9223 6.59596 11.5509 7.22278C12.1796 7.84959 12.6786 8.5941 13.0194 9.41379C13.3603 10.2335 13.5363 11.1123 13.5375 12ZM20.9625 12C20.9625 15.51 19.4475 18.354 17.5785 18.354C15.7095 18.354 14.1945 15.5085 14.1945 12C14.1945 8.49001 15.7095 5.64601 17.5785 5.64601C19.4475 5.64601 20.9625 8.49151 20.9625 12ZM24 12C24 15.144 23.4675 17.6925 22.809 17.6925C22.152 17.6925 21.6195 15.1425 21.6195 12C21.6195 8.85601 22.152 6.30751 22.8105 6.30751C23.4675 6.30751 24 8.85601 24 12Z",
              fill: "white",
            }))
        );
      }
      var Tt,
        Ut = i.forwardRef(Pt),
        It = (a.p, ["title", "titleId"]);
      function Gt() {
        return (
          (Gt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Gt.apply(this, arguments)
        );
      }
      function Rt(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Wt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Rt(e, It);
        return i.createElement(
          "svg",
          Gt(
            {
              width: 32,
              height: 32,
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Tt ||
            (Tt = i.createElement("path", {
              d: "M15.9992 0.848389C8.15278 0.847398 1.46407 6.44088 0.207803 14.0541C-1.04847 21.6672 3.49866 29.0521 10.9431 31.489C11.7449 31.6309 12.0319 31.147 12.0319 30.7308C12.0319 30.3573 12.0191 29.3674 12.0143 28.0512C7.56438 28.997 6.62468 25.9422 6.62468 25.9422C6.33173 24.9916 5.70195 24.1758 4.84952 23.6425C3.4063 22.6668 4.96017 22.6888 4.96017 22.6888C5.98754 22.8273 6.89176 23.4257 7.40883 24.3092C7.8465 25.0914 8.58387 25.6694 9.45709 25.9148C10.3303 26.1602 11.2671 26.0526 12.0592 25.6159C12.1336 24.8183 12.4946 24.0729 13.0775 23.5132C9.52716 23.1176 5.79403 21.7683 5.79403 15.7423C5.77432 14.1837 6.36314 12.677 7.4393 11.5322C6.95237 10.1755 7.00972 8.68745 7.59966 7.37089C7.59966 7.37089 8.94185 6.94688 11.9967 8.98023C14.6167 8.27409 17.3817 8.27409 20.0017 8.98023C23.0581 6.9453 24.3987 7.37089 24.3987 7.37089C24.9914 8.68683 25.0488 10.1759 24.5591 11.5322C25.6392 12.6769 26.2275 14.1876 26.2012 15.7486C26.2012 21.7904 22.4648 23.1176 18.9017 23.5069C19.6703 24.2794 20.0645 25.339 19.9841 26.4167C19.9841 28.5194 19.9648 30.2154 19.9648 30.7308C19.9648 31.1517 20.2503 31.6403 21.0665 31.4859C28.5079 29.0448 33.0501 21.6595 31.7913 14.0484C30.5324 6.4372 23.844 0.846625 15.9992 0.848389Z",
              fill: "#1E878C",
            }))
        );
      }
      var zt,
        Yt = i.forwardRef(Wt),
        qt = (a.p, ["title", "titleId"]);
      function Qt() {
        return (
          (Qt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Qt.apply(this, arguments)
        );
      }
      function Jt(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Kt(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Jt(e, qt);
        return i.createElement(
          "svg",
          Qt(
            {
              width: 32,
              height: 28,
              viewBox: "0 0 32 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          zt ||
            (zt = i.createElement("path", {
              d: "M2.19983 12.3283C10.7898 8.56507 16.5177 6.0841 19.3837 4.88542C27.5667 1.46294 29.2671 0.86842 30.3753 0.848579C30.6191 0.844471 31.1641 0.905215 31.5171 1.19327C31.8152 1.4365 31.8973 1.76506 31.9365 1.99567C31.9758 2.22628 32.0246 2.75161 31.9858 3.16208C31.5423 7.84719 29.6236 19.2167 28.6474 24.4641C28.2344 26.6845 27.4211 27.429 26.6337 27.5018C24.9226 27.6602 23.6232 26.3647 21.9659 25.2723C19.3725 23.5629 17.9074 22.4987 15.3901 20.8307C12.4809 18.9029 14.3668 17.8434 16.0247 16.1118C16.4586 15.6586 23.9979 8.76298 24.1439 8.13744C24.1621 8.0592 24.1791 7.76758 24.0068 7.61359C23.8345 7.45961 23.5802 7.51226 23.3967 7.55414C23.1366 7.61351 18.9936 10.367 10.9678 15.8148C9.79181 16.6268 8.72666 17.0224 7.77232 17.0017C6.72023 16.9788 4.69644 16.4035 3.19196 15.9117C1.34666 15.3086 -0.119957 14.9897 0.0077523 13.9653C0.074271 13.4318 0.804965 12.8861 2.19983 12.3283Z",
              fill: "#1E878C",
            }))
        );
      }
      var Xt,
        $t = i.forwardRef(Kt),
        ea = (a.p, ["title", "titleId"]);
      function ta() {
        return (
          (ta =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          ta.apply(this, arguments)
        );
      }
      function aa(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function ia(e, t) {
        var a = e.title,
          l = e.titleId,
          r = aa(e, ea);
        return i.createElement(
          "svg",
          ta(
            {
              width: 35,
              height: 25,
              viewBox: "0 0 35 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Xt ||
            (Xt = i.createElement("path", {
              d: "M34.125 3.79464C33.6875 2.23214 32.5938 1.11607 31.0625 0.669643C28.4375 3.57628e-07 17.2812 0 17.2812 0C17.2812 0 6.34376 3.57628e-07 3.50001 0.669643C1.96876 1.11607 0.874993 2.23214 0.437493 3.79464C-6.67572e-06 6.69643 0 12.5 0 12.5C0 12.5 6.67572e-06 18.3036 0.656257 21.2054C1.09376 22.7679 2.18749 23.8839 3.71874 24.3304C6.34374 25 17.5 25 17.5 25C17.5 25 28.4375 25 31.2812 24.3304C32.8125 23.8839 33.9063 22.7679 34.3438 21.2054C35 18.3036 35 12.5 35 12.5C35 12.5 35 6.69643 34.125 3.79464ZM14 17.8571V7.14286L23.1875 12.5L14 17.8571Z",
              fill: "#1E878C",
            }))
        );
      }
      var la,
        ra,
        na = i.forwardRef(ia),
        oa = (a.p, ["title", "titleId"]);
      function Ca() {
        return (
          (Ca =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Ca.apply(this, arguments)
        );
      }
      function ca(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function sa(e, t) {
        var a = e.title,
          l = e.titleId,
          r = ca(e, oa);
        return i.createElement(
          "svg",
          Ca(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 48 40",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          la ||
            (la = i.createElement(
              "defs",
              null,
              i.createElement(
                "style",
                null,
                ".cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}"
              ),
              i.createElement(
                "clipPath",
                { id: "clip-path", transform: "translate(0 -4)" },
                i.createElement("rect", {
                  className: "cls-1",
                  width: 48,
                  height: 48,
                })
              )
            )),
          ra ||
            (ra = i.createElement(
              "g",
              { id: "Layer_2", "data-name": "Layer 2" },
              i.createElement(
                "g",
                { id: "Layer_1-2", "data-name": "Layer 1" },
                i.createElement(
                  "g",
                  { className: "cls-2" },
                  i.createElement("path", {
                    className: "cls-3",
                    d: "M48,23.56a5.3,5.3,0,0,0-9-3.8,27.38,27.38,0,0,0-13.95-4.09l3-9.34,8,1.88v.12a4.38,4.38,0,1,0,.31-1.57l-8.66-2a.74.74,0,0,0-.88.5L23.51,15.64a27.75,27.75,0,0,0-14.6,4.05A5.28,5.28,0,1,0,2.63,28.1a9.72,9.72,0,0,0-.17,1.71C2.46,37.64,12.08,44,23.9,44s21.44-6.36,21.44-14.19a9.86,9.86,0,0,0-.15-1.62A5.26,5.26,0,0,0,48,23.56ZM13.55,27.19a3.17,3.17,0,1,1,3.17,3.15,3.16,3.16,0,0,1-3.17-3.15Zm18.12,9.34c-1.59,1.58-4.09,2.36-7.64,2.36H24c-3.55,0-6-.78-7.64-2.36a.74.74,0,1,1,1.05-1.05c1.3,1.3,3.46,1.92,6.59,1.92H24c3.13,0,5.29-.63,6.59-1.92a.74.74,0,1,1,1.05,1.05Zm-.37-6.19a3.15,3.15,0,1,1,3.16-3.15A3.16,3.16,0,0,1,31.3,30.34Z",
                    transform: "translate(0 -4)",
                  })
                )
              )
            ))
        );
      }
      var pa,
        da = i.forwardRef(sa),
        La = (a.p, ["title", "titleId"]);
      function ha() {
        return (
          (ha =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          ha.apply(this, arguments)
        );
      }
      function fa(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function ma(e, t) {
        var a = e.title,
          l = e.titleId,
          r = fa(e, La);
        return i.createElement(
          "svg",
          ha(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          pa ||
            (pa = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.05546 5.05546C3.57118 4.53973 4.27065 4.25 5 4.25H19C19.7293 4.25 20.4288 4.53973 20.9445 5.05546C21.4603 5.57118 21.75 6.27065 21.75 7V17C21.75 17.7293 21.4603 18.4288 20.9445 18.9445C20.4288 19.4603 19.7293 19.75 19 19.75H5C4.27065 19.75 3.57118 19.4603 3.05546 18.9445C2.53973 18.4288 2.25 17.7293 2.25 17V7C2.25 6.27065 2.53973 5.57118 3.05546 5.05546ZM5 5.75C4.66848 5.75 4.35054 5.8817 4.11612 6.11612C3.8817 6.35054 3.75 6.66848 3.75 7V17C3.75 17.3315 3.8817 17.6495 4.11612 17.8839C4.35054 18.1183 4.66848 18.25 5 18.25H19C19.3315 18.25 19.6495 18.1183 19.8839 17.8839C20.1183 17.6495 20.25 17.3315 20.25 17V7C20.25 6.66848 20.1183 6.35054 19.8839 6.11612C19.6495 5.8817 19.3315 5.75 19 5.75H5ZM6.41435 8.53148C6.67311 8.20803 7.14507 8.15559 7.46852 8.41435L11.2185 11.4143L11.2188 11.4145C11.4405 11.592 11.716 11.6888 12 11.6888C12.284 11.6888 12.5595 11.592 12.7812 11.4145L12.7815 11.4143L16.5315 8.41435C16.8549 8.15559 17.3269 8.20803 17.5857 8.53148C17.8444 8.85493 17.792 9.32689 17.4685 9.58565L13.7188 12.5855C13.231 12.976 12.6248 13.1888 12 13.1888C11.3752 13.1888 10.769 12.976 10.2812 12.5855L6.53148 9.58565C6.20803 9.32689 6.15559 8.85493 6.41435 8.53148Z",
              fill: "#1B1F26",
            }))
        );
      }
      var ua = i.forwardRef(ma),
        ya = (a.p, a(361), a(106)),
        Ea = a.n(ya),
        ba = E.a.Footer;
      function ja() {
        var e = h(),
          t = e.deviceType,
          a = e.isMobile,
          l = Object(i.useMemo)(function () {
            return Object(Ce.jsx)("span", {
              className: "footer-copyrights",
              children: "Copyrights \xa9 2023 PsstCrypto. All rights reserved.",
            });
          }, []),
          r = Object(i.useCallback)(function (e) {
            Ze(Ee.FOOTER, "Click ".concat(e));
          }, []);
        return Object(Ce.jsx)(ba, {
          className: "footer-container ".concat(t),
          children: Object(Ce.jsxs)(Mt, {
            children: [
              Object(Ce.jsxs)("div", {
                className: "footer-body",
                children: [
                  Object(Ce.jsxs)("div", {
                    className: "footer-newsletter",
                    children: [
                      Object(Ce.jsx)(ne, {}),
                      Object(Ce.jsx)("div", {
                        className: "footer-newsletter-title",
                        children: "Subscribe to our newsletter",
                      }),
                      Object(Ce.jsx)(bt, {}),
                      Object(Ce.jsx)("div", {
                        className: "footer-newsletter-title",
                        children: "Contact Us",
                      }),
                      Object(Ce.jsxs)(ht, {
                        type: "secondary",
                        href: "mailto:cyn@psstcrypto.com",
                        className: "mail-link",
                        onClick: function () {
                          r("cyn@psstcrypto.com");
                        },
                        children: [
                          Object(Ce.jsx)(ua, {}),
                          " cyn@psstcrypto.com",
                        ],
                      }),
                    ],
                  }),
                  Object(Ce.jsx)(L, {
                    children: Object(Ce.jsxs)("div", {
                      className: "footer-columns",
                      children: [
                        Object(Ce.jsx)("div", {
                          className: "footer-column academy",
                          children: Object(Ce.jsx)("div", {
                            className: "footer-column-item",
                            children: Object(Ce.jsx)(ht, {
                              type: "secondary",
                              href: " ",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              onClick: function () {
                                r("academy");
                              },
                              children: "Academy",
                            }),
                          }),
                        }),
                        Object(Ce.jsxs)("div", {
                          className: "footer-column",
                          children: [
                            Object(Ce.jsx)("h3", { children: "Products" }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: "https://trade-psst-crypto.vercel.app",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r("Crypto futures");
                                },
                                children: "Crypto Futures",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: "https://trade-psst-crypto.vercel.app/",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r("Futures");
                                },
                                children: "Futures",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: "https://trade-psst-crypto.vercel.app/",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r("Decentralized Oracle");
                                },
                                children: "Decentralized Oracles",
                              }),
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("div", {
                          className: "footer-column resources",
                          children: [
                            Object(Ce.jsx)("h3", { children: "Resources" }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: "",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r("FAQs");
                                },
                                children: "FAQs",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: " ",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r(" -whitepaper");
                                },
                                children: "  White Paper",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: " ",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r(" -audit-report");
                                },
                                children: "  Audit Report",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              children: Object(Ce.jsx)(ht, {
                                type: "secondary",
                                href: "-whitepaper.pdf",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: function () {
                                  r("whitepaper");
                                },
                                children: "  White Paper",
                              }),
                            }),
                            Object(Ce.jsx)("div", {
                              className: "footer-column-item",
                              onClick: function () {
                                r("Legacy");
                              },
                              children: Object(Ce.jsx)(Oe.a, {
                                children: Object(Ce.jsxs)(
                                  Ea.a,
                                  {
                                    className: "legacy",
                                    popupClassName: "legacy-popup",
                                    title: Object(Ce.jsx)(Ce.Fragment, {
                                      children: "Legacy",
                                    }),
                                    children: [
                                      Object(Ce.jsx)(
                                        Oe.a.Item,
                                        {
                                          children: Object(Ce.jsx)("a", {
                                            href: "- -techpaper.pdf",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: "  Tech Paper",
                                          }),
                                        },
                                        "techPaper"
                                      ),
                                      Object(Ce.jsx)(
                                        Oe.a.Item,
                                        {
                                          children: Object(Ce.jsx)("a", {
                                            href: " ",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: " Audit Report",
                                          }),
                                        },
                                        "auditReport"
                                      ),
                                      Object(Ce.jsx)(
                                        Oe.a.Item,
                                        {
                                          children: Object(Ce.jsx)("a", {
                                            href: "/",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: " Dapp",
                                          }),
                                        },
                                        "whitePaper"
                                      ),
                                    ],
                                  },
                                  "legacy"
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(Ce.jsx)(d, {
                    children: Object(Ce.jsxs)("div", {
                      className: "social-list",
                      children: [
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "twitter",
                            });
                          },
                          className: "social-icon",
                          href: "https://twitter.com/",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: Object(Ce.jsx)(Ft, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "telegram",
                            });
                          },
                          rel: "noreferrer",
                          target: "_blank",
                          className: "social-icon",
                          href: "https://t.me/",
                          children: Object(Ce.jsx)($t, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "discord",
                            });
                          },
                          className: "social-icon",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          href: "https://discord.gg/",
                          children: Object(Ce.jsx)(Ht, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "medium",
                            });
                          },
                          className: "social-icon",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          href: "https://medium.com",
                          children: Object(Ce.jsx)(Ut, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "github",
                            });
                          },
                          className: "social-icon",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          href: "https://github.com",
                          children: Object(Ce.jsx)(Yt, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "youtube",
                            });
                          },
                          rel: "noreferrer",
                          target: "_blank",
                          className: "social-icon",
                          href: "https://www.youtube.com/channel/UCRHA7TThDHr7hGxtvM5_3vQ",
                          children: Object(Ce.jsx)(na, {}),
                        }),
                        Object(Ce.jsx)("a", {
                          onClick: function () {
                            o.a.event({
                              category: "Home page",
                              action: "Click social",
                              label: "Reddit",
                            });
                          },
                          rel: "noreferrer",
                          target: "_blank",
                          className: "social-icon",
                          href: "https://www.reddit.com/r",
                          children: Object(Ce.jsx)(da, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(Ce.jsxs)("div", {
                className: "footer-bottom",
                children: [
                  l,
                  !a &&
                    Object(Ce.jsxs)("div", {
                      className: "links",
                      children: [
                        Object(Ce.jsx)(ht, {
                          type: "secondary",
                          href: "/policy",
                          children: "Privacy Policy",
                        }),
                        Object(Ce.jsx)(ht, {
                          type: "secondary",
                          href: "/terms",
                          children: "Terms of Service",
                        }),
                        Object(Ce.jsx)(ht, {
                          type: "secondary",
                          href: "/cookies",
                          children: "Cookies Notice",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      }
      a(362);
      var Ma = E.a.Content;
      function Oa(e) {
        var t = e.children,
          a = h().deviceType;
        return Object(Ce.jsx)(Ma, {
          className: "main-container ".concat(a),
          children: Object(Ce.jsx)("div", {
            className: "main-body-wrap",
            children: Object(Ce.jsx)("div", {
              className: "main-body",
              children: t,
            }),
          }),
        });
      }
      a(363);
      function Za() {
        var e = h().deviceType;
        return Object(Ce.jsx)(Ce.Fragment, {
          children: Object(Ce.jsxs)(E.a, {
            className: "".concat(e),
            children: [
              Object(Ce.jsx)(dt, {}),
              Object(Ce.jsx)(Oa, { children: Object(Ce.jsx)(C.b, {}) }),
              Object(Ce.jsx)(ja, {}),
            ],
          }),
        });
      }
      function ga() {
        var e = Object(C.g)(),
          t = e.pathname,
          a = e.search;
        return (
          Object(i.useEffect)(
            function () {
              o.a.pageview("".concat(t).concat(a));
            },
            [t, a]
          ),
          null
        );
      }
      a(364);
      var xa,
        wa,
        va,
        Fa,
        Ba,
        _a,
        ka,
        Va,
        Sa,
        Ha,
        Na,
        Da,
        Aa,
        Pa,
        Ta,
        Ua,
        Ia,
        Ga,
        Ra,
        Wa,
        za,
        Ya,
        qa,
        Qa,
        Ja,
        Ka,
        Xa,
        $a,
        ei,
        ti,
        ai,
        ii,
        li,
        ri,
        ni,
        oi,
        Ci,
        ci,
        si,
        pi,
        di,
        Li,
        hi,
        fi,
        mi,
        ui,
        yi,
        Ei,
        bi,
        ji,
        Mi,
        Oi,
        Zi,
        gi,
        xi,
        wi,
        vi,
        Fi,
        Bi,
        _i,
        ki,
        Vi,
        Si,
        Hi,
        Ni,
        Di,
        Ai,
        Pi,
        Ti,
        Ui,
        Ii,
        Gi,
        Ri,
        Wi,
        zi,
        Yi,
        qi,
        Qi,
        Ji,
        Ki,
        Xi,
        $i,
        el,
        tl,
        al,
        il,
        ll,
        rl,
        nl,
        ol,
        Cl,
        cl,
        sl,
        pl,
        dl,
        Ll,
        hl,
        fl,
        ml,
        ul,
        yl,
        El,
        bl,
        jl,
        Ml,
        Ol,
        Zl,
        gl,
        xl,
        wl,
        vl,
        Fl,
        Bl,
        _l,
        kl,
        Vl,
        Sl,
        Hl,
        Nl,
        Dl,
        Al,
        Pl,
        Tl,
        Ul,
        Il,
        Gl,
        Rl,
        Wl,
        zl,
        Yl,
        ql,
        Ql,
        Jl,
        Kl,
        Xl,
        $l,
        er,
        tr,
        ar,
        ir,
        lr,
        rr,
        nr,
        or,
        Cr,
        cr,
        sr,
        pr,
        dr,
        Lr,
        hr,
        fr,
        mr,
        ur,
        yr,
        Er,
        br,
        jr,
        Mr,
        Or,
        Zr,
        gr,
        xr,
        wr,
        vr,
        Fr,
        Br,
        _r,
        kr,
        Vr,
        Sr,
        Hr,
        Nr,
        Dr,
        Ar,
        Pr,
        Tr,
        Ur,
        Ir,
        Gr,
        Rr,
        Wr,
        zr,
        Yr,
        qr,
        Qr,
        Jr,
        Kr,
        Xr,
        $r,
        en,
        tn,
        an,
        ln,
        rn,
        nn,
        on,
        Cn,
        cn,
        sn,
        pn,
        dn,
        Ln,
        hn,
        fn,
        mn,
        un,
        yn,
        En,
        bn,
        jn,
        Mn,
        On,
        Zn,
        gn,
        xn,
        wn,
        vn,
        Fn,
        Bn,
        _n,
        kn,
        Vn,
        Sn,
        Hn,
        Nn,
        Dn,
        An,
        Pn,
        Tn,
        Un,
        In,
        Gn,
        Rn,
        Wn,
        zn,
        Yn,
        qn,
        Qn,
        Jn,
        Kn,
        Xn,
        $n,
        eo,
        to,
        ao,
        io,
        lo,
        ro,
        no,
        oo,
        Co,
        co,
        so,
        po,
        Lo,
        ho,
        fo,
        mo,
        uo,
        yo,
        Eo,
        bo,
        jo,
        Mo,
        Oo,
        Zo,
        go,
        xo,
        wo,
        vo,
        Fo,
        Bo,
        _o,
        ko,
        Vo,
        So,
        Ho,
        No,
        Do,
        Ao,
        Po,
        To,
        Uo,
        Io,
        Go,
        Ro,
        Wo,
        zo,
        Yo,
        qo,
        Qo,
        Jo,
        Ko,
        Xo,
        $o,
        eC,
        tC,
        aC,
        iC,
        lC,
        rC,
        nC,
        oC,
        CC,
        cC,
        sC,
        pC,
        dC,
        LC,
        hC,
        fC,
        mC,
        uC,
        yC,
        EC,
        bC,
        jC,
        MC,
        OC,
        ZC,
        gC,
        xC,
        wC,
        vC,
        FC,
        BC,
        _C,
        kC,
        VC,
        SC,
        HC,
        NC,
        DC,
        AC,
        PC,
        TC,
        UC,
        IC,
        GC,
        RC,
        WC,
        zC,
        YC,
        qC,
        QC,
        JC,
        KC,
        XC,
        $C,
        ec,
        tc,
        ac,
        ic,
        lc,
        rc,
        nc,
        oc,
        Cc,
        cc,
        sc,
        pc,
        dc,
        Lc,
        hc,
        fc,
        mc,
        uc,
        yc,
        Ec,
        bc,
        jc,
        Mc,
        Oc,
        Zc,
        gc,
        xc,
        wc,
        vc,
        Fc,
        Bc,
        _c,
        kc,
        Vc,
        Sc,
        Hc,
        Nc,
        Dc,
        Ac,
        Pc,
        Tc,
        Uc,
        Ic,
        Gc,
        Rc,
        Wc,
        zc,
        Yc,
        qc,
        Qc,
        Jc,
        Kc,
        Xc,
        $c,
        es,
        ts,
        as,
        is,
        ls,
        rs,
        ns,
        os,
        Cs,
        cs,
        ss,
        ps,
        ds,
        Ls,
        hs = a(157),
        fs = a.n(hs),
        ms = ["title", "titleId"];
      function us() {
        return (
          (us =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          us.apply(this, arguments)
        );
      }
      function ys(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Es(e, t) {
        var a = e.title,
          l = e.titleId,
          r = ys(e, ms);
        return i.createElement(
          "svg",
          us(
            {
              width: 526,
              height: 818,
              viewBox: "0 0 526 818",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          i.createElement(
            "g",
            { clipPath: "url(#clip0_61_2)" },
            xa ||
              (xa = i.createElement("path", {
                d: "M202.14 817.07C218.57 817.07 231.89 813.936 231.89 810.07C231.89 806.204 218.57 803.07 202.14 803.07C185.709 803.07 172.39 806.204 172.39 810.07C172.39 813.936 185.709 817.07 202.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            wa ||
              (wa = i.createElement("path", {
                d: "M202.14 817.07C218.57 817.07 231.89 813.936 231.89 810.07C231.89 806.204 218.57 803.07 202.14 803.07C185.709 803.07 172.39 806.204 172.39 810.07C172.39 813.936 185.709 817.07 202.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            va ||
              (va = i.createElement("path", {
                d: "M202.14 817.07C218.57 817.07 231.89 813.936 231.89 810.07C231.89 806.204 218.57 803.07 202.14 803.07C185.709 803.07 172.39 806.204 172.39 810.07C172.39 813.936 185.709 817.07 202.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Fa ||
              (Fa = i.createElement("path", {
                d: "M202.14 815.32C214.224 815.32 224.02 812.97 224.02 810.07C224.02 807.171 214.224 804.82 202.14 804.82C190.056 804.82 180.26 807.171 180.26 810.07C180.26 812.97 190.056 815.32 202.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ba ||
              (Ba = i.createElement("path", {
                d: "M202.14 815.32C214.224 815.32 224.02 812.97 224.02 810.07C224.02 807.171 214.224 804.82 202.14 804.82C190.056 804.82 180.26 807.171 180.26 810.07C180.26 812.97 190.056 815.32 202.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            _a ||
              (_a = i.createElement("path", {
                d: "M202.14 815.32C214.224 815.32 224.02 812.97 224.02 810.07C224.02 807.171 214.224 804.82 202.14 804.82C190.056 804.82 180.26 807.171 180.26 810.07C180.26 812.97 190.056 815.32 202.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            ka ||
              (ka = i.createElement("path", {
                d: "M202.14 812.7C210.358 812.7 217.02 811.523 217.02 810.07C217.02 808.617 210.358 807.44 202.14 807.44C193.922 807.44 187.26 808.617 187.26 810.07C187.26 811.523 193.922 812.7 202.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Va ||
              (Va = i.createElement("path", {
                d: "M202.14 812.7C210.358 812.7 217.02 811.523 217.02 810.07C217.02 808.617 210.358 807.44 202.14 807.44C193.922 807.44 187.26 808.617 187.26 810.07C187.26 811.523 193.922 812.7 202.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Sa ||
              (Sa = i.createElement("path", {
                d: "M202.14 812.7C210.358 812.7 217.02 811.523 217.02 810.07C217.02 808.617 210.358 807.44 202.14 807.44C193.922 807.44 187.26 808.617 187.26 810.07C187.26 811.523 193.922 812.7 202.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ha ||
              (Ha = i.createElement("path", {
                d: "M260.14 817.07C276.57 817.07 289.89 813.936 289.89 810.07C289.89 806.204 276.57 803.07 260.14 803.07C243.709 803.07 230.39 806.204 230.39 810.07C230.39 813.936 243.709 817.07 260.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Na ||
              (Na = i.createElement("path", {
                d: "M260.14 817.07C276.57 817.07 289.89 813.936 289.89 810.07C289.89 806.204 276.57 803.07 260.14 803.07C243.709 803.07 230.39 806.204 230.39 810.07C230.39 813.936 243.709 817.07 260.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Da ||
              (Da = i.createElement("path", {
                d: "M260.14 817.07C276.57 817.07 289.89 813.936 289.89 810.07C289.89 806.204 276.57 803.07 260.14 803.07C243.709 803.07 230.39 806.204 230.39 810.07C230.39 813.936 243.709 817.07 260.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Aa ||
              (Aa = i.createElement("path", {
                d: "M260.14 815.32C272.224 815.32 282.02 812.97 282.02 810.07C282.02 807.171 272.224 804.82 260.14 804.82C248.056 804.82 238.26 807.171 238.26 810.07C238.26 812.97 248.056 815.32 260.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Pa ||
              (Pa = i.createElement("path", {
                d: "M260.14 815.32C272.224 815.32 282.02 812.97 282.02 810.07C282.02 807.171 272.224 804.82 260.14 804.82C248.056 804.82 238.26 807.171 238.26 810.07C238.26 812.97 248.056 815.32 260.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ta ||
              (Ta = i.createElement("path", {
                d: "M260.14 815.32C272.224 815.32 282.02 812.97 282.02 810.07C282.02 807.171 272.224 804.82 260.14 804.82C248.056 804.82 238.26 807.171 238.26 810.07C238.26 812.97 248.056 815.32 260.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ua ||
              (Ua = i.createElement("path", {
                d: "M260.14 812.7C268.358 812.7 275.02 811.523 275.02 810.07C275.02 808.617 268.358 807.44 260.14 807.44C251.922 807.44 245.26 808.617 245.26 810.07C245.26 811.523 251.922 812.7 260.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ia ||
              (Ia = i.createElement("path", {
                d: "M260.14 812.7C268.358 812.7 275.02 811.523 275.02 810.07C275.02 808.617 268.358 807.44 260.14 807.44C251.922 807.44 245.26 808.617 245.26 810.07C245.26 811.523 251.922 812.7 260.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ga ||
              (Ga = i.createElement("path", {
                d: "M260.14 812.7C268.358 812.7 275.02 811.523 275.02 810.07C275.02 808.617 268.358 807.44 260.14 807.44C251.922 807.44 245.26 808.617 245.26 810.07C245.26 811.523 251.922 812.7 260.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ra ||
              (Ra = i.createElement("path", {
                d: "M318.14 817.07C334.571 817.07 347.89 813.936 347.89 810.07C347.89 806.204 334.571 803.07 318.14 803.07C301.71 803.07 288.39 806.204 288.39 810.07C288.39 813.936 301.71 817.07 318.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Wa ||
              (Wa = i.createElement("path", {
                d: "M318.14 817.07C334.571 817.07 347.89 813.936 347.89 810.07C347.89 806.204 334.571 803.07 318.14 803.07C301.71 803.07 288.39 806.204 288.39 810.07C288.39 813.936 301.71 817.07 318.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            za ||
              (za = i.createElement("path", {
                d: "M318.14 817.07C334.571 817.07 347.89 813.936 347.89 810.07C347.89 806.204 334.571 803.07 318.14 803.07C301.71 803.07 288.39 806.204 288.39 810.07C288.39 813.936 301.71 817.07 318.14 817.07Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ya ||
              (Ya = i.createElement("path", {
                d: "M318.14 815.32C330.224 815.32 340.02 812.97 340.02 810.07C340.02 807.171 330.224 804.82 318.14 804.82C306.056 804.82 296.26 807.171 296.26 810.07C296.26 812.97 306.056 815.32 318.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            qa ||
              (qa = i.createElement("path", {
                d: "M318.14 815.32C330.224 815.32 340.02 812.97 340.02 810.07C340.02 807.171 330.224 804.82 318.14 804.82C306.056 804.82 296.26 807.171 296.26 810.07C296.26 812.97 306.056 815.32 318.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Qa ||
              (Qa = i.createElement("path", {
                d: "M318.14 815.32C330.224 815.32 340.02 812.97 340.02 810.07C340.02 807.171 330.224 804.82 318.14 804.82C306.056 804.82 296.26 807.171 296.26 810.07C296.26 812.97 306.056 815.32 318.14 815.32Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ja ||
              (Ja = i.createElement("path", {
                d: "M318.14 812.7C326.358 812.7 333.02 811.523 333.02 810.07C333.02 808.617 326.358 807.44 318.14 807.44C309.922 807.44 303.26 808.617 303.26 810.07C303.26 811.523 309.922 812.7 318.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Ka ||
              (Ka = i.createElement("path", {
                d: "M318.14 812.7C326.358 812.7 333.02 811.523 333.02 810.07C333.02 808.617 326.358 807.44 318.14 807.44C309.922 807.44 303.26 808.617 303.26 810.07C303.26 811.523 309.922 812.7 318.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            Xa ||
              (Xa = i.createElement("path", {
                d: "M318.14 812.7C326.358 812.7 333.02 811.523 333.02 810.07C333.02 808.617 326.358 807.44 318.14 807.44C309.922 807.44 303.26 808.617 303.26 810.07C303.26 811.523 309.922 812.7 318.14 812.7Z",
                fill: "#C4C4C4",
                fillOpacity: 0.18,
              })),
            $a ||
              ($a = i.createElement("path", {
                d: "M42.2801 361.47C-22.2399 242.78 21.6701 94.26 140.39 29.74C259.11 -34.78 407.6 9.14001 472.12 127.83C536.64 246.52 492.7 395.07 374.01 459.56C255.32 524.05 106.8 480.16 42.2801 361.47Z",
                fill: "url(#paint0_radial_61_2)",
                fillOpacity: 0.75,
              })),
            ei ||
              (ei = i.createElement(
                "g",
                { opacity: 0.67 },
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M119.39 386.48L116.88 386.73C117.17 386.24 117.42 385.73 117.77 385.18C116.72 384.45 114.96 384.18 115.53 382.25C114.58 381.25 114.01 379.65 112.46 379.68C110.514 379.689 108.642 378.939 107.24 377.59C106.3 378.69 106.42 379.59 107.52 379.99C108.88 380.48 110.14 380.99 110.72 382.52C110.9 382.99 111.61 383.26 112.18 383.52C112.436 383.598 112.671 383.731 112.87 383.91C113.066 384.09 113.222 384.307 113.33 384.55C113.431 384.797 113.479 385.063 113.47 385.33C113.463 385.597 113.398 385.86 113.28 386.1L107.18 385.86L109.18 383.71C105.74 383.76 102.57 383.11 99.71 385.26L99.33 384.85C99.49 384.4 99.7085 383.973 99.98 383.58C101.24 382.22 101.16 381.71 99.44 381.07C99.03 380.92 98.59 380.86 98.17 380.74C96.98 380.4 96.98 380.4 96.37 378.8C95.85 379.08 95.29 379.25 94.6 379.55L94.54 378.35C94.07 378.46 93.6 378.62 93.12 378.69C92.6004 378.72 92.0796 378.72 91.56 378.69L92.63 381.07L92.35 381.3L89.76 378.52C88.96 378.52 88.01 378.52 87.06 378.44V377.96L88.19 377.34L85.61 374.73C83.87 373.63 82.68 375.59 80.86 375.99C80.8608 374.988 80.9175 373.986 81.03 372.99C81.03 372.78 81.67 372.64 82.03 372.53H81.98C81.86 370.79 81.9 369.05 79.69 368.32C78.23 367.89 78.99 366.43 79.03 365.43C78.7504 365.306 78.4452 365.251 78.14 365.27C77.8358 365.289 77.5407 365.382 77.28 365.54C77.0151 365.695 76.7946 365.915 76.64 366.18C76.4804 366.444 76.3877 366.742 76.37 367.05C75.7709 366.189 75.0384 365.43 74.2 364.8C73.87 364.63 73 365.53 72.36 365.94C73.45 367.07 75.14 367.62 75.51 369.48C75.59 369.87 76.51 370.1 77.35 370.61C76.65 370.85 76.18 371.24 75.87 371.08C74.62 370.53 73.42 369.82 72.2 369.16C69.93 367.93 67.73 366.59 65.39 365.55C64.8872 365.311 64.4515 364.951 64.1217 364.503C63.7919 364.054 63.5783 363.531 63.5 362.98C63.0017 361.489 62.2059 360.115 61.1608 358.941C60.1156 357.767 58.843 356.818 57.42 356.15C56.8469 355.987 56.2557 355.896 55.66 355.88C57.29 357.78 59.87 358.2 59.79 360.77L55.01 361.29C55.4616 362.05 55.7795 362.882 55.95 363.75C55.88 365.75 56.95 367.09 58.15 368.36C59.01 369.31 60.09 369.96 60.64 371.27C60.96 372.02 61.95 372.5 62.55 373.27C60.98 373.27 59.47 373.27 58.24 372.13C57.97 374.73 57.97 374.73 59.83 376.18L57.23 377.93C59.05 380.46 60.82 383.03 62.74 385.49C63.05 385.9 63.98 385.82 64.81 386.02L64.39 387.76L72 395.88L71 396.06C121 458.06 211.86 498.6 308.32 477.32C315.14 475.83 321.92 473.95 328.59 471.83C335.26 469.71 342.02 467.23 348.59 464.52C355.16 461.81 361.45 458.88 367.59 455.65C373.73 452.42 379.86 448.8 385.74 445.04C391.62 441.28 397.42 437.3 402.98 433.04C408.54 428.78 414.06 424.17 419.29 419.38C424.52 414.59 429.42 409.69 434.14 404.53C438.86 399.37 443.39 394.07 447.61 388.46C451.83 382.85 455.88 377.14 459.61 371.2C463.34 365.26 466.87 359 470.1 352.69C473.33 346.38 476.24 340.09 478.88 333.62C481.52 327.15 484.14 320.93 485.52 314.15L480.52 314.22C481.15 313.45 481.52 313.05 482.01 312.44L479.11 312.38L475.96 315.07L475.57 314.71C475.878 314.28 476.212 313.87 476.57 313.48C476.88 313.19 477.5 313.08 477.63 312.75C478.37 310.85 479.56 310.19 481.69 310.46C482.44 310.54 483.63 309.29 484.17 308.4C484.945 306.899 485.614 305.345 486.17 303.75C485.826 303.252 485.3 302.909 484.706 302.793C484.112 302.677 483.496 302.798 482.99 303.13C481.161 303.862 479.47 304.9 477.99 306.2C477.7 306.5 477.69 307.08 477.5 307.56H479.07L480.58 306.17C480.58 307.48 479.96 307.66 479.08 307.47C478.43 308.94 478.45 310.84 476.14 311.81L476.81 309.81C477.06 309.02 477.29 308.23 477.53 307.44L476.84 307.82C476.53 306.3 476.46 306.24 478.31 304.22C479.405 303.184 480.568 302.222 481.79 301.34L480.66 300.72C481.6 299.23 482.18 297.59 484.01 296.67C484.86 296.21 485.22 294.79 486.12 293.33L483.63 294.4L483.35 294.11L486.84 289.67L486.47 289.28C485.47 289.95 484.53 290.59 483.56 291.28V291.22C482.28 293.55 481.56 293.83 479.62 292.74C480.13 291.86 480.62 290.97 481.13 290.1V290.2H478.92C479.44 289.25 479.69 288.2 480.35 287.74C482.41 286.35 482.51 284.1 483.05 282.06C483.18 281.55 482.22 280.74 481.72 279.99L482.72 278.06C481.677 278.598 480.853 279.482 480.39 280.56C479.82 281.77 479.81 281.76 478.1 281.98C478.49 280.67 478.86 279.38 479.28 278.1C479.378 277.77 479.595 277.488 479.89 277.31C481.55 276.74 481.54 275.19 482 273.71C481.31 273.71 480.67 273.66 479.85 273.65L480.42 271.39C479.882 270.868 479.436 270.26 479.1 269.59C478.86 268.81 479.1 267.87 480.28 268.14C481.88 268.5 481.89 267.37 482.28 266.39C481.984 266.039 481.649 265.723 481.28 265.45C480.741 265.153 480.321 264.68 480.09 264.11C479.871 263.537 479.85 262.907 480.03 262.32C480.217 261.297 480.254 260.253 480.14 259.22C479.95 257.82 480.26 256.78 481.68 256.39C482.61 256.13 482.8 255.7 482.31 254.68C480.31 255.48 478.59 257.58 476.25 256.13L474.54 258.76L474.02 258.57L473.72 256.73L467.96 256.4C470.37 255.4 472.12 253.96 474.74 254.7C475.558 254.97 476.425 255.059 477.28 254.96C478.137 254.861 478.96 254.57 479.69 254.11L476.99 253.66L476.92 253.27C477.59 252.99 478.25 252.69 478.92 252.35C479.484 252.077 479.949 251.634 480.248 251.083C480.548 250.533 480.667 249.902 480.59 249.28C480.449 248.721 480.121 248.227 479.66 247.88C479.198 247.539 478.634 247.362 478.06 247.38C477.38 247.33 476.71 247.17 475.89 247.03C476 245.57 478.03 244.18 475.89 242.72L472.89 245.37L472.44 245.06C472.76 244.57 473.11 244.06 473.44 243.59C474.53 242.16 474.53 242.17 473 240.51L469.82 242.78C470.01 241.01 470.82 239.9 471.82 239.78C473.65 239.51 474.02 238.22 474.44 236.92C475.139 235.243 475.581 233.469 475.75 231.66C475.75 230.05 476.25 228.18 474.86 226.66C474.346 225.956 473.929 225.185 473.62 224.37C472.56 222.37 470.62 221.87 468.72 221.16C468.395 221.055 468.045 221.055 467.72 221.16C466.38 221.61 465.05 222.16 463.61 222.65C465.19 224.12 466.71 223.83 468.26 222.35C468.91 224.57 467.05 225.04 466.08 225.99C465.65 226.43 464.76 226.38 464.08 226.54L463.83 226.09L465.06 224.91C463.47 223.86 462.84 225.35 461.88 225.71C462.74 230.29 465.88 239.13 466.88 240.46C466.95 241.9 467.04 242.83 467.03 243.82C467.062 245.43 466.948 247.04 466.69 248.63C466.33 250.38 465.44 252.03 465.05 253.78C464.743 255.309 464.119 256.756 463.22 258.03C462.948 258.625 462.878 259.292 463.02 259.93C463.152 260.615 463.118 261.321 462.92 261.99L462.28 261.11C461.45 262.24 461.55 262.21 461.82 263.06C462.25 264.45 462.55 265.88 462.89 267.29C463.04 268.02 462.37 269 463.89 269.29C464.28 269.37 464.32 271.12 464.51 272.02C463.768 273.479 462.902 274.871 461.92 276.18C460.758 277.246 459.488 278.188 458.13 278.99C459.54 280.69 458.99 282.16 457.74 283.45C456.29 284.97 456.05 286.83 456.1 288.98C456.749 288.837 457.343 288.51 457.811 288.038C458.28 287.567 458.602 286.97 458.74 286.32C459.05 285.005 459.257 283.667 459.36 282.32L460.42 284.32C462.42 282.64 460.94 279.21 463.83 278.13C464.399 278.904 464.798 279.79 465 280.73C465.205 281.669 465.205 282.641 465 283.58C464.89 284.4 463.72 285.07 462.81 286L463.26 287.95L465.2 288.12C460.04 290.3 459.71 290.59 460.3 292.54C462.19 292.59 462.14 289.37 464.72 290.14L460.6 295.31C460.76 295.84 460.78 295.97 460.82 295.99C461.48 296.13 462.19 296.24 462.82 296.39C463.5 293.99 466.15 291.75 469.32 288.81C469.89 291.4 466.56 291.92 466.7 294.37L470.35 295.76L467.03 299.08V298.99C467.273 301.179 466.688 303.38 465.39 305.16C465.157 305.454 464.99 305.795 464.9 306.16C464.815 306.535 464.815 306.925 464.9 307.3C465.079 308.213 465.02 309.156 464.73 310.04C463.73 312.49 463.25 315.19 461.37 317.44L463.52 316.53C462.99 318.13 460.93 319.01 462.08 320.53L458.17 323.46L460.17 325.34C459.57 326.51 458.97 327.67 458.35 328.79C457.64 330.1 456.53 329.63 455.35 329.65L458.05 331.24L456.72 334.12C453.97 333.38 452.44 334.87 451.04 336.98L452.39 337.72C450.13 340.36 449.05 340.5 447.39 338.16C446.32 339.65 445.96 341.87 443.55 342.06C443.345 341.611 443.314 341.102 443.462 340.632C443.609 340.161 443.926 339.762 444.35 339.51C445.51 338.51 446.35 337.18 448.14 336.86C449.393 336.426 450.455 335.566 451.14 334.43C450.675 334.469 450.215 334.559 449.77 334.7C448.761 335.099 447.685 335.3 446.6 335.29C444.22 335.44 441.72 335.69 439.84 337.53C439.597 337.808 439.31 338.045 438.99 338.23C436.63 339.23 434.25 340.23 431.83 341.23L432.88 338.65L430.31 340.05C431 339.05 431.52 338.34 431.99 337.71L430.88 335.65C433.95 334.52 436.88 333.41 439.8 332.36C443.03 331.21 445.04 328.65 447 326.08C447.547 325.381 447.821 324.506 447.77 323.62C447.26 320.74 448.91 318.19 448.83 315.39C448.83 314.93 449.46 314.39 449.88 314.02C450.45 313.47 451.09 313.02 451.7 312.51L450.91 311.22L451.39 311.05L451.63 312.49L451.46 314.27C454.57 314.41 455.46 311.87 456.59 309.9C457.29 308.72 457.59 307.48 459.14 306.97C459.65 306.78 459.88 305.75 460.24 305.14L458.78 305.66L458.73 305.11C459.23 305.11 459.73 305.18 460.21 305.21L461.43 304.81L462.98 300.28C462.35 300.62 461.65 300.91 461.03 301.2C461.11 302.61 461.11 302.61 459.39 302.71C460.23 302 460.65 301.63 461.11 301.23C459.84 301.16 458.66 300.9 458.41 302.77C458.33 303.37 457.53 303.87 457.06 304.42L456.6 304.16L456.98 301.94C456.496 301.628 455.931 301.462 455.355 301.462C454.779 301.462 454.215 301.628 453.73 301.94C451.73 303.04 451.06 302.94 449.29 301.25L446.95 303.25L448.71 303.18C448.21 303.91 447.83 304.43 447.4 305.12C446.82 304.76 446.14 304.58 445.87 304.12C445.732 303.865 445.659 303.58 445.66 303.29C445.654 303.003 445.716 302.719 445.84 302.46C446.514 301.671 447.311 300.996 448.2 300.46C450.05 299.33 450.04 299.31 449.09 297.22C448.78 296.403 448.532 295.564 448.35 294.71C450.255 292.616 451.335 289.901 451.39 287.07C451.46 285.8 451.34 284.27 453.39 284.27C452.97 283.51 452.32 282.85 452.39 282.34C452.46 281.83 453.33 281.45 454.03 280.85L452.96 280.59L454.22 275.67C454.62 275.67 455.56 275.87 456 275.55C456.542 275.01 456.894 274.308 457 273.55C457.15 272.687 457.241 271.815 457.27 270.94L455.44 274.79C455.13 274.43 454.61 274.11 454.6 273.79C454.553 272.166 454.597 270.54 454.73 268.92C454.9 267.963 455.13 267.018 455.42 266.09L453.68 265.9L453.06 263.16L450.66 262.93C450.208 262.034 449.942 261.054 449.88 260.052C449.819 259.05 449.961 258.045 450.3 257.1L447.3 255.1L448.04 253.79L444.8 254.63C445.48 253.63 445.85 253.02 446.25 252.53C447.68 250.78 447.72 250.53 446.6 248.65C445.98 247.52 444.97 246.5 445.87 245.05C445.17 244.12 444.07 243.73 444.33 241.91C444.59 240.09 443.41 238.13 442.8 236.23C442.597 235.858 442.31 235.539 441.96 235.3C441.16 234.62 440.33 233.97 439.52 233.3C438.35 232.37 437.61 231.36 438.23 229.71C438.391 228.826 438.418 227.922 438.31 227.03C436.61 226.47 435.2 226.53 434.5 228.42C429.23 226.72 429.68 226.76 427.66 223.27C426.667 223.099 425.665 222.979 424.66 222.91C423.66 222.91 422.66 222.97 421.66 223.08C421.5 222.08 421.89 221 420.58 220.5C419.789 220.19 418.938 220.06 418.09 220.12C417.239 220.188 416.414 220.441 415.67 220.86C416.25 221.04 416.6 221.18 416.97 221.26C417.34 221.34 417.79 221.34 418.64 221.43L416.64 226.72L413.64 227.45C414.29 228.87 415.14 228.98 416.12 228.63C417.1 228.28 417.96 227.48 418.66 227.68C419.36 227.88 419.83 229.06 420.39 229.83C420.545 230.028 420.682 230.238 420.8 230.46C418.99 230.39 418.99 230.39 418.18 229.12L414.91 230.62C414.68 230.74 414.26 230.78 414.24 230.98C413.62 233.32 411.69 233.52 409.79 233.84C409.4 233.91 409.08 234.31 408.61 234.65C407.621 233.789 406.922 232.644 406.61 231.37C406.551 230.936 406.37 230.527 406.09 230.19C405.634 229.799 405.312 229.274 405.17 228.69C405.027 228.108 405.072 227.495 405.3 226.94C405.53 225.86 405.01 224.63 404.79 223.35L406.72 221.99L406.58 221.59C405.03 221.84 403.23 221.67 402.01 222.44C400.79 223.21 400.19 224.89 399.19 226.3L397.53 226.04L396.83 225.89L395.69 230.58C396.19 230.94 396.38 231.17 396.6 231.22C397.123 231.31 397.65 231.37 398.18 231.4L399.04 228.76C400.17 229.06 401.25 229.11 401.48 230.64C400.711 231.132 399.999 231.709 399.36 232.36C398.876 233.16 398.483 234.012 398.19 234.9C395.88 232.2 392.59 231.37 390.78 228.69C388.265 229.272 386.035 230.72 384.48 232.78C383.48 233.91 382.43 235 381.33 236.03L382.52 236.96L380.86 239.54C379.54 237.54 377.86 239.66 376.3 238.65L377.4 235.24L375.65 234.04C375.13 233.09 377.57 232.33 375.83 231.1L373.15 235.1C372.82 233.94 372.37 233.24 372.54 232.76C372.816 232.118 372.899 231.409 372.781 230.721C372.662 230.032 372.345 229.392 371.87 228.88C371.03 227.88 370.06 226.93 368.96 225.79L370.31 223.62L367.64 223.09L368.64 221.09C366.3 218.85 366.14 218.76 364.44 218.22C363.83 216.43 366.28 215.99 366.2 214.29C364.87 214.45 363.33 215.05 362.45 212.8C362.343 213.24 362.276 213.688 362.25 214.14C362.47 216.14 362.25 216.77 360.47 217.31C358.47 217.89 357.71 218.81 358.14 220.89C358.22 221.34 357.71 221.89 357.37 222.68C359.14 222.48 359.9 220.8 361.76 221.18C360.14 222.72 358.02 223.84 359.38 226.44C357.99 226.82 356.84 224.79 355.68 226.44V226.35C355.741 227.188 356.085 227.979 356.656 228.595C357.226 229.212 357.99 229.615 358.82 229.74C359.82 229.92 360.82 230.34 360.54 231.86C360.46 232.28 361.08 232.86 361.44 233.35L360.6 234.8C362.71 233.8 364.52 232.95 366.73 231.93L366.24 236.71L367.66 237.24L369.47 240.58C369.75 240.38 370.03 240.2 370.32 240.03C370.475 239.914 370.654 239.833 370.843 239.792C371.032 239.751 371.228 239.751 371.417 239.792C371.607 239.832 371.785 239.913 371.941 240.028C372.097 240.144 372.226 240.291 372.32 240.46C372.82 241.32 372.16 241.94 371.52 242.38C370.88 242.82 370.24 242.94 369.65 243.31C369.363 243.581 369.12 243.895 368.93 244.24C369.8 245.24 371.61 244.02 371.85 245.6C371.869 246.709 371.741 247.815 371.47 248.89C371.99 249.38 373.01 249.89 373.15 250.55C373.194 251.08 373.059 251.608 372.767 252.052C372.475 252.496 372.043 252.83 371.54 253C370.85 253.309 370.302 253.866 370.005 254.561C369.708 255.257 369.685 256.038 369.94 256.75C370.08 257.43 370.2 258.12 370.39 258.75C370.92 260.6 370.23 261.92 368.39 262.75L369.68 260.13C368.437 260.811 367.131 261.37 365.78 261.8C364.53 261.897 363.273 261.863 362.03 261.7L363.29 259.49L359.35 259.55L361.56 257.2L358.15 256.6C357.56 254.19 355.59 255.73 354.15 255.38L353.36 250.72L351.44 249.96C351.76 249.202 352.04 248.427 352.28 247.64C352.573 246.637 352.708 245.595 352.68 244.55C352.418 243.839 351.92 243.239 351.27 242.85C350.826 243.135 350.416 243.47 350.05 243.85C349.42 244.4 348.79 244.98 347.93 245.75L346.48 243.07L343.97 242.39C342.66 243.39 341.35 244.33 340.03 245.31V245.21C340.2 245.464 340.309 245.753 340.35 246.055C340.391 246.358 340.362 246.666 340.265 246.955C340.169 247.245 340.007 247.508 339.793 247.726C339.579 247.943 339.318 248.109 339.03 248.21C338.09 248.936 337.264 249.799 336.58 250.77C335.58 251.9 334.58 253.08 333.25 254.55C333.25 254.68 333.2 255.41 333.2 256.15C333.148 256.561 333.192 256.979 333.33 257.37C334.22 259.02 334.22 259.02 333.68 260.58C332.799 260.841 331.951 261.2 331.15 261.65C329.84 262.54 328.69 263.71 326.72 262.55C327.21 264.26 328.62 263.92 329.35 264.41L327.65 274.02L328.38 274.16L327.77 277.95L324.54 280.31C325.47 281.13 325.86 282.13 324.75 282.95C323.64 283.77 324.2 284.95 323.83 285.95L324.3 286.25C324.95 285.63 325.58 285 326.09 284.49L327.61 284.68C328.07 284.282 328.45 283.8 328.73 283.26C329.008 282.542 329.458 281.904 330.04 281.4C330.628 280.898 331.333 280.554 332.09 280.4C330.77 282.01 329.75 283.93 327.58 284.67C328.93 286.79 327.27 288.81 327.27 290.89C327.27 291.83 325.73 292.75 324.89 293.68L324.42 293.39L324.95 290.85L324.6 290.64C324.231 291.007 323.921 291.429 323.68 291.89C323.29 292.96 323.09 294.1 321.61 294.25C321.3 294.25 320.95 294.77 320.75 295.12C320.2 296.12 319.75 297.12 319.19 298.19C319.82 300.07 321.19 299.24 322.32 299.07L323.26 295.63L326.75 296.9C326.26 298.69 325.49 300.1 323.54 300.64C323.256 300.678 322.983 300.777 322.74 300.93C322.494 301.08 322.28 301.277 322.11 301.51C321.949 301.748 321.831 302.012 321.76 302.29C321.705 302.574 321.705 302.866 321.76 303.15C322.76 302.76 323.58 302.39 324.47 302.08C324.891 301.978 325.28 301.772 325.6 301.48C325.919 301.188 326.16 300.82 326.3 300.41C326.79 299.05 327.84 298.41 329.65 298.27L328.86 301.33C329.941 300.437 331.126 299.678 332.39 299.07C333.71 298.768 335.085 298.799 336.39 299.16C335.01 299.91 333.39 300.37 332.32 301.48C331.15 302.76 330.57 304.57 329.73 306.15C330.34 305.82 330.98 305.56 331.6 305.25L331.78 305.95C331.11 305.95 330.43 306.04 329.78 306.1C328.38 306.6 327.12 307.22 327.55 309.21C326.62 308.96 325.97 308.56 325.35 308.7C325.038 308.79 324.745 308.939 324.49 309.14C324.231 309.34 324.016 309.592 323.86 309.88C323.781 310.038 323.74 310.213 323.74 310.39C323.743 310.565 323.787 310.736 323.87 310.89C323.951 311.045 324.072 311.176 324.22 311.27C324.366 311.369 324.534 311.431 324.71 311.45C325.97 311.73 324.51 312.37 324.99 313.06L328.28 311.66V313.66L335.05 310.29C335.05 312.04 334.05 312.29 333.05 312.6C331.48 313.22 329.7 313.47 328.83 315.38C328.58 315.92 327.36 316.03 326.44 316.38C327.85 318.65 329.89 317.08 331.67 317.15C330.13 319.77 328.78 319.78 325.17 317.31C324.42 318.2 323.29 318.88 323.82 320.51C326.1 320.18 328.3 320.42 329.82 322.62C329.23 324.17 327.56 322.99 326.59 323.84C326.59 324.96 326.59 326.05 328.38 325.84C328.594 325.795 328.816 325.795 329.03 325.84C329.248 325.881 329.456 325.966 329.64 326.09C329.825 326.217 329.982 326.38 330.1 326.57C330.216 326.76 330.294 326.97 330.33 327.19C330.46 328.19 331.1 328.38 331.89 328.61C333.18 329 334.42 329.51 335.96 330.09C334.399 330.846 332.763 331.439 331.08 331.86C330 332 328.81 331.32 327.38 330.93L326.96 332.31C327.85 332.63 328.76 332.88 329.63 333.24C330.5 333.6 330.78 334.24 330.09 335.04L326.96 336.74L327.96 334.4L326.96 332.23C325.285 333.351 323.256 333.817 321.26 333.54C319.46 333.28 318.32 334.69 318.37 336.98C321.85 336.98 324.37 338.63 326.37 342.04C325.778 341.952 325.198 341.798 324.64 341.58C322.33 340.19 321.86 340.3 320.36 342.75C321.47 343.98 322.27 345.58 324.28 345.89C322.47 347.39 321.78 347.38 319.63 346.03L318.56 348.24L313.5 347.07C313.231 347.151 312.983 347.287 312.77 347.47C312.39 347.89 311.72 348.63 311.84 348.84C312.22 349.369 312.754 349.767 313.37 349.98C314 350.24 314.83 350.11 315.37 350.47C315.804 350.776 316.314 350.956 316.843 350.989C317.373 351.023 317.901 350.909 318.37 350.66C318.82 350.452 319.332 350.427 319.8 350.59C320.268 350.757 320.655 351.097 320.88 351.54C321.88 353.61 322.58 355.82 323.48 358.15L319.13 355.42C318.56 355.55 317.91 355.88 317.85 354.7L319.1 355.51C320.71 354.27 319.1 352.98 319.57 351.57C317.756 351.669 316.053 352.477 314.83 353.82L314.07 352.82L312.23 354.33C312.03 354.22 311.79 354.1 311.57 353.96C310.658 353.296 309.714 352.679 308.74 352.11C307.488 351.508 306.444 350.547 305.74 349.35C307.14 348.18 308.23 350.56 310 349.49C308.27 348.57 306.76 347.36 305.14 347.13C304.458 347.112 303.81 346.83 303.332 346.343C302.855 345.856 302.585 345.202 302.58 344.52L299.26 346.98C299.154 346.318 299.087 345.65 299.06 344.98C299.143 344.552 299.256 344.131 299.4 343.72C299.77 342.13 299.4 341.26 298.45 341.09C297.893 341.05 297.341 341.22 296.903 341.566C296.464 341.912 296.171 342.409 296.08 342.96C296 343.28 295.96 343.63 295.86 344.1L293.34 344.24C294.34 346.24 293.41 347.09 291.26 347.34V345.34L289.41 345.2C289.41 343.7 290.6 342.34 289.65 340.84C287.79 342.49 287.47 344.63 287.16 346.84L288.63 348.18C288.2 349.65 286.13 349.78 283.48 348.52C283.978 348.079 284.443 347.601 284.87 347.09C285.15 346.71 285.49 346.09 285.38 345.75C285.05 344.97 284.38 345.27 283.84 345.62C283.627 345.752 283.406 345.872 283.18 345.98C281.89 344.29 280.32 343.84 279.18 345.37C277.72 347.21 276.44 346.7 274.69 345.81L276.04 343.65C274.78 343.39 274.78 343.39 273.23 345.43C272.112 345.109 270.961 344.911 269.8 344.84C268.59 344.84 267.43 345.41 266.05 344.73C266.254 344.29 266.58 343.919 266.99 343.66C267.4 343.401 267.875 343.265 268.36 343.27C270.75 343.13 272.41 341.66 274.25 340.52C274.98 340.12 275.52 339.24 276.72 339.77V341.56L280.57 339.7L282.85 335.76C282.254 335.7 281.653 335.789 281.1 336.02C280.547 336.251 280.059 336.615 279.68 337.08C278.4 338.35 277.21 338.43 275.2 337.88L275.99 334.57L278.42 333.57C276.42 332.21 272.66 333.2 272.02 335.25C271.79 335.98 272.36 336.97 272.61 338.03C271.37 339.75 269.3 338.09 267.61 338.82C266.09 339.49 264.24 339.42 262.2 339.82C262.99 338.4 265.09 338.02 263.95 336.02C262.65 337.25 260.78 337.63 260.17 339.7C259.85 340.79 258.63 340.53 257.51 340.18C257.536 339.524 257.734 338.886 258.085 338.331C258.437 337.776 258.928 337.324 259.51 337.02C260.51 336.35 261.38 335.57 262.72 334.53L258.94 333.53L259.57 331.74L255.19 330.07C255.765 329.688 256.37 329.353 257 329.07C259.888 328.046 263.005 327.848 266 328.5C267.036 328.56 268.076 328.479 269.09 328.26L267.09 325.39C264.73 324.55 262.8 323.86 260.87 323.2C260.489 322.987 260.065 322.864 259.63 322.84C257.49 323.16 256.46 321.53 255.44 320.2C253.91 318.27 252.83 317.99 251.14 319.62C250.877 319.911 250.634 320.218 250.41 320.54C248.28 319.54 246.77 320.29 245.61 322.19C244.91 323.35 243.37 323.86 243.27 325.54C243.14 327.93 243.46 328.36 246.09 328.46C246.15 330.02 245.09 331.61 246.09 333.18C246.101 333.344 246.071 333.509 246.003 333.659C245.935 333.809 245.831 333.94 245.7 334.04C245.48 334.12 244.62 334.11 244.56 333.95C243.82 331.82 241.51 332.44 240.17 331.42C240.11 331.31 239.74 331.52 239.53 331.6C238.63 331.9 237.74 332.21 237.08 332.45L234.64 335.45C233.64 334.66 232.81 333.67 231.38 334.7C231.188 334.811 230.971 334.869 230.75 334.87C230.525 334.874 230.303 334.82 230.105 334.713C229.907 334.606 229.74 334.45 229.62 334.26C229.499 334.068 229.43 333.847 229.42 333.62C229.26 332.62 229.8 332.28 230.74 332.08C231.645 331.825 232.513 331.452 233.32 330.97L240.92 326.84C239.22 324.84 237.1 327.76 235.43 326.01C236.65 324.32 238.77 325.36 240.34 324.23C239.514 323.691 238.534 323.439 237.55 323.51C236.569 323.582 235.639 323.979 234.91 324.64C231.97 327.07 229.43 325.87 226.62 324.49L228.37 322.49C225.471 322.453 222.702 321.279 220.66 319.22C220.312 318.826 219.877 318.517 219.39 318.32C218.901 318.129 218.372 318.06 217.85 318.12C217.178 318.099 216.508 318.018 215.85 317.88L218.22 316.59C217.821 315.706 217.245 314.912 216.528 314.259C215.811 313.605 214.968 313.105 214.05 312.79C212.05 312.28 210.05 311.64 207.96 311.04V308.73C207.73 308.57 207.67 308.47 207.6 308.47C204.75 308.79 201.93 307.64 198.52 308.56C198.45 308.45 198.7 308.9 198.6 309.1C198.334 309.589 197.906 309.971 197.39 310.18C197.06 310.25 196.23 309.73 196.24 309.47C196.256 308.887 196.5 308.334 196.92 307.93C198.53 306.5 200.23 305.17 202.15 303.6L201.76 299.92C202.263 299.862 202.772 299.878 203.27 299.97C204.668 300.487 206.199 300.522 207.62 300.07C209.238 299.791 210.884 299.72 212.52 299.86C212.696 299.861 212.87 299.898 213.03 299.97C213.191 300.041 213.332 300.151 213.44 300.29C214.26 301.92 215.65 301.66 217.08 301.56C217.944 301.401 218.834 301.46 219.67 301.73C220.505 302.005 221.26 302.478 221.87 303.11L219.39 304.96C221.52 306.27 222.19 306.18 223.78 304.76C225.16 303.53 225.16 303.53 226.98 303.85C227.98 302.66 226.98 301.57 226.61 300.13C227.54 300.03 228.37 299.94 229.48 299.8L228.95 302.5L233.3 303.83C234.86 305.88 235.6 306.08 237.87 304.75C237.46 304.3 236.72 303.85 236.72 303.39C236.72 302.39 237.72 302.77 238.3 302.52C238.982 302.136 239.748 301.924 240.53 301.9C241.309 301.876 242.082 302.044 242.78 302.39C243.92 302.92 244.7 302.02 245.37 301.17C242.62 298.37 241.74 298.17 238.55 299.95C236.55 299.03 234.46 297.9 231.95 299.11C232.31 296.72 232.67 296.26 234.05 296.96C236.95 298.45 239.3 296.57 241.89 296.16V296.25C241.72 295.226 241.449 294.221 241.08 293.25C240.477 292.327 239.78 291.469 239 290.69L236.38 291.41C236.091 291.112 235.846 290.776 235.65 290.41C235.19 288.99 234.3 288.5 232.79 288.28C231.02 288.01 229.38 287.19 227.52 288.18C227.08 288.42 225.99 287.94 225.52 287.47C225.171 286.998 224.729 286.603 224.22 286.31C223.717 286.008 223.154 285.82 222.57 285.76C224.2 283.9 222.71 282.22 222.19 280.54C222.03 280 220.99 279.68 220.31 279.34C218.61 278.48 216.83 277.71 215.08 276.9L214.79 277.4L217.79 279.71C217.656 279.881 217.489 280.023 217.3 280.13C217.116 280.24 216.912 280.311 216.7 280.34C216.486 280.369 216.267 280.352 216.06 280.29C215.824 280.263 215.596 280.188 215.39 280.07C213.87 279.19 213.39 279.25 212.39 280.47C212.06 280.87 211.83 281.37 211.52 281.78C211.236 282.175 210.833 282.469 210.37 282.62C209.909 282.775 209.411 282.775 208.95 282.62C207.78 282.31 206.6 282.02 205.4 281.78C202.95 281.3 199.14 277.64 199.31 275.25C199.43 273.46 200.51 271.73 201.21 269.99C201.531 269.485 201.736 268.914 201.81 268.32C200.72 268.58 199.63 268.84 198.35 269.17L197.43 268.06C197.312 267.873 197.16 267.71 196.98 267.58C196.798 267.453 196.595 267.358 196.38 267.3C196.162 267.26 195.938 267.26 195.72 267.3C195.502 267.33 195.293 267.408 195.11 267.53C193.244 268.663 191.164 269.395 189 269.68C188.828 269.821 188.671 269.978 188.53 270.15L189.2 271.69C189.05 271.77 188.93 271.96 188.81 271.96C188.473 271.958 188.137 271.915 187.81 271.83C187.323 271.628 186.784 271.582 186.27 271.7C185.754 271.816 185.286 272.088 184.93 272.48C183.93 273.55 185.42 274.1 185.59 275.08C185.208 275.174 184.813 275.211 184.42 275.19C182.96 274.76 182.3 275.57 181.87 276.76C181.452 278.131 180.628 279.343 179.507 280.236C178.386 281.129 177.02 281.66 175.59 281.76C174.914 281.894 174.246 282.068 173.59 282.28C173.136 282.435 172.644 282.435 172.19 282.28C171.74 282.107 171.363 281.786 171.12 281.37C169.99 279.84 168.7 279.84 167.42 281.37C166.641 282.429 165.949 283.55 165.35 284.72C165.1 285.15 164.88 285.58 164.41 286.46L163.76 284.46C163.358 284.425 162.956 284.527 162.62 284.75C162.287 284.977 162.043 285.313 161.93 285.7C161.23 287.21 160.3 287.23 159.26 286C159.18 285.85 158.98 285.71 159.02 285.55C158.97 282.73 156.66 282.46 154.77 281.7C154.552 281.571 154.348 281.42 154.16 281.25C155.16 280.52 156.34 280.74 157.36 280.59C158.38 280.44 159.56 280.45 160.69 280.39C160.92 278.83 159.89 278.39 159.15 277.39C158.856 277.957 158.361 278.395 157.763 278.618C157.164 278.842 156.504 278.835 155.91 278.6C154.959 278.457 153.987 278.564 153.09 278.91C150.48 279.57 147.91 280.31 145.09 281.09L144.95 282.16C143.22 282.69 141.52 283.21 139.83 283.71L139.94 284.28C140.85 284.2 141.77 284.06 142.67 284.03C144.19 284.03 144.67 284.64 144.45 286.18C144.345 287.185 143.9 288.124 143.19 288.842C142.479 289.561 141.544 290.015 140.54 290.13C139.68 290.3 139.68 290.3 139.15 291.66C140.81 292.46 143.36 292.32 143.26 295.37C140.81 296.88 142.17 299.96 140.72 302.43L138.39 298.66C137.85 299.27 137.49 299.71 136.96 300.31L135.61 298.31C135.31 298.31 134.91 298.24 134.61 298.4C133.436 299.128 132.304 299.923 131.22 300.78C130.96 300.977 130.756 301.239 130.63 301.54C130.54 301.768 130.497 302.012 130.503 302.257C130.509 302.502 130.564 302.744 130.665 302.967C130.766 303.191 130.91 303.392 131.089 303.559C131.269 303.726 131.48 303.856 131.71 303.94C132.36 304.22 133.03 304.45 133.71 304.75L133.6 305.29L131.35 305.45L137.25 309.98C137.38 308.42 138.96 307.38 137.36 306.1C138.12 304.81 139.07 306.01 139.97 305.97L140.83 303.51C143.15 304.51 142.47 306.68 139.07 309.31L140.9 311.73C140.176 311.457 139.42 311.275 138.65 311.19C138.088 311.23 137.559 311.471 137.16 311.87C136.96 312.09 137.16 312.8 137.36 313.21C137.73 313.852 138.141 314.47 138.59 315.06L141.02 313.16C142.13 314.43 141.22 315.16 140.5 315.84C138.32 317.75 135.61 317.74 132.31 315.77C133.45 318.84 136.65 319.37 138.41 321.77L137.96 323.6C140.11 324.6 142.73 324.3 144.67 326.33C141.48 327.09 139.05 324.46 135.67 324.62C136.18 325.77 136.33 326.84 136.94 327.34C139.1 329.06 141.36 330.63 143.73 332.34L143.52 334.2C146.12 334.47 148.13 335.89 149.98 337.45C151.11 338.39 152.21 339.15 153.76 338.77C153.92 338.686 154.107 338.668 154.28 338.72C156.65 339.89 159.1 341.02 161.39 342.37C162.366 343.089 163.24 343.937 163.99 344.89C162.82 346.05 162.82 346.05 160.57 346.4L160.97 344.72C159.473 343.601 158.034 342.406 156.66 341.14C155.66 340.14 154.91 339.63 153.48 340.14C152.766 340.362 152.005 340.379 151.282 340.19C150.559 340 149.904 339.613 149.39 339.07C148.707 338.449 147.871 338.021 146.967 337.83C146.064 337.638 145.127 337.69 144.25 337.98C142.9 338.32 141.75 338.55 140.62 337.41C140.25 337.03 139.41 337.09 138.3 336.86L140.52 340.95C139.98 341.6 139.52 342.15 138.64 343.21C141.79 342.1 142.56 344.33 144.23 345.84L140.15 345.99C139.58 347.53 139.58 347.53 141.07 350.99L138.12 350.75L137.32 355.01C137.01 354.979 136.708 354.891 136.43 354.75C136.157 354.602 135.916 354.401 135.72 354.16C135.521 353.914 135.372 353.632 135.28 353.33C135.198 353.031 135.171 352.719 135.2 352.41C135.43 349.93 133.91 348.41 132.6 346.73C133.37 344.59 133.37 344.59 131.43 343.25C131.43 343.1 131.43 342.83 131.55 342.79C133.7 341.97 133.55 342.03 132.98 339.65C132.67 338.25 132.44 337 131.2 336.17C130.73 335.86 130.13 335.35 129.7 335.45C128.79 335.66 129 336.45 129.21 337.17C129.248 337.502 129.248 337.838 129.21 338.17C126.27 337.3 124.78 340.17 121.95 340.53L123.23 341.79C124.03 342.58 124.02 343.38 123.02 343.93C121.74 344.63 121.02 345.46 121.31 347.07C121.6 348.68 122.9 349.34 124.12 349.97C125.34 350.6 126 350.19 126.6 348.97C126.85 348.42 127.12 347.87 127.37 347.32L126.23 345.07C127.73 345.57 127.74 346.32 127.32 347.21C128.5 348.11 128.52 349.41 128.82 350.82L125.05 351.75L125.59 355.9C124.43 356.32 123.31 356.25 123.24 355.26C123.08 352.88 121.13 351.95 119.77 350.56C118.952 349.804 118.094 349.093 117.2 348.43C115.66 349.52 115.54 350.38 117.01 351.52C118.48 352.66 119.78 353.71 119.71 355.78L121.32 356.13L121.18 364.24C122.18 365.91 124.55 365.93 126.01 367.55C127.19 368.93 129.46 369.37 131.36 370.33C131.91 369.93 132.53 369.49 133.06 369.09L138 371.57C138.147 371.406 138.254 371.211 138.314 371C138.373 370.788 138.384 370.566 138.344 370.349C138.305 370.133 138.216 369.929 138.085 369.752C137.955 369.576 137.785 369.431 137.59 369.33C136.46 368.51 135.45 367.55 134.49 366.75C134.49 365.52 135.12 365.41 135.89 365.38C137.566 365.319 139.178 364.723 140.49 363.68C142.49 362.13 142.81 362.24 144.31 364.5C144.455 364.708 144.616 364.905 144.79 365.09C145.93 363.44 145.91 363.24 144.31 360.97C145.449 361.102 146.55 361.459 147.55 362.02C148.552 362.578 149.429 363.333 150.13 364.24L146.76 365.7C147.16 367.17 148.43 366.7 149.31 366.9C150.19 367.1 151.31 367.45 150.04 369.19L153.9 368.08C153.694 368.57 153.425 369.03 153.1 369.45C152.439 369.849 151.804 370.289 151.2 370.77C151.047 371.014 150.851 371.228 150.62 371.4C150.389 371.572 150.125 371.694 149.845 371.759C149.564 371.825 149.273 371.832 148.99 371.78C148.705 371.739 148.432 371.637 148.19 371.48C146.86 370.75 147.51 369.71 147.87 368.74C147.914 368.486 147.937 368.228 147.94 367.97L144.39 367.57C144.729 367.978 145.04 368.409 145.32 368.86C145.58 369.47 145.79 370.09 146.02 370.71C145.4 370.78 144.77 370.82 144.15 370.95C143.15 371.16 142.2 371.43 141.07 371.71L140.25 370.93L138.53 374.55L136.27 373.33L135.6 375.94L137.72 377.58C134.93 379.24 131.72 379.32 130.07 377.97C128.36 378.28 126.82 378.51 125.32 378.83C125.22 380.39 125.22 380.39 128.42 380.23C128.19 382.08 131.85 381.68 130.57 384.23C129.843 384.492 129.064 384.577 128.298 384.48C127.531 384.383 126.799 384.105 126.16 383.67L126.4 382.31L124.08 382.25C123.239 382.292 122.395 382.258 121.56 382.15C120.88 382 120.26 381.54 119.44 381.41C120.21 382.35 118.69 383.98 120.33 384.41L119.5 386.56H122.6C120.72 388.55 120.46 388.54 119.39 386.48ZM103.39 417.17L105.8 416.29C105.703 416.509 105.564 416.706 105.39 416.87C105.214 417.032 105.006 417.154 104.78 417.23C104.554 417.302 104.316 417.329 104.08 417.31C103.837 417.273 103.603 417.192 103.39 417.07H100.39C101.39 416.41 102.39 416.07 103.39 417.17ZM173.26 456C174.26 455 175.48 455.41 176.69 455.53L176.12 454.92L179.42 453.86C178.92 455.86 178.72 455.97 176.57 455.41C176.29 456.23 175.67 456.2 174.96 456.09C174.419 456.027 173.875 455.993 173.33 455.99L171.58 453.75L173.77 453.45L173.26 456ZM441.26 344.77C440.26 346.11 440.26 346.11 438.49 345.71C439.49 345.35 440.38 345.07 441.27 344.78L443.16 344.99C443.019 345.52 442.828 346.036 442.59 346.53C442.51 346.68 442.18 346.68 441.8 346.79L441.26 344.77ZM130.26 421.91L132.26 423.25C130.52 423.35 130.51 422.43 130.26 421.79C128.31 422.21 126.36 422.6 125.38 419.92C126.99 420.59 128.65 421.23 130.25 421.91H130.26ZM189.32 414.07L188.83 412.23C190.31 411.72 191.59 411.17 193.18 412.08C192.732 412.704 192.138 413.208 191.45 413.55C190.759 413.886 189.998 414.054 189.23 414.04L189.36 416.04L187.17 415.8L187.11 415.28L189.32 414.07ZM193.5 277.62C194.68 277.51 195.86 277.42 196.61 278.7C195.37 279.6 195.14 279.7 194.61 279.21C194.178 278.689 193.799 278.127 193.48 277.53C192.9 277.6 192.34 277.7 191.74 277.76C191.14 277.82 190.42 277.6 190.04 277.91C189.66 278.22 189.63 279.02 189.44 279.6C187.44 278.7 187.44 278.7 186.81 277.34C189.09 276.34 191.31 275.42 193.46 277.61L193.5 277.62ZM131.9 393.62C131.219 393.668 130.547 393.803 129.9 394.02C127.28 395.33 126.63 395.12 125.61 392.43C127.92 390.9 130.2 391.16 132.61 392.71C132.33 393.02 132.07 393.33 131.81 393.63L134.39 394.41C131.91 395.33 131.91 395.33 131.9 393.61V393.62ZM203.39 316.41C204.693 316.533 205.903 317.139 206.78 318.11C204.48 318.71 204.04 318.45 203.45 316.3L201.95 318.52L205.65 319.93C205.03 320.51 204.65 321.15 204.35 321.12C202.61 320.83 200.68 321.46 199.18 320.12C199.95 316.8 200.84 316.02 203.39 316.41ZM168.26 418.32C169.87 419.74 171.79 420.91 171.99 423.32C167.99 424.8 167.64 424.7 165.71 421.32L168.29 420.98L169.04 422.83C170.1 422.52 170.17 422.02 169.71 421.41C169.403 420.873 168.925 420.454 168.352 420.221C167.78 419.987 167.145 419.951 166.55 420.12C165.04 420.59 164.15 419.29 162.96 418.86C162.46 418.68 162.24 417.68 161.84 416.93C163.27 416.56 164.31 416.41 165.45 417.36C166.18 417.96 167.38 417.99 168.38 418.23L166.76 416.65C168.05 417.01 168.55 417.35 168.26 418.32ZM106.96 388.13L106.07 390.37C106.35 390.668 106.586 391.005 106.77 391.37C107.53 393.37 107.5 393.37 109.41 393.14C109.894 393.039 110.396 393.06 110.87 393.2C112.21 393.8 113.5 394.52 114.97 395.27C114.65 395.56 114.32 396.08 113.97 396.16C112.5 396.45 111.02 396.63 109.75 395.49C109.032 394.782 108.144 394.272 107.17 394.01C106.188 393.745 105.152 393.745 104.17 394.01L104 395.33C102.24 394.79 103 393.27 102.66 392.33L101.15 391.83C101.24 389.88 102.86 389.98 103.85 389.54C104.56 387.54 102.42 387.6 101.85 386.54C102.47 385.65 103.07 384.84 104.2 385.19C105.33 385.54 106.79 385.88 107.27 387.33C107.39 387.56 107.08 387.96 106.98 388.33L106.96 388.13ZM333.96 352.37L330.96 351.46L331.74 349.99L331.37 349.63C330.55 350.26 329.73 350.89 328.88 351.52L327.98 350.47L327.12 352.02C326.828 350.98 326.186 350.073 325.302 349.451C324.419 348.83 323.347 348.533 322.27 348.61V348.13L325.44 346.79L326.94 348.3C327.94 346.82 328.74 345.55 329.63 344.21L330.78 345.5L334.96 343.23C334.777 343.773 334.56 344.304 334.31 344.82C333.793 345.447 333.448 346.199 333.31 347C333.177 347.802 333.252 348.626 333.53 349.39C333.757 350.374 333.867 351.381 333.86 352.39C333.16 353.18 332.47 353.99 331.86 354.72C330.1 353.72 330.1 353.72 329.74 352.18C331.22 352.92 332.62 353.25 333.96 352.37ZM126.12 412.46C125.33 414.41 123.71 413.85 122.32 413.6C120.93 413.35 119.32 413.09 119.32 410.91L122.08 410.27L120.08 408.92L121.42 408.19C119.75 406.99 118.5 407.8 117.37 408.71L114.14 407.15C115.99 406.02 117.73 406.35 119.43 406.37L118.92 403.99C120.87 403.04 122.66 402.57 124.61 403.65C125.05 403.88 125.82 403.6 126.35 403.52C128.2 403.19 130.03 402.82 132.09 402.43C131.79 403.54 131.3 404.61 132.52 405.28C135.71 405 135.71 405 136.91 404.05C134 403.6 133.91 403.34 135.33 400.58C137.27 400.4 139.09 400.22 140.9 400.02C140.98 401.64 138.44 401.52 139.03 403.22C139.7 404.22 141.29 402.39 141.62 404.16C141.27 404.51 140.93 404.87 140.17 405.63L148.89 406.04C148.23 408.51 151.05 408.56 151.35 410.57C149.46 410.18 149.42 411.57 149.35 412.68C147.4 412.43 148.2 410.84 147.9 410.01C144.9 410.2 144.4 410.37 143.12 411.75C144.5 411.64 146.12 410.75 146.7 412.75C146.21 413.12 145.82 413.4 145.2 413.85C146.56 414.55 148.2 413.79 148.88 415.39C149.178 416.167 149.748 416.808 150.484 417.195C151.22 417.581 152.072 417.686 152.88 417.49C152.79 420.08 156.06 419.49 156.21 421.49L159.07 421.28C158.47 422.84 157.24 422.83 156.18 422.74C155.12 422.65 153.59 422.51 153.08 421.83C152.317 420.835 151.238 420.129 150.02 419.83V418.33C148.88 419.13 147.9 419.82 146.93 420.52C147.39 420.76 147.87 421.23 148.29 421.2C150.04 420.94 151.01 422.11 152.21 423.12L151.21 426.72C151.557 426.819 151.912 426.893 152.27 426.94C153.64 427.07 155.15 426.85 156.34 427.37C158.26 428.25 159.87 428.37 161.54 427.01C161.752 426.977 161.968 426.977 162.18 427.01L163.37 428.83C163.97 428.39 164.55 427.83 165.72 428.98L163.39 428.77C162.05 429.77 160.72 430.77 159.27 431.87L159.76 433.35C156.5 433.49 153.94 432.28 150.9 430.98C151.82 430.41 152.31 430.1 152.75 429.84C152.14 429.891 151.527 429.798 150.96 429.57C150.398 429.357 149.895 429.014 149.49 428.57L146.54 425.97C146.004 425.383 145.263 425.025 144.47 424.97C143.681 424.921 142.903 425.179 142.3 425.69C143.219 426.499 144.184 427.253 145.19 427.95C146.19 428.62 147.86 427.95 148.64 429.38C148.31 429.78 148.01 430.16 147.64 430.61L150.26 431.81C145.09 432.68 141.53 431.41 139.41 428.1C141.55 427.52 142.41 430.1 144.35 430.1C143.209 428.792 141.901 427.638 140.46 426.67C138.847 425.801 137.176 425.043 135.46 424.4C137.46 424.57 137.46 424.52 138.6 424L135.37 421.88C134.87 422.45 134.21 423.26 133.2 422.06L135.09 419.06L129.69 415.01C129.56 414.91 129.46 414.75 129.34 414.64L127.69 416.54L129.9 417.62C128.886 417.668 127.88 417.826 126.9 418.09C125.44 418.7 124.46 418.09 123.36 417.22C122.598 416.671 121.755 416.246 120.86 415.96C119.09 415.29 117.29 414.68 115.5 414.06L115.7 413.37C117.127 413.628 118.539 413.961 119.93 414.37C121.4 414.81 122.8 415.63 124.26 416.18C126 416.82 126.99 414.77 128.61 414.87C128.866 414.84 129.116 414.769 129.35 414.66C129.7 414.4 130.02 413.97 130.4 413.91C132.04 413.63 132.28 412.36 132.56 411.11C132.77 410.31 133.02 409.52 133.25 408.67C131.83 407.6 131.83 407.6 132.47 405.41C130.85 406.69 129.32 407.23 127.25 405.97C125.41 404.85 124.55 405.4 123.51 407.53L126.77 407.25L127.04 407.74C125.32 408.909 123.893 410.459 122.87 412.27L126.12 412.66C125.85 411.99 125.02 411.36 125.92 410.66C126.16 410.53 126.61 410.66 127.29 410.71L126.12 412.46ZM195.03 354.87C196.4 355.36 198.16 354.87 199.51 356.72C197.83 356.62 196.29 356.93 195.21 356.35C194.678 355.97 194.033 355.78 193.38 355.81C192.729 355.837 192.104 356.076 191.6 356.49C190.38 357.31 189.49 356.93 188.6 355.76C187.53 354.37 186.3 353.09 184.85 351.44C184.3 352.69 184.04 353.44 183.7 354.2C183.527 354.613 183.211 354.95 182.81 355.15C182.415 355.352 181.958 355.399 181.53 355.28C181.3 355.206 181.088 355.083 180.91 354.92C180.731 354.754 180.588 354.554 180.49 354.33C179.99 352.79 179.61 351.21 179.16 349.62C179.984 349.63 180.804 349.509 181.59 349.26C182.311 348.729 182.949 348.091 183.48 347.37C184.73 348.23 185.43 349.91 187.27 349.37C187.925 349.157 188.514 348.778 188.98 348.27C189.465 347.775 189.81 347.161 189.98 346.49C187.22 347.79 187.05 347.78 185.7 345.96C186.77 345.56 188.53 346.32 188.7 344.6C188.681 343.347 188.509 342.102 188.19 340.89C189.263 341.391 190.455 341.578 191.63 341.43C192.801 341.271 193.902 340.778 194.8 340.01C195.167 339.783 195.608 339.707 196.03 339.8C198.71 340.43 201.28 340.88 203.83 339.13C204.9 338.4 205.94 339.3 205.65 340.6C205.438 341.599 205 342.536 204.37 343.34C204.059 343.621 203.808 343.961 203.63 344.34C203.454 344.724 203.356 345.138 203.34 345.56C203.34 347.15 202.54 347.72 201.01 347.35C200.54 347.12 200.116 346.804 199.76 346.42C199.063 347.68 198.145 348.805 197.05 349.74C196.714 349.947 196.461 350.266 196.337 350.641C196.213 351.016 196.224 351.423 196.37 351.79C196.54 352.25 196.65 352.74 196.8 353.25L194.98 354.91L195.03 354.87ZM231.39 359.82L230.83 359.35L223.64 363.97C223.432 363.44 223.047 362.999 222.55 362.72C222.049 362.448 221.468 362.363 220.91 362.48C220.647 362.545 220.373 362.545 220.11 362.48C219.851 362.409 219.614 362.275 219.42 362.09C219.222 361.911 219.068 361.689 218.97 361.44C218.87 361.189 218.829 360.919 218.85 360.65C219.2 360.46 219.57 360.1 219.8 360.13C221.32 360.66 222.49 359.9 223.8 359.38C225.11 358.86 226.4 358.04 228.03 358.31C228.64 358.42 229.47 357.79 230.03 357.31C232.19 355.71 234.3 354.04 236.8 352.11C236.619 352.498 236.415 352.875 236.19 353.24C235.55 354.08 235.19 354.89 236.09 355.75C236.272 355.969 236.497 356.15 236.75 356.28C237.004 356.411 237.284 356.486 237.57 356.5C237.855 356.521 238.142 356.48 238.41 356.38C238.68 356.289 238.926 356.138 239.13 355.94C239.68 355.514 240.254 355.12 240.85 354.76C241.58 354.36 242.28 353.56 243.41 354.08C239.5 357.44 239.48 357.45 234.41 358.52C234.41 359.42 233.69 360.34 234.47 361.52C235.3 360.79 235.95 360.2 236.71 359.52L238.51 361.8C237.35 362.63 236.25 363.39 235.17 364.16C236.05 365.78 236.05 365.78 235.66 367.58C235.492 367.351 235.277 367.16 235.03 367.02C234.778 366.889 234.503 366.811 234.22 366.79C233.937 366.777 233.654 366.825 233.39 366.93C233.128 367.034 232.893 367.195 232.7 367.4C232.31 367.71 231.45 367.4 230.7 367.32C230.85 364.75 229.75 362.24 231.36 359.87L231.39 359.82ZM302.06 389.18L302.2 389.73C302.92 389.568 303.653 389.471 304.39 389.44C305.021 389.531 305.639 389.699 306.23 389.94C305.976 390.611 305.603 391.231 305.13 391.77C304.856 391.982 304.544 392.138 304.21 392.23C303.88 392.293 303.54 392.293 303.21 392.23C301.06 391.6 298.98 390.78 297.21 390.16L295.91 385.68C294.44 385.87 293.91 387.78 293.18 387.31L293.5 383.61L296.02 383.73L296.74 379.82C297.29 379.909 297.853 379.81 298.34 379.54C298.83 379.272 299.223 378.856 299.46 378.35C299.68 377.92 300.53 377.84 301.05 377.6L302.3 380.76C301.73 381.07 301.3 381.42 300.7 381.76L302.19 383.58L300.61 384.75L305.69 387.75C304.41 388.32 303.25 388.75 302.08 389.12L302.06 389.18ZM176.23 333.18C175.69 333.6 175.41 333.8 175.16 334.02L174.16 334.94C175.26 335.09 175.97 335.13 176.63 335.28C178.56 335.73 179.56 338.28 178.24 339.7C177.3 340.7 177.3 341.7 177.73 343.18C175.79 342.18 173.93 341.68 172.79 340.49C171.111 338.873 168.967 337.823 166.66 337.49C165.56 337.25 164.43 337.05 163.35 336.74C162.918 336.527 162.52 336.251 162.17 335.92C162.59 335.543 163.126 335.321 163.69 335.29C164.254 335.259 164.811 335.421 165.27 335.75C166.186 336.245 167.143 336.659 168.13 336.99C168.297 337.078 168.481 337.129 168.67 337.14C168.86 337.141 169.048 337.1 169.22 337.02C169.39 336.932 169.54 336.809 169.66 336.66C169.773 336.509 169.851 336.335 169.89 336.15L167.4 335.33C168.68 334.53 169.98 333.85 171.14 332.98C172.79 331.76 174.32 331.93 176.25 333.21L176.23 333.18ZM144.16 354.85C145.101 355.608 146.162 356.203 147.3 356.61C149.21 356.98 148.56 354.7 149.47 353.81C150.81 354.95 151.92 356.34 153.91 356.66L153.71 354.31C154.008 354.39 154.283 354.541 154.51 354.75C154.742 354.954 154.921 355.211 155.03 355.5C155.191 356.157 155.301 356.826 155.36 357.5L157.08 357.14C157.06 357.976 157.189 358.809 157.46 359.6C158.004 360.233 158.649 360.77 159.37 361.19C156.26 362.77 152.76 361.19 150.27 357.19C146.6 358.92 145.47 358.47 144.16 354.92V354.85ZM173.16 367.4L176.92 364.49L181.65 365.49L177.55 368.07C177.92 368.98 178.55 369.92 177.4 370.61C176 371.51 176.15 372.51 177.12 373.66C177.29 373.86 177.29 374.21 177.5 375.01C174.66 373.73 172.03 373.06 171.25 369.94C175.73 370.24 175.95 370.13 175.71 367.82C174.94 367.68 174.09 367.47 173.17 367.35L173.16 367.4ZM187.35 420.34C186.553 420.579 185.721 420.677 184.89 420.63C183.408 420.106 181.782 420.164 180.34 420.79C180.16 420.89 179.72 420.41 179.06 420L181.06 419.21C181.717 419.009 182.362 418.768 182.99 418.49C186.57 416.49 187.9 416.96 189.81 420.59C189.9 420.74 189.98 420.9 190.06 421.05C190.49 421.84 190.8 422.68 190.06 423.46C189.72 423.815 189.26 424.032 188.77 424.07C188.281 424.101 187.796 423.959 187.4 423.67C186.795 423.242 186.232 422.756 185.72 422.22L187.35 420.34ZM366.58 410.6L366.26 410.34C366.53 409.73 366.83 409.14 367.05 408.52C367.49 407.29 368.42 406.21 367.33 404.68C367.197 404.424 367.119 404.143 367.102 403.855C367.084 403.567 367.128 403.278 367.23 403.008C367.332 402.738 367.49 402.493 367.693 402.288C367.897 402.083 368.141 401.924 368.41 401.82C369.317 401.307 370.294 400.929 371.31 400.7C371.632 400.635 371.965 400.648 372.281 400.736C372.598 400.825 372.888 400.987 373.13 401.21C373.41 401.63 373.13 402.45 372.93 403.11C372.85 403.42 372.47 403.61 372.25 403.89C370.68 405.89 369.14 407.83 367.55 409.78C367.237 410.062 366.903 410.319 366.55 410.55L366.58 410.6ZM261.39 351.67L266.32 352.47L266.05 356.16L259.57 353.78L258.82 351.25C259.77 350.73 260.75 350.25 261.67 349.7C262.216 349.303 262.878 349.095 263.553 349.11C264.229 349.124 264.881 349.36 265.41 349.78C263.78 350.32 261.82 349.58 261.36 351.62L261.39 351.67ZM174.39 353.57C175.11 352.86 175.7 352.32 176.27 351.73C177.01 350.94 178.12 350.95 178.33 351.84C178.77 353.64 179.09 355.49 179.45 357.38C175.08 357.58 175.08 357.58 173.78 356.25L174.39 353.57ZM384.39 237.49C384.76 239.87 385.11 241.86 385.39 243.84C385.44 244.22 385.12 244.65 384.94 245.03C384.55 245.82 384.11 246.58 383.74 247.37C383.447 248.104 382.938 248.732 382.28 249.17C381.624 249.611 380.851 249.848 380.06 249.85C378.29 249.92 377.64 249.48 376.36 247.3C376.827 247.61 377.311 247.894 377.81 248.15C380.66 249.34 382.37 248.56 383.55 245.64C383.775 245.131 383.891 244.581 383.891 244.025C383.891 243.469 383.775 242.919 383.55 242.41C382.99 240.88 382.38 239.12 384.47 237.46L384.39 237.49ZM263.72 345.95L263.9 346.51C262.342 346.973 260.81 347.517 259.31 348.14C257.79 348.85 256.38 349.83 254.93 350.69L253.93 348.32L256.49 344.59L257.15 344.88L255.93 346.43L256.6 346.87L263.72 345.95ZM59.78 378.15C61.65 378.07 62.91 379.39 64.07 380.42C65.47 381.61 67.14 381.54 68.64 382.16C70.14 382.78 71.71 383.39 73.49 384.09C72.01 384.9 70.88 385.23 69.49 384.25C68.6839 383.77 67.7895 383.457 66.86 383.33C65.8512 383.159 64.8324 383.052 63.81 383.01C62.9808 381.018 61.5557 379.331 59.73 378.18L59.78 378.15ZM197.78 284.29C196.31 284.61 194.98 285 193.61 285.18C193.354 285.245 193.086 285.245 192.83 285.18C192.572 285.121 192.332 285.001 192.13 284.83C191.929 284.659 191.772 284.443 191.67 284.2C191.569 283.953 191.532 283.685 191.56 283.42C191.77 281.16 194.07 282.05 195.26 281.17C196.02 280.63 196.98 281.06 197.32 282.1C197.52 282.76 197.59 283.44 197.77 284.29H197.78ZM184.24 375.86C181.89 376.71 180.75 374.86 179.24 374.08C178.57 373.75 178.01 373.23 178.46 372.43C178.55 372.23 178.68 372.05 178.84 371.9C179.003 371.753 179.198 371.647 179.41 371.59C179.623 371.535 179.847 371.535 180.06 371.59C180.276 371.623 180.481 371.705 180.66 371.83C181.31 372.19 181.92 372.61 182.41 372.92C183.56 372.38 183.41 370.79 185.59 370.92C183 372.42 184.59 374.24 184.29 375.92L184.24 375.86ZM443.39 348.07L443.31 347.5C444.82 346.95 446.48 346.5 447.24 344.74L444.82 345.14L448.19 342.28L447.19 341.28C448.76 340.9 450.09 340.57 451.42 340.21L451.66 340.65L449.04 342.94L449.9 343.81L445.52 347.92C445.17 347.96 444.26 348 443.39 348.07ZM143.39 395.7C142.135 396.323 140.756 396.658 139.355 396.68C137.953 396.703 136.565 396.412 135.29 395.83C135.89 395.26 136.49 394.73 137.22 394.06L134.39 392.41C134.87 392.15 135.16 391.87 135.29 391.92C136.6 392.55 138.17 392.98 139.1 393.98C140.29 395.31 141.49 396.07 143.39 395.7ZM125.26 390.96C125.582 390.006 125.82 389.026 125.97 388.03C125.94 387.048 125.819 386.07 125.61 385.11L131.43 387.11V387.7C128.73 387.65 128.03 391.07 125.23 390.96H125.26ZM295.04 352.51C295.19 354.89 295.16 355.18 294.13 355.37C293.628 355.471 293.156 355.687 292.75 356C292.329 356.318 291.987 356.728 291.75 357.2C291.23 358 290.55 358.2 289.67 357.1C290.23 355.56 290.837 354 291.49 352.42C291.55 352.27 291.94 352.26 292.3 352.16L292.45 353.84L295.04 352.51ZM341.39 272.4C340.39 273.23 339.78 273.78 339.03 274.4L337.12 273.07C336.12 273.63 335.76 275.21 333.78 274.88C335.389 272.882 337.259 271.11 339.34 269.61C339.58 269.48 340.07 269.68 340.65 269.76C340.39 270.37 340.25 270.76 340.08 271.14L339.32 272.71C340.04 272.59 340.51 272.52 341.32 272.41L341.39 272.4ZM330.09 339.54C330.716 339.54 331.342 339.49 331.96 339.39C332.42 339.28 333.15 339.09 333.23 338.79C333.301 338.23 333.189 337.661 332.91 337.17C332.573 336.7 332.169 336.282 331.71 335.93C334.12 335.99 334.71 337.46 335.14 339.12L337.31 338.32C337.056 338.891 336.652 339.382 336.14 339.74C335.622 340.09 335.015 340.288 334.39 340.31L332.78 342.42C332.29 341.98 331.78 341.56 331.32 341.09C330.86 340.62 330.68 340.27 330.06 339.54H330.09ZM289.88 383.46L288.66 386.99L290.45 388.48C288.94 390.03 287.54 390.24 286.38 389.09C286.08 388.8 285.84 387.92 286 387.77C287.28 386.56 287.39 384.34 289.85 383.46H289.88ZM200 352.36C200.135 351.43 200.394 350.522 200.77 349.66C201.67 348.19 202.98 348.34 203.65 349.92C204.03 350.84 204.82 351.85 203.88 352.83C202.94 353.81 202.08 353.08 201.19 352.83C200.88 352.68 200.53 352.57 199.99 352.37L200 352.36ZM177.84 460.36C177.19 461.72 176.11 460.9 175.3 460.22C172.995 458.381 170.226 457.215 167.3 456.85C166.867 456.767 166.444 456.636 166.04 456.46L166.18 455.85C168.554 455.705 170.917 456.269 172.97 457.47C174.49 458.54 176.15 459.41 177.82 460.37L177.84 460.36ZM444.1 266.07C442.32 264.07 440.53 262.33 440.6 259.3L443.24 260.96L444.52 259.44C445.13 260.99 444.35 261.91 444.09 262.95C443.95 263.985 443.95 265.035 444.09 266.07H444.1ZM476 290.07C476.86 292.17 476.66 293.41 475.57 293.3C473.76 293.15 473.07 294.5 471.82 295.46L469.87 294.07L471.63 291.22L472.51 292.61C475.42 292.24 475.42 292.24 475.99 290.01L476 290.07ZM199.81 406.56C199.215 407.136 198.507 407.583 197.731 407.872C196.955 408.161 196.127 408.286 195.3 408.24C194.473 408.196 193.664 407.982 192.924 407.61C192.184 407.238 191.529 406.717 191 406.08C192.66 406.22 194 406.37 195.33 406.44C196.66 406.51 198.33 406.51 199.84 406.55L199.81 406.56ZM268.53 361.16C269.43 359.44 270.89 359.63 272.93 362.16C272.2 363.08 271.52 363.99 270.84 364.86L268.53 361.16ZM147.23 437.57C148.578 438.129 149.957 438.61 151.36 439.01C152.82 439.242 154.293 439.389 155.77 439.45C153.23 441.56 149.45 440.85 147.23 437.57ZM186.23 361.4L182.49 359.6C182.87 359.035 183.16 358.414 183.35 357.76C183.44 356.01 184.49 356.38 185.75 356.57L186.23 361.4ZM447.28 275.07C447.407 275.981 447.444 276.902 447.39 277.82C447.07 279.168 447.157 280.581 447.64 281.88C447.92 282.6 448.57 283.6 447.5 284.41C446.06 282.51 445.41 278.7 446.06 275.79C446.15 275.61 446.61 275.48 447.28 275.07ZM363.81 343.96L365.22 342.51C363.97 345.9 363.62 346.04 361.04 344.97C360.323 344.76 359.585 344.63 358.84 344.58C359.98 342.41 360.46 342.34 363.81 343.94V343.96ZM161.55 425.53C160.267 425.762 158.971 425.919 157.67 426C157.397 425.951 157.14 425.838 156.92 425.67C156.702 425.497 156.533 425.269 156.43 425.01C156.46 424.739 156.56 424.481 156.72 424.26C156.878 424.035 157.087 423.85 157.33 423.72C158.311 423.391 159.313 423.131 160.33 422.94L161.55 425.53ZM283.92 385.85L284.16 386.29C283.16 387.21 282.16 388.15 281.16 389.03C280.587 389.575 279.945 390.043 279.25 390.42C278.88 390.62 278.3 390.42 277.25 390.34C278.17 389.52 278.8 389.2 278.98 388.72C279.16 388.24 278.85 387.65 278.65 386.44L280.65 387.65L283.92 385.85ZM139.48 375.23C141.01 373.52 142.76 373.44 144.11 372.62L144.38 372.91C143.86 374.35 143.38 375.6 142.87 377.13L139.48 375.23ZM194.39 275.66C193.3 275.636 192.212 275.556 191.13 275.42C190.13 275.25 189.42 274.42 189.81 273.68C189.885 273.473 190.004 273.285 190.16 273.13C190.315 272.974 190.503 272.855 190.71 272.78C190.913 272.698 191.131 272.661 191.35 272.67C191.572 272.678 191.79 272.733 191.99 272.83C192.581 273.084 193.106 273.472 193.522 273.963C193.939 274.454 194.236 275.035 194.39 275.66ZM368.86 281.44C370.04 281 371.37 281.52 371.44 279.92C371.44 279.67 372.39 279.4 372.89 279.22C373.081 279.455 373.221 279.728 373.3 280.02C373.376 280.31 373.393 280.613 373.35 280.91C373.295 281.211 373.177 281.497 373.005 281.751C372.833 282.004 372.61 282.218 372.35 282.38C371.73 282.838 371.078 283.253 370.4 283.62L368.86 281.44ZM204.44 402.92C201.53 404.49 200.7 404.18 200.44 401.42C202.77 400.62 202.81 400.64 204.51 402.89L204.44 402.92ZM114.87 398.15C115 397.93 115.14 397.72 115.28 397.5L122.38 399.87C121.16 400.76 120.38 401.26 119.26 400.49C118.23 399.56 116.888 399.05 115.5 399.06C115.39 399.07 115.05 398.48 114.87 398.15ZM135.87 397.92C135.094 398.488 134.259 398.971 133.38 399.36C132.93 399.51 131.91 399.18 131.91 398.93C131.769 398.129 131.821 397.307 132.06 396.53C132.06 396.37 133.16 396.3 133.63 396.53C134.422 396.941 135.175 397.423 135.88 397.97L135.87 397.92ZM465.65 327.32C465.72 329.21 465.53 330.76 464.39 331.94C464.01 332.33 463.22 332.33 462.63 332.52C462.63 331.89 462.37 331.1 462.63 330.7C463.572 329.52 464.576 328.392 465.64 327.32H465.65ZM217.21 399.87L216.77 403.41L213.08 402.61C214.31 401.27 214.78 399.37 217.17 399.89L217.21 399.87ZM161.39 310.8C162.65 311.34 163.39 311.72 164.21 312.03C165.86 312.66 166.3 313.42 165.94 315.2C165.94 315.35 165.53 315.43 165.19 315.61L164.83 313.69C161.78 313.45 161.78 313.45 161.35 310.82L161.39 310.8ZM349.63 312.41C350.164 312.518 350.671 312.732 351.12 313.04C351.73 313.62 351.27 315.26 350.47 315.74C349.67 316.22 348.83 316.39 348.19 315.49C347.73 314.83 348.39 313.14 349.65 312.41H349.63ZM202 325.71C201.516 325.177 200.977 324.697 200.39 324.28C199.803 324.066 199.192 323.925 198.57 323.86V323.3L202.89 322.02C203.19 323.61 203.39 324.75 202.02 325.71H202ZM197.44 385.87C199.24 383.33 199.24 383.33 201.53 384.15C201.16 386.48 200.05 386.98 197.44 385.87ZM465 274.33C466.11 272.5 465.72 270.33 467.48 268.45C467.48 270.29 467.6 271.66 467.48 273.05C467.36 274.44 466.75 274.65 465 274.33ZM394.87 245.61L395 244.99C395.976 245.14 396.967 245.17 397.95 245.08C398.95 244.86 399.85 244.08 401.46 244.46L398.14 247.07C396.97 246.56 395.66 246.63 394.87 245.61ZM251.52 359.32C252.351 358.767 253.232 358.292 254.15 357.9C254.52 357.77 255.06 358.12 255.52 358.27C255.36 358.8 255.36 359.5 254.99 359.79C253.97 360.82 252.88 360.65 251.52 359.32ZM423.14 348.46L423.63 348.98C423.463 349.791 423.141 350.562 422.68 351.25C422.381 351.451 422.038 351.578 421.68 351.62C421.322 351.653 420.962 351.598 420.63 351.46C419.9 350.94 420.19 349.95 420.88 349.46C421.586 349.049 422.333 348.714 423.11 348.46H423.14ZM373.32 244.93L374.61 242.13L373.54 239.8C375.46 240.06 375.9 240.98 375.74 242.23C375.58 243.48 375.57 244.64 373.31 244.91L373.32 244.93ZM405.23 237.77L404.97 235.16C405.845 235.278 406.675 235.614 407.385 236.139C408.095 236.663 408.661 237.359 409.03 238.16L405.23 237.77ZM188.84 319.98C187.65 321.77 185.97 321.28 184.26 321.33C185.53 319.16 186.56 318.88 188.84 319.98ZM241.57 359.65L244.7 361.52C244.51 362.64 243.99 363.01 243.04 362.85C241.39 362.57 241.73 361.07 241.57 359.65ZM381.81 399.55L378.88 400.8C377.88 399.8 378.61 399.2 379.17 398.71C380.26 397.76 380.98 398.86 381.82 399.54L381.81 399.55ZM448.11 268.23L445.79 268.15C445.85 265.46 445.85 265.46 447.86 264.97L448.11 268.23ZM471.61 280.44C472.03 282.5 471.99 282.56 469.7 283.11L469.3 280.77C470.15 280.66 470.87 280.56 471.61 280.44ZM154.79 450.97L162.48 452.08C159.38 454.08 157.18 451.55 154.76 450.98L154.79 450.97ZM359.62 227.47C361.4 227.39 362.68 227.24 363.82 228.4C361.92 229.31 361.34 229.21 359.59 227.49L359.62 227.47ZM249.11 322.9C250.187 322.562 251.282 322.285 252.39 322.07C252.58 322.07 252.89 322.77 253.26 323.31C251.75 323.79 250.49 324.19 249.15 322.9H249.11ZM287.67 352.71C285.28 353.01 285.16 352.97 284.21 351.56C287.1 351 287.1 351 287.67 352.71ZM171.89 449.52C175.27 449.7 175.27 449.7 176.66 450.74C174.2 451.83 173.18 451.57 171.89 449.52ZM166.04 432.74C165.32 434.12 164.53 434.79 163.31 434.51C162.59 434.34 161.85 433.93 162.25 432.95L166.04 432.74ZM183.39 424.28C185.16 425.46 186.91 426.36 189.1 425.62C185.67 427.07 184.75 426.89 183.39 424.28ZM341.39 268.28C341.98 265.35 342.39 264.88 344.84 264.37L341.39 268.28ZM364.18 231.28C365.25 230.15 365.26 227.91 367.91 227.89C366.44 229.15 366.14 231.03 364.17 231.26L364.18 231.28ZM239.45 342.49C240.77 343.18 242.07 342.92 242.52 344.32C240.18 345.07 240.03 345.07 239.45 342.49ZM334.64 381.36C332.91 382.17 331.71 382.76 330.17 383.48C330.85 381.19 331.67 380.82 334.64 381.36ZM435.23 253.12L435.81 250.93C436.39 251.15 437.18 251.2 437.49 251.64C437.627 251.778 437.723 251.951 437.77 252.14C437.815 252.327 437.815 252.523 437.77 252.71C437.723 252.899 437.63 253.075 437.5 253.22C437.371 253.369 437.206 253.483 437.02 253.55C436.64 253.7 436.02 253.37 435.22 253.12H435.23ZM126.07 431.64C127.23 429.64 127.65 429.72 130.16 432.13C128.61 431.96 127.39 431.8 126.07 431.64ZM107.66 401.8C105.47 403.59 104.39 403.29 103.77 400.8L107.66 401.8ZM250.9 354.86L251.62 355.11L250.3 359C249.67 357.39 249.67 355.93 250.9 354.86ZM144.82 443.59L145.06 443.03C148.84 444.27 148.84 444.27 149.72 445.86L144.82 443.59ZM143.24 386.52C141.44 388.11 139.98 387.75 138.68 385.52L143.24 386.52ZM474.76 299.36C473.64 302.43 473.64 302.43 471.63 302.88C473.13 302.23 472.63 299.94 474.76 299.36ZM270.76 356.46L267.95 358.37C267.68 356.05 268.16 355.72 270.76 356.46ZM168.22 438.76C170.51 436.55 170.92 436.56 171.76 438.5L168.22 438.76ZM442.9 299.07L446.47 297.61C445.88 300.07 445.3 300.32 442.9 299.07ZM479.9 315.15L476.06 318.34C476.62 316.44 477.52 315.02 479.91 315.15H479.9ZM199.73 331.07C200.31 330.07 200.93 329.53 201.79 330.48C201.92 330.677 202.001 330.903 202.025 331.138C202.05 331.373 202.017 331.61 201.93 331.83C201.04 332.62 200.39 331.93 199.73 331.07ZM169.87 444.35L174.41 445.92C172.08 447.05 170.86 446 169.87 444.35ZM133.32 302.63C133.398 302.515 133.468 302.395 133.53 302.27C134.343 302.404 135.143 302.608 135.92 302.88C136.24 303.01 136.33 303.64 136.55 304.03C136.09 304.13 135.55 304.42 135.18 304.26C134.51 303.777 133.887 303.231 133.32 302.63ZM154.39 373.53C153.21 374.17 152.26 375 150.81 374.53C152 372.61 152 372.61 154.39 373.53ZM122.19 424.69C119.69 425.42 119.43 425.34 117.96 423.69C119.4 424.05 120.79 424.36 122.18 424.69H122.19ZM142.73 383.27L142.98 383.84C142.543 384.327 142.03 384.739 141.46 385.06C141.19 385.2 140.63 384.65 140.22 384.41C140.47 384 140.61 383.34 140.96 383.23C141.537 383.149 142.124 383.18 142.69 383.32L142.73 383.27ZM124.05 431.42C123.98 431.61 123.92 431.8 123.86 431.98C121 432.5 121 432.5 121.3 430.6L124.05 431.42ZM327.05 340.73L329.25 336.31C329.25 339.31 328.78 340.31 327 340.75L327.05 340.73ZM430.86 358.73L434.57 355.94C433.73 358.67 433.39 358.92 430.9 358.74L430.86 358.73ZM478.39 248.8L475.21 250.52C475.99 248.3 475.99 248.3 478.39 248.8ZM328.64 362.86C330.19 363.24 330.26 363.58 328.96 365.98C328.627 365.538 328.423 365.011 328.37 364.46C328.308 363.912 328.402 363.357 328.64 362.86ZM220.1 461.48L224.36 461.77C224.072 462.049 223.727 462.264 223.35 462.4C222.972 462.536 222.57 462.591 222.17 462.56C221.77 462.529 221.379 462.42 221.02 462.24C220.663 462.055 220.349 461.796 220.1 461.48ZM256.63 370.27C256.47 368.44 256.86 367.5 257.88 366.9C258.1 366.78 258.56 367.07 259.25 367.28L256.63 370.27ZM192.81 400.6C194.09 399.23 194.62 399.41 195.18 401.14L192.81 400.6ZM170.31 374.69C170.65 374.09 170.85 373.42 171.11 373.36C171.37 373.3 171.99 373.63 172.44 373.79C172.27 374.23 172.22 374.88 171.89 375.05C171.56 375.22 171.01 374.92 170.29 374.73L170.31 374.69ZM90.15 392.57L90.6 393.24C90.04 393.61 90.49 394.9 89.22 394.54C88.88 394.44 88.69 393.83 88.43 393.46L90.13 392.6L90.15 392.57ZM307.72 378.25C307.598 378.503 307.416 378.723 307.19 378.89C306.969 379.061 306.707 379.171 306.43 379.21C306.153 379.256 305.869 379.235 305.601 379.15C305.334 379.065 305.09 378.917 304.89 378.72C305.6 377.56 306.4 377.42 307.71 378.28L307.72 378.25ZM116.72 403.46C115.59 403.89 114.97 403.67 114.72 402.89C114.4 401.94 114.72 401.22 116.38 400.47C115.24 401.93 115.55 402.77 116.73 403.46H116.72ZM119.64 429.06C118.06 429.52 117.05 428.68 115.87 427.58C117.84 426.72 118.27 429 119.65 429.07L119.64 429.06ZM254.86 368.45C254.33 369.1 254.16 369.53 253.92 369.59C253.367 369.675 252.803 369.675 252.25 369.59C252.2 369.59 252.03 368.97 252.11 368.92C252.499 368.621 252.935 368.387 253.4 368.23C253.885 368.223 254.37 368.28 254.84 368.4L254.86 368.45ZM151.54 433.76C151.602 433.587 151.679 433.42 151.77 433.26C154.12 433.65 154.12 433.65 154.77 435.51L151.54 433.76ZM192.43 398.76C190.96 400.22 190.96 400.22 188.89 397.94L192.43 398.76ZM123.03 422.57C120.93 422.91 120.6 422.84 119.18 421.81C119.827 421.598 120.518 421.553 121.187 421.679C121.857 421.805 122.484 422.098 123.01 422.53L123.03 422.57ZM311.26 386.38C310.26 387.04 309.55 387.12 308.69 385.99C309.69 385.23 310.39 385.2 311.23 386.35L311.26 386.38ZM334.21 293.03C333.61 295.49 333.27 295.83 331.47 296.19C332.25 295.19 333.12 294.19 334.18 292.99L334.21 293.03ZM166.77 453.07C166.574 453.471 166.251 453.794 165.85 453.99C165.455 454.191 165.007 454.261 164.57 454.19C164.21 454.19 163.82 453.82 163.43 453.58L163.53 453.16C164.52 453.14 165.49 453.07 166.77 453.07ZM454.01 305.58C452.95 305.9 452.3 306.06 451.7 306.29C451.1 306.52 450.48 306.89 449.86 307.2L449.66 306.64C450.162 306.003 450.864 305.552 451.652 305.359C452.441 305.167 453.271 305.245 454.01 305.58ZM165.27 358.3L167.54 359.39C167.01 360.5 166.27 360.68 165.54 360.33C164.81 359.98 164.54 359.38 165.32 358.33L165.27 358.3ZM279.96 374.83C279.13 372.94 279.13 372.94 280.89 372.01L279.96 374.83ZM308.44 390.41C309.74 390.01 310.56 389.78 311.06 391.1C310.04 391.86 309.39 391.44 308.44 390.41ZM151.97 448.3L152.14 447.79L156.02 449.37C154.07 450.31 153.14 448.99 151.97 448.3ZM170.97 346.25L170.8 345.41L173.68 344.81L173.82 345.46L170.96 346.26L170.97 346.25ZM248.84 471.72L245.04 472.34C245.525 471.844 246.156 471.515 246.84 471.4C247.524 471.29 248.225 471.402 248.84 471.72ZM474.03 263.07C474.417 262.733 474.907 262.539 475.42 262.52C475.931 262.5 476.434 262.652 476.85 262.95C475.97 264.24 475.16 264.07 474.03 263.07ZM103.25 397.38C105.8 395.73 105.93 395.73 106.72 397.38H103.25ZM182.97 361.07L184.02 364.07C181.96 363.72 182.26 362.78 182.96 361.07H182.97ZM207.74 291.77C208.31 292.016 208.847 292.332 209.34 292.71C209.315 293.07 209.191 293.417 208.98 293.71C208.443 293.657 207.926 293.479 207.47 293.19C207.35 293.06 207.59 292.44 207.72 291.72L207.74 291.77ZM429.23 250.21C429.05 251.21 429.16 252.34 427.71 252.93C427.6 251.51 427.83 250.59 429.23 250.24V250.21ZM157.84 413.84L158.99 415.95C158.12 415.95 157.51 415.95 156.68 415.95C157.11 415.16 157.39 414.64 157.84 413.84ZM171.07 463.53C173.34 462.53 173.34 462.53 174.72 463.9L171.05 463.54L171.07 463.53ZM219.23 464.18C220.85 464.18 222 464.18 223.71 464.18C223.043 464.632 222.256 464.873 221.45 464.87C220.649 464.863 219.869 464.616 219.21 464.16L219.23 464.18ZM97.93 398.18C95.93 398.39 95.93 398.39 95.46 396.7L97.93 398.18ZM93.93 395.79C92.33 395.43 92.61 394.73 93.59 393.92L93.93 395.79ZM167.07 433.07C169.79 433.24 169.79 433.24 170.96 434.79L167.07 433.07ZM343.96 309.49C345.12 308.34 345.12 308.34 346.7 308.65L343.97 309.48L343.96 309.49ZM216.55 459.58C218.26 458.19 218.26 458.19 219.78 459.52H216.57L216.55 459.58ZM443.87 255.58L444.47 255.81L443.61 258.09C442.61 256.58 442.61 256.58 443.88 255.57L443.87 255.58ZM130.87 365.17V365.88C129.87 366.81 129.12 366.55 128.11 365.14C129.3 365.13 130.13 365.12 130.88 365.14L130.87 365.17ZM373.09 254.69C373.37 254.03 373.44 253.45 373.75 253.25C374.06 253.05 374.6 253.25 375 253.3C374.877 253.807 374.678 254.293 374.41 254.74C374.32 254.89 373.74 254.71 373.09 254.69ZM146.55 399.69C145.37 399.3 144.67 398.74 145.62 397.13L146.55 399.69ZM167.55 436.78C165.28 438.26 165.09 438.22 163.92 436.3L167.55 436.78ZM129.98 398.34C129.76 398.6 129.55 398.87 129.34 399.14L127.58 397.46L127.95 396.99L129.98 398.34ZM135.85 437.26L135.28 436.54C135.562 436.149 135.962 435.859 136.42 435.71C136.875 435.565 137.365 435.565 137.82 435.71L135.85 437.26ZM464.85 276.68L464.66 276.01C465.41 275.74 466.18 275.48 467.34 275.09C467.298 275.364 467.199 275.626 467.05 275.86C466.894 276.097 466.69 276.298 466.45 276.45C466.216 276.599 465.954 276.698 465.68 276.74C465.402 276.775 465.12 276.755 464.85 276.68ZM477.02 297.94C477.29 300.15 477.29 300.15 475.65 300.94L477.02 297.94ZM266.63 369.07L267.88 369.51C267.68 369.89 267.57 370.39 267.25 370.62C267.064 370.643 266.875 370.619 266.701 370.551C266.526 370.483 266.371 370.373 266.25 370.23C266.14 369.95 266.47 369.54 266.63 369.07ZM310.07 360.42C308.97 361.48 308.97 361.48 307.94 360.47C308.059 360.305 308.213 360.169 308.39 360.07C308.572 359.972 308.774 359.917 308.98 359.91C309.187 359.907 309.393 359.951 309.58 360.04C309.767 360.133 309.931 360.266 310.06 360.43L310.07 360.42ZM245 346.18C245.117 345.807 245.275 345.448 245.47 345.11C245.715 344.875 245.995 344.679 246.3 344.53C246.39 345.79 246.39 345.79 245 346.16V346.18ZM481.68 322.65L482.19 323.07L480.25 325.49L479.76 325.08L481.68 322.65ZM161.99 446.5C160.81 446.74 159.57 447.42 158.17 446.03L161.99 446.5ZM429.03 346.07L428.51 345.8C428.51 344.87 428.91 344.26 430.44 343.9L429.03 346.07ZM462.25 328.99C462.16 328.82 461.93 328.68 461.95 328.65C462.5 327.8 462.82 326.65 464.59 326.49C463.59 327.56 462.94 328.26 462.25 328.99ZM428.01 339.23C428.68 338.23 428.68 338.23 430.15 337.9C429.63 338.9 429.29 339.68 428.01 339.23ZM204.74 393.61L206.74 392.82C205.95 393.92 205.95 393.92 204.74 393.61ZM165.39 364.72L165.25 365.46C164.09 366.09 164.09 366.09 163.91 364.61L165.39 364.72ZM177.34 427C176.48 427.09 175.28 428.12 174.34 426.31L177.34 427ZM136.06 431C137.5 430.78 137.92 431.51 138.06 433L136.06 431ZM117.34 417.52L117.51 416.97C119.05 416.87 119.05 416.87 120.17 418.48L117.34 417.52ZM109.52 404.86C107.92 404.69 107.92 404.69 108.21 403.49L109.52 404.86ZM479.66 300.07L478.85 299.81L479.71 297.75L480.35 297.98L479.66 300.07ZM384.55 377.61C384.84 376.01 385.28 375.4 386.85 375.61C386.05 376.32 385.53 376.8 384.55 377.61ZM335.97 290.07L334.52 291.76L334.21 290.08L335.97 290.07ZM259.45 361.73L258.21 363.98C257.72 362.5 258.39 362.07 259.45 361.68V361.73ZM193.29 321.07C193.29 322.29 192.87 322.74 191.6 322.07C192.35 321.66 192.83 321.37 193.3 321.07H193.29ZM109.72 398.18L109.55 398.93L107.55 398.41L107.65 397.93L109.72 398.18ZM158.27 418.54L158.05 417.83C158.65 417.69 159.25 417.53 159.86 417.44C159.95 417.39 160.13 417.76 160.4 418.11L158.27 418.54ZM191.12 372.07C191.93 371.55 192.2 371.23 192.45 371.26C192.77 371.381 193.07 371.55 193.34 371.76L193.19 372.18L191.12 372.07ZM128.12 355.73L126.88 354.07C128.27 354.07 128.8 354.39 128.08 355.75L128.12 355.73ZM128.46 353.16L129.01 352.54L130.39 354.07L130.11 354.38L128.46 353.16ZM224.86 368.89C225.27 368.47 225.44 368.15 225.66 368.1C225.88 368.05 226.23 368.26 226.52 368.36C226.37 368.61 226.27 369 226.05 369.09C225.645 369.167 225.227 369.133 224.84 368.99L224.86 368.89ZM337.7 330.7C337.976 330.349 338.273 330.015 338.59 329.7C338.65 329.7 339.12 329.97 339.09 330.02C339.007 330.321 338.848 330.597 338.63 330.82C338.5 330.84 338.18 330.72 337.68 330.66L337.7 330.7ZM183.7 368.64L183.27 368.87C183.058 368.655 182.885 368.405 182.76 368.13C182.709 367.799 182.709 367.461 182.76 367.13L183.26 367.06L183.7 368.64ZM218.51 435.26L218.65 434.54C219.33 434.32 220 434.14 220.76 435.54L218.51 435.26ZM163 368.36C164.19 368.04 164.19 368.04 165.47 368.99L163 368.36ZM194.06 288.89C195.06 288.34 195.69 288.19 196.23 289.2C195.46 289.86 194.87 289.89 194.05 288.85L194.06 288.89ZM150.39 413.44L150.59 414.34C150.14 414.34 149.68 414.43 149.22 414.45C149.157 414.315 149.123 414.169 149.12 414.02C149.54 413.82 149.96 413.64 150.39 413.45V413.44ZM306.74 384.17C306.63 384.6 306.6 384.99 306.51 385C306.193 385.061 305.865 385.037 305.56 384.93C305.46 384.93 305.48 384.51 305.46 384.28L306.74 384.17ZM416.26 358.47C416.48 359.74 416.13 360.25 414.79 359.76C415.44 359.21 415.79 358.86 416.27 358.48L416.26 358.47ZM231.48 301.47L231.65 301.01L232.85 301.46L232.67 301.95L231.48 301.47ZM183.56 430.83L183.61 431.23L181.68 431.48V430.99L183.56 430.83ZM355.63 374.6L355.34 373.88C355.631 373.666 355.951 373.494 356.29 373.37C356.624 373.333 356.962 373.35 357.29 373.42L357.38 373.97L355.63 374.6ZM381.39 356.84C381.46 355.52 382.01 355.28 383.01 356.08L381.39 356.84ZM337.66 255.46C337.848 255.001 338.093 254.567 338.39 254.17C338.5 254.11 339.13 254.31 339.16 254.46C339.195 254.618 339.195 254.782 339.16 254.94C339.105 255.091 339.016 255.228 338.9 255.34C338.506 255.427 338.102 255.457 337.7 255.43L337.66 255.46ZM74.17 376.8L74.37 376.31L75.69 376.82L75.47 377.36L74.17 376.8ZM440.94 355.12L440.65 354.57C441.12 354.05 441.4 353.11 443.02 353.74L440.94 355.12ZM111.6 414.98L111.34 415.53L109.9 414.69L110.15 414.25L111.6 414.98ZM131.91 425.18C131.83 425.38 131.76 425.59 131.68 425.81L130.1 424.93L130.4 424.45L131.91 425.18ZM466.6 280.07L467.41 280.38C467.33 280.61 467.3 280.91 467.14 281.05C466.98 281.19 466.7 281.05 466.47 281.05L466.6 280.07ZM443.2 338L442.94 337.67C443.108 337.423 443.31 337.2 443.54 337.01C443.832 336.85 444.145 336.732 444.47 336.66L444.68 337.05L443.2 338ZM131.39 390.12L130.9 390.63L129.84 389.54L130.22 389.17L131.39 390.12ZM422.24 235.81C422.72 235.92 423.01 236 423.31 236.05C423.23 236.36 423.24 236.8 423.04 236.93C422.84 237.06 422.44 236.93 422.13 236.93L422.24 235.81ZM274.66 347.53C274.93 347.63 275.24 347.66 275.3 347.8C275.36 347.94 275.24 348.22 275.2 348.44L274.42 348.25L274.66 347.53ZM378.76 324.26C379.12 324.41 379.5 324.53 379.5 324.59C379.432 324.965 379.332 325.333 379.2 325.69C378.95 325.53 378.55 325.41 378.48 325.19C378.41 324.97 378.63 324.63 378.76 324.26ZM144.6 352.19C144.89 351.95 145.06 351.71 145.23 351.69C145.4 351.67 145.65 351.85 145.86 351.95C145.71 352.12 145.58 352.38 145.41 352.42C145.129 352.389 144.855 352.311 144.6 352.19ZM479.98 294.46C480.278 294.69 480.547 294.955 480.78 295.25C480.815 295.467 480.765 295.689 480.64 295.87C480.281 295.863 479.923 295.826 479.57 295.76C479.681 295.319 479.818 294.885 479.98 294.46ZM181.22 422.65L181.1 423.31L179.68 422.96L179.75 422.52L181.22 422.65ZM173.02 420.79L172.93 420.26L174.84 419.98L174.93 420.53L173.04 420.82L173.02 420.79ZM167.57 369.41C167.378 369.488 167.181 369.552 166.98 369.6L166.41 367.84L166.96 367.65L167.57 369.41ZM478.57 319.19L478.14 318.84C478.61 317.84 478.61 317.84 480.07 317.33C479.41 318.23 479.01 318.72 478.62 319.2L478.57 319.19ZM179.57 466.26C179.68 466.06 179.79 465.85 179.91 465.65L181.77 466.83L181.51 467.27L179.57 466.26ZM370.57 410.54L370.26 410.28L371.35 408.8L371.76 409.14C371.39 409.61 371.02 410.07 370.62 410.54H370.57ZM207.77 402.77L207.88 402.28L209.26 402.56L209.14 403.08L207.77 402.77ZM293.92 364.77H293.34L293.26 363.48L293.66 363.42L293.92 364.77ZM448.46 349.44L448.15 348.87C448.76 348.54 449.33 348.14 450.15 347.63C450.05 349.07 449.5 349.54 448.51 349.46L448.46 349.44ZM192.16 383.01C191.84 383.55 191.75 383.93 191.5 384.01C191.25 384.09 190.93 383.95 190.62 383.91C190.73 383.62 190.76 383.23 190.97 383.06C191.18 382.89 191.55 383.06 192.18 382.99L192.16 383.01ZM474.9 321.12L474.48 320.52C474.93 320.28 475.35 319.98 475.78 319.72L476.05 320.22C475.69 320.52 475.29 320.82 474.9 321.12ZM437.3 234.87C437.472 234.579 437.691 234.318 437.95 234.1C438.06 234.04 438.35 234.27 438.56 234.36C438.463 234.649 438.318 234.92 438.13 235.16C438.07 235.23 437.73 235.07 437.3 234.87ZM468.52 287.67C468.02 287.27 467.73 287.15 467.68 286.96C467.67 286.834 467.69 286.707 467.74 286.59C467.788 286.476 467.859 286.374 467.95 286.29C468.08 286.22 468.51 286.29 468.55 286.39C468.594 286.816 468.594 287.245 468.55 287.67H468.52ZM144.52 439.73L144.58 439.09L146.35 439.36V439.76L144.52 439.73ZM117.65 395.96L117.73 395.44L119.01 395.76L118.93 396.16L117.65 395.96ZM126.71 424.39L126.63 423.81C127.04 423.59 127.49 423.35 128.17 424.2L126.71 424.39ZM121.59 419.25L122.03 419.02L123.03 420.48L122.61 420.71L121.59 419.25ZM108.83 406.15C108.61 406.52 108.52 406.83 108.37 406.86C108.064 406.879 107.758 406.852 107.46 406.78C107.57 406.53 107.62 406.15 107.81 406.05C108 405.95 108.36 406.05 108.81 406.17L108.83 406.15ZM368.83 398.96L370.11 399.67C369.99 399.89 369.91 400.15 369.73 400.26C369.55 400.37 369.18 400.33 369.14 400.26C368.991 399.852 368.888 399.43 368.83 399V398.96ZM99.45 401.62L99.29 400.97L100.73 400.88V401.37C100.32 401.43 99.9 401.54 99.45 401.62ZM341.39 309.76L342.01 310.04C341.89 310.25 341.81 310.52 341.63 310.62C341.45 310.72 341.24 310.54 341.03 310.48L341.39 309.76ZM94.21 412.69C94.1408 412.8 94.0774 412.913 94.02 413.03C93.7452 412.954 93.4825 412.84 93.24 412.69C93.01 412.462 92.8085 412.207 92.64 411.93L92.88 411.72L94.21 412.69ZM285.61 365.99L285.51 366.75L284.14 366.49L284.19 365.95L285.61 365.99ZM260.02 342.35L260.38 342.86L259.38 343.42C259.308 343.322 259.251 343.215 259.21 343.1C259.5 342.81 259.77 342.59 260.06 342.34L260.02 342.35ZM251.75 352.77L252.19 352.83C252.102 353.008 251.995 353.176 251.87 353.33L251.5 353.14C251.6 353.021 251.69 352.894 251.77 352.76L251.75 352.77ZM224.83 367.99L223.83 367.5C223.91 367.36 223.96 367.12 224.07 367.09C224.18 367.06 224.61 367 224.7 367.09C224.779 367.37 224.817 367.659 224.81 367.95L224.83 367.99ZM205.28 331.72L205.39 332.16L204.14 332.49L204.04 332.01L205.3 331.71L205.28 331.72ZM214.98 351.66C214.84 352.03 214.79 352.36 214.67 352.39C214.554 352.411 214.436 352.411 214.32 352.39C214.206 352.365 214.1 352.313 214.01 352.24C213.89 352.14 213.95 351.83 213.94 351.62L214.98 351.66ZM184.33 335.42L184.25 336.06L182.94 335.73L183.01 335.32L184.33 335.42ZM385.07 232.9L386.42 233.47C386.323 233.756 386.177 234.023 385.99 234.26C385.882 234.272 385.773 234.262 385.67 234.229C385.566 234.196 385.471 234.142 385.39 234.07C385.252 233.694 385.168 233.3 385.14 232.9H385.07ZM203.01 390.07V389.61L204.26 389.49V389.96L203.01 390.07ZM186.63 368.71C186.588 368.878 186.532 369.042 186.46 369.2C186.235 369.163 186.014 369.107 185.8 369.03L185.99 368.41L186.63 368.71ZM143.56 309.84C143.27 309.7 142.97 309.65 142.9 309.49C142.83 309.33 142.97 309.06 143.02 308.84C143.286 308.905 143.539 309.013 143.77 309.16C143.82 309.16 143.65 309.56 143.55 309.85L143.56 309.84ZM146.73 328.84L146.07 328.48C146.19 328.31 146.3 328.14 146.42 327.98C146.622 328.111 146.816 328.255 147 328.41L146.72 328.85L146.73 328.84ZM178.62 446.77V446.3C178.81 446.352 178.991 446.429 179.16 446.53C179.13 446.665 179.094 446.799 179.05 446.93L178.62 446.77ZM197.04 371.77C196.48 371.77 196.22 371.89 196.18 371.82C196.062 371.587 195.968 371.342 195.9 371.09L197.04 371.77ZM329.39 324.71C329.64 324.28 329.73 324.03 329.8 324.03C330.075 324.079 330.346 324.149 330.61 324.24C330.25 324.35 329.94 324.48 329.39 324.71ZM374.39 405.46L374.14 405.95L373.14 405.46C373.23 405.33 373.34 405.09 373.38 405.09C373.77 405.19 374.09 405.33 374.39 405.46ZM465.05 277.9C465.41 277.99 465.78 278.03 465.79 278.1C465.801 278.404 465.75 278.707 465.64 278.99C465.64 278.99 465.05 278.99 465.03 278.91C464.991 278.578 464.991 278.242 465.03 277.91L465.05 277.9ZM306.05 367.44C306.399 367.526 306.735 367.657 307.05 367.83C307.05 367.88 306.96 368.43 306.88 368.43C306.563 368.43 306.247 368.39 305.94 368.31L306.05 367.44ZM231.43 375.75L231.87 375.81C231.779 375.988 231.668 376.156 231.54 376.31L231.17 376.13L231.43 375.75ZM191.23 456.19C190.68 457.08 190.09 457.28 189.38 456.12L191.23 456.19ZM153.49 442.65L153.31 442.17L154.76 441.93L154.82 442.22L153.49 442.65ZM174.23 350.9C174.07 350.9 173.88 350.9 173.8 350.9C173.727 350.756 173.68 350.6 173.66 350.44C173.845 350.41 174.035 350.41 174.22 350.44C174.22 350.44 174.22 350.75 174.22 350.92L174.23 350.9ZM158.54 364.35C158.852 364.503 159.141 364.698 159.4 364.93C159.4 364.93 159.18 365.49 159.1 365.47C158.783 365.418 158.482 365.295 158.22 365.11C158.304 364.846 158.408 364.589 158.53 364.34L158.54 364.35ZM131.12 408.43C130.9 408.79 130.81 409.08 130.67 409.11C130.557 409.126 130.441 409.116 130.332 409.081C130.223 409.046 130.124 408.988 130.04 408.91C130 408.714 130.024 408.511 130.11 408.33C130.445 408.33 130.78 408.36 131.11 408.42L131.12 408.43ZM209.2 314.43C209.021 314.633 208.816 314.811 208.59 314.96C208.508 314.962 208.427 314.946 208.351 314.915C208.276 314.885 208.207 314.838 208.15 314.78C208.15 314.57 208.25 314.22 208.37 314.19C208.652 314.233 208.927 314.31 209.19 314.42L209.2 314.43ZM348.2 328.14C348.059 328.315 347.901 328.475 347.73 328.62C347.73 328.62 347.39 328.4 347.41 328.36C347.515 328.161 347.635 327.97 347.77 327.79L348.2 328.14ZM250.99 346.3C251.34 346.3 251.65 346.3 251.8 346.43C251.858 346.528 251.883 346.642 251.872 346.755C251.861 346.868 251.815 346.975 251.74 347.06C251.636 347.119 251.519 347.15 251.4 347.15C251.281 347.151 251.163 347.12 251.06 347.06C250.9 346.99 250.95 346.61 250.95 346.32L250.99 346.3ZM198.93 410.82C199.41 411.05 199.8 411.11 199.93 411.32C200.06 411.53 199.83 411.99 199.65 412.07C199.507 412.105 199.358 412.106 199.215 412.071C199.073 412.036 198.94 411.967 198.83 411.87C198.69 411.71 198.86 411.32 198.93 410.82ZM450.3 303.93C450.21 304.06 450.08 304.31 450.04 304.3C449.855 304.222 449.68 304.121 449.52 304C449.66 303.92 449.77 303.74 449.93 303.78C450.062 303.805 450.188 303.856 450.3 303.93ZM339.85 304.43C339.85 304.65 339.93 304.89 339.85 304.92C339.652 305.012 339.444 305.079 339.23 305.12C339.23 304.97 339.16 304.75 339.23 304.7C339.42 304.585 339.625 304.497 339.84 304.44L339.85 304.43ZM470.3 248.22L470.12 248.61L469.2 248.19L469.37 247.81L470.3 248.22ZM112.13 408.83C112.21 408.61 112.31 408.4 112.4 408.19C112.676 408.41 112.921 408.666 113.13 408.95C113.22 409.1 113.13 409.38 113.13 409.61C112.818 409.608 112.508 409.561 112.21 409.47C112.07 409.44 112.17 409.07 112.13 408.83ZM178.08 319.83L178.21 319.04L179.15 319.27L178.99 319.88L178.08 319.83ZM173.17 362.7C173.419 362.907 173.647 363.138 173.85 363.39C173.91 363.5 173.85 363.79 173.85 363.83C173.652 363.908 173.442 363.952 173.23 363.96L173.17 362.7ZM428.72 334.16L428.8 333.77C428.94 333.7 429.16 333.58 429.23 333.61C429.439 333.769 429.63 333.95 429.8 334.15L428.72 334.16ZM116 423.66C115.76 424.04 115.66 424.34 115.5 424.39C115.379 424.42 115.252 424.42 115.13 424.39C115.009 424.369 114.895 424.318 114.8 424.24C114.74 424.15 114.8 423.65 114.87 423.64C115.245 423.595 115.625 423.595 116 423.64V423.66ZM154.31 415.14C154.55 415.09 154.8 415 154.82 415.04C154.913 415.237 154.99 415.441 155.05 415.65C154.93 415.72 154.69 415.76 154.64 415.7C154.502 415.531 154.391 415.343 154.31 415.14ZM291.74 359.79C291.66 359.92 291.6 360.12 291.49 360.15C291.38 360.18 291.19 360.09 291.03 360.05L291.35 359.52L291.74 359.79ZM383.97 255.96C383.883 256.17 383.749 256.358 383.58 256.51C383.47 256.57 383.22 256.41 383.04 256.35C383.113 256.141 383.207 255.94 383.32 255.75C383.543 255.799 383.761 255.869 383.97 255.96ZM472.25 225.57C472.39 225.57 472.6 225.57 472.65 225.66C472.7 225.75 472.65 225.94 472.65 226.08L472.09 225.98L472.25 225.57ZM359.65 260.94C359.826 261.061 359.987 261.202 360.13 261.36C360.13 261.36 359.91 261.7 359.85 261.68C359.65 261.6 359.459 261.5 359.28 261.38C359.382 261.216 359.499 261.062 359.63 260.92L359.65 260.94ZM86.47 402.26C86.7274 402.468 86.9713 402.691 87.2 402.93C87.2 402.93 87.02 403.29 86.96 403.27C86.6821 403.206 86.4109 403.115 86.15 403L86.47 402.26ZM340.13 299.07C340.19 298.93 340.22 298.72 340.32 298.69C340.474 298.696 340.626 298.727 340.77 298.78C340.71 298.91 340.68 299.13 340.58 299.15C340.426 299.153 340.273 299.126 340.13 299.07ZM401.27 226.15C401.365 226.243 401.452 226.343 401.53 226.45C401.53 226.45 401.44 226.63 401.41 226.62C401.28 226.591 401.153 226.55 401.03 226.5L401.27 226.15ZM373.2 258.64C373.455 258.718 373.698 258.833 373.92 258.98C373.92 259.05 373.92 259.39 373.85 259.42C373.641 259.47 373.425 259.49 373.21 259.48L373.2 258.64ZM175.54 417.42C175.433 417.65 175.288 417.859 175.11 418.04C174.968 418.095 174.812 418.095 174.67 418.04C174.67 417.84 174.6 417.49 174.67 417.43C174.956 417.367 175.252 417.364 175.54 417.42ZM418.54 347.24C419.13 347.53 419.54 347.62 419.54 347.73C419.539 347.851 419.511 347.97 419.46 348.08C419.411 348.184 419.339 348.276 419.25 348.35C419.146 348.37 419.039 348.365 418.937 348.333C418.836 348.302 418.744 348.246 418.67 348.17C418.581 347.868 418.537 347.555 418.54 347.24ZM194.39 359.07C194.084 359.357 193.748 359.612 193.39 359.83C193.27 359.89 193.08 359.74 192.92 359.68C193.02 359.49 193.06 359.2 193.21 359.13C193.599 359.06 193.996 359.04 194.39 359.07ZM194.17 464.36L194.31 463.91L195.2 464.33L195.09 464.61L194.17 464.36ZM173.17 428.36C173.25 428.24 173.31 428.04 173.41 428.03C173.56 428.048 173.706 428.092 173.84 428.16L173.54 428.64L173.17 428.36ZM185.26 457.23L185.33 457.66L184.2 457.85L184.14 457.42C184.52 457.35 184.89 457.28 185.27 457.23H185.26ZM387.39 241.27C387.46 240.93 387.44 240.64 387.58 240.51C387.72 240.38 388 240.36 388.22 240.3C388.247 240.579 388.223 240.86 388.15 241.13C388.1 241.24 387.74 241.22 387.4 241.27H387.39ZM371.09 264.16C371.36 264.27 371.67 264.32 371.74 264.47C371.81 264.62 371.66 264.91 371.6 265.14L370.79 264.89L371.09 264.16ZM189.66 333.07C189.66 333.21 189.6 333.44 189.5 333.48C189.428 333.5 189.352 333.5 189.28 333.48C189.206 333.46 189.14 333.418 189.09 333.36C189.04 333.27 189.14 333.07 189.18 332.92L189.66 333.07ZM161.27 316.44L161.18 316.81C161.031 316.782 160.891 316.72 160.77 316.63C160.68 316.53 160.83 316.39 160.86 316.27L161.27 316.44ZM414.1 352.17L414.64 352.45C414.474 352.757 414.29 353.054 414.09 353.34C413.9 353.257 413.716 353.16 413.54 353.05C413.74 352.75 413.91 352.46 414.1 352.17ZM411.1 356.87C411.313 356.553 411.573 356.27 411.87 356.03C412.05 355.93 412.31 356.03 412.54 355.97C412.54 356.2 412.54 356.5 412.42 356.64C412.3 356.78 412 356.71 411.06 356.87H411.1ZM134.8 387.71C134.66 388.01 134.6 388.33 134.46 388.39C134.32 388.45 134.02 388.29 133.8 388.23C133.87 388.02 133.88 387.69 134.02 387.62C134.16 387.55 134.51 387.68 134.86 387.74L134.8 387.71ZM472.96 298.19C472.871 298.395 472.75 298.584 472.6 298.75C472.51 298.8 472.31 298.75 472.15 298.75L472.51 297.97L472.96 298.19ZM157.65 435.54C157.5 435.54 157.29 435.54 157.19 435.45C157.09 435.36 157.19 435.17 157.19 435.03C157.35 435.03 157.55 435.03 157.64 435.12C157.73 435.21 157.64 435.41 157.64 435.56L157.65 435.54ZM449.03 265.07C449.36 265.07 449.69 265.07 449.77 265.19C449.804 265.297 449.804 265.413 449.77 265.52C449.762 265.632 449.724 265.739 449.66 265.83C449.439 265.872 449.211 265.872 448.99 265.83L449.03 265.07ZM147.74 281.92C147.82 281.8 147.88 281.59 147.96 281.58C148.04 281.57 148.23 281.69 148.37 281.77C148.3 281.89 148.23 282.1 148.15 282.11C148.07 282.12 147.88 281.99 147.74 281.92ZM158.68 449.67V449.21C158.87 449.21 159.07 449.21 159.27 449.21C159.27 449.35 159.27 449.56 159.12 449.66C158.97 449.76 158.87 449.67 158.68 449.67ZM110.23 402.33C110.57 402.56 110.85 402.66 110.95 402.85C110.989 402.947 110.996 403.054 110.969 403.155C110.942 403.256 110.883 403.346 110.8 403.41C110.691 403.435 110.579 403.435 110.47 403.41C110.358 403.39 110.252 403.346 110.16 403.28C110.08 403.22 110.16 402.9 110.24 402.28L110.23 402.33ZM300.53 472.65V473.13H299.48V472.83L300.53 472.65ZM105.53 399.65L105.74 399.2L106.53 399.74L106.36 400.01L105.53 399.65ZM379.91 378.52H379.11C379.17 378.3 379.11 378 379.27 377.89C379.43 377.78 379.71 377.83 379.95 377.81L379.91 378.52ZM121.39 436.36L121.54 435.8L122.54 436.23L122.43 436.6L121.39 436.36ZM106.56 408.74C106.972 408.836 107.38 408.952 107.78 409.09C107.78 409.09 107.71 409.65 107.63 409.67C107.329 409.704 107.024 409.666 106.74 409.56C106.63 409.56 106.66 409.19 106.57 408.75L106.56 408.74ZM120.09 433.27L120.02 433.79C119.789 433.744 119.564 433.67 119.35 433.57C119.341 433.432 119.368 433.294 119.43 433.17C119.654 433.181 119.875 433.218 120.09 433.28V433.27ZM315.69 356.94L316.31 357.18C316.25 357.33 316.19 357.58 316.1 357.59C315.885 357.588 315.672 357.551 315.47 357.48L315.69 356.94ZM84.39 377.5L84.26 377.91C84.1 377.85 83.9 377.82 83.81 377.71C83.72 377.6 83.88 377.44 83.93 377.31L84.39 377.5ZM131.39 435.32C131.39 435.1 131.39 434.87 131.49 434.65L132.56 434.87L132.42 435.49L131.39 435.32ZM191.09 394.48L191.69 394.73C191.63 394.86 191.57 395.12 191.5 395.12C191.278 395.092 191.06 395.038 190.85 394.96L191.09 394.48ZM64.44 377.26C64.23 377.65 64.17 377.93 64.02 377.98C63.9087 378.01 63.7913 378.01 63.68 377.98C63.5708 377.962 63.4678 377.917 63.38 377.85C63.3207 377.658 63.3207 377.452 63.38 377.26C63.7423 377.22 64.1078 377.22 64.47 377.26H64.44ZM390.44 354.15L390.94 354.1C390.94 354.25 390.94 354.46 390.88 354.5C390.727 354.546 390.569 354.576 390.41 354.59L390.44 354.15ZM126.19 426.82L126.37 427.16C126.27 427.27 126.17 427.47 126.07 427.48C125.794 427.472 125.52 427.439 125.25 427.38C125.57 427.2 125.87 427.01 126.19 426.82ZM163.95 445.27C163.83 445.49 163.74 445.75 163.7 445.75C163.48 445.689 163.266 445.609 163.06 445.51C163.14 445.37 163.2 445.11 163.29 445.11C163.516 445.137 163.737 445.191 163.95 445.27Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M241.92 296.07C243.68 298.53 246.48 299.27 249.05 300.26C250.74 300.9 251.87 299.69 251.48 297.79C251.19 296.36 251.65 295.5 252.95 294.53C254.77 297.34 254.35 300.3 254.43 303.17C253.01 304.17 251.52 302.54 250.08 303.7C249.03 304.57 247.46 304.81 245.77 305.46C246.44 305.83 246.83 306.22 247.13 306.17C249.135 305.998 251.153 306.24 253.06 306.88C253.566 306.978 254.087 306.961 254.585 306.832C255.083 306.702 255.546 306.462 255.94 306.13C257.16 304.78 258.21 305.18 259.46 305.81C260 306.1 260.54 306.45 261.22 306.81V309.27C261.503 309.3 261.788 309.3 262.07 309.27C263.449 308.844 264.903 308.712 266.337 308.885C267.77 309.057 269.151 309.529 270.39 310.27C271.054 310.712 271.824 310.971 272.62 311.02C276.42 310.96 279.44 313.37 283.12 314.02L282.78 315.9L282.63 316.62C283.331 316.605 284.033 316.635 284.73 316.71C285.13 316.76 285.73 316.88 285.87 317.14C286.79 319.34 289.03 318.94 290.8 319.97C290.826 319.069 290.633 318.175 290.238 317.365C289.842 316.556 289.256 315.854 288.53 315.32C287.16 314.24 285.68 313.51 284.29 312.6C282.16 311.2 280.09 309.41 280.23 306.19C280.885 306.365 281.554 306.482 282.23 306.54C282.446 306.529 282.662 306.552 282.87 306.61C283.076 306.679 283.266 306.788 283.43 306.93C283.593 307.071 283.726 307.242 283.822 307.434C283.918 307.626 283.975 307.836 283.99 308.05C284.006 308.226 284.036 308.4 284.08 308.57C285.23 311.48 286.68 312.01 289.83 310.46C288.83 309.76 288.26 308.94 288.83 307.76C289.26 306.82 289.38 305.36 290.09 305.01C291.31 304.41 291.21 303.51 291.14 302.17C292.59 303.17 293.82 303.77 295.49 302.7L292.95 301.54C294.67 299.79 295.95 298 295.34 295.54C295.22 294.97 295.73 294.25 295.99 293.62C296.246 293.013 296.296 292.338 296.13 291.7C295.958 291.059 295.57 290.497 295.03 290.11L294.76 292.03C294.018 291.932 293.333 291.579 292.822 291.032C292.312 290.485 292.007 289.777 291.96 289.03C290.96 289.82 290.06 290.03 290.27 291.62C290.48 293.21 288.79 292.77 287.83 293.28L288.53 299.53L285.14 298.75L287.22 297.62C285.38 295.89 286.77 293.75 286.43 291.79C284.5 291.99 284.5 291.99 283.83 289.66L286.4 291.87C288.04 290.87 287.01 289.35 287.05 287.87C287.828 287.945 288.612 287.945 289.39 287.87C290.155 287.75 290.885 287.467 291.53 287.04C291.707 286.942 291.85 286.792 291.94 286.61C292.034 286.432 292.071 286.23 292.048 286.03C292.025 285.83 291.942 285.642 291.81 285.49C291.677 285.334 291.499 285.222 291.3 285.17C290.46 284.8 289.21 284.93 289.09 283.68C288.95 282.391 288.95 281.09 289.09 279.8C289.31 278.545 289.61 277.306 289.99 276.09C290.185 276.41 290.448 276.683 290.76 276.89C291.078 277.091 291.437 277.217 291.81 277.26C292.182 277.302 292.558 277.258 292.91 277.13C293.261 277.003 293.579 276.798 293.84 276.53C294.451 277.917 294.913 279.366 295.22 280.85C295.41 282.7 296.41 283.4 298.28 283.85C298.28 282.95 298.34 282.21 298.38 281.47C298.47 280.19 298.52 278.85 298.64 277.56C298.631 277.358 298.669 277.156 298.75 276.97C298.831 276.787 298.95 276.623 299.1 276.49C299.255 276.363 299.436 276.271 299.63 276.22C299.828 276.175 300.033 276.175 300.23 276.22C301.23 276.35 301.49 277.01 301.17 277.95C301.17 278.08 301.24 278.27 301.28 278.42C302.65 277.1 302.64 276.72 301.48 275.42C301.068 274.934 300.793 274.347 300.68 273.72C300.68 273.51 301.47 272.91 301.81 272.98C302.513 273.21 303.165 273.574 303.73 274.05C303.847 274.184 303.936 274.341 303.99 274.51C304.05 274.676 304.07 274.854 304.05 275.03C303.78 277.57 305.57 279.57 305.74 281.89C307.14 281.53 308.41 281.21 309.9 280.89C309.28 279.41 310.07 278.48 311.21 277.54C312.01 276.668 312.733 275.728 313.37 274.73C313.715 274.257 314.13 273.839 314.6 273.49C315.383 273.007 316.191 272.567 317.02 272.17C317.19 274.74 316.94 275.04 314.02 275.64L312.93 278.39L313.63 278.76C314.104 278.368 314.598 278.001 315.11 277.66C315.48 277.46 316.17 277.08 316.26 277.21C317.42 278.86 318.17 277.07 319.11 276.89L321.7 280.52C323.31 279.78 325.02 279.14 326.08 277.28L324.8 276.28C324.715 274.878 324.715 273.472 324.8 272.07C325.038 270.751 325.372 269.451 325.8 268.18L323.93 267.48L324.37 264.89C324.71 263.19 324.96 261.48 325.13 259.75C325.13 259.37 324.29 258.64 323.77 258.57C321.77 258.33 319.77 258.28 317.68 258.19L317.92 256.49L314.71 256.4C315.08 253.49 316.54 253.68 317.81 253.64L318.51 250.99L316.73 248.92L318.26 244.25L316.62 243.91L316.87 240.98L313.31 241.55C313.04 239.7 312.42 238.18 310.18 238.04C309.63 238.04 309.13 237.2 308.32 236.5C310.32 235.93 311.63 235.66 312.92 236.96C313.687 237.54 314.536 238.002 315.44 238.33C316.97 238.19 316.56 235.87 318.55 236.38L317.55 238.91L320.08 237.2L319.57 235.36C320.44 233.45 322.47 234.72 323.84 233.71C322.29 230.49 323.92 228.4 326.45 226.71C326.01 224.98 324.31 225.96 322.98 224.96L327.17 223.63L328.62 226.29C329.95 226.48 330.62 224.86 332.14 225.73C332.99 226.21 334.45 225.64 335.68 225.34C334.22 224.42 332.47 223.95 331.93 222.09C331.726 221.857 331.464 221.681 331.17 221.58C330.56 221.33 329.93 221.1 328.98 220.73L326.93 221.85L327.66 220.22L324.96 220.11C324.96 219.11 325.24 218.02 324.89 217.28C324.54 216.54 323.53 216.46 322.71 216.01C323.1 214.47 325.05 215.01 325.81 213.56L323.74 212.86C324.65 212.04 325.39 211.37 326.21 210.61C325.682 210.116 325.331 209.463 325.21 208.75C325.089 208.034 325.201 207.298 325.53 206.65C325.598 206.439 325.714 206.247 325.87 206.09C326.022 205.93 326.211 205.809 326.42 205.74C326.627 205.662 326.851 205.638 327.07 205.67C327.288 205.7 327.497 205.778 327.68 205.9C328.59 206.41 329.4 207.05 330.29 207.64C330.03 209.76 328.29 210.94 327.29 212.74C329.42 213.5 331.56 214.1 332.29 216.44C333.71 216.44 335.08 216.65 335.93 215.07C332.93 212.51 331.65 209.45 333.64 205.51C335.87 206.39 336.11 209.74 338.94 209.65C338.43 206.44 338.43 206.44 336.08 205.74C336.51 205.17 336.93 204.64 337.46 203.93C339.15 205.71 340.6 207.75 343.36 207.98C343.93 207.05 344.54 206.11 345.14 205.1C345.29 205.034 345.426 204.939 345.54 204.82C345.93 204.61 346.27 204.32 346.64 204.09C346.739 204.207 346.829 204.33 346.91 204.46L345.6 205.17C345.48 205.24 345.28 205.17 345.12 205.1L347.36 206.53C348.613 204.015 350.749 202.049 353.36 201.01L353.73 201.45C353.481 201.729 353.207 201.983 352.91 202.21C351.08 203.38 351.1 203.64 352.86 205.1H352.76C353.62 203.4 354.4 201.6 356.76 201.1L359.64 203.67C360.19 203.37 360.75 202.97 361.38 202.58C361.72 202.77 362.11 203.2 362.44 203.17C362.706 203.148 362.964 203.073 363.2 202.95C363.429 202.822 363.63 202.648 363.79 202.44C364.171 201.325 364.479 200.186 364.71 199.03L362.35 200.31L362.16 199.75L364.68 199.09L366.04 199.2L365.77 200.57C369.34 201.51 369.9 203.25 367.08 205.8C367.48 206.52 367.81 207.13 368.91 206.63C369.615 206.364 370.377 206.288 371.12 206.41C372.46 206.61 372.48 206.66 373.85 205.41L376.32 206.78C375.42 207.78 374.65 208.66 373.65 209.78C374.3 210.5 374.95 211.27 375.65 211.98C376.96 213.28 376.97 213.25 378.46 211.84C378.791 211.577 379.15 211.353 379.53 211.17L380.48 210.66L379.3 207.66L382.81 209.07C384.26 207.2 382.38 206.62 381.16 205.4C382.219 205.387 383.264 205.156 384.229 204.721C385.195 204.285 386.06 203.655 386.77 202.87C383.93 202.64 381.67 204.95 378.51 203.67L380.58 200.95C381.99 200.52 383.42 198.81 385.34 197.38C383.49 197.01 382.59 195.77 381.74 194.06L386.62 191.06L388.04 194.3L388.52 194.25L389.23 191.47H389.77L390.42 192.86C390.658 192.629 390.875 192.378 391.07 192.11C392.59 189.29 392.96 189.17 395.9 190.58C397.13 189.91 397.9 189.25 397.35 187.51C397.11 186.81 398.02 185.74 398.49 184.67C400.65 185.96 401.57 183.89 403.43 183.53L402.1 181.44L402.8 175.81L403.66 175.9L400.46 172.06L400.99 169.87L399.46 168.87C398.72 167.03 398.12 165.63 397.63 164.19C397.31 163.3 397.18 162.34 396.93 161.42C396.59 160.17 396.26 159.94 394.66 159.84L395.49 161.84C395 161.74 394.67 161.77 394.55 161.63C392.93 159.63 391.22 157.63 389.76 155.47C388.53 153.68 388.69 151.67 389.03 149.6C389.59 149.47 390.11 149.32 390.55 149.24L390.25 148.17L392.51 147.37C391.61 146.37 389.99 146.13 390.57 144.14C391.679 143.932 392.802 143.808 393.93 143.77C394.213 143.788 394.486 143.881 394.72 144.04C394.962 144.192 395.161 144.401 395.3 144.65C395.69 147.04 397.65 148.53 398.56 150.65C399.47 152.77 402.64 153 404.37 151.44C404.65 151.18 404.94 150.88 405.55 150.27C405.77 152.45 407.24 153.61 407.95 155.27C410.25 154.39 409.85 152.27 410.09 150.15C410.622 150.19 411.156 150.16 411.68 150.06C412.283 149.854 412.831 149.512 413.28 149.06C413.98 148.24 414.54 147.31 415.28 146.31H413.46C412.771 145.466 412.181 144.547 411.7 143.57C411.396 142.702 410.85 141.938 410.128 141.367C409.405 140.797 408.536 140.444 407.62 140.35C406.68 140.17 405.57 140.02 405.75 138.64C405.86 137.84 407.62 136.64 408.51 136.64C409.18 136.64 409.86 136.64 410.51 136.52C410.689 136.317 410.847 136.096 410.98 135.86L408.67 135.08L409.67 130.56C408.25 129.87 407.74 131.05 407.01 132.12L405.01 130.36L402.52 131.02C401.73 131.82 402.19 133.47 400.52 133.79C400.36 132.48 399.14 131.61 399.52 130.01C399.76 128.94 398.81 128.53 397.79 128.64C397.115 128.799 396.424 128.883 395.73 128.89C395.51 128.892 395.292 128.848 395.09 128.76C394.884 128.671 394.702 128.534 394.56 128.36C394.413 128.191 394.307 127.99 394.251 127.773C394.196 127.556 394.192 127.329 394.24 127.11C394.274 126.89 394.356 126.679 394.478 126.493C394.6 126.307 394.761 126.149 394.95 126.03C395.137 125.912 395.346 125.834 395.565 125.8C395.783 125.765 396.006 125.776 396.22 125.83C396.73 125.9 397.22 126.28 397.69 126.26C398.16 126.24 398.69 126.02 398.74 125.79C398.79 125.559 398.79 125.321 398.74 125.09C398.68 124.859 398.571 124.644 398.42 124.46C397.858 124.098 397.239 123.831 396.59 123.67L397.15 117.21L401.91 118.21C402.91 117.21 403.67 116.45 404.73 115.44L400.73 111.96C401.147 111.488 401.588 111.038 402.05 110.61C403.43 109.49 403.46 108.87 402.05 107.8C401.523 107.462 400.959 107.184 400.37 106.97C400.13 107.34 399.95 107.63 399.76 107.9C399.576 108.134 399.379 108.358 399.17 108.57L396.27 107.25C395.85 107.71 395.46 108.15 395.2 108.42L391.52 107.76L392.18 106.17C391.12 104.85 391.12 104.85 388.18 104.76C386.36 106.3 384.85 108.61 382.01 107.37C380.23 108.27 381.01 109.89 380.71 111.3L378.5 111.76L383.26 114.93L383.94 114.17L387.15 116.3C387.28 118.93 386.93 119.24 384.42 118.58C384.33 119.09 384.73 119.65 386.67 121.69C387.32 121.617 387.925 121.32 388.38 120.85C388.832 120.377 389.108 119.762 389.16 119.11C390.44 118.51 391.5 118.01 392.81 117.41C392.651 117.98 392.45 118.539 392.21 119.08C390.87 121.6 391.35 122.41 394.3 122.55L394.69 124.17L392.24 128.71C391.98 128.85 391.16 129.1 390.12 129.49C390.12 128.9 390.26 128.33 390.05 127.99C389.922 127.744 389.741 127.529 389.52 127.36C389.302 127.19 389.05 127.071 388.78 127.01C387.485 127.008 386.192 127.132 384.92 127.38C384.161 127.48 383.445 127.788 382.85 128.27C381.732 129.359 380.242 129.982 378.682 130.012C377.121 130.041 375.608 129.476 374.45 128.43C372.69 126.82 370.97 125.15 369.09 123.38C369.306 122.878 369.493 122.364 369.65 121.84C369.93 120.76 369.03 119.33 368.14 119.66C365.44 120.66 363 119.11 360.32 119.31C360.41 116.52 358.5 115.19 356.53 114.22C354.3 113.11 353.06 115.01 352.15 116.29C350.49 115.96 349.15 115.75 347.75 115.4C347.058 115.155 346.389 114.851 345.75 114.49C344.977 115.207 344.083 115.782 343.11 116.19C342.529 116.257 341.942 116.142 341.43 115.861C340.918 115.579 340.505 115.146 340.25 114.62L341.92 112.77L341.67 112.3C340.464 112.549 339.286 112.914 338.15 113.39C337.402 113.817 336.522 113.953 335.68 113.77C334.993 113.713 334.302 113.737 333.62 113.84C330.711 113.883 327.919 114.997 325.78 116.97C324.66 117.97 324.28 117.85 322.78 117.42C323.01 116.17 323.61 114.84 323.37 113.7C323.13 112.56 322.02 111.78 321.29 110.83C319 112.28 318.08 112.21 316.83 110.53C315.91 109.27 316.21 108.21 317.7 107.74C318.605 107.569 319.488 107.293 320.33 106.92L317.7 105.92L320.52 104.92C319.99 104.29 319.59 103.67 318.63 104C315.74 106 314.08 105.91 311.63 103.53L314.38 102.36C314.463 102.662 314.606 102.944 314.8 103.19C315.003 103.432 315.251 103.632 315.53 103.78C315.813 103.922 316.124 104 316.44 104.01C316.755 104.021 317.068 103.967 317.36 103.85C317.806 103.837 318.252 103.894 318.68 104.02C318.019 103.235 317.452 102.376 316.99 101.46C316.882 101.236 316.841 100.987 316.87 100.74C316.907 100.491 317.023 100.26 317.2 100.08C317.371 99.9007 317.596 99.7815 317.84 99.7401C318.083 99.6894 318.337 99.721 318.56 99.8301C319.7 100.2 320.75 101.25 321.89 99.8801C322.97 101.05 324.19 99.7701 325.35 100.05C325.73 100.14 326.25 99.6901 326.84 99.4401C326.18 97.9101 325.56 96.8201 323.84 96.4401C323.028 96.3408 322.247 96.068 321.55 95.6401C320.851 95.2105 320.254 94.6338 319.8 93.9501C319.38 93.1901 317.88 93.1001 316.56 92.5301L316.21 90.7101C317.58 90.6301 318.81 90.5301 320.21 90.5001L320.55 93.0701C321.87 92.0701 322.94 91.2701 324.2 90.3301C324.594 91.2979 325.336 92.0831 326.28 92.531C327.224 92.979 328.301 93.0571 329.3 92.7501C330.1 92.5801 331.02 93.0401 331.91 93.0301C332.891 92.9902 333.869 92.9001 334.84 92.7601L335.03 92.1401L331.71 89.1401L331.01 91.0101C329.01 91.8001 328.1 89.1801 326.01 89.5701C324.42 89.8601 322.63 89.0301 320.93 88.7001C320.1 86.8801 322.47 86.2201 322.26 84.4901C321.76 84.2801 321.15 84.0501 320.44 83.7901C320.44 82.7901 321.22 81.5501 319.66 80.9201C319.4 80.8101 319.45 79.9901 319.34 79.4901L318.65 76.6001C317.41 77.5101 316.4 78.1701 315.51 78.9501C315.035 79.4257 314.658 79.9896 314.4 80.6101C313.53 82.5601 312.19 82.9201 310.55 81.6101C309.921 81.1649 309.251 80.7799 308.55 80.4601C307.39 79.8601 306.22 79.3301 305.2 78.8201L299.46 79.8201C298.69 78.7601 301.1 77.2801 298.46 77.0301L298 78.8201L294.79 77.6101C294.57 76.4201 294.39 74.9001 292.79 74.1701C292.603 74.068 292.445 73.92 292.33 73.7401C292.212 73.5604 292.14 73.3543 292.12 73.1401C292.4 71.4001 291.38 69.9201 291.24 68.3601C291.15 67.1201 290.47 67.2801 289.85 66.8901L288.85 68.4101C287.95 66.1501 285.42 64.9201 286.2 62.1901C284.2 61.6501 284.2 61.6301 283.2 63.5601C282.64 64.6301 282.2 65.7501 281.6 67.0401L278.88 67.7201C280.11 68.2201 281.21 68.3601 281.8 68.9901C282.39 69.6201 282.39 70.6701 282.74 71.8601C281.451 71.8703 280.163 71.77 278.89 71.5601C278.296 71.4233 277.678 71.4337 277.088 71.5906C276.499 71.7475 275.957 72.046 275.51 72.4601C274.29 73.3801 273.14 74.3801 271.68 75.5601C274.08 75.7901 275.88 72.4701 278.29 75.3801C277.23 75.3801 276.42 75.3801 275.54 75.3001C274.45 76.6401 273.28 77.9201 271.2 76.9901C270.76 76.8001 269.86 77.3101 269.35 77.7301C268.948 78.0647 268.459 78.2765 267.94 78.3401C267.423 78.4077 266.898 78.3207 266.43 78.0901C266.61 76.1601 268.29 75.7001 269.78 74.7501L267.54 73.0701C269.39 72.0701 272.21 72.5901 272.6 69.4201C271.499 69.459 270.397 69.3616 269.32 69.1301C268.262 68.6609 267.256 68.081 266.32 67.4001C264.94 68.4001 263.77 69.2801 262.46 70.2701L261.26 68.6201C260.21 68.7172 259.208 69.1056 258.367 69.7417C257.526 70.3778 256.879 71.2362 256.5 72.2201C256.342 72.7123 256.047 73.1494 255.65 73.4801C255.25 73.8072 254.764 74.012 254.25 74.0701C252.79 74.3701 251.36 74.8401 249.74 75.2901C249.435 74.9537 249.068 74.6787 248.66 74.4801C248.052 74.2945 247.414 74.2266 246.78 74.2801C246.4 76.0201 244.67 75.4201 243.72 76.1201C243.59 76.2001 243.55 76.4101 243.34 76.7701L247.19 78.4301C246.19 79.5901 244.76 79.8601 243.19 80.3701L242.89 78.0701C241.11 77.8101 239.27 76.8301 237.08 78.1801C238.31 78.8901 239.23 79.4101 240.13 79.9401C241.46 80.6901 240.46 82.0601 240.99 83.2701L243.18 83.3901L245.1 83.5001L245.16 84.0801C244.37 84.2601 243.58 84.3901 242.8 84.6101C240.61 85.2401 240.35 86.1201 241.75 88.1701C242.57 87.9901 243.4 87.7801 244.23 87.6101C244.34 87.5501 244.52 87.7901 244.85 88.0201L242.17 94.4001L243.65 95.4001C246.25 93.4001 246.25 93.4001 249.18 94.2501C249.1 95.1501 249.09 96.0901 248.94 97.0201C248.49 99.9601 248.52 100.02 251.05 101.67C251.49 101.94 251.88 102.28 252.31 102.59C252.58 102.333 252.938 102.19 253.31 102.19C253.682 102.19 254.041 102.333 254.31 102.59C255.6 103.67 255.6 103.67 254.47 104.59L254.34 102.53H252.34C250.24 105.2 247.22 105.19 244.11 105.16C243.94 106.32 242.65 107 243.4 108.37C243.51 108.59 242.68 109.32 242.17 109.94L240.39 107.66C239.93 108.51 239.39 109.07 239.39 109.66C239.39 111.66 238.08 112.32 236.39 112.75C233.39 113.56 230.39 114.46 227.24 115.37L227.79 117.9L226.43 118.64C226.507 119.157 226.543 119.678 226.54 120.2C226.413 120.867 226.313 121.533 226.24 122.2C226.3 124.85 226.34 124.85 223.6 125.5C224.6 127.19 226.2 125.76 227.44 126.31L226.95 127.51C228.53 127.04 230 125.79 231.74 127.27L231.32 129.52C232.79 129.18 234.25 128.86 235.69 128.52C237.13 128.18 238.69 127.79 240.19 127.44C239.37 129.62 239.19 129.72 233.86 131.35C234.99 132.47 236.21 131.98 237.56 131.7C237.2 132.11 236.87 132.53 236.26 133.24L240.05 132.66C239.66 133.82 239.4 134.66 239.1 135.44C238.28 137.65 238.48 138.15 240.58 139.09C240.98 139.26 241.4 139.39 241.91 139.59V141.59C243.91 142.43 246.08 141.14 248.28 142.65C246.08 143.45 243.66 143.21 242.54 145.65C243.325 145.931 243.993 146.466 244.44 147.17C244.882 147.877 245.078 148.71 245 149.54C245 150.28 245.74 151.03 246.21 151.89C247.7 151.39 248.39 150.13 249.28 149.13V149.05C250.052 149.2 250.834 149.291 251.62 149.32C253.52 149.32 254.55 150.19 254.79 152.32C254.36 152.72 253.79 153.23 253.09 153.94C253.535 153.99 253.985 153.99 254.43 153.94C255.99 153.43 257 153.84 257.25 155.69C257.96 155.56 258.53 155.45 259.11 155.36C259.436 155.273 259.777 155.256 260.11 155.31C260.433 155.352 260.743 155.461 261.02 155.63C261.298 155.8 261.542 156.021 261.74 156.28C261.932 156.541 262.071 156.836 262.15 157.15C262.35 158.583 262.31 160.04 262.03 161.46C261.75 162.98 261.6 162.92 263.43 164.03C264.54 163.03 265.7 162.03 267.18 160.76L269.5 162.76L271.98 162.45L270.3 159.67C270.91 159.56 271.43 159.48 272.07 159.35L272.56 161.09C274.14 161.2 275.74 160.43 276.95 162.16C277.31 162.67 278.88 162.34 280.18 162.42C279.85 162.95 279.65 163.29 279.38 163.75C279.67 163.9 279.98 164.21 280.22 164.16C281.05 163.99 282.27 163.23 282.59 163.52C283.59 164.39 284.18 163.57 285.01 163.44C285.889 163.157 286.825 163.102 287.73 163.28C288.384 163.554 289.099 163.65 289.802 163.556C290.505 163.463 291.17 163.185 291.73 162.75L290.66 160.75C292.39 161.46 292.39 161.46 291.66 162.69C295.16 162.89 297.58 165.62 300.66 166.69C301.29 166.92 301.66 167.94 302.22 168.69C302.521 167.641 302.589 166.538 302.42 165.46C302.258 164.392 301.873 163.37 301.29 162.46L305.44 160.55L305.04 162.23C306.86 161.77 308.47 161.31 309.04 159.35C308.65 157.49 305.35 158.45 305.76 155.78L309.52 153.95C309.757 154.9 309.944 155.861 310.08 156.83C310.17 157.69 310.33 158.55 311.3 158.55C312.27 158.55 313.44 157.83 313.24 156.85C312.9 155.27 314.13 154.96 314.99 153.73L315.33 157.97C315.878 158.166 316.372 158.491 316.768 158.918C317.165 159.344 317.454 159.859 317.61 160.42C318.394 161.881 319.279 163.284 320.26 164.62C320.57 165.18 321.02 166 320.79 166.51C320.522 167.207 320.439 167.962 320.55 168.7C320.67 169.43 320.973 170.118 321.43 170.7C322.61 172.52 323.83 174.21 325.12 176.08C324.726 176.187 324.312 176.204 323.91 176.13C322.98 175.65 322.1 175.05 321.22 174.5C320.05 173.82 319.02 172.71 317.4 173.41C317.15 173.55 316.6 173.19 316.27 172.95C315.59 172.43 314.96 171.82 314.33 171.25C311.82 172.12 311.24 172.78 310.67 175.39L307.79 176.69L308.32 179.06C304.42 179.59 301.32 181.51 298.11 183.58L299.26 185.24L294.83 188.24C294.6 187.61 294.53 186.74 294.07 186.34C293.427 185.887 292.666 185.63 291.88 185.6C291.601 185.572 291.319 185.599 291.05 185.68C290.781 185.764 290.532 185.903 290.32 186.09C289.7 186.88 290.41 187.28 291.05 187.67C291.212 187.838 291.347 188.031 291.45 188.24C291.12 188.72 290.77 189.24 290.17 190.09L295.06 191.09C293.797 191.863 292.496 192.571 291.16 193.21C290.326 193.432 289.463 193.53 288.6 193.5C288.44 193.5 288.27 193.39 288.11 193.35C285.03 192.76 284.22 193.46 284.38 197.04C287.12 196.78 289.72 195.71 292.85 195.54C291.549 196.639 289.984 197.38 288.31 197.69C286.17 198 285.37 199.06 285.98 200.96C286.62 203.07 287.34 205.2 288.03 207.33L287.62 207.73L285.39 206.5C285.386 207.182 285.58 207.851 285.947 208.426C286.314 209 286.84 209.457 287.46 209.74C289.01 210.8 290.4 212.07 292 213.36C290.14 214.46 289.54 213 288.38 212C288.38 214.23 286.63 216.12 288.83 218.08L287.06 218.79C288.66 221.39 291.06 218.92 293.06 219.96L289.62 223.4C291.48 224.56 291.48 224.56 292.62 222.06L294.71 224.06L296.81 223.24L296.33 224.8C298.68 224.96 298.6 227.08 298.97 228.53C299.34 229.98 300.24 231.53 298.69 233.2H300.92C300.14 234.36 299.52 235.3 298.7 236.51L302.02 236.65C301.35 237.93 299.02 237.31 299.81 239.39L298.08 238.98C297.08 239.98 298.36 242.52 295.74 242.1L298.39 244.87C297.75 247.27 295.39 244.8 294.54 246.69L296.48 247.69C295.85 248.79 293.9 249.69 295.97 251.28C294.91 251.58 293.82 251.58 293.35 252.14C292.88 252.7 293.29 253.74 293.16 254.55C292.99 255.631 292.75 256.7 292.44 257.75C292.44 257.88 291.98 257.9 291.6 258.02C290.82 256.12 291.72 253.71 289.79 252.14C288.51 253.25 288.86 254.76 288.95 256.65C287.53 254.65 286.77 256.71 285.59 256.58L284.59 253.91C283.86 254.84 283.4 255.41 282.95 256.03C281.7 253.38 280.29 253.14 275.95 256.24C276.03 255.51 276.09 255 276.15 254.34C272.63 254.25 271.01 251.26 268.27 249.34L262.7 252.34L260.39 251.17C261.13 252.93 262.12 254.17 260.72 255.5C260.187 256.042 259.488 256.391 258.735 256.491C257.981 256.59 257.216 256.435 256.56 256.05C256.77 258.4 257.11 258.62 260.56 258.91L259.99 261.27L262.23 262.27C262.23 264.84 260.89 266.59 258.71 267.88L259.8 269.88C259.36 270.12 259.04 270.42 258.67 270.6C256.74 271.6 256.81 271.54 257.67 273.51C258.109 274.79 258.47 276.096 258.75 277.42L256.08 276.07L257.22 273.47C256.534 273.37 255.836 273.37 255.15 273.47C254.893 273.559 254.657 273.702 254.46 273.89C254.265 274.076 254.118 274.306 254.03 274.56C253.68 277.29 253.28 277.94 250.89 278.86L250.42 282.51L245.67 285.94L249.61 286.26L249.39 289.07L251.58 289.8C250.96 290.28 250.58 290.58 250.04 291.02L252.85 292.49L249.34 294.18L249.72 296.59C246.98 296.85 244.47 294.7 241.9 296.2L241.92 296.07ZM305.39 194.62L305.3 196.72C303.49 195.19 301.49 196.89 299.54 195.56C300.298 195.271 301.077 195.041 301.87 194.87C303.04 194.75 304.31 194.69 305.53 194.62L304.36 193.72C304.516 193.553 304.707 193.423 304.92 193.34C305.132 193.25 305.361 193.209 305.59 193.22C305.816 193.239 306.037 193.3 306.24 193.4C306.443 193.507 306.621 193.658 306.76 193.84L307.84 193.26L307.55 190.81L304.45 188.09L305.75 183.09C306.13 183.193 306.501 183.327 306.86 183.49C308.16 184.2 309.79 184.36 310.18 186.37C310.36 187.37 311.67 187.62 312.63 187.05C313.491 186.46 314.294 185.79 315.03 185.05C315.217 184.926 315.374 184.762 315.49 184.57C315.598 184.376 315.663 184.161 315.68 183.94C315.691 183.717 315.65 183.495 315.56 183.29C315.464 183.088 315.324 182.91 315.15 182.77C314.952 182.6 314.789 182.393 314.67 182.16C314.556 181.923 314.495 181.663 314.49 181.4C314.477 181.136 314.525 180.873 314.63 180.63C314.731 180.388 314.88 180.17 315.07 179.99C316.4 181.5 318.14 182.4 318.84 184.34C319.35 185.79 319.43 186.27 318.21 187.27C317.84 187.57 317.45 187.83 316.84 188.27C318.26 189.05 318.84 189.9 318.25 191.37C317.66 192.84 318.58 194.02 319.63 194.95L321.63 194.58C321.63 195.11 321.75 195.67 321.63 195.73C320.33 196.32 319 196.84 317.63 197.37C318.4 199.21 318.3 199.82 317.16 199.69C315.58 199.51 315.49 200.84 314.89 201.47L312.38 200.6C312.31 200.09 312.38 199.29 312.17 199.18C310.01 198.18 308.78 196.3 307.57 194.4C307.41 194.12 307 194 306.71 193.8L305.39 194.62ZM312.17 151.95L311 152.08L311.07 151.65L312.15 152.04C312.95 151.24 314.21 150.71 313.69 148.87C311.97 150.23 309.69 148.56 308.18 150.57C307.47 148.72 308.83 148.16 309.6 148.14C311.53 148.14 312.6 146.45 313.91 146.14L316.17 147.08C316.219 148.187 316.152 149.297 315.97 150.39C315.705 151.283 315.166 152.07 314.43 152.64C313.59 153.27 312.77 152.64 312.17 151.92V151.95ZM330.04 183.39C330.479 183.685 330.825 184.097 331.04 184.58C331.268 185.073 331.351 185.621 331.28 186.16C330.02 185.41 329.64 184.59 330.04 183.31L325.11 183.53L322.69 188.97C323.19 189.13 323.51 189.21 323.82 189.34C324.108 189.472 324.385 189.626 324.65 189.8C322.7 191.3 322.19 191.13 320.51 188.3C321.14 187.45 322.32 186.59 322.37 185.65C322.473 184.819 322.749 184.018 323.18 183.3C323.619 182.588 324.206 181.977 324.9 181.51C324.82 180.15 323.29 179.07 324.51 177.74C327.37 177.74 328.51 179.04 328.19 181.74C328.9 182.35 329.48 182.86 330.05 183.39H330.04ZM326.77 200.83C327.68 200.12 329.22 200.34 329.26 198.77C329.3 197.2 330.53 196.85 331.84 196.31L329.94 204.14C328.05 203.85 326.36 204.62 324.4 203.7L326.55 202.92L326.77 200.83ZM395.61 139.07C396.192 139.146 396.762 139.29 397.31 139.5C397.652 139.801 397.933 140.164 398.14 140.57C397.71 140.74 397.22 141.15 396.87 141.05C395.79 140.62 394.78 139.99 393.47 139.31C395.4 137.73 394.47 134.31 398.04 133.92L397.44 136.23H398.91C398.74 137.38 398.42 138.13 397.09 137.8C396.18 137.54 395.56 137.74 395.6 139.01L395.61 139.07ZM314.32 137.91C313.4 138.74 312.66 139.4 312.11 139.91L309.29 137.75C309.03 136.02 310.18 135.36 311.97 134.75C311.41 136.68 313.02 137.01 314.3 137.84L314.32 137.91ZM345.19 158.5L345.38 158.98C343.059 160.48 340.418 161.412 337.67 161.7L340.18 159.21C341.84 158.93 343.52 158.7 345.18 158.46L345.19 158.5ZM270.88 290.5C272.41 288.43 273.4 288.14 274.93 289.2C275.138 289.329 275.31 289.508 275.43 289.72C275.557 289.93 275.632 290.166 275.65 290.41C275.558 290.64 275.41 290.842 275.22 291C275.03 291.158 274.803 291.265 274.56 291.31C273.275 291.52 271.958 291.23 270.88 290.5ZM321.68 178.9L321.09 179.6C320.37 179.232 319.684 178.8 319.04 178.31C318.44 177.76 318.17 176.71 317.52 176.44C316.87 176.17 316.11 176.8 314.75 177.22C315.4 176.3 315.64 175.59 316.01 175.52C316.88 175.35 318.1 175.11 318.68 175.52C319.791 176.536 320.796 177.661 321.68 178.88V178.9ZM266.88 287.27L269.79 288.79C267.79 289.23 268.08 290.45 267.93 291.39C265.54 290.84 265.34 290.1 266.93 287.25L266.88 287.27ZM243.61 118.77C243.146 119.336 242.564 119.793 241.903 120.11C241.243 120.426 240.522 120.593 239.79 120.6C240.23 118.41 241.01 118.03 243.65 118.75L243.61 118.77ZM327.03 190.43C326.94 188.43 327.91 187.43 328.71 186.16L329.96 188.84L327.03 190.43ZM253.59 112.07C253.15 113.07 253.07 113.7 252.71 113.98C252.01 114.54 251.11 114.77 250.46 113.88C249.81 112.99 250.46 112.5 251.08 112.26C251.919 112.09 252.775 112.02 253.63 112.05L253.59 112.07ZM318.65 201.54C320.25 200.43 322.08 200.54 322.97 201.54C323.07 201.73 323.2 202.12 323.1 202.24C323 202.36 322.52 202.76 322.29 202.67C321.14 202.42 320.04 202.07 318.65 201.56V201.54ZM279.23 283.42L281.32 283.77C279.5 286.77 279.5 286.77 277.96 285.97L279.23 283.42ZM245.03 132.89C246.91 132.42 248.7 132.89 250.88 133.59C248.5 134.26 248.5 134.26 245.03 132.91V132.89ZM335.1 116.23C336.65 115.39 338.8 115.88 339.21 117C339.252 117.119 339.265 117.247 339.248 117.372C339.23 117.498 339.183 117.617 339.11 117.72C338.77 117.91 338.23 118.14 337.96 118C336.961 117.48 335.999 116.892 335.08 116.24L335.1 116.23ZM270.49 145.81L273.93 145.9C272.83 147.84 272.39 147.88 270.49 145.81ZM292.79 262.69C292.79 260.75 294.41 259.56 296.46 259.96L292.79 262.69ZM233.26 121.07L233.69 121.7L230.8 123.53C230.8 121.53 231.98 121.25 233.26 121.07ZM289.39 123.34C290.011 123.641 290.587 124.028 291.1 124.49C291.08 124.907 290.933 125.308 290.68 125.64C290.062 125.561 289.469 125.349 288.94 125.02C288.82 124.94 289.15 124.19 289.39 123.34ZM347.39 115.51L346.45 118.77L345.02 116.14L347.39 115.51ZM304.67 236.07L300.89 235.07C303.7 234.16 303.7 234.16 304.66 236.07H304.67ZM385.85 111.07L385.25 110.85C385.62 107.69 385.62 107.69 386.93 107.85L385.85 111.07ZM264.39 270.27C265.39 268.27 265.39 268.27 266.75 270.22L264.39 270.27ZM264.39 150.37C265.62 150.92 266.12 150.99 266.39 151.3C266.395 151.655 266.294 152.003 266.1 152.3C265.579 152.299 265.069 152.15 264.63 151.87C264.39 151.72 264.44 151.07 264.39 150.37ZM339.04 195.37C338.04 196.37 337.26 196.73 336.17 196.06C337.09 194.37 337.09 194.37 339.01 195.41L339.04 195.37ZM383.39 130.46C383.96 130.99 384.44 131.24 384.58 131.62C384.72 132 384.33 132.34 384.18 132.7C383.755 132.509 383.371 132.238 383.05 131.9C382.91 131.66 383.2 131.15 383.39 130.45V130.46ZM257.69 76.4601C256.56 77.4601 255.75 77.6801 254.69 76.7901C254.853 76.552 255.064 76.3509 255.31 76.2001C255.56 76.048 255.84 75.9524 256.13 75.9201C256.417 75.8885 256.707 75.9192 256.98 76.0101C257.257 76.0988 257.51 76.2493 257.72 76.4501L257.69 76.4601ZM283.99 282.69C282.32 283.21 282.32 283.21 282.08 281.44L283.99 282.69ZM259.59 92.8001C258.69 93.0301 258.32 94.7201 256.83 93.8001C257.51 92.6201 258.31 92.1601 259.59 92.8001ZM377.69 196.07C379.52 195.97 379.52 195.97 379.15 197.8L377.69 196.07ZM273.39 282.74C273.576 282.613 273.747 282.465 273.9 282.3C274.29 282.74 274.7 283.18 275.04 283.65C275.04 283.72 274.78 284.19 274.64 284.19C273.67 284.25 273.39 283.6 273.39 282.74ZM317.39 125.63C318 125.97 318.55 126.1 318.63 126.35C318.633 126.796 318.575 127.24 318.46 127.67C318.09 127.54 317.53 127.5 317.4 127.25C317.333 126.726 317.333 126.195 317.4 125.67L317.39 125.63ZM283.15 82.0701C282.31 83.0701 281.59 83.4801 280.37 82.4601C281.17 81.4601 281.98 81.4601 283.17 82.1101L283.15 82.0701ZM313.6 96.4301C314.37 95.5801 314.89 94.9401 316.2 95.0201C316.033 95.5438 315.677 95.9862 315.2 96.2601C314.719 96.527 314.154 96.602 313.62 96.4701L313.6 96.4301ZM344.07 202.12C344.39 203.89 343.79 204.19 342.07 204.12C342.91 203.33 343.34 202.85 344.07 202.12ZM311.55 272.36L310.63 270.36C312.48 270.93 312.48 270.93 311.57 272.36H311.55ZM325.12 194.36C326.72 193.02 327.34 193.91 327.97 194.83C327.2 194.75 326.41 194.61 325.14 194.39L325.12 194.36ZM242.57 136.26C242.3 137.64 241.64 137.93 240.39 137.5C240.68 136.44 241.19 135.96 242.59 136.3L242.57 136.26ZM255.45 287.96L256.25 287.74L256.48 289.27L255.93 289.38L255.45 287.96ZM327.85 191.85C328.25 190.32 329.05 190.19 330.75 190.77L327.85 191.85ZM410.41 146.85C409.3 146.01 409.3 146.01 410.25 144.64L410.41 146.85ZM371.62 203.61L372.31 203.98C372.079 204.354 371.792 204.692 371.46 204.98C371.24 205.1 370.87 204.98 370.55 204.92C370.551 204.531 370.618 204.146 370.75 203.78C370.75 203.6 371.27 203.65 371.55 203.58L371.62 203.61ZM287.13 76.8401L284.28 78.3901C284.65 76.8101 285.46 76.5001 287.13 76.8401ZM334.69 183.65C333.61 184.81 333.61 184.81 332.77 183.59L334.69 183.65ZM304.79 240.89C305.46 242.12 305.04 242.6 303.44 242.94C304.11 241.94 304.44 241.41 304.79 240.89ZM256.01 284.95V284.34C256.7 283.87 257.34 283.72 258.17 284.98C257.23 284.98 256.63 284.98 256.03 284.98L256.01 284.95ZM262.28 293.17C262.4 293.01 262.53 292.85 262.67 292.69L264.13 293.86L263.85 294.22L262.28 293.17ZM323.98 205.73C323.74 206.18 323.66 206.57 323.44 206.68C323.22 206.79 322.85 206.62 322.54 206.58C322.6 206.225 322.729 205.885 322.92 205.58C323.15 205.36 323.44 205.67 323.98 205.73ZM276.13 298.48L275.89 299.23L274.22 298.64L274.39 298.07L276.13 298.48ZM399.39 182.35L398.9 182.27L399.15 180.6L399.69 180.69L399.39 182.35ZM229.11 119.83C229.46 120.1 229.8 120.25 229.79 120.37C229.751 120.694 229.627 121.001 229.43 121.26C229.35 121.31 229.01 121.17 228.79 121.12L229.11 119.83ZM262.73 77.5801L262.8 76.8901L264.18 77.0401C264.172 77.2548 264.149 77.4687 264.11 77.6801C263.642 77.6753 263.175 77.6453 262.71 77.5901L262.73 77.5801ZM330.98 116.48L329.3 115.3C330.52 114.87 331.15 114.94 330.96 116.49L330.98 116.48ZM290.48 74.7001C290.299 74.8258 290.089 74.9048 289.87 74.9301C289.654 74.9564 289.435 74.9325 289.23 74.8601C289.025 74.7839 288.841 74.6611 288.692 74.5014C288.542 74.3418 288.432 74.1496 288.37 73.9401L290.48 74.7001ZM304.57 190.76C304.28 191.26 304.16 191.76 303.96 191.76C303.581 191.731 303.206 191.664 302.84 191.56C302.95 191.27 302.98 190.79 303.17 190.73C303.636 190.672 304.107 190.683 304.57 190.76ZM365.57 184.29C365.89 183.82 366.03 183.43 366.29 183.35C366.55 183.27 366.86 183.52 367.16 183.63C367.02 183.91 366.98 184.31 366.75 184.44C366.52 184.57 366.13 184.37 365.56 184.26L365.57 184.29ZM261.66 94.7501L262.25 94.9801C262.1 95.5002 261.92 96.011 261.71 96.5101C261.66 96.6101 261.3 96.5601 260.82 96.5901C261.137 95.9941 261.417 95.3797 261.66 94.7501ZM257.91 79.4001L257.6 78.8301C258.08 78.6501 258.6 78.4201 259.04 78.2501L259.26 78.6701L257.91 79.4001ZM338.91 201.82C339.183 202.013 339.426 202.246 339.63 202.51C339.711 202.734 339.748 202.972 339.74 203.21C339.48 203.16 339.16 203.21 338.97 203.05C338.78 202.89 338.97 202.66 338.97 201.86L338.91 201.82ZM287.19 284.07C286.72 283.89 286.43 283.88 286.34 283.73C286.244 283.492 286.196 283.237 286.2 282.98L286.54 282.88L287.19 284.07ZM319.06 153.69C318.71 154.1 318.55 154.45 318.29 154.53C318.03 154.61 317.7 154.42 317.39 154.33C317.57 154.02 317.67 153.62 317.94 153.44C318.21 153.26 318.56 153.52 319.06 153.69ZM265.15 88.8201C264.99 89.2501 264.96 89.5801 264.82 89.6501C264.517 89.7532 264.2 89.8072 263.88 89.8101C263.94 89.5301 263.88 89.1401 264.08 88.9801C264.28 88.8201 264.71 88.8501 265.2 88.7901L265.15 88.8201ZM315.85 233.38C316.34 233.535 316.812 233.739 317.26 233.99C317.227 234.361 317.076 234.711 316.83 234.99C316.69 235.07 316.09 234.99 316.01 234.8C315.883 234.345 315.829 233.872 315.85 233.4V233.38ZM278.85 257.16C279.2 256.7 279.34 256.33 279.59 256.25C279.84 256.17 280.13 256.44 280.4 256.55C280.27 256.83 280.19 257.22 279.97 257.35C279.75 257.48 279.4 257.35 278.86 257.18L278.85 257.16ZM370.63 137.24C370.97 137.37 371.29 137.39 371.38 137.55C371.412 137.66 371.413 137.776 371.381 137.886C371.349 137.996 371.286 138.095 371.2 138.17C371.085 138.2 370.965 138.2 370.85 138.17C370.738 138.132 370.636 138.071 370.55 137.99C370.47 137.9 370.55 137.63 370.64 137.26L370.63 137.24ZM389.4 105.78C389.2 106.16 389.11 106.52 388.97 106.53C388.657 106.526 388.346 106.472 388.05 106.37C388.16 106.09 388.2 105.67 388.39 105.58C388.58 105.49 388.98 105.7 389.39 105.8L389.4 105.78ZM383.07 141.91C383.394 141.981 383.707 142.095 384 142.25C384.011 142.466 383.984 142.683 383.92 142.89L382.92 142.72C383 142.51 383 142.31 383.11 141.91H383.07ZM307.8 277.91C307.71 278.25 307.73 278.55 307.6 278.64C307.47 278.73 307.19 278.64 307.01 278.51C306.83 278.38 307.01 278.14 307.08 278.08C307.323 277.981 307.579 277.92 307.84 277.9L307.8 277.91ZM311.9 225.91C311.74 226.18 311.63 226.44 311.46 226.67C311.328 226.645 311.202 226.594 311.09 226.52C311.16 226.23 311.26 225.96 311.35 225.68L311.9 225.91ZM254.59 108.61L254.17 108.33C254.39 108.02 254.6 107.68 254.87 107.33C254.87 107.33 255.14 107.47 255.29 107.53L254.59 108.61ZM301.93 185.25C302.01 184.88 301.99 184.57 302.14 184.43C302.29 184.29 302.57 184.43 302.8 184.43C302.8 184.66 302.8 184.97 302.71 185.1C302.62 185.23 302.3 185.22 301.95 185.28L301.93 185.25ZM289.32 300.58C289.575 300.654 289.82 300.758 290.05 300.89C290.05 300.97 290.05 301.3 290.05 301.31C290.05 301.32 289.55 301.44 289.43 301.31C289.31 301.18 289.43 300.91 289.35 300.54L289.32 300.58ZM264.39 265.07L263.86 265.35L263.4 264.35C263.53 264.28 263.76 264.16 263.83 264.24C264.044 264.488 264.238 264.752 264.41 265.03L264.39 265.07ZM314.05 178.07C314.31 178.23 314.6 178.31 314.65 178.47C314.7 178.63 314.51 178.89 314.43 179.12C314.18 179.015 313.944 178.877 313.73 178.71C313.815 178.48 313.93 178.261 314.07 178.06L314.05 178.07ZM231.59 115.6L232.32 115.69C232.32 115.84 232.25 116.1 232.19 116.11C231.951 116.135 231.709 116.135 231.47 116.11L231.59 115.6ZM371.3 200C371.099 200.093 370.916 200.222 370.76 200.38L369.98 198.95L370.25 198.8L371.3 200ZM377.21 206.63C377.48 206.78 377.78 206.86 377.85 207.02C377.92 207.18 377.74 207.45 377.66 207.67L376.87 207.34L377.21 206.63ZM266.99 93.3301L266.86 92.7601L268.28 92.6101L268.34 93.0901L266.99 93.3301ZM245.55 112.96V113.58C245.24 113.58 244.93 113.58 244.64 113.58C244.64 113.58 244.64 113.16 244.64 113.15C244.928 113.068 245.222 113.012 245.52 112.98L245.55 112.96ZM298.06 252.07C297.92 252.39 297.86 252.7 297.7 252.77C297.54 252.84 297.26 252.69 297.04 252.63C297.11 252.4 297.13 252.09 297.28 251.98C297.43 251.87 297.72 252 298.06 252.07ZM278.61 160.76C278.61 160.61 278.61 160.4 278.73 160.33C278.85 160.26 279.04 160.27 279.2 160.25C279.181 160.45 279.13 160.646 279.05 160.83C278.901 160.817 278.753 160.786 278.61 160.74V160.76ZM267.71 282.62L267.79 283.28C267.37 283.28 266.96 283.28 266.55 283.28L266.47 282.87L267.68 282.66L267.71 282.62ZM402.39 134.07C402.72 134.278 403.019 134.531 403.28 134.82C403.37 134.98 403.28 135.23 403.28 135.45C403.06 135.45 402.77 135.45 402.61 135.3C402.45 135.15 402.56 134.87 402.39 134.07ZM348.92 119.07C349.07 118.66 349.13 118.27 349.23 118.25C349.548 118.248 349.865 118.292 350.17 118.38C350.12 118.61 350.17 119 350.02 119.05C349.656 119.105 349.285 119.105 348.92 119.05V119.07ZM335.8 201.3C336.074 201.338 336.343 201.409 336.6 201.51C336.6 201.56 336.6 201.92 336.6 201.94C336.399 202.039 336.17 202.067 335.95 202.02C335.87 201.95 335.9 201.6 335.84 201.26L335.8 201.3ZM315.31 82.8101C315.586 82.8775 315.852 82.9818 316.1 83.1201C316.1 83.1201 316.1 83.5401 316.04 83.5401C315.82 83.6195 315.58 83.6195 315.36 83.5401C315.29 83.5501 315.39 83.2001 315.31 82.8101ZM253.98 285.18C253.98 285.31 253.92 285.53 253.83 285.56C253.679 285.548 253.531 285.515 253.39 285.46L253.59 284.95L253.98 285.18ZM376.68 210.61C376.58 210.07 376.47 209.81 376.53 209.77C376.764 209.634 377.012 209.523 377.27 209.44L376.68 210.61ZM376.39 189.95L377.16 190.09C377.16 190.3 377.16 190.63 377.03 190.68C376.915 190.705 376.795 190.705 376.68 190.68C376.564 190.673 376.451 190.639 376.35 190.58C376.26 190.52 376.35 190.16 376.35 189.88L376.39 189.95ZM235.89 114.75C236.17 114.45 236.3 114.19 236.5 114.12C236.7 114.05 236.89 114.28 237.1 114.36C236.95 114.55 236.85 114.84 236.67 114.93C236.49 115.02 236.23 114.81 235.88 114.72L235.89 114.75ZM235.8 126.67C235.8 126.82 235.89 127.03 235.8 127.11C235.742 127.162 235.674 127.202 235.6 127.228C235.526 127.254 235.448 127.265 235.37 127.26L235.32 126.63L235.8 126.67ZM313.14 246.38C313.54 246.59 313.8 246.65 313.88 246.8C313.96 246.95 313.88 247.19 313.88 247.39C313.72 247.33 313.52 247.3 313.45 247.19C313.312 246.935 313.207 246.663 313.14 246.38ZM337.82 185.38C337.62 185.65 337.52 185.94 337.36 185.97C337.2 186 336.97 185.81 336.78 185.71C336.88 185.51 336.95 185.23 337.1 185.17C337.25 185.11 337.51 185.33 337.83 185.44L337.82 185.38ZM333.39 192.96C333.537 193.122 333.664 193.299 333.77 193.49C333.77 193.55 333.59 193.69 333.5 193.81C333.333 193.675 333.182 193.52 333.05 193.35C333.157 193.227 333.274 193.113 333.4 193.01L333.39 192.96ZM241.6 86.1301C241.79 85.9701 241.93 85.7401 242.11 85.7001C242.29 85.6601 242.43 85.8901 242.59 86.0001C242.418 86.1502 242.23 86.281 242.03 86.3901C241.94 86.4901 241.83 86.3001 241.61 86.1901L241.6 86.1301ZM361.59 198.07L361.76 197.43C361.89 197.48 362.08 197.5 362.12 197.59C362.157 197.743 362.132 197.905 362.05 198.04C362.05 198.18 361.82 198.14 361.61 198.15L361.59 198.07ZM377.59 204.85C377.494 204.951 377.391 205.045 377.28 205.13C377.28 205.13 377.07 205.03 377.08 204.99C377.09 204.95 377.18 204.71 377.23 204.57L377.59 204.85ZM304.71 238.85L304.52 239.22C304.39 239.15 304.19 239.1 304.17 239.01C304.15 238.92 304.28 238.76 304.35 238.64L304.71 238.85ZM264.13 100.17L264.72 100.09C264.75 100.309 264.75 100.531 264.72 100.75C264.72 100.75 264.29 100.86 264.28 100.82C264.21 100.609 264.16 100.391 264.13 100.17ZM263.41 104.59C263.24 104.78 263.13 105.02 262.94 105.1C262.75 105.18 262.6 104.95 262.42 104.85C262.572 104.66 262.743 104.486 262.93 104.33C263 104.3 263.2 104.47 263.39 104.59H263.41ZM265.7 279.93L265.3 279.7C265.38 279.58 265.46 279.38 265.57 279.36C265.68 279.34 265.82 279.5 265.94 279.56L265.7 279.93ZM261.49 85.3901L261.9 85.4701C261.85 85.5901 261.82 85.7801 261.73 85.8301C261.64 85.8801 261.46 85.8301 261.31 85.7701L261.49 85.3901ZM274.49 292.57C274.633 292.622 274.771 292.69 274.9 292.77C274.9 292.77 274.9 292.98 274.83 292.98C274.681 293 274.529 293 274.38 292.98C274.38 292.83 274.46 292.68 274.49 292.53V292.57ZM389.16 114.07C389.29 113.77 389.34 113.44 389.48 113.39C389.62 113.34 389.92 113.48 390.16 113.55C390.09 113.77 390.1 114.1 389.95 114.18C389.8 114.26 389.48 114.07 389.16 114.07ZM311.98 177.29L311.85 177.67L310.85 177.32L310.99 176.92L311.98 177.29ZM275.77 261.4C275.77 261.63 275.77 261.83 275.77 261.89C275.712 261.94 275.644 261.978 275.57 262C275.494 262.015 275.416 262.015 275.34 262C275.28 262 275.22 261.78 275.16 261.66L275.77 261.4Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M191.91 64.0701C192.4 64.0101 192.91 63.9801 193.37 63.8901C194.1 63.7601 194.81 63.6001 195.58 63.4301C196.06 65.8701 193.91 65.7801 192.82 66.9101H197.5C197.958 66.1622 198.63 65.5698 199.43 65.2101C200.229 64.8493 201.118 64.7412 201.98 64.9001C202.05 67.1701 199.91 67.0101 198.59 68.1601C200.185 68.4395 201.801 68.58 203.42 68.5801C204.18 68.5001 204.84 67.5801 205.82 66.7601L202.69 66.5801C203.607 65.9563 204.555 65.3789 205.53 64.8501C206.33 64.4601 207.16 64.1601 207.9 65.0401C208.64 65.9201 208.05 66.4701 207.56 67.0901C207.47 67.2001 207.51 67.4101 207.49 67.6701L208.76 68.6701L207.82 71.0801C209.69 71.2901 211.34 71.5101 213.01 71.5901C213.709 71.5799 214.395 71.4015 215.01 71.0701C217.25 69.8501 217.89 70.0101 219.01 72.2301C219.151 72.6283 219.249 73.0407 219.3 73.4601C219.464 73.5013 219.624 73.5548 219.78 73.6201C222.03 74.5501 224.25 75.2001 226.78 74.3401C227.78 73.9901 228.55 75.2001 228.85 76.4201C228.18 77.1901 227.46 78.0001 226.75 78.7901L227.03 79.1801C227.379 79.0627 227.714 78.9085 228.03 78.7201C229.38 77.7201 230.63 76.7201 232.03 75.8201C233.87 74.7001 233.93 74.8201 233.77 72.6901C234.89 72.6301 234.89 72.6301 235.65 73.2501C237.07 72.8001 238.46 72.3201 239.83 71.9001C242.25 71.1601 242.26 71.1701 241.58 68.4901C242.85 67.4901 244.09 66.3001 245.58 65.3001C246.26 64.8501 247.43 64.3601 248 64.6401C249.49 65.3801 249.77 63.9601 250.61 63.5801H250.55C251.66 62.6501 252.76 61.7001 254 60.6501C253.554 60.3982 253.039 60.2932 252.53 60.3501C252.022 60.4078 251.543 60.6208 251.16 60.9601C250.431 61.511 249.581 61.878 248.68 62.0301C247.777 62.1793 246.851 62.1107 245.98 61.8301C244.88 61.4601 243.45 62.0801 241.92 62.2801C242.06 61.8601 242.07 61.4601 242.26 61.2801C244.38 59.7201 246.55 58.2201 249.36 58.4901C249.644 58.5383 249.934 58.5212 250.21 58.4401C250.484 58.3598 250.737 58.2198 250.95 58.0301C252 57.3836 253.108 56.8378 254.26 56.4001L252.76 55.7101L255.82 54.9701C254.82 53.6801 252.54 54.2901 252.08 52.0801C252.846 52.4639 253.677 52.7013 254.53 52.7801C257.3 52.5001 259.85 52.4101 262.23 54.3801C263.04 55.0501 264.35 54.1701 264.79 52.7301C263.37 52.0301 260.72 53.7301 260.86 50.6601L257.3 49.8301L262.45 47.0401C261.07 46.3801 260.13 45.5501 260.33 44.0401C260.49 42.8701 259.6 42.5601 258.76 42.3001C256.924 41.8657 255.125 41.2873 253.38 40.5701C252.067 39.9303 250.972 38.9182 250.23 37.6601C248.92 35.2301 247.23 33.7301 244.39 33.9001C244.25 33.9001 244.1 33.7601 243.67 33.5301C245.11 32.4701 246.46 31.4701 248.07 30.3101L245.87 28.7601C246.39 28.5401 246.87 28.3301 247.28 28.1701C247.17 27.5101 241.82 26.0301 240.35 26.2201L241.05 29.2801C239.63 29.1501 238.65 29.0701 237.67 28.9701L237.56 28.4701L239.1 27.3401C238.81 27.1901 238.6 26.9801 238.39 27.0101C235.8 27.1801 233.2 27.3701 230.64 27.6101C228.776 27.6905 226.985 28.3552 225.52 29.5101C224.82 30.0901 223.9 30.3901 223.17 31.0501C226.25 31.6101 229.09 30.6301 232.17 30.1401C231.37 30.6901 230.56 31.2501 229.77 31.8201C228.44 32.8201 227.17 33.8201 225.77 34.7001C225.045 35.1437 224.219 35.3982 223.37 35.4401C222.603 35.3179 221.861 35.0749 221.17 34.7201C220.78 35.6601 218.43 35.5301 219.26 37.7201C218.62 38.0659 217.951 38.3537 217.26 38.5801C216.479 38.8803 215.629 38.9498 214.81 38.7801C214.222 38.5098 213.574 38.3963 212.929 38.4507C212.284 38.505 211.665 38.7253 211.13 39.0901C209.5 37.5901 208.97 37.5401 207.62 38.7401C206.27 39.9401 206.49 40.4201 208.32 43.2701C208.191 43.4853 208.043 43.6893 207.88 43.8801C207.11 44.7301 206.33 45.5601 205.79 46.1501L200.56 44.8201C200.19 46.2601 200.51 46.9801 201.64 47.3401C202.47 47.6001 202.7 48.1601 202.33 49.1401C201.858 49.0617 201.391 48.9582 200.93 48.8301C198.29 47.9401 196.84 48.7701 196.12 51.4501C195.779 52.3112 195.339 53.13 194.81 53.8901V53.8201C194.66 55.8201 194.66 55.8201 192.5 56.9401C194.12 57.4901 194.12 57.4901 198.14 55.5501L199.08 59.5501C197.2 61.5501 194.71 61.5501 192.49 61.6301L191.83 63.9701L191.91 64.0701ZM215.68 58.0701L215.63 57.2201C220.52 58.2201 225.22 56.1101 230.12 56.7201C230.05 57.0901 230.05 57.3901 229.98 57.4001C227.558 58.0118 225.095 58.4496 222.61 58.7101C220.291 58.667 217.978 58.453 215.69 58.0701H215.68ZM227.97 62.4101C228.37 62.4801 228.67 62.4901 228.68 62.5501C229.07 64.4401 229.43 66.3201 229.86 68.5501C228.5 68.8001 227.23 69.0301 225.86 69.2601C226.65 66.7601 227.31 64.5801 227.97 62.4401V62.4101ZM200.77 60.2401L205.03 57.9201L207.03 60.4601C205.36 60.8801 203.97 61.3001 202.54 61.6001C201.67 61.7801 201.03 61.4301 200.77 60.1901V60.2401ZM215.24 60.2401C212.72 61.9101 210.47 61.9501 208.86 60.3201C210.976 59.9301 213.145 59.9301 215.26 60.3201L215.24 60.2401ZM210.39 68.6801C211.3 66.1601 211.39 66.0801 214.07 67.0401C212.6 67.5801 212.28 69.4701 210.41 68.7101L210.39 68.6801ZM217.99 52.6801C218.89 50.6801 218.89 50.6801 220.83 51.1301C220.23 52.3601 219.45 53.0301 218.01 52.7201L217.99 52.6801ZM209.99 40.9901L213.6 39.9901C213.15 42.2501 213.02 42.3001 210.01 41.0501L209.99 40.9901ZM219.53 65.3301L220.05 65.6001C219.64 66.6001 219.28 67.6501 218.79 68.6001C218.7 68.8001 218.08 68.7301 217.27 68.8401C218.27 67.4301 218.91 66.3601 219.59 65.3701L219.53 65.3301ZM214.97 42.0701C217.5 41.6501 217.5 41.6501 217.66 43.5501C216.43 43.8601 215.74 43.1001 215.03 42.1301L214.97 42.0701ZM237.97 63.8601L238.2 64.5701C237.033 65.2234 235.718 65.5677 234.38 65.5701L234.22 65.0301C235.52 64.7001 236.79 64.3501 238.03 63.9701L237.97 63.8601ZM245.27 57.7801C244.44 58.7801 243.57 59.4201 242.45 58.2401L245.27 57.7801ZM216.95 62.4501C217.393 62.1576 217.91 61.9967 218.441 61.9861C218.972 61.9755 219.495 62.1156 219.95 62.3901C218.78 63.2701 217.9 62.6501 216.93 62.4801L216.95 62.4501ZM213.87 45.4501L211.96 45.8401C212.5 44.6201 213.01 44.5001 213.86 45.5001L213.87 45.4501ZM210.46 54.0901L210.89 54.8801C210.33 55.1201 209.78 55.3801 209.22 55.6301L208.91 55.0501L210.46 54.0901ZM240.01 58.6501C239.74 58.5401 239.41 58.5101 239.36 58.3701C239.31 58.2301 239.46 57.7701 239.54 57.7701C239.805 57.7905 240.063 57.8618 240.3 57.9801L240.01 58.6501ZM229.52 58.4601L229.77 59.3601C229.29 59.4701 228.77 59.5901 228.31 59.6601C228.219 59.4608 228.162 59.248 228.14 59.0301C228.586 58.8323 229.043 58.6619 229.51 58.5201L229.52 58.4601ZM206.39 53.0701C206.5 52.8401 206.56 52.6001 206.64 52.5901C206.852 52.6034 207.061 52.6472 207.26 52.7201C207.2 52.8501 207.16 53.1001 207.07 53.1101C206.841 53.14 206.609 53.14 206.38 53.1101L206.39 53.0701ZM221 67.7701H221.51C221.46 67.9801 221.51 68.2601 221.37 68.4001C221.23 68.5401 220.98 68.4001 220.78 68.4001L221 67.7701ZM246.13 50.0701L246.24 50.4601C245.98 50.5901 245.77 50.9501 245.53 50.9401C245.203 50.8538 244.89 50.7226 244.6 50.5501L244.69 50.1301L246.13 50.0701ZM215.86 54.2201C215.86 54.3801 215.86 54.5901 215.76 54.6501C215.66 54.7101 215.46 54.6501 215.3 54.6501L215.39 54.0701L215.86 54.2201ZM223.15 64.4101C223.205 64.2774 223.272 64.1502 223.35 64.0301C223.35 64.0301 223.57 64.0301 223.58 64.0301C223.59 64.0301 223.58 64.3301 223.58 64.4701L223.15 64.4101ZM199.65 53.1601C199.826 53.2606 199.988 53.3851 200.13 53.5301C200.13 53.5301 199.94 53.8901 199.9 53.8701C199.703 53.8072 199.517 53.7126 199.35 53.5901L199.65 53.1601ZM239.07 45.0701C239.41 45.0701 239.68 44.9501 239.84 45.0701C240 45.1901 239.97 45.4501 240.01 45.6401C239.8 45.7001 239.54 45.8401 239.36 45.7801C239.18 45.7201 239.18 45.4701 239.06 45.1601L239.07 45.0701ZM237.6 45.2001C237.528 45.4365 237.423 45.6619 237.29 45.8701C237.151 45.9181 236.999 45.9181 236.86 45.8701C236.86 45.8701 236.75 45.3701 236.86 45.2801C236.97 45.1901 237.25 45.2801 237.61 45.2801L237.6 45.2001ZM205.25 49.3601L205.45 49.4401L205.27 49.7901C205.21 49.9001 205.13 49.7401 205.07 49.7101L205.25 49.3601ZM207.01 56.8901C207.14 56.9701 207.35 57.0301 207.36 57.1201C207.37 57.2101 207.23 57.3801 207.16 57.5201C207.03 57.4401 206.82 57.3701 206.81 57.2801C206.8 57.1901 206.93 57.0701 207 56.9401L207.01 56.8901ZM236.07 58.8301L235.7 58.7001C235.76 58.7001 235.77 58.4901 235.79 58.5001C235.919 58.5194 236.046 58.5495 236.17 58.5901L236.07 58.8301Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M299.96 44.8601L300.76 42.0801C301.51 41.9701 301.86 42.3501 301.85 43.5401C301.85 45.2601 302.03 45.3101 303.67 45.0101C304.321 44.8356 304.998 44.7747 305.67 44.8301C306.018 44.9338 306.384 44.9579 306.743 44.9008C307.101 44.8437 307.442 44.7067 307.74 44.5001C308.041 44.2972 308.293 44.0292 308.476 43.7159C308.66 43.4026 308.77 43.052 308.8 42.6901L307.8 41.5901C308.24 41.0401 308.66 40.5001 309.16 39.8501L311.97 41.4201C311.78 43.7301 309.54 46.1901 312.58 48.0901C315.26 46.7301 318.29 45.7001 319.76 42.4401L319.05 41.8501L322.98 36.4701L320.39 34.9401C321.95 34.2001 323.32 33.5301 324.88 32.7601L325.39 34.0701C326.386 34.0491 327.376 34.2294 328.3 34.6001C329.224 34.9687 330.067 35.5158 330.78 36.2101C332.22 37.5301 334.52 37.9701 336.49 38.6701C337.39 38.9801 338.22 38.6701 338.68 37.2901L335.45 35.6001C334.26 33.0501 334.26 33.0501 330.94 32.1401C331.76 30.3701 331.23 29.1401 329.45 28.1401C328.536 27.5297 327.688 26.8259 326.92 26.0401L328.35 23.8201C326.35 24.3101 325.14 21.8201 323.28 23.3501C322.28 20.3501 319.49 19.1301 317.48 17.2101C315.14 19.2101 315.14 19.2101 312.04 18.8501L315.76 16.8501L315.63 16.3301C314.3 16.1501 312.96 15.9501 311.63 15.7801C309.748 15.5417 307.879 15.2079 306.03 14.7801C304.43 14.4201 302.34 13.1001 300.44 14.7801C300 15.1801 298.82 14.7801 297.92 14.6601L298.62 16.2001C299.268 15.9287 299.97 15.8123 300.67 15.8601C301.376 15.9001 302.062 16.1093 302.67 16.4701C300.98 17.1601 299.84 16.4701 298.67 16.1201C298.95 17.2801 299.92 17.4801 300.86 17.7101L304.49 18.6401C304.349 18.8573 304.185 19.0585 304 19.2401C301.504 18.4015 298.833 18.2291 296.25 18.7401C295.568 18.7661 294.888 18.6538 294.25 18.4101C291.9 17.8001 289.78 17.9401 288.03 19.9301C287.584 20.3081 287.039 20.551 286.46 20.6301C285.29 20.9101 284.08 21.0901 282.99 21.2801C282.886 22.1366 282.618 22.965 282.2 23.7201C281.498 24.2402 280.714 24.6391 279.88 24.9001L281.76 28.3601L278.76 30.4301L279.04 30.9601L281.04 30.6501L279.75 34.3801C281.57 35.3001 283.48 36.5201 284 39.0701C285.83 38.7701 287.42 38.5801 288.92 40.0701C289.55 40.7201 291.03 40.5501 292.28 40.8001L291.95 43.0201C292.17 43.0201 292.45 43.0801 292.6 43.0201C293.26 42.5101 293.9 42.1101 294.74 42.7901C295.11 43.6101 293.3 44.6701 295.08 45.4801L296.23 44.0301L300.12 44.8101L299.96 44.8601ZM301.2 38.5501C301.07 40.1401 300.37 40.3801 299.53 40.2301C299.335 40.2499 299.139 40.2189 298.96 40.1401C298.779 40.0562 298.623 39.9249 298.51 39.7601C298.406 39.5907 298.344 39.3985 298.33 39.2001C298.325 39.0042 298.373 38.8106 298.47 38.6401L301.2 38.5501ZM326.54 31.1901L326.81 30.8601L329.54 32.0201L328.46 33.5301L326.54 31.1901ZM287.16 25.1901L286.89 24.6801C287.57 24.1801 287.97 22.9901 289.53 23.9101L287.16 25.1901ZM321.78 29.4701C322.504 29.2127 323.242 28.9957 323.99 28.8201C323.99 28.8201 324.35 29.4901 324.27 29.6801C323.82 30.6101 323.14 30.4901 321.78 29.4701ZM314.48 44.7401C315.26 43.6801 315.94 43.7401 316.85 44.5601C316.729 44.758 316.56 44.9228 316.36 45.0401C316.162 45.1588 315.94 45.2306 315.71 45.2501C315.48 45.2647 315.249 45.2264 315.036 45.138C314.823 45.0496 314.632 44.9134 314.48 44.7401ZM314.75 38.4401C314.89 38.5301 315.1 38.5901 315.12 38.7001C315.14 38.8101 315.04 39.0001 314.98 39.1601L314.44 38.8201L314.75 38.4401ZM309.84 17.5701V17.1201L310.68 17.2801C310.63 17.4201 310.59 17.6801 310.54 17.6801C310.313 17.657 310.089 17.6135 309.87 17.5501L309.84 17.5701ZM286.71 27.3201L286.54 27.7501C286.41 27.6701 286.21 27.6101 286.19 27.5101C286.17 27.4101 286.3 27.2201 286.35 27.0701L286.71 27.3201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M271.96 242.93L268.58 242.82L268.46 243.21L270.41 244.53C267.32 245.29 265.26 244.12 263.16 241.92C265.64 242.11 266.39 240.73 266.72 238.92C266.96 237.7 266.43 237 265.2 237.09C263.97 237.18 262.81 237.55 261.61 237.72C259.37 238.02 257.22 238.43 255.08 236.91C253.17 235.56 250.46 237.28 250.18 239.8C250.06 241.09 250.05 242.33 248.53 243.33L248.81 239.92C245.53 241.71 245.45 241.92 247.58 244.28L246.58 246.28C246.7 246.5 246.86 246.8 247.07 246.84C248.63 247.22 249.77 247.97 249.89 249.77C249.939 250.24 250.112 250.688 250.39 251.07C252.09 253.7 253.44 253.72 255.29 251.07C255.78 250.995 256.279 250.995 256.77 251.07C257.431 251.271 258.13 251.319 258.813 251.21C259.495 251.101 260.144 250.837 260.71 250.44C262.39 249.44 264.36 248.99 265.89 247.5C266.61 246.79 268.17 246.95 269.34 246.68C271.3 246.19 271.78 245.49 271.96 242.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M452.18 213.54L450.75 213.46C450.53 215.15 452.01 215.24 453.15 215.95L451.95 217.34C453.16 220.09 453.48 220.27 455.6 219.34L455.67 215.25L457.96 217.49L461.58 214.01C462.19 216.01 462.76 217.55 463.17 219.19C463.41 220.19 463.96 220.47 464.87 220.19C466.36 219.79 467.87 219.35 469.48 218.91C469.01 217.66 467.48 216.62 468 214.8C468 214.61 467.06 213.95 466.48 213.8C465.9 213.65 465.48 213.94 464.81 214.06L463.81 211.98C465.19 210.66 465.81 211.68 466.67 213.08L467.58 210.23C466.874 209.952 466.134 209.767 465.38 209.68C463.65 209.76 461.94 210.9 460.18 209.68C460.02 209.57 459.56 209.93 459.24 210.03C457.71 210.52 456.18 211.36 454.64 211.38C453.1 211.4 452.19 211.91 452.18 213.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M391.25 214.67L394.56 209.81L392.69 210.24L393.82 202.94H391.17C391.12 203.245 391.12 203.555 391.17 203.86C391.96 205.48 391.88 206.12 390.93 207.07C390.012 207.953 389.157 208.899 388.37 209.9C387.11 211.56 387.16 211.69 389.05 213.42L386.98 213.52C386.29 215.83 387.23 217.19 389.45 216.95C391.67 216.71 393.45 215.66 395.58 215.95C396.01 216 396.66 215.36 396.96 214.89C397.68 213.8 398.19 212.62 398.82 211.5C399.71 209.97 398.57 209.61 397.27 208.66V211.11L396.9 210.86C396.063 211.647 395.291 212.5 394.59 213.41C394.293 214.009 393.778 214.47 393.15 214.7C392.534 214.921 391.859 214.91 391.25 214.67Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M453.98 255.49C458.11 251.07 457.98 245.77 453.53 242.64C452.037 243.316 450.809 244.467 450.04 245.915C449.271 247.363 449.004 249.024 449.28 250.64C449.76 253.53 451.21 255.07 453.98 255.49Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M449.73 151.93C452.73 152.19 453.98 148.93 456.58 148.68C456.86 146.07 455.16 142.68 450.71 138.99C448.42 140.99 448.42 140.99 449.09 143.47L447.04 145.16C449.96 145.74 451.97 143.99 454.31 144.04C454.46 144.196 454.573 144.384 454.641 144.59C454.708 144.796 454.729 145.015 454.701 145.229C454.673 145.444 454.598 145.65 454.48 145.832C454.362 146.014 454.205 146.167 454.02 146.28C453.066 147.014 452.064 147.682 451.02 148.28L450.13 148.77C448.32 150.29 448.34 150.3 445.87 149.47L447.54 156.14C449.73 155.49 449.73 155.49 449.73 151.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M113.13 375.49L115 377.27L114.26 379.03C117 380.69 120.26 380.03 123.12 381.36C123.39 379.31 122.84 376.92 126.18 376.8C124.43 374.8 121.63 375.1 120.18 373.1L121.91 371.1C121.42 369.56 120.2 369.4 118.91 369.41C118.035 369.421 117.166 369.538 116.32 369.76C115.8 369.9 115.07 370.22 114.95 370.62C114.923 370.911 114.957 371.204 115.05 371.48C115.157 371.757 115.32 372.009 115.53 372.22C117.19 373.78 118.9 375.14 120.89 376.84C120.89 377.19 121.26 378.33 120.08 378.51C119.071 378.528 118.073 378.29 117.18 377.82C116.61 377.55 116.33 376.72 115.77 376.32C115.022 375.837 114.24 375.409 113.43 375.04L113.13 375.49Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M395.26 218.28C397.84 220.28 400.61 220.49 403.59 220.15L400.66 218.45C404.07 217.95 407.31 218.4 409.66 216.03L409.44 215.5L407.34 216.64C406.2 215.16 407.67 213.71 407.27 212.27C405.76 212.27 404.76 215.83 403.06 212.77C401.37 213.89 400.34 215.87 397.91 216C397.02 216.07 396.22 217.4 395.26 218.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M250.65 12.1601C253.24 15.6701 256.48 14.0801 259.23 14.6701C259.951 14.8398 260.689 14.9303 261.43 14.9401C262.203 14.9604 262.974 14.8488 263.71 14.6101C265.77 13.8801 267.83 13.0201 270.13 12.1101L266.47 11.6801L266.39 11.4301L268.61 10.8701C268.598 10.6597 268.562 10.4515 268.5 10.2501C265.92 10.0301 263.36 9.73007 260.82 9.70007C260.359 9.80388 259.922 9.99779 259.536 10.2706C259.15 10.5435 258.822 10.8899 258.57 11.2901C260.04 11.1401 261.49 10.9301 262.98 10.8201L263.04 11.4301C260.04 12.7601 257.04 14.5201 253.52 12.5201C252.585 12.2651 251.619 12.1439 250.65 12.1601Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M281.06 315.83C279.694 315.092 278.117 314.841 276.59 315.12C275.306 315.343 274.003 315.447 272.7 315.43C271.75 315.43 270.57 314.96 270.19 316.07C269.96 316.76 270.53 317.72 270.74 318.55C270.96 318.55 271.19 318.55 271.41 318.55L269.78 321.2C271.21 322.2 272 322 272.78 321.46L276.49 318.93L274.39 317.55C275.53 315.55 276.8 316.62 278.01 317.14C279.76 317.93 279.76 317.94 281.06 315.83Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M237.39 17.89C240.581 18.4185 243.849 18.2513 246.97 17.4C244.78 16.79 243.72 14.83 241.57 15.4C241.487 15.4244 241.398 15.4261 241.314 15.4051C241.229 15.384 241.152 15.3408 241.09 15.28C240.45 13.05 238.97 14.36 237.8 14.52C236.34 14.73 234.87 14.94 233.42 15.23C232.755 15.4129 232.106 15.6504 231.48 15.94C232.36 17.94 233.79 17.37 234.9 16.94C235.371 16.7318 235.904 16.7133 236.389 16.8884C236.873 17.0635 237.271 17.4187 237.5 17.88L237.39 17.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M311.29 169.79C310.85 169.79 310.41 169.87 310.29 169.87L311.08 166.46C310.19 163.46 308.08 163.82 306.32 163.94C305.703 165.287 305.159 166.665 304.69 168.07C304.55 168.899 304.52 169.743 304.6 170.58C305.637 170.541 306.674 170.669 307.67 170.96C309.07 171.65 310.14 171.44 311.29 169.79ZM307.84 167.74L308.29 168.35L306.73 169.2L306.49 168.77L307.84 167.74Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M284.75 326.73C285.22 326.17 285.04 325.84 284.41 325.55C283.2 324.98 281.99 324.29 280.78 323.67C281.54 320.55 285.15 322.67 286.04 320.04C285.29 318.66 283.75 318.94 282.66 319.27C280.9 319.95 279.044 320.349 277.16 320.45C276.82 320.45 276.47 320.9 275.85 321.33C276.33 321.851 276.862 322.32 277.44 322.73C278.94 323.57 278.96 323.53 279.58 325.43L284.89 326.74L284.75 326.73Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M262.99 233.65L262.4 235.98C265.15 235.25 265.15 235.25 266.2 233.92C266.124 233.628 265.988 233.356 265.8 233.12C265.619 232.88 265.391 232.679 265.13 232.53C264.867 232.382 264.579 232.283 264.28 232.24C263.978 232.208 263.673 232.232 263.38 232.31C262.737 232.309 262.118 232.07 261.64 231.64C260.3 230.59 259.8 230.69 259.38 232.28C259.317 232.61 259.28 232.944 259.27 233.28C258.53 234.18 256.77 233.56 256.77 235.47C258.97 235.94 260.72 234.88 262.99 233.65Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M267.14 57.63L271.68 59.37L268.95 61.14C270.9 62.14 272.44 61.37 273.82 60.14L273.58 57.31C269.55 55.12 269.55 55.12 267.14 57.63Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M288.39 338.25L291.99 332.97C290.43 331.87 289.1 332.02 287.94 333.38C287.29 334.074 286.729 334.847 286.27 335.68C285.917 336.331 285.817 337.09 285.99 337.81C286.17 338.15 287.15 338.26 287.79 338.38C287.999 338.408 288.211 338.362 288.39 338.25Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M463.75 207.38C462.18 203.43 461.75 203.17 457.87 203.19C457.82 204.71 458.87 204.72 459.96 204.77C461.24 204.86 461.66 205.48 460.84 206.85L459.48 206.27L455.24 208.07C458.17 208.85 460.83 207.93 463.75 207.38Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M239.22 23.07C238.22 21.73 237.46 21.57 235.76 22.31C234.33 22.96 232.94 23.76 231.47 24.31C230.77 24.56 229.77 25.57 229.08 24.13C229.08 24.04 228.59 24.13 228.36 24.13C226.267 24.9567 224.183 25.8 222.11 26.66C222 26.73 221.96 26.94 221.84 27.16C222.06 27.26 222.3 27.47 222.49 27.43C224.94 26.93 227.38 26.43 229.83 25.9C231.812 25.2903 233.7 24.4086 235.44 23.28C236.44 22.72 237.99 23.13 239.26 23.04L239.22 23.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M293.04 171.19C292.449 170.409 291.66 169.8 290.754 169.427C289.849 169.054 288.86 168.931 287.89 169.07C286.37 171.34 288.59 172.3 289.75 174.02L293.04 171.19Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M328.53 41.29C329.98 41.29 331.53 41.66 332.66 40.29C332.87 40.06 333.66 40.29 334.21 40.89L332.31 41.89C333.77 43.89 334.07 43.77 335.69 40.89L334.39 39.24C332.58 39.24 331.11 39.24 329.64 39.37C328.49 39.52 327.07 39.17 326.53 40.66H326.43L328.68 41.33L328.53 41.29Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M456.73 159.01C455.3 157.82 455.73 155.09 453.04 154.69L450.61 156.69C451.52 157.06 452.61 157.17 453.01 157.69C453.415 158.544 453.655 159.467 453.72 160.41L456.73 159.01Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M82.02 372.58L83.83 372.44C84.83 372.38 85.89 372.44 86.42 371.16C86.59 370.76 87.37 370.64 88.27 370.24C87.6103 369.47 86.8768 368.767 86.08 368.14C85.02 367.49 83.21 368.34 83.46 369.57C83.77 371.13 82.77 371.76 82.02 372.67V372.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M161.18 101.07C158.6 100.84 156.95 102.01 155.46 103.83C159.94 105.39 160.08 105.31 161.18 101.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M320.39 285.59C318.82 284.43 320.3 281.84 317.84 281.33C316.22 283.54 315.96 284.81 316.84 285.77C317.72 286.73 318.51 286.66 320.39 285.59Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M325.28 21.0701L333.88 23.7201C333.767 23.1592 333.497 22.6422 333.1 22.2301C332.704 21.8201 332.196 21.535 331.64 21.4101C330.96 21.2701 330.3 21.0501 329.64 20.9201C327.4 20.5101 327.13 20.2701 326.73 18.0801C325.08 18.6101 324.97 18.6901 325.79 19.8201C326.44 20.7001 325.66 20.8201 325.29 21.1601L325.28 21.0701Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M447.3 143.25L443.66 138.64C441.4 140.51 444.66 142.52 442.9 144.41L447.3 143.25Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M454.86 297.87C453.63 296.57 452.59 296.39 451.54 297.22C451.281 297.42 451.067 297.672 450.91 297.96C450.76 298.253 450.669 298.572 450.64 298.9C450.62 299.229 450.667 299.558 450.779 299.867C450.891 300.177 451.065 300.46 451.29 300.7C451.87 301.33 452.55 301.4 453.07 300.7C453.721 299.792 454.318 298.847 454.86 297.87Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M458.16 154.32C457.27 154.04 456.85 153.62 457.3 152.58C457.468 151.955 457.533 151.306 457.49 150.66C456.66 150.532 455.818 150.498 454.98 150.56C454.16 150.71 454.07 151 453.5 152.56L455.34 152.9L456.05 155.35L458.1 154.24L458.16 154.32Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M318.39 330.69C321.65 332.87 321.97 332.9 324.19 331.23C321.82 328.82 320.55 328.7 318.39 330.69Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.05 239.36C447.69 238.61 447.43 237.09 447.18 235.51C447.06 234.7 446.98 233.93 445.84 234.19C445.95 235.52 446.01 236.78 446.17 238.05C446.29 238.727 446.571 239.365 446.99 239.91C447.37 240.41 447.99 241.02 448.54 241C449.09 240.98 449.39 240.15 450.05 239.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M109.2 353.77L106.39 350.2C104.88 351.72 104.57 352.82 105.26 353.83C105.95 354.84 106.39 354.72 109.2 353.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M274.56 231.47L278.64 228.57C278.25 226.82 276.53 226.95 275.03 225.98L275.69 227.64C275.1 228.82 274.56 229.91 274.03 231L274.56 231.47Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M420.5 142.61C420.18 140.68 420.31 138.95 419.09 137.1C417.61 139.41 418.83 141.64 418.16 143.88L420.5 142.61Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M249.97 154.91C247.48 154.22 246.36 156.53 244.11 157.34L246.11 158.72L246.94 157.15C249.47 156.46 249.47 156.46 249.97 154.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M415.91 157.42C414.91 156.8 414.25 156.42 413.63 155.99C413.01 155.56 412.54 155.18 412.12 154.87L411.12 158.25C412.39 157.74 414.13 158.99 415.91 157.42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M462.74 188.77C462.425 189.746 462.207 190.751 462.09 191.77C462.09 192.85 463.19 193.77 463.92 193.55C464.92 193.22 464.92 192.38 464.69 191.55C464.36 190.5 463.89 189.55 463.48 188.55L462.74 188.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M275.62 205.18C277.19 204.41 278.88 204.38 279.62 202.58C279.92 201.84 280.51 201.07 279.54 200.58C279.343 200.484 279.129 200.426 278.91 200.41C278.689 200.403 278.469 200.437 278.26 200.51C278.056 200.589 277.869 200.708 277.71 200.86C277.552 201.018 277.427 201.204 277.34 201.41C277.18 201.69 277.2 202.09 277.05 202.41C276.66 203.24 276.19 204.07 275.62 205.18Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M249.16 72.4001C243.55 71.6101 243.22 71.7301 240.79 75.1001C241.42 75.6301 242.3 75.6101 242.54 75.0201C243.54 72.7601 245.44 72.6501 247.43 72.6901C248.015 72.6479 248.594 72.5509 249.16 72.4001Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M301.61 177.22L297.61 173.46C296.93 173.83 296.25 174.12 295.61 174.46C296.55 175.76 299.17 176.93 301.61 177.22Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M448.87 205.07L448.52 202.16C447.52 202.28 446.32 202.65 446.52 200.42C445.29 202.09 445.42 203.08 446.26 204.02C446.91 204.77 447.39 205.98 448.87 205.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M391.79 155.07L395.33 157.23C395.67 155.12 395.22 153.86 394.01 153.56C392.8 153.26 392.16 153.96 391.79 155.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M414.92 64.9201L410.39 62.5901C410.52 64.8501 411.04 65.4901 413.05 66.0701C414.21 66.4201 414.58 65.7501 414.92 64.9201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M324.13 303.83L326.97 305.14C327.87 304.41 328.97 303.51 330.1 302.59C328.11 303.07 325.82 301.91 324.13 303.83Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M373.86 211.37C372.81 211.27 372.07 211.18 371.28 211.14C370.49 211.1 369.81 211.45 369.83 212.27C369.807 212.611 369.862 212.953 369.99 213.27C370.121 213.571 370.312 213.843 370.55 214.07C370.95 214.29 371.88 213.94 372.34 213.56C372.939 212.913 373.45 212.19 373.86 211.41V211.37Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M263.82 18.1201C265.56 19.8601 266.59 20.0301 269.06 19.1201C268.87 18.7801 268.83 18.2601 268.54 18.1201C267.805 17.7613 266.998 17.5748 266.18 17.5748C265.362 17.5748 264.555 17.7613 263.82 18.1201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M313.01 326.07V329.22C313.429 329.775 314.043 330.15 314.729 330.269C315.414 330.388 316.119 330.242 316.7 329.86L316.03 327.62C315.53 327.62 314.78 327.84 314.3 327.62C313.755 327.199 313.294 326.68 312.94 326.09L313.01 326.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M284.85 326.76C282.61 327.63 282.59 327.76 283.54 329.81L287.29 328.34C286.86 327.08 285.5 327.34 284.76 326.72L284.85 326.76Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M329.46 112.07C329.264 111.82 329.019 111.612 328.74 111.46C328.457 111.314 328.148 111.225 327.83 111.2C327.515 111.184 327.199 111.228 326.9 111.33C326.606 111.442 326.337 111.612 326.11 111.83C325.519 112.225 325.092 112.823 324.91 113.51C324.735 114.176 324.795 114.883 325.08 115.51C326.93 114.75 326.74 111.69 329.46 112.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M101.92 342.35C101.87 344.14 102.92 345.2 104.22 346.23C105.02 343.07 104.66 342.48 101.92 342.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M192.85 54.07L193.36 50.97C192.25 52.24 191.59 53.16 190.78 53.91C189.951 54.5893 189.172 55.3279 188.45 56.12C190.34 56.12 191.54 55.02 192.88 53.97L192.85 54.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M294.24 282.69C293.53 281.69 292.84 280.69 292.07 279.69C291.953 279.577 291.813 279.491 291.659 279.439C291.505 279.387 291.341 279.371 291.18 279.39C290.92 279.47 290.74 279.86 290.54 280.13C290.48 280.13 290.54 280.29 290.54 280.38C290.5 282.07 292.54 283.28 294.24 282.69Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M460.19 221.8C462.62 220.48 461.93 219.8 459.87 218.14C458.47 219.07 458.47 219.07 460.19 221.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M365.48 251.21C364.85 251.887 364.321 252.652 363.91 253.48C363.886 253.82 363.933 254.16 364.05 254.48C364.165 254.784 364.339 255.062 364.56 255.3C364.69 255.55 365.56 255.48 365.88 255.25C366.2 255.02 366.18 254.35 366.11 253.89C365.951 252.986 365.741 252.091 365.48 251.21Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M189.94 71.4101L189.4 68.3301L185.59 69.0101C186.75 70.3401 188.26 70.6201 189.94 71.4101Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M209.67 32.36L212.6 31.19L213.18 28.49C211.94 29.6 209.85 29.73 209.67 32.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M72.3899 366.07C72.3099 365.07 71.2699 363.84 73.2199 363.3L71.5199 360.87L69.6299 362.67L72.3899 366.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M487.23 306.91L483.57 312.31L483.78 312.68C484.18 312.52 484.78 312.49 484.96 312.2C485.96 310.58 486.84 308.88 487.73 307.2L487.61 306.99C487.58 306.96 487.52 306.94 487.23 306.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M260.19 159.73L257.52 160.8C260.26 161.13 260.26 161.13 261.69 160.17C261.112 159.44 260.487 158.749 259.82 158.1C259.58 157.88 259.02 157.97 258.58 158.1C258.417 158.274 258.312 158.494 258.28 158.73C258.595 158.953 258.93 159.147 259.28 159.31L260.19 159.73Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M231.53 12.3401C231.18 12.8201 230.69 13.4501 229.92 14.4501L236.75 12.1801L236.63 11.7001C234.98 11.9201 233.39 12.1201 231.53 12.3401Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M262.06 6.50004C260.23 5.04004 258.42 6.28004 256.58 6.50004C258.39 7.73004 260.21 7.21004 262.06 6.50004Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M326.9 47.0701C324.84 47.8034 323.128 49.2799 322.1 51.2101C324.98 51.4201 325.29 48.7801 326.9 47.0701Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M296.8 180.41C298.28 180.31 299.97 180.74 300.8 178.75C298.75 177.66 297.81 179.17 296.8 180.41Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M342.78 51.67C339.42 50.55 337.44 52.3 335.4 53.78C336.52 53.42 337.62 53.03 338.75 52.7C339.88 52.37 341.06 52.07 342.78 51.67Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M322.98 41.9801C324.37 42.2601 325.7 42.6501 327.08 42.8501C328.16 43.0001 328.75 42.4601 328.53 41.2901V41.3701L326.28 40.6901H326.38C325.703 40.7598 325.034 40.8903 324.38 41.0801C323.88 41.3214 323.415 41.631 323 42.0001L322.98 41.9801Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M332.51 72.6301L336.86 73.0001C336.22 70.9501 334.94 70.7401 332.51 72.6301Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M293.22 331.93C293.515 331.901 293.805 331.831 294.08 331.72C294.78 331.26 295.46 330.72 296.08 330.3C295.85 329.2 295.14 328.77 294.37 329.08C293.21 329.56 293.11 330.7 293.22 331.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M388.97 224.91C388.06 225.33 387.4 225.61 386.53 226L387.81 228C388.82 227.98 389.18 227.12 388.97 224.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M297 309.28L295.24 310.06C295.13 312.57 295.13 312.57 296.95 312.82L297 309.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.12 137.96C447.94 137.12 447.91 137.14 446.92 139.96C448.49 140.17 449.22 139.19 450.12 137.96Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M250.57 63.52C252.32 63.35 254.24 64.38 256.15 62.77C253.83 61.67 252.22 62.77 250.54 63.57L250.57 63.52Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.66 200.07C450.412 200.761 450.32 201.499 450.39 202.23C450.456 202.96 450.681 203.667 451.05 204.3H451.68L451.46 200.05L450.66 200.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M342.19 70.22L338.42 70.83C339.79 72.21 340.06 72.19 342.19 70.22Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M326.1 234.67C327.1 234.79 327.79 234.76 327.74 233.78C327.69 232.8 326.59 232.08 325.03 231.87L326.1 234.67Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M290.28 312.93C290.09 313.76 289.78 314.29 289.91 314.68C289.967 314.868 290.062 315.041 290.19 315.19C290.322 315.331 290.487 315.438 290.67 315.5C290.855 315.57 291.055 315.59 291.25 315.56C291.443 315.54 291.626 315.467 291.78 315.35C292.07 315.1 292.29 314.28 292.11 314.07C291.559 313.603 290.943 313.219 290.28 312.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M245.56 11.6801H239.03C241.18 13.1501 243.38 12.0301 245.51 12.2901L245.56 11.6801Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M294.64 225.83C292.89 224.56 291.59 225.68 290.12 225.83C290.95 226.55 290.95 226.55 294.64 225.83Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M192.17 106.07L191.76 109.56C193.55 108.8 193.77 107.78 192.17 106.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M67.7799 363.58L65.1899 362.07C65.3899 364.62 65.7399 364.81 67.7799 363.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M247.95 288.41C247.26 287.29 246.45 286.97 245.37 287.62C245.295 287.717 245.246 287.83 245.227 287.951C245.208 288.072 245.219 288.195 245.26 288.31C246.06 289.27 246.92 289.29 247.95 288.41Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M237.46 17.92L234.72 18.7L234.82 19.38L238.32 19.67L237.32 17.89L237.46 17.92Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M452.25 293.66C453.51 293.21 455.49 294.15 456.25 291.66C455.12 292.1 454.45 292.33 453.83 292.66C453.276 292.964 452.738 293.298 452.22 293.66H452.25Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M106.53 381.54C105.84 380.27 106.05 378.63 104.02 378.97C105.11 379.47 104.17 381.71 106.53 381.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M267.39 8.60009C266.16 6.34009 264.6 6.72009 262.51 7.18009C264.15 8.20009 265.56 8.22009 267.39 8.60009Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M381.48 126.67C380.855 126.435 380.165 126.435 379.54 126.67C378.921 126.919 378.411 127.38 378.1 127.97C379.59 128.48 380.5 128.12 381.48 126.67Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M462.63 307.38C460.5 306.38 460.48 309.56 458.73 308.9C460.39 309.49 461.72 309.33 462.63 307.38Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M483.07 287.93C483.896 287.646 484.704 287.312 485.49 286.93C486.103 286.569 486.595 286.033 486.9 285.39C486.109 285.441 485.346 285.7 484.688 286.141C484.029 286.582 483.499 287.189 483.15 287.9L483.07 287.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M274.46 162.07L273.22 164.78C274.01 164.78 274.72 164.91 274.89 164.69C275.39 163.9 275.39 163.07 274.46 162.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M54.3301 373.21C55.3301 373.99 55.4701 375.63 57.2501 375.76C56.8101 374.07 55.9001 373.22 54.3301 373.21Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M277.95 239.74C278 236.85 278 236.85 275.6 237.33L277.95 239.74Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M272.76 66.75C275.42 65.94 275.42 65.94 274.6 63.98L272.76 66.75Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M358 209.07L361.26 207.3C359.53 206.76 358.66 207.67 357.74 208.45L358 209.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M278.48 7.80003C276.8 7.10003 275.21 6.01003 272.63 6.46003C274.9 7.20003 276.63 7.77003 278.37 8.32003L278.48 7.80003Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M43.7 354.35L47.24 357.1C47.0842 356.326 46.7408 355.601 46.24 354.99C45.7193 354.388 45.0555 353.928 44.31 353.65L43.7 354.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M216.39 78.91C214.44 77.59 213.5 79.25 212.34 80.08L216.39 78.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M129.39 375.81C130.8 376.47 131.78 377.27 133.56 376.7C132.1 375.84 131.13 375.07 129.39 375.81Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M218.09 134.35C216.86 134.75 216.86 134.75 216.81 136.76C217.55 135.87 218.02 135.31 218.5 134.76L218.09 134.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M239.25 23.07C241.215 22.9898 243.089 22.2177 244.54 20.89V20.95C242.33 20.55 240.88 22.03 239.24 23.08L239.25 23.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M361.33 204.29C361.33 204.78 361.08 205.39 361.33 205.74C361.75 206.5 362.5 206.68 363.33 205.89L361.95 204.25L361.33 204.29Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M465.24 297.31C463.84 297.31 462.62 297.5 462.16 298.99L465.24 297.31Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M456.51 299.15L458.64 295.65C456.57 296.77 456.47 296.93 456.51 299.15Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M90.7 370.44C91.64 370.99 92.17 372.44 93.99 371.96C93.6037 371.462 93.1028 371.064 92.53 370.8C91.9557 370.541 91.3295 370.418 90.7 370.44Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M456.39 173.61L458.8 174.61C458.21 172.81 458.21 172.81 456.55 173.07L456.39 173.61Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M339.7 25.3801L335.83 24.8501C337.32 26.2601 337.74 26.3301 339.7 25.3801Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M249.89 14.95C247.84 14.2 246.34 13.76 244.82 14.95H249.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M270.92 10.82L274.48 11.4801C272.98 9.54005 272.39 9.44005 270.92 10.82Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M355.65 226.36C354.27 225.78 356.11 224.62 355.12 223.87C354.691 224.346 354.401 224.931 354.28 225.56C354.163 226.193 354.218 226.846 354.44 227.45L355.66 226.29L355.65 226.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M209.93 275.54C210.59 276.75 211.32 276.71 212.28 276.03C211.71 274.8 210.91 275.21 209.93 275.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M453.33 196.52V198.66C454.69 197.75 454.69 197.75 453.87 196.49L453.33 196.52Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M328.39 47.62L331.74 48.26C330.39 46.73 330.39 46.73 328.39 47.62Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M361.04 252.99H358.33V253.71L361.06 253.62L361.04 252.99Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M333 110.28L335.45 111.8L335.14 109.37L333 110.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M317.16 109.89C317.799 110.012 318.449 110.069 319.1 110.06C319.25 109.99 319.37 109.51 319.5 109.21C319.012 108.954 318.495 108.759 317.96 108.63C317.79 108.53 317.56 109.2 317.16 109.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M458.07 320.87C456.34 320.77 455.87 322.24 454.98 323.2C456.47 323.07 457.17 321.76 458.07 320.87Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M321.16 287.54C322.07 286.96 322.87 286.41 322.38 285.1C320.96 285.54 321.13 286.61 321.16 287.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M38.51 340.98L41.06 342.5C40.22 340.3 40.22 340.3 38.51 340.98Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M307.44 175.32L304.82 174.43C304.98 176.34 304.98 176.34 307.44 175.32Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M442.49 199.71L441.58 198.24C441.307 198.375 441.052 198.543 440.82 198.74C441.07 199.269 441.351 199.783 441.66 200.28L442.49 199.71Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.12 324.14C451.53 323.49 452.54 323.01 452.85 321.43C452.151 321.495 451.496 321.802 451 322.3C450.501 322.792 450.19 323.443 450.12 324.14Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M388.22 207.39C389.37 206.76 390.17 206.26 390.22 204.8C389.918 204.839 389.626 204.933 389.36 205.08C389.093 205.229 388.858 205.429 388.67 205.67C388.487 205.911 388.354 206.187 388.28 206.48C388.2 206.776 388.179 207.086 388.22 207.39Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M137.74 339.94C136.74 338.32 136.74 338.32 135.4 339.87L137.74 339.94Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M429.75 217.89L426.69 218.32C428.44 219.12 428.44 219.12 429.75 217.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M283.69 207.74C283.501 207.909 283.357 208.122 283.27 208.36C283.181 208.591 283.144 208.839 283.161 209.086C283.178 209.333 283.25 209.574 283.37 209.79C283.495 210.007 283.666 210.195 283.87 210.34C284.88 209.35 283.96 208.53 283.69 207.74Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M443.62 334.8L445.34 332.45C443.54 332.41 443.6 333.63 443.62 334.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M247.23 303.58L249.37 302.77L249.17 302.14C248.45 302.36 247.73 302.57 247.04 302.75L247.23 303.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M336.31 33.26L339.31 32.78C337.68 31.91 337.68 31.91 336.31 33.26Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M413.59 224.72C414.32 224.56 415.05 224.38 416.2 224.11C414.81 222.94 414.15 223.58 413.46 224.11L413.59 224.72Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M363.66 118.07C363.803 118.228 363.979 118.352 364.176 118.434C364.373 118.515 364.586 118.551 364.799 118.54C365.011 118.528 365.219 118.469 365.406 118.367C365.593 118.265 365.755 118.123 365.88 117.95C364.87 116.97 364.87 116.97 363.66 118.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M188.51 63.91L190.7 62.23C188.76 62.31 188.76 62.31 188.51 63.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M203.05 72.48L201.61 75.22C202.48 74.96 203.09 74.78 203.74 74.61L203.05 72.48Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M205.99 73.4601L207.37 73.7401C207.489 73.3795 207.533 72.9984 207.5 72.6201C207.41 72.2901 206.83 72.2101 206.68 72.3201C206.405 72.671 206.173 73.0537 205.99 73.4601Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M248.27 268.9C247.82 269.31 247.37 269.74 246.65 270.45C248.16 270.71 248.53 270.19 248.27 268.9Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M285.83 11.49L289.23 11.83L289.28 11.28C288.216 10.7799 287.016 10.6496 285.87 10.91L285.83 11.49Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M442.58 156.07L441.58 153.37C441.05 155.7 441.05 155.7 442.58 156.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M458.48 313.77C459.05 313.16 459.62 312.55 460.18 311.93C459.705 311.829 459.209 311.915 458.796 312.171C458.382 312.426 458.083 312.83 457.96 313.3L458.48 313.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M256.29 23.0701H253.29C253.7 23.5101 253.93 23.9601 254.19 23.9801C254.951 23.9121 255.707 23.7884 256.45 23.6101L256.29 23.0701Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M221.09 128.44L218.97 128.54C219.68 129.38 220.39 129.83 221.18 129.13L221.09 128.44Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M182.49 63.3201C183.74 63.3201 184.73 63.3201 185.74 63.3801C184.12 61.9701 184.12 61.9701 182.49 63.3201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M118.54 368.15C119.08 366.34 119.08 366.34 117.2 365.68L118.54 368.15Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M314 283.35L313 285.88C314.39 285.07 314.39 285.07 314 283.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M229.98 18.7101L227.51 18.9401C228.45 20.1901 229.23 19.6401 230.05 19.4201L229.98 18.7101Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M442.88 149.07L445.88 148.3C444.44 147.51 443.62 147.46 442.88 149.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M186.23 76.4001L188.13 75.4001C186.79 74.9001 186.18 75.1001 185.86 75.9601L186.23 76.4001Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M487.1 290.83C486.93 291.45 486.64 292.08 486.76 292.17C487.162 292.4 487.602 292.552 488.06 292.62C488.13 292.26 488.36 291.82 488.24 291.55C488.12 291.28 487.64 291.19 487.1 290.83Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M431.59 226.35L433.86 226.19C433.67 225.84 433.69 225.52 433.54 225.4C432.55 224.66 432.05 225.07 431.59 226.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M280.25 330.43C280.7 330.282 281.14 330.108 281.57 329.91C281.559 329.694 281.512 329.481 281.43 329.28C280.95 329.35 280.43 329.47 280.01 329.57L280.25 330.43Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M453.68 285.34L454.14 287.55C454.97 286.41 454.97 286.41 454.26 285.26C454.065 285.271 453.871 285.297 453.68 285.34Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M267.39 240.79L269.75 240.97L269.3 239.09C268.62 239.69 268.26 240.07 267.39 240.79Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M268.45 22.61L270.72 20.85C269.01 20.63 269.01 20.63 268.45 22.61Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M321.56 284.31C322.73 283.78 323.02 283.25 322.41 282.31C321.39 282.59 321.28 283.23 321.56 284.31Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M417.06 76.17C417.081 76.5158 417.166 76.8548 417.31 77.17C417.44 77.41 417.81 77.48 418.08 77.63C418.21 77.35 418.46 77.05 418.43 76.79C418.4 76.53 418.05 76.42 417.83 76.23C417.61 76.04 417.31 76.19 417.06 76.17Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M453.03 169.65C453.48 169.52 453.91 169.37 454.34 169.2C454.308 168.964 454.248 168.732 454.16 168.51L452.8 168.96L453.03 169.65Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M453.51 172.85L453.77 174.95C454.39 173.87 454.39 173.87 453.51 172.85Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M457.13 242.13L459.56 240.81C458.03 240.28 457.6 241.23 457.13 242.13Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M447.08 230.77L445.25 232.28C446.59 232.7 446.99 232.34 447.08 230.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M332.93 30.38C333.8 31.83 334.4 31.91 335.43 30.44L332.93 30.38Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M391.39 200.8L392.59 199.32C391.04 198.87 391.04 199.7 390.87 200.32L391.39 200.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M449.68 332.58C450.53 331.87 451.08 331.42 451.88 330.77C450.39 330.96 450.39 330.96 449.68 332.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M446.53 330.68L449.43 329.55L449.22 329.02L446.22 330.02L446.53 330.68Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M252.16 8.88L254.79 8.68V8H252.17L252.16 8.88Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M227.58 16.5901L225.12 17.2501C226.23 18.0401 226.93 17.4401 227.65 17.2501C227.647 17.0416 227.624 16.834 227.58 16.6301V16.5901Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M188.11 72.51L185.96 71.51L185.72 71.98L187.86 73.13L188.11 72.51Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M312.97 326.07C313.204 326.15 313.453 326.181 313.7 326.16C313.947 326.14 314.188 326.072 314.41 325.96C314.632 325.847 314.83 325.691 314.99 325.5C315.151 325.31 315.27 325.089 315.34 324.85L314.99 324.4C314.34 324.97 313.69 325.54 312.99 326.1L312.97 326.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M296.03 335.52L298.15 335.47V334.86L296.08 334.75L296.03 335.52Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M269.39 336.07C268.67 336.21 267.94 336.36 267.18 336.53L267.29 337.18L269.5 336.92L269.39 336.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M457.99 326.2C457.472 326.259 456.994 326.508 456.65 326.9C456.303 327.29 456.117 327.798 456.13 328.32C456.642 328.251 457.111 327.999 457.45 327.61C457.79 327.218 457.981 326.719 457.99 326.2Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M253.78 159.95L255.56 159.7L255.48 159.12C254.89 159.2 254.34 159.27 253.7 159.37L253.78 159.95Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M419.12 79.28L420.42 80.82C420.561 80.7317 420.692 80.6277 420.81 80.51L419.59 78.91L419.12 79.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M387.62 101.81C387.57 102.24 387.45 102.62 387.52 102.66C387.864 102.813 388.227 102.917 388.6 102.97C388.6 102.97 388.84 102.41 388.78 102.36C388.406 102.151 388.019 101.967 387.62 101.81Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M477.08 224.34L474.62 223.22C475.09 224.58 475.68 224.65 477.08 224.34Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M89.32 373.14L87.6001 373.05L87.55 373.65C88.12 373.7 88.6901 373.78 89.2701 373.84C89.2682 373.606 89.2849 373.372 89.32 373.14Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M226.88 318.45L224.54 319.21C224.709 319.372 224.91 319.498 225.13 319.579C225.35 319.661 225.584 319.697 225.818 319.685C226.052 319.672 226.281 319.613 226.492 319.509C226.702 319.405 226.888 319.259 227.04 319.08L226.88 318.45Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M408.92 224.76L407.39 223.71L407.02 224.21L408.42 225.33L408.92 224.76Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M439.84 334.37L437.55 334.9C438.47 335.63 439.17 334.98 439.97 334.96L439.84 334.37Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M244.45 5.44004L241.45 5.04004L241.34 5.65004L244.34 6.21004L244.45 5.44004Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M300.47 284.28V282.55L299.98 282.5L299.74 284.21L300.47 284.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M282.3 59.3401C281.8 59.6201 281.3 59.9401 280.85 60.2301L281.1 60.6901L282.63 59.9701L282.3 59.3401Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M270.98 5.88007L268.28 5.58008L268.2 6.10007C269.09 6.22007 269.99 6.36008 270.85 6.46008L270.98 5.88007Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M461.27 304.68C462.27 304.46 463.6 305.17 463.98 303.21L461.23 304.71L461.27 304.68Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M281.07 230.07C282.54 229.53 282.15 228.84 281.67 227.61L281.07 230.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M366.44 248.26L364.73 248.39V248.8L366.45 248.89L366.44 248.26Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M135.55 348.68C136.36 348.82 136.91 348.93 137.55 349.02C137.55 348.66 137.55 348.43 137.46 348.37C136.89 347.92 136.32 347.76 135.55 348.68Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M460.48 175.55C460.39 176.03 460.19 176.42 460.32 176.55C460.427 176.649 460.558 176.718 460.7 176.75C460.841 176.79 460.99 176.79 461.13 176.75C461.247 176.659 461.337 176.538 461.39 176.4C461.425 176.255 461.425 176.105 461.39 175.96C461.39 175.77 460.93 175.72 460.48 175.55Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M325.26 21.14L323.08 19.39C323.28 20.84 324.19 21.1 325.28 21.04L325.26 21.14Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M482.24 289.62L481.11 290.11V290.02C481.75 291.81 481.75 291.81 483.55 291.16V291.22L482.12 289.6L482.24 289.62Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M308.99 337.69L310.57 336.57L310.37 336.19L308.56 337.08L308.99 337.69Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M103.39 374.07L101.83 374.45L101.95 375.09L103.55 374.8L103.39 374.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M455.46 161.92L455.22 163.28L455.64 163.39C455.79 162.95 455.95 162.52 456.14 162.06C455.911 162.028 455.683 161.981 455.46 161.92Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M258.15 8.81006L255.84 9.49006L256.04 10.1701L258.37 9.51006L258.15 8.81006Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M280.84 212.37L281.99 211.37L281.8 211.01C281.472 211.059 281.156 211.171 280.87 211.34C280.66 211.51 280.62 211.89 280.52 212.18L280.84 212.37Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M434.8 337.84L437.05 337.66V337.13C436.29 337.2 435.53 337.28 434.73 337.39L434.8 337.84Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M251.39 308.38L249.51 308.08L249.44 308.51L251.29 308.86L251.39 308.38Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M283.49 190.37C283.96 190.37 284.33 190.5 284.38 190.37C284.543 190.083 284.632 189.76 284.64 189.43C284.453 189.305 284.252 189.205 284.04 189.13L283.49 190.37Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M319.95 254.5L320.95 253.37L320.55 253.01L319.55 254.15L319.95 254.5Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M303.9 6.07007L300.6 5.07007C301.64 6.23007 301.65 6.25007 303.9 6.07007Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M232.39 134.07L233.56 133.43L233.35 133.04L232.08 133.51L232.39 134.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M323.57 46.5701C323.15 46.8001 322.75 47.0701 322.34 47.3201L322.56 47.7101L323.89 46.9901L323.57 46.5701Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M324.39 306.81L322.77 306.86C322.77 307.05 322.77 307.23 322.77 307.41L324.35 307.52L324.39 306.81Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M190.44 76.54L192.44 75.99L192.33 75.49L190.33 75.96L190.44 76.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M308.64 293.98L308.46 295.51L308.89 295.61L309.39 294.07L308.64 293.98Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M328.12 246.92L326.27 247.42L326.39 247.9L328.33 247.36L328.12 246.92Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M300.05 44.89C299.42 45.35 298.5 45.73 299.94 47.12V44.87L300.05 44.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M439.65 136.07L440.75 137.07C440.9 136.99 440.98 136.83 441.1 136.71L439.99 135.71L439.65 136.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M438.56 149.47C438.64 150.47 438.56 150.79 438.7 150.9C438.939 151.121 439.255 151.24 439.58 151.23C439.71 151.23 439.97 150.65 439.88 150.48C439.79 150.31 439.39 150.07 438.56 149.47Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M418.39 121.2L419.9 120.94V120.62L418.39 120.57V121.2Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M50.78 357.96L52.19 359.49L52.53 359.19L51.19 357.66L50.78 357.96Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M406.46 109.98L406.84 111.6L407.32 111.49L406.97 109.86L406.46 109.98Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M339.94 245.28C339.27 244.41 339.27 244.41 338.38 245.76C339.17 246.23 339.6 245.76 339.97 245.18L339.94 245.28Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M382.1 99.92L380.41 99.52L380.27 99.86L381.92 100.62L382.1 99.92Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M258.31 262.07L256.31 262.69V263.13C256.65 263.253 257.009 263.311 257.37 263.3C257.69 263.25 257.74 262.87 258.31 262.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M289.13 321.07C288.33 320.98 288.01 320.84 287.89 320.94C287.822 321.035 287.778 321.145 287.76 321.26C287.736 321.372 287.736 321.488 287.76 321.6C287.841 321.681 287.941 321.74 288.052 321.77C288.163 321.8 288.279 321.8 288.39 321.77C288.66 321.67 288.81 321.4 289.13 321.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M295.94 338.99L294.94 340.59L295.39 340.89L296.39 339.33L295.94 338.99Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M104.83 368.07L107.17 367.31L106.98 366.81C106.23 367.14 105.47 367.45 104.72 367.81L104.83 368.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M430.46 220.07L429.12 221.54C429.67 221.65 430.05 221.8 430.12 221.72C430.38 221.26 430.62 220.79 430.84 220.31L430.46 220.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M47.6001 362.65L48.8401 363.75L49.2901 363.29L48.1901 362.07L47.6001 362.65Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M267.77 310.53C267.77 311.15 267.69 311.53 267.84 311.72C267.99 311.91 268.35 311.9 268.62 311.97C268.62 311.75 268.8 311.47 268.71 311.32C268.434 311.015 268.118 310.749 267.77 310.53Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M458.18 154.31L457.49 157.01C459.42 156.01 458.14 155.11 458.16 154.32L458.18 154.31Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M452.74 316.39L450.5 317.6C451.82 318.14 452.32 317.78 452.74 316.39Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M222.87 120.99L224.16 120.67V120.26C223.71 120.31 223.26 120.37 222.83 120.44L222.87 120.99Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M393.71 228.07L395.12 227.45L394.99 227.06L393.45 227.56L393.71 228.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M382.51 105.56L383.86 104.83L383.63 104.41L382.12 105.01L382.51 105.56Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M380.85 103.77L382.14 103.89C382.14 103.76 382.19 103.62 382.23 103.49L380.91 103.15L380.85 103.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M270.06 236.38C269.648 236.58 269.224 236.754 268.79 236.9L268.91 237.3L270.27 236.92L270.06 236.38Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M303.06 301.15C303.37 301.08 303.7 301.09 303.77 300.95C303.811 300.718 303.811 300.482 303.77 300.25C303.56 300.25 303.25 300.25 303.17 300.33C303.086 300.595 303.049 300.872 303.06 301.15Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M180.7 109.8C180.63 110.45 180.52 110.8 180.61 110.87C180.854 110.97 181.116 111.021 181.38 111.02C181.38 110.79 181.45 110.53 181.38 110.35C181.31 110.17 181 110.07 180.7 109.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M306.09 341.56L305.43 341.31C305.357 341.585 305.313 341.866 305.3 342.15C305.3 342.2 305.78 342.35 305.88 342.27C305.98 342.19 306.01 341.85 306.09 341.56Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M302.78 288.69L302.03 290.2L302.47 290.4C302.69 289.9 302.93 289.4 303.18 288.89L302.78 288.69Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M459.83 286.93L458.83 287.8L459.11 288.18L460.23 287.41L459.83 286.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M466.84 299.07C465.33 298.07 465.29 299.46 464.84 300.16L465.19 300.61L466.88 299L466.84 299.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M245.71 8.54006L247.94 8.11006L247.84 7.69006L245.62 8.14006L245.71 8.54006Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M218.79 304.36C218.785 303.926 218.717 303.495 218.59 303.08C218.51 302.93 218.03 302.78 217.96 302.85C217.751 303.072 217.62 303.357 217.59 303.66C217.58 303.75 217.97 303.88 218.79 304.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M139.12 295.65C139.475 295.678 139.833 295.651 140.18 295.57C140.31 295.5 140.3 295.14 140.36 294.9C140.063 294.823 139.756 294.796 139.45 294.82C139.29 294.87 139.24 295.24 139.12 295.65Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M247.33 274.43C246.958 274.355 246.579 274.325 246.2 274.34C246.12 274.34 246.08 274.74 246.03 274.95C246.253 275.053 246.495 275.108 246.74 275.11C246.96 275.07 247.02 274.81 247.33 274.43Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M290.66 323.42L289.29 323.83L289.42 324.28C289.87 324.14 290.34 324.01 290.81 323.88L290.66 323.42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M124.6 371.77C124.6 371.92 124.55 372.11 124.6 372.19C124.65 372.27 124.89 372.27 125.03 372.3V371.71L124.6 371.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M267.61 163.89C267.17 163.89 266.73 163.91 266.29 163.95V164.38L267.6 164.53L267.61 163.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M434.3 223.58L435.6 223.32V222.94H434.25L434.3 223.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M446.7 243.07L448 243.2V242.79L446.71 242.68L446.7 243.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.01 232.53L450.82 231.62L450.55 231.31L449.6 232.05L450.01 232.53Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M191.89 64.17C191.15 63.52 190.68 63.73 190.17 65.02L191.91 64.07L191.89 64.17Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M382.39 96.39L382.01 96.76C382.19 96.91 382.37 97.12 382.56 97.15C382.75 97.18 382.84 96.88 382.98 96.73L382.39 96.39Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M88.9001 367.36C88.6053 367.278 88.3043 367.222 88.0001 367.19C88.0001 367.19 87.8501 367.57 87.8601 367.57C88.1301 367.71 88.4101 367.81 88.7001 367.93L88.9001 367.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M416.05 139.33C415.51 139.45 414.95 139.58 414.42 139.68L414.5 140.15L416.12 139.86L416.05 139.33Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M205.75 33.9601L206.75 33.0601L206.49 32.7201L205.41 33.5301L205.75 33.9601Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M445.05 103.32C444.87 102.54 444.89 102.32 444.76 102.15C444.63 101.98 444.37 102.05 444.16 102.02C444.143 102.236 444.167 102.453 444.23 102.66C444.39 102.88 444.59 102.98 445.05 103.32Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M415.26 132.27C415.28 132.572 415.32 132.873 415.38 133.17H415.77C415.82 132.87 415.85 132.58 415.87 132.28L415.26 132.27Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M447.71 184.56L447.44 184.96C447.58 185.02 447.8 185.18 447.83 185.15C447.964 184.987 448.078 184.81 448.17 184.62L447.71 184.56Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M69.5199 358.18C69.6299 357.99 69.7799 357.8 69.7499 357.73C69.6148 357.553 69.4605 357.392 69.2899 357.25C69.1899 357.41 68.9799 357.62 69.0199 357.74C69.0599 357.86 69.3199 358 69.5199 358.18Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M210.39 28.5201L211.39 28.0001L211.22 27.6901C210.85 27.8201 210.48 27.9401 210.12 28.0801L210.39 28.5201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M421.16 124.71C421.34 125.04 421.48 125.3 421.61 125.36C421.74 125.42 422 125.23 422.15 125.07C422.132 124.921 422.056 124.785 421.94 124.69C421.681 124.66 421.419 124.66 421.16 124.69V124.71Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M54.95 343.48L55.8999 344.19L56.17 343.82L55.17 343.12L54.95 343.48Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M428.79 118.63C428.56 118.95 428.34 119.28 428.12 119.63C428.96 119.63 428.96 119.63 428.79 118.63Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M303.84 304.96L304.18 303.54L303.86 303.42L303.33 304.72L303.84 304.96Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M292.1 167.47C291.761 167.477 291.424 167.53 291.1 167.63C291.039 167.825 291.039 168.035 291.1 168.23C291.375 168.305 291.665 168.305 291.94 168.23C292.09 168.21 292.08 167.83 292.1 167.47Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M307.76 341.77C308.12 341.72 308.44 341.77 308.51 341.65C308.579 341.439 308.579 341.211 308.51 341C308.44 340.8 308.12 340.92 308.07 341C307.94 341.245 307.846 341.508 307.79 341.78L307.76 341.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M293.93 317.93C294.36 317.93 294.77 318 295.2 318C295.21 317.85 295.21 317.7 295.2 317.55C294.772 317.49 294.342 317.457 293.91 317.45L293.93 317.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M294.72 323.18C294.364 323.11 294.001 323.09 293.64 323.12C293.55 323.18 293.51 323.5 293.45 323.71C293.664 323.795 293.89 323.842 294.12 323.85C294.32 323.8 294.39 323.55 294.72 323.18Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M247.32 281.45L246.03 281.34L245.97 281.75L247.24 281.99L247.32 281.45Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M311.8 162.22L313.1 162.03V161.57H311.75L311.8 162.22Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M233.12 8.92004L231.71 9.09004V9.55005C232.2 9.55005 232.71 9.46005 233.17 9.39005C233.17 9.39005 233.26 9.24005 233.25 9.18005C233.24 9.12005 233.2 9.07004 233.12 8.92004Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M352.89 204.8C352.553 205.037 352.241 205.309 351.96 205.61C351.84 205.75 351.96 206.06 352.31 206.41L352.78 204.77L352.89 204.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M449.49 322.2L449.63 321.2C449.41 321.2 449.12 321.14 448.98 321.2C448.84 321.26 448.78 321.63 448.68 321.84L449.49 322.2Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M388.55 201.12L388.27 202.12L388.92 202.28V201.17L388.55 201.12Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M249.16 149.12L249.21 149.2L249.51 149.95L249.68 149.85L249.16 149.12Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M395.03 202.57L396.03 201.57L395.82 201.32L394.71 202.1L395.03 202.57Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M422.95 81.91L423.89 82.63L424.12 82.34L423.21 81.61C423.13 81.7 423.03 81.8 422.95 81.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M447.29 147.42L447.5 147.81C447.5 147.89 447.76 147.67 447.89 147.6L447.68 147.22C447.65 147.16 447.45 147.35 447.29 147.42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M54.24 358.9C54.24 359.21 54.1 359.52 54.24 359.63C54.4589 359.734 54.691 359.808 54.9299 359.85C54.9899 359.64 55.1499 359.33 55.0599 359.23C54.8049 359.079 54.5284 358.968 54.24 358.9Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M247.09 266.93L246.63 266.76L246.52 267.36C246.68 267.36 246.89 267.42 246.99 267.36C247.09 267.3 247.07 267.07 247.09 266.93Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M457.31 270.96C457.301 270.786 457.267 270.614 457.21 270.45L456.69 269.5L456.27 269.73C456.432 270.076 456.619 270.411 456.83 270.73C456.9 270.86 457.13 270.89 457.3 270.96C457.47 271.03 457.31 270.96 457.31 270.96Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M322.39 255.42L322.12 256.09C322.322 256.164 322.535 256.204 322.75 256.21C322.853 256.113 322.932 255.993 322.98 255.86C322.801 255.691 322.603 255.543 322.39 255.42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M201.27 80.3001L201.37 79.2001C201.196 79.3388 201.039 79.4965 200.9 79.6701L201.27 80.3001Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M194.72 70.26L195.63 70.58L195.81 70.29L194.97 69.74C194.88 69.91 194.81 70.07 194.72 70.26Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M106.65 346.41C106.73 346.74 106.73 347.09 106.84 347.13C107.07 347.156 107.303 347.114 107.51 347.01C107.51 347.01 107.51 346.64 107.44 346.59C107.187 346.49 106.921 346.429 106.65 346.41Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M308.04 310.27L308.76 309.57L308.49 309.29L307.76 309.97L308.04 310.27Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M300.79 298.72L301.63 298.6C301.509 298.427 301.356 298.278 301.18 298.16C301.18 298.09 300.93 298.3 300.78 298.38L300.79 298.72Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M331 24.8901L329.9 24.7201L329.72 25.4301L330.85 25.7401L331 24.8901Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M439.95 221.34L440.15 222.55C440.402 222.45 440.64 222.319 440.86 222.16C440.95 222.16 440.86 221.85 440.86 221.69L439.95 221.34Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M446.17 228.35L444.93 228.75L445.08 229.23L446.32 228.77L446.17 228.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M452.14 324.14L451.14 324.94L451.31 325.24L452.41 324.64L452.14 324.14Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M364.53 207.15L364.61 207.52C364.756 207.501 364.896 207.45 365.02 207.37C365.07 207.37 365.02 207.15 364.96 207.03L364.53 207.15Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M365.03 203.07L364.93 203.78C365.15 203.78 365.43 203.84 365.59 203.78C365.75 203.72 365.74 203.4 365.81 203.21L365.03 203.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M254.04 70.5L253.04 71.4C253.314 71.4083 253.589 71.3915 253.86 71.35C253.89 71.33 253.9 71.07 254.04 70.5Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M265.39 60.29L265.15 60.78C265.357 60.8594 265.578 60.9 265.8 60.9C265.86 60.9 265.93 60.64 266.01 60.51L265.39 60.29Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M100.67 357.55L99.47 356.97L99.27 357.36L100.49 357.93L100.67 357.55Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M128.71 383.07L128.63 383.48C128.78 383.48 129.03 383.58 129.05 383.55C129.11 383.376 129.147 383.194 129.16 383.01L128.71 383.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M456.09 319.07C456.32 319.16 456.56 319.29 456.59 319.25C456.737 319.08 456.862 318.892 456.96 318.69C456.81 318.64 456.62 318.51 456.55 318.56C456.368 318.702 456.213 318.875 456.09 319.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M487.39 287.8V287.18C487.23 287.18 486.97 287.18 486.93 287.18C486.851 287.384 486.81 287.601 486.81 287.82L487.39 287.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M283.73 201.4C283.68 201.6 283.65 201.804 283.64 202.01C283.757 202.084 283.891 202.126 284.03 202.13C284.121 201.948 284.191 201.757 284.24 201.56L283.73 201.4Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M413.62 142.26C413.57 142.39 413.45 142.56 413.5 142.65C413.55 142.74 413.74 142.8 413.87 142.87L414.07 142.35L413.62 142.26Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M232.72 286.81L232.93 287.19L233.44 286.91C233.38 286.78 233.29 286.62 233.13 286.61C232.97 286.6 232.83 286.76 232.72 286.81Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M403.39 119.67C403.509 119.842 403.65 119.996 403.81 120.13C403.81 120.2 404.05 120 404.19 119.93C404.091 119.752 403.974 119.584 403.84 119.43C403.79 119.45 403.63 119.56 403.39 119.67Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M450.61 207.22C450.764 207.047 450.901 206.859 451.02 206.66L450.83 206.31L450.28 206.94C450.366 207.059 450.479 207.155 450.61 207.22Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M458.62 299.25C458.703 299.462 458.81 299.663 458.94 299.85C459.086 299.839 459.227 299.791 459.35 299.71C459.301 299.486 459.237 299.266 459.16 299.05L458.62 299.25Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M220.31 24.63C219.985 24.7723 219.651 24.8926 219.31 24.99L219.42 25.38L220.42 25.17L220.31 24.63Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M320.39 44.7201L321.46 45.2501L321.61 44.9701L320.67 44.3401L320.39 44.7201Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M323.07 42L321.91 42.81L322.33 43.2L322.98 41.97L323.07 42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M278.71 342.71C278.86 342.71 279.11 342.81 279.13 342.78C279.193 342.609 279.237 342.431 279.26 342.25C279.11 342.25 278.92 342.25 278.81 342.31C278.7 342.37 278.75 342.58 278.71 342.71Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M129.18 373.17L129.27 373.63L129.85 373.51C129.78 373.36 129.68 373.19 129.63 373.09C129.58 372.99 129.32 373.14 129.18 373.17Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M449.17 326.44L448.17 327.58L448.48 327.9L449.56 326.9L449.17 326.44Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M335.79 247.45L335.68 248.21C335.969 248.25 336.261 248.25 336.55 248.21C336.62 248.21 336.68 247.66 336.55 247.58C336.31 247.48 336.05 247.435 335.79 247.45Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M270.44 312.88C270.39 313.02 270.25 313.2 270.3 313.3C270.35 313.4 270.57 313.45 270.71 313.52L270.92 312.98L270.44 312.88Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M192.88 53.98H194.88V54.05H192.88V53.98Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M202.92 77.07L203.05 77.63C203.21 77.55 203.46 77.51 203.48 77.4C203.515 77.1948 203.515 76.9852 203.48 76.78L202.92 77.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M276.82 166.23L277.01 166.59L277.23 166.47C277.177 166.343 277.11 166.222 277.03 166.11L276.82 166.23Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M321.9 246.54C321.62 246.61 321.32 246.68 321.04 246.77V246.97C321.34 246.97 321.62 246.97 321.93 246.89L321.9 246.54Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M308.14 285.35L308 285.82C308.15 285.82 308.36 285.98 308.44 285.93C308.509 285.784 308.56 285.629 308.59 285.47L308.14 285.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M315.93 322.07C316.17 322.18 316.42 322.32 316.45 322.28C316.573 322.098 316.677 321.903 316.76 321.7C316.6 321.63 316.38 321.48 316.32 321.53C316.168 321.693 316.037 321.874 315.93 322.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M209.33 125.91C209.455 125.909 209.579 125.892 209.7 125.86C209.677 125.799 209.677 125.731 209.7 125.67H209.34L209.33 125.91Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M214.56 308.48C214.567 308.702 214.594 308.923 214.64 309.14C214.64 309.14 214.92 309.14 215.06 309.14C215.08 308.917 215.08 308.693 215.06 308.47C214.894 308.455 214.726 308.459 214.56 308.48Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M196.56 262.07L196.68 261.62C196.457 261.637 196.236 261.674 196.02 261.73C196.03 261.875 196.05 262.018 196.08 262.16C196.238 262.121 196.399 262.091 196.56 262.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M244.54 20.89L245.65 22.01L245.93 21.63L244.53 20.97L244.54 20.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M141.16 367.57C140.936 367.607 140.718 367.671 140.51 367.76C140.44 367.76 140.51 368.01 140.51 368.14C140.722 368.139 140.934 368.112 141.14 368.06C141.14 368.06 141.13 367.8 141.16 367.57Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M315.51 160.42L315.12 160.23L314.97 160.8C315.11 160.8 315.3 160.89 315.39 160.8C315.48 160.71 315.39 160.59 315.51 160.42Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M337.12 74.8C336.958 74.7896 336.795 74.8099 336.64 74.86C336.57 74.86 336.64 75.11 336.59 75.25C336.755 75.2851 336.925 75.2851 337.09 75.25C337.15 75.19 337.12 74.95 337.12 74.8Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M282.2 342.37C282.2 342.23 282.31 342.02 282.25 341.95C282.111 341.889 281.962 341.851 281.81 341.84L281.71 342.4C281.87 342.38 282.03 342.38 282.2 342.37Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M248.58 272.97L248.21 273.36C248.369 273.485 248.548 273.583 248.74 273.65C248.81 273.65 248.94 273.46 249.05 273.36L248.58 272.97Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M269.09 9.52004H270.38V9.05005H269.08L269.09 9.52004Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M110.81 373.86C110.581 373.83 110.349 373.83 110.12 373.86C110.06 373.86 110.01 374.1 109.96 374.23C110.167 374.299 110.382 374.343 110.6 374.36C110.6 374.36 110.72 374.07 110.81 373.86Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M488.19 303.07C488.53 303.14 488.9 303.27 488.96 303.19C489.054 302.925 489.131 302.655 489.19 302.38C488.95 302.38 488.67 302.27 488.5 302.38C488.33 302.49 488.32 302.74 488.19 303.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M482.15 289.6L483.05 287.87H483.15C482.47 288.24 481.31 288.31 482.23 289.59L482.15 289.6Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M277.16 32.2001L276.92 32.5101C277.055 32.599 277.209 32.6539 277.37 32.6701C277.51 32.6701 277.51 32.4701 277.6 32.3501L277.16 32.2001Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M461.5 223.35L461.28 223.77L461.84 223.98C461.84 223.82 461.96 223.64 461.91 223.52C461.86 223.4 461.64 223.41 461.5 223.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M455.88 238.07L455.57 238.42C455.721 238.512 455.887 238.577 456.06 238.61C456.06 238.61 456.19 238.36 456.25 238.22L455.88 238.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M68.55 354.36L69.55 354.52L69.61 354.14L68.61 353.98L68.55 354.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M279.04 20.07C278.814 20.0399 278.586 20.0399 278.36 20.07C278.31 20.07 278.31 20.35 278.28 20.5C278.513 20.5252 278.747 20.5252 278.98 20.5C279.01 20.3279 279.03 20.1543 279.04 19.98V20.07Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M248.59 10.2L249.59 9.97999L249.52 9.60999L248.52 9.74998L248.59 10.2Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M100.19 338.98L100.12 339.44C100.26 339.44 100.46 339.49 100.52 339.44C100.572 339.299 100.599 339.15 100.6 339L100.19 338.98Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M175.09 74.15L175.01 74.58C175.14 74.58 175.38 74.65 175.4 74.58C175.46 74.3982 175.5 74.2105 175.52 74.02L175.09 74.15Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M298.27 297.36L298.7 297.28C298.63 297.16 298.63 297.02 298.57 296.89C298.51 296.76 298.36 296.89 298.35 296.89C298.313 297.041 298.286 297.195 298.27 297.35V297.36Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M211.17 72.89C211.17 73.01 211 73.18 211.03 73.25C211.139 73.36 211.268 73.4482 211.41 73.51C211.46 73.4 211.58 73.23 211.54 73.17C211.44 73.049 211.313 72.953 211.17 72.89Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M33.86 333.99C33.8052 334.119 33.7617 334.253 33.73 334.39C33.909 334.479 34.0966 334.549 34.29 334.6C34.2943 334.45 34.2706 334.301 34.22 334.16C34.15 334.07 33.97 334.07 33.86 333.99Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M147.01 420.51C147.018 419.797 146.756 419.108 146.278 418.58C145.8 418.051 145.14 417.723 144.43 417.66C143.54 418.59 143.81 419.36 144.85 419.89C145.567 420.15 146.307 420.341 147.06 420.46L147.01 420.51Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M146.97 421.45L144.75 421.23C144.75 421.7 144.63 422.44 144.88 422.62C145.57 423.07 146.32 422.98 146.97 421.45Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M143.39 409.29L145.15 408.29L144.94 407.9L143.17 408.9L143.39 409.29Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M135.51 406.7L134.13 406.64L134.05 407.04L135.45 407.36L135.51 406.7Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M139.16 406.23L138.34 406.14C138.315 406.363 138.315 406.587 138.34 406.81C138.34 406.81 138.7 406.94 138.79 406.87C138.936 406.67 139.06 406.456 139.16 406.23Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M147.39 416.61L148.56 417.32L148.83 416.95L147.73 416.06C147.637 416.255 147.523 416.44 147.39 416.61Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M141.04 408.6L140.04 408.97L140.23 409.32L141.23 408.87L141.04 408.6Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M191.64 351.35C192.83 351.56 193.98 352.54 194.55 350.78C194.78 350.11 194.85 349.38 193.97 349.08C193.09 348.78 192.17 349.41 191.64 351.35Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M194.98 354.9L195.4 352.33L192.25 353.54C193.45 354.12 194.25 354.45 195.02 354.84L194.98 354.9Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M192.32 346.77L191.93 347.19C192.103 347.309 192.291 347.403 192.49 347.47C192.56 347.47 192.7 347.25 192.82 347.14L192.32 346.77Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M201.39 343.58C201.259 343.67 201.142 343.778 201.04 343.9C201.213 343.985 201.399 344.043 201.59 344.07C201.59 344.07 201.72 343.83 201.78 343.7L201.39 343.58Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M300.26 387.3C300.11 387.3 299.94 387.19 299.84 387.25C299.74 387.31 299.73 387.5 299.69 387.64C299.83 387.64 300 387.74 300.11 387.64C300.22 387.54 300.21 387.44 300.26 387.3Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M106.95 388.22C106.21 387.48 105.72 386.43 104.2 386.22C104.251 386.531 104.359 386.829 104.52 387.1C104.688 387.368 104.909 387.6 105.17 387.78C105.432 387.959 105.728 388.081 106.04 388.14C106.347 388.205 106.663 388.205 106.97 388.14L106.95 388.22Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                }),
                i.createElement("path", {
                  opacity: 0.67,
                  d: "M327.94 334.4L330.2 335.07L327.94 334.4Z",
                  fill: "#EFCB84",
                  fillOpacity: 0.75,
                })
              )),
            ti ||
              (ti = i.createElement("path", {
                d: "M339.39 642.58V660.34L366.39 676.4V642.58H339.39Z",
                fill: "#62CFD5",
              })),
            ai ||
              (ai = i.createElement("path", {
                d: "M366.39 642.58V676.4L393.39 660.34V642.58H366.39Z",
                fill: "#1E878C",
              })),
            ii ||
              (ii = i.createElement("path", {
                d: "M339.39 642.58L366.39 626.51L393.39 642.58L366.39 658.64L339.39 642.58Z",
                fill: "#E7D1BA",
              })),
            li ||
              (li = i.createElement("path", {
                d: "M366.39 629.73L344.8 642.55L366.39 655.37L387.97 642.55L366.39 629.73ZM348.17 642.55L366.39 631.72L384.61 642.55L366.39 653.38L348.17 642.55Z",
                fill: "white",
              })),
            ri ||
              (ri = i.createElement("path", {
                d: "M366.39 315.61V333.37L393.39 349.43V315.61H366.39Z",
                fill: "#62CFD5",
              })),
            ni ||
              (ni = i.createElement("path", {
                d: "M393.45 315.61V349.43L420.45 333.37V315.61H393.45Z",
                fill: "#1E878C",
              })),
            oi ||
              (oi = i.createElement("path", {
                d: "M366.39 315.61L393.39 299.54L420.39 315.61L393.39 331.67L366.39 315.61Z",
                fill: "#E7D1BA",
              })),
            Ci ||
              (Ci = i.createElement("path", {
                d: "M393.45 302.76L371.87 315.58L393.45 328.41L415.03 315.58L393.45 302.76ZM375.23 315.58L393.45 304.75L411.67 315.58L393.45 326.41L375.23 315.58Z",
                fill: "white",
              })),
            ci ||
              (ci = i.createElement("path", {
                d: "M366.39 297.82V315.58L393.39 331.65V297.82H366.39Z",
                fill: "#62CFD5",
              })),
            si ||
              (si = i.createElement("path", {
                d: "M393.45 297.82V331.65L420.45 315.58V297.82H393.45Z",
                fill: "#1E878C",
              })),
            pi ||
              (pi = i.createElement("path", {
                d: "M366.39 297.82L393.39 281.76L420.39 297.82L393.39 313.88L366.39 297.82Z",
                fill: "#E7D1BA",
              })),
            di ||
              (di = i.createElement("path", {
                d: "M393.45 284.97L371.87 297.8L393.45 310.62L415.03 297.8L393.45 284.97ZM375.23 297.8L393.45 286.97L411.67 297.8L393.45 308.63L375.23 297.8Z",
                fill: "white",
              })),
            Li ||
              (Li = i.createElement("path", {
                d: "M366.39 280.07V297.83L393.39 313.89V280.07H366.39Z",
                fill: "#62CFD5",
              })),
            hi ||
              (hi = i.createElement("path", {
                d: "M393.45 280.07V313.89L420.45 297.83V280.07H393.45Z",
                fill: "#1E878C",
              })),
            fi ||
              (fi = i.createElement("path", {
                d: "M366.39 280.07L393.39 264.01L420.39 280.07L393.39 296.13L366.39 280.07Z",
                fill: "#E7D1BA",
              })),
            mi ||
              (mi = i.createElement("path", {
                d: "M393.45 267.21L371.87 280.07L393.45 292.88L415.03 280.07L393.45 267.21ZM375.23 280.07L393.45 269.24L411.67 280.07L393.45 290.87L375.23 280.07Z",
                fill: "white",
              })),
            ui ||
              (ui = i.createElement("path", {
                d: "M366.39 262.3V280.07L393.39 296.13V262.3H366.39Z",
                fill: "#62CFD5",
              })),
            yi ||
              (yi = i.createElement("path", {
                d: "M393.45 262.3V296.12L420.45 280.06V262.3H393.45Z",
                fill: "#1E878C",
              })),
            Ei ||
              (Ei = i.createElement("path", {
                d: "M366.39 262.3L393.39 246.24L420.39 262.3L393.39 278.36L366.39 262.3Z",
                fill: "#E7D1BA",
              })),
            bi ||
              (bi = i.createElement("path", {
                d: "M393.45 249.46L371.87 262.28L393.45 275.07L415.03 262.25L393.45 249.46ZM375.23 262.28L393.45 251.45L411.67 262.28L393.45 273.07L375.23 262.28Z",
                fill: "white",
              })),
            ji ||
              (ji = i.createElement("path", {
                d: "M393.45 331.67V349.43L420.45 365.49V331.67H393.45Z",
                fill: "#62CFD5",
              })),
            Mi ||
              (Mi = i.createElement("path", {
                d: "M420.47 331.67V365.49L447.47 349.43V331.67H420.47Z",
                fill: "#1E878C",
              })),
            Oi ||
              (Oi = i.createElement("path", {
                d: "M393.45 331.67L420.45 315.61L447.45 331.67L420.45 347.73L393.45 331.67Z",
                fill: "#E7D1BA",
              })),
            Zi ||
              (Zi = i.createElement("path", {
                d: "M420.46 318.82L398.88 331.64L420.46 344.47L442.04 331.64L420.46 318.82ZM402.24 331.64L420.46 320.81L438.68 331.64L420.46 342.47L402.24 331.64Z",
                fill: "white",
              })),
            gi ||
              (gi = i.createElement("path", {
                d: "M420.47 347.73V365.49L447.47 381.55V347.73H420.47Z",
                fill: "#62CFD5",
              })),
            xi ||
              (xi = i.createElement("path", {
                d: "M447.5 347.73V381.55L474.5 365.49V347.73H447.5Z",
                fill: "#1E878C",
              })),
            wi ||
              (wi = i.createElement("path", {
                d: "M420.47 347.73L447.47 331.67L474.47 347.73L447.47 363.79L420.47 347.73Z",
                fill: "#E7D1BA",
              })),
            vi ||
              (vi = i.createElement("path", {
                d: "M447.5 334.88L425.92 347.71L447.5 360.53L469.07 347.71L447.5 334.88ZM429.28 347.71L447.5 336.87L465.72 347.71L447.5 358.53L429.28 347.71Z",
                fill: "white",
              })),
            Fi ||
              (Fi = i.createElement("path", {
                d: "M447.49 674.7V692.46L474.49 708.52V674.7H447.49Z",
                fill: "#62CFD5",
              })),
            Bi ||
              (Bi = i.createElement("path", {
                d: "M474.52 674.7V708.52L501.52 692.46V674.7H474.52Z",
                fill: "#1E878C",
              })),
            _i ||
              (_i = i.createElement("path", {
                d: "M447.49 674.7L474.49 658.64L501.49 674.7L474.49 690.76L447.49 674.7Z",
                fill: "#E7D1BA",
              })),
            ki ||
              (ki = i.createElement("path", {
                d: "M474.52 661.85L452.94 674.68L474.52 687.5L496.1 674.68L474.52 661.85ZM456.3 674.68L474.52 663.85L492.74 674.68L474.52 685.51L456.3 674.68Z",
                fill: "white",
              })),
            Vi ||
              (Vi = i.createElement("path", {
                d: "M366.39 658.64V676.4L393.39 692.46V658.64H366.39Z",
                fill: "#62CFD5",
              })),
            Si ||
              (Si = i.createElement("path", {
                d: "M393.44 658.64V692.46L420.44 676.4V658.64H393.44Z",
                fill: "#1E878C",
              })),
            Hi ||
              (Hi = i.createElement("path", {
                d: "M366.39 658.64L393.39 642.58L420.39 658.64L393.39 674.7L366.39 658.64Z",
                fill: "#E7D1BA",
              })),
            Ni ||
              (Ni = i.createElement("path", {
                d: "M393.44 645.79L371.87 658.61L393.44 671.44L415.02 658.61L393.44 645.79ZM375.22 658.61L393.44 647.78L411.67 658.61L393.44 669.45L375.22 658.61Z",
                fill: "white",
              })),
            Di ||
              (Di = i.createElement("path", {
                d: "M393.44 674.7V692.46L420.44 708.52V674.7H393.44Z",
                fill: "#62CFD5",
              })),
            Ai ||
              (Ai = i.createElement("path", {
                d: "M420.47 674.7V708.52L447.47 692.46V674.7H420.47Z",
                fill: "#1E878C",
              })),
            Pi ||
              (Pi = i.createElement("path", {
                d: "M393.44 674.7L420.44 658.64L447.44 674.7L420.44 690.76L393.44 674.7Z",
                fill: "#E7D1BA",
              })),
            Ti ||
              (Ti = i.createElement("path", {
                d: "M420.46 661.85L398.88 674.67L420.46 687.5L442.04 674.67L420.46 661.85ZM402.24 674.67L420.46 663.85L438.68 674.67L420.46 685.51L402.24 674.67Z",
                fill: "white",
              })),
            Ui ||
              (Ui = i.createElement("path", {
                d: "M420.47 690.76V708.52L447.47 724.58V690.76H420.47Z",
                fill: "#62CFD5",
              })),
            Ii ||
              (Ii = i.createElement("path", {
                d: "M447.49 690.76V724.58L474.49 708.52V690.76H447.49Z",
                fill: "#1E878C",
              })),
            Gi ||
              (Gi = i.createElement("path", {
                d: "M420.47 690.76L447.47 674.7L474.47 690.76L447.47 706.82L420.47 690.76Z",
                fill: "#E7D1BA",
              })),
            Ri ||
              (Ri = i.createElement("path", {
                d: "M447.49 677.91L425.92 690.74L447.49 703.56L469.07 690.74L447.49 677.91ZM429.27 690.74L447.49 679.91L465.72 690.74L447.49 701.57L429.27 690.74Z",
                fill: "white",
              })),
            Wi ||
              (Wi = i.createElement("path", {
                d: "M447.49 507.51V525.27L474.49 541.34V507.51H447.49Z",
                fill: "#62CFD5",
              })),
            zi ||
              (zi = i.createElement("path", {
                d: "M474.52 507.51V541.34L501.52 525.27V507.51H474.52Z",
                fill: "#1E878C",
              })),
            Yi ||
              (Yi = i.createElement("path", {
                d: "M447.49 507.51L474.49 491.45L501.49 507.51L474.49 523.58L447.49 507.51Z",
                fill: "#E7D1BA",
              })),
            qi ||
              (qi = i.createElement("path", {
                d: "M474.52 494.66L452.94 507.49L474.52 520.31L496.08 507.49L474.52 494.66ZM456.3 507.49L474.52 496.66L492.74 507.49L474.52 518.32L456.3 507.49Z",
                fill: "white",
              })),
            Qi ||
              (Qi = i.createElement("path", {
                d: "M420.47 523.57V541.33L447.47 557.39V523.57H420.47Z",
                fill: "#62CFD5",
              })),
            Ji ||
              (Ji = i.createElement("path", {
                d: "M447.49 523.57V557.39L474.49 541.33V523.57H447.49Z",
                fill: "#1E878C",
              })),
            Ki ||
              (Ki = i.createElement("path", {
                d: "M420.47 523.57L447.47 507.51L474.47 523.57L447.47 539.63L420.47 523.57Z",
                fill: "#E7D1BA",
              })),
            Xi ||
              (Xi = i.createElement("path", {
                d: "M447.49 510.72L425.92 523.55L447.49 536.37L469.07 523.55L447.49 510.72ZM429.27 523.55L447.49 512.72L465.72 523.55L447.49 534.38L429.27 523.55Z",
                fill: "white",
              })),
            $i ||
              ($i = i.createElement("path", {
                d: "M393.5 211.75L366.39 262.3L393.39 278.36L393.5 211.75Z",
                fill: "#CED9F9",
              })),
            el ||
              (el = i.createElement("path", {
                d: "M393.5 211.75L393.45 278.36L420.45 262.3L393.5 211.75Z",
                fill: "#BFCCF9",
              })),
            tl ||
              (tl = i.createElement("path", {
                d: "M501.54 507.51V692.46L447.54 724.58V539.58L501.54 507.51Z",
                fill: "#1E878C",
              })),
            al ||
              (al = i.createElement("path", {
                d: "M420.47 523.57L447.47 539.63V724.63L420.47 708.57V523.57Z",
                fill: "#62CFD5",
              })),
            il ||
              (il = i.createElement("path", {
                d: "M501.54 363.79V507.51L492.74 512.72V369.07L501.54 363.79Z",
                fill: "#1E878C",
              })),
            ll ||
              (ll = i.createElement("path", {
                d: "M492.74 512.72L484.53 507.51V374.59L492.74 369.02V512.72Z",
                fill: "#62CFD5",
              })),
            rl ||
              (rl = i.createElement("path", {
                d: "M483.03 352.77V496.49L474.22 501.7V358L483.03 352.77Z",
                fill: "#1E878C",
              })),
            nl ||
              (nl = i.createElement("path", {
                d: "M474.22 501.7L466.01 496.49V363.58L474.22 358V501.7Z",
                fill: "#62CFD5",
              })),
            ol ||
              (ol = i.createElement("path", {
                d: "M437.48 380.07V523.82L428.68 529.03V385.33L437.48 380.07Z",
                fill: "#1E878C",
              })),
            Cl ||
              (Cl = i.createElement("path", {
                d: "M428.68 529.07L420.46 523.86V390.9L428.68 385.33V529.07Z",
                fill: "#62CFD5",
              })),
            cl ||
              (cl = i.createElement("path", {
                d: "M447.2 539.59L438.99 534.39V401.47L447.2 395.9V539.59Z",
                fill: "#62CFD5",
              })),
            sl ||
              (sl = i.createElement("path", {
                d: "M447.49 363.79V381.55L474.49 397.61V363.79H447.49Z",
                fill: "#62CFD5",
              })),
            pl ||
              (pl = i.createElement("path", {
                d: "M474.52 363.79V397.61L501.52 381.55V363.79H474.52Z",
                fill: "#1E878C",
              })),
            dl ||
              (dl = i.createElement("path", {
                d: "M447.49 363.79L474.49 347.73L501.49 363.79L474.49 379.85L447.49 363.79Z",
                fill: "#E7D1BA",
              })),
            Ll ||
              (Ll = i.createElement("path", {
                d: "M474.52 350.94L452.94 363.76L474.52 376.59L496.08 363.76L474.52 350.94ZM456.3 363.76L474.52 352.93L492.74 363.76L474.52 374.59L456.3 363.76Z",
                fill: "white",
              })),
            hl ||
              (hl = i.createElement("path", {
                d: "M420.47 379.86V397.62L447.47 413.68V379.86H420.47Z",
                fill: "#62CFD5",
              })),
            fl ||
              (fl = i.createElement("path", {
                d: "M447.49 379.86V413.68L474.49 397.62V379.86H447.49Z",
                fill: "#1E878C",
              })),
            ml ||
              (ml = i.createElement("path", {
                d: "M420.47 379.86L447.47 363.8L474.47 379.86L447.47 395.92L420.47 379.86Z",
                fill: "#E7D1BA",
              })),
            ul ||
              (ul = i.createElement("path", {
                d: "M447.49 367.01L425.92 379.84L447.49 392.66L469.07 379.84L447.49 367.01ZM429.27 379.84L447.49 369.01L465.72 379.84L447.49 390.67L429.27 379.84Z",
                fill: "white",
              })),
            yl ||
              (yl = i.createElement("path", {
                d: "M393.44 395.92V413.68L420.44 429.74V395.92H393.44Z",
                fill: "#62CFD5",
              })),
            El ||
              (El = i.createElement("path", {
                d: "M420.47 395.92V429.74L447.47 413.68V395.92H420.47Z",
                fill: "#1E878C",
              })),
            bl ||
              (bl = i.createElement("path", {
                d: "M393.44 395.92L420.44 379.86L447.44 395.92L420.44 411.98L393.44 395.92Z",
                fill: "#E7D1BA",
              })),
            jl ||
              (jl = i.createElement("path", {
                d: "M420.46 383.07L398.88 395.89L420.46 408.71L442.04 395.89L420.46 383.07ZM402.24 395.89L420.46 385.07L438.68 395.9L420.46 406.73L402.24 395.89Z",
                fill: "white",
              })),
            Ml ||
              (Ml = i.createElement("path", {
                d: "M366.39 411.99V429.75L393.39 445.82V411.99H366.39Z",
                fill: "#62CFD5",
              })),
            Ol ||
              (Ol = i.createElement("path", {
                d: "M393.44 411.99V445.82L420.44 429.75V411.99H393.44Z",
                fill: "#1E878C",
              })),
            Zl ||
              (Zl = i.createElement("path", {
                d: "M366.39 411.99L393.39 395.93L420.39 411.99L393.39 428.06L366.39 411.99Z",
                fill: "#E7D1BA",
              })),
            gl ||
              (gl = i.createElement("path", {
                d: "M393.44 399.15L371.87 411.97L393.44 424.79L415.02 411.97L393.44 399.15ZM375.22 411.97L393.44 401.14L411.66 411.97L393.44 422.8L375.22 411.97Z",
                fill: "white",
              })),
            xl ||
              (xl = i.createElement("path", {
                d: "M474.52 361.55L470.79 363.76L474.52 365.98L478.24 363.76L474.52 361.55ZM472.11 363.76L474.52 362.33L476.93 363.76L474.52 365.2L472.11 363.76Z",
                fill: "white",
              })),
            wl ||
              (wl = i.createElement("path", {
                d: "M474.52 358.74L466.07 363.74L474.52 368.74L482.97 363.74L474.52 358.74ZM468 363.74L474.52 359.86L481.04 363.74L474.52 367.61L468 363.74Z",
                fill: "white",
              })),
            vl ||
              (vl = i.createElement("path", {
                d: "M474.52 355.83L461.16 363.76L474.52 371.69L487.87 363.76L474.52 355.83ZM463.25 363.76L474.52 357.06L485.78 363.76L474.52 370.47L463.25 363.76Z",
                fill: "white",
              })),
            Fl ||
              (Fl = i.createElement("path", {
                d: "M474.52 361.55L470.79 363.76L474.52 365.98L478.24 363.76L474.52 361.55ZM472.11 363.76L474.52 362.33L476.93 363.76L474.52 365.2L472.11 363.76Z",
                fill: "white",
              })),
            Bl ||
              (Bl = i.createElement("path", {
                d: "M474.52 358.74L466.07 363.74L474.52 368.74L482.97 363.74L474.52 358.74ZM468 363.74L474.52 359.86L481.04 363.74L474.52 367.61L468 363.74Z",
                fill: "white",
              })),
            _l ||
              (_l = i.createElement("path", {
                d: "M474.52 361.55L470.79 363.76L474.52 365.98L478.24 363.76L474.52 361.55ZM472.11 363.76L474.52 362.33L476.93 363.76L474.52 365.2L472.11 363.76Z",
                fill: "white",
              })),
            kl ||
              (kl = i.createElement("path", {
                d: "M474.52 358.74L466.07 363.74L474.52 368.74L482.97 363.74L474.52 358.74ZM468 363.74L474.52 359.86L481.04 363.74L474.52 367.61L468 363.74Z",
                fill: "white",
              })),
            Vl ||
              (Vl = i.createElement("path", {
                d: "M474.52 361.55L470.79 363.76L474.52 365.98L478.24 363.76L474.52 361.55ZM472.11 363.76L474.52 362.33L476.93 363.76L474.52 365.2L472.11 363.76Z",
                fill: "white",
              })),
            Sl ||
              (Sl = i.createElement("path", {
                d: "M474.52 361.55L470.79 363.76L474.52 365.98L478.24 363.76L474.52 361.55ZM472.11 363.76L474.52 362.33L476.93 363.76L474.52 365.2L472.11 363.76Z",
                fill: "white",
              })),
            Hl ||
              (Hl = i.createElement("path", {
                d: "M181.11 642.58V660.34L154.11 676.4V642.58H181.11Z",
                fill: "#62CFD5",
              })),
            Nl ||
              (Nl = i.createElement("path", {
                d: "M154.09 642.58V676.4L127.09 660.34V642.58H154.09Z",
                fill: "#1E878C",
              })),
            Dl ||
              (Dl = i.createElement("path", {
                d: "M181.11 642.58L154.11 626.51L127.11 642.58L154.11 658.64L181.11 642.58Z",
                fill: "#E7D1BA",
              })),
            Al ||
              (Al = i.createElement("path", {
                d: "M132.51 642.55L154.09 655.37L175.66 642.55L154.09 629.73L132.51 642.55ZM154.09 653.38L135.86 642.55L154.09 631.72L172.31 642.55L154.09 653.38Z",
                fill: "white",
              })),
            Pl ||
              (Pl = i.createElement("path", {
                d: "M154.08 315.61V333.37L127.08 349.43V315.61H154.08Z",
                fill: "#62CFD5",
              })),
            Tl ||
              (Tl = i.createElement("path", {
                d: "M127.05 315.61V349.43L100.05 333.37V315.61H127.05Z",
                fill: "#1E878C",
              })),
            Ul ||
              (Ul = i.createElement("path", {
                d: "M154.08 315.61L127.08 299.54L100.08 315.61L127.08 331.67L154.08 315.61Z",
                fill: "#E7D1BA",
              })),
            Il ||
              (Il = i.createElement("path", {
                d: "M105.49 315.58L127.07 328.41L148.64 315.58L127.07 302.76L105.49 315.58ZM127.07 326.41L108.84 315.58L127.07 304.75L145.29 315.58L127.07 326.41Z",
                fill: "white",
              })),
            Gl ||
              (Gl = i.createElement("path", {
                d: "M154.08 297.82V315.58L127.08 331.65V297.82H154.08Z",
                fill: "#62CFD5",
              })),
            Rl ||
              (Rl = i.createElement("path", {
                d: "M154.08 297.82V315.58L127.08 331.64V297.82H154.08Z",
                fill: "#62CFD5",
              })),
            Wl ||
              (Wl = i.createElement("path", {
                d: "M127.05 297.82V331.65L100.05 315.58V297.82H127.05Z",
                fill: "#1E878C",
              })),
            zl ||
              (zl = i.createElement("path", {
                d: "M127.05 297.82V331.64L100.05 315.58V297.82H127.05Z",
                fill: "#1E878C",
              })),
            Yl ||
              (Yl = i.createElement("path", {
                d: "M154.08 297.82L127.08 281.76L100.08 297.82L127.08 313.88L154.08 297.82Z",
                fill: "#E7D1BA",
              })),
            ql ||
              (ql = i.createElement("path", {
                d: "M105.49 297.8L127.07 310.62L148.64 297.8L127.07 284.97L105.49 297.8ZM127.07 308.63L108.84 297.8L127.07 286.97L145.29 297.8L127.07 308.63Z",
                fill: "white",
              })),
            Ql ||
              (Ql = i.createElement("path", {
                d: "M154.08 280.07V297.83L127.08 313.89V280.07H154.08Z",
                fill: "#62CFD5",
              })),
            Jl ||
              (Jl = i.createElement("path", {
                d: "M154.08 280.07V297.83L127.08 313.89V280.07H154.08Z",
                fill: "#62CFD5",
              })),
            Kl ||
              (Kl = i.createElement("path", {
                d: "M127.05 280.07V313.89L100.05 297.83V280.07H127.05Z",
                fill: "#1E878C",
              })),
            Xl ||
              (Xl = i.createElement("path", {
                d: "M127.05 280.07V313.89L100.05 297.83V280.07H127.05Z",
                fill: "#1E878C",
              })),
            $l ||
              ($l = i.createElement("path", {
                d: "M154.08 280.07L127.08 264.01L100.08 280.07L127.08 296.13L154.08 280.07Z",
                fill: "#E7D1BA",
              })),
            er ||
              (er = i.createElement("path", {
                d: "M105.49 280.07L127.05 292.88L148.63 280.07L127.05 267.24L105.49 280.07ZM127.07 290.9L108.84 280.07L127.07 269.24L145.29 280.07L127.07 290.9Z",
                fill: "white",
              })),
            tr ||
              (tr = i.createElement("path", {
                d: "M154.08 262.3V280.07L127.08 296.13V262.3H154.08Z",
                fill: "#62CFD5",
              })),
            ar ||
              (ar = i.createElement("path", {
                d: "M154.08 262.3V280.07L127.08 296.13V262.3H154.08Z",
                fill: "#62CFD5",
              })),
            ir ||
              (ir = i.createElement("path", {
                d: "M127.05 262.3V296.12L100.05 280.06V262.3H127.05Z",
                fill: "#1E878C",
              })),
            lr ||
              (lr = i.createElement("path", {
                d: "M154.08 262.3L127.08 246.24L100.08 262.3L127.08 278.36L154.08 262.3Z",
                fill: "#E7D1BA",
              })),
            rr ||
              (rr = i.createElement("path", {
                d: "M105.49 262.28L127.07 275.07L148.63 262.25L127.05 249.43L105.49 262.28ZM127.07 273.07L108.83 262.24L127.05 251.41L145.28 262.24L127.07 273.07Z",
                fill: "white",
              })),
            nr ||
              (nr = i.createElement("path", {
                d: "M127.05 331.67V349.43L100.05 365.49V331.67H127.05Z",
                fill: "#62CFD5",
              })),
            or ||
              (or = i.createElement("path", {
                d: "M100.03 331.67V365.49L73.03 349.43V331.67H100.03Z",
                fill: "#1E878C",
              })),
            Cr ||
              (Cr = i.createElement("path", {
                d: "M127.05 331.67L100.05 315.61L73.05 331.67L100.05 347.73L127.05 331.67Z",
                fill: "#E7D1BA",
              })),
            cr ||
              (cr = i.createElement("path", {
                d: "M78.45 331.64L100.03 344.47L121.61 331.64L100.03 318.82L78.45 331.64ZM100.03 342.47L81.81 331.64L100.03 320.81L118.25 331.64L100.03 342.47Z",
                fill: "white",
              })),
            sr ||
              (sr = i.createElement("path", {
                d: "M100.03 347.73V365.49L73.03 381.55V347.73H100.03Z",
                fill: "#62CFD5",
              })),
            pr ||
              (pr = i.createElement("path", {
                d: "M73 347.73V381.55L46 365.49V347.73H73Z",
                fill: "#1E878C",
              })),
            dr ||
              (dr = i.createElement("path", {
                d: "M100.03 347.73L73.03 331.67L46.03 347.73L73.03 363.79L100.03 347.73Z",
                fill: "#E7D1BA",
              })),
            Lr ||
              (Lr = i.createElement("path", {
                d: "M51.3899 347.71L72.9699 360.53L94.5399 347.71L72.9699 334.88L51.3899 347.71ZM72.9699 358.53L54.7599 347.71L72.9899 336.87L91.2099 347.71L72.9699 358.53Z",
                fill: "white",
              })),
            hr ||
              (hr = i.createElement("path", {
                d: "M73.01 674.7V692.46L46.01 708.52V674.7H73.01Z",
                fill: "#62CFD5",
              })),
            fr ||
              (fr = i.createElement("path", {
                d: "M45.99 674.7V708.52L18.99 692.46V674.7H45.99Z",
                fill: "#1E878C",
              })),
            mr ||
              (mr = i.createElement("path", {
                d: "M73.01 674.7L46.01 658.64L19.01 674.7L46.01 690.76L73.01 674.7Z",
                fill: "#E7D1BA",
              })),
            ur ||
              (ur = i.createElement("path", {
                d: "M24.3899 674.68L45.9699 687.5L67.5499 674.68L45.9899 661.85L24.3899 674.68ZM45.9699 685.51L27.7499 674.68L45.9699 663.85L64.1899 674.68L45.9699 685.51Z",
                fill: "white",
              })),
            yr ||
              (yr = i.createElement("path", {
                d: "M154.09 658.64V676.4L127.09 692.46V658.64H154.09Z",
                fill: "#62CFD5",
              })),
            Er ||
              (Er = i.createElement("path", {
                d: "M127.06 658.64V692.46L100.06 676.4V658.64H127.06Z",
                fill: "#1E878C",
              })),
            br ||
              (br = i.createElement("path", {
                d: "M154.09 658.64L127.09 642.58L100.09 658.64L127.09 674.7L154.09 658.64Z",
                fill: "#E7D1BA",
              })),
            jr ||
              (jr = i.createElement("path", {
                d: "M105.49 658.61L127.07 671.44L148.64 658.61L127.07 645.79L105.49 658.61ZM127.07 669.45L108.84 658.61L127.07 647.78L145.29 658.61L127.07 669.45Z",
                fill: "white",
              })),
            Mr ||
              (Mr = i.createElement("path", {
                d: "M127.06 674.7V692.46L100.06 708.52V674.7H127.06Z",
                fill: "#62CFD5",
              })),
            Or ||
              (Or = i.createElement("path", {
                d: "M100.03 674.7V708.52L73.03 692.46V674.7H100.03Z",
                fill: "#1E878C",
              })),
            Zr ||
              (Zr = i.createElement("path", {
                d: "M127.06 674.7L100.06 658.64L73.0601 674.7L100.06 690.76L127.06 674.7Z",
                fill: "#E7D1BA",
              })),
            gr ||
              (gr = i.createElement("path", {
                d: "M78.46 674.67L100.04 687.5L121.61 674.67L100.04 661.85L78.46 674.67ZM100.04 685.51L81.81 674.67L100.04 663.85L118.26 674.67L100.04 685.51Z",
                fill: "white",
              })),
            xr ||
              (xr = i.createElement("path", {
                d: "M100.03 690.76V708.52L73.03 724.58V690.76H100.03Z",
                fill: "#62CFD5",
              })),
            wr ||
              (wr = i.createElement("path", {
                d: "M73.01 690.76V724.58L46.01 708.52V690.76H73.01Z",
                fill: "#1E878C",
              })),
            vr ||
              (vr = i.createElement("path", {
                d: "M100.04 690.76L73.04 674.7L46.04 690.76L73.04 706.82L100.04 690.76Z",
                fill: "#E7D1BA",
              })),
            Fr ||
              (Fr = i.createElement("path", {
                d: "M51.3899 690.74L72.9699 703.56L94.5499 690.73L72.9699 677.91L51.3899 690.74ZM72.9699 701.57L54.7599 690.74L72.9899 679.91L91.2099 690.74L72.9699 701.57Z",
                fill: "white",
              })),
            Br ||
              (Br = i.createElement("path", {
                d: "M73.01 507.51V525.27L46.01 541.34V507.51H73.01Z",
                fill: "#62CFD5",
              })),
            _r ||
              (_r = i.createElement("path", {
                d: "M45.99 507.51V541.34L18.99 525.27V507.51H45.99Z",
                fill: "#1E878C",
              })),
            kr ||
              (kr = i.createElement("path", {
                d: "M73.01 507.51L46.01 491.45L19.01 507.51L46.01 523.58L73.01 507.51Z",
                fill: "#E7D1BA",
              })),
            Vr ||
              (Vr = i.createElement("path", {
                d: "M24.3899 507.49L45.9699 520.31L67.5499 507.49L45.9899 494.66L24.3899 507.49ZM45.9699 518.32L27.7499 507.49L45.9699 496.66L64.1899 507.49L45.9699 518.32Z",
                fill: "white",
              })),
            Sr ||
              (Sr = i.createElement("path", {
                d: "M100.03 523.57V541.33L73.03 557.39V523.57H100.03Z",
                fill: "#62CFD5",
              })),
            Hr ||
              (Hr = i.createElement("path", {
                d: "M73.01 523.57V557.39L46.01 541.33V523.57H73.01Z",
                fill: "#1E878C",
              })),
            Nr ||
              (Nr = i.createElement("path", {
                d: "M100.04 523.57L73.04 507.51L46.04 523.57L73.04 539.63L100.04 523.57Z",
                fill: "#E7D1BA",
              })),
            Dr ||
              (Dr = i.createElement("path", {
                d: "M51.3899 523.55L72.9699 536.37L94.5499 523.55L72.9699 510.72L51.3899 523.55ZM72.9699 534.38L54.7599 523.55L72.9899 512.72L91.2099 523.55L72.9699 534.38Z",
                fill: "white",
              })),
            Ar ||
              (Ar = i.createElement("path", {
                d: "M127.01 211.75L154.08 262.3L127.08 278.36L127.01 211.75Z",
                fill: "#7DD9DD",
              })),
            Pr ||
              (Pr = i.createElement("path", {
                d: "M127.01 211.75L154.08 262.3L127.08 278.36L127.01 211.75Z",
                fill: "#7DD9DD",
              })),
            Tr ||
              (Tr = i.createElement("path", {
                d: "M127.01 211.75V278.36L100.01 262.3L127.01 211.75Z",
                fill: "#1BACB3",
              })),
            Ur ||
              (Ur = i.createElement("path", {
                d: "M127.01 211.75V278.36L100.01 262.3L127.01 211.75Z",
                fill: "#1BACB3",
              })),
            Ir ||
              (Ir = i.createElement("path", {
                d: "M18.96 507.51V692.46L73.01 724.58V539.58L18.96 507.51Z",
                fill: "#1E878C",
              })),
            Gr ||
              (Gr = i.createElement("path", {
                d: "M100.03 523.57L73.03 539.63V724.63L100.03 708.57V523.57Z",
                fill: "#62CFD5",
              })),
            Rr ||
              (Rr = i.createElement("path", {
                d: "M18.96 363.79V507.51L27.77 512.72V369.07L18.96 363.79Z",
                fill: "#1E878C",
              })),
            Wr ||
              (Wr = i.createElement("path", {
                d: "M27.77 512.72L35.97 507.51V374.59L27.77 369.02V512.72Z",
                fill: "#62CFD5",
              })),
            zr ||
              (zr = i.createElement("path", {
                d: "M37.48 352.77V496.49L46.28 501.7V358L37.48 352.77Z",
                fill: "#1E878C",
              })),
            Yr ||
              (Yr = i.createElement("path", {
                d: "M46.28 501.7L54.49 496.49V363.58L46.28 358V501.7Z",
                fill: "#62CFD5",
              })),
            qr ||
              (qr = i.createElement("path", {
                d: "M83.02 380.07V523.82L91.83 529.03V385.33L83.02 380.07Z",
                fill: "#1E878C",
              })),
            Qr ||
              (Qr = i.createElement("path", {
                d: "M91.8301 529.07L100.04 523.86V390.9L91.8301 385.33V529.07Z",
                fill: "#62CFD5",
              })),
            Jr ||
              (Jr = i.createElement("path", {
                d: "M73.3 539.59L81.51 534.39V401.47L73.3 395.9V539.59Z",
                fill: "#62CFD5",
              })),
            Kr ||
              (Kr = i.createElement("path", {
                d: "M73.01 363.79V381.55L46.01 397.61V363.79H73.01Z",
                fill: "#62CFD5",
              })),
            Xr ||
              (Xr = i.createElement("path", {
                d: "M45.98 363.79V397.61L18.98 381.55V363.79H45.98Z",
                fill: "#1E878C",
              })),
            $r ||
              ($r = i.createElement("path", {
                d: "M73.01 363.79L46.01 347.73L19.01 363.79L46.01 379.85L73.01 363.79Z",
                fill: "#E7D1BA",
              })),
            en ||
              (en = i.createElement("path", {
                d: "M24.3899 363.76L45.9599 376.59L67.5399 363.76L45.9599 350.94L24.3899 363.76ZM45.9599 374.59L27.7399 363.76L45.9599 352.93L64.1899 363.76L45.9599 374.59Z",
                fill: "white",
              })),
            tn ||
              (tn = i.createElement("path", {
                d: "M100.03 379.86V397.62L73.03 413.68V379.86H100.03Z",
                fill: "#62CFD5",
              })),
            an ||
              (an = i.createElement("path", {
                d: "M73.01 379.86V413.68L46.01 397.62V379.86H73.01Z",
                fill: "#1E878C",
              })),
            ln ||
              (ln = i.createElement("path", {
                d: "M100.04 379.86L73.04 363.8L46.04 379.86L73.04 395.92L100.04 379.86Z",
                fill: "#E7D1BA",
              })),
            rn ||
              (rn = i.createElement("path", {
                d: "M51.3899 379.84L72.9699 392.66L94.5499 379.84L72.9699 367.01L51.3899 379.84ZM72.9699 390.67L54.7599 379.84L72.9899 369.01L91.2099 379.84L72.9699 390.67Z",
                fill: "white",
              })),
            nn ||
              (nn = i.createElement("path", {
                d: "M127.06 395.92V413.68L100.06 429.74V395.92H127.06Z",
                fill: "#62CFD5",
              })),
            on ||
              (on = i.createElement("path", {
                d: "M100.04 395.92V429.74L73.04 413.68V395.92H100.04Z",
                fill: "#1E878C",
              })),
            Cn ||
              (Cn = i.createElement("path", {
                d: "M127.06 395.92L100.06 379.86L73.0601 395.92L100.06 411.98L127.06 395.92Z",
                fill: "#E7D1BA",
              })),
            cn ||
              (cn = i.createElement("path", {
                d: "M78.46 395.9L100.04 408.72L121.62 395.9L100.04 383.07L78.46 395.9ZM100.04 406.73L81.8199 395.9L100.04 385.07L118.26 395.9L100.04 406.73Z",
                fill: "white",
              })),
            sn ||
              (sn = i.createElement("path", {
                d: "M154.09 411.99V429.75L127.09 445.82V411.99H154.09Z",
                fill: "#62CFD5",
              })),
            pn ||
              (pn = i.createElement("path", {
                d: "M127.06 411.99V445.82L100.06 429.75V411.99H127.06Z",
                fill: "#1E878C",
              })),
            dn ||
              (dn = i.createElement("path", {
                d: "M154.09 411.99L127.09 395.93L100.09 411.99L127.09 428.06L154.09 411.99Z",
                fill: "#E7D1BA",
              })),
            Ln ||
              (Ln = i.createElement("path", {
                d: "M105.49 411.97L127.06 424.79L148.64 411.97L127.06 399.14L105.49 411.97ZM127.06 422.8L108.84 411.97L127.06 401.14L145.29 411.97L127.06 422.8Z",
                fill: "white",
              })),
            hn ||
              (hn = i.createElement("path", {
                d: "M42.26 363.76L45.99 365.98L49.71 363.76L45.99 361.55L42.26 363.76ZM45.99 365.2L43.57 363.76L45.99 362.33L48.4 363.76L45.99 365.2Z",
                fill: "white",
              })),
            fn ||
              (fn = i.createElement("path", {
                d: "M37.54 363.77L45.99 368.77L54.43 363.77L45.99 358.77L37.54 363.77ZM45.99 367.64L39.47 363.77L45.99 359.89L52.51 363.77L45.99 367.64Z",
                fill: "white",
              })),
            mn ||
              (mn = i.createElement("path", {
                d: "M32.6299 363.77L45.9899 371.69L59.3899 363.76L46.0399 355.82L32.6299 363.77ZM45.9899 370.49L34.7199 363.78L45.9899 357.07L57.2499 363.77L45.9899 370.49Z",
                fill: "white",
              })),
            un ||
              (un = i.createElement("path", {
                d: "M42.26 363.76L45.99 365.98L49.71 363.76L45.99 361.55L42.26 363.76ZM45.99 365.2L43.57 363.76L45.99 362.33L48.4 363.76L45.99 365.2Z",
                fill: "white",
              })),
            yn ||
              (yn = i.createElement("path", {
                d: "M37.54 363.77L45.99 368.77L54.43 363.77L45.99 358.77L37.54 363.77ZM45.99 367.64L39.47 363.77L45.99 359.89L52.51 363.77L45.99 367.64Z",
                fill: "white",
              })),
            En ||
              (En = i.createElement("path", {
                d: "M42.26 363.76L45.99 365.98L49.71 363.76L45.99 361.55L42.26 363.76ZM45.99 365.2L43.57 363.76L45.99 362.33L48.4 363.76L45.99 365.2Z",
                fill: "white",
              })),
            bn ||
              (bn = i.createElement("path", {
                d: "M37.54 363.77L45.99 368.77L54.43 363.77L45.99 358.77L37.54 363.77ZM45.99 367.64L39.47 363.77L45.99 359.89L52.51 363.77L45.99 367.64Z",
                fill: "white",
              })),
            jn ||
              (jn = i.createElement("path", {
                d: "M42.26 363.76L45.99 365.98L49.71 363.76L45.99 361.55L42.26 363.76ZM45.99 365.2L43.57 363.76L45.99 362.33L48.4 363.76L45.99 365.2Z",
                fill: "white",
              })),
            Mn ||
              (Mn = i.createElement("path", {
                d: "M42.26 363.76L45.99 365.98L49.71 363.76L45.99 361.55L42.26 363.76ZM45.99 365.2L43.57 363.76L45.99 362.33L48.4 363.76L45.99 365.2Z",
                fill: "white",
              })),
            On ||
              (On = i.createElement("path", {
                d: "M269.18 663.85V807.57L260.38 812.78V669.07L269.18 663.85Z",
                fill: "#1E878C",
              })),
            Zn ||
              (Zn = i.createElement("path", {
                d: "M260.39 812.78L252.17 807.57V674.65L260.39 669.07V812.78Z",
                fill: "#62CFD5",
              })),
            gn ||
              (gn = i.createElement("path", {
                d: "M210.13 663.85V807.57L201.33 812.78V669.07L210.13 663.85Z",
                fill: "#1E878C",
              })),
            xn ||
              (xn = i.createElement("path", {
                d: "M201.33 812.78L193.12 807.57V674.65L201.33 669.08V812.78Z",
                fill: "#62CFD5",
              })),
            wn ||
              (wn = i.createElement("path", {
                d: "M326.96 663.85V807.57L318.16 812.78V669.07L326.96 663.85Z",
                fill: "#1E878C",
              })),
            vn ||
              (vn = i.createElement("path", {
                d: "M318.16 812.78L309.95 807.57V674.65L318.16 669.08V812.78Z",
                fill: "#62CFD5",
              })),
            Fn ||
              (Fn = i.createElement("path", {
                d: "M155.56 610.92L188.82 590.64L155.6 570.33L122.32 590.63L155.56 610.92Z",
                fill: "#C1AFA8",
              })),
            Bn ||
              (Bn = i.createElement("path", {
                d: "M188.82 590.63V621.07L155.57 641.36V610.93L188.82 590.63Z",
                fill: "#A1A7B6",
              })),
            _n ||
              (_n = i.createElement("path", {
                d: "M122.32 590.64L155.57 610.93V641.34L122.32 621.07V590.64Z",
                fill: "#EDE8E4",
              })),
            kn ||
              (kn = i.createElement("path", {
                d: "M226.18 634.79L213.3 642.64L168.23 615.16L181.11 607.3L226.18 634.79Z",
                fill: "#E7D1BA",
              })),
            Vn ||
              (Vn = i.createElement("path", {
                d: "M213.29 658.36V642.65L168.23 615.16V630.86L213.29 658.36Z",
                fill: "#62CFD5",
              })),
            Sn ||
              (Sn = i.createElement("path", {
                d: "M365.22 612.07L330.98 591.19L365.18 570.29L399.39 591.22L365.22 612.07Z",
                fill: "#C1AFA8",
              })),
            Hn ||
              (Hn = i.createElement("path", {
                d: "M330.98 591.22V622.54L365.2 643.42V612.12L330.98 591.22Z",
                fill: "#A1A7B6",
              })),
            Nn ||
              (Nn = i.createElement("path", {
                d: "M399.39 591.23L365.17 612.12V643.42L399.39 622.53V591.23Z",
                fill: "#EDE8E4",
              })),
            Dn ||
              (Dn = i.createElement("path", {
                d: "M295.57 634.79L308.45 642.64L353.52 615.16L340.64 607.3L295.57 634.79Z",
                fill: "#E7D1BA",
              })),
            An ||
              (An = i.createElement("path", {
                d: "M308.45 658.36V642.65L353.52 615.16V630.86L308.45 658.36Z",
                fill: "#1E878C",
              })),
            Pn ||
              (Pn = i.createElement("path", {
                d: "M126.9 460.13L193.17 499.52V694.07L260.17 733.9V380.9L126.9 460.13Z",
                fill: "#62CFD5",
              })),
            Tn ||
              (Tn = i.createElement("path", {
                d: "M260.19 380.9V733.9L327.19 694.07V499.52L393.47 460.13L260.19 380.9Z",
                fill: "#1E878C",
              })),
            Un ||
              (Un = i.createElement("path", {
                d: "M260.2 372.52H126.9V460.12H260.2V372.52Z",
                fill: "#62CFD5",
              })),
            In ||
              (In = i.createElement("path", {
                d: "M291.55 670.23L304.39 662.38L349.46 689.87L336.58 697.72L291.55 670.23Z",
                fill: "#E7D1BA",
              })),
            Gn ||
              (Gn = i.createElement("path", {
                d: "M291.55 670.23V685.94L336.62 713.42V697.72L291.55 670.23Z",
                fill: "#62CFD5",
              })),
            Rn ||
              (Rn = i.createElement("path", {
                d: "M361.19 674.14L326.96 695.07L361.15 715.97L395.39 695.07L361.19 674.14Z",
                fill: "#C1AFA8",
              })),
            Wn ||
              (Wn = i.createElement("path", {
                d: "M326.96 695.07V726.39L361.18 747.27V715.97L326.96 695.07Z",
                fill: "#A1A7B6",
              })),
            zn ||
              (zn = i.createElement("path", {
                d: "M395.39 695.07L361.16 715.96V747.26L395.39 726.33V695.07Z",
                fill: "#EDE8E4",
              })),
            Yn ||
              (Yn = i.createElement("path", {
                d: "M229.8 670.23L216.92 662.38L171.85 689.87L184.73 697.72L229.8 670.23Z",
                fill: "#E7D1BA",
              })),
            qn ||
              (qn = i.createElement("path", {
                d: "M229.79 670.23V685.94L184.73 713.42V697.72L229.79 670.23Z",
                fill: "#1E878C",
              })),
            Qn ||
              (Qn = i.createElement("path", {
                d: "M160.15 674.14L194.39 695.07L160.2 715.97L125.94 695.07L160.15 674.14Z",
                fill: "#C1AFA8",
              })),
            Jn ||
              (Jn = i.createElement("path", {
                d: "M194.39 695.07V726.39L160.17 747.27V715.97L194.39 695.07Z",
                fill: "#A1A7B6",
              })),
            Kn ||
              (Kn = i.createElement("path", {
                d: "M125.94 695.07L160.16 715.96V747.26L125.94 726.37V695.07Z",
                fill: "#EDE8E4",
              })),
            Xn ||
              (Xn = i.createElement("path", {
                d: "M393.5 372.52H260.2V460.12H393.5V372.52Z",
                fill: "#1E878C",
              })),
            $n ||
              ($n = i.createElement("path", {
                d: "M126.9 372.53L260.2 293.3L393.5 372.53L260.2 451.75L126.9 372.53Z",
                fill: "#E7D1BA",
              })),
            eo ||
              (eo = i.createElement("path", {
                d: "M260.2 354.89L230.52 372.53L260.2 390.17L289.87 372.53L260.2 354.89ZM240.95 372.53L260.2 361.07L279.44 372.51L260.2 383.97L240.95 372.53Z",
                fill: "white",
              })),
            to ||
              (to = i.createElement("path", {
                d: "M260.2 332.52L192.88 372.52L260.2 412.52L327.54 372.52L260.2 332.52ZM208.25 372.52L260.2 341.64L312.15 372.52L260.2 403.39L208.25 372.52Z",
                fill: "white",
              })),
            ao ||
              (ao = i.createElement("path", {
                d: "M260.2 309.27L153.76 372.53L260.2 435.78L366.62 372.53L260.2 309.27ZM170.32 372.53L260.2 319.07L350.06 372.49L260.2 425.91L170.32 372.53Z",
                fill: "white",
              })),
            io ||
              (io = i.createElement("path", {
                d: "M260.2 354.89L230.52 372.53L260.2 390.17L289.87 372.53L260.2 354.89ZM240.95 372.53L260.2 361.07L279.44 372.51L260.2 383.97L240.95 372.53Z",
                fill: "white",
              })),
            lo ||
              (lo = i.createElement("path", {
                d: "M260.2 332.52L192.88 372.52L260.2 412.52L327.54 372.52L260.2 332.52ZM208.25 372.52L260.2 341.64L312.15 372.52L260.2 403.39L208.25 372.52Z",
                fill: "white",
              })),
            ro ||
              (ro = i.createElement("path", {
                d: "M260.2 354.89L230.52 372.53L260.2 390.17L289.87 372.53L260.2 354.89ZM240.95 372.53L260.2 361.07L279.44 372.51L260.2 383.97L240.95 372.53Z",
                fill: "white",
              })),
            no ||
              (no = i.createElement("path", {
                d: "M260.2 332.52L192.88 372.52L260.2 412.52L327.54 372.52L260.2 332.52ZM208.25 372.52L260.2 341.64L312.15 372.52L260.2 403.39L208.25 372.52Z",
                fill: "white",
              })),
            oo ||
              (oo = i.createElement("path", {
                d: "M260.2 354.89L230.52 372.53L260.2 390.17L289.87 372.53L260.2 354.89ZM240.95 372.53L260.2 361.07L279.44 372.51L260.2 383.97L240.95 372.53Z",
                fill: "white",
              })),
            Co ||
              (Co = i.createElement("path", {
                d: "M260.2 354.89L230.52 372.53L260.2 390.17L289.87 372.53L260.2 354.89ZM240.95 372.53L260.2 361.07L279.44 372.51L260.2 383.97L240.95 372.53Z",
                fill: "white",
              })),
            co ||
              (co = i.createElement("path", {
                d: "M447.44 346V363.76L474.44 379.82V346H447.44Z",
                fill: "#62CFD5",
              })),
            so ||
              (so = i.createElement("path", {
                d: "M474.46 346V379.82L501.46 363.76V346H474.46Z",
                fill: "#1E878C",
              })),
            po ||
              (po = i.createElement("path", {
                d: "M447.44 346L474.44 329.93L501.44 346L474.44 362.06L447.44 346Z",
                fill: "#E7D1BA",
              })),
            Lo ||
              (Lo = i.createElement("path", {
                d: "M474.46 333.15L452.88 345.97L474.46 358.8L496.03 345.97L474.46 333.15ZM456.24 345.97L474.46 335.15L492.68 345.97L474.46 356.8L456.24 345.97Z",
                fill: "white",
              })),
            ho ||
              (ho = i.createElement("path", {
                d: "M474.46 343.76L470.73 345.97L474.46 348.19L478.18 345.97L474.46 343.76ZM472.05 345.97L474.46 344.54L476.87 345.97L474.46 347.41L472.05 345.97Z",
                fill: "white",
              })),
            fo ||
              (fo = i.createElement("path", {
                d: "M474.46 340.95L466.01 345.95L474.46 350.95L482.91 345.95L474.46 340.95ZM467.94 345.95L474.46 342.08L480.98 345.95L474.46 349.83L467.94 345.95Z",
                fill: "white",
              })),
            mo ||
              (mo = i.createElement("path", {
                d: "M474.46 338.07L461.1 346L474.46 353.93L487.81 345.99L474.46 338.07ZM463.2 346L474.46 339.3L485.72 346L474.46 352.71L463.2 346Z",
                fill: "white",
              })),
            uo ||
              (uo = i.createElement("path", {
                d: "M474.46 343.76L470.73 345.97L474.46 348.19L478.18 345.97L474.46 343.76ZM472.05 345.97L474.46 344.54L476.87 345.97L474.46 347.41L472.05 345.97Z",
                fill: "white",
              })),
            yo ||
              (yo = i.createElement("path", {
                d: "M474.46 340.95L466.01 345.95L474.46 350.95L482.91 345.95L474.46 340.95ZM467.94 345.95L474.46 342.08L480.98 345.95L474.46 349.83L467.94 345.95Z",
                fill: "white",
              })),
            Eo ||
              (Eo = i.createElement("path", {
                d: "M474.46 343.76L470.73 345.97L474.46 348.19L478.18 345.97L474.46 343.76ZM472.05 345.97L474.46 344.54L476.87 345.97L474.46 347.41L472.05 345.97Z",
                fill: "white",
              })),
            bo ||
              (bo = i.createElement("path", {
                d: "M474.46 340.95L466.01 345.95L474.46 350.95L482.91 345.95L474.46 340.95ZM467.94 345.95L474.46 342.08L480.98 345.95L474.46 349.83L467.94 345.95Z",
                fill: "white",
              })),
            jo ||
              (jo = i.createElement("path", {
                d: "M474.46 343.76L470.73 345.97L474.46 348.19L478.18 345.97L474.46 343.76ZM472.05 345.97L474.46 344.54L476.87 345.97L474.46 347.41L472.05 345.97Z",
                fill: "white",
              })),
            Mo ||
              (Mo = i.createElement("path", {
                d: "M474.46 343.76L470.73 345.97L474.46 348.19L478.18 345.97L474.46 343.76ZM472.05 345.97L474.46 344.54L476.87 345.97L474.46 347.41L472.05 345.97Z",
                fill: "white",
              })),
            Oo ||
              (Oo = i.createElement("path", {
                d: "M18.96 346V363.76L45.96 379.82V346H18.96Z",
                fill: "#62CFD5",
              })),
            Zo ||
              (Zo = i.createElement("path", {
                d: "M45.98 346V379.82L72.98 363.76V346H45.98Z",
                fill: "#1E878C",
              })),
            go ||
              (go = i.createElement("path", {
                d: "M18.96 346L45.96 329.93L72.96 346L45.96 362.06L18.96 346Z",
                fill: "#E7D1BA",
              })),
            xo ||
              (xo = i.createElement("path", {
                d: "M45.9799 333.15L24.3899 345.97L45.9599 358.8L67.5299 345.97L45.9799 333.15ZM27.7599 345.97L45.9799 335.15L64.2099 345.97L45.9799 356.8L27.7599 345.97Z",
                fill: "white",
              })),
            wo ||
              (wo = i.createElement("path", {
                d: "M45.98 343.76L42.26 345.97L45.98 348.19L49.71 345.97L45.98 343.76ZM43.57 345.97L45.98 344.54L48.39 345.97L45.97 347.41L43.57 345.97Z",
                fill: "white",
              })),
            vo ||
              (vo = i.createElement("path", {
                d: "M45.98 340.95L37.54 345.95L45.98 350.95L54.43 345.95L45.98 340.95ZM39.46 345.95L45.98 342.08L52.5 345.95L45.98 349.83L39.46 345.95Z",
                fill: "white",
              })),
            Fo ||
              (Fo = i.createElement("path", {
                d: "M45.9801 338.07L32.6201 346L45.9801 353.93L59.3901 345.96L45.9801 338.07ZM34.7201 346L45.9801 339.3L57.2501 346L45.9801 352.71L34.7201 346Z",
                fill: "white",
              })),
            Bo ||
              (Bo = i.createElement("path", {
                d: "M45.98 343.76L42.26 345.97L45.98 348.19L49.71 345.97L45.98 343.76ZM43.57 345.97L45.98 344.54L48.39 345.97L45.97 347.41L43.57 345.97Z",
                fill: "white",
              })),
            _o ||
              (_o = i.createElement("path", {
                d: "M45.98 340.95L37.54 345.95L45.98 350.95L54.43 345.95L45.98 340.95ZM39.46 345.95L45.98 342.08L52.5 345.95L45.98 349.83L39.46 345.95Z",
                fill: "white",
              })),
            ko ||
              (ko = i.createElement("path", {
                d: "M45.98 343.76L42.26 345.97L45.98 348.19L49.71 345.97L45.98 343.76ZM43.57 345.97L45.98 344.54L48.39 345.97L45.97 347.41L43.57 345.97Z",
                fill: "white",
              })),
            Vo ||
              (Vo = i.createElement("path", {
                d: "M45.98 340.95L37.54 345.95L45.98 350.95L54.43 345.95L45.98 340.95ZM39.46 345.95L45.98 342.08L52.5 345.95L45.98 349.83L39.46 345.95Z",
                fill: "white",
              })),
            So ||
              (So = i.createElement("path", {
                d: "M45.98 343.76L42.26 345.97L45.98 348.19L49.71 345.97L45.98 343.76ZM43.57 345.97L45.98 344.54L48.39 345.97L45.97 347.41L43.57 345.97Z",
                fill: "white",
              })),
            Ho ||
              (Ho = i.createElement("path", {
                d: "M45.98 343.76L42.26 345.97L45.98 348.19L49.71 345.97L45.98 343.76ZM43.57 345.97L45.98 344.54L48.39 345.97L45.97 347.41L43.57 345.97Z",
                fill: "white",
              })),
            No ||
              (No = i.createElement("path", {
                d: "M428.75 311.07V341.24L474.64 368.52V311.07H428.75Z",
                fill: "#62CFD5",
              })),
            Do ||
              (Do = i.createElement("path", {
                d: "M474.64 311.07V368.52L520.54 341.24V311.07H474.64Z",
                fill: "#1E878C",
              })),
            Ao ||
              (Ao = i.createElement("path", {
                d: "M428.75 311.07L474.64 283.79L520.54 311.07L474.64 338.35L428.75 311.07Z",
                fill: "#E7D1BA",
              })),
            Po ||
              (Po = i.createElement("path", {
                d: "M474.64 289.22L438 311L474.64 332.78L511.27 311L474.64 289.22ZM443.7 311L474.64 292.61L505.64 311L474.64 329.39L443.7 311Z",
                fill: "white",
              })),
            To ||
              (To = i.createElement("path", {
                d: "M474.64 307.24L468.32 311L474.64 314.76L480.97 311L474.64 307.24ZM470.54 311L474.64 308.56L478.74 311L474.64 313.44L470.54 311Z",
                fill: "white",
              })),
            Uo ||
              (Uo = i.createElement("path", {
                d: "M474.64 302.48L460.3 311L474.64 319.53L488.99 311L474.64 302.48ZM463.57 311L474.64 304.42L485.72 311L474.64 317.58L463.57 311Z",
                fill: "white",
              })),
            Io ||
              (Io = i.createElement("path", {
                d: "M474.64 297.52L451.95 311L474.64 324.47L497.32 310.99L474.64 297.52ZM455.51 311L474.64 299.61L493.77 311L474.64 322.39L455.51 311Z",
                fill: "white",
              })),
            Go ||
              (Go = i.createElement("path", {
                d: "M474.64 307.24L468.32 311L474.64 314.76L480.97 311L474.64 307.24ZM470.54 311L474.64 308.56L478.74 311L474.64 313.44L470.54 311Z",
                fill: "white",
              })),
            Ro ||
              (Ro = i.createElement("path", {
                d: "M474.64 302.48L460.3 311L474.64 319.53L488.99 311L474.64 302.48ZM463.57 311L474.64 304.42L485.72 311L474.64 317.58L463.57 311Z",
                fill: "white",
              })),
            Wo ||
              (Wo = i.createElement("path", {
                d: "M474.64 307.24L468.32 311L474.64 314.76L480.97 311L474.64 307.24ZM470.54 311L474.64 308.56L478.74 311L474.64 313.44L470.54 311Z",
                fill: "white",
              })),
            zo ||
              (zo = i.createElement("path", {
                d: "M474.64 302.48L460.3 311L474.64 319.53L488.99 311L474.64 302.48ZM463.57 311L474.64 304.42L485.72 311L474.64 317.58L463.57 311Z",
                fill: "white",
              })),
            Yo ||
              (Yo = i.createElement("path", {
                d: "M474.64 307.24L468.32 311L474.64 314.76L480.97 311L474.64 307.24ZM470.54 311L474.64 308.56L478.74 311L474.64 313.44L470.54 311Z",
                fill: "white",
              })),
            qo ||
              (qo = i.createElement("path", {
                d: "M474.64 307.24L468.32 311L474.64 314.76L480.97 311L474.64 307.24ZM470.54 311L474.64 308.56L478.74 311L474.64 313.44L470.54 311Z",
                fill: "white",
              })),
            Qo ||
              (Qo = i.createElement("path", {
                d: "M0 311.07V341.24L45.89 368.52V311.07H0Z",
                fill: "#62CFD5",
              })),
            Jo ||
              (Jo = i.createElement("path", {
                d: "M45.8899 311.07V368.52L91.7899 341.24V311.07H45.8899Z",
                fill: "#1E878C",
              })),
            Ko ||
              (Ko = i.createElement("path", {
                d: "M0 311.07L45.89 283.79L91.79 311.07L45.89 338.35L0 311.07Z",
                fill: "#E7D1BA",
              })),
            Xo ||
              (Xo = i.createElement("path", {
                d: "M45.89 289.22L9.23999 311L45.89 332.78L82.52 311L45.89 289.22ZM14.95 311L45.89 292.61L76.84 311L45.89 329.39L14.95 311Z",
                fill: "white",
              })),
            $o ||
              ($o = i.createElement("path", {
                d: "M45.8901 307.24L39.5701 311L45.8901 314.76L52.2201 311L45.8901 307.24ZM41.7901 311L45.8901 308.56L49.9901 311L45.8901 313.44L41.7901 311Z",
                fill: "white",
              })),
            eC ||
              (eC = i.createElement("path", {
                d: "M45.89 302.48L31.54 311L45.89 319.53L60.24 311L45.89 302.48ZM34.82 311L45.89 304.42L56.97 311L45.89 317.58L34.82 311Z",
                fill: "white",
              })),
            tC ||
              (tC = i.createElement("path", {
                d: "M45.89 297.52L23.2 311L45.89 324.47L68.5699 310.99L45.89 297.52ZM26.76 311L45.89 299.61L65.02 311L45.89 322.39L26.76 311Z",
                fill: "white",
              })),
            aC ||
              (aC = i.createElement("path", {
                d: "M45.8901 307.24L39.5701 311L45.8901 314.76L52.2201 311L45.8901 307.24ZM41.7901 311L45.8901 308.56L49.9901 311L45.8901 313.44L41.7901 311Z",
                fill: "white",
              })),
            iC ||
              (iC = i.createElement("path", {
                d: "M45.89 302.48L31.54 311L45.89 319.53L60.24 311L45.89 302.48ZM34.82 311L45.89 304.42L56.97 311L45.89 317.58L34.82 311Z",
                fill: "white",
              })),
            lC ||
              (lC = i.createElement("path", {
                d: "M45.8901 307.24L39.5701 311L45.8901 314.76L52.2201 311L45.8901 307.24ZM41.7901 311L45.8901 308.56L49.9901 311L45.8901 313.44L41.7901 311Z",
                fill: "white",
              })),
            rC ||
              (rC = i.createElement("path", {
                d: "M45.89 302.48L31.54 311L45.89 319.53L60.24 311L45.89 302.48ZM34.82 311L45.89 304.42L56.97 311L45.89 317.58L34.82 311Z",
                fill: "white",
              })),
            nC ||
              (nC = i.createElement("path", {
                d: "M45.8901 307.24L39.5701 311L45.8901 314.76L52.2201 311L45.8901 307.24ZM41.7901 311L45.8901 308.56L49.9901 311L45.8901 313.44L41.7901 311Z",
                fill: "white",
              })),
            oC ||
              (oC = i.createElement("path", {
                d: "M45.8901 307.24L39.5701 311L45.8901 314.76L52.2201 311L45.8901 307.24ZM41.7901 311L45.8901 308.56L49.9901 311L45.8901 313.44L41.7901 311Z",
                fill: "white",
              })),
            CC ||
              (CC = i.createElement("path", {
                d: "M456.01 390.66V534.39L447.2 539.59V395.9L456.01 390.66Z",
                fill: "#1E878C",
              })),
            cC ||
              (cC = i.createElement("path", {
                d: "M64.49 390.66V534.39L73.3 539.59V395.9L64.49 390.66Z",
                fill: "#1E878C",
              })),
            sC ||
              (sC = i.createElement("path", {
                d: "M368.09 222.67L397.6 239.81C398.599 240.313 399.702 240.575 400.82 240.575C401.938 240.575 403.041 240.313 404.04 239.81L416.04 232.89C416.405 232.732 416.722 232.481 416.96 232.161C417.197 231.842 417.345 231.465 417.39 231.07L417.5 267.74C417.462 268.144 417.318 268.53 417.083 268.86C416.848 269.19 416.529 269.453 416.16 269.62L404.16 276.52C403.162 277.028 402.059 277.292 400.94 277.292C399.821 277.292 398.717 277.028 397.72 276.52L368.23 259.39C367.833 259.214 367.489 258.936 367.232 258.585C366.976 258.234 366.817 257.822 366.77 257.39L366.67 220.72C366.72 221.139 366.877 221.539 367.126 221.88C367.374 222.222 367.706 222.493 368.09 222.67Z",
                fill: "url(#paint1_linear_61_2)",
              })),
            pC ||
              (pC = i.createElement("path", {
                d: "M368.11 218.56C366.11 219.7 366.11 221.56 368.11 222.67L397.62 239.81C398.618 240.318 399.721 240.582 400.84 240.582C401.959 240.582 403.063 240.318 404.06 239.81L416.06 232.89C417.84 231.89 417.85 230.2 416.06 229.17L386.22 211.84C385.223 211.332 384.119 211.068 383 211.068C381.881 211.068 380.778 211.332 379.78 211.84L368.11 218.56Z",
                fill: "url(#paint2_linear_61_2)",
              })),
            dC ||
              (dC = i.createElement("path", {
                d: "M400.5 237.75C401.398 237.771 402.286 237.561 403.08 237.14L414.64 230.47C415.13 230.19 415.43 229.85 415.43 229.56C415.43 229.27 415.14 228.94 414.67 228.66L385.89 211.95C385.087 211.549 384.202 211.34 383.305 211.34C382.408 211.34 381.523 211.549 380.72 211.95L369.49 218.43C368.91 218.76 368.57 219.19 368.57 219.53C368.57 219.87 368.89 220.29 369.46 220.62L397.92 237.15C398.716 237.563 399.603 237.769 400.5 237.75Z",
                fill: "#FFC800",
              })),
            LC ||
              (LC = i.createElement("path", {
                d: "M397.8 231.47C399.368 232.273 401.151 232.553 402.89 232.27C403.781 232.16 404.643 231.882 405.43 231.45C405.617 231.342 405.798 231.221 405.97 231.09L406.16 230.93C406.413 230.729 406.621 230.477 406.77 230.19C406.92 229.901 407.008 229.585 407.03 229.26C406.985 228.787 406.815 228.335 406.537 227.951C406.26 227.566 405.884 227.262 405.45 227.07C404.658 226.63 403.789 226.349 402.89 226.24C401.154 225.986 399.381 226.279 397.82 227.08C395.71 228.28 395.7 230.25 397.8 231.47Z",
                fill: "#5B4B4C",
              })),
            hC ||
              (hC = i.createElement("path", {
                d: "M405.45 227.07C404.659 226.63 403.789 226.349 402.89 226.24C401.154 225.986 399.382 226.279 397.82 227.08C395.71 228.3 395.7 230.27 397.82 231.49L397.93 231.54C399.478 230.774 401.222 230.498 402.93 230.75C403.787 230.85 404.617 231.108 405.38 231.51L405.47 231.46C405.658 231.352 405.838 231.231 406.01 231.1L406.2 230.95C406.451 230.743 406.658 230.488 406.81 230.2C406.961 229.912 407.05 229.595 407.07 229.27C407.024 228.791 406.849 228.334 406.564 227.946C406.279 227.559 405.894 227.256 405.45 227.07Z",
                fill: "url(#paint3_linear_61_2)",
              })),
            fC ||
              (fC = i.createElement("path", {
                d: "M381.58 260.5V258.5L384.25 256.95V258.9L381.58 260.5Z",
                fill: "#D2BE9B",
              })),
            mC ||
              (mC = i.createElement("path", {
                d: "M384.25 256.99L381.6 258.54C379.42 257.19 377.6 254.54 376.26 251.21L379.32 250.55C380.284 253.14 382.001 255.383 384.25 256.99Z",
                fill: "#D2BE9B",
              })),
            uC ||
              (uC = i.createElement("path", {
                d: "M387.39 260.74C386.605 260.821 385.812 260.74 385.06 260.5V262.5L381.61 260.5L384.29 258.95L386.03 259.95L387.39 260.74Z",
                fill: "#D2BE9B",
              })),
            yC ||
              (yC = i.createElement("path", {
                d: "M385.93 244.74C386.29 244.94 386.69 245.19 387.19 245.5L387.56 245.75L386.49 245.91C386.326 245.505 386.108 245.125 385.84 244.78L385.68 244.55C385.75 244.629 385.835 244.693 385.93 244.74Z",
                fill: "#5B4B4C",
              })),
            EC ||
              (EC = i.createElement("path", {
                d: "M380.7 235.82C380.63 235.858 380.567 235.905 380.51 235.96L380.66 235.84L380.7 235.82Z",
                fill: "#5B4B4C",
              })),
            bC ||
              (bC = i.createElement("path", {
                d: "M390.09 257.35C390.062 257.997 389.899 258.63 389.61 259.21H389.46C388.863 259.202 388.27 259.107 387.7 258.93V260.66L387.36 260.72L386 259.93L384.26 258.93V256.93C382.01 255.331 380.295 253.09 379.34 250.5L379.69 250.42C379.908 250.899 380.162 251.36 380.45 251.8L380.65 252.09C381.472 253.178 382.489 254.104 383.65 254.82C384.026 255.041 384.421 255.228 384.83 255.38C385.016 255.372 385.197 255.32 385.36 255.23L387.94 253.71H388.04C388.198 253.613 388.326 253.475 388.41 253.31C388.498 253.148 388.54 252.964 388.53 252.78C388.542 252.017 388.279 251.275 387.79 250.69C387.725 250.562 387.628 250.452 387.51 250.37C387.393 250.281 387.269 250.201 387.14 250.13C386.95 250.02 386.73 249.91 386.48 249.79L385.66 249.35C384.688 248.767 383.771 248.098 382.92 247.35C381.769 246.269 380.849 244.965 380.216 243.517C379.584 242.07 379.252 240.509 379.24 238.93C379.253 238.593 379.3 238.258 379.38 237.93C379.388 237.847 379.408 237.767 379.44 237.69C379.508 237.425 379.609 237.17 379.74 236.93C380.38 236.936 381.014 237.044 381.62 237.25V235.48L383.13 236.36L385.02 237.45V239.22C386.829 240.564 388.248 242.366 389.13 244.44C388.965 244.035 388.75 243.652 388.49 243.3C387.759 242.316 386.837 241.49 385.78 240.87C385.397 240.61 384.959 240.442 384.5 240.38H384.2L383.95 240.52H383.89C383.863 240.531 383.839 240.548 383.82 240.57L383.75 240.66C383.746 240.669 383.743 240.68 383.743 240.69C383.743 240.7 383.746 240.711 383.75 240.72V240.78C383.682 240.927 383.651 241.088 383.66 241.25C383.643 241.505 383.667 241.762 383.73 242.01C383.751 242.122 383.781 242.233 383.82 242.34C383.851 242.446 383.891 242.55 383.94 242.65C383.74 242.502 383.529 242.368 383.31 242.25C383.068 242.102 382.814 241.974 382.55 241.87C382.377 241.792 382.19 241.748 382 241.74H381.69L381.48 241.84C381.316 241.932 381.182 242.067 381.092 242.232C381.001 242.396 380.959 242.583 380.97 242.77C380.963 243.222 381.048 243.672 381.22 244.09C381.398 244.503 381.656 244.877 381.98 245.19C382.78 245.84 383.63 246.14 385.23 247.28C387.89 249.87 390.29 252.78 390.09 257.35Z",
                fill: "#5B4B4C",
              })),
            jC ||
              (jC = i.createElement("path", {
                d: "M387.69 258.95V260.68L387.35 260.74C386.565 260.82 385.772 260.738 385.02 260.5L386.02 259.94L387.69 258.95Z",
                fill: "#9E8365",
              })),
            MC ||
              (MC = i.createElement("path", {
                d: "M389.45 259.22C389.503 259.23 389.557 259.23 389.61 259.22C389.372 259.693 389.005 260.089 388.55 260.36C388.284 260.509 387.997 260.62 387.7 260.69L387.36 260.75C386.575 260.83 385.782 260.748 385.03 260.51L386.03 259.96L387.73 258.96C388.298 259.131 388.887 259.218 389.48 259.22H389.45Z",
                fill: "#D2BE9B",
              })),
            OC ||
              (OC = i.createElement("path", {
                d: "M387.83 250.7C387.763 250.573 387.671 250.461 387.56 250.37L387.18 250.14C386.98 250.02 386.77 249.92 386.52 249.79C386.27 249.66 386.01 249.53 385.69 249.35C384.715 248.771 383.798 248.102 382.95 247.35L380.27 248.9C381.127 249.649 382.051 250.318 383.03 250.9C383.35 251.08 383.62 251.22 383.86 251.34L384.52 251.68L384.89 251.92C385.002 252.006 385.094 252.115 385.16 252.24C385.657 252.825 385.921 253.573 385.9 254.34C385.908 254.526 385.87 254.712 385.79 254.88C385.699 255.043 385.568 255.18 385.41 255.28L388.08 253.72C388.237 253.626 388.365 253.491 388.45 253.33C388.531 253.166 388.569 252.983 388.56 252.8C388.58 252.035 388.321 251.288 387.83 250.7Z",
                fill: "#D2BE9B",
              })),
            ZC ||
              (ZC = i.createElement("path", {
                d: "M383.77 242.79C383.57 242.642 383.359 242.508 383.14 242.39C382.899 242.24 382.645 242.112 382.38 242.01L383.48 241.37C383.466 241.626 383.493 241.883 383.56 242.13C383.58 242.242 383.611 242.353 383.65 242.46C383.681 242.573 383.721 242.683 383.77 242.79Z",
                fill: "#9E8365",
              })),
            gC ||
              (gC = i.createElement("path", {
                d: "M379.27 238.92L377.85 239.76L379.27 238.93C379.283 238.593 379.33 238.258 379.41 237.93C379.419 237.851 379.439 237.773 379.47 237.7C379.538 237.435 379.639 237.18 379.77 236.94C379.206 236.938 378.651 237.083 378.16 237.36C377.648 237.708 377.235 238.184 376.962 238.739C376.688 239.295 376.564 239.912 376.6 240.53C376.612 242.108 376.945 243.667 377.577 245.112C378.21 246.558 379.129 247.86 380.28 248.94L382.95 247.39C381.798 246.298 380.878 244.986 380.246 243.53C379.614 242.075 379.282 240.507 379.27 238.92Z",
                fill: "#D2BE9B",
              })),
            xC ||
              (xC = i.createElement("path", {
                d: "M380.7 235.82C380.63 235.858 380.567 235.905 380.51 235.96L380.66 235.84L380.7 235.82Z",
                fill: "url(#paint4_linear_61_2)",
              })),
            wC ||
              (wC = i.createElement("path", {
                d: "M383.99 240.46H383.92L383.86 240.51L383.78 240.6C383.775 240.626 383.775 240.653 383.78 240.68V240.73C383.701 240.873 383.666 241.037 383.68 241.2L382.39 242.07C382.211 241.997 382.022 241.954 381.83 241.94H381.53C381.456 241.965 381.386 241.999 381.32 242.04C382.07 241.59 383.1 241.04 383.89 240.55L383.99 240.46Z",
                fill: "#9E8365",
              })),
            vC ||
              (vC = i.createElement("path", {
                d: "M387.55 245.76L386.48 245.93C386.314 245.523 386.096 245.14 385.83 244.79L385.67 244.57L385.93 244.73C386.29 244.93 386.69 245.18 387.19 245.49C387.299 245.594 387.42 245.685 387.55 245.76Z",
                fill: "#9E8365",
              })),
            FC ||
              (FC = i.createElement("path", {
                d: "M388.51 243.25C387.78 242.269 386.862 241.443 385.81 240.82C385.414 240.558 384.962 240.393 384.49 240.34H384.19L383.98 240.44L383.88 240.51C383.08 240.96 382.07 241.51 381.3 242C381.366 241.959 381.436 241.925 381.51 241.9L383.83 240.56L381.51 241.9H381.82C382.01 241.908 382.197 241.952 382.37 242.03C382.633 242.133 382.887 242.257 383.13 242.4C383.35 242.52 383.56 242.65 383.77 242.79C384.482 243.29 385.118 243.89 385.66 244.57L385.83 244.8C386.093 245.146 386.308 245.526 386.47 245.93L387.18 245.52L389.18 244.38C388.999 243.98 388.774 243.601 388.51 243.25Z",
                fill: "#D2BE9B",
              })),
            BC ||
              (BC = i.createElement("path", {
                d: "M380.67 235.84C380.6 235.878 380.536 235.925 380.48 235.98L380.67 235.84Z",
                fill: "#9E8365",
              })),
            _C ||
              (_C = i.createElement("path", {
                d: "M381.67 235.41L383.19 236.3L381.64 237.2V235.43L381.67 235.41Z",
                fill: "#9E8365",
              })),
            kC ||
              (kC = i.createElement("path", {
                d: "M381.68 235.41L383.19 236.3L381.65 237.2V235.4L381.68 235.41Z",
                fill: "#D2BE9B",
              })),
            VC ||
              (VC = i.createElement("path", {
                d: "M389.68 245.44L387.55 245.75L386.48 245.92L387.19 245.5L389.19 244.37L389.68 245.44Z",
                fill: "#D2BE9B",
              })),
            SC ||
              (SC = i.createElement("path", {
                d: "M383.55 220.54L383.96 220.43L383.55 220.54Z",
                fill: "#B4B8BC",
              })),
            HC ||
              (HC = i.createElement("path", {
                d: "M377.71 219.87C379.275 220.681 381.06 220.965 382.8 220.68C383.691 220.57 384.553 220.292 385.34 219.86C385.527 219.752 385.708 219.631 385.88 219.5L386.07 219.34C386.326 219.138 386.534 218.882 386.68 218.59C386.831 218.305 386.919 217.992 386.94 217.67C386.896 217.197 386.726 216.745 386.448 216.36C386.171 215.974 385.795 215.671 385.36 215.48C384.57 215.039 383.699 214.761 382.8 214.66C381.065 214.398 379.291 214.688 377.73 215.49C375.62 216.67 375.61 218.66 377.71 219.87Z",
                fill: "#C9C9C9",
              })),
            NC ||
              (NC = i.createElement("path", {
                d: "M398.7 205.14C400.257 205.932 402.024 206.212 403.75 205.94C404.635 205.83 405.49 205.551 406.27 205.12C406.453 205.009 406.63 204.889 406.8 204.76L406.99 204.61C407.243 204.409 407.451 204.157 407.6 203.87C407.751 203.586 407.837 203.272 407.85 202.95C407.807 202.481 407.64 202.031 407.366 201.648C407.092 201.265 406.72 200.962 406.29 200.77C405.505 200.336 404.642 200.06 403.75 199.96C402.038 199.71 400.29 200 398.75 200.79C396.63 201.97 396.6 203.93 398.7 205.14Z",
                fill: "#C9C9C9",
              })),
            DC ||
              (DC = i.createElement("path", {
                d: "M397.15 207.75H407.85V214.07H407.79C407.75 214.536 407.587 214.983 407.316 215.365C407.045 215.747 406.677 216.049 406.25 216.24C405.088 216.825 403.806 217.129 402.505 217.129C401.204 217.129 399.922 216.825 398.76 216.24C398.333 216.051 397.964 215.753 397.69 215.375C397.416 214.998 397.247 214.554 397.2 214.09H397.15V207.8V207.75Z",
                fill: "#C9C9C9",
              })),
            AC ||
              (AC = i.createElement("path", {
                d: "M397.15 207.75C397.213 208.198 397.388 208.622 397.659 208.984C397.93 209.346 398.288 209.634 398.7 209.82C399.876 210.412 401.174 210.72 402.49 210.72C403.806 210.72 405.104 210.412 406.28 209.82C406.69 209.631 407.048 209.345 407.322 208.986C407.595 208.626 407.777 208.206 407.85 207.76C407.862 207.377 407.777 206.997 407.602 206.656C407.427 206.315 407.168 206.024 406.85 205.81C406.681 205.679 406.504 205.558 406.32 205.45L406 205.28C404.908 205.771 403.727 206.03 402.53 206.04C401.331 206.045 400.145 205.796 399.05 205.31L398.75 205.46C398.542 205.579 398.344 205.716 398.16 205.87C397.851 206.078 397.6 206.36 397.43 206.69C397.259 207.017 397.169 207.381 397.17 207.75H397.15Z",
                fill: "#B4B8BC",
              })),
            PC ||
              (PC = i.createElement("path", {
                d: "M398.7 205.14C400.257 205.932 402.024 206.212 403.75 205.94C404.634 205.83 405.49 205.551 406.27 205.12C406.445 205.019 406.612 204.906 406.77 204.78V206.3H406.72C406.687 206.674 406.554 207.033 406.336 207.339C406.118 207.644 405.823 207.887 405.48 208.04C404.859 208.375 404.18 208.592 403.48 208.68C402.092 208.904 400.669 208.676 399.42 208.03C399.077 207.878 398.779 207.638 398.558 207.334C398.337 207.03 398.2 206.674 398.16 206.3V204.75C398.335 204.891 398.519 205.022 398.71 205.14H398.7Z",
                fill: "#A7ABB0",
              })),
            TC ||
              (TC = i.createElement("path", {
                d: "M381.57 171.31C383.214 170.396 385.073 169.937 386.954 169.981C388.835 170.024 390.67 170.57 392.27 171.56L399.21 175.87C401.858 177.498 404.044 179.78 405.557 182.496C407.07 185.212 407.86 188.271 407.85 191.38V202.94H397.15V191.38C397.148 190.093 396.821 188.827 396.2 187.7C395.572 186.571 394.662 185.624 393.56 184.95L386.86 180.79V217.65H376.15V180.53C376.155 178.651 376.659 176.806 377.612 175.186C378.564 173.566 379.93 172.228 381.57 171.31Z",
                fill: "#C9C9C9",
              })),
            UC ||
              (UC = i.createElement("path", {
                d: "M382.8 183.42V220.68C383.691 220.57 384.553 220.292 385.34 219.86C385.526 219.754 385.703 219.634 385.87 219.5C385.87 219.42 385.96 219.37 386.07 219.34C386.326 219.138 386.534 218.882 386.68 218.59C386.831 218.305 386.92 217.992 386.94 217.67L386.85 180.82C386.85 180.82 382.8 179.13 382.8 183.42Z",
                fill: "#B4B8BC",
              })),
            IC ||
              (IC = i.createElement("path", {
                opacity: 0.65,
                d: "M89.64 296.95C91.5959 288.412 90.9761 279.485 87.8591 271.299C84.742 263.113 79.2676 256.036 72.1281 250.961C64.9886 245.886 56.5046 243.042 47.7489 242.789C38.9932 242.536 30.359 244.884 22.9381 249.538C15.5171 254.191 9.64276 260.941 6.05771 268.933C2.47266 276.925 1.33794 285.801 2.79705 294.438C4.25615 303.075 8.24355 311.085 14.255 317.456C20.2665 323.827 28.0322 328.272 36.57 330.23C42.2398 331.53 48.1102 331.7 53.8459 330.731C59.5816 329.763 65.0703 327.673 69.9984 324.583C74.9266 321.492 79.1977 317.461 82.5678 312.72C85.9379 307.979 88.3411 302.62 89.64 296.95Z",
                fill: "url(#paint5_radial_61_2)",
              })),
            GC ||
              (GC = i.createElement("path", {
                d: "M82.1299 295.07C83.7132 288.014 83.1685 280.647 80.5648 273.901C77.961 267.155 73.4152 261.333 67.5022 257.17C61.5892 253.007 54.5745 250.692 47.3455 250.516C40.1164 250.34 32.9975 252.312 26.8893 256.183C20.781 260.053 15.9576 265.648 13.0292 272.26C10.1007 278.871 9.1987 286.203 10.4372 293.327C11.6758 300.452 14.9992 307.049 19.9872 312.284C24.9753 317.52 31.4038 321.158 38.4599 322.74C43.1442 323.791 47.9898 323.91 52.7198 323.088C57.4498 322.266 61.9716 320.521 66.0269 317.952C70.0823 315.382 73.5917 312.039 76.3546 308.113C79.1176 304.187 81.0801 299.755 82.1299 295.07Z",
                fill: "url(#paint6_radial_61_2)",
              })),
            RC ||
              (RC = i.createElement("path", {
                d: "M47.64 315.93C53.3556 315.932 58.9434 314.239 63.6963 311.064C68.4492 307.889 72.1536 303.376 74.3409 298.096C76.5282 292.815 77.0999 287.005 75.9839 281.399C74.8679 275.793 72.1142 270.645 68.0713 266.605C64.0283 262.564 58.8778 259.814 53.2714 258.702C47.6651 257.59 41.8548 258.166 36.5758 260.357C31.2968 262.548 26.7863 266.255 23.615 271.01C20.4437 275.765 18.7541 281.354 18.76 287.07C18.768 294.725 21.8139 302.064 27.2288 307.475C32.6437 312.887 39.9848 315.927 47.64 315.93Z",
                fill: "url(#paint7_linear_61_2)",
              })),
            WC ||
              (WC = i.createElement("path", {
                d: "M45.2799 315.93C50.9951 315.93 56.5819 314.235 61.3335 311.059C66.085 307.883 69.7879 303.37 71.9736 298.089C74.1594 292.808 74.7297 286.998 73.6126 281.393C72.4954 275.788 69.7409 270.64 65.6976 266.601C61.6542 262.562 56.5037 259.813 50.8977 258.701C45.2916 257.59 39.4818 258.167 34.2034 260.358C28.9249 262.549 24.415 266.257 21.2442 271.011C18.0733 275.766 16.384 281.355 16.3899 287.07C16.4005 294.726 19.4486 302.065 24.8651 307.476C30.2816 312.887 37.6238 315.927 45.2799 315.93Z",
                fill: "url(#paint8_linear_61_2)",
              })),
            zC ||
              (zC = i.createElement("path", {
                d: "M45.28 311.35C50.0893 311.35 54.7906 309.923 58.789 307.251C62.7874 304.578 65.9033 300.78 67.7424 296.336C69.5814 291.892 70.0611 287.003 69.1207 282.286C68.1802 277.57 65.8619 273.238 62.4591 269.84C59.0563 266.441 54.7219 264.128 50.0042 263.193C45.2866 262.259 40.3977 262.745 35.9561 264.589C31.5146 266.434 27.72 269.554 25.0524 273.556C22.3848 277.558 20.9641 282.261 20.97 287.07C20.9753 293.513 23.5392 299.69 28.0979 304.243C32.6566 308.796 38.837 311.353 45.28 311.35Z",
                fill: "url(#paint9_linear_61_2)",
              })),
            YC ||
              (YC = i.createElement("path", {
                d: "M45.28 311.35C50.0893 311.35 54.7906 309.923 58.789 307.251C62.7874 304.578 65.9033 300.78 67.7424 296.336C69.5814 291.892 70.0611 287.003 69.1207 282.286C68.1802 277.57 65.8619 273.238 62.4591 269.84C59.0563 266.441 54.7219 264.128 50.0042 263.193C45.2866 262.259 40.3977 262.745 35.9561 264.589C31.5146 266.434 27.72 269.554 25.0524 273.556C22.3848 277.558 20.9641 282.261 20.97 287.07C20.9753 293.513 23.5392 299.69 28.0979 304.243C32.6566 308.796 38.837 311.353 45.28 311.35V311.35Z",
                stroke: "#AEF7FF",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            qC ||
              (qC = i.createElement("path", {
                d: "M49.7299 275.4H39.28L38.42 280.22H47.84C52.49 280.22 53.84 281.91 53.84 284.7C53.7176 286.28 53.4123 287.84 52.93 289.35C52.22 291.45 50.74 293.83 45.24 293.83H36.06L35.2 298.65H45.63C49.3 298.65 50.87 298.22 52.53 297.44C56.2 295.74 58.3899 292.12 59.2599 287.39C60.5599 280.39 58.94 275.34 49.75 275.34",
                fill: "white",
              })),
            QC ||
              (QC = i.createElement("path", {
                d: "M34.7699 284.61C32.0399 284.61 31.6499 286.42 31.3899 287.48C31.0499 288.89 30.9299 289.48 30.9299 289.48H41.6299C44.3699 289.48 44.7599 287.68 45.0199 286.62C45.3599 285.21 45.4699 284.62 45.4699 284.62L34.7699 284.61Z",
                fill: "white",
              })),
            JC ||
              (JC = i.createElement("path", {
                opacity: 0.65,
                d: "M510.64 320.23C517.711 313.159 522.527 304.15 524.478 294.342C526.43 284.535 525.428 274.369 521.602 265.13C517.775 255.891 511.295 247.994 502.98 242.439C494.665 236.883 484.89 233.917 474.89 233.917C464.89 233.917 455.115 236.883 446.8 242.439C438.485 247.994 432.005 255.891 428.178 265.13C424.352 274.369 423.351 284.535 425.302 294.342C427.253 304.15 432.069 313.159 439.14 320.23C448.623 329.709 461.482 335.033 474.89 335.033C488.298 335.033 501.157 329.709 510.64 320.23Z",
                fill: "url(#paint10_radial_61_2)",
              })),
            KC ||
              (KC = i.createElement("path", {
                d: "M504.39 313.98C510.228 308.145 514.205 300.709 515.817 292.614C517.428 284.518 516.603 276.127 513.445 268.5C510.288 260.874 504.939 254.355 498.076 249.769C491.213 245.183 483.144 242.735 474.89 242.735C466.636 242.735 458.567 245.183 451.704 249.769C444.841 254.355 439.492 260.874 436.334 268.5C433.177 276.127 432.351 284.518 433.963 292.614C435.575 300.709 439.552 308.145 445.39 313.98C453.217 321.799 463.827 326.191 474.89 326.191C485.953 326.191 496.563 321.799 504.39 313.98Z",
                fill: "url(#paint11_radial_61_2)",
              })),
            XC ||
              (XC = i.createElement("path", {
                d: "M476.24 317.45C482.767 317.45 489.147 315.515 494.574 311.888C500.001 308.262 504.23 303.108 506.728 297.079C509.226 291.049 509.879 284.413 508.606 278.012C507.333 271.611 504.19 265.731 499.575 261.115C494.959 256.5 489.079 253.357 482.678 252.084C476.277 250.811 469.641 251.464 463.611 253.962C457.581 256.46 452.428 260.689 448.802 266.116C445.175 271.543 443.24 277.923 443.24 284.45C443.24 293.202 446.717 301.596 452.906 307.784C459.094 313.973 467.488 317.45 476.24 317.45Z",
                fill: "url(#paint12_linear_61_2)",
              })),
            $C ||
              ($C = i.createElement("path", {
                d: "M473.54 317.45C480.067 317.45 486.447 315.515 491.874 311.888C497.301 308.262 501.53 303.108 504.028 297.079C506.526 291.049 507.179 284.413 505.906 278.012C504.633 271.611 501.49 265.731 496.875 261.115C492.259 256.5 486.379 253.357 479.978 252.084C473.577 250.811 466.941 251.464 460.911 253.962C454.881 256.46 449.728 260.689 446.102 266.116C442.475 271.543 440.54 277.923 440.54 284.45C440.54 293.202 444.017 301.596 450.206 307.784C456.394 313.973 464.788 317.45 473.54 317.45Z",
                fill: "url(#paint13_linear_61_2)",
              })),
            ec ||
              (ec = i.createElement("path", {
                d: "M473.54 312.23C479.029 312.232 484.396 310.606 488.961 307.557C493.526 304.509 497.084 300.175 499.186 295.104C501.287 290.033 501.838 284.453 500.767 279.069C499.697 273.685 497.054 268.739 493.172 264.858C489.291 260.976 484.345 258.333 478.961 257.263C473.577 256.192 467.997 256.743 462.926 258.844C457.855 260.946 453.521 264.504 450.473 269.069C447.424 273.634 445.798 279.001 445.8 284.49C445.8 288.133 446.518 291.74 447.912 295.106C449.306 298.471 451.349 301.529 453.925 304.105C456.501 306.681 459.559 308.724 462.924 310.118C466.29 311.512 469.897 312.23 473.54 312.23Z",
                fill: "url(#paint14_linear_61_2)",
              })),
            tc ||
              (tc = i.createElement("path", {
                d: "M473.54 312.23C479.029 312.232 484.396 310.606 488.961 307.557C493.526 304.509 497.084 300.175 499.186 295.104C501.287 290.033 501.838 284.453 500.767 279.069C499.697 273.685 497.054 268.739 493.172 264.858C489.291 260.976 484.345 258.333 478.961 257.263C473.577 256.192 467.997 256.743 462.926 258.844C457.855 260.946 453.521 264.504 450.473 269.069C447.424 273.634 445.798 279.001 445.8 284.49C445.8 288.133 446.518 291.74 447.912 295.106C449.306 298.471 451.349 301.529 453.925 304.105C456.501 306.681 459.559 308.724 462.924 310.118C466.29 311.512 469.897 312.23 473.54 312.23V312.23Z",
                stroke: "#79F2BB",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            ac ||
              (ac = i.createElement("path", {
                d: "M460.97 275.45V294.07L473.05 298.4V279.63L486.12 274.81L474.26 270.57L460.97 275.45Z",
                fill: "white",
              })),
            ic ||
              (ic = i.createElement("path", {
                d: "M474.04 280.17V290.34L486.12 294.68V275.68L474.04 280.17Z",
                fill: "white",
              })),
            lc ||
              (lc = i.createElement("path", {
                opacity: 0.65,
                d: "M440.33 396.92C444.078 393.164 446.628 388.381 447.659 383.177C448.689 377.972 448.154 372.578 446.121 367.677C444.088 362.777 440.648 358.588 436.235 355.642C431.823 352.695 426.636 351.123 421.33 351.123C416.024 351.123 410.837 352.695 406.425 355.642C402.012 358.588 398.572 362.777 396.539 367.677C394.506 372.578 393.971 377.972 395.001 383.177C396.032 388.381 398.582 393.164 402.33 396.92C404.824 399.418 407.785 401.399 411.046 402.751C414.306 404.103 417.801 404.798 421.33 404.798C424.859 404.798 428.354 404.103 431.614 402.751C434.875 401.399 437.836 399.418 440.33 396.92Z",
                fill: "url(#paint15_radial_61_2)",
              })),
            rc ||
              (rc = i.createElement("path", {
                d: "M437.01 393.6C440.107 390.502 442.216 386.555 443.07 382.259C443.924 377.962 443.485 373.509 441.808 369.462C440.132 365.415 437.293 361.956 433.65 359.523C430.008 357.089 425.726 355.79 421.345 355.79C416.965 355.79 412.682 357.089 409.04 359.523C405.398 361.956 402.559 365.415 400.882 369.462C399.205 373.509 398.766 377.962 399.62 382.259C400.474 386.555 402.583 390.502 405.68 393.6C409.836 397.753 415.47 400.086 421.345 400.086C427.22 400.086 432.855 397.753 437.01 393.6Z",
                fill: "url(#paint16_radial_61_2)",
              })),
            nc ||
              (nc = i.createElement("path", {
                d: "M422.07 395.44C425.531 395.44 428.915 394.414 431.793 392.491C434.67 390.568 436.913 387.835 438.238 384.637C439.563 381.439 439.909 377.921 439.234 374.526C438.559 371.131 436.892 368.013 434.444 365.566C431.997 363.118 428.879 361.451 425.484 360.776C422.089 360.101 418.571 360.448 415.373 361.772C412.175 363.097 409.442 365.34 407.519 368.217C405.596 371.095 404.57 374.479 404.57 377.94C404.573 382.58 406.417 387.03 409.699 390.311C412.98 393.593 417.43 395.437 422.07 395.44Z",
                fill: "url(#paint17_linear_61_2)",
              })),
            oc ||
              (oc = i.createElement("path", {
                d: "M420.64 395.44C424.101 395.44 427.485 394.414 430.363 392.491C433.24 390.568 435.483 387.835 436.808 384.637C438.133 381.439 438.479 377.921 437.804 374.526C437.129 371.131 435.462 368.013 433.014 365.566C430.567 363.118 427.449 361.451 424.054 360.776C420.66 360.101 417.141 360.448 413.943 361.772C410.745 363.097 408.012 365.34 406.089 368.217C404.166 371.095 403.14 374.479 403.14 377.94C403.143 382.58 404.987 387.03 408.269 390.311C411.55 393.593 416 395.437 420.64 395.44Z",
                fill: "url(#paint18_linear_61_2)",
              })),
            Cc ||
              (Cc = i.createElement("path", {
                d: "M420.64 392.67C423.553 392.67 426.401 391.806 428.823 390.188C431.246 388.569 433.134 386.268 434.249 383.577C435.364 380.885 435.655 377.924 435.087 375.066C434.519 372.209 433.116 369.584 431.056 367.524C428.996 365.464 426.371 364.061 423.514 363.493C420.656 362.925 417.695 363.216 415.003 364.331C412.311 365.446 410.011 367.334 408.392 369.756C406.774 372.179 405.91 375.027 405.91 377.94C405.913 381.846 407.465 385.591 410.227 388.353C412.989 391.115 416.734 392.667 420.64 392.67Z",
                fill: "url(#paint19_linear_61_2)",
              })),
            cc ||
              (cc = i.createElement("path", {
                d: "M420.64 392.67C423.553 392.67 426.401 391.806 428.823 390.188C431.246 388.569 433.134 386.268 434.249 383.577C435.364 380.885 435.655 377.924 435.087 375.066C434.519 372.209 433.116 369.584 431.056 367.524C428.996 365.464 426.371 364.061 423.514 363.493C420.656 362.925 417.695 363.216 415.003 364.331C412.311 365.446 410.011 367.334 408.392 369.756C406.774 372.179 405.91 375.027 405.91 377.94C405.913 381.846 407.465 385.591 410.227 388.353C412.989 391.115 416.734 392.667 420.64 392.67V392.67Z",
                stroke: "#F78B8B",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            sc ||
              (sc = i.createElement("path", {
                d: "M420.59 374.27L411.59 383.55L420.65 369.17L429.7 383.64L420.59 374.27Z",
                fill: "white",
              })),
            pc ||
              (pc = i.createElement("path", {
                d: "M421.91 377.96H419.08L420.54 376.4L421.92 377.97L421.91 377.96ZM416.48 380.53H424.6L422.94 378.87H418.07L416.47 380.47",
                fill: "white",
              })),
            dc ||
              (dc = i.createElement("path", {
                opacity: 0.65,
                d: "M485.46 507.52C486.252 504.049 485.996 500.42 484.725 497.094C483.455 493.768 481.226 490.894 478.322 488.834C475.417 486.775 471.967 485.623 468.408 485.525C464.848 485.426 461.34 486.386 458.326 488.282C455.312 490.178 452.929 492.925 451.476 496.176C450.024 499.427 449.568 503.035 450.167 506.545C450.766 510.055 452.392 513.308 454.84 515.894C457.288 518.479 460.448 520.281 463.92 521.07C468.573 522.128 473.456 521.295 477.495 518.754C481.534 516.213 484.399 512.172 485.46 507.52Z",
                fill: "url(#paint20_radial_61_2)",
              })),
            Lc ||
              (Lc = i.createElement("path", {
                d: "M482.39 506.84C483.047 503.98 482.841 500.989 481.798 498.245C480.756 495.502 478.923 493.129 476.532 491.427C474.141 489.726 471.299 488.771 468.365 488.684C465.432 488.597 462.538 489.383 460.051 490.94C457.563 492.498 455.594 494.758 454.391 497.435C453.188 500.112 452.805 503.086 453.292 505.98C453.779 508.874 455.113 511.559 457.126 513.695C459.139 515.831 461.74 517.322 464.6 517.98C466.5 518.417 468.467 518.475 470.389 518.152C472.311 517.829 474.151 517.13 475.803 516.095C477.455 515.061 478.887 513.711 480.017 512.123C481.147 510.535 481.954 508.74 482.39 506.84Z",
                fill: "url(#paint21_radial_61_2)",
              })),
            hc ||
              (hc = i.createElement("path", {
                d: "M468.39 515.24C470.71 515.24 472.978 514.552 474.907 513.263C476.836 511.974 478.339 510.142 479.227 507.999C480.115 505.856 480.347 503.497 479.895 501.222C479.442 498.946 478.325 496.856 476.685 495.216C475.044 493.575 472.954 492.458 470.679 492.005C468.403 491.553 466.045 491.785 463.901 492.673C461.758 493.561 459.926 495.064 458.637 496.993C457.348 498.922 456.66 501.19 456.66 503.51C456.66 506.621 457.896 509.605 460.096 511.804C462.296 514.004 465.279 515.24 468.39 515.24Z",
                fill: "url(#paint22_linear_61_2)",
              })),
            fc ||
              (fc = i.createElement("path", {
                d: "M467.45 515.24C469.77 515.24 472.038 514.552 473.967 513.263C475.896 511.974 477.399 510.142 478.287 507.999C479.175 505.856 479.407 503.497 478.955 501.222C478.502 498.946 477.385 496.856 475.744 495.216C474.104 493.575 472.014 492.458 469.738 492.005C467.463 491.553 465.104 491.785 462.961 492.673C460.818 493.561 458.986 495.064 457.697 496.993C456.408 498.922 455.72 501.19 455.72 503.51C455.72 506.621 456.956 509.605 459.156 511.804C461.355 514.004 464.339 515.24 467.45 515.24Z",
                fill: "url(#paint23_linear_61_2)",
              })),
            mc ||
              (mc = i.createElement("path", {
                d: "M467.45 513.38C469.402 513.38 471.31 512.801 472.934 511.717C474.557 510.632 475.822 509.091 476.569 507.287C477.316 505.484 477.511 503.499 477.13 501.584C476.75 499.67 475.81 497.911 474.429 496.531C473.049 495.151 471.29 494.211 469.376 493.83C467.461 493.449 465.476 493.644 463.673 494.391C461.869 495.138 460.328 496.403 459.243 498.027C458.159 499.65 457.58 501.558 457.58 503.51C457.58 506.128 458.62 508.638 460.471 510.489C462.322 512.34 464.832 513.38 467.45 513.38Z",
                fill: "url(#paint24_linear_61_2)",
              })),
            uc ||
              (uc = i.createElement("path", {
                d: "M467.45 513.38C469.402 513.38 471.31 512.801 472.934 511.717C474.557 510.632 475.822 509.091 476.569 507.287C477.316 505.484 477.511 503.499 477.13 501.584C476.75 499.67 475.81 497.911 474.429 496.531C473.049 495.151 471.29 494.211 469.376 493.83C467.461 493.449 465.476 493.644 463.673 494.391C461.869 495.138 460.328 496.403 459.243 498.027C458.159 499.65 457.58 501.558 457.58 503.51C457.58 506.128 458.62 508.638 460.471 510.489C462.322 512.34 464.832 513.38 467.45 513.38Z",
                stroke: "#C3CBE2",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            yc ||
              (yc = i.createElement("path", {
                d: "M467.44 496.92L467.36 497.22V505.94L467.44 506.03L471.5 503.64L467.44 496.92Z",
                fill: "#EDEEEF",
              })),
            Ec ||
              (Ec = i.createElement("path", {
                d: "M467.44 496.92L463.44 503.64L467.44 506.03V496.92Z",
                fill: "white",
              })),
            bc ||
              (bc = i.createElement("path", {
                d: "M467.44 506.8V506.86V509.96V510.11L471.5 504.4L467.44 506.8Z",
                fill: "#EDEEEF",
              })),
            jc ||
              (jc = i.createElement("path", {
                d: "M467.44 510.07V506.76L463.44 504.36L467.44 510.07Z",
                fill: "white",
              })),
            Mc ||
              (Mc = i.createElement("path", {
                d: "M471.5 503.64L467.44 506.07V501.83L471.5 503.64Z",
                fill: "#D5D8DB",
              })),
            Oc ||
              (Oc = i.createElement("path", {
                d: "M467.44 501.79V506.07L463.44 503.68L467.44 501.79Z",
                fill: "#EDEEEF",
              })),
            Zc ||
              (Zc = i.createElement("path", {
                opacity: 0.65,
                d: "M416.08 661.67C420.081 657.669 422.806 652.571 423.91 647.021C425.014 641.471 424.448 635.719 422.282 630.491C420.117 625.263 416.45 620.795 411.745 617.651C407.04 614.507 401.509 612.829 395.85 612.829C390.191 612.829 384.66 614.507 379.955 617.651C375.25 620.795 371.583 625.263 369.418 630.491C367.252 635.719 366.686 641.471 367.79 647.021C368.894 652.571 371.619 657.669 375.62 661.67C380.985 667.035 388.262 670.049 395.85 670.049C403.438 670.049 410.715 667.035 416.08 661.67Z",
                fill: "url(#paint25_radial_61_2)",
              })),
            gc ||
              (gc = i.createElement("path", {
                d: "M412.54 658.13C415.842 654.828 418.091 650.621 419.002 646.041C419.912 641.461 419.445 636.714 417.658 632.4C415.871 628.086 412.845 624.399 408.962 621.804C405.079 619.21 400.515 617.825 395.845 617.825C391.176 617.825 386.611 619.21 382.728 621.804C378.846 624.399 375.819 628.086 374.032 632.4C372.245 636.714 371.778 641.461 372.689 646.041C373.6 650.621 375.848 654.828 379.15 658.13C381.341 660.325 383.944 662.066 386.808 663.254C389.673 664.442 392.744 665.054 395.845 665.054C398.946 665.054 402.017 664.442 404.882 663.254C407.747 662.066 410.349 660.325 412.54 658.13Z",
                fill: "url(#paint26_radial_61_2)",
              })),
            xc ||
              (xc = i.createElement("path", {
                d: "M396.61 660.07C400.299 660.07 403.904 658.976 406.971 656.927C410.038 654.878 412.429 651.965 413.84 648.557C415.252 645.149 415.621 641.399 414.902 637.782C414.182 634.164 412.406 630.841 409.797 628.233C407.189 625.624 403.866 623.848 400.248 623.128C396.631 622.409 392.881 622.778 389.473 624.19C386.065 625.601 383.152 627.992 381.103 631.059C379.054 634.126 377.96 637.731 377.96 641.42C377.96 646.366 379.925 651.11 383.422 654.608C386.92 658.105 391.664 660.07 396.61 660.07Z",
                fill: "url(#paint27_linear_61_2)",
              })),
            wc ||
              (wc = i.createElement("path", {
                d: "M395.09 660.07C398.777 660.06 402.379 658.957 405.44 656.901C408.501 654.845 410.883 651.928 412.287 648.518C413.69 645.108 414.051 641.359 413.324 637.744C412.597 634.129 410.815 630.81 408.203 628.208C405.591 625.605 402.266 623.836 398.648 623.122C395.03 622.409 391.282 622.784 387.878 624.2C384.473 625.616 381.565 628.01 379.52 631.078C377.475 634.147 376.386 637.753 376.39 641.44C376.393 643.892 376.879 646.319 377.82 648.582C378.762 650.846 380.141 652.902 381.877 654.632C383.614 656.363 385.675 657.734 387.942 658.667C390.21 659.6 392.638 660.077 395.09 660.07Z",
                fill: "url(#paint28_linear_61_2)",
              })),
            vc ||
              (vc = i.createElement("path", {
                d: "M395.09 657.14C398.195 657.14 401.231 656.219 403.813 654.494C406.394 652.769 408.407 650.317 409.595 647.448C410.783 644.579 411.094 641.423 410.488 638.377C409.883 635.332 408.387 632.534 406.192 630.338C403.996 628.143 401.199 626.647 398.153 626.042C395.108 625.436 391.951 625.747 389.082 626.935C386.213 628.123 383.761 630.136 382.036 632.718C380.311 635.299 379.39 638.335 379.39 641.44C379.389 643.502 379.794 645.544 380.583 647.45C381.371 649.355 382.527 651.086 383.986 652.544C385.444 654.003 387.175 655.159 389.08 655.948C390.986 656.736 393.028 657.141 395.09 657.14Z",
                fill: "url(#paint29_linear_61_2)",
              })),
            Fc ||
              (Fc = i.createElement("path", {
                d: "M395.09 657.14C398.195 657.14 401.231 656.219 403.813 654.494C406.394 652.769 408.407 650.317 409.595 647.448C410.783 644.579 411.094 641.423 410.488 638.377C409.883 635.332 408.387 632.534 406.192 630.338C403.996 628.143 401.199 626.647 398.153 626.042C395.108 625.436 391.951 625.747 389.082 626.935C386.213 628.123 383.761 630.136 382.036 632.718C380.311 635.299 379.39 638.335 379.39 641.44C379.389 643.502 379.794 645.544 380.583 647.45C381.371 649.355 382.527 651.086 383.986 652.544C385.444 654.003 387.175 655.159 389.08 655.948C390.986 656.736 393.028 657.141 395.09 657.14V657.14Z",
                stroke: "#EFDE64",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            Bc ||
              (Bc = i.createElement("path", {
                d: "M400.75 637.85C400.54 635.85 398.81 635.16 396.59 634.98V632.18H394.89V634.9C394.44 634.9 393.98 634.9 393.53 634.9V632.15H391.82V634.95H390.74H388.39V636.78C388.39 636.78 389.65 636.78 389.63 636.78C389.744 636.761 389.86 636.765 389.972 636.792C390.084 636.82 390.189 636.87 390.28 636.94C390.461 637.085 390.582 637.291 390.62 637.52V640.71V645.18C390.621 645.261 390.6 645.34 390.56 645.41C390.526 645.482 390.479 645.546 390.42 645.6C390.36 645.649 390.292 645.69 390.22 645.72H389.98H388.74L388.42 647.72H391.85V650.55H393.56V647.75H394.92V650.54H396.63V647.71C399.49 647.53 401.5 646.79 401.73 644.1C401.92 641.93 400.9 640.97 399.27 640.6C399.793 640.345 400.217 639.924 400.478 639.404C400.738 638.883 400.82 638.292 400.71 637.72L400.75 637.85ZM398.39 643.92C398.39 646.03 394.77 645.82 393.62 645.82V642.07C394.77 642.07 398.39 641.71 398.39 643.92ZM397.57 638.62C397.57 640.62 394.57 640.35 393.57 640.35V636.95C394.54 636.94 397.56 636.62 397.58 638.62H397.57Z",
                fill: "white",
              })),
            _c ||
              (_c = i.createElement("path", {
                opacity: 0.65,
                d: "M149.06 646.42C150.132 641.743 149.793 636.852 148.085 632.368C146.377 627.884 143.376 624.007 139.464 621.229C135.551 618.45 130.903 616.895 126.106 616.76C121.309 616.625 116.58 617.916 112.517 620.47C108.455 623.024 105.241 626.726 103.283 631.107C101.326 635.488 100.712 640.351 101.519 645.082C102.327 649.812 104.52 654.196 107.82 657.679C111.12 661.163 115.38 663.589 120.06 664.65C126.323 666.073 132.894 664.953 138.331 661.535C143.769 658.117 147.627 652.681 149.06 646.42Z",
                fill: "url(#paint30_radial_61_2)",
              })),
            kc ||
              (kc = i.createElement("path", {
                d: "M144.93 645.5C145.817 641.646 145.541 637.616 144.138 633.919C142.735 630.221 140.267 627.023 137.047 624.728C133.827 622.433 129.998 621.144 126.045 621.024C122.092 620.904 118.193 621.959 114.839 624.055C111.486 626.151 108.829 629.194 107.205 632.8C105.58 636.405 105.061 640.411 105.713 644.312C106.365 648.212 108.158 651.832 110.867 654.713C113.575 657.595 117.077 659.608 120.93 660.5C123.491 661.093 126.144 661.175 128.736 660.741C131.329 660.308 133.81 659.368 136.039 657.975C138.268 656.582 140.201 654.763 141.726 652.622C143.252 650.482 144.341 648.062 144.93 645.5Z",
                fill: "url(#paint31_radial_61_2)",
              })),
            Vc ||
              (Vc = i.createElement("path", {
                d: "M126.07 656.82C129.197 656.82 132.254 655.893 134.854 654.156C137.454 652.418 139.48 649.949 140.677 647.06C141.873 644.171 142.186 640.993 141.576 637.926C140.966 634.859 139.46 632.042 137.249 629.831C135.038 627.62 132.221 626.114 129.154 625.504C126.088 624.894 122.909 625.207 120.02 626.403C117.131 627.6 114.662 629.627 112.924 632.226C111.187 634.826 110.26 637.883 110.26 641.01C110.26 645.203 111.926 649.224 114.891 652.189C117.856 655.154 121.877 656.82 126.07 656.82Z",
                fill: "url(#paint32_linear_61_2)",
              })),
            Sc ||
              (Sc = i.createElement("path", {
                d: "M124.78 656.82C127.907 656.82 130.964 655.893 133.564 654.156C136.163 652.418 138.19 649.949 139.387 647.06C140.583 644.171 140.896 640.993 140.286 637.926C139.676 634.859 138.17 632.042 135.959 629.831C133.748 627.62 130.931 626.114 127.864 625.504C124.798 624.894 121.619 625.207 118.73 626.403C115.841 627.6 113.372 629.627 111.634 632.226C109.897 634.826 108.97 637.883 108.97 641.01C108.97 645.203 110.636 649.224 113.601 652.189C116.566 655.154 120.587 656.82 124.78 656.82Z",
                fill: "url(#paint33_linear_61_2)",
              })),
            Hc ||
              (Hc = i.createElement("path", {
                d: "M124.78 654.32C127.412 654.32 129.986 653.539 132.175 652.077C134.363 650.614 136.069 648.536 137.077 646.104C138.084 643.671 138.348 640.995 137.834 638.413C137.321 635.831 136.053 633.46 134.192 631.598C132.33 629.737 129.959 628.469 127.377 627.956C124.795 627.442 122.119 627.706 119.686 628.713C117.254 629.721 115.176 631.427 113.713 633.615C112.251 635.804 111.47 638.378 111.47 641.01C111.469 642.758 111.812 644.49 112.48 646.105C113.149 647.721 114.129 649.188 115.365 650.425C116.602 651.661 118.069 652.641 119.685 653.31C121.3 653.978 123.032 654.321 124.78 654.32Z",
                fill: "url(#paint34_linear_61_2)",
              })),
            Nc ||
              (Nc = i.createElement("path", {
                d: "M124.78 654.32C127.412 654.32 129.986 653.539 132.175 652.077C134.363 650.614 136.069 648.536 137.077 646.104C138.084 643.671 138.348 640.995 137.834 638.413C137.321 635.831 136.053 633.46 134.192 631.598C132.33 629.737 129.959 628.469 127.377 627.956C124.795 627.442 122.119 627.706 119.686 628.713C117.254 629.721 115.176 631.427 113.713 633.615C112.251 635.804 111.47 638.378 111.47 641.01C111.469 642.758 111.812 644.49 112.48 646.105C113.149 647.721 114.129 649.188 115.365 650.425C116.602 651.661 118.069 652.641 119.685 653.31C121.3 653.978 123.032 654.321 124.78 654.32V654.32Z",
                stroke: "#B195F4",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            Dc ||
              (Dc = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M123.89 642.74C123.2 642.746 122.524 642.544 121.95 642.16C121.52 641.872 121.158 641.493 120.892 641.049C120.625 640.605 120.46 640.107 120.409 639.592C120.357 639.077 120.42 638.557 120.593 638.069C120.766 637.581 121.045 637.138 121.41 636.77C121.901 636.28 122.525 635.947 123.205 635.812C123.885 635.676 124.589 635.745 125.23 636.01C125.866 636.28 126.411 636.728 126.8 637.3C127.183 637.878 127.388 638.556 127.39 639.25C127.396 639.708 127.311 640.162 127.14 640.586C126.968 641.01 126.713 641.396 126.39 641.72C126.066 642.049 125.678 642.308 125.25 642.48C124.827 642.661 124.37 642.749 123.91 642.74H123.89ZM123.89 634C124.936 633.993 125.96 634.298 126.831 634.877C127.703 635.456 128.381 636.282 128.78 637.249C129.178 638.216 129.279 639.28 129.069 640.305C128.859 641.329 128.347 642.268 127.6 643C126.865 643.733 125.929 644.231 124.91 644.43C123.893 644.632 122.839 644.528 121.882 644.131C120.924 643.734 120.106 643.062 119.53 642.2C119.004 641.41 118.702 640.492 118.656 639.544C118.61 638.596 118.822 637.653 119.269 636.816C119.717 635.979 120.382 635.278 121.196 634.79C122.01 634.301 122.941 634.042 123.89 634.04V634ZM128.89 644.77C128.973 644.848 129.038 644.944 129.08 645.05C129.128 645.153 129.152 645.266 129.15 645.38C129.152 645.497 129.128 645.613 129.08 645.72C129.036 645.825 128.971 645.92 128.89 646L125.39 649.5C125.221 649.648 125.004 649.729 124.78 649.73C124.554 649.723 124.34 649.63 124.18 649.47C124.026 649.308 123.94 649.093 123.94 648.87C123.94 648.647 124.026 648.432 124.18 648.27L127.68 644.77C127.758 644.684 127.853 644.616 127.96 644.57C128.065 644.527 128.177 644.503 128.29 644.5C128.406 644.503 128.522 644.527 128.63 644.57C128.735 644.618 128.83 644.686 128.91 644.77H128.89ZM130.89 634.87C130.89 635.045 130.837 635.215 130.74 635.36C130.642 635.5 130.507 635.611 130.35 635.68C130.184 635.73 130.006 635.73 129.84 635.68C129.672 635.647 129.518 635.563 129.4 635.44C129.273 635.32 129.189 635.162 129.16 634.99C129.121 634.822 129.139 634.647 129.21 634.49C129.27 634.328 129.383 634.19 129.53 634.1C129.671 634.002 129.838 633.949 130.01 633.95C130.125 633.949 130.239 633.97 130.346 634.013C130.453 634.056 130.55 634.12 130.632 634.201C130.713 634.282 130.778 634.379 130.823 634.485C130.867 634.591 130.89 634.705 130.89 634.82V634.87Z",
                fill: "white",
              })),
            Ac ||
              (Ac = i.createElement("path", {
                opacity: 0.65,
                d: "M67.39 505.54C68.19 501.884 67.8878 498.073 66.5217 494.589C65.1556 491.105 62.7869 488.104 59.7153 485.967C56.6436 483.829 53.007 482.65 49.2654 482.579C45.5237 482.508 41.8451 483.549 38.6948 485.569C35.5445 487.589 33.0639 490.498 31.567 493.927C30.07 497.357 29.6238 501.154 30.2848 504.838C30.9458 508.521 32.6844 511.926 35.2805 514.621C37.8767 517.316 41.2139 519.181 44.87 519.98C49.7712 521.05 54.8968 520.131 59.1199 517.423C63.3429 514.715 66.3177 510.441 67.39 505.54Z",
                fill: "url(#paint35_radial_61_2)",
              })),
            Pc ||
              (Pc = i.createElement("path", {
                d: "M64.8099 505.21C65.6143 502.215 65.5121 499.048 64.5164 496.11C63.5208 493.173 61.6762 490.597 59.2162 488.708C56.7562 486.818 53.7912 485.701 50.6963 485.498C47.6013 485.294 44.5155 486.013 41.8291 487.563C39.1427 489.113 36.9764 491.425 35.6042 494.207C34.232 496.989 33.7157 500.115 34.1204 503.19C34.5251 506.265 35.8328 509.151 37.8779 511.483C39.9231 513.815 42.6139 515.488 45.6099 516.29C49.6253 517.365 53.9033 516.802 57.5036 514.725C61.104 512.647 63.732 509.225 64.8099 505.21Z",
                fill: "url(#paint36_radial_61_2)",
              })),
            Tc ||
              (Tc = i.createElement("path", {
                d: "M49.39 513.83C51.8307 513.83 54.2165 513.106 56.2458 511.75C58.2751 510.394 59.8567 508.467 60.7907 506.212C61.7247 503.957 61.9691 501.476 61.4929 499.083C61.0168 496.689 59.8415 494.49 58.1157 492.764C56.39 491.038 54.1912 489.863 51.7975 489.387C49.4037 488.911 46.9226 489.155 44.6677 490.089C42.4129 491.023 40.4856 492.605 39.1297 494.634C37.7738 496.664 37.0501 499.049 37.0501 501.49C37.0487 503.111 37.367 504.716 37.9867 506.214C38.6064 507.712 39.5153 509.072 40.6614 510.219C41.8076 511.365 43.1684 512.274 44.6662 512.893C46.1639 513.513 47.7692 513.831 49.39 513.83Z",
                fill: "url(#paint37_linear_61_2)",
              })),
            Uc ||
              (Uc = i.createElement("path", {
                d: "M48.3901 513.83C50.8311 513.832 53.2179 513.11 55.2485 511.755C57.2791 510.4 58.8624 508.474 59.7979 506.219C60.7334 503.965 60.9792 501.483 60.5042 499.089C60.0292 496.694 58.8547 494.495 57.1293 492.768C55.4039 491.041 53.2052 489.865 50.8112 489.388C48.4172 488.911 45.9355 489.155 43.6801 490.088C41.4246 491.022 39.4968 492.604 38.1404 494.633C36.784 496.663 36.0601 499.049 36.0601 501.49C36.0587 503.11 36.3767 504.714 36.9958 506.212C37.6148 507.709 38.5228 509.069 39.6679 510.215C40.813 511.361 42.1727 512.27 43.6693 512.891C45.1659 513.511 46.77 513.83 48.3901 513.83Z",
                fill: "url(#paint38_linear_61_2)",
              })),
            Ic ||
              (Ic = i.createElement("path", {
                d: "M48.39 511.87C50.443 511.87 52.4498 511.261 54.1568 510.121C55.8638 508.98 57.1942 507.359 57.9799 505.462C58.7655 503.566 58.9711 501.478 58.5706 499.465C58.17 497.451 57.1814 495.602 55.7298 494.15C54.2781 492.699 52.4286 491.71 50.415 491.309C48.4015 490.909 46.3145 491.114 44.4178 491.9C42.5211 492.686 40.8999 494.016 39.7594 495.723C38.6188 497.43 38.01 499.437 38.01 501.49C38.01 504.243 39.1036 506.883 41.0502 508.83C42.9969 510.776 45.6371 511.87 48.39 511.87Z",
                fill: "url(#paint39_linear_61_2)",
              })),
            Gc ||
              (Gc = i.createElement("path", {
                d: "M48.39 511.87C50.443 511.87 52.4498 511.261 54.1568 510.121C55.8638 508.98 57.1942 507.359 57.9799 505.462C58.7655 503.566 58.9711 501.478 58.5706 499.465C58.17 497.451 57.1814 495.602 55.7298 494.15C54.2781 492.699 52.4286 491.71 50.415 491.309C48.4015 490.909 46.3145 491.114 44.4178 491.9C42.5211 492.686 40.8999 494.016 39.7594 495.723C38.6188 497.43 38.01 499.437 38.01 501.49C38.01 504.243 39.1036 506.883 41.0502 508.83C42.9969 510.776 45.6371 511.87 48.39 511.87Z",
                stroke: "#EFABE2",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            Rc ||
              (Rc = i.createElement("path", {
                d: "M45.6601 500.37L48.4001 497.64L51.1401 500.37L52.7401 498.79L48.3901 494.45L44.0501 498.79L45.6401 500.38L45.6601 500.37ZM41.3601 501.5L42.9501 499.91L44.5401 501.5L42.9601 503.07L41.3601 501.5ZM45.6601 502.63L48.4001 505.36L51.1401 502.62L52.7301 504.21L48.3901 508.54L44.0601 504.21L45.6601 502.62V502.63ZM52.2601 501.5L53.8601 499.91L55.4501 501.5L53.8601 503.07L52.2601 501.5Z",
                fill: "white",
              })),
            Wc ||
              (Wc = i.createElement("path", {
                d: "M50.01 501.5L48.39 499.88L47.2 501.08L47.06 501.21L46.78 501.49L48.39 503.07L50 501.45",
                fill: "white",
              })),
            zc ||
              (zc = i.createElement("path", {
                opacity: 0.65,
                d: "M120.08 387.67C125.662 382.087 129.464 374.974 131.003 367.23C132.543 359.487 131.752 351.46 128.731 344.166C125.709 336.872 120.592 330.638 114.028 326.252C107.463 321.866 99.7451 319.525 91.85 319.525C83.9548 319.525 76.2369 321.866 69.6723 326.252C63.1076 330.638 57.9909 336.872 54.9693 344.166C51.9477 351.46 51.1567 359.487 52.6965 367.23C54.2363 374.974 58.0377 382.087 63.6199 387.67C71.1079 395.155 81.2622 399.361 91.85 399.361C102.438 399.361 112.592 395.155 120.08 387.67Z",
                fill: "url(#paint40_radial_61_2)",
              })),
            Yc ||
              (Yc = i.createElement("path", {
                d: "M115.15 382.74C119.775 378.129 122.928 372.249 124.209 365.845C125.49 359.441 124.842 352.801 122.347 346.765C119.853 340.729 115.623 335.57 110.194 331.939C104.765 328.309 98.3811 326.371 91.8501 326.371C85.3192 326.371 78.9351 328.309 73.5062 331.939C68.0772 335.57 63.8476 340.729 61.3528 346.765C58.8579 352.801 58.2101 359.441 59.4914 365.845C60.7726 372.249 63.9252 378.129 68.5501 382.74C74.736 388.908 83.1149 392.371 91.8501 392.371C100.585 392.371 108.964 388.908 115.15 382.74Z",
                fill: "url(#paint41_radial_61_2)",
              })),
            qc ||
              (qc = i.createElement("path", {
                d: "M92.9099 385.47C98.0522 385.47 103.079 383.945 107.355 381.088C111.63 378.231 114.963 374.171 116.931 369.42C118.899 364.669 119.414 359.441 118.41 354.398C117.407 349.354 114.931 344.721 111.295 341.085C107.659 337.449 103.026 334.973 97.9823 333.97C92.9387 332.966 87.711 333.481 82.9601 335.449C78.2093 337.417 74.1486 340.749 71.2917 345.025C68.4348 349.301 66.9099 354.328 66.9099 359.47C66.9099 366.366 69.6492 372.979 74.5251 377.855C79.4011 382.731 86.0143 385.47 92.9099 385.47Z",
                fill: "url(#paint42_linear_61_2)",
              })),
            Qc ||
              (Qc = i.createElement("path", {
                d: "M90.79 385.47C95.9324 385.47 100.959 383.945 105.235 381.088C109.511 378.231 112.843 374.171 114.811 369.42C116.779 364.669 117.294 359.441 116.29 354.398C115.287 349.354 112.811 344.721 109.175 341.085C105.539 337.449 100.906 334.973 95.8624 333.97C90.8189 332.966 85.5912 333.481 80.8403 335.449C76.0894 337.417 72.0287 340.749 69.1718 345.025C66.3149 349.301 64.79 354.328 64.79 359.47C64.79 366.366 67.5293 372.979 72.4053 377.855C77.2812 382.731 83.8944 385.47 90.79 385.47Z",
                fill: "url(#paint43_linear_61_2)",
              })),
            Jc ||
              (Jc = i.createElement("path", {
                d: "M90.7899 381.35C95.1233 381.35 99.3593 380.065 102.962 377.658C106.565 375.25 109.374 371.828 111.032 367.825C112.69 363.821 113.124 359.416 112.279 355.166C111.433 350.916 109.347 347.012 106.283 343.947C103.218 340.883 99.3144 338.796 95.0643 337.951C90.8142 337.106 86.4088 337.54 82.4053 339.198C78.4018 340.856 74.9799 343.664 72.5724 347.267C70.1649 350.871 68.8799 355.107 68.8799 359.44C68.8799 365.251 71.1882 370.824 75.2972 374.933C79.4061 379.042 84.979 381.35 90.7899 381.35Z",
                fill: "url(#paint44_linear_61_2)",
              })),
            Kc ||
              (Kc = i.createElement("path", {
                d: "M90.7899 381.35C95.1233 381.35 99.3593 380.065 102.962 377.658C106.565 375.25 109.374 371.828 111.032 367.825C112.69 363.821 113.124 359.416 112.279 355.166C111.433 350.916 109.347 347.012 106.283 343.947C103.218 340.883 99.3144 338.796 95.0643 337.951C90.8142 337.106 86.4088 337.54 82.4053 339.198C78.4018 340.856 74.9799 343.664 72.5724 347.267C70.1649 350.871 68.8799 355.107 68.8799 359.44C68.8799 365.251 71.1882 370.824 75.2972 374.933C79.4061 379.042 84.979 381.35 90.7899 381.35V381.35Z",
                stroke: "#FCA57E",
                strokeWidth: 4,
                strokeMiterlimit: 10,
              })),
            Xc ||
              (Xc = i.createElement("path", {
                d: "M97.6201 348.3C97.9746 348.315 98.3247 348.217 98.6201 348.02C98.8983 347.839 99.1146 347.577 99.2401 347.27C99.3762 346.955 99.4145 346.607 99.3501 346.27C99.2894 345.94 99.1288 345.636 98.8901 345.4C98.6572 345.16 98.3575 344.997 98.0301 344.93C97.6942 344.864 97.3462 344.898 97.0301 345.03C96.7216 345.158 96.4574 345.374 96.2701 345.65C96.088 345.93 95.9908 346.256 95.9901 346.59C95.9926 347.031 96.1677 347.454 96.4779 347.768C96.7881 348.082 97.2088 348.262 97.6501 348.27L97.6201 348.3ZM98.1101 352.68C98.2962 352.676 98.4797 352.635 98.6501 352.56C98.822 352.487 98.9783 352.382 99.1101 352.25C99.2392 352.118 99.3412 351.962 99.4101 351.79C99.4952 351.575 99.5269 351.343 99.5025 351.113C99.4781 350.883 99.3984 350.662 99.2701 350.47C99.1127 350.24 98.8897 350.062 98.6301 349.96C98.3718 349.862 98.0913 349.838 97.8201 349.89C97.5493 349.953 97.3005 350.087 97.1001 350.28C96.9095 350.479 96.7809 350.729 96.7301 351C96.6707 351.272 96.6987 351.555 96.8101 351.81C96.9169 352.067 97.098 352.286 97.3301 352.44C97.562 352.593 97.8325 352.676 98.1101 352.68ZM101.97 353.22C102.254 353.226 102.532 353.145 102.769 352.99C103.007 352.835 103.192 352.612 103.3 352.35C103.409 352.091 103.441 351.806 103.39 351.53C103.338 351.253 103.202 350.998 103 350.8C102.803 350.595 102.549 350.456 102.27 350.4C101.995 350.341 101.708 350.369 101.45 350.48C101.186 350.584 100.962 350.77 100.81 351.01C100.682 351.204 100.602 351.426 100.578 351.658C100.553 351.889 100.585 352.123 100.67 352.34C100.739 352.512 100.841 352.668 100.97 352.8C101.102 352.932 101.258 353.037 101.43 353.11C101.601 353.182 101.785 353.219 101.97 353.22ZM101.5 356.96C101.741 356.968 101.978 356.902 102.18 356.77C102.382 356.637 102.541 356.45 102.64 356.23C102.736 356.006 102.764 355.759 102.72 355.52C102.672 355.286 102.557 355.071 102.39 354.9C102.224 354.725 102.007 354.606 101.77 354.56C101.533 354.51 101.286 354.53 101.06 354.62C100.836 354.711 100.644 354.867 100.51 355.069C100.376 355.271 100.307 355.508 100.31 355.75C100.305 355.907 100.332 356.062 100.389 356.208C100.446 356.354 100.531 356.488 100.64 356.6C100.86 356.832 101.161 356.968 101.48 356.98L101.5 356.96ZM104.59 358.18C104.831 358.18 105.067 358.11 105.27 357.98C105.479 357.851 105.64 357.658 105.73 357.43C105.826 357.21 105.853 356.966 105.81 356.73C105.764 356.492 105.649 356.273 105.48 356.1C105.31 355.924 105.09 355.805 104.85 355.76C104.613 355.71 104.366 355.73 104.14 355.82C103.92 355.918 103.73 356.073 103.59 356.27C103.457 356.472 103.384 356.708 103.38 356.95C103.378 357.27 103.5 357.578 103.72 357.81C103.829 357.927 103.961 358.021 104.107 358.086C104.253 358.151 104.41 358.187 104.57 358.19L104.59 358.18ZM97.5901 356.48C97.755 356.478 97.9179 356.444 98.0701 356.38C98.2175 356.318 98.3504 356.226 98.4601 356.11C98.5788 355.999 98.6711 355.862 98.7301 355.71C98.8524 355.409 98.8507 355.072 98.7251 354.772C98.5996 354.472 98.3605 354.234 98.0601 354.11C97.8448 354.035 97.6128 354.021 97.3901 354.07C97.1485 354.111 96.9272 354.231 96.7601 354.41C96.5897 354.578 96.4746 354.795 96.4301 355.03C96.3827 355.268 96.4071 355.515 96.5001 355.74C96.5888 355.966 96.7462 356.158 96.9501 356.29C97.1521 356.423 97.388 356.496 97.6301 356.5L97.5901 356.48ZM96.5101 359.48C96.7872 359.48 97.053 359.37 97.249 359.174C97.445 358.978 97.5551 358.712 97.5551 358.435C97.5551 358.158 97.445 357.892 97.249 357.696C97.053 357.5 96.7872 357.39 96.5101 357.39C96.2329 357.39 95.9671 357.5 95.7711 357.696C95.5752 357.892 95.4651 358.158 95.4651 358.435C95.4651 358.712 95.5752 358.978 95.7711 359.174C95.9671 359.37 96.2329 359.48 96.5101 359.48ZM100.37 360.02C100.504 360.02 100.637 359.993 100.76 359.94C100.888 359.888 101.004 359.809 101.1 359.71C101.19 359.612 101.264 359.501 101.32 359.38C101.368 359.252 101.392 359.117 101.39 358.98C101.388 358.78 101.325 358.584 101.21 358.42C101.095 358.255 100.936 358.127 100.75 358.05C100.557 357.995 100.353 357.995 100.16 358.05C99.9661 358.091 99.7885 358.188 99.6501 358.33C99.5065 358.471 99.4089 358.652 99.3701 358.85C99.3314 359.048 99.3488 359.252 99.4201 359.44C99.5024 359.622 99.6297 359.781 99.7901 359.9C99.9599 360.01 100.158 360.069 100.36 360.07L100.37 360.02ZM103.45 361.23C103.659 361.229 103.863 361.171 104.04 361.06C104.211 360.943 104.347 360.78 104.43 360.59C104.51 360.397 104.531 360.185 104.49 359.98C104.455 359.775 104.357 359.587 104.21 359.44C104.063 359.292 103.875 359.19 103.67 359.149C103.465 359.109 103.253 359.13 103.06 359.21C102.867 359.288 102.702 359.424 102.59 359.6C102.475 359.771 102.416 359.974 102.42 360.18C102.412 360.317 102.436 360.454 102.49 360.58C102.542 360.706 102.617 360.821 102.71 360.92C102.806 361.019 102.922 361.098 103.05 361.15C103.188 361.198 103.334 361.219 103.48 361.21L103.45 361.23ZM101.93 363.49C102.105 363.49 102.275 363.438 102.42 363.34C102.568 363.247 102.683 363.111 102.75 362.95C102.821 362.79 102.839 362.611 102.8 362.44C102.771 362.268 102.687 362.11 102.56 361.99C102.44 361.862 102.283 361.774 102.11 361.74C101.939 361.712 101.763 361.729 101.6 361.79C101.441 361.861 101.306 361.976 101.21 362.121C101.114 362.266 101.062 362.436 101.06 362.61C101.064 362.827 101.15 363.034 101.3 363.19C101.455 363.347 101.661 363.442 101.88 363.46L101.93 363.49ZM98.8301 362.3C99.0111 362.301 99.1885 362.249 99.3401 362.15C99.491 362.054 99.6095 361.915 99.6801 361.75C99.7516 361.586 99.7691 361.404 99.7301 361.23C99.7019 361.052 99.6179 360.887 99.4901 360.76C99.3635 360.635 99.204 360.548 99.0301 360.51C98.8555 360.476 98.6749 360.493 98.5101 360.56C98.3432 360.626 98.2003 360.741 98.1001 360.89C98.0023 361.038 97.9502 361.212 97.9501 361.39C97.9498 361.502 97.9718 361.612 98.0147 361.715C98.0576 361.818 98.1206 361.912 98.2001 361.99C98.2728 362.073 98.3617 362.141 98.4614 362.189C98.5611 362.237 98.6695 362.265 98.7801 362.27L98.8301 362.3ZM94.9801 361.75C95.097 361.75 95.2128 361.727 95.3209 361.683C95.429 361.638 95.5273 361.573 95.6101 361.49C95.6931 361.408 95.7589 361.309 95.8035 361.201C95.8482 361.093 95.8708 360.977 95.8701 360.86C95.871 360.741 95.8485 360.624 95.8039 360.514C95.7593 360.404 95.6934 360.304 95.6101 360.22C95.4401 360.054 95.2123 359.962 94.9751 359.962C94.7378 359.962 94.51 360.054 94.3401 360.22C94.2567 360.304 94.1908 360.404 94.1462 360.514C94.1016 360.624 94.0791 360.741 94.0801 360.86C94.0793 360.977 94.1019 361.093 94.1466 361.201C94.1912 361.309 94.257 361.408 94.3401 361.49C94.4296 361.573 94.5351 361.638 94.6503 361.679C94.7655 361.72 94.8879 361.738 95.0101 361.73L94.9801 361.75ZM97.1501 363.87C97.246 363.864 97.3398 363.839 97.4257 363.796C97.5117 363.753 97.588 363.693 97.6501 363.62C97.771 363.482 97.8377 363.304 97.8377 363.12C97.8377 362.936 97.771 362.758 97.6501 362.62C97.5189 362.479 97.3414 362.391 97.1501 362.37C97.0465 362.374 96.9447 362.398 96.8501 362.44C96.757 362.476 96.6721 362.531 96.6001 362.6C96.5346 362.675 96.4807 362.759 96.4401 362.85C96.4009 362.945 96.3806 363.047 96.3801 363.15C96.3798 363.25 96.4002 363.349 96.4401 363.44C96.4716 363.535 96.5266 363.621 96.6001 363.69C96.67 363.764 96.7553 363.822 96.8501 363.86C96.9415 363.9 97.0403 363.92 97.1401 363.92L97.1501 363.87ZM100.24 365.08C100.436 365.063 100.617 364.973 100.751 364.829C100.884 364.685 100.958 364.496 100.96 364.3C100.962 364.1 100.887 363.906 100.75 363.76C100.615 363.619 100.434 363.531 100.24 363.51C100.043 363.53 99.8589 363.619 99.7201 363.76C99.5903 363.91 99.5193 364.102 99.5201 364.3C99.518 364.496 99.5893 364.685 99.7201 364.83C99.8538 364.978 100.041 365.068 100.24 365.08ZM98.5001 365.99C98.6232 365.986 98.7435 365.952 98.8501 365.89C98.95 365.819 99.0293 365.722 99.0801 365.61C99.1151 365.493 99.1151 365.367 99.0801 365.25C99.0598 365.133 99.0039 365.024 98.9201 364.94C98.8319 364.852 98.7212 364.79 98.6001 364.76C98.4826 364.725 98.3575 364.725 98.2401 364.76C98.1259 364.807 98.0284 364.887 97.9601 364.99C97.8927 365.09 97.8578 365.209 97.8601 365.33C97.8598 365.402 97.8738 365.474 97.9012 365.541C97.9287 365.608 97.9691 365.669 98.0201 365.72C98.1163 365.828 98.2472 365.899 98.3901 365.92L98.5001 365.99ZM96.8701 366.48C97.0153 366.477 97.1542 366.42 97.2601 366.32C97.3579 366.218 97.4118 366.081 97.4101 365.94C97.4122 365.868 97.4001 365.797 97.3743 365.73C97.3486 365.663 97.3097 365.602 97.2601 365.55C97.1542 365.451 97.0153 365.394 96.8701 365.39C96.7274 365.392 96.5912 365.449 96.4901 365.55C96.4371 365.6 96.3955 365.66 96.3679 365.728C96.3403 365.795 96.3274 365.867 96.3301 365.94C96.3288 366.011 96.3424 366.081 96.3699 366.147C96.3975 366.212 96.4384 366.271 96.4901 366.32C96.5454 366.37 96.6102 366.408 96.6807 366.432C96.7512 366.456 96.8258 366.466 96.9001 366.46L96.8701 366.48ZM95.4301 364.85C95.5613 364.849 95.6895 364.811 95.8001 364.74C95.9108 364.669 95.9975 364.566 96.0492 364.444C96.1009 364.323 96.1151 364.189 96.0901 364.06C96.0679 363.929 96.0061 363.808 95.9132 363.713C95.8202 363.619 95.7005 363.555 95.5701 363.53C95.4431 363.49 95.307 363.49 95.1801 363.53C95.0589 363.584 94.9551 363.671 94.8801 363.78C94.8094 363.891 94.7713 364.019 94.7701 364.15C94.7711 364.308 94.8278 364.46 94.9301 364.58C95.0306 364.702 95.1736 364.78 95.3301 364.8L95.4301 364.85ZM93.3001 363.32C93.4566 363.323 93.6103 363.278 93.7401 363.19C93.8695 363.109 93.9707 362.991 94.0301 362.85C94.0862 362.707 94.1034 362.552 94.0801 362.4C94.0535 362.248 93.98 362.108 93.8701 362C93.7613 361.889 93.6221 361.812 93.4701 361.78C93.3234 361.735 93.1667 361.735 93.0201 361.78C92.8784 361.842 92.7571 361.942 92.6701 362.07C92.5838 362.197 92.5384 362.347 92.5401 362.5C92.5401 362.687 92.6075 362.868 92.7301 363.01C92.8521 363.152 93.0239 363.241 93.2101 363.26L93.3001 363.32ZM99.5901 373.04C99.9426 373.062 100.293 372.971 100.59 372.78C100.869 372.599 101.091 372.342 101.23 372.04C101.365 371.725 101.403 371.377 101.34 371.04C101.283 370.711 101.126 370.407 100.89 370.17C100.657 369.93 100.357 369.767 100.03 369.7C99.6956 369.623 99.3454 369.655 99.0301 369.79C98.7177 369.911 98.4517 370.128 98.2701 370.41C98.0789 370.686 97.9776 371.014 97.9801 371.35C97.983 371.785 98.1509 372.204 98.4501 372.52C98.7576 372.83 99.1733 373.01 99.6101 373.02L99.5901 373.04ZM95.3901 370.9C95.6659 370.904 95.937 370.828 96.1701 370.68C96.4047 370.529 96.5865 370.309 96.6901 370.05C96.7995 369.798 96.8309 369.52 96.7801 369.25C96.7333 368.978 96.6041 368.727 96.4101 368.53C96.215 368.33 95.964 368.194 95.6901 368.14C95.4191 368.083 95.1372 368.107 94.8801 368.21C94.6263 368.322 94.4083 368.502 94.2501 368.73C94.0716 368.987 93.9879 369.298 94.0135 369.61C94.039 369.922 94.1721 370.215 94.3901 370.44C94.6221 370.699 94.9438 370.86 95.2901 370.89L95.3901 370.9ZM93.0001 373.97C93.2807 373.975 93.5562 373.895 93.7901 373.74C94.0603 373.591 94.2718 373.355 94.3901 373.07C94.4997 372.815 94.531 372.533 94.4801 372.26C94.4277 371.985 94.2955 371.731 94.1001 371.53C93.9028 371.331 93.6531 371.193 93.3801 371.13C93.1046 371.081 92.8208 371.108 92.5601 371.21C92.3003 371.317 92.0777 371.498 91.9201 371.73C91.7918 371.922 91.712 372.143 91.6876 372.373C91.6632 372.603 91.695 372.835 91.7801 373.05C91.8464 373.223 91.9487 373.38 92.0801 373.51C92.2081 373.642 92.361 373.747 92.5301 373.82C92.689 373.902 92.8621 373.953 93.0401 373.97H93.0001ZM92.2801 368.32C92.4378 368.312 92.5932 368.278 92.7401 368.22C92.889 368.161 93.0224 368.069 93.1301 367.95C93.2424 367.839 93.3308 367.706 93.3901 367.56C93.4496 367.41 93.4801 367.251 93.4801 367.09C93.4801 366.932 93.4495 366.776 93.3901 366.63C93.3308 366.484 93.2424 366.351 93.1301 366.24C93.0224 366.121 92.889 366.029 92.7401 365.97C92.594 365.911 92.4378 365.88 92.2801 365.88C92.1191 365.88 91.9596 365.911 91.8101 365.97C91.6626 366.032 91.5297 366.124 91.4201 366.24C91.3078 366.351 91.2193 366.484 91.1601 366.63C91.1006 366.776 91.07 366.932 91.0701 367.09C91.0709 367.411 91.1964 367.72 91.4201 367.95C91.6491 368.178 91.9567 368.311 92.2801 368.32ZM89.8901 371.42C90.1325 371.429 90.3713 371.359 90.5701 371.22C90.771 371.089 90.9279 370.901 91.0201 370.68C91.1156 370.46 91.1434 370.216 91.1001 369.98C91.0539 369.742 90.9392 369.523 90.7701 369.35C90.5974 369.178 90.3785 369.06 90.1401 369.01C89.9047 368.968 89.6624 368.992 89.4401 369.08C89.2157 369.171 89.024 369.327 88.8901 369.529C88.7563 369.731 88.6865 369.968 88.6901 370.21C88.689 370.368 88.7196 370.524 88.7801 370.67C88.8346 370.819 88.9237 370.952 89.0401 371.06C89.1478 371.179 89.2812 371.271 89.4301 371.33C89.5758 371.39 89.7323 371.421 89.8901 371.42ZM87.3901 373.53C87.6309 373.538 87.8684 373.472 88.0701 373.34C88.271 373.209 88.4279 373.021 88.5201 372.8C88.6156 372.58 88.6434 372.336 88.6001 372.1C88.5539 371.862 88.4392 371.643 88.2701 371.47C88.1033 371.298 87.8863 371.182 87.6501 371.14C87.416 371.09 87.1722 371.111 86.9501 371.2C86.7296 371.298 86.5395 371.453 86.4001 371.65C86.2694 371.849 86.1999 372.082 86.2001 372.32C86.199 372.478 86.2296 372.634 86.2901 372.78C86.3479 372.928 86.4327 373.063 86.5401 373.18C86.6545 373.288 86.7864 373.376 86.9301 373.44C87.0761 373.499 87.2324 373.53 87.3901 373.53ZM85.2201 370.79C85.4258 370.791 85.6273 370.732 85.8001 370.62C85.9752 370.511 86.1124 370.351 86.1929 370.161C86.2735 369.972 86.2935 369.762 86.2501 369.56C86.2102 369.36 86.1129 369.176 85.9701 369.03C85.8275 368.881 85.6424 368.78 85.4401 368.74C85.2353 368.699 85.0229 368.72 84.8301 368.8C84.645 368.887 84.4863 369.022 84.3701 369.19C84.2643 369.339 84.2011 369.513 84.1874 369.695C84.1737 369.877 84.2101 370.059 84.2924 370.222C84.3748 370.385 84.5002 370.522 84.6548 370.618C84.8095 370.715 84.9877 370.767 85.1701 370.77L85.2201 370.79ZM87.8001 368.67C88.0746 368.67 88.3378 368.561 88.5319 368.367C88.726 368.173 88.8351 367.91 88.8351 367.635C88.8351 367.361 88.726 367.097 88.5319 366.903C88.3378 366.709 88.0746 366.6 87.8001 366.6C87.539 366.617 87.2948 366.735 87.1201 366.93C86.9338 367.117 86.8293 367.371 86.8293 367.635C86.8293 367.899 86.9338 368.153 87.1201 368.34C87.2948 368.535 87.539 368.653 87.8001 368.67ZM90.2101 365.56C90.3439 365.558 90.4761 365.53 90.6001 365.48C90.7254 365.428 90.8379 365.35 90.9301 365.25C91.0268 365.158 91.1019 365.045 91.1501 364.92C91.2014 364.793 91.2286 364.657 91.2301 364.52C91.2301 364.255 91.1247 364 90.9372 363.813C90.7496 363.625 90.4953 363.52 90.2301 363.52C89.9572 363.522 89.6957 363.63 89.5001 363.82C89.4062 363.915 89.3322 364.027 89.2823 364.151C89.2325 364.274 89.208 364.407 89.2101 364.54C89.2117 364.798 89.3077 365.047 89.4801 365.24C89.6565 365.431 89.9004 365.546 90.1601 365.56H90.2101ZM86.5301 365.99C86.7078 365.99 86.8816 365.938 87.0301 365.84C87.1441 365.769 87.2404 365.672 87.3118 365.558C87.3832 365.444 87.4278 365.315 87.4422 365.181C87.4567 365.048 87.4406 364.912 87.3952 364.786C87.3498 364.659 87.2762 364.544 87.1801 364.45C87.0857 364.355 86.9713 364.283 86.8454 364.237C86.7194 364.192 86.5849 364.176 86.4517 364.189C86.3186 364.203 86.1901 364.246 86.0756 364.315C85.9612 364.384 85.8636 364.478 85.7901 364.59C85.6912 364.738 85.639 364.912 85.6401 365.09C85.644 365.313 85.7294 365.526 85.8801 365.69C86.0292 365.85 86.2321 365.95 86.4501 365.97L86.5301 365.99ZM83.9201 368.07C84.1526 368.067 84.3747 367.974 84.5401 367.81C84.6231 367.728 84.6889 367.629 84.7335 367.521C84.7782 367.413 84.8008 367.297 84.8001 367.18C84.8005 366.949 84.7108 366.726 84.5501 366.56C84.3846 366.395 84.1633 366.299 83.9301 366.29C83.6933 366.297 83.468 366.393 83.3001 366.56C83.1393 366.726 83.0497 366.949 83.0501 367.18C83.0492 367.414 83.1387 367.64 83.3001 367.81C83.3825 367.893 83.4807 367.959 83.5889 368.004C83.697 368.048 83.813 368.071 83.9301 368.07H83.9201ZM83.3301 365.59C83.4817 365.591 83.6306 365.549 83.7601 365.47C83.8866 365.389 83.9845 365.27 84.0401 365.13C84.0849 364.983 84.0849 364.827 84.0401 364.68C84.0109 364.532 83.9377 364.396 83.8301 364.29C83.7258 364.18 83.5891 364.107 83.4401 364.08C83.2968 364.035 83.1433 364.035 83.0001 364.08C82.8591 364.138 82.7377 364.235 82.6501 364.36C82.5665 364.488 82.5214 364.637 82.5201 364.79C82.5308 364.974 82.601 365.149 82.7201 365.29C82.8476 365.43 83.0218 365.519 83.2101 365.54L83.3301 365.59ZM83.3301 363.42C83.4158 363.419 83.5005 363.402 83.5801 363.37C83.6618 363.339 83.7341 363.287 83.7901 363.22C83.8511 363.161 83.8988 363.089 83.9301 363.01C83.9657 362.932 83.9828 362.846 83.9801 362.76C83.9797 362.585 83.9116 362.416 83.7901 362.29C83.6674 362.169 83.5023 362.101 83.3301 362.1C83.166 362.116 83.0132 362.19 82.9001 362.31C82.7904 362.434 82.7299 362.594 82.7299 362.76C82.7299 362.926 82.7904 363.086 82.9001 363.21C83.0132 363.33 83.166 363.404 83.3301 363.42ZM83.6901 361.62C83.7984 361.621 83.9039 361.586 83.9901 361.52C84.0816 361.465 84.152 361.38 84.1901 361.28C84.2198 361.179 84.2198 361.071 84.1901 360.97C84.1711 360.863 84.1186 360.765 84.0401 360.69C83.9664 360.61 83.8677 360.557 83.7601 360.54C83.6589 360.51 83.5513 360.51 83.4501 360.54C83.3514 360.581 83.2677 360.65 83.2101 360.74C83.1425 360.835 83.1061 360.949 83.1061 361.065C83.1061 361.182 83.1425 361.295 83.2101 361.39C83.295 361.488 83.412 361.551 83.5401 361.57L83.6901 361.62ZM85.9001 361.31C86.0276 361.294 86.1468 361.238 86.2401 361.15C86.3357 361.069 86.4053 360.961 86.4401 360.84C86.4797 360.72 86.4797 360.59 86.4401 360.47C86.4071 360.346 86.3374 360.234 86.2401 360.15C86.1468 360.067 86.0326 360.012 85.9101 359.99C85.785 359.973 85.6577 359.99 85.5415 360.039C85.4253 360.088 85.3246 360.168 85.2501 360.27C85.1807 360.378 85.1394 360.502 85.1301 360.63C85.1149 360.716 85.1149 360.804 85.1301 360.89C85.1707 360.969 85.2211 361.043 85.2801 361.11C85.41 361.232 85.5817 361.3 85.7601 361.3L85.9001 361.31ZM88.3301 360.37C88.5344 360.365 88.7287 360.281 88.8723 360.135C89.0159 359.99 89.0975 359.794 89.1001 359.59C89.1004 359.388 89.0214 359.194 88.8801 359.05C88.7367 358.905 88.5439 358.819 88.3401 358.81C88.134 358.813 87.9371 358.896 87.7914 359.041C87.6457 359.187 87.5627 359.384 87.5601 359.59C87.5593 359.692 87.5794 359.794 87.6189 359.889C87.6584 359.983 87.7166 360.069 87.7901 360.14C87.8611 360.214 87.9466 360.272 88.0412 360.312C88.1358 360.352 88.2375 360.371 88.3401 360.37H88.3301ZM88.9101 362.83C89.081 362.826 89.2473 362.774 89.3901 362.68C89.5303 362.582 89.6409 362.447 89.7101 362.29C89.7596 362.127 89.7596 361.953 89.7101 361.79C89.6813 361.618 89.597 361.46 89.4701 361.34C89.3507 361.22 89.197 361.139 89.0301 361.11C88.8624 361.071 88.6866 361.089 88.5301 361.16C88.3678 361.22 88.2304 361.333 88.1401 361.48C88.0416 361.621 87.9892 361.788 87.9901 361.96C87.988 362.074 88.012 362.187 88.0601 362.29C88.1042 362.398 88.1687 362.496 88.2501 362.58C88.3305 362.658 88.4257 362.719 88.5301 362.76C88.6369 362.808 88.753 362.832 88.8701 362.83H88.9101ZM85.9101 363.49C86.0633 363.492 86.2134 363.446 86.3401 363.36C86.4695 363.279 86.5707 363.161 86.6301 363.02C86.6897 362.882 86.7104 362.729 86.6901 362.58C86.6611 362.429 86.588 362.29 86.4801 362.18C86.3745 362.069 86.2379 361.992 86.0879 361.96C85.938 361.928 85.7819 361.942 85.6401 362C85.4991 362.058 85.3777 362.155 85.2901 362.28C85.2038 362.407 85.1584 362.557 85.1601 362.71C85.1515 362.809 85.1687 362.909 85.2101 363C85.2477 363.092 85.302 363.177 85.3701 363.25C85.439 363.321 85.5204 363.378 85.6101 363.42C85.705 363.46 85.8071 363.48 85.9101 363.48V363.49ZM77.5201 362.34C77.8518 362.345 78.1782 362.255 78.4601 362.08C78.7384 361.901 78.9575 361.643 79.0901 361.34C79.1908 361.112 79.2389 360.864 79.2308 360.615C79.2227 360.366 79.1586 360.122 79.0434 359.901C78.9281 359.68 78.7646 359.488 78.5649 359.339C78.3653 359.19 78.1346 359.088 77.8901 359.04C77.5556 358.963 77.2055 358.995 76.8901 359.13C76.5841 359.258 76.323 359.473 76.1401 359.75C75.9923 359.979 75.8999 360.239 75.8704 360.51C75.8409 360.781 75.875 361.055 75.9701 361.31C76.0495 361.514 76.1723 361.698 76.3301 361.85C76.4808 362.004 76.6611 362.127 76.8601 362.21C77.0711 362.316 77.304 362.371 77.5401 362.37L77.5201 362.34ZM81.2501 359.34C81.533 359.35 81.8123 359.274 82.0501 359.12C82.2891 358.962 82.4795 358.74 82.6001 358.48C82.7121 358.218 82.7433 357.929 82.6899 357.649C82.6364 357.369 82.5007 357.112 82.3001 356.91C82.1039 356.703 81.8493 356.56 81.5701 356.5C81.2915 356.446 81.0032 356.474 80.7401 356.58C80.4747 356.687 80.248 356.872 80.0901 357.11C79.9287 357.346 79.8416 357.624 79.8401 357.91C79.8408 358.096 79.8782 358.279 79.9501 358.45C80.0164 358.623 80.1187 358.78 80.2501 358.91C80.5172 359.174 80.8744 359.328 81.2501 359.34ZM79.6801 355.66C79.8906 355.664 80.0993 355.62 80.291 355.533C80.4827 355.446 80.6527 355.318 80.7886 355.157C80.9245 354.996 81.023 354.807 81.0768 354.604C81.1307 354.4 81.1386 354.187 81.1001 353.98C81.0519 353.7 80.9193 353.442 80.7201 353.24C80.5224 353.038 80.2676 352.902 79.9901 352.85C79.7161 352.788 79.4296 352.813 79.1701 352.92C78.909 353.029 78.6837 353.209 78.5201 353.44C78.3662 353.675 78.2829 353.949 78.2801 354.23C78.2758 354.603 78.4196 354.963 78.6801 355.23C78.9449 355.498 79.3035 355.652 79.6801 355.66ZM83.2801 353.92C83.5241 353.918 83.763 353.849 83.9701 353.72C84.1739 353.588 84.3313 353.396 84.4201 353.17C84.5156 352.95 84.5434 352.706 84.5001 352.47C84.4539 352.232 84.3392 352.013 84.1701 351.84C83.9988 351.666 83.7793 351.548 83.5401 351.5C83.302 351.447 83.0533 351.472 82.8301 351.57C82.6058 351.662 82.4142 351.818 82.2801 352.02C82.1497 352.223 82.0803 352.459 82.0801 352.7C82.0815 352.86 82.1085 353.019 82.1601 353.17C82.2217 353.318 82.3137 353.45 82.4301 353.56C82.541 353.672 82.6737 353.761 82.8201 353.82C82.9657 353.908 83.1303 353.959 83.3001 353.97L83.2801 353.92ZM84.7501 357.58C84.9943 357.588 85.2353 357.522 85.4408 357.39C85.6463 357.258 85.8065 357.066 85.9001 356.84C86.0014 356.618 86.0295 356.369 85.9801 356.13C85.9381 355.891 85.8228 355.671 85.6501 355.5C85.4809 355.322 85.261 355.199 85.0201 355.15C84.7817 355.103 84.5348 355.128 84.3101 355.22C84.0842 355.309 83.8918 355.466 83.7601 355.67C83.621 355.873 83.5477 356.114 83.5501 356.36C83.55 356.521 83.5805 356.68 83.6401 356.83C83.7015 356.978 83.7896 357.114 83.9001 357.23C84.0181 357.338 84.1533 357.426 84.3001 357.49C84.4514 357.555 84.6154 357.586 84.7801 357.58H84.7501ZM88.0101 356.82C88.1464 356.821 88.2816 356.794 88.4071 356.741C88.5326 356.687 88.646 356.609 88.7401 356.51C88.837 356.415 88.9135 356.301 88.9651 356.176C89.0167 356.05 89.0422 355.916 89.0401 355.78C89.0415 355.508 88.9375 355.247 88.7501 355.05C88.6566 354.952 88.5442 354.873 88.4196 354.82C88.2949 354.766 88.1607 354.739 88.0251 354.739C87.8894 354.739 87.7552 354.766 87.6306 354.82C87.5059 354.873 87.3935 354.952 87.3001 355.05C87.2026 355.143 87.1248 355.255 87.0716 355.378C87.0183 355.502 86.9906 355.635 86.9901 355.77C86.9901 356.035 87.0954 356.29 87.283 356.477C87.4705 356.665 87.7248 356.77 87.9901 356.77L88.0101 356.82ZM90.8401 356.82C91.0656 356.807 91.2772 356.706 91.4301 356.54C91.5833 356.374 91.6683 356.156 91.6683 355.93C91.6683 355.704 91.5833 355.486 91.4301 355.32C91.2772 355.154 91.0656 355.053 90.8401 355.04C90.7213 355.016 90.5988 355.016 90.4801 355.04C90.3618 355.081 90.253 355.146 90.1601 355.23C90.0722 355.316 90.001 355.418 89.9501 355.53C89.902 355.644 89.8782 355.766 89.8801 355.89C89.879 356.014 89.9028 356.136 89.9501 356.25C90.001 356.362 90.0722 356.464 90.1601 356.55C90.253 356.634 90.3618 356.699 90.4801 356.74C90.5988 356.765 90.7213 356.765 90.8401 356.74V356.82ZM93.1801 357.37C93.3297 357.368 93.4757 357.323 93.6001 357.24C93.729 357.162 93.8277 357.042 93.8801 356.9C93.9411 356.765 93.9586 356.615 93.9301 356.47C93.9009 356.322 93.8277 356.186 93.7201 356.08C93.618 355.973 93.4853 355.899 93.3401 355.87C93.1961 355.83 93.044 355.83 92.9001 355.87C92.7622 355.929 92.6441 356.026 92.5601 356.15C92.4783 356.275 92.4333 356.421 92.4301 356.57C92.4298 356.673 92.4502 356.775 92.4901 356.87C92.5313 356.963 92.5889 357.048 92.6601 357.12C92.738 357.186 92.8257 357.24 92.9201 357.28C93.0159 357.316 93.1178 357.333 93.2201 357.33L93.1801 357.37ZM93.4901 354.61C93.6189 354.614 93.7453 354.575 93.8501 354.5C93.961 354.431 94.0483 354.33 94.1001 354.21C94.1351 354.086 94.1351 353.954 94.1001 353.83C94.0706 353.703 94.0086 353.586 93.9201 353.49C93.8274 353.398 93.7095 353.336 93.5813 353.311C93.4531 353.286 93.3205 353.3 93.2001 353.35C93.0809 353.398 92.9795 353.482 92.9101 353.59C92.8322 353.694 92.7901 353.82 92.7901 353.95C92.7908 354.043 92.8112 354.135 92.8501 354.22C92.8812 354.302 92.9329 354.374 93.0001 354.43C93.0603 354.495 93.136 354.543 93.2201 354.57C93.3057 354.589 93.3944 354.589 93.4801 354.57L93.4901 354.61ZM91.7301 353.71C91.8766 353.708 92.0193 353.663 92.1401 353.58C92.2616 353.497 92.3584 353.383 92.4201 353.25C92.4601 353.106 92.4601 352.954 92.4201 352.81C92.3908 352.665 92.3175 352.532 92.2101 352.43C92.1035 352.33 91.9702 352.263 91.8264 352.236C91.6825 352.21 91.5341 352.226 91.3989 352.282C91.2638 352.338 91.1477 352.431 91.0645 352.552C90.9813 352.672 90.9347 352.814 90.9301 352.96C90.9301 353.159 91.0091 353.35 91.1497 353.49C91.2904 353.631 91.4811 353.71 91.6801 353.71H91.7301ZM89.4101 353.17C89.588 353.171 89.7621 353.119 89.9101 353.02C90.0579 352.927 90.1732 352.791 90.2401 352.63C90.2956 352.509 90.3227 352.377 90.3192 352.244C90.3157 352.111 90.2817 351.981 90.2199 351.863C90.1581 351.745 90.0701 351.643 89.9626 351.564C89.8551 351.486 89.7311 351.433 89.6001 351.41C89.4337 351.36 89.2564 351.36 89.0901 351.41C88.9245 351.474 88.7842 351.59 88.6901 351.74C88.5882 351.887 88.5325 352.061 88.5301 352.24C88.5292 352.357 88.553 352.473 88.6001 352.58C88.646 352.687 88.7103 352.785 88.7901 352.87C88.8749 352.95 88.9731 353.014 89.0801 353.06C89.1849 353.103 89.2967 353.127 89.4101 353.13V353.17ZM86.5901 353.17C86.7958 353.171 86.9973 353.112 87.1701 353C87.3459 352.888 87.4823 352.724 87.5601 352.53C87.6413 352.341 87.6623 352.131 87.6201 351.93C87.5851 351.725 87.4872 351.537 87.3401 351.39C87.1977 351.238 87.0113 351.134 86.8069 351.092C86.6025 351.051 86.3903 351.075 86.2001 351.16C86.0107 351.24 85.8478 351.372 85.7301 351.54C85.6195 351.717 85.5607 351.921 85.5601 352.13C85.5624 352.403 85.6698 352.664 85.8601 352.86C86.0533 353.074 86.3226 353.203 86.6101 353.22L86.5901 353.17ZM82.7901 350.56C83.0244 350.567 83.2551 350.5 83.4501 350.37C83.6483 350.241 83.8046 350.057 83.9001 349.84C83.993 349.626 84.0175 349.388 83.9701 349.16C83.9315 348.928 83.8193 348.714 83.6501 348.55C83.4907 348.378 83.2803 348.263 83.0501 348.22C82.8193 348.17 82.5787 348.191 82.3601 348.28C82.1431 348.374 81.9563 348.527 81.8201 348.72C81.6943 348.917 81.6283 349.146 81.6301 349.38C81.6274 349.533 81.6551 349.685 81.7116 349.828C81.7681 349.97 81.8522 350.1 81.9592 350.21C82.0661 350.319 82.1937 350.407 82.3346 350.467C82.4755 350.527 82.6269 350.559 82.7801 350.56H82.7901ZM86.0501 349.84C86.2552 349.847 86.4577 349.792 86.6301 349.68C86.8015 349.563 86.9366 349.4 87.0201 349.21C87.1047 349.022 87.1291 348.812 87.0901 348.61C87.0483 348.408 86.9514 348.221 86.8101 348.07C86.6625 347.922 86.4747 347.821 86.2701 347.78C86.0687 347.738 85.8591 347.759 85.6701 347.84C85.4779 347.915 85.3138 348.048 85.2001 348.22C85.0814 348.39 85.0185 348.593 85.0201 348.8C85.0216 348.937 85.0487 349.073 85.1001 349.2C85.1494 349.327 85.2243 349.443 85.3201 349.54C85.4189 349.634 85.5342 349.708 85.6601 349.76C85.7855 349.817 85.9224 349.844 86.0601 349.84H86.0501ZM88.8801 349.84C89.0574 349.848 89.2327 349.799 89.3801 349.7C89.5305 349.604 89.6489 349.465 89.7201 349.301C89.7914 349.137 89.8122 348.956 89.7801 348.78C89.745 348.604 89.659 348.442 89.5329 348.314C89.4067 348.186 89.2458 348.098 89.0701 348.06C88.901 348.006 88.7191 348.006 88.5501 348.06C88.3834 348.125 88.2406 348.239 88.1405 348.388C88.0405 348.536 87.988 348.711 87.9901 348.89C87.9878 349.013 88.0082 349.135 88.0501 349.25C88.1014 349.359 88.1688 349.461 88.2501 349.55C88.3388 349.637 88.4443 349.705 88.5601 349.75C88.6722 349.791 88.7908 349.811 88.9101 349.81L88.8801 349.84ZM91.2001 350.39C91.3497 350.388 91.4957 350.343 91.6201 350.26C91.7441 350.176 91.8413 350.058 91.9001 349.92C91.9447 349.777 91.9447 349.623 91.9001 349.48C91.8677 349.336 91.795 349.204 91.6906 349.1C91.5861 348.995 91.4542 348.922 91.3101 348.89C91.1617 348.861 91.0082 348.879 90.8701 348.94C90.7326 348.995 90.6143 349.088 90.5301 349.21C90.4595 349.315 90.4161 349.435 90.4039 349.561C90.3917 349.687 90.411 349.814 90.4601 349.93C90.5016 350.02 90.5592 350.101 90.6301 350.17C90.6981 350.246 90.784 350.305 90.8801 350.34C90.9708 350.381 91.0707 350.399 91.1701 350.39H91.2001ZM92.9801 351.32C93.1605 351.312 93.3316 351.237 93.4601 351.11C93.5825 350.984 93.6507 350.816 93.6501 350.64C93.6501 350.507 93.6081 350.378 93.5301 350.27C93.457 350.161 93.3523 350.077 93.2301 350.03C93.1092 349.978 92.9752 349.964 92.8464 349.991C92.7175 350.018 92.6001 350.084 92.5101 350.18C92.4125 350.269 92.3488 350.389 92.3301 350.52C92.2901 350.647 92.2901 350.783 92.3301 350.91C92.3781 351.029 92.4619 351.131 92.5701 351.2C92.6776 351.278 92.8072 351.32 92.9401 351.32H92.9801ZM94.2901 352.4C94.4325 352.397 94.5683 352.34 94.6691 352.239C94.7698 352.138 94.8275 352.002 94.8301 351.86C94.8309 351.788 94.8172 351.716 94.7897 351.649C94.7622 351.582 94.7215 351.521 94.6701 351.47C94.5666 351.374 94.4309 351.321 94.2901 351.321C94.1492 351.321 94.0135 351.374 93.9101 351.47C93.8586 351.521 93.8179 351.582 93.7904 351.649C93.7629 351.716 93.7492 351.788 93.7501 351.86C93.7526 352.002 93.8103 352.138 93.9111 352.239C94.0118 352.34 94.1476 352.397 94.2901 352.4Z",
                fill: "white",
              })),
            $c ||
              ($c = i.createElement("ellipse", {
                cx: 257.989,
                cy: 371.672,
                rx: 24.4034,
                ry: 4.00104,
                fill: "url(#paint45_radial_61_2)",
                fillOpacity: 0.5,
              })),
            i.createElement(
              "mask",
              {
                id: "mask0_61_2",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: 233,
                y: 343,
                width: 50,
                height: 22,
              },
              es ||
                (es = i.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M279.498 359.742C274.637 362.815 266.833 364.808 258.034 364.808C249.182 364.808 241.336 362.791 236.482 359.686L233.256 347.673C234.763 345.916 237.1 344.355 240.039 343.099L245.653 343.099C241.344 344.767 238.599 347.288 238.599 350.109C238.599 355.131 247.3 359.203 258.034 359.203C268.767 359.203 277.468 355.131 277.468 350.109C277.468 347.288 274.723 344.767 270.415 343.099L276.029 343.099C278.932 344.34 281.248 345.878 282.756 347.609L279.498 359.742Z",
                  fill: "black",
                }))
            ),
            ts ||
              (ts = i.createElement(
                "g",
                { mask: "url(#mask0_61_2)" },
                i.createElement("path", {
                  d: "M230.989 343.408C231.54 345.937 236.495 363.966 236.495 363.966L248.616 365.836L279.276 364.532L284.989 343.408H230.989Z",
                  fill: "url(#paint46_linear_61_2)",
                })
              )),
            as ||
              (as = i.createElement("path", {
                d: "M293.761 264.498C293.761 299.014 289.042 329.982 281.568 351.084C277.842 359.281 261.364 359.281 257.989 359.281C254.615 359.281 238.113 359.281 234.411 351.084C226.936 329.982 222.218 299.014 222.218 264.498C222.218 200.911 247.816 149.363 257.989 149.363C268.234 149.363 293.761 200.911 293.761 264.498Z",
                fill: "url(#paint47_linear_61_2)",
              })),
            is ||
              (is = i.createElement("ellipse", {
                cx: 257.989,
                cy: 271.896,
                rx: 23.0023,
                ry: 22.9546,
                fill: "#183C3E",
              })),
            ls ||
              (ls = i.createElement("ellipse", {
                cx: 257.989,
                cy: 275.955,
                rx: 23.0023,
                ry: 22.9546,
                fill: "url(#paint48_linear_61_2)",
              })),
            rs ||
              (rs = i.createElement("ellipse", {
                cx: 257.989,
                cy: 275.955,
                rx: 14.6811,
                ry: 14.6507,
                fill: "url(#paint49_linear_61_2)",
              })),
            ns ||
              (ns = i.createElement("path", {
                d: "M294.075 380.718L275.346 350.154V311.125L294.075 341.689V380.718Z",
                fill: "url(#paint50_linear_61_2)",
              })),
            os ||
              (os = i.createElement("path", {
                d: "M294.075 380.718L297.6 378.079V339.05L294.075 341.689V380.718Z",
                fill: "url(#paint51_linear_61_2)",
              })),
            Cs ||
              (Cs = i.createElement("path", {
                d: "M278.871 308.377L275.346 311.125L294.075 341.689L297.6 339.05L278.871 308.377Z",
                fill: "url(#paint52_linear_61_2)",
              })),
            cs ||
              (cs = i.createElement("path", {
                d: "M221.806 380.718L218.281 377.969V338.94L221.806 341.579V380.718Z",
                fill: "url(#paint53_linear_61_2)",
              })),
            ss ||
              (ss = i.createElement("path", {
                d: "M221.806 380.718L240.535 350.154V311.125L221.806 341.689V380.718V380.718Z",
                fill: "url(#paint54_linear_61_2)",
              })),
            ps ||
              (ps = i.createElement("path", {
                d: "M237.01 308.377L240.535 311.125L221.806 341.689L218.281 338.94L237.01 308.377Z",
                fill: "url(#paint55_linear_61_2)",
              })),
            ds ||
              (ds = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M282.756 191.832C279.072 193.602 266.809 199.161 258.044 199.161C249.295 199.161 237.06 193.622 233.352 191.841C241.559 165.92 252.279 149.363 258.044 149.363C263.849 149.363 274.562 165.915 282.756 191.832Z",
                fill: "url(#paint56_linear_61_2)",
              }))
          ),
          Ls ||
            (Ls = i.createElement(
              "defs",
              null,
              i.createElement(
                "radialGradient",
                {
                  id: "paint0_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(255.089 243.148) rotate(-118.527) scale(244.608)",
                },
                i.createElement("stop", { stopColor: "#FEE097" }),
                i.createElement("stop", { offset: 0.45, stopColor: "#FEE199" }),
                i.createElement("stop", { offset: 0.61, stopColor: "#FEE3A0" }),
                i.createElement("stop", { offset: 0.72, stopColor: "#FEE6AB" }),
                i.createElement("stop", { offset: 0.81, stopColor: "#FEEBBC" }),
                i.createElement("stop", { offset: 0.89, stopColor: "#FFF2D2" }),
                i.createElement("stop", { offset: 0.96, stopColor: "#FFFAED" }),
                i.createElement("stop", { offset: 1, stopColor: "white" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_61_2",
                  x1: 417.48,
                  y1: 248.93,
                  x2: 366.64,
                  y2: 248.93,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#D97A00" }),
                i.createElement("stop", { offset: 0.01, stopColor: "#DC7E00" }),
                i.createElement("stop", { offset: 0.07, stopColor: "#E98B00" }),
                i.createElement("stop", { offset: 0.14, stopColor: "#F09300" }),
                i.createElement("stop", { offset: 0.28, stopColor: "#F29500" }),
                i.createElement("stop", { offset: 0.29, stopColor: "#F49C00" }),
                i.createElement("stop", { offset: 0.36, stopColor: "#FCB300" }),
                i.createElement("stop", { offset: 0.4, stopColor: "#FFBB00" }),
                i.createElement("stop", { offset: 0.92, stopColor: "#FFBB00" }),
                i.createElement("stop", { offset: 0.96, stopColor: "#FEB800" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#FAAD00" }),
                i.createElement("stop", { offset: 1, stopColor: "#F9AA00" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_61_2",
                  x1: 418.82,
                  y1: 252.69,
                  x2: 380.47,
                  y2: 214.32,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#D97A00" }),
                i.createElement("stop", { offset: 0.01, stopColor: "#DC7E00" }),
                i.createElement("stop", { offset: 0.08, stopColor: "#E98B00" }),
                i.createElement("stop", { offset: 0.17, stopColor: "#F09300" }),
                i.createElement("stop", { offset: 0.34, stopColor: "#F29600" }),
                i.createElement("stop", { offset: 0.41, stopColor: "#F8A700" }),
                i.createElement("stop", { offset: 0.49, stopColor: "#FCB200" }),
                i.createElement("stop", { offset: 0.61, stopColor: "#FEB900" }),
                i.createElement("stop", { offset: 0.94, stopColor: "#FFBB00" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_61_2",
                  x1: 396.23,
                  y1: 228.83,
                  x2: 407.03,
                  y2: 228.83,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.3, stopColor: "#C46E00" }),
                i.createElement("stop", { offset: 0.4, stopColor: "#D07800" }),
                i.createElement("stop", { offset: 0.68, stopColor: "#E98D00" }),
                i.createElement("stop", { offset: 0.84, stopColor: "#F29500" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint4_linear_61_2",
                  x1: 380.52,
                  y1: 235.89,
                  x2: 380.71,
                  y2: 235.89,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.16, stopColor: "#F29500" }),
                i.createElement("stop", { offset: 0.32, stopColor: "#E98D00" }),
                i.createElement("stop", { offset: 0.6, stopColor: "#D07800" }),
                i.createElement("stop", { offset: 0.7, stopColor: "#C46E00" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint5_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(46.8532 284.804) scale(55.04)",
                },
                i.createElement("stop", { stopColor: "#52BEF5" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#56C4F4",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint6_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(47.1379 284.632) scale(52.22)",
                },
                i.createElement("stop", { stopColor: "#49B3F7" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#56C4F4",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint7_linear_61_2",
                  x1: 56.75,
                  y1: 287.04,
                  x2: 108.22,
                  y2: 287.04,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#3B79FA" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#40A8F9" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint8_linear_61_2",
                  x1: 66.9099,
                  y1: 308.67,
                  x2: 22.0299,
                  y2: 263.79,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#3BA1FA" }),
                i.createElement("stop", { offset: 1, stopColor: "#6ADEF0" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint9_linear_61_2",
                  x1: 344272,
                  y1: -264387,
                  x2: 478066,
                  y2: -379222,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#3BA1FA" }),
                i.createElement("stop", { offset: 1, stopColor: "#6ADEF0" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint10_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(474.298 287.833) scale(62.81)",
                },
                i.createElement("stop", { stopColor: "#41C89A" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#42C99B",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint11_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(476.01 281.27) scale(59.6)",
                },
                i.createElement("stop", { stopColor: "#55D6A2" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#38C297",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint12_linear_61_2",
                  x1: 486.63,
                  y1: 284.48,
                  x2: 545.37,
                  y2: 284.48,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#20978D" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#33BE95" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint13_linear_61_2",
                  x1: 498.23,
                  y1: 309.17,
                  x2: 447,
                  y2: 257.94,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#20B18D" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#66E2A9" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint14_linear_61_2",
                  x1: 1071140,
                  y1: -862862,
                  x2: 1245480,
                  y2: -1012470,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#20B18D" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#66E2A9" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint15_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(421.706 376.094) scale(33.35)",
                },
                i.createElement("stop", { stopColor: "#F05860" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#F18462",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint16_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(421.628 376.989) scale(31.64)",
                },
                i.createElement("stop", { stopColor: "#F05960" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#F15B62",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint17_linear_61_2",
                  x1: 427.59,
                  y1: 377.94,
                  x2: 458.77,
                  y2: 377.94,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#BA344A" }),
                i.createElement("stop", { offset: 1, stopColor: "#EF344A" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint18_linear_61_2",
                  x1: 433.74,
                  y1: 391.04,
                  x2: 406.55,
                  y2: 363.84,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#EF344A" }),
                i.createElement("stop", { offset: 1, stopColor: "#F16568" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint19_linear_61_2",
                  x1: 61575.8,
                  y1: -26650.1,
                  x2: 110697,
                  y2: -68810.7,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#EF344A" }),
                i.createElement("stop", { offset: 1, stopColor: "#F16568" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint20_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(467.581 505.438) scale(22.34)",
                },
                i.createElement("stop", { stopColor: "#B3B6C4" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#8A95BD",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint21_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(468.336 501.768) scale(21.2)",
                },
                i.createElement("stop", { stopColor: "#B9BBC6" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#9DA5C1",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint22_linear_61_2",
                  x1: 472.1,
                  y1: 503.51,
                  x2: 493,
                  y2: 503.51,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#6D7BB0" }),
                i.createElement("stop", { offset: 1, stopColor: "#8C97BE" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint23_linear_61_2",
                  x1: 476.23,
                  y1: 512.29,
                  x2: 458.01,
                  y2: 494.07,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#838FBC" }),
                i.createElement("stop", { offset: 1, stopColor: "#C1C2C7" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint24_linear_61_2",
                  x1: 103869,
                  y1: -72857.5,
                  x2: 125925,
                  y2: -91784.8,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#838FBC" }),
                i.createElement("stop", { offset: 1, stopColor: "#C1C2C7" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint25_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(395.113 644.22) scale(35.54)",
                },
                i.createElement("stop", { stopColor: "#F18D2A" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#EFDE64",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint26_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(395.54 643.356) scale(33.72)",
                },
                i.createElement("stop", { stopColor: "#F0C14F" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#EFDE64",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint27_linear_61_2",
                  x1: 402.49,
                  y1: 641.44,
                  x2: 435.74,
                  y2: 641.44,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#E7682A" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#F18D2A" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint28_linear_61_2",
                  x1: 409.06,
                  y1: 655.41,
                  x2: 380.07,
                  y2: 626.42,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#F18D2A" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#EFDE64" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint29_linear_61_2",
                  x1: 254704,
                  y1: -199421,
                  x2: 310518,
                  y2: -247318,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#F18D2A" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#EFDE64" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint30_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(124.921 643.321) scale(30.12)",
                },
                i.createElement("stop", { stopColor: "#A479F7" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#A278F6",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint31_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(125.484 640.661) scale(28.58)",
                },
                i.createElement("stop", { stopColor: "#A176F5" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#A177F5",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint32_linear_61_2",
                  x1: 131.05,
                  y1: 641.01,
                  x2: 159.23,
                  y2: 641.01,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#4A24CD" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#7D4AE0" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint33_linear_61_2",
                  x1: 136.62,
                  y1: 652.85,
                  x2: 112.05,
                  y2: 628.29,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#5D24CD" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#A980FA" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint34_linear_61_2",
                  x1: 240941,
                  y1: -196774,
                  x2: 281042,
                  y2: -231187,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#5D24CD" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#A980FA" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint35_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(48.6 502.78) scale(23.5)",
                },
                i.createElement("stop", { stopColor: "#CE74D7" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#D278D8",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint36_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(51.4584 503.097) rotate(0.102359) scale(22.39)",
                },
                i.createElement("stop", { stopColor: "#CF75D7" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#CD73D7",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint37_linear_61_2",
                  x1: 53.3001,
                  y1: 501.49,
                  x2: 75.27,
                  y2: 501.49,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#7931B7" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#AD50D0" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint38_linear_61_2",
                  x1: 57.6401,
                  y1: 510.73,
                  x2: 38.4701,
                  y2: 491.56,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#A142CD" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#EA93DD" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint39_linear_61_2",
                  x1: 186752,
                  y1: -150973,
                  x2: 211151,
                  y2: -171912,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#A142CD" }),
                i.createElement("stop", { offset: 0.99, stopColor: "#EA93DD" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint40_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(91.8059 359.556) scale(49.6)",
                },
                i.createElement("stop", { stopColor: "#F06852" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#F18462",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint41_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(92.3407 358.229) scale(47.06)",
                },
                i.createElement("stop", { stopColor: "#F0775B" }),
                i.createElement("stop", {
                  offset: 0.99,
                  stopColor: "#F0785C",
                  stopOpacity: 0,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint42_linear_61_2",
                  x1: 101.12,
                  y1: 359.44,
                  x2: 147.51,
                  y2: 359.44,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#D13B4A" }),
                i.createElement("stop", { offset: 1, stopColor: "#F17C5C" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint43_linear_61_2",
                  x1: 110.28,
                  y1: 378.93,
                  x2: 69.8201,
                  y2: 338.48,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#EF5B4A" }),
                i.createElement("stop", { offset: 1, stopColor: "#F18D68" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint44_linear_61_2",
                  x1: 292382,
                  y1: -224193,
                  x2: 401076,
                  y2: -317468,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { offset: 0.01, stopColor: "#EF5B4A" }),
                i.createElement("stop", { offset: 1, stopColor: "#F18D68" })
              ),
              i.createElement(
                "radialGradient",
                {
                  id: "paint45_radial_61_2",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(257.989 371.672) rotate(90) scale(4.00104 24.4034)",
                },
                i.createElement("stop", null),
                i.createElement("stop", { offset: 1, stopOpacity: 0 })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint46_linear_61_2",
                  x1: 230.995,
                  y1: 355.058,
                  x2: 278.392,
                  y2: 355.058,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#44A92B" }),
                i.createElement("stop", {
                  offset: 0.526,
                  stopColor: "#1A94AF",
                  stopOpacity: 0.8,
                }),
                i.createElement("stop", {
                  offset: 1,
                  stopColor: "#4C27B3",
                  stopOpacity: 0.8,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint47_linear_61_2",
                  x1: 222.218,
                  y1: 167.782,
                  x2: 293.761,
                  y2: 345.735,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#90FAED" }),
                i.createElement("stop", { offset: 1, stopColor: "#1E1862" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint48_linear_61_2",
                  x1: 280.991,
                  y1: 275.955,
                  x2: 234.987,
                  y2: 275.955,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#27AAB3" }),
                i.createElement("stop", { offset: 1, stopColor: "#3EDCC9" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint49_linear_61_2",
                  x1: 257.989,
                  y1: 261.304,
                  x2: 257.989,
                  y2: 290.605,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#90DAFA" }),
                i.createElement("stop", { offset: 1, stopColor: "#BCF8E3" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint50_linear_61_2",
                  x1: 275.385,
                  y1: 345.854,
                  x2: 294.12,
                  y2: 345.854,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#7876CB" }),
                i.createElement("stop", {
                  offset: 0.2448,
                  stopColor: "#6380CA",
                }),
                i.createElement("stop", {
                  offset: 0.4688,
                  stopColor: "#6ED6BD",
                }),
                i.createElement("stop", {
                  offset: 0.71,
                  stopColor: "#4FA2D0",
                  stopOpacity: 0.8,
                }),
                i.createElement("stop", {
                  offset: 1,
                  stopColor: "#38BBC4",
                  stopOpacity: 0.8,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint51_linear_61_2",
                  x1: 295.86,
                  y1: 338.901,
                  x2: 295.86,
                  y2: 380.665,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#40BFC5" }),
                i.createElement("stop", { offset: 1, stopColor: "#20797D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint52_linear_61_2",
                  x1: 286.492,
                  y1: 308.346,
                  x2: 286.492,
                  y2: 341.59,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#40BFC5" }),
                i.createElement("stop", { offset: 1, stopColor: "#20797D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint53_linear_61_2",
                  x1: 220.017,
                  y1: 338.907,
                  x2: 220.017,
                  y2: 380.665,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#40BFC5" }),
                i.createElement("stop", { offset: 1, stopColor: "#20797D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint54_linear_61_2",
                  x1: 221.753,
                  y1: 345.854,
                  x2: 240.489,
                  y2: 345.854,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#7876CB" }),
                i.createElement("stop", {
                  offset: 0.2448,
                  stopColor: "#6380CA",
                }),
                i.createElement("stop", {
                  offset: 0.4688,
                  stopColor: "#6ED6BD",
                }),
                i.createElement("stop", {
                  offset: 0.71,
                  stopColor: "#4FA2D0",
                  stopOpacity: 0.8,
                }),
                i.createElement("stop", {
                  offset: 1,
                  stopColor: "#38BBC4",
                  stopOpacity: 0.8,
                })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint55_linear_61_2",
                  x1: 229.385,
                  y1: 308.346,
                  x2: 229.385,
                  y2: 341.597,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#40BFC5" }),
                i.createElement("stop", { offset: 1, stopColor: "#20797D" })
              ),
              i.createElement(
                "linearGradient",
                {
                  id: "paint56_linear_61_2",
                  x1: 233.352,
                  y1: 149.363,
                  x2: 282.756,
                  y2: 199.161,
                  gradientUnits: "userSpaceOnUse",
                },
                i.createElement("stop", { stopColor: "#90FAED" }),
                i.createElement("stop", { offset: 1, stopColor: "#185462" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip0_61_2" },
                i.createElement("rect", {
                  width: 525.45,
                  height: 817.07,
                  fill: "white",
                })
              )
            ))
        );
      }
      var bs,
        js = i.forwardRef(Es),
        Ms = (a.p, a.p + "static/media/Rocket_base_only.0f8ff567.svg"),
        Os = a.p + "static/media/Rocket Tablet.4b6d741f.svg",
        Zs = a.p + "static/media/bybit.abc89f15.svg",
        gs = a.p + "static/media/haskey.65bc0468.svg",
        xs = a.p + "static/media/cms.a8544f05.svg",
        ws = a.p + "static/media/sig.ae38ce03.svg",
        vs = a.p + "static/media/dragonfly.7dc06002.svg",
        Fs = a.p + "static/media/framework.4ba8d2c8.svg",
        Bs = a.p + "static/media/iosg.a2f2ee73.svg",
        _s = a.p + "static/media/pantera.00d9c596.svg",
        ks = a.p + "static/media/polychain.12e975a9.svg",
        Vs = a.p + "static/media/standard.78e0fd68.svg",
        Ss = a.p + "static/media/wintermute.089b6be0.svg",
        Hs = a.p + "static/media/woo.d239cb51.svg",
        Ns = a.p + "static/media/product_img02.b8f760dd.png",
        Ds = a.p + "static/media/product_img03.3534022f.png",
        As = a.p + "static/media/product_img01.98047c35.png",
        Ps = a.p + "static/media/Cloud.916bd79e.png",
        Ts = ["title", "titleId"];
      function Us() {
        return (
          (Us =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Us.apply(this, arguments)
        );
      }
      function Is(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Gs(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Is(e, Ts);
        return i.createElement(
          "svg",
          Us(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          bs ||
            (bs = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z",
              fill: "#29B5BC",
            }))
        );
      }
      var Rs,
        Ws,
        zs = i.forwardRef(Gs),
        Ys = (a.p, a(385)),
        qs = ["title", "titleId"];
      function Qs() {
        return (
          (Qs =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }),
          Qs.apply(this, arguments)
        );
      }
      function Js(e, t) {
        if (null == e) return {};
        var a,
          i,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (a = r[i]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      function Ks(e, t) {
        var a = e.title,
          l = e.titleId,
          r = Js(e, qs);
        return i.createElement(
          "svg",
          Qs(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l,
            },
            r
          ),
          a ? i.createElement("title", { id: l }, a) : null,
          Rs ||
            (Rs = i.createElement("path", {
              d: "M8.5 4.6665C8.5 4.39036 8.27614 4.1665 8 4.1665C7.72386 4.1665 7.5 4.39036 7.5 4.6665V7.17585C7.50001 7.51639 7.59487 7.85019 7.77394 8.13984C7.95299 8.42946 8.20926 8.66355 8.51383 8.81577L10.4431 9.78038C10.69 9.90388 10.9904 9.80377 11.1139 9.55678C11.2374 9.30979 11.1373 9.00945 10.8903 8.88596L8.96083 7.92124C8.82237 7.85205 8.70591 7.74566 8.62452 7.614C8.54313 7.48234 8.50001 7.3306 8.5 7.17582V4.6665Z",
              fill: "#1B1F26",
            })),
          Ws ||
            (Ws = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z",
              fill: "#1B1F26",
            }))
        );
      }
      var Xs = i.forwardRef(Ks);
      a.p;
      a(108);
      var $s = {
          list: [],
          status: "idle",
          updatedAt: new Date().getTime() / 1e3,
          news: [],
        },
        ep = Object(et.b)(
          "info/fetchInfoList",
          Object(tt.a)(
            it.a.mark(function e() {
              return it.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch(
                          "https://api.synfutures.com/ipfs/storage/prod/info-dashboard.json"
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            return Object(oe.a)(
                              Object(oe.a)({}, e),
                              {},
                              {
                                data: e.data.map(function (e) {
                                  return Object(oe.a)(
                                    Object(oe.a)({}, e),
                                    {},
                                    { tradingVolume: Number(e.tradingVolume) }
                                  );
                                }),
                              }
                            );
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        tp = Object(et.b)(
          "info/fetchNews",
          Object(tt.a)(
            it.a.mark(function e() {
              return it.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch(
                          "https://api.synfutures.com/ipfs/v2-config/landing/news.json"
                        ).then(function (e) {
                          return e.json();
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        ap = Object(et.c)({
          name: "info",
          initialState: $s,
          reducers: {},
          extraReducers: function (e) {
            e.addCase(ep.pending, function (e) {
              e.status = "loading";
            })
              .addCase(ep.fulfilled, function (e, t) {
                var a;
                (e.status = "idle"),
                  (e.list = t.payload.data),
                  (e.updatedAt =
                    null !== (a = t.payload.updatedAt) && void 0 !== a
                      ? a
                      : e.updatedAt);
              })
              .addCase(tp.fulfilled, function (e, t) {
                e.news = t.payload;
              });
          },
        }),
        ip = function (e) {
          return e.info.news || [];
        },
        lp = ap.reducer,
        rp = a(109),
        np = a(156),
        op = a.n(np);
      a(367);
      function Cp(e) {
        var t = h().deviceType;
        function a(e) {
          window.open(e);
        }
        return Object(Ce.jsxs)(
          "div",
          Object(oe.a)(
            Object(oe.a)({}, e),
            {},
            {
              className: "float-social-container ".concat(t),
              children: [
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https://twitter.com/");
                  },
                  children: Object(Ce.jsx)(Ft, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https://t.me/");
                  },
                  children: Object(Ce.jsx)($t, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https://discord.gg/");
                  },
                  children: Object(Ce.jsx)(Ht, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https:/.medium.com");
                  },
                  children: Object(Ce.jsx)(Ut, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https://github.com");
                  },
                  children: Object(Ce.jsx)(Yt, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a(
                      "https://www.youtube.com/ "
                    );
                  },
                  children: Object(Ce.jsx)(na, {}),
                }),
                Object(Ce.jsx)("a", {
                  className: "social-icon",
                  onClick: function () {
                    return a("https://www.reddit.com/r");
                  },
                  children: Object(Ce.jsx)(da, {}),
                }),
              ],
            }
          )
        );
      }
      var cp = a.p + "static/media/image-not-exist.8daa0b6b.png",
        sp = a.p + "static/media/btn_bg_v2.c7485c50.png",
        pp = a.p + "static/media/icon_feature_01.87456805.svg",
        dp = a.p + "static/media/icon_feature_02.aa3eb0dc.svg",
        Lp = a.p + "static/media/icon_feature_03.571613bd.svg",
        hp = a.p + "static/media/illus_features.c91aab82.png";
      a(368);
      function fp() {
        var e = h(),
          t = e.deviceType,
          a = e.isMobile,
          l = e.isDesktop,
          r = $e(ip),
          n = Xe(),
          C = Object(i.useRef)(null),
          c = Object(i.useRef)(null),
          p = (Object(i.useRef)(null), Object(i.useRef)(null)),
          L = Object(rp.useInViewport)(c).inViewport,
          f = Object(rp.useInViewport)(p).inViewport;
        Object(i.useEffect)(
          function () {
            n(tp());
          },
          [n]
        );
        var m = Object(he.useSpring)({
            to: { top: f ? "30px" : "-500px", transition: "top 0.3s ease-out" },
          }),
          u = Object(i.useCallback)(function (e) {
            Ze(Ee.HOMEPAGE, "click ".concat(e.key));
          }, []);
        return Object(Ce.jsxs)("div", {
          className: "home-page-container ".concat(t),
          children: [
            Object(Ce.jsx)("div", { className: "top-marker", ref: p }),
            Object(Ce.jsx)(s, {
              children: Object(Ce.jsx)(Cp, {
                style: { display: L ? "none" : "flex" },
              }),
            }),
            Object(Ce.jsxs)("div", {
              className: "home-page",
              children: [
                Object(Ce.jsxs)("div", {
                  className: "banner-and-product",
                  children: [
                    Object(Ce.jsx)("div", {
                      className: "top-banner",
                      children: Object(Ce.jsxs)("div", {
                        className: "section",
                        children: [
                          l
                            ? Object(Ce.jsxs)("div", {
                                className: "top-banner-right",
                                children: [
                                  Object(Ce.jsx)("img", {
                                    src: Ms,
                                    className: "top-rocket-base",
                                  }),
                                  Object(Ce.jsx)(he.animated.img, {
                                    style: l ? m : {},
                                    src: Os,
                                    className: "top-rocket",
                                  }),
                                  Object(Ce.jsx)("img", {
                                    className: "top-clouds",
                                    src: Ps,
                                  }),
                                ],
                              })
                            : Object(Ce.jsxs)("div", {
                                className: "top-banner-right",
                                children: [
                                  Object(Ce.jsx)(js, { className: "top-img" }),
                                  Object(Ce.jsx)("img", {
                                    className: "top-clouds",
                                    src: Ps,
                                  }),
                                ],
                              }),
                          Object(Ce.jsxs)("div", {
                            className: "top-banner-left",
                            children: [
                              Object(Ce.jsx)("div", {
                                className: "title",
                                children: "Trade Futures",
                              }),
                              Object(Ce.jsx)("div", {
                                className: "title",
                                children: Object(Ce.jsx)(op.a, {
                                  strings: [
                                    "Anything",
                                    "Anytime",
                                    "Anything, Anytime.",
                                  ],
                                  typeSpeed: 120,
                                  showCursor: !1,
                                }),
                              }),
                              Object(Ce.jsxs)("div", {
                                className: "sub-title",
                                children: [
                                  "PsstCrypto enables direct trading via ",
                                  Object(Ce.jsx)("br", {}),
                                  "Polygon smart contracts, no intermediaries involved. ",
                                ],
                              }),
                              Object(Ce.jsx)("div", {
                                className: De()("top-banner-btn-wrap", t),
                                children: Object(Ce.jsxs)("a", {
                                  href: ke,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className:
                                    "syn-btn early-access-btn  ".concat(t),
                                  onClick: function () {
                                    u("Trade Now");
                                  },
                                  children: [
                                    Object(Ce.jsx)("img", { src: sp }),
                                    Object(Ce.jsx)("span", {
                                      children: "Trade Now",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(Ce.jsx)("div", {
                      className: "product-section",
                      children: Object(Ce.jsxs)("div", {
                        className: "section flex-column",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "section-title-container",
                            children: [
                              Object(Ce.jsxs)("div", {
                                className: "section-title",
                                children: [
                                  "Discover Our ",
                                  Object(Ce.jsx)("span", {
                                    className: "title",
                                    children: "Products",
                                  }),
                                ],
                              }),
                              Object(Ce.jsx)("div", {
                                className: "section-sub-title",
                                children:
                                  "Trade freely in PsstCrypto' derivatives market",
                              }),
                              Object(Ce.jsx)("div", {
                                className: "section-sub-title",
                                children: "whenever and however you want.",
                              }),
                            ],
                          }),
                          Object(Ce.jsxs)("div", {
                            className: "products",
                            children: [
                              Object(Ce.jsxs)("div", {
                                className: "product nft",
                                children: [
                                  Object(Ce.jsx)("img", {
                                    loading: "lazy",
                                    src: As,
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "product-info",
                                    children: [
                                      Object(Ce.jsxs)("div", {
                                        className: "content",
                                        children: [
                                          Object(Ce.jsx)("div", {
                                            className: "product-title",
                                            children: " Futures",
                                          }),
                                          Object(Ce.jsx)("div", {
                                            className: "product-sub-title",
                                            children:
                                              "Long or short with leverage and fun",
                                          }),
                                        ],
                                      }),
                                      Object(Ce.jsxs)(ht, {
                                        href: "https://trade-psst-crypto.vercel.app/",
                                        type: "third",
                                        target: "_blank",
                                        className:
                                          "syn-btn syn-btn-third product-know-more ".concat(
                                            t
                                          ),
                                        children: [
                                          "Learn More",
                                          " ",
                                          Object(Ce.jsx)(d, {
                                            children: Object(Ce.jsx)(zs, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(Ce.jsxs)("div", {
                                className: "product crypto",
                                children: [
                                  Object(Ce.jsx)("img", {
                                    loading: "lazy",
                                    src: Ns,
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "product-info",
                                    children: [
                                      Object(Ce.jsxs)("div", {
                                        className: "content",
                                        children: [
                                          Object(Ce.jsx)("div", {
                                            className: "product-title",
                                            children: "Crypto Futures",
                                          }),
                                          Object(Ce.jsxs)("div", {
                                            className: "product-sub-title",
                                            children: [
                                              "Trade any fungible assets, or list your own with a few clicks",
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(Ce.jsxs)(ht, {
                                        href: "https://trade-psst-crypto.vercel.app/",
                                        type: "third",
                                        target: "_blank",
                                        className:
                                          "syn-btn syn-btn-third product-know-more ".concat(
                                            t
                                          ),
                                        children: [
                                          "Learn More",
                                          Object(Ce.jsx)(d, {
                                            children: Object(Ce.jsx)(zs, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(Ce.jsxs)("div", {
                                className: "product de-orc",
                                children: [
                                  Object(Ce.jsx)("img", {
                                    loading: "lazy",
                                    src: Ds,
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "product-info",
                                    children: [
                                      Object(Ce.jsxs)("div", {
                                        className: "content",
                                        children: [
                                          Object(Ce.jsx)("div", {
                                            className: "product-title",
                                            children: "Decentralized Oracles",
                                          }),
                                          Object(Ce.jsx)("div", {
                                            className: "product-sub-title",
                                            children:
                                              "Explore the open and trustless Bitcoin Hash Rate Oracle",
                                          }),
                                        ],
                                      }),
                                      Object(Ce.jsxs)(ht, {
                                        href: "https://trade-psst-crypto.vercel.app/",
                                        type: "third",
                                        target: "_blank",
                                        className:
                                          "syn-btn syn-btn-third product-know-more ".concat(
                                            t
                                          ),
                                        children: [
                                          "Learn More",
                                          Object(Ce.jsx)(d, {
                                            children: Object(Ce.jsx)(zs, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(Ce.jsx)("div", {
                  className: "product-uniqueness",
                  children: Object(Ce.jsxs)("div", {
                    className: "section flex-column",
                    children: [
                      Object(Ce.jsx)("div", {
                        className: "section-title-container",
                        children: Object(Ce.jsxs)("div", {
                          className: "section-title",
                          children: [
                            "What Makes Us\xa0",
                            Object(Ce.jsx)("span", {
                              className: "title",
                              children: "Unique",
                            }),
                          ],
                        }),
                      }),
                      Object(Ce.jsxs)("div", {
                        className: "top-section",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "left",
                            children: [
                              Object(Ce.jsxs)("div", {
                                className: "unique-item",
                                children: [
                                  Object(Ce.jsx)("div", {
                                    className: "img",
                                    children: Object(Ce.jsx)("img", {
                                      loading: "lazy",
                                      src: pp,
                                    }),
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "content",
                                    children: [
                                      Object(Ce.jsx)("div", {
                                        className: "content-title",
                                        children: "30-second Asset Listings",
                                      }),
                                      Object(Ce.jsx)("div", {
                                        className: "content-sub-title",
                                        children:
                                          "List and trade any futures contracts based on popular cryptocurrencies, altcoins, indices, NFTs and real-world assets \u2014you name it!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(Ce.jsxs)("div", {
                                className: "unique-item",
                                children: [
                                  Object(Ce.jsx)("div", {
                                    className: "img",
                                    children: Object(Ce.jsx)("img", {
                                      loading: "lazy",
                                      src: dp,
                                    }),
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "content",
                                    children: [
                                      Object(Ce.jsx)("div", {
                                        className: "content-title",
                                        children:
                                          "Single-token Liquidity Provision & Trading",
                                      }),
                                      Object(Ce.jsx)("div", {
                                        className: "content-sub-title",
                                        children:
                                          "Provide liquidity or take leveraged positions on various assets pairs with a single digital currency via our sAMM model.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(Ce.jsxs)("div", {
                                className: "unique-item",
                                children: [
                                  Object(Ce.jsx)("div", {
                                    className: "img",
                                    children: Object(Ce.jsx)("img", {
                                      loading: "lazy",
                                      src: Lp,
                                    }),
                                  }),
                                  Object(Ce.jsxs)("div", {
                                    className: "content",
                                    children: [
                                      Object(Ce.jsx)("div", {
                                        className: "content-title",
                                        children: "Rigid Risk Management",
                                      }),
                                      Object(Ce.jsx)("div", {
                                        className: "content-sub-title",
                                        children:
                                          "Enter into futures contracts with hard peg to spot prices and secured by best practices in TradFi and CeFi derivatives.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(Ce.jsxs)("div", {
                            className: "right",
                            children: [
                              !a &&
                                Object(Ce.jsx)("img", {
                                  loading: "lazy",
                                  src: hp,
                                }),
                              Object(Ce.jsx)("div", {
                                className: "bottom-section",
                                children: Object(Ce.jsx)("a", {
                                  rel: "noreferrer",
                                  target: "_blank",
                                  href: "https://trade-psst-crypto.vercel.app/",
                                  className:
                                    "start-button syn-btn syn-btn-primary  ".concat(
                                      t
                                    ),
                                  children: "Get Started",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(Ce.jsx)("div", {
                  className: "investors",
                  children: Object(Ce.jsxs)("div", {
                    className: "section flex-column",
                    children: [
                      Object(Ce.jsxs)("div", {
                        className: "section-title-container",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "section-title",
                            children: [
                              "Strategic ",
                              Object(Ce.jsx)("span", {
                                className: "title",
                                children: "Investors",
                              }),
                            ],
                          }),
                          Object(Ce.jsx)("div", {
                            className: "section-sub-title",
                            children:
                              "Trusted by world-renowned investors and institutions.",
                          }),
                        ],
                      }),
                      Object(Ce.jsxs)("div", {
                        className: "logos",
                        children: [
                          Object(Ce.jsx)("a", {
                            href: "https://panteracapital.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "pantera",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: _s,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://polychain.capital",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "polychain",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: ks,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "http://dragonfly.xyz",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "dragonfly",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: vs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://standardcrypto.vc",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "standard",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Vs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://framework.ventures",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "framework",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Fs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://sig.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "sig",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: ws,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://www.bybit.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo bybit",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "bybit",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Zs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://www.hashkey.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "haskey",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: gs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://www.wintermute.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "wintermute",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Ss,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "http://cmsholdings.io",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "cms",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: xs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://woo.network",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "woo",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Hs,
                            }),
                          }),
                          Object(Ce.jsx)("a", {
                            href: "https://iosg.vc",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "logo",
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click investor",
                                label: "iosg",
                              });
                            },
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Bs,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                /*Object(Ce.jsx)("div", {
                  className: "latest-news",
                  children: Object(Ce.jsxs)("div", {
                    className: "section flex-column",
                    children: [
                      Object(Ce.jsxs)("div", {
                        className: "section-title-container",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "section-title",
                            children: [
                              "Latest ",
                              Object(Ce.jsx)("span", {
                                className: "title",
                                children: "News",
                              }),
                            ],
                          }),
                          Object(Ce.jsx)("div", {
                            className: "section-sub-title",
                            children:
                              "Stay up to date on all of the latest from the world\u2019s leading derivatives exchange.",
                          }),
                        ],
                      }),
                      Object(Ce.jsx)(fs.a, {
                        slidesToShow: a ? 1 : 3,
                        lazyLoad: "progressive",
                        customPaging: function (e) {
                          return Object(Ce.jsx)("button", {
                            onClick: function () {
                              return (
                                C.current && C.current.innerSlider.slickGoTo(e)
                              );
                            },
                          });
                        },
                        className: "news-carousel",
                        arrows: l,
                        autoplay: !0,
                        ref: C,
                        pauseOnDotsHover: !0,
                        nextArrow: Object(Ce.jsx)("div", {
                          className: "arrow",
                          children: Object(Ce.jsx)(Et, {}),
                        }),
                        prevArrow: Object(Ce.jsx)("div", {
                          className: "arrow left",
                          children: Object(Ce.jsx)(Et, {}),
                        }),
                        children: r.map(function (e, t) {
                          return Object(Ce.jsxs)(
                            "a",
                            {
                              href: e.link,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "news-item",
                              children: [
                                Object(Ce.jsx)("img", {
                                  className: "img",
                                  src: e.imgSrc || cp,
                                }),
                                Object(Ce.jsxs)("div", {
                                  className: "news-title",
                                  children: [e.title, " "],
                                }),
                                Object(Ce.jsxs)("div", {
                                  className: "news-date",
                                  children: [
                                    Object(Ce.jsx)(Ys.a, {
                                      className: "date-icon",
                                    }),
                                    e.date,
                                    " ",
                                    Object(Ce.jsx)(Xs, {
                                      className: "time-icon",
                                    }),
                                    e.readTime,
                                    " read",
                                  ],
                                }),
                                Object(Ce.jsx)("div", {
                                  className: "news-desc",
                                  children: e.desc,
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                }),*/
                Object(Ce.jsx)("div", {
                  className: "community",
                  children: Object(Ce.jsxs)("div", {
                    className: "section flex-column",
                    children: [
                      Object(Ce.jsxs)("div", {
                        className: "section-title-container",
                        children: [
                          Object(Ce.jsx)("div", {
                            className: "section-title",
                            children: Object(Ce.jsx)("span", {
                              className: "title",
                              children: "Community",
                            }),
                          }),
                          Object(Ce.jsx)("div", {
                            className: "section-sub-title",
                            children:
                              "Join a vibrant community who share and help each other on their investment journey.",
                          }),
                        ],
                      }),
                      Object(Ce.jsxs)("div", {
                        className: "social-list",
                        ref: c,
                        children: [
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "twitter",
                              });
                            },
                            className: "social-icon",
                            href: "https://twitter.com/",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: Object(Ce.jsx)(Ft, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "telegram",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://t.me/",
                            children: Object(Ce.jsx)($t, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "discord",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://discord.gg/",
                            children: Object(Ce.jsx)(Ht, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "medium",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://medium.com",
                            children: Object(Ce.jsx)(Ut, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "github",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://github.com",
                            children: Object(Ce.jsx)(Yt, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "youtube",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://www.youtube.com/channel/UCRHA7TThDHr7hGxtvM5_3vQ",
                            children: Object(Ce.jsx)(na, {}),
                          }),
                          Object(Ce.jsx)("a", {
                            onClick: function () {
                              o.a.event({
                                category: "Home page",
                                action: "Click social",
                                label: "reddit",
                              });
                            },
                            className: "social-icon",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            href: "https://www.reddit.com/r",
                            children: Object(Ce.jsx)(da, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(Ce.jsx)("div", {
                  className: "explore-products",
                  children: Object(Ce.jsxs)("div", {
                    className: "section",
                    children: [
                      Object(Ce.jsx)("div", {
                        className: "card explore",
                        children: Object(Ce.jsxs)("div", {
                          className: "left",
                          children: [
                            Object(Ce.jsx)("div", {
                              className: "section-title",
                              children: "Start Your",
                            }),
                            Object(Ce.jsx)("div", {
                              className: "section-title",
                              children: Object(Ce.jsx)("span", {
                                className: "title",
                                children: "Futures Trading Journey",
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(Ce.jsxs)("a", {
                        rel: "noreferrer",
                        href: "https://trade-psst-crypto.vercel.app/",
                        target: "_blank",
                        className: "card link blue",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "left",
                            children: [
                              Object(Ce.jsx)("div", {
                                className: "section-title",
                                children: "Crypto Futures",
                              }),
                              Object(Ce.jsx)("div", {
                                className: "section-sub-title",
                                children:
                                  "Trade any fungible assets or list your own contracts with a few clicks",
                              }),
                            ],
                          }),
                          Object(Ce.jsx)("div", {
                            className: "right",
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Ns,
                            }),
                          }),
                        ],
                      }),
                      Object(Ce.jsxs)("a", {
                        rel: "noreferrer",
                        href: "https://trade-psst-crypto.vercel.app/",
                        target: "_blank",
                        className: "card blue nft link",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "left",
                            children: [
                              Object(Ce.jsx)("div", {
                                className: "section-title",
                                children: " Futures",
                              }),
                              Object(Ce.jsx)("div", {
                                className: "section-sub-title",
                                children:
                                  "Long or short with leverage in a gamified and familiar user interface",
                              }),
                            ],
                          }),
                          Object(Ce.jsx)("div", {
                            className: "right",
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: As,
                            }),
                          }),
                        ],
                      }),
                      Object(Ce.jsxs)("a", {
                        rel: "noreferrer",
                        href: "https://trade-psst-crypto.vercel.app/",
                        target: "_blank",
                        className: "card green link",
                        children: [
                          Object(Ce.jsxs)("div", {
                            className: "left",
                            children: [
                              Object(Ce.jsx)("div", {
                                className: "section-title",
                                children: "Decentralized Oracles",
                              }),
                              Object(Ce.jsx)("div", {
                                className: "section-sub-title",
                                children:
                                  "Explore open, trustless Bitcoin Hash Rate Oracles",
                              }),
                            ],
                          }),
                          Object(Ce.jsx)("div", {
                            className: "right",
                            children: Object(Ce.jsx)("img", {
                              loading: "lazy",
                              src: Ds,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      a(375);
      function mp() {
        var e = h().deviceType;
        return Object(Ce.jsx)("div", {
          className: "home-page-container ".concat(e),
          children: Object(Ce.jsx)("div", {
            className: "home-page",
            children: Object(Ce.jsxs)("div", {
              className: "section flex-column policy",
              children: [
                Object(Ce.jsx)("h1", {
                  children: Object(Ce.jsx)("strong", {
                    children: "Terms of Service",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Welcome to https://psst..crytpo.com, a website-hosted user interface (the \u201cSite\u201d) provided by PsstCrypto (\u201dwe,\u201d \u201dour,\u201d or \u201dus\u201d).\xa0 The Site provides access to a blockchain protocol that allows users to trade certain digital assets (the \u201cPsstCrypto Protocol\u201d or \u201cProtocol\u201d).\xa0 The Site provides access to the Protocol and assists users in interacting with the Protocol, but is distinct from the Protocol itself.\xa0 We do not provide, manage, or control the Protocol itself.\xa0 The Site is one, but not the exclusive, means of accessing the Protocol.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "This Terms of Service Agreement (the \u201cAgreement\u201d) explains the terms and conditions by which you may access and use the Site. You must read this Agreement carefully. By accessing or using the Site, you acknowledge that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use the Site and must not use the Site.",
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", {
                    children:
                      "Please read this Agreement carefully as it governs your use of the Site. The Agreement contains important information, including a binding arbitration provision and a class action waiver, both of which impact your rights as to how disputes are resolved. You should only access the Site if you agree completely with the Agreement",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsxs)("strong", {
                    children: [
                      "Information in relation to the way we handle personal information is included in our Privacy Statement, available here ",
                      Object(Ce.jsx)("a", {
                        href: "/policy",
                        children: " ",
                      }),
                      ".",
                    ],
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "This Agreement may be amended, changed, or updated by us at any time and without prior notice to you. You should check back often on the Site to confirm that your copy and understanding of this Agreement is current and correct. Your non-termination or continued access or use of the Site or any Services after the effective date of any amendments, changes, or updates constitutes your acceptance of the Agreement, as modified by such amendments, changes, or updates.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The access or use of the Site and any of the Services is void where such access or use is prohibited by, would constitute a violation of, or would be subject to penalties under applicable Laws, and shall not be the basis for the assertion or recognition of any interest, right, remedy, power, or privilege.",
                }),
                Object(Ce.jsx)("h2", { children: "1. Definitions:" }),
                Object(Ce.jsx)("p", {
                  children:
                    "In these Terms of Service and all documents incorporated herein by reference, the following words have the following meanings unless otherwise indicated:",
                }),
                Object(Ce.jsxs)("ol", {
                  style: { listStyleType: "lower-alpha" },
                  children: [
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cAccount\u201d means a user\u2019s account on the Site and other records, all as utilized by us from time-to-time to record a user\u2019s balances of Digital Tokens, assist user\u2019s in accessing the Protocol, and other usage of the Services.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cAffiliate\u201d means, in relation to PsstCrypto, a direct or indirect subsidiary of PsstCrypto, a direct or indirect parent of PsstCrypto, and any other entities owned by a direct or indirect parent of PsstCrypto.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cAML\u201d means anti-money laundering, including all applicable Laws prohibiting money laundering or any acts or attempted acts to conceal or disguise the identity or origin of; change the form of; or move, transfer, or transport, illicit proceeds, property, funds, fiat currency, or Digital Tokens.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cAnti-Corruption\u201d means all applicable Laws prohibiting corruption or bribery of government officials of any kind, including kickbacks, inducements, and any other forms of corruption or bribery.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cCFT\u201d means countering the financing of terrorism.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cDigital Tokens\u201d means a digital representation of value that functions as (i) a medium of exchange; (ii) a unit of account; (iii) a store of value, and/or (iv) other similar digital representations of rights or assets, which is neither issued nor guaranteed by any country or jurisdiction and does not have legal tender status in any country or jurisdiction.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cDigital Tokens Wallet\u201d means a third party software application (or other mechanism) that provides a means for holding, storing, and transferring Digital Tokens. We do not provide users with Digital Tokens Wallets and users must obtain a Digital Tokens Wallet from a third party provider when accessing the Protocol through the Site.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cGovernment\u201d means any national, federal, state, municipal, local, or foreign branch of government, including any department, agency, subdivision, bureau, commission, court, tribunal, arbitral body, or other governmental, government appointed, or quasi-governmental authority or component exercising executive, legislative, juridical, regulatory, or administrative powers, authority, or functions of or pertaining to a government instrumentality, including any parasternal company, or state-owned (majority or greater) or controlled business enterprise;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cGovernment Official\u201d means an officer or employee of any Government, a director, officer, or employee of any instrumentality of any Government, a candidate for public office, a political party or political party official, an officer or employee of a public international organization, and any Person who is acting in an official capacity for any of the foregoing, even if such Person is acting in that capacity temporarily and without compensation;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cLaws\u201d means all laws, statutes, orders, regulations, rules, treaties, and/or official obligations or requirements enacted, promulgated, issued, ratified, enforced, or administered by any Government that apply to you, to us, or to the Site.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cPerson\u201d includes an individual, association, partnership, corporation, company, other body corporate, trust, estate, and any form of organization, group, or entity (whether or not having separate legal personality).",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cProhibited Jurisdiction\u201d means any of: Cuba, Democratic People\u2019s Republic of Korea (North Korea), Iran, Syria, or Crimea (a region of Ukraine annexed by the Russian Federation), China (including the Chinese mainland, Hong Kong, and the Macao Special Administrative Region), Malaysia, the United Kingdom, and the United States (including all American territories, such as Puerto Rico, American Samoa, Guam, Norther Mariana Islands, and Virgin Islands), Bangladesh, Bolivia, Ecuador, and Kyrgyzstan.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cProhibited Person\u201d means the Government of Venezuela; any citizen or resident of, entity organized within, or Government or Government Official of, any Prohibited Jurisdiction; and any Sanctioned Person.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cSanctions List\u201d means the \u201cSpecially Designated Nationals and Blocked Persons\u201d (\u201cSDN\u201d) List and the Non-SDN Lists, including the \u201cSectoral Sanctions Identifications List,\u201d published by the U.S. Department of the Treasury\u2019s Office of Foreign Assets Control (\u201cOFAC\u201d); the Section 311 Special Measures for Jurisdictions, Financial Institutions, or International Transactions of Primary Money Laundering Concern published by the U.S. Department of the Treasury\u2019s Financial Crimes Enforcement Network (\u201cFinCEN\u201d); and, any other foreign terrorist organization or other sanctioned, restricted, or debarred party list published under Economic Sanctions, AML, or CFT Laws of or by Governments of the United States, European Union, United Kingdom, or the United Nations.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cSanctioned Person\u201d refers to any Person that is: (i) specifically listed in any Sanctions List; (ii) directly or indirectly owned 50 percent or more by any Person or group of Persons in the aggregate listed in any Sanctions List, (iii) Government or Government Official of any Prohibited Jurisdiction; or (iv) that is otherwise sanctioned, restricted, or penalized under applicable economic sanctions, AML, or CFT Laws.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cServices\u201d means any and all services provided on or through the Site, including, but not limited to, assistance in accessing and using the Protocol.",
                    }),
                  ],
                }),
                Object(Ce.jsx)("h2", {
                  children: "2. Right to Use the Site: ",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you (i) have an Account, (ii) are not a Prohibited Person, (iii) do not operate your Account for the benefit of a Prohibited Person and (iv) otherwise fully comply with this Agreement, we grant you the limited right to use the Services.\xa0 The right to use the Services is a personal, restricted, non-exclusive, non-transferable, non-sublicensable, revocable, limited license, and it is subject to the limitations and obligations in this Agreement. Nothing in this Agreement gives you any license (other than as set out in this paragraph), right, title, or ownership of, in, or to the Site, any of the Services, the Copyrights, or the Marks. We may suspend or terminate the provision of Services to you or your Account at our sole discretion, as required by applicable Laws, where we determine that you have violated, breached, or acted inconsistent with any of this Agreement, or exposed us or any of our Affiliates to any liability under any applicable Laws.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Every Prohibited Person is strictly prohibited from directly or indirectly holding, owning or operating an Account in any way or otherwise using the Services or the Site.\xa0 No Account may be operated for the financial or other benefit of a Prohibited Person.",
                }),
                Object(Ce.jsx)("h2", { children: "3. Proprietary Rights" }),
                Object(Ce.jsx)("p", {
                  children:
                    "The trademarks, service marks, and trade names, including both word marks and design marks (the \u201cMark(s)\u201d) are used by us and our Affiliates under license. You agree not to appropriate, copy, display, reverse engineer, or use the Marks or other content without express, prior, written permission from us or the owner of the Marks, including as a domain name, as social media profile/handle, on a website, in an advertisement or other marketing, as or in connection with a phone number, as or in connection with an email address, in Internet search results, in meta data or code, or in any other manner.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Unless otherwise indicated, all materials on the Site are used by us under license (\u201cCopyrights\u201d). You agree not to appropriate, copy, display, or use the Copyrights or other content without express, prior, written permission from us or the third-party owner.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "You may link to the Site\u2019s homepage or other pages, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without prior, express, written consent.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Site may provide certain social media features that enable you to link, send communications, or display certain content from the Site. You may use these features solely as they are provided by us. You may not establish a link from any website that is not owned by you, cause the Site or portions of it to be displayed on or by any other site (for example, by framing, deep linking, or in-line linking), or otherwise take any action with respect to the materials on the Site that is inconsistent with any other provision of this Agreement.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Site and Services are protected by copyright, trademark, trade secret, and other intellectual property or proprietary rights laws in various jurisdictions. All rights not expressly granted to you in this Agreement are reserved by us or our licensor(s). Except as expressly authorized by us, you will not (i) license, sublicense, rent, sell, resell, transfer, assign, distribute, or otherwise commercially exploit or make available to any Person all or any part of the Site or Services in any way; (ii) copy, modify, republish, distribute, or make derivative works based upon all or any part of Site or Services; (iii) \u201cframe\u201d or \u201cmirror\u201d all or any part of the Site or Services on any other server or wireless or Internet-based device; or (iv) reverse engineer or access all or any part of Site or its Services in order to (a) build a competitive product or service, (b) build a product or service using similar ideas, features, functions, or graphics of all or any part of the Site or Services, or (c) copy any ideas, features, functions, or graphics of all or any part of the Site or Services.",
                }),
                Object(Ce.jsx)("h2", { children: "4. Additional Rights" }),
                Object(Ce.jsx)("p", {
                  children:
                    "We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you, to modify, substitute, eliminate or add to the Site; (b) to review, modify, filter, disable, delete and remove any and all content and information from the Site; and (c) to the extent permitted by law, to cooperate with any law enforcement, court or government investigation or order, or third party requesting or directing that we disclose information or content or information that you provide.",
                }),
                Object(Ce.jsx)("h2", { children: "5. Prohibited Uses" }),
                Object(Ce.jsx)("p", { children: "You may not:" }),
                Object(Ce.jsxs)("ol", {
                  style: { listStyleType: "decimal" },
                  children: [
                    Object(Ce.jsx)("li", {
                      children:
                        "use the Site or any Services in order to disguise the origin or nature of illicit proceeds of, or to further, any breach of applicable Laws, or to transact or deal in, any contraband Digital Tokens or other funds or property of any kind derived from illegal activity;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "use the Site or any Services if any applicable Laws would prohibit, penalize, sanction, or otherwise expose us to liability for any Services furnished or offered to you under this Agreement;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "use the Site or any Services to interfere with or subvert the rights or obligations of us or the rights or obligations of any other user of the Site or the Protocol or any other Person;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "use the Site or any Services to engage in conduct that is detrimental to us or any other user of the Site or the Protocol or any other Person;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "falsify or materially omit any information or provide misleading or inaccurate information requested by us or any of our Affiliates at any time;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "post, submit, publish, display, or transmit any advertising or promotional material without the prior written consent of us or our Affiliates;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "engage in activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including, but not limited to, the manipulative tactics such as spoofing and wash trading;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "engage in activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including (but not limited to) the deployment of viruses and denial of service attacks;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "engage in activity that violates any applicable law, rule, or regulation concerning the trading of securities or derivative;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "utilize the Site or any Services for the financial or other benefit of a Prohibited Person; or",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "violate, promote, cause a violation of, or conspire or attempt to violate this Agreement or applicable Laws.",
                    }),
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Any use as described in this section shall constitute a \u201cProhibited Use.\u201d If we determine or suspect that you have engaged in any Prohibited Use, we may address such Prohibited Use through appropriate action as determined by us in our sole and absolute discretion. Such action may include making a report to any Government, law enforcement, or other authorities, without providing any notice to you about any such report, and suspending or terminating your access to the Site or any Services. In addition, should your actions or inaction result in loss being suffered by us or any of our Affiliates, you shall pay an amount to us or the Affiliate so as to render us or the Affiliate whole, including the amount of taxes or penalties that might be imposed on us or the Affiliate.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "6. Non-Custodial and No Fiduciary Duties",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Site is a purely non-custodial application, meaning we do not control, hold, or otherwise have access to your Digital Tokens or the Digital Tokens Wallet you use when accessing the Services.\xa0 You must use a third-party Digital Tokens Wallet to use the Services and we have no control over the use or security of any such Digital Tokens Wallet. \xa0You are solely responsible for the custody of the cryptographic private keys to the Digital Tokens Wallet(s) you hold. This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "7. Non-Solicitation; No Investment Advice",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "You agree and understand that all trades you submit through the Site are considered unsolicited, which means that you have not received any investment advice from us in connection with any trades, and that we do not conduct a suitability review of any trades you submit.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "All information provided by the Site is for informational purposes only and should not be construed as investment advice. You should not take, or refrain from taking, any action based on any information contained in the Site. We do not make any investment recommendations to you or opine on the merits of any investment transaction or opportunity. You alone are responsible for determining whether any investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances, and risk tolerance.",
                }),
                Object(Ce.jsx)("h2", { children: "8. No Warranties" }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Site is provided on an\xa0\u201cAS IS\u201d\xa0and\xa0\u201cAS AVAILABLE\u201d\xa0basis. To the fullest extent permitted by law, we disclaim any representations and warranties of any kind, whether express, implied, or statutory, including (but not limited to) the warranties of merchantability and fitness for a particular purpose. To the extent permitted by law, you acknowledge and agree that your use of the Site is at your own risk; we do not represent or warrant that access to the Site will be continuous, uninterrupted, timely, or secure; that the information contained in the Site will be accurate, reliable, complete, or current; or that the Site will be free from errors, defects, viruses, or other harmful elements. No advice, information, or statement that we make should be treated as creating any warranty concerning the Site. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Site.",
                }),
                Object(Ce.jsx)("h2", { children: "9. Assumption of Risk" }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", {
                    children: Object(Ce.jsx)("u", {
                      children:
                        "There is no guarantee against losses when interacting with the Protocol through the Site.\xa0 You should not trade in Digital Tokens unless you understand the associated risks.\xa0 You should never trade more than you are willing to lose.",
                    }),
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "By accessing and using the Site, you represent that you are financially and technically sophisticated enough to understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of Digital Tokens. In particular, you understand that blockchain-based transactions are irreversible.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "You further understand that the markets for these digital assets are highly volatile due to factors including (but not limited to) adoption, speculation, technology, security, and regulation. You acknowledge and accept that the cost and speed of transacting with cryptographic and blockchain-based systems are variable and may increase dramatically at any time. You further acknowledge and accept the risk that your digital assets may lose some or all of their value while they are supplied to the Protocol through the Site. You understand that anyone can create a token, including fake versions of existing tokens and tokens that falsely claim to represent projects, and acknowledge and accept the risk that you may mistakenly trade those or other tokens. You further acknowledge that we are not responsible for any of these variables or risks, do not manage or control the Protocol, and cannot be held liable for any resulting losses that you experience while accessing or using the Protocol through the Site. Accordingly, to the extent permitted by law, you understand and agree to assume full responsibility for all of the risks of accessing and using the Site to interact with the Protocol.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "10. Third-Party Resources and Promotions",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Site may contain references or links to third-party resources, including (but not limited to) information, materials, products, or services, that we do not own or control. In addition, third parties may offer promotions related to your access and use of the Site. We do not endorse or assume any responsibility for any such resources or promotions. If you access any such resources or participate in any such promotions, you do so at your own risk, and you understand that this Agreement does not apply to your dealings or relationships with any third parties. To the extent permitted by law, you relieve us of any and all liability arising from your use of any such resources or participation in any such promotions.",
                }),
                Object(Ce.jsx)("h2", { children: "11. Release of Claims" }),
                Object(Ce.jsx)("p", {
                  children:
                    "To the extent permitted by law, you expressly agree that you assume all risks in connection with your access and use of the Site and your interaction with the Protocol. To the extent permitted by law, you further expressly waive and release us from any and all liability, claims, causes of action, or damages arising from or in any way relating to your use of the Site and your interaction with the Protocol.",
                }),
                Object(Ce.jsx)("h2", { children: "12. Indemnity" }),
                Object(Ce.jsx)("p", {
                  children:
                    "You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees, contractors, agents, and Affiliates from and against all claims, damages, obligations, losses, liabilities, costs, and expenses arising from: (a) your access and use of the Site; (b) your violation of any term or condition of this Agreement, the right of any third party, or any other applicable law, rule, or regulation; and (c) any other party\u2019s access and use of the Site with your assistance or using any device or account that you own or control.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "13. Limitation of Liability",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Under no circumstances shall we or any of our officers, directors, employees, contractors, agents, or Affiliates be liable to you for any indirect, punitive, incidental, special, consequential, or exemplary damages, including (but not limited to) damages for loss of profits, goodwill, use, data, or other intangible property, arising out of or relating to any access or use of the Site, nor will we be responsible for any damage, loss, or injury resulting from hacking, tampering, or other unauthorized access or use of the Site or the information contained within it. We assume no liability or responsibility for any: (a) errors, mistakes, or inaccuracies of content; (b) personal injury or property damage, of any nature whatsoever, resulting from any access or use of the Site; (c) unauthorized access or use of any secure server or database in our control, or the use of any information or data stored therein; (d) interruption or cessation of function related to the Site; (e) bugs, viruses, trojan horses, or the like that may be transmitted to or through the Site; (f) errors or omissions in, or loss or damage incurred as a result of the use of, any content made available through the Site; and (g) the defamatory, offensive, or illegal conduct of any third party. Under no circumstances shall we or any of our officers, directors, employees, contractors, agents, affiliates, or subsidiaries be liable to you for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount exceeding the amount you paid to us in exchange for access to and use of the Site, or 100 euros, whichever is greater. This limitation of liability applies regardless of whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, and even if we have been advised of the possibility of such liability. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of certain liabilities and damages. Accordingly, some of the disclaimers and limitations set forth in this Agreement may not apply to you. This limitation of liability shall apply to the fullest extent permitted by law.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "14. Resolution of Disputes",
                }),
                Object(Ce.jsxs)("p", {
                  children: [
                    "We will use our best efforts to resolve any potential disputes through informal, good faith negotiations. If a potential dispute arises, you must contact us by sending an email to",
                    " ",
                    Object(Ce.jsx)("a", {
                      href: "mailto:cyn@psstcrypto.com",
                      children: "cyn@psstcrypto.com",
                    }),
                    " so that we can attempt to resolve it without resorting to formal dispute resolution. If we aren\u2019t able to reach an informal resolution within ninety days of your email, then you and we both agree to resolve the potential dispute according to the process set forth below.",
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "All disputes arising out of or in connection with this Agreement, or any other acts or omissions for which you may contend that we are liable, including (but not limited to) any claim or controversy as to arbitrability, shall be finally settled under the Rules of Arbitration (\u201cRules\u201d) of the International Chamber of Commerce by a single arbitrator appointed in accordance with said Rules. No award or procedural order made in the arbitration shall be published. You understand that you are required to resolve all Disputes by final arbitration. The arbitration shall occur in English and will be held in Singapore, unless you and we both agree to hold it elsewhere. Unless we agree otherwise, the arbitrator may not consolidate your claims with those of any other party.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you are a consumer in the European Union, the foregoing shall be without prejudice to any applicable provisions of mandatory consumer protection law under the laws of your country of residence, to the extent that these offer you more protection in the European Union.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "15. Class Action and Jury Trial Waiver",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "You must bring any and all Disputes against us in your individual capacity and not as a plaintiff in or member of any purported class action, collective action, private attorney general action, or other representative proceeding. This provision applies to class arbitration. You and we both agree to waive the right to demand a trial by jury.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you are a consumer in the European Union, the foregoing shall be without prejudice to any applicable provisions of mandatory consumer protection law under the laws of your country of residence, to the extent that these offer you more protection in the European Union.",
                }),
                Object(Ce.jsx)("h2", { children: "16. Governing Law" }),
                Object(Ce.jsx)("p", {
                  children:
                    "You agree that the laws of Singapore, without regard to principles of conflict of laws, govern this Agreement and any Dispute between you and us. You further agree that the Site shall be deemed to be based solely in Singapore, and that although the Site may be available in other jurisdictions, its availability does not give rise to general or specific personal jurisdiction in any forum outside Singapore.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you are a consumer in the European Union, the foregoing shall be without prejudice to any applicable provisions of mandatory consumer protection law under the laws of your country of residence, to the extent that these offer you more protection in the European Union.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "17. Language and Contact details ",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "The Agreement and any information or notifications that you or we are to provide shall be in English. If you have any questions relating to these Agreement, your rights and obligations arising from these Terms and/or your use of the Site or any other matter, please, contact cyn@psstcrypto.com",
                }),
                Object(Ce.jsx)("h2", { children: "18. Entire Agreement" }),
                Object(Ce.jsx)("p", {
                  children:
                    "These terms constitute the entire agreement between you and us with respect to the subject matter hereof. This Agreement supersedes any and all prior or contemporaneous written and oral agreements, communications and other understandings (if any) relating to the subject matter of this Agreement.",
                }),
              ],
            }),
          }),
        });
      }
      a(376);
      function up() {
        var e = h().deviceType;
        return Object(Ce.jsx)("div", {
          className: "home-page-container ".concat(e),
          children: Object(Ce.jsx)("div", {
            className: "home-page",
            children: Object(Ce.jsxs)("div", {
              className: "section flex-column policy",
              children: [
                Object(Ce.jsxs)("h1", {
                  children: [
                    Object(Ce.jsx)("div", {
                      children: Object(Ce.jsx)("strong", {
                        children: "Privacy Statement",
                      }),
                    }),
                    Object(Ce.jsx)("a", {
                      href: "/",
                      children: "www.synfutures.com",
                    }),
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "At\xa0www.synfutures.com, we collect and manage user data according to the following Privacy Statement.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "This Privacy Statement sets out the basis on which any Personal Information we collect from you (\u201cyou\u201d, \u201cyour\u201d, or \u201ccustomer\u201d), or that you provide to us, will be processed by us. By \u201cPersonal Information\u201d, we mean any information which, either alone or in combination with other data, enables you to be directly or indirectly identified, for example your email address, IP address or device ID.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Please read the following carefully to understand what Personal Information we collect, how it is used and the ways it can be shared by us.",
                }),
                Object(Ce.jsx)("h2", {
                  children:
                    "1. What Personal Information do we collect about you, why and on which legal basis?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We collect information you provide directly to us. In particular:",
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "We collect your email address for you to subscribe to our newsletter and receive our communications. We do so on the basis of your consent.",
                  }),
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "We might also collect your contact information, including your name and any information you choose to provide if you request customer support or otherwise communicate with us. We do so when you reach out to us by email or if you use our chatbot service. We do so as it is necessary to provide our services to you.",
                  }),
                }),
                Object(Ce.jsx)("p", { children: "We also collect:" }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "Public Ethereum addresses to identify a user\u2019s journey through our Interface. We group and analyze these user journeys collectively in order to provide adequate security for our users and to improve our overall App user experience. We do so because we believe we have a legitimate interest in understanding how our site is used and in keeping it secure.",
                  }),
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "Information about you or your device when you visit our website or when we send you an email. This information may be considered to be Personal Information either in itself or when combined with other information about You. This includes technical information, including the Internet protocol (IP) address used to connect your device to the Internet and browser type and version, as well as information about your visit, including the dates and times You use our website, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), etc. or information on whether you open an email. We use cookies and other tracking technologies to do so. You can learn more about such technologies by reading our Cookies Notice.",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "In some cases, we collect and process the Personal Information mentioned above on the basis of our legitimate interest. In particular, we do so for the following purposes: administering the website, system administration and detection of usage patterns, detection for troubleshooting purposes.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "2. Do we share your Personal Information?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "As necessary, we will share your Personal Information with:",
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children: "Members of our group.",
                  }),
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "Our service providers, to the extent necessary to supply the Services to you.",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We also disclose your Personal Information to third parties:",
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "If we or substantially all of our assets are acquired by a third party, in which case Personal Information held by it about its customers will be one of the transferred assets.",
                  }),
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "If we are under a duty to disclose or share your Personal Information in order to comply with any legal obligation; or to protect the rights, property, or safety of us, our clients, or others, including to defend ourselves from legal claims.",
                  }),
                }),
                Object(Ce.jsx)("ul", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "If we believe it's needed to detect, prevent or address fraud, security or technical issues.",
                  }),
                }),
                Object(Ce.jsx)("h2", {
                  children: "3. Do we transfer your Personal Information?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "When we transfer Personal Information outside of the European Economic Area, we take steps to ensure we comply with the applicable data protection framework. Please reach out to us if you have any questions.",
                }),
                Object(Ce.jsx)("h2", {
                  children:
                    "4. For how long do we keep your Personal Information?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We have data retention and deletion policies designed to retain Personal Information for no longer than necessary for the purposes set out herein or as otherwise required to meet legal or business needs.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "5. How do we secure your Personal Information?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We are committed to protecting your privacy. Internally, only people with a business need to know Personal Information, or whose duties reasonably require access to it, are granted access to customers\u2019 Personal Information.\xa0Such individuals will only process your Personal Information on our instructions and are subject to a duty of confidentiality. We audit our personnel\u2019 compliance regularly.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We employ industry standard techniques and have put in place procedures to deal with any actual or suspected data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We take reasonable steps to protect personally identifiable information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. But, you should keep in mind that no Internet transmission is ever completely secure or error-free. In particular, email sent to or from the Sites may not be secure.",
                }),
                Object(Ce.jsx)("h2", { children: "6. What are your rights?" }),
                Object(Ce.jsxs)("p", {
                  children: [
                    "All Customers. You may access, verify, request the deletion of your Personal Information held by us and, where consent is the legal basis for processing of your Personal Information and subject to any legal or contractual restrictions, withdraw your consent, in each case, by a written request to us at cyn@psstcrypto.com. Our electronic marketing communications also contain opt-out mechanism and options to update your contact information or change your preferences at any time. We will do our best to honor your request promptly. For cookies, this is done by setting up the cookie\u2019s preferences. Please visit our Cookies Policy ",
                    Object(Ce.jsx)("a", {
                      href: "/cookies",
                      children: " ",
                    }),
                    ".",
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "European Economic Area Customers. You have a number of rights in relation to how we process your Personal Information. You may exercise these rights by contacting us (see details below). These include the right to:",
                }),
                Object(Ce.jsxs)("ul", {
                  children: [
                    Object(Ce.jsx)("li", {
                      children:
                        "Access the Personal Information that we may hold about you;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Rectify any inaccurate Personal Information that we may hold about you;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Have your Personal Information erased in certain circumstances, for example, where it is no longer necessary for us to process your Personal Information to fulfill our processing purposes; or where you have exercised your right to object to the processing;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Restrict the processing of your Personal Information where, for example, the information is inaccurate or it is no longer necessary for us to process such information or where you have exercised your right to object to our processing;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Object to the processing of your Personal Information which may be exercised in certain circumstances, for example, where we are processing your Personal Information for direct marketing purposes, or where your own legitimate interests outweigh ours;",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Have your Personal Information ported to a new service provider if you no longer wish to use the Services. You may exercise these rights by contacting us (see details below);",
                    }),
                    Object(Ce.jsxs)("li", {
                      children: [
                        "When we rely on your consent to process Personal Information, you have the right to withdraw your consent at any time. [For cookies, this is done by setting up the cookie\u2019s preferences. Please visit our Cookies Notice ",
                        Object(Ce.jsx)("a", {
                          href: "/cookies",
                          children: " ",
                        }),
                        ". For newsletters, you can do so by clicking on the unsubscribe link at the bottom of our emails.",
                      ],
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "Lodge a complaint with a supervisory authority.",
                    }),
                  ],
                }),
                Object(Ce.jsx)("h2", {
                  children: "7. Changes to the Privacy Statement ",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We may amend this Privacy Statement from time to time. Use of information we collect now is subject to the Privacy Statement in effect at the time such information is used.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "8. How can you contact us?",
                }),
                Object(Ce.jsx)("p", { children: "cyn@psstcrypto.com" }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", { children: "Version 2" }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", {
                    children: "December 2021",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      a(377);
      function yp() {
        var e = h().deviceType;
        return Object(Ce.jsx)("div", {
          className: "home-page-container ".concat(e),
          children: Object(Ce.jsx)("div", {
            className: "home-page",
            children: Object(Ce.jsxs)("div", {
              className: "section flex-column policy",
              children: [
                Object(Ce.jsx)("h1", {
                  children: Object(Ce.jsx)("strong", {
                    children: "Cookies Notice",
                  }),
                }),
                Object(Ce.jsxs)("p", {
                  children: [
                    "Welcome to synfutures.com (the \u201c",
                    Object(Ce.jsx)("strong", { children: "Site" }),
                    "\u201c). The Site is owned and operated by PsstCrypto (\u201c",
                    Object(Ce.jsx)("strong", { children: "Synfutures\u201d" }),
                    " \u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d).",
                  ],
                }),
                Object(Ce.jsxs)("p", {
                  children: [
                    "We place small text files called cookies and other tracking technologies (such as scripts or web beacons) on your device (together \u201c",
                    Object(Ce.jsx)("strong", { children: "cookies" }),
                    '\u201d). This cookies\u2019 notice (the "',
                    Object(Ce.jsx)("strong", { children: "Cookies Notice" }),
                    '") explains how cookies are used on the Site and in our emails and how you can control them. These tracking technologies may be deployed by us but also by other parties. Cookies may also collect Personal Information (such as your IP address). Take a look at our Privacy Statement',
                    " ",
                    Object(Ce.jsx)("a", {
                      href: "/policy",
                      children: " ",
                    }),
                    " to know how we process Personal Information.",
                  ],
                }),
                Object(Ce.jsx)("h2", { children: "1. What are Cookies?" }),
                Object(Ce.jsx)("p", {
                  children:
                    "\u201cCookies\u201d are small text files placed on your device/terminal. Cookies are used to collect information about how you use websites or application, such as information about your computer or device, web browser and operating system and their settings, the pages and content you see during your visit and when and for how long you do so, etc.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Cookies can be distinguished in \u201csession cookies\u201d and \u201cpersistent cookies\u201d depending on the time they remain stored on your device:",
                }),
                Object(Ce.jsxs)("ol", {
                  children: [
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cSession cookies\u201d are stored on your device the moment you visit the Site/application and are automatically deleted when you close your browser/application.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cPersistent cookies\u201d are stored on your device when you visit the Site/application and remain stored after you close your browser. They will automatically be activated again when you open your browser/application. They will remain on your device until their expiration date or until you delete them.",
                    }),
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "Cookies can be also distinguished in \u201cfirst party cookies\u201d and \u201cthird party cookies\u201d depending on the website or the domain that installs the cookies.",
                }),
                Object(Ce.jsxs)("ol", {
                  children: [
                    Object(Ce.jsxs)("li", {
                      children: [
                        "\u201cFirst party cookies\u201d are installed by the website that you visit, in our case",
                        " ",
                        Object(Ce.jsx)("a", {
                          href: "/",
                          children: "",
                        }),
                        ".",
                      ],
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "\u201cThird party cookies\u201d are installed by a different domain than the one you visit. If you visit a website and a third company installs a cookie through this website, this will be a third-party cookie.",
                    }),
                  ],
                }),
                Object(Ce.jsx)("h2", {
                  children: "2. What Types of Cookies We Use and Why?",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "We use strictly necessary and analytical cookies. You can find more details below.",
                }),
                Object(Ce.jsx)("ol", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "Strictly Necessary cookies \u2013 We need these cookies to make the website function (for examples for security reasons or to remember your cookies' choices). These cookies cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but some parts of the Site will not then work",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: "List of strictly necessary cookies:",
                }),
                Object(Ce.jsxs)("table", {
                  className: "cookies-table",
                  children: [
                    Object(Ce.jsx)("thead", {
                      children: Object(Ce.jsxs)("tr", {
                        children: [
                          Object(Ce.jsx)("th", {
                            style: { width: 200 },
                            children: "Name",
                          }),
                          Object(Ce.jsx)("th", {
                            style: { width: 200 },
                            children: "First / Third Party",
                          }),
                          Object(Ce.jsx)("th", {
                            style: { width: 100 },
                            children: "Lifespan",
                          }),
                          Object(Ce.jsx)("th", { children: "Purpose" }),
                        ],
                      }),
                    }),
                    Object(Ce.jsxs)("tbody", {
                      children: [
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "OptanonAlertBoxClosed",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "First Party",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "Persistent",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children:
                                  "This cookie is set after visitors have seen the banner. It enables the website not to show the message more than once to a user.",
                              }),
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "OptanonConsent",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "First Party",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "Persistent",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children:
                                  "This cookie is set by the cookie compliance solution from OneTrust. It stores information about the categories of cookies the site uses and whether visitors have given or withdrawn consent for the use of each category.",
                              }),
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "__cfruid",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "Third Party \u2013 Medium.com",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children: "Session",
                              }),
                            }),
                            Object(Ce.jsx)("td", {
                              children: Object(Ce.jsx)("p", {
                                children:
                                  "Cloudflare sets this cookie to identify trusted web traffic.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(Ce.jsx)("ol", {
                  children: Object(Ce.jsx)("li", {
                    children:
                      "Analytics \u2013 With these cookies we know more about visits and traffic on our website so we can measure and improve the its performance. They help us to know which pages are the most and least popular and see how visitors move around the Site.",
                  }),
                }),
                Object(Ce.jsxs)("table", {
                  className: "cookies-table",
                  children: [
                    Object(Ce.jsx)("thead", {
                      children: Object(Ce.jsxs)("tr", {
                        children: [
                          Object(Ce.jsx)("th", {
                            style: { width: 200 },
                            children: "Name",
                          }),
                          Object(Ce.jsx)("th", {
                            style: { width: 200 },
                            children: "First / Third Party",
                          }),
                          Object(Ce.jsx)("th", {
                            style: { width: 100 },
                            children: "Lifespan",
                          }),
                          Object(Ce.jsx)("th", { children: "Purpose" }),
                        ],
                      }),
                    }),
                    Object(Ce.jsxs)("tbody", {
                      children: [
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", { children: "_gid" }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Persistent" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is associated with Google Universal Analytics. It stores information of how visitors use a website and helps in creating analytics report of how the website is doing.",
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", { children: "_ga" }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Persistent" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is associated with Google Universal Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is used to calculate visitor, session and campaign data for the site\u2019s analytics reports.",
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", { children: "_gat" }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Persistent" }),
                            Object(Ce.jsxs)("td", {
                              children: [
                                Object(Ce.jsx)("div", {
                                  children:
                                    "This cookie is associated with Google Universal Analytics. It is used to throttle the request rate - limiting the collection of data on high traffic sites. it expires after 10 minutes.",
                                }),
                                "Third-Party Host",
                              ],
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: "omnisendSessionID",
                            }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Persistent" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is used to identify a session of an anonymous contact or a contact. This cookie is used for setting a unique ID for the session. The cookie collects information on visitor behavior on the website for statistical purposes.",
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: "soundest-views",
                            }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Session" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is used to count number of pageview in a session.",
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsxs)("td", {
                              children: [
                                Object(Ce.jsx)("br", {}),
                                " soundestID",
                              ],
                            }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Session" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is used for determining if a visitor is new to the website or the visitor had visited before.",
                            }),
                          ],
                        }),
                        Object(Ce.jsxs)("tr", {
                          children: [
                            Object(Ce.jsx)("td", {
                              children: "omnisendAnonymousID",
                            }),
                            Object(Ce.jsx)("td", { children: "First Party" }),
                            Object(Ce.jsx)("td", { children: "Persistent" }),
                            Object(Ce.jsx)("td", {
                              children:
                                "This cookie is used for storing the user action on the website with a unique ID. The cookie encrypts the visitor data for the security of user data.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(Ce.jsx)("h2", {
                  children: "3. Web Beacons and Pixels ",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "When we send you an email, it may contain a small snippet of code called a web beacon. Web beacons, also called tracking pixels, allow us to collect certain information about your interaction with the email. Through web beacons, we may capture your IP address and the date/time that you opened or interacted with an html email. We may also record any links you click. We use the information we collect to understand what emails or services were of interest to you. We also do this to better tailor our messages to you. By setting your email system to display HTML emails as text only, you may be able to prevent the use of some web beacons. Please consult the \u201cHelp\u201d section of your email system for more information.",
                }),
                Object(Ce.jsx)("h2", {
                  children: "4. How can I set up my Cookies\u2019 Preferences?",
                }),
                Object(Ce.jsx)("p", {
                  children: "The Site uses essential cookies by default.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "When you visit the Site for the first time, a cookies pop-up appears; this pop-up informs you on the use of cookies. This pop-up gives you the following options:",
                }),
                Object(Ce.jsxs)("ol", {
                  children: [
                    Object(Ce.jsx)("li", {
                      children:
                        "To accept all cookies being stored on your device.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "To refuse all cookies, except the essential ones, being stored on your device.",
                    }),
                    Object(Ce.jsx)("li", {
                      children:
                        "To access the Cookies Settings and set up your preferences.",
                    }),
                  ],
                }),
                Object(Ce.jsxs)("p", {
                  children: [
                    "You can also take proactive steps yourself, for example, to opt out of being tracked by Google Analytics across all websites, visit",
                    " ",
                    Object(Ce.jsx)("a", {
                      href: "http://tools.google.com/dlpage/gaoptout",
                      children: "http://tools.google.com/dlpage/gaoptout",
                    }),
                    " for more information. Most internet browsers offer means to control the use of cookies, which allow you to block or delete cookies at any time. You may change the settings of your browser, so that it informs you prior to a cookie being stored on your device or follow instructions to delete all cookies which have been stored on your device. If you use multiple devices, you must change your browser settings in all of them.",
                  ],
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "To manage your cookies preferences through your browser, follow these links, depending on the browser you are using:",
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies",
                    children: "Microsoft Windows Explorer",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences",
                    children: "Mozilla Firefox",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en",
                    children: "Google Chrome",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.apple.com/kb/ph19214?locale=en_US",
                    children: "Apple Safari",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://www.opera.com/help",
                    children: "Opera",
                  }),
                }),
                Object(Ce.jsx)("p", { children: "On mobile devices:" }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.google.com/android/?hl=en#topic=7313011",
                    children: "Android",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.apple.com/en-us/HT201265",
                    children: "Safari",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://support.microsoft.com/en-us/products/windowsphone",
                    children: "Windows Phone",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("a", {
                    href: "https://global.blackberry.com/en/support",
                    children: "Blackberry",
                  }),
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you use another browser, you may find the cookie management instructions in the support page of your browser.",
                }),
                Object(Ce.jsx)("p", {
                  children:
                    "You can learn more on cookies on the following third-party websites:",
                }),
                Object(Ce.jsxs)("ol", {
                  children: [
                    Object(Ce.jsxs)("li", {
                      children: [
                        "AllAboutCookies: ",
                        Object(Ce.jsx)("a", {
                          href: "http://www.allaboutcookies.org/",
                          children: "http://www.allaboutcookies.org/",
                        }),
                      ],
                    }),
                    Object(Ce.jsxs)("li", {
                      children: [
                        "Cookiepedia: ",
                        Object(Ce.jsx)("a", {
                          href: "http://cookiepedia.co.uk/",
                          children: "http://cookiepedia.co.uk/",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(Ce.jsx)("h2", { children: "5. Contact" }),
                Object(Ce.jsx)("p", {
                  children:
                    "If you have any queries about the way we use cookies, contact us at cyn@psstcrypto.com.",
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", { children: "Version 1" }),
                }),
                Object(Ce.jsx)("p", {
                  children: Object(Ce.jsx)("strong", {
                    children: "December 2021",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      a(378);
      function Ep() {
        return (
          (function () {
            var e = Xe();
            Object(i.useEffect)(
              function () {
                e(lt());
              },
              [e]
            );
          })(),
          null
        );
      }
      var bp = function () {
        return Object(Ce.jsx)(Ce.Fragment, {
          children: Object(Ce.jsx)(Ep, {}),
        });
      };
      var jp = function () {
          var e = h().deviceType;
          Object(i.useEffect)(
            function () {
              window.document.documentElement.className = e;
            },
            [e]
          );
          var t = Object(C.g)(),
            a = t.pathname;
          t.search,
            Object(i.useEffect)(
              function () {
                return (
                  a.startsWith("/signup") &&
                    (window.document.body.className = "signup-page-body"),
                  function () {
                    window.document.body.className = "";
                  }
                );
              },
              [a]
            );
          var l = Object(i.useMemo)(function () {
            return Object(Ce.jsx)(C.a, { to: "/" });
          }, []);
          return Object(Ce.jsxs)("div", {
            className: "App ".concat(e),
            children: [
              Object(Ce.jsx)(ga, {}),
              Object(Ce.jsx)(bp, {}),
              Object(Ce.jsxs)(C.e, {
                children: [
                  Object(Ce.jsxs)(C.c, {
                    element: Object(Ce.jsx)(Za, {}),
                    children: [
                      Object(Ce.jsx)(C.c, {
                        path: "/",
                        element: Object(Ce.jsx)(fp, {}),
                      }),
                      Object(Ce.jsx)(C.c, {
                        path: "/terms",
                        element: Object(Ce.jsx)(mp, {}),
                      }),
                      Object(Ce.jsx)(C.c, {
                        path: "/policy",
                        element: Object(Ce.jsx)(up, {}),
                      }),
                      Object(Ce.jsx)(C.c, {
                        path: "/cookies",
                        element: Object(Ce.jsx)(yp, {}),
                      }),
                    ],
                  }),
                  Object(Ce.jsx)(C.c, { path: "*", element: l }),
                ],
              }),
            ],
          });
        },
        Mp = Object(et.a)({ reducer: { info: lp, global: ot } });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Op = a(67),
        Zp = "UA-195134626-1";
      o.a.initialize(Zp),
        n.a.render(
          Object(Ce.jsx)(l.a.StrictMode, {
            children: Object(Ce.jsx)(Op.a, {
              children: Object(Ce.jsx)(Ke.a, {
                store: Mp,
                children: Object(Ce.jsx)(jp, {}),
              }),
            }),
          }),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[160, 1, 2]],
]);
//# sourceMappingURL=main.e8980dd5.chunk.js.map
