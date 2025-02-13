import { r as e, am as t, c as n } from './index-24a58ae8.js';
var r = { attributes: !0, characterData: !0, subtree: !0, childList: !0 };
var i = (function () {
    if ('undefined' != typeof Map) return Map;
    function e(e, t) {
      var n = -1;
      return (
        e.some(function (e, r) {
          return e[0] === t && ((n = r), !0);
        }),
        n
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (t) {
          var n = e(this.__entries__, t),
            r = this.__entries__[n];
          return r && r[1];
        }),
        (t.prototype.set = function (t, n) {
          var r = e(this.__entries__, t);
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
        }),
        (t.prototype.delete = function (t) {
          var n = this.__entries__,
            r = e(n, t);
          ~r && n.splice(r, 1);
        }),
        (t.prototype.has = function (t) {
          return !!~e(this.__entries__, t);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (e, t) {
          void 0 === t && (t = null);
          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var i = r[n];
            e.call(t, i[1], i[0]);
          }
        }),
        t
      );
    })();
  })(),
  o =
    'undefined' != typeof window &&
    'undefined' != typeof document &&
    window.document === document,
  s =
    'undefined' != typeof global && global.Math === Math
      ? global
      : 'undefined' != typeof self && self.Math === Math
      ? self
      : 'undefined' != typeof window && window.Math === Math
      ? window
      : Function('return this')(),
  a =
    'function' == typeof requestAnimationFrame
      ? requestAnimationFrame.bind(s)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        },
  l = 2;
var c = 20,
  d = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  u = 'undefined' != typeof MutationObserver,
  h = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (e, t) {
          var n = !1,
            r = !1,
            i = 0;
          function o() {
            n && ((n = !1), e()), r && c();
          }
          function s() {
            a(o);
          }
          function c() {
            var e = Date.now();
            if (n) {
              if (e - i < l) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(s, t);
            i = e;
          }
          return c;
        })(this.refresh.bind(this), c));
    }
    return (
      (e.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e);
        ~n && t.splice(n, 1),
          !t.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (e) {
          return e.gatherActive(), e.hasActive();
        });
        return (
          e.forEach(function (e) {
            return e.broadcastActive();
          }),
          e.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        o &&
          !this.connected_ &&
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          u
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        o &&
          this.connected_ &&
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = void 0 === t ? '' : t;
        d.some(function (e) {
          return !!~n.indexOf(e);
        }) && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  p = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  f = function (e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || s;
  },
  g = _(0, 0, 0, 0);
function b(e) {
  return parseFloat(e) || 0;
}
function m(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (t, n) {
    return t + b(e['border-' + n + '-width']);
  }, 0);
}
function v(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return g;
  var r = f(e).getComputedStyle(e),
    i = (function (e) {
      for (
        var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
        n < r.length;
        n++
      ) {
        var i = r[n],
          o = e['padding-' + i];
        t[i] = b(o);
      }
      return t;
    })(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    a = b(r.width),
    l = b(r.height);
  if (
    ('border-box' === r.boxSizing &&
      (Math.round(a + o) !== t && (a -= m(r, 'left', 'right') + o),
      Math.round(l + s) !== n && (l -= m(r, 'top', 'bottom') + s)),
    !(function (e) {
      return e === f(e).document.documentElement;
    })(e))
  ) {
    var c = Math.round(a + o) - t,
      d = Math.round(l + s) - n;
    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(d) && (l -= d);
  }
  return _(i.left, i.top, a, l);
}
var w =
  'undefined' != typeof SVGGraphicsElement
    ? function (e) {
        return e instanceof f(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof f(e).SVGElement && 'function' == typeof e.getBBox;
      };
function y(e) {
  return o
    ? w(e)
      ? (function (e) {
          var t = e.getBBox();
          return _(0, 0, t.width, t.height);
        })(e)
      : v(e)
    : g;
}
function _(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var E = (function () {
    function e(e) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = _(0, 0, 0, 0)),
        (this.target = e);
    }
    return (
      (e.prototype.isActive = function () {
        var e = y(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        );
      }),
      e
    );
  })(),
  k = function (e, t) {
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      c =
        ((r = (n = t).x),
        (i = n.y),
        (o = n.width),
        (s = n.height),
        (a = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
        (l = Object.create(a.prototype)),
        p(l, {
          x: r,
          y: i,
          width: o,
          height: s,
          top: i,
          right: r + o,
          bottom: s + i,
          left: r,
        }),
        l);
    p(this, { target: e, contentRect: c });
  },
  O = (function () {
    function e(e, t, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new i()),
        'function' != typeof e)
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.',
        );
      (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
    }
    return (
      (e.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof f(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new E(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof f(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) &&
            (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (e) {
              return new k(e.target, e.broadcastRect());
            });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  S = 'undefined' != typeof WeakMap ? new WeakMap() : new i(),
  C = function e(t) {
    if (!(this instanceof e))
      throw new TypeError('Cannot call a class as a function.');
    if (!arguments.length)
      throw new TypeError('1 argument required, but only 0 present.');
    var n = h.getInstance(),
      r = new O(t, n, this);
    S.set(this, r);
  };
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  C.prototype[e] = function () {
    var t;
    return (t = S.get(this))[e].apply(t, arguments);
  };
});
var x = void 0 !== s.ResizeObserver ? s.ResizeObserver : C,
  A = ({ mutationObservables: t, resizeObservables: n, refresh: i }) => {
    const [o, s] = e.useState(0);
    function a(e) {
      const n = Array.from(e);
      for (const r of n)
        if (t) {
          if (!r.attributes) continue;
          t.find(e => r.matches(e)) && i(!0);
        }
    }
    function l(e) {
      const t = Array.from(e);
      for (const r of t)
        if (n) {
          if (!r.attributes) continue;
          n.find(e => r.matches(e)) && s(o + 1);
        }
    }
    return (
      (function (t, n, i = r) {
        e.useEffect(() => {
          if (t.current) {
            const e = new MutationObserver(n);
            return (
              e.observe(t.current, i),
              () => {
                e.disconnect();
              }
            );
          }
        }, [n, i]);
      })(
        e.useRef(document.documentElement || document.body),
        e => {
          for (const t of e)
            0 !== t.addedNodes.length && (a(t.addedNodes), l(t.addedNodes)),
              0 !== t.removedNodes.length &&
                (a(t.removedNodes), l(t.removedNodes));
        },
        { childList: !0, subtree: !0 },
      ),
      e.useEffect(() => {
        if (!n) return;
        const e = new x(() => {
          i();
        });
        for (const t of n) {
          const n = document.querySelector(t);
          n && e.observe(n);
        }
        return () => {
          e.disconnect();
        };
      }, [n, o]),
      null
    );
  };
function M(e) {
  let t = I;
  if (e) {
    t = e.getBoundingClientRect();
  }
  return t;
}
var I = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};
function H(e) {
  return e < 0 ? 0 : e;
}
function N() {
  return {
    w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  };
}
var D = (e, t) => e > t,
  L = (e, t) => e > t;
var R = 10;
function B(e = R) {
  return Array.isArray(e)
    ? e[0]
      ? [e[0], e[1] ? e[1] : e[0]]
      : [R, R]
    : [e, e];
}
var z = {
  maskWrapper: () => ({
    opacity: 0.7,
    left: 0,
    top: 0,
    position: 'fixed',
    zIndex: 99999,
    pointerEvents: 'none',
    color: '#000',
  }),
  svgWrapper: ({ windowWidth: e, windowHeight: t, wpx: n, wpy: r }) => ({
    width: e,
    height: t,
    left: Number(n) / 2,
    top: Number(r) / 2,
    position: 'fixed',
  }),
  maskArea: ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    width: n,
    height: r,
    fill: 'black',
    rx: 0,
  }),
  maskRect: ({ windowWidth: e, windowHeight: t, maskID: n }) => ({
    x: 0,
    y: 0,
    width: e,
    height: t,
    fill: 'currentColor',
    mask: `url(#${n})`,
  }),
  clickArea: ({ windowWidth: e, windowHeight: t, clipID: n }) => ({
    x: 0,
    y: 0,
    width: e,
    height: t,
    fill: 'currentcolor',
    pointerEvents: 'auto',
    clipPath: `url(#${n})`,
  }),
  highlightedArea: ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    width: n,
    height: r,
    pointerEvents: 'auto',
    fill: 'transparent',
    display: 'none',
  }),
};
var P = ({
  padding: e = 10,
  wrapperPadding: n = 0,
  onClick: r,
  onClickHighlighted: i,
  styles: o = {},
  sizes: s,
  className: a,
  highlightedAreaClassName: l,
  maskId: c,
  clipId: d,
}) => {
  const u = c || T('mask__'),
    h = d || T('clip__'),
    p = (function (e) {
      return (t, n) => {
        const r = z[t](n),
          i = e[t];
        return i ? i(r, n) : r;
      };
    })(o),
    [f, g] = B(e),
    [b, m] = B(n),
    { w: v, h: w } = N(),
    y = H((null == s ? void 0 : s.width) + 2 * f),
    _ = H((null == s ? void 0 : s.height) + 2 * g),
    E = H((null == s ? void 0 : s.top) - g - m / 2),
    k = H((null == s ? void 0 : s.left) - f - b / 2),
    O = v - b,
    S = w - m,
    C = p('maskArea', { x: k, y: E, width: y, height: _ }),
    x = p('highlightedArea', { x: k, y: E, width: y, height: _ });
  return t.createElement(
    'div',
    { style: p('maskWrapper', {}), onClick: r, className: a },
    t.createElement(
      'svg',
      {
        width: O,
        height: S,
        xmlns: 'http://www.w3.org/2000/svg',
        style: p('svgWrapper', {
          windowWidth: O,
          windowHeight: S,
          wpx: b,
          wpy: m,
        }),
      },
      t.createElement(
        'defs',
        null,
        t.createElement(
          'mask',
          { id: u },
          t.createElement('rect', {
            x: 0,
            y: 0,
            width: O,
            height: S,
            fill: 'white',
          }),
          t.createElement('rect', { style: C, rx: C.rx ? 1 : void 0 }),
        ),
        t.createElement(
          'clipPath',
          { id: h },
          t.createElement('polygon', {
            points: `0 0, 0 ${S}, ${k} ${S}, ${k} ${E}, ${k + y} ${E}, ${
              k + y
            } ${E + _}, ${k} ${E + _}, ${k} ${S}, ${O} ${S}, ${O} 0`,
          }),
        ),
      ),
      t.createElement('rect', {
        style: p('maskRect', { windowWidth: O, windowHeight: S, maskID: u }),
      }),
      t.createElement('rect', {
        style: p('clickArea', {
          windowWidth: O,
          windowHeight: S,
          top: E,
          left: k,
          width: y,
          height: _,
          clipID: h,
        }),
      }),
      t.createElement('rect', {
        style: x,
        className: l,
        onClick: i,
        rx: x.rx ? 1 : void 0,
      }),
    ),
  );
};
function T(e) {
  return e + Math.random().toString(36).substring(2, 16);
}
var W = {
  popover: () => ({
    position: 'fixed',
    maxWidth: 353,
    backgroundColor: '#fff',
    padding: '24px 30px',
    boxShadow: '0 0.5em 3em rgba(0, 0, 0, 0.3)',
    color: 'inherit',
    zIndex: 1e5,
    transition: 'transform 0.3s',
    top: 0,
    left: 0,
  }),
};
var $ = ({
    children: n,
    position: r = 'bottom',
    padding: i = 10,
    styles: o = {},
    sizes: s,
    refresher: a,
    ...l
  }) => {
    const c = e.useRef(null),
      d = e.useRef(''),
      u = e.useRef(''),
      h = e.useRef(''),
      { w: p, h: f } = N(),
      g = (function (e) {
        return (t, n) => {
          const r = W[t](n),
            i = e[t];
          return i ? i(r, n) : r;
        };
      })(o),
      b = (function (t, n) {
        const [r, i] = e.useState(I),
          o = e.useCallback(() => {
            (null == t ? void 0 : t.current) &&
              i(M(null == t ? void 0 : t.current));
          }, [null == t ? void 0 : t.current]);
        return (
          e.useEffect(
            () => (
              o(),
              window.addEventListener('resize', o),
              () => window.removeEventListener('resize', o)
            ),
            [null == t ? void 0 : t.current, n],
          ),
          r
        );
      })(c, a),
      { width: m, height: v } = b,
      w = null == s ? void 0 : s.left,
      y = null == s ? void 0 : s.top,
      _ = null == s ? void 0 : s.right,
      E = null == s ? void 0 : s.bottom,
      k =
        r && 'function' == typeof r
          ? r(
              {
                width: m,
                height: v,
                windowWidth: p,
                windowHeight: f,
                top: y,
                left: w,
                right: _,
                bottom: E,
                x: s.x,
                y: s.y,
              },
              b,
            )
          : r,
      O = { left: w, right: p - _, top: y, bottom: f - E },
      [S, C] = B(i),
      x = e =>
        O[e] > ((e => /(left|right)/.test(e))(e) ? m + 2 * S : v + 2 * C),
      A = e => {
        const t =
          ((n = O),
          Object.keys(n)
            .map(e => ({ position: e, value: n[e] }))
            .sort((e, t) => t.value - e.value)
            .map(e => e.position));
        var n;
        for (let r = 0; r < t.length; r++)
          if (x(t[r])) return (d.current = t[r]), e[t[r]];
        return (d.current = 'center'), e.center;
      },
      H = (e => {
        if (Array.isArray(e)) {
          const t = D(e[0], p),
            n = L(e[1], f);
          return (
            (d.current = 'custom'),
            [t ? p / 2 - m / 2 : e[0], n ? f / 2 - v / 2 : e[1]]
          );
        }
        const t = D(w + m, p) ? _ - m + S : w - S,
          n = t > S ? t : S,
          r = L(y + v, f) ? E - v + C : y - C,
          i = r > C ? r : C;
        L(y + v, f) ? (u.current = 'bottom') : (u.current = 'top'),
          D(w + m, p) ? (h.current = 'left') : (h.current = 'right');
        const o = {
          top: [n, y - v - 2 * C],
          right: [_ + 2 * S, i],
          bottom: [n, E + 2 * C],
          left: [w - m - 2 * S, i],
          center: [p / 2 - m / 2, f / 2 - v / 2],
        };
        return 'center' === e || x(e) ? ((d.current = e), o[e]) : A(o);
      })(k);
    return t.createElement(
      'div',
      {
        className: 'reactour__popover',
        style: {
          ...g('popover', {
            position: d.current,
            verticalAlign: u.current,
            horizontalAlign: h.current,
          }),
          transform: `translate(${Math.round(H[0])}px, ${Math.round(H[1])}px)`,
        },
        ref: c,
        ...l,
      },
      n,
    );
  },
  j = Object.defineProperty,
  F = Object.defineProperties,
  q = Object.getOwnPropertyDescriptors,
  V = Object.getOwnPropertySymbols,
  G = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable,
  X = (e, t, n) =>
    t in e
      ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Y = (e, t) => {
    for (var n in t || (t = {})) G.call(t, n) && X(e, n, t[n]);
    if (V) for (var n of V(t)) K.call(t, n) && X(e, n, t[n]);
    return e;
  },
  J = (e, t) => F(e, q(t)),
  Q = (e, t) => {
    var n = {};
    for (var r in e) G.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && V)
      for (var r of V(e)) t.indexOf(r) < 0 && K.call(e, r) && (n[r] = e[r]);
    return n;
  },
  U = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    windowWidth: 0,
    windowHeight: 0,
    x: 0,
    y: 0,
  };
function Z(t, n = { block: 'center', behavior: 'smooth', inViewThreshold: 0 }) {
  const [r, i] = e.useState(!1),
    [o, s] = e.useState(!1),
    [a, l] = e.useState(!1),
    [c, d] = e.useState(null),
    [u, h] = e.useState(U),
    p =
      (null == t ? void 0 : t.selector) instanceof Element
        ? null == t
          ? void 0
          : t.selector
        : document.querySelector(null == t ? void 0 : t.selector),
    f = e.useCallback(() => {
      const e = ee(
          p,
          null == t ? void 0 : t.highlightedSelectors,
          null == t ? void 0 : t.bypassElem,
        ),
        n = Q(e, ['hasHighligtedElems']);
      Object.entries(u).some(([e, t]) => n[e] !== t) && h(n);
    }, [p, null == t ? void 0 : t.highlightedSelectors, u]);
  e.useEffect(
    () => (
      f(),
      window.addEventListener('resize', f),
      () => window.removeEventListener('resize', f)
    ),
    [p, null == t ? void 0 : t.highlightedSelectors, c],
  ),
    e.useEffect(() => {
      var e, t;
      !(function ({ top: e, right: t, bottom: n, left: r, threshold: i }) {
        const { w: o, h: s } = N(),
          { thresholdX: a, thresholdY: l } = (function (e) {
            return 'object' == typeof e && null !== e
              ? { thresholdX: e.x || 0, thresholdY: e.y || 0 }
              : { thresholdX: e || 0, thresholdY: e || 0 };
          })(i);
        return (
          (e < 0 && n - e > s) ||
          (e >= 0 + l && r >= 0 + a && n <= s - l && t <= o - a)
        );
      })(J(Y({}, u), { threshold: n.inViewThreshold })) &&
        p &&
        (i(!0),
        ((e = p),
        (t = n),
        new Promise(n => {
          if (!(e instanceof Element))
            throw new TypeError('Argument 1 must be an Element');
          let r = 0,
            i = null;
          const o = Object.assign({ behavior: 'smooth' }, t);
          e.scrollIntoView(o),
            requestAnimationFrame(function t() {
              const o = null == e ? void 0 : e.getBoundingClientRect().top;
              if (o === i) {
                if (r++ > 2) return n(null);
              } else (r = 0), (i = o);
              requestAnimationFrame(t);
            });
        }))
          .then(() => {
            o || d(Date.now());
          })
          .finally(() => {
            i(!1);
          }));
    }, [u]);
  const g = e.useCallback(() => {
    s(!0);
    const e = ee(
        p,
        null == t ? void 0 : t.highlightedSelectors,
        null == t ? void 0 : t.bypassElem,
      ),
      { hasHighligtedElems: n } = e,
      r = Q(e, ['hasHighligtedElems']);
    l(n), h(r), s(!1);
  }, [p, null == t ? void 0 : t.highlightedSelectors, u]);
  return {
    sizes: u,
    transition: r,
    target: p,
    observableRefresher: g,
    isHighlightingObserved: a,
  };
}
function ee(e, t = [], n = !0) {
  let r = !1;
  const { w: i, h: o } = N();
  if (!t)
    return J(Y({}, M(e)), {
      windowWidth: i,
      windowHeight: o,
      hasHighligtedElems: !1,
    });
  let s = M(e),
    a = { bottom: 0, height: 0, left: i, right: 0, top: o, width: 0 };
  for (const c of t) {
    const t = document.querySelector(c);
    if (!t || 'none' === t.style.display || 'hidden' === t.style.visibility)
      continue;
    const i = M(t);
    (r = !0),
      n || !e
        ? (i.top < a.top && (a.top = i.top),
          i.right > a.right && (a.right = i.right),
          i.bottom > a.bottom && (a.bottom = i.bottom),
          i.left < a.left && (a.left = i.left),
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top))
        : (i.top < s.top && (s.top = i.top),
          i.right > s.right && (s.right = i.right),
          i.bottom > s.bottom && (s.bottom = i.bottom),
          i.left < s.left && (s.left = i.left),
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top));
  }
  const l = !(!n && e) && a.width > 0 && a.height > 0;
  return {
    left: (l ? a : s).left,
    top: (l ? a : s).top,
    right: (l ? a : s).right,
    bottom: (l ? a : s).bottom,
    width: (l ? a : s).width,
    height: (l ? a : s).height,
    windowWidth: i,
    windowHeight: o,
    hasHighligtedElems: r,
    x: s.x,
    y: s.y,
  };
}
var te = ({
    disableKeyboardNavigation: t,
    setCurrentStep: n,
    currentStep: r,
    setIsOpen: i,
    stepsLength: o,
    disable: s,
    rtl: a,
    clickProps: l,
    keyboardHandler: c,
  }) => {
    function d(e) {
      if ((e.stopPropagation(), !0 === t || s)) return;
      let d, u, h;
      function p() {
        n(Math.min(r + 1, o - 1));
      }
      function f() {
        n(Math.max(r - 1, 0));
      }
      t &&
        ((d = t.includes('esc')),
        (u = t.includes('right')),
        (h = t.includes('left'))),
        c && 'function' == typeof c
          ? c(e, l, { isEscDisabled: d, isRightDisabled: u, isLeftDisabled: h })
          : (27 !== e.keyCode || d || (e.preventDefault(), i(!1)),
            39 !== e.keyCode || u || (e.preventDefault(), a ? f() : p()),
            37 !== e.keyCode || h || (e.preventDefault(), a ? p() : f()));
    }
    return (
      e.useEffect(
        () => (
          window.addEventListener('keydown', d, !1),
          () => {
            window.removeEventListener('keydown', d);
          }
        ),
        [s, n, r],
      ),
      null
    );
  },
  ne = {
    badge: () => ({
      position: 'absolute',
      fontFamily: 'monospace',
      background: 'var(--reactour-accent,#007aff)',
      height: '1.875em',
      lineHeight: 2,
      paddingLeft: '0.8125em',
      paddingRight: '0.8125em',
      fontSize: '1em',
      borderRadius: '1.625em',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 0.25em 0.5em rgba(0, 0, 0, 0.3)',
      top: '-0.8125em',
      left: '-0.8125em',
    }),
    controls: () => ({
      display: 'flex',
      marginTop: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
    navigation: () => ({
      counterReset: 'dot',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }),
    button: ({ disabled: e }) => ({
      display: 'block',
      padding: 0,
      border: 0,
      background: 'none',
      cursor: e ? 'not-allowed' : 'pointer',
    }),
    arrow: ({ disabled: e }) => ({
      color: e ? '#caccce' : '#646464',
      width: 16,
      height: 12,
      flex: '0 0 16px',
    }),
    dot: ({ current: e, disabled: t, showNumber: n }) => ({
      counterIncrement: 'dot',
      width: 8,
      height: 8,
      border: e ? '0' : '1px solid #caccce',
      borderRadius: '100%',
      padding: 0,
      display: 'block',
      margin: 4,
      transition: 'opacity 0.3s, transform 0.3s',
      cursor: t ? 'not-allowed' : 'pointer',
      transform: `scale(${e ? 1.25 : 1})`,
      color: e ? 'var(--reactour-accent, #007aff)' : '#caccce',
      background: e ? 'var(--reactour-accent, #007aff)' : 'none',
    }),
    close: ({ disabled: e }) => ({
      position: 'absolute',
      top: 22,
      right: 22,
      width: 9,
      height: 9,
      '--rt-close-btn': e ? '#caccce' : '#5e5e5e',
      '--rt-close-btn-disabled': e ? '#caccce' : '#000',
    }),
    svg: () => ({ display: 'block' }),
  };
function re(e) {
  return (t, n) => {
    const r = ne[t](n),
      i = e[t];
    return i ? i(r, n) : r;
  };
}
var ie = ({
    styles: e = {},
    steps: n,
    setCurrentStep: r,
    currentStep: i,
    setIsOpen: o,
    nextButton: s,
    prevButton: a,
    disableDots: l,
    hideDots: c,
    hideButtons: d,
    disableAll: u,
    rtl: h,
    Arrow: p = oe,
  }) => {
    const f = n.length,
      g = re(e),
      b = ({ onClick: n, kind: o = 'next', children: s, hideArrow: a }) =>
        t.createElement(
          'button',
          {
            style: g('button', {
              kind: o,
              disabled: u || ('next' === o ? f - 1 === i : 0 === i),
            }),
            onClick: function () {
              u ||
                (n && 'function' == typeof n
                  ? n()
                  : r(
                      'next' === o
                        ? Math.min(i + 1, f - 1)
                        : Math.max(i - 1, 0),
                    ));
            },
            'aria-label': `Go to ${o} step`,
          },
          a
            ? null
            : t.createElement(p, {
                styles: e,
                inverted: h ? 'prev' === o : 'next' === o,
                disabled: u || ('next' === o ? f - 1 === i : 0 === i),
              }),
          s,
        );
    return t.createElement(
      'div',
      { style: g('controls', {}), dir: h ? 'rtl' : 'ltr' },
      d
        ? null
        : a && 'function' == typeof a
        ? a({
            Button: b,
            setCurrentStep: r,
            currentStep: i,
            stepsLength: f,
            setIsOpen: o,
            steps: n,
          })
        : t.createElement(b, { kind: 'prev' }),
      c
        ? null
        : t.createElement(
            'div',
            { style: g('navigation', {}) },
            Array.from({ length: f }, (e, t) => t).map(e => {
              var o;
              return t.createElement('button', {
                style: g('dot', { current: e === i, disabled: l || u }),
                onClick: () => {
                  l || u || r(e);
                },
                key: `navigation_dot_${e}`,
                'aria-label':
                  (null == (o = n[e]) ? void 0 : o.navDotAriaLabel) ||
                  `Go to step ${e + 1}`,
              });
            }),
          ),
      d
        ? null
        : s && 'function' == typeof s
        ? s({
            Button: b,
            setCurrentStep: r,
            currentStep: i,
            stepsLength: f,
            setIsOpen: o,
            steps: n,
          })
        : t.createElement(b, null),
    );
  },
  oe = ({ styles: e = {}, inverted: n = !1, disabled: r }) => {
    const i = re(e);
    return t.createElement(
      'svg',
      {
        viewBox: '0 0 18.4 14.4',
        style: i('arrow', { inverted: n, disabled: r }),
      },
      t.createElement('path', {
        d: n
          ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2'
          : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeMiterlimit: '10',
      }),
    );
  },
  se = {
    Badge: ({ styles: e = {}, children: n }) => {
      const r = re(e);
      return t.createElement('span', { style: r('badge', {}) }, n);
    },
    Close: e => {
      var n = e,
        { styles: r = {}, onClick: i, disabled: o } = n,
        s = Q(n, ['styles', 'onClick', 'disabled']);
      const a = re(r);
      return t.createElement(
        'button',
        Y(
          {
            className: 'reactour__close-button',
            style: Y(Y({}, a('button', {})), a('close', { disabled: o })),
            onClick: i,
          },
          s,
        ),
        t.createElement(
          'svg',
          {
            viewBox: '0 0 9.1 9.1',
            'aria-hidden': !0,
            role: 'presentation',
            style: Y({}, a('svg', {})),
          },
          t.createElement('path', {
            fill: 'currentColor',
            d: 'M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z',
          }),
        ),
      );
    },
    Content: ({
      content: e,
      setCurrentStep: t,
      transition: n,
      isHighlightingObserved: r,
      currentStep: i,
      setIsOpen: o,
    }) =>
      'function' == typeof e
        ? e({
            setCurrentStep: t,
            transition: n,
            isHighlightingObserved: r,
            currentStep: i,
            setIsOpen: o,
          })
        : e,
    Navigation: ie,
    Arrow: oe,
  },
  ae = ({
    styles: e,
    components: n = {},
    badgeContent: r,
    accessibilityOptions: i,
    disabledActions: o,
    onClickClose: s,
    steps: a,
    setCurrentStep: l,
    currentStep: c,
    transition: d,
    isHighlightingObserved: u,
    setIsOpen: h,
    nextButton: p,
    prevButton: f,
    disableDotsNavigation: g,
    rtl: b,
    showPrevNextButtons: m = !0,
    showCloseButton: v = !0,
    showNavigation: w = !0,
    showBadge: y = !0,
    showDots: _ = !0,
    meta: E,
    setMeta: k,
    setSteps: O,
  }) => {
    const S = a[c],
      {
        Badge: C,
        Close: x,
        Content: A,
        Navigation: M,
        Arrow: I,
      } = ((H = n), Y(Y({}, se), H));
    var H;
    const N =
      r && 'function' == typeof r
        ? r({ currentStep: c, totalSteps: a.length, transition: d })
        : c + 1;
    return t.createElement(
      t.Fragment,
      null,
      y ? t.createElement(C, { styles: e }, N) : null,
      v
        ? t.createElement(x, {
            styles: e,
            'aria-label': null == i ? void 0 : i.closeButtonAriaLabel,
            disabled: o,
            onClick: function () {
              o ||
                (s && 'function' == typeof s
                  ? s({
                      setCurrentStep: l,
                      setIsOpen: h,
                      currentStep: c,
                      steps: a,
                      meta: E,
                      setMeta: k,
                      setSteps: O,
                    })
                  : h(!1));
            },
          })
        : null,
      t.createElement(A, {
        content: null == S ? void 0 : S.content,
        setCurrentStep: l,
        currentStep: c,
        transition: d,
        isHighlightingObserved: u,
        setIsOpen: h,
      }),
      w
        ? t.createElement(M, {
            setCurrentStep: l,
            currentStep: c,
            setIsOpen: h,
            steps: a,
            styles: e,
            'aria-hidden': !(null == i
              ? void 0
              : i.showNavigationScreenReaders),
            nextButton: p,
            prevButton: f,
            disableDots: g,
            hideButtons: !m,
            hideDots: !_,
            disableAll: o,
            rtl: b,
            Arrow: I,
          })
        : null,
    );
  },
  le = n => {
    var r,
      i = n,
      {
        currentStep: o,
        setCurrentStep: s,
        setIsOpen: a,
        steps: l = [],
        setSteps: c,
        styles: d = {},
        scrollSmooth: u,
        afterOpen: h,
        beforeClose: p,
        padding: f = 10,
        position: g,
        onClickMask: b,
        onClickHighlighted: m,
        keyboardHandler: v,
        className: w = 'reactour__popover',
        maskClassName: y = 'reactour__mask',
        highlightedMaskClassName: _,
        clipId: E,
        maskId: k,
        disableInteraction: O,
        disableKeyboardNavigation: S,
        inViewThreshold: C,
        disabledActions: x,
        setDisabledActions: M,
        rtl: I,
        accessibilityOptions: H = {
          closeButtonAriaLabel: 'Close Tour',
          showNavigationScreenReaders: !0,
        },
        ContentComponent: N,
        Wrapper: D,
        meta: L,
        setMeta: R,
        onTransition: B = () => 'center',
      } = i,
      z = Q(i, [
        'currentStep',
        'setCurrentStep',
        'setIsOpen',
        'steps',
        'setSteps',
        'styles',
        'scrollSmooth',
        'afterOpen',
        'beforeClose',
        'padding',
        'position',
        'onClickMask',
        'onClickHighlighted',
        'keyboardHandler',
        'className',
        'maskClassName',
        'highlightedMaskClassName',
        'clipId',
        'maskId',
        'disableInteraction',
        'disableKeyboardNavigation',
        'inViewThreshold',
        'disabledActions',
        'setDisabledActions',
        'rtl',
        'accessibilityOptions',
        'ContentComponent',
        'Wrapper',
        'meta',
        'setMeta',
        'onTransition',
      ]);
    const T = l[o],
      W = Y(Y({}, d), null == T ? void 0 : T.styles),
      {
        sizes: j,
        transition: F,
        observableRefresher: q,
        isHighlightingObserved: V,
        target: G,
      } = Z(T, {
        block: 'center',
        behavior: u ? 'smooth' : 'auto',
        inViewThreshold: C,
      });
    e.useEffect(
      () => (
        h && 'function' == typeof h && h(G),
        () => {
          p && 'function' == typeof p && p(G);
        }
      ),
      [],
    );
    const {
        maskPadding: K,
        popoverPadding: X,
        wrapperPadding: U,
      } = (function (e) {
        if ('object' == typeof e && null !== e)
          return {
            maskPadding: e.mask,
            popoverPadding: e.popover,
            wrapperPadding: e.wrapper,
          };
        return { maskPadding: e, popoverPadding: e, wrapperPadding: 0 };
      })(null != (r = null == T ? void 0 : T.padding) ? r : f),
      ee = {
        setCurrentStep: s,
        setIsOpen: a,
        currentStep: o,
        setSteps: c,
        steps: l,
        setMeta: R,
        meta: L,
      };
    const ne =
      'boolean' == typeof (null == T ? void 0 : T.stepInteraction)
        ? !(null == T ? void 0 : T.stepInteraction)
        : O;
    e.useEffect(
      () => (
        (null == T ? void 0 : T.action) &&
          'function' == typeof (null == T ? void 0 : T.action) &&
          (null == T || T.action(G)),
        void 0 !== (null == T ? void 0 : T.disableActions) &&
          M(null == T ? void 0 : T.disableActions),
        () => {
          (null == T ? void 0 : T.actionAfter) &&
            'function' == typeof (null == T ? void 0 : T.actionAfter) &&
            (null == T || T.actionAfter(G));
        }
      ),
      [T],
    );
    const re = F
        ? B
        : (null == T ? void 0 : T.position)
        ? null == T
          ? void 0
          : T.position
        : g,
      ie = D || t.Fragment;
    return T
      ? t.createElement(
          ie,
          null,
          t.createElement(A, {
            mutationObservables: null == T ? void 0 : T.mutationObservables,
            resizeObservables: null == T ? void 0 : T.resizeObservables,
            refresh: q,
          }),
          t.createElement(te, {
            setCurrentStep: s,
            currentStep: o,
            setIsOpen: a,
            stepsLength: l.length,
            disableKeyboardNavigation: S,
            disable: x,
            rtl: I,
            clickProps: ee,
            keyboardHandler: v,
          }),
          t.createElement(P, {
            sizes: F ? ce : j,
            onClick: function () {
              x || (b && 'function' == typeof b ? b(ee) : a(!1));
            },
            styles: Y(
              {
                highlightedArea: e =>
                  J(Y({}, e), { display: ne ? 'block' : 'none' }),
              },
              W,
            ),
            padding: F ? 0 : K,
            highlightedAreaClassName: _,
            className: y,
            onClickHighlighted: m,
            wrapperPadding: U,
            clipId: E,
            maskId: k,
          }),
          t.createElement(
            $,
            {
              sizes: j,
              styles: W,
              position: re,
              padding: X,
              'aria-labelledby': null == H ? void 0 : H.ariaLabelledBy,
              className: w,
              refresher: o,
            },
            N
              ? t.createElement(
                  N,
                  Y(
                    {
                      styles: W,
                      setCurrentStep: s,
                      currentStep: o,
                      setIsOpen: a,
                      steps: l,
                      accessibilityOptions: H,
                      disabledActions: x,
                      transition: F,
                      isHighlightingObserved: V,
                      rtl: I,
                    },
                    z,
                  ),
                )
              : t.createElement(
                  ae,
                  Y(
                    {
                      styles: W,
                      setCurrentStep: s,
                      currentStep: o,
                      setIsOpen: a,
                      steps: l,
                      setSteps: c,
                      accessibilityOptions: H,
                      disabledActions: x,
                      transition: F,
                      isHighlightingObserved: V,
                      rtl: I,
                      meta: L,
                      setMeta: R,
                    },
                    z,
                  ),
                ),
          ),
        )
      : null;
  };
var ce = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  de = t.createContext({
    isOpen: !1,
    setIsOpen: () => !1,
    currentStep: 0,
    setCurrentStep: () => 0,
    steps: [],
    setSteps: () => [],
    setMeta: () => '',
    disabledActions: !1,
    setDisabledActions: () => !1,
    components: {},
  }),
  ue = n => {
    var r = n,
      {
        children: i,
        defaultOpen: o = !1,
        startAt: s = 0,
        steps: a,
        setCurrentStep: l,
        currentStep: c,
      } = r,
      d = Q(r, [
        'children',
        'defaultOpen',
        'startAt',
        'steps',
        'setCurrentStep',
        'currentStep',
      ]);
    const [u, h] = e.useState(o),
      [p, f] = e.useState(s),
      [g, b] = e.useState(a),
      [m, v] = e.useState(''),
      [w, y] = e.useState(!1),
      _ = Y(
        {
          isOpen: u,
          setIsOpen: h,
          currentStep: c || p,
          setCurrentStep: l && 'function' == typeof l ? l : f,
          steps: g,
          setSteps: b,
          disabledActions: w,
          setDisabledActions: y,
          meta: m,
          setMeta: v,
        },
        d,
      );
    return t.createElement(
      de.Provider,
      { value: _ },
      i,
      u ? t.createElement(le, Y({}, _)) : null,
    );
  };
function he() {
  return e.useContext(de);
}
const pe = {
    mask: '_mask_1o3c2_1',
    highlightedMask: '_highlightedMask_1o3c2_5',
  },
  fe = ({ setOpened: e, children: t, steps: r }) =>
    n(ue, {
      disableInteraction: !0,
      steps: r,
      maskClassName: pe.mask,
      highlightedMaskClassName: pe.highlightedMask,
      styles: {
        popover: e => ({
          ...e,
          padding: '2% 2% 1% 2%',
          fontSize: '1.25em',
          fontFamily: 'Poppins',
          '--reactour-accent': 'blue',
          borderRadius: 10,
          background: '#232627',
          borderImage: 'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
          color: '#eaeaea',
        }),
        close: e => ({
          ...e,
          color: 'gray',
          marginTop: '',
          transform: 'scale(1.5)',
          background: '#303030',
        }),
        maskArea: e => ({ ...e, rx: 10 }),
        arrow: e => ({ ...e, color: '#eaeaea', transform: 'scale(1.3)' }),
        dot: e => ({
          ...e,
          cursor: 'auto',
          border: '1px solid gray',
          background: 'rgb(150, 155, 150)',
        }),
        badge: e => ({
          ...e,
          background:
            'radial-gradient(759px at 14% 22.3%, rgb(10, 94, 68) 0%, rgb(15, 164, 102) 90%)',
          color: 'white',
          fontSize: '1.25em',
          fontFamily: 'Poppins',
          borderRadius: 100,
        }),
      },
      startAt: 0,
      prevButton: ({
        Button: e,
        currentStep: t,
        setIsOpen: r,
        setCurrentStep: i,
        steps: o,
      }) =>
        n('div', {
          className: pe.Btn,
          children: n(e, {
            onClick: () => {
              0 != t &&
                (t === (null == o ? void 0 : o.length) && r(!1), i(t - 1));
            },
            kind: 'prev',
          }),
        }),
      nextButton: ({
        Button: t,
        currentStep: r,
        setIsOpen: i,
        setCurrentStep: o,
        steps: s,
      }) =>
        n(t, {
          kind: 'next',
          onClick: () => {
            s &&
              (r + 1 === (null == s ? void 0 : s.length)
                ? (i(!1), e(!1))
                : o(r + 1));
          },
        }),
      onClickMask: ({ setIsOpen: e }) => {
        e(!0);
      },
      onClickClose: ({ setIsOpen: t }) => {
        e(!1), t(!1);
      },
      position: 'right',
      children: t,
    });
export { fe as T, he as u };
