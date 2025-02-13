import { u as e, c as t, e as n } from './ThemeProvider-092c2682.js';
import { r, c as o, F as i, am as a } from './index-24a58ae8.js';
import {
  b as s,
  f as c,
  h as f,
  o as u,
  l,
  i as p,
  d,
  a as m,
  g as h,
  q as v,
  j as g,
  u as b,
  e as y,
} from './useWindow-9130f6b7.js';
import { _ as w } from './extends-64d70faf.js';
import { _ as x } from './objectWithoutPropertiesLoose-87a5ea27.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import { u as O, a as j, B as C } from './Button-0a98cdad.js';
import { p as E } from './index-06bcf729.js';
import { c as k } from './createWithBsPrefix-6a3b0d2e.js';
function D(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function A(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || 'default');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : String(t);
}
function P(e, t, n) {
  var o = r.useRef(void 0 !== e),
    i = r.useState(t),
    a = i[0],
    s = i[1],
    c = void 0 !== e,
    f = o.current;
  return (
    (o.current = c),
    !c && f && a !== t && s(t),
    [
      c ? e : a,
      r.useCallback(
        function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            r[o - 1] = arguments[o];
          n && n.apply(void 0, [e].concat(r)), s(e);
        },
        [n],
      ),
    ]
  );
}
const T = ['onKeyDown'];
const S = r.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, T);
  const [i] = O(Object.assign({ tagName: 'a' }, r)),
    a = s(e => {
      i.onKeyDown(e), null == n || n(e);
    });
  return (c = r.href) && '#' !== c.trim() && 'button' !== r.role
    ? o('a', Object.assign({ ref: t }, r, { onKeyDown: n }))
    : o('a', Object.assign({ ref: t }, r, i, { onKeyDown: a }));
  var c;
});
S.displayName = 'Anchor';
const M = S;
const L = r.createContext(null);
var R = Object.prototype.hasOwnProperty;
function N(e, t, n) {
  for (n of e.keys()) if (W(n, t)) return n;
}
function W(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && W(e[r], t[r]); );
      return -1 === r;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((o = r) && 'object' == typeof o && !(o = N(t, o))) return !1;
        if (!t.has(o)) return !1;
      }
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((o = r[0]) && 'object' == typeof o && !(o = N(t, o))) return !1;
        if (!W(r[1], t.get(o))) return !1;
      }
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return -1 === r;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return -1 === r;
    }
    if (!n || 'object' == typeof e) {
      for (n in ((r = 0), e)) {
        if (R.call(e, n) && ++r && !R.call(t, n)) return !1;
        if (!(n in t) || !W(e[n], t[n])) return !1;
      }
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
var B = 'top',
  H = 'bottom',
  I = 'right',
  $ = 'left',
  V = 'auto',
  K = [B, H, I, $],
  q = 'start',
  U = 'end',
  F = 'clippingParents',
  z = 'viewport',
  _ = 'popper',
  X = 'reference',
  Y = K.reduce(function (e, t) {
    return e.concat([t + '-' + q, t + '-' + U]);
  }, []),
  G = [].concat(K, [V]).reduce(function (e, t) {
    return e.concat([t, t + '-' + q, t + '-' + U]);
  }, []),
  J = [
    'beforeRead',
    'read',
    'afterRead',
    'beforeMain',
    'main',
    'afterMain',
    'beforeWrite',
    'write',
    'afterWrite',
  ];
function Q(e) {
  return e.split('-')[0];
}
function Z(e) {
  if (null == e) return window;
  if ('[object Window]' !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ee(e) {
  return e instanceof Z(e).Element || e instanceof Element;
}
function te(e) {
  return e instanceof Z(e).HTMLElement || e instanceof HTMLElement;
}
function ne(e) {
  return (
    'undefined' != typeof ShadowRoot &&
    (e instanceof Z(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
var re = Math.max,
  oe = Math.min,
  ie = Math.round;
function ae() {
  var e = navigator.userAgentData;
  return null != e && e.brands
    ? e.brands
        .map(function (e) {
          return e.brand + '/' + e.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function se() {
  return !/^((?!chrome|android).)*safari/i.test(ae());
}
function ce(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    te(e) &&
    ((o = (e.offsetWidth > 0 && ie(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ie(r.height) / e.offsetHeight) || 1));
  var a = (ee(e) ? Z(e) : window).visualViewport,
    s = !se() && n,
    c = (r.left + (s && a ? a.offsetLeft : 0)) / o,
    f = (r.top + (s && a ? a.offsetTop : 0)) / i,
    u = r.width / o,
    l = r.height / i;
  return {
    width: u,
    height: l,
    top: f,
    right: c + u,
    bottom: f + l,
    left: c,
    x: c,
    y: f,
  };
}
function fe(e) {
  var t = ce(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function ue(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ne(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function le(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function pe(e) {
  return Z(e).getComputedStyle(e);
}
function de(e) {
  return ['table', 'td', 'th'].indexOf(le(e)) >= 0;
}
function me(e) {
  return ((ee(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function he(e) {
  return 'html' === le(e)
    ? e
    : e.assignedSlot || e.parentNode || (ne(e) ? e.host : null) || me(e);
}
function ve(e) {
  return te(e) && 'fixed' !== pe(e).position ? e.offsetParent : null;
}
function ge(e) {
  for (var t = Z(e), n = ve(e); n && de(n) && 'static' === pe(n).position; )
    n = ve(n);
  return n &&
    ('html' === le(n) || ('body' === le(n) && 'static' === pe(n).position))
    ? t
    : n ||
        (function (e) {
          var t = /firefox/i.test(ae());
          if (/Trident/i.test(ae()) && te(e) && 'fixed' === pe(e).position)
            return null;
          var n = he(e);
          for (
            ne(n) && (n = n.host);
            te(n) && ['html', 'body'].indexOf(le(n)) < 0;

          ) {
            var r = pe(n);
            if (
              'none' !== r.transform ||
              'none' !== r.perspective ||
              'paint' === r.contain ||
              -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
              (t && 'filter' === r.willChange) ||
              (t && r.filter && 'none' !== r.filter)
            )
              return n;
            n = n.parentNode;
          }
          return null;
        })(e) ||
        t;
}
function be(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function ye(e, t, n) {
  return re(e, oe(t, n));
}
function we(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function xe(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
var Oe = function (e, t) {
  return we(
    'number' !=
      typeof (e =
        'function' == typeof e
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e)
      ? e
      : xe(e, K),
  );
};
function je(e) {
  return e.split('-')[1];
}
var Ce = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Ee(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
    f = e.adaptive,
    u = e.roundOffsets,
    l = e.isFixed,
    p = a.x,
    d = void 0 === p ? 0 : p,
    m = a.y,
    h = void 0 === m ? 0 : m,
    v = 'function' == typeof u ? u({ x: d, y: h }) : { x: d, y: h };
  (d = v.x), (h = v.y);
  var g = a.hasOwnProperty('x'),
    b = a.hasOwnProperty('y'),
    y = $,
    w = B,
    x = window;
  if (f) {
    var O = ge(n),
      j = 'clientHeight',
      C = 'clientWidth';
    if (
      (O === Z(n) &&
        'static' !== pe((O = me(n))).position &&
        'absolute' === s &&
        ((j = 'scrollHeight'), (C = 'scrollWidth')),
      o === B || ((o === $ || o === I) && i === U))
    )
      (w = H),
        (h -=
          (l && O === x && x.visualViewport ? x.visualViewport.height : O[j]) -
          r.height),
        (h *= c ? 1 : -1);
    if (o === $ || ((o === B || o === H) && i === U))
      (y = I),
        (d -=
          (l && O === x && x.visualViewport ? x.visualViewport.width : O[C]) -
          r.width),
        (d *= c ? 1 : -1);
  }
  var E,
    k = Object.assign({ position: s }, f && Ce),
    D =
      !0 === u
        ? (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1;
            return { x: ie(t * r) / r || 0, y: ie(n * r) / r || 0 };
          })({ x: d, y: h })
        : { x: d, y: h };
  return (
    (d = D.x),
    (h = D.y),
    c
      ? Object.assign(
          {},
          k,
          (((E = {})[w] = b ? '0' : ''),
          (E[y] = g ? '0' : ''),
          (E.transform =
            (x.devicePixelRatio || 1) <= 1
              ? 'translate(' + d + 'px, ' + h + 'px)'
              : 'translate3d(' + d + 'px, ' + h + 'px, 0)'),
          E),
        )
      : Object.assign(
          {},
          k,
          (((t = {})[w] = b ? h + 'px' : ''),
          (t[y] = g ? d + 'px' : ''),
          (t.transform = ''),
          t),
        )
  );
}
var ke = { passive: !0 };
var De = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Ae(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return De[e];
  });
}
var Pe = { start: 'end', end: 'start' };
function Te(e) {
  return e.replace(/start|end/g, function (e) {
    return Pe[e];
  });
}
function Se(e) {
  var t = Z(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Me(e) {
  return ce(me(e)).left + Se(e).scrollLeft;
}
function Le(e) {
  var t = pe(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Re(e) {
  return ['html', 'body', '#document'].indexOf(le(e)) >= 0
    ? e.ownerDocument.body
    : te(e) && Le(e)
    ? e
    : Re(he(e));
}
function Ne(e, t) {
  var n;
  void 0 === t && (t = []);
  var r = Re(e),
    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
    i = Z(r),
    a = o ? [i].concat(i.visualViewport || [], Le(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(Ne(he(a)));
}
function We(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Be(e, t, n) {
  return t === z
    ? We(
        (function (e, t) {
          var n = Z(e),
            r = me(e),
            o = n.visualViewport,
            i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            c = 0;
          if (o) {
            (i = o.width), (a = o.height);
            var f = se();
            (f || (!f && 'fixed' === t)) &&
              ((s = o.offsetLeft), (c = o.offsetTop));
          }
          return { width: i, height: a, x: s + Me(e), y: c };
        })(e, n),
      )
    : ee(t)
    ? (function (e, t) {
        var n = ce(e, !1, 'fixed' === t);
        return (
          (n.top = n.top + e.clientTop),
          (n.left = n.left + e.clientLeft),
          (n.bottom = n.top + e.clientHeight),
          (n.right = n.left + e.clientWidth),
          (n.width = e.clientWidth),
          (n.height = e.clientHeight),
          (n.x = n.left),
          (n.y = n.top),
          n
        );
      })(t, n)
    : We(
        (function (e) {
          var t,
            n = me(e),
            r = Se(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = re(
              n.scrollWidth,
              n.clientWidth,
              o ? o.scrollWidth : 0,
              o ? o.clientWidth : 0,
            ),
            a = re(
              n.scrollHeight,
              n.clientHeight,
              o ? o.scrollHeight : 0,
              o ? o.clientHeight : 0,
            ),
            s = -r.scrollLeft + Me(e),
            c = -r.scrollTop;
          return (
            'rtl' === pe(o || n).direction &&
              (s += re(n.clientWidth, o ? o.clientWidth : 0) - i),
            { width: i, height: a, x: s, y: c }
          );
        })(me(e)),
      );
}
function He(e, t, n, r) {
  var o =
      'clippingParents' === t
        ? (function (e) {
            var t = Ne(he(e)),
              n =
                ['absolute', 'fixed'].indexOf(pe(e).position) >= 0 && te(e)
                  ? ge(e)
                  : e;
            return ee(n)
              ? t.filter(function (e) {
                  return ee(e) && ue(e, n) && 'body' !== le(e);
                })
              : [];
          })(e)
        : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (t, n) {
      var o = Be(e, n, r);
      return (
        (t.top = re(o.top, t.top)),
        (t.right = oe(o.right, t.right)),
        (t.bottom = oe(o.bottom, t.bottom)),
        (t.left = re(o.left, t.left)),
        t
      );
    }, Be(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Ie(e) {
  var t,
    n = e.reference,
    r = e.element,
    o = e.placement,
    i = o ? Q(o) : null,
    a = o ? je(o) : null,
    s = n.x + n.width / 2 - r.width / 2,
    c = n.y + n.height / 2 - r.height / 2;
  switch (i) {
    case B:
      t = { x: s, y: n.y - r.height };
      break;
    case H:
      t = { x: s, y: n.y + n.height };
      break;
    case I:
      t = { x: n.x + n.width, y: c };
      break;
    case $:
      t = { x: n.x - r.width, y: c };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var f = i ? be(i) : null;
  if (null != f) {
    var u = 'y' === f ? 'height' : 'width';
    switch (a) {
      case q:
        t[f] = t[f] - (n[u] / 2 - r[u] / 2);
        break;
      case U:
        t[f] = t[f] + (n[u] / 2 - r[u] / 2);
    }
  }
  return t;
}
function $e(e, t) {
  void 0 === t && (t = {});
  var n = t,
    r = n.placement,
    o = void 0 === r ? e.placement : r,
    i = n.strategy,
    a = void 0 === i ? e.strategy : i,
    s = n.boundary,
    c = void 0 === s ? F : s,
    f = n.rootBoundary,
    u = void 0 === f ? z : f,
    l = n.elementContext,
    p = void 0 === l ? _ : l,
    d = n.altBoundary,
    m = void 0 !== d && d,
    h = n.padding,
    v = void 0 === h ? 0 : h,
    g = we('number' != typeof v ? v : xe(v, K)),
    b = p === _ ? X : _,
    y = e.rects.popper,
    w = e.elements[m ? b : p],
    x = He(ee(w) ? w : w.contextElement || me(e.elements.popper), c, u, a),
    O = ce(e.elements.reference),
    j = Ie({ reference: O, element: y, strategy: 'absolute', placement: o }),
    C = We(Object.assign({}, y, j)),
    E = p === _ ? C : O,
    k = {
      top: x.top - E.top + g.top,
      bottom: E.bottom - x.bottom + g.bottom,
      left: x.left - E.left + g.left,
      right: E.right - x.right + g.right,
    },
    D = e.modifiersData.offset;
  if (p === _ && D) {
    var A = D[o];
    Object.keys(k).forEach(function (e) {
      var t = [I, H].indexOf(e) >= 0 ? 1 : -1,
        n = [B, H].indexOf(e) >= 0 ? 'y' : 'x';
      k[e] += A[n] * t;
    });
  }
  return k;
}
function Ve(e, t, n) {
  return (
    void 0 === n && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Ke(e) {
  return [B, I, H, $].some(function (t) {
    return e[t] >= 0;
  });
}
function qe(e, t, n) {
  void 0 === n && (n = !1);
  var r,
    o,
    i = te(t),
    a =
      te(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = ie(t.width) / e.offsetWidth || 1,
          r = ie(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      })(t),
    s = me(t),
    c = ce(e, a, n),
    f = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      (('body' !== le(t) || Le(s)) &&
        (f =
          (r = t) !== Z(r) && te(r)
            ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
            : Se(r)),
      te(t)
        ? (((u = ce(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
        : s && (u.x = Me(s))),
    {
      x: c.left + f.scrollLeft - u.x,
      y: c.top + f.scrollTop - u.y,
      width: c.width,
      height: c.height,
    }
  );
}
function Ue(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  function o(e) {
    n.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!n.has(e)) {
            var r = t.get(e);
            r && o(r);
          }
        }),
      r.push(e);
  }
  return (
    e.forEach(function (e) {
      t.set(e.name, e);
    }),
    e.forEach(function (e) {
      n.has(e.name) || o(e);
    }),
    r
  );
}
var Fe = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function ze() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (e) {
    return !(e && 'function' == typeof e.getBoundingClientRect);
  });
}
const _e = (function (e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      o = t.defaultOptions,
      i = void 0 === o ? Fe : o;
    return function (e, t, n) {
      void 0 === n && (n = i);
      var o,
        a,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Fe, i),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        f = !1,
        u = {
          state: s,
          setOptions: function (n) {
            var o = 'function' == typeof n ? n(s.options) : n;
            l(),
              (s.options = Object.assign({}, i, s.options, o)),
              (s.scrollParents = {
                reference: ee(e)
                  ? Ne(e)
                  : e.contextElement
                  ? Ne(e.contextElement)
                  : [],
                popper: Ne(t),
              });
            var a,
              f,
              p = (function (e) {
                var t = Ue(e);
                return J.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    }),
                  );
                }, []);
              })(
                ((a = [].concat(r, s.options.modifiers)),
                (f = a.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                Object.keys(f).map(function (e) {
                  return f[e];
                })),
              );
            return (
              (s.orderedModifiers = p.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  o = e.effect;
                if ('function' == typeof o) {
                  var i = o({ state: s, name: t, instance: u, options: r }),
                    a = function () {};
                  c.push(i || a);
                }
              }),
              u.update()
            );
          },
          forceUpdate: function () {
            if (!f) {
              var e = s.elements,
                t = e.reference,
                n = e.popper;
              if (ze(t, n)) {
                (s.rects = {
                  reference: qe(t, ge(n), 'fixed' === s.options.strategy),
                  popper: fe(n),
                }),
                  (s.reset = !1),
                  (s.placement = s.options.placement),
                  s.orderedModifiers.forEach(function (e) {
                    return (s.modifiersData[e.name] = Object.assign(
                      {},
                      e.data,
                    ));
                  });
                for (var r = 0; r < s.orderedModifiers.length; r++)
                  if (!0 !== s.reset) {
                    var o = s.orderedModifiers[r],
                      i = o.fn,
                      a = o.options,
                      c = void 0 === a ? {} : a,
                      l = o.name;
                    'function' == typeof i &&
                      (s =
                        i({ state: s, options: c, name: l, instance: u }) || s);
                  } else (s.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(s);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(o());
                    });
                  })),
                a
              );
            }),
          destroy: function () {
            l(), (f = !0);
          },
        };
      if (!ze(e, t)) return u;
      function l() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        u.setOptions(n).then(function (e) {
          !f && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        u
      );
    };
  })({
    defaultModifiers: [
      {
        name: 'hide',
        enabled: !0,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            i = t.modifiersData.preventOverflow,
            a = $e(t, { elementContext: 'reference' }),
            s = $e(t, { altBoundary: !0 }),
            c = Ve(a, r),
            f = Ve(s, o, i),
            u = Ke(c),
            l = Ke(f);
          (t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: f,
            isReferenceHidden: u,
            hasPopperEscaped: l,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-reference-hidden': u,
              'data-popper-escaped': l,
            }));
        },
      },
      {
        name: 'popperOffsets',
        enabled: !0,
        phase: 'read',
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = Ie({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: 'absolute',
            placement: t.placement,
          });
        },
        data: {},
      },
      {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            s = n.roundOffsets,
            c = void 0 === s || s,
            f = {
              placement: Q(t.placement),
              variation: je(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: 'fixed' === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Ee(
                Object.assign({}, f, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: a,
                  roundOffsets: c,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Ee(
                  Object.assign({}, f, {
                    offsets: t.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: !1,
                    roundOffsets: c,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-placement': t.placement,
            }));
        },
        data: {},
      },
      {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            a = r.resize,
            s = void 0 === a || a,
            c = Z(t.elements.popper),
            f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              f.forEach(function (e) {
                e.addEventListener('scroll', n.update, ke);
              }),
            s && c.addEventListener('resize', n.update, ke),
            function () {
              i &&
                f.forEach(function (e) {
                  e.removeEventListener('scroll', n.update, ke);
                }),
                s && c.removeEventListener('resize', n.update, ke);
            }
          );
        },
        data: {},
      },
      {
        name: 'offset',
        enabled: !0,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = G.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = Q(e),
                    o = [$, B].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      'function' == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [$, I].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            c = s.x,
            f = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += f)),
            (t.modifiersData[r] = a);
        },
      },
      {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                c = n.fallbackPlacements,
                f = n.padding,
                u = n.boundary,
                l = n.rootBoundary,
                p = n.altBoundary,
                d = n.flipVariations,
                m = void 0 === d || d,
                h = n.allowedAutoPlacements,
                v = t.options.placement,
                g = Q(v),
                b =
                  c ||
                  (g === v || !m
                    ? [Ae(v)]
                    : (function (e) {
                        if (Q(e) === V) return [];
                        var t = Ae(e);
                        return [Te(e), t, Te(t)];
                      })(v)),
                y = [v].concat(b).reduce(function (e, n) {
                  return e.concat(
                    Q(n) === V
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            f = void 0 === c ? G : c,
                            u = je(r),
                            l = u
                              ? s
                                ? Y
                                : Y.filter(function (e) {
                                    return je(e) === u;
                                  })
                              : K,
                            p = l.filter(function (e) {
                              return f.indexOf(e) >= 0;
                            });
                          0 === p.length && (p = l);
                          var d = p.reduce(function (t, n) {
                            return (
                              (t[n] = $e(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[Q(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(d).sort(function (e, t) {
                            return d[e] - d[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: l,
                          padding: f,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                x = t.rects.popper,
                O = new Map(),
                j = !0,
                C = y[0],
                E = 0;
              E < y.length;
              E++
            ) {
              var k = y[E],
                D = Q(k),
                A = je(k) === q,
                P = [B, H].indexOf(D) >= 0,
                T = P ? 'width' : 'height',
                S = $e(t, {
                  placement: k,
                  boundary: u,
                  rootBoundary: l,
                  altBoundary: p,
                  padding: f,
                }),
                M = P ? (A ? I : $) : A ? H : B;
              w[T] > x[T] && (M = Ae(M));
              var L = Ae(M),
                R = [];
              if (
                (i && R.push(S[D] <= 0),
                s && R.push(S[M] <= 0, S[L] <= 0),
                R.every(function (e) {
                  return e;
                }))
              ) {
                (C = k), (j = !1);
                break;
              }
              O.set(k, R);
            }
            if (j)
              for (
                var N = function (e) {
                    var t = y.find(function (t) {
                      var n = O.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (C = t), 'break';
                  },
                  W = m ? 3 : 1;
                W > 0;
                W--
              ) {
                if ('break' === N(W)) break;
              }
            t.placement !== C &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = C),
              (t.reset = !0));
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 },
      },
      {
        name: 'preventOverflow',
        enabled: !0,
        phase: 'main',
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            c = n.boundary,
            f = n.rootBoundary,
            u = n.altBoundary,
            l = n.padding,
            p = n.tether,
            d = void 0 === p || p,
            m = n.tetherOffset,
            h = void 0 === m ? 0 : m,
            v = $e(t, {
              boundary: c,
              rootBoundary: f,
              padding: l,
              altBoundary: u,
            }),
            g = Q(t.placement),
            b = je(t.placement),
            y = !b,
            w = be(g),
            x = 'x' === w ? 'y' : 'x',
            O = t.modifiersData.popperOffsets,
            j = t.rects.reference,
            C = t.rects.popper,
            E =
              'function' == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            k =
              'number' == typeof E
                ? { mainAxis: E, altAxis: E }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
            D = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            A = { x: 0, y: 0 };
          if (O) {
            if (i) {
              var P,
                T = 'y' === w ? B : $,
                S = 'y' === w ? H : I,
                M = 'y' === w ? 'height' : 'width',
                L = O[w],
                R = L + v[T],
                N = L - v[S],
                W = d ? -C[M] / 2 : 0,
                V = b === q ? j[M] : C[M],
                K = b === q ? -C[M] : -j[M],
                U = t.elements.arrow,
                F = d && U ? fe(U) : { width: 0, height: 0 },
                z = t.modifiersData['arrow#persistent']
                  ? t.modifiersData['arrow#persistent'].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                _ = z[T],
                X = z[S],
                Y = ye(0, j[M], F[M]),
                G = y
                  ? j[M] / 2 - W - Y - _ - k.mainAxis
                  : V - Y - _ - k.mainAxis,
                J = y
                  ? -j[M] / 2 + W + Y + X + k.mainAxis
                  : K + Y + X + k.mainAxis,
                Z = t.elements.arrow && ge(t.elements.arrow),
                ee = Z ? ('y' === w ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
                te = null != (P = null == D ? void 0 : D[w]) ? P : 0,
                ne = L + J - te,
                ie = ye(d ? oe(R, L + G - te - ee) : R, L, d ? re(N, ne) : N);
              (O[w] = ie), (A[w] = ie - L);
            }
            if (s) {
              var ae,
                se = 'x' === w ? B : $,
                ce = 'x' === w ? H : I,
                ue = O[x],
                le = 'y' === x ? 'height' : 'width',
                pe = ue + v[se],
                de = ue - v[ce],
                me = -1 !== [B, $].indexOf(g),
                he = null != (ae = null == D ? void 0 : D[x]) ? ae : 0,
                ve = me ? pe : ue - j[le] - C[le] - he + k.altAxis,
                we = me ? ue + j[le] + C[le] - he - k.altAxis : de,
                xe =
                  d && me
                    ? (Ce = ye(ve, ue, (Oe = we))) > Oe
                      ? Oe
                      : Ce
                    : ye(d ? ve : pe, ue, d ? we : de);
              (O[x] = xe), (A[x] = xe - ue);
            }
            var Oe, Ce;
            t.modifiersData[r] = A;
          }
        },
        requiresIfExists: ['offset'],
      },
      {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = Q(n.placement),
            c = be(s),
            f = [$, I].indexOf(s) >= 0 ? 'height' : 'width';
          if (i && a) {
            var u = Oe(o.padding, n),
              l = fe(i),
              p = 'y' === c ? B : $,
              d = 'y' === c ? H : I,
              m =
                n.rects.reference[f] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[f],
              h = a[c] - n.rects.reference[c],
              v = ge(i),
              g = v
                ? 'y' === c
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              b = m / 2 - h / 2,
              y = u[p],
              w = g - l[f] - u[d],
              x = g / 2 - l[f] / 2 + b,
              O = ye(y, x, w),
              j = c;
            n.modifiersData[r] =
              (((t = {})[j] = O), (t.centerOffset = O - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n;
          null != r &&
            ('string' != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            ue(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      },
    ],
  }),
  Xe = ['enabled', 'placement', 'strategy', 'modifiers'];
const Ye = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  Ge = {
    name: 'ariaDescribedBy',
    enabled: !0,
    phase: 'afterWrite',
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ('removeAttribute' in t) {
          const e = (t.getAttribute('aria-describedby') || '')
            .split(',')
            .filter(e => e.trim() !== n.id);
          e.length
            ? t.setAttribute('aria-describedby', e.join(','))
            : t.removeAttribute('aria-describedby');
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        o = null == (t = n.getAttribute('role')) ? void 0 : t.toLowerCase();
      if (n.id && 'tooltip' === o && 'setAttribute' in r) {
        const e = r.getAttribute('aria-describedby');
        if (e && -1 !== e.split(',').indexOf(n.id)) return;
        r.setAttribute('aria-describedby', e ? `${e},${n.id}` : n.id);
      }
    },
  },
  Je = [];
function Qe(e, t, n = {}) {
  let {
      enabled: o = !0,
      placement: i = 'bottom',
      strategy: a = 'absolute',
      modifiers: s = Je,
    } = n,
    f = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(n, Xe);
  const u = r.useRef(s),
    l = r.useRef(),
    p = r.useCallback(() => {
      var e;
      null == (e = l.current) || e.update();
    }, []),
    d = r.useCallback(() => {
      var e;
      null == (e = l.current) || e.forceUpdate();
    }, []),
    [m, h] =
      ((v = r.useState({
        placement: i,
        update: p,
        forceUpdate: d,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })),
      (g = c()),
      [
        v[0],
        r.useCallback(
          function (e) {
            if (g()) return v[1](e);
          },
          [g, v[1]],
        ),
      ]);
  var v, g;
  const b = r.useMemo(
      () => ({
        name: 'updateStateModifier',
        enabled: !0,
        phase: 'write',
        requires: ['computeStyles'],
        fn: ({ state: e }) => {
          const t = {},
            n = {};
          Object.keys(e.elements).forEach(r => {
            (t[r] = e.styles[r]), (n[r] = e.attributes[r]);
          }),
            h({
              state: e,
              styles: t,
              attributes: n,
              update: p,
              forceUpdate: d,
              placement: e.placement,
            });
        },
      }),
      [p, d, h],
    ),
    y = r.useMemo(() => (W(u.current, s) || (u.current = s), u.current), [s]);
  return (
    r.useEffect(() => {
      l.current &&
        o &&
        l.current.setOptions({
          placement: i,
          strategy: a,
          modifiers: [...y, b, Ye],
        });
    }, [a, i, b, o, y]),
    r.useEffect(() => {
      if (o && null != e && null != t)
        return (
          (l.current = _e(
            e,
            t,
            Object.assign({}, f, {
              placement: i,
              strategy: a,
              modifiers: [...y, Ge, b],
            }),
          )),
          () => {
            null != l.current &&
              (l.current.destroy(),
              (l.current = void 0),
              h(e =>
                Object.assign({}, e, {
                  attributes: {},
                  styles: { popper: {} },
                }),
              ));
          }
        );
    }, [o, e, t]),
    m
  );
}
const Ze = () => {};
const et = e => e && ('current' in e ? e.current : e),
  tt = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' };
function nt(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map(t => ((e[t].name = t), e[t]));
}
function rt({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: s,
  popperConfig: c = {},
}) {
  var f, u, l, p, d;
  const m = (function (e) {
    const t = {};
    return Array.isArray(e)
      ? (null == e ||
          e.forEach(e => {
            t[e.name] = e;
          }),
        t)
      : e || t;
  })(c.modifiers);
  return Object.assign({}, c, {
    placement: n,
    enabled: e,
    strategy: i ? 'fixed' : c.strategy,
    modifiers: nt(
      Object.assign({}, m, {
        eventListeners: {
          enabled: t,
          options: null == (f = m.eventListeners) ? void 0 : f.options,
        },
        preventOverflow: Object.assign({}, m.preventOverflow, {
          options: a
            ? Object.assign(
                { padding: a },
                null == (u = m.preventOverflow) ? void 0 : u.options,
              )
            : null == (l = m.preventOverflow)
            ? void 0
            : l.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            null == (p = m.offset) ? void 0 : p.options,
          ),
        },
        arrow: Object.assign({}, m.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            null == (d = m.arrow) ? void 0 : d.options,
            { element: s },
          ),
        }),
        flip: Object.assign({ enabled: !!r }, m.flip),
      }),
    ),
  });
}
const ot = ['children'];
const it = () => {};
function at(e = {}) {
  const t = r.useContext(L),
    [n, o] = p(),
    i = r.useRef(!1),
    {
      flip: a,
      offset: c,
      rootCloseEvent: d,
      fixed: m = !1,
      placement: h,
      popperConfig: v = {},
      enableEventListeners: g = !0,
      usePopper: b = !!t,
    } = e,
    y = null == (null == t ? void 0 : t.show) ? !!e.show : t.show;
  y && !i.current && (i.current = !0);
  const {
      placement: w,
      setMenu: x,
      menuElement: O,
      toggleElement: j,
    } = t || {},
    C = Qe(
      j,
      O,
      rt({
        placement: h || w || 'bottom-start',
        enabled: b,
        enableEvents: null == g ? y : g,
        offset: c,
        flip: a,
        fixed: m,
        arrowElement: n,
        popperConfig: v,
      }),
    ),
    E = Object.assign(
      { ref: x || it, 'aria-labelledby': null == j ? void 0 : j.id },
      C.attributes.popper,
      { style: C.styles.popper },
    ),
    k = {
      show: y,
      placement: w,
      hasShown: i.current,
      toggle: null == t ? void 0 : t.toggle,
      popper: b ? C : null,
      arrowProps: b
        ? Object.assign({ ref: o }, C.attributes.arrow, {
            style: C.styles.arrow,
          })
        : {},
    };
  return (
    (function (e, t = Ze, { disabled: n, clickTrigger: o = 'click' } = {}) {
      const i = r.useRef(!1),
        a = r.useRef(!1),
        c = r.useCallback(
          t => {
            const n = et(e);
            var r;
            (i.current =
              !n ||
              !!((r = t).metaKey || r.altKey || r.ctrlKey || r.shiftKey) ||
              !(function (e) {
                return 0 === e.button;
              })(t) ||
              !!f(n, t.target) ||
              a.current),
              (a.current = !1);
          },
          [e],
        ),
        p = s(t => {
          const n = et(e);
          n && f(n, t.target) && (a.current = !0);
        }),
        d = s(e => {
          i.current || t(e);
        });
      r.useEffect(() => {
        if (n || null == e) return;
        const t = u(et(e));
        let r = (t.defaultView || window).event,
          i = null;
        tt[o] && (i = l(t, tt[o], p, !0));
        const a = l(t, o, c, !0),
          s = l(t, o, e => {
            e !== r ? d(e) : (r = void 0);
          });
        let f = [];
        return (
          'ontouchstart' in t.documentElement &&
            (f = [].slice
              .call(t.body.children)
              .map(e => l(e, 'mousemove', Ze))),
          () => {
            null == i || i(), a(), s(), f.forEach(e => e());
          }
        );
      }, [e, n, o, c, p, d]);
    })(
      O,
      e => {
        null == t || t.toggle(!1, e);
      },
      { clickTrigger: d, disabled: !y },
    ),
    [E, k]
  );
}
function st(e) {
  let { children: t } = e,
    n = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, ot);
  const [r, a] = at(n);
  return o(i, { children: t(r, a) });
}
(st.displayName = 'DropdownMenu'), (st.defaultProps = { usePopper: !0 });
const ct = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
  ft = a.createContext(ct);
let ut = Boolean(
  'undefined' != typeof window &&
    window.document &&
    window.document.createElement,
);
const lt = e => {
    var t;
    return (
      'menu' ===
      (null == (t = e.getAttribute('role')) ? void 0 : t.toLowerCase())
    );
  },
  pt = () => {};
function dt() {
  const e = (function (e) {
      let t = r.useContext(ft);
      return (
        t !== ct ||
          ut ||
          console.warn(
            'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.',
          ),
        r.useMemo(() => e || `react-aria${t.prefix}-${++t.current}`, [e])
      );
    })(),
    {
      show: t = !1,
      toggle: n = pt,
      setToggle: o,
      menuElement: i,
    } = r.useContext(L) || {},
    a = r.useCallback(
      e => {
        n(!t, e);
      },
      [t, n],
    ),
    s = { id: e, ref: o || pt, onClick: a, 'aria-expanded': !!t };
  return i && lt(i) && (s['aria-haspopup'] = !0), [s, { show: t, toggle: n }];
}
function mt({ children: e }) {
  const [t, n] = dt();
  return o(i, { children: e(t, n) });
}
mt.displayName = 'DropdownToggle';
const ht = (e, t = null) => (null != e ? String(e) : t || null),
  vt = r.createContext(null),
  gt = r.createContext(null);
gt.displayName = 'NavContext';
const bt = gt,
  yt = ['eventKey', 'disabled', 'onClick', 'active', 'as'];
function wt({ key: e, href: t, active: n, disabled: o, onClick: i }) {
  const a = r.useContext(vt),
    c = r.useContext(bt),
    { activeKey: f } = c || {},
    u = ht(e, t),
    l = null == n && null != e ? ht(f) === u : n;
  return [
    {
      onClick: s(e => {
        o || (null == i || i(e), a && !e.isPropagationStopped() && a(u, e));
      }),
      'aria-disabled': o || void 0,
      'aria-selected': l,
      [d('dropdown-item')]: '',
    },
    { isActive: l },
  ];
}
const xt = r.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: i, active: a, as: s = j } = e,
    c = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, yt);
  const [f] = wt({ key: n, href: c.href, disabled: r, onClick: i, active: a });
  return o(s, Object.assign({}, c, { ref: t }, f));
});
function Ot() {
  const e = r.useReducer(function (e) {
      return !e;
    }, !1)[1],
    t = r.useRef(null),
    n = r.useCallback(
      n => {
        (t.current = n), e();
      },
      [e],
    );
  return [t, n];
}
function jt({
  defaultShow: e,
  show: t,
  onSelect: n,
  onToggle: i,
  itemSelector: a = `* [${d('dropdown-item')}]`,
  focusFirstItemOnShow: c,
  placement: f = 'bottom-start',
  children: u,
}) {
  const l = m(),
    [p, b] = P(t, e, i),
    [y, w] = Ot(),
    x = y.current,
    [O, j] = Ot(),
    C = O.current,
    E = h(p),
    k = r.useRef(null),
    D = r.useRef(!1),
    A = r.useContext(vt),
    T = r.useCallback(
      (e, t, n = null == t ? void 0 : t.type) => {
        b(e, { originalEvent: t, source: n });
      },
      [b],
    ),
    S = s((e, t) => {
      null == n || n(e, t),
        T(!1, t, 'select'),
        t.isPropagationStopped() || null == A || A(e, t);
    }),
    M = r.useMemo(
      () => ({
        toggle: T,
        placement: f,
        show: p,
        menuElement: x,
        toggleElement: C,
        setMenu: w,
        setToggle: j,
      }),
      [T, f, p, x, C, w, j],
    );
  x && E && !p && (D.current = x.contains(x.ownerDocument.activeElement));
  const R = s(() => {
      C && C.focus && C.focus();
    }),
    N = s(() => {
      const e = k.current;
      let t = c;
      if (
        (null == t && (t = !(!y.current || !lt(y.current)) && 'keyboard'),
        !1 === t || ('keyboard' === t && !/^key.+$/.test(e)))
      )
        return;
      const n = v(y.current, a)[0];
      n && n.focus && n.focus();
    });
  r.useEffect(() => {
    p ? N() : D.current && ((D.current = !1), R());
  }, [p, D, R, N]),
    r.useEffect(() => {
      k.current = null;
    });
  const W = (e, t) => {
    if (!y.current) return null;
    const n = v(y.current, a);
    let r = n.indexOf(e) + t;
    return (r = Math.max(0, Math.min(r, n.length))), n[r];
  };
  return (
    (function (e, t, n, o) {
      void 0 === o && (o = !1);
      var i = s(n);
      r.useEffect(
        function () {
          var n = 'function' == typeof e ? e() : e;
          return (
            n.addEventListener(t, i, o),
            function () {
              return n.removeEventListener(t, i, o);
            }
          );
        },
        [e],
      );
    })(
      r.useCallback(() => l.document, [l]),
      'keydown',
      e => {
        var t, n;
        const { key: r } = e,
          o = e.target,
          i = null == (t = y.current) ? void 0 : t.contains(o),
          a = null == (n = O.current) ? void 0 : n.contains(o);
        if (
          /input|textarea/i.test(o.tagName) &&
          (' ' === r ||
            ('Escape' !== r && i) ||
            ('Escape' === r && 'search' === o.type))
        )
          return;
        if (!i && !a) return;
        if (!('Tab' !== r || (y.current && p))) return;
        k.current = e.type;
        const s = { originalEvent: e, source: e.type };
        switch (r) {
          case 'ArrowUp': {
            const t = W(o, -1);
            return t && t.focus && t.focus(), void e.preventDefault();
          }
          case 'ArrowDown':
            if ((e.preventDefault(), p)) {
              const e = W(o, 1);
              e && e.focus && e.focus();
            } else b(!0, s);
            return;
          case 'Tab':
            g(
              o.ownerDocument,
              'keyup',
              e => {
                var t;
                (('Tab' !== e.key || e.target) &&
                  null != (t = y.current) &&
                  t.contains(e.target)) ||
                  b(!1, s);
              },
              { once: !0 },
            );
            break;
          case 'Escape':
            'Escape' === r && (e.preventDefault(), e.stopPropagation()),
              b(!1, s);
        }
      },
    ),
    o(vt.Provider, {
      value: S,
      children: o(L.Provider, { value: M, children: u }),
    })
  );
}
(xt.displayName = 'DropdownItem'),
  (jt.displayName = 'Dropdown'),
  (jt.Menu = st),
  (jt.Toggle = mt),
  (jt.Item = xt);
const Ct = r.createContext({});
Ct.displayName = 'DropdownContext';
const Et = r.forwardRef(
  (
    {
      bsPrefix: n,
      className: r,
      eventKey: i,
      disabled: a = !1,
      onClick: s,
      active: c,
      as: f = M,
      ...u
    },
    l,
  ) => {
    const p = e(n, 'dropdown-item'),
      [d, m] = wt({ key: i, href: u.href, disabled: a, onClick: s, active: c });
    return o(f, {
      ...u,
      ...d,
      ref: l,
      className: t(r, p, m.isActive && 'active', a && 'disabled'),
    });
  },
);
Et.displayName = 'DropdownItem';
const kt = Et,
  Dt = r.createContext(null);
Dt.displayName = 'InputGroupContext';
const At = r.createContext(null);
At.displayName = 'NavbarContext';
const Pt = At;
function Tt(e, t) {
  return e;
}
const St = E.oneOf(['start', 'end']);
E.oneOfType([
  St,
  E.shape({ sm: St }),
  E.shape({ md: St }),
  E.shape({ lg: St }),
  E.shape({ xl: St }),
  E.shape({ xxl: St }),
  E.object,
]);
function Mt(e, t, n) {
  let r = e
    ? n
      ? 'bottom-start'
      : 'bottom-end'
    : n
    ? 'bottom-end'
    : 'bottom-start';
  return (
    'up' === t
      ? (r = e ? (n ? 'top-start' : 'top-end') : n ? 'top-end' : 'top-start')
      : 'end' === t
      ? (r = e
          ? n
            ? 'left-end'
            : 'right-end'
          : n
          ? 'left-start'
          : 'right-start')
      : 'start' === t
      ? (r = e
          ? n
            ? 'right-end'
            : 'left-end'
          : n
          ? 'right-start'
          : 'left-start')
      : 'down-centered' === t
      ? (r = 'bottom')
      : 'up-centered' === t && (r = 'top'),
    r
  );
}
const Lt = r.forwardRef(
  (
    {
      bsPrefix: n,
      className: i,
      align: a,
      rootCloseEvent: s,
      flip: c,
      show: f,
      renderOnMount: u,
      as: l = 'div',
      popperConfig: p,
      variant: d,
      ...m
    },
    h,
  ) => {
    let v = !1;
    const g = r.useContext(Pt),
      w = e(n, 'dropdown-menu'),
      { align: x, drop: O, isRTL: j } = r.useContext(Ct);
    a = a || x;
    const C = r.useContext(Dt),
      E = [];
    if (a)
      if ('object' == typeof a) {
        const e = Object.keys(a);
        if (e.length) {
          const t = e[0],
            n = a[t];
          (v = 'start' === n), E.push(`${w}-${t}-${n}`);
        }
      } else 'end' === a && (v = !0);
    const k = Mt(v, O, j),
      [D, { hasShown: A, popper: P, show: T, toggle: S }] = at({
        flip: c,
        rootCloseEvent: s,
        show: f,
        usePopper: !g && 0 === E.length,
        offset: [0, 2],
        popperConfig: p,
        placement: k,
      });
    if (
      ((D.ref = b(Tt(h), D.ref)),
      y(() => {
        T && (null == P || P.update());
      }, [T]),
      !A && !u && !C)
    )
      return null;
    'string' != typeof l &&
      ((D.show = T),
      (D.close = () => (null == S ? void 0 : S(!1))),
      (D.align = a));
    let M = m.style;
    return (
      null != P &&
        P.placement &&
        ((M = { ...m.style, ...D.style }), (m['x-placement'] = P.placement)),
      o(l, {
        ...m,
        ...D,
        style: M,
        ...((E.length || g) && { 'data-bs-popper': 'static' }),
        className: t(
          i,
          w,
          T && 'show',
          v && `${w}-end`,
          d && `${w}-${d}`,
          ...E,
        ),
      })
    );
  },
);
(Lt.displayName = 'DropdownMenu'), (Lt.defaultProps = { flip: !0 });
const Rt = r.forwardRef(
  (
    { bsPrefix: n, split: i, className: a, childBsPrefix: s, as: c = C, ...f },
    u,
  ) => {
    const l = e(n, 'dropdown-toggle'),
      p = r.useContext(L);
    void 0 !== s && (f.bsPrefix = s);
    const [d] = dt();
    return (
      (d.ref = b(d.ref, Tt(u))),
      o(c, {
        className: t(
          a,
          l,
          i && `${l}-split`,
          (null == p ? void 0 : p.show) && 'show',
        ),
        ...d,
        ...f,
      })
    );
  },
);
Rt.displayName = 'DropdownToggle';
const Nt = Rt,
  Wt = k('dropdown-header', { defaultProps: { role: 'heading' } }),
  Bt = k('dropdown-divider', {
    Component: 'hr',
    defaultProps: { role: 'separator' },
  }),
  Ht = k('dropdown-item-text', { Component: 'span' }),
  It = r.forwardRef((i, a) => {
    const {
        bsPrefix: c,
        drop: f,
        show: u,
        className: l,
        align: p,
        onSelect: d,
        onToggle: m,
        focusFirstItemOnShow: h,
        as: v = 'div',
        navbar: g,
        autoClose: b,
        ...y
      } = (function (e, t) {
        return Object.keys(t).reduce(function (n, r) {
          var o,
            i = n,
            a = i[D(r)],
            s = i[r],
            c = x(i, [D(r), r].map(A)),
            f = t[r],
            u = P(s, a, e[f]),
            l = u[0],
            p = u[1];
          return w({}, c, (((o = {})[r] = l), (o[f] = p), o));
        }, e);
      })(i, { show: 'onToggle' }),
      O = r.useContext(Dt),
      j = e(c, 'dropdown'),
      C = n(),
      E = s((e, t) => {
        var n;
        t.originalEvent.currentTarget !== document ||
          ('keydown' === t.source && 'Escape' !== t.originalEvent.key) ||
          (t.source = 'rootClose'),
          (n = t.source),
          (!1 === b
            ? 'click' === n
            : 'inside' === b
            ? 'rootClose' !== n
            : 'outside' !== b || 'select' !== n) &&
            (null == m || m(e, t));
      }),
      k = Mt('end' === p, f, C),
      T = r.useMemo(() => ({ align: p, drop: f, isRTL: C }), [p, f, C]),
      S = {
        down: j,
        'down-centered': `${j}-center`,
        up: 'dropup',
        'up-centered': 'dropup-center dropup',
        end: 'dropend',
        start: 'dropstart',
      };
    return o(Ct.Provider, {
      value: T,
      children: o(jt, {
        placement: k,
        show: u,
        onSelect: d,
        onToggle: E,
        focusFirstItemOnShow: h,
        itemSelector: `.${j}-item:not(.disabled):not(:disabled)`,
        children: O
          ? y.children
          : o(v, { ...y, ref: a, className: t(l, u && 'show', S[f]) }),
      }),
    });
  });
(It.displayName = 'Dropdown'),
  (It.defaultProps = {
    navbar: !1,
    align: 'start',
    autoClose: !0,
    drop: 'down',
  });
const $t = Object.assign(It, {
  Toggle: Nt,
  Menu: Lt,
  Item: kt,
  ItemText: Ht,
  Divider: Bt,
  Header: Wt,
});
export { $t as D, Nt as a, Lt as b };
