import { ap as r } from './index-24a58ae8.js';
var t = 'object' == typeof r && r && r.Object === Object && r,
  e = t,
  n = 'object' == typeof self && self && self.Object === Object && self,
  o = e || n || Function('return this')(),
  a = o.Symbol,
  i = a,
  u = Object.prototype,
  c = u.hasOwnProperty,
  l = u.toString,
  s = i ? i.toStringTag : void 0;
var f = function (r) {
    var t = c.call(r, s),
      e = r[s];
    try {
      r[s] = void 0;
      var n = !0;
    } catch (a) {}
    var o = l.call(r);
    return n && (t ? (r[s] = e) : delete r[s]), o;
  },
  v = Object.prototype.toString;
var p = f,
  b = function (r) {
    return v.call(r);
  },
  y = '[object Null]',
  g = '[object Undefined]',
  j = a ? a.toStringTag : void 0;
var d = function (r) {
  return null == r ? (void 0 === r ? g : y) : j && j in Object(r) ? p(r) : b(r);
};
var h = function (r) {
  return null != r && 'object' == typeof r;
};
var O,
  S,
  m,
  x,
  A,
  T,
  q,
  w = function (r) {
    return function (t) {
      return r(t);
    };
  },
  P = {};
(O = {
  get exports() {
    return P;
  },
  set exports(r) {
    P = r;
  },
}),
  (m = t),
  (x = (S = P) && !S.nodeType && S),
  (A = x && O && !O.nodeType && O),
  (T = A && A.exports === x && m.process),
  (q = (function () {
    try {
      var r = A && A.require && A.require('util').types;
      return r || (T && T.binding && T.binding('util'));
    } catch (t) {}
  })()),
  (O.exports = q);
var k = function (r, t) {
    for (var e = -1, n = null == r ? 0 : r.length, o = Array(n); ++e < n; )
      o[e] = t(r[e], e, r);
    return o;
  },
  C = Array.isArray,
  E = d,
  F = h,
  I = '[object Symbol]';
var N = function (r) {
    return 'symbol' == typeof r || (F(r) && E(r) == I);
  },
  U = k,
  _ = C,
  z = N,
  B = 1 / 0,
  D = a ? a.prototype : void 0,
  G = D ? D.toString : void 0;
var H = function r(t) {
    if ('string' == typeof t) return t;
    if (_(t)) return U(t, r) + '';
    if (z(t)) return G ? G.call(t) : '';
    var e = t + '';
    return '0' == e && 1 / t == -B ? '-0' : e;
  },
  J = H;
var K = function (r) {
    return null == r ? '' : J(r);
  },
  L = d,
  M = C,
  Q = h,
  R = '[object String]';
var V = function (r) {
  return 'string' == typeof r || (!M(r) && Q(r) && L(r) == R);
};
var W = function (r, t) {
    for (var e = -1, n = t.length, o = r.length; ++e < n; ) r[o + e] = t[e];
    return r;
  },
  X = d,
  Y = h,
  Z = '[object Arguments]';
var $ = function (r) {
    return Y(r) && X(r) == Z;
  },
  rr = h,
  tr = Object.prototype,
  er = tr.hasOwnProperty,
  nr = tr.propertyIsEnumerable,
  or = $(
    (function () {
      return arguments;
    })(),
  )
    ? $
    : function (r) {
        return rr(r) && er.call(r, 'callee') && !nr.call(r, 'callee');
      },
  ar = or,
  ir = C,
  ur = a ? a.isConcatSpreadable : void 0;
var cr = W,
  lr = function (r) {
    return ir(r) || ar(r) || !!(ur && r && r[ur]);
  };
var sr = function r(t, e, n, o, a) {
  var i = -1,
    u = t.length;
  for (n || (n = lr), a || (a = []); ++i < u; ) {
    var c = t[i];
    e > 0 && n(c)
      ? e > 1
        ? r(c, e - 1, n, o, a)
        : cr(a, c)
      : o || (a[a.length] = c);
  }
  return a;
};
export {
  d as _,
  P as a,
  w as b,
  sr as c,
  V as d,
  C as e,
  N as f,
  o as g,
  a as h,
  h as i,
  W as j,
  or as k,
  k as l,
  K as t,
};
