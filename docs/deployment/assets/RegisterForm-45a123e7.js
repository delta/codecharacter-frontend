import {
  r as e,
  am as t,
  j as r,
  c as n,
  b as a,
  e as o,
  u as c,
  a_ as l,
  a$ as s,
  F as i,
  aQ as u,
  b0 as d,
  b1 as p,
} from './index-3b0785b0.js';
import { F as f, g as m, h } from './index.es-9a30e53f.js';
import { s as y } from './auth.module-7fd06f12.js';
import { R as v } from './index.esm-b98454bb.js';
import { O as g } from './OtherDetails-3f54b891.js';
import { F as C } from './Form-bd0943a7.js';
import './index-06bcf729.js';
import './Avatar-86792f54.js';
import './ThemeProvider-528d6954.js';
import './FormGroup-15454cea.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './Col-3f588678.js';
var b = function () {
  return (
    (b =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var a in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }),
    b.apply(this, arguments)
  );
};
var w,
  N = function (e, t) {
    (function (e) {
      var t;
      e
        ? (function (e) {
            if (e) for (; e.lastChild; ) e.lastChild.remove();
          })('string' == typeof e ? document.getElementById(e) : e)
        : (t = document.querySelector('.grecaptcha-badge')) &&
          t.parentNode &&
          document.body.removeChild(t.parentNode);
    })(t),
      (window.___grecaptcha_cfg = void 0);
    var r,
      n = document.querySelector('#' + e);
    n && n.remove(),
      (r = document.querySelector(
        'script[src^="https://www.gstatic.com/recaptcha/releases"]',
      )) && r.remove();
  },
  S = function (e) {
    var t,
      r = e.render,
      n = e.onLoadCallbackName,
      a = e.language,
      o = e.onLoad,
      c = e.useRecaptchaNet,
      l = e.useEnterprise,
      s = e.scriptProps,
      i = void 0 === s ? {} : s,
      u = i.nonce,
      d = void 0 === u ? '' : u,
      p = i.defer,
      f = void 0 !== p && p,
      m = i.async,
      h = void 0 !== m && m,
      y = i.id,
      v = void 0 === y ? '' : y,
      g = i.appendTo,
      C = v || 'google-recaptcha-v3';
    if (((t = C), document.querySelector('#' + t))) o();
    else {
      var b = (function (e) {
          return (
            'https://www.' +
            (e.useRecaptchaNet ? 'recaptcha.net' : 'google.com') +
            '/recaptcha/' +
            (e.useEnterprise ? 'enterprise.js' : 'api.js')
          );
        })({ useEnterprise: l, useRecaptchaNet: c }),
        w = document.createElement('script');
      (w.id = C),
        (w.src =
          b +
          '?render=' +
          r +
          ('explicit' === r ? '&onload=' + n : '') +
          (a ? '&hl=' + a : '')),
        d && (w.nonce = d),
        (w.defer = !!f),
        (w.async = !!h),
        (w.onload = o),
        ('body' === g
          ? document.body
          : document.getElementsByTagName('head')[0]
        ).appendChild(w);
    }
  },
  x = function (e) {
    'undefined' != typeof process && process.env, console.warn(e);
  };
(w || (w = {})).SCRIPT_NOT_AVAILABLE = 'Recaptcha script is not available';
var P = e.createContext({
  executeRecaptcha: function () {
    throw Error(
      'GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider',
    );
  },
});
function _(r) {
  var n = r.reCaptchaKey,
    a = r.useEnterprise,
    o = void 0 !== a && a,
    c = r.useRecaptchaNet,
    l = void 0 !== c && c,
    s = r.scriptProps,
    i = r.language,
    u = r.container,
    d = r.children,
    p = e.useState(null),
    f = p[0],
    m = p[1],
    h = e.useRef(n),
    y = JSON.stringify(s),
    v = JSON.stringify(null == u ? void 0 : u.parameters);
  e.useEffect(
    function () {
      if (n) {
        var e = (null == s ? void 0 : s.id) || 'google-recaptcha-v3',
          t =
            (null == s ? void 0 : s.onLoadCallbackName) ||
            'onRecaptchaLoadCallback';
        return (
          (window[t] = function () {
            var e = o ? window.grecaptcha.enterprise : window.grecaptcha,
              t = b(
                { badge: 'inline', size: 'invisible', sitekey: n },
                (null == u ? void 0 : u.parameters) || {},
              );
            h.current = e.render(null == u ? void 0 : u.element, t);
          }),
          S({
            render: (null == u ? void 0 : u.element) ? 'explicit' : n,
            onLoadCallbackName: t,
            useEnterprise: o,
            useRecaptchaNet: l,
            scriptProps: s,
            language: i,
            onLoad: function () {
              if (window && window.grecaptcha) {
                var e = o ? window.grecaptcha.enterprise : window.grecaptcha;
                e.ready(function () {
                  m(e);
                });
              } else x('<GoogleRecaptchaProvider /> ' + w.SCRIPT_NOT_AVAILABLE);
            },
            onError: function () {
              x('Error loading google recaptcha script');
            },
          }),
          function () {
            N(e, null == u ? void 0 : u.element);
          }
        );
      }
      x('<GoogleReCaptchaProvider /> recaptcha key not provided');
    },
    [o, l, y, v, i, n, null == u ? void 0 : u.element],
  );
  var g = e.useCallback(
      function (e) {
        if (!f || !f.execute)
          throw new Error(
            '<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded',
          );
        return f.execute(h.current, { action: e });
      },
      [f, h],
    ),
    C = e.useMemo(
      function () {
        return {
          executeRecaptcha: f ? g : void 0,
          container: null == u ? void 0 : u.element,
        };
      },
      [g, f, null == u ? void 0 : u.element],
    );
  return t.createElement(P.Provider, { value: C }, d);
}
P.Consumer;
var E = function () {
  return e.useContext(P);
};
function R(r) {
  var n = this,
    a = r.action,
    o = r.onVerify,
    c = r.refreshReCaptcha,
    l = E();
  e.useEffect(
    function () {
      var e = l.executeRecaptcha;
      e &&
        (function (e, t, r, n) {
          new (r || (r = Promise))(function (a, o) {
            function c(e) {
              try {
                s(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(c, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        })(n, void 0, void 0, function () {
          var t;
          return (function (e, t) {
            var r,
              n,
              a,
              o,
              c = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; c; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (a =
                            2 & o[0]
                              ? n.return
                              : o[0]
                              ? n.throw || ((a = n.return) && a.call(n), 0)
                              : n.next) &&
                          !(a = a.call(n, o[1])).done)
                      )
                        return a;
                      switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return c.label++, { value: o[1], done: !1 };
                        case 5:
                          c.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = c.ops.pop()), c.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = c.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            c = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            c.label = o[1];
                            break;
                          }
                          if (6 === o[0] && c.label < a[1]) {
                            (c.label = a[1]), (a = o);
                            break;
                          }
                          if (a && c.label < a[2]) {
                            (c.label = a[2]), c.ops.push(o);
                            break;
                          }
                          a[2] && c.ops.pop(), c.trys.pop();
                          continue;
                      }
                      o = t.call(e, c);
                    } catch (l) {
                      (o = [6, l]), (n = 0);
                    } finally {
                      r = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, e(a)];
              case 1:
                return (
                  (t = r.sent()),
                  o
                    ? (o(t), [2])
                    : (x('Please define an onVerify function'), [2])
                );
            }
          });
        });
    },
    [a, o, c, l],
  );
  var s = l.container;
  return 'string' == typeof s ? t.createElement('div', { id: s }) : null;
}
function $(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var A = 'function' == typeof Symbol && Symbol.for,
  j = A ? Symbol.for('react.element') : 60103,
  M = A ? Symbol.for('react.portal') : 60106,
  F = A ? Symbol.for('react.fragment') : 60107,
  T = A ? Symbol.for('react.strict_mode') : 60108,
  I = A ? Symbol.for('react.profiler') : 60114,
  k = A ? Symbol.for('react.provider') : 60109,
  L = A ? Symbol.for('react.context') : 60110,
  O = A ? Symbol.for('react.async_mode') : 60111,
  z = A ? Symbol.for('react.concurrent_mode') : 60111,
  B = A ? Symbol.for('react.forward_ref') : 60112,
  G = A ? Symbol.for('react.suspense') : 60113,
  U = A ? Symbol.for('react.suspense_list') : 60120,
  V = A ? Symbol.for('react.memo') : 60115,
  D = A ? Symbol.for('react.lazy') : 60116,
  q = A ? Symbol.for('react.block') : 60121,
  Z = A ? Symbol.for('react.fundamental') : 60117,
  K = A ? Symbol.for('react.responder') : 60118,
  W = A ? Symbol.for('react.scope') : 60119;
function J(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case j:
        switch ((e = e.type)) {
          case O:
          case z:
          case F:
          case I:
          case T:
          case G:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case L:
              case B:
              case D:
              case V:
              case k:
                return e;
              default:
                return t;
            }
        }
      case M:
        return t;
    }
  }
}
function X(e) {
  return J(e) === z;
}
var Q = {
    AsyncMode: O,
    ConcurrentMode: z,
    ContextConsumer: L,
    ContextProvider: k,
    Element: j,
    ForwardRef: B,
    Fragment: F,
    Lazy: D,
    Memo: V,
    Portal: M,
    Profiler: I,
    StrictMode: T,
    Suspense: G,
    isAsyncMode: function (e) {
      return X(e) || J(e) === O;
    },
    isConcurrentMode: X,
    isContextConsumer: function (e) {
      return J(e) === L;
    },
    isContextProvider: function (e) {
      return J(e) === k;
    },
    isElement: function (e) {
      return 'object' == typeof e && null !== e && e.$$typeof === j;
    },
    isForwardRef: function (e) {
      return J(e) === B;
    },
    isFragment: function (e) {
      return J(e) === F;
    },
    isLazy: function (e) {
      return J(e) === D;
    },
    isMemo: function (e) {
      return J(e) === V;
    },
    isPortal: function (e) {
      return J(e) === M;
    },
    isProfiler: function (e) {
      return J(e) === I;
    },
    isStrictMode: function (e) {
      return J(e) === T;
    },
    isSuspense: function (e) {
      return J(e) === G;
    },
    isValidElementType: function (e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === F ||
        e === z ||
        e === I ||
        e === T ||
        e === G ||
        e === U ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === D ||
            e.$$typeof === V ||
            e.$$typeof === k ||
            e.$$typeof === L ||
            e.$$typeof === B ||
            e.$$typeof === Z ||
            e.$$typeof === K ||
            e.$$typeof === W ||
            e.$$typeof === q))
      );
    },
    typeOf: J,
  },
  H = $(function (e, t) {}),
  Y =
    (H.AsyncMode,
    H.ConcurrentMode,
    H.ContextConsumer,
    H.ContextProvider,
    H.Element,
    H.ForwardRef,
    H.Fragment,
    H.Lazy,
    H.Memo,
    H.Portal,
    H.Profiler,
    H.StrictMode,
    H.Suspense,
    H.isAsyncMode,
    H.isConcurrentMode,
    H.isContextConsumer,
    H.isContextProvider,
    H.isElement,
    H.isForwardRef,
    H.isFragment,
    H.isLazy,
    H.isMemo,
    H.isPortal,
    H.isProfiler,
    H.isStrictMode,
    H.isSuspense,
    H.isValidElementType,
    H.typeOf,
    $(function (e) {
      e.exports = Q;
    })),
  ee = {};
(ee[Y.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (ee[Y.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  });
const te = {
  formContainer: '_formContainer_uot9l_1',
  flagContainer: '_flagContainer_uot9l_8',
  selectedText: '_selectedText_uot9l_20',
  password: '_password_uot9l_33',
  email: '_email_uot9l_34',
  name: '_name_uot9l_35',
  confirmPassword: '_confirmPassword_uot9l_36',
  username: '_username_uot9l_37',
  collegeName: '_collegeName_uot9l_38',
};
function re(e) {
  return r('div', {
    className: te.formContainer,
    children: [
      n('div', {
        children: n('input', {
          type: 'text',
          placeholder: 'NAME  ',
          autoComplete: 'off',
          value: e.fullName,
          onChange: e.handleFullNameChange,
          className: te.name,
        }),
      }),
      n('div', {
        children: n('input', {
          type: 'text',
          placeholder: 'EMAIL  ',
          value: e.email,
          className: te.email,
          onChange: e.handleEmailChange,
        }),
      }),
      n('div', {
        children: n('input', {
          type: 'password',
          placeholder: 'PASSWORD  ',
          value: e.password,
          onChange: e.handlePasswordChange,
          className: te.password,
        }),
      }),
      n('div', {
        children: n('input', {
          type: 'password',
          placeholder: 'CONFIRM PASSWORD  ',
          value: e.confirmPassword,
          onChange: e.handleConfirmPasswordChange,
          className: te.confirmPassword,
        }),
      }),
    ],
  });
}
function ne(e) {
  return r('div', {
    className: te.formContainer,
    children: [
      n('div', {
        children: n('input', {
          type: 'text',
          placeholder: 'USERNAME  ',
          value: e.userName,
          onChange: e.handleUserNameChange,
          className: te.username,
        }),
      }),
      n('div', {
        children: n(v, {
          searchable: !0,
          className: te.flagContainer,
          selectButtonClassName: te.selectedText,
          selected: null != e.selectedCode ? e.selectedCode : 'IN',
          onSelect: null != e.handleFlagSelect ? e.handleFlagSelect : () => {},
          selectedSize: 27,
        }),
      }),
      n('div', {
        children: n('input', {
          type: 'text',
          placeholder: 'COLLEGE  ',
          value: e.college,
          onChange: e.handleCollegeChange,
          className: te.collegeName,
        }),
      }),
    ],
  });
}
function ae() {
  const [t, p] = e.useState('IN'),
    [v, b] = e.useState(1),
    [w, N] = e.useState(''),
    [S, x] = e.useState(''),
    [P, _] = e.useState(''),
    [E, $] = e.useState(''),
    [A, j] = e.useState(''),
    [M, F] = e.useState(''),
    [T, I] = e.useState(''),
    [k, L] = e.useState(0),
    O = a(),
    z = o();
  let B = !1;
  B = c(l);
  const G = c(s);
  e.useEffect(() => {
    if ('Username/Email already exists' === G) b(1), j(''), N('');
  }, [G]),
    e.useEffect(() => {
      B && (b(1), z('/login', { replace: !0 }), z(0));
    }, [B]);
  const U = e => {
      const t = new Intl.DisplayNames(['en'], { type: 'region' }).of(e);
      return t || 'INDIA';
    },
    V = async () => {
      O(
        d({
          id: '',
          username: A,
          name: S,
          email: w,
          password: M,
          confirmPassword: T,
          country: U(t),
          college: E,
          avatarId: k,
          recaptchaCode: P,
        }),
      );
    };
  return r('div', {
    className: y.mainContainer,
    children: [
      n('h1', { className: y.signUpText, children: ' Sign Up' }),
      n('div', {
        className: y.registerContainer,
        children: r(C, {
          children: [
            n(
              i,
              1 === v
                ? {
                    children: n(re, {
                      handleFullNameChange: e => {
                        x(e.target.value);
                      },
                      handleEmailChange: e => {
                        N(e.target.value);
                      },
                      fullName: S,
                      email: w,
                      register: !0,
                      handlePasswordChange: e => {
                        F(e.target.value);
                      },
                      handleConfirmPasswordChange: e => {
                        I(e.target.value);
                      },
                      password: M,
                      confirmPassword: T,
                    }),
                  }
                : 2 === v
                ? {
                    children: n(ne, {
                      selectedCode: t,
                      userName: A,
                      handleUserNameChange: e => {
                        j(e.target.value);
                      },
                      handleFlagSelect: e => {
                        p(e);
                      },
                      formNumber: v,
                      handleCollegeChange: e => {
                        $(e.target.value);
                      },
                      college: E,
                    }),
                  }
                : 3 === v
                ? {
                    children: r('div', {
                      children: [
                        n(g, {
                          formNumber: v,
                          handleAvatarChange: e => {
                            L(e);
                          },
                          isSignUp: !0,
                        }),
                        n('div', {
                          className:
                            'form-row d-flex justify-content-center my-1',
                          children: n('div', {
                            className:
                              'd-flex justify-content-center input-group',
                            children: n(R, {
                              onVerify: e => {
                                P || _(e);
                              },
                            }),
                          }),
                        }),
                      ],
                    }),
                  }
                : {},
            ),
            r('div', {
              className: y.footerContainer,
              children: [
                n('div', {
                  children:
                    v > 1
                      ? r('button', {
                          type: 'button',
                          onClick: () => {
                            b(v - 1);
                          },
                          className: y.previousButton,
                          children: [
                            n(f, { className: y.buttonIcon, icon: m }),
                            n('div', {
                              className: y.buttonText,
                              children: ' BACK',
                            }),
                          ],
                        })
                      : n(i, {}),
                }),
                n('div', {
                  children:
                    v < 3
                      ? r('button', {
                          type: 'button',
                          onClick: () => {
                            1 == v
                              ? S.length < 4
                                ? u.error(
                                    'Name should have atleast 5 characters',
                                  )
                                : w.match(
                                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                  )
                                ? M.match(
                                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                                  )
                                  ? M !== T
                                    ? u.error(
                                        "Password and confirm password don't match",
                                      )
                                    : b(2)
                                  : u(
                                      'Password should contain atleast \n\tatleast 8 characters,\n\t1 UpperCase letter, \n\t1 Special Character, \n\t1 number',
                                    )
                                : u.error('Invalid email')
                              : 2 == v &&
                                (A.length < 4
                                  ? u.error(
                                      'Username should have atleast 5 characters',
                                    )
                                  : 0 == E.length
                                  ? u.error('Please enter your college name')
                                  : b(3));
                          },
                          className: y.nextButton,
                          children: [
                            n('div', {
                              className: y.buttonText,
                              children: 'NEXT ',
                            }),
                            n(f, { className: y.buttonIcon, icon: h }),
                          ],
                        })
                      : n(i, {}),
                }),
                n('div', {
                  children:
                    3 == v
                      ? r('button', {
                          type: 'button',
                          onClick: () => {
                            P.length > 0 ? V() : u.error('Invalid ReCaptcha');
                          },
                          className: y.signUpButton,
                          children: [
                            n('div', {
                              className: y.buttonText,
                              children: 'SIGN UP ',
                            }),
                            n(f, { className: y.buttonIcon, icon: h }),
                          ],
                        })
                      : n(i, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function oe() {
  return n(_, { reCaptchaKey: p, children: n(ae, {}) });
}
export { oe as default };