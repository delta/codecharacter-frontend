import { c as e, u as t, e as n } from './ThemeProvider-528d6954.js';
import {
  am as o,
  b5 as r,
  r as s,
  c as i,
  F as a,
  j as l,
} from './index-3b0785b0.js';
import { a as c, _ as u } from './setPrototypeOf-5f9718cf.js';
import { c as d } from './createWithBsPrefix-3a2cf2e8.js';
import { p as f } from './index-06bcf729.js';
import { d as p } from './divWithClassName-662bab3a.js';
function m(e) {
  return (e && e.ownerDocument) || document;
}
function h(e, t) {
  return (function (e) {
    var t = m(e);
    return (t && t.defaultView) || window;
  })(e).getComputedStyle(e, t);
}
var E = /([A-Z])/g;
var g = /^ms-/;
function v(e) {
  return (function (e) {
    return e.replace(E, '-$1').toLowerCase();
  })(e).replace(g, '-ms-');
}
var b =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function x(e, t) {
  var n = '',
    o = '';
  if ('string' == typeof t)
    return e.style.getPropertyValue(v(t)) || h(e).getPropertyValue(v(t));
  Object.keys(t).forEach(function (r) {
    var s = t[r];
    s || 0 === s
      ? !(function (e) {
          return !(!e || !b.test(e));
        })(r)
        ? (n += v(r) + ': ' + s + ';')
        : (o += r + '(' + s + ') ')
      : e.style.removeProperty(v(r));
  }),
    o && (n += 'transform: ' + o + ';'),
    (e.style.cssText += ';' + n);
}
const y = !1,
  C = o.createContext(null);
var w = 'unmounted',
  k = 'exited',
  N = 'entering',
  R = 'entered',
  O = 'exiting',
  T = (function (e) {
    var t, n;
    function s(t, n) {
      var o;
      o = e.call(this, t, n) || this;
      var r,
        s = n && !n.isMounting ? t.enter : t.appear;
      return (
        (o.appearStatus = null),
        t.in
          ? s
            ? ((r = k), (o.appearStatus = N))
            : (r = R)
          : (r = t.unmountOnExit || t.mountOnEnter ? w : k),
        (o.state = { status: r }),
        (o.nextCallback = null),
        o
      );
    }
    (n = e),
      ((t = s).prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      c(t, n),
      (s.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === w ? { status: k } : null;
      });
    var i = s.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== N && n !== R && (t = N)
            : (n !== N && n !== R) || (t = O);
        }
        this.updateStatus(!1, t);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var e,
          t,
          n,
          o = this.props.timeout;
        return (
          (e = t = n = o),
          null != o &&
            'number' != typeof o &&
            ((e = o.exit),
            (t = o.enter),
            (n = void 0 !== o.appear ? o.appear : t)),
          { exit: e, enter: t, appear: n }
        );
      }),
      (i.updateStatus = function (e, t) {
        if ((void 0 === e && (e = !1), null !== t))
          if ((this.cancelNextCallback(), t === N)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : r.findDOMNode(this);
              n &&
                (function (e) {
                  e.scrollTop;
                })(n);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === k &&
            this.setState({ status: w });
      }),
      (i.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          o = this.context ? this.context.isMounting : e,
          s = this.props.nodeRef ? [o] : [r.findDOMNode(this), o],
          i = s[0],
          a = s[1],
          l = this.getTimeouts(),
          c = o ? l.appear : l.enter;
        (!e && !n) || y
          ? this.safeSetState({ status: R }, function () {
              t.props.onEntered(i);
            })
          : (this.props.onEnter(i, a),
            this.safeSetState({ status: N }, function () {
              t.props.onEntering(i, a),
                t.onTransitionEnd(c, function () {
                  t.safeSetState({ status: R }, function () {
                    t.props.onEntered(i, a);
                  });
                });
            }));
      }),
      (i.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          o = this.props.nodeRef ? void 0 : r.findDOMNode(this);
        t && !y
          ? (this.props.onExit(o),
            this.safeSetState({ status: O }, function () {
              e.props.onExiting(o),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: k }, function () {
                    e.props.onExited(o);
                  });
                });
            }))
          : this.safeSetState({ status: k }, function () {
              e.props.onExited(o);
            });
      }),
      (i.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (e, t) {
        (t = this.setNextCallback(t)), this.setState(e, t);
      }),
      (i.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (o) {
            n && ((n = !1), (t.nextCallback = null), e(o));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : r.findDOMNode(this),
          o = null == e && !this.props.addEndListener;
        if (n && !o) {
          if (this.props.addEndListener) {
            var s = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              i = s[0],
              a = s[1];
            this.props.addEndListener(i, a);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }),
      (i.render = function () {
        var e = this.state.status;
        if (e === w) return null;
        var t = this.props,
          n = t.children;
        t.in,
          t.mountOnEnter,
          t.unmountOnExit,
          t.appear,
          t.enter,
          t.exit,
          t.timeout,
          t.addEndListener,
          t.onEnter,
          t.onEntering,
          t.onEntered,
          t.onExit,
          t.onExiting,
          t.onExited,
          t.nodeRef;
        var r = u(t, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return o.createElement(
          C.Provider,
          { value: null },
          'function' == typeof n
            ? n(e, r)
            : o.cloneElement(o.Children.only(n), r),
        );
      }),
      s
    );
  })(o.Component);
function S() {}
(T.contextType = C),
  (T.propTypes = {}),
  (T.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: S,
    onEntering: S,
    onEntered: S,
    onExit: S,
    onExiting: S,
    onExited: S,
  }),
  (T.UNMOUNTED = w),
  (T.EXITED = k),
  (T.ENTERING = N),
  (T.ENTERED = R),
  (T.EXITING = O);
const L = !(
  'undefined' == typeof window ||
  !window.document ||
  !window.document.createElement
);
var D = !1,
  M = !1;
try {
  var F = {
    get passive() {
      return (D = !0);
    },
    get once() {
      return (M = D = !0);
    },
  };
  L &&
    (window.addEventListener('test', F, F),
    window.removeEventListener('test', F, !0));
} catch (Ke) {}
function P(e, t, n, o) {
  if (o && 'boolean' != typeof o && !M) {
    var r = o.once,
      s = o.capture,
      i = n;
    !M &&
      r &&
      ((i =
        n.__once ||
        function e(o) {
          this.removeEventListener(t, e, s), n.call(this, o);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, D ? o : s);
  }
  e.addEventListener(t, n, o);
}
function j(e, t, n, o) {
  var r = o && 'boolean' != typeof o ? o.capture : o;
  e.removeEventListener(t, n, r),
    n.__once && e.removeEventListener(t, n.__once, r);
}
function B(e, t, n, o) {
  return (
    P(e, t, n, o),
    function () {
      j(e, t, n, o);
    }
  );
}
function A(e, t, n) {
  void 0 === n && (n = 5);
  var o = !1,
    r = setTimeout(function () {
      o ||
        (function (e, t, n, o) {
          if ((void 0 === n && (n = !1), void 0 === o && (o = !0), e)) {
            var r = document.createEvent('HTMLEvents');
            r.initEvent(t, n, o), e.dispatchEvent(r);
          }
        })(e, 'transitionend', !0);
    }, t + n),
    s = B(
      e,
      'transitionend',
      function () {
        o = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(r), s();
  };
}
function $(e, t, n, o) {
  var r, s;
  null == n &&
    ((r = x(e, 'transitionDuration') || ''),
    (s = -1 === r.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(r) * s || 0));
  var i = A(e, n, o),
    a = B(e, 'transitionend', t);
  return function () {
    i(), a();
  };
}
function W(e, t) {
  const n = x(e, t) || '',
    o = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * o;
}
function H(e, t) {
  const n = W(e, 'transitionDuration'),
    o = W(e, 'transitionDelay'),
    r = $(
      e,
      n => {
        n.target === e && (r(), t(n));
      },
      n + o,
    );
}
var I = function (e) {
  return e && 'function' != typeof e
    ? function (t) {
        e.current = t;
      }
    : e;
};
function _(e, t) {
  return s.useMemo(
    function () {
      return (function (e, t) {
        var n = I(e),
          o = I(t);
        return function (e) {
          n && n(e), o && o(e);
        };
      })(e, t);
    },
    [e, t],
  );
}
const V = o.forwardRef(
  (
    {
      onEnter: e,
      onEntering: t,
      onEntered: n,
      onExit: a,
      onExiting: l,
      onExited: c,
      addEndListener: u,
      children: d,
      childRef: f,
      ...p
    },
    m,
  ) => {
    const h = s.useRef(null),
      E = _(h, f),
      g = e => {
        var t;
        E((t = e) && 'setState' in t ? r.findDOMNode(t) : null != t ? t : null);
      },
      v = e => t => {
        e && h.current && e(h.current, t);
      },
      b = s.useCallback(v(e), [e]),
      x = s.useCallback(v(t), [t]),
      y = s.useCallback(v(n), [n]),
      C = s.useCallback(v(a), [a]),
      w = s.useCallback(v(l), [l]),
      k = s.useCallback(v(c), [c]),
      N = s.useCallback(v(u), [u]);
    return i(T, {
      ref: m,
      ...p,
      onEnter: b,
      onEntered: y,
      onEntering: x,
      onExit: C,
      onExited: k,
      onExiting: w,
      addEndListener: N,
      nodeRef: h,
      children:
        'function' == typeof d
          ? (e, t) => d(e, { ...t, ref: g })
          : o.cloneElement(d, { ref: g }),
    });
  },
);
function U(e) {
  var t = (function (e) {
    var t = s.useRef(e);
    return (
      s.useEffect(
        function () {
          t.current = e;
        },
        [e],
      ),
      t
    );
  })(e);
  return s.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function K() {
  return s.useState(null);
}
function z() {
  var e = s.useRef(!0),
    t = s.useRef(function () {
      return e.current;
    });
  return (
    s.useEffect(function () {
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
function X(e) {
  var t = s.useRef(null);
  return (
    s.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var q =
  'undefined' != typeof global &&
  global.navigator &&
  'ReactNative' === global.navigator.product;
const G = 'undefined' != typeof document || q ? s.useLayoutEffect : s.useEffect,
  Y = { [N]: 'show', [R]: 'show' },
  Z = s.forwardRef(
    ({ className: t, children: n, transitionClasses: o = {}, ...r }, a) => {
      const l = s.useCallback(
        (e, t) => {
          !(function (e) {
            e.offsetHeight;
          })(e),
            null == r.onEnter || r.onEnter(e, t);
        },
        [r],
      );
      return i(V, {
        ref: a,
        addEndListener: H,
        ...r,
        onEnter: l,
        childRef: n.ref,
        children: (r, i) =>
          s.cloneElement(n, {
            ...i,
            className: e('fade', t, n.props.className, Y[r], o[r]),
          }),
      });
    },
  );
(Z.defaultProps = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
}),
  (Z.displayName = 'Fade');
const J = Z,
  Q = { 'aria-label': f.string, onClick: f.func, variant: f.oneOf(['white']) },
  ee = s.forwardRef(({ className: t, variant: n, ...o }, r) =>
    i('button', {
      ref: r,
      type: 'button',
      className: e('btn-close', n && `btn-close-${n}`, t),
      ...o,
    }),
  );
(ee.displayName = 'CloseButton'),
  (ee.propTypes = Q),
  (ee.defaultProps = { 'aria-label': 'Close' });
const te = ee;
function ne(e) {
  var t,
    n,
    o = ((t = e), ((n = s.useRef(t)).current = t), n);
  s.useEffect(function () {
    return function () {
      return o.current();
    };
  }, []);
}
var oe = Function.prototype.bind.call(Function.prototype.call, [].slice);
function re(e, t) {
  return oe(e.querySelectorAll(t));
}
function se(e, t) {
  return e.contains
    ? e.contains(t)
    : e.compareDocumentPosition
    ? e === t || !!(16 & e.compareDocumentPosition(t))
    : void 0;
}
const ie = 'data-rr-ui-';
function ae(e) {
  return `${ie}${e}`;
}
const le = s.createContext(L ? window : void 0);
function ce() {
  return s.useContext(le);
}
var ue;
function de(e) {
  if (((!ue && 0 !== ue) || e) && L) {
    var t = document.createElement('div');
    (t.style.position = 'absolute'),
      (t.style.top = '-9999px'),
      (t.style.width = '50px'),
      (t.style.height = '50px'),
      (t.style.overflow = 'scroll'),
      document.body.appendChild(t),
      (ue = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return ue;
}
function fe(e) {
  void 0 === e && (e = m());
  try {
    var t = e.activeElement;
    return t && t.nodeName ? t : null;
  } catch (Ke) {
    return e.body;
  }
}
le.Provider;
const pe = ae('modal-open');
const me = class {
    constructor({
      ownerDocument: e,
      handleContainerOverflow: t = !0,
      isRTL: n = !1,
    } = {}) {
      (this.handleContainerOverflow = t),
        (this.isRTL = n),
        (this.modals = []),
        (this.ownerDocument = e);
    }
    getScrollbarWidth() {
      return (function (e = document) {
        const t = e.defaultView;
        return Math.abs(t.innerWidth - e.documentElement.clientWidth);
      })(this.ownerDocument);
    }
    getElement() {
      return (this.ownerDocument || document).body;
    }
    setModalAttributes(e) {}
    removeModalAttributes(e) {}
    setContainerStyle(e) {
      const t = { overflow: 'hidden' },
        n = this.isRTL ? 'paddingLeft' : 'paddingRight',
        o = this.getElement();
      (e.style = { overflow: o.style.overflow, [n]: o.style[n] }),
        e.scrollBarWidth &&
          (t[n] = `${parseInt(x(o, n) || '0', 10) + e.scrollBarWidth}px`),
        o.setAttribute(pe, ''),
        x(o, t);
    }
    reset() {
      [...this.modals].forEach(e => this.remove(e));
    }
    removeContainerStyle(e) {
      const t = this.getElement();
      t.removeAttribute(pe), Object.assign(t.style, e.style);
    }
    add(e) {
      let t = this.modals.indexOf(e);
      return -1 !== t
        ? t
        : ((t = this.modals.length),
          this.modals.push(e),
          this.setModalAttributes(e),
          0 !== t ||
            ((this.state = {
              scrollBarWidth: this.getScrollbarWidth(),
              style: {},
            }),
            this.handleContainerOverflow && this.setContainerStyle(this.state)),
          t);
    }
    remove(e) {
      const t = this.modals.indexOf(e);
      -1 !== t &&
        (this.modals.splice(t, 1),
        !this.modals.length &&
          this.handleContainerOverflow &&
          this.removeContainerStyle(this.state),
        this.removeModalAttributes(e));
    }
    isTopModal(e) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === e;
    }
  },
  he = (e, t) =>
    L
      ? null == e
        ? (t || m()).body
        : ('function' == typeof e && (e = e()),
          e && 'current' in e && (e = e.current),
          e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
      : null;
function Ee({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: o,
  unmountOnExit: r,
}) {
  const i = s.useRef(null),
    a = s.useRef(t),
    l = U(n);
  s.useEffect(() => {
    t ? (a.current = !0) : l(i.current);
  }, [t, l]);
  const c = _(i, e.ref),
    u = s.cloneElement(e, { ref: c });
  return t ? u : r || (!a.current && o) ? null : u;
}
function ge({ children: e, in: t, onExited: n, onEntered: o, transition: r }) {
  const [i, a] = s.useState(!t);
  t && i && a(!1);
  const l = (function ({ in: e, onTransition: t }) {
      const n = s.useRef(null),
        o = s.useRef(!0),
        r = U(t);
      return (
        G(() => {
          if (!n.current) return;
          let t = !1;
          return (
            r({
              in: e,
              element: n.current,
              initial: o.current,
              isStale: () => t,
            }),
            () => {
              t = !0;
            }
          );
        }, [e, r]),
        G(
          () => (
            (o.current = !1),
            () => {
              o.current = !0;
            }
          ),
          [],
        ),
        n
      );
    })({
      in: !!t,
      onTransition: e => {
        Promise.resolve(r(e)).then(
          () => {
            e.isStale() ||
              (e.in
                ? null == o || o(e.element, e.initial)
                : (a(!0), null == n || n(e.element)));
          },
          t => {
            throw (e.in || a(!0), t);
          },
        );
      },
    }),
    c = _(l, e.ref);
  return i && !t ? null : s.cloneElement(e, { ref: c });
}
function ve(e, t, n) {
  return e
    ? i(e, Object.assign({}, n))
    : t
    ? i(ge, Object.assign({}, n, { transition: t }))
    : i(Ee, Object.assign({}, n));
}
const be = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'runTransition',
  'backdropTransition',
  'runBackdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered',
];
let xe;
function ye(e) {
  const t = ce(),
    n =
      e ||
      (function (e) {
        return (
          xe ||
            (xe = new me({ ownerDocument: null == e ? void 0 : e.document })),
          xe
        );
      })(t),
    o = s.useRef({ dialog: null, backdrop: null });
  return Object.assign(o.current, {
    add: () => n.add(o.current),
    remove: () => n.remove(o.current),
    isTopModal: () => n.isTopModal(o.current),
    setDialogRef: s.useCallback(e => {
      o.current.dialog = e;
    }, []),
    setBackdropRef: s.useCallback(e => {
      o.current.backdrop = e;
    }, []),
  });
}
const Ce = s.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: o = 'dialog',
      className: c,
      style: u,
      children: d,
      backdrop: f = !0,
      keyboard: p = !0,
      onBackdropClick: m,
      onEscapeKeyDown: h,
      transition: E,
      runTransition: g,
      backdropTransition: v,
      runBackdropTransition: b,
      autoFocus: x = !0,
      enforceFocus: y = !0,
      restoreFocus: C = !0,
      restoreFocusOptions: w,
      renderDialog: k,
      renderBackdrop: N = e => i('div', Object.assign({}, e)),
      manager: R,
      container: O,
      onShow: T,
      onHide: S = () => {},
      onExit: D,
      onExited: M,
      onExiting: F,
      onEnter: P,
      onEntering: j,
      onEntered: A,
    } = e,
    $ = (function (e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        s = Object.keys(e);
      for (o = 0; o < s.length; o++)
        (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, be);
  const W = (function (e, t) {
      const n = ce(),
        [o, r] = s.useState(() => he(e, null == n ? void 0 : n.document));
      if (!o) {
        const t = he(e);
        t && r(t);
      }
      return (
        s.useEffect(() => {
          t && o && t(o);
        }, [t, o]),
        s.useEffect(() => {
          const t = he(e);
          t !== o && r(t);
        }, [e, o]),
        o
      );
    })(O),
    H = ye(R),
    I = z(),
    _ = X(n),
    [V, K] = s.useState(!n),
    q = s.useRef(null);
  s.useImperativeHandle(t, () => H, [H]),
    L && !_ && n && (q.current = fe()),
    n && V && K(!1);
  const G = U(() => {
      if (
        (H.add(),
        (te.current = B(document, 'keydown', Q)),
        (ee.current = B(document, 'focus', () => setTimeout(Z), !0)),
        T && T(),
        x)
      ) {
        const e = fe(document);
        H.dialog &&
          e &&
          !se(H.dialog, e) &&
          ((q.current = e), H.dialog.focus());
      }
    }),
    Y = U(() => {
      var e;
      (H.remove(),
      null == te.current || te.current(),
      null == ee.current || ee.current(),
      C) &&
        (null == (e = q.current) || null == e.focus || e.focus(w),
        (q.current = null));
    });
  s.useEffect(() => {
    n && W && G();
  }, [n, W, G]),
    s.useEffect(() => {
      V && Y();
    }, [V, Y]),
    ne(() => {
      Y();
    });
  const Z = U(() => {
      if (!y || !I() || !H.isTopModal()) return;
      const e = fe();
      H.dialog && e && !se(H.dialog, e) && H.dialog.focus();
    }),
    J = U(e => {
      e.target === e.currentTarget && (null == m || m(e), !0 === f && S());
    }),
    Q = U(e => {
      p &&
        27 === e.keyCode &&
        H.isTopModal() &&
        (null == h || h(e), e.defaultPrevented || S());
    }),
    ee = s.useRef(),
    te = s.useRef();
  if (!W) return null;
  const oe = Object.assign(
    { role: o, ref: H.setDialogRef, 'aria-modal': 'dialog' === o || void 0 },
    $,
    { style: u, className: c, tabIndex: -1 },
  );
  let re = k
    ? k(oe)
    : i(
        'div',
        Object.assign({}, oe, {
          children: s.cloneElement(d, { role: 'document' }),
        }),
      );
  re = ve(E, g, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: D,
    onExiting: F,
    onExited: (...e) => {
      K(!0), null == M || M(...e);
    },
    onEnter: P,
    onEntering: j,
    onEntered: A,
    children: re,
  });
  let ie = null;
  return (
    f &&
      ((ie = N({ ref: H.setBackdropRef, onClick: J })),
      (ie = ve(v, b, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: ie,
      }))),
    i(a, { children: r.createPortal(l(a, { children: [ie, re] }), W) })
  );
});
Ce.displayName = 'Modal';
const we = Object.assign(Ce, { Manager: me });
function ke(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
const Ne = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  Re = '.sticky-top',
  Oe = '.navbar-toggler';
class Te extends me {
  adjustAndStore(e, t, n) {
    const o = t.style[e];
    (t.dataset[e] = o), x(t, { [e]: `${parseFloat(x(t, e)) + n}px` });
  }
  restore(e, t) {
    const n = t.dataset[e];
    void 0 !== n && (delete t.dataset[e], x(t, { [e]: n }));
  }
  setContainerStyle(e) {
    super.setContainerStyle(e);
    const t = this.getElement();
    var n, o;
    if (
      ((o = 'modal-open'),
      (n = t).classList
        ? n.classList.add(o)
        : (function (e, t) {
            return e.classList
              ? !!t && e.classList.contains(t)
              : -1 !==
                  (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                    ' ' + t + ' ',
                  );
          })(n, o) ||
          ('string' == typeof n.className
            ? (n.className = n.className + ' ' + o)
            : n.setAttribute(
                'class',
                ((n.className && n.className.baseVal) || '') + ' ' + o,
              )),
      !e.scrollBarWidth)
    )
      return;
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      s = this.isRTL ? 'marginLeft' : 'marginRight';
    re(t, Ne).forEach(t => this.adjustAndStore(r, t, e.scrollBarWidth)),
      re(t, Re).forEach(t => this.adjustAndStore(s, t, -e.scrollBarWidth)),
      re(t, Oe).forEach(t => this.adjustAndStore(s, t, e.scrollBarWidth));
  }
  removeContainerStyle(e) {
    super.removeContainerStyle(e);
    const t = this.getElement();
    var n, o;
    (o = 'modal-open'),
      (n = t).classList
        ? n.classList.remove(o)
        : 'string' == typeof n.className
        ? (n.className = ke(n.className, o))
        : n.setAttribute(
            'class',
            ke((n.className && n.className.baseVal) || '', o),
          );
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      s = this.isRTL ? 'marginLeft' : 'marginRight';
    re(t, Ne).forEach(e => this.restore(r, e)),
      re(t, Re).forEach(e => this.restore(s, e)),
      re(t, Oe).forEach(e => this.restore(s, e));
  }
}
let Se;
const Le = d('modal-body'),
  De = s.createContext({ onHide() {} }),
  Me = s.forwardRef(
    (
      {
        bsPrefix: n,
        className: o,
        contentClassName: r,
        centered: s,
        size: a,
        fullscreen: l,
        children: c,
        scrollable: u,
        ...d
      },
      f,
    ) => {
      const p = `${(n = t(n, 'modal'))}-dialog`;
      return i('div', {
        ...d,
        ref: f,
        className: e(
          p,
          o,
          a && `${n}-${a}`,
          s && `${p}-centered`,
          u && `${p}-scrollable`,
          l &&
            ('string' == typeof l ? `${n}-fullscreen-${l}` : `${n}-fullscreen`),
        ),
        children: i('div', { className: e(`${n}-content`, r), children: c }),
      });
    },
  );
Me.displayName = 'ModalDialog';
const Fe = Me,
  Pe = d('modal-footer'),
  je = s.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: n,
        onHide: o,
        children: r,
        ...a
      },
      c,
    ) => {
      const u = s.useContext(De),
        d = U(() => {
          null == u || u.onHide(), null == o || o();
        });
      return l('div', {
        ref: c,
        ...a,
        children: [r, n && i(te, { 'aria-label': e, variant: t, onClick: d })],
      });
    },
  );
je.defaultProps = { closeLabel: 'Close', closeButton: !1 };
const Be = je,
  Ae = s.forwardRef(
    ({ bsPrefix: n, className: o, ...r }, s) => (
      (n = t(n, 'modal-header')), i(Be, { ref: s, ...r, className: e(o, n) })
    ),
  );
(Ae.displayName = 'ModalHeader'),
  (Ae.defaultProps = { closeLabel: 'Close', closeButton: !1 });
const $e = Ae,
  We = d('modal-title', { Component: p('h4') }),
  He = {
    show: !1,
    backdrop: !0,
    keyboard: !0,
    autoFocus: !0,
    enforceFocus: !0,
    restoreFocus: !0,
    animation: !0,
    dialogAs: Fe,
  };
function Ie(e) {
  return i(J, { ...e, timeout: null });
}
function _e(e) {
  return i(J, { ...e, timeout: null });
}
const Ve = s.forwardRef(
  (
    {
      bsPrefix: o,
      className: r,
      style: a,
      dialogClassName: l,
      contentClassName: c,
      children: u,
      dialogAs: d,
      'aria-labelledby': f,
      'aria-describedby': p,
      'aria-label': h,
      show: E,
      animation: g,
      backdrop: v,
      keyboard: b,
      onEscapeKeyDown: x,
      onShow: y,
      onHide: C,
      container: w,
      autoFocus: k,
      enforceFocus: N,
      restoreFocus: R,
      restoreFocusOptions: O,
      onEntered: T,
      onExit: S,
      onExiting: D,
      onEnter: M,
      onEntering: F,
      onExited: B,
      backdropClassName: A,
      manager: W,
      ...H
    },
    I,
  ) => {
    const [V, z] = s.useState({}),
      [X, q] = s.useState(!1),
      G = s.useRef(!1),
      Y = s.useRef(!1),
      Z = s.useRef(null),
      [J, Q] = K(),
      ee = _(I, Q),
      te = U(C),
      oe = n();
    o = t(o, 'modal');
    const re = s.useMemo(() => ({ onHide: te }), [te]);
    function se() {
      return (
        W ||
        (function (e) {
          return Se || (Se = new Te(e)), Se;
        })({ isRTL: oe })
      );
    }
    function ie(e) {
      if (!L) return;
      const t = se().getScrollbarWidth() > 0,
        n = e.scrollHeight > m(e).documentElement.clientHeight;
      z({
        paddingRight: t && !n ? de() : void 0,
        paddingLeft: !t && n ? de() : void 0,
      });
    }
    const ae = U(() => {
      J && ie(J.dialog);
    });
    ne(() => {
      j(window, 'resize', ae), null == Z.current || Z.current();
    });
    const le = () => {
        G.current = !0;
      },
      ce = e => {
        G.current && J && e.target === J.dialog && (Y.current = !0),
          (G.current = !1);
      },
      ue = () => {
        q(!0),
          (Z.current = $(J.dialog, () => {
            q(!1);
          }));
      },
      fe = e => {
        'static' !== v
          ? Y.current || e.target !== e.currentTarget
            ? (Y.current = !1)
            : null == C || C()
          : (e => {
              e.target === e.currentTarget && ue();
            })(e);
      },
      pe = s.useCallback(
        t => i('div', { ...t, className: e(`${o}-backdrop`, A, !g && 'show') }),
        [g, A, o],
      ),
      me = { ...a, ...V };
    me.display = 'block';
    return i(De.Provider, {
      value: re,
      children: i(we, {
        show: E,
        ref: ee,
        backdrop: v,
        container: w,
        keyboard: !0,
        autoFocus: k,
        enforceFocus: N,
        restoreFocus: R,
        restoreFocusOptions: O,
        onEscapeKeyDown: e => {
          b ? null == x || x(e) : (e.preventDefault(), 'static' === v && ue());
        },
        onShow: y,
        onHide: C,
        onEnter: (e, t) => {
          e && ie(e), null == M || M(e, t);
        },
        onEntering: (e, t) => {
          null == F || F(e, t), P(window, 'resize', ae);
        },
        onEntered: T,
        onExit: e => {
          null == Z.current || Z.current(), null == S || S(e);
        },
        onExiting: D,
        onExited: e => {
          e && (e.style.display = ''),
            null == B || B(e),
            j(window, 'resize', ae);
        },
        manager: se(),
        transition: g ? Ie : void 0,
        backdropTransition: g ? _e : void 0,
        renderBackdrop: pe,
        renderDialog: t =>
          i('div', {
            role: 'dialog',
            ...t,
            style: me,
            className: e(r, o, X && `${o}-static`, !g && 'show'),
            onClick: v ? fe : void 0,
            onMouseUp: ce,
            'aria-label': h,
            'aria-labelledby': f,
            'aria-describedby': p,
            children: i(d, {
              ...H,
              onMouseDown: le,
              className: l,
              contentClassName: c,
              children: u,
            }),
          }),
      }),
    });
  },
);
(Ve.displayName = 'Modal'), (Ve.defaultProps = He);
const Ue = Object.assign(Ve, {
  Body: Le,
  Header: $e,
  Title: We,
  Footer: Pe,
  Dialog: Fe,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
export {
  Ue as M,
  z as a,
  K as b,
  se as c,
  ae as d,
  ce as e,
  X as f,
  P as g,
  _ as h,
  G as i,
  B as l,
  m as o,
  re as q,
  de as s,
  U as u,
};