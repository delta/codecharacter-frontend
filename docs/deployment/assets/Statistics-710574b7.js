import {
  r as t,
  am as e,
  c as r,
  j as n,
  F as i,
  by as o,
  d as a,
  A as c,
  _ as u,
} from './index-24a58ae8.js';
import { D as l, b as s } from './Dropdown-6fdeb033.js';
import { B as f } from './ButtonGroup-493c836f.js';
import {
  e as p,
  f as h,
  _ as d,
  g as y,
  t as v,
  i as m,
  d as g,
  h as b,
  j as x,
  a as w,
  b as O,
  k as S,
  l as j,
  c as A,
} from './_baseFlatten-13b14a1d.js';
import { p as P } from './index-06bcf729.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './extends-64d70faf.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './Button-0a98cdad.js';
import './createWithBsPrefix-6a3b0d2e.js';
const k = '_bg_22h2z_1',
  E = '_title_22h2z_11',
  M = '_graphParent_22h2z_30',
  _ = '_parent_22h2z_37',
  T = '_footer_22h2z_43',
  C = '_axis_22h2z_59',
  D = '_graphContainer_22h2z_67',
  N = '_error_22h2z_78';
function I(t) {
  var e,
    r,
    n = '';
  if ('string' == typeof t || 'number' == typeof t) n += t;
  else if ('object' == typeof t)
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = I(t[e])) && (n && (n += ' '), (n += r));
    else for (e in t) t[e] && (n && (n += ' '), (n += e));
  return n;
}
function B() {
  for (var t, e, r = 0, n = ''; r < arguments.length; )
    (t = arguments[r++]) && (e = I(t)) && (n && (n += ' '), (n += e));
  return n;
}
var R = p,
  L = h,
  z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  $ = /^\w*$/;
var U = function (t, e) {
  if (R(t)) return !1;
  var r = typeof t;
  return (
    !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !L(t)) ||
    $.test(t) ||
    !z.test(t) ||
    (null != e && t in Object(e))
  );
};
var F = function (t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  },
  W = d,
  q = F,
  X = '[object AsyncFunction]',
  G = '[object Function]',
  V = '[object GeneratorFunction]',
  H = '[object Proxy]';
var Y,
  K = function (t) {
    if (!q(t)) return !1;
    var e = W(t);
    return e == G || e == V || e == X || e == H;
  },
  Z = y['__core-js_shared__'],
  J = (Y = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + Y
    : '';
var Q = function (t) {
    return !!J && J in t;
  },
  tt = Function.prototype.toString;
var et = function (t) {
    if (null != t) {
      try {
        return tt.call(t);
      } catch (e) {}
      try {
        return t + '';
      } catch (e) {}
    }
    return '';
  },
  rt = K,
  nt = Q,
  it = F,
  ot = et,
  at = /^\[object .+?Constructor\]$/,
  ct = Function.prototype,
  ut = Object.prototype,
  lt = ct.toString,
  st = ut.hasOwnProperty,
  ft = RegExp(
    '^' +
      lt
        .call(st)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
var pt = function (t) {
    return !(!it(t) || nt(t)) && (rt(t) ? ft : at).test(ot(t));
  },
  ht = function (t, e) {
    return null == t ? void 0 : t[e];
  };
var dt = function (t, e) {
    var r = ht(t, e);
    return pt(r) ? r : void 0;
  },
  yt = dt(Object, 'create'),
  vt = yt;
var mt = function () {
  (this.__data__ = vt ? vt(null) : {}), (this.size = 0);
};
var gt = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  },
  bt = yt,
  xt = '__lodash_hash_undefined__',
  wt = Object.prototype.hasOwnProperty;
var Ot = function (t) {
    var e = this.__data__;
    if (bt) {
      var r = e[t];
      return r === xt ? void 0 : r;
    }
    return wt.call(e, t) ? e[t] : void 0;
  },
  St = yt,
  jt = Object.prototype.hasOwnProperty;
var At = yt,
  Pt = '__lodash_hash_undefined__';
var kt = mt,
  Et = gt,
  Mt = Ot,
  _t = function (t) {
    var e = this.__data__;
    return St ? void 0 !== e[t] : jt.call(e, t);
  },
  Tt = function (t, e) {
    var r = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (r[t] = At && void 0 === e ? Pt : e),
      this
    );
  };
function Ct(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(Ct.prototype.clear = kt),
  (Ct.prototype.delete = Et),
  (Ct.prototype.get = Mt),
  (Ct.prototype.has = _t),
  (Ct.prototype.set = Tt);
var Dt = Ct;
var Nt = function () {
  (this.__data__ = []), (this.size = 0);
};
var It = function (t, e) {
    return t === e || (t != t && e != e);
  },
  Bt = It;
var Rt = function (t, e) {
    for (var r = t.length; r--; ) if (Bt(t[r][0], e)) return r;
    return -1;
  },
  Lt = Rt,
  zt = Array.prototype.splice;
var $t = Rt;
var Ut = Rt;
var Ft = Rt;
var Wt = Nt,
  qt = function (t) {
    var e = this.__data__,
      r = Lt(e, t);
    return (
      !(r < 0) &&
      (r == e.length - 1 ? e.pop() : zt.call(e, r, 1), --this.size, !0)
    );
  },
  Xt = function (t) {
    var e = this.__data__,
      r = $t(e, t);
    return r < 0 ? void 0 : e[r][1];
  },
  Gt = function (t) {
    return Ut(this.__data__, t) > -1;
  },
  Vt = function (t, e) {
    var r = this.__data__,
      n = Ft(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
  };
function Ht(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(Ht.prototype.clear = Wt),
  (Ht.prototype.delete = qt),
  (Ht.prototype.get = Xt),
  (Ht.prototype.has = Gt),
  (Ht.prototype.set = Vt);
var Yt = Ht,
  Kt = dt(y, 'Map'),
  Zt = Dt,
  Jt = Yt,
  Qt = Kt;
var te = function (t) {
  var e = typeof t;
  return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
    ? '__proto__' !== t
    : null === t;
};
var ee = function (t, e) {
    var r = t.__data__;
    return te(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
  },
  re = ee;
var ne = ee;
var ie = ee;
var oe = ee;
var ae = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Zt(),
        map: new (Qt || Jt)(),
        string: new Zt(),
      });
  },
  ce = function (t) {
    var e = re(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  },
  ue = function (t) {
    return ne(this, t).get(t);
  },
  le = function (t) {
    return ie(this, t).has(t);
  },
  se = function (t, e) {
    var r = oe(this, t),
      n = r.size;
    return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
  };
function fe(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(fe.prototype.clear = ae),
  (fe.prototype.delete = ce),
  (fe.prototype.get = ue),
  (fe.prototype.has = le),
  (fe.prototype.set = se);
var pe = fe,
  he = pe,
  de = 'Expected a function';
function ye(t, e) {
  if ('function' != typeof t || (null != e && 'function' != typeof e))
    throw new TypeError(de);
  var r = function () {
    var n = arguments,
      i = e ? e.apply(this, n) : n[0],
      o = r.cache;
    if (o.has(i)) return o.get(i);
    var a = t.apply(this, n);
    return (r.cache = o.set(i, a) || o), a;
  };
  return (r.cache = new (ye.Cache || he)()), r;
}
ye.Cache = he;
var ve = ye,
  me = 500;
var ge =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  be = /\\(\\)?/g,
  xe = (function (t) {
    var e = ve(t, function (t) {
        return r.size === me && r.clear(), t;
      }),
      r = e.cache;
    return e;
  })(function (t) {
    var e = [];
    return (
      46 === t.charCodeAt(0) && e.push(''),
      t.replace(ge, function (t, r, n, i) {
        e.push(n ? i.replace(be, '$1') : r || t);
      }),
      e
    );
  }),
  we = p,
  Oe = U,
  Se = xe,
  je = v;
var Ae = function (t, e) {
    return we(t) ? t : Oe(t, e) ? [t] : Se(je(t));
  },
  Pe = h,
  ke = 1 / 0;
var Ee = function (t) {
    if ('string' == typeof t || Pe(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -ke ? '-0' : e;
  },
  Me = Ae,
  _e = Ee;
var Te = function (t, e) {
    for (var r = 0, n = (e = Me(e, t)).length; null != t && r < n; )
      t = t[_e(e[r++])];
    return r && r == n ? t : void 0;
  },
  Ce = Te;
var De = function (t, e, r) {
  var n = null == t ? void 0 : Ce(t, e);
  return void 0 === n ? r : n;
};
var Ne = function (t) {
    return null == t;
  },
  Ie = {},
  Be = {
    get exports() {
      return Ie;
    },
    set exports(t) {
      Ie = t;
    },
  },
  Re = {},
  Le = 'function' == typeof Symbol && Symbol.for,
  ze = Le ? Symbol.for('react.element') : 60103,
  $e = Le ? Symbol.for('react.portal') : 60106,
  Ue = Le ? Symbol.for('react.fragment') : 60107,
  Fe = Le ? Symbol.for('react.strict_mode') : 60108,
  We = Le ? Symbol.for('react.profiler') : 60114,
  qe = Le ? Symbol.for('react.provider') : 60109,
  Xe = Le ? Symbol.for('react.context') : 60110,
  Ge = Le ? Symbol.for('react.async_mode') : 60111,
  Ve = Le ? Symbol.for('react.concurrent_mode') : 60111,
  He = Le ? Symbol.for('react.forward_ref') : 60112,
  Ye = Le ? Symbol.for('react.suspense') : 60113,
  Ke = Le ? Symbol.for('react.suspense_list') : 60120,
  Ze = Le ? Symbol.for('react.memo') : 60115,
  Je = Le ? Symbol.for('react.lazy') : 60116,
  Qe = Le ? Symbol.for('react.block') : 60121,
  tr = Le ? Symbol.for('react.fundamental') : 60117,
  er = Le ? Symbol.for('react.responder') : 60118,
  rr = Le ? Symbol.for('react.scope') : 60119;
function nr(t) {
  if ('object' == typeof t && null !== t) {
    var e = t.$$typeof;
    switch (e) {
      case ze:
        switch ((t = t.type)) {
          case Ge:
          case Ve:
          case Ue:
          case We:
          case Fe:
          case Ye:
            return t;
          default:
            switch ((t = t && t.$$typeof)) {
              case Xe:
              case He:
              case Je:
              case Ze:
              case qe:
                return t;
              default:
                return e;
            }
        }
      case $e:
        return e;
    }
  }
}
function ir(t) {
  return nr(t) === Ve;
}
(Re.AsyncMode = Ge),
  (Re.ConcurrentMode = Ve),
  (Re.ContextConsumer = Xe),
  (Re.ContextProvider = qe),
  (Re.Element = ze),
  (Re.ForwardRef = He),
  (Re.Fragment = Ue),
  (Re.Lazy = Je),
  (Re.Memo = Ze),
  (Re.Portal = $e),
  (Re.Profiler = We),
  (Re.StrictMode = Fe),
  (Re.Suspense = Ye),
  (Re.isAsyncMode = function (t) {
    return ir(t) || nr(t) === Ge;
  }),
  (Re.isConcurrentMode = ir),
  (Re.isContextConsumer = function (t) {
    return nr(t) === Xe;
  }),
  (Re.isContextProvider = function (t) {
    return nr(t) === qe;
  }),
  (Re.isElement = function (t) {
    return 'object' == typeof t && null !== t && t.$$typeof === ze;
  }),
  (Re.isForwardRef = function (t) {
    return nr(t) === He;
  }),
  (Re.isFragment = function (t) {
    return nr(t) === Ue;
  }),
  (Re.isLazy = function (t) {
    return nr(t) === Je;
  }),
  (Re.isMemo = function (t) {
    return nr(t) === Ze;
  }),
  (Re.isPortal = function (t) {
    return nr(t) === $e;
  }),
  (Re.isProfiler = function (t) {
    return nr(t) === We;
  }),
  (Re.isStrictMode = function (t) {
    return nr(t) === Fe;
  }),
  (Re.isSuspense = function (t) {
    return nr(t) === Ye;
  }),
  (Re.isValidElementType = function (t) {
    return (
      'string' == typeof t ||
      'function' == typeof t ||
      t === Ue ||
      t === Ve ||
      t === We ||
      t === Fe ||
      t === Ye ||
      t === Ke ||
      ('object' == typeof t &&
        null !== t &&
        (t.$$typeof === Je ||
          t.$$typeof === Ze ||
          t.$$typeof === qe ||
          t.$$typeof === Xe ||
          t.$$typeof === He ||
          t.$$typeof === tr ||
          t.$$typeof === er ||
          t.$$typeof === rr ||
          t.$$typeof === Qe))
    );
  }),
  (Re.typeOf = nr),
  (Be.exports = Re);
var or = d,
  ar = m,
  cr = '[object Number]';
var ur = function (t) {
    return 'number' == typeof t || (ar(t) && or(t) == cr);
  },
  lr = ur;
var sr = function (t) {
    return lr(t) && t != +t;
  },
  fr = function (t) {
    return 0 === t ? 0 : t > 0 ? 1 : -1;
  },
  pr = function (t) {
    return g(t) && t.indexOf('%') === t.length - 1;
  },
  hr = function (t) {
    return ur(t) && !sr(t);
  },
  dr = function (t) {
    return hr(t) || g(t);
  },
  yr = 0,
  vr = function (t) {
    var e = ++yr;
    return ''.concat(t || '').concat(e);
  },
  mr = function (t, e) {
    var r,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!hr(t) && !g(t)) return n;
    if (pr(t)) {
      var o = t.indexOf('%');
      r = (e * parseFloat(t.slice(0, o))) / 100;
    } else r = +t;
    return sr(r) && (r = n), i && r > e && (r = e), r;
  },
  gr = function (t) {
    if (!t) return null;
    var e = Object.keys(t);
    return e && e.length ? t[e[0]] : null;
  },
  br = function (t, e) {
    return hr(t) && hr(e)
      ? function (r) {
          return t + r * (e - t);
        }
      : function () {
          return e;
        };
  };
function xr(t, e, r) {
  return t && t.length
    ? t.find(function (t) {
        return t && ('function' == typeof e ? e(t) : De(t, e)) === r;
      })
    : null;
}
function wr(t, e) {
  for (var r in t)
    if (
      {}.hasOwnProperty.call(t, r) &&
      (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
    )
      return !1;
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
      return !1;
  return !0;
}
function Or(t) {
  return (Or =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Sr = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'className',
    'color',
    'height',
    'id',
    'lang',
    'max',
    'media',
    'method',
    'min',
    'name',
    'style',
    'target',
    'width',
    'role',
    'tabIndex',
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baselineShift',
    'baseProfile',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'horizAdvX',
    'horizOriginX',
    'href',
    'ideographic',
    'imageRendering',
    'in2',
    'in',
    'intercept',
    'k1',
    'k2',
    'k3',
    'k4',
    'k',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'vHanging',
    'vIdeographic',
    'viewTarget',
    'visibility',
    'vMathematical',
    'widths',
    'wordSpacing',
    'writingMode',
    'x1',
    'x2',
    'x',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlLang',
    'xmlns',
    'xmlnsXlink',
    'xmlSpace',
    'y1',
    'y2',
    'y',
    'yChannelSelector',
    'z',
    'zoomAndPan',
    'ref',
    'key',
    'angle',
  ],
  jr = ['points', 'pathLength'],
  Ar = { svg: ['viewBox', 'children'], polygon: jr, polyline: jr },
  Pr = [
    'dangerouslySetInnerHTML',
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture',
  ],
  kr = function (e, r) {
    if (!e || 'function' == typeof e || 'boolean' == typeof e) return null;
    var n = e;
    if ((t.isValidElement(e) && (n = e.props), !F(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (t) {
        Pr.includes(t) &&
          (i[t] =
            r ||
            function (e) {
              return n[t](n, e);
            });
      }),
      i
    );
  },
  Er = function (t, e, r) {
    if (!F(t) || 'object' !== Or(t)) return null;
    var n = null;
    return (
      Object.keys(t).forEach(function (i) {
        var o = t[i];
        Pr.includes(i) &&
          'function' == typeof o &&
          (n || (n = {}),
          (n[i] = (function (t, e, r) {
            return function (n) {
              return t(e, r, n), null;
            };
          })(o, e, r)));
      }),
      n
    );
  },
  Mr = ['children'],
  _r = ['children'];
function Tr(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function Cr(t) {
  return (Cr =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Dr = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
  },
  Nr = function (t) {
    return 'string' == typeof t
      ? t
      : t
      ? t.displayName || t.name || 'Component'
      : '';
  },
  Ir = null,
  Br = null,
  Rr = function e(r) {
    if (r === Ir && Array.isArray(Br)) return Br;
    var n = [];
    return (
      t.Children.forEach(r, function (t) {
        Ne(t) ||
          (Ie.isFragment(t) ? (n = n.concat(e(t.props.children))) : n.push(t));
      }),
      (Br = n),
      (Ir = r),
      n
    );
  };
function Lr(t, e) {
  var r = [],
    n = [];
  return (
    (n = Array.isArray(e)
      ? e.map(function (t) {
          return Nr(t);
        })
      : [Nr(e)]),
    Rr(t).forEach(function (t) {
      var e = De(t, 'type.displayName') || De(t, 'type.name');
      -1 !== n.indexOf(e) && r.push(t);
    }),
    r
  );
}
function zr(t, e) {
  var r = Lr(t, e);
  return r && r[0];
}
var $r = function (t) {
    if (!t || !t.props) return !1;
    var e = t.props,
      r = e.width,
      n = e.height;
    return !(!hr(r) || r <= 0 || !hr(n) || n <= 0);
  },
  Ur = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ],
  Fr = function (t) {
    return t && 'object' === Cr(t) && 'cx' in t && 'cy' in t && 'r' in t;
  },
  Wr = function (e, r, n) {
    if (!e || 'function' == typeof e || 'boolean' == typeof e) return null;
    var i = e;
    if ((t.isValidElement(e) && (i = e.props), !F(i))) return null;
    var o = {};
    return (
      Object.keys(i).forEach(function (t) {
        var e;
        (function (t, e, r, n) {
          var i,
            o =
              null !== (i = null == Ar ? void 0 : Ar[n]) && void 0 !== i
                ? i
                : [];
          return (
            (!K(t) && ((n && o.includes(e)) || Sr.includes(e))) ||
            (r && Pr.includes(e))
          );
        })(null === (e = i) || void 0 === e ? void 0 : e[t], t, r, n) &&
          (o[t] = i[t]);
      }),
      o
    );
  },
  qr = function e(r, n) {
    if (r === n) return !0;
    var i = t.Children.count(r);
    if (i !== t.Children.count(n)) return !1;
    if (0 === i) return !0;
    if (1 === i)
      return Xr(Array.isArray(r) ? r[0] : r, Array.isArray(n) ? n[0] : n);
    for (var o = 0; o < i; o++) {
      var a = r[o],
        c = n[o];
      if (Array.isArray(a) || Array.isArray(c)) {
        if (!e(a, c)) return !1;
      } else if (!Xr(a, c)) return !1;
    }
    return !0;
  },
  Xr = function (t, e) {
    if (Ne(t) && Ne(e)) return !0;
    if (!Ne(t) && !Ne(e)) {
      var r = t.props || {},
        n = r.children,
        i = Tr(r, Mr),
        o = e.props || {},
        a = o.children,
        c = Tr(o, _r);
      return n && a ? wr(i, c) && qr(n, a) : !n && !a && wr(i, c);
    }
    return !1;
  },
  Gr = function (t, e) {
    var r = [],
      n = {};
    return (
      Rr(t).forEach(function (t, i) {
        if (
          (function (t) {
            return t && t.type && g(t.type) && Ur.indexOf(t.type) >= 0;
          })(t)
        )
          r.push(t);
        else if (t) {
          var o = Nr(t.type),
            a = e[o] || {},
            c = a.handler,
            u = a.once;
          if (c && (!u || !n[o])) {
            var l = c(t, o, i);
            r.push(l), (n[o] = !0);
          }
        }
      }),
      r
    );
  },
  Vr = function (t) {
    var e = t && t.type;
    return e && Dr[e] ? Dr[e] : null;
  },
  Hr = [
    'children',
    'width',
    'height',
    'viewBox',
    'className',
    'style',
    'title',
    'desc',
  ];
function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Yr.apply(this, arguments)
  );
}
function Kr(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function Zr(t) {
  var r = t.children,
    n = t.width,
    i = t.height,
    o = t.viewBox,
    a = t.className,
    c = t.style,
    u = t.title,
    l = t.desc,
    s = Kr(t, Hr),
    f = o || { width: n, height: i, x: 0, y: 0 },
    p = B('recharts-surface', a);
  return e.createElement(
    'svg',
    Yr({}, Wr(s, !0, 'svg'), {
      className: p,
      width: n,
      height: i,
      style: c,
      viewBox: ''
        .concat(f.x, ' ')
        .concat(f.y, ' ')
        .concat(f.width, ' ')
        .concat(f.height),
    }),
    e.createElement('title', null, u),
    e.createElement('desc', null, l),
    r,
  );
}
var Jr = ['children', 'className'];
function Qr() {
  return (
    (Qr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Qr.apply(this, arguments)
  );
}
function tn(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
var en = e.forwardRef(function (t, r) {
    var n = t.children,
      i = t.className,
      o = tn(t, Jr),
      a = B('recharts-layer', i);
    return e.createElement('g', Qr({ className: a }, Wr(o, !0), { ref: r }), n);
  }),
  rn = function (t, e) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      n[i - 2] = arguments[i];
  };
var nn = function (t, e, r) {
  var n = -1,
    i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e),
    (r = r > i ? i : r) < 0 && (r += i),
    (i = e > r ? 0 : (r - e) >>> 0),
    (e >>>= 0);
  for (var o = Array(i); ++n < i; ) o[n] = t[n + e];
  return o;
};
var on = function (t, e, r) {
    var n = t.length;
    return (r = void 0 === r ? n : r), !e && r >= n ? t : nn(t, e, r);
  },
  an = RegExp(
    '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
  );
var cn = function (t) {
  return an.test(t);
};
var un = function (t) {
    return t.split('');
  },
  ln = '\\ud800-\\udfff',
  sn = '[' + ln + ']',
  fn = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
  pn = '\\ud83c[\\udffb-\\udfff]',
  hn = '[^' + ln + ']',
  dn = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  yn = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  vn = '(?:' + fn + '|' + pn + ')' + '?',
  mn = '[\\ufe0e\\ufe0f]?',
  gn =
    mn + vn + ('(?:\\u200d(?:' + [hn, dn, yn].join('|') + ')' + mn + vn + ')*'),
  bn = '(?:' + [hn + fn + '?', fn, dn, yn, sn].join('|') + ')',
  xn = RegExp(pn + '(?=' + pn + ')|' + bn + gn, 'g');
var wn = un,
  On = cn,
  Sn = function (t) {
    return t.match(xn) || [];
  };
var jn = on,
  An = cn,
  Pn = function (t) {
    return On(t) ? Sn(t) : wn(t);
  },
  kn = v;
var En = (function (t) {
  return function (e) {
    e = kn(e);
    var r = An(e) ? Pn(e) : void 0,
      n = r ? r[0] : e.charAt(0),
      i = r ? jn(r, 1).join('') : e.slice(1);
    return n[t]() + i;
  };
})('toUpperCase');
function Mn(t) {
  return function () {
    return t;
  };
}
const _n = Math.cos,
  Tn = Math.sin,
  Cn = Math.sqrt,
  Dn = Math.PI,
  Nn = 2 * Dn,
  In = Math.PI,
  Bn = 2 * In,
  Rn = 1e-6,
  Ln = Bn - Rn;
function zn(t) {
  this._ += t[0];
  for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
}
class $n {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ''),
      (this._append =
        null == t
          ? zn
          : (function (t) {
              let e = Math.floor(t);
              if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
              if (e > 15) return zn;
              const r = 10 ** e;
              return function (t) {
                this._ += t[0];
                for (let e = 1, n = t.length; e < n; ++e)
                  this._ += Math.round(arguments[e] * r) / r + t[e];
              };
            })(t));
  }
  moveTo(t, e) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
  }
  closePath() {
    null !== this._x1 &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, e) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
  }
  quadraticCurveTo(t, e, r, n) {
    this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
  }
  bezierCurveTo(t, e, r, n, i, o) {
    this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +i)},${(this._y1 =
      +o)}`;
  }
  arcTo(t, e, r, n, i) {
    if (((t = +t), (e = +e), (r = +r), (n = +n), (i = +i) < 0))
      throw new Error(`negative radius: ${i}`);
    let o = this._x1,
      a = this._y1,
      c = r - t,
      u = n - e,
      l = o - t,
      s = a - e,
      f = l * l + s * s;
    if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
    else if (f > Rn)
      if (Math.abs(s * c - u * l) > Rn && i) {
        let p = r - o,
          h = n - a,
          d = c * c + u * u,
          y = p * p + h * h,
          v = Math.sqrt(d),
          m = Math.sqrt(f),
          g = i * Math.tan((In - Math.acos((d + f - y) / (2 * v * m))) / 2),
          b = g / m,
          x = g / v;
        Math.abs(b - 1) > Rn && this._append`L${t + b * l},${e + b * s}`,
          this._append`A${i},${i},0,0,${+(s * p > l * h)},${(this._x1 =
            t + x * c)},${(this._y1 = e + x * u)}`;
      } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
    else;
  }
  arc(t, e, r, n, i, o) {
    if (((t = +t), (e = +e), (o = !!o), (r = +r) < 0))
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(n),
      c = r * Math.sin(n),
      u = t + a,
      l = e + c,
      s = 1 ^ o,
      f = o ? n - i : i - n;
    null === this._x1
      ? this._append`M${u},${l}`
      : (Math.abs(this._x1 - u) > Rn || Math.abs(this._y1 - l) > Rn) &&
        this._append`L${u},${l}`,
      r &&
        (f < 0 && (f = (f % Bn) + Bn),
        f > Ln
          ? this._append`A${r},${r},0,1,${s},${t - a},${
              e - c
            }A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = l)}`
          : f > Rn &&
            this._append`A${r},${r},0,${+(f >= In)},${s},${(this._x1 =
              t + r * Math.cos(i))},${(this._y1 = e + r * Math.sin(i))}`);
  }
  rect(t, e, r, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +e)}h${(r = +r)}v${+n}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Un(t) {
  let e = 3;
  return (
    (t.digits = function (r) {
      if (!arguments.length) return e;
      if (null == r) e = null;
      else {
        const t = Math.floor(r);
        if (!(t >= 0)) throw new RangeError(`invalid digits: ${r}`);
        e = t;
      }
      return t;
    }),
    () => new $n(e)
  );
}
function Fn(t) {
  return 'object' == typeof t && 'length' in t ? t : Array.from(t);
}
function Wn(t) {
  this._context = t;
}
function qn(t) {
  return new Wn(t);
}
function Xn(t) {
  return t[0];
}
function Gn(t) {
  return t[1];
}
function Vn(t, e) {
  var r = Mn(!0),
    n = null,
    i = qn,
    o = null,
    a = Un(c);
  function c(c) {
    var u,
      l,
      s,
      f = (c = Fn(c)).length,
      p = !1;
    for (null == n && (o = i((s = a()))), u = 0; u <= f; ++u)
      !(u < f && r((l = c[u]), u, c)) === p &&
        ((p = !p) ? o.lineStart() : o.lineEnd()),
        p && o.point(+t(l, u, c), +e(l, u, c));
    if (s) return (o = null), s + '' || null;
  }
  return (
    (t = 'function' == typeof t ? t : void 0 === t ? Xn : Mn(t)),
    (e = 'function' == typeof e ? e : void 0 === e ? Gn : Mn(e)),
    (c.x = function (e) {
      return arguments.length
        ? ((t = 'function' == typeof e ? e : Mn(+e)), c)
        : t;
    }),
    (c.y = function (t) {
      return arguments.length
        ? ((e = 'function' == typeof t ? t : Mn(+t)), c)
        : e;
    }),
    (c.defined = function (t) {
      return arguments.length
        ? ((r = 'function' == typeof t ? t : Mn(!!t)), c)
        : r;
    }),
    (c.curve = function (t) {
      return arguments.length ? ((i = t), null != n && (o = i(n)), c) : i;
    }),
    (c.context = function (t) {
      return arguments.length
        ? (null == t ? (n = o = null) : (o = i((n = t))), c)
        : n;
    }),
    c
  );
}
function Hn(t, e, r) {
  var n = null,
    i = Mn(!0),
    o = null,
    a = qn,
    c = null,
    u = Un(l);
  function l(l) {
    var s,
      f,
      p,
      h,
      d,
      y = (l = Fn(l)).length,
      v = !1,
      m = new Array(y),
      g = new Array(y);
    for (null == o && (c = a((d = u()))), s = 0; s <= y; ++s) {
      if (!(s < y && i((h = l[s]), s, l)) === v)
        if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
            c.point(m[p], g[p]);
          c.lineEnd(), c.areaEnd();
        }
      v &&
        ((m[s] = +t(h, s, l)),
        (g[s] = +e(h, s, l)),
        c.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : g[s]));
    }
    if (d) return (c = null), d + '' || null;
  }
  function s() {
    return Vn().defined(i).curve(a).context(o);
  }
  return (
    (t = 'function' == typeof t ? t : void 0 === t ? Xn : Mn(+t)),
    (e = 'function' == typeof e ? e : Mn(void 0 === e ? 0 : +e)),
    (r = 'function' == typeof r ? r : void 0 === r ? Gn : Mn(+r)),
    (l.x = function (e) {
      return arguments.length
        ? ((t = 'function' == typeof e ? e : Mn(+e)), (n = null), l)
        : t;
    }),
    (l.x0 = function (e) {
      return arguments.length
        ? ((t = 'function' == typeof e ? e : Mn(+e)), l)
        : t;
    }),
    (l.x1 = function (t) {
      return arguments.length
        ? ((n = null == t ? null : 'function' == typeof t ? t : Mn(+t)), l)
        : n;
    }),
    (l.y = function (t) {
      return arguments.length
        ? ((e = 'function' == typeof t ? t : Mn(+t)), (r = null), l)
        : e;
    }),
    (l.y0 = function (t) {
      return arguments.length
        ? ((e = 'function' == typeof t ? t : Mn(+t)), l)
        : e;
    }),
    (l.y1 = function (t) {
      return arguments.length
        ? ((r = null == t ? null : 'function' == typeof t ? t : Mn(+t)), l)
        : r;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return s().x(t).y(e);
      }),
    (l.lineY1 = function () {
      return s().x(t).y(r);
    }),
    (l.lineX1 = function () {
      return s().x(n).y(e);
    }),
    (l.defined = function (t) {
      return arguments.length
        ? ((i = 'function' == typeof t ? t : Mn(!!t)), l)
        : i;
    }),
    (l.curve = function (t) {
      return arguments.length ? ((a = t), null != o && (c = a(o)), l) : a;
    }),
    (l.context = function (t) {
      return arguments.length
        ? (null == t ? (o = c = null) : (c = a((o = t))), l)
        : o;
    }),
    l
  );
}
Wn.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
    }
  },
};
class Yn {
  constructor(t, e) {
    (this._context = t), (this._x = e);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              e,
              t,
              e,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + e) / 2),
              t,
              this._y0,
              t,
              e,
            );
    }
    (this._x0 = t), (this._y0 = e);
  }
}
const Kn = {
    draw(t, e) {
      const r = Cn(e / Dn);
      t.moveTo(r, 0), t.arc(0, 0, r, 0, Nn);
    },
  },
  Zn = {
    draw(t, e) {
      const r = Cn(e / 5) / 2;
      t.moveTo(-3 * r, -r),
        t.lineTo(-r, -r),
        t.lineTo(-r, -3 * r),
        t.lineTo(r, -3 * r),
        t.lineTo(r, -r),
        t.lineTo(3 * r, -r),
        t.lineTo(3 * r, r),
        t.lineTo(r, r),
        t.lineTo(r, 3 * r),
        t.lineTo(-r, 3 * r),
        t.lineTo(-r, r),
        t.lineTo(-3 * r, r),
        t.closePath();
    },
  },
  Jn = Cn(1 / 3),
  Qn = 2 * Jn,
  ti = {
    draw(t, e) {
      const r = Cn(e / Qn),
        n = r * Jn;
      t.moveTo(0, -r),
        t.lineTo(n, 0),
        t.lineTo(0, r),
        t.lineTo(-n, 0),
        t.closePath();
    },
  },
  ei = {
    draw(t, e) {
      const r = Cn(e),
        n = -r / 2;
      t.rect(n, n, r, r);
    },
  },
  ri = Tn(Dn / 10) / Tn((7 * Dn) / 10),
  ni = Tn(Nn / 10) * ri,
  ii = -_n(Nn / 10) * ri,
  oi = {
    draw(t, e) {
      const r = Cn(0.8908130915292852 * e),
        n = ni * r,
        i = ii * r;
      t.moveTo(0, -r), t.lineTo(n, i);
      for (let o = 1; o < 5; ++o) {
        const e = (Nn * o) / 5,
          a = _n(e),
          c = Tn(e);
        t.lineTo(c * r, -a * r), t.lineTo(a * n - c * i, c * n + a * i);
      }
      t.closePath();
    },
  },
  ai = Cn(3),
  ci = {
    draw(t, e) {
      const r = -Cn(e / (3 * ai));
      t.moveTo(0, 2 * r),
        t.lineTo(-ai * r, -r),
        t.lineTo(ai * r, -r),
        t.closePath();
    },
  },
  ui = -0.5,
  li = Cn(3) / 2,
  si = 1 / Cn(12),
  fi = 3 * (si / 2 + 1),
  pi = {
    draw(t, e) {
      const r = Cn(e / fi),
        n = r / 2,
        i = r * si,
        o = n,
        a = r * si + r,
        c = -o,
        u = a;
      t.moveTo(n, i),
        t.lineTo(o, a),
        t.lineTo(c, u),
        t.lineTo(ui * n - li * i, li * n + ui * i),
        t.lineTo(ui * o - li * a, li * o + ui * a),
        t.lineTo(ui * c - li * u, li * c + ui * u),
        t.lineTo(ui * n + li * i, ui * i - li * n),
        t.lineTo(ui * o + li * a, ui * a - li * o),
        t.lineTo(ui * c + li * u, ui * u - li * c),
        t.closePath();
    },
  };
function hi() {}
function di(t, e, r) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + r) / 6,
  );
}
function yi(t) {
  this._context = t;
}
function vi(t) {
  this._context = t;
}
function mi(t) {
  this._context = t;
}
function gi(t) {
  this._context = t;
}
function bi(t) {
  return t < 0 ? -1 : 1;
}
function xi(t, e, r) {
  var n = t._x1 - t._x0,
    i = e - t._x1,
    o = (t._y1 - t._y0) / (n || (i < 0 && -0)),
    a = (r - t._y1) / (i || (n < 0 && -0)),
    c = (o * i + a * n) / (n + i);
  return (
    (bi(o) + bi(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(c)) || 0
  );
}
function wi(t, e) {
  var r = t._x1 - t._x0;
  return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
}
function Oi(t, e, r) {
  var n = t._x0,
    i = t._y0,
    o = t._x1,
    a = t._y1,
    c = (o - n) / 3;
  t._context.bezierCurveTo(n + c, i + c * e, o - c, a - c * r, o, a);
}
function Si(t) {
  this._context = t;
}
function ji(t) {
  this._context = new Ai(t);
}
function Ai(t) {
  this._context = t;
}
function Pi(t) {
  this._context = t;
}
function ki(t) {
  var e,
    r,
    n = t.length - 1,
    i = new Array(n),
    o = new Array(n),
    a = new Array(n);
  for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
    (i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
  for (
    i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
    e < n;
    ++e
  )
    (r = i[e] / o[e - 1]), (o[e] -= r), (a[e] -= r * a[e - 1]);
  for (i[n - 1] = a[n - 1] / o[n - 1], e = n - 2; e >= 0; --e)
    i[e] = (a[e] - i[e + 1]) / o[e];
  for (o[n - 1] = (t[n] + i[n - 1]) / 2, e = 0; e < n - 1; ++e)
    o[e] = 2 * t[e + 1] - i[e + 1];
  return [i, o];
}
function Ei(t, e) {
  (this._context = t), (this._t = e);
}
function Mi(t, e) {
  if ((i = t.length) > 1)
    for (var r, n, i, o = 1, a = t[e[0]], c = a.length; o < i; ++o)
      for (n = a, a = t[e[o]], r = 0; r < c; ++r)
        a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
}
function _i(t) {
  for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
  return r;
}
function Ti(t, e) {
  return t[e];
}
function Ci(t) {
  const e = [];
  return (e.key = t), e;
}
function Di(t) {
  return (Di =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
(yi.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        di(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        di(this, t, e);
    }
    (this._x0 = this._x1),
      (this._x1 = t),
      (this._y0 = this._y1),
      (this._y1 = e);
  },
}),
  (vi.prototype = {
    areaStart: hi,
    areaEnd: hi,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo(
            (this._x2 + 2 * this._x3) / 3,
            (this._y2 + 2 * this._y3) / 3,
          ),
            this._context.lineTo(
              (this._x3 + 2 * this._x2) / 3,
              (this._y3 + 2 * this._y2) / 3,
            ),
            this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4);
      }
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1), (this._x2 = t), (this._y2 = e);
          break;
        case 1:
          (this._point = 2), (this._x3 = t), (this._y3 = e);
          break;
        case 2:
          (this._point = 3),
            (this._x4 = t),
            (this._y4 = e),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + t) / 6,
              (this._y0 + 4 * this._y1 + e) / 6,
            );
          break;
        default:
          di(this, t, e);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = e);
    },
  }),
  (mi.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var r = (this._x0 + 4 * this._x1 + t) / 6,
            n = (this._y0 + 4 * this._y1 + e) / 6;
          this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
          break;
        case 3:
          this._point = 4;
        default:
          di(this, t, e);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = e);
    },
  }),
  (gi.prototype = {
    areaStart: hi,
    areaEnd: hi,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      this._point && this._context.closePath();
    },
    point: function (t, e) {
      (t = +t),
        (e = +e),
        this._point
          ? this._context.lineTo(t, e)
          : ((this._point = 1), this._context.moveTo(t, e));
    },
  }),
  (Si.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          Oi(this, this._t0, wi(this, this._t0));
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      var r = NaN;
      if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3), Oi(this, wi(this, (r = xi(this, t, e))), r);
            break;
          default:
            Oi(this, this._t0, (r = xi(this, t, e)));
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = e),
          (this._t0 = r);
      }
    },
  }),
  ((ji.prototype = Object.create(Si.prototype)).point = function (t, e) {
    Si.prototype.point.call(this, e, t);
  }),
  (Ai.prototype = {
    moveTo: function (t, e) {
      this._context.moveTo(e, t);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (t, e) {
      this._context.lineTo(e, t);
    },
    bezierCurveTo: function (t, e, r, n, i, o) {
      this._context.bezierCurveTo(e, t, n, r, o, i);
    },
  }),
  (Pi.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = []), (this._y = []);
    },
    lineEnd: function () {
      var t = this._x,
        e = this._y,
        r = t.length;
      if (r)
        if (
          (this._line
            ? this._context.lineTo(t[0], e[0])
            : this._context.moveTo(t[0], e[0]),
          2 === r)
        )
          this._context.lineTo(t[1], e[1]);
        else
          for (var n = ki(t), i = ki(e), o = 0, a = 1; a < r; ++o, ++a)
            this._context.bezierCurveTo(
              n[0][o],
              i[0][o],
              n[1][o],
              i[1][o],
              t[a],
              e[a],
            );
      (this._line || (0 !== this._line && 1 === r)) &&
        this._context.closePath(),
        (this._line = 1 - this._line),
        (this._x = this._y = null);
    },
    point: function (t, e) {
      this._x.push(+t), this._y.push(+e);
    },
  }),
  (Ei.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
      0 < this._t &&
        this._t < 1 &&
        2 === this._point &&
        this._context.lineTo(this._x, this._y),
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
        this._line >= 0 &&
          ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0)
            this._context.lineTo(this._x, e), this._context.lineTo(t, e);
          else {
            var r = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(r, this._y), this._context.lineTo(r, e);
          }
      }
      (this._x = t), (this._y = e);
    },
  });
var Ni = ['type', 'size', 'sizeType'];
function Ii() {
  return (
    (Ii = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ii.apply(this, arguments)
  );
}
function Bi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ri(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Bi(Object(r), !0).forEach(function (e) {
          Li(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Bi(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Li(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Di(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Di(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Di(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function zi(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
var $i = {
    symbolCircle: Kn,
    symbolCross: Zn,
    symbolDiamond: ti,
    symbolSquare: ei,
    symbolStar: oi,
    symbolTriangle: ci,
    symbolWye: pi,
  },
  Ui = Math.PI / 180,
  Fi = function (t) {
    var r,
      n,
      i = t.type,
      o = void 0 === i ? 'circle' : i,
      a = t.size,
      c = void 0 === a ? 64 : a,
      u = t.sizeType,
      l = void 0 === u ? 'area' : u,
      s = Ri(Ri({}, zi(t, Ni)), {}, { type: o, size: c, sizeType: l }),
      f = s.className,
      p = s.cx,
      h = s.cy,
      d = Wr(s, !0);
    return p === +p && h === +h && c === +c
      ? e.createElement(
          'path',
          Ii({}, d, {
            className: B('recharts-symbols', f),
            transform: 'translate('.concat(p, ', ').concat(h, ')'),
            d:
              ((r = (function (t) {
                var e = 'symbol'.concat(En(t));
                return $i[e] || Kn;
              })(o)),
              (n = (function (t, e) {
                let r = null,
                  n = Un(i);
                function i() {
                  let i;
                  if (
                    (r || (r = i = n()),
                    t.apply(this, arguments).draw(r, +e.apply(this, arguments)),
                    i)
                  )
                    return (r = null), i + '' || null;
                }
                return (
                  (t = 'function' == typeof t ? t : Mn(t || Kn)),
                  (e = 'function' == typeof e ? e : Mn(void 0 === e ? 64 : +e)),
                  (i.type = function (e) {
                    return arguments.length
                      ? ((t = 'function' == typeof e ? e : Mn(e)), i)
                      : t;
                  }),
                  (i.size = function (t) {
                    return arguments.length
                      ? ((e = 'function' == typeof t ? t : Mn(+t)), i)
                      : e;
                  }),
                  (i.context = function (t) {
                    return arguments.length
                      ? ((r = null == t ? null : t), i)
                      : r;
                  }),
                  i
                );
              })()
                .type(r)
                .size(
                  (function (t, e, r) {
                    if ('area' === e) return t;
                    switch (r) {
                      case 'cross':
                        return (5 * t * t) / 9;
                      case 'diamond':
                        return (0.5 * t * t) / Math.sqrt(3);
                      case 'square':
                        return t * t;
                      case 'star':
                        var n = 18 * Ui;
                        return (
                          1.25 *
                          t *
                          t *
                          (Math.tan(n) -
                            Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
                        );
                      case 'triangle':
                        return (Math.sqrt(3) * t * t) / 4;
                      case 'wye':
                        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                      default:
                        return (Math.PI * t * t) / 4;
                    }
                  })(c, l, o),
                )),
              n()),
          }),
        )
      : null;
  };
function Wi(t) {
  return (Wi =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    qi.apply(this, arguments)
  );
}
function Xi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Zi(n.key), n);
  }
}
function Vi(t, e) {
  return (Vi = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function Hi(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = Yi(t);
    if (e) {
      var i = Yi(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === Wi(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      })(t);
    })(this, r);
  };
}
function Yi(t) {
  return (Yi = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function Ki(t, e, r) {
  return (
    (e = Zi(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Zi(t) {
  var e = (function (t, e) {
    if ('object' !== Wi(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== Wi(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === Wi(e) ? e : String(e);
}
Fi.registerSymbol = function (t, e) {
  $i['symbol'.concat(En(t))] = e;
};
var Ji = 32,
  Qi = (function (r) {
    !(function (t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && Vi(t, e);
    })(c, t.PureComponent);
    var n,
      i,
      o,
      a = Hi(c);
    function c() {
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, c),
        a.apply(this, arguments)
      );
    }
    return (
      (n = c),
      (i = [
        {
          key: 'renderIcon',
          value: function (t) {
            var r = this.props.inactiveColor,
              n = 16,
              i = Ji / 6,
              o = Ji / 3,
              a = t.inactive ? r : t.color;
            if ('plainline' === t.type)
              return e.createElement('line', {
                strokeWidth: 4,
                fill: 'none',
                stroke: a,
                strokeDasharray: t.payload.strokeDasharray,
                x1: 0,
                y1: n,
                x2: Ji,
                y2: n,
                className: 'recharts-legend-icon',
              });
            if ('line' === t.type)
              return e.createElement('path', {
                strokeWidth: 4,
                fill: 'none',
                stroke: a,
                d: 'M0,'
                  .concat(n, 'h')
                  .concat(o, '\n            A')
                  .concat(i, ',')
                  .concat(i, ',0,1,1,')
                  .concat(2 * o, ',')
                  .concat(n, '\n            H')
                  .concat(Ji, 'M')
                  .concat(2 * o, ',')
                  .concat(n, '\n            A')
                  .concat(i, ',')
                  .concat(i, ',0,1,1,')
                  .concat(o, ',')
                  .concat(n),
                className: 'recharts-legend-icon',
              });
            if ('rect' === t.type)
              return e.createElement('path', {
                stroke: 'none',
                fill: a,
                d: 'M0,'
                  .concat(4, 'h')
                  .concat(Ji, 'v')
                  .concat(24, 'h')
                  .concat(-32, 'z'),
                className: 'recharts-legend-icon',
              });
            if (e.isValidElement(t.legendIcon)) {
              var c = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? Xi(Object(r), !0).forEach(function (e) {
                        Ki(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : Xi(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      });
                }
                return t;
              })({}, t);
              return delete c.legendIcon, e.cloneElement(t.legendIcon, c);
            }
            return e.createElement(Fi, {
              fill: a,
              cx: n,
              cy: n,
              size: Ji,
              sizeType: 'diameter',
              type: t.type,
            });
          },
        },
        {
          key: 'renderItems',
          value: function () {
            var t = this,
              r = this.props,
              n = r.payload,
              i = r.iconSize,
              o = r.layout,
              a = r.formatter,
              c = r.inactiveColor,
              u = { x: 0, y: 0, width: Ji, height: Ji },
              l = {
                display: 'horizontal' === o ? 'inline-block' : 'block',
                marginRight: 10,
              },
              s = {
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: 4,
              };
            return n.map(function (r, n) {
              var o,
                f = r.formatter || a,
                p = B(
                  (Ki(
                    (o = { 'recharts-legend-item': !0 }),
                    'legend-item-'.concat(n),
                    !0,
                  ),
                  Ki(o, 'inactive', r.inactive),
                  o),
                );
              if ('none' === r.type) return null;
              var h = K(r.value) ? null : r.value;
              rn(
                !K(r.value),
                'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
              );
              var d = r.inactive ? c : r.color;
              return e.createElement(
                'li',
                qi(
                  { className: p, style: l, key: 'legend-item-'.concat(n) },
                  Er(t.props, r, n),
                ),
                e.createElement(
                  Zr,
                  { width: i, height: i, viewBox: u, style: s },
                  t.renderIcon(r),
                ),
                e.createElement(
                  'span',
                  {
                    className: 'recharts-legend-item-text',
                    style: { color: d },
                  },
                  f ? f(h, r, n) : h,
                ),
              );
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.props,
              r = t.payload,
              n = t.layout,
              i = t.align;
            if (!r || !r.length) return null;
            var o = {
              padding: 0,
              margin: 0,
              textAlign: 'horizontal' === n ? i : 'left',
            };
            return e.createElement(
              'ul',
              { className: 'recharts-default-legend', style: o },
              this.renderItems(),
            );
          },
        },
      ]),
      i && Gi(n.prototype, i),
      o && Gi(n, o),
      Object.defineProperty(n, 'prototype', { writable: !1 }),
      c
    );
  })();
Ki(Qi, 'displayName', 'Legend'),
  Ki(Qi, 'defaultProps', {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    inactiveColor: '#ccc',
  });
var to = Yt;
var eo = Yt,
  ro = Kt,
  no = pe,
  io = 200;
var oo = Yt,
  ao = function () {
    (this.__data__ = new to()), (this.size = 0);
  },
  co = function (t) {
    var e = this.__data__,
      r = e.delete(t);
    return (this.size = e.size), r;
  },
  uo = function (t) {
    return this.__data__.get(t);
  },
  lo = function (t) {
    return this.__data__.has(t);
  },
  so = function (t, e) {
    var r = this.__data__;
    if (r instanceof eo) {
      var n = r.__data__;
      if (!ro || n.length < io - 1)
        return n.push([t, e]), (this.size = ++r.size), this;
      r = this.__data__ = new no(n);
    }
    return r.set(t, e), (this.size = r.size), this;
  };
function fo(t) {
  var e = (this.__data__ = new oo(t));
  this.size = e.size;
}
(fo.prototype.clear = ao),
  (fo.prototype.delete = co),
  (fo.prototype.get = uo),
  (fo.prototype.has = lo),
  (fo.prototype.set = so);
var po = fo,
  ho = '__lodash_hash_undefined__';
var yo = pe,
  vo = function (t) {
    return this.__data__.set(t, ho), this;
  },
  mo = function (t) {
    return this.__data__.has(t);
  };
function go(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.__data__ = new yo(); ++e < r; ) this.add(t[e]);
}
(go.prototype.add = go.prototype.push = vo), (go.prototype.has = mo);
var bo = go;
var xo = function (t, e) {
  for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t)) return !0;
  return !1;
};
var wo = function (t, e) {
    return t.has(e);
  },
  Oo = bo,
  So = xo,
  jo = wo,
  Ao = 1,
  Po = 2;
var ko = function (t, e, r, n, i, o) {
  var a = r & Ao,
    c = t.length,
    u = e.length;
  if (c != u && !(a && u > c)) return !1;
  var l = o.get(t),
    s = o.get(e);
  if (l && s) return l == e && s == t;
  var f = -1,
    p = !0,
    h = r & Po ? new Oo() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < c; ) {
    var d = t[f],
      y = e[f];
    if (n) var v = a ? n(y, d, f, e, t, o) : n(d, y, f, t, e, o);
    if (void 0 !== v) {
      if (v) continue;
      p = !1;
      break;
    }
    if (h) {
      if (
        !So(e, function (t, e) {
          if (!jo(h, e) && (d === t || i(d, t, r, n, o))) return h.push(e);
        })
      ) {
        p = !1;
        break;
      }
    } else if (d !== y && !i(d, y, r, n, o)) {
      p = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), p;
};
var Eo = function (t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (t) {
        r[++e] = t;
      }),
      r
    );
  },
  Mo = y.Uint8Array,
  _o = It,
  To = ko,
  Co = function (t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (t, n) {
        r[++e] = [n, t];
      }),
      r
    );
  },
  Do = Eo,
  No = 1,
  Io = 2,
  Bo = '[object Boolean]',
  Ro = '[object Date]',
  Lo = '[object Error]',
  zo = '[object Map]',
  $o = '[object Number]',
  Uo = '[object RegExp]',
  Fo = '[object Set]',
  Wo = '[object String]',
  qo = '[object Symbol]',
  Xo = '[object ArrayBuffer]',
  Go = '[object DataView]',
  Vo = b ? b.prototype : void 0,
  Ho = Vo ? Vo.valueOf : void 0;
var Yo = function (t, e, r, n, i, o, a) {
    switch (r) {
      case Go:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
          return !1;
        (t = t.buffer), (e = e.buffer);
      case Xo:
        return !(t.byteLength != e.byteLength || !o(new Mo(t), new Mo(e)));
      case Bo:
      case Ro:
      case $o:
        return _o(+t, +e);
      case Lo:
        return t.name == e.name && t.message == e.message;
      case Uo:
      case Wo:
        return t == e + '';
      case zo:
        var c = Co;
      case Fo:
        var u = n & No;
        if ((c || (c = Do), t.size != e.size && !u)) return !1;
        var l = a.get(t);
        if (l) return l == e;
        (n |= Io), a.set(t, e);
        var s = To(c(t), c(e), n, i, o, a);
        return a.delete(t), s;
      case qo:
        if (Ho) return Ho.call(t) == Ho.call(e);
    }
    return !1;
  },
  Ko = x,
  Zo = p;
var Jo = function (t, e, r) {
  var n = e(t);
  return Zo(t) ? n : Ko(n, r(t));
};
var Qo = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n; ) {
      var a = t[r];
      e(a, r, t) && (o[i++] = a);
    }
    return o;
  },
  ta = function () {
    return [];
  },
  ea = Object.prototype.propertyIsEnumerable,
  ra = Object.getOwnPropertySymbols,
  na = ra
    ? function (t) {
        return null == t
          ? []
          : ((t = Object(t)),
            Qo(ra(t), function (e) {
              return ea.call(t, e);
            }));
      }
    : ta;
var ia,
  oa,
  aa,
  ca,
  ua,
  la,
  sa,
  fa,
  pa = function (t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  },
  ha = {};
(ia = {
  get exports() {
    return ha;
  },
  set exports(t) {
    ha = t;
  },
}),
  (aa = y),
  (ca = function () {
    return !1;
  }),
  (ua = (oa = ha) && !oa.nodeType && oa),
  (la = ua && ia && !ia.nodeType && ia),
  (sa = la && la.exports === ua ? aa.Buffer : void 0),
  (fa = (sa ? sa.isBuffer : void 0) || ca),
  (ia.exports = fa);
var da = 9007199254740991,
  ya = /^(?:0|[1-9]\d*)$/;
var va = function (t, e) {
    var r = typeof t;
    return (
      !!(e = null == e ? da : e) &&
      ('number' == r || ('symbol' != r && ya.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  },
  ma = 9007199254740991;
var ga = function (t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= ma;
  },
  ba = d,
  xa = ga,
  wa = m,
  Oa = {};
(Oa['[object Float32Array]'] =
  Oa['[object Float64Array]'] =
  Oa['[object Int8Array]'] =
  Oa['[object Int16Array]'] =
  Oa['[object Int32Array]'] =
  Oa['[object Uint8Array]'] =
  Oa['[object Uint8ClampedArray]'] =
  Oa['[object Uint16Array]'] =
  Oa['[object Uint32Array]'] =
    !0),
  (Oa['[object Arguments]'] =
    Oa['[object Array]'] =
    Oa['[object ArrayBuffer]'] =
    Oa['[object Boolean]'] =
    Oa['[object DataView]'] =
    Oa['[object Date]'] =
    Oa['[object Error]'] =
    Oa['[object Function]'] =
    Oa['[object Map]'] =
    Oa['[object Number]'] =
    Oa['[object Object]'] =
    Oa['[object RegExp]'] =
    Oa['[object Set]'] =
    Oa['[object String]'] =
    Oa['[object WeakMap]'] =
      !1);
var Sa = function (t) {
    return wa(t) && xa(t.length) && !!Oa[ba(t)];
  },
  ja = O,
  Aa = w && w.isTypedArray,
  Pa = Aa ? ja(Aa) : Sa,
  ka = pa,
  Ea = S,
  Ma = p,
  _a = ha,
  Ta = va,
  Ca = Pa,
  Da = Object.prototype.hasOwnProperty;
var Na = function (t, e) {
    var r = Ma(t),
      n = !r && Ea(t),
      i = !r && !n && _a(t),
      o = !r && !n && !i && Ca(t),
      a = r || n || i || o,
      c = a ? ka(t.length, String) : [],
      u = c.length;
    for (var l in t)
      (!e && !Da.call(t, l)) ||
        (a &&
          ('length' == l ||
            (i && ('offset' == l || 'parent' == l)) ||
            (o && ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
            Ta(l, u))) ||
        c.push(l);
    return c;
  },
  Ia = Object.prototype;
var Ba = function (t) {
  var e = t && t.constructor;
  return t === (('function' == typeof e && e.prototype) || Ia);
};
var Ra = function (t, e) {
    return function (r) {
      return t(e(r));
    };
  },
  La = Ra(Object.keys, Object),
  za = Ba,
  $a = La,
  Ua = Object.prototype.hasOwnProperty;
var Fa = K,
  Wa = ga;
var qa = function (t) {
    return null != t && Wa(t.length) && !Fa(t);
  },
  Xa = Na,
  Ga = function (t) {
    if (!za(t)) return $a(t);
    var e = [];
    for (var r in Object(t)) Ua.call(t, r) && 'constructor' != r && e.push(r);
    return e;
  },
  Va = qa;
var Ha = function (t) {
    return Va(t) ? Xa(t) : Ga(t);
  },
  Ya = Jo,
  Ka = na,
  Za = Ha;
var Ja = function (t) {
    return Ya(t, Za, Ka);
  },
  Qa = 1,
  tc = Object.prototype.hasOwnProperty;
var ec = function (t, e, r, n, i, o) {
    var a = r & Qa,
      c = Ja(t),
      u = c.length;
    if (u != Ja(e).length && !a) return !1;
    for (var l = u; l--; ) {
      var s = c[l];
      if (!(a ? s in e : tc.call(e, s))) return !1;
    }
    var f = o.get(t),
      p = o.get(e);
    if (f && p) return f == e && p == t;
    var h = !0;
    o.set(t, e), o.set(e, t);
    for (var d = a; ++l < u; ) {
      var y = t[(s = c[l])],
        v = e[s];
      if (n) var m = a ? n(v, y, s, e, t, o) : n(y, v, s, t, e, o);
      if (!(void 0 === m ? y === v || i(y, v, r, n, o) : m)) {
        h = !1;
        break;
      }
      d || (d = 'constructor' == s);
    }
    if (h && !d) {
      var g = t.constructor,
        b = e.constructor;
      g == b ||
        !('constructor' in t) ||
        !('constructor' in e) ||
        ('function' == typeof g &&
          g instanceof g &&
          'function' == typeof b &&
          b instanceof b) ||
        (h = !1);
    }
    return o.delete(t), o.delete(e), h;
  },
  rc = dt(y, 'DataView'),
  nc = dt(y, 'Promise'),
  ic = dt(y, 'Set'),
  oc = rc,
  ac = Kt,
  cc = nc,
  uc = ic,
  lc = dt(y, 'WeakMap'),
  sc = d,
  fc = et,
  pc = '[object Map]',
  hc = '[object Promise]',
  dc = '[object Set]',
  yc = '[object WeakMap]',
  vc = '[object DataView]',
  mc = fc(oc),
  gc = fc(ac),
  bc = fc(cc),
  xc = fc(uc),
  wc = fc(lc),
  Oc = sc;
((oc && Oc(new oc(new ArrayBuffer(1))) != vc) ||
  (ac && Oc(new ac()) != pc) ||
  (cc && Oc(cc.resolve()) != hc) ||
  (uc && Oc(new uc()) != dc) ||
  (lc && Oc(new lc()) != yc)) &&
  (Oc = function (t) {
    var e = sc(t),
      r = '[object Object]' == e ? t.constructor : void 0,
      n = r ? fc(r) : '';
    if (n)
      switch (n) {
        case mc:
          return vc;
        case gc:
          return pc;
        case bc:
          return hc;
        case xc:
          return dc;
        case wc:
          return yc;
      }
    return e;
  });
var Sc = po,
  jc = ko,
  Ac = Yo,
  Pc = ec,
  kc = Oc,
  Ec = p,
  Mc = ha,
  _c = Pa,
  Tc = 1,
  Cc = '[object Arguments]',
  Dc = '[object Array]',
  Nc = '[object Object]',
  Ic = Object.prototype.hasOwnProperty;
var Bc = function (t, e, r, n, i, o) {
    var a = Ec(t),
      c = Ec(e),
      u = a ? Dc : kc(t),
      l = c ? Dc : kc(e),
      s = (u = u == Cc ? Nc : u) == Nc,
      f = (l = l == Cc ? Nc : l) == Nc,
      p = u == l;
    if (p && Mc(t)) {
      if (!Mc(e)) return !1;
      (a = !0), (s = !1);
    }
    if (p && !s)
      return (
        o || (o = new Sc()),
        a || _c(t) ? jc(t, e, r, n, i, o) : Ac(t, e, u, r, n, i, o)
      );
    if (!(r & Tc)) {
      var h = s && Ic.call(t, '__wrapped__'),
        d = f && Ic.call(e, '__wrapped__');
      if (h || d) {
        var y = h ? t.value() : t,
          v = d ? e.value() : e;
        return o || (o = new Sc()), i(y, v, r, n, o);
      }
    }
    return !!p && (o || (o = new Sc()), Pc(t, e, r, n, i, o));
  },
  Rc = m;
var Lc = function t(e, r, n, i, o) {
    return (
      e === r ||
      (null == e || null == r || (!Rc(e) && !Rc(r))
        ? e != e && r != r
        : Bc(e, r, n, i, t, o))
    );
  },
  zc = po,
  $c = Lc,
  Uc = 1,
  Fc = 2;
var Wc = F;
var qc = function (t) {
    return t == t && !Wc(t);
  },
  Xc = qc,
  Gc = Ha;
var Vc = function (t, e) {
    return function (r) {
      return null != r && r[t] === e && (void 0 !== e || t in Object(r));
    };
  },
  Hc = function (t, e, r, n) {
    var i = r.length,
      o = i,
      a = !n;
    if (null == t) return !o;
    for (t = Object(t); i--; ) {
      var c = r[i];
      if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
    }
    for (; ++i < o; ) {
      var u = (c = r[i])[0],
        l = t[u],
        s = c[1];
      if (a && c[2]) {
        if (void 0 === l && !(u in t)) return !1;
      } else {
        var f = new zc();
        if (n) var p = n(l, s, u, t, e, f);
        if (!(void 0 === p ? $c(s, l, Uc | Fc, n, f) : p)) return !1;
      }
    }
    return !0;
  },
  Yc = function (t) {
    for (var e = Gc(t), r = e.length; r--; ) {
      var n = e[r],
        i = t[n];
      e[r] = [n, i, Xc(i)];
    }
    return e;
  },
  Kc = Vc;
var Zc = Ae,
  Jc = S,
  Qc = p,
  tu = va,
  eu = ga,
  ru = Ee;
var nu = function (t, e) {
    return null != t && e in Object(t);
  },
  iu = function (t, e, r) {
    for (var n = -1, i = (e = Zc(e, t)).length, o = !1; ++n < i; ) {
      var a = ru(e[n]);
      if (!(o = null != t && r(t, a))) break;
      t = t[a];
    }
    return o || ++n != i
      ? o
      : !!(i = null == t ? 0 : t.length) &&
          eu(i) &&
          tu(a, i) &&
          (Qc(t) || Jc(t));
  };
var ou = Lc,
  au = De,
  cu = function (t, e) {
    return null != t && iu(t, e, nu);
  },
  uu = U,
  lu = qc,
  su = Vc,
  fu = Ee,
  pu = 1,
  hu = 2;
var du = function (t) {
  return t;
};
var yu = Te;
var vu = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t];
    };
  },
  mu = function (t) {
    return function (e) {
      return yu(e, t);
    };
  },
  gu = U,
  bu = Ee;
var xu = function (t) {
    var e = Yc(t);
    return 1 == e.length && e[0][2]
      ? Kc(e[0][0], e[0][1])
      : function (r) {
          return r === t || Hc(r, t, e);
        };
  },
  wu = function (t, e) {
    return uu(t) && lu(e)
      ? su(fu(t), e)
      : function (r) {
          var n = au(r, t);
          return void 0 === n && n === e ? cu(r, t) : ou(e, n, pu | hu);
        };
  },
  Ou = du,
  Su = p,
  ju = function (t) {
    return gu(t) ? vu(bu(t)) : mu(t);
  };
var Au = function (t) {
  return 'function' == typeof t
    ? t
    : null == t
    ? Ou
    : 'object' == typeof t
    ? Su(t)
      ? wu(t[0], t[1])
      : xu(t)
    : ju(t);
};
var Pu = function (t, e, r, n) {
  for (var i = t.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
    if (e(t[o], o, t)) return o;
  return -1;
};
var ku = Pu,
  Eu = function (t) {
    return t != t;
  },
  Mu = function (t, e, r) {
    for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
    return -1;
  };
var _u = function (t, e, r) {
  return e == e ? Mu(t, e, r) : ku(t, Eu, r);
};
var Tu = function (t, e) {
  return !!(null == t ? 0 : t.length) && _u(t, e, 0) > -1;
};
var Cu = function (t, e, r) {
  for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
    if (r(e, t[n])) return !0;
  return !1;
};
var Du = ic,
  Nu = function () {},
  Iu =
    Du && 1 / Eo(new Du([, -0]))[1] == 1 / 0
      ? function (t) {
          return new Du(t);
        }
      : Nu,
  Bu = bo,
  Ru = Tu,
  Lu = Cu,
  zu = wo,
  $u = Iu,
  Uu = Eo,
  Fu = 200;
var Wu = Au,
  qu = function (t, e, r) {
    var n = -1,
      i = Ru,
      o = t.length,
      a = !0,
      c = [],
      u = c;
    if (r) (a = !1), (i = Lu);
    else if (o >= Fu) {
      var l = e ? null : $u(t);
      if (l) return Uu(l);
      (a = !1), (i = zu), (u = new Bu());
    } else u = e ? [] : c;
    t: for (; ++n < o; ) {
      var s = t[n],
        f = e ? e(s) : s;
      if (((s = r || 0 !== s ? s : 0), a && f == f)) {
        for (var p = u.length; p--; ) if (u[p] === f) continue t;
        e && u.push(f), c.push(s);
      } else i(u, f, r) || (u !== c && u.push(f), c.push(s));
    }
    return c;
  };
const Xu = function (t, e) {
  return t && t.length ? qu(t, Wu(e)) : [];
};
function Gu(t, e, r) {
  return !0 === e ? Xu(t, r) : K(e) ? Xu(t, e) : t;
}
function Vu(t) {
  return (Vu =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Hu = ['ref'];
function Yu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ku(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Yu(Object(r), !0).forEach(function (e) {
          rl(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Yu(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Zu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, nl(n.key), n);
  }
}
function Ju(t, e) {
  return (Ju = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function Qu(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = el(t);
    if (e) {
      var i = el(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === Vu(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return tl(t);
    })(this, r);
  };
}
function tl(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function el(t) {
  return (el = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function rl(t, e, r) {
  return (
    (e = nl(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function nl(t) {
  var e = (function (t, e) {
    if ('object' !== Vu(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== Vu(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === Vu(e) ? e : String(e);
}
function il(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function ol(t) {
  return t.value;
}
var al = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && Ju(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = Qu(c);
  function c() {
    var t;
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, c);
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (
      rl(tl((t = a.call.apply(a, [this].concat(r)))), 'lastBoundingBox', {
        width: -1,
        height: -1,
      }),
      t
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'getWithHeight',
        value: function (t, e) {
          var r = t.props.layout;
          return 'vertical' === r && hr(t.props.height)
            ? { height: t.props.height }
            : 'horizontal' === r
            ? { width: t.props.width || e }
            : null;
        },
      },
    ]),
    (i = [
      {
        key: 'componentDidMount',
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: 'getBBox',
        value: function () {
          return this.wrapperNode && this.wrapperNode.getBoundingClientRect
            ? this.wrapperNode.getBoundingClientRect()
            : null;
        },
      },
      {
        key: 'updateBBox',
        value: function () {
          var t = this.props.onBBoxUpdate;
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var e = this.wrapperNode.getBoundingClientRect();
            (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
              Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
              ((this.lastBoundingBox.width = e.width),
              (this.lastBoundingBox.height = e.height),
              t && t(e));
          } else
            (-1 === this.lastBoundingBox.width &&
              -1 === this.lastBoundingBox.height) ||
              ((this.lastBoundingBox.width = -1),
              (this.lastBoundingBox.height = -1),
              t && t(null));
        },
      },
      {
        key: 'getBBoxSnapshot',
        value: function () {
          return this.lastBoundingBox.width >= 0 &&
            this.lastBoundingBox.height >= 0
            ? Ku({}, this.lastBoundingBox)
            : { width: 0, height: 0 };
        },
      },
      {
        key: 'getDefaultPosition',
        value: function (t) {
          var e,
            r,
            n = this.props,
            i = n.layout,
            o = n.align,
            a = n.verticalAlign,
            c = n.margin,
            u = n.chartWidth,
            l = n.chartHeight;
          return (
            (t &&
              ((void 0 !== t.left && null !== t.left) ||
                (void 0 !== t.right && null !== t.right))) ||
              (e =
                'center' === o && 'vertical' === i
                  ? { left: ((u || 0) - this.getBBoxSnapshot().width) / 2 }
                  : 'right' === o
                  ? { right: (c && c.right) || 0 }
                  : { left: (c && c.left) || 0 }),
            (t &&
              ((void 0 !== t.top && null !== t.top) ||
                (void 0 !== t.bottom && null !== t.bottom))) ||
              (r =
                'middle' === a
                  ? { top: ((l || 0) - this.getBBoxSnapshot().height) / 2 }
                  : 'bottom' === a
                  ? { bottom: (c && c.bottom) || 0 }
                  : { top: (c && c.top) || 0 }),
            Ku(Ku({}, e), r)
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            r = this.props,
            n = r.content,
            i = r.width,
            o = r.height,
            a = r.wrapperStyle,
            c = r.payloadUniqBy,
            u = r.payload,
            l = Ku(
              Ku(
                {
                  position: 'absolute',
                  width: i || 'auto',
                  height: o || 'auto',
                },
                this.getDefaultPosition(a),
              ),
              a,
            );
          return e.createElement(
            'div',
            {
              className: 'recharts-legend-wrapper',
              style: l,
              ref: function (e) {
                t.wrapperNode = e;
              },
            },
            (function (t, r) {
              if (e.isValidElement(t)) return e.cloneElement(t, r);
              if ('function' == typeof t) return e.createElement(t, r);
              r.ref;
              var n = il(r, Hu);
              return e.createElement(Qi, n);
            })(n, Ku(Ku({}, this.props), {}, { payload: Gu(u, c, ol) })),
          );
        },
      },
    ]) && Zu(n.prototype, i),
    o && Zu(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
rl(al, 'displayName', 'Legend'),
  rl(al, 'defaultProps', {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
  });
var cl = (function (t) {
    return function (e, r, n) {
      for (var i = -1, o = Object(e), a = n(e), c = a.length; c--; ) {
        var u = a[t ? c : ++i];
        if (!1 === r(o[u], u, o)) break;
      }
      return e;
    };
  })(),
  ul = Ha;
var ll = function (t, e) {
    return t && cl(t, e, ul);
  },
  sl = qa;
var fl = (function (t, e) {
    return function (r, n) {
      if (null == r) return r;
      if (!sl(r)) return t(r, n);
      for (
        var i = r.length, o = e ? i : -1, a = Object(r);
        (e ? o-- : ++o < i) && !1 !== n(a[o], o, a);

      );
      return r;
    };
  })(ll),
  pl = fl,
  hl = qa;
var dl = function (t, e) {
  var r = -1,
    n = hl(t) ? Array(t.length) : [];
  return (
    pl(t, function (t, i, o) {
      n[++r] = e(t, i, o);
    }),
    n
  );
};
var yl = h;
var vl = function (t, e) {
  if (t !== e) {
    var r = void 0 !== t,
      n = null === t,
      i = t == t,
      o = yl(t),
      a = void 0 !== e,
      c = null === e,
      u = e == e,
      l = yl(e);
    if (
      (!c && !l && !o && t > e) ||
      (o && a && u && !c && !l) ||
      (n && a && u) ||
      (!r && u) ||
      !i
    )
      return 1;
    if (
      (!n && !o && !l && t < e) ||
      (l && r && i && !n && !o) ||
      (c && r && i) ||
      (!a && i) ||
      !u
    )
      return -1;
  }
  return 0;
};
var ml = j,
  gl = Te,
  bl = Au,
  xl = dl,
  wl = function (t, e) {
    var r = t.length;
    for (t.sort(e); r--; ) t[r] = t[r].value;
    return t;
  },
  Ol = O,
  Sl = function (t, e, r) {
    for (
      var n = -1, i = t.criteria, o = e.criteria, a = i.length, c = r.length;
      ++n < a;

    ) {
      var u = vl(i[n], o[n]);
      if (u) return n >= c ? u : u * ('desc' == r[n] ? -1 : 1);
    }
    return t.index - e.index;
  },
  jl = du,
  Al = p;
var Pl = function (t, e, r) {
  e = e.length
    ? ml(e, function (t) {
        return Al(t)
          ? function (e) {
              return gl(e, 1 === t.length ? t[0] : t);
            }
          : t;
      })
    : [jl];
  var n = -1;
  e = ml(e, Ol(bl));
  var i = xl(t, function (t, r, i) {
    return {
      criteria: ml(e, function (e) {
        return e(t);
      }),
      index: ++n,
      value: t,
    };
  });
  return wl(i, function (t, e) {
    return Sl(t, e, r);
  });
};
var kl = function (t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  },
  El = Math.max;
var Ml = function (t, e, r) {
  return (
    (e = El(void 0 === e ? t.length - 1 : e, 0)),
    function () {
      for (
        var n = arguments, i = -1, o = El(n.length - e, 0), a = Array(o);
        ++i < o;

      )
        a[i] = n[e + i];
      i = -1;
      for (var c = Array(e + 1); ++i < e; ) c[i] = n[i];
      return (c[e] = r(a)), kl(t, this, c);
    }
  );
};
var _l = function (t) {
    return function () {
      return t;
    };
  },
  Tl = dt,
  Cl = (function () {
    try {
      var t = Tl(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (e) {}
  })(),
  Dl = _l,
  Nl = Cl,
  Il = Nl
    ? function (t, e) {
        return Nl(t, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: Dl(e),
          writable: !0,
        });
      }
    : du,
  Bl = 800,
  Rl = 16,
  Ll = Date.now;
var zl = (function (t) {
    var e = 0,
      r = 0;
    return function () {
      var n = Ll(),
        i = Rl - (n - r);
      if (((r = n), i > 0)) {
        if (++e >= Bl) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  })(Il),
  $l = du,
  Ul = Ml,
  Fl = zl;
var Wl = It,
  ql = qa,
  Xl = va,
  Gl = F;
var Vl = function (t, e, r) {
    if (!Gl(r)) return !1;
    var n = typeof e;
    return (
      !!('number' == n ? ql(r) && Xl(e, r.length) : 'string' == n && e in r) &&
      Wl(r[e], t)
    );
  },
  Hl = A,
  Yl = Pl,
  Kl = Vl,
  Zl = (function (t, e) {
    return Fl(Ul(t, e, $l), t + '');
  })(function (t, e) {
    if (null == t) return [];
    var r = e.length;
    return (
      r > 1 && Kl(t, e[0], e[1])
        ? (e = [])
        : r > 2 && Kl(e[0], e[1], e[2]) && (e = [e[0]]),
      Yl(t, Hl(e, 1), [])
    );
  });
function Jl(t) {
  return (Jl =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Ql(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return ts(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return ts(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function ts(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function es(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function rs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? es(Object(r), !0).forEach(function (e) {
          ns(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : es(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function ns(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Jl(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Jl(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Jl(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function is(t) {
  return Array.isArray(t) && dr(t[0]) && dr(t[1]) ? t.join(' ~ ') : t;
}
var os = function (t) {
    var r = t.separator,
      n = void 0 === r ? ' : ' : r,
      i = t.contentStyle,
      o = void 0 === i ? {} : i,
      a = t.itemStyle,
      c = void 0 === a ? {} : a,
      u = t.labelStyle,
      l = void 0 === u ? {} : u,
      s = t.payload,
      f = t.formatter,
      p = t.itemSorter,
      h = t.wrapperClassName,
      d = t.labelClassName,
      y = t.label,
      v = t.labelFormatter,
      m = rs(
        {
          margin: 0,
          padding: 10,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          whiteSpace: 'nowrap',
        },
        o,
      ),
      g = rs({ margin: 0 }, l),
      b = !Ne(y),
      x = b ? y : '',
      w = B('recharts-default-tooltip', h),
      O = B('recharts-tooltip-label', d);
    return (
      b && v && null != s && (x = v(y, s)),
      e.createElement(
        'div',
        { className: w, style: m },
        e.createElement(
          'p',
          { className: O, style: g },
          e.isValidElement(x) ? x : ''.concat(x),
        ),
        (function () {
          if (s && s.length) {
            var t = (p ? Zl(s, p) : s).map(function (t, r) {
              if ('none' === t.type) return null;
              var i = rs(
                  {
                    display: 'block',
                    paddingTop: 4,
                    paddingBottom: 4,
                    color: t.color || '#000',
                  },
                  c,
                ),
                o = t.formatter || f || is,
                a = t.value,
                u = t.name,
                l = a,
                p = u;
              if (o && null != l && null != p) {
                var h = o(a, u, t, r, s);
                if (Array.isArray(h)) {
                  var d = Ql(h, 2);
                  (l = d[0]), (p = d[1]);
                } else l = h;
              }
              return e.createElement(
                'li',
                {
                  className: 'recharts-tooltip-item',
                  key: 'tooltip-item-'.concat(r),
                  style: i,
                },
                dr(p)
                  ? e.createElement(
                      'span',
                      { className: 'recharts-tooltip-item-name' },
                      p,
                    )
                  : null,
                dr(p)
                  ? e.createElement(
                      'span',
                      { className: 'recharts-tooltip-item-separator' },
                      n,
                    )
                  : null,
                e.createElement(
                  'span',
                  { className: 'recharts-tooltip-item-value' },
                  l,
                ),
                e.createElement(
                  'span',
                  { className: 'recharts-tooltip-item-unit' },
                  t.unit || '',
                ),
              );
            });
            return e.createElement(
              'ul',
              {
                className: 'recharts-tooltip-item-list',
                style: { padding: 0, margin: 0 },
              },
              t,
            );
          }
          return null;
        })(),
      )
    );
  },
  as = Object.getOwnPropertyNames,
  cs = Object.getOwnPropertySymbols,
  us = Object.prototype.hasOwnProperty;
function ls(t, e) {
  return function (r, n, i) {
    return t(r, n, i) && e(r, n, i);
  };
}
function ss(t) {
  return function (e, r, n) {
    if (!e || !r || 'object' != typeof e || 'object' != typeof r)
      return t(e, r, n);
    var i = n.cache,
      o = i.get(e),
      a = i.get(r);
    if (o && a) return o === r && a === e;
    i.set(e, r), i.set(r, e);
    var c = t(e, r, n);
    return i.delete(e), i.delete(r), c;
  };
}
function fs(t) {
  return as(t).concat(cs(t));
}
var ps =
  Object.hasOwn ||
  function (t, e) {
    return us.call(t, e);
  };
function hs(t, e) {
  return t || e ? t === e : t === e || (t != t && e != e);
}
var ds = '_owner',
  ys = Object.getOwnPropertyDescriptor,
  vs = Object.keys;
function ms(t, e, r) {
  var n = t.length;
  if (e.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
  return !0;
}
function gs(t, e) {
  return hs(t.getTime(), e.getTime());
}
function bs(t, e, r) {
  if (t.size !== e.size) return !1;
  for (var n, i, o = {}, a = t.entries(), c = 0; (n = a.next()) && !n.done; ) {
    for (var u = e.entries(), l = !1, s = 0; (i = u.next()) && !i.done; ) {
      var f = n.value,
        p = f[0],
        h = f[1],
        d = i.value,
        y = d[0],
        v = d[1];
      l ||
        o[s] ||
        !(l = r.equals(p, y, c, s, t, e, r) && r.equals(h, v, p, y, t, e, r)) ||
        (o[s] = !0),
        s++;
    }
    if (!l) return !1;
    c++;
  }
  return !0;
}
function xs(t, e, r) {
  var n,
    i = vs(t),
    o = i.length;
  if (vs(e).length !== o) return !1;
  for (; o-- > 0; ) {
    if (
      (n = i[o]) === ds &&
      (t.$$typeof || e.$$typeof) &&
      t.$$typeof !== e.$$typeof
    )
      return !1;
    if (!ps(e, n) || !r.equals(t[n], e[n], n, n, t, e, r)) return !1;
  }
  return !0;
}
function ws(t, e, r) {
  var n,
    i,
    o,
    a = fs(t),
    c = a.length;
  if (fs(e).length !== c) return !1;
  for (; c-- > 0; ) {
    if (
      (n = a[c]) === ds &&
      (t.$$typeof || e.$$typeof) &&
      t.$$typeof !== e.$$typeof
    )
      return !1;
    if (!ps(e, n)) return !1;
    if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
    if (
      ((i = ys(t, n)),
      (o = ys(e, n)),
      (i || o) &&
        (!i ||
          !o ||
          i.configurable !== o.configurable ||
          i.enumerable !== o.enumerable ||
          i.writable !== o.writable))
    )
      return !1;
  }
  return !0;
}
function Os(t, e) {
  return hs(t.valueOf(), e.valueOf());
}
function Ss(t, e) {
  return t.source === e.source && t.flags === e.flags;
}
function js(t, e, r) {
  if (t.size !== e.size) return !1;
  for (var n, i, o = {}, a = t.values(); (n = a.next()) && !n.done; ) {
    for (var c = e.values(), u = !1, l = 0; (i = c.next()) && !i.done; )
      u ||
        o[l] ||
        !(u = r.equals(n.value, i.value, n.value, i.value, t, e, r)) ||
        (o[l] = !0),
        l++;
    if (!u) return !1;
  }
  return !0;
}
function As(t, e) {
  var r = t.length;
  if (e.length !== r) return !1;
  for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
  return !0;
}
var Ps = '[object Arguments]',
  ks = '[object Boolean]',
  Es = '[object Date]',
  Ms = '[object Map]',
  _s = '[object Number]',
  Ts = '[object Object]',
  Cs = '[object RegExp]',
  Ds = '[object Set]',
  Ns = '[object String]',
  Is = Array.isArray,
  Bs =
    'function' == typeof ArrayBuffer && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  Rs = Object.assign,
  Ls = Object.prototype.toString.call.bind(Object.prototype.toString);
var zs = $s();
function $s(t) {
  void 0 === t && (t = {});
  var e,
    r = t.circular,
    n = void 0 !== r && r,
    i = t.createInternalComparator,
    o = t.createState,
    a = t.strict,
    c = void 0 !== a && a,
    u = (function (t) {
      var e = t.circular,
        r = t.createCustomConfig,
        n = t.strict,
        i = {
          areArraysEqual: n ? ws : ms,
          areDatesEqual: gs,
          areMapsEqual: n ? ls(bs, ws) : bs,
          areObjectsEqual: n ? ws : xs,
          arePrimitiveWrappersEqual: Os,
          areRegExpsEqual: Ss,
          areSetsEqual: n ? ls(js, ws) : js,
          areTypedArraysEqual: n ? ws : As,
        };
      if ((r && (i = Rs({}, i, r(i))), e)) {
        var o = ss(i.areArraysEqual),
          a = ss(i.areMapsEqual),
          c = ss(i.areObjectsEqual),
          u = ss(i.areSetsEqual);
        i = Rs({}, i, {
          areArraysEqual: o,
          areMapsEqual: a,
          areObjectsEqual: c,
          areSetsEqual: u,
        });
      }
      return i;
    })(t),
    l = (function (t) {
      var e = t.areArraysEqual,
        r = t.areDatesEqual,
        n = t.areMapsEqual,
        i = t.areObjectsEqual,
        o = t.arePrimitiveWrappersEqual,
        a = t.areRegExpsEqual,
        c = t.areSetsEqual,
        u = t.areTypedArraysEqual;
      return function (t, l, s) {
        if (t === l) return !0;
        if (
          null == t ||
          null == l ||
          'object' != typeof t ||
          'object' != typeof l
        )
          return t != t && l != l;
        var f = t.constructor;
        if (f !== l.constructor) return !1;
        if (f === Object) return i(t, l, s);
        if (Is(t)) return e(t, l, s);
        if (null != Bs && Bs(t)) return u(t, l, s);
        if (f === Date) return r(t, l, s);
        if (f === RegExp) return a(t, l, s);
        if (f === Map) return n(t, l, s);
        if (f === Set) return c(t, l, s);
        var p = Ls(t);
        return p === Es
          ? r(t, l, s)
          : p === Cs
          ? a(t, l, s)
          : p === Ms
          ? n(t, l, s)
          : p === Ds
          ? c(t, l, s)
          : p === Ts
          ? 'function' != typeof t.then &&
            'function' != typeof l.then &&
            i(t, l, s)
          : p === Ps
          ? i(t, l, s)
          : (p === ks || p === _s || p === Ns) && o(t, l, s);
      };
    })(u);
  return (function (t) {
    var e = t.circular,
      r = t.comparator,
      n = t.createState,
      i = t.equals,
      o = t.strict;
    if (n)
      return function (t, a) {
        var c = n(),
          u = c.cache,
          l = void 0 === u ? (e ? new WeakMap() : void 0) : u,
          s = c.meta;
        return r(t, a, { cache: l, equals: i, meta: s, strict: o });
      };
    if (e)
      return function (t, e) {
        return r(t, e, {
          cache: new WeakMap(),
          equals: i,
          meta: void 0,
          strict: o,
        });
      };
    var a = { cache: void 0, equals: i, meta: void 0, strict: o };
    return function (t, e) {
      return r(t, e, a);
    };
  })({
    circular: n,
    comparator: l,
    createState: o,
    equals: i
      ? i(l)
      : ((e = l),
        function (t, r, n, i, o, a, c) {
          return e(t, r, c);
        }),
    strict: c,
  });
}
function Us(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = -1;
  requestAnimationFrame(function n(i) {
    r < 0 && (r = i),
      i - r > e
        ? (t(i), (r = -1))
        : (function (t) {
            'undefined' != typeof requestAnimationFrame &&
              requestAnimationFrame(t);
          })(n);
  });
}
function Fs(t) {
  return (Fs =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Ws(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return qs(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return qs(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function qs(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Xs() {
  var t = function () {
      return null;
    },
    e = !1,
    r = function r(n) {
      if (!e) {
        if (Array.isArray(n)) {
          if (!n.length) return;
          var i = Ws(n),
            o = i[0],
            a = i.slice(1);
          return 'number' == typeof o
            ? void Us(r.bind(null, a), o)
            : (r(o), void Us(r.bind(null, a)));
        }
        'object' === Fs(n) && t(n), 'function' == typeof n && n();
      }
    };
  return {
    stop: function () {
      e = !0;
    },
    start: function (t) {
      (e = !1), r(t);
    },
    subscribe: function (e) {
      return (
        (t = e),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Gs(t) {
  return (Gs =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Vs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Hs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Vs(Object(r), !0).forEach(function (e) {
          Ys(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Vs(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Ys(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Gs(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Gs(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Gs(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
$s({ strict: !0 }),
  $s({ circular: !0 }),
  $s({ circular: !0, strict: !0 }),
  $s({
    createInternalComparator: function () {
      return hs;
    },
  }),
  $s({
    strict: !0,
    createInternalComparator: function () {
      return hs;
    },
  }),
  $s({
    circular: !0,
    createInternalComparator: function () {
      return hs;
    },
  }),
  $s({
    circular: !0,
    createInternalComparator: function () {
      return hs;
    },
    strict: !0,
  });
var Ks = ['Webkit', 'Moz', 'O', 'ms'],
  Zs = ['-webkit-', '-moz-', '-o-', '-ms-'],
  Js = ['transform', 'transformOrigin', 'transition'],
  Qs = function (t) {
    return t;
  },
  tf = function (t, e) {
    return Object.keys(e).reduce(function (r, n) {
      return Hs(Hs({}, r), {}, Ys({}, n, t(n, e[n])));
    }, {});
  },
  ef = function (t) {
    return Object.keys(t).reduce(function (t, e) {
      return Hs(
        Hs({}, t),
        (function (t, e) {
          if (-1 === Js.indexOf(t)) return Ys({}, t, Number.isNaN(e) ? 0 : e);
          var r = 'transition' === t,
            n = t.replace(/(\w)/, function (t) {
              return t.toUpperCase();
            }),
            i = e;
          return Ks.reduce(function (t, o, a) {
            return (
              r &&
                (i = e.replace(
                  /(transform|transform-origin)/gim,
                  ''.concat(Zs[a], '$1'),
                )),
              Hs(Hs({}, t), {}, Ys({}, o + n, i))
            );
          }, {});
        })(e, t[e]),
      );
    }, t);
  },
  rf = function (t, e, r) {
    return t
      .map(function (t) {
        return ''
          .concat(
            ((n = t),
            n.replace(/([A-Z])/g, function (t) {
              return '-'.concat(t.toLowerCase());
            })),
            ' ',
          )
          .concat(e, 'ms ')
          .concat(r);
        var n;
      })
      .join(',');
  };
function nf(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    af(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function of(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return cf(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    af(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function af(t, e) {
  if (t) {
    if ('string' == typeof t) return cf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? cf(t, e)
        : void 0
    );
  }
}
function cf(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var uf = 1e-4,
  lf = function (t, e) {
    return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
  },
  sf = function (t, e) {
    return t
      .map(function (t, r) {
        return t * Math.pow(e, r);
      })
      .reduce(function (t, e) {
        return t + e;
      });
  },
  ff = function (t, e) {
    return function (r) {
      var n = lf(t, e);
      return sf(n, r);
    };
  },
  pf = function (t, e) {
    return function (r) {
      var n = lf(t, e),
        i = [].concat(
          of(
            n
              .map(function (t, e) {
                return t * e;
              })
              .slice(1),
          ),
          [0],
        );
      return sf(i, r);
    };
  },
  hf = function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    var n = e[0],
      i = e[1],
      o = e[2],
      a = e[3];
    if (1 === e.length)
      switch (e[0]) {
        case 'linear':
          (n = 0), (i = 0), (o = 1), (a = 1);
          break;
        case 'ease':
          (n = 0.25), (i = 0.1), (o = 0.25), (a = 1);
          break;
        case 'ease-in':
          (n = 0.42), (i = 0), (o = 1), (a = 1);
          break;
        case 'ease-out':
          (n = 0.42), (i = 0), (o = 0.58), (a = 1);
          break;
        case 'ease-in-out':
          (n = 0), (i = 0), (o = 0.58), (a = 1);
          break;
        default:
          var c = e[0].split('(');
          if (
            'cubic-bezier' === c[0] &&
            4 === c[1].split(')')[0].split(',').length
          ) {
            var u = nf(
              c[1]
                .split(')')[0]
                .split(',')
                .map(function (t) {
                  return parseFloat(t);
                }),
              4,
            );
            (n = u[0]), (i = u[1]), (o = u[2]), (a = u[3]);
          }
      }
    var l = ff(n, o),
      s = ff(i, a),
      f = pf(n, o),
      p = function (t) {
        for (var e, r = t > 1 ? 1 : t, n = r, i = 0; i < 8; ++i) {
          var o = l(n) - r,
            a = f(n);
          if (Math.abs(o - r) < uf || a < uf) return s(n);
          n = (e = n - o / a) > 1 ? 1 : e < 0 ? 0 : e;
        }
        return s(n);
      };
    return (p.isStepper = !1), p;
  },
  df = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.stiff,
      r = void 0 === e ? 100 : e,
      n = t.damping,
      i = void 0 === n ? 8 : n,
      o = t.dt,
      a = void 0 === o ? 17 : o,
      c = function (t, e, n) {
        var o = n + ((-(t - e) * r - n * i) * a) / 1e3,
          c = (n * a) / 1e3 + t;
        return Math.abs(c - e) < uf && Math.abs(o) < uf ? [e, 0] : [c, o];
      };
    return (c.isStepper = !0), (c.dt = a), c;
  };
function yf(t) {
  return (yf =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function vf(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Of(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    wf(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function mf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? mf(Object(r), !0).forEach(function (e) {
          bf(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : mf(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function bf(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== yf(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== yf(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === yf(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xf(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    wf(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function wf(t, e) {
  if (t) {
    if ('string' == typeof t) return Of(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? Of(t, e)
        : void 0
    );
  }
}
function Of(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Sf = function (t, e, r) {
    return t + (e - t) * r;
  },
  jf = function (t) {
    return t.from !== t.to;
  },
  Af = function t(e, r, n) {
    var i = tf(function (t, r) {
      if (jf(r)) {
        var n = xf(e(r.from, r.to, r.velocity), 2),
          i = n[0],
          o = n[1];
        return gf(gf({}, r), {}, { from: i, velocity: o });
      }
      return r;
    }, r);
    return n < 1
      ? tf(function (t, e) {
          return jf(e)
            ? gf(
                gf({}, e),
                {},
                {
                  velocity: Sf(e.velocity, i[t].velocity, n),
                  from: Sf(e.from, i[t].from, n),
                },
              )
            : e;
        }, r)
      : t(e, i, n - 1);
  };
const Pf = function (t, e, r, n, i) {
  var o,
    a,
    c,
    u,
    l =
      ((o = t),
      (a = e),
      [Object.keys(o), Object.keys(a)].reduce(function (t, e) {
        return t.filter(function (t) {
          return e.includes(t);
        });
      })),
    s = l.reduce(function (r, n) {
      return gf(gf({}, r), {}, bf({}, n, [t[n], e[n]]));
    }, {}),
    f = l.reduce(function (r, n) {
      return gf(
        gf({}, r),
        {},
        bf({}, n, { from: t[n], velocity: 0, to: e[n] }),
      );
    }, {}),
    p = -1,
    h = function () {
      return null;
    };
  return (
    (h = r.isStepper
      ? function (n) {
          c || (c = n);
          var o = (n - c) / r.dt;
          (f = Af(r, f, o)),
            i(
              gf(
                gf(gf({}, t), e),
                tf(function (t, e) {
                  return e.from;
                }, f),
              ),
            ),
            (c = n),
            Object.values(f).filter(jf).length &&
              (p = requestAnimationFrame(h));
        }
      : function (o) {
          u || (u = o);
          var a = (o - u) / n,
            c = tf(function (t, e) {
              return Sf.apply(void 0, vf(e).concat([r(a)]));
            }, s);
          if ((i(gf(gf(gf({}, t), e), c)), a < 1)) p = requestAnimationFrame(h);
          else {
            var l = tf(function (t, e) {
              return Sf.apply(void 0, vf(e).concat([r(1)]));
            }, s);
            i(gf(gf(gf({}, t), e), l));
          }
        }),
    function () {
      return (
        requestAnimationFrame(h),
        function () {
          cancelAnimationFrame(p);
        }
      );
    }
  );
};
function kf(t) {
  return (kf =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Ef = [
  'children',
  'begin',
  'duration',
  'attributeName',
  'easing',
  'isActive',
  'steps',
  'from',
  'to',
  'canBegin',
  'onAnimationEnd',
  'shouldReAnimate',
  'onAnimationReStart',
];
function Mf(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function _f(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Tf(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return Tf(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Tf(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Tf(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Cf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Df(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Cf(Object(r), !0).forEach(function (e) {
          Nf(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Cf(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Nf(t, e, r) {
  return (
    (e = Bf(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function If(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Bf(n.key), n);
  }
}
function Bf(t) {
  var e = (function (t, e) {
    if ('object' !== kf(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== kf(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === kf(e) ? e : String(e);
}
function Rf(t, e) {
  return (Rf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function Lf(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = Uf(t);
    if (e) {
      var i = Uf(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return zf(this, r);
  };
}
function zf(t, e) {
  if (e && ('object' === kf(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  return $f(t);
}
function $f(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Uf(t) {
  return (Uf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
var Ff = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && Rf(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = Lf(c);
  function c(t, e) {
    var r;
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, c);
    var n = (r = a.call(this, t, e)).props,
      i = n.isActive,
      o = n.attributeName,
      u = n.from,
      l = n.to,
      s = n.steps,
      f = n.children,
      p = n.duration;
    if (
      ((r.handleStyleChange = r.handleStyleChange.bind($f(r))),
      (r.changeStyle = r.changeStyle.bind($f(r))),
      !i || p <= 0)
    )
      return (
        (r.state = { style: {} }),
        'function' == typeof f && (r.state = { style: l }),
        zf(r)
      );
    if (s && s.length) r.state = { style: s[0].style };
    else if (u) {
      if ('function' == typeof f) return (r.state = { style: u }), zf(r);
      r.state = { style: o ? Nf({}, o, u) : u };
    } else r.state = { style: {} };
    return r;
  }
  return (
    (n = c),
    (i = [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this.props,
            e = t.isActive,
            r = t.canBegin;
          (this.mounted = !0), e && r && this.runAnimation(this.props);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var e = this.props,
            r = e.isActive,
            n = e.canBegin,
            i = e.attributeName,
            o = e.shouldReAnimate,
            a = e.to,
            c = e.from,
            u = this.state.style;
          if (n)
            if (r) {
              if (!(zs(t.to, a) && t.canBegin && t.isActive)) {
                var l = !t.canBegin || !t.isActive;
                this.manager && this.manager.stop(),
                  this.stopJSAnimation && this.stopJSAnimation();
                var s = l || o ? c : t.to;
                if (this.state && u) {
                  var f = { style: i ? Nf({}, i, s) : s };
                  ((i && [i] !== s) || (!i && u !== s)) && this.setState(f);
                }
                this.runAnimation(
                  Df(Df({}, this.props), {}, { from: s, begin: 0 }),
                );
              }
            } else {
              var p = { style: i ? Nf({}, i, a) : a };
              this.state &&
                u &&
                ((i && u[i] !== a) || (!i && u !== a)) &&
                this.setState(p);
            }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.mounted = !1;
          var t = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            t && t();
        },
      },
      {
        key: 'handleStyleChange',
        value: function (t) {
          this.changeStyle(t);
        },
      },
      {
        key: 'changeStyle',
        value: function (t) {
          this.mounted && this.setState({ style: t });
        },
      },
      {
        key: 'runJSAnimation',
        value: function (t) {
          var e = this,
            r = t.from,
            n = t.to,
            i = t.duration,
            o = t.easing,
            a = t.begin,
            c = t.onAnimationEnd,
            u = t.onAnimationStart,
            l = Pf(
              r,
              n,
              (function () {
                for (
                  var t = arguments.length, e = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  e[r] = arguments[r];
                var n = e[0];
                if ('string' == typeof n)
                  switch (n) {
                    case 'ease':
                    case 'ease-in-out':
                    case 'ease-out':
                    case 'ease-in':
                    case 'linear':
                      return hf(n);
                    case 'spring':
                      return df();
                    default:
                      if ('cubic-bezier' === n.split('(')[0]) return hf(n);
                  }
                return 'function' == typeof n ? n : null;
              })(o),
              i,
              this.changeStyle,
            );
          this.manager.start([
            u,
            a,
            function () {
              e.stopJSAnimation = l();
            },
            i,
            c,
          ]);
        },
      },
      {
        key: 'runStepAnimation',
        value: function (t) {
          var e = this,
            r = t.steps,
            n = t.begin,
            i = t.onAnimationStart,
            o = r[0],
            a = o.style,
            c = o.duration,
            u = void 0 === c ? 0 : c;
          return this.manager.start(
            [i].concat(
              _f(
                r.reduce(
                  function (t, n, i) {
                    if (0 === i) return t;
                    var o = n.duration,
                      a = n.easing,
                      c = void 0 === a ? 'ease' : a,
                      u = n.style,
                      l = n.properties,
                      s = n.onAnimationEnd,
                      f = i > 0 ? r[i - 1] : n,
                      p = l || Object.keys(u);
                    if ('function' == typeof c || 'spring' === c)
                      return [].concat(_f(t), [
                        e.runJSAnimation.bind(e, {
                          from: f.style,
                          to: u,
                          duration: o,
                          easing: c,
                        }),
                        o,
                      ]);
                    var h = rf(p, o, c),
                      d = Df(Df(Df({}, f.style), u), {}, { transition: h });
                    return [].concat(_f(t), [d, o, s]).filter(Qs);
                  },
                  [a, Math.max(u, n)],
                ),
              ),
              [t.onAnimationEnd],
            ),
          );
        },
      },
      {
        key: 'runAnimation',
        value: function (t) {
          this.manager || (this.manager = Xs());
          var e = t.begin,
            r = t.duration,
            n = t.attributeName,
            i = t.to,
            o = t.easing,
            a = t.onAnimationStart,
            c = t.onAnimationEnd,
            u = t.steps,
            l = t.children,
            s = this.manager;
          if (
            ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
            'function' != typeof o && 'function' != typeof l && 'spring' !== o)
          )
            if (u.length > 1) this.runStepAnimation(t);
            else {
              var f = n ? Nf({}, n, i) : i,
                p = rf(Object.keys(f), r, o);
              s.start([a, e, Df(Df({}, f), {}, { transition: p }), r, c]);
            }
          else this.runJSAnimation(t);
        },
      },
      {
        key: 'render',
        value: function () {
          var r = this.props,
            n = r.children;
          r.begin;
          var i = r.duration;
          r.attributeName, r.easing;
          var o = r.isActive;
          r.steps,
            r.from,
            r.to,
            r.canBegin,
            r.onAnimationEnd,
            r.shouldReAnimate,
            r.onAnimationReStart;
          var a = Mf(r, Ef),
            c = t.Children.count(n),
            u = ef(this.state.style);
          if ('function' == typeof n) return n(u);
          if (!o || 0 === c || i <= 0) return n;
          var l = function (e) {
            var r = e.props,
              n = r.style,
              i = void 0 === n ? {} : n,
              o = r.className;
            return t.cloneElement(
              e,
              Df(Df({}, a), {}, { style: Df(Df({}, i), u), className: o }),
            );
          };
          return 1 === c
            ? l(t.Children.only(n))
            : e.createElement(
                'div',
                null,
                t.Children.map(n, function (t) {
                  return l(t);
                }),
              );
        },
      },
    ]),
    i && If(n.prototype, i),
    o && If(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
function Wf(t) {
  return (Wf =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function qf(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Wf(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Wf(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Wf(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
(Ff.displayName = 'Animate'),
  (Ff.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: '',
    to: '',
    attributeName: '',
    easing: 'ease',
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
  }),
  (Ff.propTypes = {
    from: P.oneOfType([P.object, P.string]),
    to: P.oneOfType([P.object, P.string]),
    attributeName: P.string,
    duration: P.number,
    begin: P.number,
    easing: P.oneOfType([P.string, P.func]),
    steps: P.arrayOf(
      P.shape({
        duration: P.number.isRequired,
        style: P.object.isRequired,
        easing: P.oneOfType([
          P.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
          P.func,
        ]),
        properties: P.arrayOf('string'),
        onAnimationEnd: P.func,
      }),
    ),
    children: P.oneOfType([P.node, P.func]),
    isActive: P.bool,
    canBegin: P.bool,
    onAnimationEnd: P.func,
    shouldReAnimate: P.bool,
    onAnimationStart: P.func,
    onAnimationReStart: P.func,
  }),
  void 0 === Number.isFinite &&
    (Number.isFinite = function (t) {
      return 'number' == typeof t && isFinite(t);
    }),
  P.object,
  P.object,
  P.object,
  P.element,
  P.object,
  P.object,
  P.object,
  P.oneOfType([P.array, P.element]),
  P.any;
var Xf = 'recharts-tooltip-wrapper',
  Gf = { visibility: 'hidden' };
function Vf(t) {
  var e,
    r = t.coordinate,
    n = t.translateX,
    i = t.translateY;
  return B(
    Xf,
    (qf((e = {}), ''.concat(Xf, '-right'), hr(n) && r && hr(r.x) && n >= r.x),
    qf(e, ''.concat(Xf, '-left'), hr(n) && r && hr(r.x) && n < r.x),
    qf(e, ''.concat(Xf, '-bottom'), hr(i) && r && hr(r.y) && i >= r.y),
    qf(e, ''.concat(Xf, '-top'), hr(i) && r && hr(r.y) && i < r.y),
    e),
  );
}
function Hf(t) {
  var e = t.allowEscapeViewBox,
    r = t.coordinate,
    n = t.key,
    i = t.offsetTopLeft,
    o = t.position,
    a = t.reverseDirection,
    c = t.tooltipDimension,
    u = t.viewBox,
    l = t.viewBoxDimension;
  if (o && hr(o[n])) return o[n];
  var s = r[n] - c - i,
    f = r[n] + i;
  return e[n]
    ? a[n]
      ? s
      : f
    : a[n]
    ? s < u[n]
      ? Math.max(f, u[n])
      : Math.max(s, u[n])
    : f + c > u[n] + l
    ? Math.max(s, u[n])
    : Math.max(f, u[n]);
}
function Yf(t) {
  var e,
    r,
    n,
    i = t.allowEscapeViewBox,
    o = t.coordinate,
    a = t.offsetTopLeft,
    c = t.position,
    u = t.reverseDirection,
    l = t.tooltipBox,
    s = t.useTranslate3d,
    f = t.viewBox;
  return (
    (e =
      l.height > 0 && l.width > 0 && o
        ? (function (t) {
            var e = t.translateX,
              r = t.translateY,
              n = t.useTranslate3d;
            return ef({
              transform: n
                ? 'translate3d('.concat(e, 'px, ').concat(r, 'px, 0)')
                : 'translate('.concat(e, 'px, ').concat(r, 'px)'),
            });
          })({
            translateX: (r = Hf({
              allowEscapeViewBox: i,
              coordinate: o,
              key: 'x',
              offsetTopLeft: a,
              position: c,
              reverseDirection: u,
              tooltipDimension: l.width,
              viewBox: f,
              viewBoxDimension: f.width,
            })),
            translateY: (n = Hf({
              allowEscapeViewBox: i,
              coordinate: o,
              key: 'y',
              offsetTopLeft: a,
              position: c,
              reverseDirection: u,
              tooltipDimension: l.height,
              viewBox: f,
              viewBoxDimension: f.height,
            })),
            useTranslate3d: s,
          })
        : Gf),
    {
      cssProperties: e,
      cssClasses: Vf({ translateX: r, translateY: n, coordinate: o }),
    }
  );
}
function Kf(t) {
  return (Kf =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Zf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Zf(Object(r), !0).forEach(function (e) {
          ip(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Zf(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Qf(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, op(n.key), n);
  }
}
function tp(t, e) {
  return (tp = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function ep(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = np(t);
    if (e) {
      var i = np(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === Kf(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return rp(t);
    })(this, r);
  };
}
function rp(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function np(t) {
  return (np = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function ip(t, e, r) {
  return (
    (e = op(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function op(t) {
  var e = (function (t, e) {
    if ('object' !== Kf(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== Kf(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === Kf(e) ? e : String(e);
}
var ap = (function (r) {
    !(function (t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && tp(t, e);
    })(c, t.PureComponent);
    var n,
      i,
      o,
      a = ep(c);
    function c() {
      var t;
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, c);
      for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
        r[n] = arguments[n];
      return (
        ip(rp((t = a.call.apply(a, [this].concat(r)))), 'state', {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        ip(rp(t), 'lastBoundingBox', { width: -1, height: -1 }),
        ip(rp(t), 'handleKeyDown', function (e) {
          var r, n, i, o;
          'Escape' === e.key &&
            t.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  null !==
                    (r =
                      null === (n = t.props.coordinate) || void 0 === n
                        ? void 0
                        : n.x) && void 0 !== r
                    ? r
                    : 0,
                y:
                  null !==
                    (i =
                      null === (o = t.props.coordinate) || void 0 === o
                        ? void 0
                        : o.y) && void 0 !== i
                    ? i
                    : 0,
              },
            });
        }),
        t
      );
    }
    return (
      (n = c),
      (i = [
        {
          key: 'updateBBox',
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var t = this.wrapperNode.getBoundingClientRect();
              (Math.abs(t.width - this.lastBoundingBox.width) > 1 ||
                Math.abs(t.height - this.lastBoundingBox.height) > 1) &&
                ((this.lastBoundingBox.width = t.width),
                (this.lastBoundingBox.height = t.height));
            } else
              (-1 === this.lastBoundingBox.width &&
                -1 === this.lastBoundingBox.height) ||
                ((this.lastBoundingBox.width = -1),
                (this.lastBoundingBox.height = -1));
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            document.addEventListener('keydown', this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            document.removeEventListener('keydown', this.handleKeyDown);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var t, e;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((null === (t = this.props.coordinate) || void 0 === t
                  ? void 0
                  : t.x) === this.state.dismissedAtCoordinate.x &&
                  (null === (e = this.props.coordinate) || void 0 === e
                    ? void 0
                    : e.y) === this.state.dismissedAtCoordinate.y) ||
                  (this.state.dismissed = !1));
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              r = this.props,
              n = r.active,
              i = r.allowEscapeViewBox,
              o = r.animationDuration,
              a = r.animationEasing,
              c = r.children,
              u = r.coordinate,
              l = r.hasPayload,
              s = r.isAnimationActive,
              f = r.offset,
              p = r.position,
              h = r.reverseDirection,
              d = r.useTranslate3d,
              y = r.viewBox,
              v = r.wrapperStyle,
              m = Yf({
                allowEscapeViewBox: i,
                coordinate: u,
                offsetTopLeft: f,
                position: p,
                reverseDirection: h,
                tooltipBox: {
                  height: this.lastBoundingBox.height,
                  width: this.lastBoundingBox.width,
                },
                useTranslate3d: d,
                viewBox: y,
              }),
              g = m.cssClasses,
              b = m.cssProperties,
              x = Jf(
                Jf(
                  Jf(
                    {},
                    s &&
                      n &&
                      ef({
                        transition: 'transform '.concat(o, 'ms ').concat(a),
                      }),
                  ),
                  b,
                ),
                {},
                {
                  pointerEvents: 'none',
                  visibility:
                    !this.state.dismissed && n && l ? 'visible' : 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                v,
              );
            return e.createElement(
              'div',
              {
                tabIndex: -1,
                role: 'dialog',
                className: g,
                style: x,
                ref: function (e) {
                  t.wrapperNode = e;
                },
              },
              c,
            );
          },
        },
      ]) && Qf(n.prototype, i),
      o && Qf(n, o),
      Object.defineProperty(n, 'prototype', { writable: !1 }),
      c
    );
  })(),
  cp = {
    isSsr: !(
      'undefined' != typeof window &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
    get: function (t) {
      return cp[t];
    },
    set: function (t, e) {
      if ('string' == typeof t) cp[t] = e;
      else {
        var r = Object.keys(t);
        r &&
          r.length &&
          r.forEach(function (e) {
            cp[e] = t[e];
          });
      }
    },
  };
function up(t) {
  return (up =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function lp(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function sp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? lp(Object(r), !0).forEach(function (e) {
          yp(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : lp(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function fp(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, vp(n.key), n);
  }
}
function pp(t, e) {
  return (pp = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function hp(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = dp(t);
    if (e) {
      var i = dp(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === up(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      })(t);
    })(this, r);
  };
}
function dp(t) {
  return (dp = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function yp(t, e, r) {
  return (
    (e = vp(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function vp(t) {
  var e = (function (t, e) {
    if ('object' !== up(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== up(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === up(e) ? e : String(e);
}
function mp(t) {
  return t.dataKey;
}
var gp = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && pp(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = hp(c);
  function c() {
    return (
      (function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, c),
      a.apply(this, arguments)
    );
  }
  return (
    (n = c),
    (i = [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            r = t.active,
            n = t.allowEscapeViewBox,
            i = t.animationDuration,
            o = t.animationEasing,
            a = t.content,
            c = t.coordinate,
            u = t.filterNull,
            l = t.isAnimationActive,
            s = t.offset,
            f = t.payload,
            p = t.payloadUniqBy,
            h = t.position,
            d = t.reverseDirection,
            y = t.useTranslate3d,
            v = t.viewBox,
            m = t.wrapperStyle,
            g = null != f ? f : [];
          u &&
            g.length &&
            (g = Gu(
              f.filter(function (t) {
                return null != t.value;
              }),
              p,
              mp,
            ));
          var b = g.length > 0;
          return e.createElement(
            ap,
            {
              allowEscapeViewBox: n,
              animationDuration: i,
              animationEasing: o,
              isAnimationActive: l,
              active: r,
              coordinate: c,
              hasPayload: b,
              offset: s,
              position: h,
              reverseDirection: d,
              useTranslate3d: y,
              viewBox: v,
              wrapperStyle: m,
            },
            (function (t, r) {
              return e.isValidElement(t)
                ? e.cloneElement(t, r)
                : 'function' == typeof t
                ? e.createElement(t, r)
                : e.createElement(os, r);
            })(a, sp(sp({}, this.props), {}, { payload: g })),
          );
        },
      },
    ]) && fp(n.prototype, i),
    o && fp(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
yp(gp, 'displayName', 'Tooltip'),
  yp(gp, 'defaultProps', {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !cp.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: !1,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    wrapperStyle: {},
  });
var bp = y,
  xp = /\s/;
var wp = function (t) {
    for (var e = t.length; e-- && xp.test(t.charAt(e)); );
    return e;
  },
  Op = /^\s+/;
var Sp = function (t) {
    return t ? t.slice(0, wp(t) + 1).replace(Op, '') : t;
  },
  jp = F,
  Ap = h,
  Pp = NaN,
  kp = /^[-+]0x[0-9a-f]+$/i,
  Ep = /^0b[01]+$/i,
  Mp = /^0o[0-7]+$/i,
  _p = parseInt;
var Tp = function (t) {
    if ('number' == typeof t) return t;
    if (Ap(t)) return Pp;
    if (jp(t)) {
      var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
      t = jp(e) ? e + '' : e;
    }
    if ('string' != typeof t) return 0 === t ? t : +t;
    t = Sp(t);
    var r = Ep.test(t);
    return r || Mp.test(t) ? _p(t.slice(2), r ? 2 : 8) : kp.test(t) ? Pp : +t;
  },
  Cp = F,
  Dp = function () {
    return bp.Date.now();
  },
  Np = Tp,
  Ip = 'Expected a function',
  Bp = Math.max,
  Rp = Math.min;
var Lp = function (t, e, r) {
    var n,
      i,
      o,
      a,
      c,
      u,
      l = 0,
      s = !1,
      f = !1,
      p = !0;
    if ('function' != typeof t) throw new TypeError(Ip);
    function h(e) {
      var r = n,
        o = i;
      return (n = i = void 0), (l = e), (a = t.apply(o, r));
    }
    function d(t) {
      var r = t - u;
      return void 0 === u || r >= e || r < 0 || (f && t - l >= o);
    }
    function y() {
      var t = Dp();
      if (d(t)) return v(t);
      c = setTimeout(
        y,
        (function (t) {
          var r = e - (t - u);
          return f ? Rp(r, o - (t - l)) : r;
        })(t),
      );
    }
    function v(t) {
      return (c = void 0), p && n ? h(t) : ((n = i = void 0), a);
    }
    function m() {
      var t = Dp(),
        r = d(t);
      if (((n = arguments), (i = this), (u = t), r)) {
        if (void 0 === c)
          return (function (t) {
            return (l = t), (c = setTimeout(y, e)), s ? h(t) : a;
          })(u);
        if (f) return clearTimeout(c), (c = setTimeout(y, e)), h(u);
      }
      return void 0 === c && (c = setTimeout(y, e)), a;
    }
    return (
      (e = Np(e) || 0),
      Cp(r) &&
        ((s = !!r.leading),
        (o = (f = 'maxWait' in r) ? Bp(Np(r.maxWait) || 0, e) : o),
        (p = 'trailing' in r ? !!r.trailing : p)),
      (m.cancel = function () {
        void 0 !== c && clearTimeout(c), (l = 0), (n = u = i = c = void 0);
      }),
      (m.flush = function () {
        return void 0 === c ? a : v(Dp());
      }),
      m
    );
  },
  zp = F,
  $p = 'Expected a function';
var Up = function (t, e, r) {
    var n = !0,
      i = !0;
    if ('function' != typeof t) throw new TypeError($p);
    return (
      zp(r) &&
        ((n = 'leading' in r ? !!r.leading : n),
        (i = 'trailing' in r ? !!r.trailing : i)),
      Lp(t, e, { leading: n, maxWait: e, trailing: i })
    );
  },
  Fp = function (t) {
    return null;
  };
function Wp(t) {
  return (Wp =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function qp(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Xp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? qp(Object(r), !0).forEach(function (e) {
          Gp(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : qp(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Gp(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Wp(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Wp(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Wp(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
Fp.displayName = 'Cell';
var Vp = { widthCache: {}, cacheCount: 0 },
  Hp = 2e3,
  Yp = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  Kp = 'recharts_measurement_span';
var Zp = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (null == t || cp.isSsr) return { width: 0, height: 0 };
  var r,
    n =
      ((r = Xp({}, e)),
      Object.keys(r).forEach(function (t) {
        r[t] || delete r[t];
      }),
      r),
    i = JSON.stringify({ text: t, copyStyle: n });
  if (Vp.widthCache[i]) return Vp.widthCache[i];
  try {
    var o = document.getElementById(Kp);
    o ||
      ((o = document.createElement('span')).setAttribute('id', Kp),
      o.setAttribute('aria-hidden', 'true'),
      document.body.appendChild(o));
    var a = Xp(Xp({}, Yp), n);
    Object.assign(o.style, a), (o.textContent = ''.concat(t));
    var c = o.getBoundingClientRect(),
      u = { width: c.width, height: c.height };
    return (
      (Vp.widthCache[i] = u),
      ++Vp.cacheCount > Hp && ((Vp.cacheCount = 0), (Vp.widthCache = {})),
      u
    );
  } catch (l) {
    return { width: 0, height: 0 };
  }
};
function Jp(t) {
  return (Jp =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Qp(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return th(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return th(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function th(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function eh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(
        t,
        ((i = n.key),
        (o = void 0),
        (o = (function (t, e) {
          if ('object' !== Jp(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' !== Jp(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(i, 'string')),
        'symbol' === Jp(o) ? o : String(o)),
        n,
      );
  }
  var i, o;
}
var rh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  nh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ih = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  oh = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  ah = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  ch = Object.keys(ah),
  uh = 'NaN';
var lh = (function () {
  function t(e, r) {
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, t),
      (this.num = e),
      (this.unit = r),
      (this.num = e),
      (this.unit = r),
      Number.isNaN(e) && (this.unit = ''),
      '' === r || ih.test(r) || ((this.num = NaN), (this.unit = '')),
      ch.includes(r) &&
        ((this.num = (function (t, e) {
          return t * ah[e];
        })(e, r)),
        (this.unit = 'px'));
  }
  var e, r, n;
  return (
    (e = t),
    (n = [
      {
        key: 'parse',
        value: function (e) {
          var r,
            n = Qp(null !== (r = oh.exec(e)) && void 0 !== r ? r : [], 3),
            i = n[1],
            o = n[2];
          return new t(parseFloat(i), null != o ? o : '');
        },
      },
    ]),
    (r = [
      {
        key: 'add',
        value: function (e) {
          return this.unit !== e.unit
            ? new t(NaN, '')
            : new t(this.num + e.num, this.unit);
        },
      },
      {
        key: 'subtract',
        value: function (e) {
          return this.unit !== e.unit
            ? new t(NaN, '')
            : new t(this.num - e.num, this.unit);
        },
      },
      {
        key: 'multiply',
        value: function (e) {
          return '' !== this.unit && '' !== e.unit && this.unit !== e.unit
            ? new t(NaN, '')
            : new t(this.num * e.num, this.unit || e.unit);
        },
      },
      {
        key: 'divide',
        value: function (e) {
          return '' !== this.unit && '' !== e.unit && this.unit !== e.unit
            ? new t(NaN, '')
            : new t(this.num / e.num, this.unit || e.unit);
        },
      },
      {
        key: 'toString',
        value: function () {
          return ''.concat(this.num).concat(this.unit);
        },
      },
      {
        key: 'isNaN',
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ]) && eh(e.prototype, r),
    n && eh(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t
  );
})();
function sh(t) {
  if (t.includes(uh)) return uh;
  for (var e = t; e.includes('*') || e.includes('/'); ) {
    var r,
      n = Qp(null !== (r = rh.exec(e)) && void 0 !== r ? r : [], 4),
      i = n[1],
      o = n[2],
      a = n[3],
      c = lh.parse(null != i ? i : ''),
      u = lh.parse(null != a ? a : ''),
      l = '*' === o ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return uh;
    e = e.replace(rh, l.toString());
  }
  for (; e.includes('+') || /.-\d+(?:\.\d+)?/.test(e); ) {
    var s,
      f = Qp(null !== (s = nh.exec(e)) && void 0 !== s ? s : [], 4),
      p = f[1],
      h = f[2],
      d = f[3],
      y = lh.parse(null != p ? p : ''),
      v = lh.parse(null != d ? d : ''),
      m = '+' === h ? y.add(v) : y.subtract(v);
    if (m.isNaN()) return uh;
    e = e.replace(nh, m.toString());
  }
  return e;
}
var fh = /\(([^()]*)\)/;
function ph(t) {
  var e = t.replace(/\s+/g, '');
  return (
    (e = (function (t) {
      for (var e = t; e.includes('('); ) {
        var r = Qp(fh.exec(e), 2)[1];
        e = e.replace(fh, sh(r));
      }
      return e;
    })(e)),
    (e = sh(e))
  );
}
function hh(t) {
  var e = (function (t) {
    try {
      return ph(t);
    } catch (e) {
      return uh;
    }
  })(t.slice(5, -1));
  return e === uh ? '' : e;
}
var dh = [
    'x',
    'y',
    'lineHeight',
    'capHeight',
    'scaleToFit',
    'textAnchor',
    'verticalAnchor',
    'fill',
  ],
  yh = ['dx', 'dy', 'angle', 'className', 'breakAll'];
function vh() {
  return (
    (vh = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    vh.apply(this, arguments)
  );
}
function mh(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function gh(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return bh(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return bh(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function bh(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var xh = /[ \f\n\r\t\v\u2028\u2029]+/,
  wh = function (t) {
    var e = t.children,
      r = t.breakAll,
      n = t.style;
    try {
      var i = [];
      return (
        Ne(e) || (i = r ? e.toString().split('') : e.toString().split(xh)),
        {
          wordsWithComputedWidth: i.map(function (t) {
            return { word: t, width: Zp(t, n).width };
          }),
          spaceWidth: r ? 0 : Zp(' ', n).width,
        }
      );
    } catch (o) {
      return null;
    }
  },
  Oh = function (t) {
    return [{ words: Ne(t) ? [] : t.toString().split(xh) }];
  },
  Sh = function (t) {
    var e = t.width,
      r = t.scaleToFit,
      n = t.children,
      i = t.style,
      o = t.breakAll,
      a = t.maxLines;
    if ((e || r) && !cp.isSsr) {
      var c = wh({ breakAll: o, children: n, style: i });
      return c
        ? (function (t, e, r, n, i) {
            var o = t.maxLines,
              a = t.children,
              c = t.style,
              u = t.breakAll,
              l = hr(o),
              s = a,
              f = function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                ).reduce(function (t, e) {
                  var o = e.word,
                    a = e.width,
                    c = t[t.length - 1];
                  if (c && (null == n || i || c.width + a + r < Number(n)))
                    c.words.push(o), (c.width += a + r);
                  else {
                    var u = { words: [o], width: a };
                    t.push(u);
                  }
                  return t;
                }, []);
              },
              p = f(e);
            if (!l) return p;
            for (
              var h,
                d = function (t) {
                  var e = s.slice(0, t),
                    r = wh({
                      breakAll: u,
                      style: c,
                      children: e + '…',
                    }).wordsWithComputedWidth,
                    i = f(r),
                    a =
                      i.length > o ||
                      (function (t) {
                        return t.reduce(function (t, e) {
                          return t.width > e.width ? t : e;
                        });
                      })(i).width > Number(n);
                  return [a, i];
                },
                y = 0,
                v = s.length - 1,
                m = 0;
              y <= v && m <= s.length - 1;

            ) {
              var g = Math.floor((y + v) / 2),
                b = gh(d(g - 1), 2),
                x = b[0],
                w = b[1],
                O = gh(d(g), 1)[0];
              if ((x || O || (y = g + 1), x && O && (v = g - 1), !x && O)) {
                h = w;
                break;
              }
              m++;
            }
            return h || p;
          })(
            { breakAll: o, children: n, maxLines: a, style: i },
            c.wordsWithComputedWidth,
            c.spaceWidth,
            e,
            r,
          )
        : Oh(n);
    }
    return Oh(n);
  },
  jh = '#808080',
  Ah = function (r) {
    var n = r.x,
      i = void 0 === n ? 0 : n,
      o = r.y,
      a = void 0 === o ? 0 : o,
      c = r.lineHeight,
      u = void 0 === c ? '1em' : c,
      l = r.capHeight,
      s = void 0 === l ? '0.71em' : l,
      f = r.scaleToFit,
      p = void 0 !== f && f,
      h = r.textAnchor,
      d = void 0 === h ? 'start' : h,
      y = r.verticalAnchor,
      v = void 0 === y ? 'end' : y,
      m = r.fill,
      g = void 0 === m ? jh : m,
      b = mh(r, dh),
      x = t.useMemo(
        function () {
          return Sh({
            breakAll: b.breakAll,
            children: b.children,
            maxLines: b.maxLines,
            scaleToFit: p,
            style: b.style,
            width: b.width,
          });
        },
        [b.breakAll, b.children, b.maxLines, p, b.style, b.width],
      ),
      w = b.dx,
      O = b.dy,
      S = b.angle,
      j = b.className,
      A = b.breakAll,
      P = mh(b, yh);
    if (!dr(i) || !dr(a)) return null;
    var k,
      E = i + (hr(w) ? w : 0),
      M = a + (hr(O) ? O : 0);
    switch (v) {
      case 'start':
        k = hh('calc('.concat(s, ')'));
        break;
      case 'middle':
        k = hh(
          'calc('
            .concat((x.length - 1) / 2, ' * -')
            .concat(u, ' + (')
            .concat(s, ' / 2))'),
        );
        break;
      default:
        k = hh('calc('.concat(x.length - 1, ' * -').concat(u, ')'));
    }
    var _ = [];
    if (p) {
      var T = x[0].width,
        C = b.width;
      _.push('scale('.concat((hr(C) ? C / T : 1) / T, ')'));
    }
    return (
      S && _.push('rotate('.concat(S, ', ').concat(E, ', ').concat(M, ')')),
      _.length && (P.transform = _.join(' ')),
      e.createElement(
        'text',
        vh({}, Wr(P, !0), {
          x: E,
          y: M,
          className: B('recharts-text', j),
          textAnchor: d,
          fill: g.includes('url') ? jh : g,
        }),
        x.map(function (t, r) {
          var n = t.words.join(A ? '' : ' ');
          return e.createElement(
            'tspan',
            { x: E, dy: 0 === r ? k : u, key: n },
            n,
          );
        }),
      )
    );
  };
function Ph(t, e) {
  return null == t || null == e
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function kh(t, e) {
  return null == t || null == e
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function Eh(t) {
  let e, r, n;
  function i(t, n, i = 0, o = t.length) {
    if (i < o) {
      if (0 !== e(n, n)) return o;
      do {
        const e = (i + o) >>> 1;
        r(t[e], n) < 0 ? (i = e + 1) : (o = e);
      } while (i < o);
    }
    return i;
  }
  return (
    2 !== t.length
      ? ((e = Ph), (r = (e, r) => Ph(t(e), r)), (n = (e, r) => t(e) - r))
      : ((e = t === Ph || t === kh ? t : Mh), (r = t), (n = t)),
    {
      left: i,
      center: function (t, e, r = 0, o = t.length) {
        const a = i(t, e, r, o - 1);
        return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
      },
      right: function (t, n, i = 0, o = t.length) {
        if (i < o) {
          if (0 !== e(n, n)) return o;
          do {
            const e = (i + o) >>> 1;
            r(t[e], n) <= 0 ? (i = e + 1) : (o = e);
          } while (i < o);
        }
        return i;
      },
    }
  );
}
function Mh() {
  return 0;
}
function _h(t) {
  return null === t ? NaN : +t;
}
const Th = Eh(Ph).right;
Eh(_h).center;
const Ch = Th;
class Dh extends Map {
  constructor(t, e = Ih) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: e },
      }),
      null != t)
    )
      for (const [r, n] of t) this.set(r, n);
  }
  get(t) {
    return super.get(Nh(this, t));
  }
  has(t) {
    return super.has(Nh(this, t));
  }
  set(t, e) {
    return super.set(
      (function ({ _intern: t, _key: e }, r) {
        const n = e(r);
        return t.has(n) ? t.get(n) : (t.set(n, r), r);
      })(this, t),
      e,
    );
  }
  delete(t) {
    return super.delete(
      (function ({ _intern: t, _key: e }, r) {
        const n = e(r);
        t.has(n) && ((r = t.get(n)), t.delete(n));
        return r;
      })(this, t),
    );
  }
}
function Nh({ _intern: t, _key: e }, r) {
  const n = e(r);
  return t.has(n) ? t.get(n) : r;
}
function Ih(t) {
  return null !== t && 'object' == typeof t ? t.valueOf() : t;
}
function Bh(t, e) {
  return (
    (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
    (t < e ? -1 : t > e ? 1 : 0)
  );
}
const Rh = Math.sqrt(50),
  Lh = Math.sqrt(10),
  zh = Math.sqrt(2);
function $h(t, e, r) {
  const n = (e - t) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    o = n / Math.pow(10, i),
    a = o >= Rh ? 10 : o >= Lh ? 5 : o >= zh ? 2 : 1;
  let c, u, l;
  return (
    i < 0
      ? ((l = Math.pow(10, -i) / a),
        (c = Math.round(t * l)),
        (u = Math.round(e * l)),
        c / l < t && ++c,
        u / l > e && --u,
        (l = -l))
      : ((l = Math.pow(10, i) * a),
        (c = Math.round(t / l)),
        (u = Math.round(e / l)),
        c * l < t && ++c,
        u * l > e && --u),
    u < c && 0.5 <= r && r < 2 ? $h(t, e, 2 * r) : [c, u, l]
  );
}
function Uh(t, e, r) {
  if (!((r = +r) > 0)) return [];
  if ((t = +t) === (e = +e)) return [t];
  const n = e < t,
    [i, o, a] = n ? $h(e, t, r) : $h(t, e, r);
  if (!(o >= i)) return [];
  const c = o - i + 1,
    u = new Array(c);
  if (n)
    if (a < 0) for (let l = 0; l < c; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < c; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < c; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < c; ++l) u[l] = (i + l) * a;
  return u;
}
function Fh(t, e, r) {
  return $h((t = +t), (e = +e), (r = +r))[2];
}
function Wh(t, e, r) {
  r = +r;
  const n = (e = +e) < (t = +t),
    i = n ? Fh(e, t, r) : Fh(t, e, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function qh(t, e) {
  let r;
  if (void 0 === e)
    for (const n of t)
      null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of t)
      null != (i = e(i, ++n, t)) &&
        (r < i || (void 0 === r && i >= i)) &&
        (r = i);
  }
  return r;
}
function Xh(t, e) {
  let r;
  if (void 0 === e)
    for (const n of t)
      null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of t)
      null != (i = e(i, ++n, t)) &&
        (r > i || (void 0 === r && i >= i)) &&
        (r = i);
  }
  return r;
}
function Gh(t, e, r = 0, n = 1 / 0, i) {
  if (
    ((e = Math.floor(e)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(t.length - 1, n))),
    !(r <= e && e <= n))
  )
    return t;
  for (
    i =
      void 0 === i
        ? Bh
        : (function (t = Ph) {
            if (t === Ph) return Bh;
            if ('function' != typeof t)
              throw new TypeError('compare is not a function');
            return (e, r) => {
              const n = t(e, r);
              return n || 0 === n ? n : (0 === t(r, r)) - (0 === t(e, e));
            };
          })(i);
    n > r;

  ) {
    if (n - r > 600) {
      const o = n - r + 1,
        a = e - r + 1,
        c = Math.log(o),
        u = 0.5 * Math.exp((2 * c) / 3),
        l = 0.5 * Math.sqrt((c * u * (o - u)) / o) * (a - o / 2 < 0 ? -1 : 1);
      Gh(
        t,
        e,
        Math.max(r, Math.floor(e - (a * u) / o + l)),
        Math.min(n, Math.floor(e + ((o - a) * u) / o + l)),
        i,
      );
    }
    const o = t[e];
    let a = r,
      c = n;
    for (Vh(t, r, e), i(t[n], o) > 0 && Vh(t, r, n); a < c; ) {
      for (Vh(t, a, c), ++a, --c; i(t[a], o) < 0; ) ++a;
      for (; i(t[c], o) > 0; ) --c;
    }
    0 === i(t[r], o) ? Vh(t, r, c) : (++c, Vh(t, c, n)),
      c <= e && (r = c + 1),
      e <= c && (n = c - 1);
  }
  return t;
}
function Vh(t, e, r) {
  const n = t[e];
  (t[e] = t[r]), (t[r] = n);
}
function Hh(t, e, r = _h) {
  if ((n = t.length) && !isNaN((e = +e))) {
    if (e <= 0 || n < 2) return +r(t[0], 0, t);
    if (e >= 1) return +r(t[n - 1], n - 1, t);
    var n,
      i = (n - 1) * e,
      o = Math.floor(i),
      a = +r(t[o], o, t);
    return a + (+r(t[o + 1], o + 1, t) - a) * (i - o);
  }
}
function Yh(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
  }
  return this;
}
function Kh(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      'function' == typeof t ? this.interpolator(t) : this.range(t);
      break;
    default:
      this.domain(t),
        'function' == typeof e ? this.interpolator(e) : this.range(e);
  }
  return this;
}
const Zh = Symbol('implicit');
function Jh() {
  var t = new Dh(),
    e = [],
    r = [],
    n = Zh;
  function i(i) {
    let o = t.get(i);
    if (void 0 === o) {
      if (n !== Zh) return n;
      t.set(i, (o = e.push(i) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (r) {
      if (!arguments.length) return e.slice();
      (e = []), (t = new Dh());
      for (const n of r) t.has(n) || t.set(n, e.push(n) - 1);
      return i;
    }),
    (i.range = function (t) {
      return arguments.length ? ((r = Array.from(t)), i) : r.slice();
    }),
    (i.unknown = function (t) {
      return arguments.length ? ((n = t), i) : n;
    }),
    (i.copy = function () {
      return Jh(e, r).unknown(n);
    }),
    Yh.apply(i, arguments),
    i
  );
}
function Qh() {
  var t,
    e,
    r = Jh().unknown(void 0),
    n = r.domain,
    i = r.range,
    o = 0,
    a = 1,
    c = !1,
    u = 0,
    l = 0,
    s = 0.5;
  function f() {
    var r = n().length,
      f = a < o,
      p = f ? a : o,
      h = f ? o : a;
    (t = (h - p) / Math.max(1, r - u + 2 * l)),
      c && (t = Math.floor(t)),
      (p += (h - p - t * (r - u)) * s),
      (e = t * (1 - u)),
      c && ((p = Math.round(p)), (e = Math.round(e)));
    var d = (function (t, e, r) {
      (t = +t),
        (e = +e),
        (r =
          (i = arguments.length) < 2 ? ((e = t), (t = 0), 1) : i < 3 ? 1 : +r);
      for (
        var n = -1,
          i = 0 | Math.max(0, Math.ceil((e - t) / r)),
          o = new Array(i);
        ++n < i;

      )
        o[n] = t + n * r;
      return o;
    })(r).map(function (e) {
      return p + t * e;
    });
    return i(f ? d.reverse() : d);
  }
  return (
    delete r.unknown,
    (r.domain = function (t) {
      return arguments.length ? (n(t), f()) : n();
    }),
    (r.range = function (t) {
      return arguments.length
        ? (([o, a] = t), (o = +o), (a = +a), f())
        : [o, a];
    }),
    (r.rangeRound = function (t) {
      return ([o, a] = t), (o = +o), (a = +a), (c = !0), f();
    }),
    (r.bandwidth = function () {
      return e;
    }),
    (r.step = function () {
      return t;
    }),
    (r.round = function (t) {
      return arguments.length ? ((c = !!t), f()) : c;
    }),
    (r.padding = function (t) {
      return arguments.length ? ((u = Math.min(1, (l = +t))), f()) : u;
    }),
    (r.paddingInner = function (t) {
      return arguments.length ? ((u = Math.min(1, t)), f()) : u;
    }),
    (r.paddingOuter = function (t) {
      return arguments.length ? ((l = +t), f()) : l;
    }),
    (r.align = function (t) {
      return arguments.length ? ((s = Math.max(0, Math.min(1, t))), f()) : s;
    }),
    (r.copy = function () {
      return Qh(n(), [o, a]).round(c).paddingInner(u).paddingOuter(l).align(s);
    }),
    Yh.apply(f(), arguments)
  );
}
function td(t) {
  var e = t.copy;
  return (
    (t.padding = t.paddingOuter),
    delete t.paddingInner,
    delete t.paddingOuter,
    (t.copy = function () {
      return td(e());
    }),
    t
  );
}
function ed() {
  return td(Qh.apply(null, arguments).paddingInner(1));
}
function rd(t, e, r) {
  (t.prototype = e.prototype = r), (r.constructor = t);
}
function nd(t, e) {
  var r = Object.create(t.prototype);
  for (var n in e) r[n] = e[n];
  return r;
}
function id() {}
var od = 0.7,
  ad = 1 / od,
  cd = '\\s*([+-]?\\d+)\\s*',
  ud = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  ld = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  sd = /^#([0-9a-f]{3,8})$/,
  fd = new RegExp(`^rgb\\(${cd},${cd},${cd}\\)$`),
  pd = new RegExp(`^rgb\\(${ld},${ld},${ld}\\)$`),
  hd = new RegExp(`^rgba\\(${cd},${cd},${cd},${ud}\\)$`),
  dd = new RegExp(`^rgba\\(${ld},${ld},${ld},${ud}\\)$`),
  yd = new RegExp(`^hsl\\(${ud},${ld},${ld}\\)$`),
  vd = new RegExp(`^hsla\\(${ud},${ld},${ld},${ud}\\)$`),
  md = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function gd() {
  return this.rgb().formatHex();
}
function bd() {
  return this.rgb().formatRgb();
}
function xd(t) {
  var e, r;
  return (
    (t = (t + '').trim().toLowerCase()),
    (e = sd.exec(t))
      ? ((r = e[1].length),
        (e = parseInt(e[1], 16)),
        6 === r
          ? wd(e)
          : 3 === r
          ? new jd(
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (240 & e),
              ((15 & e) << 4) | (15 & e),
              1,
            )
          : 8 === r
          ? Od(
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              (255 & e) / 255,
            )
          : 4 === r
          ? Od(
              ((e >> 12) & 15) | ((e >> 8) & 240),
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (240 & e),
              (((15 & e) << 4) | (15 & e)) / 255,
            )
          : null)
      : (e = fd.exec(t))
      ? new jd(e[1], e[2], e[3], 1)
      : (e = pd.exec(t))
      ? new jd((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
      : (e = hd.exec(t))
      ? Od(e[1], e[2], e[3], e[4])
      : (e = dd.exec(t))
      ? Od((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
      : (e = yd.exec(t))
      ? _d(e[1], e[2] / 100, e[3] / 100, 1)
      : (e = vd.exec(t))
      ? _d(e[1], e[2] / 100, e[3] / 100, e[4])
      : md.hasOwnProperty(t)
      ? wd(md[t])
      : 'transparent' === t
      ? new jd(NaN, NaN, NaN, 0)
      : null
  );
}
function wd(t) {
  return new jd((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function Od(t, e, r, n) {
  return n <= 0 && (t = e = r = NaN), new jd(t, e, r, n);
}
function Sd(t, e, r, n) {
  return 1 === arguments.length
    ? ((i = t) instanceof id || (i = xd(i)),
      i ? new jd((i = i.rgb()).r, i.g, i.b, i.opacity) : new jd())
    : new jd(t, e, r, null == n ? 1 : n);
  var i;
}
function jd(t, e, r, n) {
  (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
}
function Ad() {
  return `#${Md(this.r)}${Md(this.g)}${Md(this.b)}`;
}
function Pd() {
  const t = kd(this.opacity);
  return `${1 === t ? 'rgb(' : 'rgba('}${Ed(this.r)}, ${Ed(this.g)}, ${Ed(
    this.b,
  )}${1 === t ? ')' : `, ${t})`}`;
}
function kd(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ed(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Md(t) {
  return ((t = Ed(t)) < 16 ? '0' : '') + t.toString(16);
}
function _d(t, e, r, n) {
  return (
    n <= 0
      ? (t = e = r = NaN)
      : r <= 0 || r >= 1
      ? (t = e = NaN)
      : e <= 0 && (t = NaN),
    new Cd(t, e, r, n)
  );
}
function Td(t) {
  if (t instanceof Cd) return new Cd(t.h, t.s, t.l, t.opacity);
  if ((t instanceof id || (t = xd(t)), !t)) return new Cd();
  if (t instanceof Cd) return t;
  var e = (t = t.rgb()).r / 255,
    r = t.g / 255,
    n = t.b / 255,
    i = Math.min(e, r, n),
    o = Math.max(e, r, n),
    a = NaN,
    c = o - i,
    u = (o + i) / 2;
  return (
    c
      ? ((a =
          e === o
            ? (r - n) / c + 6 * (r < n)
            : r === o
            ? (n - e) / c + 2
            : (e - r) / c + 4),
        (c /= u < 0.5 ? o + i : 2 - o - i),
        (a *= 60))
      : (c = u > 0 && u < 1 ? 0 : a),
    new Cd(a, c, u, t.opacity)
  );
}
function Cd(t, e, r, n) {
  (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
}
function Dd(t) {
  return (t = (t || 0) % 360) < 0 ? t + 360 : t;
}
function Nd(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Id(t, e, r) {
  return (
    255 *
    (t < 60
      ? e + ((r - e) * t) / 60
      : t < 180
      ? r
      : t < 240
      ? e + ((r - e) * (240 - t)) / 60
      : e)
  );
}
rd(id, xd, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gd,
  formatHex: gd,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return Td(this).formatHsl();
  },
  formatRgb: bd,
  toString: bd,
}),
  rd(
    jd,
    Sd,
    nd(id, {
      brighter(t) {
        return (
          (t = null == t ? ad : Math.pow(ad, t)),
          new jd(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? od : Math.pow(od, t)),
          new jd(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new jd(Ed(this.r), Ed(this.g), Ed(this.b), kd(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: Ad,
      formatHex: Ad,
      formatHex8: function () {
        return `#${Md(this.r)}${Md(this.g)}${Md(this.b)}${Md(
          255 * (isNaN(this.opacity) ? 1 : this.opacity),
        )}`;
      },
      formatRgb: Pd,
      toString: Pd,
    }),
  ),
  rd(
    Cd,
    function (t, e, r, n) {
      return 1 === arguments.length
        ? Td(t)
        : new Cd(t, e, r, null == n ? 1 : n);
    },
    nd(id, {
      brighter(t) {
        return (
          (t = null == t ? ad : Math.pow(ad, t)),
          new Cd(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? od : Math.pow(od, t)),
          new Cd(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = (this.h % 360) + 360 * (this.h < 0),
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          r = this.l,
          n = r + (r < 0.5 ? r : 1 - r) * e,
          i = 2 * r - n;
        return new jd(
          Id(t >= 240 ? t - 240 : t + 120, i, n),
          Id(t, i, n),
          Id(t < 120 ? t + 240 : t - 120, i, n),
          this.opacity,
        );
      },
      clamp() {
        return new Cd(Dd(this.h), Nd(this.s), Nd(this.l), kd(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = kd(this.opacity);
        return `${1 === t ? 'hsl(' : 'hsla('}${Dd(this.h)}, ${
          100 * Nd(this.s)
        }%, ${100 * Nd(this.l)}%${1 === t ? ')' : `, ${t})`}`;
      },
    }),
  );
const Bd = t => () => t;
function Rd(t) {
  return 1 == (t = +t)
    ? Ld
    : function (e, r) {
        return r - e
          ? (function (t, e, r) {
              return (
                (t = Math.pow(t, r)),
                (e = Math.pow(e, r) - t),
                (r = 1 / r),
                function (n) {
                  return Math.pow(t + n * e, r);
                }
              );
            })(e, r, t)
          : Bd(isNaN(e) ? r : e);
      };
}
function Ld(t, e) {
  var r = e - t;
  return r
    ? (function (t, e) {
        return function (r) {
          return t + r * e;
        };
      })(t, r)
    : Bd(isNaN(t) ? e : t);
}
const zd = (function t(e) {
  var r = Rd(e);
  function n(t, e) {
    var n = r((t = Sd(t)).r, (e = Sd(e)).r),
      i = r(t.g, e.g),
      o = r(t.b, e.b),
      a = Ld(t.opacity, e.opacity);
    return function (e) {
      return (
        (t.r = n(e)), (t.g = i(e)), (t.b = o(e)), (t.opacity = a(e)), t + ''
      );
    };
  }
  return (n.gamma = t), n;
})(1);
function $d(t, e) {
  e || (e = []);
  var r,
    n = t ? Math.min(e.length, t.length) : 0,
    i = e.slice();
  return function (o) {
    for (r = 0; r < n; ++r) i[r] = t[r] * (1 - o) + e[r] * o;
    return i;
  };
}
function Ud(t, e) {
  var r,
    n = e ? e.length : 0,
    i = t ? Math.min(n, t.length) : 0,
    o = new Array(i),
    a = new Array(n);
  for (r = 0; r < i; ++r) o[r] = Hd(t[r], e[r]);
  for (; r < n; ++r) a[r] = e[r];
  return function (t) {
    for (r = 0; r < i; ++r) a[r] = o[r](t);
    return a;
  };
}
function Fd(t, e) {
  var r = new Date();
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return r.setTime(t * (1 - n) + e * n), r;
    }
  );
}
function Wd(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return t * (1 - r) + e * r;
    }
  );
}
function qd(t, e) {
  var r,
    n = {},
    i = {};
  for (r in ((null !== t && 'object' == typeof t) || (t = {}),
  (null !== e && 'object' == typeof e) || (e = {}),
  e))
    r in t ? (n[r] = Hd(t[r], e[r])) : (i[r] = e[r]);
  return function (t) {
    for (r in n) i[r] = n[r](t);
    return i;
  };
}
var Xd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Gd = new RegExp(Xd.source, 'g');
function Vd(t, e) {
  var r,
    n,
    i,
    o = (Xd.lastIndex = Gd.lastIndex = 0),
    a = -1,
    c = [],
    u = [];
  for (t += '', e += ''; (r = Xd.exec(t)) && (n = Gd.exec(e)); )
    (i = n.index) > o &&
      ((i = e.slice(o, i)), c[a] ? (c[a] += i) : (c[++a] = i)),
      (r = r[0]) === (n = n[0])
        ? c[a]
          ? (c[a] += n)
          : (c[++a] = n)
        : ((c[++a] = null), u.push({ i: a, x: Wd(r, n) })),
      (o = Gd.lastIndex);
  return (
    o < e.length && ((i = e.slice(o)), c[a] ? (c[a] += i) : (c[++a] = i)),
    c.length < 2
      ? u[0]
        ? (function (t) {
            return function (e) {
              return t(e) + '';
            };
          })(u[0].x)
        : (function (t) {
            return function () {
              return t;
            };
          })(e)
      : ((e = u.length),
        function (t) {
          for (var r, n = 0; n < e; ++n) c[(r = u[n]).i] = r.x(t);
          return c.join('');
        })
  );
}
function Hd(t, e) {
  var r,
    n,
    i = typeof e;
  return null == e || 'boolean' === i
    ? Bd(e)
    : ('number' === i
        ? Wd
        : 'string' === i
        ? (r = xd(e))
          ? ((e = r), zd)
          : Vd
        : e instanceof xd
        ? zd
        : e instanceof Date
        ? Fd
        : ((n = e),
          !ArrayBuffer.isView(n) || n instanceof DataView
            ? Array.isArray(e)
              ? Ud
              : ('function' != typeof e.valueOf &&
                  'function' != typeof e.toString) ||
                isNaN(e)
              ? qd
              : Wd
            : $d))(t, e);
}
function Yd(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return Math.round(t * (1 - r) + e * r);
    }
  );
}
function Kd(t) {
  return +t;
}
var Zd = [0, 1];
function Jd(t) {
  return t;
}
function Qd(t, e) {
  return (e -= t = +t)
    ? function (r) {
        return (r - t) / e;
      }
    : ((r = isNaN(e) ? NaN : 0.5),
      function () {
        return r;
      });
  var r;
}
function ty(t, e, r) {
  var n = t[0],
    i = t[1],
    o = e[0],
    a = e[1];
  return (
    i < n ? ((n = Qd(i, n)), (o = r(a, o))) : ((n = Qd(n, i)), (o = r(o, a))),
    function (t) {
      return o(n(t));
    }
  );
}
function ey(t, e, r) {
  var n = Math.min(t.length, e.length) - 1,
    i = new Array(n),
    o = new Array(n),
    a = -1;
  for (
    t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
    ++a < n;

  )
    (i[a] = Qd(t[a], t[a + 1])), (o[a] = r(e[a], e[a + 1]));
  return function (e) {
    var r = Ch(t, e, 1, n) - 1;
    return o[r](i[r](e));
  };
}
function ry(t, e) {
  return e
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function ny() {
  var t,
    e,
    r,
    n,
    i,
    o,
    a = Zd,
    c = Zd,
    u = Hd,
    l = Jd;
  function s() {
    var t,
      e,
      r,
      u = Math.min(a.length, c.length);
    return (
      l !== Jd &&
        ((t = a[0]),
        (e = a[u - 1]),
        t > e && ((r = t), (t = e), (e = r)),
        (l = function (r) {
          return Math.max(t, Math.min(e, r));
        })),
      (n = u > 2 ? ey : ty),
      (i = o = null),
      f
    );
  }
  function f(e) {
    return null == e || isNaN((e = +e))
      ? r
      : (i || (i = n(a.map(t), c, u)))(t(l(e)));
  }
  return (
    (f.invert = function (r) {
      return l(e((o || (o = n(c, a.map(t), Wd)))(r)));
    }),
    (f.domain = function (t) {
      return arguments.length ? ((a = Array.from(t, Kd)), s()) : a.slice();
    }),
    (f.range = function (t) {
      return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
    }),
    (f.rangeRound = function (t) {
      return (c = Array.from(t)), (u = Yd), s();
    }),
    (f.clamp = function (t) {
      return arguments.length ? ((l = !!t || Jd), s()) : l !== Jd;
    }),
    (f.interpolate = function (t) {
      return arguments.length ? ((u = t), s()) : u;
    }),
    (f.unknown = function (t) {
      return arguments.length ? ((r = t), f) : r;
    }),
    function (r, n) {
      return (t = r), (e = n), s();
    }
  );
}
function iy() {
  return ny()(Jd, Jd);
}
function oy(t, e) {
  if (
    (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0
  )
    return null;
  var r,
    n = t.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
}
function ay(t) {
  return (t = oy(Math.abs(t))) ? t[1] : NaN;
}
var cy,
  uy =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ly(t) {
  if (!(e = uy.exec(t))) throw new Error('invalid format: ' + t);
  var e;
  return new sy({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10],
  });
}
function sy(t) {
  (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
    (this.align = void 0 === t.align ? '>' : t.align + ''),
    (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
    (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
    (this.zero = !!t.zero),
    (this.width = void 0 === t.width ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = void 0 === t.precision ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = void 0 === t.type ? '' : t.type + '');
}
function fy(t, e) {
  var r = oy(t, e);
  if (!r) return t + '';
  var n = r[0],
    i = r[1];
  return i < 0
    ? '0.' + new Array(-i).join('0') + n
    : n.length > i + 1
    ? n.slice(0, i + 1) + '.' + n.slice(i + 1)
    : n + new Array(i - n.length + 2).join('0');
}
(ly.prototype = sy.prototype),
  (sy.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? '0' : '') +
      (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
      (this.comma ? ',' : '') +
      (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
      (this.trim ? '~' : '') +
      this.type
    );
  });
const py = {
  '%': (t, e) => (100 * t).toFixed(e),
  b: t => Math.round(t).toString(2),
  c: t => t + '',
  d: function (t) {
    return Math.abs((t = Math.round(t))) >= 1e21
      ? t.toLocaleString('en').replace(/,/g, '')
      : t.toString(10);
  },
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: t => Math.round(t).toString(8),
  p: (t, e) => fy(100 * t, e),
  r: fy,
  s: function (t, e) {
    var r = oy(t, e);
    if (!r) return t + '';
    var n = r[0],
      i = r[1],
      o = i - (cy = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
      a = n.length;
    return o === a
      ? n
      : o > a
      ? n + new Array(o - a + 1).join('0')
      : o > 0
      ? n.slice(0, o) + '.' + n.slice(o)
      : '0.' + new Array(1 - o).join('0') + oy(t, Math.max(0, e + o - 1))[0];
  },
  X: t => Math.round(t).toString(16).toUpperCase(),
  x: t => Math.round(t).toString(16),
};
function hy(t) {
  return t;
}
var dy,
  yy,
  vy,
  my = Array.prototype.map,
  gy = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    'µ',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ];
function by(t) {
  var e,
    r,
    n =
      void 0 === t.grouping || void 0 === t.thousands
        ? hy
        : ((e = my.call(t.grouping, Number)),
          (r = t.thousands + ''),
          function (t, n) {
            for (
              var i = t.length, o = [], a = 0, c = e[0], u = 0;
              i > 0 &&
              c > 0 &&
              (u + c + 1 > n && (c = Math.max(1, n - u)),
              o.push(t.substring((i -= c), i + c)),
              !((u += c + 1) > n));

            )
              c = e[(a = (a + 1) % e.length)];
            return o.reverse().join(r);
          }),
    i = void 0 === t.currency ? '' : t.currency[0] + '',
    o = void 0 === t.currency ? '' : t.currency[1] + '',
    a = void 0 === t.decimal ? '.' : t.decimal + '',
    c =
      void 0 === t.numerals
        ? hy
        : (function (t) {
            return function (e) {
              return e.replace(/[0-9]/g, function (e) {
                return t[+e];
              });
            };
          })(my.call(t.numerals, String)),
    u = void 0 === t.percent ? '%' : t.percent + '',
    l = void 0 === t.minus ? '−' : t.minus + '',
    s = void 0 === t.nan ? 'NaN' : t.nan + '';
  function f(t) {
    var e = (t = ly(t)).fill,
      r = t.align,
      f = t.sign,
      p = t.symbol,
      h = t.zero,
      d = t.width,
      y = t.comma,
      v = t.precision,
      m = t.trim,
      g = t.type;
    'n' === g
      ? ((y = !0), (g = 'g'))
      : py[g] || (void 0 === v && (v = 12), (m = !0), (g = 'g')),
      (h || ('0' === e && '=' === r)) && ((h = !0), (e = '0'), (r = '='));
    var b =
        '$' === p
          ? i
          : '#' === p && /[boxX]/.test(g)
          ? '0' + g.toLowerCase()
          : '',
      x = '$' === p ? o : /[%p]/.test(g) ? u : '',
      w = py[g],
      O = /[defgprs%]/.test(g);
    function S(t) {
      var i,
        o,
        u,
        p = b,
        S = x;
      if ('c' === g) (S = w(t) + S), (t = '');
      else {
        var j = (t = +t) < 0 || 1 / t < 0;
        if (
          ((t = isNaN(t) ? s : w(Math.abs(t), v)),
          m &&
            (t = (function (t) {
              t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                switch (t[n]) {
                  case '.':
                    i = e = n;
                    break;
                  case '0':
                    0 === i && (i = n), (e = n);
                    break;
                  default:
                    if (!+t[n]) break t;
                    i > 0 && (i = 0);
                }
              return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
            })(t)),
          j && 0 == +t && '+' !== f && (j = !1),
          (p = (j ? ('(' === f ? f : l) : '-' === f || '(' === f ? '' : f) + p),
          (S =
            ('s' === g ? gy[8 + cy / 3] : '') +
            S +
            (j && '(' === f ? ')' : '')),
          O)
        )
          for (i = -1, o = t.length; ++i < o; )
            if (48 > (u = t.charCodeAt(i)) || u > 57) {
              (S = (46 === u ? a + t.slice(i + 1) : t.slice(i)) + S),
                (t = t.slice(0, i));
              break;
            }
      }
      y && !h && (t = n(t, 1 / 0));
      var A = p.length + t.length + S.length,
        P = A < d ? new Array(d - A + 1).join(e) : '';
      switch (
        (y && h && ((t = n(P + t, P.length ? d - S.length : 1 / 0)), (P = '')),
        r)
      ) {
        case '<':
          t = p + t + S + P;
          break;
        case '=':
          t = p + P + t + S;
          break;
        case '^':
          t = P.slice(0, (A = P.length >> 1)) + p + t + S + P.slice(A);
          break;
        default:
          t = P + p + t + S;
      }
      return c(t);
    }
    return (
      (v =
        void 0 === v
          ? 6
          : /[gprs]/.test(g)
          ? Math.max(1, Math.min(21, v))
          : Math.max(0, Math.min(20, v))),
      (S.toString = function () {
        return t + '';
      }),
      S
    );
  }
  return {
    format: f,
    formatPrefix: function (t, e) {
      var r = f((((t = ly(t)).type = 'f'), t)),
        n = 3 * Math.max(-8, Math.min(8, Math.floor(ay(e) / 3))),
        i = Math.pow(10, -n),
        o = gy[8 + n / 3];
      return function (t) {
        return r(i * t) + o;
      };
    },
  };
}
function xy(t, e, r, n) {
  var i,
    o = Wh(t, e, r);
  switch ((n = ly(null == n ? ',f' : n)).type) {
    case 's':
      var a = Math.max(Math.abs(t), Math.abs(e));
      return (
        null != n.precision ||
          isNaN(
            (i = (function (t, e) {
              return Math.max(
                0,
                3 * Math.max(-8, Math.min(8, Math.floor(ay(e) / 3))) -
                  ay(Math.abs(t)),
              );
            })(o, a)),
          ) ||
          (n.precision = i),
        vy(n, a)
      );
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r':
      null != n.precision ||
        isNaN(
          (i = (function (t, e) {
            return (
              (t = Math.abs(t)),
              (e = Math.abs(e) - t),
              Math.max(0, ay(e) - ay(t)) + 1
            );
          })(o, Math.max(Math.abs(t), Math.abs(e)))),
        ) ||
        (n.precision = i - ('e' === n.type));
      break;
    case 'f':
    case '%':
      null != n.precision ||
        isNaN(
          (i = (function (t) {
            return Math.max(0, -ay(Math.abs(t)));
          })(o)),
        ) ||
        (n.precision = i - 2 * ('%' === n.type));
  }
  return yy(n);
}
function wy(t) {
  var e = t.domain;
  return (
    (t.ticks = function (t) {
      var r = e();
      return Uh(r[0], r[r.length - 1], null == t ? 10 : t);
    }),
    (t.tickFormat = function (t, r) {
      var n = e();
      return xy(n[0], n[n.length - 1], null == t ? 10 : t, r);
    }),
    (t.nice = function (r) {
      null == r && (r = 10);
      var n,
        i,
        o = e(),
        a = 0,
        c = o.length - 1,
        u = o[a],
        l = o[c],
        s = 10;
      for (
        l < u && ((i = u), (u = l), (l = i), (i = a), (a = c), (c = i));
        s-- > 0;

      ) {
        if ((i = Fh(u, l, r)) === n) return (o[a] = u), (o[c] = l), e(o);
        if (i > 0) (u = Math.floor(u / i) * i), (l = Math.ceil(l / i) * i);
        else {
          if (!(i < 0)) break;
          (u = Math.ceil(u * i) / i), (l = Math.floor(l * i) / i);
        }
        n = i;
      }
      return t;
    }),
    t
  );
}
function Oy() {
  var t = iy();
  return (
    (t.copy = function () {
      return ry(t, Oy());
    }),
    Yh.apply(t, arguments),
    wy(t)
  );
}
function Sy(t, e) {
  var r,
    n = 0,
    i = (t = t.slice()).length - 1,
    o = t[n],
    a = t[i];
  return (
    a < o && ((r = n), (n = i), (i = r), (r = o), (o = a), (a = r)),
    (t[n] = e.floor(o)),
    (t[i] = e.ceil(a)),
    t
  );
}
function jy(t) {
  return Math.log(t);
}
function Ay(t) {
  return Math.exp(t);
}
function Py(t) {
  return -Math.log(-t);
}
function ky(t) {
  return -Math.exp(-t);
}
function Ey(t) {
  return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
}
function My(t) {
  return (e, r) => -t(-e, r);
}
function _y(t) {
  const e = t(jy, Ay),
    r = e.domain;
  let n,
    i,
    o = 10;
  function a() {
    return (
      (n = (function (t) {
        return t === Math.E
          ? Math.log
          : (10 === t && Math.log10) ||
              (2 === t && Math.log2) ||
              ((t = Math.log(t)), e => Math.log(e) / t);
      })(o)),
      (i = (function (t) {
        return 10 === t ? Ey : t === Math.E ? Math.exp : e => Math.pow(t, e);
      })(o)),
      r()[0] < 0 ? ((n = My(n)), (i = My(i)), t(Py, ky)) : t(jy, Ay),
      e
    );
  }
  return (
    (e.base = function (t) {
      return arguments.length ? ((o = +t), a()) : o;
    }),
    (e.domain = function (t) {
      return arguments.length ? (r(t), a()) : r();
    }),
    (e.ticks = t => {
      const e = r();
      let a = e[0],
        c = e[e.length - 1];
      const u = c < a;
      u && ([a, c] = [c, a]);
      let l,
        s,
        f = n(a),
        p = n(c);
      const h = null == t ? 10 : +t;
      let d = [];
      if (!(o % 1) && p - f < h) {
        if (((f = Math.floor(f)), (p = Math.ceil(p)), a > 0)) {
          for (; f <= p; ++f)
            for (l = 1; l < o; ++l)
              if (((s = f < 0 ? l / i(-f) : l * i(f)), !(s < a))) {
                if (s > c) break;
                d.push(s);
              }
        } else
          for (; f <= p; ++f)
            for (l = o - 1; l >= 1; --l)
              if (((s = f > 0 ? l / i(-f) : l * i(f)), !(s < a))) {
                if (s > c) break;
                d.push(s);
              }
        2 * d.length < h && (d = Uh(a, c, h));
      } else d = Uh(f, p, Math.min(p - f, h)).map(i);
      return u ? d.reverse() : d;
    }),
    (e.tickFormat = (t, r) => {
      if (
        (null == t && (t = 10),
        null == r && (r = 10 === o ? 's' : ','),
        'function' != typeof r &&
          (o % 1 || null != (r = ly(r)).precision || (r.trim = !0),
          (r = yy(r))),
        t === 1 / 0)
      )
        return r;
      const a = Math.max(1, (o * t) / e.ticks().length);
      return t => {
        let e = t / i(Math.round(n(t)));
        return e * o < o - 0.5 && (e *= o), e <= a ? r(t) : '';
      };
    }),
    (e.nice = () =>
      r(
        Sy(r(), {
          floor: t => i(Math.floor(n(t))),
          ceil: t => i(Math.ceil(n(t))),
        }),
      )),
    e
  );
}
function Ty(t) {
  return function (e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function Cy(t) {
  return function (e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function Dy(t) {
  var e = 1,
    r = t(Ty(e), Cy(e));
  return (
    (r.constant = function (r) {
      return arguments.length ? t(Ty((e = +r)), Cy(e)) : e;
    }),
    wy(r)
  );
}
function Ny(t) {
  return function (e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Iy(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function By(t) {
  return t < 0 ? -t * t : t * t;
}
function Ry(t) {
  var e = t(Jd, Jd),
    r = 1;
  return (
    (e.exponent = function (e) {
      return arguments.length
        ? 1 === (r = +e)
          ? t(Jd, Jd)
          : 0.5 === r
          ? t(Iy, By)
          : t(Ny(r), Ny(1 / r))
        : r;
    }),
    wy(e)
  );
}
function Ly() {
  var t = Ry(ny());
  return (
    (t.copy = function () {
      return ry(t, Ly()).exponent(t.exponent());
    }),
    Yh.apply(t, arguments),
    t
  );
}
function zy(t) {
  return Math.sign(t) * t * t;
}
(dy = by({ thousands: ',', grouping: [3], currency: ['$', ''] })),
  (yy = dy.format),
  (vy = dy.formatPrefix);
const $y = new Date(),
  Uy = new Date();
function Fy(t, e, r, n) {
  function i(e) {
    return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
  }
  return (
    (i.floor = e => (t((e = new Date(+e))), e)),
    (i.ceil = r => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
    (i.round = t => {
      const e = i(t),
        r = i.ceil(t);
      return t - e < r - t ? e : r;
    }),
    (i.offset = (t, r) => (
      e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
    )),
    (i.range = (r, n, o) => {
      const a = [];
      if (
        ((r = i.ceil(r)),
        (o = null == o ? 1 : Math.floor(o)),
        !(r < n && o > 0))
      )
        return a;
      let c;
      do {
        a.push((c = new Date(+r))), e(r, o), t(r);
      } while (c < r && r < n);
      return a;
    }),
    (i.filter = r =>
      Fy(
        e => {
          if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
        },
        (t, n) => {
          if (t >= t)
            if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
            else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
        },
      )),
    r &&
      ((i.count = (e, n) => (
        $y.setTime(+e), Uy.setTime(+n), t($y), t(Uy), Math.floor(r($y, Uy))
      )),
      (i.every = t => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? i.filter(n ? e => n(e) % t == 0 : e => i.count(0, e) % t == 0)
            : i
          : null
      ))),
    i
  );
}
const Wy = Fy(
  () => {},
  (t, e) => {
    t.setTime(+t + e);
  },
  (t, e) => e - t,
);
(Wy.every = t => (
  (t = Math.floor(t)),
  isFinite(t) && t > 0
    ? t > 1
      ? Fy(
          e => {
            e.setTime(Math.floor(e / t) * t);
          },
          (e, r) => {
            e.setTime(+e + r * t);
          },
          (e, r) => (r - e) / t,
        )
      : Wy
    : null
)),
  Wy.range;
const qy = 1e3,
  Xy = 60 * qy,
  Gy = 60 * Xy,
  Vy = 24 * Gy,
  Hy = 7 * Vy,
  Yy = 30 * Vy,
  Ky = 365 * Vy,
  Zy = Fy(
    t => {
      t.setTime(t - t.getMilliseconds());
    },
    (t, e) => {
      t.setTime(+t + e * qy);
    },
    (t, e) => (e - t) / qy,
    t => t.getUTCSeconds(),
  );
Zy.range;
const Jy = Fy(
  t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * qy);
  },
  (t, e) => {
    t.setTime(+t + e * Xy);
  },
  (t, e) => (e - t) / Xy,
  t => t.getMinutes(),
);
Jy.range;
const Qy = Fy(
  t => {
    t.setUTCSeconds(0, 0);
  },
  (t, e) => {
    t.setTime(+t + e * Xy);
  },
  (t, e) => (e - t) / Xy,
  t => t.getUTCMinutes(),
);
Qy.range;
const tv = Fy(
  t => {
    t.setTime(
      t - t.getMilliseconds() - t.getSeconds() * qy - t.getMinutes() * Xy,
    );
  },
  (t, e) => {
    t.setTime(+t + e * Gy);
  },
  (t, e) => (e - t) / Gy,
  t => t.getHours(),
);
tv.range;
const ev = Fy(
  t => {
    t.setUTCMinutes(0, 0, 0);
  },
  (t, e) => {
    t.setTime(+t + e * Gy);
  },
  (t, e) => (e - t) / Gy,
  t => t.getUTCHours(),
);
ev.range;
const rv = Fy(
  t => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Xy) / Vy,
  t => t.getDate() - 1,
);
rv.range;
const nv = Fy(
  t => {
    t.setUTCHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setUTCDate(t.getUTCDate() + e);
  },
  (t, e) => (e - t) / Vy,
  t => t.getUTCDate() - 1,
);
nv.range;
const iv = Fy(
  t => {
    t.setUTCHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setUTCDate(t.getUTCDate() + e);
  },
  (t, e) => (e - t) / Vy,
  t => Math.floor(t / Vy),
);
function ov(t) {
  return Fy(
    e => {
      e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
        e.setHours(0, 0, 0, 0);
    },
    (t, e) => {
      t.setDate(t.getDate() + 7 * e);
    },
    (t, e) =>
      (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Xy) / Hy,
  );
}
iv.range;
const av = ov(0),
  cv = ov(1),
  uv = ov(2),
  lv = ov(3),
  sv = ov(4),
  fv = ov(5),
  pv = ov(6);
function hv(t) {
  return Fy(
    e => {
      e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
        e.setUTCHours(0, 0, 0, 0);
    },
    (t, e) => {
      t.setUTCDate(t.getUTCDate() + 7 * e);
    },
    (t, e) => (e - t) / Hy,
  );
}
av.range, cv.range, uv.range, lv.range, sv.range, fv.range, pv.range;
const dv = hv(0),
  yv = hv(1),
  vv = hv(2),
  mv = hv(3),
  gv = hv(4),
  bv = hv(5),
  xv = hv(6);
dv.range, yv.range, vv.range, mv.range, gv.range, bv.range, xv.range;
const wv = Fy(
  t => {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setMonth(t.getMonth() + e);
  },
  (t, e) =>
    e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()),
  t => t.getMonth(),
);
wv.range;
const Ov = Fy(
  t => {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setUTCMonth(t.getUTCMonth() + e);
  },
  (t, e) =>
    e.getUTCMonth() -
    t.getUTCMonth() +
    12 * (e.getUTCFullYear() - t.getUTCFullYear()),
  t => t.getUTCMonth(),
);
Ov.range;
const Sv = Fy(
  t => {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setFullYear(t.getFullYear() + e);
  },
  (t, e) => e.getFullYear() - t.getFullYear(),
  t => t.getFullYear(),
);
(Sv.every = t =>
  isFinite((t = Math.floor(t))) && t > 0
    ? Fy(
        e => {
          e.setFullYear(Math.floor(e.getFullYear() / t) * t),
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0);
        },
        (e, r) => {
          e.setFullYear(e.getFullYear() + r * t);
        },
      )
    : null),
  Sv.range;
const jv = Fy(
  t => {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setUTCFullYear(t.getUTCFullYear() + e);
  },
  (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
  t => t.getUTCFullYear(),
);
function Av(t, e, r, n, i, o) {
  const a = [
    [Zy, 1, qy],
    [Zy, 5, 5 * qy],
    [Zy, 15, 15 * qy],
    [Zy, 30, 30 * qy],
    [o, 1, Xy],
    [o, 5, 5 * Xy],
    [o, 15, 15 * Xy],
    [o, 30, 30 * Xy],
    [i, 1, Gy],
    [i, 3, 3 * Gy],
    [i, 6, 6 * Gy],
    [i, 12, 12 * Gy],
    [n, 1, Vy],
    [n, 2, 2 * Vy],
    [r, 1, Hy],
    [e, 1, Yy],
    [e, 3, 3 * Yy],
    [t, 1, Ky],
  ];
  function c(e, r, n) {
    const i = Math.abs(r - e) / n,
      o = Eh(([, , t]) => t).right(a, i);
    if (o === a.length) return t.every(Wh(e / Ky, r / Ky, n));
    if (0 === o) return Wy.every(Math.max(Wh(e, r, n), 1));
    const [c, u] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
    return c.every(u);
  }
  return [
    function (t, e, r) {
      const n = e < t;
      n && ([t, e] = [e, t]);
      const i = r && 'function' == typeof r.range ? r : c(t, e, r),
        o = i ? i.range(t, +e + 1) : [];
      return n ? o.reverse() : o;
    },
    c,
  ];
}
(jv.every = t =>
  isFinite((t = Math.floor(t))) && t > 0
    ? Fy(
        e => {
          e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0);
        },
        (e, r) => {
          e.setUTCFullYear(e.getUTCFullYear() + r * t);
        },
      )
    : null),
  jv.range;
const [Pv, kv] = Av(jv, Ov, dv, iv, ev, Qy),
  [Ev, Mv] = Av(Sv, wv, av, rv, tv, Jy);
function _v(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Tv(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Cv(t, e, r) {
  return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
}
var Dv,
  Nv,
  Iv,
  Bv = { '-': '', _: ' ', 0: '0' },
  Rv = /^\s*\d+/,
  Lv = /^%/,
  zv = /[\\^$*+?|[\]().{}]/g;
function $v(t, e, r) {
  var n = t < 0 ? '-' : '',
    i = (n ? -t : t) + '',
    o = i.length;
  return n + (o < r ? new Array(r - o + 1).join(e) + i : i);
}
function Uv(t) {
  return t.replace(zv, '\\$&');
}
function Fv(t) {
  return new RegExp('^(?:' + t.map(Uv).join('|') + ')', 'i');
}
function Wv(t) {
  return new Map(t.map((t, e) => [t.toLowerCase(), e]));
}
function qv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 1));
  return n ? ((t.w = +n[0]), r + n[0].length) : -1;
}
function Xv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 1));
  return n ? ((t.u = +n[0]), r + n[0].length) : -1;
}
function Gv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.U = +n[0]), r + n[0].length) : -1;
}
function Vv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.V = +n[0]), r + n[0].length) : -1;
}
function Hv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.W = +n[0]), r + n[0].length) : -1;
}
function Yv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 4));
  return n ? ((t.y = +n[0]), r + n[0].length) : -1;
}
function Kv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function Zv(t, e, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
  return n
    ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length)
    : -1;
}
function Jv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 1));
  return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
}
function Qv(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
}
function tm(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.d = +n[0]), r + n[0].length) : -1;
}
function em(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 3));
  return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
}
function rm(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.H = +n[0]), r + n[0].length) : -1;
}
function nm(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.M = +n[0]), r + n[0].length) : -1;
}
function im(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 2));
  return n ? ((t.S = +n[0]), r + n[0].length) : -1;
}
function om(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 3));
  return n ? ((t.L = +n[0]), r + n[0].length) : -1;
}
function am(t, e, r) {
  var n = Rv.exec(e.slice(r, r + 6));
  return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function cm(t, e, r) {
  var n = Lv.exec(e.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function um(t, e, r) {
  var n = Rv.exec(e.slice(r));
  return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
}
function lm(t, e, r) {
  var n = Rv.exec(e.slice(r));
  return n ? ((t.s = +n[0]), r + n[0].length) : -1;
}
function sm(t, e) {
  return $v(t.getDate(), e, 2);
}
function fm(t, e) {
  return $v(t.getHours(), e, 2);
}
function pm(t, e) {
  return $v(t.getHours() % 12 || 12, e, 2);
}
function hm(t, e) {
  return $v(1 + rv.count(Sv(t), t), e, 3);
}
function dm(t, e) {
  return $v(t.getMilliseconds(), e, 3);
}
function ym(t, e) {
  return dm(t, e) + '000';
}
function vm(t, e) {
  return $v(t.getMonth() + 1, e, 2);
}
function mm(t, e) {
  return $v(t.getMinutes(), e, 2);
}
function gm(t, e) {
  return $v(t.getSeconds(), e, 2);
}
function bm(t) {
  var e = t.getDay();
  return 0 === e ? 7 : e;
}
function xm(t, e) {
  return $v(av.count(Sv(t) - 1, t), e, 2);
}
function wm(t) {
  var e = t.getDay();
  return e >= 4 || 0 === e ? sv(t) : sv.ceil(t);
}
function Om(t, e) {
  return (t = wm(t)), $v(sv.count(Sv(t), t) + (4 === Sv(t).getDay()), e, 2);
}
function Sm(t) {
  return t.getDay();
}
function jm(t, e) {
  return $v(cv.count(Sv(t) - 1, t), e, 2);
}
function Am(t, e) {
  return $v(t.getFullYear() % 100, e, 2);
}
function Pm(t, e) {
  return $v((t = wm(t)).getFullYear() % 100, e, 2);
}
function km(t, e) {
  return $v(t.getFullYear() % 1e4, e, 4);
}
function Em(t, e) {
  var r = t.getDay();
  return $v(
    (t = r >= 4 || 0 === r ? sv(t) : sv.ceil(t)).getFullYear() % 1e4,
    e,
    4,
  );
}
function Mm(t) {
  var e = t.getTimezoneOffset();
  return (
    (e > 0 ? '-' : ((e *= -1), '+')) +
    $v((e / 60) | 0, '0', 2) +
    $v(e % 60, '0', 2)
  );
}
function _m(t, e) {
  return $v(t.getUTCDate(), e, 2);
}
function Tm(t, e) {
  return $v(t.getUTCHours(), e, 2);
}
function Cm(t, e) {
  return $v(t.getUTCHours() % 12 || 12, e, 2);
}
function Dm(t, e) {
  return $v(1 + nv.count(jv(t), t), e, 3);
}
function Nm(t, e) {
  return $v(t.getUTCMilliseconds(), e, 3);
}
function Im(t, e) {
  return Nm(t, e) + '000';
}
function Bm(t, e) {
  return $v(t.getUTCMonth() + 1, e, 2);
}
function Rm(t, e) {
  return $v(t.getUTCMinutes(), e, 2);
}
function Lm(t, e) {
  return $v(t.getUTCSeconds(), e, 2);
}
function zm(t) {
  var e = t.getUTCDay();
  return 0 === e ? 7 : e;
}
function $m(t, e) {
  return $v(dv.count(jv(t) - 1, t), e, 2);
}
function Um(t) {
  var e = t.getUTCDay();
  return e >= 4 || 0 === e ? gv(t) : gv.ceil(t);
}
function Fm(t, e) {
  return (t = Um(t)), $v(gv.count(jv(t), t) + (4 === jv(t).getUTCDay()), e, 2);
}
function Wm(t) {
  return t.getUTCDay();
}
function qm(t, e) {
  return $v(yv.count(jv(t) - 1, t), e, 2);
}
function Xm(t, e) {
  return $v(t.getUTCFullYear() % 100, e, 2);
}
function Gm(t, e) {
  return $v((t = Um(t)).getUTCFullYear() % 100, e, 2);
}
function Vm(t, e) {
  return $v(t.getUTCFullYear() % 1e4, e, 4);
}
function Hm(t, e) {
  var r = t.getUTCDay();
  return $v(
    (t = r >= 4 || 0 === r ? gv(t) : gv.ceil(t)).getUTCFullYear() % 1e4,
    e,
    4,
  );
}
function Ym() {
  return '+0000';
}
function Km() {
  return '%';
}
function Zm(t) {
  return +t;
}
function Jm(t) {
  return Math.floor(+t / 1e3);
}
function Qm(t) {
  return new Date(t);
}
function tg(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function eg(t, e, r, n, i, o, a, c, u, l) {
  var s = iy(),
    f = s.invert,
    p = s.domain,
    h = l('.%L'),
    d = l(':%S'),
    y = l('%I:%M'),
    v = l('%I %p'),
    m = l('%a %d'),
    g = l('%b %d'),
    b = l('%B'),
    x = l('%Y');
  function w(t) {
    return (
      u(t) < t
        ? h
        : c(t) < t
        ? d
        : a(t) < t
        ? y
        : o(t) < t
        ? v
        : n(t) < t
        ? i(t) < t
          ? m
          : g
        : r(t) < t
        ? b
        : x
    )(t);
  }
  return (
    (s.invert = function (t) {
      return new Date(f(t));
    }),
    (s.domain = function (t) {
      return arguments.length ? p(Array.from(t, tg)) : p().map(Qm);
    }),
    (s.ticks = function (e) {
      var r = p();
      return t(r[0], r[r.length - 1], null == e ? 10 : e);
    }),
    (s.tickFormat = function (t, e) {
      return null == e ? w : l(e);
    }),
    (s.nice = function (t) {
      var r = p();
      return (
        (t && 'function' == typeof t.range) ||
          (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
        t ? p(Sy(r, t)) : s
      );
    }),
    (s.copy = function () {
      return ry(s, eg(t, e, r, n, i, o, a, c, u, l));
    }),
    s
  );
}
function rg() {
  var t,
    e,
    r,
    n,
    i,
    o = 0,
    a = 1,
    c = Jd,
    u = !1;
  function l(e) {
    return null == e || isNaN((e = +e))
      ? i
      : c(
          0 === r
            ? 0.5
            : ((e = (n(e) - t) * r), u ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  function s(t) {
    return function (e) {
      var r, n;
      return arguments.length ? (([r, n] = e), (c = t(r, n)), l) : [c(0), c(1)];
    };
  }
  return (
    (l.domain = function (i) {
      return arguments.length
        ? (([o, a] = i),
          (t = n((o = +o))),
          (e = n((a = +a))),
          (r = t === e ? 0 : 1 / (e - t)),
          l)
        : [o, a];
    }),
    (l.clamp = function (t) {
      return arguments.length ? ((u = !!t), l) : u;
    }),
    (l.interpolator = function (t) {
      return arguments.length ? ((c = t), l) : c;
    }),
    (l.range = s(Hd)),
    (l.rangeRound = s(Yd)),
    (l.unknown = function (t) {
      return arguments.length ? ((i = t), l) : i;
    }),
    function (i) {
      return (
        (n = i), (t = i(o)), (e = i(a)), (r = t === e ? 0 : 1 / (e - t)), l
      );
    }
  );
}
function ng(t, e) {
  return e
    .domain(t.domain())
    .interpolator(t.interpolator())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function ig() {
  var t = Ry(rg());
  return (
    (t.copy = function () {
      return ng(t, ig()).exponent(t.exponent());
    }),
    Kh.apply(t, arguments)
  );
}
function og() {
  var t,
    e,
    r,
    n,
    i,
    o,
    a,
    c = 0,
    u = 0.5,
    l = 1,
    s = 1,
    f = Jd,
    p = !1;
  function h(t) {
    return isNaN((t = +t))
      ? a
      : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? n : i)),
        f(p ? Math.max(0, Math.min(1, t)) : t));
  }
  function d(t) {
    return function (e) {
      var r, n, i;
      return arguments.length
        ? (([r, n, i] = e),
          (f = (function (t, e) {
            void 0 === e && ((e = t), (t = Hd));
            for (
              var r = 0,
                n = e.length - 1,
                i = e[0],
                o = new Array(n < 0 ? 0 : n);
              r < n;

            )
              o[r] = t(i, (i = e[++r]));
            return function (t) {
              var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
              return o[e](t - e);
            };
          })(t, [r, n, i])),
          h)
        : [f(0), f(0.5), f(1)];
    };
  }
  return (
    (h.domain = function (a) {
      return arguments.length
        ? (([c, u, l] = a),
          (t = o((c = +c))),
          (e = o((u = +u))),
          (r = o((l = +l))),
          (n = t === e ? 0 : 0.5 / (e - t)),
          (i = e === r ? 0 : 0.5 / (r - e)),
          (s = e < t ? -1 : 1),
          h)
        : [c, u, l];
    }),
    (h.clamp = function (t) {
      return arguments.length ? ((p = !!t), h) : p;
    }),
    (h.interpolator = function (t) {
      return arguments.length ? ((f = t), h) : f;
    }),
    (h.range = d(Hd)),
    (h.rangeRound = d(Yd)),
    (h.unknown = function (t) {
      return arguments.length ? ((a = t), h) : a;
    }),
    function (a) {
      return (
        (o = a),
        (t = a(c)),
        (e = a(u)),
        (r = a(l)),
        (n = t === e ? 0 : 0.5 / (e - t)),
        (i = e === r ? 0 : 0.5 / (r - e)),
        (s = e < t ? -1 : 1),
        h
      );
    }
  );
}
function ag() {
  var t = Ry(og());
  return (
    (t.copy = function () {
      return ng(t, ag()).exponent(t.exponent());
    }),
    Kh.apply(t, arguments)
  );
}
!(function (t) {
  (Dv = (function (t) {
    var e = t.dateTime,
      r = t.date,
      n = t.time,
      i = t.periods,
      o = t.days,
      a = t.shortDays,
      c = t.months,
      u = t.shortMonths,
      l = Fv(i),
      s = Wv(i),
      f = Fv(o),
      p = Wv(o),
      h = Fv(a),
      d = Wv(a),
      y = Fv(c),
      v = Wv(c),
      m = Fv(u),
      g = Wv(u),
      b = {
        a: function (t) {
          return a[t.getDay()];
        },
        A: function (t) {
          return o[t.getDay()];
        },
        b: function (t) {
          return u[t.getMonth()];
        },
        B: function (t) {
          return c[t.getMonth()];
        },
        c: null,
        d: sm,
        e: sm,
        f: ym,
        g: Pm,
        G: Em,
        H: fm,
        I: pm,
        j: hm,
        L: dm,
        m: vm,
        M: mm,
        p: function (t) {
          return i[+(t.getHours() >= 12)];
        },
        q: function (t) {
          return 1 + ~~(t.getMonth() / 3);
        },
        Q: Zm,
        s: Jm,
        S: gm,
        u: bm,
        U: xm,
        V: Om,
        w: Sm,
        W: jm,
        x: null,
        X: null,
        y: Am,
        Y: km,
        Z: Mm,
        '%': Km,
      },
      x = {
        a: function (t) {
          return a[t.getUTCDay()];
        },
        A: function (t) {
          return o[t.getUTCDay()];
        },
        b: function (t) {
          return u[t.getUTCMonth()];
        },
        B: function (t) {
          return c[t.getUTCMonth()];
        },
        c: null,
        d: _m,
        e: _m,
        f: Im,
        g: Gm,
        G: Hm,
        H: Tm,
        I: Cm,
        j: Dm,
        L: Nm,
        m: Bm,
        M: Rm,
        p: function (t) {
          return i[+(t.getUTCHours() >= 12)];
        },
        q: function (t) {
          return 1 + ~~(t.getUTCMonth() / 3);
        },
        Q: Zm,
        s: Jm,
        S: Lm,
        u: zm,
        U: $m,
        V: Fm,
        w: Wm,
        W: qm,
        x: null,
        X: null,
        y: Xm,
        Y: Vm,
        Z: Ym,
        '%': Km,
      },
      w = {
        a: function (t, e, r) {
          var n = h.exec(e.slice(r));
          return n ? ((t.w = d.get(n[0].toLowerCase())), r + n[0].length) : -1;
        },
        A: function (t, e, r) {
          var n = f.exec(e.slice(r));
          return n ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length) : -1;
        },
        b: function (t, e, r) {
          var n = m.exec(e.slice(r));
          return n ? ((t.m = g.get(n[0].toLowerCase())), r + n[0].length) : -1;
        },
        B: function (t, e, r) {
          var n = y.exec(e.slice(r));
          return n ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length) : -1;
        },
        c: function (t, r, n) {
          return j(t, e, r, n);
        },
        d: tm,
        e: tm,
        f: am,
        g: Kv,
        G: Yv,
        H: rm,
        I: rm,
        j: em,
        L: om,
        m: Qv,
        M: nm,
        p: function (t, e, r) {
          var n = l.exec(e.slice(r));
          return n ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length) : -1;
        },
        q: Jv,
        Q: um,
        s: lm,
        S: im,
        u: Xv,
        U: Gv,
        V: Vv,
        w: qv,
        W: Hv,
        x: function (t, e, n) {
          return j(t, r, e, n);
        },
        X: function (t, e, r) {
          return j(t, n, e, r);
        },
        y: Kv,
        Y: Yv,
        Z: Zv,
        '%': cm,
      };
    function O(t, e) {
      return function (r) {
        var n,
          i,
          o,
          a = [],
          c = -1,
          u = 0,
          l = t.length;
        for (r instanceof Date || (r = new Date(+r)); ++c < l; )
          37 === t.charCodeAt(c) &&
            (a.push(t.slice(u, c)),
            null != (i = Bv[(n = t.charAt(++c))])
              ? (n = t.charAt(++c))
              : (i = 'e' === n ? ' ' : '0'),
            (o = e[n]) && (n = o(r, i)),
            a.push(n),
            (u = c + 1));
        return a.push(t.slice(u, c)), a.join('');
      };
    }
    function S(t, e) {
      return function (r) {
        var n,
          i,
          o = Cv(1900, void 0, 1);
        if (j(o, t, (r += ''), 0) != r.length) return null;
        if ('Q' in o) return new Date(o.Q);
        if ('s' in o) return new Date(1e3 * o.s + ('L' in o ? o.L : 0));
        if (
          (e && !('Z' in o) && (o.Z = 0),
          'p' in o && (o.H = (o.H % 12) + 12 * o.p),
          void 0 === o.m && (o.m = 'q' in o ? o.q : 0),
          'V' in o)
        ) {
          if (o.V < 1 || o.V > 53) return null;
          'w' in o || (o.w = 1),
            'Z' in o
              ? ((i = (n = Tv(Cv(o.y, 0, 1))).getUTCDay()),
                (n = i > 4 || 0 === i ? yv.ceil(n) : yv(n)),
                (n = nv.offset(n, 7 * (o.V - 1))),
                (o.y = n.getUTCFullYear()),
                (o.m = n.getUTCMonth()),
                (o.d = n.getUTCDate() + ((o.w + 6) % 7)))
              : ((i = (n = _v(Cv(o.y, 0, 1))).getDay()),
                (n = i > 4 || 0 === i ? cv.ceil(n) : cv(n)),
                (n = rv.offset(n, 7 * (o.V - 1))),
                (o.y = n.getFullYear()),
                (o.m = n.getMonth()),
                (o.d = n.getDate() + ((o.w + 6) % 7)));
        } else
          ('W' in o || 'U' in o) &&
            ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
            (i =
              'Z' in o
                ? Tv(Cv(o.y, 0, 1)).getUTCDay()
                : _v(Cv(o.y, 0, 1)).getDay()),
            (o.m = 0),
            (o.d =
              'W' in o
                ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                : o.w + 7 * o.U - ((i + 6) % 7)));
        return 'Z' in o
          ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Tv(o))
          : _v(o);
      };
    }
    function j(t, e, r, n) {
      for (var i, o, a = 0, c = e.length, u = r.length; a < c; ) {
        if (n >= u) return -1;
        if (37 === (i = e.charCodeAt(a++))) {
          if (
            ((i = e.charAt(a++)),
            !(o = w[i in Bv ? e.charAt(a++) : i]) || (n = o(t, r, n)) < 0)
          )
            return -1;
        } else if (i != r.charCodeAt(n++)) return -1;
      }
      return n;
    }
    return (
      (b.x = O(r, b)),
      (b.X = O(n, b)),
      (b.c = O(e, b)),
      (x.x = O(r, x)),
      (x.X = O(n, x)),
      (x.c = O(e, x)),
      {
        format: function (t) {
          var e = O((t += ''), b);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
        parse: function (t) {
          var e = S((t += ''), !1);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
        utcFormat: function (t) {
          var e = O((t += ''), x);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
        utcParse: function (t) {
          var e = S((t += ''), !0);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
      }
    );
  })(t)),
    (Nv = Dv.format),
    Dv.parse,
    (Iv = Dv.utcFormat),
    Dv.utcParse;
})({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
});
const cg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Qh,
      scaleDiverging: function t() {
        var e = wy(og()(Jd));
        return (
          (e.copy = function () {
            return ng(e, t());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleDivergingLog: function t() {
        var e = _y(og()).domain([0.1, 1, 10]);
        return (
          (e.copy = function () {
            return ng(e, t()).base(e.base());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleDivergingPow: ag,
      scaleDivergingSqrt: function () {
        return ag.apply(null, arguments).exponent(0.5);
      },
      scaleDivergingSymlog: function t() {
        var e = Dy(og());
        return (
          (e.copy = function () {
            return ng(e, t()).constant(e.constant());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleIdentity: function t(e) {
        var r;
        function n(t) {
          return null == t || isNaN((t = +t)) ? r : t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (t) {
              return arguments.length
                ? ((e = Array.from(t, Kd)), n)
                : e.slice();
            }),
          (n.unknown = function (t) {
            return arguments.length ? ((r = t), n) : r;
          }),
          (n.copy = function () {
            return t(e).unknown(r);
          }),
          (e = arguments.length ? Array.from(e, Kd) : [0, 1]),
          wy(n)
        );
      },
      scaleImplicit: Zh,
      scaleLinear: Oy,
      scaleLog: function t() {
        const e = _y(ny()).domain([1, 10]);
        return (
          (e.copy = () => ry(e, t()).base(e.base())), Yh.apply(e, arguments), e
        );
      },
      scaleOrdinal: Jh,
      scalePoint: ed,
      scalePow: Ly,
      scaleQuantile: function t() {
        var e,
          r = [],
          n = [],
          i = [];
        function o() {
          var t = 0,
            e = Math.max(1, n.length);
          for (i = new Array(e - 1); ++t < e; ) i[t - 1] = Hh(r, t / e);
          return a;
        }
        function a(t) {
          return null == t || isNaN((t = +t)) ? e : n[Ch(i, t)];
        }
        return (
          (a.invertExtent = function (t) {
            var e = n.indexOf(t);
            return e < 0
              ? [NaN, NaN]
              : [
                  e > 0 ? i[e - 1] : r[0],
                  e < i.length ? i[e] : r[r.length - 1],
                ];
          }),
          (a.domain = function (t) {
            if (!arguments.length) return r.slice();
            r = [];
            for (let e of t) null == e || isNaN((e = +e)) || r.push(e);
            return r.sort(Ph), o();
          }),
          (a.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), o()) : n.slice();
          }),
          (a.unknown = function (t) {
            return arguments.length ? ((e = t), a) : e;
          }),
          (a.quantiles = function () {
            return i.slice();
          }),
          (a.copy = function () {
            return t().domain(r).range(n).unknown(e);
          }),
          Yh.apply(a, arguments)
        );
      },
      scaleQuantize: function t() {
        var e,
          r = 0,
          n = 1,
          i = 1,
          o = [0.5],
          a = [0, 1];
        function c(t) {
          return null != t && t <= t ? a[Ch(o, t, 0, i)] : e;
        }
        function u() {
          var t = -1;
          for (o = new Array(i); ++t < i; )
            o[t] = ((t + 1) * n - (t - i) * r) / (i + 1);
          return c;
        }
        return (
          (c.domain = function (t) {
            return arguments.length
              ? (([r, n] = t), (r = +r), (n = +n), u())
              : [r, n];
          }),
          (c.range = function (t) {
            return arguments.length
              ? ((i = (a = Array.from(t)).length - 1), u())
              : a.slice();
          }),
          (c.invertExtent = function (t) {
            var e = a.indexOf(t);
            return e < 0
              ? [NaN, NaN]
              : e < 1
              ? [r, o[0]]
              : e >= i
              ? [o[i - 1], n]
              : [o[e - 1], o[e]];
          }),
          (c.unknown = function (t) {
            return arguments.length ? ((e = t), c) : c;
          }),
          (c.thresholds = function () {
            return o.slice();
          }),
          (c.copy = function () {
            return t().domain([r, n]).range(a).unknown(e);
          }),
          Yh.apply(wy(c), arguments)
        );
      },
      scaleRadial: function t() {
        var e,
          r = iy(),
          n = [0, 1],
          i = !1;
        function o(t) {
          var n = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(r(t));
          return isNaN(n) ? e : i ? Math.round(n) : n;
        }
        return (
          (o.invert = function (t) {
            return r.invert(zy(t));
          }),
          (o.domain = function (t) {
            return arguments.length ? (r.domain(t), o) : r.domain();
          }),
          (o.range = function (t) {
            return arguments.length
              ? (r.range((n = Array.from(t, Kd)).map(zy)), o)
              : n.slice();
          }),
          (o.rangeRound = function (t) {
            return o.range(t).round(!0);
          }),
          (o.round = function (t) {
            return arguments.length ? ((i = !!t), o) : i;
          }),
          (o.clamp = function (t) {
            return arguments.length ? (r.clamp(t), o) : r.clamp();
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((e = t), o) : e;
          }),
          (o.copy = function () {
            return t(r.domain(), n).round(i).clamp(r.clamp()).unknown(e);
          }),
          Yh.apply(o, arguments),
          wy(o)
        );
      },
      scaleSequential: function t() {
        var e = wy(rg()(Jd));
        return (
          (e.copy = function () {
            return ng(e, t());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleSequentialLog: function t() {
        var e = _y(rg()).domain([1, 10]);
        return (
          (e.copy = function () {
            return ng(e, t()).base(e.base());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleSequentialPow: ig,
      scaleSequentialQuantile: function t() {
        var e = [],
          r = Jd;
        function n(t) {
          if (null != t && !isNaN((t = +t)))
            return r((Ch(e, t, 1) - 1) / (e.length - 1));
        }
        return (
          (n.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let r of t) null == r || isNaN((r = +r)) || e.push(r);
            return e.sort(Ph), n;
          }),
          (n.interpolator = function (t) {
            return arguments.length ? ((r = t), n) : r;
          }),
          (n.range = function () {
            return e.map((t, n) => r(n / (e.length - 1)));
          }),
          (n.quantiles = function (t) {
            return Array.from({ length: t + 1 }, (r, n) =>
              (function (t, e, r) {
                if (
                  ((t = Float64Array.from(
                    (function* (t, e) {
                      if (void 0 === e)
                        for (let r of t)
                          null != r && (r = +r) >= r && (yield r);
                      else {
                        let r = -1;
                        for (let n of t)
                          null != (n = e(n, ++r, t)) &&
                            (n = +n) >= n &&
                            (yield n);
                      }
                    })(t, r),
                  )),
                  (n = t.length) && !isNaN((e = +e)))
                ) {
                  if (e <= 0 || n < 2) return Xh(t);
                  if (e >= 1) return qh(t);
                  var n,
                    i = (n - 1) * e,
                    o = Math.floor(i),
                    a = qh(Gh(t, o).subarray(0, o + 1));
                  return a + (Xh(t.subarray(o + 1)) - a) * (i - o);
                }
              })(e, n / t),
            );
          }),
          (n.copy = function () {
            return t(r).domain(e);
          }),
          Kh.apply(n, arguments)
        );
      },
      scaleSequentialSqrt: function () {
        return ig.apply(null, arguments).exponent(0.5);
      },
      scaleSequentialSymlog: function t() {
        var e = Dy(rg());
        return (
          (e.copy = function () {
            return ng(e, t()).constant(e.constant());
          }),
          Kh.apply(e, arguments)
        );
      },
      scaleSqrt: function () {
        return Ly.apply(null, arguments).exponent(0.5);
      },
      scaleSymlog: function t() {
        var e = Dy(ny());
        return (
          (e.copy = function () {
            return ry(e, t()).constant(e.constant());
          }),
          Yh.apply(e, arguments)
        );
      },
      scaleThreshold: function t() {
        var e,
          r = [0.5],
          n = [0, 1],
          i = 1;
        function o(t) {
          return null != t && t <= t ? n[Ch(r, t, 0, i)] : e;
        }
        return (
          (o.domain = function (t) {
            return arguments.length
              ? ((r = Array.from(t)), (i = Math.min(r.length, n.length - 1)), o)
              : r.slice();
          }),
          (o.range = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (i = Math.min(r.length, n.length - 1)), o)
              : n.slice();
          }),
          (o.invertExtent = function (t) {
            var e = n.indexOf(t);
            return [r[e - 1], r[e]];
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((e = t), o) : e;
          }),
          (o.copy = function () {
            return t().domain(r).range(n).unknown(e);
          }),
          Yh.apply(o, arguments)
        );
      },
      scaleTime: function () {
        return Yh.apply(
          eg(Ev, Mv, Sv, wv, av, rv, tv, Jy, Zy, Nv).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      },
      scaleUtc: function () {
        return Yh.apply(
          eg(Pv, kv, jv, Ov, dv, nv, ev, Qy, Zy, Iv).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      },
      tickFormat: xy,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var ug = h;
var lg = function (t, e, r) {
  for (var n = -1, i = t.length; ++n < i; ) {
    var o = t[n],
      a = e(o);
    if (null != a && (void 0 === c ? a == a && !ug(a) : r(a, c)))
      var c = a,
        u = o;
  }
  return u;
};
var sg = lg,
  fg = function (t, e) {
    return t > e;
  },
  pg = du;
var hg = function (t) {
  return t && t.length ? sg(t, pg, fg) : void 0;
};
var dg = lg,
  yg = function (t, e) {
    return t < e;
  },
  vg = du;
var mg = function (t) {
    return t && t.length ? dg(t, vg, yg) : void 0;
  },
  gg = j,
  bg = Au,
  xg = dl,
  wg = p;
var Og = A,
  Sg = function (t, e) {
    return (wg(t) ? gg : xg)(t, bg(e));
  };
var jg = function (t, e) {
    return Og(Sg(t, e), 1);
  },
  Ag = Lc;
var Pg,
  kg = function (t, e) {
    return Ag(t, e);
  },
  Eg = 1e9,
  Mg = !0,
  _g = '[DecimalError] ',
  Tg = _g + 'Invalid argument: ',
  Cg = _g + 'Exponent out of range: ',
  Dg = Math.floor,
  Ng = Math.pow,
  Ig = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Bg = 1e7,
  Rg = 7,
  Lg = 9007199254740991,
  zg = Dg(Lg / Rg),
  $g = {};
function Ug(t, e) {
  var r,
    n,
    i,
    o,
    a,
    c,
    u,
    l,
    s = t.constructor,
    f = s.precision;
  if (!t.s || !e.s) return e.s || (e = new s(t)), Mg ? Zg(e, f) : e;
  if (
    ((u = t.d), (l = e.d), (a = t.e), (i = e.e), (u = u.slice()), (o = a - i))
  ) {
    for (
      o < 0
        ? ((n = u), (o = -o), (c = l.length))
        : ((n = l), (i = a), (c = u.length)),
        o > (c = (a = Math.ceil(f / Rg)) > c ? a + 1 : c + 1) &&
          ((o = c), (n.length = 1)),
        n.reverse();
      o--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    (c = u.length) - (o = l.length) < 0 && ((o = c), (n = l), (l = u), (u = n)),
      r = 0;
    o;

  )
    (r = ((u[--o] = u[o] + l[o] + r) / Bg) | 0), (u[o] %= Bg);
  for (r && (u.unshift(r), ++i), c = u.length; 0 == u[--c]; ) u.pop();
  return (e.d = u), (e.e = i), Mg ? Zg(e, f) : e;
}
function Fg(t, e, r) {
  if (t !== ~~t || t < e || t > r) throw Error(Tg + t);
}
function Wg(t) {
  var e,
    r,
    n,
    i = t.length - 1,
    o = '',
    a = t[0];
  if (i > 0) {
    for (o += a, e = 1; e < i; e++)
      (n = t[e] + ''), (r = Rg - n.length) && (o += Hg(r)), (o += n);
    (a = t[e]), (r = Rg - (n = a + '').length) && (o += Hg(r));
  } else if (0 === a) return '0';
  for (; a % 10 == 0; ) a /= 10;
  return o + a;
}
($g.absoluteValue = $g.abs =
  function () {
    var t = new this.constructor(this);
    return t.s && (t.s = 1), t;
  }),
  ($g.comparedTo = $g.cmp =
    function (t) {
      var e,
        r,
        n,
        i,
        o = this;
      if (((t = new o.constructor(t)), o.s !== t.s)) return o.s || -t.s;
      if (o.e !== t.e) return (o.e > t.e) ^ (o.s < 0) ? 1 : -1;
      for (e = 0, r = (n = o.d.length) < (i = t.d.length) ? n : i; e < r; ++e)
        if (o.d[e] !== t.d[e]) return (o.d[e] > t.d[e]) ^ (o.s < 0) ? 1 : -1;
      return n === i ? 0 : (n > i) ^ (o.s < 0) ? 1 : -1;
    }),
  ($g.decimalPlaces = $g.dp =
    function () {
      var t = this,
        e = t.d.length - 1,
        r = (e - t.e) * Rg;
      if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) r--;
      return r < 0 ? 0 : r;
    }),
  ($g.dividedBy = $g.div =
    function (t) {
      return qg(this, new this.constructor(t));
    }),
  ($g.dividedToIntegerBy = $g.idiv =
    function (t) {
      var e = this.constructor;
      return Zg(qg(this, new e(t), 0, 1), e.precision);
    }),
  ($g.equals = $g.eq =
    function (t) {
      return !this.cmp(t);
    }),
  ($g.exponent = function () {
    return Gg(this);
  }),
  ($g.greaterThan = $g.gt =
    function (t) {
      return this.cmp(t) > 0;
    }),
  ($g.greaterThanOrEqualTo = $g.gte =
    function (t) {
      return this.cmp(t) >= 0;
    }),
  ($g.isInteger = $g.isint =
    function () {
      return this.e > this.d.length - 2;
    }),
  ($g.isNegative = $g.isneg =
    function () {
      return this.s < 0;
    }),
  ($g.isPositive = $g.ispos =
    function () {
      return this.s > 0;
    }),
  ($g.isZero = function () {
    return 0 === this.s;
  }),
  ($g.lessThan = $g.lt =
    function (t) {
      return this.cmp(t) < 0;
    }),
  ($g.lessThanOrEqualTo = $g.lte =
    function (t) {
      return this.cmp(t) < 1;
    }),
  ($g.logarithm = $g.log =
    function (t) {
      var e,
        r = this,
        n = r.constructor,
        i = n.precision,
        o = i + 5;
      if (void 0 === t) t = new n(10);
      else if ((t = new n(t)).s < 1 || t.eq(Pg)) throw Error(_g + 'NaN');
      if (r.s < 1) throw Error(_g + (r.s ? 'NaN' : '-Infinity'));
      return r.eq(Pg)
        ? new n(0)
        : ((Mg = !1), (e = qg(Yg(r, o), Yg(t, o), o)), (Mg = !0), Zg(e, i));
    }),
  ($g.minus = $g.sub =
    function (t) {
      var e = this;
      return (
        (t = new e.constructor(t)),
        e.s == t.s ? Jg(e, t) : Ug(e, ((t.s = -t.s), t))
      );
    }),
  ($g.modulo = $g.mod =
    function (t) {
      var e,
        r = this,
        n = r.constructor,
        i = n.precision;
      if (!(t = new n(t)).s) throw Error(_g + 'NaN');
      return r.s
        ? ((Mg = !1), (e = qg(r, t, 0, 1).times(t)), (Mg = !0), r.minus(e))
        : Zg(new n(r), i);
    }),
  ($g.naturalExponential = $g.exp =
    function () {
      return Xg(this);
    }),
  ($g.naturalLogarithm = $g.ln =
    function () {
      return Yg(this);
    }),
  ($g.negated = $g.neg =
    function () {
      var t = new this.constructor(this);
      return (t.s = -t.s || 0), t;
    }),
  ($g.plus = $g.add =
    function (t) {
      var e = this;
      return (
        (t = new e.constructor(t)),
        e.s == t.s ? Ug(e, t) : Jg(e, ((t.s = -t.s), t))
      );
    }),
  ($g.precision = $g.sd =
    function (t) {
      var e,
        r,
        n,
        i = this;
      if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t) throw Error(Tg + t);
      if (
        ((e = Gg(i) + 1), (r = (n = i.d.length - 1) * Rg + 1), (n = i.d[n]))
      ) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++;
      }
      return t && e > r ? e : r;
    }),
  ($g.squareRoot = $g.sqrt =
    function () {
      var t,
        e,
        r,
        n,
        i,
        o,
        a,
        c = this,
        u = c.constructor;
      if (c.s < 1) {
        if (!c.s) return new u(0);
        throw Error(_g + 'NaN');
      }
      for (
        t = Gg(c),
          Mg = !1,
          0 == (i = Math.sqrt(+c)) || i == 1 / 0
            ? (((e = Wg(c.d)).length + t) % 2 == 0 && (e += '0'),
              (i = Math.sqrt(e)),
              (t = Dg((t + 1) / 2) - (t < 0 || t % 2)),
              (n = new u(
                (e =
                  i == 1 / 0
                    ? '5e' + t
                    : (e = i.toExponential()).slice(0, e.indexOf('e') + 1) + t),
              )))
            : (n = new u(i.toString())),
          i = a = (r = u.precision) + 3;
        ;

      )
        if (
          ((n = (o = n).plus(qg(c, o, a + 2)).times(0.5)),
          Wg(o.d).slice(0, a) === (e = Wg(n.d)).slice(0, a))
        ) {
          if (((e = e.slice(a - 3, a + 1)), i == a && '4999' == e)) {
            if ((Zg(o, r + 1, 0), o.times(o).eq(c))) {
              n = o;
              break;
            }
          } else if ('9999' != e) break;
          a += 4;
        }
      return (Mg = !0), Zg(n, r);
    }),
  ($g.times = $g.mul =
    function (t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        c,
        u,
        l,
        s = this,
        f = s.constructor,
        p = s.d,
        h = (t = new f(t)).d;
      if (!s.s || !t.s) return new f(0);
      for (
        t.s *= s.s,
          r = s.e + t.e,
          (u = p.length) < (l = h.length) &&
            ((o = p), (p = h), (h = o), (a = u), (u = l), (l = a)),
          o = [],
          n = a = u + l;
        n--;

      )
        o.push(0);
      for (n = l; --n >= 0; ) {
        for (e = 0, i = u + n; i > n; )
          (c = o[i] + h[n] * p[i - n - 1] + e),
            (o[i--] = c % Bg | 0),
            (e = (c / Bg) | 0);
        o[i] = (o[i] + e) % Bg | 0;
      }
      for (; !o[--a]; ) o.pop();
      return (
        e ? ++r : o.shift(), (t.d = o), (t.e = r), Mg ? Zg(t, f.precision) : t
      );
    }),
  ($g.toDecimalPlaces = $g.todp =
    function (t, e) {
      var r = this,
        n = r.constructor;
      return (
        (r = new n(r)),
        void 0 === t
          ? r
          : (Fg(t, 0, Eg),
            void 0 === e ? (e = n.rounding) : Fg(e, 0, 8),
            Zg(r, t + Gg(r) + 1, e))
      );
    }),
  ($g.toExponential = function (t, e) {
    var r,
      n = this,
      i = n.constructor;
    return (
      void 0 === t
        ? (r = Qg(n, !0))
        : (Fg(t, 0, Eg),
          void 0 === e ? (e = i.rounding) : Fg(e, 0, 8),
          (r = Qg((n = Zg(new i(n), t + 1, e)), !0, t + 1))),
      r
    );
  }),
  ($g.toFixed = function (t, e) {
    var r,
      n,
      i = this,
      o = i.constructor;
    return void 0 === t
      ? Qg(i)
      : (Fg(t, 0, Eg),
        void 0 === e ? (e = o.rounding) : Fg(e, 0, 8),
        (r = Qg((n = Zg(new o(i), t + Gg(i) + 1, e)).abs(), !1, t + Gg(n) + 1)),
        i.isneg() && !i.isZero() ? '-' + r : r);
  }),
  ($g.toInteger = $g.toint =
    function () {
      var t = this,
        e = t.constructor;
      return Zg(new e(t), Gg(t) + 1, e.rounding);
    }),
  ($g.toNumber = function () {
    return +this;
  }),
  ($g.toPower = $g.pow =
    function (t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        c = this,
        u = c.constructor,
        l = +(t = new u(t));
      if (!t.s) return new u(Pg);
      if (!(c = new u(c)).s) {
        if (t.s < 1) throw Error(_g + 'Infinity');
        return c;
      }
      if (c.eq(Pg)) return c;
      if (((n = u.precision), t.eq(Pg))) return Zg(c, n);
      if (((a = (e = t.e) >= (r = t.d.length - 1)), (o = c.s), a)) {
        if ((r = l < 0 ? -l : l) <= Lg) {
          for (
            i = new u(Pg), e = Math.ceil(n / Rg + 4), Mg = !1;
            r % 2 && tb((i = i.times(c)).d, e), 0 !== (r = Dg(r / 2));

          )
            tb((c = c.times(c)).d, e);
          return (Mg = !0), t.s < 0 ? new u(Pg).div(i) : Zg(i, n);
        }
      } else if (o < 0) throw Error(_g + 'NaN');
      return (
        (o = o < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
        (c.s = 1),
        (Mg = !1),
        (i = t.times(Yg(c, n + 12))),
        (Mg = !0),
        ((i = Xg(i)).s = o),
        i
      );
    }),
  ($g.toPrecision = function (t, e) {
    var r,
      n,
      i = this,
      o = i.constructor;
    return (
      void 0 === t
        ? (n = Qg(i, (r = Gg(i)) <= o.toExpNeg || r >= o.toExpPos))
        : (Fg(t, 1, Eg),
          void 0 === e ? (e = o.rounding) : Fg(e, 0, 8),
          (n = Qg(
            (i = Zg(new o(i), t, e)),
            t <= (r = Gg(i)) || r <= o.toExpNeg,
            t,
          ))),
      n
    );
  }),
  ($g.toSignificantDigits = $g.tosd =
    function (t, e) {
      var r = this.constructor;
      return (
        void 0 === t
          ? ((t = r.precision), (e = r.rounding))
          : (Fg(t, 1, Eg), void 0 === e ? (e = r.rounding) : Fg(e, 0, 8)),
        Zg(new r(this), t, e)
      );
    }),
  ($g.toString =
    $g.valueOf =
    $g.val =
    $g.toJSON =
    $g[Symbol.for('nodejs.util.inspect.custom')] =
      function () {
        var t = this,
          e = Gg(t),
          r = t.constructor;
        return Qg(t, e <= r.toExpNeg || e >= r.toExpPos);
      });
var qg = (function () {
  function t(t, e) {
    var r,
      n = 0,
      i = t.length;
    for (t = t.slice(); i--; )
      (r = t[i] * e + n), (t[i] = r % Bg | 0), (n = (r / Bg) | 0);
    return n && t.unshift(n), t;
  }
  function e(t, e, r, n) {
    var i, o;
    if (r != n) o = r > n ? 1 : -1;
    else
      for (i = o = 0; i < r; i++)
        if (t[i] != e[i]) {
          o = t[i] > e[i] ? 1 : -1;
          break;
        }
    return o;
  }
  function r(t, e, r) {
    for (var n = 0; r--; )
      (t[r] -= n), (n = t[r] < e[r] ? 1 : 0), (t[r] = n * Bg + t[r] - e[r]);
    for (; !t[0] && t.length > 1; ) t.shift();
  }
  return function (n, i, o, a) {
    var c,
      u,
      l,
      s,
      f,
      p,
      h,
      d,
      y,
      v,
      m,
      g,
      b,
      x,
      w,
      O,
      S,
      j,
      A = n.constructor,
      P = n.s == i.s ? 1 : -1,
      k = n.d,
      E = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(_g + 'Division by zero');
    for (
      u = n.e - i.e,
        S = E.length,
        w = k.length,
        d = (h = new A(P)).d = [],
        l = 0;
      E[l] == (k[l] || 0);

    )
      ++l;
    if (
      (E[l] > (k[l] || 0) && --u,
      (g = null == o ? (o = A.precision) : a ? o + (Gg(n) - Gg(i)) + 1 : o) < 0)
    )
      return new A(0);
    if (((g = (g / Rg + 2) | 0), (l = 0), 1 == S))
      for (s = 0, E = E[0], g++; (l < w || s) && g--; l++)
        (b = s * Bg + (k[l] || 0)), (d[l] = (b / E) | 0), (s = b % E | 0);
    else {
      for (
        (s = (Bg / (E[0] + 1)) | 0) > 1 &&
          ((E = t(E, s)), (k = t(k, s)), (S = E.length), (w = k.length)),
          x = S,
          v = (y = k.slice(0, S)).length;
        v < S;

      )
        y[v++] = 0;
      (j = E.slice()).unshift(0), (O = E[0]), E[1] >= Bg / 2 && ++O;
      do {
        (s = 0),
          (c = e(E, y, S, v)) < 0
            ? ((m = y[0]),
              S != v && (m = m * Bg + (y[1] || 0)),
              (s = (m / O) | 0) > 1
                ? (s >= Bg && (s = Bg - 1),
                  1 ==
                    (c = e((f = t(E, s)), y, (p = f.length), (v = y.length))) &&
                    (s--, r(f, S < p ? j : E, p)))
                : (0 == s && (c = s = 1), (f = E.slice())),
              (p = f.length) < v && f.unshift(0),
              r(y, f, v),
              -1 == c &&
                (c = e(E, y, S, (v = y.length))) < 1 &&
                (s++, r(y, S < v ? j : E, v)),
              (v = y.length))
            : 0 === c && (s++, (y = [0])),
          (d[l++] = s),
          c && y[0] ? (y[v++] = k[x] || 0) : ((y = [k[x]]), (v = 1));
      } while ((x++ < w || void 0 !== y[0]) && g--);
    }
    return d[0] || d.shift(), (h.e = u), Zg(h, a ? o + Gg(h) + 1 : o);
  };
})();
function Xg(t, e) {
  var r,
    n,
    i,
    o,
    a,
    c = 0,
    u = 0,
    l = t.constructor,
    s = l.precision;
  if (Gg(t) > 16) throw Error(Cg + Gg(t));
  if (!t.s) return new l(Pg);
  for (
    null == e ? ((Mg = !1), (a = s)) : (a = e), o = new l(0.03125);
    t.abs().gte(0.1);

  )
    (t = t.times(o)), (u += 5);
  for (
    a += ((Math.log(Ng(2, u)) / Math.LN10) * 2 + 5) | 0,
      r = n = i = new l(Pg),
      l.precision = a;
    ;

  ) {
    if (
      ((n = Zg(n.times(t), a)),
      (r = r.times(++c)),
      Wg((o = i.plus(qg(n, r, a))).d).slice(0, a) === Wg(i.d).slice(0, a))
    ) {
      for (; u--; ) i = Zg(i.times(i), a);
      return (l.precision = s), null == e ? ((Mg = !0), Zg(i, s)) : i;
    }
    i = o;
  }
}
function Gg(t) {
  for (var e = t.e * Rg, r = t.d[0]; r >= 10; r /= 10) e++;
  return e;
}
function Vg(t, e, r) {
  if (e > t.LN10.sd())
    throw (
      ((Mg = !0),
      r && (t.precision = r),
      Error(_g + 'LN10 precision limit exceeded'))
    );
  return Zg(new t(t.LN10), e);
}
function Hg(t) {
  for (var e = ''; t--; ) e += '0';
  return e;
}
function Yg(t, e) {
  var r,
    n,
    i,
    o,
    a,
    c,
    u,
    l,
    s,
    f = 1,
    p = t,
    h = p.d,
    d = p.constructor,
    y = d.precision;
  if (p.s < 1) throw Error(_g + (p.s ? 'NaN' : '-Infinity'));
  if (p.eq(Pg)) return new d(0);
  if ((null == e ? ((Mg = !1), (l = y)) : (l = e), p.eq(10)))
    return null == e && (Mg = !0), Vg(d, l);
  if (
    ((l += 10),
    (d.precision = l),
    (n = (r = Wg(h)).charAt(0)),
    (o = Gg(p)),
    !(Math.abs(o) < 15e14))
  )
    return (
      (u = Vg(d, l + 2, y).times(o + '')),
      (p = Yg(new d(n + '.' + r.slice(1)), l - 10).plus(u)),
      (d.precision = y),
      null == e ? ((Mg = !0), Zg(p, y)) : p
    );
  for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
    (n = (r = Wg((p = p.times(t)).d)).charAt(0)), f++;
  for (
    o = Gg(p),
      n > 1 ? ((p = new d('0.' + r)), o++) : (p = new d(n + '.' + r.slice(1))),
      c = a = p = qg(p.minus(Pg), p.plus(Pg), l),
      s = Zg(p.times(p), l),
      i = 3;
    ;

  ) {
    if (
      ((a = Zg(a.times(s), l)),
      Wg((u = c.plus(qg(a, new d(i), l))).d).slice(0, l) ===
        Wg(c.d).slice(0, l))
    )
      return (
        (c = c.times(2)),
        0 !== o && (c = c.plus(Vg(d, l + 2, y).times(o + ''))),
        (c = qg(c, new d(f), l)),
        (d.precision = y),
        null == e ? ((Mg = !0), Zg(c, y)) : c
      );
    (c = u), (i += 2);
  }
}
function Kg(t, e) {
  var r, n, i;
  for (
    (r = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
      (n = e.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +e.slice(n + 1)), (e = e.substring(0, n)))
        : r < 0 && (r = e.length),
      n = 0;
    48 === e.charCodeAt(n);

  )
    ++n;
  for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
  if ((e = e.slice(n, i))) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (t.e = Dg(r / Rg)),
      (t.d = []),
      (n = (r + 1) % Rg),
      r < 0 && (n += Rg),
      n < i)
    ) {
      for (n && t.d.push(+e.slice(0, n)), i -= Rg; n < i; )
        t.d.push(+e.slice(n, (n += Rg)));
      (e = e.slice(n)), (n = Rg - e.length);
    } else n -= i;
    for (; n--; ) e += '0';
    if ((t.d.push(+e), Mg && (t.e > zg || t.e < -zg))) throw Error(Cg + r);
  } else (t.s = 0), (t.e = 0), (t.d = [0]);
  return t;
}
function Zg(t, e, r) {
  var n,
    i,
    o,
    a,
    c,
    u,
    l,
    s,
    f = t.d;
  for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
  if ((n = e - a) < 0) (n += Rg), (i = e), (l = f[(s = 0)]);
  else {
    if ((s = Math.ceil((n + 1) / Rg)) >= (o = f.length)) return t;
    for (l = o = f[s], a = 1; o >= 10; o /= 10) a++;
    i = (n %= Rg) - Rg + a;
  }
  if (
    (void 0 !== r &&
      ((c = (l / (o = Ng(10, a - i - 1))) % 10 | 0),
      (u = e < 0 || void 0 !== f[s + 1] || l % o),
      (u =
        r < 4
          ? (c || u) && (0 == r || r == (t.s < 0 ? 3 : 2))
          : c > 5 ||
            (5 == c &&
              (4 == r ||
                u ||
                (6 == r &&
                  (n > 0 ? (i > 0 ? l / Ng(10, a - i) : 0) : f[s - 1]) % 10 &
                    1) ||
                r == (t.s < 0 ? 8 : 7))))),
    e < 1 || !f[0])
  )
    return (
      u
        ? ((o = Gg(t)),
          (f.length = 1),
          (e = e - o - 1),
          (f[0] = Ng(10, (Rg - (e % Rg)) % Rg)),
          (t.e = Dg(-e / Rg) || 0))
        : ((f.length = 1), (f[0] = t.e = t.s = 0)),
      t
    );
  if (
    (0 == n
      ? ((f.length = s), (o = 1), s--)
      : ((f.length = s + 1),
        (o = Ng(10, Rg - n)),
        (f[s] = i > 0 ? ((l / Ng(10, a - i)) % Ng(10, i) | 0) * o : 0)),
    u)
  )
    for (;;) {
      if (0 == s) {
        (f[0] += o) == Bg && ((f[0] = 1), ++t.e);
        break;
      }
      if (((f[s] += o), f[s] != Bg)) break;
      (f[s--] = 0), (o = 1);
    }
  for (n = f.length; 0 === f[--n]; ) f.pop();
  if (Mg && (t.e > zg || t.e < -zg)) throw Error(Cg + Gg(t));
  return t;
}
function Jg(t, e) {
  var r,
    n,
    i,
    o,
    a,
    c,
    u,
    l,
    s,
    f,
    p = t.constructor,
    h = p.precision;
  if (!t.s || !e.s)
    return e.s ? (e.s = -e.s) : (e = new p(t)), Mg ? Zg(e, h) : e;
  if (
    ((u = t.d), (f = e.d), (n = e.e), (l = t.e), (u = u.slice()), (a = l - n))
  ) {
    for (
      (s = a < 0)
        ? ((r = u), (a = -a), (c = f.length))
        : ((r = f), (n = l), (c = u.length)),
        a > (i = Math.max(Math.ceil(h / Rg), c) + 2) &&
          ((a = i), (r.length = 1)),
        r.reverse(),
        i = a;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for ((s = (i = u.length) < (c = f.length)) && (c = i), i = 0; i < c; i++)
      if (u[i] != f[i]) {
        s = u[i] < f[i];
        break;
      }
    a = 0;
  }
  for (
    s && ((r = u), (u = f), (f = r), (e.s = -e.s)),
      c = u.length,
      i = f.length - c;
    i > 0;
    --i
  )
    u[c++] = 0;
  for (i = f.length; i > a; ) {
    if (u[--i] < f[i]) {
      for (o = i; o && 0 === u[--o]; ) u[o] = Bg - 1;
      --u[o], (u[i] += Bg);
    }
    u[i] -= f[i];
  }
  for (; 0 === u[--c]; ) u.pop();
  for (; 0 === u[0]; u.shift()) --n;
  return u[0] ? ((e.d = u), (e.e = n), Mg ? Zg(e, h) : e) : new p(0);
}
function Qg(t, e, r) {
  var n,
    i = Gg(t),
    o = Wg(t.d),
    a = o.length;
  return (
    e
      ? (r && (n = r - a) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + Hg(n))
          : a > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (i < 0 ? 'e' : 'e+') + i))
      : i < 0
      ? ((o = '0.' + Hg(-i - 1) + o), r && (n = r - a) > 0 && (o += Hg(n)))
      : i >= a
      ? ((o += Hg(i + 1 - a)),
        r && (n = r - i - 1) > 0 && (o = o + '.' + Hg(n)))
      : ((n = i + 1) < a && (o = o.slice(0, n) + '.' + o.slice(n)),
        r && (n = r - a) > 0 && (i + 1 === a && (o += '.'), (o += Hg(n)))),
    t.s < 0 ? '-' + o : o
  );
}
function tb(t, e) {
  if (t.length > e) return (t.length = e), !0;
}
function eb(t) {
  if (!t || 'object' != typeof t) throw Error(_g + 'Object expected');
  var e,
    r,
    n,
    i = [
      'precision',
      1,
      Eg,
      'rounding',
      0,
      8,
      'toExpNeg',
      -1 / 0,
      0,
      'toExpPos',
      0,
      1 / 0,
    ];
  for (e = 0; e < i.length; e += 3)
    if (void 0 !== (n = t[(r = i[e])])) {
      if (!(Dg(n) === n && n >= i[e + 1] && n <= i[e + 2]))
        throw Error(Tg + r + ': ' + n);
      this[r] = n;
    }
  if (void 0 !== (n = t[(r = 'LN10')])) {
    if (n != Math.LN10) throw Error(Tg + r + ': ' + n);
    this[r] = new this(n);
  }
  return this;
}
var rb = (function t(e) {
  var r, n, i;
  function o(t) {
    var e = this;
    if (!(e instanceof o)) return new o(t);
    if (((e.constructor = o), t instanceof o))
      return (e.s = t.s), (e.e = t.e), void (e.d = (t = t.d) ? t.slice() : t);
    if ('number' == typeof t) {
      if (0 * t != 0) throw Error(Tg + t);
      if (t > 0) e.s = 1;
      else {
        if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
        (t = -t), (e.s = -1);
      }
      return t === ~~t && t < 1e7
        ? ((e.e = 0), void (e.d = [t]))
        : Kg(e, t.toString());
    }
    if ('string' != typeof t) throw Error(Tg + t);
    if (
      (45 === t.charCodeAt(0) ? ((t = t.slice(1)), (e.s = -1)) : (e.s = 1),
      !Ig.test(t))
    )
      throw Error(Tg + t);
    Kg(e, t);
  }
  if (
    ((o.prototype = $g),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.clone = t),
    (o.config = o.set = eb),
    void 0 === e && (e = {}),
    e)
  )
    for (
      i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], r = 0;
      r < i.length;

    )
      e.hasOwnProperty((n = i[r++])) || (e[n] = this[n]);
  return o.config(e), o;
})({
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
});
Pg = new rb(1);
const nb = rb;
function ib(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ob(t);
    })(t) ||
    (function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return ob(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return ob(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function ob(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var ab = function (t) {
    return t;
  },
  cb = { '@@functional/placeholder': !0 },
  ub = function (t) {
    return t === cb;
  },
  lb = function (t) {
    return function e() {
      return 0 === arguments.length ||
        (1 === arguments.length &&
          ub(arguments.length <= 0 ? void 0 : arguments[0]))
        ? e
        : t.apply(void 0, arguments);
    };
  },
  sb = function (t) {
    return (function t(e, r) {
      return 1 === e
        ? r
        : lb(function () {
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            var a = i.filter(function (t) {
              return t !== cb;
            }).length;
            return a >= e
              ? r.apply(void 0, i)
              : t(
                  e - a,
                  lb(function () {
                    for (
                      var t = arguments.length, e = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    var o = i.map(function (t) {
                      return ub(t) ? e.shift() : t;
                    });
                    return r.apply(void 0, ib(o).concat(e));
                  }),
                );
          });
    })(t.length, t);
  },
  fb = function (t, e) {
    for (var r = [], n = t; n < e; ++n) r[n - t] = n;
    return r;
  },
  pb = sb(function (t, e) {
    return Array.isArray(e)
      ? e.map(t)
      : Object.keys(e)
          .map(function (t) {
            return e[t];
          })
          .map(t);
  }),
  hb = function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    if (!e.length) return ab;
    var n = e.reverse(),
      i = n[0],
      o = n.slice(1);
    return function () {
      return o.reduce(function (t, e) {
        return e(t);
      }, i.apply(void 0, arguments));
    };
  },
  db = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
  },
  yb = function (t) {
    var e = null,
      r = null;
    return function () {
      for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      return e &&
        i.every(function (t, r) {
          return t === e[r];
        })
        ? r
        : ((e = i), (r = t.apply(void 0, i)));
    };
  };
const vb = {
  rangeStep: function (t, e, r) {
    for (var n = new nb(t), i = 0, o = []; n.lt(e) && i < 1e5; )
      o.push(n.toNumber()), (n = n.add(r)), i++;
    return o;
  },
  getDigitCount: function (t) {
    return 0 === t ? 1 : Math.floor(new nb(t).abs().log(10).toNumber()) + 1;
  },
  interpolateNumber: sb(function (t, e, r) {
    var n = +t;
    return n + r * (+e - n);
  }),
  uninterpolateNumber: sb(function (t, e, r) {
    var n = e - +t;
    return (r - t) / (n = n || 1 / 0);
  }),
  uninterpolateTruncation: sb(function (t, e, r) {
    var n = e - +t;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
  }),
};
function mb(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return xb(t);
    })(t) ||
    (function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t);
    })(t) ||
    bb(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function gb(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t)))
        return;
      var r = [],
        n = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, c = t[Symbol.iterator]();
          !(n = (a = c.next()).done) && (r.push(a.value), !e || r.length !== e);
          n = !0
        );
      } catch (u) {
        (i = !0), (o = u);
      } finally {
        try {
          n || null == c.return || c.return();
        } finally {
          if (i) throw o;
        }
      }
      return r;
    })(t, e) ||
    bb(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function bb(t, e) {
  if (t) {
    if ('string' == typeof t) return xb(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? xb(t, e)
        : void 0
    );
  }
}
function xb(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function wb(t) {
  var e = gb(t, 2),
    r = e[0],
    n = e[1],
    i = r,
    o = n;
  return r > n && ((i = n), (o = r)), [i, o];
}
function Ob(t, e, r) {
  if (t.lte(0)) return new nb(0);
  var n = vb.getDigitCount(t.toNumber()),
    i = new nb(10).pow(n),
    o = t.div(i),
    a = 1 !== n ? 0.05 : 0.1,
    c = new nb(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i);
  return e ? c : new nb(Math.ceil(c));
}
function Sb(t, e, r, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (r - 1)))
    return { step: new nb(0), tickMin: new nb(0), tickMax: new nb(0) };
  var o,
    a = Ob(new nb(e).sub(t).div(r - 1), n, i);
  o =
    t <= 0 && e >= 0
      ? new nb(0)
      : (o = new nb(t).add(e).div(2)).sub(new nb(o).mod(a));
  var c = Math.ceil(o.sub(t).div(a).toNumber()),
    u = Math.ceil(new nb(e).sub(o).div(a).toNumber()),
    l = c + u + 1;
  return l > r
    ? Sb(t, e, r, n, i + 1)
    : (l < r && ((u = e > 0 ? u + (r - l) : u), (c = e > 0 ? c : c + (r - l))),
      {
        step: a,
        tickMin: o.sub(new nb(c).mul(a)),
        tickMax: o.add(new nb(u).mul(a)),
      });
}
var jb = yb(function (t) {
    var e = gb(t, 2),
      r = e[0],
      n = e[1],
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
      o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      a = Math.max(i, 2),
      c = gb(wb([r, n]), 2),
      u = c[0],
      l = c[1];
    if (u === -1 / 0 || l === 1 / 0) {
      var s =
        l === 1 / 0
          ? [u].concat(
              mb(
                fb(0, i - 1).map(function () {
                  return 1 / 0;
                }),
              ),
            )
          : [].concat(
              mb(
                fb(0, i - 1).map(function () {
                  return -1 / 0;
                }),
              ),
              [l],
            );
      return r > n ? db(s) : s;
    }
    if (u === l)
      return (function (t, e, r) {
        var n = 1,
          i = new nb(t);
        if (!i.isint() && r) {
          var o = Math.abs(t);
          o < 1
            ? ((n = new nb(10).pow(vb.getDigitCount(t) - 1)),
              (i = new nb(Math.floor(i.div(n).toNumber())).mul(n)))
            : o > 1 && (i = new nb(Math.floor(t)));
        } else
          0 === t
            ? (i = new nb(Math.floor((e - 1) / 2)))
            : r || (i = new nb(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return hb(
          pb(function (t) {
            return i.add(new nb(t - a).mul(n)).toNumber();
          }),
          fb,
        )(0, e);
      })(u, i, o);
    var f = Sb(u, l, a, o),
      p = f.step,
      h = f.tickMin,
      d = f.tickMax,
      y = vb.rangeStep(h, d.add(new nb(0.1).mul(p)), p);
    return r > n ? db(y) : y;
  }),
  Ab = yb(function (t, e) {
    var r = gb(t, 2),
      n = r[0],
      i = r[1],
      o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      a = gb(wb([n, i]), 2),
      c = a[0],
      u = a[1];
    if (c === -1 / 0 || u === 1 / 0) return [n, i];
    if (c === u) return [c];
    var l = Math.max(e, 2),
      s = Ob(new nb(u).sub(c).div(l - 1), o, 0),
      f = [].concat(
        mb(vb.rangeStep(new nb(c), new nb(u).sub(new nb(0.99).mul(s)), s)),
        [u],
      );
    return n > i ? db(f) : f;
  }),
  Pb = [
    'offset',
    'layout',
    'width',
    'dataKey',
    'data',
    'dataPointFormatter',
    'xAxis',
    'yAxis',
  ];
function kb() {
  return (
    (kb = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    kb.apply(this, arguments)
  );
}
function Eb(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return Mb(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Mb(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Mb(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function _b(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function Tb(t) {
  var r = t.offset,
    n = t.layout,
    i = t.width,
    o = t.dataKey,
    a = t.data,
    c = t.dataPointFormatter,
    u = t.xAxis,
    l = t.yAxis,
    s = _b(t, Pb),
    f = Wr(s),
    p = a.map(function (t) {
      var a = c(t, o),
        s = a.x,
        p = a.y,
        h = a.value,
        d = a.errorVal;
      if (!d) return null;
      var y,
        v,
        m = [];
      if (Array.isArray(d)) {
        var g = Eb(d, 2);
        (y = g[0]), (v = g[1]);
      } else y = v = d;
      if ('vertical' === n) {
        var b = u.scale,
          x = p + r,
          w = x + i,
          O = x - i,
          S = b(h - y),
          j = b(h + v);
        m.push({ x1: j, y1: w, x2: j, y2: O }),
          m.push({ x1: S, y1: x, x2: j, y2: x }),
          m.push({ x1: S, y1: w, x2: S, y2: O });
      } else if ('horizontal' === n) {
        var A = l.scale,
          P = s + r,
          k = P - i,
          E = P + i,
          M = A(h - y),
          _ = A(h + v);
        m.push({ x1: k, y1: _, x2: E, y2: _ }),
          m.push({ x1: P, y1: M, x2: P, y2: _ }),
          m.push({ x1: k, y1: M, x2: E, y2: M });
      }
      return e.createElement(
        en,
        kb(
          {
            className: 'recharts-errorBar',
            key: 'bar-'.concat(
              m.map(function (t) {
                return ''
                  .concat(t.x1, '-')
                  .concat(t.x2, '-')
                  .concat(t.y1, '-')
                  .concat(t.y2);
              }),
            ),
          },
          f,
        ),
        m.map(function (t) {
          return e.createElement(
            'line',
            kb({}, t, {
              key: 'line-'
                .concat(t.x1, '-')
                .concat(t.x2, '-')
                .concat(t.y1, '-')
                .concat(t.y2),
            }),
          );
        }),
      );
    });
  return e.createElement(en, { className: 'recharts-errorBars' }, p);
}
function Cb(t) {
  return (Cb =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Db(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nb(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Db(Object(r), !0).forEach(function (e) {
          Ib(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Db(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Ib(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Cb(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Cb(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Cb(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
(Tb.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal',
}),
  (Tb.displayName = 'ErrorBar');
var Bb = function (t) {
  var e,
    r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    o = t.legendContent,
    a = zr(r, al);
  return a
    ? ((e =
        a.props && a.props.payload
          ? a.props && a.props.payload
          : 'children' === o
          ? (n || []).reduce(function (t, e) {
              var r = e.item,
                n = e.props,
                i = n.sectors || n.data || [];
              return t.concat(
                i.map(function (t) {
                  return {
                    type: a.props.iconType || r.props.legendType,
                    value: t.name,
                    color: t.fill,
                    payload: t,
                  };
                }),
              );
            }, [])
          : (n || []).map(function (t) {
              var e = t.item,
                r = e.props,
                n = r.dataKey,
                i = r.name,
                o = r.legendType;
              return {
                inactive: r.hide,
                dataKey: n,
                type: a.props.iconType || o || 'square',
                color: Xb(e),
                value: i || n,
                payload: e.props,
              };
            })),
      Nb(
        Nb(Nb({}, a.props), al.getWithHeight(a, i)),
        {},
        { payload: e, item: a },
      ))
    : null;
};
function Rb(t) {
  return (Rb =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Lb(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zb(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Lb(Object(r), !0).forEach(function (e) {
          $b(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Lb(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function $b(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Rb(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Rb(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Rb(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Ub(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Fb(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return Fb(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Fb(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Fb(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Wb(t, e, r) {
  return Ne(t) || Ne(e) ? r : dr(e) ? De(t, e, r) : K(e) ? e(t) : r;
}
function qb(t, e, r, n) {
  var i = jg(t, function (t) {
    return Wb(t, e);
  });
  if ('number' === r) {
    var o = i.filter(function (t) {
      return hr(t) || parseFloat(t);
    });
    return o.length ? [mg(o), hg(o)] : [1 / 0, -1 / 0];
  }
  return (
    n
      ? i.filter(function (t) {
          return !Ne(t);
        })
      : i
  ).map(function (t) {
    return dr(t) || t instanceof Date ? t : '';
  });
}
var Xb = function (t) {
    var e,
      r = t.type.displayName,
      n = t.props,
      i = n.stroke,
      o = n.fill;
    switch (r) {
      case 'Line':
        e = i;
        break;
      case 'Area':
      case 'Radar':
        e = i && 'none' !== i ? i : o;
        break;
      default:
        e = o;
    }
    return e;
  },
  Gb = function (t, e, r, n, i) {
    var o = Lr(e.props.children, Tb).filter(function (t) {
      return (function (t, e, r) {
        return (
          !!Ne(e) ||
          ('horizontal' === t
            ? 'yAxis' === e
            : 'vertical' === t || 'x' === r
            ? 'xAxis' === e
            : 'y' !== r || 'yAxis' === e)
        );
      })(n, i, t.props.direction);
    });
    if (o && o.length) {
      var a = o.map(function (t) {
        return t.props.dataKey;
      });
      return t.reduce(
        function (t, e) {
          var n = Wb(e, r, 0),
            i = Array.isArray(n) ? [mg(n), hg(n)] : [n, n],
            o = a.reduce(
              function (t, r) {
                var n = Wb(e, r, 0),
                  o = i[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                  a = i[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                return [Math.min(o, t[0]), Math.max(a, t[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  Vb = function (t, e, r, n, i) {
    var o = e.map(function (e) {
      var o = e.props.dataKey;
      return ('number' === r && o && Gb(t, e, o, n)) || qb(t, o, r, i);
    });
    if ('number' === r)
      return o.reduce(
        function (t, e) {
          return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
        },
        [1 / 0, -1 / 0],
      );
    var a = {};
    return o.reduce(function (t, e) {
      for (var r = 0, n = e.length; r < n; r++)
        a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
      return t;
    }, []);
  },
  Hb = function (t, e) {
    return (
      ('horizontal' === t && 'xAxis' === e) ||
      ('vertical' === t && 'yAxis' === e) ||
      ('centric' === t && 'angleAxis' === e) ||
      ('radial' === t && 'radiusAxis' === e)
    );
  },
  Yb = function (t, e, r, n) {
    if (n)
      return t.map(function (t) {
        return t.coordinate;
      });
    var i,
      o,
      a = t.map(function (t) {
        return (
          t.coordinate === e && (i = !0),
          t.coordinate === r && (o = !0),
          t.coordinate
        );
      });
    return i || a.push(e), o || a.push(r), a;
  },
  Kb = function (t, e, r) {
    if (!t) return null;
    var n = t.scale,
      i = t.duplicateDomain,
      o = t.type,
      a = t.range,
      c = 'scaleBand' === t.realScaleType ? n.bandwidth() / 2 : 2,
      u = (e || r) && 'category' === o && n.bandwidth ? n.bandwidth() / c : 0;
    return (
      (u =
        'angleAxis' === t.axisType && (null == a ? void 0 : a.length) >= 2
          ? 2 * fr(a[0] - a[1]) * u
          : u),
      e && (t.ticks || t.niceTicks)
        ? (t.ticks || t.niceTicks)
            .map(function (t) {
              var e = i ? i.indexOf(t) : t;
              return { coordinate: n(e) + u, value: t, offset: u };
            })
            .filter(function (t) {
              return !sr(t.coordinate);
            })
        : t.isCategorical && t.categoricalDomain
        ? t.categoricalDomain.map(function (t, e) {
            return { coordinate: n(t) + u, value: t, index: e, offset: u };
          })
        : n.ticks && !r
        ? n.ticks(t.tickCount).map(function (t) {
            return { coordinate: n(t) + u, value: t, offset: u };
          })
        : n.domain().map(function (t, e) {
            return {
              coordinate: n(t) + u,
              value: i ? i[t] : t,
              index: e,
              offset: u,
            };
          })
    );
  },
  Zb = new WeakMap(),
  Jb = function (t, e) {
    if ('function' != typeof e) return t;
    Zb.has(t) || Zb.set(t, new WeakMap());
    var r = Zb.get(t);
    if (r.has(e)) return r.get(e);
    var n = function () {
      t.apply(void 0, arguments), e.apply(void 0, arguments);
    };
    return r.set(e, n), n;
  },
  Qb = 1e-4,
  tx = {
    sign: function (t) {
      var e = t.length;
      if (!(e <= 0))
        for (var r = 0, n = t[0].length; r < n; ++r)
          for (var i = 0, o = 0, a = 0; a < e; ++a) {
            var c = sr(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
            c >= 0
              ? ((t[a][r][0] = i), (t[a][r][1] = i + c), (i = t[a][r][1]))
              : ((t[a][r][0] = o), (t[a][r][1] = o + c), (o = t[a][r][1]));
          }
    },
    expand: function (t, e) {
      if ((n = t.length) > 0) {
        for (var r, n, i, o = 0, a = t[0].length; o < a; ++o) {
          for (i = r = 0; r < n; ++r) i += t[r][o][1] || 0;
          if (i) for (r = 0; r < n; ++r) t[r][o][1] /= i;
        }
        Mi(t, e);
      }
    },
    none: Mi,
    silhouette: function (t, e) {
      if ((r = t.length) > 0) {
        for (var r, n = 0, i = t[e[0]], o = i.length; n < o; ++n) {
          for (var a = 0, c = 0; a < r; ++a) c += t[a][n][1] || 0;
          i[n][1] += i[n][0] = -c / 2;
        }
        Mi(t, e);
      }
    },
    wiggle: function (t, e) {
      if ((i = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
        for (var r, n, i, o = 0, a = 1; a < n; ++a) {
          for (var c = 0, u = 0, l = 0; c < i; ++c) {
            for (
              var s = t[e[c]],
                f = s[a][1] || 0,
                p = (f - (s[a - 1][1] || 0)) / 2,
                h = 0;
              h < c;
              ++h
            ) {
              var d = t[e[h]];
              p += (d[a][1] || 0) - (d[a - 1][1] || 0);
            }
            (u += f), (l += p * f);
          }
          (r[a - 1][1] += r[a - 1][0] = o), u && (o -= l / u);
        }
        (r[a - 1][1] += r[a - 1][0] = o), Mi(t, e);
      }
    },
    positive: function (t) {
      var e = t.length;
      if (!(e <= 0))
        for (var r = 0, n = t[0].length; r < n; ++r)
          for (var i = 0, o = 0; o < e; ++o) {
            var a = sr(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
            a >= 0
              ? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1]))
              : ((t[o][r][0] = 0), (t[o][r][1] = 0));
          }
    },
  },
  ex = function (t, e, r) {
    var n = e.map(function (t) {
        return t.props.dataKey;
      }),
      i = tx[r],
      o = (function () {
        var t = Mn([]),
          e = _i,
          r = Mi,
          n = Ti;
        function i(i) {
          var o,
            a,
            c = Array.from(t.apply(this, arguments), Ci),
            u = c.length,
            l = -1;
          for (const t of i)
            for (o = 0, ++l; o < u; ++o)
              (c[o][l] = [0, +n(t, c[o].key, l, i)]).data = t;
          for (o = 0, a = Fn(e(c)); o < u; ++o) c[a[o]].index = o;
          return r(c, a), c;
        }
        return (
          (i.keys = function (e) {
            return arguments.length
              ? ((t = 'function' == typeof e ? e : Mn(Array.from(e))), i)
              : t;
          }),
          (i.value = function (t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Mn(+t)), i)
              : n;
          }),
          (i.order = function (t) {
            return arguments.length
              ? ((e =
                  null == t
                    ? _i
                    : 'function' == typeof t
                    ? t
                    : Mn(Array.from(t))),
                i)
              : e;
          }),
          (i.offset = function (t) {
            return arguments.length ? ((r = null == t ? Mi : t), i) : r;
          }),
          i
        );
      })()
        .keys(n)
        .value(function (t, e) {
          return +Wb(t, e, 0);
        })
        .order(_i)
        .offset(i);
    return o(t);
  },
  rx = function (t) {
    var e = t.axis,
      r = t.ticks,
      n = t.bandSize,
      i = t.entry,
      o = t.index,
      a = t.dataKey;
    if ('category' === e.type) {
      if (!e.allowDuplicatedCategory && e.dataKey && !Ne(i[e.dataKey])) {
        var c = xr(r, 'value', i[e.dataKey]);
        if (c) return c.coordinate + n / 2;
      }
      return r[o] ? r[o].coordinate + n / 2 : null;
    }
    var u = Wb(i, Ne(a) ? e.dataKey : a);
    return Ne(u) ? null : e.scale(u);
  },
  nx = function (t) {
    var e = t.axis,
      r = t.ticks,
      n = t.offset,
      i = t.bandSize,
      o = t.entry,
      a = t.index;
    if ('category' === e.type) return r[a] ? r[a].coordinate + n : null;
    var c = Wb(o, e.dataKey, e.domain[a]);
    return Ne(c) ? null : e.scale(c) - i / 2 + n;
  },
  ix = function (t, e, r) {
    return Object.keys(t)
      .reduce(
        function (n, i) {
          var o = t[i].stackedData.reduce(
            function (t, n) {
              var i = n.slice(e, r + 1).reduce(
                function (t, e) {
                  return [
                    mg(e.concat([t[0]]).filter(hr)),
                    hg(e.concat([t[1]]).filter(hr)),
                  ];
                },
                [1 / 0, -1 / 0],
              );
              return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
            },
            [1 / 0, -1 / 0],
          );
          return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (t) {
        return t === 1 / 0 || t === -1 / 0 ? 0 : t;
      });
  },
  ox = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  ax = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  cx = function (t, e, r) {
    if (K(t)) return t(e, r);
    if (!Array.isArray(t)) return e;
    var n = [];
    if (hr(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
    else if (ox.test(t[0])) {
      var i = +ox.exec(t[0])[1];
      n[0] = e[0] - i;
    } else K(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
    if (hr(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
    else if (ax.test(t[1])) {
      var o = +ax.exec(t[1])[1];
      n[1] = e[1] + o;
    } else K(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
    return n;
  },
  ux = function (t, e, r) {
    if (t && t.scale && t.scale.bandwidth) {
      var n = t.scale.bandwidth();
      if (!r || n > 0) return n;
    }
    if (t && e && e.length >= 2) {
      for (
        var i = Zl(e, function (t) {
            return t.coordinate;
          }),
          o = 1 / 0,
          a = 1,
          c = i.length;
        a < c;
        a++
      ) {
        var u = i[a],
          l = i[a - 1];
        o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return r ? void 0 : 0;
  },
  lx = function (t, e, r) {
    return t && t.length
      ? kg(t, De(r, 'type.defaultProps.domain'))
        ? e
        : t
      : e;
  },
  sx = function (t, e) {
    var r = t.props,
      n = r.dataKey,
      i = r.name,
      o = r.unit,
      a = r.formatter,
      c = r.tooltipType,
      u = r.chartType;
    return zb(
      zb({}, Wr(t)),
      {},
      {
        dataKey: n,
        unit: o,
        formatter: a,
        name: i || n,
        color: Xb(t),
        value: Wb(e, n),
        type: c,
        payload: e,
        chartType: u,
      },
    );
  };
function fx(t) {
  return (fx =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function px(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hx(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? px(Object(r), !0).forEach(function (e) {
          dx(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : px(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function dx(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== fx(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== fx(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === fx(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var yx = Math.PI / 180,
  vx = function (t) {
    return (180 * t) / Math.PI;
  },
  mx = function (t, e, r, n) {
    return { x: t + Math.cos(-yx * n) * r, y: e + Math.sin(-yx * n) * r };
  },
  gx = function (t, e) {
    var r = t.x,
      n = t.y,
      i = e.cx,
      o = e.cy,
      a = (function (t, e) {
        var r = t.x,
          n = t.y,
          i = e.x,
          o = e.y;
        return Math.sqrt(Math.pow(r - i, 2) + Math.pow(n - o, 2));
      })({ x: r, y: n }, { x: i, y: o });
    if (a <= 0) return { radius: a };
    var c = (r - i) / a,
      u = Math.acos(c);
    return (
      n > o && (u = 2 * Math.PI - u),
      { radius: a, angle: vx(u), angleInRadian: u }
    );
  },
  bx = function (t, e) {
    var r = e.startAngle,
      n = e.endAngle,
      i = Math.floor(r / 360),
      o = Math.floor(n / 360);
    return t + 360 * Math.min(i, o);
  },
  xx = function (t, e) {
    var r = t.x,
      n = t.y,
      i = gx({ x: r, y: n }, e),
      o = i.radius,
      a = i.angle,
      c = e.innerRadius,
      u = e.outerRadius;
    if (o < c || o > u) return !1;
    if (0 === o) return !0;
    var l,
      s = (function (t) {
        var e = t.startAngle,
          r = t.endAngle,
          n = Math.floor(e / 360),
          i = Math.floor(r / 360),
          o = Math.min(n, i);
        return { startAngle: e - 360 * o, endAngle: r - 360 * o };
      })(e),
      f = s.startAngle,
      p = s.endAngle,
      h = a;
    if (f <= p) {
      for (; h > p; ) h -= 360;
      for (; h < f; ) h += 360;
      l = h >= f && h <= p;
    } else {
      for (; h > f; ) h -= 360;
      for (; h < p; ) h += 360;
      l = h >= p && h <= f;
    }
    return l ? hx(hx({}, e), {}, { radius: o, angle: bx(h, e) }) : null;
  };
function wx(t) {
  return (wx =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Ox = ['offset'];
function Sx(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return jx(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return jx(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return jx(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function jx(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Ax(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function Px(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function kx(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Px(Object(r), !0).forEach(function (e) {
          Ex(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Px(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Ex(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== wx(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== wx(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === wx(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Mx() {
  return (
    (Mx = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Mx.apply(this, arguments)
  );
}
var _x = function (t) {
    var e = t.value,
      r = t.formatter,
      n = Ne(t.children) ? e : t.children;
    return K(r) ? r(n) : n;
  },
  Tx = function (t, r, n) {
    var i,
      o,
      a = t.position,
      c = t.viewBox,
      u = t.offset,
      l = t.className,
      s = c,
      f = s.cx,
      p = s.cy,
      h = s.innerRadius,
      d = s.outerRadius,
      y = s.startAngle,
      v = s.endAngle,
      m = s.clockWise,
      g = (h + d) / 2,
      b = (function (t, e) {
        return fr(e - t) * Math.min(Math.abs(e - t), 360);
      })(y, v),
      x = b >= 0 ? 1 : -1;
    'insideStart' === a
      ? ((i = y + x * u), (o = m))
      : 'insideEnd' === a
      ? ((i = v - x * u), (o = !m))
      : 'end' === a && ((i = v + x * u), (o = m)),
      (o = b <= 0 ? o : !o);
    var w = mx(f, p, g, i),
      O = mx(f, p, g, i + 359 * (o ? 1 : -1)),
      S = 'M'
        .concat(w.x, ',')
        .concat(w.y, '\n    A')
        .concat(g, ',')
        .concat(g, ',0,1,')
        .concat(o ? 0 : 1, ',\n    ')
        .concat(O.x, ',')
        .concat(O.y),
      j = Ne(t.id) ? vr('recharts-radial-line-') : t.id;
    return e.createElement(
      'text',
      Mx({}, n, {
        dominantBaseline: 'central',
        className: B('recharts-radial-bar-label', l),
      }),
      e.createElement('defs', null, e.createElement('path', { id: j, d: S })),
      e.createElement('textPath', { xlinkHref: '#'.concat(j) }, r),
    );
  },
  Cx = function (t) {
    var e = t.viewBox,
      r = t.offset,
      n = t.position,
      i = e,
      o = i.cx,
      a = i.cy,
      c = i.innerRadius,
      u = i.outerRadius,
      l = (i.startAngle + i.endAngle) / 2;
    if ('outside' === n) {
      var s = mx(o, a, u + r, l),
        f = s.x;
      return {
        x: f,
        y: s.y,
        textAnchor: f >= o ? 'start' : 'end',
        verticalAnchor: 'middle',
      };
    }
    if ('center' === n)
      return { x: o, y: a, textAnchor: 'middle', verticalAnchor: 'middle' };
    if ('centerTop' === n)
      return { x: o, y: a, textAnchor: 'middle', verticalAnchor: 'start' };
    if ('centerBottom' === n)
      return { x: o, y: a, textAnchor: 'middle', verticalAnchor: 'end' };
    var p = mx(o, a, (c + u) / 2, l);
    return { x: p.x, y: p.y, textAnchor: 'middle', verticalAnchor: 'middle' };
  },
  Dx = function (t) {
    var e = t.viewBox,
      r = t.parentViewBox,
      n = t.offset,
      i = t.position,
      o = e,
      a = o.x,
      c = o.y,
      u = o.width,
      l = o.height,
      s = l >= 0 ? 1 : -1,
      f = s * n,
      p = s > 0 ? 'end' : 'start',
      h = s > 0 ? 'start' : 'end',
      d = u >= 0 ? 1 : -1,
      y = d * n,
      v = d > 0 ? 'end' : 'start',
      m = d > 0 ? 'start' : 'end';
    if ('top' === i)
      return kx(
        kx(
          {},
          {
            x: a + u / 2,
            y: c - s * n,
            textAnchor: 'middle',
            verticalAnchor: p,
          },
        ),
        r ? { height: Math.max(c - r.y, 0), width: u } : {},
      );
    if ('bottom' === i)
      return kx(
        kx(
          {},
          {
            x: a + u / 2,
            y: c + l + f,
            textAnchor: 'middle',
            verticalAnchor: h,
          },
        ),
        r ? { height: Math.max(r.y + r.height - (c + l), 0), width: u } : {},
      );
    if ('left' === i) {
      var g = {
        x: a - y,
        y: c + l / 2,
        textAnchor: v,
        verticalAnchor: 'middle',
      };
      return kx(
        kx({}, g),
        r ? { width: Math.max(g.x - r.x, 0), height: l } : {},
      );
    }
    if ('right' === i) {
      var b = {
        x: a + u + y,
        y: c + l / 2,
        textAnchor: m,
        verticalAnchor: 'middle',
      };
      return kx(
        kx({}, b),
        r ? { width: Math.max(r.x + r.width - b.x, 0), height: l } : {},
      );
    }
    var x = r ? { width: u, height: l } : {};
    return 'insideLeft' === i
      ? kx(
          { x: a + y, y: c + l / 2, textAnchor: m, verticalAnchor: 'middle' },
          x,
        )
      : 'insideRight' === i
      ? kx(
          {
            x: a + u - y,
            y: c + l / 2,
            textAnchor: v,
            verticalAnchor: 'middle',
          },
          x,
        )
      : 'insideTop' === i
      ? kx(
          { x: a + u / 2, y: c + f, textAnchor: 'middle', verticalAnchor: h },
          x,
        )
      : 'insideBottom' === i
      ? kx(
          {
            x: a + u / 2,
            y: c + l - f,
            textAnchor: 'middle',
            verticalAnchor: p,
          },
          x,
        )
      : 'insideTopLeft' === i
      ? kx({ x: a + y, y: c + f, textAnchor: m, verticalAnchor: h }, x)
      : 'insideTopRight' === i
      ? kx({ x: a + u - y, y: c + f, textAnchor: v, verticalAnchor: h }, x)
      : 'insideBottomLeft' === i
      ? kx({ x: a + y, y: c + l - f, textAnchor: m, verticalAnchor: p }, x)
      : 'insideBottomRight' === i
      ? kx({ x: a + u - y, y: c + l - f, textAnchor: v, verticalAnchor: p }, x)
      : F(i) && (hr(i.x) || pr(i.x)) && (hr(i.y) || pr(i.y))
      ? kx(
          {
            x: a + mr(i.x, u),
            y: c + mr(i.y, l),
            textAnchor: 'end',
            verticalAnchor: 'end',
          },
          x,
        )
      : kx(
          {
            x: a + u / 2,
            y: c + l / 2,
            textAnchor: 'middle',
            verticalAnchor: 'middle',
          },
          x,
        );
  },
  Nx = function (t) {
    return 'cx' in t && hr(t.cx);
  };
function Ix(r) {
  var n,
    i = r.offset,
    o = kx({ offset: void 0 === i ? 5 : i }, Ax(r, Ox)),
    a = o.viewBox,
    c = o.position,
    u = o.value,
    l = o.children,
    s = o.content,
    f = o.className,
    p = void 0 === f ? '' : f,
    h = o.textBreakAll;
  if (!a || (Ne(u) && Ne(l) && !t.isValidElement(s) && !K(s))) return null;
  if (t.isValidElement(s)) return t.cloneElement(s, o);
  if (K(s)) {
    if (((n = t.createElement(s, o)), t.isValidElement(n))) return n;
  } else n = _x(o);
  var d = Nx(a),
    y = Wr(o, !0);
  if (d && ('insideStart' === c || 'insideEnd' === c || 'end' === c))
    return Tx(o, n, y);
  var v = d ? Cx(o) : Dx(o);
  return e.createElement(
    Ah,
    Mx({ className: B('recharts-label', p) }, y, v, { breakAll: h }),
    n,
  );
}
Ix.displayName = 'Label';
var Bx = function (t) {
    var e = t.cx,
      r = t.cy,
      n = t.angle,
      i = t.startAngle,
      o = t.endAngle,
      a = t.r,
      c = t.radius,
      u = t.innerRadius,
      l = t.outerRadius,
      s = t.x,
      f = t.y,
      p = t.top,
      h = t.left,
      d = t.width,
      y = t.height,
      v = t.clockWise,
      m = t.labelViewBox;
    if (m) return m;
    if (hr(d) && hr(y)) {
      if (hr(s) && hr(f)) return { x: s, y: f, width: d, height: y };
      if (hr(p) && hr(h)) return { x: p, y: h, width: d, height: y };
    }
    return hr(s) && hr(f)
      ? { x: s, y: f, width: 0, height: 0 }
      : hr(e) && hr(r)
      ? {
          cx: e,
          cy: r,
          startAngle: i || n || 0,
          endAngle: o || n || 0,
          innerRadius: u || 0,
          outerRadius: l || c || a || 0,
          clockWise: v,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  Rx = function (r, n) {
    return r
      ? !0 === r
        ? e.createElement(Ix, { key: 'label-implicit', viewBox: n })
        : dr(r)
        ? e.createElement(Ix, { key: 'label-implicit', viewBox: n, value: r })
        : t.isValidElement(r)
        ? r.type === Ix
          ? t.cloneElement(r, { key: 'label-implicit', viewBox: n })
          : e.createElement(Ix, {
              key: 'label-implicit',
              content: r,
              viewBox: n,
            })
        : K(r)
        ? e.createElement(Ix, { key: 'label-implicit', content: r, viewBox: n })
        : F(r)
        ? e.createElement(Ix, Mx({ viewBox: n }, r, { key: 'label-implicit' }))
        : null
      : null;
  };
(Ix.parseViewBox = Bx),
  (Ix.renderCallByParent = function (e, r) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!e || (!e.children && n && !e.label)) return null;
    var i = e.children,
      o = Bx(e),
      a = Lr(i, Ix).map(function (e, n) {
        return t.cloneElement(e, { viewBox: r || o, key: 'label-'.concat(n) });
      });
    return n ? [Rx(e.label, r || o)].concat(Sx(a)) : a;
  });
var Lx = function (t) {
  var e = null == t ? 0 : t.length;
  return e ? t[e - 1] : void 0;
};
function zx(t) {
  return (zx =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var $x = ['valueAccessor'],
  Ux = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll'];
function Fx(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Wx(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return Wx(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Wx(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Wx(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function qx() {
  return (
    (qx = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    qx.apply(this, arguments)
  );
}
function Xx(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gx(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Xx(Object(r), !0).forEach(function (e) {
          Vx(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Xx(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Vx(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== zx(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== zx(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === zx(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Hx(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
var Yx = function (t) {
  return Array.isArray(t.value) ? Lx(t.value) : t.value;
};
function Kx(t) {
  var r = t.valueAccessor,
    n = void 0 === r ? Yx : r,
    i = Hx(t, $x),
    o = i.data,
    a = i.dataKey,
    c = i.clockWise,
    u = i.id,
    l = i.textBreakAll,
    s = Hx(i, Ux);
  return o && o.length
    ? e.createElement(
        en,
        { className: 'recharts-label-list' },
        o.map(function (t, r) {
          var i = Ne(a) ? n(t, r) : Wb(t && t.payload, a),
            o = Ne(u) ? {} : { id: ''.concat(u, '-').concat(r) };
          return e.createElement(
            Ix,
            qx({}, Wr(t, !0), s, o, {
              parentViewBox: t.parentViewBox,
              value: i,
              textBreakAll: l,
              viewBox: Ix.parseViewBox(
                Ne(c) ? t : Gx(Gx({}, t), {}, { clockWise: c }),
              ),
              key: 'label-'.concat(r),
              index: r,
            }),
          );
        }),
      )
    : null;
}
function Zx(t) {
  return (Zx =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Jx() {
  return (
    (Jx = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Jx.apply(this, arguments)
  );
}
function Qx(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function tw(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Qx(Object(r), !0).forEach(function (e) {
          ew(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Qx(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function ew(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Zx(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Zx(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Zx(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
(Kx.displayName = 'LabelList'),
  (Kx.renderCallByParent = function (r, n) {
    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!r || (!r.children && i && !r.label)) return null;
    var o = Lr(r.children, Kx).map(function (e, r) {
      return t.cloneElement(e, { data: n, key: 'labelList-'.concat(r) });
    });
    return i
      ? [
          (function (t, r) {
            return t
              ? !0 === t
                ? e.createElement(Kx, { key: 'labelList-implicit', data: r })
                : e.isValidElement(t) || K(t)
                ? e.createElement(Kx, {
                    key: 'labelList-implicit',
                    data: r,
                    content: t,
                  })
                : F(t)
                ? e.createElement(
                    Kx,
                    qx({ data: r }, t, { key: 'labelList-implicit' }),
                  )
                : null
              : null;
          })(r.label, n),
        ].concat(Fx(o))
      : o;
  });
var rw = function (t) {
    var e = t.cx,
      r = t.cy,
      n = t.radius,
      i = t.angle,
      o = t.sign,
      a = t.isExternal,
      c = t.cornerRadius,
      u = t.cornerIsExternal,
      l = c * (a ? 1 : -1) + n,
      s = Math.asin(c / l) / yx,
      f = u ? i : i + o * s,
      p = u ? i - o * s : i;
    return {
      center: mx(e, r, l, f),
      circleTangency: mx(e, r, n, f),
      lineTangency: mx(e, r, l * Math.cos(s * yx), p),
      theta: s,
    };
  },
  nw = function (t) {
    var e = t.cx,
      r = t.cy,
      n = t.innerRadius,
      i = t.outerRadius,
      o = t.startAngle,
      a = (function (t, e) {
        return fr(e - t) * Math.min(Math.abs(e - t), 359.999);
      })(o, t.endAngle),
      c = o + a,
      u = mx(e, r, i, o),
      l = mx(e, r, i, c),
      s = 'M '
        .concat(u.x, ',')
        .concat(u.y, '\n    A ')
        .concat(i, ',')
        .concat(i, ',0,\n    ')
        .concat(+(Math.abs(a) > 180), ',')
        .concat(+(o > c), ',\n    ')
        .concat(l.x, ',')
        .concat(l.y, '\n  ');
    if (n > 0) {
      var f = mx(e, r, n, o),
        p = mx(e, r, n, c);
      s += 'L '
        .concat(p.x, ',')
        .concat(p.y, '\n            A ')
        .concat(n, ',')
        .concat(n, ',0,\n            ')
        .concat(+(Math.abs(a) > 180), ',')
        .concat(+(o <= c), ',\n            ')
        .concat(f.x, ',')
        .concat(f.y, ' Z');
    } else s += 'L '.concat(e, ',').concat(r, ' Z');
    return s;
  },
  iw = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  ow = function (t) {
    var r = tw(tw({}, iw), t),
      n = r.cx,
      i = r.cy,
      o = r.innerRadius,
      a = r.outerRadius,
      c = r.cornerRadius,
      u = r.forceCornerRadius,
      l = r.cornerIsExternal,
      s = r.startAngle,
      f = r.endAngle,
      p = r.className;
    if (a < o || s === f) return null;
    var h,
      d = B('recharts-sector', p),
      y = a - o,
      v = mr(c, y, 0, !0);
    return (
      (h =
        v > 0 && Math.abs(s - f) < 360
          ? (function (t) {
              var e = t.cx,
                r = t.cy,
                n = t.innerRadius,
                i = t.outerRadius,
                o = t.cornerRadius,
                a = t.forceCornerRadius,
                c = t.cornerIsExternal,
                u = t.startAngle,
                l = t.endAngle,
                s = fr(l - u),
                f = rw({
                  cx: e,
                  cy: r,
                  radius: i,
                  angle: u,
                  sign: s,
                  cornerRadius: o,
                  cornerIsExternal: c,
                }),
                p = f.circleTangency,
                h = f.lineTangency,
                d = f.theta,
                y = rw({
                  cx: e,
                  cy: r,
                  radius: i,
                  angle: l,
                  sign: -s,
                  cornerRadius: o,
                  cornerIsExternal: c,
                }),
                v = y.circleTangency,
                m = y.lineTangency,
                g = y.theta,
                b = c ? Math.abs(u - l) : Math.abs(u - l) - d - g;
              if (b < 0)
                return a
                  ? 'M '
                      .concat(h.x, ',')
                      .concat(h.y, '\n        a')
                      .concat(o, ',')
                      .concat(o, ',0,0,1,')
                      .concat(2 * o, ',0\n        a')
                      .concat(o, ',')
                      .concat(o, ',0,0,1,')
                      .concat(2 * -o, ',0\n      ')
                  : nw({
                      cx: e,
                      cy: r,
                      innerRadius: n,
                      outerRadius: i,
                      startAngle: u,
                      endAngle: l,
                    });
              var x = 'M '
                .concat(h.x, ',')
                .concat(h.y, '\n    A')
                .concat(o, ',')
                .concat(o, ',0,0,')
                .concat(+(s < 0), ',')
                .concat(p.x, ',')
                .concat(p.y, '\n    A')
                .concat(i, ',')
                .concat(i, ',0,')
                .concat(+(b > 180), ',')
                .concat(+(s < 0), ',')
                .concat(v.x, ',')
                .concat(v.y, '\n    A')
                .concat(o, ',')
                .concat(o, ',0,0,')
                .concat(+(s < 0), ',')
                .concat(m.x, ',')
                .concat(m.y, '\n  ');
              if (n > 0) {
                var w = rw({
                    cx: e,
                    cy: r,
                    radius: n,
                    angle: u,
                    sign: s,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c,
                  }),
                  O = w.circleTangency,
                  S = w.lineTangency,
                  j = w.theta,
                  A = rw({
                    cx: e,
                    cy: r,
                    radius: n,
                    angle: l,
                    sign: -s,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c,
                  }),
                  P = A.circleTangency,
                  k = A.lineTangency,
                  E = A.theta,
                  M = c ? Math.abs(u - l) : Math.abs(u - l) - j - E;
                if (M < 0 && 0 === o)
                  return ''.concat(x, 'L').concat(e, ',').concat(r, 'Z');
                x += 'L'
                  .concat(k.x, ',')
                  .concat(k.y, '\n      A')
                  .concat(o, ',')
                  .concat(o, ',0,0,')
                  .concat(+(s < 0), ',')
                  .concat(P.x, ',')
                  .concat(P.y, '\n      A')
                  .concat(n, ',')
                  .concat(n, ',0,')
                  .concat(+(M > 180), ',')
                  .concat(+(s > 0), ',')
                  .concat(O.x, ',')
                  .concat(O.y, '\n      A')
                  .concat(o, ',')
                  .concat(o, ',0,0,')
                  .concat(+(s < 0), ',')
                  .concat(S.x, ',')
                  .concat(S.y, 'Z');
              } else x += 'L'.concat(e, ',').concat(r, 'Z');
              return x;
            })({
              cx: n,
              cy: i,
              innerRadius: o,
              outerRadius: a,
              cornerRadius: Math.min(v, y / 2),
              forceCornerRadius: u,
              cornerIsExternal: l,
              startAngle: s,
              endAngle: f,
            })
          : nw({
              cx: n,
              cy: i,
              innerRadius: o,
              outerRadius: a,
              startAngle: s,
              endAngle: f,
            })),
      e.createElement(
        'path',
        Jx({}, Wr(r, !0), { className: d, d: h, role: 'img' }),
      )
    );
  };
function aw(t) {
  return (aw =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function cw() {
  return (
    (cw = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    cw.apply(this, arguments)
  );
}
function uw(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lw(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? uw(Object(r), !0).forEach(function (e) {
          sw(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : uw(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function sw(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== aw(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== aw(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === aw(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var fw = {
    curveBasisClosed: function (t) {
      return new vi(t);
    },
    curveBasisOpen: function (t) {
      return new mi(t);
    },
    curveBasis: function (t) {
      return new yi(t);
    },
    curveBumpX: function (t) {
      return new Yn(t, !0);
    },
    curveBumpY: function (t) {
      return new Yn(t, !1);
    },
    curveLinearClosed: function (t) {
      return new gi(t);
    },
    curveLinear: qn,
    curveMonotoneX: function (t) {
      return new Si(t);
    },
    curveMonotoneY: function (t) {
      return new ji(t);
    },
    curveNatural: function (t) {
      return new Pi(t);
    },
    curveStep: function (t) {
      return new Ei(t, 0.5);
    },
    curveStepAfter: function (t) {
      return new Ei(t, 1);
    },
    curveStepBefore: function (t) {
      return new Ei(t, 0);
    },
  },
  pw = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  hw = function (t) {
    return t.x;
  },
  dw = function (t) {
    return t.y;
  },
  yw = function (t) {
    var e,
      r = t.type,
      n = void 0 === r ? 'linear' : r,
      i = t.points,
      o = void 0 === i ? [] : i,
      a = t.baseLine,
      c = t.layout,
      u = t.connectNulls,
      l = void 0 !== u && u,
      s = (function (t, e) {
        if (K(t)) return t;
        var r = 'curve'.concat(En(t));
        return ('curveMonotone' !== r && 'curveBump' !== r) || !e
          ? fw[r] || qn
          : fw[''.concat(r).concat('vertical' === e ? 'Y' : 'X')];
      })(n, c),
      f = l
        ? o.filter(function (t) {
            return pw(t);
          })
        : o;
    if (Array.isArray(a)) {
      var p = l
          ? a.filter(function (t) {
              return pw(t);
            })
          : a,
        h = f.map(function (t, e) {
          return lw(lw({}, t), {}, { base: p[e] });
        });
      return (
        (e =
          'vertical' === c
            ? Hn()
                .y(dw)
                .x1(hw)
                .x0(function (t) {
                  return t.base.x;
                })
            : Hn()
                .x(hw)
                .y1(dw)
                .y0(function (t) {
                  return t.base.y;
                }))
          .defined(pw)
          .curve(s),
        e(h)
      );
    }
    return (
      (e =
        'vertical' === c && hr(a)
          ? Hn().y(dw).x1(hw).x0(a)
          : hr(a)
          ? Hn().x(hw).y1(dw).y0(a)
          : Vn().x(hw).y(dw))
        .defined(pw)
        .curve(s),
      e(f)
    );
  },
  vw = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      o = t.pathRef;
    if (!((n && n.length) || i)) return null;
    var a = n && n.length ? yw(t) : i;
    return e.createElement(
      'path',
      cw({}, Wr(t), kr(t), { className: B('recharts-curve', r), d: a, ref: o }),
    );
  };
function mw(t) {
  return (mw =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function gw() {
  return (
    (gw = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    gw.apply(this, arguments)
  );
}
function bw(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return xw(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return xw(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function xw(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ww(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ow(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ww(Object(r), !0).forEach(function (e) {
          Sw(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : ww(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Sw(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== mw(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== mw(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === mw(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var jw = function (t, e, r, n, i) {
    var o,
      a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
      c = n >= 0 ? 1 : -1,
      u = r >= 0 ? 1 : -1,
      l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
    if (a > 0 && i instanceof Array) {
      for (var s = [0, 0, 0, 0], f = 0; f < 4; f++) s[f] = i[f] > a ? a : i[f];
      (o = 'M'.concat(t, ',').concat(e + c * s[0])),
        s[0] > 0 &&
          (o += 'A '
            .concat(s[0], ',')
            .concat(s[0], ',0,0,')
            .concat(l, ',')
            .concat(t + u * s[0], ',')
            .concat(e)),
        (o += 'L '.concat(t + r - u * s[1], ',').concat(e)),
        s[1] > 0 &&
          (o += 'A '
            .concat(s[1], ',')
            .concat(s[1], ',0,0,')
            .concat(l, ',\n        ')
            .concat(t + r, ',')
            .concat(e + c * s[1])),
        (o += 'L '.concat(t + r, ',').concat(e + n - c * s[2])),
        s[2] > 0 &&
          (o += 'A '
            .concat(s[2], ',')
            .concat(s[2], ',0,0,')
            .concat(l, ',\n        ')
            .concat(t + r - u * s[2], ',')
            .concat(e + n)),
        (o += 'L '.concat(t + u * s[3], ',').concat(e + n)),
        s[3] > 0 &&
          (o += 'A '
            .concat(s[3], ',')
            .concat(s[3], ',0,0,')
            .concat(l, ',\n        ')
            .concat(t, ',')
            .concat(e + n - c * s[3])),
        (o += 'Z');
    } else if (a > 0 && i === +i && i > 0) {
      var p = Math.min(a, i);
      o = 'M '
        .concat(t, ',')
        .concat(e + c * p, '\n            A ')
        .concat(p, ',')
        .concat(p, ',0,0,')
        .concat(l, ',')
        .concat(t + u * p, ',')
        .concat(e, '\n            L ')
        .concat(t + r - u * p, ',')
        .concat(e, '\n            A ')
        .concat(p, ',')
        .concat(p, ',0,0,')
        .concat(l, ',')
        .concat(t + r, ',')
        .concat(e + c * p, '\n            L ')
        .concat(t + r, ',')
        .concat(e + n - c * p, '\n            A ')
        .concat(p, ',')
        .concat(p, ',0,0,')
        .concat(l, ',')
        .concat(t + r - u * p, ',')
        .concat(e + n, '\n            L ')
        .concat(t + u * p, ',')
        .concat(e + n, '\n            A ')
        .concat(p, ',')
        .concat(p, ',0,0,')
        .concat(l, ',')
        .concat(t, ',')
        .concat(e + n - c * p, ' Z');
    } else
      o = 'M '
        .concat(t, ',')
        .concat(e, ' h ')
        .concat(r, ' v ')
        .concat(n, ' h ')
        .concat(-r, ' Z');
    return o;
  },
  Aw = function (t, e) {
    if (!t || !e) return !1;
    var r = t.x,
      n = t.y,
      i = e.x,
      o = e.y,
      a = e.width,
      c = e.height;
    if (Math.abs(a) > 0 && Math.abs(c) > 0) {
      var u = Math.min(i, i + a),
        l = Math.max(i, i + a),
        s = Math.min(o, o + c),
        f = Math.max(o, o + c);
      return r >= u && r <= l && n >= s && n <= f;
    }
    return !1;
  },
  Pw = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  kw = function (r) {
    var n = Ow(Ow({}, Pw), r),
      i = t.useRef(),
      o = bw(t.useState(-1), 2),
      a = o[0],
      c = o[1];
    t.useEffect(function () {
      if (i.current && i.current.getTotalLength)
        try {
          var t = i.current.getTotalLength();
          t && c(t);
        } catch (e) {}
    }, []);
    var u = n.x,
      l = n.y,
      s = n.width,
      f = n.height,
      p = n.radius,
      h = n.className,
      d = n.animationEasing,
      y = n.animationDuration,
      v = n.animationBegin,
      m = n.isAnimationActive,
      g = n.isUpdateAnimationActive;
    if (u !== +u || l !== +l || s !== +s || f !== +f || 0 === s || 0 === f)
      return null;
    var b = B('recharts-rectangle', h);
    return g
      ? e.createElement(
          Ff,
          {
            canBegin: a > 0,
            from: { width: s, height: f, x: u, y: l },
            to: { width: s, height: f, x: u, y: l },
            duration: y,
            animationEasing: d,
            isActive: g,
          },
          function (t) {
            var r = t.width,
              o = t.height,
              c = t.x,
              u = t.y;
            return e.createElement(
              Ff,
              {
                canBegin: a > 0,
                from: '0px '.concat(-1 === a ? 1 : a, 'px'),
                to: ''.concat(a, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: v,
                duration: y,
                isActive: m,
                easing: d,
              },
              e.createElement(
                'path',
                gw({}, Wr(n, !0), {
                  className: b,
                  d: jw(c, u, r, o, p),
                  ref: i,
                }),
              ),
            );
          },
        )
      : e.createElement(
          'path',
          gw({}, Wr(n, !0), { className: b, d: jw(u, l, s, f, p) }),
        );
  };
function Ew() {
  return (
    (Ew = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ew.apply(this, arguments)
  );
}
var Mw = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    o = B('recharts-dot', t.className);
  return r === +r && n === +n && i === +i
    ? e.createElement(
        'circle',
        Ew({}, Wr(t), kr(t), { className: o, cx: r, cy: n, r: i }),
      )
    : null;
};
function _w(t) {
  return (_w =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var Tw = ['x', 'y', 'top', 'left', 'width', 'height', 'className'];
function Cw() {
  return (
    (Cw = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Cw.apply(this, arguments)
  );
}
function Dw(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nw(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== _w(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== _w(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === _w(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Iw(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
var Bw = function (t, e, r, n, i, o) {
    return 'M'
      .concat(t, ',')
      .concat(i, 'v')
      .concat(n, 'M')
      .concat(o, ',')
      .concat(e, 'h')
      .concat(r);
  },
  Rw = function (t) {
    var r = t.x,
      n = void 0 === r ? 0 : r,
      i = t.y,
      o = void 0 === i ? 0 : i,
      a = t.top,
      c = void 0 === a ? 0 : a,
      u = t.left,
      l = void 0 === u ? 0 : u,
      s = t.width,
      f = void 0 === s ? 0 : s,
      p = t.height,
      h = void 0 === p ? 0 : p,
      d = t.className,
      y = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Dw(Object(r), !0).forEach(function (e) {
                Nw(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Dw(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      })({ x: n, y: o, top: c, left: l, width: f, height: h }, Iw(t, Tw));
    return hr(n) && hr(o) && hr(f) && hr(h) && hr(c) && hr(l)
      ? e.createElement(
          'path',
          Cw({}, Wr(y, !0), {
            className: B('recharts-cross', d),
            d: Bw(n, o, f, h, c, l),
          }),
        )
      : null;
  },
  Lw = Ra(Object.getPrototypeOf, Object),
  zw = d,
  $w = Lw,
  Uw = m,
  Fw = '[object Object]',
  Ww = Function.prototype,
  qw = Object.prototype,
  Xw = Ww.toString,
  Gw = qw.hasOwnProperty,
  Vw = Xw.call(Object);
var Hw = function (t) {
    if (!Uw(t) || zw(t) != Fw) return !1;
    var e = $w(t);
    if (null === e) return !0;
    var r = Gw.call(e, 'constructor') && e.constructor;
    return 'function' == typeof r && r instanceof r && Xw.call(r) == Vw;
  },
  Yw = d,
  Kw = m,
  Zw = '[object Boolean]';
var Jw = function (t) {
  return !0 === t || !1 === t || (Kw(t) && Yw(t) == Zw);
};
function Qw(t) {
  return (Qw =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function tO() {
  return (
    (tO = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    tO.apply(this, arguments)
  );
}
function eO(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return rO(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return rO(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function rO(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function nO(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function iO(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? nO(Object(r), !0).forEach(function (e) {
          oO(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : nO(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function oO(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Qw(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Qw(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Qw(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var aO = function (t, e, r, n, i) {
    var o,
      a = r - n;
    return (
      (o = 'M '.concat(t, ',').concat(e)),
      (o += 'L '.concat(t + r, ',').concat(e)),
      (o += 'L '.concat(t + r - a / 2, ',').concat(e + i)),
      (o += 'L '.concat(t + r - a / 2 - n, ',').concat(e + i)),
      (o += 'L '.concat(t, ',').concat(e, ' Z'))
    );
  },
  cO = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  uO = function (r) {
    var n = iO(iO({}, cO), r),
      i = t.useRef(),
      o = eO(t.useState(-1), 2),
      a = o[0],
      c = o[1];
    t.useEffect(function () {
      if (i.current && i.current.getTotalLength)
        try {
          var t = i.current.getTotalLength();
          t && c(t);
        } catch (e) {}
    }, []);
    var u = n.x,
      l = n.y,
      s = n.upperWidth,
      f = n.lowerWidth,
      p = n.height,
      h = n.className,
      d = n.animationEasing,
      y = n.animationDuration,
      v = n.animationBegin,
      m = n.isUpdateAnimationActive;
    if (
      u !== +u ||
      l !== +l ||
      s !== +s ||
      f !== +f ||
      p !== +p ||
      (0 === s && 0 === f) ||
      0 === p
    )
      return null;
    var g = B('recharts-trapezoid', h);
    return m
      ? e.createElement(
          Ff,
          {
            canBegin: a > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: p, x: u, y: l },
            to: { upperWidth: s, lowerWidth: f, height: p, x: u, y: l },
            duration: y,
            animationEasing: d,
            isActive: m,
          },
          function (t) {
            var r = t.upperWidth,
              o = t.lowerWidth,
              c = t.height,
              u = t.x,
              l = t.y;
            return e.createElement(
              Ff,
              {
                canBegin: a > 0,
                from: '0px '.concat(-1 === a ? 1 : a, 'px'),
                to: ''.concat(a, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: v,
                duration: y,
                easing: d,
              },
              e.createElement(
                'path',
                tO({}, Wr(n, !0), {
                  className: g,
                  d: aO(u, l, r, o, c),
                  ref: i,
                }),
              ),
            );
          },
        )
      : e.createElement(
          'g',
          null,
          e.createElement(
            'path',
            tO({}, Wr(n, !0), { className: g, d: aO(u, l, s, f, p) }),
          ),
        );
  },
  lO = [
    'option',
    'shapeType',
    'propTransformer',
    'activeClassName',
    'isActive',
  ];
function sO(t) {
  return (sO =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function fO(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function pO(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hO(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? pO(Object(r), !0).forEach(function (e) {
          dO(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : pO(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function dO(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== sO(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== sO(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === sO(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function yO(t, e) {
  return hO(hO({}, e), t);
}
function vO(t) {
  var r = t.shapeType,
    n = t.elementProps;
  switch (r) {
    case 'rectangle':
      return e.createElement(kw, n);
    case 'trapezoid':
      return e.createElement(uO, n);
    case 'sector':
      return e.createElement(ow, n);
    case 'symbols':
      if (
        (function (t, e) {
          return 'symbols' === t;
        })(r)
      )
        return e.createElement(Fi, n);
      break;
    default:
      return null;
  }
}
function mO(r) {
  var n,
    i = r.option,
    o = r.shapeType,
    a = r.propTransformer,
    c = void 0 === a ? yO : a,
    u = r.activeClassName,
    l = void 0 === u ? 'recharts-active-shape' : u,
    s = r.isActive,
    f = fO(r, lO);
  if (t.isValidElement(i))
    n = t.cloneElement(
      i,
      hO(
        hO({}, f),
        (function (e) {
          return t.isValidElement(e) ? e.props : e;
        })(i),
      ),
    );
  else if (K(i)) n = i(f);
  else if (Hw(i) && !Jw(i)) {
    var p = c(i, f);
    n = e.createElement(vO, { shapeType: o, elementProps: p });
  } else {
    var h = f;
    n = e.createElement(vO, { shapeType: o, elementProps: h });
  }
  return s ? e.createElement(en, { className: l }, n) : n;
}
function gO(t, e) {
  return null != e && 'trapezoids' in t.props;
}
function bO(t, e) {
  return null != e && 'sectors' in t.props;
}
function xO(t, e) {
  return null != e && 'points' in t.props;
}
function wO(t, e) {
  var r,
    n,
    i =
      t.x ===
        (null == e || null === (r = e.labelViewBox) || void 0 === r
          ? void 0
          : r.x) || t.x === e.x,
    o =
      t.y ===
        (null == e || null === (n = e.labelViewBox) || void 0 === n
          ? void 0
          : n.y) || t.y === e.y;
  return i && o;
}
function OO(t, e) {
  var r = t.endAngle === e.endAngle,
    n = t.startAngle === e.startAngle;
  return r && n;
}
function SO(t, e) {
  var r = t.x === e.x,
    n = t.y === e.y,
    i = t.z === e.z;
  return r && n && i;
}
function jO(t) {
  var e = t.activeTooltipItem,
    r = t.graphicalItem,
    n = t.itemData,
    i = (function (t, e) {
      var r;
      return (
        gO(t, e)
          ? (r = 'trapezoids')
          : bO(t, e)
          ? (r = 'sectors')
          : xO(t, e) && (r = 'points'),
        r
      );
    })(r, e),
    o = (function (t, e) {
      var r, n;
      return gO(t, e)
        ? null === (r = e.tooltipPayload) ||
          void 0 === r ||
          null === (r = r[0]) ||
          void 0 === r ||
          null === (r = r.payload) ||
          void 0 === r
          ? void 0
          : r.payload
        : bO(t, e)
        ? null === (n = e.tooltipPayload) ||
          void 0 === n ||
          null === (n = n[0]) ||
          void 0 === n ||
          null === (n = n.payload) ||
          void 0 === n
          ? void 0
          : n.payload
        : xO(t, e)
        ? e.payload
        : {};
    })(r, e),
    a = n.filter(function (t, n) {
      var a = kg(o, t),
        c = r.props[i].filter(function (t) {
          var n = (function (t, e) {
            var r;
            return (
              gO(t, e) ? (r = wO) : bO(t, e) ? (r = OO) : xO(t, e) && (r = SO),
              r
            );
          })(r, e);
          return n(t, e);
        }),
        u = r.props[i].indexOf(c[c.length - 1]);
      return a && n === u;
    });
  return n.indexOf(a[a.length - 1]);
}
var AO = Math.ceil,
  PO = Math.max;
var kO = Tp,
  EO = 1 / 0,
  MO = 17976931348623157e292;
var _O = function (t) {
    return t
      ? (t = kO(t)) === EO || t === -EO
        ? (t < 0 ? -1 : 1) * MO
        : t == t
        ? t
        : 0
      : 0 === t
      ? t
      : 0;
  },
  TO = function (t, e, r, n) {
    for (var i = -1, o = PO(AO((e - t) / (r || 1)), 0), a = Array(o); o--; )
      (a[n ? o : ++i] = t), (t += r);
    return a;
  },
  CO = Vl,
  DO = _O;
var NO = (function (t) {
  return function (e, r, n) {
    return (
      n && 'number' != typeof n && CO(e, r, n) && (r = n = void 0),
      (e = DO(e)),
      void 0 === r ? ((r = e), (e = 0)) : (r = DO(r)),
      (n = void 0 === n ? (e < r ? 1 : -1) : DO(n)),
      TO(e, r, n, t)
    );
  };
})();
function IO(t) {
  return (IO =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function BO(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function RO(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? BO(Object(r), !0).forEach(function (e) {
          LO(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : BO(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function LO(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== IO(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== IO(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === IO(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var zO = ['Webkit', 'Moz', 'O', 'ms'];
function $O(t) {
  return ($O =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function UO() {
  return (
    (UO = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    UO.apply(this, arguments)
  );
}
function FO(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function WO(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? FO(Object(r), !0).forEach(function (e) {
          YO(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : FO(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function qO(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, KO(n.key), n);
  }
}
function XO(t, e) {
  return (XO = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function GO(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = HO(t);
    if (e) {
      var i = HO(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === $O(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return VO(t);
    })(this, r);
  };
}
function VO(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function HO(t) {
  return (HO = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function YO(t, e, r) {
  return (
    (e = KO(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function KO(t) {
  var e = (function (t, e) {
    if ('object' !== $O(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== $O(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === $O(e) ? e : String(e);
}
var ZO = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  JO = (function (r) {
    !(function (t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && XO(t, e);
    })(c, t.PureComponent);
    var n,
      i,
      o,
      a = GO(c);
    function c(t) {
      var e;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, c),
        YO(VO((e = a.call(this, t))), 'handleDrag', function (t) {
          e.leaveTimer && (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
            e.state.isTravellerMoving
              ? e.handleTravellerMove(t)
              : e.state.isSlideMoving && e.handleSlideDrag(t);
        }),
        YO(VO(e), 'handleTouchMove', function (t) {
          null != t.changedTouches &&
            t.changedTouches.length > 0 &&
            e.handleDrag(t.changedTouches[0]);
        }),
        YO(VO(e), 'handleDragEnd', function () {
          e.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var t = e.props,
              r = t.endIndex,
              n = t.onDragEnd,
              i = t.startIndex;
            null == n || n({ endIndex: r, startIndex: i });
          }),
            e.detachDragEndListener();
        }),
        YO(VO(e), 'handleLeaveWrapper', function () {
          (e.state.isTravellerMoving || e.state.isSlideMoving) &&
            (e.leaveTimer = window.setTimeout(
              e.handleDragEnd,
              e.props.leaveTimeOut,
            ));
        }),
        YO(VO(e), 'handleEnterSlideOrTraveller', function () {
          e.setState({ isTextActive: !0 });
        }),
        YO(VO(e), 'handleLeaveSlideOrTraveller', function () {
          e.setState({ isTextActive: !1 });
        }),
        YO(VO(e), 'handleSlideDragStart', function (t) {
          var r = ZO(t) ? t.changedTouches[0] : t;
          e.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: r.pageX,
          }),
            e.attachDragEndListener();
        }),
        (e.travellerDragStartHandlers = {
          startX: e.handleTravellerDragStart.bind(VO(e), 'startX'),
          endX: e.handleTravellerDragStart.bind(VO(e), 'endX'),
        }),
        (e.state = {}),
        e
      );
    }
    return (
      (n = c),
      (o = [
        {
          key: 'renderDefaultTraveller',
          value: function (t) {
            var r = t.x,
              n = t.y,
              i = t.width,
              o = t.height,
              a = t.stroke,
              c = Math.floor(n + o / 2) - 1;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement('rect', {
                x: r,
                y: n,
                width: i,
                height: o,
                fill: a,
                stroke: 'none',
              }),
              e.createElement('line', {
                x1: r + 1,
                y1: c,
                x2: r + i - 1,
                y2: c,
                fill: 'none',
                stroke: '#fff',
              }),
              e.createElement('line', {
                x1: r + 1,
                y1: c + 2,
                x2: r + i - 1,
                y2: c + 2,
                fill: 'none',
                stroke: '#fff',
              }),
            );
          },
        },
        {
          key: 'renderTraveller',
          value: function (t, r) {
            return e.isValidElement(t)
              ? e.cloneElement(t, r)
              : K(t)
              ? t(r)
              : c.renderDefaultTraveller(r);
          },
        },
        {
          key: 'getDerivedStateFromProps',
          value: function (t, e) {
            var r = t.data,
              n = t.width,
              i = t.x,
              o = t.travellerWidth,
              a = t.updateId,
              c = t.startIndex,
              u = t.endIndex;
            if (r !== e.prevData || a !== e.prevUpdateId)
              return WO(
                {
                  prevData: r,
                  prevTravellerWidth: o,
                  prevUpdateId: a,
                  prevX: i,
                  prevWidth: n,
                },
                r && r.length
                  ? (function (t) {
                      var e = t.data,
                        r = t.startIndex,
                        n = t.endIndex,
                        i = t.x,
                        o = t.width,
                        a = t.travellerWidth;
                      if (!e || !e.length) return {};
                      var c = e.length,
                        u = ed()
                          .domain(NO(0, c))
                          .range([i, i + o - a]),
                        l = u.domain().map(function (t) {
                          return u(t);
                        });
                      return {
                        isTextActive: !1,
                        isSlideMoving: !1,
                        isTravellerMoving: !1,
                        isTravellerFocused: !1,
                        startX: u(r),
                        endX: u(n),
                        scale: u,
                        scaleValues: l,
                      };
                    })({
                      data: r,
                      width: n,
                      x: i,
                      travellerWidth: o,
                      startIndex: c,
                      endIndex: u,
                    })
                  : { scale: null, scaleValues: null },
              );
            if (
              e.scale &&
              (n !== e.prevWidth || i !== e.prevX || o !== e.prevTravellerWidth)
            ) {
              e.scale.range([i, i + n - o]);
              var l = e.scale.domain().map(function (t) {
                return e.scale(t);
              });
              return {
                prevData: r,
                prevTravellerWidth: o,
                prevUpdateId: a,
                prevX: i,
                prevWidth: n,
                startX: e.scale(t.startIndex),
                endX: e.scale(t.endIndex),
                scaleValues: l,
              };
            }
            return null;
          },
        },
        {
          key: 'getIndexInRange',
          value: function (t, e) {
            for (var r = 0, n = t.length - 1; n - r > 1; ) {
              var i = Math.floor((r + n) / 2);
              t[i] > e ? (n = i) : (r = i);
            }
            return e >= t[n] ? n : r;
          },
        },
      ]),
      (i = [
        {
          key: 'componentWillUnmount',
          value: function () {
            this.leaveTimer &&
              (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
              this.detachDragEndListener();
          },
        },
        {
          key: 'getIndex',
          value: function (t) {
            var e = t.startX,
              r = t.endX,
              n = this.state.scaleValues,
              i = this.props,
              o = i.gap,
              a = i.data.length - 1,
              u = Math.min(e, r),
              l = Math.max(e, r),
              s = c.getIndexInRange(n, u),
              f = c.getIndexInRange(n, l);
            return {
              startIndex: s - (s % o),
              endIndex: f === a ? a : f - (f % o),
            };
          },
        },
        {
          key: 'getTextOfTick',
          value: function (t) {
            var e = this.props,
              r = e.data,
              n = e.tickFormatter,
              i = e.dataKey,
              o = Wb(r[t], i, t);
            return K(n) ? n(o, t) : o;
          },
        },
        {
          key: 'attachDragEndListener',
          value: function () {
            window.addEventListener('mouseup', this.handleDragEnd, !0),
              window.addEventListener('touchend', this.handleDragEnd, !0),
              window.addEventListener('mousemove', this.handleDrag, !0);
          },
        },
        {
          key: 'detachDragEndListener',
          value: function () {
            window.removeEventListener('mouseup', this.handleDragEnd, !0),
              window.removeEventListener('touchend', this.handleDragEnd, !0),
              window.removeEventListener('mousemove', this.handleDrag, !0);
          },
        },
        {
          key: 'handleSlideDrag',
          value: function (t) {
            var e = this.state,
              r = e.slideMoveStartX,
              n = e.startX,
              i = e.endX,
              o = this.props,
              a = o.x,
              c = o.width,
              u = o.travellerWidth,
              l = o.startIndex,
              s = o.endIndex,
              f = o.onChange,
              p = t.pageX - r;
            p > 0
              ? (p = Math.min(p, a + c - u - i, a + c - u - n))
              : p < 0 && (p = Math.max(p, a - n, a - i));
            var h = this.getIndex({ startX: n + p, endX: i + p });
            (h.startIndex === l && h.endIndex === s) || !f || f(h),
              this.setState({
                startX: n + p,
                endX: i + p,
                slideMoveStartX: t.pageX,
              });
          },
        },
        {
          key: 'handleTravellerDragStart',
          value: function (t, e) {
            var r = ZO(e) ? e.changedTouches[0] : e;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: t,
              brushMoveStartX: r.pageX,
            }),
              this.attachDragEndListener();
          },
        },
        {
          key: 'handleTravellerMove',
          value: function (t) {
            var e,
              r = this.state,
              n = r.brushMoveStartX,
              i = r.movingTravellerId,
              o = r.endX,
              a = r.startX,
              c = this.state[i],
              u = this.props,
              l = u.x,
              s = u.width,
              f = u.travellerWidth,
              p = u.onChange,
              h = u.gap,
              d = u.data,
              y = { startX: this.state.startX, endX: this.state.endX },
              v = t.pageX - n;
            v > 0
              ? (v = Math.min(v, l + s - f - c))
              : v < 0 && (v = Math.max(v, l - c)),
              (y[i] = c + v);
            var m = this.getIndex(y),
              g = m.startIndex,
              b = m.endIndex;
            this.setState(
              (YO((e = {}), i, c + v), YO(e, 'brushMoveStartX', t.pageX), e),
              function () {
                var t;
                p &&
                  ((t = d.length - 1),
                  (('startX' === i && (o > a ? g % h == 0 : b % h == 0)) ||
                    (o < a && b === t) ||
                    ('endX' === i && (o > a ? b % h == 0 : g % h == 0)) ||
                    (o > a && b === t)) &&
                    p(m));
              },
            );
          },
        },
        {
          key: 'handleTravellerMoveKeyboard',
          value: function (t, e) {
            var r = this,
              n = this.state,
              i = n.scaleValues,
              o = n.startX,
              a = n.endX,
              c = this.state[e],
              u = i.indexOf(c);
            if (-1 !== u) {
              var l = u + t;
              if (!(-1 === l || l >= i.length)) {
                var s = i[l];
                ('startX' === e && s >= a) ||
                  ('endX' === e && s <= o) ||
                  this.setState(YO({}, e, s), function () {
                    r.props.onChange(
                      r.getIndex({
                        startX: r.state.startX,
                        endX: r.state.endX,
                      }),
                    );
                  });
              }
            }
          },
        },
        {
          key: 'renderBackground',
          value: function () {
            var t = this.props,
              r = t.x,
              n = t.y,
              i = t.width,
              o = t.height,
              a = t.fill,
              c = t.stroke;
            return e.createElement('rect', {
              stroke: c,
              fill: a,
              x: r,
              y: n,
              width: i,
              height: o,
            });
          },
        },
        {
          key: 'renderPanorama',
          value: function () {
            var r = this.props,
              n = r.x,
              i = r.y,
              o = r.width,
              a = r.height,
              c = r.data,
              u = r.children,
              l = r.padding,
              s = t.Children.only(u);
            return s
              ? e.cloneElement(s, {
                  x: n,
                  y: i,
                  width: o,
                  height: a,
                  margin: l,
                  compact: !0,
                  data: c,
                })
              : null;
          },
        },
        {
          key: 'renderTravellerLayer',
          value: function (t, r) {
            var n = this,
              i = this.props,
              o = i.y,
              a = i.travellerWidth,
              u = i.height,
              l = i.traveller,
              s = i.ariaLabel,
              f = i.data,
              p = i.startIndex,
              h = i.endIndex,
              d = Math.max(t, this.props.x),
              y = WO(
                WO({}, Wr(this.props)),
                {},
                { x: d, y: o, width: a, height: u },
              ),
              v =
                s ||
                'Min value: '
                  .concat(f[p].name, ', Max value: ')
                  .concat(f[h].name);
            return e.createElement(
              en,
              {
                tabIndex: 0,
                role: 'slider',
                'aria-label': v,
                'aria-valuenow': t,
                className: 'recharts-brush-traveller',
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.travellerDragStartHandlers[r],
                onTouchStart: this.travellerDragStartHandlers[r],
                onKeyDown: function (t) {
                  ['ArrowLeft', 'ArrowRight'].includes(t.key) &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    n.handleTravellerMoveKeyboard(
                      'ArrowRight' === t.key ? 1 : -1,
                      r,
                    ));
                },
                onFocus: function () {
                  n.setState({ isTravellerFocused: !0 });
                },
                onBlur: function () {
                  n.setState({ isTravellerFocused: !1 });
                },
                style: { cursor: 'col-resize' },
              },
              c.renderTraveller(l, y),
            );
          },
        },
        {
          key: 'renderSlide',
          value: function (t, r) {
            var n = this.props,
              i = n.y,
              o = n.height,
              a = n.stroke,
              c = n.travellerWidth,
              u = Math.min(t, r) + c,
              l = Math.max(Math.abs(r - t) - c, 0);
            return e.createElement('rect', {
              className: 'recharts-brush-slide',
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: { cursor: 'move' },
              stroke: 'none',
              fill: a,
              fillOpacity: 0.2,
              x: u,
              y: i,
              width: l,
              height: o,
            });
          },
        },
        {
          key: 'renderText',
          value: function () {
            var t = this.props,
              r = t.startIndex,
              n = t.endIndex,
              i = t.y,
              o = t.height,
              a = t.travellerWidth,
              c = t.stroke,
              u = this.state,
              l = u.startX,
              s = u.endX,
              f = { pointerEvents: 'none', fill: c };
            return e.createElement(
              en,
              { className: 'recharts-brush-texts' },
              e.createElement(
                Ah,
                UO(
                  {
                    textAnchor: 'end',
                    verticalAnchor: 'middle',
                    x: Math.min(l, s) - 5,
                    y: i + o / 2,
                  },
                  f,
                ),
                this.getTextOfTick(r),
              ),
              e.createElement(
                Ah,
                UO(
                  {
                    textAnchor: 'start',
                    verticalAnchor: 'middle',
                    x: Math.max(l, s) + a + 5,
                    y: i + o / 2,
                  },
                  f,
                ),
                this.getTextOfTick(n),
              ),
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.props,
              r = t.data,
              n = t.className,
              i = t.children,
              o = t.x,
              a = t.y,
              c = t.width,
              u = t.height,
              l = t.alwaysShowText,
              s = this.state,
              f = s.startX,
              p = s.endX,
              h = s.isTextActive,
              d = s.isSlideMoving,
              y = s.isTravellerMoving,
              v = s.isTravellerFocused;
            if (
              !r ||
              !r.length ||
              !hr(o) ||
              !hr(a) ||
              !hr(c) ||
              !hr(u) ||
              c <= 0 ||
              u <= 0
            )
              return null;
            var m = B('recharts-brush', n),
              g = 1 === e.Children.count(i),
              b = (function (t, e) {
                if (!t) return null;
                var r = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  n = zO.reduce(function (t, n) {
                    return RO(RO({}, t), {}, LO({}, n + r, e));
                  }, {});
                return (n[t] = e), n;
              })('userSelect', 'none');
            return e.createElement(
              en,
              {
                className: m,
                onMouseLeave: this.handleLeaveWrapper,
                onTouchMove: this.handleTouchMove,
                style: b,
              },
              this.renderBackground(),
              g && this.renderPanorama(),
              this.renderSlide(f, p),
              this.renderTravellerLayer(f, 'startX'),
              this.renderTravellerLayer(p, 'endX'),
              (h || d || y || v || l) && this.renderText(),
            );
          },
        },
      ]) && qO(n.prototype, i),
      o && qO(n, o),
      Object.defineProperty(n, 'prototype', { writable: !1 }),
      c
    );
  })();
YO(JO, 'displayName', 'Brush'),
  YO(JO, 'defaultProps', {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: !1,
  });
var QO = fl;
var tS = xo,
  eS = Au,
  rS = function (t, e) {
    var r;
    return (
      QO(t, function (t, n, i) {
        return !(r = e(t, n, i));
      }),
      !!r
    );
  },
  nS = p,
  iS = Vl;
var oS = function (t, e, r) {
    var n = nS(t) ? tS : rS;
    return r && iS(t, e, r) && (e = void 0), n(t, eS(e));
  },
  aS = function (t, e) {
    var r = t.alwaysShow,
      n = t.ifOverflow;
    return r && (n = 'extendDomain'), n === e;
  },
  cS = Cl;
var uS = function (t, e, r) {
    '__proto__' == e && cS
      ? cS(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (t[e] = r);
  },
  lS = ll,
  sS = Au;
var fS = function (t, e) {
  var r = {};
  return (
    (e = sS(e)),
    lS(t, function (t, n, i) {
      uS(r, n, e(t, n, i));
    }),
    r
  );
};
var pS = fl;
var hS = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
      if (!e(t[r], r, t)) return !1;
    return !0;
  },
  dS = function (t, e) {
    var r = !0;
    return (
      pS(t, function (t, n, i) {
        return (r = !!e(t, n, i));
      }),
      r
    );
  },
  yS = Au,
  vS = p,
  mS = Vl;
var gS = function (t, e, r) {
  var n = vS(t) ? hS : dS;
  return r && mS(t, e, r) && (e = void 0), n(t, yS(e));
};
function bS(t) {
  return (bS =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
var xS = ['x', 'y'];
function wS() {
  return (
    (wS = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    wS.apply(this, arguments)
  );
}
function OS(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function SS(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? OS(Object(r), !0).forEach(function (e) {
          jS(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : OS(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function jS(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== bS(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== bS(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === bS(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function AS(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function PS(t, e) {
  var r = t.x,
    n = t.y,
    i = AS(t, xS),
    o = ''.concat(r),
    a = parseInt(o, 10),
    c = ''.concat(n),
    u = parseInt(c, 10),
    l = ''.concat(e.height || i.height),
    s = parseInt(l, 10),
    f = ''.concat(e.width || i.width),
    p = parseInt(f, 10);
  return SS(
    SS(SS(SS(SS({}, e), i), a ? { x: a } : {}), u ? { y: u } : {}),
    {},
    { height: s, width: p, name: e.name, radius: e.radius },
  );
}
function kS(t) {
  return e.createElement(
    mO,
    wS(
      {
        shapeType: 'rectangle',
        propTransformer: PS,
        activeClassName: 'recharts-active-bar',
      },
      t,
    ),
  );
}
var ES = ['value', 'background'];
function MS(t) {
  return (MS =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function _S(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function TS() {
  return (
    (TS = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    TS.apply(this, arguments)
  );
}
function CS(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function DS(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? CS(Object(r), !0).forEach(function (e) {
          zS(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : CS(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function NS(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, $S(n.key), n);
  }
}
function IS(t, e) {
  return (IS = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function BS(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = LS(t);
    if (e) {
      var i = LS(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === MS(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return RS(t);
    })(this, r);
  };
}
function RS(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function LS(t) {
  return (LS = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function zS(t, e, r) {
  return (
    (e = $S(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function $S(t) {
  var e = (function (t, e) {
    if ('object' !== MS(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== MS(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === MS(e) ? e : String(e);
}
var US = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && IS(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = BS(c);
  function c() {
    var t;
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, c);
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (
      zS(RS((t = a.call.apply(a, [this].concat(r)))), 'state', {
        isAnimationFinished: !1,
      }),
      zS(RS(t), 'id', vr('recharts-bar-')),
      zS(RS(t), 'handleAnimationEnd', function () {
        var e = t.props.onAnimationEnd;
        t.setState({ isAnimationFinished: !0 }), e && e();
      }),
      zS(RS(t), 'handleAnimationStart', function () {
        var e = t.props.onAnimationStart;
        t.setState({ isAnimationFinished: !1 }), e && e();
      }),
      t
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, e) {
          return t.animationId !== e.prevAnimationId
            ? {
                prevAnimationId: t.animationId,
                curData: t.data,
                prevData: e.curData,
              }
            : t.data !== e.curData
            ? { curData: t.data }
            : null;
        },
      },
    ]),
    (i = [
      {
        key: 'renderRectanglesStatically',
        value: function (t) {
          var r = this,
            n = this.props,
            i = n.shape,
            o = n.dataKey,
            a = n.activeIndex,
            c = n.activeBar,
            u = Wr(this.props);
          return (
            t &&
            t.map(function (t, n) {
              var l = n === a,
                s = l ? c : i,
                f = DS(
                  DS(DS({}, u), t),
                  {},
                  {
                    isActive: l,
                    option: s,
                    index: n,
                    dataKey: o,
                    onAnimationStart: r.handleAnimationStart,
                    onAnimationEnd: r.handleAnimationEnd,
                  },
                );
              return e.createElement(
                en,
                TS({ className: 'recharts-bar-rectangle' }, Er(r.props, t, n), {
                  key: 'rectangle-'
                    .concat(null == t ? void 0 : t.x, '-')
                    .concat(null == t ? void 0 : t.y, '-')
                    .concat(null == t ? void 0 : t.value),
                }),
                e.createElement(kS, f),
              );
            })
          );
        },
      },
      {
        key: 'renderRectanglesWithAnimation',
        value: function () {
          var t = this,
            r = this.props,
            n = r.data,
            i = r.layout,
            o = r.isAnimationActive,
            a = r.animationBegin,
            c = r.animationDuration,
            u = r.animationEasing,
            l = r.animationId,
            s = this.state.prevData;
          return e.createElement(
            Ff,
            {
              begin: a,
              duration: c,
              isActive: o,
              easing: u,
              from: { t: 0 },
              to: { t: 1 },
              key: 'bar-'.concat(l),
              onAnimationEnd: this.handleAnimationEnd,
              onAnimationStart: this.handleAnimationStart,
            },
            function (r) {
              var o = r.t,
                a = n.map(function (t, e) {
                  var r = s && s[e];
                  if (r) {
                    var n = br(r.x, t.x),
                      a = br(r.y, t.y),
                      c = br(r.width, t.width),
                      u = br(r.height, t.height);
                    return DS(
                      DS({}, t),
                      {},
                      { x: n(o), y: a(o), width: c(o), height: u(o) },
                    );
                  }
                  if ('horizontal' === i) {
                    var l = br(0, t.height)(o);
                    return DS(
                      DS({}, t),
                      {},
                      { y: t.y + t.height - l, height: l },
                    );
                  }
                  var f = br(0, t.width)(o);
                  return DS(DS({}, t), {}, { width: f });
                });
              return e.createElement(en, null, t.renderRectanglesStatically(a));
            },
          );
        },
      },
      {
        key: 'renderRectangles',
        value: function () {
          var t = this.props,
            e = t.data,
            r = t.isAnimationActive,
            n = this.state.prevData;
          return !(r && e && e.length) || (n && kg(n, e))
            ? this.renderRectanglesStatically(e)
            : this.renderRectanglesWithAnimation();
        },
      },
      {
        key: 'renderBackground',
        value: function () {
          var t = this,
            r = this.props,
            n = r.data,
            i = r.dataKey,
            o = r.activeIndex,
            a = Wr(this.props.background);
          return n.map(function (r, n) {
            r.value;
            var c = r.background,
              u = _S(r, ES);
            if (!c) return null;
            var l = DS(
              DS(
                DS(DS(DS({}, u), {}, { fill: '#eee' }, c), a),
                Er(t.props, r, n),
              ),
              {},
              {
                onAnimationStart: t.handleAnimationStart,
                onAnimationEnd: t.handleAnimationEnd,
                dataKey: i,
                index: n,
                key: 'background-bar-'.concat(n),
                className: 'recharts-bar-background-rectangle',
              },
            );
            return e.createElement(
              kS,
              TS({ option: t.props.background, isActive: n === o }, l),
            );
          });
        },
      },
      {
        key: 'renderErrorBar',
        value: function (t, r) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished)
            return null;
          var n = this.props,
            i = n.data,
            o = n.xAxis,
            a = n.yAxis,
            c = n.layout,
            u = Lr(n.children, Tb);
          if (!u) return null;
          var l = 'vertical' === c ? i[0].height / 2 : i[0].width / 2,
            s = function (t, e) {
              var r = Array.isArray(t.value) ? t.value[1] : t.value;
              return { x: t.x, y: t.y, value: r, errorVal: Wb(t, e) };
            },
            f = { clipPath: t ? 'url(#clipPath-'.concat(r, ')') : null };
          return e.createElement(
            en,
            f,
            u.map(function (t) {
              return e.cloneElement(t, {
                key: 'error-bar-'.concat(r, '-').concat(t.props.dataKey),
                data: i,
                xAxis: o,
                yAxis: a,
                layout: c,
                offset: l,
                dataPointFormatter: s,
              });
            }),
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            r = t.hide,
            n = t.data,
            i = t.className,
            o = t.xAxis,
            a = t.yAxis,
            c = t.left,
            u = t.top,
            l = t.width,
            s = t.height,
            f = t.isAnimationActive,
            p = t.background,
            h = t.id;
          if (r || !n || !n.length) return null;
          var d = this.state.isAnimationFinished,
            y = B('recharts-bar', i),
            v = o && o.allowDataOverflow,
            m = a && a.allowDataOverflow,
            g = v || m,
            b = Ne(h) ? this.id : h;
          return e.createElement(
            en,
            { className: y },
            v || m
              ? e.createElement(
                  'defs',
                  null,
                  e.createElement(
                    'clipPath',
                    { id: 'clipPath-'.concat(b) },
                    e.createElement('rect', {
                      x: v ? c : c - l / 2,
                      y: m ? u : u - s / 2,
                      width: v ? l : 2 * l,
                      height: m ? s : 2 * s,
                    }),
                  ),
                )
              : null,
            e.createElement(
              en,
              {
                className: 'recharts-bar-rectangles',
                clipPath: g ? 'url(#clipPath-'.concat(b, ')') : null,
              },
              p ? this.renderBackground() : null,
              this.renderRectangles(),
            ),
            this.renderErrorBar(g, b),
            (!f || d) && Kx.renderCallByParent(this.props, n),
          );
        },
      },
    ]) && NS(n.prototype, i),
    o && NS(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
function FS(t) {
  return (FS =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function WS(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, VS(n.key), n);
  }
}
function qS(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function XS(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? qS(Object(r), !0).forEach(function (e) {
          GS(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : qS(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function GS(t, e, r) {
  return (
    (e = VS(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function VS(t) {
  var e = (function (t, e) {
    if ('object' !== FS(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== FS(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === FS(e) ? e : String(e);
}
zS(US, 'displayName', 'Bar'),
  zS(US, 'defaultProps', {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: 'vertical',
    activeBar: !0,
    isAnimationActive: !cp.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease',
  }),
  zS(US, 'getComposedData', function (t) {
    var e = t.props,
      r = t.item,
      n = t.barPosition,
      i = t.bandSize,
      o = t.xAxis,
      a = t.yAxis,
      c = t.xAxisTicks,
      u = t.yAxisTicks,
      l = t.stackedData,
      s = t.dataStartIndex,
      f = t.displayedData,
      p = t.offset,
      h = (function (t, e) {
        if (!t) return null;
        for (var r = 0, n = t.length; r < n; r++)
          if (t[r].item === e) return t[r].position;
        return null;
      })(n, r);
    if (!h) return null;
    var d = e.layout,
      y = r.props,
      v = y.dataKey,
      m = y.children,
      g = y.minPointSize,
      b = 'horizontal' === d ? a : o,
      x = l ? b.scale.domain() : null,
      w = (function (t) {
        var e = t.numericAxis,
          r = e.scale.domain();
        if ('number' === e.type) {
          var n = Math.min(r[0], r[1]),
            i = Math.max(r[0], r[1]);
          return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
        }
        return r[0];
      })({ numericAxis: b }),
      O = Lr(m, Fp),
      S = f.map(function (t, e) {
        var n, f, p, y, m, b;
        if (
          (l
            ? (n = (function (t, e) {
                if (!e || 2 !== e.length || !hr(e[0]) || !hr(e[1])) return t;
                var r = Math.min(e[0], e[1]),
                  n = Math.max(e[0], e[1]),
                  i = [t[0], t[1]];
                return (
                  (!hr(t[0]) || t[0] < r) && (i[0] = r),
                  (!hr(t[1]) || t[1] > n) && (i[1] = n),
                  i[0] > n && (i[0] = n),
                  i[1] < r && (i[1] = r),
                  i
                );
              })(l[s + e], x))
            : ((n = Wb(t, v)), Array.isArray(n) || (n = [w, n])),
          'horizontal' === d)
        ) {
          var S,
            j = [a.scale(n[0]), a.scale(n[1])],
            A = j[0],
            P = j[1];
          (f = nx({
            axis: o,
            ticks: c,
            bandSize: i,
            offset: h.offset,
            entry: t,
            index: e,
          })),
            (p = null !== (S = null != P ? P : A) && void 0 !== S ? S : void 0),
            (y = h.size);
          var k = A - P;
          if (
            ((m = Number.isNaN(k) ? 0 : k),
            (b = { x: f, y: a.y, width: y, height: a.height }),
            Math.abs(g) > 0 && Math.abs(m) < Math.abs(g))
          ) {
            var E = fr(m || g) * (Math.abs(g) - Math.abs(m));
            (p -= E), (m += E);
          }
        } else {
          var M = [o.scale(n[0]), o.scale(n[1])],
            _ = M[0],
            T = M[1];
          if (
            ((f = _),
            (p = nx({
              axis: a,
              ticks: u,
              bandSize: i,
              offset: h.offset,
              entry: t,
              index: e,
            })),
            (y = T - _),
            (m = h.size),
            (b = { x: o.x, y: p, width: o.width, height: m }),
            Math.abs(g) > 0 && Math.abs(y) < Math.abs(g))
          )
            y += fr(y || g) * (Math.abs(g) - Math.abs(y));
        }
        return DS(
          DS(
            DS({}, t),
            {},
            {
              x: f,
              y: p,
              width: y,
              height: m,
              value: l ? n : n[1],
              payload: t,
              background: b,
            },
            O && O[e] && O[e].props,
          ),
          {},
          {
            tooltipPayload: [sx(r, t)],
            tooltipPosition: { x: f + y / 2, y: p + m / 2 },
          },
        );
      });
    return DS({ data: S, layout: d }, p);
  });
var HS = function (t, e, r, n, i) {
    var o = t.width,
      a = t.height,
      c = t.layout,
      u = t.children,
      l = Object.keys(e),
      s = {
        left: r.left,
        leftMirror: r.left,
        right: o - r.right,
        rightMirror: o - r.right,
        top: r.top,
        topMirror: r.top,
        bottom: a - r.bottom,
        bottomMirror: a - r.bottom,
      },
      f = !!zr(u, US);
    return l.reduce(function (o, a) {
      var u,
        l,
        p,
        h,
        d,
        y = e[a],
        v = y.orientation,
        m = y.domain,
        b = y.padding,
        x = void 0 === b ? {} : b,
        w = y.mirror,
        O = y.reversed,
        S = ''.concat(v).concat(w ? 'Mirror' : '');
      if (
        'number' === y.type &&
        ('gap' === y.padding || 'no-gap' === y.padding)
      ) {
        var j = m[1] - m[0],
          A = 1 / 0,
          P = y.categoricalDomain.sort();
        P.forEach(function (t, e) {
          e > 0 && (A = Math.min((t || 0) - (P[e - 1] || 0), A));
        });
        var k = A / j,
          E = 'vertical' === y.layout ? r.height : r.width;
        if (
          ('gap' === y.padding && (u = (k * E) / 2), 'no-gap' === y.padding)
        ) {
          var M = mr(t.barCategoryGap, k * E),
            _ = (k * E) / 2;
          u = _ - M - ((_ - M) / E) * M;
        }
      }
      (l =
        'xAxis' === n
          ? [
              r.left + (x.left || 0) + (u || 0),
              r.left + r.width - (x.right || 0) - (u || 0),
            ]
          : 'yAxis' === n
          ? 'horizontal' === c
            ? [r.top + r.height - (x.bottom || 0), r.top + (x.top || 0)]
            : [
                r.top + (x.top || 0) + (u || 0),
                r.top + r.height - (x.bottom || 0) - (u || 0),
              ]
          : y.range),
        O && (l = [l[1], l[0]]);
      var T = (function (t, e, r) {
          var n = t.scale,
            i = t.type,
            o = t.layout,
            a = t.axisType;
          if ('auto' === n)
            return 'radial' === o && 'radiusAxis' === a
              ? { scale: Qh(), realScaleType: 'band' }
              : 'radial' === o && 'angleAxis' === a
              ? { scale: Oy(), realScaleType: 'linear' }
              : 'category' === i &&
                e &&
                (e.indexOf('LineChart') >= 0 ||
                  e.indexOf('AreaChart') >= 0 ||
                  (e.indexOf('ComposedChart') >= 0 && !r))
              ? { scale: ed(), realScaleType: 'point' }
              : 'category' === i
              ? { scale: Qh(), realScaleType: 'band' }
              : { scale: Oy(), realScaleType: 'linear' };
          if (g(n)) {
            var c = 'scale'.concat(En(n));
            return {
              scale: (cg[c] || ed)(),
              realScaleType: cg[c] ? c : 'point',
            };
          }
          return K(n) ? { scale: n } : { scale: ed(), realScaleType: 'point' };
        })(y, i, f),
        C = T.scale,
        D = T.realScaleType;
      C.domain(m).range(l),
        (function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              i = Math.min(n[0], n[1]) - Qb,
              o = Math.max(n[0], n[1]) + Qb,
              a = t(e[0]),
              c = t(e[r - 1]);
            (a < i || a > o || c < i || c > o) && t.domain([e[0], e[r - 1]]);
          }
        })(C);
      var N = (function (t, e) {
        var r = e.realScaleType,
          n = e.type,
          i = e.tickCount,
          o = e.originalDomain,
          a = e.allowDecimals,
          c = r || e.scale;
        if ('auto' !== c && 'linear' !== c) return null;
        if (i && 'number' === n && o && ('auto' === o[0] || 'auto' === o[1])) {
          var u = t.domain();
          if (!u.length) return null;
          var l = jb(u, i, a);
          return t.domain([mg(l), hg(l)]), { niceTicks: l };
        }
        if (i && 'number' === n) {
          var s = t.domain();
          return { niceTicks: Ab(s, i, a) };
        }
        return null;
      })(C, XS(XS({}, y), {}, { realScaleType: D }));
      'xAxis' === n
        ? ((d = ('top' === v && !w) || ('bottom' === v && w)),
          (p = r.left),
          (h = s[S] - d * y.height))
        : 'yAxis' === n &&
          ((d = ('left' === v && !w) || ('right' === v && w)),
          (p = s[S] - d * y.width),
          (h = r.top));
      var I = XS(
        XS(XS({}, y), N),
        {},
        {
          realScaleType: D,
          x: p,
          y: h,
          scale: C,
          width: 'xAxis' === n ? r.width : y.width,
          height: 'yAxis' === n ? r.height : y.height,
        },
      );
      return (
        (I.bandSize = ux(I, N)),
        y.hide || 'xAxis' !== n
          ? y.hide || (s[S] += (d ? -1 : 1) * I.width)
          : (s[S] += (d ? -1 : 1) * I.height),
        XS(XS({}, o), {}, GS({}, a, I))
      );
    }, {});
  },
  YS = function (t, e) {
    var r = t.x,
      n = t.y,
      i = e.x,
      o = e.y;
    return {
      x: Math.min(r, i),
      y: Math.min(n, o),
      width: Math.abs(i - r),
      height: Math.abs(o - n),
    };
  },
  KS = function (t) {
    var e = t.x1,
      r = t.y1,
      n = t.x2,
      i = t.y2;
    return YS({ x: e, y: r }, { x: n, y: i });
  },
  ZS = (function () {
    function t(e) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, t),
        (this.scale = e);
    }
    var e, r, n;
    return (
      (e = t),
      (r = [
        {
          key: 'domain',
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: 'range',
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: 'rangeMin',
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: 'rangeMax',
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: 'bandwidth',
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: 'apply',
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = e.bandAware,
              n = e.position;
            if (void 0 !== t) {
              if (n)
                switch (n) {
                  case 'start':
                  default:
                    return this.scale(t);
                  case 'middle':
                    var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(t) + i;
                  case 'end':
                    var o = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(t) + o;
                }
              if (r) {
                var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(t) + a;
              }
              return this.scale(t);
            }
          },
        },
        {
          key: 'isInRange',
          value: function (t) {
            var e = this.range(),
              r = e[0],
              n = e[e.length - 1];
            return r <= n ? t >= r && t <= n : t >= n && t <= r;
          },
        },
      ]),
      (n = [
        {
          key: 'create',
          value: function (e) {
            return new t(e);
          },
        },
      ]),
      r && WS(e.prototype, r),
      n && WS(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t
    );
  })();
GS(ZS, 'EPS', 1e-4);
var JS = function (t) {
  var e = Object.keys(t).reduce(function (e, r) {
    return XS(XS({}, e), {}, GS({}, r, ZS.create(t[r])));
  }, {});
  return XS(
    XS({}, e),
    {},
    {
      apply: function (t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r.bandAware,
          i = r.position;
        return fS(t, function (t, r) {
          return e[r].apply(t, { bandAware: n, position: i });
        });
      },
      isInRange: function (t) {
        return gS(t, function (t, r) {
          return e[r].isInRange(t);
        });
      },
    },
  );
};
var QS = function (t) {
  var e = t.width,
    r = t.height,
    n = (function (t) {
      return ((t % 180) + 180) % 180;
    })(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
    i = (n * Math.PI) / 180,
    o = Math.atan(r / e),
    a = i > o && i < Math.PI - o ? r / Math.sin(i) : e / Math.cos(i);
  return Math.abs(a);
};
function tj(t) {
  return (tj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function ej(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function rj(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ej(Object(r), !0).forEach(function (e) {
          nj(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : ej(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function nj(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== tj(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== tj(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === tj(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function ij(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return oj(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return oj(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function oj(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function aj() {
  return (
    (aj = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    aj.apply(this, arguments)
  );
}
var cj = function (t, r) {
    return e.isValidElement(t)
      ? e.cloneElement(t, r)
      : K(t)
      ? t(r)
      : e.createElement(
          'line',
          aj({}, r, { className: 'recharts-reference-line-line' }),
        );
  },
  uj = function (t, e, r, n, i) {
    var o = i.viewBox,
      a = o.x,
      c = o.y,
      u = o.width,
      l = o.height,
      s = i.position;
    if (r) {
      var f = i.y,
        p = i.yAxis.orientation,
        h = t.y.apply(f, { position: s });
      if (aS(i, 'discard') && !t.y.isInRange(h)) return null;
      var d = [
        { x: a + u, y: h },
        { x: a, y: h },
      ];
      return 'left' === p ? d.reverse() : d;
    }
    if (e) {
      var y = i.x,
        v = i.xAxis.orientation,
        m = t.x.apply(y, { position: s });
      if (aS(i, 'discard') && !t.x.isInRange(m)) return null;
      var g = [
        { x: m, y: c + l },
        { x: m, y: c },
      ];
      return 'top' === v ? g.reverse() : g;
    }
    if (n) {
      var b = i.segment.map(function (e) {
        return t.apply(e, { position: s });
      });
      return aS(i, 'discard') &&
        oS(b, function (e) {
          return !t.isInRange(e);
        })
        ? null
        : b;
    }
    return null;
  };
function lj(t) {
  var r = t.x,
    n = t.y,
    i = t.segment,
    o = t.xAxis,
    a = t.yAxis,
    c = t.shape,
    u = t.className,
    l = t.alwaysShow,
    s = t.clipPathId;
  rn(
    void 0 === l,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var f = JS({ x: o.scale, y: a.scale }),
    p = dr(r),
    h = dr(n),
    d = i && 2 === i.length,
    y = uj(f, p, h, d, t);
  if (!y) return null;
  var v = ij(y, 2),
    m = v[0],
    g = m.x,
    b = m.y,
    x = v[1],
    w = x.x,
    O = x.y,
    S = rj(
      rj(
        { clipPath: aS(t, 'hidden') ? 'url(#'.concat(s, ')') : void 0 },
        Wr(t, !0),
      ),
      {},
      { x1: g, y1: b, x2: w, y2: O },
    );
  return e.createElement(
    en,
    { className: B('recharts-reference-line', u) },
    cj(c, S),
    Ix.renderCallByParent(t, KS({ x1: g, y1: b, x2: w, y2: O })),
  );
}
function sj(t) {
  return (sj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function fj() {
  return (
    (fj = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    fj.apply(this, arguments)
  );
}
function pj(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hj(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? pj(Object(r), !0).forEach(function (e) {
          dj(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : pj(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function dj(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== sj(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== sj(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === sj(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
(lj.displayName = 'ReferenceLine'),
  (lj.defaultProps = {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    position: 'middle',
  });
var yj = function (t) {
  var e = t.x,
    r = t.y,
    n = t.xAxis,
    i = t.yAxis,
    o = JS({ x: n.scale, y: i.scale }),
    a = o.apply({ x: e, y: r }, { bandAware: !0 });
  return aS(t, 'discard') && !o.isInRange(a) ? null : a;
};
function vj(t) {
  var r = t.x,
    n = t.y,
    i = t.r,
    o = t.alwaysShow,
    a = t.clipPathId,
    c = dr(r),
    u = dr(n);
  if (
    (rn(
      void 0 === o,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
    ),
    !c || !u)
  )
    return null;
  var l = yj(t);
  if (!l) return null;
  var s = l.x,
    f = l.y,
    p = t.shape,
    h = t.className,
    d = hj(
      hj(
        { clipPath: aS(t, 'hidden') ? 'url(#'.concat(a, ')') : void 0 },
        Wr(t, !0),
      ),
      {},
      { cx: s, cy: f },
    );
  return e.createElement(
    en,
    { className: B('recharts-reference-dot', h) },
    vj.renderDot(p, d),
    Ix.renderCallByParent(t, {
      x: s - i,
      y: f - i,
      width: 2 * i,
      height: 2 * i,
    }),
  );
}
function mj(t) {
  return (mj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function gj() {
  return (
    (gj = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    gj.apply(this, arguments)
  );
}
function bj(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xj(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? bj(Object(r), !0).forEach(function (e) {
          wj(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : bj(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function wj(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== mj(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== mj(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === mj(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
(vj.displayName = 'ReferenceDot'),
  (vj.defaultProps = {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  }),
  (vj.renderDot = function (t, r) {
    return e.isValidElement(t)
      ? e.cloneElement(t, r)
      : K(t)
      ? t(r)
      : e.createElement(
          Mw,
          fj({}, r, {
            cx: r.cx,
            cy: r.cy,
            className: 'recharts-reference-dot-dot',
          }),
        );
  });
var Oj = function (t, e, r, n, i) {
  var o = i.x1,
    a = i.x2,
    c = i.y1,
    u = i.y2,
    l = i.xAxis,
    s = i.yAxis;
  if (!l || !s) return null;
  var f = JS({ x: l.scale, y: s.scale }),
    p = {
      x: t ? f.x.apply(o, { position: 'start' }) : f.x.rangeMin,
      y: r ? f.y.apply(c, { position: 'start' }) : f.y.rangeMin,
    },
    h = {
      x: e ? f.x.apply(a, { position: 'end' }) : f.x.rangeMax,
      y: n ? f.y.apply(u, { position: 'end' }) : f.y.rangeMax,
    };
  return !aS(i, 'discard') || (f.isInRange(p) && f.isInRange(h))
    ? YS(p, h)
    : null;
};
function Sj(t) {
  var r = t.x1,
    n = t.x2,
    i = t.y1,
    o = t.y2,
    a = t.className,
    c = t.alwaysShow,
    u = t.clipPathId;
  rn(
    void 0 === c,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var l = dr(r),
    s = dr(n),
    f = dr(i),
    p = dr(o),
    h = t.shape;
  if (!(l || s || f || p || h)) return null;
  var d = Oj(l, s, f, p, t);
  if (!d && !h) return null;
  var y = aS(t, 'hidden') ? 'url(#'.concat(u, ')') : void 0;
  return e.createElement(
    en,
    { className: B('recharts-reference-area', a) },
    Sj.renderRect(h, xj(xj({ clipPath: y }, Wr(t, !0)), d)),
    Ix.renderCallByParent(t, d),
  );
}
function jj(t, e, r) {
  if (e < 1) return [];
  if (1 === e && void 0 === r) return t;
  for (var n = [], i = 0; i < t.length; i += e) {
    if (void 0 !== r && !0 !== r(t[i])) return;
    n.push(t[i]);
  }
  return n;
}
function Aj(t, e, r, n, i) {
  if (t * e < t * n || t * e > t * i) return !1;
  var o = r();
  return t * (e - (t * o) / 2 - n) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
}
function Pj(t) {
  return (Pj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function kj(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ej(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? kj(Object(r), !0).forEach(function (e) {
          Mj(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : kj(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Mj(t, e, r) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ('object' !== Pj(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== Pj(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === Pj(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function _j(t, e, r) {
  var n = t.tick,
    i = t.ticks,
    o = t.viewBox,
    a = t.minTickGap,
    c = t.orientation,
    u = t.interval,
    l = t.tickFormatter,
    s = t.unit,
    f = t.angle;
  if (!i || !i.length || !n) return [];
  if (hr(u) || cp.isSsr)
    return (function (t, e) {
      return jj(t, e + 1);
    })(i, 'number' == typeof u && hr(u) ? u : 0);
  var p = [],
    h = 'top' === c || 'bottom' === c ? 'width' : 'height',
    d =
      s && 'width' === h
        ? Zp(s, { fontSize: e, letterSpacing: r })
        : { width: 0, height: 0 },
    y = function (t, n) {
      var i = K(l) ? l(t.value, n) : t.value;
      return 'width' === h
        ? (function (t, e, r) {
            var n = { width: t.width + e.width, height: t.height + e.height };
            return QS(n, r);
          })(Zp(i, { fontSize: e, letterSpacing: r }), d, f)
        : Zp(i, { fontSize: e, letterSpacing: r })[h];
    },
    v = i.length >= 2 ? fr(i[1].coordinate - i[0].coordinate) : 1,
    m = (function (t, e, r) {
      var n = 'width' === r,
        i = t.x,
        o = t.y,
        a = t.width,
        c = t.height;
      return 1 === e
        ? { start: n ? i : o, end: n ? i + a : o + c }
        : { start: n ? i + a : o + c, end: n ? i : o };
    })(o, v, h);
  return 'equidistantPreserveStart' === u
    ? (function (t, e, r, n, i) {
        for (
          var o,
            a = (n || []).slice(),
            c = e.start,
            u = e.end,
            l = 0,
            s = 1,
            f = c,
            p = function () {
              var e = null == n ? void 0 : n[l];
              if (void 0 === e) return { v: jj(n, s) };
              var o,
                a = l,
                p = function () {
                  return void 0 === o && (o = r(e, a)), o;
                },
                h = e.coordinate,
                d = 0 === l || Aj(t, h, p, f, u);
              d || ((l = 0), (f = c), (s += 1)),
                d && ((f = h + t * (p() / 2 + i)), (l += s));
            };
          s <= a.length;

        )
          if ((o = p())) return o.v;
        return [];
      })(v, m, y, i, a)
    : ((p =
        'preserveStart' === u || 'preserveStartEnd' === u
          ? (function (t, e, r, n, i, o) {
              var a = (n || []).slice(),
                c = a.length,
                u = e.start,
                l = e.end;
              if (o) {
                var s = n[c - 1],
                  f = r(s, c - 1),
                  p = t * (s.coordinate + (t * f) / 2 - l);
                (a[c - 1] = s =
                  Ej(
                    Ej({}, s),
                    {},
                    { tickCoord: p > 0 ? s.coordinate - p * t : s.coordinate },
                  )),
                  Aj(
                    t,
                    s.tickCoord,
                    function () {
                      return f;
                    },
                    u,
                    l,
                  ) &&
                    ((l = s.tickCoord - t * (f / 2 + i)),
                    (a[c - 1] = Ej(Ej({}, s), {}, { isShow: !0 })));
              }
              for (
                var h = o ? c - 1 : c,
                  d = function (e) {
                    var n,
                      o = a[e],
                      c = function () {
                        return void 0 === n && (n = r(o, e)), n;
                      };
                    if (0 === e) {
                      var s = t * (o.coordinate - (t * c()) / 2 - u);
                      a[e] = o = Ej(
                        Ej({}, o),
                        {},
                        {
                          tickCoord:
                            s < 0 ? o.coordinate - s * t : o.coordinate,
                        },
                      );
                    } else
                      a[e] = o = Ej(Ej({}, o), {}, { tickCoord: o.coordinate });
                    Aj(t, o.tickCoord, c, u, l) &&
                      ((u = o.tickCoord + t * (c() / 2 + i)),
                      (a[e] = Ej(Ej({}, o), {}, { isShow: !0 })));
                  },
                  y = 0;
                y < h;
                y++
              )
                d(y);
              return a;
            })(v, m, y, i, a, 'preserveStartEnd' === u)
          : (function (t, e, r, n, i) {
              for (
                var o = (n || []).slice(),
                  a = o.length,
                  c = e.start,
                  u = e.end,
                  l = function (e) {
                    var n,
                      l = o[e],
                      s = function () {
                        return void 0 === n && (n = r(l, e)), n;
                      };
                    if (e === a - 1) {
                      var f = t * (l.coordinate + (t * s()) / 2 - u);
                      o[e] = l = Ej(
                        Ej({}, l),
                        {},
                        {
                          tickCoord:
                            f > 0 ? l.coordinate - f * t : l.coordinate,
                        },
                      );
                    } else
                      o[e] = l = Ej(Ej({}, l), {}, { tickCoord: l.coordinate });
                    Aj(t, l.tickCoord, s, c, u) &&
                      ((u = l.tickCoord - t * (s() / 2 + i)),
                      (o[e] = Ej(Ej({}, l), {}, { isShow: !0 })));
                  },
                  s = a - 1;
                s >= 0;
                s--
              )
                l(s);
              return o;
            })(v, m, y, i, a)),
      p.filter(function (t) {
        return t.isShow;
      }));
}
(Sj.displayName = 'ReferenceArea'),
  (Sj.defaultProps = {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1,
  }),
  (Sj.renderRect = function (t, r) {
    return e.isValidElement(t)
      ? e.cloneElement(t, r)
      : K(t)
      ? t(r)
      : e.createElement(
          kw,
          gj({}, r, { className: 'recharts-reference-area-rect' }),
        );
  });
var Tj = ['viewBox'],
  Cj = ['viewBox'],
  Dj = ['ticks'];
function Nj(t) {
  return (Nj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Ij() {
  return (
    (Ij = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ij.apply(this, arguments)
  );
}
function Bj(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Rj(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Bj(Object(r), !0).forEach(function (e) {
          Wj(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Bj(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Lj(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function zj(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, qj(n.key), n);
  }
}
function $j(t, e) {
  return ($j = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function Uj(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = Fj(t);
    if (e) {
      var i = Fj(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === Nj(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      })(t);
    })(this, r);
  };
}
function Fj(t) {
  return (Fj = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function Wj(t, e, r) {
  return (
    (e = qj(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function qj(t) {
  var e = (function (t, e) {
    if ('object' !== Nj(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== Nj(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === Nj(e) ? e : String(e);
}
var Xj = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && $j(t, e);
  })(c, t.Component);
  var n,
    i,
    o,
    a = Uj(c);
  function c(t) {
    var e;
    return (
      (function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, c),
      ((e = a.call(this, t)).state = { fontSize: '', letterSpacing: '' }),
      e
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'renderTickItem',
        value: function (t, r, n) {
          return e.isValidElement(t)
            ? e.cloneElement(t, r)
            : K(t)
            ? t(r)
            : e.createElement(
                Ah,
                Ij({}, r, { className: 'recharts-cartesian-axis-tick-value' }),
                n,
              );
        },
      },
    ]),
    (i = [
      {
        key: 'shouldComponentUpdate',
        value: function (t, e) {
          var r = t.viewBox,
            n = Lj(t, Tj),
            i = this.props,
            o = i.viewBox,
            a = Lj(i, Cj);
          return !wr(r, o) || !wr(n, a) || !wr(e, this.state);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this.layerReference;
          if (t) {
            var e = t.getElementsByClassName(
              'recharts-cartesian-axis-tick-value',
            )[0];
            e &&
              this.setState({
                fontSize: window.getComputedStyle(e).fontSize,
                letterSpacing: window.getComputedStyle(e).letterSpacing,
              });
          }
        },
      },
      {
        key: 'getTickLineCoord',
        value: function (t) {
          var e,
            r,
            n,
            i,
            o,
            a,
            c = this.props,
            u = c.x,
            l = c.y,
            s = c.width,
            f = c.height,
            p = c.orientation,
            h = c.tickSize,
            d = c.mirror,
            y = c.tickMargin,
            v = d ? -1 : 1,
            m = t.tickSize || h,
            g = hr(t.tickCoord) ? t.tickCoord : t.coordinate;
          switch (p) {
            case 'top':
              (e = r = t.coordinate),
                (a = (n = (i = l + +!d * f) - v * m) - v * y),
                (o = g);
              break;
            case 'left':
              (n = i = t.coordinate),
                (o = (e = (r = u + +!d * s) - v * m) - v * y),
                (a = g);
              break;
            case 'right':
              (n = i = t.coordinate),
                (o = (e = (r = u + +d * s) + v * m) + v * y),
                (a = g);
              break;
            default:
              (e = r = t.coordinate),
                (a = (n = (i = l + +d * f) + v * m) + v * y),
                (o = g);
          }
          return { line: { x1: e, y1: n, x2: r, y2: i }, tick: { x: o, y: a } };
        },
      },
      {
        key: 'getTickTextAnchor',
        value: function () {
          var t,
            e = this.props,
            r = e.orientation,
            n = e.mirror;
          switch (r) {
            case 'left':
              t = n ? 'start' : 'end';
              break;
            case 'right':
              t = n ? 'end' : 'start';
              break;
            default:
              t = 'middle';
          }
          return t;
        },
      },
      {
        key: 'getTickVerticalAnchor',
        value: function () {
          var t = this.props,
            e = t.orientation,
            r = t.mirror,
            n = 'end';
          switch (e) {
            case 'left':
            case 'right':
              n = 'middle';
              break;
            case 'top':
              n = r ? 'start' : 'end';
              break;
            default:
              n = r ? 'end' : 'start';
          }
          return n;
        },
      },
      {
        key: 'renderAxisLine',
        value: function () {
          var t = this.props,
            r = t.x,
            n = t.y,
            i = t.width,
            o = t.height,
            a = t.orientation,
            c = t.mirror,
            u = t.axisLine,
            l = Rj(Rj(Rj({}, Wr(this.props)), Wr(u)), {}, { fill: 'none' });
          if ('top' === a || 'bottom' === a) {
            var s = +(('top' === a && !c) || ('bottom' === a && c));
            l = Rj(
              Rj({}, l),
              {},
              { x1: r, y1: n + s * o, x2: r + i, y2: n + s * o },
            );
          } else {
            var f = +(('left' === a && !c) || ('right' === a && c));
            l = Rj(
              Rj({}, l),
              {},
              { x1: r + f * i, y1: n, x2: r + f * i, y2: n + o },
            );
          }
          return e.createElement(
            'line',
            Ij({}, l, {
              className: B('recharts-cartesian-axis-line', De(u, 'className')),
            }),
          );
        },
      },
      {
        key: 'renderTicks',
        value: function (t, r, n) {
          var i = this,
            o = this.props,
            a = o.tickLine,
            u = o.stroke,
            l = o.tick,
            s = o.tickFormatter,
            f = o.unit,
            p = _j(Rj(Rj({}, this.props), {}, { ticks: t }), r, n),
            h = this.getTickTextAnchor(),
            d = this.getTickVerticalAnchor(),
            y = Wr(this.props),
            v = Wr(l),
            m = Rj(Rj({}, y), {}, { fill: 'none' }, Wr(a)),
            g = p.map(function (t, r) {
              var n = i.getTickLineCoord(t),
                o = n.line,
                g = n.tick,
                b = Rj(
                  Rj(
                    Rj(
                      Rj({ textAnchor: h, verticalAnchor: d }, y),
                      {},
                      { stroke: 'none', fill: u },
                      v,
                    ),
                    g,
                  ),
                  {},
                  {
                    index: r,
                    payload: t,
                    visibleTicksCount: p.length,
                    tickFormatter: s,
                  },
                );
              return e.createElement(
                en,
                Ij(
                  {
                    className: 'recharts-cartesian-axis-tick',
                    key: 'tick-'
                      .concat(t.value, '-')
                      .concat(t.coordinate, '-')
                      .concat(t.tickCoord),
                  },
                  Er(i.props, t, r),
                ),
                a &&
                  e.createElement(
                    'line',
                    Ij({}, m, o, {
                      className: B(
                        'recharts-cartesian-axis-tick-line',
                        De(a, 'className'),
                      ),
                    }),
                  ),
                l &&
                  c.renderTickItem(
                    l,
                    b,
                    ''.concat(K(s) ? s(t.value, r) : t.value).concat(f || ''),
                  ),
              );
            });
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-axis-ticks' },
            g,
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            r = this.props,
            n = r.axisLine,
            i = r.width,
            o = r.height,
            a = r.ticksGenerator,
            c = r.className;
          if (r.hide) return null;
          var u = this.props,
            l = u.ticks,
            s = Lj(u, Dj),
            f = l;
          return (
            K(a) && (f = l && l.length > 0 ? a(this.props) : a(s)),
            i <= 0 || o <= 0 || !f || !f.length
              ? null
              : e.createElement(
                  en,
                  {
                    className: B('recharts-cartesian-axis', c),
                    ref: function (e) {
                      t.layerReference = e;
                    },
                  },
                  n && this.renderAxisLine(),
                  this.renderTicks(
                    f,
                    this.state.fontSize,
                    this.state.letterSpacing,
                  ),
                  Ix.renderCallByParent(this.props),
                )
          );
        },
      },
    ]) && zj(n.prototype, i),
    o && zj(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
Wj(Xj, 'displayName', 'CartesianAxis'),
  Wj(Xj, 'defaultProps', {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    orientation: 'bottom',
    ticks: [],
    stroke: '#666',
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: 'preserveEnd',
  });
var Gj = ['x1', 'y1', 'x2', 'y2', 'key'],
  Vj = ['offset'];
function Hj(t) {
  return (Hj =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Yj() {
  return (
    (Yj = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Yj.apply(this, arguments)
  );
}
function Kj(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function Zj(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jj(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Zj(Object(r), !0).forEach(function (e) {
          nA(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Zj(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function Qj(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, iA(n.key), n);
  }
}
function tA(t, e) {
  return (tA = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function eA(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = rA(t);
    if (e) {
      var i = rA(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === Hj(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      })(t);
    })(this, r);
  };
}
function rA(t) {
  return (rA = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function nA(t, e, r) {
  return (
    (e = iA(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function iA(t) {
  var e = (function (t, e) {
    if ('object' !== Hj(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== Hj(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === Hj(e) ? e : String(e);
}
var oA = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && tA(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = eA(c);
  function c() {
    return (
      (function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, c),
      a.apply(this, arguments)
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'renderLineItem',
        value: function (t, r) {
          var n;
          if (e.isValidElement(t)) n = e.cloneElement(t, r);
          else if (K(t)) n = t(r);
          else {
            var i = r.x1,
              o = r.y1,
              a = r.x2,
              c = r.y2,
              u = r.key,
              l = Kj(r, Gj),
              s = Wr(l);
            s.offset;
            var f = Kj(s, Vj);
            n = e.createElement(
              'line',
              Yj({}, f, { x1: i, y1: o, x2: a, y2: c, fill: 'none', key: u }),
            );
          }
          return n;
        },
      },
    ]),
    (i = [
      {
        key: 'renderHorizontal',
        value: function (t) {
          var r = this,
            n = this.props,
            i = n.x,
            o = n.width,
            a = n.horizontal;
          if (!t || !t.length) return null;
          var u = t.map(function (t, e) {
            var n = Jj(
              Jj({}, r.props),
              {},
              {
                x1: i,
                y1: t,
                x2: i + o,
                y2: t,
                key: 'line-'.concat(e),
                index: e,
              },
            );
            return c.renderLineItem(a, n);
          });
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-grid-horizontal' },
            u,
          );
        },
      },
      {
        key: 'renderVertical',
        value: function (t) {
          var r = this,
            n = this.props,
            i = n.y,
            o = n.height,
            a = n.vertical;
          if (!t || !t.length) return null;
          var u = t.map(function (t, e) {
            var n = Jj(
              Jj({}, r.props),
              {},
              {
                x1: t,
                y1: i,
                x2: t,
                y2: i + o,
                key: 'line-'.concat(e),
                index: e,
              },
            );
            return c.renderLineItem(a, n);
          });
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-grid-vertical' },
            u,
          );
        },
      },
      {
        key: 'renderVerticalStripes',
        value: function (t) {
          var r = this.props.verticalFill;
          if (!r || !r.length) return null;
          var n = this.props,
            i = n.fillOpacity,
            o = n.x,
            a = n.y,
            c = n.width,
            u = n.height,
            l = t
              .map(function (t) {
                return Math.round(t + o - o);
              })
              .sort(function (t, e) {
                return t - e;
              });
          o !== l[0] && l.unshift(0);
          var s = l.map(function (t, n) {
            var s = l[n + 1] ? l[n + 1] - t : o + c - t;
            if (s <= 0) return null;
            var f = n % r.length;
            return e.createElement('rect', {
              key: 'react-'.concat(n),
              x: t,
              y: a,
              width: s,
              height: u,
              stroke: 'none',
              fill: r[f],
              fillOpacity: i,
              className: 'recharts-cartesian-grid-bg',
            });
          });
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-gridstripes-vertical' },
            s,
          );
        },
      },
      {
        key: 'renderHorizontalStripes',
        value: function (t) {
          var r = this.props.horizontalFill;
          if (!r || !r.length) return null;
          var n = this.props,
            i = n.fillOpacity,
            o = n.x,
            a = n.y,
            c = n.width,
            u = n.height,
            l = t
              .map(function (t) {
                return Math.round(t + a - a);
              })
              .sort(function (t, e) {
                return t - e;
              });
          a !== l[0] && l.unshift(0);
          var s = l.map(function (t, n) {
            var s = l[n + 1] ? l[n + 1] - t : a + u - t;
            if (s <= 0) return null;
            var f = n % r.length;
            return e.createElement('rect', {
              key: 'react-'.concat(n),
              y: t,
              x: o,
              height: s,
              width: c,
              stroke: 'none',
              fill: r[f],
              fillOpacity: i,
              className: 'recharts-cartesian-grid-bg',
            });
          });
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-gridstripes-horizontal' },
            s,
          );
        },
      },
      {
        key: 'renderBackground',
        value: function () {
          var t = this.props.fill;
          if (!t || 'none' === t) return null;
          var r = this.props,
            n = r.fillOpacity,
            i = r.x,
            o = r.y,
            a = r.width,
            c = r.height;
          return e.createElement('rect', {
            x: i,
            y: o,
            width: a,
            height: c,
            stroke: 'none',
            fill: t,
            fillOpacity: n,
            className: 'recharts-cartesian-grid-bg',
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            r = t.x,
            n = t.y,
            i = t.width,
            o = t.height,
            a = t.horizontal,
            c = t.vertical,
            u = t.horizontalCoordinatesGenerator,
            l = t.verticalCoordinatesGenerator,
            s = t.xAxis,
            f = t.yAxis,
            p = t.offset,
            h = t.chartWidth,
            d = t.chartHeight,
            y = t.syncWithTicks,
            v = t.horizontalValues,
            m = t.verticalValues;
          if (
            !hr(i) ||
            i <= 0 ||
            !hr(o) ||
            o <= 0 ||
            !hr(r) ||
            r !== +r ||
            !hr(n) ||
            n !== +n
          )
            return null;
          var g = this.props,
            b = g.horizontalPoints,
            x = g.verticalPoints;
          if ((!b || !b.length) && K(u)) {
            var w = v && v.length;
            b = u(
              {
                yAxis: f
                  ? Jj(Jj({}, f), {}, { ticks: w ? v : f.ticks })
                  : void 0,
                width: h,
                height: d,
                offset: p,
              },
              !!w || y,
            );
          }
          if ((!x || !x.length) && K(l)) {
            var O = m && m.length;
            x = l(
              {
                xAxis: s
                  ? Jj(Jj({}, s), {}, { ticks: O ? m : s.ticks })
                  : void 0,
                width: h,
                height: d,
                offset: p,
              },
              !!O || y,
            );
          }
          return e.createElement(
            'g',
            { className: 'recharts-cartesian-grid' },
            this.renderBackground(),
            a && this.renderHorizontal(b),
            c && this.renderVertical(x),
            a && this.renderHorizontalStripes(b),
            c && this.renderVerticalStripes(x),
          );
        },
      },
    ]) && Qj(n.prototype, i),
    o && Qj(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
nA(oA, 'displayName', 'CartesianGrid'),
  nA(oA, 'defaultProps', {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: '#ccc',
    fill: 'none',
    verticalFill: [],
    horizontalFill: [],
  });
var aA = ['type', 'layout', 'connectNulls', 'ref'];
function cA(t) {
  return (cA =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function uA(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function lA() {
  return (
    (lA = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    lA.apply(this, arguments)
  );
}
function sA(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fA(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? sA(Object(r), !0).forEach(function (e) {
          bA(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : sA(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function pA(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return hA(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return hA(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return hA(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function hA(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function dA(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, xA(n.key), n);
  }
}
function yA(t, e) {
  return (yA = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function vA(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = gA(t);
    if (e) {
      var i = gA(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === cA(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return mA(t);
    })(this, r);
  };
}
function mA(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function gA(t) {
  return (gA = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function bA(t, e, r) {
  return (
    (e = xA(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xA(t) {
  var e = (function (t, e) {
    if ('object' !== cA(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== cA(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === cA(e) ? e : String(e);
}
var wA = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && yA(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = vA(c);
  function c() {
    var t;
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, c);
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (
      bA(mA((t = a.call.apply(a, [this].concat(r)))), 'state', {
        isAnimationFinished: !0,
        totalLength: 0,
      }),
      bA(mA(t), 'generateSimpleStrokeDasharray', function (t, e) {
        return ''.concat(e, 'px ').concat(t - e, 'px');
      }),
      bA(mA(t), 'getStrokeDasharray', function (e, r, n) {
        var i = n.reduce(function (t, e) {
          return t + e;
        });
        if (!i) return t.generateSimpleStrokeDasharray(r, e);
        for (
          var o = Math.floor(e / i), a = e % i, u = r - e, l = [], s = 0, f = 0;
          s < n.length;
          f += n[s], ++s
        )
          if (f + n[s] > a) {
            l = [].concat(pA(n.slice(0, s)), [a - f]);
            break;
          }
        var p = l.length % 2 == 0 ? [0, u] : [u];
        return []
          .concat(pA(c.repeat(n, o)), pA(l), p)
          .map(function (t) {
            return ''.concat(t, 'px');
          })
          .join(', ');
      }),
      bA(mA(t), 'id', vr('recharts-line-')),
      bA(mA(t), 'pathRef', function (e) {
        t.mainCurve = e;
      }),
      bA(mA(t), 'handleAnimationEnd', function () {
        t.setState({ isAnimationFinished: !0 }),
          t.props.onAnimationEnd && t.props.onAnimationEnd();
      }),
      bA(mA(t), 'handleAnimationStart', function () {
        t.setState({ isAnimationFinished: !1 }),
          t.props.onAnimationStart && t.props.onAnimationStart();
      }),
      t
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, e) {
          return t.animationId !== e.prevAnimationId
            ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                prevPoints: e.curPoints,
              }
            : t.points !== e.curPoints
            ? { curPoints: t.points }
            : null;
        },
      },
      {
        key: 'repeat',
        value: function (t, e) {
          for (
            var r = t.length % 2 != 0 ? [].concat(pA(t), [0]) : t,
              n = [],
              i = 0;
            i < e;
            ++i
          )
            n = [].concat(pA(n), pA(r));
          return n;
        },
      },
      {
        key: 'renderDotItem',
        value: function (t, r) {
          var n;
          if (e.isValidElement(t)) n = e.cloneElement(t, r);
          else if (K(t)) n = t(r);
          else {
            var i = B('recharts-line-dot', t ? t.className : '');
            n = e.createElement(Mw, lA({}, r, { className: i }));
          }
          return n;
        },
      },
    ]),
    (i = [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.isAnimationActive) {
            var t = this.getTotalLength();
            this.setState({ totalLength: t });
          }
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this.props.isAnimationActive) {
            var t = this.getTotalLength();
            t !== this.state.totalLength && this.setState({ totalLength: t });
          }
        },
      },
      {
        key: 'getTotalLength',
        value: function () {
          var t = this.mainCurve;
          try {
            return (t && t.getTotalLength && t.getTotalLength()) || 0;
          } catch (e) {
            return 0;
          }
        },
      },
      {
        key: 'renderErrorBar',
        value: function (t, r) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished)
            return null;
          var n = this.props,
            i = n.points,
            o = n.xAxis,
            a = n.yAxis,
            c = n.layout,
            u = Lr(n.children, Tb);
          if (!u) return null;
          var l = function (t, e) {
              return {
                x: t.x,
                y: t.y,
                value: t.value,
                errorVal: Wb(t.payload, e),
              };
            },
            s = { clipPath: t ? 'url(#clipPath-'.concat(r, ')') : null };
          return e.createElement(
            en,
            s,
            u.map(function (t) {
              return e.cloneElement(t, {
                key: 'bar-'.concat(t.props.dataKey),
                data: i,
                xAxis: o,
                yAxis: a,
                layout: c,
                dataPointFormatter: l,
              });
            }),
          );
        },
      },
      {
        key: 'renderDots',
        value: function (t, r, n) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished)
            return null;
          var i = this.props,
            o = i.dot,
            a = i.points,
            u = i.dataKey,
            l = Wr(this.props),
            s = Wr(o, !0),
            f = a.map(function (t, e) {
              var r = fA(
                fA(fA({ key: 'dot-'.concat(e), r: 3 }, l), s),
                {},
                {
                  value: t.value,
                  dataKey: u,
                  cx: t.x,
                  cy: t.y,
                  index: e,
                  payload: t.payload,
                },
              );
              return c.renderDotItem(o, r);
            }),
            p = {
              clipPath: t
                ? 'url(#clipPath-'.concat(r ? '' : 'dots-').concat(n, ')')
                : null,
            };
          return e.createElement(
            en,
            lA({ className: 'recharts-line-dots', key: 'dots' }, p),
            f,
          );
        },
      },
      {
        key: 'renderCurveStatically',
        value: function (t, r, n, i) {
          var o = this.props,
            a = o.type,
            c = o.layout,
            u = o.connectNulls;
          o.ref;
          var l = uA(o, aA),
            s = fA(
              fA(
                fA({}, Wr(l, !0)),
                {},
                {
                  fill: 'none',
                  className: 'recharts-line-curve',
                  clipPath: r ? 'url(#clipPath-'.concat(n, ')') : null,
                  points: t,
                },
                i,
              ),
              {},
              { type: a, layout: c, connectNulls: u },
            );
          return e.createElement(vw, lA({}, s, { pathRef: this.pathRef }));
        },
      },
      {
        key: 'renderCurveWithAnimation',
        value: function (t, r) {
          var n = this,
            i = this.props,
            o = i.points,
            a = i.strokeDasharray,
            c = i.isAnimationActive,
            u = i.animationBegin,
            l = i.animationDuration,
            s = i.animationEasing,
            f = i.animationId,
            p = i.animateNewValues,
            h = i.width,
            d = i.height,
            y = this.state,
            v = y.prevPoints,
            m = y.totalLength;
          return e.createElement(
            Ff,
            {
              begin: u,
              duration: l,
              isActive: c,
              easing: s,
              from: { t: 0 },
              to: { t: 1 },
              key: 'line-'.concat(f),
              onAnimationEnd: this.handleAnimationEnd,
              onAnimationStart: this.handleAnimationStart,
            },
            function (e) {
              var i = e.t;
              if (v) {
                var c = v.length / o.length,
                  u = o.map(function (t, e) {
                    var r = Math.floor(e * c);
                    if (v[r]) {
                      var n = v[r],
                        o = br(n.x, t.x),
                        a = br(n.y, t.y);
                      return fA(fA({}, t), {}, { x: o(i), y: a(i) });
                    }
                    if (p) {
                      var u = br(2 * h, t.x),
                        l = br(d / 2, t.y);
                      return fA(fA({}, t), {}, { x: u(i), y: l(i) });
                    }
                    return fA(fA({}, t), {}, { x: t.x, y: t.y });
                  });
                return n.renderCurveStatically(u, t, r);
              }
              var l,
                s = br(0, m)(i);
              if (a) {
                var f = ''
                  .concat(a)
                  .split(/[,\s]+/gim)
                  .map(function (t) {
                    return parseFloat(t);
                  });
                l = n.getStrokeDasharray(s, m, f);
              } else l = n.generateSimpleStrokeDasharray(m, s);
              return n.renderCurveStatically(o, t, r, { strokeDasharray: l });
            },
          );
        },
      },
      {
        key: 'renderCurve',
        value: function (t, e) {
          var r = this.props,
            n = r.points,
            i = r.isAnimationActive,
            o = this.state,
            a = o.prevPoints,
            c = o.totalLength;
          return i && n && n.length && ((!a && c > 0) || !kg(a, n))
            ? this.renderCurveWithAnimation(t, e)
            : this.renderCurveStatically(n, t, e);
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            r = this.props,
            n = r.hide,
            i = r.dot,
            o = r.points,
            a = r.className,
            c = r.xAxis,
            u = r.yAxis,
            l = r.top,
            s = r.left,
            f = r.width,
            p = r.height,
            h = r.isAnimationActive,
            d = r.id;
          if (n || !o || !o.length) return null;
          var y = this.state.isAnimationFinished,
            v = 1 === o.length,
            m = B('recharts-line', a),
            g = c && c.allowDataOverflow,
            b = u && u.allowDataOverflow,
            x = g || b,
            w = Ne(d) ? this.id : d,
            O =
              null !== (t = Wr(i)) && void 0 !== t
                ? t
                : { r: 3, strokeWidth: 2 },
            S = O.r,
            j = void 0 === S ? 3 : S,
            A = O.strokeWidth,
            P = void 0 === A ? 2 : A,
            k = (Fr(i) ? i : {}).clipDot,
            E = void 0 === k || k,
            M = 2 * j + P;
          return e.createElement(
            en,
            { className: m },
            g || b
              ? e.createElement(
                  'defs',
                  null,
                  e.createElement(
                    'clipPath',
                    { id: 'clipPath-'.concat(w) },
                    e.createElement('rect', {
                      x: g ? s : s - f / 2,
                      y: b ? l : l - p / 2,
                      width: g ? f : 2 * f,
                      height: b ? p : 2 * p,
                    }),
                  ),
                  !E &&
                    e.createElement(
                      'clipPath',
                      { id: 'clipPath-dots-'.concat(w) },
                      e.createElement('rect', {
                        x: s - M / 2,
                        y: l - M / 2,
                        width: f + M,
                        height: p + M,
                      }),
                    ),
                )
              : null,
            !v && this.renderCurve(x, w),
            this.renderErrorBar(x, w),
            (v || i) && this.renderDots(x, E, w),
            (!h || y) && Kx.renderCallByParent(this.props, o),
          );
        },
      },
    ]) && dA(n.prototype, i),
    o && dA(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
bA(wA, 'displayName', 'Line'),
  bA(wA, 'defaultProps', {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    isAnimationActive: !cp.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    hide: !1,
    label: !1,
  }),
  bA(wA, 'getComposedData', function (t) {
    var e = t.props,
      r = t.xAxis,
      n = t.yAxis,
      i = t.xAxisTicks,
      o = t.yAxisTicks,
      a = t.dataKey,
      c = t.bandSize,
      u = t.displayedData,
      l = t.offset,
      s = e.layout;
    return fA(
      {
        points: u.map(function (t, e) {
          var u = Wb(t, a);
          return 'horizontal' === s
            ? {
                x: rx({ axis: r, ticks: i, bandSize: c, entry: t, index: e }),
                y: Ne(u) ? null : n.scale(u),
                value: u,
                payload: t,
              }
            : {
                x: Ne(u) ? null : r.scale(u),
                y: rx({ axis: n, ticks: o, bandSize: c, entry: t, index: e }),
                value: u,
                payload: t,
              };
        }),
        layout: s,
      },
      l,
    );
  });
var OA,
  SA = ['layout', 'type', 'stroke', 'connectNulls', 'isRange', 'ref'];
function jA(t) {
  return (jA =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function AA(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function PA() {
  return (
    (PA = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    PA.apply(this, arguments)
  );
}
function kA(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function EA(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? kA(Object(r), !0).forEach(function (e) {
          NA(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : kA(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function MA(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, IA(n.key), n);
  }
}
function _A(t, e) {
  return (_A = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function TA(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = DA(t);
    if (e) {
      var i = DA(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === jA(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return CA(t);
    })(this, r);
  };
}
function CA(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function DA(t) {
  return (DA = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function NA(t, e, r) {
  return (
    (e = IA(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function IA(t) {
  var e = (function (t, e) {
    if ('object' !== jA(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== jA(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === jA(e) ? e : String(e);
}
var BA = (function (r) {
  !(function (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && _A(t, e);
  })(c, t.PureComponent);
  var n,
    i,
    o,
    a = TA(c);
  function c() {
    var t;
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, c);
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (
      NA(CA((t = a.call.apply(a, [this].concat(r)))), 'state', {
        isAnimationFinished: !0,
      }),
      NA(CA(t), 'id', vr('recharts-area-')),
      NA(CA(t), 'handleAnimationEnd', function () {
        var e = t.props.onAnimationEnd;
        t.setState({ isAnimationFinished: !0 }), K(e) && e();
      }),
      NA(CA(t), 'handleAnimationStart', function () {
        var e = t.props.onAnimationStart;
        t.setState({ isAnimationFinished: !1 }), K(e) && e();
      }),
      t
    );
  }
  return (
    (n = c),
    (o = [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, e) {
          return t.animationId !== e.prevAnimationId
            ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                curBaseLine: t.baseLine,
                prevPoints: e.curPoints,
                prevBaseLine: e.curBaseLine,
              }
            : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
            ? { curPoints: t.points, curBaseLine: t.baseLine }
            : null;
        },
      },
    ]),
    (i = [
      {
        key: 'renderDots',
        value: function (t, r, n) {
          var i = this.props.isAnimationActive,
            o = this.state.isAnimationFinished;
          if (i && !o) return null;
          var a = this.props,
            u = a.dot,
            l = a.points,
            s = a.dataKey,
            f = Wr(this.props),
            p = Wr(u, !0),
            h = l.map(function (t, e) {
              var r = EA(
                EA(EA({ key: 'dot-'.concat(e), r: 3 }, f), p),
                {},
                {
                  dataKey: s,
                  cx: t.x,
                  cy: t.y,
                  index: e,
                  value: t.value,
                  payload: t.payload,
                },
              );
              return c.renderDotItem(u, r);
            }),
            d = {
              clipPath: t
                ? 'url(#clipPath-'.concat(r ? '' : 'dots-').concat(n, ')')
                : null,
            };
          return e.createElement(
            en,
            PA({ className: 'recharts-area-dots' }, d),
            h,
          );
        },
      },
      {
        key: 'renderHorizontalRect',
        value: function (t) {
          var r = this.props,
            n = r.baseLine,
            i = r.points,
            o = r.strokeWidth,
            a = i[0].x,
            c = i[i.length - 1].x,
            u = t * Math.abs(a - c),
            l = hg(
              i.map(function (t) {
                return t.y || 0;
              }),
            );
          return (
            hr(n) && 'number' == typeof n
              ? (l = Math.max(n, l))
              : n &&
                Array.isArray(n) &&
                n.length &&
                (l = Math.max(
                  hg(
                    n.map(function (t) {
                      return t.y || 0;
                    }),
                  ),
                  l,
                )),
            hr(l)
              ? e.createElement('rect', {
                  x: a < c ? a : a - u,
                  y: 0,
                  width: u,
                  height: Math.floor(l + (o ? parseInt(''.concat(o), 10) : 1)),
                })
              : null
          );
        },
      },
      {
        key: 'renderVerticalRect',
        value: function (t) {
          var r = this.props,
            n = r.baseLine,
            i = r.points,
            o = r.strokeWidth,
            a = i[0].y,
            c = i[i.length - 1].y,
            u = t * Math.abs(a - c),
            l = hg(
              i.map(function (t) {
                return t.x || 0;
              }),
            );
          return (
            hr(n) && 'number' == typeof n
              ? (l = Math.max(n, l))
              : n &&
                Array.isArray(n) &&
                n.length &&
                (l = Math.max(
                  hg(
                    n.map(function (t) {
                      return t.x || 0;
                    }),
                  ),
                  l,
                )),
            hr(l)
              ? e.createElement('rect', {
                  x: 0,
                  y: a < c ? a : a - u,
                  width: l + (o ? parseInt(''.concat(o), 10) : 1),
                  height: Math.floor(u),
                })
              : null
          );
        },
      },
      {
        key: 'renderClipRect',
        value: function (t) {
          return 'vertical' === this.props.layout
            ? this.renderVerticalRect(t)
            : this.renderHorizontalRect(t);
        },
      },
      {
        key: 'renderAreaStatically',
        value: function (t, r, n, i) {
          var o = this.props,
            a = o.layout,
            c = o.type,
            u = o.stroke,
            l = o.connectNulls,
            s = o.isRange;
          o.ref;
          var f = AA(o, SA);
          return e.createElement(
            en,
            { clipPath: n ? 'url(#clipPath-'.concat(i, ')') : null },
            e.createElement(
              vw,
              PA({}, Wr(f, !0), {
                points: t,
                connectNulls: l,
                type: c,
                baseLine: r,
                layout: a,
                stroke: 'none',
                className: 'recharts-area-area',
              }),
            ),
            'none' !== u &&
              e.createElement(
                vw,
                PA({}, Wr(this.props), {
                  className: 'recharts-area-curve',
                  layout: a,
                  type: c,
                  connectNulls: l,
                  fill: 'none',
                  points: t,
                }),
              ),
            'none' !== u &&
              s &&
              e.createElement(
                vw,
                PA({}, Wr(this.props), {
                  className: 'recharts-area-curve',
                  layout: a,
                  type: c,
                  connectNulls: l,
                  fill: 'none',
                  points: r,
                }),
              ),
          );
        },
      },
      {
        key: 'renderAreaWithAnimation',
        value: function (t, r) {
          var n = this,
            i = this.props,
            o = i.points,
            a = i.baseLine,
            c = i.isAnimationActive,
            u = i.animationBegin,
            l = i.animationDuration,
            s = i.animationEasing,
            f = i.animationId,
            p = this.state,
            h = p.prevPoints,
            d = p.prevBaseLine;
          return e.createElement(
            Ff,
            {
              begin: u,
              duration: l,
              isActive: c,
              easing: s,
              from: { t: 0 },
              to: { t: 1 },
              key: 'area-'.concat(f),
              onAnimationEnd: this.handleAnimationEnd,
              onAnimationStart: this.handleAnimationStart,
            },
            function (i) {
              var c = i.t;
              if (h) {
                var u,
                  l = h.length / o.length,
                  s = o.map(function (t, e) {
                    var r = Math.floor(e * l);
                    if (h[r]) {
                      var n = h[r],
                        i = br(n.x, t.x),
                        o = br(n.y, t.y);
                      return EA(EA({}, t), {}, { x: i(c), y: o(c) });
                    }
                    return t;
                  });
                return (
                  (u =
                    hr(a) && 'number' == typeof a
                      ? br(d, a)(c)
                      : Ne(a) || sr(a)
                      ? br(d, 0)(c)
                      : a.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (d[r]) {
                            var n = d[r],
                              i = br(n.x, t.x),
                              o = br(n.y, t.y);
                            return EA(EA({}, t), {}, { x: i(c), y: o(c) });
                          }
                          return t;
                        })),
                  n.renderAreaStatically(s, u, t, r)
                );
              }
              return e.createElement(
                en,
                null,
                e.createElement(
                  'defs',
                  null,
                  e.createElement(
                    'clipPath',
                    { id: 'animationClipPath-'.concat(r) },
                    n.renderClipRect(c),
                  ),
                ),
                e.createElement(
                  en,
                  { clipPath: 'url(#animationClipPath-'.concat(r, ')') },
                  n.renderAreaStatically(o, a, t, r),
                ),
              );
            },
          );
        },
      },
      {
        key: 'renderArea',
        value: function (t, e) {
          var r = this.props,
            n = r.points,
            i = r.baseLine,
            o = r.isAnimationActive,
            a = this.state,
            c = a.prevPoints,
            u = a.prevBaseLine,
            l = a.totalLength;
          return o && n && n.length && ((!c && l > 0) || !kg(c, n) || !kg(u, i))
            ? this.renderAreaWithAnimation(t, e)
            : this.renderAreaStatically(n, i, t, e);
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            r = this.props,
            n = r.hide,
            i = r.dot,
            o = r.points,
            a = r.className,
            c = r.top,
            u = r.left,
            l = r.xAxis,
            s = r.yAxis,
            f = r.width,
            p = r.height,
            h = r.isAnimationActive,
            d = r.id;
          if (n || !o || !o.length) return null;
          var y = this.state.isAnimationFinished,
            v = 1 === o.length,
            m = B('recharts-area', a),
            g = l && l.allowDataOverflow,
            b = s && s.allowDataOverflow,
            x = g || b,
            w = Ne(d) ? this.id : d,
            O =
              null !== (t = Wr(i)) && void 0 !== t
                ? t
                : { r: 3, strokeWidth: 2 },
            S = O.r,
            j = void 0 === S ? 3 : S,
            A = O.strokeWidth,
            P = void 0 === A ? 2 : A,
            k = (Fr(i) ? i : {}).clipDot,
            E = void 0 === k || k,
            M = 2 * j + P;
          return e.createElement(
            en,
            { className: m },
            g || b
              ? e.createElement(
                  'defs',
                  null,
                  e.createElement(
                    'clipPath',
                    { id: 'clipPath-'.concat(w) },
                    e.createElement('rect', {
                      x: g ? u : u - f / 2,
                      y: b ? c : c - p / 2,
                      width: g ? f : 2 * f,
                      height: b ? p : 2 * p,
                    }),
                  ),
                  !E &&
                    e.createElement(
                      'clipPath',
                      { id: 'clipPath-dots-'.concat(w) },
                      e.createElement('rect', {
                        x: u - M / 2,
                        y: c - M / 2,
                        width: f + M,
                        height: p + M,
                      }),
                    ),
                )
              : null,
            v ? null : this.renderArea(x, w),
            (i || v) && this.renderDots(x, E, w),
            (!h || y) && Kx.renderCallByParent(this.props, o),
          );
        },
      },
    ]) && MA(n.prototype, i),
    o && MA(n, o),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    c
  );
})();
(OA = BA),
  NA(BA, 'displayName', 'Area'),
  NA(BA, 'defaultProps', {
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !cp.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  }),
  NA(BA, 'getBaseValue', function (t, e, r, n) {
    var i = t.layout,
      o = t.baseValue,
      a = e.props.baseValue,
      c = null != a ? a : o;
    if (hr(c) && 'number' == typeof c) return c;
    var u = 'horizontal' === i ? n : r,
      l = u.scale.domain();
    if ('number' === u.type) {
      var s = Math.max(l[0], l[1]),
        f = Math.min(l[0], l[1]);
      return 'dataMin' === c
        ? f
        : 'dataMax' === c || s < 0
        ? s
        : Math.max(Math.min(l[0], l[1]), 0);
    }
    return 'dataMin' === c ? l[0] : 'dataMax' === c ? l[1] : l[0];
  }),
  NA(BA, 'getComposedData', function (t) {
    var e,
      r = t.props,
      n = t.item,
      i = t.xAxis,
      o = t.yAxis,
      a = t.xAxisTicks,
      c = t.yAxisTicks,
      u = t.bandSize,
      l = t.dataKey,
      s = t.stackedData,
      f = t.dataStartIndex,
      p = t.displayedData,
      h = t.offset,
      d = r.layout,
      y = s && s.length,
      v = OA.getBaseValue(r, n, i, o),
      m = 'horizontal' === d,
      g = !1,
      b = p.map(function (t, e) {
        var r;
        y
          ? (r = s[f + e])
          : ((r = Wb(t, l)), Array.isArray(r) ? (g = !0) : (r = [v, r]));
        var n = null == r[1] || (y && null == Wb(t, l));
        return m
          ? {
              x: rx({ axis: i, ticks: a, bandSize: u, entry: t, index: e }),
              y: n ? null : o.scale(r[1]),
              value: r,
              payload: t,
            }
          : {
              x: n ? null : i.scale(r[1]),
              y: rx({ axis: o, ticks: c, bandSize: u, entry: t, index: e }),
              value: r,
              payload: t,
            };
      });
    return (
      (e =
        y || g
          ? b.map(function (t) {
              var e = Array.isArray(t.value) ? t.value[0] : null;
              return m
                ? { x: t.x, y: null != e && null != t.y ? o.scale(e) : null }
                : { x: null != e ? i.scale(e) : null, y: t.y };
            })
          : m
          ? o.scale(v)
          : i.scale(v)),
      EA({ points: b, baseLine: e, layout: d, isRange: g }, h)
    );
  }),
  NA(BA, 'renderDotItem', function (t, r) {
    return e.isValidElement(t)
      ? e.cloneElement(t, r)
      : K(t)
      ? t(r)
      : e.createElement(Mw, PA({}, r, { className: 'recharts-area-dot' }));
  });
var RA = function () {
  return null;
};
(RA.displayName = 'XAxis'),
  (RA.defaultProps = {
    allowDecimals: !0,
    hide: !1,
    orientation: 'bottom',
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
    padding: { left: 0, right: 0 },
    allowDataOverflow: !1,
    scale: 'auto',
    reversed: !1,
    allowDuplicatedCategory: !0,
  });
var LA = function () {
  return null;
};
(LA.displayName = 'YAxis'),
  (LA.defaultProps = {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: 'left',
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: 'number',
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: !1,
    scale: 'auto',
    reversed: !1,
  });
var zA = Au,
  $A = qa,
  UA = Ha;
var FA = function (t) {
    return function (e, r, n) {
      var i = Object(e);
      if (!$A(e)) {
        var o = zA(r);
        (e = UA(e)),
          (r = function (t) {
            return o(i[t], t, i);
          });
      }
      var a = t(e, r, n);
      return a > -1 ? i[o ? e[a] : a] : void 0;
    };
  },
  WA = _O;
var qA = Pu,
  XA = Au,
  GA = function (t) {
    var e = WA(t),
      r = e % 1;
    return e == e ? (r ? e - r : e) : 0;
  },
  VA = Math.max;
var HA = FA(function (t, e, r) {
    var n = null == t ? 0 : t.length;
    if (!n) return -1;
    var i = null == r ? 0 : GA(r);
    return i < 0 && (i = VA(n + i, 0)), qA(t, XA(e), i);
  }),
  YA = 'Invariant failed';
function KA(t) {
  var e = t.cx,
    r = t.cy,
    n = t.radius,
    i = t.startAngle,
    o = t.endAngle;
  return {
    points: [mx(e, r, n, i), mx(e, r, n, o)],
    cx: e,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: o,
  };
}
function ZA(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return JA(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return JA(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === r && t.constructor && (r = t.constructor.name);
      if ('Map' === r || 'Set' === r) return Array.from(t);
      if (
        'Arguments' === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return JA(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function JA(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var QA = function (t, e, r, n, i) {
    var o = Lr(t, lj),
      a = Lr(t, vj),
      c = [].concat(ZA(o), ZA(a)),
      u = Lr(t, Sj),
      l = ''.concat(n, 'Id'),
      s = n[0],
      f = e;
    if (
      (c.length &&
        (f = c.reduce(function (t, e) {
          if (
            e.props[l] === r &&
            aS(e.props, 'extendDomain') &&
            hr(e.props[s])
          ) {
            var n = e.props[s];
            return [Math.min(t[0], n), Math.max(t[1], n)];
          }
          return t;
        }, f)),
      u.length)
    ) {
      var p = ''.concat(s, '1'),
        h = ''.concat(s, '2');
      f = u.reduce(function (t, e) {
        if (
          e.props[l] === r &&
          aS(e.props, 'extendDomain') &&
          hr(e.props[p]) &&
          hr(e.props[h])
        ) {
          var n = e.props[p],
            i = e.props[h];
          return [Math.min(t[0], n, i), Math.max(t[1], n, i)];
        }
        return t;
      }, f);
    }
    return (
      i &&
        i.length &&
        (f = i.reduce(function (t, e) {
          return hr(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t;
        }, f)),
      f
    );
  },
  tP = {};
!(function (t) {
  var e = Object.prototype.hasOwnProperty,
    r = '~';
  function n() {}
  function i(t, e, r) {
    (this.fn = t), (this.context = e), (this.once = r || !1);
  }
  function o(t, e, n, o, a) {
    if ('function' != typeof n)
      throw new TypeError('The listener must be a function');
    var c = new i(n, o || t, a),
      u = r ? r + e : e;
    return (
      t._events[u]
        ? t._events[u].fn
          ? (t._events[u] = [t._events[u], c])
          : t._events[u].push(c)
        : ((t._events[u] = c), t._eventsCount++),
      t
    );
  }
  function a(t, e) {
    0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
  }
  function c() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
    (c.prototype.eventNames = function () {
      var t,
        n,
        i = [];
      if (0 === this._eventsCount) return i;
      for (n in (t = this._events)) e.call(t, n) && i.push(r ? n.slice(1) : n);
      return Object.getOwnPropertySymbols
        ? i.concat(Object.getOwnPropertySymbols(t))
        : i;
    }),
    (c.prototype.listeners = function (t) {
      var e = r ? r + t : t,
        n = this._events[e];
      if (!n) return [];
      if (n.fn) return [n.fn];
      for (var i = 0, o = n.length, a = new Array(o); i < o; i++)
        a[i] = n[i].fn;
      return a;
    }),
    (c.prototype.listenerCount = function (t) {
      var e = r ? r + t : t,
        n = this._events[e];
      return n ? (n.fn ? 1 : n.length) : 0;
    }),
    (c.prototype.emit = function (t, e, n, i, o, a) {
      var c = r ? r + t : t;
      if (!this._events[c]) return !1;
      var u,
        l,
        s = this._events[c],
        f = arguments.length;
      if (s.fn) {
        switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
          case 1:
            return s.fn.call(s.context), !0;
          case 2:
            return s.fn.call(s.context, e), !0;
          case 3:
            return s.fn.call(s.context, e, n), !0;
          case 4:
            return s.fn.call(s.context, e, n, i), !0;
          case 5:
            return s.fn.call(s.context, e, n, i, o), !0;
          case 6:
            return s.fn.call(s.context, e, n, i, o, a), !0;
        }
        for (l = 1, u = new Array(f - 1); l < f; l++) u[l - 1] = arguments[l];
        s.fn.apply(s.context, u);
      } else {
        var p,
          h = s.length;
        for (l = 0; l < h; l++)
          switch (
            (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
          ) {
            case 1:
              s[l].fn.call(s[l].context);
              break;
            case 2:
              s[l].fn.call(s[l].context, e);
              break;
            case 3:
              s[l].fn.call(s[l].context, e, n);
              break;
            case 4:
              s[l].fn.call(s[l].context, e, n, i);
              break;
            default:
              if (!u)
                for (p = 1, u = new Array(f - 1); p < f; p++)
                  u[p - 1] = arguments[p];
              s[l].fn.apply(s[l].context, u);
          }
      }
      return !0;
    }),
    (c.prototype.on = function (t, e, r) {
      return o(this, t, e, r, !1);
    }),
    (c.prototype.once = function (t, e, r) {
      return o(this, t, e, r, !0);
    }),
    (c.prototype.removeListener = function (t, e, n, i) {
      var o = r ? r + t : t;
      if (!this._events[o]) return this;
      if (!e) return a(this, o), this;
      var c = this._events[o];
      if (c.fn)
        c.fn !== e || (i && !c.once) || (n && c.context !== n) || a(this, o);
      else {
        for (var u = 0, l = [], s = c.length; u < s; u++)
          (c[u].fn !== e || (i && !c[u].once) || (n && c[u].context !== n)) &&
            l.push(c[u]);
        l.length ? (this._events[o] = 1 === l.length ? l[0] : l) : a(this, o);
      }
      return this;
    }),
    (c.prototype.removeAllListeners = function (t) {
      var e;
      return (
        t
          ? ((e = r ? r + t : t), this._events[e] && a(this, e))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (c.prototype.off = c.prototype.removeListener),
    (c.prototype.addListener = c.prototype.on),
    (c.prefixed = r),
    (c.EventEmitter = c),
    (t.exports = c);
})({
  get exports() {
    return tP;
  },
  set exports(t) {
    tP = t;
  },
});
var eP = new tP(),
  rP = 'recharts.syncMouseEvents';
function nP(t) {
  return (nP =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function iP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, aP(n.key), n);
  }
}
function oP(t, e, r) {
  return (
    (e = aP(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function aP(t) {
  var e = (function (t, e) {
    if ('object' !== nP(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== nP(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === nP(e) ? e : String(e);
}
var cP = (function () {
  function t() {
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, t),
      oP(this, 'activeIndex', 0),
      oP(this, 'coordinateList', []),
      oP(this, 'layout', 'horizontal');
  }
  var e, r, n;
  return (
    (e = t),
    (r = [
      {
        key: 'setDetails',
        value: function (t) {
          var e = t.coordinateList,
            r = void 0 === e ? [] : e,
            n = t.container,
            i = void 0 === n ? null : n,
            o = t.layout,
            a = void 0 === o ? null : o,
            c = t.offset,
            u = void 0 === c ? null : c,
            l = t.mouseHandlerCallback,
            s = void 0 === l ? null : l;
          (this.coordinateList = null != r ? r : this.coordinateList),
            (this.container = null != i ? i : this.container),
            (this.layout = null != a ? a : this.layout),
            (this.offset = null != u ? u : this.offset),
            (this.mouseHandlerCallback =
              null != s ? s : this.mouseHandlerCallback),
            (this.activeIndex = Math.min(
              Math.max(this.activeIndex, 0),
              this.coordinateList.length - 1,
            ));
        },
      },
      {
        key: 'focus',
        value: function () {
          this.spoofMouse();
        },
      },
      {
        key: 'keyboardEvent',
        value: function (t) {
          if (0 !== this.coordinateList.length)
            switch (t.key) {
              case 'ArrowRight':
                if ('horizontal' !== this.layout) return;
                (this.activeIndex = Math.min(
                  this.activeIndex + 1,
                  this.coordinateList.length - 1,
                )),
                  this.spoofMouse();
                break;
              case 'ArrowLeft':
                if ('horizontal' !== this.layout) return;
                (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                  this.spoofMouse();
            }
        },
      },
      {
        key: 'spoofMouse',
        value: function () {
          var t, e;
          if (
            'horizontal' === this.layout &&
            0 !== this.coordinateList.length
          ) {
            var r = this.container.getBoundingClientRect(),
              n = r.x,
              i = r.y,
              o = r.height,
              a = this.coordinateList[this.activeIndex].coordinate,
              c =
                (null === (t = window) || void 0 === t ? void 0 : t.scrollX) ||
                0,
              u =
                (null === (e = window) || void 0 === e ? void 0 : e.scrollY) ||
                0,
              l = n + a + c,
              s = i + this.offset.top + o / 2 + u;
            this.mouseHandlerCallback({ pageX: l, pageY: s });
          }
        },
      },
    ]) && iP(e.prototype, r),
    n && iP(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t
  );
})();
function uP(t, e, r) {
  var n, i, o, a;
  if ('horizontal' === t) (o = n = e.x), (i = r.top), (a = r.top + r.height);
  else if ('vertical' === t)
    (a = i = e.y), (n = r.left), (o = r.left + r.width);
  else if (null != e.cx && null != e.cy) {
    if ('centric' !== t) return KA(e);
    var c = e.cx,
      u = e.cy,
      l = e.innerRadius,
      s = e.outerRadius,
      f = e.angle,
      p = mx(c, u, l, f),
      h = mx(c, u, s, f);
    (n = p.x), (i = p.y), (o = h.x), (a = h.y);
  }
  return [
    { x: n, y: i },
    { x: o, y: a },
  ];
}
var lP = ['item'],
  sP = [
    'children',
    'className',
    'width',
    'height',
    'style',
    'compact',
    'title',
    'desc',
  ];
function fP(t) {
  return (fP =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function pP(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null != r) {
        var n,
          i,
          o,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          if (((o = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (s) {
          (l = !0), (i = s);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return c;
      }
    })(t, e) ||
    wP(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function hP() {
  return (
    (hP = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    hP.apply(this, arguments)
  );
}
function dP(t, e) {
  if (null == t) return {};
  var r,
    n,
    i = (function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
  }
  return i;
}
function yP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, PP(n.key), n);
  }
}
function vP(t, e) {
  return (vP = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
}
function mP(t) {
  var e = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  })();
  return function () {
    var r,
      n = bP(t);
    if (e) {
      var i = bP(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return (function (t, e) {
      if (e && ('object' === fP(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return gP(t);
    })(this, r);
  };
}
function gP(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function bP(t) {
  return (bP = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function xP(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return OP(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    wP(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function wP(t, e) {
  if (t) {
    if ('string' == typeof t) return OP(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? OP(t, e)
        : void 0
    );
  }
}
function OP(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function SP(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function jP(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? SP(Object(r), !0).forEach(function (e) {
          AP(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : SP(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function AP(t, e, r) {
  return (
    (e = PP(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function PP(t) {
  var e = (function (t, e) {
    if ('object' !== fP(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(t, e || 'default');
      if ('object' !== fP(n)) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' === fP(e) ? e : String(e);
}
var kP = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
  EP = { width: '100%', height: '100%' },
  MP = { x: 0, y: 0 },
  _P = function (t, e) {
    var r = e.graphicalItems,
      n = e.dataStartIndex,
      i = e.dataEndIndex,
      o = (null != r ? r : []).reduce(function (t, e) {
        var r = e.props.data;
        return r && r.length ? [].concat(xP(t), xP(r)) : t;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && hr(n) && hr(i)
      ? t.slice(n, i + 1)
      : [];
  };
function TP(t) {
  return 'number' === t ? [0, 'auto'] : void 0;
}
var CP = function (t, e, r, n) {
    var i = t.graphicalItems,
      o = t.tooltipAxis,
      a = _P(e, t);
    return r < 0 || !i || !i.length || r >= a.length
      ? null
      : i.reduce(function (i, c) {
          var u;
          if (c.props.hide) return i;
          var l,
            s = null !== (u = c.props.data) && void 0 !== u ? u : e;
          (s &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
          o.dataKey && !o.allowDuplicatedCategory)
            ? (l = xr(void 0 === s ? a : s, o.dataKey, n))
            : (l = (s && s[r]) || a[r]);
          return l ? [].concat(xP(i), [sx(c, l)]) : i;
        }, []);
  },
  DP = function (t, e, r, n) {
    var i = n || { x: t.chartX, y: t.chartY },
      o = (function (t, e) {
        return 'horizontal' === e
          ? t.x
          : 'vertical' === e
          ? t.y
          : 'centric' === e
          ? t.angle
          : t.radius;
      })(i, r),
      a = t.orderedTooltipTicks,
      c = t.tooltipAxis,
      u = t.tooltipTicks,
      l = (function (t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          o = -1,
          a =
            null !== (e = null == r ? void 0 : r.length) && void 0 !== e
              ? e
              : 0;
        if (a <= 1) return 0;
        if (
          i &&
          'angleAxis' === i.axisType &&
          Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
        )
          for (var c = i.range, u = 0; u < a; u++) {
            var l = u > 0 ? n[u - 1].coordinate : n[a - 1].coordinate,
              s = n[u].coordinate,
              f = u >= a - 1 ? n[0].coordinate : n[u + 1].coordinate,
              p = void 0;
            if (fr(s - l) !== fr(f - s)) {
              var h = [];
              if (fr(f - s) === fr(c[1] - c[0])) {
                p = f;
                var d = s + c[1] - c[0];
                (h[0] = Math.min(d, (d + l) / 2)),
                  (h[1] = Math.max(d, (d + l) / 2));
              } else {
                p = l;
                var y = f + c[1] - c[0];
                (h[0] = Math.min(s, (y + s) / 2)),
                  (h[1] = Math.max(s, (y + s) / 2));
              }
              var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
              if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                o = n[u].index;
                break;
              }
            } else {
              var m = Math.min(l, f),
                g = Math.max(l, f);
              if (t > (m + s) / 2 && t <= (g + s) / 2) {
                o = n[u].index;
                break;
              }
            }
          }
        else
          for (var b = 0; b < a; b++)
            if (
              (0 === b && t <= (r[b].coordinate + r[b + 1].coordinate) / 2) ||
              (b > 0 &&
                b < a - 1 &&
                t > (r[b].coordinate + r[b - 1].coordinate) / 2 &&
                t <= (r[b].coordinate + r[b + 1].coordinate) / 2) ||
              (b === a - 1 && t > (r[b].coordinate + r[b - 1].coordinate) / 2)
            ) {
              o = r[b].index;
              break;
            }
        return o;
      })(o, a, u, c);
    if (l >= 0 && u) {
      var s = u[l] && u[l].value,
        f = CP(t, e, l, s),
        p = (function (t, e, r, n) {
          var i = e.find(function (t) {
            return t && t.index === r;
          });
          if (i) {
            if ('horizontal' === t) return { x: i.coordinate, y: n.y };
            if ('vertical' === t) return { x: n.x, y: i.coordinate };
            if ('centric' === t) {
              var o = i.coordinate,
                a = n.radius;
              return jP(
                jP(jP({}, n), mx(n.cx, n.cy, a, o)),
                {},
                { angle: o, radius: a },
              );
            }
            var c = i.coordinate,
              u = n.angle;
            return jP(
              jP(jP({}, n), mx(n.cx, n.cy, c, u)),
              {},
              { angle: u, radius: c },
            );
          }
          return MP;
        })(r, a, l, i);
      return {
        activeTooltipIndex: l,
        activeLabel: s,
        activePayload: f,
        activeCoordinate: p,
      };
    }
    return null;
  },
  NP = function (t, e) {
    var r = e.axes,
      n = e.graphicalItems,
      i = e.axisType,
      o = e.axisIdKey,
      a = e.stackGroups,
      c = e.dataStartIndex,
      u = e.dataEndIndex,
      l = t.layout,
      s = t.children,
      f = t.stackOffset,
      p = Hb(l, i);
    return r.reduce(function (e, r) {
      var h,
        d = r.props,
        y = d.type,
        v = d.dataKey,
        m = d.allowDataOverflow,
        g = d.allowDuplicatedCategory,
        b = d.scale,
        x = d.ticks,
        w = d.includeHidden,
        O = r.props[o];
      if (e[O]) return e;
      var S,
        j,
        A,
        P = _P(t.data, {
          graphicalItems: n.filter(function (t) {
            return t.props[o] === O;
          }),
          dataStartIndex: c,
          dataEndIndex: u,
        }),
        k = P.length;
      (function (t, e, r) {
        if ('number' === r && !0 === e && Array.isArray(t)) {
          var n = null == t ? void 0 : t[0],
            i = null == t ? void 0 : t[1];
          if (n && i && hr(n) && hr(i)) return !0;
        }
        return !1;
      })(r.props.domain, m, y) &&
        ((S = cx(r.props.domain, null, m)),
        !p || ('number' !== y && 'auto' === b) || (A = qb(P, v, 'category')));
      var E = TP(y);
      if (!S || 0 === S.length) {
        var M,
          _ = null !== (M = r.props.domain) && void 0 !== M ? M : E;
        if (v) {
          if (((S = qb(P, v, y)), 'category' === y && p)) {
            var T = (function (t) {
              if (!Array.isArray(t)) return !1;
              for (var e = t.length, r = {}, n = 0; n < e; n++) {
                if (r[t[n]]) return !0;
                r[t[n]] = !0;
              }
              return !1;
            })(S);
            g && T
              ? ((j = S), (S = NO(0, k)))
              : g ||
                (S = lx(_, S, r).reduce(function (t, e) {
                  return t.indexOf(e) >= 0 ? t : [].concat(xP(t), [e]);
                }, []));
          } else if ('category' === y)
            S = g
              ? S.filter(function (t) {
                  return '' !== t && !Ne(t);
                })
              : lx(_, S, r).reduce(function (t, e) {
                  return t.indexOf(e) >= 0 || '' === e || Ne(e)
                    ? t
                    : [].concat(xP(t), [e]);
                }, []);
          else if ('number' === y) {
            var C = (function (t, e, r, n, i) {
              var o = e
                .map(function (e) {
                  return Gb(t, e, r, i, n);
                })
                .filter(function (t) {
                  return !Ne(t);
                });
              return o && o.length
                ? o.reduce(
                    function (t, e) {
                      return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                    },
                    [1 / 0, -1 / 0],
                  )
                : null;
            })(
              P,
              n.filter(function (t) {
                return t.props[o] === O && (w || !t.props.hide);
              }),
              v,
              i,
              l,
            );
            C && (S = C);
          }
          !p || ('number' !== y && 'auto' === b) || (A = qb(P, v, 'category'));
        } else
          S = p
            ? NO(0, k)
            : a && a[O] && a[O].hasStack && 'number' === y
            ? 'expand' === f
              ? [0, 1]
              : ix(a[O].stackGroups, c, u)
            : Vb(
                P,
                n.filter(function (t) {
                  return t.props[o] === O && (w || !t.props.hide);
                }),
                y,
                l,
                !0,
              );
        if ('number' === y) (S = QA(s, S, O, i, x)), _ && (S = cx(_, S, m));
        else if ('category' === y && _) {
          var D = _;
          S.every(function (t) {
            return D.indexOf(t) >= 0;
          }) && (S = D);
        }
      }
      return jP(
        jP({}, e),
        {},
        AP(
          {},
          O,
          jP(
            jP({}, r.props),
            {},
            {
              axisType: i,
              domain: S,
              categoricalDomain: A,
              duplicateDomain: j,
              originalDomain:
                null !== (h = r.props.domain) && void 0 !== h ? h : E,
              isCategorical: p,
              layout: l,
            },
          ),
        ),
      );
    }, {});
  },
  IP = function (t, e) {
    var r = e.axisType,
      n = void 0 === r ? 'xAxis' : r,
      i = e.AxisComp,
      o = e.graphicalItems,
      a = e.stackGroups,
      c = e.dataStartIndex,
      u = e.dataEndIndex,
      l = t.children,
      s = ''.concat(n, 'Id'),
      f = Lr(l, i),
      p = {};
    return (
      f && f.length
        ? (p = NP(t, {
            axes: f,
            graphicalItems: o,
            axisType: n,
            axisIdKey: s,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u,
          }))
        : o &&
          o.length &&
          (p = (function (t, e) {
            var r = e.graphicalItems,
              n = e.Axis,
              i = e.axisType,
              o = e.axisIdKey,
              a = e.stackGroups,
              c = e.dataStartIndex,
              u = e.dataEndIndex,
              l = t.layout,
              s = t.children,
              f = _P(t.data, {
                graphicalItems: r,
                dataStartIndex: c,
                dataEndIndex: u,
              }),
              p = f.length,
              h = Hb(l, i),
              d = -1;
            return r.reduce(function (t, e) {
              var y,
                v = e.props[o],
                m = TP('number');
              return t[v]
                ? t
                : (d++,
                  h
                    ? (y = NO(0, p))
                    : a && a[v] && a[v].hasStack
                    ? ((y = ix(a[v].stackGroups, c, u)), (y = QA(s, y, v, i)))
                    : ((y = cx(
                        m,
                        Vb(
                          f,
                          r.filter(function (t) {
                            return t.props[o] === v && !t.props.hide;
                          }),
                          'number',
                          l,
                        ),
                        n.defaultProps.allowDataOverflow,
                      )),
                      (y = QA(s, y, v, i))),
                  jP(
                    jP({}, t),
                    {},
                    AP(
                      {},
                      v,
                      jP(
                        jP({ axisType: i }, n.defaultProps),
                        {},
                        {
                          hide: !0,
                          orientation: De(
                            kP,
                            ''.concat(i, '.').concat(d % 2),
                            null,
                          ),
                          domain: y,
                          originalDomain: m,
                          isCategorical: h,
                          layout: l,
                        },
                      ),
                    ),
                  ));
            }, {});
          })(t, {
            Axis: i,
            graphicalItems: o,
            axisType: n,
            axisIdKey: s,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u,
          })),
      p
    );
  },
  BP = function (t) {
    var e = t.children,
      r = t.defaultShowTooltip,
      n = zr(e, JO),
      i = 0,
      o = 0;
    return (
      t.data && 0 !== t.data.length && (o = t.data.length - 1),
      n &&
        n.props &&
        (n.props.startIndex >= 0 && (i = n.props.startIndex),
        n.props.endIndex >= 0 && (o = n.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: i,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: Boolean(r),
      }
    );
  },
  RP = function (t) {
    return 'horizontal' === t
      ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
      : 'vertical' === t
      ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
      : 'centric' === t
      ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
      : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
  },
  LP = function (t, e) {
    var r = t.props,
      n = (t.graphicalItems, t.xAxisMap),
      i = void 0 === n ? {} : n,
      o = t.yAxisMap,
      a = void 0 === o ? {} : o,
      c = r.width,
      u = r.height,
      l = r.children,
      s = r.margin || {},
      f = zr(l, JO),
      p = zr(l, al),
      h = Object.keys(a).reduce(
        function (t, e) {
          var r = a[e],
            n = r.orientation;
          return r.mirror || r.hide
            ? t
            : jP(jP({}, t), {}, AP({}, n, t[n] + r.width));
        },
        { left: s.left || 0, right: s.right || 0 },
      ),
      d = Object.keys(i).reduce(
        function (t, e) {
          var r = i[e],
            n = r.orientation;
          return r.mirror || r.hide
            ? t
            : jP(jP({}, t), {}, AP({}, n, De(t, ''.concat(n)) + r.height));
        },
        { top: s.top || 0, bottom: s.bottom || 0 },
      ),
      y = jP(jP({}, d), h),
      v = y.bottom;
    f && (y.bottom += f.props.height || JO.defaultProps.height),
      p &&
        e &&
        (y = (function (t, e, r, n) {
          var i = r.children,
            o = r.width,
            a = r.margin,
            c = o - (a.left || 0) - (a.right || 0),
            u = Bb({ children: i, legendWidth: c });
          if (u) {
            var l = n || {},
              s = l.width,
              f = l.height,
              p = u.align,
              h = u.verticalAlign,
              d = u.layout;
            if (
              ('vertical' === d || ('horizontal' === d && 'middle' === h)) &&
              'center' !== p &&
              hr(t[p])
            )
              return zb(zb({}, t), {}, $b({}, p, t[p] + (s || 0)));
            if (
              ('horizontal' === d || ('vertical' === d && 'center' === p)) &&
              'middle' !== h &&
              hr(t[h])
            )
              return zb(zb({}, t), {}, $b({}, h, t[h] + (f || 0)));
          }
          return t;
        })(y, 0, r, e));
    var m = c - y.left - y.right,
      g = u - y.top - y.bottom;
    return jP(
      jP({ brushBottom: v }, y),
      {},
      { width: Math.max(m, 0), height: Math.max(g, 0) },
    );
  },
  zP = function (r) {
    var n,
      i = r.chartName,
      o = r.GraphicalChild,
      a = r.defaultTooltipEventType,
      c = void 0 === a ? 'axis' : a,
      u = r.validateTooltipEventTypes,
      l = void 0 === u ? ['axis'] : u,
      s = r.axisComponents,
      f = r.legendContent,
      p = r.formatAxisMap,
      h = r.defaultProps,
      d = function (t, e) {
        var r = e.graphicalItems,
          n = e.stackGroups,
          i = e.offset,
          o = e.updateId,
          a = e.dataStartIndex,
          c = e.dataEndIndex,
          u = t.barSize,
          l = t.layout,
          f = t.barGap,
          p = t.barCategoryGap,
          h = t.maxBarSize,
          d = RP(l),
          y = d.numericAxisName,
          v = d.cateAxisName,
          m = (function (t) {
            return (
              !(!t || !t.length) &&
              t.some(function (t) {
                var e = Nr(t && t.type);
                return e && e.indexOf('Bar') >= 0;
              })
            );
          })(r),
          g =
            m &&
            (function (t) {
              var e = t.barSize,
                r = t.stackGroups,
                n = void 0 === r ? {} : r;
              if (!n) return {};
              for (
                var i = {}, o = Object.keys(n), a = 0, c = o.length;
                a < c;
                a++
              )
                for (
                  var u = n[o[a]].stackGroups,
                    l = Object.keys(u),
                    s = 0,
                    f = l.length;
                  s < f;
                  s++
                ) {
                  var p = u[l[s]],
                    h = p.items,
                    d = p.cateAxisId,
                    y = h.filter(function (t) {
                      return Nr(t.type).indexOf('Bar') >= 0;
                    });
                  if (y && y.length) {
                    var v = y[0].props.barSize,
                      m = y[0].props[d];
                    i[m] || (i[m] = []),
                      i[m].push({
                        item: y[0],
                        stackList: y.slice(1),
                        barSize: Ne(v) ? e : v,
                      });
                  }
                }
              return i;
            })({ barSize: u, stackGroups: n }),
          b = [];
        return (
          r.forEach(function (r, u) {
            var d = _P(t.data, {
                graphicalItems: [r],
                dataStartIndex: a,
                dataEndIndex: c,
              }),
              m = r.props,
              x = m.dataKey,
              w = m.maxBarSize,
              O = r.props[''.concat(y, 'Id')],
              S = r.props[''.concat(v, 'Id')],
              j = s.reduce(function (t, n) {
                var i,
                  o = e[''.concat(n.axisType, 'Map')],
                  a = r.props[''.concat(n.axisType, 'Id')];
                (o && o[a]) ||
                  'zAxis' === n.axisType ||
                  (function (t, e) {
                    if (!t) throw new Error(YA);
                  })(!1);
                var c = o[a];
                return jP(
                  jP({}, t),
                  {},
                  (AP((i = {}), n.axisType, c),
                  AP(i, ''.concat(n.axisType, 'Ticks'), Kb(c)),
                  i),
                );
              }, {}),
              A = j[v],
              P = j[''.concat(v, 'Ticks')],
              k =
                n &&
                n[O] &&
                n[O].hasStack &&
                (function (t, e) {
                  var r = t.props.stackId;
                  if (dr(r)) {
                    var n = e[r];
                    if (n) {
                      var i = n.items.indexOf(t);
                      return i >= 0 ? n.stackedData[i] : null;
                    }
                  }
                  return null;
                })(r, n[O].stackGroups),
              E = Nr(r.type).indexOf('Bar') >= 0,
              M = ux(A, P),
              _ = [];
            if (E) {
              var T,
                C,
                D = Ne(w) ? h : w,
                N =
                  null !==
                    (T = null !== (C = ux(A, P, !0)) && void 0 !== C ? C : D) &&
                  void 0 !== T
                    ? T
                    : 0;
              (_ = (function (t) {
                var e = t.barGap,
                  r = t.barCategoryGap,
                  n = t.bandSize,
                  i = t.sizeList,
                  o = void 0 === i ? [] : i,
                  a = t.maxBarSize,
                  c = o.length;
                if (c < 1) return null;
                var u,
                  l = mr(e, n, 0, !0),
                  s = [];
                if (o[0].barSize === +o[0].barSize) {
                  var f = !1,
                    p = n / c,
                    h = o.reduce(function (t, e) {
                      return t + e.barSize || 0;
                    }, 0);
                  (h += (c - 1) * l) >= n && ((h -= (c - 1) * l), (l = 0)),
                    h >= n && p > 0 && ((f = !0), (h = c * (p *= 0.9)));
                  var d = { offset: (((n - h) / 2) >> 0) - l, size: 0 };
                  u = o.reduce(function (t, e) {
                    var r = {
                        item: e.item,
                        position: {
                          offset: d.offset + d.size + l,
                          size: f ? p : e.barSize,
                        },
                      },
                      n = [].concat(Ub(t), [r]);
                    return (
                      (d = n[n.length - 1].position),
                      e.stackList &&
                        e.stackList.length &&
                        e.stackList.forEach(function (t) {
                          n.push({ item: t, position: d });
                        }),
                      n
                    );
                  }, s);
                } else {
                  var y = mr(r, n, 0, !0);
                  n - 2 * y - (c - 1) * l <= 0 && (l = 0);
                  var v = (n - 2 * y - (c - 1) * l) / c;
                  v > 1 && (v >>= 0);
                  var m = a === +a ? Math.min(v, a) : v;
                  u = o.reduce(function (t, e, r) {
                    var n = [].concat(Ub(t), [
                      {
                        item: e.item,
                        position: {
                          offset: y + (v + l) * r + (v - m) / 2,
                          size: m,
                        },
                      },
                    ]);
                    return (
                      e.stackList &&
                        e.stackList.length &&
                        e.stackList.forEach(function (t) {
                          n.push({
                            item: t,
                            position: n[n.length - 1].position,
                          });
                        }),
                      n
                    );
                  }, s);
                }
                return u;
              })({
                barGap: f,
                barCategoryGap: p,
                bandSize: N !== M ? N : M,
                sizeList: g[S],
                maxBarSize: D,
              })),
                N !== M &&
                  (_ = _.map(function (t) {
                    return jP(
                      jP({}, t),
                      {},
                      {
                        position: jP(
                          jP({}, t.position),
                          {},
                          { offset: t.position.offset - N / 2 },
                        ),
                      },
                    );
                  }));
            }
            var I,
              B,
              R,
              L = r && r.type && r.type.getComposedData;
            L &&
              b.push({
                props: jP(
                  jP(
                    {},
                    L(
                      jP(
                        jP({}, j),
                        {},
                        {
                          displayedData: d,
                          props: t,
                          dataKey: x,
                          item: r,
                          bandSize: M,
                          barPosition: _,
                          offset: i,
                          stackedData: k,
                          layout: l,
                          dataStartIndex: a,
                          dataEndIndex: c,
                        },
                      ),
                    ),
                  ),
                  {},
                  ((I = { key: r.key || 'item-'.concat(u) }),
                  AP(I, y, j[y]),
                  AP(I, v, j[v]),
                  AP(I, 'animationId', o),
                  I),
                ),
                childIndex: ((B = r), (R = t.children), Rr(R).indexOf(B)),
                item: r,
              });
          }),
          b
        );
      },
      y = function (t, e) {
        var r = t.props,
          n = t.dataStartIndex,
          a = t.dataEndIndex,
          c = t.updateId;
        if (!$r({ props: r })) return null;
        var u = r.children,
          l = r.layout,
          f = r.stackOffset,
          h = r.data,
          y = r.reverseStackOrder,
          v = RP(l),
          m = v.numericAxisName,
          g = v.cateAxisName,
          b = Lr(u, o),
          x = (function (t, e, r, n, i, o) {
            if (!t) return null;
            var a = (o ? e.reverse() : e).reduce(function (t, e) {
              var i = e.props,
                o = i.stackId;
              if (i.hide) return t;
              var a = e.props[r],
                c = t[a] || { hasStack: !1, stackGroups: {} };
              if (dr(o)) {
                var u = c.stackGroups[o] || {
                  numericAxisId: r,
                  cateAxisId: n,
                  items: [],
                };
                u.items.push(e), (c.hasStack = !0), (c.stackGroups[o] = u);
              } else c.stackGroups[vr('_stackId_')] = { numericAxisId: r, cateAxisId: n, items: [e] };
              return zb(zb({}, t), {}, $b({}, a, c));
            }, {});
            return Object.keys(a).reduce(function (e, o) {
              var c = a[o];
              return (
                c.hasStack &&
                  (c.stackGroups = Object.keys(c.stackGroups).reduce(function (
                    e,
                    o,
                  ) {
                    var a = c.stackGroups[o];
                    return zb(
                      zb({}, e),
                      {},
                      $b({}, o, {
                        numericAxisId: r,
                        cateAxisId: n,
                        items: a.items,
                        stackedData: ex(t, a.items, i),
                      }),
                    );
                  },
                  {})),
                zb(zb({}, e), {}, $b({}, o, c))
              );
            }, {});
          })(h, b, ''.concat(m, 'Id'), ''.concat(g, 'Id'), f, y),
          w = s.reduce(function (t, e) {
            var i = ''.concat(e.axisType, 'Map');
            return jP(
              jP({}, t),
              {},
              AP(
                {},
                i,
                IP(
                  r,
                  jP(
                    jP({}, e),
                    {},
                    {
                      graphicalItems: b,
                      stackGroups: e.axisType === m && x,
                      dataStartIndex: n,
                      dataEndIndex: a,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          O = LP(
            jP(jP({}, w), {}, { props: r, graphicalItems: b }),
            null == e ? void 0 : e.legendBBox,
          );
        Object.keys(w).forEach(function (t) {
          w[t] = p(r, w[t], O, t.replace('Map', ''), i);
        });
        var S,
          j,
          A = w[''.concat(g, 'Map')],
          P =
            ((S = gr(A)),
            {
              tooltipTicks: (j = Kb(S, !1, !0)),
              orderedTooltipTicks: Zl(j, function (t) {
                return t.coordinate;
              }),
              tooltipAxis: S,
              tooltipAxisBandSize: ux(S, j),
            }),
          k = d(
            r,
            jP(
              jP({}, w),
              {},
              {
                dataStartIndex: n,
                dataEndIndex: a,
                updateId: c,
                graphicalItems: b,
                stackGroups: x,
                offset: O,
              },
            ),
          );
        return jP(
          jP(
            {
              formattedGraphicalItems: k,
              graphicalItems: b,
              offset: O,
              stackGroups: x,
            },
            P,
          ),
          w,
        );
      };
    return (
      (n = (function (r) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e && vP(t, e);
        })(s, t.Component);
        var n,
          o,
          a,
          u = mP(s);
        function s(e) {
          var r, n, o;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            AP(
              gP((o = u.call(this, e))),
              'eventEmitterSymbol',
              Symbol('rechartsEventEmitter'),
            ),
            AP(gP(o), 'accessibilityManager', new cP()),
            AP(gP(o), 'handleLegendBBoxUpdate', function (t) {
              if (t) {
                var e = o.state,
                  r = e.dataStartIndex,
                  n = e.dataEndIndex,
                  i = e.updateId;
                o.setState(
                  jP(
                    { legendBBox: t },
                    y(
                      {
                        props: o.props,
                        dataStartIndex: r,
                        dataEndIndex: n,
                        updateId: i,
                      },
                      jP(jP({}, o.state), {}, { legendBBox: t }),
                    ),
                  ),
                );
              }
            }),
            AP(gP(o), 'handleReceiveSyncEvent', function (t, e, r) {
              if (o.props.syncId === t) {
                if (
                  r === o.eventEmitterSymbol &&
                  'function' != typeof o.props.syncMethod
                )
                  return;
                o.applySyncEvent(e);
              }
            }),
            AP(gP(o), 'handleBrushChange', function (t) {
              var e = t.startIndex,
                r = t.endIndex;
              if (e !== o.state.dataStartIndex || r !== o.state.dataEndIndex) {
                var n = o.state.updateId;
                o.setState(function () {
                  return jP(
                    { dataStartIndex: e, dataEndIndex: r },
                    y(
                      {
                        props: o.props,
                        dataStartIndex: e,
                        dataEndIndex: r,
                        updateId: n,
                      },
                      o.state,
                    ),
                  );
                }),
                  o.triggerSyncEvent({ dataStartIndex: e, dataEndIndex: r });
              }
            }),
            AP(gP(o), 'handleMouseEnter', function (t) {
              var e = o.getMouseInfo(t);
              if (e) {
                var r = jP(jP({}, e), {}, { isTooltipActive: !0 });
                o.setState(r), o.triggerSyncEvent(r);
                var n = o.props.onMouseEnter;
                K(n) && n(r, t);
              }
            }),
            AP(gP(o), 'triggeredAfterMouseMove', function (t) {
              var e = o.getMouseInfo(t),
                r = e
                  ? jP(jP({}, e), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              o.setState(r), o.triggerSyncEvent(r);
              var n = o.props.onMouseMove;
              K(n) && n(r, t);
            }),
            AP(gP(o), 'handleItemMouseEnter', function (t) {
              o.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: t,
                  activePayload: t.tooltipPayload,
                  activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy },
                };
              });
            }),
            AP(gP(o), 'handleItemMouseLeave', function () {
              o.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            AP(gP(o), 'handleMouseMove', function (t) {
              t.persist(), o.throttleTriggeredAfterMouseMove(t);
            }),
            AP(gP(o), 'handleMouseLeave', function (t) {
              var e = { isTooltipActive: !1 };
              o.setState(e), o.triggerSyncEvent(e);
              var r = o.props.onMouseLeave;
              K(r) && r(e, t);
            }),
            AP(gP(o), 'handleOuterEvent', function (t) {
              var e,
                r = Vr(t),
                n = De(o.props, ''.concat(r));
              r &&
                K(n) &&
                n(
                  null !==
                    (e = /.*touch.*/i.test(r)
                      ? o.getMouseInfo(t.changedTouches[0])
                      : o.getMouseInfo(t)) && void 0 !== e
                    ? e
                    : {},
                  t,
                );
            }),
            AP(gP(o), 'handleClick', function (t) {
              var e = o.getMouseInfo(t);
              if (e) {
                var r = jP(jP({}, e), {}, { isTooltipActive: !0 });
                o.setState(r), o.triggerSyncEvent(r);
                var n = o.props.onClick;
                K(n) && n(r, t);
              }
            }),
            AP(gP(o), 'handleMouseDown', function (t) {
              var e = o.props.onMouseDown;
              K(e) && e(o.getMouseInfo(t), t);
            }),
            AP(gP(o), 'handleMouseUp', function (t) {
              var e = o.props.onMouseUp;
              K(e) && e(o.getMouseInfo(t), t);
            }),
            AP(gP(o), 'handleTouchMove', function (t) {
              null != t.changedTouches &&
                t.changedTouches.length > 0 &&
                o.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
            }),
            AP(gP(o), 'handleTouchStart', function (t) {
              null != t.changedTouches &&
                t.changedTouches.length > 0 &&
                o.handleMouseDown(t.changedTouches[0]);
            }),
            AP(gP(o), 'handleTouchEnd', function (t) {
              null != t.changedTouches &&
                t.changedTouches.length > 0 &&
                o.handleMouseUp(t.changedTouches[0]);
            }),
            AP(gP(o), 'triggerSyncEvent', function (t) {
              void 0 !== o.props.syncId &&
                eP.emit(rP, o.props.syncId, t, o.eventEmitterSymbol);
            }),
            AP(gP(o), 'applySyncEvent', function (t) {
              var e = o.props,
                r = e.layout,
                n = e.syncMethod,
                i = o.state.updateId,
                a = t.dataStartIndex,
                c = t.dataEndIndex;
              if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                o.setState(
                  jP(
                    { dataStartIndex: a, dataEndIndex: c },
                    y(
                      {
                        props: o.props,
                        dataStartIndex: a,
                        dataEndIndex: c,
                        updateId: i,
                      },
                      o.state,
                    ),
                  ),
                );
              else if (void 0 !== t.activeTooltipIndex) {
                var u = t.chartX,
                  l = t.chartY,
                  s = t.activeTooltipIndex,
                  f = o.state,
                  p = f.offset,
                  h = f.tooltipTicks;
                if (!p) return;
                if ('function' == typeof n) s = n(h, t);
                else if ('value' === n) {
                  s = -1;
                  for (var d = 0; d < h.length; d++)
                    if (h[d].value === t.activeLabel) {
                      s = d;
                      break;
                    }
                }
                var v = jP(jP({}, p), {}, { x: p.left, y: p.top }),
                  m = Math.min(u, v.x + v.width),
                  g = Math.min(l, v.y + v.height),
                  b = h[s] && h[s].value,
                  x = CP(o.state, o.props.data, s),
                  w = h[s]
                    ? {
                        x: 'horizontal' === r ? h[s].coordinate : m,
                        y: 'horizontal' === r ? g : h[s].coordinate,
                      }
                    : MP;
                o.setState(
                  jP(
                    jP({}, t),
                    {},
                    {
                      activeLabel: b,
                      activeCoordinate: w,
                      activePayload: x,
                      activeTooltipIndex: s,
                    },
                  ),
                );
              } else o.setState(t);
            }),
            AP(gP(o), 'verticalCoordinatesGenerator', function (t, e) {
              var r = t.xAxis,
                n = t.width,
                i = t.height,
                o = t.offset;
              return Yb(
                _j(
                  jP(
                    jP(jP({}, Xj.defaultProps), r),
                    {},
                    {
                      ticks: Kb(r, !0),
                      viewBox: { x: 0, y: 0, width: n, height: i },
                    },
                  ),
                ),
                o.left,
                o.left + o.width,
                e,
              );
            }),
            AP(gP(o), 'horizontalCoordinatesGenerator', function (t, e) {
              var r = t.yAxis,
                n = t.width,
                i = t.height,
                o = t.offset;
              return Yb(
                _j(
                  jP(
                    jP(jP({}, Xj.defaultProps), r),
                    {},
                    {
                      ticks: Kb(r, !0),
                      viewBox: { x: 0, y: 0, width: n, height: i },
                    },
                  ),
                ),
                o.top,
                o.top + o.height,
                e,
              );
            }),
            AP(gP(o), 'axesTicksGenerator', function (t) {
              return Kb(t, !0);
            }),
            AP(gP(o), 'renderCursor', function (e) {
              var r,
                n = o.state,
                a = n.isTooltipActive,
                c = n.activeCoordinate,
                u = n.activePayload,
                l = n.offset,
                s = n.activeTooltipIndex,
                f = n.tooltipAxisBandSize,
                p = o.getTooltipEventType(),
                h = null !== (r = e.props.active) && void 0 !== r ? r : a;
              if (
                !e ||
                !e.props.cursor ||
                !h ||
                !c ||
                ('ScatterChart' !== i && 'axis' !== p)
              )
                return null;
              var d,
                y = o.props.layout,
                v = vw;
              if ('ScatterChart' === i) (d = c), (v = Rw);
              else if ('BarChart' === i)
                (d = (function (t, e, r, n) {
                  var i = n / 2;
                  return {
                    stroke: 'none',
                    fill: '#ccc',
                    x: 'horizontal' === t ? e.x - i : r.left + 0.5,
                    y: 'horizontal' === t ? r.top + 0.5 : e.y - i,
                    width: 'horizontal' === t ? n : r.width - 1,
                    height: 'horizontal' === t ? r.height - 1 : n,
                  };
                })(y, c, l, f)),
                  (v = kw);
              else if ('radial' === y) {
                var m = KA(c),
                  g = m.cx,
                  b = m.cy,
                  x = m.radius;
                (d = {
                  cx: g,
                  cy: b,
                  startAngle: m.startAngle,
                  endAngle: m.endAngle,
                  innerRadius: x,
                  outerRadius: x,
                }),
                  (v = ow);
              } else (d = { points: uP(y, c, l) }), (v = vw);
              var w = e.key || '_recharts-cursor',
                O = jP(
                  jP(
                    jP(jP({ stroke: '#ccc', pointerEvents: 'none' }, l), d),
                    Wr(e.props.cursor),
                  ),
                  {},
                  {
                    payload: u,
                    payloadIndex: s,
                    key: w,
                    className: 'recharts-tooltip-cursor',
                  },
                );
              return t.isValidElement(e.props.cursor)
                ? t.cloneElement(e.props.cursor, O)
                : t.createElement(v, O);
            }),
            AP(gP(o), 'renderPolarAxis', function (e, r, n) {
              var i = De(e, 'type.axisType'),
                a = De(o.state, ''.concat(i, 'Map')),
                c = a && a[e.props[''.concat(i, 'Id')]];
              return t.cloneElement(
                e,
                jP(
                  jP({}, c),
                  {},
                  {
                    className: i,
                    key: e.key || ''.concat(r, '-').concat(n),
                    ticks: Kb(c, !0),
                  },
                ),
              );
            }),
            AP(gP(o), 'renderXAxis', function (t, e, r) {
              var n = o.state.xAxisMap[t.props.xAxisId];
              return o.renderAxis(n, t, e, r);
            }),
            AP(gP(o), 'renderYAxis', function (t, e, r) {
              var n = o.state.yAxisMap[t.props.yAxisId];
              return o.renderAxis(n, t, e, r);
            }),
            AP(gP(o), 'renderGrid', function (e) {
              var r = o.state,
                n = r.xAxisMap,
                i = r.yAxisMap,
                a = r.offset,
                c = o.props,
                u = c.width,
                l = c.height,
                s = gr(n),
                f =
                  HA(i, function (t) {
                    return gS(t.domain, Number.isFinite);
                  }) || gr(i),
                p = e.props || {};
              return t.cloneElement(e, {
                key: e.key || 'grid',
                x: hr(p.x) ? p.x : a.left,
                y: hr(p.y) ? p.y : a.top,
                width: hr(p.width) ? p.width : a.width,
                height: hr(p.height) ? p.height : a.height,
                xAxis: s,
                yAxis: f,
                offset: a,
                chartWidth: u,
                chartHeight: l,
                verticalCoordinatesGenerator:
                  p.verticalCoordinatesGenerator ||
                  o.verticalCoordinatesGenerator,
                horizontalCoordinatesGenerator:
                  p.horizontalCoordinatesGenerator ||
                  o.horizontalCoordinatesGenerator,
              });
            }),
            AP(gP(o), 'renderPolarGrid', function (e) {
              var r = e.props,
                n = r.radialLines,
                i = r.polarAngles,
                a = r.polarRadius,
                c = o.state,
                u = c.radiusAxisMap,
                l = c.angleAxisMap,
                s = gr(u),
                f = gr(l),
                p = f.cx,
                h = f.cy,
                d = f.innerRadius,
                y = f.outerRadius;
              return t.cloneElement(e, {
                polarAngles: Array.isArray(i)
                  ? i
                  : Kb(f, !0).map(function (t) {
                      return t.coordinate;
                    }),
                polarRadius: Array.isArray(a)
                  ? a
                  : Kb(s, !0).map(function (t) {
                      return t.coordinate;
                    }),
                cx: p,
                cy: h,
                innerRadius: d,
                outerRadius: y,
                key: e.key || 'polar-grid',
                radialLines: n,
              });
            }),
            AP(gP(o), 'renderLegend', function () {
              var e = o.state.formattedGraphicalItems,
                r = o.props,
                n = r.children,
                i = r.width,
                a = r.height,
                c = o.props.margin || {},
                u = i - (c.left || 0) - (c.right || 0),
                l = Bb({
                  children: n,
                  formattedGraphicalItems: e,
                  legendWidth: u,
                  legendContent: f,
                });
              if (!l) return null;
              var s = l.item,
                p = dP(l, lP);
              return t.cloneElement(
                s,
                jP(
                  jP({}, p),
                  {},
                  {
                    chartWidth: i,
                    chartHeight: a,
                    margin: c,
                    onBBoxUpdate: o.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            AP(gP(o), 'renderTooltip', function () {
              var e,
                r = zr(o.props.children, gp);
              if (!r) return null;
              var n = o.state,
                i = n.isTooltipActive,
                a = n.activeCoordinate,
                c = n.activePayload,
                u = n.activeLabel,
                l = n.offset,
                s = null !== (e = r.props.active) && void 0 !== e ? e : i;
              return t.cloneElement(r, {
                viewBox: jP(jP({}, l), {}, { x: l.left, y: l.top }),
                active: s,
                label: u,
                payload: s ? c : [],
                coordinate: a,
              });
            }),
            AP(gP(o), 'renderBrush', function (e) {
              var r = o.props,
                n = r.margin,
                i = r.data,
                a = o.state,
                c = a.offset,
                u = a.dataStartIndex,
                l = a.dataEndIndex,
                s = a.updateId;
              return t.cloneElement(e, {
                key: e.key || '_recharts-brush',
                onChange: Jb(o.handleBrushChange, e.props.onChange),
                data: i,
                x: hr(e.props.x) ? e.props.x : c.left,
                y: hr(e.props.y)
                  ? e.props.y
                  : c.top + c.height + c.brushBottom - (n.bottom || 0),
                width: hr(e.props.width) ? e.props.width : c.width,
                startIndex: u,
                endIndex: l,
                updateId: 'brush-'.concat(s),
              });
            }),
            AP(gP(o), 'renderReferenceElement', function (e, r, n) {
              if (!e) return null;
              var i = gP(o).clipPathId,
                a = o.state,
                c = a.xAxisMap,
                u = a.yAxisMap,
                l = a.offset,
                s = e.props,
                f = s.xAxisId,
                p = s.yAxisId;
              return t.cloneElement(e, {
                key: e.key || ''.concat(r, '-').concat(n),
                xAxis: c[f],
                yAxis: u[p],
                viewBox: {
                  x: l.left,
                  y: l.top,
                  width: l.width,
                  height: l.height,
                },
                clipPathId: i,
              });
            }),
            AP(gP(o), 'renderActivePoints', function (t) {
              var e = t.item,
                r = t.activePoint,
                n = t.basePoint,
                i = t.childIndex,
                o = t.isRange,
                a = [],
                c = e.props.key,
                u = e.item.props,
                l = u.activeDot,
                f = jP(
                  jP(
                    {
                      index: i,
                      dataKey: u.dataKey,
                      cx: r.x,
                      cy: r.y,
                      r: 4,
                      fill: Xb(e.item),
                      strokeWidth: 2,
                      stroke: '#fff',
                      payload: r.payload,
                      value: r.value,
                      key: ''.concat(c, '-activePoint-').concat(i),
                    },
                    Wr(l),
                  ),
                  kr(l),
                );
              return (
                a.push(s.renderActiveDot(l, f)),
                n
                  ? a.push(
                      s.renderActiveDot(
                        l,
                        jP(
                          jP({}, f),
                          {},
                          {
                            cx: n.x,
                            cy: n.y,
                            key: ''.concat(c, '-basePoint-').concat(i),
                          },
                        ),
                      ),
                    )
                  : o && a.push(null),
                a
              );
            }),
            AP(gP(o), 'renderGraphicChild', function (e, r, n) {
              var i = o.filterFormatItem(e, r, n);
              if (!i) return null;
              var a = o.getTooltipEventType(),
                c = o.state,
                u = c.isTooltipActive,
                l = c.tooltipAxis,
                s = c.activeTooltipIndex,
                f = c.activeLabel,
                p = zr(o.props.children, gp),
                h = i.props,
                d = h.points,
                y = h.isRange,
                v = h.baseLine,
                m = i.item.props,
                g = m.activeDot,
                b = m.hide,
                x = m.activeBar,
                w = m.activeShape,
                O = Boolean(!b && u && p && (g || x || w)),
                S = {};
              'axis' !== a && p && 'click' === p.props.trigger
                ? (S = { onClick: Jb(o.handleItemMouseEnter, e.props.onClick) })
                : 'axis' !== a &&
                  (S = {
                    onMouseLeave: Jb(
                      o.handleItemMouseLeave,
                      e.props.onMouseLeave,
                    ),
                    onMouseEnter: Jb(
                      o.handleItemMouseEnter,
                      e.props.onMouseEnter,
                    ),
                  });
              var j = t.cloneElement(e, jP(jP({}, i.props), S));
              if (O) {
                if (!(s >= 0)) {
                  var A,
                    P = (
                      null !== (A = o.getItemByXY(o.state.activeCoordinate)) &&
                      void 0 !== A
                        ? A
                        : { graphicalItem: j }
                    ).graphicalItem,
                    k = P.item,
                    E = void 0 === k ? e : k,
                    M = P.childIndex,
                    _ = jP(jP(jP({}, i.props), S), {}, { activeIndex: M });
                  return [t.cloneElement(E, _), null, null];
                }
                var T, C;
                if (l.dataKey && !l.allowDuplicatedCategory) {
                  var D =
                    'function' == typeof l.dataKey
                      ? function (t) {
                          return 'function' == typeof l.dataKey
                            ? l.dataKey(t.payload)
                            : null;
                        }
                      : 'payload.'.concat(l.dataKey.toString());
                  (T = xr(d, D, f)), (C = y && v && xr(v, D, f));
                } else (T = null == d ? void 0 : d[s]), (C = y && v && v[s]);
                if (w || x) {
                  var N =
                    void 0 !== e.props.activeIndex ? e.props.activeIndex : s;
                  return [
                    t.cloneElement(
                      e,
                      jP(jP(jP({}, i.props), S), {}, { activeIndex: N }),
                    ),
                    null,
                    null,
                  ];
                }
                if (!Ne(T))
                  return [j].concat(
                    xP(
                      o.renderActivePoints({
                        item: i,
                        activePoint: T,
                        basePoint: C,
                        childIndex: s,
                        isRange: y,
                      }),
                    ),
                  );
              }
              return y ? [j, null, null] : [j, null];
            }),
            AP(gP(o), 'renderCustomized', function (e, r, n) {
              return t.cloneElement(
                e,
                jP(
                  jP({ key: 'recharts-customized-'.concat(n) }, o.props),
                  o.state,
                ),
              );
            }),
            AP(gP(o), 'renderMap', {
              CartesianGrid: { handler: o.renderGrid, once: !0 },
              ReferenceArea: { handler: o.renderReferenceElement },
              ReferenceLine: { handler: o.renderReferenceElement },
              ReferenceDot: { handler: o.renderReferenceElement },
              XAxis: { handler: o.renderXAxis },
              YAxis: { handler: o.renderYAxis },
              Brush: { handler: o.renderBrush, once: !0 },
              Bar: { handler: o.renderGraphicChild },
              Line: { handler: o.renderGraphicChild },
              Area: { handler: o.renderGraphicChild },
              Radar: { handler: o.renderGraphicChild },
              RadialBar: { handler: o.renderGraphicChild },
              Scatter: { handler: o.renderGraphicChild },
              Pie: { handler: o.renderGraphicChild },
              Funnel: { handler: o.renderGraphicChild },
              Tooltip: { handler: o.renderCursor, once: !0 },
              PolarGrid: { handler: o.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: o.renderPolarAxis },
              PolarRadiusAxis: { handler: o.renderPolarAxis },
              Customized: { handler: o.renderCustomized },
            }),
            (o.clipPathId = ''.concat(
              null !== (r = e.id) && void 0 !== r ? r : vr('recharts'),
              '-clip',
            )),
            (o.throttleTriggeredAfterMouseMove = Up(
              o.triggeredAfterMouseMove,
              null !== (n = e.throttleDelay) && void 0 !== n ? n : 1e3 / 60,
            )),
            (o.state = {}),
            o
          );
        }
        return (
          (n = s),
          (o = [
            {
              key: 'componentDidMount',
              value: function () {
                var t, e;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        null !== (t = this.props.margin.left) && void 0 !== t
                          ? t
                          : 0,
                      top:
                        null !== (e = this.props.margin.top) && void 0 !== e
                          ? e
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  });
              },
            },
            {
              key: 'getSnapshotBeforeUpdate',
              value: function (t, e) {
                return this.props.accessibilityLayer
                  ? (this.state.tooltipTicks !== e.tooltipTicks &&
                      this.accessibilityManager.setDetails({
                        coordinateList: this.state.tooltipTicks,
                      }),
                    this.props.layout !== t.layout &&
                      this.accessibilityManager.setDetails({
                        layout: this.props.layout,
                      }),
                    this.props.margin !== t.margin &&
                      this.accessibilityManager.setDetails({
                        offset: {
                          left:
                            null !== (r = this.props.margin.left) &&
                            void 0 !== r
                              ? r
                              : 0,
                          top:
                            null !== (n = this.props.margin.top) && void 0 !== n
                              ? n
                              : 0,
                        },
                      }),
                    null)
                  : null;
                var r, n;
              },
            },
            { key: 'componentDidUpdate', value: function () {} },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: 'getTooltipEventType',
              value: function () {
                var t = zr(this.props.children, gp);
                if (t && 'boolean' == typeof t.props.shared) {
                  var e = t.props.shared ? 'axis' : 'item';
                  return l.indexOf(e) >= 0 ? e : c;
                }
                return c;
              },
            },
            {
              key: 'getMouseInfo',
              value: function (t) {
                if (!this.container) return null;
                var e,
                  r = this.container,
                  n = r.getBoundingClientRect(),
                  i = {
                    top:
                      (e = n).top +
                      window.scrollY -
                      document.documentElement.clientTop,
                    left:
                      e.left +
                      window.scrollX -
                      document.documentElement.clientLeft,
                  },
                  o = {
                    chartX: Math.round(t.pageX - i.left),
                    chartY: Math.round(t.pageY - i.top),
                  },
                  a = n.width / r.offsetWidth || 1,
                  c = this.inRange(o.chartX, o.chartY, a);
                if (!c) return null;
                var u = this.state,
                  l = u.xAxisMap,
                  s = u.yAxisMap;
                if ('axis' !== this.getTooltipEventType() && l && s) {
                  var f = gr(l).scale,
                    p = gr(s).scale,
                    h = f && f.invert ? f.invert(o.chartX) : null,
                    d = p && p.invert ? p.invert(o.chartY) : null;
                  return jP(jP({}, o), {}, { xValue: h, yValue: d });
                }
                var y = DP(this.state, this.props.data, this.props.layout, c);
                return y ? jP(jP({}, o), y) : null;
              },
            },
            {
              key: 'inRange',
              value: function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  n = this.props.layout,
                  i = t / r,
                  o = e / r;
                if ('horizontal' === n || 'vertical' === n) {
                  var a = this.state.offset;
                  return i >= a.left &&
                    i <= a.left + a.width &&
                    o >= a.top &&
                    o <= a.top + a.height
                    ? { x: i, y: o }
                    : null;
                }
                var c = this.state,
                  u = c.angleAxisMap,
                  l = c.radiusAxisMap;
                if (u && l) {
                  var s = gr(u);
                  return xx({ x: i, y: o }, s);
                }
                return null;
              },
            },
            {
              key: 'parseEventsOfWrapper',
              value: function () {
                var t = this.props.children,
                  e = this.getTooltipEventType(),
                  r = zr(t, gp),
                  n = {};
                return (
                  r &&
                    'axis' === e &&
                    (n =
                      'click' === r.props.trigger
                        ? { onClick: this.handleClick }
                        : {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                          }),
                  jP(jP({}, kr(this.props, this.handleOuterEvent)), n)
                );
              },
            },
            {
              key: 'addListener',
              value: function () {
                eP.on(rP, this.handleReceiveSyncEvent);
              },
            },
            {
              key: 'removeListener',
              value: function () {
                eP.removeListener(rP, this.handleReceiveSyncEvent);
              },
            },
            {
              key: 'filterFormatItem',
              value: function (t, e, r) {
                for (
                  var n = this.state.formattedGraphicalItems,
                    i = 0,
                    o = n.length;
                  i < o;
                  i++
                ) {
                  var a = n[i];
                  if (
                    a.item === t ||
                    a.props.key === t.key ||
                    (e === Nr(a.item.type) && r === a.childIndex)
                  )
                    return a;
                }
                return null;
              },
            },
            {
              key: 'renderAxis',
              value: function (t, r, n, i) {
                var o = this.props,
                  a = o.width,
                  c = o.height;
                return e.createElement(
                  Xj,
                  hP({}, t, {
                    className: B(
                      'recharts-'.concat(t.axisType, ' ').concat(t.axisType),
                      t.className,
                    ),
                    key: r.key || ''.concat(n, '-').concat(i),
                    viewBox: { x: 0, y: 0, width: a, height: c },
                    ticksGenerator: this.axesTicksGenerator,
                  }),
                );
              },
            },
            {
              key: 'renderClipPath',
              value: function () {
                var t = this.clipPathId,
                  r = this.state.offset,
                  n = r.left,
                  i = r.top,
                  o = r.height,
                  a = r.width;
                return e.createElement(
                  'defs',
                  null,
                  e.createElement(
                    'clipPath',
                    { id: t },
                    e.createElement('rect', {
                      x: n,
                      y: i,
                      height: o,
                      width: a,
                    }),
                  ),
                );
              },
            },
            {
              key: 'getXScales',
              value: function () {
                var t = this.state.xAxisMap;
                return t
                  ? Object.entries(t).reduce(function (t, e) {
                      var r = pP(e, 2),
                        n = r[0],
                        i = r[1];
                      return jP(jP({}, t), {}, AP({}, n, i.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: 'getYScales',
              value: function () {
                var t = this.state.yAxisMap;
                return t
                  ? Object.entries(t).reduce(function (t, e) {
                      var r = pP(e, 2),
                        n = r[0],
                        i = r[1];
                      return jP(jP({}, t), {}, AP({}, n, i.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: 'getXScaleByAxisId',
              value: function (t) {
                var e;
                return null === (e = this.state.xAxisMap) ||
                  void 0 === e ||
                  null === (e = e[t]) ||
                  void 0 === e
                  ? void 0
                  : e.scale;
              },
            },
            {
              key: 'getYScaleByAxisId',
              value: function (t) {
                var e;
                return null === (e = this.state.yAxisMap) ||
                  void 0 === e ||
                  null === (e = e[t]) ||
                  void 0 === e
                  ? void 0
                  : e.scale;
              },
            },
            {
              key: 'getItemByXY',
              value: function (t) {
                var e = this.state,
                  r = e.formattedGraphicalItems,
                  n = e.activeItem;
                if (r && r.length)
                  for (var i = 0, o = r.length; i < o; i++) {
                    var a = r[i],
                      c = a.props,
                      u = a.item,
                      l = Nr(u.type);
                    if ('Bar' === l) {
                      var s = (c.data || []).find(function (e) {
                        return Aw(t, e);
                      });
                      if (s) return { graphicalItem: a, payload: s };
                    } else if ('RadialBar' === l) {
                      var f = (c.data || []).find(function (e) {
                        return xx(t, e);
                      });
                      if (f) return { graphicalItem: a, payload: f };
                    } else if (gO(a, n) || bO(a, n) || xO(a, n)) {
                      var p = jO({
                          graphicalItem: a,
                          activeTooltipItem: n,
                          itemData: u.props.data,
                        }),
                        h =
                          void 0 === u.props.activeIndex
                            ? p
                            : u.props.activeIndex;
                      return {
                        graphicalItem: jP(jP({}, a), {}, { childIndex: h }),
                        payload: xO(a, n) ? u.props.data[p] : a.props.data[p],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this;
                if (!$r(this)) return null;
                var r,
                  n,
                  i = this.props,
                  o = i.children,
                  a = i.className,
                  c = i.width,
                  u = i.height,
                  l = i.style,
                  s = i.compact,
                  f = i.title,
                  p = i.desc,
                  h = dP(i, sP),
                  d = Wr(h);
                if (s)
                  return e.createElement(
                    Zr,
                    hP({}, d, { width: c, height: u, title: f, desc: p }),
                    this.renderClipPath(),
                    Gr(o, this.renderMap),
                  );
                this.props.accessibilityLayer &&
                  ((d.tabIndex =
                    null !== (r = this.props.tabIndex) && void 0 !== r ? r : 0),
                  (d.role =
                    null !== (n = this.props.role) && void 0 !== n ? n : 'img'),
                  (d.onKeyDown = function (e) {
                    t.accessibilityManager.keyboardEvent(e);
                  }),
                  (d.onFocus = function () {
                    t.accessibilityManager.focus();
                  }));
                var y = this.parseEventsOfWrapper();
                return e.createElement(
                  'div',
                  hP(
                    {
                      className: B('recharts-wrapper', a),
                      style: jP(
                        {
                          position: 'relative',
                          cursor: 'default',
                          width: c,
                          height: u,
                        },
                        l,
                      ),
                    },
                    y,
                    {
                      ref: function (e) {
                        t.container = e;
                      },
                      role: 'region',
                    },
                  ),
                  e.createElement(
                    Zr,
                    hP({}, d, {
                      width: c,
                      height: u,
                      title: f,
                      desc: p,
                      style: EP,
                    }),
                    this.renderClipPath(),
                    Gr(o, this.renderMap),
                  ),
                  this.renderLegend(),
                  this.renderTooltip(),
                );
              },
            },
          ]),
          o && yP(n.prototype, o),
          a && yP(n, a),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })()),
      AP(n, 'displayName', i),
      AP(
        n,
        'defaultProps',
        jP(
          {
            layout: 'horizontal',
            stackOffset: 'none',
            barCategoryGap: '10%',
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: 'index',
          },
          h,
        ),
      ),
      AP(n, 'getDerivedStateFromProps', function (t, e) {
        var r = t.dataKey,
          n = t.data,
          i = t.children,
          o = t.width,
          a = t.height,
          c = t.layout,
          u = t.stackOffset,
          l = t.margin;
        if (void 0 === e.updateId) {
          var s = BP(t);
          return jP(
            jP(
              jP({}, s),
              {},
              { updateId: 0 },
              y(jP(jP({ props: t }, s), {}, { updateId: 0 }), e),
            ),
            {},
            {
              prevDataKey: r,
              prevData: n,
              prevWidth: o,
              prevHeight: a,
              prevLayout: c,
              prevStackOffset: u,
              prevMargin: l,
              prevChildren: i,
            },
          );
        }
        if (
          r !== e.prevDataKey ||
          n !== e.prevData ||
          o !== e.prevWidth ||
          a !== e.prevHeight ||
          c !== e.prevLayout ||
          u !== e.prevStackOffset ||
          !wr(l, e.prevMargin)
        ) {
          var f = BP(t),
            p = {
              chartX: e.chartX,
              chartY: e.chartY,
              isTooltipActive: e.isTooltipActive,
            },
            h = jP(jP({}, DP(e, n, c)), {}, { updateId: e.updateId + 1 }),
            d = jP(jP(jP({}, f), p), h);
          return jP(
            jP(jP({}, d), y(jP({ props: t }, d), e)),
            {},
            {
              prevDataKey: r,
              prevData: n,
              prevWidth: o,
              prevHeight: a,
              prevLayout: c,
              prevStackOffset: u,
              prevMargin: l,
              prevChildren: i,
            },
          );
        }
        if (!qr(i, e.prevChildren)) {
          var v = !Ne(n) ? e.updateId : e.updateId + 1;
          return jP(
            jP(
              { updateId: v },
              y(jP(jP({ props: t }, e), {}, { updateId: v }), e),
            ),
            {},
            { prevChildren: i },
          );
        }
        return null;
      }),
      AP(n, 'renderActiveDot', function (r, n) {
        var i;
        return (
          (i = t.isValidElement(r)
            ? t.cloneElement(r, n)
            : K(r)
            ? r(n)
            : e.createElement(Mw, n)),
          e.createElement(
            en,
            { className: 'recharts-active-dot', key: n.key },
            i,
          )
        );
      }),
      n
    );
  },
  $P = zP({
    chartName: 'LineChart',
    GraphicalChild: wA,
    axisComponents: [
      { axisType: 'xAxis', AxisComp: RA },
      { axisType: 'yAxis', AxisComp: LA },
    ],
    formatAxisMap: HS,
  }),
  UP = zP({
    chartName: 'AreaChart',
    GraphicalChild: BA,
    axisComponents: [
      { axisType: 'xAxis', AxisComp: RA },
      { axisType: 'yAxis', AxisComp: LA },
    ],
    formatAxisMap: HS,
  });
const FP = '_title_a9gmv_1',
  WP = '_footer_a9gmv_11',
  qP = '_button_a9gmv_21',
  XP = ({ graph: t, selected: e, setSelected: i }) =>
    r('div', {
      children: n(l, {
        as: f,
        drop: 'down-centered',
        children: [
          r(l.Toggle, { className: FP, children: t[e] }),
          r(s, {
            className: WP,
            children: [...t].map((t, e) =>
              r(
                l.Item,
                {
                  value: e,
                  className: qP,
                  onClick: () => {
                    i(e);
                  },
                  children: t,
                },
                t,
              ),
            ),
          }),
        ],
      }),
    }),
  GP = '_barChartToolTip_10o29_1',
  VP = ({ active: t, payload: e }) =>
    t && e && e.length
      ? r('div', {
          className: GP,
          children: n('ul', {
            children: [
              2 == e.length &&
                r('li', {
                  className: 'label',
                  children: `Your Attacks ${e[0].value}%`,
                }),
              r('li', {
                className: 'label',
                children: `Leaderboard Top: ${e.at(-1).value}%`,
              }),
            ],
          }),
        })
      : null,
  HP = ({ active: t, payload: e }) =>
    t && e && e.length
      ? r('div', {
          className: GP,
          children: n('div', {
            children: [
              r('p', { children: 'Coins Used By:' }),
              n('ul', {
                children: [
                  2 == e.length &&
                    r('li', {
                      className: 'label',
                      children: `You: ${e[0].value}`,
                    }),
                  r('li', {
                    className: 'label',
                    children: `Leaderboard Top: ${e.at(-1).value}`,
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  YP = ({ active: t, payload: e }) =>
    t && e && e.length
      ? r('div', {
          className: GP,
          children: n('div', {
            children: [
              r('p', { children: 'Daily Challenges Attempts Made:' }),
              n('ul', {
                children: [
                  2 == e.length &&
                    r('li', {
                      className: 'label',
                      children: `You: ${e[0].value}`,
                    }),
                  r('li', {
                    className: 'label',
                    children: `Leaderboard Top: ${e.at(-1).value}`,
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  KP = () => {
    const [e, l] = t.useState(0),
      [s, f] = t.useState({}),
      [p, h] = t.useState(!0);
    t.useEffect(() => {
      new o(a)
        .getStats()
        .then(t => {
          const e = [];
          for (let r = 0; r < t[0].length; r++) {
            const n = {},
              i = t[0][r];
            let o = t[0][r];
            2 == t.length && (h(!1), (o = t[1][r]));
            for (const t in i) (n[`${t}1`] = i[t]), (n[`${t}2`] = o[t]);
            e.push(n);
          }
          f(e);
        })
        .catch(t => {
          f(null), t instanceof c && u.error(t.message);
        });
    }, []);
    const d = [
      'Average Attack Rates',
      'Coins Usage Per Match',
      'Daily Challenges Wins',
    ];
    return r(i, {
      children: r('div', {
        className: _,
        children:
          null != s
            ? n(i, {
                children: [
                  r('div', {
                    className: T,
                    children: r('h1', { className: E, children: d[e] }),
                  }),
                  r('div', {
                    className: k,
                    children: n('div', {
                      className: D,
                      children: [
                        r(XP, { graph: d, selected: e, setSelected: l }),
                        n('div', {
                          className: M,
                          children: [
                            0 == e &&
                              n(UP, {
                                width: 1130,
                                height: 600,
                                data: s,
                                margin: { right: 80, bottom: 30 },
                                children: [
                                  n('defs', {
                                    children: [
                                      n('linearGradient', {
                                        id: 'colorUv',
                                        x1: '0',
                                        y1: '0',
                                        x2: '0',
                                        y2: '1',
                                        children: [
                                          r('stop', {
                                            offset: '5%',
                                            stopColor: '#8884d8',
                                            stopOpacity: 0.8,
                                          }),
                                          r('stop', {
                                            offset: '95%',
                                            stopColor: '#8884d8',
                                            stopOpacity: 0,
                                          }),
                                        ],
                                      }),
                                      n('linearGradient', {
                                        id: 'colorPv',
                                        x1: '0',
                                        y1: '0',
                                        x2: '0',
                                        y2: '1',
                                        children: [
                                          r('stop', {
                                            offset: '5%',
                                            stopColor: '#82ca9d',
                                            stopOpacity: 0.8,
                                          }),
                                          r('stop', {
                                            offset: '95%',
                                            stopColor: '#82ca9d',
                                            stopOpacity: 0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r(RA, {
                                    className: C,
                                    stroke: 'white',
                                    label: {
                                      value: 'Past Days',
                                      position: 'insideBottomRight',
                                      offset: -15,
                                    },
                                  }),
                                  r(LA, { className: C, stroke: 'white' }),
                                  r(gp, {
                                    cursor: { fill: '#ffffff34' },
                                    content: r(VP, { external: external }),
                                  }),
                                  r(oA, { strokeDasharray: '3 3' }),
                                  !p &&
                                    r(BA, {
                                      type: 'monotone',
                                      strokeWidth: '4px',
                                      dataKey: 'avgAtk1',
                                      stroke: '#8884d8',
                                      fillOpacity: 1,
                                      fill: 'url(#colorUv)',
                                      activeDot: { r: 8 },
                                      name: 'You',
                                    }),
                                  r(BA, {
                                    type: 'monotone',
                                    dataKey: 'avgAtk2',
                                    strokeWidth: '2px',
                                    strokeDasharray: '5 5',
                                    stroke: '#82ca9d',
                                    activeDot: { r: 3 },
                                    fillOpacity: 1,
                                    fill: 'url(#colorPv)',
                                    name: 'Leaderboard Top',
                                  }),
                                  r(al, {
                                    wrapperStyle: {
                                      fontFamily: 'monospace',
                                      fontStyle: 'bold',
                                      fontWeight: '900',
                                    },
                                    verticalAlign: 'top',
                                  }),
                                ],
                              }),
                            1 == e &&
                              n(UP, {
                                width: 1130,
                                height: 600,
                                data: s,
                                margin: { right: 80, bottom: 30 },
                                children: [
                                  n('defs', {
                                    children: [
                                      n('linearGradient', {
                                        id: 'colorUv',
                                        x1: '0',
                                        y1: '0',
                                        x2: '0',
                                        y2: '1',
                                        children: [
                                          r('stop', {
                                            offset: '5%',
                                            stopColor: '#00ffff',
                                            stopOpacity: 0.8,
                                          }),
                                          r('stop', {
                                            offset: '95%',
                                            stopColor: '#00ffff',
                                            stopOpacity: 0,
                                          }),
                                        ],
                                      }),
                                      n('linearGradient', {
                                        id: 'colorPv',
                                        x1: '0',
                                        y1: '0',
                                        x2: '0',
                                        y2: '1',
                                        children: [
                                          r('stop', {
                                            offset: '5%',
                                            stopColor: '#ffff66',
                                            stopOpacity: 0.8,
                                          }),
                                          r('stop', {
                                            offset: '95%',
                                            stopColor: '#ffff66',
                                            stopOpacity: 0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r(RA, {
                                    className: C,
                                    stroke: 'white',
                                    label: {
                                      value: 'Past Days',
                                      position: 'insideBottomRight',
                                      offset: -15,
                                    },
                                  }),
                                  r(LA, { className: C, stroke: 'white' }),
                                  r(gp, {
                                    cursor: { fill: '#ffffff34' },
                                    content: r(HP, { external: external }),
                                  }),
                                  r(oA, { strokeDasharray: '3 3' }),
                                  !p &&
                                    r(BA, {
                                      type: 'monotone',
                                      strokeWidth: '4px',
                                      dataKey: 'coins1',
                                      stroke: '#00ffff',
                                      fillOpacity: 1,
                                      fill: 'url(#colorUv)',
                                      activeDot: { r: 8 },
                                      name: 'You',
                                    }),
                                  r(BA, {
                                    type: 'monotone',
                                    dataKey: 'coins2',
                                    strokeWidth: '2px',
                                    strokeDasharray: '5 5',
                                    stroke: '#ffff66',
                                    activeDot: { r: 3 },
                                    fillOpacity: 1,
                                    fill: 'url(#colorPv)',
                                    name: 'Leaderboard Top',
                                  }),
                                  r(al, {
                                    wrapperStyle: {
                                      fontFamily: 'monospace',
                                      fontStyle: 'bold',
                                      fontWeight: '900',
                                    },
                                    verticalAlign: 'top',
                                  }),
                                ],
                              }),
                            2 == e &&
                              n($P, {
                                width: 1130,
                                height: 600,
                                data: s,
                                margin: { right: 80, bottom: 30 },
                                children: [
                                  r(oA, { strokeDasharray: '3 3' }),
                                  r(RA, {
                                    className: C,
                                    stroke: 'white',
                                    label: {
                                      value: 'Past Days',
                                      position: 'insideBottomRight',
                                      offset: -15,
                                    },
                                  }),
                                  r(LA, { className: C, stroke: 'white' }),
                                  r(al, {
                                    wrapperStyle: {
                                      fontFamily: 'monospace',
                                      fontStyle: 'bold',
                                      fontWeight: '900',
                                    },
                                    verticalAlign: 'top',
                                  }),
                                  r(gp, {
                                    cursor: { fill: '#ffffff34' },
                                    content: r(YP, { external: external }),
                                  }),
                                  !p &&
                                    r(wA, {
                                      type: 'monotone',
                                      dataKey: 'dc_wins1',
                                      stroke: '#8884d8',
                                      strokeWidth: '4px',
                                      activeDot: { r: 8 },
                                      name: 'You',
                                    }),
                                  r(wA, {
                                    type: 'monotone',
                                    strokeDasharray: '5 5',
                                    strokeWidth: '2px',
                                    dataKey: 'dc_wins2',
                                    activeDot: { r: 3 },
                                    stroke: '#82ca9d',
                                    name: 'Leaderboard Top',
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : r('div', {
                className: `${k} ${N}`,
                children: 'Start a match for recoding statistics!',
              }),
      }),
    });
  };
export { KP as default };
