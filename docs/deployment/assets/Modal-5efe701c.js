import { c as e, u as t, e as n } from './ThemeProvider-092c2682.js';
import {
  o,
  l as r,
  u as s,
  c as i,
  d as a,
  a as l,
  b as c,
  e as u,
  f as d,
  g as f,
  h as p,
  q as h,
  i as m,
  r as E,
  j as g,
} from './useWindow-9130f6b7.js';
import {
  am as b,
  bh as x,
  r as v,
  c as y,
  F as C,
  j as k,
} from './index-24a58ae8.js';
import { _ as N } from './objectWithoutPropertiesLoose-87a5ea27.js';
import { _ as w } from './setPrototypeOf-b9a4b5f8.js';
import { c as R } from './createWithBsPrefix-6a3b0d2e.js';
import { p as O } from './index-06bcf729.js';
import { d as T } from './divWithClassName-cc198704.js';
function S(e, t) {
  return (function (e) {
    var t = o(e);
    return (t && t.defaultView) || window;
  })(e).getComputedStyle(e, t);
}
var D = /([A-Z])/g;
var L = /^ms-/;
function M(e) {
  return (function (e) {
    return e.replace(D, '-$1').toLowerCase();
  })(e).replace(L, '-ms-');
}
var j =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function F(e, t) {
  var n = '',
    o = '';
  if ('string' == typeof t)
    return e.style.getPropertyValue(M(t)) || S(e).getPropertyValue(M(t));
  Object.keys(t).forEach(function (r) {
    var s = t[r];
    s || 0 === s
      ? !(function (e) {
          return !(!e || !j.test(e));
        })(r)
        ? (n += M(r) + ': ' + s + ';')
        : (o += r + '(' + s + ') ')
      : e.style.removeProperty(M(r));
  }),
    o && (n += 'transform: ' + o + ';'),
    (e.style.cssText += ';' + n);
}
const B = !1,
  P = b.createContext(null);
var A = 'unmounted',
  W = 'exited',
  $ = 'entering',
  H = 'entered',
  I = 'exiting',
  V = (function (e) {
    var t, n;
    function o(t, n) {
      var o;
      o = e.call(this, t, n) || this;
      var r,
        s = n && !n.isMounting ? t.enter : t.appear;
      return (
        (o.appearStatus = null),
        t.in
          ? s
            ? ((r = W), (o.appearStatus = $))
            : (r = H)
          : (r = t.unmountOnExit || t.mountOnEnter ? A : W),
        (o.state = { status: r }),
        (o.nextCallback = null),
        o
      );
    }
    (n = e),
      ((t = o).prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      w(t, n),
      (o.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === A ? { status: W } : null;
      });
    var r = o.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== $ && n !== H && (t = $)
            : (n !== $ && n !== H) || (t = I);
        }
        this.updateStatus(!1, t);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
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
      (r.updateStatus = function (e, t) {
        if ((void 0 === e && (e = !1), null !== t))
          if ((this.cancelNextCallback(), t === $)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : x.findDOMNode(this);
              n &&
                (function (e) {
                  e.scrollTop;
                })(n);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === W &&
            this.setState({ status: A });
      }),
      (r.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          o = this.context ? this.context.isMounting : e,
          r = this.props.nodeRef ? [o] : [x.findDOMNode(this), o],
          s = r[0],
          i = r[1],
          a = this.getTimeouts(),
          l = o ? a.appear : a.enter;
        (!e && !n) || B
          ? this.safeSetState({ status: H }, function () {
              t.props.onEntered(s);
            })
          : (this.props.onEnter(s, i),
            this.safeSetState({ status: $ }, function () {
              t.props.onEntering(s, i),
                t.onTransitionEnd(l, function () {
                  t.safeSetState({ status: H }, function () {
                    t.props.onEntered(s, i);
                  });
                });
            }));
      }),
      (r.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          o = this.props.nodeRef ? void 0 : x.findDOMNode(this);
        t && !B
          ? (this.props.onExit(o),
            this.safeSetState({ status: I }, function () {
              e.props.onExiting(o),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: W }, function () {
                    e.props.onExited(o);
                  });
                });
            }))
          : this.safeSetState({ status: W }, function () {
              e.props.onExited(o);
            });
      }),
      (r.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (e, t) {
        (t = this.setNextCallback(t)), this.setState(e, t);
      }),
      (r.setNextCallback = function (e) {
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
      (r.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : x.findDOMNode(this),
          o = null == e && !this.props.addEndListener;
        if (n && !o) {
          if (this.props.addEndListener) {
            var r = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              s = r[0],
              i = r[1];
            this.props.addEndListener(s, i);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }),
      (r.render = function () {
        var e = this.state.status;
        if (e === A) return null;
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
        var o = N(t, [
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
        return b.createElement(
          P.Provider,
          { value: null },
          'function' == typeof n
            ? n(e, o)
            : b.cloneElement(b.Children.only(n), o),
        );
      }),
      o
    );
  })(b.Component);
function U() {}
function z(e, t, n) {
  void 0 === n && (n = 5);
  var o = !1,
    s = setTimeout(function () {
      o ||
        (function (e, t, n, o) {
          if ((void 0 === n && (n = !1), void 0 === o && (o = !0), e)) {
            var r = document.createEvent('HTMLEvents');
            r.initEvent(t, n, o), e.dispatchEvent(r);
          }
        })(e, 'transitionend', !0);
    }, t + n),
    i = r(
      e,
      'transitionend',
      function () {
        o = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(s), i();
  };
}
function K(e, t, n, o) {
  var s, i;
  null == n &&
    ((s = F(e, 'transitionDuration') || ''),
    (i = -1 === s.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(s) * i || 0));
  var a = z(e, n, o),
    l = r(e, 'transitionend', t);
  return function () {
    a(), l();
  };
}
function _(e, t) {
  const n = F(e, t) || '',
    o = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * o;
}
function X(e, t) {
  const n = _(e, 'transitionDuration'),
    o = _(e, 'transitionDelay'),
    r = K(
      e,
      n => {
        n.target === e && (r(), t(n));
      },
      n + o,
    );
}
(V.contextType = P),
  (V.propTypes = {}),
  (V.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: U,
    onEntering: U,
    onEntered: U,
    onExit: U,
    onExiting: U,
    onExited: U,
  }),
  (V.UNMOUNTED = A),
  (V.EXITED = W),
  (V.ENTERING = $),
  (V.ENTERED = H),
  (V.EXITING = I);
const G = b.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: o,
        onExiting: r,
        onExited: i,
        addEndListener: a,
        children: l,
        childRef: c,
        ...u
      },
      d,
    ) => {
      const f = v.useRef(null),
        p = s(f, c),
        h = e => {
          var t;
          p(
            (t = e) && 'setState' in t
              ? x.findDOMNode(t)
              : null != t
              ? t
              : null,
          );
        },
        m = e => t => {
          e && f.current && e(f.current, t);
        },
        E = v.useCallback(m(e), [e]),
        g = v.useCallback(m(t), [t]),
        C = v.useCallback(m(n), [n]),
        k = v.useCallback(m(o), [o]),
        N = v.useCallback(m(r), [r]),
        w = v.useCallback(m(i), [i]),
        R = v.useCallback(m(a), [a]);
      return y(V, {
        ref: d,
        ...u,
        onEnter: E,
        onEntered: C,
        onEntering: g,
        onExit: k,
        onExited: w,
        onExiting: N,
        addEndListener: R,
        nodeRef: f,
        children:
          'function' == typeof l
            ? (e, t) => l(e, { ...t, ref: h })
            : b.cloneElement(l, { ref: h }),
      });
    },
  ),
  Y = { [$]: 'show', [H]: 'show' },
  Z = v.forwardRef(
    ({ className: t, children: n, transitionClasses: o = {}, ...r }, s) => {
      const i = v.useCallback(
        (e, t) => {
          !(function (e) {
            e.offsetHeight;
          })(e),
            null == r.onEnter || r.onEnter(e, t);
        },
        [r],
      );
      return y(G, {
        ref: s,
        addEndListener: X,
        ...r,
        onEnter: i,
        childRef: n.ref,
        children: (r, s) =>
          v.cloneElement(n, {
            ...s,
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
const q = Z,
  J = { 'aria-label': O.string, onClick: O.func, variant: O.oneOf(['white']) },
  Q = v.forwardRef(({ className: t, variant: n, ...o }, r) =>
    y('button', {
      ref: r,
      type: 'button',
      className: e('btn-close', n && `btn-close-${n}`, t),
      ...o,
    }),
  );
(Q.displayName = 'CloseButton'),
  (Q.propTypes = J),
  (Q.defaultProps = { 'aria-label': 'Close' });
const ee = Q;
function te(e) {
  var t,
    n,
    o = ((t = e), ((n = v.useRef(t)).current = t), n);
  v.useEffect(function () {
    return function () {
      return o.current();
    };
  }, []);
}
var ne;
function oe(e) {
  if (((!ne && 0 !== ne) || e) && i) {
    var t = document.createElement('div');
    (t.style.position = 'absolute'),
      (t.style.top = '-9999px'),
      (t.style.width = '50px'),
      (t.style.height = '50px'),
      (t.style.overflow = 'scroll'),
      document.body.appendChild(t),
      (ne = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return ne;
}
function re(e) {
  void 0 === e && (e = o());
  try {
    var t = e.activeElement;
    return t && t.nodeName ? t : null;
  } catch (n) {
    return e.body;
  }
}
const se = a('modal-open');
const ie = class {
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
          (t[n] = `${parseInt(F(o, n) || '0', 10) + e.scrollBarWidth}px`),
        o.setAttribute(se, ''),
        F(o, t);
    }
    reset() {
      [...this.modals].forEach(e => this.remove(e));
    }
    removeContainerStyle(e) {
      const t = this.getElement();
      t.removeAttribute(se), Object.assign(t.style, e.style);
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
  ae = (e, t) =>
    i
      ? null == e
        ? (t || o()).body
        : ('function' == typeof e && (e = e()),
          e && 'current' in e && (e = e.current),
          e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
      : null;
function le({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: o,
  unmountOnExit: r,
}) {
  const i = v.useRef(null),
    a = v.useRef(t),
    l = c(n);
  v.useEffect(() => {
    t ? (a.current = !0) : l(i.current);
  }, [t, l]);
  const u = s(i, e.ref),
    d = v.cloneElement(e, { ref: u });
  return t ? d : r || (!a.current && o) ? null : d;
}
function ce({ children: e, in: t, onExited: n, onEntered: o, transition: r }) {
  const [i, a] = v.useState(!t);
  t && i && a(!1);
  const l = (function ({ in: e, onTransition: t }) {
      const n = v.useRef(null),
        o = v.useRef(!0),
        r = c(t);
      return (
        u(() => {
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
        u(
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
    d = s(l, e.ref);
  return i && !t ? null : v.cloneElement(e, { ref: d });
}
function ue(e, t, n) {
  return e
    ? y(e, Object.assign({}, n))
    : t
    ? y(ce, Object.assign({}, n, { transition: t }))
    : y(le, Object.assign({}, n));
}
const de = [
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
let fe;
function pe(e) {
  const t = l(),
    n =
      e ||
      (function (e) {
        return (
          fe ||
            (fe = new ie({ ownerDocument: null == e ? void 0 : e.document })),
          fe
        );
      })(t),
    o = v.useRef({ dialog: null, backdrop: null });
  return Object.assign(o.current, {
    add: () => n.add(o.current),
    remove: () => n.remove(o.current),
    isTopModal: () => n.isTopModal(o.current),
    setDialogRef: v.useCallback(e => {
      o.current.dialog = e;
    }, []),
    setBackdropRef: v.useCallback(e => {
      o.current.backdrop = e;
    }, []),
  });
}
const he = v.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: o = 'dialog',
      className: s,
      style: a,
      children: u,
      backdrop: h = !0,
      keyboard: m = !0,
      onBackdropClick: E,
      onEscapeKeyDown: g,
      transition: b,
      runTransition: N,
      backdropTransition: w,
      runBackdropTransition: R,
      autoFocus: O = !0,
      enforceFocus: T = !0,
      restoreFocus: S = !0,
      restoreFocusOptions: D,
      renderDialog: L,
      renderBackdrop: M = e => y('div', Object.assign({}, e)),
      manager: j,
      container: F,
      onShow: B,
      onHide: P = () => {},
      onExit: A,
      onExited: W,
      onExiting: $,
      onEnter: H,
      onEntering: I,
      onEntered: V,
    } = e,
    U = (function (e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        s = Object.keys(e);
      for (o = 0; o < s.length; o++)
        (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, de);
  const z = (function (e, t) {
      const n = l(),
        [o, r] = v.useState(() => ae(e, null == n ? void 0 : n.document));
      if (!o) {
        const t = ae(e);
        t && r(t);
      }
      return (
        v.useEffect(() => {
          t && o && t(o);
        }, [t, o]),
        v.useEffect(() => {
          const t = ae(e);
          t !== o && r(t);
        }, [e, o]),
        o
      );
    })(F),
    K = pe(j),
    _ = d(),
    X = f(n),
    [G, Y] = v.useState(!n),
    Z = v.useRef(null);
  v.useImperativeHandle(t, () => K, [K]),
    i && !X && n && (Z.current = re()),
    n && G && Y(!1);
  const q = c(() => {
      if (
        (K.add(),
        (se.current = r(document, 'keydown', ne)),
        (oe.current = r(document, 'focus', () => setTimeout(Q), !0)),
        B && B(),
        O)
      ) {
        const e = re(document);
        K.dialog && e && !p(K.dialog, e) && ((Z.current = e), K.dialog.focus());
      }
    }),
    J = c(() => {
      var e;
      (K.remove(),
      null == se.current || se.current(),
      null == oe.current || oe.current(),
      S) &&
        (null == (e = Z.current) || null == e.focus || e.focus(D),
        (Z.current = null));
    });
  v.useEffect(() => {
    n && z && q();
  }, [n, z, q]),
    v.useEffect(() => {
      G && J();
    }, [G, J]),
    te(() => {
      J();
    });
  const Q = c(() => {
      if (!T || !_() || !K.isTopModal()) return;
      const e = re();
      K.dialog && e && !p(K.dialog, e) && K.dialog.focus();
    }),
    ee = c(e => {
      e.target === e.currentTarget && (null == E || E(e), !0 === h && P());
    }),
    ne = c(e => {
      m &&
        27 === e.keyCode &&
        K.isTopModal() &&
        (null == g || g(e), e.defaultPrevented || P());
    }),
    oe = v.useRef(),
    se = v.useRef();
  if (!z) return null;
  const ie = Object.assign(
    { role: o, ref: K.setDialogRef, 'aria-modal': 'dialog' === o || void 0 },
    U,
    { style: a, className: s, tabIndex: -1 },
  );
  let le = L
    ? L(ie)
    : y(
        'div',
        Object.assign({}, ie, {
          children: v.cloneElement(u, { role: 'document' }),
        }),
      );
  le = ue(b, N, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: A,
    onExiting: $,
    onExited: (...e) => {
      Y(!0), null == W || W(...e);
    },
    onEnter: H,
    onEntering: I,
    onEntered: V,
    children: le,
  });
  let ce = null;
  return (
    h &&
      ((ce = M({ ref: K.setBackdropRef, onClick: ee })),
      (ce = ue(w, R, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: ce,
      }))),
    y(C, { children: x.createPortal(k(C, { children: [ce, le] }), z) })
  );
});
he.displayName = 'Modal';
const me = Object.assign(he, { Manager: ie });
function Ee(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
const ge = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  be = '.sticky-top',
  xe = '.navbar-toggler';
class ve extends ie {
  adjustAndStore(e, t, n) {
    const o = t.style[e];
    (t.dataset[e] = o), F(t, { [e]: `${parseFloat(F(t, e)) + n}px` });
  }
  restore(e, t) {
    const n = t.dataset[e];
    void 0 !== n && (delete t.dataset[e], F(t, { [e]: n }));
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
    h(t, ge).forEach(t => this.adjustAndStore(r, t, e.scrollBarWidth)),
      h(t, be).forEach(t => this.adjustAndStore(s, t, -e.scrollBarWidth)),
      h(t, xe).forEach(t => this.adjustAndStore(s, t, e.scrollBarWidth));
  }
  removeContainerStyle(e) {
    super.removeContainerStyle(e);
    const t = this.getElement();
    var n, o;
    (o = 'modal-open'),
      (n = t).classList
        ? n.classList.remove(o)
        : 'string' == typeof n.className
        ? (n.className = Ee(n.className, o))
        : n.setAttribute(
            'class',
            Ee((n.className && n.className.baseVal) || '', o),
          );
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      s = this.isRTL ? 'marginLeft' : 'marginRight';
    h(t, ge).forEach(e => this.restore(r, e)),
      h(t, be).forEach(e => this.restore(s, e)),
      h(t, xe).forEach(e => this.restore(s, e));
  }
}
let ye;
const Ce = R('modal-body'),
  ke = v.createContext({ onHide() {} }),
  Ne = v.forwardRef(
    (
      {
        bsPrefix: n,
        className: o,
        contentClassName: r,
        centered: s,
        size: i,
        fullscreen: a,
        children: l,
        scrollable: c,
        ...u
      },
      d,
    ) => {
      const f = `${(n = t(n, 'modal'))}-dialog`;
      return y('div', {
        ...u,
        ref: d,
        className: e(
          f,
          o,
          i && `${n}-${i}`,
          s && `${f}-centered`,
          c && `${f}-scrollable`,
          a &&
            ('string' == typeof a ? `${n}-fullscreen-${a}` : `${n}-fullscreen`),
        ),
        children: y('div', { className: e(`${n}-content`, r), children: l }),
      });
    },
  );
Ne.displayName = 'ModalDialog';
const we = Ne,
  Re = R('modal-footer'),
  Oe = v.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: n,
        onHide: o,
        children: r,
        ...s
      },
      i,
    ) => {
      const a = v.useContext(ke),
        l = c(() => {
          null == a || a.onHide(), null == o || o();
        });
      return k('div', {
        ref: i,
        ...s,
        children: [r, n && y(ee, { 'aria-label': e, variant: t, onClick: l })],
      });
    },
  );
Oe.defaultProps = { closeLabel: 'Close', closeButton: !1 };
const Te = Oe,
  Se = v.forwardRef(
    ({ bsPrefix: n, className: o, ...r }, s) => (
      (n = t(n, 'modal-header')), y(Te, { ref: s, ...r, className: e(o, n) })
    ),
  );
(Se.displayName = 'ModalHeader'),
  (Se.defaultProps = { closeLabel: 'Close', closeButton: !1 });
const De = Se,
  Le = R('modal-title', { Component: T('h4') }),
  Me = {
    show: !1,
    backdrop: !0,
    keyboard: !0,
    autoFocus: !0,
    enforceFocus: !0,
    restoreFocus: !0,
    animation: !0,
    dialogAs: we,
  };
function je(e) {
  return y(q, { ...e, timeout: null });
}
function Fe(e) {
  return y(q, { ...e, timeout: null });
}
const Be = v.forwardRef(
  (
    {
      bsPrefix: r,
      className: a,
      style: l,
      dialogClassName: u,
      contentClassName: d,
      children: f,
      dialogAs: p,
      'aria-labelledby': h,
      'aria-describedby': b,
      'aria-label': x,
      show: C,
      animation: k,
      backdrop: N,
      keyboard: w,
      onEscapeKeyDown: R,
      onShow: O,
      onHide: T,
      container: S,
      autoFocus: D,
      enforceFocus: L,
      restoreFocus: M,
      restoreFocusOptions: j,
      onEntered: F,
      onExit: B,
      onExiting: P,
      onEnter: A,
      onEntering: W,
      onExited: $,
      backdropClassName: H,
      manager: I,
      ...V
    },
    U,
  ) => {
    const [z, _] = v.useState({}),
      [X, G] = v.useState(!1),
      Y = v.useRef(!1),
      Z = v.useRef(!1),
      q = v.useRef(null),
      [J, Q] = m(),
      ee = s(U, Q),
      ne = c(T),
      re = n();
    r = t(r, 'modal');
    const se = v.useMemo(() => ({ onHide: ne }), [ne]);
    function ie() {
      return I || ((e = { isRTL: re }), ye || (ye = new ve(e)), ye);
      var e;
    }
    function ae(e) {
      if (!i) return;
      const t = ie().getScrollbarWidth() > 0,
        n = e.scrollHeight > o(e).documentElement.clientHeight;
      _({
        paddingRight: t && !n ? oe() : void 0,
        paddingLeft: !t && n ? oe() : void 0,
      });
    }
    const le = c(() => {
      J && ae(J.dialog);
    });
    te(() => {
      E(window, 'resize', le), null == q.current || q.current();
    });
    const ce = () => {
        Y.current = !0;
      },
      ue = e => {
        Y.current && J && e.target === J.dialog && (Z.current = !0),
          (Y.current = !1);
      },
      de = () => {
        G(!0),
          (q.current = K(J.dialog, () => {
            G(!1);
          }));
      },
      fe = e => {
        'static' !== N
          ? Z.current || e.target !== e.currentTarget
            ? (Z.current = !1)
            : null == T || T()
          : (e => {
              e.target === e.currentTarget && de();
            })(e);
      },
      pe = v.useCallback(
        t => y('div', { ...t, className: e(`${r}-backdrop`, H, !k && 'show') }),
        [k, H, r],
      ),
      he = { ...l, ...z };
    he.display = 'block';
    return y(ke.Provider, {
      value: se,
      children: y(me, {
        show: C,
        ref: ee,
        backdrop: N,
        container: S,
        keyboard: !0,
        autoFocus: D,
        enforceFocus: L,
        restoreFocus: M,
        restoreFocusOptions: j,
        onEscapeKeyDown: e => {
          w ? null == R || R(e) : (e.preventDefault(), 'static' === N && de());
        },
        onShow: O,
        onHide: T,
        onEnter: (e, t) => {
          e && ae(e), null == A || A(e, t);
        },
        onEntering: (e, t) => {
          null == W || W(e, t), g(window, 'resize', le);
        },
        onEntered: F,
        onExit: e => {
          null == q.current || q.current(), null == B || B(e);
        },
        onExiting: P,
        onExited: e => {
          e && (e.style.display = ''),
            null == $ || $(e),
            E(window, 'resize', le);
        },
        manager: ie(),
        transition: k ? je : void 0,
        backdropTransition: k ? Fe : void 0,
        renderBackdrop: pe,
        renderDialog: t =>
          y('div', {
            role: 'dialog',
            ...t,
            style: he,
            className: e(a, r, X && `${r}-static`, !k && 'show'),
            onClick: N ? fe : void 0,
            onMouseUp: ue,
            'aria-label': x,
            'aria-labelledby': h,
            'aria-describedby': b,
            children: y(p, {
              ...V,
              onMouseDown: ce,
              className: u,
              contentClassName: d,
              children: f,
            }),
          }),
      }),
    });
  },
);
(Be.displayName = 'Modal'), (Be.defaultProps = Me);
const Pe = Object.assign(Be, {
  Body: Ce,
  Header: De,
  Title: Le,
  Footer: Re,
  Dialog: we,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
export { Pe as M, oe as s };
