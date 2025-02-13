import { r as n } from './index-24a58ae8.js';
function e(n) {
  return (n && n.ownerDocument) || document;
}
const t = !(
  'undefined' == typeof window ||
  !window.document ||
  !window.document.createElement
);
var r = !1,
  o = !1;
try {
  var u = {
    get passive() {
      return (r = !0);
    },
    get once() {
      return (o = r = !0);
    },
  };
  t &&
    (window.addEventListener('test', u, u),
    window.removeEventListener('test', u, !0));
} catch (h) {}
function c(n, e, t, u) {
  if (u && 'boolean' != typeof u && !o) {
    var c = u.once,
      i = u.capture,
      a = t;
    !o &&
      c &&
      ((a =
        t.__once ||
        function n(r) {
          this.removeEventListener(e, n, i), t.call(this, r);
        }),
      (t.__once = a)),
      n.addEventListener(e, a, r ? u : i);
  }
  n.addEventListener(e, t, u);
}
function i(n, e, t, r) {
  var o = r && 'boolean' != typeof r ? r.capture : r;
  n.removeEventListener(e, t, o),
    t.__once && n.removeEventListener(e, t.__once, o);
}
function a(n, e, t, r) {
  return (
    c(n, e, t, r),
    function () {
      i(n, e, t, r);
    }
  );
}
var f = function (n) {
  return n && 'function' != typeof n
    ? function (e) {
        n.current = e;
      }
    : n;
};
function s(e, t) {
  return n.useMemo(
    function () {
      return (function (n, e) {
        var t = f(n),
          r = f(e);
        return function (n) {
          t && t(n), r && r(n);
        };
      })(e, t);
    },
    [e, t],
  );
}
function d(e) {
  var t = (function (e) {
    var t = n.useRef(e);
    return (
      n.useEffect(
        function () {
          t.current = e;
        },
        [e],
      ),
      t
    );
  })(e);
  return n.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function v() {
  return n.useState(null);
}
function l() {
  var e = n.useRef(!0),
    t = n.useRef(function () {
      return e.current;
    });
  return (
    n.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function p(e) {
  var t = n.useRef(null);
  return (
    n.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var m =
  'undefined' != typeof global &&
  global.navigator &&
  'ReactNative' === global.navigator.product;
const w = 'undefined' != typeof document || m ? n.useLayoutEffect : n.useEffect;
var E = Function.prototype.bind.call(Function.prototype.call, [].slice);
function y(n, e) {
  return E(n.querySelectorAll(e));
}
function b(n, e) {
  return n.contains
    ? n.contains(e)
    : n.compareDocumentPosition
    ? n === e || !!(16 & n.compareDocumentPosition(e))
    : void 0;
}
const g = 'data-rr-ui-';
function L(n) {
  return `${g}${n}`;
}
const _ = n.createContext(t ? window : void 0);
function R() {
  return n.useContext(_);
}
_.Provider;
export {
  R as a,
  d as b,
  t as c,
  L as d,
  w as e,
  l as f,
  p as g,
  b as h,
  v as i,
  c as j,
  a as l,
  e as o,
  y as q,
  i as r,
  s as u,
};
