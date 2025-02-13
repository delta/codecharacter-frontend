import {
  am as e,
  aU as t,
  aV as n,
  r,
  aW as a,
  aX as i,
  aY as o,
  S as s,
  d as l,
  aI as u,
  C as c,
  aJ as f,
  j as d,
  F as p,
  c as h,
  _ as m,
  A as v,
} from './index-24a58ae8.js';
import { u as g } from './TourProvider-f8fb0617.js';
import { M as b } from './Modal-5efe701c.js';
import { C as y } from './Container-4692a76f.js';
import { R as w } from './Row-59744247.js';
import { B as k } from './Button-0a98cdad.js';
var x,
  E = Object.defineProperty,
  S = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, 'symbol' != typeof t ? t + '' : t, n),
    n
  ),
  C = {
    prefix: 'fas',
    iconName: 'up-down-left-right',
    icon: [
      512,
      512,
      ['arrows-alt'],
      'f0b2',
      'M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z',
    ],
  },
  O = {
    prefix: 'fas',
    iconName: 'floppy-disk',
    icon: [
      448,
      512,
      [128190, 128426, 'save'],
      'f0c7',
      'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
    ],
  },
  _ = {
    prefix: 'fas',
    iconName: 'eraser',
    icon: [
      512,
      512,
      [],
      'f12d',
      'M258.7 57.4L25.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H256h9.4H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H355.9L486.6 285.3c25-25 25-65.5 0-90.5L349.3 57.4c-25-25-65.5-25-90.5 0zM265.4 416H256l-105.4 0-80-80L195.3 211.3 332.7 348.7 265.4 416z',
    ],
  },
  P = {
    prefix: 'fas',
    iconName: 'circle-xmark',
    icon: [
      512,
      512,
      [61532, 'times-circle', 'xmark-circle'],
      'f057',
      'M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z',
    ],
  };
function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? N(Object(n), !0).forEach(function (t) {
          L(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : N(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function D(e) {
  return (D =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function M(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function L(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function A(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null == n) return;
      var r,
        a,
        i = [],
        o = !0,
        s = !1;
      try {
        for (
          n = n.call(e);
          !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
          o = !0
        );
      } catch (l) {
        (s = !0), (a = l);
      } finally {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw a;
        }
      }
      return i;
    })(e, t) ||
    R(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function z(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return j(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    R(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function R(e, t) {
  if (e) {
    if ('string' == typeof e) return j(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? j(e, t)
        : void 0
    );
  }
}
function j(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var I = function () {},
  F = {},
  U = {},
  H = null,
  B = { mark: I, measure: I };
try {
  'undefined' != typeof window && (F = window),
    'undefined' != typeof document && (U = document),
    'undefined' != typeof MutationObserver && (H = MutationObserver),
    'undefined' != typeof performance && (B = performance);
} catch (ay) {}
var V = (F.navigator || {}).userAgent,
  W = void 0 === V ? '' : V,
  Y = F,
  $ = U,
  G = H,
  X = B;
Y.document;
var Q,
  q,
  K,
  J,
  Z,
  ee =
    !!$.documentElement &&
    !!$.head &&
    'function' == typeof $.addEventListener &&
    'function' == typeof $.createElement,
  te = ~W.indexOf('MSIE') || ~W.indexOf('Trident/'),
  ne = '___FONT_AWESOME___',
  re = 16,
  ae = 'fa',
  ie = 'svg-inline--fa',
  oe = 'data-fa-i2svg',
  se = 'data-fa-pseudo-element',
  le = 'data-fa-pseudo-element-pending',
  ue = 'data-prefix',
  ce = 'data-icon',
  fe = 'fontawesome-i2svg',
  de = 'async',
  pe = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  he = (function () {
    try {
      return !0;
    } catch (ay) {
      return !1;
    }
  })(),
  me = 'classic',
  ve = 'sharp',
  ge = [me, ve];
function be(e) {
  return new Proxy(e, {
    get: function (e, t) {
      return t in e ? e[t] : e[me];
    },
  });
}
var ye = be(
    (L((Q = {}), me, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      'fa-kit': 'kit',
    }),
    L(Q, ve, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
    }),
    Q),
  ),
  we = be(
    (L((q = {}), me, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    L(q, ve, { solid: 'fass', regular: 'fasr' }),
    q),
  ),
  ke = be(
    (L((K = {}), me, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    L(K, ve, { fass: 'fa-solid', fasr: 'fa-regular' }),
    K),
  ),
  xe = be(
    (L((J = {}), me, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    L(J, ve, { 'fa-solid': 'fass', 'fa-regular': 'fasr' }),
    J),
  ),
  Ee = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,
  Se = 'fa-layers-text',
  Ce =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Oe = be(
    (L((Z = {}), me, {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    }),
    L(Z, ve, { 900: 'fass', 400: 'fasr' }),
    Z),
  ),
  _e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Pe = _e.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Ne = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Te = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  De = new Set();
Object.keys(we[me]).map(De.add.bind(De)),
  Object.keys(we[ve]).map(De.add.bind(De));
var Me = []
    .concat(ge, z(De), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Te.GROUP,
      Te.SWAP_OPACITY,
      Te.PRIMARY,
      Te.SECONDARY,
    ])
    .concat(
      _e.map(function (e) {
        return ''.concat(e, 'x');
      }),
    )
    .concat(
      Pe.map(function (e) {
        return 'w-'.concat(e);
      }),
    ),
  Le = Y.FontAwesomeConfig || {};
if ($ && 'function' == typeof $.querySelector) {
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach(function (e) {
    var t = A(e, 2),
      n = t[0],
      r = t[1],
      a = (function (e) {
        return '' === e || ('false' !== e && ('true' === e || e));
      })(
        (function (e) {
          var t = $.querySelector('script[' + e + ']');
          if (t) return t.getAttribute(e);
        })(n),
      );
    null != a && (Le[r] = a);
  });
}
var Ae = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: ae,
  replacementClass: ie,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Le.familyPrefix && (Le.cssPrefix = Le.familyPrefix);
var ze = T(T({}, Ae), Le);
ze.autoReplaceSvg || (ze.observeMutations = !1);
var Re = {};
Object.keys(Ae).forEach(function (e) {
  Object.defineProperty(Re, e, {
    enumerable: !0,
    set: function (t) {
      (ze[e] = t),
        je.forEach(function (e) {
          return e(Re);
        });
    },
    get: function () {
      return ze[e];
    },
  });
}),
  Object.defineProperty(Re, 'familyPrefix', {
    enumerable: !0,
    set: function (e) {
      (ze.cssPrefix = e),
        je.forEach(function (e) {
          return e(Re);
        });
    },
    get: function () {
      return ze.cssPrefix;
    },
  }),
  (Y.FontAwesomeConfig = Re);
var je = [];
var Ie = re,
  Fe = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
var Ue = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function He() {
  for (var e = 12, t = ''; e-- > 0; ) t += Ue[(62 * Math.random()) | 0];
  return t;
}
function Be(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Ve(e) {
  return e.classList
    ? Be(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (e) {
        return e;
      });
}
function We(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Ye(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function $e(e) {
  return (
    e.size !== Fe.size ||
    e.x !== Fe.x ||
    e.y !== Fe.y ||
    e.rotate !== Fe.rotate ||
    e.flipX ||
    e.flipY
  );
}
var Ge =
  ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function Xe() {
  var e = ae,
    t = ie,
    n = Re.cssPrefix,
    r = Re.replacementClass,
    a = Ge;
  if (n !== e || r !== t) {
    var i = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      s = new RegExp('\\.'.concat(t), 'g');
    a = a
      .replace(i, '.'.concat(n, '-'))
      .replace(o, '--'.concat(n, '-'))
      .replace(s, '.'.concat(r));
  }
  return a;
}
var Qe = !1;
function qe() {
  Re.autoAddCss &&
    !Qe &&
    (!(function (e) {
      if (e && ee) {
        var t = $.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e);
        for (
          var n = $.head.childNodes, r = null, a = n.length - 1;
          a > -1;
          a--
        ) {
          var i = n[a],
            o = (i.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(o) > -1 && (r = i);
        }
        $.head.insertBefore(t, r);
      }
    })(Xe()),
    (Qe = !0));
}
var Ke = {
    mixout: function () {
      return { dom: { css: Xe, insertCss: qe } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          qe();
        },
        beforeI2svg: function () {
          qe();
        },
      };
    },
  },
  Je = Y || {};
Je[ne] || (Je[ne] = {}),
  Je[ne].styles || (Je[ne].styles = {}),
  Je[ne].hooks || (Je[ne].hooks = {}),
  Je[ne].shims || (Je[ne].shims = []);
var Ze = Je[ne],
  et = [],
  tt = !1;
function nt(e) {
  var t = e.tag,
    n = e.attributes,
    r = void 0 === n ? {} : n,
    a = e.children,
    i = void 0 === a ? [] : a;
  return 'string' == typeof e
    ? We(e)
    : '<'
        .concat(t, ' ')
        .concat(
          (function (e) {
            return Object.keys(e || {})
              .reduce(function (t, n) {
                return t + ''.concat(n, '="').concat(We(e[n]), '" ');
              }, '')
              .trim();
          })(r),
          '>',
        )
        .concat(i.map(nt).join(''), '</')
        .concat(t, '>');
}
function rt(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
ee &&
  ((tt = ($.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    $.readyState,
  )) ||
    $.addEventListener('DOMContentLoaded', function e() {
      $.removeEventListener('DOMContentLoaded', e),
        (tt = 1),
        et.map(function (e) {
          return e();
        });
    }));
var at,
  it,
  ot,
  st = function (e, t, n, r) {
    var a,
      i,
      o,
      s = Object.keys(e),
      l = s.length,
      u =
        void 0 !== r
          ? (function (e, t) {
              return function (n, r, a, i) {
                return e.call(t, n, r, a, i);
              };
            })(t, r)
          : t;
    for (
      void 0 === n ? ((a = 1), (o = e[s[0]])) : ((a = 0), (o = n));
      a < l;
      a++
    )
      o = u(o, e[(i = s[a])], i, e);
    return o;
  };
function lt(e) {
  var t = (function (e) {
    for (var t = [], n = 0, r = e.length; n < r; ) {
      var a = e.charCodeAt(n++);
      if (a >= 55296 && a <= 56319 && n < r) {
        var i = e.charCodeAt(n++);
        56320 == (64512 & i)
          ? t.push(((1023 & a) << 10) + (1023 & i) + 65536)
          : (t.push(a), n--);
      } else t.push(a);
    }
    return t;
  })(e);
  return 1 === t.length ? t[0].toString(16) : null;
}
function ut(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function ct(e, t) {
  var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      .skipHooks,
    r = void 0 !== n && n,
    a = ut(t);
  'function' != typeof Ze.hooks.addPack || r
    ? (Ze.styles[e] = T(T({}, Ze.styles[e] || {}), a))
    : Ze.hooks.addPack(e, ut(t)),
    'fas' === e && ct('fa', t);
}
var ft = Ze.styles,
  dt = Ze.shims,
  pt =
    (L((at = {}), me, Object.values(ke[me])),
    L(at, ve, Object.values(ke[ve])),
    at),
  ht = null,
  mt = {},
  vt = {},
  gt = {},
  bt = {},
  yt = {},
  wt =
    (L((it = {}), me, Object.keys(ye[me])), L(it, ve, Object.keys(ye[ve])), it);
function kt(e, t) {
  var n,
    r = t.split('-'),
    a = r[0],
    i = r.slice(1).join('-');
  return a !== e || '' === i || ((n = i), ~Me.indexOf(n)) ? null : i;
}
var xt,
  Et = function () {
    var e = function (e) {
      return st(
        ft,
        function (t, n, r) {
          return (t[r] = st(n, e, {})), t;
        },
        {},
      );
    };
    (mt = e(function (e, t, n) {
      (t[3] && (e[t[3]] = n), t[2]) &&
        t[2]
          .filter(function (e) {
            return 'number' == typeof e;
          })
          .forEach(function (t) {
            e[t.toString(16)] = n;
          });
      return e;
    })),
      (vt = e(function (e, t, n) {
        ((e[n] = n), t[2]) &&
          t[2]
            .filter(function (e) {
              return 'string' == typeof e;
            })
            .forEach(function (t) {
              e[t] = n;
            });
        return e;
      })),
      (yt = e(function (e, t, n) {
        var r = t[2];
        return (
          (e[n] = n),
          r.forEach(function (t) {
            e[t] = n;
          }),
          e
        );
      }));
    var t = 'far' in ft || Re.autoFetchSvg,
      n = st(
        dt,
        function (e, n) {
          var r = n[0],
            a = n[1],
            i = n[2];
          return (
            'far' !== a || t || (a = 'fas'),
            'string' == typeof r && (e.names[r] = { prefix: a, iconName: i }),
            'number' == typeof r &&
              (e.unicodes[r.toString(16)] = { prefix: a, iconName: i }),
            e
          );
        },
        { names: {}, unicodes: {} },
      );
    (gt = n.names),
      (bt = n.unicodes),
      (ht = Nt(Re.styleDefault, { family: Re.familyDefault }));
  };
function St(e, t) {
  return (mt[e] || {})[t];
}
function Ct(e, t) {
  return (yt[e] || {})[t];
}
function Ot(e) {
  return gt[e] || { prefix: null, iconName: null };
}
function _t() {
  return ht;
}
(xt = function (e) {
  ht = Nt(e.styleDefault, { family: Re.familyDefault });
}),
  je.push(xt),
  Et();
var Pt = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Nt(e) {
  var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .family,
    n = void 0 === t ? me : t,
    r = ye[n][e],
    a = we[n][e] || we[n][r],
    i = e in Ze.styles ? e : null;
  return a || i || null;
}
var Tt =
  (L((ot = {}), me, Object.keys(ke[me])), L(ot, ve, Object.keys(ke[ve])), ot);
function Dt(e) {
  var t,
    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .skipLookups,
    r = void 0 !== n && n,
    a =
      (L((t = {}), me, ''.concat(Re.cssPrefix, '-').concat(me)),
      L(t, ve, ''.concat(Re.cssPrefix, '-').concat(ve)),
      t),
    i = null,
    o = me;
  (e.includes(a[me]) ||
    e.some(function (e) {
      return Tt[me].includes(e);
    })) &&
    (o = me),
    (e.includes(a[ve]) ||
      e.some(function (e) {
        return Tt[ve].includes(e);
      })) &&
      (o = ve);
  var s = e.reduce(function (e, t) {
    var n = kt(Re.cssPrefix, t);
    if (
      (ft[t]
        ? ((t = pt[o].includes(t) ? xe[o][t] : t), (i = t), (e.prefix = t))
        : wt[o].indexOf(t) > -1
        ? ((i = t), (e.prefix = Nt(t, { family: o })))
        : n
        ? (e.iconName = n)
        : t !== Re.replacementClass &&
          t !== a[me] &&
          t !== a[ve] &&
          e.rest.push(t),
      !r && e.prefix && e.iconName)
    ) {
      var s = 'fa' === i ? Ot(e.iconName) : {},
        l = Ct(e.prefix, e.iconName);
      s.prefix && (i = null),
        (e.iconName = s.iconName || l || e.iconName),
        (e.prefix = s.prefix || e.prefix),
        'far' !== e.prefix ||
          ft.far ||
          !ft.fas ||
          Re.autoFetchSvg ||
          (e.prefix = 'fas');
    }
    return e;
  }, Pt());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
    s.prefix ||
      o !== ve ||
      (!ft.fass && !Re.autoFetchSvg) ||
      ((s.prefix = 'fass'),
      (s.iconName = Ct(s.prefix, s.iconName) || s.iconName)),
    ('fa' !== s.prefix && 'fa' !== i) || (s.prefix = _t() || 'fas'),
    s
  );
}
var Mt = (function () {
    function e() {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      })(this, e),
        (this.definitions = {});
    }
    var t, n, r;
    return (
      (t = e),
      (n = [
        {
          key: 'add',
          value: function () {
            for (
              var e = this, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            var a = n.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (t) {
              (e.definitions[t] = T(T({}, e.definitions[t] || {}), a[t])),
                ct(t, a[t]);
              var n = ke[me][t];
              n && ct(n, a[t]), Et();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (e, t) {
            var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(n).map(function (t) {
                var r = n[t],
                  a = r.prefix,
                  i = r.iconName,
                  o = r.icon,
                  s = o[2];
                e[a] || (e[a] = {}),
                  s.length > 0 &&
                    s.forEach(function (t) {
                      'string' == typeof t && (e[a][t] = o);
                    }),
                  (e[a][i] = o);
              }),
              e
            );
          },
        },
      ]),
      n && M(t.prototype, n),
      r && M(t, r),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e
    );
  })(),
  Lt = [],
  At = {},
  zt = {},
  Rt = Object.keys(zt);
function jt(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    r[a - 2] = arguments[a];
  return (
    (At[e] || []).forEach(function (e) {
      t = e.apply(null, [t].concat(r));
    }),
    t
  );
}
function It(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (At[e] || []).forEach(function (e) {
    e.apply(null, n);
  });
}
function Ft() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return zt[e] ? zt[e].apply(null, t) : void 0;
}
function Ut(e) {
  'fa' === e.prefix && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || _t();
  if (t)
    return (t = Ct(n, t) || t), rt(Ht.definitions, n, t) || rt(Ze.styles, n, t);
}
var Ht = new Mt(),
  Bt = {
    i2svg: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ee
        ? (It('beforeI2svg', e), Ft('pseudoElements2svg', e), Ft('i2svg', e))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      !1 === Re.autoReplaceSvg && (Re.autoReplaceSvg = !0),
        (Re.observeMutations = !0),
        (e = function () {
          Wt({ autoReplaceSvgRoot: n }), It('watch', t);
        }),
        ee && (tt ? setTimeout(e, 0) : et.push(e));
    },
  },
  Vt = {
    noAuto: function () {
      (Re.autoReplaceSvg = !1), (Re.observeMutations = !1), It('noAuto');
    },
    config: Re,
    dom: Bt,
    parse: {
      icon: function (e) {
        if (null === e) return null;
        if ('object' === D(e) && e.prefix && e.iconName)
          return {
            prefix: e.prefix,
            iconName: Ct(e.prefix, e.iconName) || e.iconName,
          };
        if (Array.isArray(e) && 2 === e.length) {
          var t = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
            n = Nt(e[0]);
          return { prefix: n, iconName: Ct(n, t) || t };
        }
        if (
          'string' == typeof e &&
          (e.indexOf(''.concat(Re.cssPrefix, '-')) > -1 || e.match(Ee))
        ) {
          var r = Dt(e.split(' '), { skipLookups: !0 });
          return {
            prefix: r.prefix || _t(),
            iconName: Ct(r.prefix, r.iconName) || r.iconName,
          };
        }
        if ('string' == typeof e) {
          var a = _t();
          return { prefix: a, iconName: Ct(a, e) || e };
        }
      },
    },
    library: Ht,
    findIconDefinition: Ut,
    toHtml: nt,
  },
  Wt = function () {
    var e = (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      ).autoReplaceSvgRoot,
      t = void 0 === e ? $ : e;
    (Object.keys(Ze.styles).length > 0 || Re.autoFetchSvg) &&
      ee &&
      Re.autoReplaceSvg &&
      Vt.dom.i2svg({ node: t });
  };
function Yt(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (e) {
          return nt(e);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (ee) {
          var t = $.createElement('div');
          return (t.innerHTML = e.html), t.children;
        }
      },
    }),
    e
  );
}
function $t(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    o = e.transform,
    s = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    p = void 0 !== d && d,
    h = r.found ? r : n,
    m = h.width,
    v = h.height,
    g = 'fak' === a,
    b = [Re.replacementClass, i ? ''.concat(Re.cssPrefix, '-').concat(i) : '']
      .filter(function (e) {
        return -1 === f.classes.indexOf(e);
      })
      .filter(function (e) {
        return '' !== e || !!e;
      })
      .concat(f.classes)
      .join(' '),
    y = {
      children: [],
      attributes: T(
        T({}, f.attributes),
        {},
        {
          'data-prefix': a,
          'data-icon': i,
          class: b,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(m, ' ').concat(v),
        },
      ),
    },
    w =
      g && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((m / v) * 16 * 0.0625, 'em') }
        : {};
  p && (y.attributes[oe] = ''),
    l &&
      (y.children.push({
        tag: 'title',
        attributes: {
          id: y.attributes['aria-labelledby'] || 'title-'.concat(c || He()),
        },
        children: [l],
      }),
      delete y.attributes.title);
  var k = T(
      T({}, y),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: s,
        styles: T(T({}, w), f.styles),
      },
    ),
    x =
      r.found && n.found
        ? Ft('generateAbstractMask', k) || { children: [], attributes: {} }
        : Ft('generateAbstractIcon', k) || { children: [], attributes: {} },
    E = x.children,
    S = x.attributes;
  return (
    (k.children = E),
    (k.attributes = S),
    s
      ? (function (e) {
          var t = e.prefix,
            n = e.iconName,
            r = e.children,
            a = e.attributes,
            i = e.symbol,
            o =
              !0 === i
                ? ''.concat(t, '-').concat(Re.cssPrefix, '-').concat(n)
                : i;
          return [
            {
              tag: 'svg',
              attributes: { style: 'display: none;' },
              children: [
                {
                  tag: 'symbol',
                  attributes: T(T({}, a), {}, { id: o }),
                  children: r,
                },
              ],
            },
          ];
        })(k)
      : (function (e) {
          var t = e.children,
            n = e.main,
            r = e.mask,
            a = e.attributes,
            i = e.styles,
            o = e.transform;
          if ($e(o) && n.found && !r.found) {
            var s = { x: n.width / n.height / 2, y: 0.5 };
            a.style = Ye(
              T(
                T({}, i),
                {},
                {
                  'transform-origin': ''
                    .concat(s.x + o.x / 16, 'em ')
                    .concat(s.y + o.y / 16, 'em'),
                },
              ),
            );
          }
          return [{ tag: 'svg', attributes: a, children: t }];
        })(k)
  );
}
function Gt(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    s = e.watchable,
    l = void 0 !== s && s,
    u = T(
      T(T({}, o.attributes), i ? { title: i } : {}),
      {},
      { class: o.classes.join(' ') },
    );
  l && (u[oe] = '');
  var c = T({}, o.styles);
  $e(a) &&
    ((c.transform = (function (e) {
      var t = e.transform,
        n = e.width,
        r = void 0 === n ? re : n,
        a = e.height,
        i = void 0 === a ? re : a,
        o = e.startCentered,
        s = void 0 !== o && o,
        l = '';
      return (
        (l +=
          s && te
            ? 'translate('
                .concat(t.x / Ie - r / 2, 'em, ')
                .concat(t.y / Ie - i / 2, 'em) ')
            : s
            ? 'translate(calc(-50% + '
                .concat(t.x / Ie, 'em), calc(-50% + ')
                .concat(t.y / Ie, 'em)) ')
            : 'translate('.concat(t.x / Ie, 'em, ').concat(t.y / Ie, 'em) ')),
        (l += 'scale('
          .concat((t.size / Ie) * (t.flipX ? -1 : 1), ', ')
          .concat((t.size / Ie) * (t.flipY ? -1 : 1), ') ')),
        l + 'rotate('.concat(t.rotate, 'deg) ')
      );
    })({ transform: a, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform));
  var f = Ye(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    i &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [i] }),
    d
  );
}
var Xt = Ze.styles;
function Qt(e) {
  var t = e[0],
    n = e[1],
    r = A(e.slice(4), 1)[0];
  return {
    found: !0,
    width: t,
    height: n,
    icon: Array.isArray(r)
      ? {
          tag: 'g',
          attributes: { class: ''.concat(Re.cssPrefix, '-').concat(Te.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(Re.cssPrefix, '-').concat(Te.SECONDARY),
                fill: 'currentColor',
                d: r[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(Re.cssPrefix, '-').concat(Te.PRIMARY),
                fill: 'currentColor',
                d: r[1],
              },
            },
          ],
        }
      : { tag: 'path', attributes: { fill: 'currentColor', d: r } },
  };
}
var qt = { found: !1, width: 512, height: 512 };
function Kt(e, t) {
  var n = t;
  return (
    'fa' === t && null !== Re.styleDefault && (t = _t()),
    new Promise(function (r, a) {
      if ((Ft('missingIconAbstract'), 'fa' === n)) {
        var i = Ot(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && Xt[t] && Xt[t][e]) return r(Qt(Xt[t][e]));
      !(function (e, t) {
        he ||
          Re.showMissingIcons ||
          !e ||
          console.error(
            'Icon with name "'
              .concat(e, '" and prefix "')
              .concat(t, '" is missing.'),
          );
      })(e, t),
        r(
          T(
            T({}, qt),
            {},
            {
              icon:
                (Re.showMissingIcons && e && Ft('missingIconAbstract')) || {},
            },
          ),
        );
    })
  );
}
var Jt = function () {},
  Zt =
    Re.measurePerformance && X && X.mark && X.measure
      ? X
      : { mark: Jt, measure: Jt },
  en = 'FA "6.3.0"',
  tn = function (e) {
    Zt.mark(''.concat(en, ' ').concat(e, ' ends')),
      Zt.measure(
        ''.concat(en, ' ').concat(e),
        ''.concat(en, ' ').concat(e, ' begins'),
        ''.concat(en, ' ').concat(e, ' ends'),
      );
  },
  nn = {
    begin: function (e) {
      return (
        Zt.mark(''.concat(en, ' ').concat(e, ' begins')),
        function () {
          return tn(e);
        }
      );
    },
    end: tn,
  },
  rn = function () {};
function an(e) {
  return 'string' == typeof (e.getAttribute ? e.getAttribute(oe) : null);
}
function on(e) {
  return $.createElementNS('http://www.w3.org/2000/svg', e);
}
function sn(e) {
  return $.createElement(e);
}
function ln(e) {
  var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .ceFn,
    n = void 0 === t ? ('svg' === e.tag ? on : sn) : t;
  if ('string' == typeof e) return $.createTextNode(e);
  var r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (t) {
      r.setAttribute(t, e.attributes[t]);
    }),
    (e.children || []).forEach(function (e) {
      r.appendChild(ln(e, { ceFn: n }));
    }),
    r
  );
}
var un = {
  replace: function (e) {
    var t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach(function (e) {
          t.parentNode.insertBefore(ln(e), t);
        }),
        null === t.getAttribute(oe) && Re.keepOriginalSource)
      ) {
        var n = $.createComment(
          (function (e) {
            var t = ' '.concat(e.outerHTML, ' ');
            return ''.concat(t, 'Font Awesome fontawesome.com ');
          })(t),
        );
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    var t = e[0],
      n = e[1];
    if (~Ve(t).indexOf(Re.replacementClass)) return un.replace(e);
    var r = new RegExp(''.concat(Re.cssPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      var a = n[0].attributes.class.split(' ').reduce(
        function (e, t) {
          return (
            t === Re.replacementClass || t.match(r)
              ? e.toSvg.push(t)
              : e.toNode.push(t),
            e
          );
        },
        { toNode: [], toSvg: [] },
      );
      (n[0].attributes.class = a.toSvg.join(' ')),
        0 === a.toNode.length
          ? t.removeAttribute('class')
          : t.setAttribute('class', a.toNode.join(' '));
    }
    var i = n
      .map(function (e) {
        return nt(e);
      })
      .join('\n');
    t.setAttribute(oe, ''), (t.innerHTML = i);
  },
};
function cn(e) {
  e();
}
function fn(e, t) {
  var n = 'function' == typeof t ? t : rn;
  if (0 === e.length) n();
  else {
    var r = cn;
    Re.mutateApproach === de && (r = Y.requestAnimationFrame || cn),
      r(function () {
        var t =
            !0 === Re.autoReplaceSvg
              ? un.replace
              : un[Re.autoReplaceSvg] || un.replace,
          r = nn.begin('mutate');
        e.map(t), r(), n();
      });
  }
}
var dn = !1;
function pn() {
  dn = !0;
}
function hn() {
  dn = !1;
}
var mn = null;
function vn(e) {
  if (G && Re.observeMutations) {
    var t = e.treeCallback,
      n = void 0 === t ? rn : t,
      r = e.nodeCallback,
      a = void 0 === r ? rn : r,
      i = e.pseudoElementsCallback,
      o = void 0 === i ? rn : i,
      s = e.observeMutationsRoot,
      l = void 0 === s ? $ : s;
    (mn = new G(function (e) {
      if (!dn) {
        var t = _t();
        Be(e).forEach(function (e) {
          if (
            ('childList' === e.type &&
              e.addedNodes.length > 0 &&
              !an(e.addedNodes[0]) &&
              (Re.searchPseudoElements && o(e.target), n(e.target)),
            'attributes' === e.type &&
              e.target.parentNode &&
              Re.searchPseudoElements &&
              o(e.target.parentNode),
            'attributes' === e.type &&
              an(e.target) &&
              ~Ne.indexOf(e.attributeName))
          )
            if (
              'class' === e.attributeName &&
              (function (e) {
                var t = e.getAttribute ? e.getAttribute(ue) : null,
                  n = e.getAttribute ? e.getAttribute(ce) : null;
                return t && n;
              })(e.target)
            ) {
              var r = Dt(Ve(e.target)),
                i = r.prefix,
                s = r.iconName;
              e.target.setAttribute(ue, i || t),
                s && e.target.setAttribute(ce, s);
            } else
              (l = e.target) &&
                l.classList &&
                l.classList.contains &&
                l.classList.contains(Re.replacementClass) &&
                a(e.target);
          var l;
        });
      }
    })),
      ee &&
        mn.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function gn(e) {
  var t,
    n,
    r = e.getAttribute('data-prefix'),
    a = e.getAttribute('data-icon'),
    i = void 0 !== e.innerText ? e.innerText.trim() : '',
    o = Dt(Ve(e));
  return (
    o.prefix || (o.prefix = _t()),
    r && a && ((o.prefix = r), (o.iconName = a)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        i.length > 0 &&
        (o.iconName =
          ((t = o.prefix),
          (n = e.innerText),
          (vt[t] || {})[n] || St(o.prefix, lt(e.innerText)))),
      !o.iconName &&
        Re.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function bn(e) {
  var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { styleParser: !0 },
    n = gn(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = (function (e) {
      var t = Be(e.attributes).reduce(function (e, t) {
          return (
            'class' !== e.name && 'style' !== e.name && (e[t.name] = t.value), e
          );
        }, {}),
        n = e.getAttribute('title'),
        r = e.getAttribute('data-fa-title-id');
      return (
        Re.autoA11y &&
          (n
            ? (t['aria-labelledby'] = ''
                .concat(Re.replacementClass, '-title-')
                .concat(r || He()))
            : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
        t
      );
    })(e),
    s = jt('parseNodeAttributes', {}, e),
    l = t.styleParser
      ? (function (e) {
          var t = e.getAttribute('style'),
            n = [];
          return (
            t &&
              (n = t.split(';').reduce(function (e, t) {
                var n = t.split(':'),
                  r = n[0],
                  a = n.slice(1);
                return r && a.length > 0 && (e[r] = a.join(':').trim()), e;
              }, {})),
            n
          );
        })(e)
      : [];
  return T(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: a,
      transform: Fe,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: l, attributes: o },
    },
    s,
  );
}
var yn = Ze.styles;
function wn(e) {
  var t = 'nest' === Re.autoReplaceSvg ? bn(e, { styleParser: !1 }) : bn(e);
  return ~t.extra.classes.indexOf(Se)
    ? Ft('generateLayersText', e, t)
    : Ft('generateSvgReplacementMutation', e, t);
}
var kn = new Set();
function xn(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  var n = $.documentElement.classList,
    r = function (e) {
      return n.add(''.concat(fe, '-').concat(e));
    },
    a = function (e) {
      return n.remove(''.concat(fe, '-').concat(e));
    },
    i = Re.autoFetchSvg
      ? kn
      : ge
          .map(function (e) {
            return 'fa-'.concat(e);
          })
          .concat(Object.keys(yn));
  i.includes('fa') || i.push('fa');
  var o = ['.'.concat(Se, ':not([').concat(oe, '])')]
    .concat(
      i.map(function (e) {
        return '.'.concat(e, ':not([').concat(oe, '])');
      }),
    )
    .join(', ');
  if (0 === o.length) return Promise.resolve();
  var s = [];
  try {
    s = Be(e.querySelectorAll(o));
  } catch (ay) {}
  if (!(s.length > 0)) return Promise.resolve();
  r('pending'), a('complete');
  var l = nn.begin('onTree'),
    u = s.reduce(function (e, t) {
      try {
        var n = wn(t);
        n && e.push(n);
      } catch (ay) {
        he || ('MissingIcon' === ay.name && console.error(ay));
      }
      return e;
    }, []);
  return new Promise(function (e, n) {
    Promise.all(u)
      .then(function (n) {
        fn(n, function () {
          r('active'),
            r('complete'),
            a('pending'),
            'function' == typeof t && t(),
            l(),
            e();
        });
      })
      .catch(function (e) {
        l(), n(e);
      });
  });
}
function En(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  wn(e).then(function (e) {
    e && fn([e], t);
  });
}
ge.map(function (e) {
  kn.add('fa-'.concat(e));
}),
  Object.keys(ye[me]).map(kn.add.bind(kn)),
  Object.keys(ye[ve]).map(kn.add.bind(kn)),
  (kn = z(kn));
var Sn = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.transform,
      r = void 0 === n ? Fe : n,
      a = t.symbol,
      i = void 0 !== a && a,
      o = t.mask,
      s = void 0 === o ? null : o,
      l = t.maskId,
      u = void 0 === l ? null : l,
      c = t.title,
      f = void 0 === c ? null : c,
      d = t.titleId,
      p = void 0 === d ? null : d,
      h = t.classes,
      m = void 0 === h ? [] : h,
      v = t.attributes,
      g = void 0 === v ? {} : v,
      b = t.styles,
      y = void 0 === b ? {} : b;
    if (e) {
      var w = e.prefix,
        k = e.iconName,
        x = e.icon;
      return Yt(T({ type: 'icon' }, e), function () {
        return (
          It('beforeDOMElementCreation', { iconDefinition: e, params: t }),
          Re.autoA11y &&
            (f
              ? (g['aria-labelledby'] = ''
                  .concat(Re.replacementClass, '-title-')
                  .concat(p || He()))
              : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
          $t({
            icons: {
              main: Qt(x),
              mask: s
                ? Qt(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: w,
            iconName: k,
            transform: T(T({}, Fe), r),
            symbol: i,
            title: f,
            maskId: u,
            titleId: p,
            extra: { attributes: g, styles: y, classes: m },
          })
        );
      });
    }
  },
  Cn = {
    mixout: function () {
      return {
        icon:
          ((e = Sn),
          function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (t || {}).icon ? t : Ut(t || {}),
              a = n.mask;
            return (
              a && (a = (a || {}).icon ? a : Ut(a || {})),
              e(r, T(T({}, n), {}, { mask: a }))
            );
          }),
      };
      var e;
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (e) {
          return (e.treeCallback = xn), (e.nodeCallback = En), e;
        },
      };
    },
    provides: function (e) {
      (e.i2svg = function (e) {
        var t = e.node,
          n = void 0 === t ? $ : t,
          r = e.callback;
        return xn(n, void 0 === r ? function () {} : r);
      }),
        (e.generateSvgReplacementMutation = function (e, t) {
          var n = t.iconName,
            r = t.title,
            a = t.titleId,
            i = t.prefix,
            o = t.transform,
            s = t.symbol,
            l = t.mask,
            u = t.maskId,
            c = t.extra;
          return new Promise(function (t, f) {
            Promise.all([
              Kt(n, i),
              l.iconName
                ? Kt(l.iconName, l.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (l) {
                var f = A(l, 2),
                  d = f[0],
                  p = f[1];
                t([
                  e,
                  $t({
                    icons: { main: d, mask: p },
                    prefix: i,
                    iconName: n,
                    transform: o,
                    symbol: s,
                    maskId: u,
                    title: r,
                    titleId: a,
                    extra: c,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(f);
          });
        }),
        (e.generateAbstractIcon = function (e) {
          var t,
            n = e.children,
            r = e.attributes,
            a = e.main,
            i = e.transform,
            o = Ye(e.styles);
          return (
            o.length > 0 && (r.style = o),
            $e(i) &&
              (t = Ft('generateAbstractTransformGrouping', {
                main: a,
                transform: i,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            n.push(t || a.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  On = {
    mixout: function () {
      return {
        layer: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.classes,
            r = void 0 === n ? [] : n;
          return Yt({ type: 'layer' }, function () {
            It('beforeDOMElementCreation', { assembler: e, params: t });
            var n = [];
            return (
              e(function (e) {
                Array.isArray(e)
                  ? e.map(function (e) {
                      n = n.concat(e.abstract);
                    })
                  : (n = n.concat(e.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(Re.cssPrefix, '-layers')]
                      .concat(z(r))
                      .join(' '),
                  },
                  children: n,
                },
              ]
            );
          });
        },
      };
    },
  },
  _n = {
    mixout: function () {
      return {
        counter: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.title,
            r = void 0 === n ? null : n,
            a = t.classes,
            i = void 0 === a ? [] : a,
            o = t.attributes,
            s = void 0 === o ? {} : o,
            l = t.styles,
            u = void 0 === l ? {} : l;
          return Yt({ type: 'counter', content: e }, function () {
            return (
              It('beforeDOMElementCreation', { content: e, params: t }),
              (function (e) {
                var t = e.content,
                  n = e.title,
                  r = e.extra,
                  a = T(
                    T(T({}, r.attributes), n ? { title: n } : {}),
                    {},
                    { class: r.classes.join(' ') },
                  ),
                  i = Ye(r.styles);
                i.length > 0 && (a.style = i);
                var o = [];
                return (
                  o.push({ tag: 'span', attributes: a, children: [t] }),
                  n &&
                    o.push({
                      tag: 'span',
                      attributes: { class: 'sr-only' },
                      children: [n],
                    }),
                  o
                );
              })({
                content: e.toString(),
                title: r,
                extra: {
                  attributes: s,
                  styles: u,
                  classes: [''.concat(Re.cssPrefix, '-layers-counter')].concat(
                    z(i),
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  Pn = {
    mixout: function () {
      return {
        text: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.transform,
            r = void 0 === n ? Fe : n,
            a = t.title,
            i = void 0 === a ? null : a,
            o = t.classes,
            s = void 0 === o ? [] : o,
            l = t.attributes,
            u = void 0 === l ? {} : l,
            c = t.styles,
            f = void 0 === c ? {} : c;
          return Yt({ type: 'text', content: e }, function () {
            return (
              It('beforeDOMElementCreation', { content: e, params: t }),
              Gt({
                content: e,
                transform: T(T({}, Fe), r),
                title: i,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(Re.cssPrefix, '-layers-text')].concat(
                    z(s),
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (e) {
      e.generateLayersText = function (e, t) {
        var n = t.title,
          r = t.transform,
          a = t.extra,
          i = null,
          o = null;
        if (te) {
          var s = parseInt(getComputedStyle(e).fontSize, 10),
            l = e.getBoundingClientRect();
          (i = l.width / s), (o = l.height / s);
        }
        return (
          Re.autoA11y && !n && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            e,
            Gt({
              content: e.innerHTML,
              width: i,
              height: o,
              transform: r,
              title: n,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Nn = new RegExp('"', 'ug'),
  Tn = [1105920, 1112319];
function Dn(e, t) {
  var n = ''.concat(le).concat(t.replace(':', '-'));
  return new Promise(function (r, a) {
    if (null !== e.getAttribute(n)) return r();
    var i,
      o,
      s,
      l = Be(e.children).filter(function (e) {
        return e.getAttribute(se) === t;
      })[0],
      u = Y.getComputedStyle(e, t),
      c = u.getPropertyValue('font-family').match(Ce),
      f = u.getPropertyValue('font-weight'),
      d = u.getPropertyValue('content');
    if (l && !c) return e.removeChild(l), r();
    if (c && 'none' !== d && '' !== d) {
      var p = u.getPropertyValue('content'),
        h = ~['Sharp'].indexOf(c[2]) ? ve : me,
        m = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(c[2])
          ? we[h][c[2].toLowerCase()]
          : Oe[h][f],
        v = (function (e) {
          var t,
            n,
            r,
            a,
            i,
            o = e.replace(Nn, ''),
            s =
              ((n = 0),
              (a = (t = o).length),
              (i = t.charCodeAt(n)) >= 55296 &&
              i <= 56319 &&
              a > n + 1 &&
              (r = t.charCodeAt(n + 1)) >= 56320 &&
              r <= 57343
                ? 1024 * (i - 55296) + r - 56320 + 65536
                : i),
            l = s >= Tn[0] && s <= Tn[1],
            u = 2 === o.length && o[0] === o[1];
          return { value: lt(u ? o[0] : o), isSecondary: l || u };
        })(p),
        g = v.value,
        b = v.isSecondary,
        y = c[0].startsWith('FontAwesome'),
        w = St(m, g),
        k = w;
      if (y) {
        var x =
          ((o = bt[(i = g)]),
          (s = St('fas', i)),
          o ||
            (s ? { prefix: 'fas', iconName: s } : null) || {
              prefix: null,
              iconName: null,
            });
        x.iconName && x.prefix && ((w = x.iconName), (m = x.prefix));
      }
      if (
        !w ||
        b ||
        (l && l.getAttribute(ue) === m && l.getAttribute(ce) === k)
      )
        r();
      else {
        e.setAttribute(n, k), l && e.removeChild(l);
        var E = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: Fe,
            symbol: !1,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            extra: { classes: [], styles: {}, attributes: {} },
          },
          S = E.extra;
        (S.attributes[se] = t),
          Kt(w, m)
            .then(function (a) {
              var i = $t(
                  T(
                    T({}, E),
                    {},
                    {
                      icons: { main: a, mask: Pt() },
                      prefix: m,
                      iconName: k,
                      extra: S,
                      watchable: !0,
                    },
                  ),
                ),
                o = $.createElement('svg');
              '::before' === t
                ? e.insertBefore(o, e.firstChild)
                : e.appendChild(o),
                (o.outerHTML = i
                  .map(function (e) {
                    return nt(e);
                  })
                  .join('\n')),
                e.removeAttribute(n),
                r();
            })
            .catch(a);
      }
    } else r();
  });
}
function Mn(e) {
  return Promise.all([Dn(e, '::before'), Dn(e, '::after')]);
}
function Ln(e) {
  return !(
    e.parentNode === document.head ||
    ~pe.indexOf(e.tagName.toUpperCase()) ||
    e.getAttribute(se) ||
    (e.parentNode && 'svg' === e.parentNode.tagName)
  );
}
function An(e) {
  if (ee)
    return new Promise(function (t, n) {
      var r = Be(e.querySelectorAll('*')).filter(Ln).map(Mn),
        a = nn.begin('searchPseudoElements');
      pn(),
        Promise.all(r)
          .then(function () {
            a(), hn(), t();
          })
          .catch(function () {
            a(), hn(), n();
          });
    });
}
var zn = !1,
  Rn = function (e) {
    return e
      .toLowerCase()
      .split(' ')
      .reduce(
        function (e, t) {
          var n = t.toLowerCase().split('-'),
            r = n[0],
            a = n.slice(1).join('-');
          if (r && 'h' === a) return (e.flipX = !0), e;
          if (r && 'v' === a) return (e.flipY = !0), e;
          if (((a = parseFloat(a)), isNaN(a))) return e;
          switch (r) {
            case 'grow':
              e.size = e.size + a;
              break;
            case 'shrink':
              e.size = e.size - a;
              break;
            case 'left':
              e.x = e.x - a;
              break;
            case 'right':
              e.x = e.x + a;
              break;
            case 'up':
              e.y = e.y - a;
              break;
            case 'down':
              e.y = e.y + a;
              break;
            case 'rotate':
              e.rotate = e.rotate + a;
          }
          return e;
        },
        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
      );
  },
  jn = {
    mixout: function () {
      return {
        parse: {
          transform: function (e) {
            return Rn(e);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-transform');
          return n && (e.transform = Rn(n)), e;
        },
      };
    },
    provides: function (e) {
      e.generateAbstractTransformGrouping = function (e) {
        var t = e.main,
          n = e.transform,
          r = e.containerWidth,
          a = e.iconWidth,
          i = { transform: 'translate('.concat(r / 2, ' 256)') },
          o = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '),
          s = 'scale('
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
          l = 'rotate('.concat(n.rotate, ' 0 0)'),
          u = {
            outer: i,
            inner: { transform: ''.concat(o, ' ').concat(s, ' ').concat(l) },
            path: { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
          };
        return {
          tag: 'g',
          attributes: T({}, u.outer),
          children: [
            {
              tag: 'g',
              attributes: T({}, u.inner),
              children: [
                {
                  tag: t.icon.tag,
                  children: t.icon.children,
                  attributes: T(T({}, t.icon.attributes), u.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  In = { x: 0, y: 0, width: '100%', height: '100%' };
function Fn(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
var Un,
  Hn = {
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-mask'),
            r = n
              ? Dt(
                  n.split(' ').map(function (e) {
                    return e.trim();
                  }),
                )
              : Pt();
          return (
            r.prefix || (r.prefix = _t()),
            (e.mask = r),
            (e.maskId = t.getAttribute('data-fa-mask-id')),
            e
          );
        },
      };
    },
    provides: function (e) {
      e.generateAbstractMask = function (e) {
        var t,
          n = e.children,
          r = e.attributes,
          a = e.main,
          i = e.mask,
          o = e.maskId,
          s = e.transform,
          l = a.width,
          u = a.icon,
          c = i.width,
          f = i.icon,
          d = (function (e) {
            var t = e.transform,
              n = e.containerWidth,
              r = e.iconWidth,
              a = { transform: 'translate('.concat(n / 2, ' 256)') },
              i = 'translate('.concat(32 * t.x, ', ').concat(32 * t.y, ') '),
              o = 'scale('
                .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
                .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
              s = 'rotate('.concat(t.rotate, ' 0 0)');
            return {
              outer: a,
              inner: { transform: ''.concat(i, ' ').concat(o, ' ').concat(s) },
              path: { transform: 'translate('.concat((r / 2) * -1, ' -256)') },
            };
          })({ transform: s, containerWidth: c, iconWidth: l }),
          p = { tag: 'rect', attributes: T(T({}, In), {}, { fill: 'white' }) },
          h = u.children ? { children: u.children.map(Fn) } : {},
          m = {
            tag: 'g',
            attributes: T({}, d.inner),
            children: [
              Fn(
                T(
                  { tag: u.tag, attributes: T(T({}, u.attributes), d.path) },
                  h,
                ),
              ),
            ],
          },
          v = { tag: 'g', attributes: T({}, d.outer), children: [m] },
          g = 'mask-'.concat(o || He()),
          b = 'clip-'.concat(o || He()),
          y = {
            tag: 'mask',
            attributes: T(
              T({}, In),
              {},
              {
                id: g,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              },
            ),
            children: [p, v],
          },
          w = {
            tag: 'defs',
            children: [
              {
                tag: 'clipPath',
                attributes: { id: b },
                children: ((t = f), 'g' === t.tag ? t.children : [t]),
              },
              y,
            ],
          };
        return (
          n.push(w, {
            tag: 'rect',
            attributes: T(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(b, ')'),
                mask: 'url(#'.concat(g, ')'),
              },
              In,
            ),
          }),
          { children: n, attributes: r }
        );
      };
    },
  };
(Un = { mixoutsTo: Vt }.mixoutsTo),
  (Lt = [
    Ke,
    Cn,
    On,
    _n,
    Pn,
    {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (e) {
            return (e.pseudoElementsCallback = An), e;
          },
        };
      },
      provides: function (e) {
        e.pseudoElements2svg = function (e) {
          var t = e.node,
            n = void 0 === t ? $ : t;
          Re.searchPseudoElements && An(n);
        };
      },
    },
    {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              pn(), (zn = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            vn(jt('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            mn && mn.disconnect();
          },
          watch: function (e) {
            var t = e.observeMutationsRoot;
            zn
              ? hn()
              : vn(
                  jt('mutationObserverCallbacks', { observeMutationsRoot: t }),
                );
          },
        };
      },
    },
    jn,
    Hn,
    {
      provides: function (e) {
        var t = !1;
        Y.matchMedia &&
          (t = Y.matchMedia('(prefers-reduced-motion: reduce)').matches),
          (e.missingIconAbstract = function () {
            var e = [],
              n = { fill: 'currentColor' },
              r = {
                attributeType: 'XML',
                repeatCount: 'indefinite',
                dur: '2s',
              };
            e.push({
              tag: 'path',
              attributes: T(
                T({}, n),
                {},
                {
                  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                },
              ),
            });
            var a = T(T({}, r), {}, { attributeName: 'opacity' }),
              i = {
                tag: 'circle',
                attributes: T(T({}, n), {}, { cx: '256', cy: '364', r: '28' }),
                children: [],
              };
            return (
              t ||
                i.children.push(
                  {
                    tag: 'animate',
                    attributes: T(
                      T({}, r),
                      {},
                      { attributeName: 'r', values: '28;14;28;28;14;28;' },
                    ),
                  },
                  {
                    tag: 'animate',
                    attributes: T(T({}, a), {}, { values: '1;0;1;1;0;1;' }),
                  },
                ),
              e.push(i),
              e.push({
                tag: 'path',
                attributes: T(
                  T({}, n),
                  {},
                  {
                    opacity: '1',
                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                  },
                ),
                children: t
                  ? []
                  : [
                      {
                        tag: 'animate',
                        attributes: T(T({}, a), {}, { values: '1;0;0;0;0;1;' }),
                      },
                    ],
              }),
              t ||
                e.push({
                  tag: 'path',
                  attributes: T(
                    T({}, n),
                    {},
                    {
                      opacity: '0',
                      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                    },
                  ),
                  children: [
                    {
                      tag: 'animate',
                      attributes: T(T({}, a), {}, { values: '0;0;1;1;0;0;' }),
                    },
                  ],
                }),
              { tag: 'g', attributes: { class: 'missing' }, children: e }
            );
          });
      },
    },
    {
      hooks: function () {
        return {
          parseNodeAttributes: function (e, t) {
            var n = t.getAttribute('data-fa-symbol'),
              r = null !== n && ('' === n || n);
            return (e.symbol = r), e;
          },
        };
      },
    },
  ]),
  (At = {}),
  Object.keys(zt).forEach(function (e) {
    -1 === Rt.indexOf(e) && delete zt[e];
  }),
  Lt.forEach(function (e) {
    var t = e.mixout ? e.mixout() : {};
    if (
      (Object.keys(t).forEach(function (e) {
        'function' == typeof t[e] && (Un[e] = t[e]),
          'object' === D(t[e]) &&
            Object.keys(t[e]).forEach(function (n) {
              Un[e] || (Un[e] = {}), (Un[e][n] = t[e][n]);
            });
      }),
      e.hooks)
    ) {
      var n = e.hooks();
      Object.keys(n).forEach(function (e) {
        At[e] || (At[e] = []), At[e].push(n[e]);
      });
    }
    e.provides && e.provides(zt);
  }),
  Vt.noAuto,
  Vt.config,
  Vt.library,
  Vt.dom;
var Bn = Vt.parse;
Vt.findIconDefinition, Vt.toHtml;
var Vn = Vt.icon;
Vt.layer, Vt.text, Vt.counter;
var Wn = { exports: {} },
  Yn = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
function $n() {}
function Gn() {}
Gn.resetWarningCache = $n;
Wn.exports = (function () {
  function e(e, t, n, r, a, i) {
    if (i !== Yn) {
      var o = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((o.name = 'Invariant Violation'), o);
    }
  }
  function t() {
    return e;
  }
  e.isRequired = e;
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Gn,
    resetWarningCache: $n,
  };
  return (n.PropTypes = n), n;
})();
var Xn = Wn.exports;
function Qn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Qn(Object(n), !0).forEach(function (t) {
          Jn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qn(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Kn(e) {
  return (Kn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function Jn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Zn(e, t) {
  if (null == e) return {};
  var n,
    r,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
  }
  return a;
}
function er(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return tr(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if ('string' == typeof e) return tr(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return tr(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function tr(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nr(e) {
  return (function (e) {
    return (e -= 0) == e;
  })(e)
    ? e
    : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
        return t ? t.toUpperCase() : '';
      }))
        .substr(0, 1)
        .toLowerCase() + e.substr(1);
}
var rr = ['style'];
var ar = !1;
try {
  ar = !0;
} catch (ay) {}
function ir(e) {
  return e && 'object' === Kn(e) && e.prefix && e.iconName && e.icon
    ? e
    : Bn.icon
    ? Bn.icon(e)
    : null === e
    ? null
    : e && 'object' === Kn(e) && e.prefix && e.iconName
    ? e
    : Array.isArray(e) && 2 === e.length
    ? { prefix: e[0], iconName: e[1] }
    : 'string' == typeof e
    ? { prefix: 'fas', iconName: e }
    : void 0;
}
function or(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Jn({}, e, t)
    : {};
}
var sr = e.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    a = e.symbol,
    i = e.className,
    o = e.title,
    s = e.titleId,
    l = e.maskId,
    u = ir(n),
    c = or(
      'classes',
      [].concat(
        er(
          (function (e) {
            var t,
              n = e.beat,
              r = e.fade,
              a = e.beatFade,
              i = e.bounce,
              o = e.shake,
              s = e.flash,
              l = e.spin,
              u = e.spinPulse,
              c = e.spinReverse,
              f = e.pulse,
              d = e.fixedWidth,
              p = e.inverse,
              h = e.border,
              m = e.listItem,
              v = e.flip,
              g = e.size,
              b = e.rotation,
              y = e.pull,
              w =
                (Jn(
                  (t = {
                    'fa-beat': n,
                    'fa-fade': r,
                    'fa-beat-fade': a,
                    'fa-bounce': i,
                    'fa-shake': o,
                    'fa-flash': s,
                    'fa-spin': l,
                    'fa-spin-reverse': c,
                    'fa-spin-pulse': u,
                    'fa-pulse': f,
                    'fa-fw': d,
                    'fa-inverse': p,
                    'fa-border': h,
                    'fa-li': m,
                    'fa-flip': !0 === v,
                    'fa-flip-horizontal': 'horizontal' === v || 'both' === v,
                    'fa-flip-vertical': 'vertical' === v || 'both' === v,
                  }),
                  'fa-'.concat(g),
                  null != g,
                ),
                Jn(t, 'fa-rotate-'.concat(b), null != b && 0 !== b),
                Jn(t, 'fa-pull-'.concat(y), null != y),
                Jn(t, 'fa-swap-opacity', e.swapOpacity),
                t);
            return Object.keys(w)
              .map(function (e) {
                return w[e] ? e : null;
              })
              .filter(function (e) {
                return e;
              });
          })(e),
        ),
        er(i.split(' ')),
      ),
    ),
    f = or(
      'transform',
      'string' == typeof e.transform ? Bn.transform(e.transform) : e.transform,
    ),
    d = or('mask', ir(r)),
    p = Vn(
      u,
      qn(
        qn(qn(qn({}, c), f), d),
        {},
        { symbol: a, title: o, titleId: s, maskId: l },
      ),
    );
  if (!p)
    return (
      (function () {
        var e;
        !ar &&
          console &&
          'function' == typeof console.error &&
          (e = console).error.apply(e, arguments);
      })('Could not find icon', u),
      null
    );
  var h = p.abstract,
    m = { ref: t };
  return (
    Object.keys(e).forEach(function (t) {
      sr.defaultProps.hasOwnProperty(t) || (m[t] = e[t]);
    }),
    lr(h[0], m)
  );
});
(sr.displayName = 'FontAwesomeIcon'),
  (sr.propTypes = {
    beat: Xn.bool,
    border: Xn.bool,
    beatFade: Xn.bool,
    bounce: Xn.bool,
    className: Xn.string,
    fade: Xn.bool,
    flash: Xn.bool,
    mask: Xn.oneOfType([Xn.object, Xn.array, Xn.string]),
    maskId: Xn.string,
    fixedWidth: Xn.bool,
    inverse: Xn.bool,
    flip: Xn.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
    icon: Xn.oneOfType([Xn.object, Xn.array, Xn.string]),
    listItem: Xn.bool,
    pull: Xn.oneOf(['right', 'left']),
    pulse: Xn.bool,
    rotation: Xn.oneOf([0, 90, 180, 270]),
    shake: Xn.bool,
    size: Xn.oneOf([
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x',
    ]),
    spin: Xn.bool,
    spinPulse: Xn.bool,
    spinReverse: Xn.bool,
    symbol: Xn.oneOfType([Xn.bool, Xn.string]),
    title: Xn.string,
    titleId: Xn.string,
    transform: Xn.oneOfType([Xn.string, Xn.object]),
    swapOpacity: Xn.bool,
  }),
  (sr.defaultProps = {
    border: !1,
    className: '',
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: !1,
  });
var lr = function e(t, n) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ('string' == typeof n) return n;
  var a = (n.children || []).map(function (n) {
      return e(t, n);
    }),
    i = Object.keys(n.attributes || {}).reduce(
      function (e, t) {
        var r = n.attributes[t];
        switch (t) {
          case 'class':
            (e.attrs.className = r), delete n.attributes.class;
            break;
          case 'style':
            e.attrs.style = r
              .split(';')
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e;
              })
              .reduce(function (e, t) {
                var n,
                  r = t.indexOf(':'),
                  a = nr(t.slice(0, r)),
                  i = t.slice(r + 1).trim();
                return (
                  a.startsWith('webkit')
                    ? (e[((n = a), n.charAt(0).toUpperCase() + n.slice(1))] = i)
                    : (e[a] = i),
                  e
                );
              }, {});
            break;
          default:
            0 === t.indexOf('aria-') || 0 === t.indexOf('data-')
              ? (e.attrs[t.toLowerCase()] = r)
              : (e.attrs[nr(t)] = r);
        }
        return e;
      },
      { attrs: {} },
    ),
    o = r.style,
    s = void 0 === o ? {} : o,
    l = Zn(r, rr);
  return (
    (i.attrs.style = qn(qn({}, i.attrs.style), s)),
    t.apply(void 0, [n.tag, qn(qn({}, i.attrs), l)].concat(er(a)))
  );
}.bind(null, e.createElement);
const ur = new Set(['children', 'localName', 'ref', 'style', 'className']),
  cr = new WeakMap(),
  fr = (e, t, n, r, a) => {
    const i = null == a ? void 0 : a[t];
    void 0 === i || n === r
      ? null == n && t in HTMLElement.prototype
        ? e.removeAttribute(t)
        : (e[t] = n)
      : ((e, t, n) => {
          let r = cr.get(e);
          void 0 === r && cr.set(e, (r = new Map()));
          let a = r.get(t);
          void 0 !== n
            ? void 0 === a
              ? (r.set(t, (a = { handleEvent: n })), e.addEventListener(t, a))
              : (a.handleEvent = n)
            : void 0 !== a && (r.delete(t), e.removeEventListener(t, a));
        })(e, i, n);
  };
var dr,
  pr = { exports: {} };
(dr = pr),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var a = arguments[r];
        if (a) {
          var i = typeof a;
          if ('string' === i || 'number' === i) n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var o = t.apply(null, a);
              o && n.push(o);
            }
          } else if ('object' === i) {
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes('[native code]')
            ) {
              n.push(a.toString());
              continue;
            }
            for (var s in a) e.call(a, s) && a[s] && n.push(s);
          }
        }
      }
      return n.join(' ');
    }
    dr.exports ? ((t.default = t), (dr.exports = t)) : (window.classNames = t);
  })();
var hr = pr.exports;
function mr(e, t) {
  return (mr = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
var vr = { exports: {} },
  gr = {},
  br = e,
  yr = Symbol.for('react.element'),
  wr = Symbol.for('react.fragment'),
  kr = Object.prototype.hasOwnProperty,
  xr = br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Er = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sr(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  for (r in (void 0 !== n && (i = '' + n),
  void 0 !== t.key && (i = '' + t.key),
  void 0 !== t.ref && (o = t.ref),
  t))
    kr.call(t, r) && !Er.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
  return {
    $$typeof: yr,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: xr.current,
  };
}
(gr.Fragment = wr), (gr.jsx = Sr), (gr.jsxs = Sr), (vr.exports = gr);
const Cr = r.createContext({
  prefixes: {},
  breakpoints: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  minBreakpoint: 'xs',
});
function Or(e, t) {
  const { prefixes: n } = r.useContext(Cr);
  return e || n[t] || t;
}
function _r() {
  const { dir: e } = r.useContext(Cr);
  return 'rtl' === e;
}
function Pr(e) {
  return (e && e.ownerDocument) || document;
}
function Nr(e, t) {
  return (function (e) {
    var t = Pr(e);
    return (t && t.defaultView) || window;
  })(e).getComputedStyle(e, t);
}
var Tr = /([A-Z])/g;
var Dr = /^ms-/;
function Mr(e) {
  return (function (e) {
    return e.replace(Tr, '-$1').toLowerCase();
  })(e).replace(Dr, '-ms-');
}
var Lr =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Ar(e, t) {
  var n = '',
    r = '';
  if ('string' == typeof t)
    return e.style.getPropertyValue(Mr(t)) || Nr(e).getPropertyValue(Mr(t));
  Object.keys(t).forEach(function (a) {
    var i = t[a];
    i || 0 === i
      ? !(function (e) {
          return !(!e || !Lr.test(e));
        })(a)
        ? (n += Mr(a) + ': ' + i + ';')
        : (r += a + '(' + i + ') ')
      : e.style.removeProperty(Mr(a));
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var zr = { exports: {} },
  Rr = {},
  jr = { exports: {} },
  Ir = {};
!(function (e) {
  function t(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
      var r = (n - 1) >>> 1,
        i = e[r];
      if (!(0 < a(i, t))) break e;
      (e[r] = t), (e[n] = i), (n = r);
    }
  }
  function n(e) {
    return 0 === e.length ? null : e[0];
  }
  function r(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
        var s = 2 * (r + 1) - 1,
          l = e[s],
          u = s + 1,
          c = e[u];
        if (0 > a(l, n))
          u < i && 0 > a(c, l)
            ? ((e[r] = c), (e[u] = n), (r = u))
            : ((e[r] = l), (e[s] = n), (r = s));
        else {
          if (!(u < i && 0 > a(c, n))) break e;
          (e[r] = c), (e[u] = n), (r = u);
        }
      }
    }
    return t;
  }
  function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    h = !1,
    m = !1,
    v = 'function' == typeof setTimeout ? setTimeout : null,
    g = 'function' == typeof clearTimeout ? clearTimeout : null,
    b = 'undefined' != typeof setImmediate ? setImmediate : null;
  function y(e) {
    for (var a = n(u); null !== a; ) {
      if (null === a.callback) r(u);
      else {
        if (!(a.startTime <= e)) break;
        r(u), (a.sortIndex = a.expirationTime), t(l, a);
      }
      a = n(u);
    }
  }
  function w(e) {
    if (((m = !1), y(e), !h))
      if (null !== n(l)) (h = !0), M(k);
      else {
        var t = n(u);
        null !== t && L(w, t.startTime - e);
      }
  }
  function k(t, a) {
    (h = !1), m && ((m = !1), g(C), (C = -1)), (p = !0);
    var i = d;
    try {
      for (
        y(a), f = n(l);
        null !== f && (!(f.expirationTime > a) || (t && !P()));

      ) {
        var o = f.callback;
        if ('function' == typeof o) {
          (f.callback = null), (d = f.priorityLevel);
          var s = o(f.expirationTime <= a);
          (a = e.unstable_now()),
            'function' == typeof s ? (f.callback = s) : f === n(l) && r(l),
            y(a);
        } else r(l);
        f = n(l);
      }
      if (null !== f) var c = !0;
      else {
        var v = n(u);
        null !== v && L(w, v.startTime - a), (c = !1);
      }
      return c;
    } finally {
      (f = null), (d = i), (p = !1);
    }
  }
  'undefined' != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var x,
    E = !1,
    S = null,
    C = -1,
    O = 5,
    _ = -1;
  function P() {
    return !(e.unstable_now() - _ < O);
  }
  function N() {
    if (null !== S) {
      var t = e.unstable_now();
      _ = t;
      var n = !0;
      try {
        n = S(!0, t);
      } finally {
        n ? x() : ((E = !1), (S = null));
      }
    } else E = !1;
  }
  if ('function' == typeof b)
    x = function () {
      b(N);
    };
  else if ('undefined' != typeof MessageChannel) {
    var T = new MessageChannel(),
      D = T.port2;
    (T.port1.onmessage = N),
      (x = function () {
        D.postMessage(null);
      });
  } else
    x = function () {
      v(N, 0);
    };
  function M(e) {
    (S = e), E || ((E = !0), x());
  }
  function L(t, n) {
    C = v(function () {
      t(e.unstable_now());
    }, n);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), M(k));
    }),
    (e.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (O = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (e) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = d;
      }
      var n = d;
      d = t;
      try {
        return e();
      } finally {
        d = n;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = d;
      d = e;
      try {
        return t();
      } finally {
        d = n;
      }
    }),
    (e.unstable_scheduleCallback = function (r, a, i) {
      var o = e.unstable_now();
      switch (
        ('object' == typeof i && null !== i
          ? (i = 'number' == typeof (i = i.delay) && 0 < i ? o + i : o)
          : (i = o),
        r)
      ) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return (
        (r = {
          id: c++,
          callback: a,
          priorityLevel: r,
          startTime: i,
          expirationTime: (s = i + s),
          sortIndex: -1,
        }),
        i > o
          ? ((r.sortIndex = i),
            t(u, r),
            null === n(l) &&
              r === n(u) &&
              (m ? (g(C), (C = -1)) : (m = !0), L(w, i - o)))
          : ((r.sortIndex = s), t(l, r), h || p || ((h = !0), M(k))),
        r
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (e) {
      var t = d;
      return function () {
        var n = d;
        d = t;
        try {
          return e.apply(this, arguments);
        } finally {
          d = n;
        }
      };
    });
})(Ir),
  (jr.exports = Ir);
var Fr = e,
  Ur = jr.exports;
function Hr(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Br = new Set(),
  Vr = {};
function Wr(e, t) {
  Yr(e, t), Yr(e + 'Capture', t);
}
function Yr(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Br.add(t[e]);
}
var $r = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  Gr = Object.prototype.hasOwnProperty,
  Xr =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qr = {},
  qr = {};
function Kr(e, t, n, r, a, i, o) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Jr = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Jr[e] = new Kr(e, 0, !1, e, null, !1, !1);
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    Jr[t] = new Kr(t, 1, !1, e[1], null, !1, !1);
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Jr[e] = new Kr(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    Jr[e] = new Kr(e, 2, !1, e, null, !1, !1);
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      Jr[e] = new Kr(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Jr[e] = new Kr(e, 3, !0, e, null, !1, !1);
  }),
  ['capture', 'download'].forEach(function (e) {
    Jr[e] = new Kr(e, 4, !1, e, null, !1, !1);
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Jr[e] = new Kr(e, 6, !1, e, null, !1, !1);
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    Jr[e] = new Kr(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var Zr = /[\-:]([a-z])/g;
function ea(e) {
  return e[1].toUpperCase();
}
function ta(e, t, n, r) {
  var a = Jr.hasOwnProperty(t) ? Jr[t] : null;
  (null !== a
    ? 0 !== a.type
    : r ||
      !(2 < t.length) ||
      ('o' !== t[0] && 'O' !== t[0]) ||
      ('n' !== t[1] && 'N' !== t[1])) &&
    ((function (e, t, n, r) {
      if (
        null == t ||
        (function (e, t, n, r) {
          if (null !== n && 0 === n.type) return !1;
          switch (typeof t) {
            case 'function':
            case 'symbol':
              return !0;
            case 'boolean':
              return (
                !r &&
                (null !== n
                  ? !n.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e)
              );
            default:
              return !1;
          }
        })(e, t, n, r)
      )
        return !0;
      if (r) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    })(t, n, a, r) && (n = null),
    r || null === a
      ? (function (e) {
          return (
            !!Gr.call(qr, e) ||
            (!Gr.call(Qr, e) &&
              (Xr.test(e) ? (qr[e] = !0) : ((Qr[e] = !0), !1)))
          );
        })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zr, ea);
    Jr[t] = new Kr(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Zr, ea);
      Jr[t] = new Kr(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(Zr, ea);
    Jr[t] = new Kr(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    Jr[e] = new Kr(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (Jr.xlinkHref = new Kr(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  )),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Jr[e] = new Kr(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var na = Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ra = Symbol.for('react.element'),
  aa = Symbol.for('react.portal'),
  ia = Symbol.for('react.fragment'),
  oa = Symbol.for('react.strict_mode'),
  sa = Symbol.for('react.profiler'),
  la = Symbol.for('react.provider'),
  ua = Symbol.for('react.context'),
  ca = Symbol.for('react.forward_ref'),
  fa = Symbol.for('react.suspense'),
  da = Symbol.for('react.suspense_list'),
  pa = Symbol.for('react.memo'),
  ha = Symbol.for('react.lazy'),
  ma = Symbol.for('react.offscreen'),
  va = Symbol.iterator;
function ga(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (va && e[va]) || e['@@iterator'])
    ? e
    : null;
}
var ba,
  ya = Object.assign;
function wa(e) {
  if (void 0 === ba)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ba = (t && t[1]) || '';
    }
  return '\n' + ba + e;
}
var ka = !1;
function xa(e, t) {
  if (!e || ka) return '';
  ka = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        'object' == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && 'string' == typeof u.stack) {
      for (
        var a = u.stack.split('\n'),
          i = r.stack.split('\n'),
          o = a.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && a[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (a[o] !== i[s]) {
          if (1 !== o || 1 !== s)
            do {
              if ((o--, 0 > --s || a[o] !== i[s])) {
                var l = '\n' + a[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            } while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (ka = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? wa(e) : '';
}
function Ea(e) {
  switch (e.tag) {
    case 5:
      return wa(e.type);
    case 16:
      return wa('Lazy');
    case 13:
      return wa('Suspense');
    case 19:
      return wa('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = xa(e.type, !1));
    case 11:
      return (e = xa(e.type.render, !1));
    case 1:
      return (e = xa(e.type, !0));
    default:
      return '';
  }
}
function Sa(e) {
  if (null == e) return null;
  if ('function' == typeof e) return e.displayName || e.name || null;
  if ('string' == typeof e) return e;
  switch (e) {
    case ia:
      return 'Fragment';
    case aa:
      return 'Portal';
    case sa:
      return 'Profiler';
    case oa:
      return 'StrictMode';
    case fa:
      return 'Suspense';
    case da:
      return 'SuspenseList';
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case ua:
        return (e.displayName || 'Context') + '.Consumer';
      case la:
        return (e._context.displayName || 'Context') + '.Provider';
      case ca:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              '' !== (e = t.displayName || t.name || '')
                ? 'ForwardRef(' + e + ')'
                : 'ForwardRef'),
          e
        );
      case pa:
        return null !== (t = e.displayName || null) ? t : Sa(e.type) || 'Memo';
      case ha:
        (t = e._payload), (e = e._init);
        try {
          return Sa(e(t));
        } catch (n) {}
    }
  return null;
}
function Ca(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = (e = t.render).displayName || e.name || ''),
        t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Sa(t);
    case 8:
      return t === oa ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ('function' == typeof t) return t.displayName || t.name || null;
      if ('string' == typeof t) return t;
  }
  return null;
}
function Oa(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
    case 'object':
      return e;
    default:
      return '';
  }
}
function _a(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  );
}
function Pa(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = _a(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== n &&
        'function' == typeof n.get &&
        'function' == typeof n.set
      ) {
        var a = n.get,
          i = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (e) {
              (r = '' + e), i.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = '' + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e));
}
function Na(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = _a(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function Ta(e) {
  if (
    void 0 === (e = e || ('undefined' != typeof document ? document : void 0))
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function Da(e, t) {
  var n = t.checked;
  return ya({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = null == t.defaultValue ? '' : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = Oa(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function La(e, t) {
  null != (t = t.checked) && ta(e, 'checked', t, !1);
}
function Aa(e, t) {
  La(e, t);
  var n = Oa(t.value),
    r = t.type;
  if (null != n)
    'number' === r
      ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if ('submit' === r || 'reset' === r)
    return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? Ra(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ra(e, t.type, Oa(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function za(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        ('submit' !== r && 'reset' !== r) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  '' !== (n = e.name) && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    '' !== n && (e.name = n);
}
function Ra(e, t, n) {
  ('number' === t && Ta(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ja = Array.isArray;
function Ia(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Oa(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n)
        return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
      null !== t || e[a].disabled || (t = e[a]);
    }
    null !== t && (t.selected = !0);
  }
}
function Fa(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(Hr(91));
  return ya({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ua(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(Hr(92));
      if (ja(n)) {
        if (1 < n.length) throw Error(Hr(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Oa(n) };
}
function Ha(e, t) {
  var n = Oa(t.value),
    r = Oa(t.defaultValue);
  null != n &&
    ((n = '' + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = '' + r);
}
function Ba(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Va(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Wa(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Va(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ya,
  $a,
  Ga =
    (($a = function (e, t) {
      if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          (Ya = Ya || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ya.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return $a(e, t);
          });
        }
      : $a);
function Xa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var Qa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qa = ['Webkit', 'ms', 'Moz', 'O'];
function Ka(e, t, n) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : n || 'number' != typeof t || 0 === t || (Qa.hasOwnProperty(e) && Qa[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ja(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf('--'),
        a = Ka(n, t[n], r);
      'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
Object.keys(Qa).forEach(function (e) {
  qa.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qa[t] = Qa[e]);
  });
});
var Za = ya(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ei(e, t) {
  if (t) {
    if (Za[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(Hr(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(Hr(60));
      if (
        'object' != typeof t.dangerouslySetInnerHTML ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(Hr(61));
    }
    if (null != t.style && 'object' != typeof t.style) throw Error(Hr(62));
  }
}
function ti(e, t) {
  if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ni = null;
function ri(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var ai = null,
  ii = null,
  oi = null;
function si(e) {
  if ((e = tu(e))) {
    if ('function' != typeof ai) throw Error(Hr(280));
    var t = e.stateNode;
    t && ((t = ru(t)), ai(e.stateNode, e.type, t));
  }
}
function li(e) {
  ii ? (oi ? oi.push(e) : (oi = [e])) : (ii = e);
}
function ui() {
  if (ii) {
    var e = ii,
      t = oi;
    if (((oi = ii = null), si(e), t)) for (e = 0; e < t.length; e++) si(t[e]);
  }
}
function ci(e, t) {
  return e(t);
}
function fi() {}
var di = !1;
function pi(e, t, n) {
  if (di) return e(t, n);
  di = !0;
  try {
    return ci(e, t, n);
  } finally {
    (di = !1), (null !== ii || null !== oi) && (fi(), ui());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = ru(n);
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        (r = !(
          'button' === (e = e.type) ||
          'input' === e ||
          'select' === e ||
          'textarea' === e
        )),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && 'function' != typeof n) throw Error(Hr(231, t, typeof n));
  return n;
}
var mi = !1;
if ($r)
  try {
    var vi = {};
    Object.defineProperty(vi, 'passive', {
      get: function () {
        mi = !0;
      },
    }),
      window.addEventListener('test', vi, vi),
      window.removeEventListener('test', vi, vi);
  } catch ($a) {
    mi = !1;
  }
function gi(e, t, n, r, a, i, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bi = !1,
  yi = null,
  wi = !1,
  ki = null,
  xi = {
    onError: function (e) {
      (bi = !0), (yi = e);
    },
  };
function Ei(e, t, n, r, a, i, o, s, l) {
  (bi = !1), (yi = null), gi.apply(xi, arguments);
}
function Si(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function Ci(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function Oi(e) {
  if (Si(e) !== e) throw Error(Hr(188));
}
function _i(e) {
  return null !==
    (e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = Si(e))) throw Error(Hr(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (null === a) break;
        var i = a.alternate;
        if (null === i) {
          if (null !== (r = a.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === i.child) {
          for (i = a.child; i; ) {
            if (i === n) return Oi(a), e;
            if (i === r) return Oi(a), t;
            i = i.sibling;
          }
          throw Error(Hr(188));
        }
        if (n.return !== r.return) (n = a), (r = i);
        else {
          for (var o = !1, s = a.child; s; ) {
            if (s === n) {
              (o = !0), (n = a), (r = i);
              break;
            }
            if (s === r) {
              (o = !0), (r = a), (n = i);
              break;
            }
            s = s.sibling;
          }
          if (!o) {
            for (s = i.child; s; ) {
              if (s === n) {
                (o = !0), (n = i), (r = a);
                break;
              }
              if (s === r) {
                (o = !0), (r = i), (n = a);
                break;
              }
              s = s.sibling;
            }
            if (!o) throw Error(Hr(189));
          }
        }
        if (n.alternate !== r) throw Error(Hr(190));
      }
      if (3 !== n.tag) throw Error(Hr(188));
      return n.stateNode.current === n ? e : t;
    })(e))
    ? Pi(e)
    : null;
}
function Pi(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
    var t = Pi(e);
    if (null !== t) return t;
    e = e.sibling;
  }
  return null;
}
var Ni = Ur.unstable_scheduleCallback,
  Ti = Ur.unstable_cancelCallback,
  Di = Ur.unstable_shouldYield,
  Mi = Ur.unstable_requestPaint,
  Li = Ur.unstable_now,
  Ai = Ur.unstable_getCurrentPriorityLevel,
  zi = Ur.unstable_ImmediatePriority,
  Ri = Ur.unstable_UserBlockingPriority,
  ji = Ur.unstable_NormalPriority,
  Ii = Ur.unstable_LowPriority,
  Fi = Ur.unstable_IdlePriority,
  Ui = null,
  Hi = null;
var Bi = Math.clz32
    ? Math.clz32
    : function (e) {
        return (e >>>= 0), 0 === e ? 32 : (31 - ((Vi(e) / Wi) | 0)) | 0;
      },
  Vi = Math.log,
  Wi = Math.LN2;
var Yi = 64,
  $i = 4194304;
function Gi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xi(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    o = 268435455 & n;
  if (0 !== o) {
    var s = o & ~a;
    0 !== s ? (r = Gi(s)) : 0 !== (i &= o) && (r = Gi(i));
  } else 0 !== (o = n & ~a) ? (r = Gi(o)) : 0 !== i && (r = Gi(i));
  if (0 === r) return 0;
  if (
    0 !== t &&
    t !== r &&
    0 == (t & a) &&
    ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i)))
  )
    return t;
  if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
    for (e = e.entanglements, t &= r; 0 < t; )
      (a = 1 << (n = 31 - Bi(t))), (r |= e[n]), (t &= ~a);
  return r;
}
function Qi(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    default:
      return -1;
  }
}
function qi(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function Ki() {
  var e = Yi;
  return 0 == (4194240 & (Yi <<= 1)) && (Yi = 64), e;
}
function Ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zi(e, t, n) {
  (e.pendingLanes |= t),
    536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    ((e = e.eventTimes)[(t = 31 - Bi(t))] = n);
}
function eo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Bi(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var to = 0;
function no(e) {
  return 1 < (e &= -e)
    ? 4 < e
      ? 0 != (268435455 & e)
        ? 16
        : 536870912
      : 4
    : 1;
}
var ro,
  ao,
  io,
  oo,
  so,
  lo = !1,
  uo = [],
  co = null,
  fo = null,
  po = null,
  ho = new Map(),
  mo = new Map(),
  vo = [],
  go =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function bo(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      co = null;
      break;
    case 'dragenter':
    case 'dragleave':
      fo = null;
      break;
    case 'mouseover':
    case 'mouseout':
      po = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ho.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      mo.delete(t.pointerId);
  }
}
function yo(e, t, n, r, a, i) {
  return null === e || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [a],
      }),
      null !== t && null !== (t = tu(t)) && ao(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function wo(e) {
  var t = eu(e.target);
  if (null !== t) {
    var n = Si(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = Ci(n)))
          return (
            (e.blockedOn = t),
            void so(e.priority, function () {
              io(n);
            })
          );
      } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function ko(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = tu(n)) && ao(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (ni = r), n.target.dispatchEvent(r), (ni = null), t.shift();
  }
  return !0;
}
function xo(e, t, n) {
  ko(e) && n.delete(t);
}
function Eo() {
  (lo = !1),
    null !== co && ko(co) && (co = null),
    null !== fo && ko(fo) && (fo = null),
    null !== po && ko(po) && (po = null),
    ho.forEach(xo),
    mo.forEach(xo);
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    lo ||
      ((lo = !0),
      Ur.unstable_scheduleCallback(Ur.unstable_NormalPriority, Eo)));
}
function Co(e) {
  function t(t) {
    return So(t, e);
  }
  if (0 < uo.length) {
    So(uo[0], e);
    for (var n = 1; n < uo.length; n++) {
      var r = uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== co && So(co, e),
      null !== fo && So(fo, e),
      null !== po && So(po, e),
      ho.forEach(t),
      mo.forEach(t),
      n = 0;
    n < vo.length;
    n++
  )
    (r = vo[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < vo.length && null === (n = vo[0]).blockedOn; )
    wo(n), null === n.blockedOn && vo.shift();
}
var Oo = na.ReactCurrentBatchConfig,
  _o = !0;
function Po(e, t, n, r) {
  var a = to,
    i = Oo.transition;
  Oo.transition = null;
  try {
    (to = 1), To(e, t, n, r);
  } finally {
    (to = a), (Oo.transition = i);
  }
}
function No(e, t, n, r) {
  var a = to,
    i = Oo.transition;
  Oo.transition = null;
  try {
    (to = 4), To(e, t, n, r);
  } finally {
    (to = a), (Oo.transition = i);
  }
}
function To(e, t, n, r) {
  if (_o) {
    var a = Mo(e, t, n, r);
    if (null === a) Ol(e, t, r, Do, n), bo(e, r);
    else if (
      (function (e, t, n, r, a) {
        switch (t) {
          case 'focusin':
            return (co = yo(co, e, t, n, r, a)), !0;
          case 'dragenter':
            return (fo = yo(fo, e, t, n, r, a)), !0;
          case 'mouseover':
            return (po = yo(po, e, t, n, r, a)), !0;
          case 'pointerover':
            var i = a.pointerId;
            return ho.set(i, yo(ho.get(i) || null, e, t, n, r, a)), !0;
          case 'gotpointercapture':
            return (
              (i = a.pointerId),
              mo.set(i, yo(mo.get(i) || null, e, t, n, r, a)),
              !0
            );
        }
        return !1;
      })(a, e, t, n, r)
    )
      r.stopPropagation();
    else if ((bo(e, r), 4 & t && -1 < go.indexOf(e))) {
      for (; null !== a; ) {
        var i = tu(a);
        if (
          (null !== i && ro(i),
          null === (i = Mo(e, t, n, r)) && Ol(e, t, r, Do, n),
          i === a)
        )
          break;
        a = i;
      }
      null !== a && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var Do = null;
function Mo(e, t, n, r) {
  if (((Do = null), null !== (e = eu((e = ri(r))))))
    if (null === (t = Si(e))) e = null;
    else if (13 === (n = t.tag)) {
      if (null !== (e = Ci(t))) return e;
      e = null;
    } else if (3 === n) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return 3 === t.tag ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Do = e), null;
}
function Lo(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ai()) {
        case zi:
          return 1;
        case Ri:
          return 4;
        case ji:
        case Ii:
          return 16;
        case Fi:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ao = null,
  zo = null,
  Ro = null;
function jo() {
  if (Ro) return Ro;
  var e,
    t,
    n = zo,
    r = n.length,
    a = 'value' in Ao ? Ao.value : Ao.textContent,
    i = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
  return (Ro = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Io(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function Fo() {
  return !0;
}
function Uo() {
  return !1;
}
function Ho(e) {
  function t(t, n, r, a, i) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = a),
    (this.target = i),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
      )
        ? Fo
        : Uo),
      (this.isPropagationStopped = Uo),
      this
    );
  }
  return (
    ya(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Fo));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Fo));
      },
      persist: function () {},
      isPersistent: Fo,
    }),
    t
  );
}
var Bo,
  Vo,
  Wo,
  Yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $o = Ho(Yo),
  Go = ya({}, Yo, { view: 0, detail: 0 }),
  Xo = Ho(Go),
  Qo = ya({}, Go, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ss,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wo &&
            (Wo && 'mousemove' === e.type
              ? ((Bo = e.screenX - Wo.screenX), (Vo = e.screenY - Wo.screenY))
              : (Vo = Bo = 0),
            (Wo = e)),
          Bo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Vo;
    },
  }),
  qo = Ho(Qo),
  Ko = Ho(ya({}, Qo, { dataTransfer: 0 })),
  Jo = Ho(ya({}, Go, { relatedTarget: 0 })),
  Zo = Ho(ya({}, Yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  es = ya({}, Yo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ts = Ho(es),
  ns = Ho(ya({}, Yo, { data: 0 })),
  rs = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  as = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  is = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function os(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = is[e]) && !!t[e];
}
function ss() {
  return os;
}
var ls = ya({}, Go, {
    key: function (e) {
      if (e.key) {
        var t = rs[e.key] || e.key;
        if ('Unidentified' !== t) return t;
      }
      return 'keypress' === e.type
        ? 13 === (e = Io(e))
          ? 'Enter'
          : String.fromCharCode(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? as[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ss,
    charCode: function (e) {
      return 'keypress' === e.type ? Io(e) : 0;
    },
    keyCode: function (e) {
      return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return 'keypress' === e.type
        ? Io(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? e.keyCode
        : 0;
    },
  }),
  us = Ho(ls),
  cs = Ho(
    ya({}, Qo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  fs = Ho(
    ya({}, Go, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ss,
    }),
  ),
  ds = Ho(ya({}, Yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  ps = ya({}, Qo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hs = Ho(ps),
  ms = [9, 13, 27, 32],
  vs = $r && 'CompositionEvent' in window,
  gs = null;
$r && 'documentMode' in document && (gs = document.documentMode);
var bs = $r && 'TextEvent' in window && !gs,
  ys = $r && (!vs || (gs && 8 < gs && 11 >= gs)),
  ws = String.fromCharCode(32),
  ks = !1;
function xs(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== ms.indexOf(t.keyCode);
    case 'keydown':
      return 229 !== t.keyCode;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Es(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Ss = !1;
var Cs = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!Cs[e.type] : 'textarea' === t;
}
function _s(e, t, n, r) {
  li(r),
    0 < (t = Pl(t, 'onChange')).length &&
      ((n = new $o('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ps = null,
  Ns = null;
function Ts(e) {
  wl(e, 0);
}
function Ds(e) {
  if (Na(nu(e))) return e;
}
function Ms(e, t) {
  if ('change' === e) return t;
}
var Ls = !1;
if ($r) {
  var As;
  if ($r) {
    var zs = 'oninput' in document;
    if (!zs) {
      var Rs = document.createElement('div');
      Rs.setAttribute('oninput', 'return;'),
        (zs = 'function' == typeof Rs.oninput);
    }
    As = zs;
  } else As = !1;
  Ls = As && (!document.documentMode || 9 < document.documentMode);
}
function js() {
  Ps && (Ps.detachEvent('onpropertychange', Is), (Ns = Ps = null));
}
function Is(e) {
  if ('value' === e.propertyName && Ds(Ns)) {
    var t = [];
    _s(t, Ns, e, ri(e)), pi(Ts, t);
  }
}
function Fs(e, t, n) {
  'focusin' === e
    ? (js(), (Ns = n), (Ps = t).attachEvent('onpropertychange', Is))
    : 'focusout' === e && js();
}
function Us(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
    return Ds(Ns);
}
function Hs(e, t) {
  if ('click' === e) return Ds(t);
}
function Bs(e, t) {
  if ('input' === e || 'change' === e) return Ds(t);
}
var Vs =
  'function' == typeof Object.is
    ? Object.is
    : function (e, t) {
        return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
      };
function Ws(e, t) {
  if (Vs(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Gr.call(t, a) || !Vs(e[a], t[a])) return !1;
  }
  return !0;
}
function Ys(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $s(e, t) {
  var n,
    r = Ys(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ys(r);
  }
}
function Gs(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? Gs(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Xs() {
  for (var e = window, t = Ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = 'string' == typeof t.contentWindow.location.href;
    } catch (r) {
      n = !1;
    }
    if (!n) break;
    t = Ta((e = t.contentWindow).document);
  }
  return t;
}
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (('input' === t &&
      ('text' === e.type ||
        'search' === e.type ||
        'tel' === e.type ||
        'url' === e.type ||
        'password' === e.type)) ||
      'textarea' === t ||
      'true' === e.contentEditable)
  );
}
function qs(e) {
  var t = Xs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gs(n.ownerDocument.documentElement, n)
  ) {
    if (null !== r && Qs(n))
      if (
        ((t = r.start),
        void 0 === (e = r.end) && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
          .getSelection
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          i = Math.min(r.start, a);
        (r = void 0 === r.end ? i : Math.min(r.end, a)),
          !e.extend && i > r && ((a = r), (r = i), (i = a)),
          (a = $s(n, i));
        var o = $s(n, r);
        a &&
          o &&
          (1 !== e.rangeCount ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()).setStart(a.node, a.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    for (t = [], e = n; (e = e.parentNode); )
      1 === e.nodeType &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Ks = $r && 'documentMode' in document && 11 >= document.documentMode,
  Js = null,
  Zs = null,
  el = null,
  tl = !1;
function nl(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  tl ||
    null == Js ||
    Js !== Ta(r) ||
    ('selectionStart' in (r = Js) && Qs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (el && Ws(el, r)) ||
      ((el = r),
      0 < (r = Pl(Zs, 'onSelect')).length &&
        ((t = new $o('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Js))));
}
function rl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var al = {
    animationend: rl('Animation', 'AnimationEnd'),
    animationiteration: rl('Animation', 'AnimationIteration'),
    animationstart: rl('Animation', 'AnimationStart'),
    transitionend: rl('Transition', 'TransitionEnd'),
  },
  il = {},
  ol = {};
function sl(e) {
  if (il[e]) return il[e];
  if (!al[e]) return e;
  var t,
    n = al[e];
  for (t in n) if (n.hasOwnProperty(t) && t in ol) return (il[e] = n[t]);
  return e;
}
$r &&
  ((ol = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete al.animationend.animation,
    delete al.animationiteration.animation,
    delete al.animationstart.animation),
  'TransitionEvent' in window || delete al.transitionend.transition);
var ll = sl('animationend'),
  ul = sl('animationiteration'),
  cl = sl('animationstart'),
  fl = sl('transitionend'),
  dl = new Map(),
  pl =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function hl(e, t) {
  dl.set(e, t), Wr(t, [e]);
}
for (var ml = 0; ml < pl.length; ml++) {
  var vl = pl[ml];
  hl(vl.toLowerCase(), 'on' + (vl[0].toUpperCase() + vl.slice(1)));
}
hl(ll, 'onAnimationEnd'),
  hl(ul, 'onAnimationIteration'),
  hl(cl, 'onAnimationStart'),
  hl('dblclick', 'onDoubleClick'),
  hl('focusin', 'onFocus'),
  hl('focusout', 'onBlur'),
  hl(fl, 'onTransitionEnd'),
  Yr('onMouseEnter', ['mouseout', 'mouseover']),
  Yr('onMouseLeave', ['mouseout', 'mouseover']),
  Yr('onPointerEnter', ['pointerout', 'pointerover']),
  Yr('onPointerLeave', ['pointerout', 'pointerover']),
  Wr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  Wr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  Wr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  Wr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Wr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Wr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var gl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  bl = new Set('cancel close invalid load scroll toggle'.split(' ').concat(gl));
function yl(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n),
    (function (e, t, n, r, a, i, o, s, l) {
      if ((Ei.apply(this, arguments), bi)) {
        if (!bi) throw Error(Hr(198));
        var u = yi;
        (bi = !1), (yi = null), wi || ((wi = !0), (ki = u));
      }
    })(r, t, void 0, e),
    (e.currentTarget = null);
}
function wl(e, t) {
  t = 0 != (4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && a.isPropagationStopped())) break e;
          yl(a, s, u), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = (s = r[o]).instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && a.isPropagationStopped())
          )
            break e;
          yl(a, s, u), (i = l);
        }
    }
  }
  if (wi) throw ((e = ki), (wi = !1), (ki = null), e);
}
function kl(e, t) {
  var n = t[Kl];
  void 0 === n && (n = t[Kl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Cl(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Cl(n, e, r, t);
}
var El = '_reactListening' + Math.random().toString(36).slice(2);
function Sl(e) {
  if (!e[El]) {
    (e[El] = !0),
      Br.forEach(function (t) {
        'selectionchange' !== t && (bl.has(t) || xl(t, !1, e), xl(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[El] || ((t[El] = !0), xl('selectionchange', !1, t));
  }
}
function Cl(e, t, n, r) {
  switch (Lo(t)) {
    case 1:
      var a = Po;
      break;
    case 4:
      a = No;
      break;
    default:
      a = To;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !mi ||
      ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
      (a = !0),
    r
      ? void 0 !== a
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : void 0 !== a
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function Ol(e, t, n, r, a) {
  var i = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var o = r.tag;
      if (3 === o || 4 === o) {
        var s = r.stateNode.containerInfo;
        if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
        if (4 === o)
          for (o = r.return; null !== o; ) {
            var l = o.tag;
            if (
              (3 === l || 4 === l) &&
              ((l = o.stateNode.containerInfo) === a ||
                (8 === l.nodeType && l.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; null !== s; ) {
          if (null === (o = eu(s))) return;
          if (5 === (l = o.tag) || 6 === l) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  pi(function () {
    var r = i,
      a = ri(n),
      o = [];
    e: {
      var s = dl.get(e);
      if (void 0 !== s) {
        var l = $o,
          u = e;
        switch (e) {
          case 'keypress':
            if (0 === Io(n)) break e;
          case 'keydown':
          case 'keyup':
            l = us;
            break;
          case 'focusin':
            (u = 'focus'), (l = Jo);
            break;
          case 'focusout':
            (u = 'blur'), (l = Jo);
            break;
          case 'beforeblur':
          case 'afterblur':
            l = Jo;
            break;
          case 'click':
            if (2 === n.button) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            l = qo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            l = Ko;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            l = fs;
            break;
          case ll:
          case ul:
          case cl:
            l = Zo;
            break;
          case fl:
            l = ds;
            break;
          case 'scroll':
            l = Xo;
            break;
          case 'wheel':
            l = hs;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            l = ts;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            l = cs;
        }
        var c = 0 != (4 & t),
          f = !c && 'scroll' === e,
          d = c ? (null !== s ? s + 'Capture' : null) : s;
        c = [];
        for (var p, h = r; null !== h; ) {
          var m = (p = h).stateNode;
          if (
            (5 === p.tag &&
              null !== m &&
              ((p = m),
              null !== d && null != (m = hi(h, d)) && c.push(_l(h, m, p))),
            f)
          )
            break;
          h = h.return;
        }
        0 < c.length &&
          ((s = new l(s, u, null, n, a)), o.push({ event: s, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((l = 'mouseout' === e || 'pointerout' === e),
        (!(s = 'mouseover' === e || 'pointerover' === e) ||
          n === ni ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!eu(u) && !u[ql])) &&
          (l || s) &&
          ((s =
            a.window === a
              ? a
              : (s = a.ownerDocument)
              ? s.defaultView || s.parentWindow
              : window),
          l
            ? ((l = r),
              null !==
                (u = (u = n.relatedTarget || n.toElement) ? eu(u) : null) &&
                (u !== (f = Si(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                (u = null))
            : ((l = null), (u = r)),
          l !== u))
      ) {
        if (
          ((c = qo),
          (m = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = cs),
            (m = 'onPointerLeave'),
            (d = 'onPointerEnter'),
            (h = 'pointer')),
          (f = null == l ? s : nu(l)),
          (p = null == u ? s : nu(u)),
          ((s = new c(m, h + 'leave', l, n, a)).target = f),
          (s.relatedTarget = p),
          (m = null),
          eu(a) === r &&
            (((c = new c(d, h + 'enter', u, n, a)).target = p),
            (c.relatedTarget = f),
            (m = c)),
          (f = m),
          l && u)
        )
          e: {
            for (d = u, h = 0, p = c = l; p; p = Nl(p)) h++;
            for (p = 0, m = d; m; m = Nl(m)) p++;
            for (; 0 < h - p; ) (c = Nl(c)), h--;
            for (; 0 < p - h; ) (d = Nl(d)), p--;
            for (; h--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e;
              (c = Nl(c)), (d = Nl(d));
            }
            c = null;
          }
        else c = null;
        null !== l && Tl(o, s, l, c, !1),
          null !== u && null !== f && Tl(o, f, u, c, !0);
      }
      if (
        'select' ===
          (l = (s = r ? nu(r) : window).nodeName && s.nodeName.toLowerCase()) ||
        ('input' === l && 'file' === s.type)
      )
        var v = Ms;
      else if (Os(s))
        if (Ls) v = Bs;
        else {
          v = Us;
          var g = Fs;
        }
      else
        (l = s.nodeName) &&
          'input' === l.toLowerCase() &&
          ('checkbox' === s.type || 'radio' === s.type) &&
          (v = Hs);
      switch (
        (v && (v = v(e, r))
          ? _s(o, v, n, a)
          : (g && g(e, s, r),
            'focusout' === e &&
              (g = s._wrapperState) &&
              g.controlled &&
              'number' === s.type &&
              Ra(s, 'number', s.value)),
        (g = r ? nu(r) : window),
        e)
      ) {
        case 'focusin':
          (Os(g) || 'true' === g.contentEditable) &&
            ((Js = g), (Zs = r), (el = null));
          break;
        case 'focusout':
          el = Zs = Js = null;
          break;
        case 'mousedown':
          tl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (tl = !1), nl(o, n, a);
          break;
        case 'selectionchange':
          if (Ks) break;
        case 'keydown':
        case 'keyup':
          nl(o, n, a);
      }
      var b;
      if (vs)
        e: {
          switch (e) {
            case 'compositionstart':
              var y = 'onCompositionStart';
              break e;
            case 'compositionend':
              y = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              y = 'onCompositionUpdate';
              break e;
          }
          y = void 0;
        }
      else
        Ss
          ? xs(e, n) && (y = 'onCompositionEnd')
          : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
      y &&
        (ys &&
          'ko' !== n.locale &&
          (Ss || 'onCompositionStart' !== y
            ? 'onCompositionEnd' === y && Ss && (b = jo())
            : ((zo = 'value' in (Ao = a) ? Ao.value : Ao.textContent),
              (Ss = !0))),
        0 < (g = Pl(r, y)).length &&
          ((y = new ns(y, e, null, n, a)),
          o.push({ event: y, listeners: g }),
          b ? (y.data = b) : null !== (b = Es(n)) && (y.data = b))),
        (b = bs
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return Es(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((ks = !0), ws);
                case 'textInput':
                  return (e = t.data) === ws && ks ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (Ss)
                return 'compositionend' === e || (!vs && xs(e, t))
                  ? ((e = jo()), (Ro = zo = Ao = null), (Ss = !1), e)
                  : null;
              switch (e) {
                case 'paste':
                default:
                  return null;
                case 'keypress':
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case 'compositionend':
                  return ys && 'ko' !== t.locale ? null : t.data;
              }
            })(e, n)) &&
          0 < (r = Pl(r, 'onBeforeInput')).length &&
          ((a = new ns('onBeforeInput', 'beforeinput', null, n, a)),
          o.push({ event: a, listeners: r }),
          (a.data = b));
    }
    wl(o, t);
  });
}
function _l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pl(e, t) {
  for (var n = t + 'Capture', r = []; null !== e; ) {
    var a = e,
      i = a.stateNode;
    5 === a.tag &&
      null !== i &&
      ((a = i),
      null != (i = hi(e, n)) && r.unshift(_l(e, i, a)),
      null != (i = hi(e, t)) && r.push(_l(e, i, a))),
      (e = e.return);
  }
  return r;
}
function Nl(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Tl(e, t, n, r, a) {
  for (var i = t._reactName, o = []; null !== n && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (null !== l && l === r) break;
    5 === s.tag &&
      null !== u &&
      ((s = u),
      a
        ? null != (l = hi(n, i)) && o.unshift(_l(n, l, s))
        : a || (null != (l = hi(n, i)) && o.push(_l(n, l, s)))),
      (n = n.return);
  }
  0 !== o.length && e.push({ event: t, listeners: o });
}
var Dl = /\r\n?/g,
  Ml = /\u0000|\uFFFD/g;
function Ll(e) {
  return ('string' == typeof e ? e : '' + e).replace(Dl, '\n').replace(Ml, '');
}
function Al(e, t, n) {
  if (((t = Ll(t)), Ll(e) !== t && n)) throw Error(Hr(425));
}
function zl() {}
var Rl = null,
  jl = null;
function Il(e, t) {
  return (
    'textarea' === e ||
    'noscript' === e ||
    'string' == typeof t.children ||
    'number' == typeof t.children ||
    ('object' == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var Fl = 'function' == typeof setTimeout ? setTimeout : void 0,
  Ul = 'function' == typeof clearTimeout ? clearTimeout : void 0,
  Hl = 'function' == typeof Promise ? Promise : void 0,
  Bl =
    'function' == typeof queueMicrotask
      ? queueMicrotask
      : void 0 !== Hl
      ? function (e) {
          return Hl.resolve(null).then(e).catch(Vl);
        }
      : Fl;
function Vl(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && 8 === a.nodeType))
      if ('/$' === (n = a.data)) {
        if (0 === r) return e.removeChild(a), void Co(t);
        r--;
      } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
    n = a;
  } while (n);
  Co(t);
}
function Yl(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
    if (8 === t) {
      if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
      if ('/$' === t) return null;
    }
  }
  return e;
}
function $l(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ('$' === n || '$!' === n || '$?' === n) {
        if (0 === t) return e;
        t--;
      } else '/$' === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gl = Math.random().toString(36).slice(2),
  Xl = '__reactFiber$' + Gl,
  Ql = '__reactProps$' + Gl,
  ql = '__reactContainer$' + Gl,
  Kl = '__reactEvents$' + Gl,
  Jl = '__reactListeners$' + Gl,
  Zl = '__reactHandles$' + Gl;
function eu(e) {
  var t = e[Xl];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ql] || n[Xl])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = $l(e); null !== e; ) {
          if ((n = e[Xl])) return n;
          e = $l(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function tu(e) {
  return !(e = e[Xl] || e[ql]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function nu(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(Hr(33));
}
function ru(e) {
  return e[Ql] || null;
}
var au = [],
  iu = -1;
function ou(e) {
  return { current: e };
}
function su(e) {
  0 > iu || ((e.current = au[iu]), (au[iu] = null), iu--);
}
function lu(e, t) {
  iu++, (au[iu] = e.current), (e.current = t);
}
var uu = {},
  cu = ou(uu),
  fu = ou(!1),
  du = uu;
function pu(e, t) {
  var n = e.type.contextTypes;
  if (!n) return uu;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a,
    i = {};
  for (a in n) i[a] = t[a];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function hu(e) {
  return null != (e = e.childContextTypes);
}
function mu() {
  su(fu), su(cu);
}
function vu(e, t, n) {
  if (cu.current !== uu) throw Error(Hr(168));
  lu(cu, t), lu(fu, n);
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), 'function' != typeof r.getChildContext))
    return n;
  for (var a in (r = r.getChildContext()))
    if (!(a in t)) throw Error(Hr(108, Ca(e) || 'Unknown', a));
  return ya({}, n, r);
}
function bu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || uu),
    (du = cu.current),
    lu(cu, e),
    lu(fu, fu.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Hr(169));
  n
    ? ((e = gu(e, t, du)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      su(fu),
      su(cu),
      lu(cu, e))
    : su(fu),
    lu(fu, n);
}
var wu = null,
  ku = !1,
  xu = !1;
function Eu(e) {
  null === wu ? (wu = [e]) : wu.push(e);
}
function Su() {
  if (!xu && null !== wu) {
    xu = !0;
    var e = 0,
      t = to;
    try {
      var n = wu;
      for (to = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (wu = null), (ku = !1);
    } catch (ay) {
      throw (null !== wu && (wu = wu.slice(e + 1)), Ni(zi, Su), ay);
    } finally {
      (to = t), (xu = !1);
    }
  }
  return null;
}
var Cu = [],
  Ou = 0,
  _u = null,
  Pu = 0,
  Nu = [],
  Tu = 0,
  Du = null,
  Mu = 1,
  Lu = '';
function Au(e, t) {
  (Cu[Ou++] = Pu), (Cu[Ou++] = _u), (_u = e), (Pu = t);
}
function zu(e, t, n) {
  (Nu[Tu++] = Mu), (Nu[Tu++] = Lu), (Nu[Tu++] = Du), (Du = e);
  var r = Mu;
  e = Lu;
  var a = 32 - Bi(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var i = 32 - Bi(t) + a;
  if (30 < i) {
    var o = a - (a % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Mu = (1 << (32 - Bi(t) + a)) | (n << a) | r),
      (Lu = i + e);
  } else (Mu = (1 << i) | (n << a) | r), (Lu = e);
}
function Ru(e) {
  null !== e.return && (Au(e, 1), zu(e, 1, 0));
}
function ju(e) {
  for (; e === _u; )
    (_u = Cu[--Ou]), (Cu[Ou] = null), (Pu = Cu[--Ou]), (Cu[Ou] = null);
  for (; e === Du; )
    (Du = Nu[--Tu]),
      (Nu[Tu] = null),
      (Lu = Nu[--Tu]),
      (Nu[Tu] = null),
      (Mu = Nu[--Tu]),
      (Nu[Tu] = null);
}
var Iu = null,
  Fu = null,
  Uu = !1,
  Hu = null;
function Bu(e, t) {
  var n = hh(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    null === (t = e.deletions)
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function Vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), (Iu = e), (Fu = Yl(t.firstChild)), !0)
      );
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), (Iu = e), (Fu = null), !0)
      );
    case 13:
      return (
        null !== (t = 8 !== t.nodeType ? null : t) &&
        ((n = null !== Du ? { id: Mu, overflow: Lu } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = hh(18, null, null, 0)).stateNode = t),
        (n.return = e),
        (e.child = n),
        (Iu = e),
        (Fu = null),
        !0)
      );
    default:
      return !1;
  }
}
function Wu(e) {
  return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Yu(e) {
  if (Uu) {
    var t = Fu;
    if (t) {
      var n = t;
      if (!Vu(e, t)) {
        if (Wu(e)) throw Error(Hr(418));
        t = Yl(n.nextSibling);
        var r = Iu;
        t && Vu(e, t)
          ? Bu(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Uu = !1), (Iu = e));
      }
    } else {
      if (Wu(e)) throw Error(Hr(418));
      (e.flags = (-4097 & e.flags) | 2), (Uu = !1), (Iu = e);
    }
  }
}
function $u(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  Iu = e;
}
function Gu(e) {
  if (e !== Iu) return !1;
  if (!Uu) return $u(e), (Uu = !0), !1;
  var t;
  if (
    ((t = 3 !== e.tag) &&
      !(t = 5 !== e.tag) &&
      (t =
        'head' !== (t = e.type) &&
        'body' !== t &&
        !Il(e.type, e.memoizedProps)),
    t && (t = Fu))
  ) {
    if (Wu(e)) throw (Xu(), Error(Hr(418)));
    for (; t; ) Bu(e, t), (t = Yl(t.nextSibling));
  }
  if (($u(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(Hr(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('/$' === n) {
            if (0 === t) {
              Fu = Yl(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
        }
        e = e.nextSibling;
      }
      Fu = null;
    }
  } else Fu = Iu ? Yl(e.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  for (var e = Fu; e; ) e = Yl(e.nextSibling);
}
function Qu() {
  (Fu = Iu = null), (Uu = !1);
}
function qu(e) {
  null === Hu ? (Hu = [e]) : Hu.push(e);
}
var Ku = na.ReactCurrentBatchConfig;
function Ju(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ya({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zu = ou(null),
  ec = null,
  tc = null,
  nc = null;
function rc() {
  nc = tc = ec = null;
}
function ac(e) {
  var t = Zu.current;
  su(Zu), (e._currentValue = t);
}
function ic(e, t, n) {
  for (; null !== e; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
        : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function oc(e, t) {
  (ec = e),
    (nc = tc = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (nd = !0), (e.firstContext = null));
}
function sc(e) {
  var t = e._currentValue;
  if (nc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), null === tc)) {
      if (null === ec) throw Error(Hr(308));
      (tc = e), (ec.dependencies = { lanes: 0, firstContext: e });
    } else tc = tc.next = e;
  return t;
}
var lc = null;
function uc(e) {
  null === lc ? (lc = [e]) : lc.push(e);
}
function cc(e, t, n, r) {
  var a = t.interleaved;
  return (
    null === a ? ((n.next = n), uc(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    fc(e, r)
  );
}
function fc(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var dc = !1;
function pc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mc(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vc(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 0 != (2 & fp))) {
    var a = r.pending;
    return (
      null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      fc(e, n)
    );
  }
  return (
    null === (a = r.interleaved)
      ? ((t.next = t), uc(r))
      : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    fc(e, n)
  );
}
function gc(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), eo(e, n);
  }
}
function bc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var a = null,
      i = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
      } while (null !== n);
      null === i ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yc(e, t, n, r) {
  var a = e.updateQueue;
  dc = !1;
  var i = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    s = a.shared.pending;
  if (null !== s) {
    a.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
    var c = e.alternate;
    null !== c &&
      (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
      (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
      (c.lastBaseUpdate = l));
  }
  if (null !== i) {
    var f = a.baseState;
    for (o = 0, c = u = l = null, s = i; ; ) {
      var d = s.lane,
        p = s.eventTime;
      if ((r & d) === d) {
        null !== c &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var h = e,
            m = s;
          switch (((d = t), (p = n), m.tag)) {
            case 1:
              if ('function' == typeof (h = m.payload)) {
                f = h.call(p, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (-65537 & h.flags) | 128;
            case 0:
              if (
                null ==
                (d = 'function' == typeof (h = m.payload) ? h.call(p, f, d) : h)
              )
                break e;
              f = ya({}, f, d);
              break e;
            case 2:
              dc = !0;
          }
        }
        null !== s.callback &&
          0 !== s.lane &&
          ((e.flags |= 64),
          null === (d = a.effects) ? (a.effects = [s]) : d.push(s));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          null === c ? ((u = c = p), (l = f)) : (c = c.next = p),
          (o |= d);
      if (null === (s = s.next)) {
        if (null === (s = a.shared.pending)) break;
        (s = (d = s).next),
          (d.next = null),
          (a.lastBaseUpdate = d),
          (a.shared.pending = null);
      }
    }
    if (
      (null === c && (l = f),
      (a.baseState = l),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      null !== (t = a.shared.interleaved))
    ) {
      a = t;
      do {
        (o |= a.lane), (a = a.next);
      } while (a !== t);
    } else null === i && (a.shared.lanes = 0);
    (yp |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function wc(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (null !== a) {
        if (((r.callback = null), (r = n), 'function' != typeof a))
          throw Error(Hr(191, a));
        a.call(r);
      }
    }
}
var kc = new Fr.Component().refs;
function xc(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : ya({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var Ec = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Si(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = jp(),
      a = Ip(e),
      i = mc(r, a);
    (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = vc(e, i, a)) && (Fp(t, e, a, r), gc(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = jp(),
      a = Ip(e),
      i = mc(r, a);
    (i.tag = 1),
      (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = vc(e, i, a)) && (Fp(t, e, a, r), gc(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = jp(),
      r = Ip(e),
      a = mc(n, r);
    (a.tag = 2),
      null != t && (a.callback = t),
      null !== (t = vc(e, a, r)) && (Fp(t, e, r, n), gc(t, e, r));
  },
};
function Sc(e, t, n, r, a, i, o) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, i, o)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Ws(n, r) ||
        !Ws(a, i);
}
function Cc(e, t, n) {
  var r = !1,
    a = uu,
    i = t.contextType;
  return (
    'object' == typeof i && null !== i
      ? (i = sc(i))
      : ((a = hu(t) ? du : cu.current),
        (i = (r = null != (r = t.contextTypes)) ? pu(e, a) : uu)),
    (t = new t(n, i)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = Ec),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Oc(e, t, n, r) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ec.enqueueReplaceState(t, t.state, null);
}
function _c(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = kc), pc(e);
  var i = t.contextType;
  'object' == typeof i && null !== i
    ? (a.context = sc(i))
    : ((i = hu(t) ? du : cu.current), (a.context = pu(e, i))),
    (a.state = e.memoizedState),
    'function' == typeof (i = t.getDerivedStateFromProps) &&
      (xc(e, t, i, n), (a.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof a.getSnapshotBeforeUpdate ||
      ('function' != typeof a.UNSAFE_componentWillMount &&
        'function' != typeof a.componentWillMount) ||
      ((t = a.state),
      'function' == typeof a.componentWillMount && a.componentWillMount(),
      'function' == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Ec.enqueueReplaceState(a, a.state, null),
      yc(e, n, a, r),
      (a.state = e.memoizedState)),
    'function' == typeof a.componentDidMount && (e.flags |= 4194308);
}
function Pc(e, t, n) {
  if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(Hr(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Hr(147, e));
      var a = r,
        i = '' + e;
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === i
        ? t.ref
        : (((t = function (e) {
            var t = a.refs;
            t === kc && (t = a.refs = {}),
              null === e ? delete t[i] : (t[i] = e);
          })._stringRef = i),
          t);
    }
    if ('string' != typeof e) throw Error(Hr(284));
    if (!n._owner) throw Error(Hr(290, e));
  }
  return e;
}
function Nc(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Hr(
        31,
        '[object Object]' === e
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Tc(e) {
  return (0, e._init)(e._payload);
}
function Dc(e) {
  function t(t, n) {
    if (e) {
      var r = t.deletions;
      null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function a(e, t) {
    return ((e = vh(e, t)).index = 0), (e.sibling = null), e;
  }
  function i(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags |= 2), n)
            : r
          : ((t.flags |= 2), n)
        : ((t.flags |= 1048576), n)
    );
  }
  function o(t) {
    return e && null === t.alternate && (t.flags |= 2), t;
  }
  function s(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = wh(n, e.mode, r)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function l(e, t, n, r) {
    var i = n.type;
    return i === ia
      ? c(e, t, n.props.children, r, n.key)
      : null !== t &&
        (t.elementType === i ||
          ('object' == typeof i &&
            null !== i &&
            i.$$typeof === ha &&
            Tc(i) === t.type))
      ? (((r = a(t, n.props)).ref = Pc(e, t, n)), (r.return = e), r)
      : (((r = gh(n.type, n.key, n.props, null, e.mode, r)).ref = Pc(e, t, n)),
        (r.return = e),
        r);
  }
  function u(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = kh(n, e.mode, r)).return = e), t)
      : (((t = a(t, n.children || [])).return = e), t);
  }
  function c(e, t, n, r, i) {
    return null === t || 7 !== t.tag
      ? (((t = bh(n, e.mode, r, i)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function f(e, t, n) {
    if (('string' == typeof t && '' !== t) || 'number' == typeof t)
      return ((t = wh('' + t, e.mode, n)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case ra:
          return (
            ((n = gh(t.type, t.key, t.props, null, e.mode, n)).ref = Pc(
              e,
              null,
              t,
            )),
            (n.return = e),
            n
          );
        case aa:
          return ((t = kh(t, e.mode, n)).return = e), t;
        case ha:
          return f(e, (0, t._init)(t._payload), n);
      }
      if (ja(t) || ga(t)) return ((t = bh(t, e.mode, n, null)).return = e), t;
      Nc(e, t);
    }
    return null;
  }
  function d(e, t, n, r) {
    var a = null !== t ? t.key : null;
    if (('string' == typeof n && '' !== n) || 'number' == typeof n)
      return null !== a ? null : s(e, t, '' + n, r);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case ra:
          return n.key === a ? l(e, t, n, r) : null;
        case aa:
          return n.key === a ? u(e, t, n, r) : null;
        case ha:
          return d(e, t, (a = n._init)(n._payload), r);
      }
      if (ja(n) || ga(n)) return null !== a ? null : c(e, t, n, r, null);
      Nc(e, n);
    }
    return null;
  }
  function p(e, t, n, r, a) {
    if (('string' == typeof r && '' !== r) || 'number' == typeof r)
      return s(t, (e = e.get(n) || null), '' + r, a);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case ra:
          return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case aa:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case ha:
          return p(e, t, n, (0, r._init)(r._payload), a);
      }
      if (ja(r) || ga(r)) return c(t, (e = e.get(n) || null), r, a, null);
      Nc(t, r);
    }
    return null;
  }
  return function s(l, u, c, h) {
    if (
      ('object' == typeof c &&
        null !== c &&
        c.type === ia &&
        null === c.key &&
        (c = c.props.children),
      'object' == typeof c && null !== c)
    ) {
      switch (c.$$typeof) {
        case ra:
          e: {
            for (var m = c.key, v = u; null !== v; ) {
              if (v.key === m) {
                if ((m = c.type) === ia) {
                  if (7 === v.tag) {
                    n(l, v.sibling),
                      ((u = a(v, c.props.children)).return = l),
                      (l = u);
                    break e;
                  }
                } else if (
                  v.elementType === m ||
                  ('object' == typeof m &&
                    null !== m &&
                    m.$$typeof === ha &&
                    Tc(m) === v.type)
                ) {
                  n(l, v.sibling),
                    ((u = a(v, c.props)).ref = Pc(l, v, c)),
                    (u.return = l),
                    (l = u);
                  break e;
                }
                n(l, v);
                break;
              }
              t(l, v), (v = v.sibling);
            }
            c.type === ia
              ? (((u = bh(c.props.children, l.mode, h, c.key)).return = l),
                (l = u))
              : (((h = gh(c.type, c.key, c.props, null, l.mode, h)).ref = Pc(
                  l,
                  u,
                  c,
                )),
                (h.return = l),
                (l = h));
          }
          return o(l);
        case aa:
          e: {
            for (v = c.key; null !== u; ) {
              if (u.key === v) {
                if (
                  4 === u.tag &&
                  u.stateNode.containerInfo === c.containerInfo &&
                  u.stateNode.implementation === c.implementation
                ) {
                  n(l, u.sibling),
                    ((u = a(u, c.children || [])).return = l),
                    (l = u);
                  break e;
                }
                n(l, u);
                break;
              }
              t(l, u), (u = u.sibling);
            }
            ((u = kh(c, l.mode, h)).return = l), (l = u);
          }
          return o(l);
        case ha:
          return s(l, u, (v = c._init)(c._payload), h);
      }
      if (ja(c))
        return (function (a, o, s, l) {
          for (
            var u = null, c = null, h = o, m = (o = 0), v = null;
            null !== h && m < s.length;
            m++
          ) {
            h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
            var g = d(a, h, s[m], l);
            if (null === g) {
              null === h && (h = v);
              break;
            }
            e && h && null === g.alternate && t(a, h),
              (o = i(g, o, m)),
              null === c ? (u = g) : (c.sibling = g),
              (c = g),
              (h = v);
          }
          if (m === s.length) return n(a, h), Uu && Au(a, m), u;
          if (null === h) {
            for (; m < s.length; m++)
              null !== (h = f(a, s[m], l)) &&
                ((o = i(h, o, m)),
                null === c ? (u = h) : (c.sibling = h),
                (c = h));
            return Uu && Au(a, m), u;
          }
          for (h = r(a, h); m < s.length; m++)
            null !== (v = p(h, a, m, s[m], l)) &&
              (e &&
                null !== v.alternate &&
                h.delete(null === v.key ? m : v.key),
              (o = i(v, o, m)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            Uu && Au(a, m),
            u
          );
        })(l, u, c, h);
      if (ga(c))
        return (function (a, o, s, l) {
          var u = ga(s);
          if ('function' != typeof u) throw Error(Hr(150));
          if (null == (s = u.call(s))) throw Error(Hr(151));
          for (
            var c = (u = null), h = o, m = (o = 0), v = null, g = s.next();
            null !== h && !g.done;
            m++, g = s.next()
          ) {
            h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
            var b = d(a, h, g.value, l);
            if (null === b) {
              null === h && (h = v);
              break;
            }
            e && h && null === b.alternate && t(a, h),
              (o = i(b, o, m)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b),
              (h = v);
          }
          if (g.done) return n(a, h), Uu && Au(a, m), u;
          if (null === h) {
            for (; !g.done; m++, g = s.next())
              null !== (g = f(a, g.value, l)) &&
                ((o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return Uu && Au(a, m), u;
          }
          for (h = r(a, h); !g.done; m++, g = s.next())
            null !== (g = p(h, a, m, g.value, l)) &&
              (e &&
                null !== g.alternate &&
                h.delete(null === g.key ? m : g.key),
              (o = i(g, o, m)),
              null === c ? (u = g) : (c.sibling = g),
              (c = g));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            Uu && Au(a, m),
            u
          );
        })(l, u, c, h);
      Nc(l, c);
    }
    return ('string' == typeof c && '' !== c) || 'number' == typeof c
      ? ((c = '' + c),
        null !== u && 6 === u.tag
          ? (n(l, u.sibling), ((u = a(u, c)).return = l), (l = u))
          : (n(l, u), ((u = wh(c, l.mode, h)).return = l), (l = u)),
        o(l))
      : n(l, u);
  };
}
var Mc = Dc(!0),
  Lc = Dc(!1),
  Ac = {},
  zc = ou(Ac),
  Rc = ou(Ac),
  jc = ou(Ac);
function Ic(e) {
  if (e === Ac) throw Error(Hr(174));
  return e;
}
function Fc(e, t) {
  switch ((lu(jc, t), lu(Rc, e), lu(zc, Ac), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wa(null, '');
      break;
    default:
      t = Wa(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName),
      );
  }
  su(zc), lu(zc, t);
}
function Uc() {
  su(zc), su(Rc), su(jc);
}
function Hc(e) {
  Ic(jc.current);
  var t = Ic(zc.current),
    n = Wa(t, e.type);
  t !== n && (lu(Rc, e), lu(zc, n));
}
function Bc(e) {
  Rc.current === e && (su(zc), su(Rc));
}
var Vc = ou(0);
function Wc(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (
        null !== n &&
        (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
      )
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (128 & t.flags)) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Yc = [];
function $c() {
  for (var e = 0; e < Yc.length; e++)
    Yc[e]._workInProgressVersionPrimary = null;
  Yc.length = 0;
}
var Gc = na.ReactCurrentDispatcher,
  Xc = na.ReactCurrentBatchConfig,
  Qc = 0,
  qc = null,
  Kc = null,
  Jc = null,
  Zc = !1,
  ef = !1,
  tf = 0,
  nf = 0;
function rf() {
  throw Error(Hr(321));
}
function af(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vs(e[n], t[n])) return !1;
  return !0;
}
function of(e, t, n, r, a, i) {
  if (
    ((Qc = i),
    (qc = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gc.current = null === e || null === e.memoizedState ? Vf : Wf),
    (e = n(r, a)),
    ef)
  ) {
    i = 0;
    do {
      if (((ef = !1), (tf = 0), 25 <= i)) throw Error(Hr(301));
      (i += 1),
        (Jc = Kc = null),
        (t.updateQueue = null),
        (Gc.current = Yf),
        (e = n(r, a));
    } while (ef);
  }
  if (
    ((Gc.current = Bf),
    (t = null !== Kc && null !== Kc.next),
    (Qc = 0),
    (Jc = Kc = qc = null),
    (Zc = !1),
    t)
  )
    throw Error(Hr(300));
  return e;
}
function sf() {
  var e = 0 !== tf;
  return (tf = 0), e;
}
function lf() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === Jc ? (qc.memoizedState = Jc = e) : (Jc = Jc.next = e), Jc;
}
function uf() {
  if (null === Kc) {
    var e = qc.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Kc.next;
  var t = null === Jc ? qc.memoizedState : Jc.next;
  if (null !== t) (Jc = t), (Kc = e);
  else {
    if (null === e) throw Error(Hr(310));
    (e = {
      memoizedState: (Kc = e).memoizedState,
      baseState: Kc.baseState,
      baseQueue: Kc.baseQueue,
      queue: Kc.queue,
      next: null,
    }),
      null === Jc ? (qc.memoizedState = Jc = e) : (Jc = Jc.next = e);
  }
  return Jc;
}
function cf(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function ff(e) {
  var t = uf(),
    n = t.queue;
  if (null === n) throw Error(Hr(311));
  n.lastRenderedReducer = e;
  var r = Kc,
    a = r.baseQueue,
    i = n.pending;
  if (null !== i) {
    if (null !== a) {
      var o = a.next;
      (a.next = i.next), (i.next = o);
    }
    (r.baseQueue = a = i), (n.pending = null);
  }
  if (null !== a) {
    (i = a.next), (r = r.baseState);
    var s = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Qc & c) === c)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        null === l ? ((s = l = f), (o = r)) : (l = l.next = f),
          (qc.lanes |= c),
          (yp |= c);
      }
      u = u.next;
    } while (null !== u && u !== i);
    null === l ? (o = r) : (l.next = s),
      Vs(r, t.memoizedState) || (nd = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
    a = e;
    do {
      (i = a.lane), (qc.lanes |= i), (yp |= i), (a = a.next);
    } while (a !== e);
  } else null === a && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function df(e) {
  var t = uf(),
    n = t.queue;
  if (null === n) throw Error(Hr(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    i = t.memoizedState;
  if (null !== a) {
    n.pending = null;
    var o = (a = a.next);
    do {
      (i = e(i, o.action)), (o = o.next);
    } while (o !== a);
    Vs(i, t.memoizedState) || (nd = !0),
      (t.memoizedState = i),
      null === t.baseQueue && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function pf() {}
function hf(e, t) {
  var n = qc,
    r = uf(),
    a = t(),
    i = !Vs(r.memoizedState, a);
  if (
    (i && ((r.memoizedState = a), (nd = !0)),
    (r = r.queue),
    Of(gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (null !== Jc && 1 & Jc.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      kf(9, vf.bind(null, n, r, a, t), void 0, null),
      null === dp)
    )
      throw Error(Hr(349));
    0 != (30 & Qc) || mf(n, t, a);
  }
  return a;
}
function mf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    null === (t = qc.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (qc.updateQueue = t),
        (t.stores = [e]))
      : null === (n = t.stores)
      ? (t.stores = [e])
      : n.push(e);
}
function vf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bf(t) && yf(e);
}
function gf(e, t, n) {
  return n(function () {
    bf(t) && yf(e);
  });
}
function bf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vs(e, n);
  } catch (r) {
    return !0;
  }
}
function yf(e) {
  var t = fc(e, 1);
  null !== t && Fp(t, e, 1, -1);
}
function wf(e) {
  var t = lf();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cf,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = If.bind(null, qc, e)),
    [t.memoizedState, e]
  );
}
function kf(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = qc.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (qc.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function xf() {
  return uf().memoizedState;
}
function Ef(e, t, n, r) {
  var a = lf();
  (qc.flags |= e),
    (a.memoizedState = kf(1 | t, n, void 0, void 0 === r ? null : r));
}
function Sf(e, t, n, r) {
  var a = uf();
  r = void 0 === r ? null : r;
  var i = void 0;
  if (null !== Kc) {
    var o = Kc.memoizedState;
    if (((i = o.destroy), null !== r && af(r, o.deps)))
      return void (a.memoizedState = kf(t, n, i, r));
  }
  (qc.flags |= e), (a.memoizedState = kf(1 | t, n, i, r));
}
function Cf(e, t) {
  return Ef(8390656, 8, e, t);
}
function Of(e, t) {
  return Sf(2048, 8, e, t);
}
function _f(e, t) {
  return Sf(4, 2, e, t);
}
function Pf(e, t) {
  return Sf(4, 4, e, t);
}
function Nf(e, t) {
  return 'function' == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Tf(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), Sf(4, 4, Nf.bind(null, t, e), n)
  );
}
function Df() {}
function Mf(e, t) {
  var n = uf();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && af(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lf(e, t) {
  var n = uf();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && af(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Af(e, t, n) {
  return 0 == (21 & Qc)
    ? (e.baseState && ((e.baseState = !1), (nd = !0)), (e.memoizedState = n))
    : (Vs(n, t) || ((n = Ki()), (qc.lanes |= n), (yp |= n), (e.baseState = !0)),
      t);
}
function zf(e, t) {
  var n = to;
  (to = 0 !== n && 4 > n ? n : 4), e(!0);
  var r = Xc.transition;
  Xc.transition = {};
  try {
    e(!1), t();
  } finally {
    (to = n), (Xc.transition = r);
  }
}
function Rf() {
  return uf().memoizedState;
}
function jf(e, t, n) {
  var r = Ip(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ff(e))
  )
    Uf(t, n);
  else if (null !== (n = cc(e, t, n, r))) {
    Fp(n, e, r, jp()), Hf(n, t, r);
  }
}
function If(e, t, n) {
  var r = Ip(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ff(e)) Uf(t, a);
  else {
    var i = e.alternate;
    if (
      0 === e.lanes &&
      (null === i || 0 === i.lanes) &&
      null !== (i = t.lastRenderedReducer)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((a.hasEagerState = !0), (a.eagerState = s), Vs(s, o))) {
          var l = t.interleaved;
          return (
            null === l
              ? ((a.next = a), uc(t))
              : ((a.next = l.next), (l.next = a)),
            void (t.interleaved = a)
          );
        }
      } catch (u) {}
    null !== (n = cc(e, t, a, r)) && (Fp(n, e, r, (a = jp())), Hf(n, t, r));
  }
}
function Ff(e) {
  var t = e.alternate;
  return e === qc || (null !== t && t === qc);
}
function Uf(e, t) {
  ef = Zc = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hf(e, t, n) {
  if (0 != (4194240 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), eo(e, n);
  }
}
var Bf = {
    readContext: sc,
    useCallback: rf,
    useContext: rf,
    useEffect: rf,
    useImperativeHandle: rf,
    useInsertionEffect: rf,
    useLayoutEffect: rf,
    useMemo: rf,
    useReducer: rf,
    useRef: rf,
    useState: rf,
    useDebugValue: rf,
    useDeferredValue: rf,
    useTransition: rf,
    useMutableSource: rf,
    useSyncExternalStore: rf,
    useId: rf,
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: sc,
    useCallback: function (e, t) {
      return (lf().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: sc,
    useEffect: Cf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null),
        Ef(4194308, 4, Nf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ef(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ef(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lf();
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lf();
      return (
        (t = void 0 !== n ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jf.bind(null, qc, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      return (e = { current: e }), (lf().memoizedState = e);
    },
    useState: wf,
    useDebugValue: Df,
    useDeferredValue: function (e) {
      return (lf().memoizedState = e);
    },
    useTransition: function () {
      var e = wf(!1),
        t = e[0];
      return (e = zf.bind(null, e[1])), (lf().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = qc,
        a = lf();
      if (Uu) {
        if (void 0 === n) throw Error(Hr(407));
        n = n();
      } else {
        if (((n = t()), null === dp)) throw Error(Hr(349));
        0 != (30 & Qc) || mf(r, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (a.queue = i),
        Cf(gf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        kf(9, vf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lf(),
        t = dp.identifierPrefix;
      if (Uu) {
        var n = Lu;
        (t =
          ':' +
          t +
          'R' +
          (n = (Mu & ~(1 << (32 - Bi(Mu) - 1))).toString(32) + n)),
          0 < (n = tf++) && (t += 'H' + n.toString(32)),
          (t += ':');
      } else t = ':' + t + 'r' + (n = nf++).toString(32) + ':';
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wf = {
    readContext: sc,
    useCallback: Mf,
    useContext: sc,
    useEffect: Of,
    useImperativeHandle: Tf,
    useInsertionEffect: _f,
    useLayoutEffect: Pf,
    useMemo: Lf,
    useReducer: ff,
    useRef: xf,
    useState: function () {
      return ff(cf);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      return Af(uf(), Kc.memoizedState, e);
    },
    useTransition: function () {
      return [ff(cf)[0], uf().memoizedState];
    },
    useMutableSource: pf,
    useSyncExternalStore: hf,
    useId: Rf,
    unstable_isNewReconciler: !1,
  },
  Yf = {
    readContext: sc,
    useCallback: Mf,
    useContext: sc,
    useEffect: Of,
    useImperativeHandle: Tf,
    useInsertionEffect: _f,
    useLayoutEffect: Pf,
    useMemo: Lf,
    useReducer: df,
    useRef: xf,
    useState: function () {
      return df(cf);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = uf();
      return null === Kc ? (t.memoizedState = e) : Af(t, Kc.memoizedState, e);
    },
    useTransition: function () {
      return [df(cf)[0], uf().memoizedState];
    },
    useMutableSource: pf,
    useSyncExternalStore: hf,
    useId: Rf,
    unstable_isNewReconciler: !1,
  };
function $f(e, t) {
  try {
    var n = '',
      r = t;
    do {
      (n += Ea(r)), (r = r.return);
    } while (r);
    var a = n;
  } catch (i) {
    a = '\nError generating stack: ' + i.message + '\n' + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Gf(e, t, n) {
  return {
    value: e,
    source: null,
    stack: null != n ? n : null,
    digest: null != t ? t : null,
  };
}
function Xf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qf = 'function' == typeof WeakMap ? WeakMap : Map;
function qf(e, t, n) {
  ((n = mc(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _p || ((_p = !0), (Pp = r)), Xf(0, t);
    }),
    n
  );
}
function Kf(e, t, n) {
  (n = mc(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ('function' == typeof r) {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Xf(0, t);
      });
  }
  var i = e.stateNode;
  return (
    null !== i &&
      'function' == typeof i.componentDidCatch &&
      (n.callback = function () {
        Xf(0, t),
          'function' != typeof r &&
            (null === Np ? (Np = new Set([this])) : Np.add(this));
        var e = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== e ? e : '',
        });
      }),
    n
  );
}
function Jf(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new Qf();
    var a = new Set();
    r.set(t, a);
  } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = lh.bind(null, e, t, n)), t.then(e, e));
}
function Zf(e) {
  do {
    var t;
    if (
      ((t = 13 === e.tag) &&
        (t = null === (t = e.memoizedState) || null !== t.dehydrated),
      t)
    )
      return e;
    e = e.return;
  } while (null !== e);
  return null;
}
function ed(e, t, n, r, a) {
  return 0 == (1 & e.mode)
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          1 === n.tag &&
            (null === n.alternate
              ? (n.tag = 17)
              : (((t = mc(-1, 1)).tag = 2), vc(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = a), e);
}
var td = na.ReactCurrentOwner,
  nd = !1;
function rd(e, t, n, r) {
  t.child = null === e ? Lc(t, null, n, r) : Mc(t, e.child, n, r);
}
function ad(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    oc(t, a),
    (r = of(e, t, n, r, i, a)),
    (n = sf()),
    null === e || nd
      ? (Uu && n && Ru(t), (t.flags |= 1), rd(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        _d(e, t, a))
  );
}
function id(e, t, n, r, a) {
  if (null === e) {
    var i = n.type;
    return 'function' != typeof i ||
      mh(i) ||
      void 0 !== i.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = gh(n.type, null, r, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), od(e, t, i, r, a));
  }
  if (((i = e.child), 0 == (e.lanes & a))) {
    var o = i.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : Ws)(o, r) && e.ref === t.ref)
      return _d(e, t, a);
  }
  return (
    (t.flags |= 1), ((e = vh(i, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function od(e, t, n, r, a) {
  if (null !== e) {
    var i = e.memoizedProps;
    if (Ws(i, r) && e.ref === t.ref) {
      if (((nd = !1), (t.pendingProps = r = i), 0 == (e.lanes & a)))
        return (t.lanes = e.lanes), _d(e, t, a);
      0 != (131072 & e.flags) && (nd = !0);
    }
  }
  return ud(e, t, n, r, a);
}
function sd(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = null !== e ? e.memoizedState : null;
  if ('hidden' === r.mode)
    if (0 == (1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        lu(vp, mp),
        (mp |= n);
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== i ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          lu(vp, mp),
          (mp |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== i ? i.baseLanes : n),
        lu(vp, mp),
        (mp |= r);
    }
  else
    null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      lu(vp, mp),
      (mp |= r);
  return rd(e, t, a, n), t.child;
}
function ld(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ud(e, t, n, r, a) {
  var i = hu(n) ? du : cu.current;
  return (
    (i = pu(t, i)),
    oc(t, a),
    (n = of(e, t, n, r, i, a)),
    (r = sf()),
    null === e || nd
      ? (Uu && r && Ru(t), (t.flags |= 1), rd(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        _d(e, t, a))
  );
}
function cd(e, t, n, r, a) {
  if (hu(n)) {
    var i = !0;
    bu(t);
  } else i = !1;
  if ((oc(t, a), null === t.stateNode))
    Od(e, t), Cc(t, n, r), _c(t, n, r, a), (r = !0);
  else if (null === e) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    'object' == typeof u && null !== u
      ? (u = sc(u))
      : (u = pu(t, (u = hu(n) ? du : cu.current)));
    var c = n.getDerivedStateFromProps,
      f =
        'function' == typeof c ||
        'function' == typeof o.getSnapshotBeforeUpdate;
    f ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((s !== r || l !== u) && Oc(t, o, r, u)),
      (dc = !1);
    var d = t.memoizedState;
    (o.state = d),
      yc(t, r, o, a),
      (l = t.memoizedState),
      s !== r || d !== l || fu.current || dc
        ? ('function' == typeof c && (xc(t, n, c, r), (l = t.memoizedState)),
          (s = dc || Sc(t, n, s, r, d, l, u))
            ? (f ||
                ('function' != typeof o.UNSAFE_componentWillMount &&
                  'function' != typeof o.componentWillMount) ||
                ('function' == typeof o.componentWillMount &&
                  o.componentWillMount(),
                'function' == typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount()),
              'function' == typeof o.componentDidMount && (t.flags |= 4194308))
            : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = s))
        : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      hc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ju(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      'object' == typeof (l = n.contextType) && null !== l
        ? (l = sc(l))
        : (l = pu(t, (l = hu(n) ? du : cu.current)));
    var p = n.getDerivedStateFromProps;
    (c =
      'function' == typeof p ||
      'function' == typeof o.getSnapshotBeforeUpdate) ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((s !== f || d !== l) && Oc(t, o, r, l)),
      (dc = !1),
      (d = t.memoizedState),
      (o.state = d),
      yc(t, r, o, a);
    var h = t.memoizedState;
    s !== f || d !== h || fu.current || dc
      ? ('function' == typeof p && (xc(t, n, p, r), (h = t.memoizedState)),
        (u = dc || Sc(t, n, u, r, d, h, l) || !1)
          ? (c ||
              ('function' != typeof o.UNSAFE_componentWillUpdate &&
                'function' != typeof o.componentWillUpdate) ||
              ('function' == typeof o.componentWillUpdate &&
                o.componentWillUpdate(r, h, l),
              'function' == typeof o.UNSAFE_componentWillUpdate &&
                o.UNSAFE_componentWillUpdate(r, h, l)),
            'function' == typeof o.componentDidUpdate && (t.flags |= 4),
            'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
          : ('function' != typeof o.componentDidUpdate ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof o.getSnapshotBeforeUpdate ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (o.props = r),
        (o.state = h),
        (o.context = l),
        (r = u))
      : ('function' != typeof o.componentDidUpdate ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof o.getSnapshotBeforeUpdate ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fd(e, t, n, r, i, a);
}
function fd(e, t, n, r, a, i) {
  ld(e, t);
  var o = 0 != (128 & t.flags);
  if (!r && !o) return a && yu(t, n, !1), _d(e, t, i);
  (r = t.stateNode), (td.current = t);
  var s =
    o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = Mc(t, e.child, null, i)), (t.child = Mc(t, null, s, i)))
      : rd(e, t, s, i),
    (t.memoizedState = r.state),
    a && yu(t, n, !0),
    t.child
  );
}
function dd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vu(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(0, t.context, !1),
    Fc(e, t.containerInfo);
}
function pd(e, t, n, r, a) {
  return Qu(), qu(a), (t.flags |= 256), rd(e, t, n, r), t.child;
}
var hd,
  md,
  vd,
  gd,
  bd = { dehydrated: null, treeContext: null, retryLane: 0 };
function yd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wd(e, t, n) {
  var r,
    a = t.pendingProps,
    i = Vc.current,
    o = !1,
    s = 0 != (128 & t.flags);
  if (
    ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
    r
      ? ((o = !0), (t.flags &= -129))
      : (null !== e && null === e.memoizedState) || (i |= 1),
    lu(Vc, 1 & i),
    null === e)
  )
    return (
      Yu(t),
      null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
        ? (0 == (1 & t.mode)
            ? (t.lanes = 1)
            : '$!' === e.data
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((s = a.children),
          (e = a.fallback),
          o
            ? ((a = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              0 == (1 & a) && null !== o
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = yh(s, a, 0, null)),
              (e = bh(e, a, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yd(n)),
              (t.memoizedState = bd),
              e)
            : kd(t, s))
    );
  if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
    return (function (e, t, n, r, a, i, o) {
      if (n)
        return 256 & t.flags
          ? ((t.flags &= -257), xd(e, t, o, (r = Gf(Error(Hr(422))))))
          : null !== t.memoizedState
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (a = t.mode),
            (r = yh({ mode: 'visible', children: r.children }, a, 0, null)),
            ((i = bh(i, a, o, null)).flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            0 != (1 & t.mode) && Mc(t, e.child, null, o),
            (t.child.memoizedState = yd(o)),
            (t.memoizedState = bd),
            i);
      if (0 == (1 & t.mode)) return xd(e, t, o, null);
      if ('$!' === a.data) {
        if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
        return (r = s), xd(e, t, o, (r = Gf((i = Error(Hr(419))), r, void 0)));
      }
      if (((s = 0 != (o & e.childLanes)), nd || s)) {
        if (null !== (r = dp)) {
          switch (o & -o) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
            a !== i.retryLane &&
            ((i.retryLane = a), fc(e, a), Fp(r, e, a, -1));
        }
        return Jp(), xd(e, t, o, (r = Gf(Error(Hr(421)))));
      }
      return '$?' === a.data
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = ch.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Fu = Yl(a.nextSibling)),
          (Iu = t),
          (Uu = !0),
          (Hu = null),
          null !== e &&
            ((Nu[Tu++] = Mu),
            (Nu[Tu++] = Lu),
            (Nu[Tu++] = Du),
            (Mu = e.id),
            (Lu = e.overflow),
            (Du = t)),
          (t = kd(t, r.children)),
          (t.flags |= 4096),
          t);
    })(e, t, s, a, r, i, n);
  if (o) {
    (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
    var l = { mode: 'hidden', children: a.children };
    return (
      0 == (1 & s) && t.child !== i
        ? (((a = t.child).childLanes = 0),
          (a.pendingProps = l),
          (t.deletions = null))
        : ((a = vh(i, l)).subtreeFlags = 14680064 & i.subtreeFlags),
      null !== r ? (o = vh(r, o)) : ((o = bh(o, s, n, null)).flags |= 2),
      (o.return = t),
      (a.return = t),
      (a.sibling = o),
      (t.child = a),
      (a = o),
      (o = t.child),
      (s =
        null === (s = e.child.memoizedState)
          ? yd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bd),
      a
    );
  }
  return (
    (e = (o = e.child).sibling),
    (a = vh(o, { mode: 'visible', children: a.children })),
    0 == (1 & t.mode) && (a.lanes = n),
    (a.return = t),
    (a.sibling = null),
    null !== e &&
      (null === (n = t.deletions)
        ? ((t.deletions = [e]), (t.flags |= 16))
        : n.push(e)),
    (t.child = a),
    (t.memoizedState = null),
    a
  );
}
function kd(e, t) {
  return (
    ((t = yh({ mode: 'visible', children: t }, e.mode, 0, null)).return = e),
    (e.child = t)
  );
}
function xd(e, t, n, r) {
  return (
    null !== r && qu(r),
    Mc(t, e.child, null, n),
    ((e = kd(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ed(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), ic(e.return, t, n);
}
function Sd(e, t, n, r, a) {
  var i = e.memoizedState;
  null === i
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = a));
}
function Cd(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((rd(e, t, r.children, n), 0 != (2 & (r = Vc.current))))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (null !== e && 0 != (128 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Ed(e, n, t);
        else if (19 === e.tag) Ed(e, n, t);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((lu(Vc, r), 0 == (1 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; null !== n; )
          null !== (e = n.alternate) && null === Wc(e) && (a = n),
            (n = n.sibling);
        null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          Sd(t, !1, a, n, i);
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === Wc(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Sd(t, !0, n, null, i);
        break;
      case 'together':
        Sd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Od(e, t) {
  0 == (1 & t.mode) &&
    null !== e &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _d(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (yp |= t.lanes),
    0 == (n & t.childLanes))
  )
    return null;
  if (null !== e && t.child !== e.child) throw Error(Hr(153));
  if (null !== t.child) {
    for (
      n = vh((e = t.child), e.pendingProps), t.child = n, n.return = t;
      null !== e.sibling;

    )
      (e = e.sibling), ((n = n.sibling = vh(e, e.pendingProps)).return = t);
    n.sibling = null;
  }
  return t.child;
}
function Pd(e, t) {
  if (!Uu)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Nd(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; null !== a; )
      (n |= a.lanes | a.childLanes),
        (r |= 14680064 & a.subtreeFlags),
        (r |= 14680064 & a.flags),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; null !== a; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Td(e, t, n) {
  var r = t.pendingProps;
  switch ((ju(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Nd(t), null;
    case 1:
    case 17:
      return hu(t.type) && mu(), Nd(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Uc(),
        su(fu),
        su(cu),
        $c(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (Gu(t)
            ? (t.flags |= 4)
            : null === e ||
              (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
              ((t.flags |= 1024), null !== Hu && (Vp(Hu), (Hu = null)))),
        md(e, t),
        Nd(t),
        null
      );
    case 5:
      Bc(t);
      var a = Ic(jc.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        vd(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(Hr(166));
          return Nd(t), null;
        }
        if (((e = Ic(zc.current)), Gu(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Xl] = t), (r[Ql] = i), (e = 0 != (1 & t.mode)), n)) {
            case 'dialog':
              kl('cancel', r), kl('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              kl('load', r);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < gl.length; a++) kl(gl[a], r);
              break;
            case 'source':
              kl('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              kl('error', r), kl('load', r);
              break;
            case 'details':
              kl('toggle', r);
              break;
            case 'input':
              Ma(r, i), kl('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                kl('invalid', r);
              break;
            case 'textarea':
              Ua(r, i), kl('invalid', r);
          }
          for (var o in (ei(n, i), (a = null), i))
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              'children' === o
                ? 'string' == typeof s
                  ? r.textContent !== s &&
                    (!0 !== i.suppressHydrationWarning &&
                      Al(r.textContent, s, e),
                    (a = ['children', s]))
                  : 'number' == typeof s &&
                    r.textContent !== '' + s &&
                    (!0 !== i.suppressHydrationWarning &&
                      Al(r.textContent, s, e),
                    (a = ['children', '' + s]))
                : Vr.hasOwnProperty(o) &&
                  null != s &&
                  'onScroll' === o &&
                  kl('scroll', r);
            }
          switch (n) {
            case 'input':
              Pa(r), za(r, i, !0);
              break;
            case 'textarea':
              Pa(r), Ba(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof i.onClick && (r.onclick = zl);
          }
          (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          (o = 9 === a.nodeType ? a : a.ownerDocument),
            'http://www.w3.org/1999/xhtml' === e && (e = Va(n)),
            'http://www.w3.org/1999/xhtml' === e
              ? 'script' === n
                ? (((e = o.createElement('div')).innerHTML =
                    '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : 'string' == typeof r.is
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  'select' === n &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Xl] = t),
            (e[Ql] = r),
            hd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ti(n, r)), n)) {
              case 'dialog':
                kl('cancel', e), kl('close', e), (a = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                kl('load', e), (a = r);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < gl.length; a++) kl(gl[a], e);
                a = r;
                break;
              case 'source':
                kl('error', e), (a = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                kl('error', e), kl('load', e), (a = r);
                break;
              case 'details':
                kl('toggle', e), (a = r);
                break;
              case 'input':
                Ma(e, r), (a = Da(e, r)), kl('invalid', e);
                break;
              case 'option':
              default:
                a = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = ya({}, r, { value: void 0 })),
                  kl('invalid', e);
                break;
              case 'textarea':
                Ua(e, r), (a = Fa(e, r)), kl('invalid', e);
            }
            for (i in (ei(n, a), (s = a)))
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                'style' === i
                  ? Ja(e, l)
                  : 'dangerouslySetInnerHTML' === i
                  ? null != (l = l ? l.__html : void 0) && Ga(e, l)
                  : 'children' === i
                  ? 'string' == typeof l
                    ? ('textarea' !== n || '' !== l) && Xa(e, l)
                    : 'number' == typeof l && Xa(e, '' + l)
                  : 'suppressContentEditableWarning' !== i &&
                    'suppressHydrationWarning' !== i &&
                    'autoFocus' !== i &&
                    (Vr.hasOwnProperty(i)
                      ? null != l && 'onScroll' === i && kl('scroll', e)
                      : null != l && ta(e, i, l, o));
              }
            switch (n) {
              case 'input':
                Pa(e), za(e, r, !1);
                break;
              case 'textarea':
                Pa(e), Ba(e);
                break;
              case 'option':
                null != r.value && e.setAttribute('value', '' + Oa(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  null != (i = r.value)
                    ? Ia(e, !!r.multiple, i, !1)
                    : null != r.defaultValue &&
                      Ia(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                'function' == typeof a.onClick && (e.onclick = zl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Nd(t), null;
    case 6:
      if (e && null != t.stateNode) gd(e, t, e.memoizedProps, r);
      else {
        if ('string' != typeof r && null === t.stateNode) throw Error(Hr(166));
        if (((n = Ic(jc.current)), Ic(zc.current), Gu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xl] = t),
            (i = r.nodeValue !== n) && null !== (e = Iu))
          )
            switch (e.tag) {
              case 3:
                Al(r.nodeValue, n, 0 != (1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Al(r.nodeValue, n, 0 != (1 & e.mode));
            }
          i && (t.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            Xl
          ] = t),
            (t.stateNode = r);
      }
      return Nd(t), null;
    case 13:
      if (
        (su(Vc),
        (r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (Uu && null !== Fu && 0 != (1 & t.mode) && 0 == (128 & t.flags))
          Xu(), Qu(), (t.flags |= 98560), (i = !1);
        else if (((i = Gu(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!i) throw Error(Hr(318));
            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
              throw Error(Hr(317));
            i[Xl] = t;
          } else
            Qu(),
              0 == (128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4);
          Nd(t), (i = !1);
        } else null !== Hu && (Vp(Hu), (Hu = null)), (i = !0);
        if (!i) return 65536 & t.flags ? t : null;
      }
      return 0 != (128 & t.flags)
        ? ((t.lanes = n), t)
        : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
            r &&
            ((t.child.flags |= 8192),
            0 != (1 & t.mode) &&
              (null === e || 0 != (1 & Vc.current)
                ? 0 === gp && (gp = 3)
                : Jp())),
          null !== t.updateQueue && (t.flags |= 4),
          Nd(t),
          null);
    case 4:
      return (
        Uc(), md(e, t), null === e && Sl(t.stateNode.containerInfo), Nd(t), null
      );
    case 10:
      return ac(t.type._context), Nd(t), null;
    case 19:
      if ((su(Vc), null === (i = t.memoizedState))) return Nd(t), null;
      if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
        if (r) Pd(i, !1);
        else {
          if (0 !== gp || (null !== e && 0 != (128 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (o = Wc(e))) {
                for (
                  t.flags |= 128,
                    Pd(i, !1),
                    null !== (r = o.updateQueue) &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((i = n).flags &= 14680066),
                    null === (o = i.alternate)
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return lu(Vc, (1 & Vc.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== i.tail &&
            Li() > Cp &&
            ((t.flags |= 128), (r = !0), Pd(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (e = Wc(o))) {
            if (
              ((t.flags |= 128),
              (r = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              Pd(i, !0),
              null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Uu)
            )
              return Nd(t), null;
          } else
            2 * Li() - i.renderingStartTime > Cp &&
              1073741824 !== n &&
              ((t.flags |= 128), (r = !0), Pd(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return null !== i.tail
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Li()),
          (t.sibling = null),
          (n = Vc.current),
          lu(Vc, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Nd(t), null);
    case 22:
    case 23:
      return (
        Xp(),
        (r = null !== t.memoizedState),
        null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
        r && 0 != (1 & t.mode)
          ? 0 != (1073741824 & mp) &&
            (Nd(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Nd(t),
        null
      );
    case 24:
    case 25:
      return null;
  }
  throw Error(Hr(156, t.tag));
}
function Dd(e, t) {
  switch ((ju(t), t.tag)) {
    case 1:
      return (
        hu(t.type) && mu(),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Uc(),
        su(fu),
        su(cu),
        $c(),
        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 5:
      return Bc(t), null;
    case 13:
      if ((su(Vc), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(Hr(340));
        Qu();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return su(Vc), null;
    case 4:
      return Uc(), null;
    case 10:
      return ac(t.type._context), null;
    case 22:
    case 23:
      return Xp(), null;
    default:
      return null;
  }
}
(hd = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (md = function () {}),
  (vd = function (e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      (e = t.stateNode), Ic(zc.current);
      var i,
        o = null;
      switch (n) {
        case 'input':
          (a = Da(e, a)), (r = Da(e, r)), (o = []);
          break;
        case 'select':
          (a = ya({}, a, { value: void 0 })),
            (r = ya({}, r, { value: void 0 })),
            (o = []);
          break;
        case 'textarea':
          (a = Fa(e, a)), (r = Fa(e, r)), (o = []);
          break;
        default:
          'function' != typeof a.onClick &&
            'function' == typeof r.onClick &&
            (e.onclick = zl);
      }
      for (u in (ei(n, r), (n = null), a))
        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
          if ('style' === u) {
            var s = a[u];
            for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
          } else
            'dangerouslySetInnerHTML' !== u &&
              'children' !== u &&
              'suppressContentEditableWarning' !== u &&
              'suppressHydrationWarning' !== u &&
              'autoFocus' !== u &&
              (Vr.hasOwnProperty(u)
                ? o || (o = [])
                : (o = o || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((s = null != a ? a[u] : void 0),
          r.hasOwnProperty(u) && l !== s && (null != l || null != s))
        )
          if ('style' === u)
            if (s) {
              for (i in s)
                !s.hasOwnProperty(i) ||
                  (l && l.hasOwnProperty(i)) ||
                  (n || (n = {}), (n[i] = ''));
              for (i in l)
                l.hasOwnProperty(i) &&
                  s[i] !== l[i] &&
                  (n || (n = {}), (n[i] = l[i]));
            } else n || (o || (o = []), o.push(u, n)), (n = l);
          else
            'dangerouslySetInnerHTML' === u
              ? ((l = l ? l.__html : void 0),
                (s = s ? s.__html : void 0),
                null != l && s !== l && (o = o || []).push(u, l))
              : 'children' === u
              ? ('string' != typeof l && 'number' != typeof l) ||
                (o = o || []).push(u, '' + l)
              : 'suppressContentEditableWarning' !== u &&
                'suppressHydrationWarning' !== u &&
                (Vr.hasOwnProperty(u)
                  ? (null != l && 'onScroll' === u && kl('scroll', e),
                    o || s === l || (o = []))
                  : (o = o || []).push(u, l));
      }
      n && (o = o || []).push('style', n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  }),
  (gd = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var Md = !1,
  Ld = !1,
  Ad = 'function' == typeof WeakSet ? WeakSet : Set,
  zd = null;
function Rd(e, t) {
  var n = e.ref;
  if (null !== n)
    if ('function' == typeof n)
      try {
        n(null);
      } catch (r) {
        sh(e, t, r);
      }
    else n.current = null;
}
function jd(e, t, n) {
  try {
    n();
  } catch (r) {
    sh(e, t, r);
  }
}
var Id = !1;
function Fd(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), void 0 !== i && jd(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ud(e, t) {
  if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hd(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
  }
}
function Bd(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), Bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag &&
      null !== (t = e.stateNode) &&
      (delete t[Xl], delete t[Ql], delete t[Kl], delete t[Jl], delete t[Zl]),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vd(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Wd(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || Vd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

    ) {
      if (2 & e.flags) continue e;
      if (null === e.child || 4 === e.tag) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Yd(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType
            ? (t = n.parentNode).insertBefore(e, n)
            : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = zl));
  else if (4 !== r && null !== (e = e.child))
    for (Yd(e, t, n), e = e.sibling; null !== e; ) Yd(e, t, n), (e = e.sibling);
}
function $d(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for ($d(e, t, n), e = e.sibling; null !== e; ) $d(e, t, n), (e = e.sibling);
}
var Gd = null,
  Xd = !1;
function Qd(e, t, n) {
  for (n = n.child; null !== n; ) qd(e, t, n), (n = n.sibling);
}
function qd(e, t, n) {
  if (Hi && 'function' == typeof Hi.onCommitFiberUnmount)
    try {
      Hi.onCommitFiberUnmount(Ui, n);
    } catch (s) {}
  switch (n.tag) {
    case 5:
      Ld || Rd(n, t);
    case 6:
      var r = Gd,
        a = Xd;
      (Gd = null),
        Qd(e, t, n),
        (Xd = a),
        null !== (Gd = r) &&
          (Xd
            ? ((e = Gd),
              (n = n.stateNode),
              8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Gd.removeChild(n.stateNode));
      break;
    case 18:
      null !== Gd &&
        (Xd
          ? ((e = Gd),
            (n = n.stateNode),
            8 === e.nodeType
              ? Wl(e.parentNode, n)
              : 1 === e.nodeType && Wl(e, n),
            Co(e))
          : Wl(Gd, n.stateNode));
      break;
    case 4:
      (r = Gd),
        (a = Xd),
        (Gd = n.stateNode.containerInfo),
        (Xd = !0),
        Qd(e, t, n),
        (Gd = r),
        (Xd = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ld && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        a = r = r.next;
        do {
          var i = a,
            o = i.destroy;
          (i = i.tag),
            void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && jd(n, t, o),
            (a = a.next);
        } while (a !== r);
      }
      Qd(e, t, n);
      break;
    case 1:
      if (
        !Ld &&
        (Rd(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount)
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          sh(n, t, s);
        }
      Qd(e, t, n);
      break;
    case 21:
      Qd(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Ld = (r = Ld) || null !== n.memoizedState), Qd(e, t, n), (Ld = r))
        : Qd(e, t, n);
      break;
    default:
      Qd(e, t, n);
  }
}
function Kd(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new Ad()),
      t.forEach(function (t) {
        var r = fh.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function Jd(e, t) {
  var n = t.deletions;
  if (null !== n)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; null !== s; ) {
          switch (s.tag) {
            case 5:
              (Gd = s.stateNode), (Xd = !1);
              break e;
            case 3:
            case 4:
              (Gd = s.stateNode.containerInfo), (Xd = !0);
              break e;
          }
          s = s.return;
        }
        if (null === Gd) throw Error(Hr(160));
        qd(i, o, a), (Gd = null), (Xd = !1);
        var l = a.alternate;
        null !== l && (l.return = null), (a.return = null);
      } catch (u) {
        sh(a, t, u);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; null !== t; ) Zd(t, e), (t = t.sibling);
}
function Zd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Jd(t, e), ep(e), 4 & r)) {
        try {
          Fd(3, e, e.return), Ud(3, e);
        } catch (m) {
          sh(e, e.return, m);
        }
        try {
          Fd(5, e, e.return);
        } catch (m) {
          sh(e, e.return, m);
        }
      }
      break;
    case 1:
      Jd(t, e), ep(e), 512 & r && null !== n && Rd(n, n.return);
      break;
    case 5:
      if (
        (Jd(t, e),
        ep(e),
        512 & r && null !== n && Rd(n, n.return),
        32 & e.flags)
      ) {
        var a = e.stateNode;
        try {
          Xa(a, '');
        } catch (m) {
          sh(e, e.return, m);
        }
      }
      if (4 & r && null != (a = e.stateNode)) {
        var i = e.memoizedProps,
          o = null !== n ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), null !== l))
          try {
            'input' === s && 'radio' === i.type && null != i.name && La(a, i),
              ti(s, o);
            var u = ti(s, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              'style' === c
                ? Ja(a, f)
                : 'dangerouslySetInnerHTML' === c
                ? Ga(a, f)
                : 'children' === c
                ? Xa(a, f)
                : ta(a, c, f, u);
            }
            switch (s) {
              case 'input':
                Aa(a, i);
                break;
              case 'textarea':
                Ha(a, i);
                break;
              case 'select':
                var d = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                null != p
                  ? Ia(a, !!i.multiple, p, !1)
                  : d !== !!i.multiple &&
                    (null != i.defaultValue
                      ? Ia(a, !!i.multiple, i.defaultValue, !0)
                      : Ia(a, !!i.multiple, i.multiple ? [] : '', !1));
            }
            a[Ql] = i;
          } catch (m) {
            sh(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Jd(t, e), ep(e), 4 & r)) {
        if (null === e.stateNode) throw Error(Hr(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (m) {
          sh(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Jd(t, e), ep(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          Co(t.containerInfo);
        } catch (m) {
          sh(e, e.return, m);
        }
      break;
    case 4:
    default:
      Jd(t, e), ep(e);
      break;
    case 13:
      Jd(t, e),
        ep(e),
        8192 & (a = e.child).flags &&
          ((i = null !== a.memoizedState),
          (a.stateNode.isHidden = i),
          !i ||
            (null !== a.alternate && null !== a.alternate.memoizedState) ||
            (Sp = Li())),
        4 & r && Kd(e);
      break;
    case 22:
      if (
        ((c = null !== n && null !== n.memoizedState),
        1 & e.mode ? ((Ld = (u = Ld) || c), Jd(t, e), (Ld = u)) : Jd(t, e),
        ep(e),
        8192 & r)
      ) {
        if (
          ((u = null !== e.memoizedState),
          (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
        )
          for (zd = e, c = e.child; null !== c; ) {
            for (f = zd = c; null !== zd; ) {
              switch (((p = (d = zd).child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fd(4, d, d.return);
                  break;
                case 1:
                  Rd(d, d.return);
                  var h = d.stateNode;
                  if ('function' == typeof h.componentWillUnmount) {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (m) {
                      sh(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Rd(d, d.return);
                  break;
                case 22:
                  if (null !== d.memoizedState) {
                    ap(f);
                    continue;
                  }
              }
              null !== p ? ((p.return = d), (zd = p)) : ap(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (5 === f.tag) {
            if (null === c) {
              c = f;
              try {
                (a = f.stateNode),
                  u
                    ? 'function' == typeof (i = a.style).setProperty
                      ? i.setProperty('display', 'none', 'important')
                      : (i.display = 'none')
                    : ((s = f.stateNode),
                      (o =
                        null != (l = f.memoizedProps.style) &&
                        l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = Ka('display', o)));
              } catch (m) {
                sh(e, e.return, m);
              }
            }
          } else if (6 === f.tag) {
            if (null === c)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (m) {
                sh(e, e.return, m);
              }
          } else if (
            ((22 !== f.tag && 23 !== f.tag) ||
              null === f.memoizedState ||
              f === e) &&
            null !== f.child
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; null === f.sibling; ) {
            if (null === f.return || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Jd(t, e), ep(e), 4 & r && Kd(e);
    case 21:
  }
}
function ep(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; null !== n; ) {
          if (Vd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Hr(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          32 & r.flags && (Xa(a, ''), (r.flags &= -33)), $d(e, Wd(e), a);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo;
          Yd(e, Wd(e), i);
          break;
        default:
          throw Error(Hr(161));
      }
    } catch (o) {
      sh(e, e.return, o);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function tp(e, t, n) {
  (zd = e), np(e);
}
function np(e, t, n) {
  for (var r = 0 != (1 & e.mode); null !== zd; ) {
    var a = zd,
      i = a.child;
    if (22 === a.tag && r) {
      var o = null !== a.memoizedState || Md;
      if (!o) {
        var s = a.alternate,
          l = (null !== s && null !== s.memoizedState) || Ld;
        s = Md;
        var u = Ld;
        if (((Md = o), (Ld = l) && !u))
          for (zd = a; null !== zd; )
            (l = (o = zd).child),
              22 === o.tag && null !== o.memoizedState
                ? ip(a)
                : null !== l
                ? ((l.return = o), (zd = l))
                : ip(a);
        for (; null !== i; ) (zd = i), np(i), (i = i.sibling);
        (zd = a), (Md = s), (Ld = u);
      }
      rp(e);
    } else
      0 != (8772 & a.subtreeFlags) && null !== i
        ? ((i.return = a), (zd = i))
        : rp(e);
  }
}
function rp(e) {
  for (; null !== zd; ) {
    var t = zd;
    if (0 != (8772 & t.flags)) {
      var n = t.alternate;
      try {
        if (0 != (8772 & t.flags))
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ld || Ud(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Ld)
                if (null === n) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ju(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              null !== i && wc(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (null !== o) {
                if (((n = null), null !== t.child))
                  switch (t.child.tag) {
                    case 5:
                    case 1:
                      n = t.child.stateNode;
                  }
                wc(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (null === n && 4 & t.flags) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (null === t.memoizedState) {
                var u = t.alternate;
                if (null !== u) {
                  var c = u.memoizedState;
                  if (null !== c) {
                    var f = c.dehydrated;
                    null !== f && Co(f);
                  }
                }
              }
              break;
            default:
              throw Error(Hr(163));
          }
        Ld || (512 & t.flags && Hd(t));
      } catch (d) {
        sh(t, t.return, d);
      }
    }
    if (t === e) {
      zd = null;
      break;
    }
    if (null !== (n = t.sibling)) {
      (n.return = t.return), (zd = n);
      break;
    }
    zd = t.return;
  }
}
function ap(e) {
  for (; null !== zd; ) {
    var t = zd;
    if (t === e) {
      zd = null;
      break;
    }
    var n = t.sibling;
    if (null !== n) {
      (n.return = t.return), (zd = n);
      break;
    }
    zd = t.return;
  }
}
function ip(e) {
  for (; null !== zd; ) {
    var t = zd;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ud(4, t);
          } catch (l) {
            sh(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if ('function' == typeof r.componentDidMount) {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              sh(t, a, l);
            }
          }
          var i = t.return;
          try {
            Hd(t);
          } catch (l) {
            sh(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Hd(t);
          } catch (l) {
            sh(t, o, l);
          }
      }
    } catch (l) {
      sh(t, t.return, l);
    }
    if (t === e) {
      zd = null;
      break;
    }
    var s = t.sibling;
    if (null !== s) {
      (s.return = t.return), (zd = s);
      break;
    }
    zd = t.return;
  }
}
var op,
  sp = Math.ceil,
  lp = na.ReactCurrentDispatcher,
  up = na.ReactCurrentOwner,
  cp = na.ReactCurrentBatchConfig,
  fp = 0,
  dp = null,
  pp = null,
  hp = 0,
  mp = 0,
  vp = ou(0),
  gp = 0,
  bp = null,
  yp = 0,
  wp = 0,
  kp = 0,
  xp = null,
  Ep = null,
  Sp = 0,
  Cp = 1 / 0,
  Op = null,
  _p = !1,
  Pp = null,
  Np = null,
  Tp = !1,
  Dp = null,
  Mp = 0,
  Lp = 0,
  Ap = null,
  zp = -1,
  Rp = 0;
function jp() {
  return 0 != (6 & fp) ? Li() : -1 !== zp ? zp : (zp = Li());
}
function Ip(e) {
  return 0 == (1 & e.mode)
    ? 1
    : 0 != (2 & fp) && 0 !== hp
    ? hp & -hp
    : null !== Ku.transition
    ? (0 === Rp && (Rp = Ki()), Rp)
    : 0 !== (e = to)
    ? e
    : (e = void 0 === (e = window.event) ? 16 : Lo(e.type));
}
function Fp(e, t, n, r) {
  if (50 < Lp) throw ((Lp = 0), (Ap = null), Error(Hr(185)));
  Zi(e, n, r),
    (0 != (2 & fp) && e === dp) ||
      (e === dp && (0 == (2 & fp) && (wp |= n), 4 === gp && Wp(e, hp)),
      Up(e, r),
      1 === n &&
        0 === fp &&
        0 == (1 & t.mode) &&
        ((Cp = Li() + 500), ku && Su()));
}
function Up(e, t) {
  var n = e.callbackNode;
  !(function (e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - Bi(i),
        s = 1 << o,
        l = a[o];
      -1 === l
        ? (0 != (s & n) && 0 == (s & r)) || (a[o] = Qi(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  })(e, t);
  var r = Xi(e, e === dp ? hp : 0);
  if (0 === r)
    null !== n && Ti(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((null != n && Ti(n), 1 === t))
      0 === e.tag
        ? (function (e) {
            (ku = !0), Eu(e);
          })(Yp.bind(null, e))
        : Eu(Yp.bind(null, e)),
        Bl(function () {
          0 == (6 & fp) && Su();
        }),
        (n = null);
    else {
      switch (no(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = Ri;
          break;
        case 16:
        default:
          n = ji;
          break;
        case 536870912:
          n = Fi;
      }
      n = dh(n, Hp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hp(e, t) {
  if (((zp = -1), (Rp = 0), 0 != (6 & fp))) throw Error(Hr(327));
  var n = e.callbackNode;
  if (ih() && e.callbackNode !== n) return null;
  var r = Xi(e, e === dp ? hp : 0);
  if (0 === r) return null;
  if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Zp(e, r);
  else {
    t = r;
    var a = fp;
    fp |= 2;
    var i = Kp();
    for (
      (dp === e && hp === t) || ((Op = null), (Cp = Li() + 500), Qp(e, t));
      ;

    )
      try {
        th();
        break;
      } catch (s) {
        qp(e, s);
      }
    rc(),
      (lp.current = i),
      (fp = a),
      null !== pp ? (t = 0) : ((dp = null), (hp = 0), (t = gp));
  }
  if (0 !== t) {
    if ((2 === t && 0 !== (a = qi(e)) && ((r = a), (t = Bp(e, a))), 1 === t))
      throw ((n = bp), Qp(e, 0), Wp(e, r), Up(e, Li()), n);
    if (6 === t) Wp(e, r);
    else {
      if (
        ((a = e.current.alternate),
        0 == (30 & r) &&
          !(function (e) {
            for (var t = e; ; ) {
              if (16384 & t.flags) {
                var n = t.updateQueue;
                if (null !== n && null !== (n = n.stores))
                  for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                      i = a.getSnapshot;
                    a = a.value;
                    try {
                      if (!Vs(i(), a)) return !1;
                    } catch (o) {
                      return !1;
                    }
                  }
              }
              if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                (n.return = t), (t = n);
              else {
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) return !0;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            }
            return !0;
          })(a) &&
          (2 === (t = Zp(e, r)) &&
            0 !== (i = qi(e)) &&
            ((r = i), (t = Bp(e, i))),
          1 === t))
      )
        throw ((n = bp), Qp(e, 0), Wp(e, r), Up(e, Li()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Hr(345));
        case 2:
        case 5:
          ah(e, Ep, Op);
          break;
        case 3:
          if ((Wp(e, r), (130023424 & r) === r && 10 < (t = Sp + 500 - Li()))) {
            if (0 !== Xi(e, 0)) break;
            if (((a = e.suspendedLanes) & r) !== r) {
              jp(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Fl(ah.bind(null, e, Ep, Op), t);
            break;
          }
          ah(e, Ep, Op);
          break;
        case 4:
          if ((Wp(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - Bi(r);
            (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
          }
          if (
            ((r = a),
            10 <
              (r =
                (120 > (r = Li() - r)
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * sp(r / 1960)) - r))
          ) {
            e.timeoutHandle = Fl(ah.bind(null, e, Ep, Op), r);
            break;
          }
          ah(e, Ep, Op);
          break;
        default:
          throw Error(Hr(329));
      }
    }
  }
  return Up(e, Li()), e.callbackNode === n ? Hp.bind(null, e) : null;
}
function Bp(e, t) {
  var n = xp;
  return (
    e.current.memoizedState.isDehydrated && (Qp(e, t).flags |= 256),
    2 !== (e = Zp(e, t)) && ((t = Ep), (Ep = n), null !== t && Vp(t)),
    e
  );
}
function Vp(e) {
  null === Ep ? (Ep = e) : Ep.push.apply(Ep, e);
}
function Wp(e, t) {
  for (
    t &= ~kp,
      t &= ~wp,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Bi(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Yp(e) {
  if (0 != (6 & fp)) throw Error(Hr(327));
  ih();
  var t = Xi(e, 0);
  if (0 == (1 & t)) return Up(e, Li()), null;
  var n = Zp(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = qi(e);
    0 !== r && ((t = r), (n = Bp(e, r)));
  }
  if (1 === n) throw ((n = bp), Qp(e, 0), Wp(e, t), Up(e, Li()), n);
  if (6 === n) throw Error(Hr(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ah(e, Ep, Op),
    Up(e, Li()),
    null
  );
}
function $p(e, t) {
  var n = fp;
  fp |= 1;
  try {
    return e(t);
  } finally {
    0 === (fp = n) && ((Cp = Li() + 500), ku && Su());
  }
}
function Gp(e) {
  null !== Dp && 0 === Dp.tag && 0 == (6 & fp) && ih();
  var t = fp;
  fp |= 1;
  var n = cp.transition,
    r = to;
  try {
    if (((cp.transition = null), (to = 1), e)) return e();
  } finally {
    (to = r), (cp.transition = n), 0 == (6 & (fp = t)) && Su();
  }
}
function Xp() {
  (mp = vp.current), su(vp);
}
function Qp(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), Ul(n)), null !== pp))
    for (n = pp.return; null !== n; ) {
      var r = n;
      switch ((ju(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && mu();
          break;
        case 3:
          Uc(), su(fu), su(cu), $c();
          break;
        case 5:
          Bc(r);
          break;
        case 4:
          Uc();
          break;
        case 13:
        case 19:
          su(Vc);
          break;
        case 10:
          ac(r.type._context);
          break;
        case 22:
        case 23:
          Xp();
      }
      n = n.return;
    }
  if (
    ((dp = e),
    (pp = e = vh(e.current, null)),
    (hp = mp = t),
    (gp = 0),
    (bp = null),
    (kp = wp = yp = 0),
    (Ep = xp = null),
    null !== lc)
  ) {
    for (t = 0; t < lc.length; t++)
      if (null !== (r = (n = lc[t]).interleaved)) {
        n.interleaved = null;
        var a = r.next,
          i = n.pending;
        if (null !== i) {
          var o = i.next;
          (i.next = a), (r.next = o);
        }
        n.pending = r;
      }
    lc = null;
  }
  return e;
}
function qp(e, t) {
  for (;;) {
    var n = pp;
    try {
      if ((rc(), (Gc.current = Bf), Zc)) {
        for (var r = qc.memoizedState; null !== r; ) {
          var a = r.queue;
          null !== a && (a.pending = null), (r = r.next);
        }
        Zc = !1;
      }
      if (
        ((Qc = 0),
        (Jc = Kc = qc = null),
        (ef = !1),
        (tf = 0),
        (up.current = null),
        null === n || null === n.return)
      ) {
        (gp = 1), (bp = t), (pp = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          l = t;
        if (
          ((t = hp),
          (s.flags |= 32768),
          null !== l && 'object' == typeof l && 'function' == typeof l.then)
        ) {
          var u = l,
            c = s,
            f = c.tag;
          if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Zf(o);
          if (null !== p) {
            (p.flags &= -257),
              ed(p, o, s, 0, t),
              1 & p.mode && Jf(i, u, t),
              (l = u);
            var h = (t = p).updateQueue;
            if (null === h) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else h.add(l);
            break e;
          }
          if (0 == (1 & t)) {
            Jf(i, u, t), Jp();
            break e;
          }
          l = Error(Hr(426));
        } else if (Uu && 1 & s.mode) {
          var v = Zf(o);
          if (null !== v) {
            0 == (65536 & v.flags) && (v.flags |= 256),
              ed(v, o, s, 0, t),
              qu($f(l, s));
            break e;
          }
        }
        (i = l = $f(l, s)),
          4 !== gp && (gp = 2),
          null === xp ? (xp = [i]) : xp.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t), bc(i, qf(0, l, t));
              break e;
            case 1:
              s = l;
              var g = i.type,
                b = i.stateNode;
              if (
                0 == (128 & i.flags) &&
                ('function' == typeof g.getDerivedStateFromError ||
                  (null !== b &&
                    'function' == typeof b.componentDidCatch &&
                    (null === Np || !Np.has(b))))
              ) {
                (i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  bc(i, Kf(i, s, t));
                break e;
              }
          }
          i = i.return;
        } while (null !== i);
      }
      rh(n);
    } catch (y) {
      (t = y), pp === n && null !== n && (pp = n = n.return);
      continue;
    }
    break;
  }
}
function Kp() {
  var e = lp.current;
  return (lp.current = Bf), null === e ? Bf : e;
}
function Jp() {
  (0 !== gp && 3 !== gp && 2 !== gp) || (gp = 4),
    null === dp ||
      (0 == (268435455 & yp) && 0 == (268435455 & wp)) ||
      Wp(dp, hp);
}
function Zp(e, t) {
  var n = fp;
  fp |= 2;
  var r = Kp();
  for ((dp === e && hp === t) || ((Op = null), Qp(e, t)); ; )
    try {
      eh();
      break;
    } catch (ay) {
      qp(e, ay);
    }
  if ((rc(), (fp = n), (lp.current = r), null !== pp)) throw Error(Hr(261));
  return (dp = null), (hp = 0), gp;
}
function eh() {
  for (; null !== pp; ) nh(pp);
}
function th() {
  for (; null !== pp && !Di(); ) nh(pp);
}
function nh(e) {
  var t = op(e.alternate, e, mp);
  (e.memoizedProps = e.pendingProps),
    null === t ? rh(e) : (pp = t),
    (up.current = null);
}
function rh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (32768 & t.flags))) {
      if (null !== (n = Td(n, t, mp))) return void (pp = n);
    } else {
      if (null !== (n = Dd(n, t))) return (n.flags &= 32767), void (pp = n);
      if (null === e) return (gp = 6), void (pp = null);
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    }
    if (null !== (t = t.sibling)) return void (pp = t);
    pp = t = e;
  } while (null !== t);
  0 === gp && (gp = 5);
}
function ah(e, t, n) {
  var r = to,
    a = cp.transition;
  try {
    (cp.transition = null),
      (to = 1),
      (function (e, t, n, r) {
        do {
          ih();
        } while (null !== Dp);
        if (0 != (6 & fp)) throw Error(Hr(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(Hr(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var i = n.lanes | n.childLanes;
        if (
          ((function (e, t) {
            var n = e.pendingLanes & ~t;
            (e.pendingLanes = t),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.expiredLanes &= t),
              (e.mutableReadLanes &= t),
              (e.entangledLanes &= t),
              (t = e.entanglements);
            var r = e.eventTimes;
            for (e = e.expirationTimes; 0 < n; ) {
              var a = 31 - Bi(n),
                i = 1 << a;
              (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
            }
          })(e, i),
          e === dp && ((pp = dp = null), (hp = 0)),
          (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
            Tp ||
            ((Tp = !0),
            dh(ji, function () {
              return ih(), null;
            })),
          (i = 0 != (15990 & n.flags)),
          0 != (15990 & n.subtreeFlags) || i)
        ) {
          (i = cp.transition), (cp.transition = null);
          var o = to;
          to = 1;
          var s = fp;
          (fp |= 4),
            (up.current = null),
            (function (e, t) {
              if (((Rl = _o), Qs((e = Xs())))) {
                if ('selectionStart' in e)
                  var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var r =
                      (n = ((n = e.ownerDocument) && n.defaultView) || window)
                        .getSelection && n.getSelection();
                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var a = r.anchorOffset,
                        i = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType, i.nodeType;
                      } catch (w) {
                        n = null;
                        break e;
                      }
                      var o = 0,
                        s = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                      t: for (;;) {
                        for (
                          var p;
                          f !== n ||
                            (0 !== a && 3 !== f.nodeType) ||
                            (s = o + a),
                            f !== i ||
                              (0 !== r && 3 !== f.nodeType) ||
                              (l = o + r),
                            3 === f.nodeType && (o += f.nodeValue.length),
                            null !== (p = f.firstChild);

                        )
                          (d = f), (f = p);
                        for (;;) {
                          if (f === e) break t;
                          if (
                            (d === n && ++u === a && (s = o),
                            d === i && ++c === r && (l = o),
                            null !== (p = f.nextSibling))
                          )
                            break;
                          d = (f = d).parentNode;
                        }
                        f = p;
                      }
                      n = -1 === s || -1 === l ? null : { start: s, end: l };
                    } else n = null;
                  }
                n = n || { start: 0, end: 0 };
              } else n = null;
              for (
                jl = { focusedElem: e, selectionRange: n }, _o = !1, zd = t;
                null !== zd;

              )
                if (
                  ((e = (t = zd).child),
                  0 != (1028 & t.subtreeFlags) && null !== e)
                )
                  (e.return = t), (zd = e);
                else
                  for (; null !== zd; ) {
                    t = zd;
                    try {
                      var h = t.alternate;
                      if (0 != (1024 & t.flags))
                        switch (t.tag) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (null !== h) {
                              var m = h.memoizedProps,
                                v = h.memoizedState,
                                g = t.stateNode,
                                b = g.getSnapshotBeforeUpdate(
                                  t.elementType === t.type ? m : Ju(t.type, m),
                                  v,
                                );
                              g.__reactInternalSnapshotBeforeUpdate = b;
                            }
                            break;
                          case 3:
                            var y = t.stateNode.containerInfo;
                            1 === y.nodeType
                              ? (y.textContent = '')
                              : 9 === y.nodeType &&
                                y.documentElement &&
                                y.removeChild(y.documentElement);
                            break;
                          default:
                            throw Error(Hr(163));
                        }
                    } catch (w) {
                      sh(t, t.return, w);
                    }
                    if (null !== (e = t.sibling)) {
                      (e.return = t.return), (zd = e);
                      break;
                    }
                    zd = t.return;
                  }
              (h = Id), (Id = !1);
            })(e, n),
            Zd(n, e),
            qs(jl),
            (_o = !!Rl),
            (jl = Rl = null),
            (e.current = n),
            tp(n),
            Mi(),
            (fp = s),
            (to = o),
            (cp.transition = i);
        } else e.current = n;
        if (
          (Tp && ((Tp = !1), (Dp = e), (Mp = a)),
          (i = e.pendingLanes),
          0 === i && (Np = null),
          (function (e) {
            if (Hi && 'function' == typeof Hi.onCommitFiberRoot)
              try {
                Hi.onCommitFiberRoot(
                  Ui,
                  e,
                  void 0,
                  128 == (128 & e.current.flags),
                );
              } catch (t) {}
          })(n.stateNode),
          Up(e, Li()),
          null !== t)
        )
          for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (a = t[n]),
              r(a.value, { componentStack: a.stack, digest: a.digest });
        if (_p) throw ((_p = !1), (e = Pp), (Pp = null), e);
        0 != (1 & Mp) && 0 !== e.tag && ih(),
          (i = e.pendingLanes),
          0 != (1 & i) ? (e === Ap ? Lp++ : ((Lp = 0), (Ap = e))) : (Lp = 0),
          Su();
      })(e, t, n, r);
  } finally {
    (cp.transition = a), (to = r);
  }
  return null;
}
function ih() {
  if (null !== Dp) {
    var e = no(Mp),
      t = cp.transition,
      n = to;
    try {
      if (((cp.transition = null), (to = 16 > e ? 16 : e), null === Dp))
        var r = !1;
      else {
        if (((e = Dp), (Dp = null), (Mp = 0), 0 != (6 & fp)))
          throw Error(Hr(331));
        var a = fp;
        for (fp |= 4, zd = e.current; null !== zd; ) {
          var i = zd,
            o = i.child;
          if (0 != (16 & zd.flags)) {
            var s = i.deletions;
            if (null !== s) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (zd = u; null !== zd; ) {
                  var c = zd;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fd(8, c, i);
                  }
                  var f = c.child;
                  if (null !== f) (f.return = c), (zd = f);
                  else
                    for (; null !== zd; ) {
                      var d = (c = zd).sibling,
                        p = c.return;
                      if ((Bd(c), c === u)) {
                        zd = null;
                        break;
                      }
                      if (null !== d) {
                        (d.return = p), (zd = d);
                        break;
                      }
                      zd = p;
                    }
                }
              }
              var h = i.alternate;
              if (null !== h) {
                var m = h.child;
                if (null !== m) {
                  h.child = null;
                  do {
                    var v = m.sibling;
                    (m.sibling = null), (m = v);
                  } while (null !== m);
                }
              }
              zd = i;
            }
          }
          if (0 != (2064 & i.subtreeFlags) && null !== o)
            (o.return = i), (zd = o);
          else
            e: for (; null !== zd; ) {
              if (0 != (2048 & (i = zd).flags))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fd(9, i, i.return);
                }
              var g = i.sibling;
              if (null !== g) {
                (g.return = i.return), (zd = g);
                break e;
              }
              zd = i.return;
            }
        }
        var b = e.current;
        for (zd = b; null !== zd; ) {
          var y = (o = zd).child;
          if (0 != (2064 & o.subtreeFlags) && null !== y)
            (y.return = o), (zd = y);
          else
            e: for (o = b; null !== zd; ) {
              if (0 != (2048 & (s = zd).flags))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ud(9, s);
                  }
                } catch (k) {
                  sh(s, s.return, k);
                }
              if (s === o) {
                zd = null;
                break e;
              }
              var w = s.sibling;
              if (null !== w) {
                (w.return = s.return), (zd = w);
                break e;
              }
              zd = s.return;
            }
        }
        if (
          ((fp = a), Su(), Hi && 'function' == typeof Hi.onPostCommitFiberRoot)
        )
          try {
            Hi.onPostCommitFiberRoot(Ui, e);
          } catch (k) {}
        r = !0;
      }
      return r;
    } finally {
      (to = n), (cp.transition = t);
    }
  }
  return !1;
}
function oh(e, t, n) {
  (e = vc(e, (t = qf(0, (t = $f(n, t)), 1)), 1)),
    (t = jp()),
    null !== e && (Zi(e, 1, t), Up(e, t));
}
function sh(e, t, n) {
  if (3 === e.tag) oh(e, e, n);
  else
    for (; null !== t; ) {
      if (3 === t.tag) {
        oh(t, e, n);
        break;
      }
      if (1 === t.tag) {
        var r = t.stateNode;
        if (
          'function' == typeof t.type.getDerivedStateFromError ||
          ('function' == typeof r.componentDidCatch &&
            (null === Np || !Np.has(r)))
        ) {
          (t = vc(t, (e = Kf(t, (e = $f(n, e)), 1)), 1)),
            (e = jp()),
            null !== t && (Zi(t, 1, e), Up(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lh(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = jp()),
    (e.pingedLanes |= e.suspendedLanes & n),
    dp === e &&
      (hp & n) === n &&
      (4 === gp || (3 === gp && (130023424 & hp) === hp && 500 > Li() - Sp)
        ? Qp(e, 0)
        : (kp |= n)),
    Up(e, t);
}
function uh(e, t) {
  0 === t &&
    (0 == (1 & e.mode)
      ? (t = 1)
      : ((t = $i), 0 == (130023424 & ($i <<= 1)) && ($i = 4194304)));
  var n = jp();
  null !== (e = fc(e, t)) && (Zi(e, t, n), Up(e, n));
}
function ch(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), uh(e, n);
}
function fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      null !== a && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Hr(314));
  }
  null !== r && r.delete(t), uh(e, n);
}
function dh(e, t) {
  return Ni(e, t);
}
function ph(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function hh(e, t, n, r) {
  return new ph(e, t, n, r);
}
function mh(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function vh(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = hh(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gh(e, t, n, r, a, i) {
  var o = 2;
  if (((r = e), 'function' == typeof e)) mh(e) && (o = 1);
  else if ('string' == typeof e) o = 5;
  else
    e: switch (e) {
      case ia:
        return bh(n.children, a, i, t);
      case oa:
        (o = 8), (a |= 8);
        break;
      case sa:
        return ((e = hh(12, n, t, 2 | a)).elementType = sa), (e.lanes = i), e;
      case fa:
        return ((e = hh(13, n, t, a)).elementType = fa), (e.lanes = i), e;
      case da:
        return ((e = hh(19, n, t, a)).elementType = da), (e.lanes = i), e;
      case ma:
        return yh(n, a, i, t);
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case la:
              o = 10;
              break e;
            case ua:
              o = 9;
              break e;
            case ca:
              o = 11;
              break e;
            case pa:
              o = 14;
              break e;
            case ha:
              (o = 16), (r = null);
              break e;
          }
        throw Error(Hr(130, null == e ? e : typeof e, ''));
    }
  return ((t = hh(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
}
function bh(e, t, n, r) {
  return ((e = hh(7, e, r, t)).lanes = n), e;
}
function yh(e, t, n, r) {
  return (
    ((e = hh(22, e, r, t)).elementType = ma),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wh(e, t, n) {
  return ((e = hh(6, e, null, t)).lanes = n), e;
}
function kh(e, t, n) {
  return (
    ((t = hh(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xh(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ji(0)),
    (this.expirationTimes = Ji(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ji(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Eh(e, t, n, r, a, i, o, s, l) {
  return (
    (e = new xh(e, t, n, s, l)),
    1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
    (i = hh(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pc(i),
    e
  );
}
function Sh(e) {
  if (!e) return uu;
  e: {
    if (Si((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Hr(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (hu(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(Hr(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if (hu(n)) return gu(e, n, t);
  }
  return t;
}
function Ch(e, t, n, r, a, i, o, s, l) {
  return (
    ((e = Eh(n, r, !0, e, 0, i, 0, s, l)).context = Sh(null)),
    (n = e.current),
    ((i = mc((r = jp()), (a = Ip(n)))).callback = null != t ? t : null),
    vc(n, i, a),
    (e.current.lanes = a),
    Zi(e, a, r),
    Up(e, r),
    e
  );
}
function Oh(e, t, n, r) {
  var a = t.current,
    i = jp(),
    o = Ip(a);
  return (
    (n = Sh(n)),
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = mc(i, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    null !== (e = vc(a, t, o)) && (Fp(e, a, o, i), gc(e, a, o)),
    o
  );
}
function _h(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Ph(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function Nh(e, t) {
  Ph(e, t), (e = e.alternate) && Ph(e, t);
}
op = function (e, t, n) {
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || fu.current) nd = !0;
    else {
      if (0 == (e.lanes & n) && 0 == (128 & t.flags))
        return (
          (nd = !1),
          (function (e, t, n) {
            switch (t.tag) {
              case 3:
                dd(t), Qu();
                break;
              case 5:
                Hc(t);
                break;
              case 1:
                hu(t.type) && bu(t);
                break;
              case 4:
                Fc(t, t.stateNode.containerInfo);
                break;
              case 10:
                var r = t.type._context,
                  a = t.memoizedProps.value;
                lu(Zu, r._currentValue), (r._currentValue = a);
                break;
              case 13:
                if (null !== (r = t.memoizedState))
                  return null !== r.dehydrated
                    ? (lu(Vc, 1 & Vc.current), (t.flags |= 128), null)
                    : 0 != (n & t.child.childLanes)
                    ? wd(e, t, n)
                    : (lu(Vc, 1 & Vc.current),
                      null !== (e = _d(e, t, n)) ? e.sibling : null);
                lu(Vc, 1 & Vc.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                  if (r) return Cd(e, t, n);
                  t.flags |= 128;
                }
                if (
                  (null !== (a = t.memoizedState) &&
                    ((a.rendering = null),
                    (a.tail = null),
                    (a.lastEffect = null)),
                  lu(Vc, Vc.current),
                  r)
                )
                  break;
                return null;
              case 22:
              case 23:
                return (t.lanes = 0), sd(e, t, n);
            }
            return _d(e, t, n);
          })(e, t, n)
        );
      nd = 0 != (131072 & e.flags);
    }
  else (nd = !1), Uu && 0 != (1048576 & t.flags) && zu(t, Pu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Od(e, t), (e = t.pendingProps);
      var a = pu(t, cu.current);
      oc(t, n), (a = of(null, t, r, e, a, n));
      var i = sf();
      return (
        (t.flags |= 1),
        'object' == typeof a &&
        null !== a &&
        'function' == typeof a.render &&
        void 0 === a.$$typeof
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            hu(r) ? ((i = !0), bu(t)) : (i = !1),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            pc(t),
            (a.updater = Ec),
            (t.stateNode = a),
            (a._reactInternals = t),
            _c(t, r, e, n),
            (t = fd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Uu && i && Ru(t), rd(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Od(e, t),
          (e = t.pendingProps),
          (r = (a = r._init)(r._payload)),
          (t.type = r),
          (a = t.tag =
            (function (e) {
              if ('function' == typeof e) return mh(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === ca) return 11;
                if (e === pa) return 14;
              }
              return 2;
            })(r)),
          (e = Ju(r, e)),
          a)
        ) {
          case 0:
            t = ud(null, t, r, e, n);
            break e;
          case 1:
            t = cd(null, t, r, e, n);
            break e;
          case 11:
            t = ad(null, t, r, e, n);
            break e;
          case 14:
            t = id(null, t, r, Ju(r.type, e), n);
            break e;
        }
        throw Error(Hr(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ud(e, t, r, (a = t.elementType === r ? a : Ju(r, a)), n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        cd(e, t, r, (a = t.elementType === r ? a : Ju(r, a)), n)
      );
    case 3:
      e: {
        if ((dd(t), null === e)) throw Error(Hr(387));
        (r = t.pendingProps),
          (a = (i = t.memoizedState).element),
          hc(e, t),
          yc(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated)) {
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            256 & t.flags)
          ) {
            t = pd(e, t, r, n, (a = $f(Error(Hr(423)), t)));
            break e;
          }
          if (r !== a) {
            t = pd(e, t, r, n, (a = $f(Error(Hr(424)), t)));
            break e;
          }
          for (
            Fu = Yl(t.stateNode.containerInfo.firstChild),
              Iu = t,
              Uu = !0,
              Hu = null,
              n = Lc(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Qu(), r === a)) {
            t = _d(e, t, n);
            break e;
          }
          rd(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hc(t),
        null === e && Yu(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = null !== e ? e.memoizedProps : null),
        (o = a.children),
        Il(r, a) ? (o = null) : null !== i && Il(r, i) && (t.flags |= 32),
        ld(e, t),
        rd(e, t, o, n),
        t.child
      );
    case 6:
      return null === e && Yu(t), null;
    case 13:
      return wd(e, t, n);
    case 4:
      return (
        Fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = Mc(t, null, r, n)) : rd(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ad(e, t, r, (a = t.elementType === r ? a : Ju(r, a)), n)
      );
    case 7:
      return rd(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return rd(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (o = a.value),
          lu(Zu, r._currentValue),
          (r._currentValue = o),
          null !== i)
        )
          if (Vs(i.value, o)) {
            if (i.children === a.children && !fu.current) {
              t = _d(e, t, n);
              break e;
            }
          } else
            for (null !== (i = t.child) && (i.return = t); null !== i; ) {
              var s = i.dependencies;
              if (null !== s) {
                o = i.child;
                for (var l = s.firstContext; null !== l; ) {
                  if (l.context === r) {
                    if (1 === i.tag) {
                      (l = mc(-1, n & -n)).tag = 2;
                      var u = i.updateQueue;
                      if (null !== u) {
                        var c = (u = u.shared).pending;
                        null === c
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      null !== (l = i.alternate) && (l.lanes |= n),
                      ic(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
              else if (18 === i.tag) {
                if (null === (o = i.return)) throw Error(Hr(341));
                (o.lanes |= n),
                  null !== (s = o.alternate) && (s.lanes |= n),
                  ic(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (null !== o) o.return = i;
              else
                for (o = i; null !== o; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (null !== (i = o.sibling)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        rd(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        oc(t, n),
        (r = r((a = sc(a)))),
        (t.flags |= 1),
        rd(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (a = Ju((r = t.type), t.pendingProps)),
        id(e, t, r, (a = Ju(r.type, a)), n)
      );
    case 15:
      return od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Ju(r, a)),
        Od(e, t),
        (t.tag = 1),
        hu(r) ? ((e = !0), bu(t)) : (e = !1),
        oc(t, n),
        Cc(t, r, a),
        _c(t, r, a, n),
        fd(null, t, r, !0, e, n)
      );
    case 19:
      return Cd(e, t, n);
    case 22:
      return sd(e, t, n);
  }
  throw Error(Hr(156, t.tag));
};
var Th =
  'function' == typeof reportError
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dh(e) {
  this._internalRoot = e;
}
function Mh(e) {
  this._internalRoot = e;
}
function Lh(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Ah(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function zh() {}
function Rh(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if ('function' == typeof a) {
      var s = a;
      a = function () {
        var e = _h(o);
        s.call(e);
      };
    }
    Oh(t, o, e, a);
  } else
    o = (function (e, t, n, r, a) {
      if (a) {
        if ('function' == typeof r) {
          var i = r;
          r = function () {
            var e = _h(o);
            i.call(e);
          };
        }
        var o = Ch(t, r, e, 0, null, !1, 0, '', zh);
        return (
          (e._reactRootContainer = o),
          (e[ql] = o.current),
          Sl(8 === e.nodeType ? e.parentNode : e),
          Gp(),
          o
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if ('function' == typeof r) {
        var s = r;
        r = function () {
          var e = _h(l);
          s.call(e);
        };
      }
      var l = Eh(e, 0, !1, null, 0, !1, 0, '', zh);
      return (
        (e._reactRootContainer = l),
        (e[ql] = l.current),
        Sl(8 === e.nodeType ? e.parentNode : e),
        Gp(function () {
          Oh(t, l, n, r);
        }),
        l
      );
    })(n, t, e, a, r);
  return _h(o);
}
(Mh.prototype.render = Dh.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(Hr(409));
    Oh(e, t, null, null);
  }),
  (Mh.prototype.unmount = Dh.prototype.unmount =
    function () {
      var e = this._internalRoot;
      if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gp(function () {
          Oh(null, e, null, null);
        }),
          (t[ql] = null);
      }
    }),
  (Mh.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < vo.length && 0 !== t && t < vo[n].priority; n++);
      vo.splice(n, 0, e), 0 === n && wo(e);
    }
  }),
  (ro = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gi(t.pendingLanes);
          0 !== n &&
            (eo(t, 1 | n),
            Up(t, Li()),
            0 == (6 & fp) && ((Cp = Li() + 500), Su()));
        }
        break;
      case 13:
        Gp(function () {
          var t = fc(e, 1);
          if (null !== t) {
            var n = jp();
            Fp(t, e, 1, n);
          }
        }),
          Nh(e, 1);
    }
  }),
  (ao = function (e) {
    if (13 === e.tag) {
      var t = fc(e, 134217728);
      if (null !== t) Fp(t, e, 134217728, jp());
      Nh(e, 134217728);
    }
  }),
  (io = function (e) {
    if (13 === e.tag) {
      var t = Ip(e),
        n = fc(e, t);
      if (null !== n) Fp(n, e, t, jp());
      Nh(e, t);
    }
  }),
  (oo = function () {
    return to;
  }),
  (so = function (e, t) {
    var n = to;
    try {
      return (to = e), t();
    } finally {
      to = n;
    }
  }),
  (ai = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((Aa(e, n), (t = n.name), 'radio' === n.type && null != t)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = ru(r);
              if (!a) throw Error(Hr(90));
              Na(r), Aa(r, a);
            }
          }
        }
        break;
      case 'textarea':
        Ha(e, n);
        break;
      case 'select':
        null != (t = n.value) && Ia(e, !!n.multiple, t, !1);
    }
  }),
  (ci = $p),
  (fi = Gp);
var jh = { usingClientEntryPoint: !1, Events: [tu, nu, ru, li, ui, $p] },
  Ih = {
    findFiberByHostInstance: eu,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Fh = {
    bundleType: Ih.bundleType,
    version: Ih.version,
    rendererPackageName: Ih.rendererPackageName,
    rendererConfig: Ih.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: na.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = _i(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      Ih.findFiberByHostInstance ||
      function () {
        return null;
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Uh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Uh.isDisabled && Uh.supportsFiber)
    try {
      (Ui = Uh.inject(Fh)), (Hi = Uh);
    } catch ($a) {}
}
(Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jh),
  (Rr.createPortal = function (e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Lh(t)) throw Error(Hr(200));
    return (function (e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: aa,
        key: null == r ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    })(e, t, null, n);
  }),
  (Rr.createRoot = function (e, t) {
    if (!Lh(e)) throw Error(Hr(299));
    var n = !1,
      r = '',
      a = Th;
    return (
      null != t &&
        (!0 === t.unstable_strictMode && (n = !0),
        void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
        void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
      (t = Eh(e, 1, !1, null, 0, n, 0, r, a)),
      (e[ql] = t.current),
      Sl(8 === e.nodeType ? e.parentNode : e),
      new Dh(t)
    );
  }),
  (Rr.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(Hr(188));
      throw ((e = Object.keys(e).join(',')), Error(Hr(268, e)));
    }
    return (e = null === (e = _i(t)) ? null : e.stateNode);
  }),
  (Rr.flushSync = function (e) {
    return Gp(e);
  }),
  (Rr.hydrate = function (e, t, n) {
    if (!Ah(t)) throw Error(Hr(200));
    return Rh(null, e, t, !0, n);
  }),
  (Rr.hydrateRoot = function (e, t, n) {
    if (!Lh(e)) throw Error(Hr(405));
    var r = (null != n && n.hydratedSources) || null,
      a = !1,
      i = '',
      o = Th;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (a = !0),
        void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
      (t = Ch(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
      (e[ql] = t.current),
      Sl(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (a = (a = (n = r[e])._getVersion)(n._source)),
          null == t.mutableSourceEagerHydrationData
            ? (t.mutableSourceEagerHydrationData = [n, a])
            : t.mutableSourceEagerHydrationData.push(n, a);
    return new Mh(t);
  }),
  (Rr.render = function (e, t, n) {
    if (!Ah(t)) throw Error(Hr(200));
    return Rh(null, e, t, !1, n);
  }),
  (Rr.unmountComponentAtNode = function (e) {
    if (!Ah(e)) throw Error(Hr(40));
    return (
      !!e._reactRootContainer &&
      (Gp(function () {
        Rh(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ql] = null);
        });
      }),
      !0)
    );
  }),
  (Rr.unstable_batchedUpdates = $p),
  (Rr.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ah(n)) throw Error(Hr(200));
    if (null == e || void 0 === e._reactInternals) throw Error(Hr(38));
    return Rh(e, t, n, !1, r);
  }),
  (Rr.version = '18.2.0-next-9e3b772b8-20220608'),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  })(),
  (zr.exports = Rr);
var Hh = zr.exports,
  Bh = !1,
  Vh = e.createContext(null),
  Wh = 'unmounted',
  Yh = 'exited',
  $h = 'entering',
  Gh = 'entered',
  Xh = 'exiting',
  Qh = (function (t) {
    var n, r;
    function a(e, n) {
      var r;
      r = t.call(this, e, n) || this;
      var a,
        i = n && !n.isMounting ? e.enter : e.appear;
      return (
        (r.appearStatus = null),
        e.in
          ? i
            ? ((a = Yh), (r.appearStatus = $h))
            : (a = Gh)
          : (a = e.unmountOnExit || e.mountOnEnter ? Wh : Yh),
        (r.state = { status: a }),
        (r.nextCallback = null),
        r
      );
    }
    (r = t),
      ((n = a).prototype = Object.create(r.prototype)),
      (n.prototype.constructor = n),
      mr(n, r),
      (a.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === Wh ? { status: Yh } : null;
      });
    var i = a.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== $h && n !== Gh && (t = $h)
            : (n !== $h && n !== Gh) || (t = Xh);
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
          r = this.props.timeout;
        return (
          (e = t = n = r),
          null != r &&
            'number' != typeof r &&
            ((e = r.exit),
            (t = r.enter),
            (n = void 0 !== r.appear ? r.appear : t)),
          { exit: e, enter: t, appear: n }
        );
      }),
      (i.updateStatus = function (e, t) {
        if ((void 0 === e && (e = !1), null !== t))
          if ((this.cancelNextCallback(), t === $h)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : Hh.findDOMNode(this);
              n &&
                (function (e) {
                  e.scrollTop;
                })(n);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Yh &&
            this.setState({ status: Wh });
      }),
      (i.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          a = this.props.nodeRef ? [r] : [Hh.findDOMNode(this), r],
          i = a[0],
          o = a[1],
          s = this.getTimeouts(),
          l = r ? s.appear : s.enter;
        (!e && !n) || Bh
          ? this.safeSetState({ status: Gh }, function () {
              t.props.onEntered(i);
            })
          : (this.props.onEnter(i, o),
            this.safeSetState({ status: $h }, function () {
              t.props.onEntering(i, o),
                t.onTransitionEnd(l, function () {
                  t.safeSetState({ status: Gh }, function () {
                    t.props.onEntered(i, o);
                  });
                });
            }));
      }),
      (i.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : Hh.findDOMNode(this);
        t && !Bh
          ? (this.props.onExit(r),
            this.safeSetState({ status: Xh }, function () {
              e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: Yh }, function () {
                    e.props.onExited(r);
                  });
                });
            }))
          : this.safeSetState({ status: Yh }, function () {
              e.props.onExited(r);
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
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
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
            : Hh.findDOMNode(this),
          r = null == e && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var a = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              i = a[0],
              o = a[1];
            this.props.addEndListener(i, o);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }),
      (i.render = function () {
        var t = this.state.status;
        if (t === Wh) return null;
        var n = this.props,
          r = n.children;
        n.in,
          n.mountOnEnter,
          n.unmountOnExit,
          n.appear,
          n.enter,
          n.exit,
          n.timeout,
          n.addEndListener,
          n.onEnter,
          n.onEntering,
          n.onEntered,
          n.onExit,
          n.onExiting,
          n.onExited,
          n.nodeRef;
        var a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(n, [
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
        return e.createElement(
          Vh.Provider,
          { value: null },
          'function' == typeof r
            ? r(t, a)
            : e.cloneElement(e.Children.only(r), a),
        );
      }),
      a
    );
  })(e.Component);
function qh() {}
(Qh.contextType = Vh),
  (Qh.propTypes = {}),
  (Qh.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: qh,
    onEntering: qh,
    onEntered: qh,
    onExit: qh,
    onExiting: qh,
    onExited: qh,
  }),
  (Qh.UNMOUNTED = Wh),
  (Qh.EXITED = Yh),
  (Qh.ENTERING = $h),
  (Qh.ENTERED = Gh),
  (Qh.EXITING = Xh);
var Kh = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  Jh = !1,
  Zh = !1;
try {
  var em = {
    get passive() {
      return (Jh = !0);
    },
    get once() {
      return (Zh = Jh = !0);
    },
  };
  Kh &&
    (window.addEventListener('test', em, em),
    window.removeEventListener('test', em, !0));
} catch (ay) {}
function tm(e, t, n, r) {
  return (
    (function (e, t, n, r) {
      if (r && 'boolean' != typeof r && !Zh) {
        var a = r.once,
          i = r.capture,
          o = n;
        !Zh &&
          a &&
          ((o =
            n.__once ||
            function e(r) {
              this.removeEventListener(t, e, i), n.call(this, r);
            }),
          (n.__once = o)),
          e.addEventListener(t, o, Jh ? r : i);
      }
      e.addEventListener(t, n, r);
    })(e, t, n, r),
    function () {
      !(function (e, t, n, r) {
        var a = r && 'boolean' != typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      })(e, t, n, r);
    }
  );
}
function nm(e, t, n) {
  void 0 === n && (n = 5);
  var r = !1,
    a = setTimeout(function () {
      r ||
        (function (e, t, n, r) {
          if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
            var a = document.createEvent('HTMLEvents');
            a.initEvent(t, n, r), e.dispatchEvent(a);
          }
        })(e, 'transitionend', !0);
    }, t + n),
    i = tm(
      e,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(a), i();
  };
}
function rm(e, t, n, r) {
  var a, i;
  null == n &&
    ((a = Ar(e, 'transitionDuration') || ''),
    (i = -1 === a.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(a) * i || 0));
  var o = nm(e, n, r),
    s = tm(e, 'transitionend', t);
  return function () {
    o(), s();
  };
}
function am(e, t) {
  const n = Ar(e, t) || '',
    r = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * r;
}
function im(e, t) {
  const n = am(e, 'transitionDuration'),
    r = am(e, 'transitionDelay'),
    a = rm(
      e,
      n => {
        n.target === e && (a(), t(n));
      },
      n + r,
    );
}
var om = function (e) {
  return e && 'function' != typeof e
    ? function (t) {
        e.current = t;
      }
    : e;
};
function sm(e, t) {
  return r.useMemo(
    function () {
      return (function (e, t) {
        var n = om(e),
          r = om(t);
        return function (e) {
          n && n(e), r && r(e);
        };
      })(e, t);
    },
    [e, t],
  );
}
function lm(e) {
  return e && 'setState' in e ? Hh.findDOMNode(e) : null != e ? e : null;
}
var um = e.forwardRef(
  (
    {
      onEnter: t,
      onEntering: n,
      onEntered: a,
      onExit: i,
      onExiting: o,
      onExited: s,
      addEndListener: l,
      children: u,
      childRef: c,
      ...f
    },
    d,
  ) => {
    const p = r.useRef(null),
      h = sm(p, c),
      m = e => {
        h(lm(e));
      },
      v = e => t => {
        e && p.current && e(p.current, t);
      },
      g = r.useCallback(v(t), [t]),
      b = r.useCallback(v(n), [n]),
      y = r.useCallback(v(a), [a]),
      w = r.useCallback(v(i), [i]),
      k = r.useCallback(v(o), [o]),
      x = r.useCallback(v(s), [s]),
      E = r.useCallback(v(l), [l]);
    return vr.exports.jsx(Qh, {
      ref: d,
      ...f,
      onEnter: g,
      onEntered: y,
      onEntering: b,
      onExit: w,
      onExited: x,
      onExiting: k,
      addEndListener: E,
      nodeRef: p,
      children:
        'function' == typeof u
          ? (e, t) => u(e, { ...t, ref: m })
          : e.cloneElement(u, { ref: m }),
    });
  },
);
function cm(e) {
  var t = (function (e) {
    var t = r.useRef(e);
    return (
      r.useEffect(
        function () {
          t.current = e;
        },
        [e],
      ),
      t
    );
  })(e);
  return r.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function fm() {
  return r.useState(null);
}
function dm() {
  var e = r.useRef(!0),
    t = r.useRef(function () {
      return e.current;
    });
  return (
    r.useEffect(function () {
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
var pm =
    'undefined' != typeof global &&
    global.navigator &&
    'ReactNative' === global.navigator.product,
  hm = 'undefined' != typeof document || pm ? r.useLayoutEffect : r.useEffect;
const mm = ['as', 'disabled'];
function vm({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: a,
  role: i,
  onClick: o,
  tabIndex: s = 0,
  type: l,
}) {
  e || (e = null != n || null != r || null != a ? 'a' : 'button');
  const u = { tagName: e };
  if ('button' === e) return [{ type: l || 'button', disabled: t }, u];
  const c = r => {
    (t ||
      ('a' === e &&
        (function (e) {
          return !e || '#' === e.trim();
        })(n))) &&
      r.preventDefault(),
      t ? r.stopPropagation() : null == o || o(r);
  };
  return (
    'a' === e && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: null != i ? i : 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: 'a' === e ? r : void 0,
        'aria-disabled': t || void 0,
        rel: 'a' === e ? a : void 0,
        onClick: c,
        onKeyDown: e => {
          ' ' === e.key && (e.preventDefault(), c(e));
        },
      },
      u,
    ]
  );
}
const gm = r.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, mm);
  const [i, { tagName: o }] = vm(Object.assign({ tagName: n, disabled: r }, a));
  return vr.exports.jsx(o, Object.assign({}, a, i, { ref: t }));
});
gm.displayName = 'Button';
const bm = { [$h]: 'show', [Gh]: 'show' },
  ym = r.forwardRef(
    ({ className: e, children: t, transitionClasses: n = {}, ...a }, i) => {
      const o = r.useCallback(
        (e, t) => {
          !(function (e) {
            e.offsetHeight;
          })(e),
            null == a.onEnter || a.onEnter(e, t);
        },
        [a],
      );
      return vr.exports.jsx(um, {
        ref: i,
        addEndListener: im,
        ...a,
        onEnter: o,
        childRef: t.ref,
        children: (a, i) =>
          r.cloneElement(t, {
            ...i,
            className: hr('fade', e, t.props.className, bm[a], n[a]),
          }),
      });
    },
  );
(ym.defaultProps = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
}),
  (ym.displayName = 'Fade');
var wm = ym,
  km = /-(.)/g;
const xm = e => {
  return (
    e[0].toUpperCase() +
    ((t = e),
    t.replace(km, function (e, t) {
      return t.toUpperCase();
    })).slice(1)
  );
  var t;
};
function Em(e, { displayName: t = xm(e), Component: n, defaultProps: a } = {}) {
  const i = r.forwardRef(
    ({ className: t, bsPrefix: r, as: a = n || 'div', ...i }, o) => {
      const s = Or(r, e);
      return vr.exports.jsx(a, { ref: o, className: hr(t, s), ...i });
    },
  );
  return (i.defaultProps = a), (i.displayName = t), i;
}
const Sm = r.forwardRef(
  (
    { as: e, bsPrefix: t, variant: n, size: r, active: a, className: i, ...o },
    s,
  ) => {
    const l = Or(t, 'btn'),
      [u, { tagName: c }] = vm({ tagName: e, ...o }),
      f = c;
    return vr.exports.jsx(f, {
      ...u,
      ...o,
      ref: s,
      className: hr(
        i,
        l,
        a && 'active',
        n && `${l}-${n}`,
        r && `${l}-${r}`,
        o.href && o.disabled && 'disabled',
      ),
    });
  },
);
(Sm.displayName = 'Button'),
  (Sm.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
var Cm = Sm;
const Om = r.forwardRef(
  (
    { bsPrefix: e, size: t, vertical: n, className: r, as: a = 'div', ...i },
    o,
  ) => {
    const s = Or(e, 'btn-group');
    let l = s;
    return (
      n && (l = `${s}-vertical`),
      vr.exports.jsx(a, { ...i, ref: o, className: hr(r, l, t && `${s}-${t}`) })
    );
  },
);
(Om.displayName = 'ButtonGroup'),
  (Om.defaultProps = { vertical: !1, role: 'group' });
var _m = Om;
const Pm = r.forwardRef(({ bsPrefix: e, className: t, ...n }, r) => {
  const a = Or(e, 'btn-toolbar');
  return vr.exports.jsx('div', { ...n, ref: r, className: hr(t, a) });
});
(Pm.displayName = 'ButtonToolbar'), (Pm.defaultProps = { role: 'toolbar' });
var Nm = Pm;
function Tm(e) {
  var t,
    n,
    a = ((t = e), ((n = r.useRef(t)).current = t), n);
  r.useEffect(function () {
    return function () {
      return a.current();
    };
  }, []);
}
var Dm = Math.pow(2, 31) - 1;
function Mm(e, t, n) {
  var r = n - Date.now();
  e.current =
    r <= Dm
      ? setTimeout(t, r)
      : setTimeout(function () {
          return Mm(e, t, n);
        }, Dm);
}
function Lm() {
  var e = dm(),
    t = r.useRef();
  return (
    Tm(function () {
      return clearTimeout(t.current);
    }),
    r.useMemo(function () {
      var n = function () {
        return clearTimeout(t.current);
      };
      return {
        set: function (r, a) {
          void 0 === a && (a = 0),
            e() &&
              (n(),
              a <= Dm
                ? (t.current = setTimeout(r, a))
                : Mm(t, r, Date.now() + a));
        },
        clear: n,
      };
    }, [])
  );
}
var Am = Object.prototype.hasOwnProperty;
function zm(e, t, n) {
  for (n of e.keys()) if (Rm(n, t)) return n;
}
function Rm(e, t) {
  var n, r, a;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Rm(e[r], t[r]); );
      return -1 === r;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r) && 'object' == typeof a && !(a = zm(t, a))) return !1;
        if (!t.has(a)) return !1;
      }
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r[0]) && 'object' == typeof a && !(a = zm(t, a))) return !1;
        if (!Rm(r[1], t.get(a))) return !1;
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
        if (Am.call(e, n) && ++r && !Am.call(t, n)) return !1;
        if (!(n in t) || !Rm(e[n], t[n])) return !1;
      }
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
var jm = 'top',
  Im = 'bottom',
  Fm = 'right',
  Um = 'left',
  Hm = 'auto',
  Bm = [jm, Im, Fm, Um],
  Vm = 'start',
  Wm = 'end',
  Ym = 'clippingParents',
  $m = 'viewport',
  Gm = 'popper',
  Xm = 'reference',
  Qm = Bm.reduce(function (e, t) {
    return e.concat([t + '-' + Vm, t + '-' + Wm]);
  }, []),
  qm = [].concat(Bm, [Hm]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Vm, t + '-' + Wm]);
  }, []),
  Km = [
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
function Jm(e) {
  return e.split('-')[0];
}
function Zm(e) {
  if (null == e) return window;
  if ('[object Window]' !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ev(e) {
  return e instanceof Zm(e).Element || e instanceof Element;
}
function tv(e) {
  return e instanceof Zm(e).HTMLElement || e instanceof HTMLElement;
}
function nv(e) {
  return (
    'undefined' != typeof ShadowRoot &&
    (e instanceof Zm(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
var rv = Math.max,
  av = Math.min,
  iv = Math.round;
function ov() {
  var e = navigator.userAgentData;
  return null != e && e.brands
    ? e.brands
        .map(function (e) {
          return e.brand + '/' + e.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function sv() {
  return !/^((?!chrome|android).)*safari/i.test(ov());
}
function lv(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var r = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    tv(e) &&
    ((a = (e.offsetWidth > 0 && iv(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && iv(r.height) / e.offsetHeight) || 1));
  var o = (ev(e) ? Zm(e) : window).visualViewport,
    s = !sv() && n,
    l = (r.left + (s && o ? o.offsetLeft : 0)) / a,
    u = (r.top + (s && o ? o.offsetTop : 0)) / i,
    c = r.width / a,
    f = r.height / i;
  return {
    width: c,
    height: f,
    top: u,
    right: l + c,
    bottom: u + f,
    left: l,
    x: l,
    y: u,
  };
}
function uv(e) {
  var t = lv(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function cv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && nv(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fv(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function dv(e) {
  return Zm(e).getComputedStyle(e);
}
function pv(e) {
  return ['table', 'td', 'th'].indexOf(fv(e)) >= 0;
}
function hv(e) {
  return ((ev(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function mv(e) {
  return 'html' === fv(e)
    ? e
    : e.assignedSlot || e.parentNode || (nv(e) ? e.host : null) || hv(e);
}
function vv(e) {
  return tv(e) && 'fixed' !== dv(e).position ? e.offsetParent : null;
}
function gv(e) {
  for (var t = Zm(e), n = vv(e); n && pv(n) && 'static' === dv(n).position; )
    n = vv(n);
  return n &&
    ('html' === fv(n) || ('body' === fv(n) && 'static' === dv(n).position))
    ? t
    : n ||
        (function (e) {
          var t = /firefox/i.test(ov());
          if (/Trident/i.test(ov()) && tv(e) && 'fixed' === dv(e).position)
            return null;
          var n = mv(e);
          for (
            nv(n) && (n = n.host);
            tv(n) && ['html', 'body'].indexOf(fv(n)) < 0;

          ) {
            var r = dv(n);
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
function bv(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function yv(e, t, n) {
  return rv(e, av(t, n));
}
function wv(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function kv(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
var xv = function (e, t) {
  return wv(
    'number' !=
      typeof (e =
        'function' == typeof e
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e)
      ? e
      : kv(e, Bm),
  );
};
var Ev = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t,
      n = e.state,
      r = e.name,
      a = e.options,
      i = n.elements.arrow,
      o = n.modifiersData.popperOffsets,
      s = Jm(n.placement),
      l = bv(s),
      u = [Um, Fm].indexOf(s) >= 0 ? 'height' : 'width';
    if (i && o) {
      var c = xv(a.padding, n),
        f = uv(i),
        d = 'y' === l ? jm : Um,
        p = 'y' === l ? Im : Fm,
        h =
          n.rects.reference[u] +
          n.rects.reference[l] -
          o[l] -
          n.rects.popper[u],
        m = o[l] - n.rects.reference[l],
        v = gv(i),
        g = v ? ('y' === l ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
        b = h / 2 - m / 2,
        y = c[d],
        w = g - f[u] - c[p],
        k = g / 2 - f[u] / 2 + b,
        x = yv(y, k, w),
        E = l;
      n.modifiersData[r] = (((t = {})[E] = x), (t.centerOffset = x - k), t);
    }
  },
  effect: function (e) {
    var t = e.state,
      n = e.options.element,
      r = void 0 === n ? '[data-popper-arrow]' : n;
    null != r &&
      ('string' != typeof r || (r = t.elements.popper.querySelector(r))) &&
      cv(t.elements.popper, r) &&
      (t.elements.arrow = r);
  },
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Sv(e) {
  return e.split('-')[1];
}
var Cv = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Ov(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    d = o.x,
    p = void 0 === d ? 0 : d,
    h = o.y,
    m = void 0 === h ? 0 : h,
    v = 'function' == typeof c ? c({ x: p, y: m }) : { x: p, y: m };
  (p = v.x), (m = v.y);
  var g = o.hasOwnProperty('x'),
    b = o.hasOwnProperty('y'),
    y = Um,
    w = jm,
    k = window;
  if (u) {
    var x = gv(n),
      E = 'clientHeight',
      S = 'clientWidth';
    if (
      (x === Zm(n) &&
        'static' !== dv((x = hv(n))).position &&
        'absolute' === s &&
        ((E = 'scrollHeight'), (S = 'scrollWidth')),
      a === jm || ((a === Um || a === Fm) && i === Wm))
    )
      (w = Im),
        (m -=
          (f && x === k && k.visualViewport ? k.visualViewport.height : x[E]) -
          r.height),
        (m *= l ? 1 : -1);
    if (a === Um || ((a === jm || a === Im) && i === Wm))
      (y = Fm),
        (p -=
          (f && x === k && k.visualViewport ? k.visualViewport.width : x[S]) -
          r.width),
        (p *= l ? 1 : -1);
  }
  var C,
    O = Object.assign({ position: s }, u && Cv),
    _ =
      !0 === c
        ? (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1;
            return { x: iv(t * r) / r || 0, y: iv(n * r) / r || 0 };
          })({ x: p, y: m })
        : { x: p, y: m };
  return (
    (p = _.x),
    (m = _.y),
    l
      ? Object.assign(
          {},
          O,
          (((C = {})[w] = b ? '0' : ''),
          (C[y] = g ? '0' : ''),
          (C.transform =
            (k.devicePixelRatio || 1) <= 1
              ? 'translate(' + p + 'px, ' + m + 'px)'
              : 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
          C),
        )
      : Object.assign(
          {},
          O,
          (((t = {})[w] = b ? m + 'px' : ''),
          (t[y] = g ? p + 'px' : ''),
          (t.transform = ''),
          t),
        )
  );
}
var _v = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        a = void 0 === r || r,
        i = n.adaptive,
        o = void 0 === i || i,
        s = n.roundOffsets,
        l = void 0 === s || s,
        u = {
          placement: Jm(t.placement),
          variation: Sv(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: a,
          isFixed: 'fixed' === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          Ov(
            Object.assign({}, u, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: o,
              roundOffsets: l,
            }),
          ),
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            Ov(
              Object.assign({}, u, {
                offsets: t.modifiersData.arrow,
                position: 'absolute',
                adaptive: !1,
                roundOffsets: l,
              }),
            ),
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          'data-popper-placement': t.placement,
        }));
    },
    data: {},
  },
  Pv = { passive: !0 };
var Nv = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        n = e.instance,
        r = e.options,
        a = r.scroll,
        i = void 0 === a || a,
        o = r.resize,
        s = void 0 === o || o,
        l = Zm(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        i &&
          u.forEach(function (e) {
            e.addEventListener('scroll', n.update, Pv);
          }),
        s && l.addEventListener('resize', n.update, Pv),
        function () {
          i &&
            u.forEach(function (e) {
              e.removeEventListener('scroll', n.update, Pv);
            }),
            s && l.removeEventListener('resize', n.update, Pv);
        }
      );
    },
    data: {},
  },
  Tv = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Dv(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Tv[e];
  });
}
var Mv = { start: 'end', end: 'start' };
function Lv(e) {
  return e.replace(/start|end/g, function (e) {
    return Mv[e];
  });
}
function Av(e) {
  var t = Zm(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function zv(e) {
  return lv(hv(e)).left + Av(e).scrollLeft;
}
function Rv(e) {
  var t = dv(e),
    n = t.overflow,
    r = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function jv(e) {
  return ['html', 'body', '#document'].indexOf(fv(e)) >= 0
    ? e.ownerDocument.body
    : tv(e) && Rv(e)
    ? e
    : jv(mv(e));
}
function Iv(e, t) {
  var n;
  void 0 === t && (t = []);
  var r = jv(e),
    a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
    i = Zm(r),
    o = a ? [i].concat(i.visualViewport || [], Rv(r) ? r : []) : r,
    s = t.concat(o);
  return a ? s : s.concat(Iv(mv(o)));
}
function Fv(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Uv(e, t, n) {
  return t === $m
    ? Fv(
        (function (e, t) {
          var n = Zm(e),
            r = hv(e),
            a = n.visualViewport,
            i = r.clientWidth,
            o = r.clientHeight,
            s = 0,
            l = 0;
          if (a) {
            (i = a.width), (o = a.height);
            var u = sv();
            (u || (!u && 'fixed' === t)) &&
              ((s = a.offsetLeft), (l = a.offsetTop));
          }
          return { width: i, height: o, x: s + zv(e), y: l };
        })(e, n),
      )
    : ev(t)
    ? (function (e, t) {
        var n = lv(e, !1, 'fixed' === t);
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
    : Fv(
        (function (e) {
          var t,
            n = hv(e),
            r = Av(e),
            a = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = rv(
              n.scrollWidth,
              n.clientWidth,
              a ? a.scrollWidth : 0,
              a ? a.clientWidth : 0,
            ),
            o = rv(
              n.scrollHeight,
              n.clientHeight,
              a ? a.scrollHeight : 0,
              a ? a.clientHeight : 0,
            ),
            s = -r.scrollLeft + zv(e),
            l = -r.scrollTop;
          return (
            'rtl' === dv(a || n).direction &&
              (s += rv(n.clientWidth, a ? a.clientWidth : 0) - i),
            { width: i, height: o, x: s, y: l }
          );
        })(hv(e)),
      );
}
function Hv(e, t, n, r) {
  var a =
      'clippingParents' === t
        ? (function (e) {
            var t = Iv(mv(e)),
              n =
                ['absolute', 'fixed'].indexOf(dv(e).position) >= 0 && tv(e)
                  ? gv(e)
                  : e;
            return ev(n)
              ? t.filter(function (e) {
                  return ev(e) && cv(e, n) && 'body' !== fv(e);
                })
              : [];
          })(e)
        : [].concat(t),
    i = [].concat(a, [n]),
    o = i[0],
    s = i.reduce(function (t, n) {
      var a = Uv(e, n, r);
      return (
        (t.top = rv(a.top, t.top)),
        (t.right = av(a.right, t.right)),
        (t.bottom = av(a.bottom, t.bottom)),
        (t.left = rv(a.left, t.left)),
        t
      );
    }, Uv(e, o, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Bv(e) {
  var t,
    n = e.reference,
    r = e.element,
    a = e.placement,
    i = a ? Jm(a) : null,
    o = a ? Sv(a) : null,
    s = n.x + n.width / 2 - r.width / 2,
    l = n.y + n.height / 2 - r.height / 2;
  switch (i) {
    case jm:
      t = { x: s, y: n.y - r.height };
      break;
    case Im:
      t = { x: s, y: n.y + n.height };
      break;
    case Fm:
      t = { x: n.x + n.width, y: l };
      break;
    case Um:
      t = { x: n.x - r.width, y: l };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var u = i ? bv(i) : null;
  if (null != u) {
    var c = 'y' === u ? 'height' : 'width';
    switch (o) {
      case Vm:
        t[u] = t[u] - (n[c] / 2 - r[c] / 2);
        break;
      case Wm:
        t[u] = t[u] + (n[c] / 2 - r[c] / 2);
    }
  }
  return t;
}
function Vv(e, t) {
  void 0 === t && (t = {});
  var n = t,
    r = n.placement,
    a = void 0 === r ? e.placement : r,
    i = n.strategy,
    o = void 0 === i ? e.strategy : i,
    s = n.boundary,
    l = void 0 === s ? Ym : s,
    u = n.rootBoundary,
    c = void 0 === u ? $m : u,
    f = n.elementContext,
    d = void 0 === f ? Gm : f,
    p = n.altBoundary,
    h = void 0 !== p && p,
    m = n.padding,
    v = void 0 === m ? 0 : m,
    g = wv('number' != typeof v ? v : kv(v, Bm)),
    b = d === Gm ? Xm : Gm,
    y = e.rects.popper,
    w = e.elements[h ? b : d],
    k = Hv(ev(w) ? w : w.contextElement || hv(e.elements.popper), l, c, o),
    x = lv(e.elements.reference),
    E = Bv({ reference: x, element: y, strategy: 'absolute', placement: a }),
    S = Fv(Object.assign({}, y, E)),
    C = d === Gm ? S : x,
    O = {
      top: k.top - C.top + g.top,
      bottom: C.bottom - k.bottom + g.bottom,
      left: k.left - C.left + g.left,
      right: C.right - k.right + g.right,
    },
    _ = e.modifiersData.offset;
  if (d === Gm && _) {
    var P = _[a];
    Object.keys(O).forEach(function (e) {
      var t = [Fm, Im].indexOf(e) >= 0 ? 1 : -1,
        n = [jm, Im].indexOf(e) >= 0 ? 'y' : 'x';
      O[e] += P[n] * t;
    });
  }
  return O;
}
var Wv = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var a = n.mainAxis,
          i = void 0 === a || a,
          o = n.altAxis,
          s = void 0 === o || o,
          l = n.fallbackPlacements,
          u = n.padding,
          c = n.boundary,
          f = n.rootBoundary,
          d = n.altBoundary,
          p = n.flipVariations,
          h = void 0 === p || p,
          m = n.allowedAutoPlacements,
          v = t.options.placement,
          g = Jm(v),
          b =
            l ||
            (g === v || !h
              ? [Dv(v)]
              : (function (e) {
                  if (Jm(e) === Hm) return [];
                  var t = Dv(e);
                  return [Lv(e), t, Lv(t)];
                })(v)),
          y = [v].concat(b).reduce(function (e, n) {
            return e.concat(
              Jm(n) === Hm
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                      r = n.placement,
                      a = n.boundary,
                      i = n.rootBoundary,
                      o = n.padding,
                      s = n.flipVariations,
                      l = n.allowedAutoPlacements,
                      u = void 0 === l ? qm : l,
                      c = Sv(r),
                      f = c
                        ? s
                          ? Qm
                          : Qm.filter(function (e) {
                              return Sv(e) === c;
                            })
                        : Bm,
                      d = f.filter(function (e) {
                        return u.indexOf(e) >= 0;
                      });
                    0 === d.length && (d = f);
                    var p = d.reduce(function (t, n) {
                      return (
                        (t[n] = Vv(e, {
                          placement: n,
                          boundary: a,
                          rootBoundary: i,
                          padding: o,
                        })[Jm(n)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: c,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: h,
                    allowedAutoPlacements: m,
                  })
                : n,
            );
          }, []),
          w = t.rects.reference,
          k = t.rects.popper,
          x = new Map(),
          E = !0,
          S = y[0],
          C = 0;
        C < y.length;
        C++
      ) {
        var O = y[C],
          _ = Jm(O),
          P = Sv(O) === Vm,
          N = [jm, Im].indexOf(_) >= 0,
          T = N ? 'width' : 'height',
          D = Vv(t, {
            placement: O,
            boundary: c,
            rootBoundary: f,
            altBoundary: d,
            padding: u,
          }),
          M = N ? (P ? Fm : Um) : P ? Im : jm;
        w[T] > k[T] && (M = Dv(M));
        var L = Dv(M),
          A = [];
        if (
          (i && A.push(D[_] <= 0),
          s && A.push(D[M] <= 0, D[L] <= 0),
          A.every(function (e) {
            return e;
          }))
        ) {
          (S = O), (E = !1);
          break;
        }
        x.set(O, A);
      }
      if (E)
        for (
          var z = function (e) {
              var t = y.find(function (t) {
                var n = x.get(t);
                if (n)
                  return n.slice(0, e).every(function (e) {
                    return e;
                  });
              });
              if (t) return (S = t), 'break';
            },
            R = h ? 3 : 1;
          R > 0;
          R--
        ) {
          if ('break' === z(R)) break;
        }
      t.placement !== S &&
        ((t.modifiersData[r]._skip = !0), (t.placement = S), (t.reset = !0));
    }
  },
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function Yv(e, t, n) {
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
function $v(e) {
  return [jm, Fm, Im, Um].some(function (t) {
    return e[t] >= 0;
  });
}
var Gv = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: function (e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      a = t.rects.popper,
      i = t.modifiersData.preventOverflow,
      o = Vv(t, { elementContext: 'reference' }),
      s = Vv(t, { altBoundary: !0 }),
      l = Yv(o, r),
      u = Yv(s, a, i),
      c = $v(l),
      f = $v(u);
    (t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        'data-popper-reference-hidden': c,
        'data-popper-escaped': f,
      }));
  },
};
var Xv = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      a = n.offset,
      i = void 0 === a ? [0, 0] : a,
      o = qm.reduce(function (e, n) {
        return (
          (e[n] = (function (e, t, n) {
            var r = Jm(e),
              a = [Um, jm].indexOf(r) >= 0 ? -1 : 1,
              i =
                'function' == typeof n
                  ? n(Object.assign({}, t, { placement: e }))
                  : n,
              o = i[0],
              s = i[1];
            return (
              (o = o || 0),
              (s = (s || 0) * a),
              [Um, Fm].indexOf(r) >= 0 ? { x: s, y: o } : { x: o, y: s }
            );
          })(n, t.rects, i)),
          e
        );
      }, {}),
      s = o[t.placement],
      l = s.x,
      u = s.y;
    null != t.modifiersData.popperOffsets &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = o);
  },
};
var Qv = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: function (e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = Bv({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: 'absolute',
      placement: t.placement,
    });
  },
  data: {},
};
var qv = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      a = n.mainAxis,
      i = void 0 === a || a,
      o = n.altAxis,
      s = void 0 !== o && o,
      l = n.boundary,
      u = n.rootBoundary,
      c = n.altBoundary,
      f = n.padding,
      d = n.tether,
      p = void 0 === d || d,
      h = n.tetherOffset,
      m = void 0 === h ? 0 : h,
      v = Vv(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
      g = Jm(t.placement),
      b = Sv(t.placement),
      y = !b,
      w = bv(g),
      k = 'x' === w ? 'y' : 'x',
      x = t.modifiersData.popperOffsets,
      E = t.rects.reference,
      S = t.rects.popper,
      C =
        'function' == typeof m
          ? m(Object.assign({}, t.rects, { placement: t.placement }))
          : m,
      O =
        'number' == typeof C
          ? { mainAxis: C, altAxis: C }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
      _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      P = { x: 0, y: 0 };
    if (x) {
      if (i) {
        var N,
          T = 'y' === w ? jm : Um,
          D = 'y' === w ? Im : Fm,
          M = 'y' === w ? 'height' : 'width',
          L = x[w],
          A = L + v[T],
          z = L - v[D],
          R = p ? -S[M] / 2 : 0,
          j = b === Vm ? E[M] : S[M],
          I = b === Vm ? -S[M] : -E[M],
          F = t.elements.arrow,
          U = p && F ? uv(F) : { width: 0, height: 0 },
          H = t.modifiersData['arrow#persistent']
            ? t.modifiersData['arrow#persistent'].padding
            : { top: 0, right: 0, bottom: 0, left: 0 },
          B = H[T],
          V = H[D],
          W = yv(0, E[M], U[M]),
          Y = y ? E[M] / 2 - R - W - B - O.mainAxis : j - W - B - O.mainAxis,
          $ = y ? -E[M] / 2 + R + W + V + O.mainAxis : I + W + V + O.mainAxis,
          G = t.elements.arrow && gv(t.elements.arrow),
          X = G ? ('y' === w ? G.clientTop || 0 : G.clientLeft || 0) : 0,
          Q = null != (N = null == _ ? void 0 : _[w]) ? N : 0,
          q = L + $ - Q,
          K = yv(p ? av(A, L + Y - Q - X) : A, L, p ? rv(z, q) : z);
        (x[w] = K), (P[w] = K - L);
      }
      if (s) {
        var J,
          Z = 'x' === w ? jm : Um,
          ee = 'x' === w ? Im : Fm,
          te = x[k],
          ne = 'y' === k ? 'height' : 'width',
          re = te + v[Z],
          ae = te - v[ee],
          ie = -1 !== [jm, Um].indexOf(g),
          oe = null != (J = null == _ ? void 0 : _[k]) ? J : 0,
          se = ie ? re : te - E[ne] - S[ne] - oe + O.altAxis,
          le = ie ? te + E[ne] + S[ne] - oe - O.altAxis : ae,
          ue =
            p && ie
              ? (fe = yv(se, te, (ce = le))) > ce
                ? ce
                : fe
              : yv(p ? se : re, te, p ? le : ae);
        (x[k] = ue), (P[k] = ue - te);
      }
      var ce, fe;
      t.modifiersData[r] = P;
    }
  },
  requiresIfExists: ['offset'],
};
function Kv(e, t, n) {
  void 0 === n && (n = !1);
  var r,
    a,
    i = tv(t),
    o =
      tv(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = iv(t.width) / e.offsetWidth || 1,
          r = iv(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      })(t),
    s = hv(t),
    l = lv(e, o, n),
    u = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      (('body' !== fv(t) || Rv(s)) &&
        (u =
          (r = t) !== Zm(r) && tv(r)
            ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
            : Av(r)),
      tv(t)
        ? (((c = lv(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
        : s && (c.x = zv(s))),
    {
      x: l.left + u.scrollLeft - c.x,
      y: l.top + u.scrollTop - c.y,
      width: l.width,
      height: l.height,
    }
  );
}
function Jv(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  function a(e) {
    n.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!n.has(e)) {
            var r = t.get(e);
            r && a(r);
          }
        }),
      r.push(e);
  }
  return (
    e.forEach(function (e) {
      t.set(e.name, e);
    }),
    e.forEach(function (e) {
      n.has(e.name) || a(e);
    }),
    r
  );
}
var Zv = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function eg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (e) {
    return !(e && 'function' == typeof e.getBoundingClientRect);
  });
}
const tg = (function (e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      a = t.defaultOptions,
      i = void 0 === a ? Zv : a;
    return function (e, t, n) {
      void 0 === n && (n = i);
      var a,
        o,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Zv, i),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        l = [],
        u = !1,
        c = {
          state: s,
          setOptions: function (n) {
            var a = 'function' == typeof n ? n(s.options) : n;
            f(),
              (s.options = Object.assign({}, i, s.options, a)),
              (s.scrollParents = {
                reference: ev(e)
                  ? Iv(e)
                  : e.contextElement
                  ? Iv(e.contextElement)
                  : [],
                popper: Iv(t),
              });
            var o,
              u,
              d = (function (e) {
                var t = Jv(e);
                return Km.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    }),
                  );
                }, []);
              })(
                ((o = [].concat(r, s.options.modifiers)),
                (u = o.reduce(function (e, t) {
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
                Object.keys(u).map(function (e) {
                  return u[e];
                })),
              );
            return (
              (s.orderedModifiers = d.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  a = e.effect;
                if ('function' == typeof a) {
                  var i = a({ state: s, name: t, instance: c, options: r }),
                    o = function () {};
                  l.push(i || o);
                }
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!u) {
              var e = s.elements,
                t = e.reference,
                n = e.popper;
              if (eg(t, n)) {
                (s.rects = {
                  reference: Kv(t, gv(n), 'fixed' === s.options.strategy),
                  popper: uv(n),
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
                    var a = s.orderedModifiers[r],
                      i = a.fn,
                      o = a.options,
                      l = void 0 === o ? {} : o,
                      f = a.name;
                    'function' == typeof i &&
                      (s =
                        i({ state: s, options: l, name: f, instance: c }) || s);
                  } else (s.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((a = function () {
              return new Promise(function (e) {
                c.forceUpdate(), e(s);
              });
            }),
            function () {
              return (
                o ||
                  (o = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (o = void 0), e(a());
                    });
                  })),
                o
              );
            }),
          destroy: function () {
            f(), (u = !0);
          },
        };
      if (!eg(e, t)) return c;
      function f() {
        l.forEach(function (e) {
          return e();
        }),
          (l = []);
      }
      return (
        c.setOptions(n).then(function (e) {
          !u && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        c
      );
    };
  })({ defaultModifiers: [Gv, Qv, _v, Nv, Xv, Wv, qv, Ev] }),
  ng = ['enabled', 'placement', 'strategy', 'modifiers'];
const rg = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  ag = {
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
        a = null == (t = n.getAttribute('role')) ? void 0 : t.toLowerCase();
      if (n.id && 'tooltip' === a && 'setAttribute' in r) {
        const e = r.getAttribute('aria-describedby');
        if (e && -1 !== e.split(',').indexOf(n.id)) return;
        r.setAttribute('aria-describedby', e ? `${e},${n.id}` : n.id);
      }
    },
  },
  ig = [];
function og(e, t, n = {}) {
  let {
      enabled: a = !0,
      placement: i = 'bottom',
      strategy: o = 'absolute',
      modifiers: s = ig,
    } = n,
    l = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(n, ng);
  const u = r.useRef(s),
    c = r.useRef(),
    f = r.useCallback(() => {
      var e;
      null == (e = c.current) || e.update();
    }, []),
    d = r.useCallback(() => {
      var e;
      null == (e = c.current) || e.forceUpdate();
    }, []),
    [p, h] =
      ((m = r.useState({
        placement: i,
        update: f,
        forceUpdate: d,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })),
      (v = dm()),
      [
        m[0],
        r.useCallback(
          function (e) {
            if (v()) return m[1](e);
          },
          [v, m[1]],
        ),
      ]);
  var m, v;
  const g = r.useMemo(
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
              update: f,
              forceUpdate: d,
              placement: e.placement,
            });
        },
      }),
      [f, d, h],
    ),
    b = r.useMemo(() => (Rm(u.current, s) || (u.current = s), u.current), [s]);
  return (
    r.useEffect(() => {
      c.current &&
        a &&
        c.current.setOptions({
          placement: i,
          strategy: o,
          modifiers: [...b, g, rg],
        });
    }, [o, i, g, a, b]),
    r.useEffect(() => {
      if (a && null != e && null != t)
        return (
          (c.current = tg(
            e,
            t,
            Object.assign({}, l, {
              placement: i,
              strategy: o,
              modifiers: [...b, ag, g],
            }),
          )),
          () => {
            null != c.current &&
              (c.current.destroy(),
              (c.current = void 0),
              h(e =>
                Object.assign({}, e, {
                  attributes: {},
                  styles: { popper: {} },
                }),
              ));
          }
        );
    }, [a, e, t]),
    p
  );
}
function sg(e, t) {
  return e.contains
    ? e.contains(t)
    : e.compareDocumentPosition
    ? e === t || !!(16 & e.compareDocumentPosition(t))
    : void 0;
}
const lg = () => {};
const ug = e => e && ('current' in e ? e.current : e),
  cg = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' };
function fg(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map(t => ((e[t].name = t), e[t]));
}
function dg({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: a,
  fixed: i,
  containerPadding: o,
  arrowElement: s,
  popperConfig: l = {},
}) {
  var u, c, f, d, p;
  const h = (function (e) {
    const t = {};
    return Array.isArray(e)
      ? (null == e ||
          e.forEach(e => {
            t[e.name] = e;
          }),
        t)
      : e || t;
  })(l.modifiers);
  return Object.assign({}, l, {
    placement: n,
    enabled: e,
    strategy: i ? 'fixed' : l.strategy,
    modifiers: fg(
      Object.assign({}, h, {
        eventListeners: {
          enabled: t,
          options: null == (u = h.eventListeners) ? void 0 : u.options,
        },
        preventOverflow: Object.assign({}, h.preventOverflow, {
          options: o
            ? Object.assign(
                { padding: o },
                null == (c = h.preventOverflow) ? void 0 : c.options,
              )
            : null == (f = h.preventOverflow)
            ? void 0
            : f.options,
        }),
        offset: {
          options: Object.assign(
            { offset: a },
            null == (d = h.offset) ? void 0 : d.options,
          ),
        },
        arrow: Object.assign({}, h.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            null == (p = h.arrow) ? void 0 : p.options,
            { element: s },
          ),
        }),
        flip: Object.assign({ enabled: !!r }, h.flip),
      }),
    ),
  });
}
const pg = r.createContext(Kh ? window : void 0);
pg.Provider;
const hg = (e, t) =>
  Kh
    ? null == e
      ? (t || Pr()).body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function mg(e, t) {
  const n = r.useContext(pg),
    [a, i] = r.useState(() => hg(e, null == n ? void 0 : n.document));
  if (!a) {
    const t = hg(e);
    t && i(t);
  }
  return (
    r.useEffect(() => {
      t && a && t(a);
    }, [t, a]),
    r.useEffect(() => {
      const t = hg(e);
      t !== a && i(t);
    }, [e, a]),
    a
  );
}
function vg({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: a,
  unmountOnExit: i,
}) {
  const o = r.useRef(null),
    s = r.useRef(t),
    l = cm(n);
  r.useEffect(() => {
    t ? (s.current = !0) : l(o.current);
  }, [t, l]);
  const u = sm(o, e.ref),
    c = r.cloneElement(e, { ref: u });
  return t ? c : i || (!s.current && a) ? null : c;
}
function gg({ children: e, in: t, onExited: n, onEntered: a, transition: i }) {
  const [o, s] = r.useState(!t);
  t && o && s(!1);
  const l = (function ({ in: e, onTransition: t }) {
      const n = r.useRef(null),
        a = r.useRef(!0),
        i = cm(t);
      return (
        hm(() => {
          if (!n.current) return;
          let t = !1;
          return (
            i({
              in: e,
              element: n.current,
              initial: a.current,
              isStale: () => t,
            }),
            () => {
              t = !0;
            }
          );
        }, [e, i]),
        hm(
          () => (
            (a.current = !1),
            () => {
              a.current = !0;
            }
          ),
          [],
        ),
        n
      );
    })({
      in: !!t,
      onTransition: e => {
        Promise.resolve(i(e)).then(
          () => {
            e.isStale() ||
              (e.in
                ? null == a || a(e.element, e.initial)
                : (s(!0), null == n || n(e.element)));
          },
          t => {
            throw (e.in || s(!0), t);
          },
        );
      },
    }),
    u = sm(l, e.ref);
  return o && !t ? null : r.cloneElement(e, { ref: u });
}
const bg = 27,
  yg = () => {};
function wg(e, t, { disabled: n, clickTrigger: a } = {}) {
  const i = t || yg;
  !(function (e, t = lg, { disabled: n, clickTrigger: a = 'click' } = {}) {
    const i = r.useRef(!1),
      o = r.useRef(!1),
      s = r.useCallback(
        t => {
          const n = ug(e);
          var r;
          (i.current =
            !n ||
            !!((r = t).metaKey || r.altKey || r.ctrlKey || r.shiftKey) ||
            !(function (e) {
              return 0 === e.button;
            })(t) ||
            !!sg(n, t.target) ||
            o.current),
            (o.current = !1);
        },
        [e],
      ),
      l = cm(t => {
        const n = ug(e);
        n && sg(n, t.target) && (o.current = !0);
      }),
      u = cm(e => {
        i.current || t(e);
      });
    r.useEffect(() => {
      if (n || null == e) return;
      const t = Pr(ug(e));
      let r = (t.defaultView || window).event,
        i = null;
      cg[a] && (i = tm(t, cg[a], l, !0));
      const o = tm(t, a, s, !0),
        c = tm(t, a, e => {
          e !== r ? u(e) : (r = void 0);
        });
      let f = [];
      return (
        'ontouchstart' in t.documentElement &&
          (f = [].slice.call(t.body.children).map(e => tm(e, 'mousemove', lg))),
        () => {
          null == i || i(), o(), c(), f.forEach(e => e());
        }
      );
    }, [e, n, a, s, l, u]);
  })(e, i, { disabled: n, clickTrigger: a });
  const o = cm(e => {
    e.keyCode === bg && i(e);
  });
  r.useEffect(() => {
    if (n || null == e) return;
    const t = Pr(ug(e));
    let r = (t.defaultView || window).event;
    const a = tm(t, 'keyup', e => {
      e !== r ? o(e) : (r = void 0);
    });
    return () => {
      a();
    };
  }, [e, n, o]);
}
const kg = r.forwardRef((e, t) => {
  const {
      flip: n,
      offset: a,
      placement: i,
      containerPadding: o,
      popperConfig: s = {},
      transition: l,
      runTransition: u,
    } = e,
    [c, f] = fm(),
    [d, p] = fm(),
    h = sm(f, t),
    m = mg(e.container),
    v = mg(e.target),
    [g, b] = r.useState(!e.show),
    y = og(
      v,
      c,
      dg({
        placement: i,
        enableEvents: !!e.show,
        containerPadding: o || 5,
        flip: n,
        offset: a,
        arrowElement: d,
        popperConfig: s,
      }),
    );
  e.show && g && b(!1);
  const w = e.show || !g;
  if (
    (wg(c, e.onHide, {
      disabled: !e.rootClose || e.rootCloseDisabled,
      clickTrigger: e.rootCloseEvent,
    }),
    !w)
  )
    return null;
  const {
    onExit: k,
    onExiting: x,
    onEnter: E,
    onEntering: S,
    onEntered: C,
  } = e;
  let O = e.children(
    Object.assign({}, y.attributes.popper, { style: y.styles.popper, ref: h }),
    {
      popper: y,
      placement: i,
      show: !!e.show,
      arrowProps: Object.assign({}, y.attributes.arrow, {
        style: y.styles.arrow,
        ref: p,
      }),
    },
  );
  return (
    (O = (function (e, t, n) {
      return e
        ? vr.exports.jsx(e, Object.assign({}, n))
        : t
        ? vr.exports.jsx(gg, Object.assign({}, n, { transition: t }))
        : vr.exports.jsx(vg, Object.assign({}, n));
    })(l, u, {
      in: !!e.show,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: O,
      onExit: k,
      onExiting: x,
      onExited: (...t) => {
        b(!0), e.onExited && e.onExited(...t);
      },
      onEnter: E,
      onEntering: S,
      onEntered: C,
    })),
    m ? Hh.createPortal(O, m) : null
  );
});
kg.displayName = 'Overlay';
var xg = Em('popover-header'),
  Eg = Em('popover-body');
function Sg(e, t) {
  let n = e;
  return (
    'left' === e
      ? (n = t ? 'end' : 'start')
      : 'right' === e && (n = t ? 'start' : 'end'),
    n
  );
}
function Cg(e = 'absolute') {
  return {
    position: e,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none',
  };
}
const Og = r.forwardRef(
  (
    {
      bsPrefix: e,
      placement: t,
      className: n,
      style: r,
      children: a,
      body: i,
      arrowProps: o,
      hasDoneInitialMeasure: s,
      popper: l,
      show: u,
      ...c
    },
    f,
  ) => {
    const d = Or(e, 'popover'),
      p = _r(),
      [h] = (null == t ? void 0 : t.split('-')) || [],
      m = Sg(h, p);
    let v = r;
    return (
      u && !s && (v = { ...r, ...Cg(null == l ? void 0 : l.strategy) }),
      vr.exports.jsxs('div', {
        ref: f,
        role: 'tooltip',
        style: v,
        'x-placement': h,
        className: hr(n, d, h && `bs-popover-${m}`),
        ...c,
        children: [
          vr.exports.jsx('div', { className: 'popover-arrow', ...o }),
          i ? vr.exports.jsx(Eg, { children: a }) : a,
        ],
      })
    );
  },
);
Og.defaultProps = { placement: 'right' };
var _g = Object.assign(Og, { Header: xg, Body: Eg, POPPER_OFFSET: [0, 8] });
const Pg = { transition: wm, rootClose: !1, show: !1, placement: 'top' };
const Ng = r.forwardRef(
  ({ children: e, transition: t, popperConfig: n = {}, ...a }, i) => {
    const o = r.useRef({}),
      [s, l] = r.useState(null),
      [u, c] = (function (e) {
        const t = r.useRef(null),
          n = Or(void 0, 'popover'),
          a = r.useMemo(
            () => ({
              name: 'offset',
              options: {
                offset: () => {
                  return t.current &&
                    ((r = t.current),
                    (a = n),
                    r.classList
                      ? a && r.classList.contains(a)
                      : -1 !==
                        (
                          ' ' +
                          (r.className.baseVal || r.className) +
                          ' '
                        ).indexOf(' ' + a + ' '))
                    ? e || _g.POPPER_OFFSET
                    : e || [0, 0];
                  var r, a;
                },
              },
            }),
            [e, n],
          );
        return [t, [a]];
      })(a.offset),
      f = sm(i, u),
      d = !0 === t ? wm : t || void 0,
      p = cm(e => {
        l(e), null == n || null == n.onFirstUpdate || n.onFirstUpdate(e);
      });
    return (
      hm(() => {
        s && (null == o.current.scheduleUpdate || o.current.scheduleUpdate());
      }, [s]),
      r.useEffect(() => {
        a.show || l(null);
      }, [a.show]),
      vr.exports.jsx(kg, {
        ...a,
        ref: f,
        popperConfig: {
          ...n,
          modifiers: c.concat(n.modifiers || []),
          onFirstUpdate: p,
        },
        transition: d,
        children: (a, { arrowProps: i, popper: l, show: u }) => {
          var c, f;
          !(function (e, t) {
            const { ref: n } = e,
              { ref: r } = t;
            (e.ref = n.__wrapped || (n.__wrapped = e => n(lm(e)))),
              (t.ref = r.__wrapped || (r.__wrapped = e => r(lm(e))));
          })(a, i);
          const d = null == l ? void 0 : l.placement,
            p = Object.assign(o.current, {
              state: null == l ? void 0 : l.state,
              scheduleUpdate: null == l ? void 0 : l.update,
              placement: d,
              outOfBoundaries:
                (null == l ||
                null == (c = l.state) ||
                null == (f = c.modifiersData.hide)
                  ? void 0
                  : f.isReferenceHidden) || !1,
              strategy: n.strategy,
            }),
            h = !!s;
          return 'function' == typeof e
            ? e({
                ...a,
                placement: d,
                show: u,
                ...(!t && u && { className: 'show' }),
                popper: p,
                arrowProps: i,
                hasDoneInitialMeasure: h,
              })
            : r.cloneElement(e, {
                ...a,
                placement: d,
                arrowProps: i,
                popper: p,
                hasDoneInitialMeasure: h,
                className: hr(e.props.className, !t && u && 'show'),
                style: { ...e.props.style, ...a.style },
              });
        },
      })
    );
  },
);
(Ng.displayName = 'Overlay'), (Ng.defaultProps = Pg);
var Tg = Ng;
function Dg(e, t, n) {
  const [r] = t,
    a = r.currentTarget,
    i = r.relatedTarget || r.nativeEvent[n];
  (i && i === a) || sg(a, i) || e(...t);
}
function Mg({
  trigger: e,
  overlay: t,
  children: n,
  popperConfig: a = {},
  show: i,
  defaultShow: o = !1,
  onToggle: s,
  delay: l,
  placement: u,
  flip: c = u && -1 !== u.indexOf('auto'),
  ...f
}) {
  const d = r.useRef(null),
    p = sm(d, n.ref),
    h = Lm(),
    m = r.useRef(''),
    [v, g] =
      ((b = i),
      (y = o),
      (w = s),
      (k = r.useRef(void 0 !== b)),
      (x = r.useState(y)),
      (E = x[0]),
      (S = x[1]),
      (C = void 0 !== b),
      (O = k.current),
      (k.current = C),
      !C && O && E !== y && S(y),
      [
        C ? b : E,
        r.useCallback(
          function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            w && w.apply(void 0, [e].concat(n)), S(e);
          },
          [w],
        ),
      ]);
  var b, y, w, k, x, E, S, C, O;
  const _ = (function (e) {
      return e && 'object' == typeof e ? e : { show: e, hide: e };
    })(l),
    {
      onFocus: P,
      onBlur: N,
      onClick: T,
    } = 'function' != typeof n ? r.Children.only(n).props : {},
    D = r.useCallback(() => {
      h.clear(),
        (m.current = 'show'),
        _.show
          ? h.set(() => {
              'show' === m.current && g(!0);
            }, _.show)
          : g(!0);
    }, [_.show, g, h]),
    M = r.useCallback(() => {
      h.clear(),
        (m.current = 'hide'),
        _.hide
          ? h.set(() => {
              'hide' === m.current && g(!1);
            }, _.hide)
          : g(!1);
    }, [_.hide, g, h]),
    L = r.useCallback(
      (...e) => {
        D(), null == P || P(...e);
      },
      [D, P],
    ),
    A = r.useCallback(
      (...e) => {
        M(), null == N || N(...e);
      },
      [M, N],
    ),
    z = r.useCallback(
      (...e) => {
        g(!v), null == T || T(...e);
      },
      [T, g, v],
    ),
    R = r.useCallback(
      (...e) => {
        Dg(D, e, 'fromElement');
      },
      [D],
    ),
    j = r.useCallback(
      (...e) => {
        Dg(M, e, 'toElement');
      },
      [M],
    ),
    I = null == e ? [] : [].concat(e),
    F = {
      ref: e => {
        p(lm(e));
      },
    };
  return (
    -1 !== I.indexOf('click') && (F.onClick = z),
    -1 !== I.indexOf('focus') && ((F.onFocus = L), (F.onBlur = A)),
    -1 !== I.indexOf('hover') && ((F.onMouseOver = R), (F.onMouseOut = j)),
    vr.exports.jsxs(vr.exports.Fragment, {
      children: [
        'function' == typeof n ? n(F) : r.cloneElement(n, F),
        vr.exports.jsx(Tg, {
          ...f,
          show: v,
          onHide: M,
          flip: c,
          placement: u,
          popperConfig: a,
          target: d.current,
          children: t,
        }),
      ],
    })
  );
}
Mg.defaultProps = { defaultShow: !1, trigger: ['hover', 'focus'] };
const Lg = r.forwardRef(
  (
    {
      bsPrefix: e,
      placement: t,
      className: n,
      style: r,
      children: a,
      arrowProps: i,
      hasDoneInitialMeasure: o,
      popper: s,
      show: l,
      ...u
    },
    c,
  ) => {
    e = Or(e, 'tooltip');
    const f = _r(),
      [d] = (null == t ? void 0 : t.split('-')) || [],
      p = Sg(d, f);
    let h = r;
    return (
      l && !o && (h = { ...r, ...Cg(null == s ? void 0 : s.strategy) }),
      vr.exports.jsxs('div', {
        ref: c,
        style: h,
        role: 'tooltip',
        'x-placement': d,
        className: hr(n, e, `bs-tooltip-${p}`),
        ...u,
        children: [
          vr.exports.jsx('div', { className: 'tooltip-arrow', ...i }),
          vr.exports.jsx('div', { className: `${e}-inner`, children: a }),
        ],
      })
    );
  },
);
(Lg.defaultProps = { placement: 'right' }), (Lg.displayName = 'Tooltip');
var Ag = Lg;
class zg {
  constructor(e, t, n, r, a) {
    S(this, 'tileId'),
      S(this, 'name'),
      S(this, 'asset'),
      S(this, 'thumbnailAsset'),
      S(this, 'price'),
      (this.tileId = e),
      (this.name = t),
      (this.asset = n),
      (this.thumbnailAsset = r),
      (this.price = a);
  }
}
class Rg {}
S(Rg, 'towers', [
  new zg(0, 'Common', 'tower1.png', 'tower1_thumbnail.png', 25),
  new zg(1, 'Ranger', 'tower2.png', 'tower2_thumbnail.png', 50),
  new zg(2, 'Aerial', 'tower3.png', 'tower3_thumbnail.png', 100),
]);
class jg {}
S(jg, 'TOWER_SELECTED', 'TOWER_SELECTED'),
  S(jg, 'ERASER_SELECTED', 'ERASER_SELECTED'),
  S(jg, 'MOVE_SELECTED', 'MOVE_SELECTED'),
  S(jg, 'COINS_CHANGED', 'COINS_CHANGED'),
  S(jg, 'LOAD_MAP', 'LOAD_MAP'),
  S(jg, 'MAP_DATA_CHANGED', 'MAP_DATA_CHANGED'),
  S(jg, 'CLEAR_MAP', 'CLEAR_MAP'),
  S(jg, 'SAVE_MAP', 'SAVE_MAP');
const Ig = new t.Events.EventEmitter();
var Fg;
null === (Fg = window.HTMLSlotElement) ||
  void 0 === Fg ||
  Fg.prototype.assignedElements;
var Ug = {
  setEventEmitter(e, t) {
    return (
      void 0 === t && (t = Phaser.Events.EventEmitter),
      (this._privateEE = !0 === e || void 0 === e),
      (this._eventEmitter = this._privateEE ? new t() : e),
      this
    );
  },
  destroyEventEmitter() {
    return (
      this._eventEmitter && this._privateEE && this._eventEmitter.shutdown(),
      this
    );
  },
  getEventEmitter() {
    return this._eventEmitter;
  },
  on: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.on.apply(this._eventEmitter, arguments),
      this
    );
  },
  once: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.once.apply(this._eventEmitter, arguments),
      this
    );
  },
  off: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.off.apply(this._eventEmitter, arguments),
      this
    );
  },
  emit: function (e) {
    return (
      this._eventEmitter &&
        e &&
        this._eventEmitter.emit.apply(this._eventEmitter, arguments),
      this
    );
  },
  addListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeAllListeners: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeAllListeners.apply(
          this._eventEmitter,
          arguments,
        ),
      this
    );
  },
  listenerCount: function () {
    return this._eventEmitter
      ? this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments)
      : 0;
  },
  listeners: function () {
    return this._eventEmitter
      ? this._eventEmitter.listeners.apply(this._eventEmitter, arguments)
      : [];
  },
  eventNames: function () {
    return this._eventEmitter
      ? this._eventEmitter.eventNames.apply(this._eventEmitter, arguments)
      : [];
  },
};
const Hg = Phaser.Scene;
var Bg = function (e) {
    return e instanceof Hg;
  },
  Vg = function (e) {
    return null == e || 'object' != typeof e
      ? null
      : Bg(e)
      ? e
      : e.scene && Bg(e.scene)
      ? e.scene
      : e.parent && e.parent.scene && Bg(e.parent.scene)
      ? e.parent.scene
      : null;
  };
const Wg = Phaser.Game;
var Yg = function (e) {
    return e instanceof Wg;
  },
  $g = function (e) {
    return null == e || 'object' != typeof e
      ? null
      : Yg(e)
      ? e
      : Yg(e.game)
      ? e.game
      : Bg(e)
      ? e.sys.game
      : Bg(e.scene)
      ? e.scene.sys.game
      : void 0;
  };
const Gg = Phaser.Utils.Objects.GetValue;
class Xg {
  constructor(e, t) {
    this.setParent(e),
      (this.isShutdown = !1),
      this.setEventEmitter(Gg(t, 'eventEmitter', !0)),
      this.parent &&
        (this.parent === this.scene
          ? this.scene.sys.events.once('shutdown', this.onEnvDestroy, this)
          : this.parent === this.game
          ? this.game.events.once('shutdown', this.onEnvDestroy, this)
          : this.parent.once &&
            this.parent.once('destroy', this.onParentDestroy, this));
  }
  shutdown(e) {
    this.isShutdown ||
      (this.parent &&
        (this.parent === this.scene
          ? this.scene.sys.events.off('shutdown', this.onEnvDestroy, this)
          : this.parent === this.game
          ? this.game.events.off('shutdown', this.onEnvDestroy, this)
          : this.parent.once &&
            this.parent.off('destroy', this.onParentDestroy, this)),
      this.destroyEventEmitter(),
      (this.parent = void 0),
      (this.scene = void 0),
      (this.game = void 0),
      (this.isShutdown = !0));
  }
  destroy(e) {
    this.shutdown(e);
  }
  onEnvDestroy() {
    this.destroy(!0);
  }
  onParentDestroy(e, t) {
    this.destroy(t);
  }
  setParent(e) {
    return (this.parent = e), (this.scene = Vg(e)), (this.game = $g(e)), this;
  }
}
Object.assign(Xg.prototype, Ug);
const Qg = Phaser.Utils.Objects.GetValue;
class qg extends Xg {
  constructor(e, t) {
    super(e, t),
      (this._isRunning = !1),
      (this.isPaused = !1),
      (this.tickingState = !1),
      this.setTickingMode(Qg(t, 'tickingMode', 1));
  }
  boot() {
    2 !== this.tickingMode || this.tickingState || this.startTicking();
  }
  shutdown(e) {
    this.isShutdown ||
      (this.stop(), this.tickingState && this.stopTicking(), super.shutdown(e));
  }
  setTickingMode(e) {
    'string' == typeof e && (e = Kg[e]), (this.tickingMode = e);
  }
  startTicking() {
    this.tickingState = !0;
  }
  stopTicking() {
    this.tickingState = !1;
  }
  get isRunning() {
    return this._isRunning;
  }
  set isRunning(e) {
    this._isRunning !== e &&
      ((this._isRunning = e),
      1 === this.tickingMode &&
        e != this.tickingState &&
        (e ? this.startTicking() : this.stopTicking()));
  }
  start() {
    return (this.isPaused = !1), (this.isRunning = !0), this;
  }
  pause() {
    return (
      this.isRunning && ((this.isPaused = !0), (this.isRunning = !1)), this
    );
  }
  resume() {
    return this.isPaused && (this.isRunning = !0), this;
  }
  stop() {
    return (this.isPaused = !1), (this.isRunning = !1), this;
  }
  complete() {
    (this.isPaused = !1),
      (this.isRunning = !1),
      this.emit('complete', this.parent, this);
  }
}
const Kg = { no: 0, lazy: 1, always: 2 },
  Jg = Phaser.Utils.Objects.GetValue;
class Zg extends qg {
  constructor(e, t) {
    var n = Vg(e);
    n === e && (e = void 0),
      super(n, t),
      (this.gameObject = e),
      e && e.setInteractive(Jg(t, 'inputConfig', void 0)),
      (this._enable = void 0),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(Jg(e, 'enable', !0)),
      this.setDetectBounds(),
      void 0 === this.gameObject
        ? this.setDetectBounds(Jg(e, 'bounds', void 0))
        : this.setDetectBounds(),
      (this.tracerState = eb),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      (this.isTouchingAnyObject = !1),
      this
    );
  }
  boot() {
    super.boot(),
      this.gameObject
        ? this.gameObject.on('pointerdown', this.onPointerDown, this)
        : this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('gameout', this.dragCancel, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.sys.events.once('shutdown', this.destroy, this);
  }
  shutdown(e) {
    this.scene &&
      (this.gameObject ||
        this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('gameout', this.dragCancel, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.sys.events.off('shutdown', this.destroy, this),
      (this.gameObject = void 0),
      (this.bounds = void 0),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      super.shutdown(e));
  }
  get enable() {
    return this._enable;
  }
  set enable(e) {
    if (this._enable !== e)
      return e || this.dragCancel(), (this._enable = e), this;
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  setDetectBounds(e) {
    return (this.bounds = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(e, t) {
    this.enable &&
      void 0 === this.pointer &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      this.pointer !== e &&
      ((this.pointer = e),
      (this.lastPointer = e),
      (this.movedState = !1),
      (this.tracerState = tb),
      void 0 === this.gameObject && (this.isTouchingAnyObject = t.length > 0),
      this.onDragStart());
  }
  onPointerUp(e) {
    this.enable &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      this.pointer === e &&
      ((this.pointer = void 0),
      (this.movedState = !1),
      (this.tracerState = eb),
      this.onDragEnd());
  }
  onPointerMove(e) {
    if (this.enable && e.isDown) {
      var t = !this.bounds || this.bounds.contains(e.x, e.y),
        n = this.pointer === e;
      (!n && t) ||
        (n && !t
          ? this.onPointerUp(e)
          : (this.movedState ||
              (this.movedState = e.x !== e.downX || e.y !== e.downY),
            this.movedState && this.onDrag()));
    }
  }
  dragCancel() {
    return (
      this.tracerState === tb && this.onDragEnd(),
      (this.pointer = void 0),
      (this.tracerState = eb),
      this
    );
  }
  onDragStart() {
    this.emit('dragstart', this);
  }
  onDragEnd() {
    this.emit('dragend', this);
  }
  onDrag() {
    this.emit('drag', this);
  }
  preUpdate(e, t) {}
  postUpdate(e, t) {}
  startTicking() {
    super.startTicking(),
      this.scene.sys.events.on('preupdate', this.preUpdate, this),
      this.scene.sys.events.on('postupdate', this.postUpdate, this);
  }
  stopTicking() {
    super.stopTicking(),
      this.scene &&
        (this.scene.sys.events.off('preupdate', this.preUpdate, this),
        this.scene.sys.events.off('postupdate', this.postUpdate, this));
  }
  setRecongizedStateObject(e) {
    return (this.recongizedState = e), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(e) {
    this.recongizedState.state = e;
  }
  cancel() {
    return (this.state = nb), this;
  }
}
const eb = 0,
  tb = 1,
  nb = 'IDLE';
var rb = function (e, t, n) {
  if (e && 'number' != typeof e) {
    if (e.hasOwnProperty(t)) return e[t];
    if (-1 !== t.indexOf('.')) {
      for (var r = t.split('.'), a = e, i = n, o = 0; o < r.length; o++) {
        if (!a.hasOwnProperty(r[o])) {
          i = n;
          break;
        }
        (i = a[r[o]]), (a = a[r[o]]);
      }
      return i;
    }
    return n;
  }
  return n;
};
const ab = ['next', 'exit', 'enter'];
class ib {
  constructor(e) {
    var t = rb(e, 'states', void 0);
    t && this.addStates(t);
    var n = rb(e, 'extend', void 0);
    if (n)
      for (var r in n)
        (this.hasOwnProperty(r) && void 0 !== this[r]) || (this[r] = n[r]);
    var a = rb(e, 'eventEmitter', void 0),
      i = rb(e, 'EventEmitterClass', void 0);
    this.setEventEmitter(a, i), (this._stateLock = !1), this.resetFromJSON(e);
  }
  shutdown() {
    this.destroyEventEmitter();
  }
  destroy() {
    this.shutdown();
  }
  resetFromJSON(e) {
    this.setEnable(rb(e, 'enable', !0)), this.start(rb(e, 'start', void 0));
    var t = rb(e, 'init', void 0);
    return t && t.call(this), this;
  }
  toJSON() {
    return {
      curState: this.state,
      prevState: this.prevState,
      enable: this.enable,
      start: this._start,
    };
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  set state(e) {
    if (this.enable && !this._stateLock && this._state !== e) {
      if (
        ((this._prevState = this._state),
        (this._state = e),
        (this._stateLock = !0),
        this.emit('statechange', this),
        null != this._prevState)
      ) {
        var t = 'exit_' + this._prevState,
          n = this[t];
        n && n.call(this), this.emit(t, this);
      }
      if (((this._stateLock = !1), null != this._state)) {
        var r = 'enter_' + this._state,
          a = this[r];
        a && a.call(this), this.emit(r, this);
      }
    }
  }
  get state() {
    return this._state;
  }
  get prevState() {
    return this._prevState;
  }
  start(e) {
    return (
      (this._start = e), (this._prevState = void 0), (this._state = e), this
    );
  }
  goto(e) {
    return null != e && (this.state = e), this;
  }
  next() {
    var e,
      t = this['next_' + this.state];
    return (
      t && (e = 'string' == typeof t ? t : t.call(this)), this.goto(e), this
    );
  }
  get stateProperties() {
    return ab;
  }
  addState(e, t) {
    'string' != typeof e && (e = (t = e).name);
    for (var n = this.stateProperties, r = 0, a = n.length; r < a; r++) {
      var i = n[r],
        o = t[i];
      o && (this[`${i}_${e}`] = o);
    }
    return this;
  }
  addStates(e) {
    if (Array.isArray(e))
      for (var t = 0, n = e.length; t < n; t++) this.addState(e[t]);
    else for (var r in e) this.addState(r, e[r]);
    return this;
  }
  runMethod(e, t, n, r, a, i) {
    var o = this[e + '_' + this.state];
    if (o) {
      var s = arguments.length;
      switch (s) {
        case 1:
          return o.call(this);
        case 2:
          return o.call(this, t);
        case 3:
          return o.call(this, t, n);
        case 4:
          return o.call(this, t, n, r);
        case 5:
          return o.call(this, t, n, r, a);
        case 6:
          return o.call(this, t, n, r, a, i);
      }
      for (var l = new Array(s - 1), u = 1; u < s; u++) l[u - 1] = arguments[u];
      return o.apply(this, l);
    }
  }
}
Object.assign(ib.prototype, Ug);
var ob = function (e, t, n, r, a) {
  void 0 === a && (a = !1);
  var i = e._events[t];
  if (!i) return !1;
  for (var o = 0, s = i.length; o < s; o++) {
    var l = i[o];
    if (l.fn === n && l.context === r && l.once === a) return !0;
  }
  return !1;
};
const sb = ['next', 'exit', 'enter', 'update', 'preupdate', 'postupdate'];
class lb extends ib {
  shutdown() {
    this.stopUpdate(),
      this.stopPreUpdate(),
      this.stopPostUpdate(),
      (this._scene = void 0),
      super.shutdown();
  }
  resetFromJSON(e) {
    return super.resetFromJSON(e), (this._scene = rb(e, 'scene', void 0)), this;
  }
  get stateProperties() {
    return sb;
  }
  update(e, t) {
    this.runMethod('update', e, t);
  }
  preupdate(e, t) {
    this.runMethod('preupdate', e, t);
  }
  postupdate(e, t) {
    this.runMethod('postupdate', e, t);
  }
  startUpdate(e) {
    e || (e = this._scene);
    var t = e.sys.events;
    return (
      ob(t, 'update', this.update, this) ||
        ((this._scene = e), t.on('update', this.update, this)),
      this
    );
  }
  stopUpdate() {
    return this._scene
      ? (this._scene.sys.events.off('update', this.update, this), this)
      : this;
  }
  startPreUpdate(e) {
    e || (e = this._scene);
    var t = e.sys.events;
    return (
      ob(t, 'preupdate', this.preupdate, this) ||
        ((this._scene = e), t.on('preupdate', this.preupdate, this)),
      this
    );
  }
  stopPreUpdate() {
    return this._scene
      ? (this._scene.sys.events.off('preupdate', this.preupdate, this), this)
      : this;
  }
  startPostUpdate(e) {
    e || (e = this._scene);
    var t = e.sys.events;
    return (
      ob(t, 'postupdate', this.postupdate, this) ||
        ((this._scene = e), t.on('postupdate', this.postupdate, this)),
      this
    );
  }
  stopPostUpdate() {
    return this._scene
      ? (this._scene.sys.events.off('postupdate', this.postupdate, this), this)
      : this;
  }
}
Phaser.Utils.Objects.GetValue,
  Phaser.Math.Distance.Between,
  Phaser.Utils.Objects.GetValue;
const ub = Phaser.Utils.Objects.GetValue;
class cb extends Zg {
  constructor(e, t) {
    super(e, t);
    var n = this,
      r = {
        states: {
          IDLE: {},
          BEGIN: {
            enter: function () {
              var e = n.pointer;
              (n.startX = e.x),
                (n.startY = e.y),
                (n.startWorldX = e.worldX),
                (n.startWorldY = e.worldY);
            },
          },
          RECOGNIZED: {
            enter: function () {
              n.emit('panstart', n, n.gameObject, n.lastPointer);
            },
            exit: function () {
              var e = n.lastPointer;
              (n.endX = e.x),
                (n.endY = e.y),
                (n.endWorldX = e.worldX),
                (n.endWorldY = e.worldY),
                n.emit('panend', n, n.gameObject, n.lastPointer);
            },
          },
        },
        init: function () {
          this.state = fb;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new lb(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e),
      this.setDragThreshold(ub(e, 'threshold', 10)),
      this
    );
  }
  onDragStart() {
    (this.state = db), 0 === this.dragThreshold && (this.state = pb);
  }
  onDragEnd() {
    this.state = fb;
  }
  onDrag() {
    switch (this.state) {
      case db:
        this.pointer.getDistance() >= this.dragThreshold && (this.state = pb);
        break;
      case pb:
        var e = this.pointer.position,
          t = this.pointer.prevPosition;
        (this.dx = e.x - t.x), (this.dy = e.y - t.y);
        var n = this.pointer;
        (this.x = n.x),
          (this.y = n.y),
          (this.worldX = n.worldX),
          (this.worldY = n.worldY),
          this.emit('pan', this, this.gameObject, this.lastPointer);
    }
  }
  get isPanned() {
    return this.state === pb;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const fb = 'IDLE',
  db = 'BEGIN',
  pb = 'RECOGNIZED';
const hb = Phaser.Math.Distance.Between,
  mb = Phaser.Math.Angle.Between;
var vb = {
    getDt: function () {
      var e;
      return (e = this.scene), $g(e).loop.delta;
    },
    getVelocity: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return hb(t.x, t.y, e.x, e.y) / (0.001 * this.getDt());
    },
    getVelocityX: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return Math.abs(e.x - t.x) / (0.001 * this.getDt());
    },
    getVelocityY: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return Math.abs(e.y - t.y) / (0.001 * this.getDt());
    },
    getVelocityAngle: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return mb(t.x, t.y, e.x, e.y);
    },
  },
  gb = { 'up&down': 0, 'left&right': 1, '4dir': 2, '8dir': 3 },
  bb = {};
const yb = Phaser.Utils.Objects.GetValue,
  wb = Phaser.Math.RadToDeg;
Object.assign(
  class extends Zg {
    constructor(e, t) {
      super(e, t);
      var n = this,
        r = {
          states: {
            IDLE: {
              enter: function () {
                (n.x = 0), (n.y = 0), (n.worldX = 0), (n.worldY = 0);
              },
              exit: function () {
                var e = n.lastPointer;
                (n.x = e.x),
                  (n.y = e.y),
                  (n.worldX = e.worldX),
                  (n.worldY = e.worldY);
              },
            },
            BEGIN: {
              enter: function () {
                n.validDrag = !1;
              },
            },
            RECOGNIZED: {
              enter: function () {
                n.start(),
                  n.updateDirectionStates(),
                  n.emit('swipe', n, n.gameObject, n.lastPointer);
              },
              exit: function () {
                n.stop(), n.clearDirectionStates();
              },
            },
          },
          init: function () {
            this.state = kb;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new lb(r)), this.clearDirectionStates();
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(yb(e, 'threshold', 10)),
        this.setVelocityThreshold(yb(e, 'velocityThreshold', 1e3)),
        this.setDirectionMode(yb(e, 'dir', '8dir')),
        this
      );
    }
    onDragStart() {
      this.state = xb;
    }
    onDragEnd() {
      this.state = kb;
    }
    onDrag() {
      this.state === xb &&
        (this.validDrag ||
          (this.validDrag =
            0 === this.dragThreshold ||
            this.pointer.getDistance() >= this.dragThreshold),
        this.validDrag &&
          this.dragVelocity > this.velocityThreshold &&
          (this.state = Eb));
    }
    postUpdate(e, t) {
      this.isRunning && this.enable && this.state === Eb && (this.state = kb);
    }
    get isSwiped() {
      return this.state === Eb;
    }
    get dragVelocity() {
      var e;
      switch (this.dirMode) {
        case 0:
          e = this.getVelocityY();
          break;
        case 1:
          e = this.getVelocityX();
          break;
        default:
          e = this.getVelocity();
      }
      return e;
    }
    setDragThreshold(e) {
      return (this.dragThreshold = e), this;
    }
    setVelocityThreshold(e) {
      return (this.velocityThreshold = e), this;
    }
    setDirectionMode(e) {
      return 'string' == typeof e && (e = gb[e]), (this.dirMode = e), this;
    }
    updateDirectionStates() {
      return (
        (function (e, t, n) {
          switch (
            (void 0 === n ? (n = {}) : !0 === n && (n = bb),
            (n.left = !1),
            (n.right = !1),
            (n.up = !1),
            (n.down = !1),
            (e = (e + 360) % 360),
            t)
          ) {
            case 0:
              e < 180 ? (n.down = !0) : (n.up = !0);
              break;
            case 1:
              e > 90 && e <= 270 ? (n.left = !0) : (n.right = !0);
              break;
            case 2:
              e > 45 && e <= 135
                ? (n.down = !0)
                : e > 135 && e <= 225
                ? (n.left = !0)
                : e > 225 && e <= 315
                ? (n.up = !0)
                : (n.right = !0);
              break;
            case 3:
              e > 22.5 && e <= 67.5
                ? ((n.down = !0), (n.right = !0))
                : e > 67.5 && e <= 112.5
                ? (n.down = !0)
                : e > 112.5 && e <= 157.5
                ? ((n.down = !0), (n.left = !0))
                : e > 157.5 && e <= 202.5
                ? (n.left = !0)
                : e > 202.5 && e <= 247.5
                ? ((n.left = !0), (n.up = !0))
                : e > 247.5 && e <= 292.5
                ? (n.up = !0)
                : e > 292.5 && e <= 337.5
                ? ((n.up = !0), (n.right = !0))
                : (n.right = !0);
          }
        })(wb(this.getVelocityAngle()), this.dirMode, this),
        this
      );
    }
    clearDirectionStates() {
      return (
        (this.left = !1),
        (this.right = !1),
        (this.up = !1),
        (this.down = !1),
        this
      );
    }
  }.prototype,
  vb,
);
const kb = 'IDLE',
  xb = 'BEGIN',
  Eb = 'RECOGNIZED';
var Sb = function (e) {
  if ('object' != typeof e || null === e) return e;
  if (Array.isArray(e)) e.length = 0;
  else for (var t in e) delete e[t];
  return e;
};
const Cb = Phaser.Utils.Objects.GetValue,
  Ob = Phaser.Utils.Array.SpliceOne,
  _b = Phaser.Math.Distance.Between,
  Pb = Phaser.Math.Angle.Between;
class Nb {
  constructor(e, t) {
    var n = e.input.manager.pointersTotal - 1;
    n < 2 && e.input.addPointer(2 - n),
      (this.scene = e),
      this.setEventEmitter(Cb(t, 'eventEmitter', void 0)),
      (this._enable = void 0),
      (this.pointers = []),
      (this.movedState = {}),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(Cb(e, 'enable', !0)),
      (this.bounds = Cb(e, 'bounds', void 0)),
      (this.tracerState = Db),
      (this.pointers.length = 0),
      Sb(this.movedState),
      this
    );
  }
  boot() {
    this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('gameout', this.dragCancel, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.sys.events.once('shutdown', this.destroy, this);
  }
  shutdown() {
    this.scene &&
      (this.destroyEventEmitter(),
      (this.pointers.length = 0),
      Sb(this.movedState),
      this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('gameout', this.dragCancel, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.sys.events.off('shutdown', this.destroy, this),
      (this.scene = void 0));
  }
  destroy() {
    this.shutdown();
  }
  get enable() {
    return this._enable;
  }
  set enable(e) {
    if (this._enable !== e)
      return e || this.dragCancel(), (this._enable = e), this;
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(e) {
    if (
      this.enable &&
      2 !== this.pointers.length &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      -1 === this.pointers.indexOf(e)
    )
      switch (
        ((this.movedState[e.id] = !1), this.pointers.push(e), this.tracerState)
      ) {
        case Db:
          (this.tracerState = Mb), this.onDrag1Start();
          break;
        case Mb:
          (this.tracerState = Lb), this.onDrag2Start();
      }
  }
  onPointerUp(e) {
    if (this.enable && (!this.bounds || this.bounds.contains(e.x, e.y))) {
      var t = this.pointers.indexOf(e);
      if (-1 !== t)
        switch (
          (delete this.movedState[e.id], Ob(this.pointers, t), this.tracerState)
        ) {
          case Mb:
            (this.tracerState = Db), this.onDrag1End();
            break;
          case Lb:
            (this.tracerState = Mb), this.onDrag2End(), this.onDrag1Start();
        }
    }
  }
  onPointerMove(e) {
    if (this.enable && e.isDown) {
      var t = !this.bounds || this.bounds.contains(e.x, e.y),
        n = -1 !== this.pointers.indexOf(e);
      if (!n && t);
      else if (n && !t) this.onPointerUp(e);
      else if (
        (this.movedState[e.id] ||
          (this.movedState[e.id] = e.x !== e.downX || e.y !== e.downY),
        this.movedState[e.id])
      )
        switch (this.tracerState) {
          case Mb:
            this.onDrag1();
            break;
          case Lb:
            this.onDrag2();
        }
    }
  }
  dragCancel() {
    return (
      this.tracerState === Lb && this.onDrag2End(),
      (this.pointers.length = 0),
      Sb(this.movedState),
      (this.tracerState = Db),
      this
    );
  }
  onDrag1Start() {
    this.emit('drag1start', this);
  }
  onDrag1End() {
    this.emit('drag1end', this);
  }
  onDrag1() {
    this.emit('drag1', this);
  }
  onDrag2Start() {
    this.emit('drag2start', this);
  }
  onDrag2End() {
    this.emit('drag2end', this);
  }
  onDrag2() {
    this.emit('drag2', this);
  }
  get distanceBetween() {
    if (this.tracerState !== Lb) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return _b(e.x, e.y, t.x, t.y);
  }
  get angleBetween() {
    if (this.tracerState !== Lb) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return Pb(e.x, e.y, t.x, t.y);
  }
  get drag1Vector() {
    var e = this.pointers[0];
    if (e && this.movedState[e.id]) {
      var t = e.position,
        n = e.prevPosition;
      (Tb.x = t.x - n.x), (Tb.y = t.y - n.y);
    } else (Tb.x = 0), (Tb.y = 0);
    return Tb;
  }
  get centerX() {
    if (this.tracerState !== Lb) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get centerY() {
    if (this.tracerState !== Lb) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.y + t.y) / 2;
  }
  get prevCenterX() {
    if (this.tracerState !== Lb) return 0;
    var e = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      t = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get prevCenterY() {
    if (this.tracerState !== Lb) return 0;
    var e = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      t = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (e.y + t.y) / 2;
  }
  get movementCenterX() {
    return this.centerX - this.prevCenterX;
  }
  get movementCenterY() {
    return this.centerY - this.prevCenterY;
  }
  setRecongizedStateObject(e) {
    return (this.recongizedState = e), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(e) {
    this.recongizedState.state = e;
  }
  cancel() {
    return (this.state = Ab), this;
  }
}
Object.assign(Nb.prototype, Ug);
var Tb = {};
const Db = 0,
  Mb = 1,
  Lb = 2,
  Ab = 'IDLE',
  zb = Phaser.Utils.Objects.GetValue;
class Rb extends Nb {
  constructor(e, t) {
    super(e, t);
    var n = this,
      r = {
        states: {
          IDLE: {
            enter: function () {
              (n.prevDistance = void 0), (n.scaleFactor = 1);
            },
          },
          BEGIN: {},
          RECOGNIZED: {
            enter: function () {
              n.emit('pinchstart', n);
            },
            exit: function () {
              n.emit('pinchend', n);
            },
          },
        },
        init: function () {
          this.state = jb;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new lb(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e), this.setDragThreshold(zb(e, 'threshold', 0)), this
    );
  }
  onDrag2Start() {
    (this.scaleFactor = 1),
      (this.prevDistance = this.distanceBetween),
      (this.state = Ib),
      0 === this.dragThreshold && (this.state = Fb);
  }
  onDrag2End() {
    this.state = jb;
  }
  onDrag2() {
    switch (this.state) {
      case Ib:
        if (
          this.pointers[0].getDistance() >= this.dragThreshold &&
          this.pointers[1].getDistance() >= this.dragThreshold
        ) {
          var e = this.distanceBetween;
          (this.scaleFactor = e / this.prevDistance),
            (this.prevDistance = e),
            (this.state = Fb);
        }
        break;
      case Fb:
        e = this.distanceBetween;
        (this.scaleFactor = e / this.prevDistance),
          this.emit('pinch', this),
          (this.prevDistance = e);
    }
  }
  get isPinched() {
    return this.state === Fb;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const jb = 'IDLE',
  Ib = 'BEGIN',
  Fb = 'RECOGNIZED',
  Ub = Phaser.Math.RotateAround;
var Hb = function (e, t, n, r) {
    return Ub(e, t, n, r), (e.rotation += r), e;
  },
  Bb = {};
const Vb = Phaser.Utils.Objects.GetValue,
  Wb = Phaser.Math.Angle.WrapDegrees,
  Yb = Phaser.Math.Angle.ShortestBetween,
  $b = Phaser.Math.RadToDeg,
  Gb = Phaser.Math.DegToRad;
var Xb = {
  spinObject: function (e, t) {
    if (!this.isRotation) return this;
    void 0 === t && (t = this.pointers[0].camera);
    var n = this.movementCenterX,
      r = this.movementCenterY,
      a = (function (e, t, n, r) {
        return (
          void 0 === r ? (r = {}) : !0 === r && (r = Bb),
          n.getWorldPoint(e, t, r),
          r
        );
      })(this.centerX, this.centerY, t, !0),
      i = a.x,
      o = a.y,
      s = this.rotation;
    if (Array.isArray(e))
      for (var l = e, u = 0, c = l.length; u < c; u++)
        ((e = l[u]).x += n), (e.y += r), Hb(e, i, o, s);
    else (e.x += n), (e.y += r), Hb(e, i, o, s);
    return this;
  },
};
Object.assign(
  class extends Nb {
    constructor(e, t) {
      super(e, t);
      var n = this,
        r = {
          states: {
            IDLE: {
              enter: function () {
                (n.prevAngle = void 0), (n.angle = 0);
              },
            },
            BEGIN: {},
            RECOGNIZED: {
              enter: function () {
                n.emit('rotatestart', n);
              },
              exit: function () {
                n.emit('rotateend', n);
              },
            },
          },
          init: function () {
            this.state = Qb;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new lb(r));
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(Vb(e, 'threshold', 0)),
        this
      );
    }
    onDrag2Start() {
      (this.prevAngle = Wb($b(this.angleBetween))),
        (this.state = qb),
        0 === this.dragThreshold && (this.state = Kb);
    }
    onDrag2End() {
      this.state = Qb;
    }
    onDrag2() {
      switch (this.state) {
        case qb:
          if (
            this.pointers[0].getDistance() >= this.dragThreshold &&
            this.pointers[1].getDistance() >= this.dragThreshold
          ) {
            var e = Wb($b(this.angleBetween));
            (this.angle = Yb(this.prevAngle, e)),
              (this.prevAngle = e),
              (this.state = Kb);
          }
          break;
        case Kb:
          e = Wb($b(this.angleBetween));
          (this.angle = Yb(this.prevAngle, e)),
            (this.prevAngle = e),
            this.emit('rotate', this);
      }
    }
    get isRotated() {
      return this.state === Kb;
    }
    get rotation() {
      return Gb(this.angle);
    }
    setDragThreshold(e) {
      return (this.dragThreshold = e), this;
    }
  }.prototype,
  Xb,
);
const Qb = 'IDLE',
  qb = 'BEGIN',
  Kb = 'RECOGNIZED';
class Jb extends Phaser.GameObjects.Image {
  constructor(e, t, n, r) {
    super(e, n, r, `${t.name}-sprite`),
      S(this, 'towerType'),
      (this.towerType = t),
      (this.depth = r);
  }
}
class Zb {}
S(Zb, 'mapWidth', 64),
  S(Zb, 'mapHeight', 64),
  S(Zb, 'gridCellWidth', 128),
  S(Zb, 'gridCellHeight', 64),
  S(Zb, 'mapTileWidth', 512),
  S(Zb, 'mapTileHalfWidth', 256),
  S(Zb, 'mapTileHeight', 512),
  S(Zb, 'mapTileHalfHeight', 200),
  S(Zb, 'mapTileOffsetX', 250),
  S(Zb, 'mapTileOffsetY', 260),
  S(Zb, 'totalCoins', 6e3),
  S(Zb, 'mapLocalStorageKey', 'cc-map-designer-map');
class ey extends t.Scene {
  constructor() {
    super({ key: 'TileMap' }),
      S(this, '_selectedObjectType', 0),
      S(this, '_selectedTower', Rg.towers[0]),
      S(this, 'controls'),
      S(this, 'map'),
      S(this, 'groundLayer'),
      S(this, 'coinsUsed', 0),
      S(this, '_currentTowers', new Map());
  }
  preload() {
    this.load.image('building_1', './assets/building_1.png'),
      this.load.image('building_2', './assets/building_2.png'),
      this.load.image('tile_metallic', './assets/tile_metallic.png'),
      this.load.image('tile_f', './assets/tile_f.png'),
      this.load.image('tile_e', './assets/tile_e.png'),
      this.load.image('tile_satellite', './assets/tile_satellite.png'),
      Rg.towers.forEach(e => {
        this.load.image(`${e.name}-sprite`, `./assets/${e.asset}`);
      }),
      this.load.tilemapTiledJSON('map', './assets/map-2.json');
  }
  create() {
    this.map = this.add.tilemap('map');
    const e = [
      this.map.addTilesetImage('tile_f.png', 'tile_f'),
      this.map.addTilesetImage('tile_metallic.png', 'tile_metallic'),
      this.map.addTilesetImage('tile_satellite.png', 'tile_satellite'),
      this.map.addTilesetImage('building_1.png', 'building_1'),
      this.map.addTilesetImage('building_2.png', 'building_2'),
      this.map.addTilesetImage('tile_e.png', 'tile_e'),
    ];
    (this.groundLayer = this.map.createLayer('Ground', e, 0, 0)),
      this.groundLayer.setDepth(0),
      this.groundLayer.setCullPadding(6, 6),
      Ig.on(jg.TOWER_SELECTED, e => {
        (this._selectedObjectType = 0), (this._selectedTower = e);
      }),
      Ig.on(jg.ERASER_SELECTED, () => {
        this._selectedObjectType = 1;
      }),
      Ig.on(jg.MOVE_SELECTED, () => {
        this._selectedObjectType = 2;
      }),
      Ig.on(jg.LOAD_MAP, e => {
        this._loadMap(e);
      });
    const n = new Rb(this),
      r = new cb(this),
      a = this.cameras.main;
    (a.zoom = 0.1),
      a.setScroll(-200, 2e3),
      n.on(
        'pinch',
        () => {
          if (2 === this._selectedObjectType) {
            const {
                scaleFactor: e,
                centerX: t,
                centerY: r,
                movementCenterX: i,
                movementCenterY: o,
              } = n,
              s = a.zoom,
              l = s * e,
              { width: u, height: c } = this.game.canvas,
              f = t - u / 2,
              d = r - c / 2;
            (a.scrollX += f / s - f / l - i * l),
              (a.scrollY += d / s - d / l - o * l),
              a.setZoom(l);
          }
        },
        this,
      ),
      r.on(
        'pan',
        e => {
          const { dx: t, dy: n } = e;
          (this.input.activePointer.middleButtonDown() ||
            2 === this._selectedObjectType) &&
            ((a.scrollX -= t / a.zoom), (a.scrollY -= n / a.zoom));
        },
        this,
      ),
      Ig.on(jg.SAVE_MAP, () => {
        (a.zoom = 0.1), (a.scrollX = -200), (a.scrollY = 2e3);
      }),
      this.input.on(t.Input.Events.POINTER_MOVE, e => {
        const n = this.map.getTileAtWorldXY(
          e.worldX - Zb.mapTileOffsetX,
          e.worldY - Zb.mapTileOffsetY,
          !1,
          a,
          this.groundLayer,
        );
        n &&
          this.game.device.os.desktop &&
          this.tweens.addCounter({
            from: 200,
            to: 255,
            duration: 500,
            onUpdate(e) {
              const r = Math.floor(e.getValue());
              n.tint = t.Display.Color.GetColor(r, r, r);
            },
          }),
          n &&
            this.input.activePointer.primaryDown &&
            this._performActionAt(n.x, n.y);
      }),
      this.input.on(t.Input.Events.POINTER_DOWN, e => {
        const t = this.map.getTileAtWorldXY(
          e.worldX - Zb.mapTileOffsetX,
          e.worldY - Zb.mapTileOffsetY,
          !1,
          a,
          this.groundLayer,
        );
        !t ||
          (!this.input.activePointer.leftButtonDown() &&
            !this.input.activePointer.wasTouch) ||
          n.isPinched ||
          r.isPanned ||
          this._performActionAt(t.x, t.y);
      }),
      this.input.on(t.Input.Events.POINTER_WHEEL, e => {
        const t = a.zoom,
          n = t * (e.deltaY > 0 ? 0.9 : 1.1),
          { width: r, height: i } = this.game.canvas,
          o = e.x - r / 2,
          s = e.y - i / 2;
        a.setZoom(n),
          (a.scrollX += o / t - o / n),
          (a.scrollY += s / t - s / n);
      }),
      Ig.emit(jg.COINS_CHANGED, Zb.totalCoins);
    const i = localStorage.getItem(Zb.mapLocalStorageKey);
    if (i)
      try {
        this._loadMap(JSON.parse(i));
      } catch (ay) {
        this._loadMap(this._getEmptyMap());
      }
    else this._loadMap(this._getEmptyMap());
    Ig.on(jg.CLEAR_MAP, () => {
      this._loadMap(this._getEmptyMap());
    }),
      this.events.on(t.Scenes.Events.SHUTDOWN, () => {
        this.input.off(t.Input.Events.POINTER_UP),
          this.input.off(t.Input.Events.POINTER_MOVE),
          this.input.off(t.Input.Events.POINTER_DOWN),
          this.input.off(t.Input.Events.POINTER_WHEEL);
      });
  }
  _performActionAt(e, t) {
    var n, r, a;
    if (2 === this._selectedObjectType) return;
    if (0 === e || 0 === t || e === Zb.mapWidth - 1 || t === Zb.mapHeight - 1)
      return;
    if (
      0 === this._selectedObjectType &&
      this._selectedTower.price > Zb.totalCoins - this.coinsUsed
    )
      return;
    if (1 === this._selectedObjectType) {
      const r = 100 * e + t;
      return void (
        this._currentTowers.has(r) &&
        (null == (n = this._currentTowers.get(r)) || n.destroy(),
        this._currentTowers.delete(r),
        this._updateMap())
      );
    }
    const i = this.groundLayer.getTileAt(e, t),
      o = 100 * e + t;
    (this._currentTowers.has(o) &&
      (null == (r = this._currentTowers.get(o)) ? void 0 : r.towerType) ===
        this._selectedTower) ||
      (null == (a = this._currentTowers.get(o)) || a.destroy(),
      this._currentTowers.set(
        o,
        this.add.existing(
          new Jb(
            this,
            this._selectedTower,
            i.pixelX + Zb.mapTileHalfWidth,
            i.pixelY + Zb.mapTileHalfHeight,
          ),
        ),
      ),
      this._updateMap());
  }
  _updateMap() {
    var e;
    const t = [];
    let n = 0;
    for (let r = 0; r < Zb.mapHeight; r++) {
      const a = [];
      for (let t = 0; t < Zb.mapWidth; t++)
        if (this._currentTowers.has(100 * t + r)) {
          const i = this._currentTowers.get(100 * t + r).towerType,
            o = Rg.towers.findIndex(e => e.tileId === i.tileId);
          a.push(o + 1),
            (n += null != (e = null == i ? void 0 : i.price) ? e : 0);
        } else a.push(0);
      t.push(a);
    }
    Ig.emit(jg.MAP_DATA_CHANGED, t),
      localStorage.setItem(Zb.mapLocalStorageKey, JSON.stringify(t)),
      (this.coinsUsed = n),
      Ig.emit(jg.COINS_CHANGED, Zb.totalCoins - n);
  }
  _getEmptyMap() {
    const e = [];
    for (let t = 0; t < Zb.mapHeight; t++) {
      const t = [];
      for (let e = 0; e < Zb.mapWidth; e++) t.push(0);
      e.push(t);
    }
    return e;
  }
  _loadMap(e) {
    for (const n of this._currentTowers.values()) n.destroy();
    this._currentTowers.clear(),
      localStorage.setItem(Zb.mapLocalStorageKey, JSON.stringify(e));
    let t = 0;
    for (let n = 0; n < Zb.mapHeight; n++)
      for (let r = 0; r < Zb.mapWidth; r++) {
        const a = e[n][r];
        if (a >= 1) {
          const e = a - 1,
            i = this.groundLayer.getTileAt(r, n),
            o = 100 * r + n;
          this._currentTowers.set(
            o,
            this.add.existing(
              new Jb(
                this,
                Rg.towers[e],
                i.pixelX + Zb.mapTileHalfWidth,
                i.pixelY + Zb.mapTileHalfHeight,
              ),
            ),
          ),
            (t += Rg.towers[e].price);
        }
      }
    (this.coinsUsed = t),
      Ig.emit(jg.COINS_CHANGED, Zb.totalCoins - t),
      this._updateMap();
  }
}
var ty = Object.defineProperty,
  ny = Object.getOwnPropertyDescriptor;
let ry =
  ((x = class extends a {
    constructor() {
      super(...arguments), S(this, '_game');
    }
    firstUpdated() {
      var e, n;
      this._game = new t.Game({
        type: t.AUTO,
        parent:
          null !=
          (n =
            null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector('#map-designer'))
            ? n
            : void 0,
        scene: [ey],
        preserveDrawingBuffer: !0,
        dom: { createContainer: !1 },
        scale: { mode: t.Scale.RESIZE, autoCenter: t.Scale.CENTER_BOTH },
        fps: { min: 10, target: 30, smoothStep: !0 },
      });
    }
    disconnectedCallback() {
      this._game.scene.getScene('TileMap').events.removeAllListeners(),
        this._game.destroy(!0);
    }
    render() {
      return i` <div id="map-designer"></div> `;
    }
  }),
  S(
    x,
    'styles',
    n`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  ),
  x);
var ay;
ry = ((e, t, n, r) => {
  for (
    var a, i = r > 1 ? void 0 : r ? ny(t, n) : t, o = e.length - 1;
    o >= 0;
    o--
  )
    (a = e[o]) && (i = (r ? a(t, n, i) : a(i)) || i);
  return r && i && ty(t, n, i), i;
})(
  [
    ((ay = 'cc-map-designer'),
    e => {
      return 'function' == typeof e
        ? ((t = ay), (n = e), customElements.define(t, n), n)
        : ((e, t) => {
            const { kind: n, elements: r } = t;
            return {
              kind: n,
              elements: r,
              finisher(t) {
                customElements.define(e, t);
              },
            };
          })(ay, e);
      var t, n;
    }),
  ],
  ry,
);
const iy = (function (e = window.React, t, n, r, a) {
    let i, o, s;
    if (void 0 === t) {
      const t = e;
      ({ tagName: o, elementClass: s, events: r, displayName: a } = t),
        (i = t.react);
    } else (i = e), (s = n), (o = t);
    const l = i.Component,
      u = i.createElement,
      c = new Set(Object.keys(null != r ? r : {}));
    class f extends l {
      constructor() {
        super(...arguments), (this.o = null);
      }
      t(e) {
        if (null !== this.o)
          for (const t in this.i)
            fr(this.o, t, this.props[t], e ? e[t] : void 0, r);
      }
      componentDidMount() {
        this.t();
      }
      componentDidUpdate(e) {
        this.t(e);
      }
      render() {
        const { _$Gl: e, ...t } = this.props;
        this.h !== e &&
          (this.u = t => {
            var n, r;
            null !== e &&
              ((r = t), 'function' == typeof (n = e) ? n(r) : (n.current = r)),
              (this.o = t),
              (this.h = e);
          }),
          (this.i = {});
        const n = { ref: this.u };
        for (const [r, a] of Object.entries(t))
          ur.has(r)
            ? (n['className' === r ? 'class' : r] = a)
            : c.has(r) || r in s.prototype
            ? (this.i[r] = a)
            : (n[r] = a);
        return u(o, n);
      }
    }
    f.displayName = null != a ? a : s.name;
    const d = i.forwardRef((e, t) =>
      u(f, { ...e, _$Gl: t }, null == e ? void 0 : e.children),
    );
    return (d.displayName = f.displayName), d;
  })(o, 'cc-map-designer', ry),
  oy = () => {
    const [e, t] = r.useState(0);
    return (
      r.useEffect(() => {
        const e = n => {
          t(n),
            Ig.removeAllListeners(jg.COINS_CHANGED),
            Ig.once(jg.COINS_CHANGED, e);
        };
        return (
          Ig.once(jg.COINS_CHANGED, e),
          function () {
            Ig.removeAllListeners(jg.COINS_CHANGED);
          }
        );
      }, [e]),
      r.createElement(
        'p',
        {
          style: {
            textAlign: 'center',
            margin: '0',
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: '1.5rem',
            padding: '1rem 1rem 0',
          },
          id: 'coins',
        },
        'Coins remaining ',
        r.createElement('br', null),
        ' ',
        e,
      )
    );
  };
function sy(e) {
  const [t, n] = r.useState([]);
  return (
    r.useEffect(() => {
      const e = t => {
        n(t),
          Ig.removeAllListeners(jg.MAP_DATA_CHANGED),
          Ig.once(jg.MAP_DATA_CHANGED, e);
      };
      return (
        Ig.once(jg.MAP_DATA_CHANGED, e),
        function () {
          Ig.removeAllListeners(jg.MAP_DATA_CHANGED);
        }
      );
    }, [t]),
    e.readonly
      ? r.createElement(
          'div',
          { style: { pointerEvents: 'none' } },
          r.createElement(iy, null),
        )
      : r.createElement(
          r.Fragment,
          null,
          r.createElement(
            Nm,
            {
              className: 'justify-content-evenly',
              style: {
                position: 'absolute',
                padding: '0rem 2rem',
                width: '100%',
                alignItems: 'center',
                pointerEvents: 'none',
              },
            },
            r.createElement(
              _m,
              {
                style: { pointerEvents: 'auto', padding: '1rem 1rem 0' },
                id: 'tower-selection',
              },
              Rg.towers.map(e =>
                r.createElement(
                  Mg,
                  {
                    key: `${e.name}-overlay`,
                    placement: 'bottom',
                    delay: { show: 50, hide: 100 },
                    overlay: t =>
                      r.createElement(
                        Ag,
                        { id: `${e.name}-tooltip`, ...t },
                        'Name: ',
                        e.name,
                        ' ',
                        r.createElement('br', null),
                        ' Price: ',
                        e.price,
                      ),
                  },
                  r.createElement(
                    Cm,
                    {
                      key: e.name,
                      variant: 'outline-light',
                      onClick: () => {
                        Ig.emit(jg.TOWER_SELECTED, e);
                      },
                    },
                    r.createElement('img', {
                      src: `../assets/${e.thumbnailAsset}`,
                      alt: e.name,
                    }),
                    r.createElement('br', null),
                    r.createElement('span', null, e.name),
                  ),
                ),
              ),
            ),
            r.createElement(
              _m,
              {
                style: { pointerEvents: 'auto', padding: '1rem 1rem 0' },
                id: 'tool-selection',
              },
              r.createElement(
                Cm,
                {
                  key: 'move',
                  variant: 'outline-light',
                  onClick: () => {
                    Ig.emit(jg.MOVE_SELECTED);
                  },
                },
                r.createElement(sr, { size: '2x', icon: C }),
                r.createElement('br', null),
                r.createElement('span', null, 'Move'),
              ),
              r.createElement(
                Cm,
                {
                  key: 'clear',
                  variant: 'outline-light',
                  onClick: () => {
                    Ig.emit(jg.CLEAR_MAP);
                  },
                },
                r.createElement(sr, { size: '2x', icon: P }),
                r.createElement('br', null),
                r.createElement('span', null, 'Clear'),
              ),
              r.createElement(
                Cm,
                {
                  key: 'erase',
                  variant: 'outline-light',
                  onClick: () => {
                    Ig.emit(jg.ERASER_SELECTED);
                  },
                },
                r.createElement(sr, { size: '2x', icon: _ }),
                r.createElement('br', null),
                r.createElement('span', null, 'Erase'),
              ),
              r.createElement(
                Cm,
                {
                  key: 'save',
                  variant: 'outline-light',
                  onClick: () => {
                    Ig.emit(jg.SAVE_MAP), e.saveMapCallback(t);
                  },
                },
                r.createElement(sr, { size: '2x', icon: O }),
                r.createElement('br', null),
                r.createElement('span', null, 'Save'),
              ),
            ),
            r.createElement(oy, null),
          ),
          r.createElement(iy, null),
        )
  );
}
class ly {
  static loadMap(e) {
    Ig.emit(jg.LOAD_MAP, e);
  }
  static setTotalCoins(e) {
    Zb.totalCoins = e;
  }
  static preloadMap(e) {
    localStorage.setItem(Zb.mapLocalStorageKey, JSON.stringify(e));
  }
  static setLocalStorageKey(e) {
    Zb.mapLocalStorageKey = e;
  }
}
const uy = {
  mapDesignerContainer: '_mapDesignerContainer_c94ac_1',
  headerText: '_headerText_c94ac_7',
  modalHeader: '_modalHeader_c94ac_14',
  modalContent: '_modalContent_c94ac_32',
  contentP: '_contentP_c94ac_40',
  buttonRow: '_buttonRow_c94ac_53',
  modalButton: '_modalButton_c94ac_61',
  content: '_content_c94ac_40',
  commitNameInput: '_commitNameInput_c94ac_77',
  commitModalError: '_commitModalError_c94ac_91',
  PsuedoMap: '_PsuedoMap_c94ac_98',
};
function cy(e) {
  const [t, n] = r.useState(!1),
    [a, i] = r.useState(!1),
    [o, x] = r.useState(''),
    [E, S] = r.useState(''),
    [C, O] = r.useState(),
    { setIsOpen: _ } = g();
  let P;
  const N = new s(l),
    T = new u(l),
    D = new c(l),
    M = new f(l);
  r.useEffect(() => {
    N.getLatestMap(
      'MapDesigner' == e.pageType || 'Tutorials' == e.pageType
        ? 'NORMAL'
        : 'DAILY_CHALLENGE',
    ).then(e => {
      O(JSON.parse(e.map));
    }),
      setTimeout(() => {
        'DailyChallenge' != e.pageType &&
          D.getCurrentUser().then(e => {
            !1 === e.isTutorialComplete && 2 == e.tutorialLevel && _(!0);
          });
      }, 200);
  }, []);
  const L = e => {
      var t;
      const n =
          null ==
          (t = document.getElementsByTagName('cc-map-designer')[0].shadowRoot)
            ? void 0
            : t.getElementById('map-designer'),
        r = (null == n ? void 0 : n.firstChild).toDataURL(),
        a = document.createElement('canvas'),
        i = a.getContext('2d'),
        o = new Image();
      (a.width = 935),
        (a.height = 615),
        (o.onload = () => {
          null == i || i.drawImage(o, 0, 0, a.width, a.height),
            (P = a.toDataURL()),
            R(e);
        }),
        (o.src = r);
    },
    A = () => n(!1),
    z = () => {
      S(''), x(''), i(!1);
    },
    R = t => {
      if (C) {
        switch (t) {
          case 'save':
            A(),
              N.updateLatestMap({
                mapType:
                  'MapDesigner' == e.pageType || 'Tutorials' == e.pageType
                    ? 'NORMAL'
                    : 'DAILY_CHALLENGE',
                mapImage: P,
                map: JSON.stringify(C),
                lock: !1,
              })
                .then(() => {
                  m.success('Map Saved');
                })
                .catch(e => {
                  e instanceof v && m.error(e.message);
                });
            break;
          case 'submit':
            A(),
              N.updateLatestMap({
                mapType:
                  'MapDesigner' == e.pageType || 'Tutorials' == e.pageType
                    ? 'NORMAL'
                    : 'DAILY_CHALLENGE',
                mapImage: P,
                map: JSON.stringify(C),
                lock: !0,
              })
                .then(() => {
                  'MapDesigner' == e.pageType && m.success('Map Submitted');
                })
                .catch(e => {
                  e instanceof v && m.error(e.message);
                }),
              'DailyChallenge' == e.pageType &&
                T.createDailyChallengeMatch({ value: JSON.stringify(C) })
                  .then(() => {
                    m.success('Daily Challenge submitted succesfully');
                  })
                  .catch(e => {
                    e instanceof v && m.error(e.message);
                  }),
              'Tutorials' == e.pageType &&
                M.createCodeTutorialMatch({
                  value: JSON.stringify(C),
                  codeTutorialNumber: 4,
                })
                  .then(() => {
                    m.success('Code Tutorial submitted succesfully');
                  })
                  .catch(e => {
                    e instanceof v && m.error(e.message);
                  });
            break;
          case 'commit':
            if (!o) return void S('Commit name cannot be empty!');
            z(),
              N.createMapRevision({
                mapType: 'NORMAL',
                mapImage: P,
                map: JSON.stringify(C),
                message: o,
              })
                .then(() => {
                  m.success('Map Commit Created');
                })
                .catch(e => {
                  e instanceof v && m.error(e.message);
                });
        }
        O(void 0), A();
      }
    };
  r.useEffect(() => {
    ly.setLocalStorageKey(
      'MapDesigner' == e.pageType
        ? 'cc-map-designer-map'
        : 'Tutorials' == e.pageType
        ? 'tc-map-designer-map'
        : 'dc-map-designer-map',
    );
  }, [e.pageType]);
  return d(p, {
    children: [
      h('div', {
        className: uy.mapDesignerContainer,
        children: h(sy, {
          saveMapCallback: e => {
            n(!0), O(e);
          },
          readonly: !1,
        }),
      }),
      h('div', { className: uy.PsuedoMap, id: 'Psuedo' }),
      d(b, {
        show: t,
        centered: !0,
        onHide: A,
        contentClassName: uy.content,
        children: [
          d(b.Header, {
            className: uy.modalHeader,
            children: [
              h(b.Title, { className: uy.headerText, children: 'Save Map' }),
              h('button', {
                type: 'button',
                className: 'btn-close btn-close-white',
                'aria-label': 'Close',
                onClick: A,
              }),
            ],
          }),
          d(b.Body, {
            className: uy.modalContent,
            children: [
              d(y, {
                fluid: !0,
                children: [
                  'MapDesigner' == e.pageType
                    ? h(w, {
                        children: d('p', {
                          className: uy.contentP,
                          children: [
                            h('span', { children: 'SAVE' }),
                            ' : Save map only.',
                          ],
                        }),
                      })
                    : h(p, {}),
                  h(w, {
                    children: d('p', {
                      className: uy.contentP,
                      children: [
                        h('span', { children: 'SUBMIT' }),
                        ' :',
                        ' ',
                        'MapDesigner' == e.pageType
                          ? 'Save map and submit to Leaderboard.'
                          : 'Save map and submit against the challenge',
                      ],
                    }),
                  }),
                  'MapDesigner' == e.pageType
                    ? h(w, {
                        children: d('p', {
                          className: uy.contentP,
                          children: [
                            h('span', { children: 'COMMIT' }),
                            ' : Create a commit revision with the current map.',
                          ],
                        }),
                      })
                    : h(p, {}),
                ],
              }),
              d(y, {
                fluid: !0,
                className: uy.buttonRow,
                children: [
                  'MapDesigner' == e.pageType || 'DailyChallenge' == e.pageType
                    ? h(k, {
                        className: uy.modalButton,
                        size: 'lg',
                        onClick: () => {
                          L('save');
                        },
                        variant: 'outline-light',
                        children: 'SAVE',
                      })
                    : h(p, {}),
                  h(k, {
                    className: uy.modalButton,
                    size: 'lg',
                    onClick: () => {
                      L('submit');
                    },
                    variant: 'outline-light',
                    children: 'Submit',
                  }),
                  'MapDesigner' == e.pageType
                    ? h(k, {
                        className: uy.modalButton,
                        onClick: () => {
                          A(), i(!0);
                        },
                        variant: 'outline-light',
                        size: 'lg',
                        children: 'Commit',
                      })
                    : h(p, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      d(b, {
        show: a,
        centered: !0,
        children: [
          d(b.Header, {
            className: uy.modalHeader,
            children: [
              h(b.Title, { className: uy.headerText, children: 'Commit Name' }),
              h('button', {
                type: 'button',
                className: 'btn-close btn-close-white',
                'aria-label': 'Close',
                onClick: z,
              }),
            ],
          }),
          d(b.Body, {
            className: uy.modalContent,
            children: [
              h(w, {
                children: h('input', {
                  type: 'text',
                  placeholder: 'Enter Commit Message',
                  value: o,
                  className: uy.commitNameInput,
                  onChange: e => {
                    x(e.target.value);
                  },
                }),
              }),
              h('p', { className: uy.commitModalError, children: E }),
              h('div', {
                className: uy.buttonRow,
                children: h(k, {
                  size: 'lg',
                  variant: 'outline-light',
                  className: uy.modalButton,
                  onClick: () => {
                    L('commit');
                  },
                  children: 'Create Map Commit',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { cy as M };
