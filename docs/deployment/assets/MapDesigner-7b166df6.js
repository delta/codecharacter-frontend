import {
  am as e,
  aJ as t,
  aK as n,
  r,
  aL as a,
  aM as i,
  aN as o,
  S as s,
  d as l,
  aC as u,
  C as c,
  j as f,
  F as d,
  c as p,
  _ as h,
  A as m,
} from './index-3b0785b0.js';
import { u as v } from './TourProvider-a2db2cbe.js';
import { M as g } from './Modal-d30bd2b2.js';
import { C as b } from './Container-7e33f8ea.js';
import { R as y } from './Row-ee81c216.js';
import { B as w } from './Button-4e851fa0.js';
var k,
  x = Object.defineProperty,
  E = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, 'symbol' != typeof t ? t + '' : t, n),
    n
  ),
  S = {
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
  C = {
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
  O = {
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
  _ = {
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
function P(e, t) {
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
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? P(Object(n), !0).forEach(function (t) {
          M(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : P(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function T(e) {
  return (T =
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
function D(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function M(e, t, n) {
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
function L(e, t) {
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
    z(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function A(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return R(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    z(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function z(e, t) {
  if (e) {
    if ('string' == typeof e) return R(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? R(e, t)
        : void 0
    );
  }
}
function R(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var j = function () {},
  I = {},
  F = {},
  U = null,
  H = { mark: j, measure: j };
try {
  'undefined' != typeof window && (I = window),
    'undefined' != typeof document && (F = document),
    'undefined' != typeof MutationObserver && (U = MutationObserver),
    'undefined' != typeof performance && (H = performance);
} catch (ry) {}
var B = (I.navigator || {}).userAgent,
  V = void 0 === B ? '' : B,
  W = I,
  Y = F,
  $ = U,
  G = H;
W.document;
var X,
  Q,
  K,
  q,
  J,
  Z =
    !!Y.documentElement &&
    !!Y.head &&
    'function' == typeof Y.addEventListener &&
    'function' == typeof Y.createElement,
  ee = ~V.indexOf('MSIE') || ~V.indexOf('Trident/'),
  te = '___FONT_AWESOME___',
  ne = 16,
  re = 'fa',
  ae = 'svg-inline--fa',
  ie = 'data-fa-i2svg',
  oe = 'data-fa-pseudo-element',
  se = 'data-fa-pseudo-element-pending',
  le = 'data-prefix',
  ue = 'data-icon',
  ce = 'fontawesome-i2svg',
  fe = 'async',
  de = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  pe = (function () {
    try {
      return !0;
    } catch (ry) {
      return !1;
    }
  })(),
  he = 'classic',
  me = 'sharp',
  ve = [he, me];
function ge(e) {
  return new Proxy(e, {
    get: function (e, t) {
      return t in e ? e[t] : e[he];
    },
  });
}
var be = ge(
    (M((X = {}), he, {
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
    M(X, me, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
    }),
    X),
  ),
  ye = ge(
    (M((Q = {}), he, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    M(Q, me, { solid: 'fass', regular: 'fasr' }),
    Q),
  ),
  we = ge(
    (M((K = {}), he, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    M(K, me, { fass: 'fa-solid', fasr: 'fa-regular' }),
    K),
  ),
  ke = ge(
    (M((q = {}), he, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    M(q, me, { 'fa-solid': 'fass', 'fa-regular': 'fasr' }),
    q),
  ),
  xe = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,
  Ee = 'fa-layers-text',
  Se =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Ce = ge(
    (M((J = {}), he, {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    }),
    M(J, me, { 900: 'fass', 400: 'fasr' }),
    J),
  ),
  Oe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  _e = Oe.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Pe = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Ne = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Te = new Set();
Object.keys(ye[he]).map(Te.add.bind(Te)),
  Object.keys(ye[me]).map(Te.add.bind(Te));
var De = []
    .concat(ve, A(Te), [
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
      Ne.GROUP,
      Ne.SWAP_OPACITY,
      Ne.PRIMARY,
      Ne.SECONDARY,
    ])
    .concat(
      Oe.map(function (e) {
        return ''.concat(e, 'x');
      }),
    )
    .concat(
      _e.map(function (e) {
        return 'w-'.concat(e);
      }),
    ),
  Me = W.FontAwesomeConfig || {};
if (Y && 'function' == typeof Y.querySelector) {
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
    var t = L(e, 2),
      n = t[0],
      r = t[1],
      a = (function (e) {
        return '' === e || ('false' !== e && ('true' === e || e));
      })(
        (function (e) {
          var t = Y.querySelector('script[' + e + ']');
          if (t) return t.getAttribute(e);
        })(n),
      );
    null != a && (Me[r] = a);
  });
}
var Le = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: re,
  replacementClass: ae,
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
Me.familyPrefix && (Me.cssPrefix = Me.familyPrefix);
var Ae = N(N({}, Le), Me);
Ae.autoReplaceSvg || (Ae.observeMutations = !1);
var ze = {};
Object.keys(Le).forEach(function (e) {
  Object.defineProperty(ze, e, {
    enumerable: !0,
    set: function (t) {
      (Ae[e] = t),
        Re.forEach(function (e) {
          return e(ze);
        });
    },
    get: function () {
      return Ae[e];
    },
  });
}),
  Object.defineProperty(ze, 'familyPrefix', {
    enumerable: !0,
    set: function (e) {
      (Ae.cssPrefix = e),
        Re.forEach(function (e) {
          return e(ze);
        });
    },
    get: function () {
      return Ae.cssPrefix;
    },
  }),
  (W.FontAwesomeConfig = ze);
var Re = [];
var je = ne,
  Ie = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
var Fe = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Ue() {
  for (var e = 12, t = ''; e-- > 0; ) t += Fe[(62 * Math.random()) | 0];
  return t;
}
function He(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Be(e) {
  return e.classList
    ? He(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (e) {
        return e;
      });
}
function Ve(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function We(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function Ye(e) {
  return (
    e.size !== Ie.size ||
    e.x !== Ie.x ||
    e.y !== Ie.y ||
    e.rotate !== Ie.rotate ||
    e.flipX ||
    e.flipY
  );
}
var $e =
  ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function Ge() {
  var e = re,
    t = ae,
    n = ze.cssPrefix,
    r = ze.replacementClass,
    a = $e;
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
var Xe = !1;
function Qe() {
  ze.autoAddCss &&
    !Xe &&
    (!(function (e) {
      if (e && Z) {
        var t = Y.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e);
        for (
          var n = Y.head.childNodes, r = null, a = n.length - 1;
          a > -1;
          a--
        ) {
          var i = n[a],
            o = (i.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(o) > -1 && (r = i);
        }
        Y.head.insertBefore(t, r);
      }
    })(Ge()),
    (Xe = !0));
}
var Ke = {
    mixout: function () {
      return { dom: { css: Ge, insertCss: Qe } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Qe();
        },
        beforeI2svg: function () {
          Qe();
        },
      };
    },
  },
  qe = W || {};
qe[te] || (qe[te] = {}),
  qe[te].styles || (qe[te].styles = {}),
  qe[te].hooks || (qe[te].hooks = {}),
  qe[te].shims || (qe[te].shims = []);
var Je = qe[te],
  Ze = [],
  et = !1;
function tt(e) {
  var t = e.tag,
    n = e.attributes,
    r = void 0 === n ? {} : n,
    a = e.children,
    i = void 0 === a ? [] : a;
  return 'string' == typeof e
    ? Ve(e)
    : '<'
        .concat(t, ' ')
        .concat(
          (function (e) {
            return Object.keys(e || {})
              .reduce(function (t, n) {
                return t + ''.concat(n, '="').concat(Ve(e[n]), '" ');
              }, '')
              .trim();
          })(r),
          '>',
        )
        .concat(i.map(tt).join(''), '</')
        .concat(t, '>');
}
function nt(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
Z &&
  ((et = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Y.readyState,
  )) ||
    Y.addEventListener('DOMContentLoaded', function e() {
      Y.removeEventListener('DOMContentLoaded', e),
        (et = 1),
        Ze.map(function (e) {
          return e();
        });
    }));
var rt,
  at,
  it,
  ot = function (e, t, n, r) {
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
function st(e) {
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
function lt(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function ut(e, t) {
  var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      .skipHooks,
    r = void 0 !== n && n,
    a = lt(t);
  'function' != typeof Je.hooks.addPack || r
    ? (Je.styles[e] = N(N({}, Je.styles[e] || {}), a))
    : Je.hooks.addPack(e, lt(t)),
    'fas' === e && ut('fa', t);
}
var ct = Je.styles,
  ft = Je.shims,
  dt =
    (M((rt = {}), he, Object.values(we[he])),
    M(rt, me, Object.values(we[me])),
    rt),
  pt = null,
  ht = {},
  mt = {},
  vt = {},
  gt = {},
  bt = {},
  yt =
    (M((at = {}), he, Object.keys(be[he])), M(at, me, Object.keys(be[me])), at);
function wt(e, t) {
  var n,
    r = t.split('-'),
    a = r[0],
    i = r.slice(1).join('-');
  return a !== e || '' === i || ((n = i), ~De.indexOf(n)) ? null : i;
}
var kt,
  xt = function () {
    var e = function (e) {
      return ot(
        ct,
        function (t, n, r) {
          return (t[r] = ot(n, e, {})), t;
        },
        {},
      );
    };
    (ht = e(function (e, t, n) {
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
      (mt = e(function (e, t, n) {
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
      (bt = e(function (e, t, n) {
        var r = t[2];
        return (
          (e[n] = n),
          r.forEach(function (t) {
            e[t] = n;
          }),
          e
        );
      }));
    var t = 'far' in ct || ze.autoFetchSvg,
      n = ot(
        ft,
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
    (vt = n.names),
      (gt = n.unicodes),
      (pt = Pt(ze.styleDefault, { family: ze.familyDefault }));
  };
function Et(e, t) {
  return (ht[e] || {})[t];
}
function St(e, t) {
  return (bt[e] || {})[t];
}
function Ct(e) {
  return vt[e] || { prefix: null, iconName: null };
}
function Ot() {
  return pt;
}
(kt = function (e) {
  pt = Pt(e.styleDefault, { family: ze.familyDefault });
}),
  Re.push(kt),
  xt();
var _t = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Pt(e) {
  var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .family,
    n = void 0 === t ? he : t,
    r = be[n][e],
    a = ye[n][e] || ye[n][r],
    i = e in Je.styles ? e : null;
  return a || i || null;
}
var Nt =
  (M((it = {}), he, Object.keys(we[he])), M(it, me, Object.keys(we[me])), it);
function Tt(e) {
  var t,
    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .skipLookups,
    r = void 0 !== n && n,
    a =
      (M((t = {}), he, ''.concat(ze.cssPrefix, '-').concat(he)),
      M(t, me, ''.concat(ze.cssPrefix, '-').concat(me)),
      t),
    i = null,
    o = he;
  (e.includes(a[he]) ||
    e.some(function (e) {
      return Nt[he].includes(e);
    })) &&
    (o = he),
    (e.includes(a[me]) ||
      e.some(function (e) {
        return Nt[me].includes(e);
      })) &&
      (o = me);
  var s = e.reduce(function (e, t) {
    var n = wt(ze.cssPrefix, t);
    if (
      (ct[t]
        ? ((t = dt[o].includes(t) ? ke[o][t] : t), (i = t), (e.prefix = t))
        : yt[o].indexOf(t) > -1
        ? ((i = t), (e.prefix = Pt(t, { family: o })))
        : n
        ? (e.iconName = n)
        : t !== ze.replacementClass &&
          t !== a[he] &&
          t !== a[me] &&
          e.rest.push(t),
      !r && e.prefix && e.iconName)
    ) {
      var s = 'fa' === i ? Ct(e.iconName) : {},
        l = St(e.prefix, e.iconName);
      s.prefix && (i = null),
        (e.iconName = s.iconName || l || e.iconName),
        (e.prefix = s.prefix || e.prefix),
        'far' !== e.prefix ||
          ct.far ||
          !ct.fas ||
          ze.autoFetchSvg ||
          (e.prefix = 'fas');
    }
    return e;
  }, _t());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
    s.prefix ||
      o !== me ||
      (!ct.fass && !ze.autoFetchSvg) ||
      ((s.prefix = 'fass'),
      (s.iconName = St(s.prefix, s.iconName) || s.iconName)),
    ('fa' !== s.prefix && 'fa' !== i) || (s.prefix = Ot() || 'fas'),
    s
  );
}
var Dt = (function () {
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
              (e.definitions[t] = N(N({}, e.definitions[t] || {}), a[t])),
                ut(t, a[t]);
              var n = we[he][t];
              n && ut(n, a[t]), xt();
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
      n && D(t.prototype, n),
      r && D(t, r),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e
    );
  })(),
  Mt = [],
  Lt = {},
  At = {},
  zt = Object.keys(At);
function Rt(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    r[a - 2] = arguments[a];
  return (
    (Lt[e] || []).forEach(function (e) {
      t = e.apply(null, [t].concat(r));
    }),
    t
  );
}
function jt(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (Lt[e] || []).forEach(function (e) {
    e.apply(null, n);
  });
}
function It() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return At[e] ? At[e].apply(null, t) : void 0;
}
function Ft(e) {
  'fa' === e.prefix && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || Ot();
  if (t)
    return (t = St(n, t) || t), nt(Ut.definitions, n, t) || nt(Je.styles, n, t);
}
var Ut = new Dt(),
  Ht = {
    i2svg: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Z
        ? (jt('beforeI2svg', e), It('pseudoElements2svg', e), It('i2svg', e))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      !1 === ze.autoReplaceSvg && (ze.autoReplaceSvg = !0),
        (ze.observeMutations = !0),
        (e = function () {
          Vt({ autoReplaceSvgRoot: n }), jt('watch', t);
        }),
        Z && (et ? setTimeout(e, 0) : Ze.push(e));
    },
  },
  Bt = {
    noAuto: function () {
      (ze.autoReplaceSvg = !1), (ze.observeMutations = !1), jt('noAuto');
    },
    config: ze,
    dom: Ht,
    parse: {
      icon: function (e) {
        if (null === e) return null;
        if ('object' === T(e) && e.prefix && e.iconName)
          return {
            prefix: e.prefix,
            iconName: St(e.prefix, e.iconName) || e.iconName,
          };
        if (Array.isArray(e) && 2 === e.length) {
          var t = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
            n = Pt(e[0]);
          return { prefix: n, iconName: St(n, t) || t };
        }
        if (
          'string' == typeof e &&
          (e.indexOf(''.concat(ze.cssPrefix, '-')) > -1 || e.match(xe))
        ) {
          var r = Tt(e.split(' '), { skipLookups: !0 });
          return {
            prefix: r.prefix || Ot(),
            iconName: St(r.prefix, r.iconName) || r.iconName,
          };
        }
        if ('string' == typeof e) {
          var a = Ot();
          return { prefix: a, iconName: St(a, e) || e };
        }
      },
    },
    library: Ut,
    findIconDefinition: Ft,
    toHtml: tt,
  },
  Vt = function () {
    var e = (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      ).autoReplaceSvgRoot,
      t = void 0 === e ? Y : e;
    (Object.keys(Je.styles).length > 0 || ze.autoFetchSvg) &&
      Z &&
      ze.autoReplaceSvg &&
      Bt.dom.i2svg({ node: t });
  };
function Wt(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (e) {
          return tt(e);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (Z) {
          var t = Y.createElement('div');
          return (t.innerHTML = e.html), t.children;
        }
      },
    }),
    e
  );
}
function Yt(e) {
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
    b = [ze.replacementClass, i ? ''.concat(ze.cssPrefix, '-').concat(i) : '']
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
      attributes: N(
        N({}, f.attributes),
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
  p && (y.attributes[ie] = ''),
    l &&
      (y.children.push({
        tag: 'title',
        attributes: {
          id: y.attributes['aria-labelledby'] || 'title-'.concat(c || Ue()),
        },
        children: [l],
      }),
      delete y.attributes.title);
  var k = N(
      N({}, y),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: s,
        styles: N(N({}, w), f.styles),
      },
    ),
    x =
      r.found && n.found
        ? It('generateAbstractMask', k) || { children: [], attributes: {} }
        : It('generateAbstractIcon', k) || { children: [], attributes: {} },
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
                ? ''.concat(t, '-').concat(ze.cssPrefix, '-').concat(n)
                : i;
          return [
            {
              tag: 'svg',
              attributes: { style: 'display: none;' },
              children: [
                {
                  tag: 'symbol',
                  attributes: N(N({}, a), {}, { id: o }),
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
          if (Ye(o) && n.found && !r.found) {
            var s = { x: n.width / n.height / 2, y: 0.5 };
            a.style = We(
              N(
                N({}, i),
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
function $t(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    s = e.watchable,
    l = void 0 !== s && s,
    u = N(
      N(N({}, o.attributes), i ? { title: i } : {}),
      {},
      { class: o.classes.join(' ') },
    );
  l && (u[ie] = '');
  var c = N({}, o.styles);
  Ye(a) &&
    ((c.transform = (function (e) {
      var t = e.transform,
        n = e.width,
        r = void 0 === n ? ne : n,
        a = e.height,
        i = void 0 === a ? ne : a,
        o = e.startCentered,
        s = void 0 !== o && o,
        l = '';
      return (
        (l +=
          s && ee
            ? 'translate('
                .concat(t.x / je - r / 2, 'em, ')
                .concat(t.y / je - i / 2, 'em) ')
            : s
            ? 'translate(calc(-50% + '
                .concat(t.x / je, 'em), calc(-50% + ')
                .concat(t.y / je, 'em)) ')
            : 'translate('.concat(t.x / je, 'em, ').concat(t.y / je, 'em) ')),
        (l += 'scale('
          .concat((t.size / je) * (t.flipX ? -1 : 1), ', ')
          .concat((t.size / je) * (t.flipY ? -1 : 1), ') ')),
        l + 'rotate('.concat(t.rotate, 'deg) ')
      );
    })({ transform: a, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform));
  var f = We(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    i &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [i] }),
    d
  );
}
var Gt = Je.styles;
function Xt(e) {
  var t = e[0],
    n = e[1],
    r = L(e.slice(4), 1)[0];
  return {
    found: !0,
    width: t,
    height: n,
    icon: Array.isArray(r)
      ? {
          tag: 'g',
          attributes: { class: ''.concat(ze.cssPrefix, '-').concat(Ne.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(ze.cssPrefix, '-').concat(Ne.SECONDARY),
                fill: 'currentColor',
                d: r[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(ze.cssPrefix, '-').concat(Ne.PRIMARY),
                fill: 'currentColor',
                d: r[1],
              },
            },
          ],
        }
      : { tag: 'path', attributes: { fill: 'currentColor', d: r } },
  };
}
var Qt = { found: !1, width: 512, height: 512 };
function Kt(e, t) {
  var n = t;
  return (
    'fa' === t && null !== ze.styleDefault && (t = Ot()),
    new Promise(function (r, a) {
      if ((It('missingIconAbstract'), 'fa' === n)) {
        var i = Ct(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && Gt[t] && Gt[t][e]) return r(Xt(Gt[t][e]));
      !(function (e, t) {
        pe ||
          ze.showMissingIcons ||
          !e ||
          console.error(
            'Icon with name "'
              .concat(e, '" and prefix "')
              .concat(t, '" is missing.'),
          );
      })(e, t),
        r(
          N(
            N({}, Qt),
            {},
            {
              icon:
                (ze.showMissingIcons && e && It('missingIconAbstract')) || {},
            },
          ),
        );
    })
  );
}
var qt = function () {},
  Jt =
    ze.measurePerformance && G && G.mark && G.measure
      ? G
      : { mark: qt, measure: qt },
  Zt = 'FA "6.3.0"',
  en = function (e) {
    Jt.mark(''.concat(Zt, ' ').concat(e, ' ends')),
      Jt.measure(
        ''.concat(Zt, ' ').concat(e),
        ''.concat(Zt, ' ').concat(e, ' begins'),
        ''.concat(Zt, ' ').concat(e, ' ends'),
      );
  },
  tn = {
    begin: function (e) {
      return (
        Jt.mark(''.concat(Zt, ' ').concat(e, ' begins')),
        function () {
          return en(e);
        }
      );
    },
    end: en,
  },
  nn = function () {};
function rn(e) {
  return 'string' == typeof (e.getAttribute ? e.getAttribute(ie) : null);
}
function an(e) {
  return Y.createElementNS('http://www.w3.org/2000/svg', e);
}
function on(e) {
  return Y.createElement(e);
}
function sn(e) {
  var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
      .ceFn,
    n = void 0 === t ? ('svg' === e.tag ? an : on) : t;
  if ('string' == typeof e) return Y.createTextNode(e);
  var r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (t) {
      r.setAttribute(t, e.attributes[t]);
    }),
    (e.children || []).forEach(function (e) {
      r.appendChild(sn(e, { ceFn: n }));
    }),
    r
  );
}
var ln = {
  replace: function (e) {
    var t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach(function (e) {
          t.parentNode.insertBefore(sn(e), t);
        }),
        null === t.getAttribute(ie) && ze.keepOriginalSource)
      ) {
        var n = Y.createComment(
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
    if (~Be(t).indexOf(ze.replacementClass)) return ln.replace(e);
    var r = new RegExp(''.concat(ze.cssPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      var a = n[0].attributes.class.split(' ').reduce(
        function (e, t) {
          return (
            t === ze.replacementClass || t.match(r)
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
        return tt(e);
      })
      .join('\n');
    t.setAttribute(ie, ''), (t.innerHTML = i);
  },
};
function un(e) {
  e();
}
function cn(e, t) {
  var n = 'function' == typeof t ? t : nn;
  if (0 === e.length) n();
  else {
    var r = un;
    ze.mutateApproach === fe && (r = W.requestAnimationFrame || un),
      r(function () {
        var t =
            !0 === ze.autoReplaceSvg
              ? ln.replace
              : ln[ze.autoReplaceSvg] || ln.replace,
          r = tn.begin('mutate');
        e.map(t), r(), n();
      });
  }
}
var fn = !1;
function dn() {
  fn = !0;
}
function pn() {
  fn = !1;
}
var hn = null;
function mn(e) {
  if ($ && ze.observeMutations) {
    var t = e.treeCallback,
      n = void 0 === t ? nn : t,
      r = e.nodeCallback,
      a = void 0 === r ? nn : r,
      i = e.pseudoElementsCallback,
      o = void 0 === i ? nn : i,
      s = e.observeMutationsRoot,
      l = void 0 === s ? Y : s;
    (hn = new $(function (e) {
      if (!fn) {
        var t = Ot();
        He(e).forEach(function (e) {
          if (
            ('childList' === e.type &&
              e.addedNodes.length > 0 &&
              !rn(e.addedNodes[0]) &&
              (ze.searchPseudoElements && o(e.target), n(e.target)),
            'attributes' === e.type &&
              e.target.parentNode &&
              ze.searchPseudoElements &&
              o(e.target.parentNode),
            'attributes' === e.type &&
              rn(e.target) &&
              ~Pe.indexOf(e.attributeName))
          )
            if (
              'class' === e.attributeName &&
              (function (e) {
                var t = e.getAttribute ? e.getAttribute(le) : null,
                  n = e.getAttribute ? e.getAttribute(ue) : null;
                return t && n;
              })(e.target)
            ) {
              var r = Tt(Be(e.target)),
                i = r.prefix,
                s = r.iconName;
              e.target.setAttribute(le, i || t),
                s && e.target.setAttribute(ue, s);
            } else
              (l = e.target) &&
                l.classList &&
                l.classList.contains &&
                l.classList.contains(ze.replacementClass) &&
                a(e.target);
          var l;
        });
      }
    })),
      Z &&
        hn.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function vn(e) {
  var t,
    n,
    r = e.getAttribute('data-prefix'),
    a = e.getAttribute('data-icon'),
    i = void 0 !== e.innerText ? e.innerText.trim() : '',
    o = Tt(Be(e));
  return (
    o.prefix || (o.prefix = Ot()),
    r && a && ((o.prefix = r), (o.iconName = a)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        i.length > 0 &&
        (o.iconName =
          ((t = o.prefix),
          (n = e.innerText),
          (mt[t] || {})[n] || Et(o.prefix, st(e.innerText)))),
      !o.iconName &&
        ze.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function gn(e) {
  var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { styleParser: !0 },
    n = vn(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = (function (e) {
      var t = He(e.attributes).reduce(function (e, t) {
          return (
            'class' !== e.name && 'style' !== e.name && (e[t.name] = t.value), e
          );
        }, {}),
        n = e.getAttribute('title'),
        r = e.getAttribute('data-fa-title-id');
      return (
        ze.autoA11y &&
          (n
            ? (t['aria-labelledby'] = ''
                .concat(ze.replacementClass, '-title-')
                .concat(r || Ue()))
            : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
        t
      );
    })(e),
    s = Rt('parseNodeAttributes', {}, e),
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
  return N(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: a,
      transform: Ie,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: l, attributes: o },
    },
    s,
  );
}
var bn = Je.styles;
function yn(e) {
  var t = 'nest' === ze.autoReplaceSvg ? gn(e, { styleParser: !1 }) : gn(e);
  return ~t.extra.classes.indexOf(Ee)
    ? It('generateLayersText', e, t)
    : It('generateSvgReplacementMutation', e, t);
}
var wn = new Set();
function kn(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!Z) return Promise.resolve();
  var n = Y.documentElement.classList,
    r = function (e) {
      return n.add(''.concat(ce, '-').concat(e));
    },
    a = function (e) {
      return n.remove(''.concat(ce, '-').concat(e));
    },
    i = ze.autoFetchSvg
      ? wn
      : ve
          .map(function (e) {
            return 'fa-'.concat(e);
          })
          .concat(Object.keys(bn));
  i.includes('fa') || i.push('fa');
  var o = ['.'.concat(Ee, ':not([').concat(ie, '])')]
    .concat(
      i.map(function (e) {
        return '.'.concat(e, ':not([').concat(ie, '])');
      }),
    )
    .join(', ');
  if (0 === o.length) return Promise.resolve();
  var s = [];
  try {
    s = He(e.querySelectorAll(o));
  } catch (ry) {}
  if (!(s.length > 0)) return Promise.resolve();
  r('pending'), a('complete');
  var l = tn.begin('onTree'),
    u = s.reduce(function (e, t) {
      try {
        var n = yn(t);
        n && e.push(n);
      } catch (ry) {
        pe || ('MissingIcon' === ry.name && console.error(ry));
      }
      return e;
    }, []);
  return new Promise(function (e, n) {
    Promise.all(u)
      .then(function (n) {
        cn(n, function () {
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
function xn(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  yn(e).then(function (e) {
    e && cn([e], t);
  });
}
ve.map(function (e) {
  wn.add('fa-'.concat(e));
}),
  Object.keys(be[he]).map(wn.add.bind(wn)),
  Object.keys(be[me]).map(wn.add.bind(wn)),
  (wn = A(wn));
var En = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.transform,
      r = void 0 === n ? Ie : n,
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
      return Wt(N({ type: 'icon' }, e), function () {
        return (
          jt('beforeDOMElementCreation', { iconDefinition: e, params: t }),
          ze.autoA11y &&
            (f
              ? (g['aria-labelledby'] = ''
                  .concat(ze.replacementClass, '-title-')
                  .concat(p || Ue()))
              : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
          Yt({
            icons: {
              main: Xt(x),
              mask: s
                ? Xt(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: w,
            iconName: k,
            transform: N(N({}, Ie), r),
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
  Sn = {
    mixout: function () {
      return {
        icon:
          ((e = En),
          function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (t || {}).icon ? t : Ft(t || {}),
              a = n.mask;
            return (
              a && (a = (a || {}).icon ? a : Ft(a || {})),
              e(r, N(N({}, n), {}, { mask: a }))
            );
          }),
      };
      var e;
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (e) {
          return (e.treeCallback = kn), (e.nodeCallback = xn), e;
        },
      };
    },
    provides: function (e) {
      (e.i2svg = function (e) {
        var t = e.node,
          n = void 0 === t ? Y : t,
          r = e.callback;
        return kn(n, void 0 === r ? function () {} : r);
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
                var f = L(l, 2),
                  d = f[0],
                  p = f[1];
                t([
                  e,
                  Yt({
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
            o = We(e.styles);
          return (
            o.length > 0 && (r.style = o),
            Ye(i) &&
              (t = It('generateAbstractTransformGrouping', {
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
  Cn = {
    mixout: function () {
      return {
        layer: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.classes,
            r = void 0 === n ? [] : n;
          return Wt({ type: 'layer' }, function () {
            jt('beforeDOMElementCreation', { assembler: e, params: t });
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
                    class: [''.concat(ze.cssPrefix, '-layers')]
                      .concat(A(r))
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
  On = {
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
          return Wt({ type: 'counter', content: e }, function () {
            return (
              jt('beforeDOMElementCreation', { content: e, params: t }),
              (function (e) {
                var t = e.content,
                  n = e.title,
                  r = e.extra,
                  a = N(
                    N(N({}, r.attributes), n ? { title: n } : {}),
                    {},
                    { class: r.classes.join(' ') },
                  ),
                  i = We(r.styles);
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
                  classes: [''.concat(ze.cssPrefix, '-layers-counter')].concat(
                    A(i),
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  _n = {
    mixout: function () {
      return {
        text: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.transform,
            r = void 0 === n ? Ie : n,
            a = t.title,
            i = void 0 === a ? null : a,
            o = t.classes,
            s = void 0 === o ? [] : o,
            l = t.attributes,
            u = void 0 === l ? {} : l,
            c = t.styles,
            f = void 0 === c ? {} : c;
          return Wt({ type: 'text', content: e }, function () {
            return (
              jt('beforeDOMElementCreation', { content: e, params: t }),
              $t({
                content: e,
                transform: N(N({}, Ie), r),
                title: i,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(ze.cssPrefix, '-layers-text')].concat(
                    A(s),
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
        if (ee) {
          var s = parseInt(getComputedStyle(e).fontSize, 10),
            l = e.getBoundingClientRect();
          (i = l.width / s), (o = l.height / s);
        }
        return (
          ze.autoA11y && !n && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            e,
            $t({
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
  Pn = new RegExp('"', 'ug'),
  Nn = [1105920, 1112319];
function Tn(e, t) {
  var n = ''.concat(se).concat(t.replace(':', '-'));
  return new Promise(function (r, a) {
    if (null !== e.getAttribute(n)) return r();
    var i,
      o,
      s,
      l = He(e.children).filter(function (e) {
        return e.getAttribute(oe) === t;
      })[0],
      u = W.getComputedStyle(e, t),
      c = u.getPropertyValue('font-family').match(Se),
      f = u.getPropertyValue('font-weight'),
      d = u.getPropertyValue('content');
    if (l && !c) return e.removeChild(l), r();
    if (c && 'none' !== d && '' !== d) {
      var p = u.getPropertyValue('content'),
        h = ~['Sharp'].indexOf(c[2]) ? me : he,
        m = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(c[2])
          ? ye[h][c[2].toLowerCase()]
          : Ce[h][f],
        v = (function (e) {
          var t,
            n,
            r,
            a,
            i,
            o = e.replace(Pn, ''),
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
            l = s >= Nn[0] && s <= Nn[1],
            u = 2 === o.length && o[0] === o[1];
          return { value: st(u ? o[0] : o), isSecondary: l || u };
        })(p),
        g = v.value,
        b = v.isSecondary,
        y = c[0].startsWith('FontAwesome'),
        w = Et(m, g),
        k = w;
      if (y) {
        var x =
          ((o = gt[(i = g)]),
          (s = Et('fas', i)),
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
        (l && l.getAttribute(le) === m && l.getAttribute(ue) === k)
      )
        r();
      else {
        e.setAttribute(n, k), l && e.removeChild(l);
        var E = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: Ie,
            symbol: !1,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            extra: { classes: [], styles: {}, attributes: {} },
          },
          S = E.extra;
        (S.attributes[oe] = t),
          Kt(w, m)
            .then(function (a) {
              var i = Yt(
                  N(
                    N({}, E),
                    {},
                    {
                      icons: { main: a, mask: _t() },
                      prefix: m,
                      iconName: k,
                      extra: S,
                      watchable: !0,
                    },
                  ),
                ),
                o = Y.createElement('svg');
              '::before' === t
                ? e.insertBefore(o, e.firstChild)
                : e.appendChild(o),
                (o.outerHTML = i
                  .map(function (e) {
                    return tt(e);
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
function Dn(e) {
  return Promise.all([Tn(e, '::before'), Tn(e, '::after')]);
}
function Mn(e) {
  return !(
    e.parentNode === document.head ||
    ~de.indexOf(e.tagName.toUpperCase()) ||
    e.getAttribute(oe) ||
    (e.parentNode && 'svg' === e.parentNode.tagName)
  );
}
function Ln(e) {
  if (Z)
    return new Promise(function (t, n) {
      var r = He(e.querySelectorAll('*')).filter(Mn).map(Dn),
        a = tn.begin('searchPseudoElements');
      dn(),
        Promise.all(r)
          .then(function () {
            a(), pn(), t();
          })
          .catch(function () {
            a(), pn(), n();
          });
    });
}
var An = !1,
  zn = function (e) {
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
  Rn = {
    mixout: function () {
      return {
        parse: {
          transform: function (e) {
            return zn(e);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-transform');
          return n && (e.transform = zn(n)), e;
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
          attributes: N({}, u.outer),
          children: [
            {
              tag: 'g',
              attributes: N({}, u.inner),
              children: [
                {
                  tag: t.icon.tag,
                  children: t.icon.children,
                  attributes: N(N({}, t.icon.attributes), u.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  jn = { x: 0, y: 0, width: '100%', height: '100%' };
function In(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
var Fn,
  Un = {
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-mask'),
            r = n
              ? Tt(
                  n.split(' ').map(function (e) {
                    return e.trim();
                  }),
                )
              : _t();
          return (
            r.prefix || (r.prefix = Ot()),
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
          p = { tag: 'rect', attributes: N(N({}, jn), {}, { fill: 'white' }) },
          h = u.children ? { children: u.children.map(In) } : {},
          m = {
            tag: 'g',
            attributes: N({}, d.inner),
            children: [
              In(
                N(
                  { tag: u.tag, attributes: N(N({}, u.attributes), d.path) },
                  h,
                ),
              ),
            ],
          },
          v = { tag: 'g', attributes: N({}, d.outer), children: [m] },
          g = 'mask-'.concat(o || Ue()),
          b = 'clip-'.concat(o || Ue()),
          y = {
            tag: 'mask',
            attributes: N(
              N({}, jn),
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
            attributes: N(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(b, ')'),
                mask: 'url(#'.concat(g, ')'),
              },
              jn,
            ),
          }),
          { children: n, attributes: r }
        );
      };
    },
  };
(Fn = { mixoutsTo: Bt }.mixoutsTo),
  (Mt = [
    Ke,
    Sn,
    Cn,
    On,
    _n,
    {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (e) {
            return (e.pseudoElementsCallback = Ln), e;
          },
        };
      },
      provides: function (e) {
        e.pseudoElements2svg = function (e) {
          var t = e.node,
            n = void 0 === t ? Y : t;
          ze.searchPseudoElements && Ln(n);
        };
      },
    },
    {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              dn(), (An = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            mn(Rt('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            hn && hn.disconnect();
          },
          watch: function (e) {
            var t = e.observeMutationsRoot;
            An
              ? pn()
              : mn(
                  Rt('mutationObserverCallbacks', { observeMutationsRoot: t }),
                );
          },
        };
      },
    },
    Rn,
    Un,
    {
      provides: function (e) {
        var t = !1;
        W.matchMedia &&
          (t = W.matchMedia('(prefers-reduced-motion: reduce)').matches),
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
              attributes: N(
                N({}, n),
                {},
                {
                  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                },
              ),
            });
            var a = N(N({}, r), {}, { attributeName: 'opacity' }),
              i = {
                tag: 'circle',
                attributes: N(N({}, n), {}, { cx: '256', cy: '364', r: '28' }),
                children: [],
              };
            return (
              t ||
                i.children.push(
                  {
                    tag: 'animate',
                    attributes: N(
                      N({}, r),
                      {},
                      { attributeName: 'r', values: '28;14;28;28;14;28;' },
                    ),
                  },
                  {
                    tag: 'animate',
                    attributes: N(N({}, a), {}, { values: '1;0;1;1;0;1;' }),
                  },
                ),
              e.push(i),
              e.push({
                tag: 'path',
                attributes: N(
                  N({}, n),
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
                        attributes: N(N({}, a), {}, { values: '1;0;0;0;0;1;' }),
                      },
                    ],
              }),
              t ||
                e.push({
                  tag: 'path',
                  attributes: N(
                    N({}, n),
                    {},
                    {
                      opacity: '0',
                      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                    },
                  ),
                  children: [
                    {
                      tag: 'animate',
                      attributes: N(N({}, a), {}, { values: '0;0;1;1;0;0;' }),
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
  (Lt = {}),
  Object.keys(At).forEach(function (e) {
    -1 === zt.indexOf(e) && delete At[e];
  }),
  Mt.forEach(function (e) {
    var t = e.mixout ? e.mixout() : {};
    if (
      (Object.keys(t).forEach(function (e) {
        'function' == typeof t[e] && (Fn[e] = t[e]),
          'object' === T(t[e]) &&
            Object.keys(t[e]).forEach(function (n) {
              Fn[e] || (Fn[e] = {}), (Fn[e][n] = t[e][n]);
            });
      }),
      e.hooks)
    ) {
      var n = e.hooks();
      Object.keys(n).forEach(function (e) {
        Lt[e] || (Lt[e] = []), Lt[e].push(n[e]);
      });
    }
    e.provides && e.provides(At);
  }),
  Bt.noAuto,
  Bt.config,
  Bt.library,
  Bt.dom;
var Hn = Bt.parse;
Bt.findIconDefinition, Bt.toHtml;
var Bn = Bt.icon;
Bt.layer, Bt.text, Bt.counter;
var Vn = { exports: {} },
  Wn = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
function Yn() {}
function $n() {}
$n.resetWarningCache = Yn;
Vn.exports = (function () {
  function e(e, t, n, r, a, i) {
    if (i !== Wn) {
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
    checkPropTypes: $n,
    resetWarningCache: Yn,
  };
  return (n.PropTypes = n), n;
})();
var Gn = Vn.exports;
function Xn(e, t) {
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
function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Xn(Object(n), !0).forEach(function (t) {
          qn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xn(Object(n)).forEach(function (t) {
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
function qn(e, t, n) {
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
function Jn(e, t) {
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
function Zn(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return er(e);
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
      if ('string' == typeof e) return er(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return er(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function er(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tr(e) {
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
var nr = ['style'];
var rr = !1;
try {
  rr = !0;
} catch (ry) {}
function ar(e) {
  return e && 'object' === Kn(e) && e.prefix && e.iconName && e.icon
    ? e
    : Hn.icon
    ? Hn.icon(e)
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
function ir(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? qn({}, e, t)
    : {};
}
var or = e.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    a = e.symbol,
    i = e.className,
    o = e.title,
    s = e.titleId,
    l = e.maskId,
    u = ar(n),
    c = ir(
      'classes',
      [].concat(
        Zn(
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
                (qn(
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
                qn(t, 'fa-rotate-'.concat(b), null != b && 0 !== b),
                qn(t, 'fa-pull-'.concat(y), null != y),
                qn(t, 'fa-swap-opacity', e.swapOpacity),
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
        Zn(i.split(' ')),
      ),
    ),
    f = ir(
      'transform',
      'string' == typeof e.transform ? Hn.transform(e.transform) : e.transform,
    ),
    d = ir('mask', ar(r)),
    p = Bn(
      u,
      Qn(
        Qn(Qn(Qn({}, c), f), d),
        {},
        { symbol: a, title: o, titleId: s, maskId: l },
      ),
    );
  if (!p)
    return (
      (function () {
        var e;
        !rr &&
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
      or.defaultProps.hasOwnProperty(t) || (m[t] = e[t]);
    }),
    sr(h[0], m)
  );
});
(or.displayName = 'FontAwesomeIcon'),
  (or.propTypes = {
    beat: Gn.bool,
    border: Gn.bool,
    beatFade: Gn.bool,
    bounce: Gn.bool,
    className: Gn.string,
    fade: Gn.bool,
    flash: Gn.bool,
    mask: Gn.oneOfType([Gn.object, Gn.array, Gn.string]),
    maskId: Gn.string,
    fixedWidth: Gn.bool,
    inverse: Gn.bool,
    flip: Gn.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
    icon: Gn.oneOfType([Gn.object, Gn.array, Gn.string]),
    listItem: Gn.bool,
    pull: Gn.oneOf(['right', 'left']),
    pulse: Gn.bool,
    rotation: Gn.oneOf([0, 90, 180, 270]),
    shake: Gn.bool,
    size: Gn.oneOf([
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
    spin: Gn.bool,
    spinPulse: Gn.bool,
    spinReverse: Gn.bool,
    symbol: Gn.oneOfType([Gn.bool, Gn.string]),
    title: Gn.string,
    titleId: Gn.string,
    transform: Gn.oneOfType([Gn.string, Gn.object]),
    swapOpacity: Gn.bool,
  }),
  (or.defaultProps = {
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
var sr = function e(t, n) {
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
                  a = tr(t.slice(0, r)),
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
              : (e.attrs[tr(t)] = r);
        }
        return e;
      },
      { attrs: {} },
    ),
    o = r.style,
    s = void 0 === o ? {} : o,
    l = Jn(r, nr);
  return (
    (i.attrs.style = Qn(Qn({}, i.attrs.style), s)),
    t.apply(void 0, [n.tag, Qn(Qn({}, i.attrs), l)].concat(Zn(a)))
  );
}.bind(null, e.createElement);
const lr = new Set(['children', 'localName', 'ref', 'style', 'className']),
  ur = new WeakMap(),
  cr = (e, t, n, r, a) => {
    const i = null == a ? void 0 : a[t];
    void 0 === i || n === r
      ? null == n && t in HTMLElement.prototype
        ? e.removeAttribute(t)
        : (e[t] = n)
      : ((e, t, n) => {
          let r = ur.get(e);
          void 0 === r && ur.set(e, (r = new Map()));
          let a = r.get(t);
          void 0 !== n
            ? void 0 === a
              ? (r.set(t, (a = { handleEvent: n })), e.addEventListener(t, a))
              : (a.handleEvent = n)
            : void 0 !== a && (r.delete(t), e.removeEventListener(t, a));
        })(e, i, n);
  };
var fr,
  dr = { exports: {} };
(fr = dr),
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
    fr.exports ? ((t.default = t), (fr.exports = t)) : (window.classNames = t);
  })();
var pr = dr.exports;
function hr(e, t) {
  return (hr = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
var mr = { exports: {} },
  vr = {},
  gr = e,
  br = Symbol.for('react.element'),
  yr = Symbol.for('react.fragment'),
  wr = Object.prototype.hasOwnProperty,
  kr = gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Er(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  for (r in (void 0 !== n && (i = '' + n),
  void 0 !== t.key && (i = '' + t.key),
  void 0 !== t.ref && (o = t.ref),
  t))
    wr.call(t, r) && !xr.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
  return {
    $$typeof: br,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: kr.current,
  };
}
(vr.Fragment = yr), (vr.jsx = Er), (vr.jsxs = Er), (mr.exports = vr);
const Sr = r.createContext({
  prefixes: {},
  breakpoints: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  minBreakpoint: 'xs',
});
function Cr(e, t) {
  const { prefixes: n } = r.useContext(Sr);
  return e || n[t] || t;
}
function Or() {
  const { dir: e } = r.useContext(Sr);
  return 'rtl' === e;
}
function _r(e) {
  return (e && e.ownerDocument) || document;
}
function Pr(e, t) {
  return (function (e) {
    var t = _r(e);
    return (t && t.defaultView) || window;
  })(e).getComputedStyle(e, t);
}
var Nr = /([A-Z])/g;
var Tr = /^ms-/;
function Dr(e) {
  return (function (e) {
    return e.replace(Nr, '-$1').toLowerCase();
  })(e).replace(Tr, '-ms-');
}
var Mr =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Lr(e, t) {
  var n = '',
    r = '';
  if ('string' == typeof t)
    return e.style.getPropertyValue(Dr(t)) || Pr(e).getPropertyValue(Dr(t));
  Object.keys(t).forEach(function (a) {
    var i = t[a];
    i || 0 === i
      ? !(function (e) {
          return !(!e || !Mr.test(e));
        })(a)
        ? (n += Dr(a) + ': ' + i + ';')
        : (r += a + '(' + i + ') ')
      : e.style.removeProperty(Dr(a));
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var Ar = { exports: {} },
  zr = {},
  Rr = { exports: {} },
  jr = {};
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
})(jr),
  (Rr.exports = jr);
var Ir = e,
  Fr = Rr.exports;
function Ur(e) {
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
var Hr = new Set(),
  Br = {};
function Vr(e, t) {
  Wr(e, t), Wr(e + 'Capture', t);
}
function Wr(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) Hr.add(t[e]);
}
var Yr = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  $r = Object.prototype.hasOwnProperty,
  Gr =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xr = {},
  Qr = {};
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
var qr = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    qr[e] = new Kr(e, 0, !1, e, null, !1, !1);
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    qr[t] = new Kr(t, 1, !1, e[1], null, !1, !1);
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    qr[e] = new Kr(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    qr[e] = new Kr(e, 2, !1, e, null, !1, !1);
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      qr[e] = new Kr(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    qr[e] = new Kr(e, 3, !0, e, null, !1, !1);
  }),
  ['capture', 'download'].forEach(function (e) {
    qr[e] = new Kr(e, 4, !1, e, null, !1, !1);
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    qr[e] = new Kr(e, 6, !1, e, null, !1, !1);
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    qr[e] = new Kr(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var Jr = /[\-:]([a-z])/g;
function Zr(e) {
  return e[1].toUpperCase();
}
function ea(e, t, n, r) {
  var a = qr.hasOwnProperty(t) ? qr[t] : null;
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
            !!$r.call(Qr, e) ||
            (!$r.call(Xr, e) &&
              (Gr.test(e) ? (Qr[e] = !0) : ((Xr[e] = !0), !1)))
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
    var t = e.replace(Jr, Zr);
    qr[t] = new Kr(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Jr, Zr);
      qr[t] = new Kr(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(Jr, Zr);
    qr[t] = new Kr(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    qr[e] = new Kr(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (qr.xlinkHref = new Kr(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  )),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    qr[e] = new Kr(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var ta = Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  na = Symbol.for('react.element'),
  ra = Symbol.for('react.portal'),
  aa = Symbol.for('react.fragment'),
  ia = Symbol.for('react.strict_mode'),
  oa = Symbol.for('react.profiler'),
  sa = Symbol.for('react.provider'),
  la = Symbol.for('react.context'),
  ua = Symbol.for('react.forward_ref'),
  ca = Symbol.for('react.suspense'),
  fa = Symbol.for('react.suspense_list'),
  da = Symbol.for('react.memo'),
  pa = Symbol.for('react.lazy'),
  ha = Symbol.for('react.offscreen'),
  ma = Symbol.iterator;
function va(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (ma && e[ma]) || e['@@iterator'])
    ? e
    : null;
}
var ga,
  ba = Object.assign;
function ya(e) {
  if (void 0 === ga)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ga = (t && t[1]) || '';
    }
  return '\n' + ga + e;
}
var wa = !1;
function ka(e, t) {
  if (!e || wa) return '';
  wa = !0;
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
    (wa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ya(e) : '';
}
function xa(e) {
  switch (e.tag) {
    case 5:
      return ya(e.type);
    case 16:
      return ya('Lazy');
    case 13:
      return ya('Suspense');
    case 19:
      return ya('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ka(e.type, !1));
    case 11:
      return (e = ka(e.type.render, !1));
    case 1:
      return (e = ka(e.type, !0));
    default:
      return '';
  }
}
function Ea(e) {
  if (null == e) return null;
  if ('function' == typeof e) return e.displayName || e.name || null;
  if ('string' == typeof e) return e;
  switch (e) {
    case aa:
      return 'Fragment';
    case ra:
      return 'Portal';
    case oa:
      return 'Profiler';
    case ia:
      return 'StrictMode';
    case ca:
      return 'Suspense';
    case fa:
      return 'SuspenseList';
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case la:
        return (e.displayName || 'Context') + '.Consumer';
      case sa:
        return (e._context.displayName || 'Context') + '.Provider';
      case ua:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              '' !== (e = t.displayName || t.name || '')
                ? 'ForwardRef(' + e + ')'
                : 'ForwardRef'),
          e
        );
      case da:
        return null !== (t = e.displayName || null) ? t : Ea(e.type) || 'Memo';
      case pa:
        (t = e._payload), (e = e._init);
        try {
          return Ea(e(t));
        } catch (n) {}
    }
  return null;
}
function Sa(e) {
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
      return Ea(t);
    case 8:
      return t === ia ? 'StrictMode' : 'Mode';
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
function Ca(e) {
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
function Oa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  );
}
function _a(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = Oa(e) ? 'checked' : 'value',
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
function Pa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Oa(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function Na(e) {
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
function Ta(e, t) {
  var n = t.checked;
  return ba({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  });
}
function Da(e, t) {
  var n = null == t.defaultValue ? '' : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = Ca(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function Ma(e, t) {
  null != (t = t.checked) && ea(e, 'checked', t, !1);
}
function La(e, t) {
  Ma(e, t);
  var n = Ca(t.value),
    r = t.type;
  if (null != n)
    'number' === r
      ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if ('submit' === r || 'reset' === r)
    return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? za(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && za(e, t.type, Ca(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
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
function za(e, t, n) {
  ('number' === t && Na(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ra = Array.isArray;
function ja(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ca(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n)
        return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
      null !== t || e[a].disabled || (t = e[a]);
    }
    null !== t && (t.selected = !0);
  }
}
function Ia(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(Ur(91));
  return ba({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(Ur(92));
      if (Ra(n)) {
        if (1 < n.length) throw Error(Ur(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Ca(n) };
}
function Ua(e, t) {
  var n = Ca(t.value),
    r = Ca(t.defaultValue);
  null != n &&
    ((n = '' + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = '' + r);
}
function Ha(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Ba(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Va(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Ba(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Wa,
  Ya,
  $a =
    ((Ya = function (e, t) {
      if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          (Wa = Wa || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = Wa.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return Ya(e, t);
          });
        }
      : Ya);
function Ga(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var Xa = {
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
  Qa = ['Webkit', 'ms', 'Moz', 'O'];
function Ka(e, t, n) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : n || 'number' != typeof t || 0 === t || (Xa.hasOwnProperty(e) && Xa[e])
    ? ('' + t).trim()
    : t + 'px';
}
function qa(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf('--'),
        a = Ka(n, t[n], r);
      'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
Object.keys(Xa).forEach(function (e) {
  Qa.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xa[t] = Xa[e]);
  });
});
var Ja = ba(
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
function Za(e, t) {
  if (t) {
    if (Ja[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(Ur(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(Ur(60));
      if (
        'object' != typeof t.dangerouslySetInnerHTML ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(Ur(61));
    }
    if (null != t.style && 'object' != typeof t.style) throw Error(Ur(62));
  }
}
function ei(e, t) {
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
var ti = null;
function ni(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var ri = null,
  ai = null,
  ii = null;
function oi(e) {
  if ((e = eu(e))) {
    if ('function' != typeof ri) throw Error(Ur(280));
    var t = e.stateNode;
    t && ((t = nu(t)), ri(e.stateNode, e.type, t));
  }
}
function si(e) {
  ai ? (ii ? ii.push(e) : (ii = [e])) : (ai = e);
}
function li() {
  if (ai) {
    var e = ai,
      t = ii;
    if (((ii = ai = null), oi(e), t)) for (e = 0; e < t.length; e++) oi(t[e]);
  }
}
function ui(e, t) {
  return e(t);
}
function ci() {}
var fi = !1;
function di(e, t, n) {
  if (fi) return e(t, n);
  fi = !0;
  try {
    return ui(e, t, n);
  } finally {
    (fi = !1), (null !== ai || null !== ii) && (ci(), li());
  }
}
function pi(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = nu(n);
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
  if (n && 'function' != typeof n) throw Error(Ur(231, t, typeof n));
  return n;
}
var hi = !1;
if (Yr)
  try {
    var mi = {};
    Object.defineProperty(mi, 'passive', {
      get: function () {
        hi = !0;
      },
    }),
      window.addEventListener('test', mi, mi),
      window.removeEventListener('test', mi, mi);
  } catch (Ya) {
    hi = !1;
  }
function vi(e, t, n, r, a, i, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gi = !1,
  bi = null,
  yi = !1,
  wi = null,
  ki = {
    onError: function (e) {
      (gi = !0), (bi = e);
    },
  };
function xi(e, t, n, r, a, i, o, s, l) {
  (gi = !1), (bi = null), vi.apply(ki, arguments);
}
function Ei(e) {
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
function Si(e) {
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
function Ci(e) {
  if (Ei(e) !== e) throw Error(Ur(188));
}
function Oi(e) {
  return null !==
    (e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = Ei(e))) throw Error(Ur(188));
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
            if (i === n) return Ci(a), e;
            if (i === r) return Ci(a), t;
            i = i.sibling;
          }
          throw Error(Ur(188));
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
            if (!o) throw Error(Ur(189));
          }
        }
        if (n.alternate !== r) throw Error(Ur(190));
      }
      if (3 !== n.tag) throw Error(Ur(188));
      return n.stateNode.current === n ? e : t;
    })(e))
    ? _i(e)
    : null;
}
function _i(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
    var t = _i(e);
    if (null !== t) return t;
    e = e.sibling;
  }
  return null;
}
var Pi = Fr.unstable_scheduleCallback,
  Ni = Fr.unstable_cancelCallback,
  Ti = Fr.unstable_shouldYield,
  Di = Fr.unstable_requestPaint,
  Mi = Fr.unstable_now,
  Li = Fr.unstable_getCurrentPriorityLevel,
  Ai = Fr.unstable_ImmediatePriority,
  zi = Fr.unstable_UserBlockingPriority,
  Ri = Fr.unstable_NormalPriority,
  ji = Fr.unstable_LowPriority,
  Ii = Fr.unstable_IdlePriority,
  Fi = null,
  Ui = null;
var Hi = Math.clz32
    ? Math.clz32
    : function (e) {
        return (e >>>= 0), 0 === e ? 32 : (31 - ((Bi(e) / Vi) | 0)) | 0;
      },
  Bi = Math.log,
  Vi = Math.LN2;
var Wi = 64,
  Yi = 4194304;
function $i(e) {
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
function Gi(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    o = 268435455 & n;
  if (0 !== o) {
    var s = o & ~a;
    0 !== s ? (r = $i(s)) : 0 !== (i &= o) && (r = $i(i));
  } else 0 !== (o = n & ~a) ? (r = $i(o)) : 0 !== i && (r = $i(i));
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
      (a = 1 << (n = 31 - Hi(t))), (r |= e[n]), (t &= ~a);
  return r;
}
function Xi(e, t) {
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
function Qi(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function Ki() {
  var e = Wi;
  return 0 == (4194240 & (Wi <<= 1)) && (Wi = 64), e;
}
function qi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ji(e, t, n) {
  (e.pendingLanes |= t),
    536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    ((e = e.eventTimes)[(t = 31 - Hi(t))] = n);
}
function Zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Hi(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var eo = 0;
function to(e) {
  return 1 < (e &= -e)
    ? 4 < e
      ? 0 != (268435455 & e)
        ? 16
        : 536870912
      : 4
    : 1;
}
var no,
  ro,
  ao,
  io,
  oo,
  so = !1,
  lo = [],
  uo = null,
  co = null,
  fo = null,
  po = new Map(),
  ho = new Map(),
  mo = [],
  vo =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function go(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      uo = null;
      break;
    case 'dragenter':
    case 'dragleave':
      co = null;
      break;
    case 'mouseover':
    case 'mouseout':
      fo = null;
      break;
    case 'pointerover':
    case 'pointerout':
      po.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ho.delete(t.pointerId);
  }
}
function bo(e, t, n, r, a, i) {
  return null === e || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [a],
      }),
      null !== t && null !== (t = eu(t)) && ro(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function yo(e) {
  var t = Zl(e.target);
  if (null !== t) {
    var n = Ei(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = Si(n)))
          return (
            (e.blockedOn = t),
            void oo(e.priority, function () {
              ao(n);
            })
          );
      } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function wo(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = eu(n)) && ro(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (ti = r), n.target.dispatchEvent(r), (ti = null), t.shift();
  }
  return !0;
}
function ko(e, t, n) {
  wo(e) && n.delete(t);
}
function xo() {
  (so = !1),
    null !== uo && wo(uo) && (uo = null),
    null !== co && wo(co) && (co = null),
    null !== fo && wo(fo) && (fo = null),
    po.forEach(ko),
    ho.forEach(ko);
}
function Eo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    so ||
      ((so = !0),
      Fr.unstable_scheduleCallback(Fr.unstable_NormalPriority, xo)));
}
function So(e) {
  function t(t) {
    return Eo(t, e);
  }
  if (0 < lo.length) {
    Eo(lo[0], e);
    for (var n = 1; n < lo.length; n++) {
      var r = lo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== uo && Eo(uo, e),
      null !== co && Eo(co, e),
      null !== fo && Eo(fo, e),
      po.forEach(t),
      ho.forEach(t),
      n = 0;
    n < mo.length;
    n++
  )
    (r = mo[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < mo.length && null === (n = mo[0]).blockedOn; )
    yo(n), null === n.blockedOn && mo.shift();
}
var Co = ta.ReactCurrentBatchConfig,
  Oo = !0;
function _o(e, t, n, r) {
  var a = eo,
    i = Co.transition;
  Co.transition = null;
  try {
    (eo = 1), No(e, t, n, r);
  } finally {
    (eo = a), (Co.transition = i);
  }
}
function Po(e, t, n, r) {
  var a = eo,
    i = Co.transition;
  Co.transition = null;
  try {
    (eo = 4), No(e, t, n, r);
  } finally {
    (eo = a), (Co.transition = i);
  }
}
function No(e, t, n, r) {
  if (Oo) {
    var a = Do(e, t, n, r);
    if (null === a) Cl(e, t, r, To, n), go(e, r);
    else if (
      (function (e, t, n, r, a) {
        switch (t) {
          case 'focusin':
            return (uo = bo(uo, e, t, n, r, a)), !0;
          case 'dragenter':
            return (co = bo(co, e, t, n, r, a)), !0;
          case 'mouseover':
            return (fo = bo(fo, e, t, n, r, a)), !0;
          case 'pointerover':
            var i = a.pointerId;
            return po.set(i, bo(po.get(i) || null, e, t, n, r, a)), !0;
          case 'gotpointercapture':
            return (
              (i = a.pointerId),
              ho.set(i, bo(ho.get(i) || null, e, t, n, r, a)),
              !0
            );
        }
        return !1;
      })(a, e, t, n, r)
    )
      r.stopPropagation();
    else if ((go(e, r), 4 & t && -1 < vo.indexOf(e))) {
      for (; null !== a; ) {
        var i = eu(a);
        if (
          (null !== i && no(i),
          null === (i = Do(e, t, n, r)) && Cl(e, t, r, To, n),
          i === a)
        )
          break;
        a = i;
      }
      null !== a && r.stopPropagation();
    } else Cl(e, t, r, null, n);
  }
}
var To = null;
function Do(e, t, n, r) {
  if (((To = null), null !== (e = Zl((e = ni(r))))))
    if (null === (t = Ei(e))) e = null;
    else if (13 === (n = t.tag)) {
      if (null !== (e = Si(t))) return e;
      e = null;
    } else if (3 === n) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return 3 === t.tag ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (To = e), null;
}
function Mo(e) {
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
      switch (Li()) {
        case Ai:
          return 1;
        case zi:
          return 4;
        case Ri:
        case ji:
          return 16;
        case Ii:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lo = null,
  Ao = null,
  zo = null;
function Ro() {
  if (zo) return zo;
  var e,
    t,
    n = Ao,
    r = n.length,
    a = 'value' in Lo ? Lo.value : Lo.textContent,
    i = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
  return (zo = a.slice(e, 1 < t ? 1 - t : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function Io() {
  return !0;
}
function Fo() {
  return !1;
}
function Uo(e) {
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
        ? Io
        : Fo),
      (this.isPropagationStopped = Fo),
      this
    );
  }
  return (
    ba(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Io));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Io));
      },
      persist: function () {},
      isPersistent: Io,
    }),
    t
  );
}
var Ho,
  Bo,
  Vo,
  Wo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yo = Uo(Wo),
  $o = ba({}, Wo, { view: 0, detail: 0 }),
  Go = Uo($o),
  Xo = ba({}, $o, {
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
    getModifierState: os,
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
        : (e !== Vo &&
            (Vo && 'mousemove' === e.type
              ? ((Ho = e.screenX - Vo.screenX), (Bo = e.screenY - Vo.screenY))
              : (Bo = Ho = 0),
            (Vo = e)),
          Ho);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Bo;
    },
  }),
  Qo = Uo(Xo),
  Ko = Uo(ba({}, Xo, { dataTransfer: 0 })),
  qo = Uo(ba({}, $o, { relatedTarget: 0 })),
  Jo = Uo(ba({}, Wo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  Zo = ba({}, Wo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  es = Uo(Zo),
  ts = Uo(ba({}, Wo, { data: 0 })),
  ns = {
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
  rs = {
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
  as = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function is(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = as[e]) && !!t[e];
}
function os() {
  return is;
}
var ss = ba({}, $o, {
    key: function (e) {
      if (e.key) {
        var t = ns[e.key] || e.key;
        if ('Unidentified' !== t) return t;
      }
      return 'keypress' === e.type
        ? 13 === (e = jo(e))
          ? 'Enter'
          : String.fromCharCode(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? rs[e.keyCode] || 'Unidentified'
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
    getModifierState: os,
    charCode: function (e) {
      return 'keypress' === e.type ? jo(e) : 0;
    },
    keyCode: function (e) {
      return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return 'keypress' === e.type
        ? jo(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? e.keyCode
        : 0;
    },
  }),
  ls = Uo(ss),
  us = Uo(
    ba({}, Xo, {
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
  cs = Uo(
    ba({}, $o, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: os,
    }),
  ),
  fs = Uo(ba({}, Wo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  ds = ba({}, Xo, {
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
  ps = Uo(ds),
  hs = [9, 13, 27, 32],
  ms = Yr && 'CompositionEvent' in window,
  vs = null;
Yr && 'documentMode' in document && (vs = document.documentMode);
var gs = Yr && 'TextEvent' in window && !vs,
  bs = Yr && (!ms || (vs && 8 < vs && 11 >= vs)),
  ys = String.fromCharCode(32),
  ws = !1;
function ks(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== hs.indexOf(t.keyCode);
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
function xs(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Es = !1;
var Ss = {
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
function Cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!Ss[e.type] : 'textarea' === t;
}
function Os(e, t, n, r) {
  si(r),
    0 < (t = _l(t, 'onChange')).length &&
      ((n = new Yo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _s = null,
  Ps = null;
function Ns(e) {
  yl(e, 0);
}
function Ts(e) {
  if (Pa(tu(e))) return e;
}
function Ds(e, t) {
  if ('change' === e) return t;
}
var Ms = !1;
if (Yr) {
  var Ls;
  if (Yr) {
    var As = 'oninput' in document;
    if (!As) {
      var zs = document.createElement('div');
      zs.setAttribute('oninput', 'return;'),
        (As = 'function' == typeof zs.oninput);
    }
    Ls = As;
  } else Ls = !1;
  Ms = Ls && (!document.documentMode || 9 < document.documentMode);
}
function Rs() {
  _s && (_s.detachEvent('onpropertychange', js), (Ps = _s = null));
}
function js(e) {
  if ('value' === e.propertyName && Ts(Ps)) {
    var t = [];
    Os(t, Ps, e, ni(e)), di(Ns, t);
  }
}
function Is(e, t, n) {
  'focusin' === e
    ? (Rs(), (Ps = n), (_s = t).attachEvent('onpropertychange', js))
    : 'focusout' === e && Rs();
}
function Fs(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
    return Ts(Ps);
}
function Us(e, t) {
  if ('click' === e) return Ts(t);
}
function Hs(e, t) {
  if ('input' === e || 'change' === e) return Ts(t);
}
var Bs =
  'function' == typeof Object.is
    ? Object.is
    : function (e, t) {
        return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
      };
function Vs(e, t) {
  if (Bs(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!$r.call(t, a) || !Bs(e[a], t[a])) return !1;
  }
  return !0;
}
function Ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n,
    r = Ws(e);
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
    r = Ws(r);
  }
}
function $s(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? $s(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Gs() {
  for (var e = window, t = Na(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = 'string' == typeof t.contentWindow.location.href;
    } catch (r) {
      n = !1;
    }
    if (!n) break;
    t = Na((e = t.contentWindow).document);
  }
  return t;
}
function Xs(e) {
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
function Qs(e) {
  var t = Gs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $s(n.ownerDocument.documentElement, n)
  ) {
    if (null !== r && Xs(n))
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
          (a = Ys(n, i));
        var o = Ys(n, r);
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
var Ks = Yr && 'documentMode' in document && 11 >= document.documentMode,
  qs = null,
  Js = null,
  Zs = null,
  el = !1;
function tl(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  el ||
    null == qs ||
    qs !== Na(r) ||
    ('selectionStart' in (r = qs) && Xs(r)
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
    (Zs && Vs(Zs, r)) ||
      ((Zs = r),
      0 < (r = _l(Js, 'onSelect')).length &&
        ((t = new Yo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qs))));
}
function nl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var rl = {
    animationend: nl('Animation', 'AnimationEnd'),
    animationiteration: nl('Animation', 'AnimationIteration'),
    animationstart: nl('Animation', 'AnimationStart'),
    transitionend: nl('Transition', 'TransitionEnd'),
  },
  al = {},
  il = {};
function ol(e) {
  if (al[e]) return al[e];
  if (!rl[e]) return e;
  var t,
    n = rl[e];
  for (t in n) if (n.hasOwnProperty(t) && t in il) return (al[e] = n[t]);
  return e;
}
Yr &&
  ((il = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete rl.animationend.animation,
    delete rl.animationiteration.animation,
    delete rl.animationstart.animation),
  'TransitionEvent' in window || delete rl.transitionend.transition);
var sl = ol('animationend'),
  ll = ol('animationiteration'),
  ul = ol('animationstart'),
  cl = ol('transitionend'),
  fl = new Map(),
  dl =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function pl(e, t) {
  fl.set(e, t), Vr(t, [e]);
}
for (var hl = 0; hl < dl.length; hl++) {
  var ml = dl[hl];
  pl(ml.toLowerCase(), 'on' + (ml[0].toUpperCase() + ml.slice(1)));
}
pl(sl, 'onAnimationEnd'),
  pl(ll, 'onAnimationIteration'),
  pl(ul, 'onAnimationStart'),
  pl('dblclick', 'onDoubleClick'),
  pl('focusin', 'onFocus'),
  pl('focusout', 'onBlur'),
  pl(cl, 'onTransitionEnd'),
  Wr('onMouseEnter', ['mouseout', 'mouseover']),
  Wr('onMouseLeave', ['mouseout', 'mouseover']),
  Wr('onPointerEnter', ['pointerout', 'pointerover']),
  Wr('onPointerLeave', ['pointerout', 'pointerover']),
  Vr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  Vr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  Vr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  Vr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Vr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Vr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var vl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  gl = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vl));
function bl(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n),
    (function (e, t, n, r, a, i, o, s, l) {
      if ((xi.apply(this, arguments), gi)) {
        if (!gi) throw Error(Ur(198));
        var u = bi;
        (gi = !1), (bi = null), yi || ((yi = !0), (wi = u));
      }
    })(r, t, void 0, e),
    (e.currentTarget = null);
}
function yl(e, t) {
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
          bl(a, s, u), (i = l);
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
          bl(a, s, u), (i = l);
        }
    }
  }
  if (yi) throw ((e = wi), (yi = !1), (wi = null), e);
}
function wl(e, t) {
  var n = t[Kl];
  void 0 === n && (n = t[Kl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Sl(t, e, 2, !1), n.add(r));
}
function kl(e, t, n) {
  var r = 0;
  t && (r |= 4), Sl(n, e, r, t);
}
var xl = '_reactListening' + Math.random().toString(36).slice(2);
function El(e) {
  if (!e[xl]) {
    (e[xl] = !0),
      Hr.forEach(function (t) {
        'selectionchange' !== t && (gl.has(t) || kl(t, !1, e), kl(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[xl] || ((t[xl] = !0), kl('selectionchange', !1, t));
  }
}
function Sl(e, t, n, r) {
  switch (Mo(t)) {
    case 1:
      var a = _o;
      break;
    case 4:
      a = Po;
      break;
    default:
      a = No;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !hi ||
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
function Cl(e, t, n, r, a) {
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
          if (null === (o = Zl(s))) return;
          if (5 === (l = o.tag) || 6 === l) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  di(function () {
    var r = i,
      a = ni(n),
      o = [];
    e: {
      var s = fl.get(e);
      if (void 0 !== s) {
        var l = Yo,
          u = e;
        switch (e) {
          case 'keypress':
            if (0 === jo(n)) break e;
          case 'keydown':
          case 'keyup':
            l = ls;
            break;
          case 'focusin':
            (u = 'focus'), (l = qo);
            break;
          case 'focusout':
            (u = 'blur'), (l = qo);
            break;
          case 'beforeblur':
          case 'afterblur':
            l = qo;
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
            l = Qo;
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
            l = cs;
            break;
          case sl:
          case ll:
          case ul:
            l = Jo;
            break;
          case cl:
            l = fs;
            break;
          case 'scroll':
            l = Go;
            break;
          case 'wheel':
            l = ps;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            l = es;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            l = us;
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
              null !== d && null != (m = pi(h, d)) && c.push(Ol(h, m, p))),
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
          n === ti ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!Zl(u) && !u[Ql])) &&
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
                (u = (u = n.relatedTarget || n.toElement) ? Zl(u) : null) &&
                (u !== (f = Ei(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                (u = null))
            : ((l = null), (u = r)),
          l !== u))
      ) {
        if (
          ((c = Qo),
          (m = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = us),
            (m = 'onPointerLeave'),
            (d = 'onPointerEnter'),
            (h = 'pointer')),
          (f = null == l ? s : tu(l)),
          (p = null == u ? s : tu(u)),
          ((s = new c(m, h + 'leave', l, n, a)).target = f),
          (s.relatedTarget = p),
          (m = null),
          Zl(a) === r &&
            (((c = new c(d, h + 'enter', u, n, a)).target = p),
            (c.relatedTarget = f),
            (m = c)),
          (f = m),
          l && u)
        )
          e: {
            for (d = u, h = 0, p = c = l; p; p = Pl(p)) h++;
            for (p = 0, m = d; m; m = Pl(m)) p++;
            for (; 0 < h - p; ) (c = Pl(c)), h--;
            for (; 0 < p - h; ) (d = Pl(d)), p--;
            for (; h--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e;
              (c = Pl(c)), (d = Pl(d));
            }
            c = null;
          }
        else c = null;
        null !== l && Nl(o, s, l, c, !1),
          null !== u && null !== f && Nl(o, f, u, c, !0);
      }
      if (
        'select' ===
          (l = (s = r ? tu(r) : window).nodeName && s.nodeName.toLowerCase()) ||
        ('input' === l && 'file' === s.type)
      )
        var v = Ds;
      else if (Cs(s))
        if (Ms) v = Hs;
        else {
          v = Fs;
          var g = Is;
        }
      else
        (l = s.nodeName) &&
          'input' === l.toLowerCase() &&
          ('checkbox' === s.type || 'radio' === s.type) &&
          (v = Us);
      switch (
        (v && (v = v(e, r))
          ? Os(o, v, n, a)
          : (g && g(e, s, r),
            'focusout' === e &&
              (g = s._wrapperState) &&
              g.controlled &&
              'number' === s.type &&
              za(s, 'number', s.value)),
        (g = r ? tu(r) : window),
        e)
      ) {
        case 'focusin':
          (Cs(g) || 'true' === g.contentEditable) &&
            ((qs = g), (Js = r), (Zs = null));
          break;
        case 'focusout':
          Zs = Js = qs = null;
          break;
        case 'mousedown':
          el = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (el = !1), tl(o, n, a);
          break;
        case 'selectionchange':
          if (Ks) break;
        case 'keydown':
        case 'keyup':
          tl(o, n, a);
      }
      var b;
      if (ms)
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
        Es
          ? ks(e, n) && (y = 'onCompositionEnd')
          : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
      y &&
        (bs &&
          'ko' !== n.locale &&
          (Es || 'onCompositionStart' !== y
            ? 'onCompositionEnd' === y && Es && (b = Ro())
            : ((Ao = 'value' in (Lo = a) ? Lo.value : Lo.textContent),
              (Es = !0))),
        0 < (g = _l(r, y)).length &&
          ((y = new ts(y, e, null, n, a)),
          o.push({ event: y, listeners: g }),
          b ? (y.data = b) : null !== (b = xs(n)) && (y.data = b))),
        (b = gs
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return xs(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((ws = !0), ys);
                case 'textInput':
                  return (e = t.data) === ys && ws ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (Es)
                return 'compositionend' === e || (!ms && ks(e, t))
                  ? ((e = Ro()), (zo = Ao = Lo = null), (Es = !1), e)
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
                  return bs && 'ko' !== t.locale ? null : t.data;
              }
            })(e, n)) &&
          0 < (r = _l(r, 'onBeforeInput')).length &&
          ((a = new ts('onBeforeInput', 'beforeinput', null, n, a)),
          o.push({ event: a, listeners: r }),
          (a.data = b));
    }
    yl(o, t);
  });
}
function Ol(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + 'Capture', r = []; null !== e; ) {
    var a = e,
      i = a.stateNode;
    5 === a.tag &&
      null !== i &&
      ((a = i),
      null != (i = pi(e, n)) && r.unshift(Ol(e, i, a)),
      null != (i = pi(e, t)) && r.push(Ol(e, i, a))),
      (e = e.return);
  }
  return r;
}
function Pl(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Nl(e, t, n, r, a) {
  for (var i = t._reactName, o = []; null !== n && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (null !== l && l === r) break;
    5 === s.tag &&
      null !== u &&
      ((s = u),
      a
        ? null != (l = pi(n, i)) && o.unshift(Ol(n, l, s))
        : a || (null != (l = pi(n, i)) && o.push(Ol(n, l, s)))),
      (n = n.return);
  }
  0 !== o.length && e.push({ event: t, listeners: o });
}
var Tl = /\r\n?/g,
  Dl = /\u0000|\uFFFD/g;
function Ml(e) {
  return ('string' == typeof e ? e : '' + e).replace(Tl, '\n').replace(Dl, '');
}
function Ll(e, t, n) {
  if (((t = Ml(t)), Ml(e) !== t && n)) throw Error(Ur(425));
}
function Al() {}
var zl = null,
  Rl = null;
function jl(e, t) {
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
var Il = 'function' == typeof setTimeout ? setTimeout : void 0,
  Fl = 'function' == typeof clearTimeout ? clearTimeout : void 0,
  Ul = 'function' == typeof Promise ? Promise : void 0,
  Hl =
    'function' == typeof queueMicrotask
      ? queueMicrotask
      : void 0 !== Ul
      ? function (e) {
          return Ul.resolve(null).then(e).catch(Bl);
        }
      : Il;
function Bl(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && 8 === a.nodeType))
      if ('/$' === (n = a.data)) {
        if (0 === r) return e.removeChild(a), void So(t);
        r--;
      } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
    n = a;
  } while (n);
  So(t);
}
function Wl(e) {
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
function Yl(e) {
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
var $l = Math.random().toString(36).slice(2),
  Gl = '__reactFiber$' + $l,
  Xl = '__reactProps$' + $l,
  Ql = '__reactContainer$' + $l,
  Kl = '__reactEvents$' + $l,
  ql = '__reactListeners$' + $l,
  Jl = '__reactHandles$' + $l;
function Zl(e) {
  var t = e[Gl];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ql] || n[Gl])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = Yl(e); null !== e; ) {
          if ((n = e[Gl])) return n;
          e = Yl(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function eu(e) {
  return !(e = e[Gl] || e[Ql]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function tu(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(Ur(33));
}
function nu(e) {
  return e[Xl] || null;
}
var ru = [],
  au = -1;
function iu(e) {
  return { current: e };
}
function ou(e) {
  0 > au || ((e.current = ru[au]), (ru[au] = null), au--);
}
function su(e, t) {
  au++, (ru[au] = e.current), (e.current = t);
}
var lu = {},
  uu = iu(lu),
  cu = iu(!1),
  fu = lu;
function du(e, t) {
  var n = e.type.contextTypes;
  if (!n) return lu;
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
function pu(e) {
  return null != (e = e.childContextTypes);
}
function hu() {
  ou(cu), ou(uu);
}
function mu(e, t, n) {
  if (uu.current !== lu) throw Error(Ur(168));
  su(uu, t), su(cu, n);
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), 'function' != typeof r.getChildContext))
    return n;
  for (var a in (r = r.getChildContext()))
    if (!(a in t)) throw Error(Ur(108, Sa(e) || 'Unknown', a));
  return ba({}, n, r);
}
function gu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lu),
    (fu = uu.current),
    su(uu, e),
    su(cu, cu.current),
    !0
  );
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Ur(169));
  n
    ? ((e = vu(e, t, fu)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ou(cu),
      ou(uu),
      su(uu, e))
    : ou(cu),
    su(cu, n);
}
var yu = null,
  wu = !1,
  ku = !1;
function xu(e) {
  null === yu ? (yu = [e]) : yu.push(e);
}
function Eu() {
  if (!ku && null !== yu) {
    ku = !0;
    var e = 0,
      t = eo;
    try {
      var n = yu;
      for (eo = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (yu = null), (wu = !1);
    } catch (ry) {
      throw (null !== yu && (yu = yu.slice(e + 1)), Pi(Ai, Eu), ry);
    } finally {
      (eo = t), (ku = !1);
    }
  }
  return null;
}
var Su = [],
  Cu = 0,
  Ou = null,
  _u = 0,
  Pu = [],
  Nu = 0,
  Tu = null,
  Du = 1,
  Mu = '';
function Lu(e, t) {
  (Su[Cu++] = _u), (Su[Cu++] = Ou), (Ou = e), (_u = t);
}
function Au(e, t, n) {
  (Pu[Nu++] = Du), (Pu[Nu++] = Mu), (Pu[Nu++] = Tu), (Tu = e);
  var r = Du;
  e = Mu;
  var a = 32 - Hi(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var i = 32 - Hi(t) + a;
  if (30 < i) {
    var o = a - (a % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Du = (1 << (32 - Hi(t) + a)) | (n << a) | r),
      (Mu = i + e);
  } else (Du = (1 << i) | (n << a) | r), (Mu = e);
}
function zu(e) {
  null !== e.return && (Lu(e, 1), Au(e, 1, 0));
}
function Ru(e) {
  for (; e === Ou; )
    (Ou = Su[--Cu]), (Su[Cu] = null), (_u = Su[--Cu]), (Su[Cu] = null);
  for (; e === Tu; )
    (Tu = Pu[--Nu]),
      (Pu[Nu] = null),
      (Mu = Pu[--Nu]),
      (Pu[Nu] = null),
      (Du = Pu[--Nu]),
      (Pu[Nu] = null);
}
var ju = null,
  Iu = null,
  Fu = !1,
  Uu = null;
function Hu(e, t) {
  var n = ph(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    null === (t = e.deletions)
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function Bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), (ju = e), (Iu = Wl(t.firstChild)), !0)
      );
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), (ju = e), (Iu = null), !0)
      );
    case 13:
      return (
        null !== (t = 8 !== t.nodeType ? null : t) &&
        ((n = null !== Tu ? { id: Du, overflow: Mu } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = ph(18, null, null, 0)).stateNode = t),
        (n.return = e),
        (e.child = n),
        (ju = e),
        (Iu = null),
        !0)
      );
    default:
      return !1;
  }
}
function Vu(e) {
  return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Wu(e) {
  if (Fu) {
    var t = Iu;
    if (t) {
      var n = t;
      if (!Bu(e, t)) {
        if (Vu(e)) throw Error(Ur(418));
        t = Wl(n.nextSibling);
        var r = ju;
        t && Bu(e, t)
          ? Hu(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Fu = !1), (ju = e));
      }
    } else {
      if (Vu(e)) throw Error(Ur(418));
      (e.flags = (-4097 & e.flags) | 2), (Fu = !1), (ju = e);
    }
  }
}
function Yu(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  ju = e;
}
function $u(e) {
  if (e !== ju) return !1;
  if (!Fu) return Yu(e), (Fu = !0), !1;
  var t;
  if (
    ((t = 3 !== e.tag) &&
      !(t = 5 !== e.tag) &&
      (t =
        'head' !== (t = e.type) &&
        'body' !== t &&
        !jl(e.type, e.memoizedProps)),
    t && (t = Iu))
  ) {
    if (Vu(e)) throw (Gu(), Error(Ur(418)));
    for (; t; ) Hu(e, t), (t = Wl(t.nextSibling));
  }
  if ((Yu(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(Ur(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('/$' === n) {
            if (0 === t) {
              Iu = Wl(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
        }
        e = e.nextSibling;
      }
      Iu = null;
    }
  } else Iu = ju ? Wl(e.stateNode.nextSibling) : null;
  return !0;
}
function Gu() {
  for (var e = Iu; e; ) e = Wl(e.nextSibling);
}
function Xu() {
  (Iu = ju = null), (Fu = !1);
}
function Qu(e) {
  null === Uu ? (Uu = [e]) : Uu.push(e);
}
var Ku = ta.ReactCurrentBatchConfig;
function qu(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ba({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ju = iu(null),
  Zu = null,
  ec = null,
  tc = null;
function nc() {
  tc = ec = Zu = null;
}
function rc(e) {
  var t = Ju.current;
  ou(Ju), (e._currentValue = t);
}
function ac(e, t, n) {
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
function ic(e, t) {
  (Zu = e),
    (tc = ec = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (td = !0), (e.firstContext = null));
}
function oc(e) {
  var t = e._currentValue;
  if (tc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), null === ec)) {
      if (null === Zu) throw Error(Ur(308));
      (ec = e), (Zu.dependencies = { lanes: 0, firstContext: e });
    } else ec = ec.next = e;
  return t;
}
var sc = null;
function lc(e) {
  null === sc ? (sc = [e]) : sc.push(e);
}
function uc(e, t, n, r) {
  var a = t.interleaved;
  return (
    null === a ? ((n.next = n), lc(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    cc(e, r)
  );
}
function cc(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var fc = !1;
function dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pc(e, t) {
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
function hc(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mc(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 0 != (2 & cp))) {
    var a = r.pending;
    return (
      null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      cc(e, n)
    );
  }
  return (
    null === (a = r.interleaved)
      ? ((t.next = t), lc(r))
      : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    cc(e, n)
  );
}
function vc(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Zi(e, n);
  }
}
function gc(e, t) {
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
function bc(e, t, n, r) {
  var a = e.updateQueue;
  fc = !1;
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
              f = ba({}, f, d);
              break e;
            case 2:
              fc = !0;
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
    (bp |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (null !== a) {
        if (((r.callback = null), (r = n), 'function' != typeof a))
          throw Error(Ur(191, a));
        a.call(r);
      }
    }
}
var wc = new Ir.Component().refs;
function kc(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : ba({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var xc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Ei(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rp(),
      a = jp(e),
      i = hc(r, a);
    (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = mc(e, i, a)) && (Ip(t, e, a, r), vc(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Rp(),
      a = jp(e),
      i = hc(r, a);
    (i.tag = 1),
      (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = mc(e, i, a)) && (Ip(t, e, a, r), vc(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Rp(),
      r = jp(e),
      a = hc(n, r);
    (a.tag = 2),
      null != t && (a.callback = t),
      null !== (t = mc(e, a, r)) && (Ip(t, e, r, n), vc(t, e, r));
  },
};
function Ec(e, t, n, r, a, i, o) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, i, o)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Vs(n, r) ||
        !Vs(a, i);
}
function Sc(e, t, n) {
  var r = !1,
    a = lu,
    i = t.contextType;
  return (
    'object' == typeof i && null !== i
      ? (i = oc(i))
      : ((a = pu(t) ? fu : uu.current),
        (i = (r = null != (r = t.contextTypes)) ? du(e, a) : lu)),
    (t = new t(n, i)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = xc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cc(e, t, n, r) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xc.enqueueReplaceState(t, t.state, null);
}
function Oc(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = wc), dc(e);
  var i = t.contextType;
  'object' == typeof i && null !== i
    ? (a.context = oc(i))
    : ((i = pu(t) ? fu : uu.current), (a.context = du(e, i))),
    (a.state = e.memoizedState),
    'function' == typeof (i = t.getDerivedStateFromProps) &&
      (kc(e, t, i, n), (a.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof a.getSnapshotBeforeUpdate ||
      ('function' != typeof a.UNSAFE_componentWillMount &&
        'function' != typeof a.componentWillMount) ||
      ((t = a.state),
      'function' == typeof a.componentWillMount && a.componentWillMount(),
      'function' == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && xc.enqueueReplaceState(a, a.state, null),
      bc(e, n, a, r),
      (a.state = e.memoizedState)),
    'function' == typeof a.componentDidMount && (e.flags |= 4194308);
}
function _c(e, t, n) {
  if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(Ur(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Ur(147, e));
      var a = r,
        i = '' + e;
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === i
        ? t.ref
        : (((t = function (e) {
            var t = a.refs;
            t === wc && (t = a.refs = {}),
              null === e ? delete t[i] : (t[i] = e);
          })._stringRef = i),
          t);
    }
    if ('string' != typeof e) throw Error(Ur(284));
    if (!n._owner) throw Error(Ur(290, e));
  }
  return e;
}
function Pc(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Ur(
        31,
        '[object Object]' === e
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Nc(e) {
  return (0, e._init)(e._payload);
}
function Tc(e) {
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
    return ((e = mh(e, t)).index = 0), (e.sibling = null), e;
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
      ? (((t = yh(n, e.mode, r)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function l(e, t, n, r) {
    var i = n.type;
    return i === aa
      ? c(e, t, n.props.children, r, n.key)
      : null !== t &&
        (t.elementType === i ||
          ('object' == typeof i &&
            null !== i &&
            i.$$typeof === pa &&
            Nc(i) === t.type))
      ? (((r = a(t, n.props)).ref = _c(e, t, n)), (r.return = e), r)
      : (((r = vh(n.type, n.key, n.props, null, e.mode, r)).ref = _c(e, t, n)),
        (r.return = e),
        r);
  }
  function u(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = wh(n, e.mode, r)).return = e), t)
      : (((t = a(t, n.children || [])).return = e), t);
  }
  function c(e, t, n, r, i) {
    return null === t || 7 !== t.tag
      ? (((t = gh(n, e.mode, r, i)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function f(e, t, n) {
    if (('string' == typeof t && '' !== t) || 'number' == typeof t)
      return ((t = yh('' + t, e.mode, n)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case na:
          return (
            ((n = vh(t.type, t.key, t.props, null, e.mode, n)).ref = _c(
              e,
              null,
              t,
            )),
            (n.return = e),
            n
          );
        case ra:
          return ((t = wh(t, e.mode, n)).return = e), t;
        case pa:
          return f(e, (0, t._init)(t._payload), n);
      }
      if (Ra(t) || va(t)) return ((t = gh(t, e.mode, n, null)).return = e), t;
      Pc(e, t);
    }
    return null;
  }
  function d(e, t, n, r) {
    var a = null !== t ? t.key : null;
    if (('string' == typeof n && '' !== n) || 'number' == typeof n)
      return null !== a ? null : s(e, t, '' + n, r);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case na:
          return n.key === a ? l(e, t, n, r) : null;
        case ra:
          return n.key === a ? u(e, t, n, r) : null;
        case pa:
          return d(e, t, (a = n._init)(n._payload), r);
      }
      if (Ra(n) || va(n)) return null !== a ? null : c(e, t, n, r, null);
      Pc(e, n);
    }
    return null;
  }
  function p(e, t, n, r, a) {
    if (('string' == typeof r && '' !== r) || 'number' == typeof r)
      return s(t, (e = e.get(n) || null), '' + r, a);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case na:
          return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case ra:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case pa:
          return p(e, t, n, (0, r._init)(r._payload), a);
      }
      if (Ra(r) || va(r)) return c(t, (e = e.get(n) || null), r, a, null);
      Pc(t, r);
    }
    return null;
  }
  return function s(l, u, c, h) {
    if (
      ('object' == typeof c &&
        null !== c &&
        c.type === aa &&
        null === c.key &&
        (c = c.props.children),
      'object' == typeof c && null !== c)
    ) {
      switch (c.$$typeof) {
        case na:
          e: {
            for (var m = c.key, v = u; null !== v; ) {
              if (v.key === m) {
                if ((m = c.type) === aa) {
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
                    m.$$typeof === pa &&
                    Nc(m) === v.type)
                ) {
                  n(l, v.sibling),
                    ((u = a(v, c.props)).ref = _c(l, v, c)),
                    (u.return = l),
                    (l = u);
                  break e;
                }
                n(l, v);
                break;
              }
              t(l, v), (v = v.sibling);
            }
            c.type === aa
              ? (((u = gh(c.props.children, l.mode, h, c.key)).return = l),
                (l = u))
              : (((h = vh(c.type, c.key, c.props, null, l.mode, h)).ref = _c(
                  l,
                  u,
                  c,
                )),
                (h.return = l),
                (l = h));
          }
          return o(l);
        case ra:
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
            ((u = wh(c, l.mode, h)).return = l), (l = u);
          }
          return o(l);
        case pa:
          return s(l, u, (v = c._init)(c._payload), h);
      }
      if (Ra(c))
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
          if (m === s.length) return n(a, h), Fu && Lu(a, m), u;
          if (null === h) {
            for (; m < s.length; m++)
              null !== (h = f(a, s[m], l)) &&
                ((o = i(h, o, m)),
                null === c ? (u = h) : (c.sibling = h),
                (c = h));
            return Fu && Lu(a, m), u;
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
            Fu && Lu(a, m),
            u
          );
        })(l, u, c, h);
      if (va(c))
        return (function (a, o, s, l) {
          var u = va(s);
          if ('function' != typeof u) throw Error(Ur(150));
          if (null == (s = u.call(s))) throw Error(Ur(151));
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
          if (g.done) return n(a, h), Fu && Lu(a, m), u;
          if (null === h) {
            for (; !g.done; m++, g = s.next())
              null !== (g = f(a, g.value, l)) &&
                ((o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return Fu && Lu(a, m), u;
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
            Fu && Lu(a, m),
            u
          );
        })(l, u, c, h);
      Pc(l, c);
    }
    return ('string' == typeof c && '' !== c) || 'number' == typeof c
      ? ((c = '' + c),
        null !== u && 6 === u.tag
          ? (n(l, u.sibling), ((u = a(u, c)).return = l), (l = u))
          : (n(l, u), ((u = yh(c, l.mode, h)).return = l), (l = u)),
        o(l))
      : n(l, u);
  };
}
var Dc = Tc(!0),
  Mc = Tc(!1),
  Lc = {},
  Ac = iu(Lc),
  zc = iu(Lc),
  Rc = iu(Lc);
function jc(e) {
  if (e === Lc) throw Error(Ur(174));
  return e;
}
function Ic(e, t) {
  switch ((su(Rc, t), su(zc, e), su(Ac, Lc), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Va(null, '');
      break;
    default:
      t = Va(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName),
      );
  }
  ou(Ac), su(Ac, t);
}
function Fc() {
  ou(Ac), ou(zc), ou(Rc);
}
function Uc(e) {
  jc(Rc.current);
  var t = jc(Ac.current),
    n = Va(t, e.type);
  t !== n && (su(zc, e), su(Ac, n));
}
function Hc(e) {
  zc.current === e && (ou(Ac), ou(zc));
}
var Bc = iu(0);
function Vc(e) {
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
var Wc = [];
function Yc() {
  for (var e = 0; e < Wc.length; e++)
    Wc[e]._workInProgressVersionPrimary = null;
  Wc.length = 0;
}
var $c = ta.ReactCurrentDispatcher,
  Gc = ta.ReactCurrentBatchConfig,
  Xc = 0,
  Qc = null,
  Kc = null,
  qc = null,
  Jc = !1,
  Zc = !1,
  ef = 0,
  tf = 0;
function nf() {
  throw Error(Ur(321));
}
function rf(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Bs(e[n], t[n])) return !1;
  return !0;
}
function af(e, t, n, r, a, i) {
  if (
    ((Xc = i),
    (Qc = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($c.current = null === e || null === e.memoizedState ? Bf : Vf),
    (e = n(r, a)),
    Zc)
  ) {
    i = 0;
    do {
      if (((Zc = !1), (ef = 0), 25 <= i)) throw Error(Ur(301));
      (i += 1),
        (qc = Kc = null),
        (t.updateQueue = null),
        ($c.current = Wf),
        (e = n(r, a));
    } while (Zc);
  }
  if (
    (($c.current = Hf),
    (t = null !== Kc && null !== Kc.next),
    (Xc = 0),
    (qc = Kc = Qc = null),
    (Jc = !1),
    t)
  )
    throw Error(Ur(300));
  return e;
}
function of() {
  var e = 0 !== ef;
  return (ef = 0), e;
}
function sf() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === qc ? (Qc.memoizedState = qc = e) : (qc = qc.next = e), qc;
}
function lf() {
  if (null === Kc) {
    var e = Qc.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Kc.next;
  var t = null === qc ? Qc.memoizedState : qc.next;
  if (null !== t) (qc = t), (Kc = e);
  else {
    if (null === e) throw Error(Ur(310));
    (e = {
      memoizedState: (Kc = e).memoizedState,
      baseState: Kc.baseState,
      baseQueue: Kc.baseQueue,
      queue: Kc.queue,
      next: null,
    }),
      null === qc ? (Qc.memoizedState = qc = e) : (qc = qc.next = e);
  }
  return qc;
}
function uf(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function cf(e) {
  var t = lf(),
    n = t.queue;
  if (null === n) throw Error(Ur(311));
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
      if ((Xc & c) === c)
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
          (Qc.lanes |= c),
          (bp |= c);
      }
      u = u.next;
    } while (null !== u && u !== i);
    null === l ? (o = r) : (l.next = s),
      Bs(r, t.memoizedState) || (td = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
    a = e;
    do {
      (i = a.lane), (Qc.lanes |= i), (bp |= i), (a = a.next);
    } while (a !== e);
  } else null === a && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ff(e) {
  var t = lf(),
    n = t.queue;
  if (null === n) throw Error(Ur(311));
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
    Bs(i, t.memoizedState) || (td = !0),
      (t.memoizedState = i),
      null === t.baseQueue && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function df() {}
function pf(e, t) {
  var n = Qc,
    r = lf(),
    a = t(),
    i = !Bs(r.memoizedState, a);
  if (
    (i && ((r.memoizedState = a), (td = !0)),
    (r = r.queue),
    Cf(vf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (null !== qc && 1 & qc.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      wf(9, mf.bind(null, n, r, a, t), void 0, null),
      null === fp)
    )
      throw Error(Ur(349));
    0 != (30 & Xc) || hf(n, t, a);
  }
  return a;
}
function hf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    null === (t = Qc.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (Qc.updateQueue = t),
        (t.stores = [e]))
      : null === (n = t.stores)
      ? (t.stores = [e])
      : n.push(e);
}
function mf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gf(t) && bf(e);
}
function vf(e, t, n) {
  return n(function () {
    gf(t) && bf(e);
  });
}
function gf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bs(e, n);
  } catch (r) {
    return !0;
  }
}
function bf(e) {
  var t = cc(e, 1);
  null !== t && Ip(t, e, 1, -1);
}
function yf(e) {
  var t = sf();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: uf,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jf.bind(null, Qc, e)),
    [t.memoizedState, e]
  );
}
function wf(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = Qc.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (Qc.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function kf() {
  return lf().memoizedState;
}
function xf(e, t, n, r) {
  var a = sf();
  (Qc.flags |= e),
    (a.memoizedState = wf(1 | t, n, void 0, void 0 === r ? null : r));
}
function Ef(e, t, n, r) {
  var a = lf();
  r = void 0 === r ? null : r;
  var i = void 0;
  if (null !== Kc) {
    var o = Kc.memoizedState;
    if (((i = o.destroy), null !== r && rf(r, o.deps)))
      return void (a.memoizedState = wf(t, n, i, r));
  }
  (Qc.flags |= e), (a.memoizedState = wf(1 | t, n, i, r));
}
function Sf(e, t) {
  return xf(8390656, 8, e, t);
}
function Cf(e, t) {
  return Ef(2048, 8, e, t);
}
function Of(e, t) {
  return Ef(4, 2, e, t);
}
function _f(e, t) {
  return Ef(4, 4, e, t);
}
function Pf(e, t) {
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
function Nf(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), Ef(4, 4, Pf.bind(null, t, e), n)
  );
}
function Tf() {}
function Df(e, t) {
  var n = lf();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && rf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mf(e, t) {
  var n = lf();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && rf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lf(e, t, n) {
  return 0 == (21 & Xc)
    ? (e.baseState && ((e.baseState = !1), (td = !0)), (e.memoizedState = n))
    : (Bs(n, t) || ((n = Ki()), (Qc.lanes |= n), (bp |= n), (e.baseState = !0)),
      t);
}
function Af(e, t) {
  var n = eo;
  (eo = 0 !== n && 4 > n ? n : 4), e(!0);
  var r = Gc.transition;
  Gc.transition = {};
  try {
    e(!1), t();
  } finally {
    (eo = n), (Gc.transition = r);
  }
}
function zf() {
  return lf().memoizedState;
}
function Rf(e, t, n) {
  var r = jp(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    If(e))
  )
    Ff(t, n);
  else if (null !== (n = uc(e, t, n, r))) {
    Ip(n, e, r, Rp()), Uf(n, t, r);
  }
}
function jf(e, t, n) {
  var r = jp(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (If(e)) Ff(t, a);
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
        if (((a.hasEagerState = !0), (a.eagerState = s), Bs(s, o))) {
          var l = t.interleaved;
          return (
            null === l
              ? ((a.next = a), lc(t))
              : ((a.next = l.next), (l.next = a)),
            void (t.interleaved = a)
          );
        }
      } catch (u) {}
    null !== (n = uc(e, t, a, r)) && (Ip(n, e, r, (a = Rp())), Uf(n, t, r));
  }
}
function If(e) {
  var t = e.alternate;
  return e === Qc || (null !== t && t === Qc);
}
function Ff(e, t) {
  Zc = Jc = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Uf(e, t, n) {
  if (0 != (4194240 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Zi(e, n);
  }
}
var Hf = {
    readContext: oc,
    useCallback: nf,
    useContext: nf,
    useEffect: nf,
    useImperativeHandle: nf,
    useInsertionEffect: nf,
    useLayoutEffect: nf,
    useMemo: nf,
    useReducer: nf,
    useRef: nf,
    useState: nf,
    useDebugValue: nf,
    useDeferredValue: nf,
    useTransition: nf,
    useMutableSource: nf,
    useSyncExternalStore: nf,
    useId: nf,
    unstable_isNewReconciler: !1,
  },
  Bf = {
    readContext: oc,
    useCallback: function (e, t) {
      return (sf().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: oc,
    useEffect: Sf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null),
        xf(4194308, 4, Pf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xf(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xf(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = sf();
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = sf();
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
        (e = e.dispatch = Rf.bind(null, Qc, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      return (e = { current: e }), (sf().memoizedState = e);
    },
    useState: yf,
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      return (sf().memoizedState = e);
    },
    useTransition: function () {
      var e = yf(!1),
        t = e[0];
      return (e = Af.bind(null, e[1])), (sf().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Qc,
        a = sf();
      if (Fu) {
        if (void 0 === n) throw Error(Ur(407));
        n = n();
      } else {
        if (((n = t()), null === fp)) throw Error(Ur(349));
        0 != (30 & Xc) || hf(r, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (a.queue = i),
        Sf(vf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        wf(9, mf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = sf(),
        t = fp.identifierPrefix;
      if (Fu) {
        var n = Mu;
        (t =
          ':' +
          t +
          'R' +
          (n = (Du & ~(1 << (32 - Hi(Du) - 1))).toString(32) + n)),
          0 < (n = ef++) && (t += 'H' + n.toString(32)),
          (t += ':');
      } else t = ':' + t + 'r' + (n = tf++).toString(32) + ':';
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: oc,
    useCallback: Df,
    useContext: oc,
    useEffect: Cf,
    useImperativeHandle: Nf,
    useInsertionEffect: Of,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: cf,
    useRef: kf,
    useState: function () {
      return cf(uf);
    },
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      return Lf(lf(), Kc.memoizedState, e);
    },
    useTransition: function () {
      return [cf(uf)[0], lf().memoizedState];
    },
    useMutableSource: df,
    useSyncExternalStore: pf,
    useId: zf,
    unstable_isNewReconciler: !1,
  },
  Wf = {
    readContext: oc,
    useCallback: Df,
    useContext: oc,
    useEffect: Cf,
    useImperativeHandle: Nf,
    useInsertionEffect: Of,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: ff,
    useRef: kf,
    useState: function () {
      return ff(uf);
    },
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      var t = lf();
      return null === Kc ? (t.memoizedState = e) : Lf(t, Kc.memoizedState, e);
    },
    useTransition: function () {
      return [ff(uf)[0], lf().memoizedState];
    },
    useMutableSource: df,
    useSyncExternalStore: pf,
    useId: zf,
    unstable_isNewReconciler: !1,
  };
function Yf(e, t) {
  try {
    var n = '',
      r = t;
    do {
      (n += xa(r)), (r = r.return);
    } while (r);
    var a = n;
  } catch (i) {
    a = '\nError generating stack: ' + i.message + '\n' + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function $f(e, t, n) {
  return {
    value: e,
    source: null,
    stack: null != n ? n : null,
    digest: null != t ? t : null,
  };
}
function Gf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xf = 'function' == typeof WeakMap ? WeakMap : Map;
function Qf(e, t, n) {
  ((n = hc(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Op || ((Op = !0), (_p = r)), Gf(0, t);
    }),
    n
  );
}
function Kf(e, t, n) {
  (n = hc(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ('function' == typeof r) {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Gf(0, t);
      });
  }
  var i = e.stateNode;
  return (
    null !== i &&
      'function' == typeof i.componentDidCatch &&
      (n.callback = function () {
        Gf(0, t),
          'function' != typeof r &&
            (null === Pp ? (Pp = new Set([this])) : Pp.add(this));
        var e = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== e ? e : '',
        });
      }),
    n
  );
}
function qf(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new Xf();
    var a = new Set();
    r.set(t, a);
  } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = sh.bind(null, e, t, n)), t.then(e, e));
}
function Jf(e) {
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
function Zf(e, t, n, r, a) {
  return 0 == (1 & e.mode)
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          1 === n.tag &&
            (null === n.alternate
              ? (n.tag = 17)
              : (((t = hc(-1, 1)).tag = 2), mc(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = a), e);
}
var ed = ta.ReactCurrentOwner,
  td = !1;
function nd(e, t, n, r) {
  t.child = null === e ? Mc(t, null, n, r) : Dc(t, e.child, n, r);
}
function rd(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    ic(t, a),
    (r = af(e, t, n, r, i, a)),
    (n = of()),
    null === e || td
      ? (Fu && n && zu(t), (t.flags |= 1), nd(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Od(e, t, a))
  );
}
function ad(e, t, n, r, a) {
  if (null === e) {
    var i = n.type;
    return 'function' != typeof i ||
      hh(i) ||
      void 0 !== i.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = vh(n.type, null, r, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), id(e, t, i, r, a));
  }
  if (((i = e.child), 0 == (e.lanes & a))) {
    var o = i.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : Vs)(o, r) && e.ref === t.ref)
      return Od(e, t, a);
  }
  return (
    (t.flags |= 1), ((e = mh(i, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function id(e, t, n, r, a) {
  if (null !== e) {
    var i = e.memoizedProps;
    if (Vs(i, r) && e.ref === t.ref) {
      if (((td = !1), (t.pendingProps = r = i), 0 == (e.lanes & a)))
        return (t.lanes = e.lanes), Od(e, t, a);
      0 != (131072 & e.flags) && (td = !0);
    }
  }
  return ld(e, t, n, r, a);
}
function od(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = null !== e ? e.memoizedState : null;
  if ('hidden' === r.mode)
    if (0 == (1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        su(mp, hp),
        (hp |= n);
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
          su(mp, hp),
          (hp |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== i ? i.baseLanes : n),
        su(mp, hp),
        (hp |= r);
    }
  else
    null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      su(mp, hp),
      (hp |= r);
  return nd(e, t, a, n), t.child;
}
function sd(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ld(e, t, n, r, a) {
  var i = pu(n) ? fu : uu.current;
  return (
    (i = du(t, i)),
    ic(t, a),
    (n = af(e, t, n, r, i, a)),
    (r = of()),
    null === e || td
      ? (Fu && r && zu(t), (t.flags |= 1), nd(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Od(e, t, a))
  );
}
function ud(e, t, n, r, a) {
  if (pu(n)) {
    var i = !0;
    gu(t);
  } else i = !1;
  if ((ic(t, a), null === t.stateNode))
    Cd(e, t), Sc(t, n, r), Oc(t, n, r, a), (r = !0);
  else if (null === e) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    'object' == typeof u && null !== u
      ? (u = oc(u))
      : (u = du(t, (u = pu(n) ? fu : uu.current)));
    var c = n.getDerivedStateFromProps,
      f =
        'function' == typeof c ||
        'function' == typeof o.getSnapshotBeforeUpdate;
    f ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((s !== r || l !== u) && Cc(t, o, r, u)),
      (fc = !1);
    var d = t.memoizedState;
    (o.state = d),
      bc(t, r, o, a),
      (l = t.memoizedState),
      s !== r || d !== l || cu.current || fc
        ? ('function' == typeof c && (kc(t, n, c, r), (l = t.memoizedState)),
          (s = fc || Ec(t, n, s, r, d, l, u))
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
      pc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : qu(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      'object' == typeof (l = n.contextType) && null !== l
        ? (l = oc(l))
        : (l = du(t, (l = pu(n) ? fu : uu.current)));
    var p = n.getDerivedStateFromProps;
    (c =
      'function' == typeof p ||
      'function' == typeof o.getSnapshotBeforeUpdate) ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((s !== f || d !== l) && Cc(t, o, r, l)),
      (fc = !1),
      (d = t.memoizedState),
      (o.state = d),
      bc(t, r, o, a);
    var h = t.memoizedState;
    s !== f || d !== h || cu.current || fc
      ? ('function' == typeof p && (kc(t, n, p, r), (h = t.memoizedState)),
        (u = fc || Ec(t, n, u, r, d, h, l) || !1)
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
  return cd(e, t, n, r, i, a);
}
function cd(e, t, n, r, a, i) {
  sd(e, t);
  var o = 0 != (128 & t.flags);
  if (!r && !o) return a && bu(t, n, !1), Od(e, t, i);
  (r = t.stateNode), (ed.current = t);
  var s =
    o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = Dc(t, e.child, null, i)), (t.child = Dc(t, null, s, i)))
      : nd(e, t, s, i),
    (t.memoizedState = r.state),
    a && bu(t, n, !0),
    t.child
  );
}
function fd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mu(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mu(0, t.context, !1),
    Ic(e, t.containerInfo);
}
function dd(e, t, n, r, a) {
  return Xu(), Qu(a), (t.flags |= 256), nd(e, t, n, r), t.child;
}
var pd,
  hd,
  md,
  vd,
  gd = { dehydrated: null, treeContext: null, retryLane: 0 };
function bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yd(e, t, n) {
  var r,
    a = t.pendingProps,
    i = Bc.current,
    o = !1,
    s = 0 != (128 & t.flags);
  if (
    ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
    r
      ? ((o = !0), (t.flags &= -129))
      : (null !== e && null === e.memoizedState) || (i |= 1),
    su(Bc, 1 & i),
    null === e)
  )
    return (
      Wu(t),
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
                : (o = bh(s, a, 0, null)),
              (e = gh(e, a, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = bd(n)),
              (t.memoizedState = gd),
              e)
            : wd(t, s))
    );
  if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
    return (function (e, t, n, r, a, i, o) {
      if (n)
        return 256 & t.flags
          ? ((t.flags &= -257), kd(e, t, o, (r = $f(Error(Ur(422))))))
          : null !== t.memoizedState
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (a = t.mode),
            (r = bh({ mode: 'visible', children: r.children }, a, 0, null)),
            ((i = gh(i, a, o, null)).flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            0 != (1 & t.mode) && Dc(t, e.child, null, o),
            (t.child.memoizedState = bd(o)),
            (t.memoizedState = gd),
            i);
      if (0 == (1 & t.mode)) return kd(e, t, o, null);
      if ('$!' === a.data) {
        if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
        return (r = s), kd(e, t, o, (r = $f((i = Error(Ur(419))), r, void 0)));
      }
      if (((s = 0 != (o & e.childLanes)), td || s)) {
        if (null !== (r = fp)) {
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
            ((i.retryLane = a), cc(e, a), Ip(r, e, a, -1));
        }
        return qp(), kd(e, t, o, (r = $f(Error(Ur(421)))));
      }
      return '$?' === a.data
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = uh.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Iu = Wl(a.nextSibling)),
          (ju = t),
          (Fu = !0),
          (Uu = null),
          null !== e &&
            ((Pu[Nu++] = Du),
            (Pu[Nu++] = Mu),
            (Pu[Nu++] = Tu),
            (Du = e.id),
            (Mu = e.overflow),
            (Tu = t)),
          (t = wd(t, r.children)),
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
        : ((a = mh(i, l)).subtreeFlags = 14680064 & i.subtreeFlags),
      null !== r ? (o = mh(r, o)) : ((o = gh(o, s, n, null)).flags |= 2),
      (o.return = t),
      (a.return = t),
      (a.sibling = o),
      (t.child = a),
      (a = o),
      (o = t.child),
      (s =
        null === (s = e.child.memoizedState)
          ? bd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = gd),
      a
    );
  }
  return (
    (e = (o = e.child).sibling),
    (a = mh(o, { mode: 'visible', children: a.children })),
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
function wd(e, t) {
  return (
    ((t = bh({ mode: 'visible', children: t }, e.mode, 0, null)).return = e),
    (e.child = t)
  );
}
function kd(e, t, n, r) {
  return (
    null !== r && Qu(r),
    Dc(t, e.child, null, n),
    ((e = wd(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), ac(e.return, t, n);
}
function Ed(e, t, n, r, a) {
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
function Sd(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((nd(e, t, r.children, n), 0 != (2 & (r = Bc.current))))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (null !== e && 0 != (128 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && xd(e, n, t);
        else if (19 === e.tag) xd(e, n, t);
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
  if ((su(Bc, r), 0 == (1 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; null !== n; )
          null !== (e = n.alternate) && null === Vc(e) && (a = n),
            (n = n.sibling);
        null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          Ed(t, !1, a, n, i);
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === Vc(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Ed(t, !0, n, null, i);
        break;
      case 'together':
        Ed(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cd(e, t) {
  0 == (1 & t.mode) &&
    null !== e &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Od(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (bp |= t.lanes),
    0 == (n & t.childLanes))
  )
    return null;
  if (null !== e && t.child !== e.child) throw Error(Ur(153));
  if (null !== t.child) {
    for (
      n = mh((e = t.child), e.pendingProps), t.child = n, n.return = t;
      null !== e.sibling;

    )
      (e = e.sibling), ((n = n.sibling = mh(e, e.pendingProps)).return = t);
    n.sibling = null;
  }
  return t.child;
}
function _d(e, t) {
  if (!Fu)
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
function Pd(e) {
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
function Nd(e, t, n) {
  var r = t.pendingProps;
  switch ((Ru(t), t.tag)) {
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
      return Pd(t), null;
    case 1:
    case 17:
      return pu(t.type) && hu(), Pd(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fc(),
        ou(cu),
        ou(uu),
        Yc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          ($u(t)
            ? (t.flags |= 4)
            : null === e ||
              (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
              ((t.flags |= 1024), null !== Uu && (Bp(Uu), (Uu = null)))),
        hd(e, t),
        Pd(t),
        null
      );
    case 5:
      Hc(t);
      var a = jc(Rc.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        md(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(Ur(166));
          return Pd(t), null;
        }
        if (((e = jc(Ac.current)), $u(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Gl] = t), (r[Xl] = i), (e = 0 != (1 & t.mode)), n)) {
            case 'dialog':
              wl('cancel', r), wl('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              wl('load', r);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < vl.length; a++) wl(vl[a], r);
              break;
            case 'source':
              wl('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              wl('error', r), wl('load', r);
              break;
            case 'details':
              wl('toggle', r);
              break;
            case 'input':
              Da(r, i), wl('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                wl('invalid', r);
              break;
            case 'textarea':
              Fa(r, i), wl('invalid', r);
          }
          for (var o in (Za(n, i), (a = null), i))
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              'children' === o
                ? 'string' == typeof s
                  ? r.textContent !== s &&
                    (!0 !== i.suppressHydrationWarning &&
                      Ll(r.textContent, s, e),
                    (a = ['children', s]))
                  : 'number' == typeof s &&
                    r.textContent !== '' + s &&
                    (!0 !== i.suppressHydrationWarning &&
                      Ll(r.textContent, s, e),
                    (a = ['children', '' + s]))
                : Br.hasOwnProperty(o) &&
                  null != s &&
                  'onScroll' === o &&
                  wl('scroll', r);
            }
          switch (n) {
            case 'input':
              _a(r), Aa(r, i, !0);
              break;
            case 'textarea':
              _a(r), Ha(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof i.onClick && (r.onclick = Al);
          }
          (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          (o = 9 === a.nodeType ? a : a.ownerDocument),
            'http://www.w3.org/1999/xhtml' === e && (e = Ba(n)),
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
            (e[Gl] = t),
            (e[Xl] = r),
            pd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ei(n, r)), n)) {
              case 'dialog':
                wl('cancel', e), wl('close', e), (a = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                wl('load', e), (a = r);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < vl.length; a++) wl(vl[a], e);
                a = r;
                break;
              case 'source':
                wl('error', e), (a = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                wl('error', e), wl('load', e), (a = r);
                break;
              case 'details':
                wl('toggle', e), (a = r);
                break;
              case 'input':
                Da(e, r), (a = Ta(e, r)), wl('invalid', e);
                break;
              case 'option':
              default:
                a = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = ba({}, r, { value: void 0 })),
                  wl('invalid', e);
                break;
              case 'textarea':
                Fa(e, r), (a = Ia(e, r)), wl('invalid', e);
            }
            for (i in (Za(n, a), (s = a)))
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                'style' === i
                  ? qa(e, l)
                  : 'dangerouslySetInnerHTML' === i
                  ? null != (l = l ? l.__html : void 0) && $a(e, l)
                  : 'children' === i
                  ? 'string' == typeof l
                    ? ('textarea' !== n || '' !== l) && Ga(e, l)
                    : 'number' == typeof l && Ga(e, '' + l)
                  : 'suppressContentEditableWarning' !== i &&
                    'suppressHydrationWarning' !== i &&
                    'autoFocus' !== i &&
                    (Br.hasOwnProperty(i)
                      ? null != l && 'onScroll' === i && wl('scroll', e)
                      : null != l && ea(e, i, l, o));
              }
            switch (n) {
              case 'input':
                _a(e), Aa(e, r, !1);
                break;
              case 'textarea':
                _a(e), Ha(e);
                break;
              case 'option':
                null != r.value && e.setAttribute('value', '' + Ca(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  null != (i = r.value)
                    ? ja(e, !!r.multiple, i, !1)
                    : null != r.defaultValue &&
                      ja(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                'function' == typeof a.onClick && (e.onclick = Al);
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
      return Pd(t), null;
    case 6:
      if (e && null != t.stateNode) vd(e, t, e.memoizedProps, r);
      else {
        if ('string' != typeof r && null === t.stateNode) throw Error(Ur(166));
        if (((n = jc(Rc.current)), jc(Ac.current), $u(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gl] = t),
            (i = r.nodeValue !== n) && null !== (e = ju))
          )
            switch (e.tag) {
              case 3:
                Ll(r.nodeValue, n, 0 != (1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Ll(r.nodeValue, n, 0 != (1 & e.mode));
            }
          i && (t.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            Gl
          ] = t),
            (t.stateNode = r);
      }
      return Pd(t), null;
    case 13:
      if (
        (ou(Bc),
        (r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (Fu && null !== Iu && 0 != (1 & t.mode) && 0 == (128 & t.flags))
          Gu(), Xu(), (t.flags |= 98560), (i = !1);
        else if (((i = $u(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!i) throw Error(Ur(318));
            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
              throw Error(Ur(317));
            i[Gl] = t;
          } else
            Xu(),
              0 == (128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4);
          Pd(t), (i = !1);
        } else null !== Uu && (Bp(Uu), (Uu = null)), (i = !0);
        if (!i) return 65536 & t.flags ? t : null;
      }
      return 0 != (128 & t.flags)
        ? ((t.lanes = n), t)
        : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
            r &&
            ((t.child.flags |= 8192),
            0 != (1 & t.mode) &&
              (null === e || 0 != (1 & Bc.current)
                ? 0 === vp && (vp = 3)
                : qp())),
          null !== t.updateQueue && (t.flags |= 4),
          Pd(t),
          null);
    case 4:
      return (
        Fc(), hd(e, t), null === e && El(t.stateNode.containerInfo), Pd(t), null
      );
    case 10:
      return rc(t.type._context), Pd(t), null;
    case 19:
      if ((ou(Bc), null === (i = t.memoizedState))) return Pd(t), null;
      if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
        if (r) _d(i, !1);
        else {
          if (0 !== vp || (null !== e && 0 != (128 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (o = Vc(e))) {
                for (
                  t.flags |= 128,
                    _d(i, !1),
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
                return su(Bc, (1 & Bc.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== i.tail &&
            Mi() > Sp &&
            ((t.flags |= 128), (r = !0), _d(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (e = Vc(o))) {
            if (
              ((t.flags |= 128),
              (r = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              _d(i, !0),
              null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Fu)
            )
              return Pd(t), null;
          } else
            2 * Mi() - i.renderingStartTime > Sp &&
              1073741824 !== n &&
              ((t.flags |= 128), (r = !0), _d(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return null !== i.tail
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Mi()),
          (t.sibling = null),
          (n = Bc.current),
          su(Bc, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Pd(t), null);
    case 22:
    case 23:
      return (
        Gp(),
        (r = null !== t.memoizedState),
        null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
        r && 0 != (1 & t.mode)
          ? 0 != (1073741824 & hp) &&
            (Pd(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Pd(t),
        null
      );
    case 24:
    case 25:
      return null;
  }
  throw Error(Ur(156, t.tag));
}
function Td(e, t) {
  switch ((Ru(t), t.tag)) {
    case 1:
      return (
        pu(t.type) && hu(),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Fc(),
        ou(cu),
        ou(uu),
        Yc(),
        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 5:
      return Hc(t), null;
    case 13:
      if ((ou(Bc), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(Ur(340));
        Xu();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return ou(Bc), null;
    case 4:
      return Fc(), null;
    case 10:
      return rc(t.type._context), null;
    case 22:
    case 23:
      return Gp(), null;
    default:
      return null;
  }
}
(pd = function (e, t) {
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
  (hd = function () {}),
  (md = function (e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      (e = t.stateNode), jc(Ac.current);
      var i,
        o = null;
      switch (n) {
        case 'input':
          (a = Ta(e, a)), (r = Ta(e, r)), (o = []);
          break;
        case 'select':
          (a = ba({}, a, { value: void 0 })),
            (r = ba({}, r, { value: void 0 })),
            (o = []);
          break;
        case 'textarea':
          (a = Ia(e, a)), (r = Ia(e, r)), (o = []);
          break;
        default:
          'function' != typeof a.onClick &&
            'function' == typeof r.onClick &&
            (e.onclick = Al);
      }
      for (u in (Za(n, r), (n = null), a))
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
              (Br.hasOwnProperty(u)
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
                (Br.hasOwnProperty(u)
                  ? (null != l && 'onScroll' === u && wl('scroll', e),
                    o || s === l || (o = []))
                  : (o = o || []).push(u, l));
      }
      n && (o = o || []).push('style', n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  }),
  (vd = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var Dd = !1,
  Md = !1,
  Ld = 'function' == typeof WeakSet ? WeakSet : Set,
  Ad = null;
function zd(e, t) {
  var n = e.ref;
  if (null !== n)
    if ('function' == typeof n)
      try {
        n(null);
      } catch (r) {
        oh(e, t, r);
      }
    else n.current = null;
}
function Rd(e, t, n) {
  try {
    n();
  } catch (r) {
    oh(e, t, r);
  }
}
var jd = !1;
function Id(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), void 0 !== i && Rd(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Fd(e, t) {
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
function Ud(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
  }
}
function Hd(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), Hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag &&
      null !== (t = e.stateNode) &&
      (delete t[Gl], delete t[Xl], delete t[Kl], delete t[ql], delete t[Jl]),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bd(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Vd(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || Bd(e.return)) return null;
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
function Wd(e, t, n) {
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
            (t.onclick = Al));
  else if (4 !== r && null !== (e = e.child))
    for (Wd(e, t, n), e = e.sibling; null !== e; ) Wd(e, t, n), (e = e.sibling);
}
function Yd(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for (Yd(e, t, n), e = e.sibling; null !== e; ) Yd(e, t, n), (e = e.sibling);
}
var $d = null,
  Gd = !1;
function Xd(e, t, n) {
  for (n = n.child; null !== n; ) Qd(e, t, n), (n = n.sibling);
}
function Qd(e, t, n) {
  if (Ui && 'function' == typeof Ui.onCommitFiberUnmount)
    try {
      Ui.onCommitFiberUnmount(Fi, n);
    } catch (s) {}
  switch (n.tag) {
    case 5:
      Md || zd(n, t);
    case 6:
      var r = $d,
        a = Gd;
      ($d = null),
        Xd(e, t, n),
        (Gd = a),
        null !== ($d = r) &&
          (Gd
            ? ((e = $d),
              (n = n.stateNode),
              8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $d.removeChild(n.stateNode));
      break;
    case 18:
      null !== $d &&
        (Gd
          ? ((e = $d),
            (n = n.stateNode),
            8 === e.nodeType
              ? Vl(e.parentNode, n)
              : 1 === e.nodeType && Vl(e, n),
            So(e))
          : Vl($d, n.stateNode));
      break;
    case 4:
      (r = $d),
        (a = Gd),
        ($d = n.stateNode.containerInfo),
        (Gd = !0),
        Xd(e, t, n),
        ($d = r),
        (Gd = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Md && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        a = r = r.next;
        do {
          var i = a,
            o = i.destroy;
          (i = i.tag),
            void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && Rd(n, t, o),
            (a = a.next);
        } while (a !== r);
      }
      Xd(e, t, n);
      break;
    case 1:
      if (
        !Md &&
        (zd(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount)
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          oh(n, t, s);
        }
      Xd(e, t, n);
      break;
    case 21:
      Xd(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Md = (r = Md) || null !== n.memoizedState), Xd(e, t, n), (Md = r))
        : Xd(e, t, n);
      break;
    default:
      Xd(e, t, n);
  }
}
function Kd(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new Ld()),
      t.forEach(function (t) {
        var r = ch.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function qd(e, t) {
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
              ($d = s.stateNode), (Gd = !1);
              break e;
            case 3:
            case 4:
              ($d = s.stateNode.containerInfo), (Gd = !0);
              break e;
          }
          s = s.return;
        }
        if (null === $d) throw Error(Ur(160));
        Qd(i, o, a), ($d = null), (Gd = !1);
        var l = a.alternate;
        null !== l && (l.return = null), (a.return = null);
      } catch (u) {
        oh(a, t, u);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; null !== t; ) Jd(t, e), (t = t.sibling);
}
function Jd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qd(t, e), Zd(e), 4 & r)) {
        try {
          Id(3, e, e.return), Fd(3, e);
        } catch (m) {
          oh(e, e.return, m);
        }
        try {
          Id(5, e, e.return);
        } catch (m) {
          oh(e, e.return, m);
        }
      }
      break;
    case 1:
      qd(t, e), Zd(e), 512 & r && null !== n && zd(n, n.return);
      break;
    case 5:
      if (
        (qd(t, e),
        Zd(e),
        512 & r && null !== n && zd(n, n.return),
        32 & e.flags)
      ) {
        var a = e.stateNode;
        try {
          Ga(a, '');
        } catch (m) {
          oh(e, e.return, m);
        }
      }
      if (4 & r && null != (a = e.stateNode)) {
        var i = e.memoizedProps,
          o = null !== n ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), null !== l))
          try {
            'input' === s && 'radio' === i.type && null != i.name && Ma(a, i),
              ei(s, o);
            var u = ei(s, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              'style' === c
                ? qa(a, f)
                : 'dangerouslySetInnerHTML' === c
                ? $a(a, f)
                : 'children' === c
                ? Ga(a, f)
                : ea(a, c, f, u);
            }
            switch (s) {
              case 'input':
                La(a, i);
                break;
              case 'textarea':
                Ua(a, i);
                break;
              case 'select':
                var d = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                null != p
                  ? ja(a, !!i.multiple, p, !1)
                  : d !== !!i.multiple &&
                    (null != i.defaultValue
                      ? ja(a, !!i.multiple, i.defaultValue, !0)
                      : ja(a, !!i.multiple, i.multiple ? [] : '', !1));
            }
            a[Xl] = i;
          } catch (m) {
            oh(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((qd(t, e), Zd(e), 4 & r)) {
        if (null === e.stateNode) throw Error(Ur(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (m) {
          oh(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (qd(t, e), Zd(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          So(t.containerInfo);
        } catch (m) {
          oh(e, e.return, m);
        }
      break;
    case 4:
    default:
      qd(t, e), Zd(e);
      break;
    case 13:
      qd(t, e),
        Zd(e),
        8192 & (a = e.child).flags &&
          ((i = null !== a.memoizedState),
          (a.stateNode.isHidden = i),
          !i ||
            (null !== a.alternate && null !== a.alternate.memoizedState) ||
            (Ep = Mi())),
        4 & r && Kd(e);
      break;
    case 22:
      if (
        ((c = null !== n && null !== n.memoizedState),
        1 & e.mode ? ((Md = (u = Md) || c), qd(t, e), (Md = u)) : qd(t, e),
        Zd(e),
        8192 & r)
      ) {
        if (
          ((u = null !== e.memoizedState),
          (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
        )
          for (Ad = e, c = e.child; null !== c; ) {
            for (f = Ad = c; null !== Ad; ) {
              switch (((p = (d = Ad).child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Id(4, d, d.return);
                  break;
                case 1:
                  zd(d, d.return);
                  var h = d.stateNode;
                  if ('function' == typeof h.componentWillUnmount) {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (m) {
                      oh(r, n, m);
                    }
                  }
                  break;
                case 5:
                  zd(d, d.return);
                  break;
                case 22:
                  if (null !== d.memoizedState) {
                    rp(f);
                    continue;
                  }
              }
              null !== p ? ((p.return = d), (Ad = p)) : rp(f);
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
                oh(e, e.return, m);
              }
            }
          } else if (6 === f.tag) {
            if (null === c)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (m) {
                oh(e, e.return, m);
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
      qd(t, e), Zd(e), 4 & r && Kd(e);
    case 21:
  }
}
function Zd(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; null !== n; ) {
          if (Bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Ur(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          32 & r.flags && (Ga(a, ''), (r.flags &= -33)), Yd(e, Vd(e), a);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo;
          Wd(e, Vd(e), i);
          break;
        default:
          throw Error(Ur(161));
      }
    } catch (o) {
      oh(e, e.return, o);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function ep(e, t, n) {
  (Ad = e), tp(e);
}
function tp(e, t, n) {
  for (var r = 0 != (1 & e.mode); null !== Ad; ) {
    var a = Ad,
      i = a.child;
    if (22 === a.tag && r) {
      var o = null !== a.memoizedState || Dd;
      if (!o) {
        var s = a.alternate,
          l = (null !== s && null !== s.memoizedState) || Md;
        s = Dd;
        var u = Md;
        if (((Dd = o), (Md = l) && !u))
          for (Ad = a; null !== Ad; )
            (l = (o = Ad).child),
              22 === o.tag && null !== o.memoizedState
                ? ap(a)
                : null !== l
                ? ((l.return = o), (Ad = l))
                : ap(a);
        for (; null !== i; ) (Ad = i), tp(i), (i = i.sibling);
        (Ad = a), (Dd = s), (Md = u);
      }
      np(e);
    } else
      0 != (8772 & a.subtreeFlags) && null !== i
        ? ((i.return = a), (Ad = i))
        : np(e);
  }
}
function np(e) {
  for (; null !== Ad; ) {
    var t = Ad;
    if (0 != (8772 & t.flags)) {
      var n = t.alternate;
      try {
        if (0 != (8772 & t.flags))
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Md || Fd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Md)
                if (null === n) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qu(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              null !== i && yc(t, i, r);
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
                yc(t, o, n);
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
                    null !== f && So(f);
                  }
                }
              }
              break;
            default:
              throw Error(Ur(163));
          }
        Md || (512 & t.flags && Ud(t));
      } catch (d) {
        oh(t, t.return, d);
      }
    }
    if (t === e) {
      Ad = null;
      break;
    }
    if (null !== (n = t.sibling)) {
      (n.return = t.return), (Ad = n);
      break;
    }
    Ad = t.return;
  }
}
function rp(e) {
  for (; null !== Ad; ) {
    var t = Ad;
    if (t === e) {
      Ad = null;
      break;
    }
    var n = t.sibling;
    if (null !== n) {
      (n.return = t.return), (Ad = n);
      break;
    }
    Ad = t.return;
  }
}
function ap(e) {
  for (; null !== Ad; ) {
    var t = Ad;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fd(4, t);
          } catch (l) {
            oh(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if ('function' == typeof r.componentDidMount) {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              oh(t, a, l);
            }
          }
          var i = t.return;
          try {
            Ud(t);
          } catch (l) {
            oh(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ud(t);
          } catch (l) {
            oh(t, o, l);
          }
      }
    } catch (l) {
      oh(t, t.return, l);
    }
    if (t === e) {
      Ad = null;
      break;
    }
    var s = t.sibling;
    if (null !== s) {
      (s.return = t.return), (Ad = s);
      break;
    }
    Ad = t.return;
  }
}
var ip,
  op = Math.ceil,
  sp = ta.ReactCurrentDispatcher,
  lp = ta.ReactCurrentOwner,
  up = ta.ReactCurrentBatchConfig,
  cp = 0,
  fp = null,
  dp = null,
  pp = 0,
  hp = 0,
  mp = iu(0),
  vp = 0,
  gp = null,
  bp = 0,
  yp = 0,
  wp = 0,
  kp = null,
  xp = null,
  Ep = 0,
  Sp = 1 / 0,
  Cp = null,
  Op = !1,
  _p = null,
  Pp = null,
  Np = !1,
  Tp = null,
  Dp = 0,
  Mp = 0,
  Lp = null,
  Ap = -1,
  zp = 0;
function Rp() {
  return 0 != (6 & cp) ? Mi() : -1 !== Ap ? Ap : (Ap = Mi());
}
function jp(e) {
  return 0 == (1 & e.mode)
    ? 1
    : 0 != (2 & cp) && 0 !== pp
    ? pp & -pp
    : null !== Ku.transition
    ? (0 === zp && (zp = Ki()), zp)
    : 0 !== (e = eo)
    ? e
    : (e = void 0 === (e = window.event) ? 16 : Mo(e.type));
}
function Ip(e, t, n, r) {
  if (50 < Mp) throw ((Mp = 0), (Lp = null), Error(Ur(185)));
  Ji(e, n, r),
    (0 != (2 & cp) && e === fp) ||
      (e === fp && (0 == (2 & cp) && (yp |= n), 4 === vp && Vp(e, pp)),
      Fp(e, r),
      1 === n &&
        0 === cp &&
        0 == (1 & t.mode) &&
        ((Sp = Mi() + 500), wu && Eu()));
}
function Fp(e, t) {
  var n = e.callbackNode;
  !(function (e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - Hi(i),
        s = 1 << o,
        l = a[o];
      -1 === l
        ? (0 != (s & n) && 0 == (s & r)) || (a[o] = Xi(s, t))
        : l <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  })(e, t);
  var r = Gi(e, e === fp ? pp : 0);
  if (0 === r)
    null !== n && Ni(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((null != n && Ni(n), 1 === t))
      0 === e.tag
        ? (function (e) {
            (wu = !0), xu(e);
          })(Wp.bind(null, e))
        : xu(Wp.bind(null, e)),
        Hl(function () {
          0 == (6 & cp) && Eu();
        }),
        (n = null);
    else {
      switch (to(r)) {
        case 1:
          n = Ai;
          break;
        case 4:
          n = zi;
          break;
        case 16:
        default:
          n = Ri;
          break;
        case 536870912:
          n = Ii;
      }
      n = fh(n, Up.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Up(e, t) {
  if (((Ap = -1), (zp = 0), 0 != (6 & cp))) throw Error(Ur(327));
  var n = e.callbackNode;
  if (ah() && e.callbackNode !== n) return null;
  var r = Gi(e, e === fp ? pp : 0);
  if (0 === r) return null;
  if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Jp(e, r);
  else {
    t = r;
    var a = cp;
    cp |= 2;
    var i = Kp();
    for (
      (fp === e && pp === t) || ((Cp = null), (Sp = Mi() + 500), Xp(e, t));
      ;

    )
      try {
        eh();
        break;
      } catch (s) {
        Qp(e, s);
      }
    nc(),
      (sp.current = i),
      (cp = a),
      null !== dp ? (t = 0) : ((fp = null), (pp = 0), (t = vp));
  }
  if (0 !== t) {
    if ((2 === t && 0 !== (a = Qi(e)) && ((r = a), (t = Hp(e, a))), 1 === t))
      throw ((n = gp), Xp(e, 0), Vp(e, r), Fp(e, Mi()), n);
    if (6 === t) Vp(e, r);
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
                      if (!Bs(i(), a)) return !1;
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
          (2 === (t = Jp(e, r)) &&
            0 !== (i = Qi(e)) &&
            ((r = i), (t = Hp(e, i))),
          1 === t))
      )
        throw ((n = gp), Xp(e, 0), Vp(e, r), Fp(e, Mi()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Ur(345));
        case 2:
        case 5:
          rh(e, xp, Cp);
          break;
        case 3:
          if ((Vp(e, r), (130023424 & r) === r && 10 < (t = Ep + 500 - Mi()))) {
            if (0 !== Gi(e, 0)) break;
            if (((a = e.suspendedLanes) & r) !== r) {
              Rp(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Il(rh.bind(null, e, xp, Cp), t);
            break;
          }
          rh(e, xp, Cp);
          break;
        case 4:
          if ((Vp(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - Hi(r);
            (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
          }
          if (
            ((r = a),
            10 <
              (r =
                (120 > (r = Mi() - r)
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
                  : 1960 * op(r / 1960)) - r))
          ) {
            e.timeoutHandle = Il(rh.bind(null, e, xp, Cp), r);
            break;
          }
          rh(e, xp, Cp);
          break;
        default:
          throw Error(Ur(329));
      }
    }
  }
  return Fp(e, Mi()), e.callbackNode === n ? Up.bind(null, e) : null;
}
function Hp(e, t) {
  var n = kp;
  return (
    e.current.memoizedState.isDehydrated && (Xp(e, t).flags |= 256),
    2 !== (e = Jp(e, t)) && ((t = xp), (xp = n), null !== t && Bp(t)),
    e
  );
}
function Bp(e) {
  null === xp ? (xp = e) : xp.push.apply(xp, e);
}
function Vp(e, t) {
  for (
    t &= ~wp,
      t &= ~yp,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Hi(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Wp(e) {
  if (0 != (6 & cp)) throw Error(Ur(327));
  ah();
  var t = Gi(e, 0);
  if (0 == (1 & t)) return Fp(e, Mi()), null;
  var n = Jp(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = Qi(e);
    0 !== r && ((t = r), (n = Hp(e, r)));
  }
  if (1 === n) throw ((n = gp), Xp(e, 0), Vp(e, t), Fp(e, Mi()), n);
  if (6 === n) throw Error(Ur(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rh(e, xp, Cp),
    Fp(e, Mi()),
    null
  );
}
function Yp(e, t) {
  var n = cp;
  cp |= 1;
  try {
    return e(t);
  } finally {
    0 === (cp = n) && ((Sp = Mi() + 500), wu && Eu());
  }
}
function $p(e) {
  null !== Tp && 0 === Tp.tag && 0 == (6 & cp) && ah();
  var t = cp;
  cp |= 1;
  var n = up.transition,
    r = eo;
  try {
    if (((up.transition = null), (eo = 1), e)) return e();
  } finally {
    (eo = r), (up.transition = n), 0 == (6 & (cp = t)) && Eu();
  }
}
function Gp() {
  (hp = mp.current), ou(mp);
}
function Xp(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), Fl(n)), null !== dp))
    for (n = dp.return; null !== n; ) {
      var r = n;
      switch ((Ru(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && hu();
          break;
        case 3:
          Fc(), ou(cu), ou(uu), Yc();
          break;
        case 5:
          Hc(r);
          break;
        case 4:
          Fc();
          break;
        case 13:
        case 19:
          ou(Bc);
          break;
        case 10:
          rc(r.type._context);
          break;
        case 22:
        case 23:
          Gp();
      }
      n = n.return;
    }
  if (
    ((fp = e),
    (dp = e = mh(e.current, null)),
    (pp = hp = t),
    (vp = 0),
    (gp = null),
    (wp = yp = bp = 0),
    (xp = kp = null),
    null !== sc)
  ) {
    for (t = 0; t < sc.length; t++)
      if (null !== (r = (n = sc[t]).interleaved)) {
        n.interleaved = null;
        var a = r.next,
          i = n.pending;
        if (null !== i) {
          var o = i.next;
          (i.next = a), (r.next = o);
        }
        n.pending = r;
      }
    sc = null;
  }
  return e;
}
function Qp(e, t) {
  for (;;) {
    var n = dp;
    try {
      if ((nc(), ($c.current = Hf), Jc)) {
        for (var r = Qc.memoizedState; null !== r; ) {
          var a = r.queue;
          null !== a && (a.pending = null), (r = r.next);
        }
        Jc = !1;
      }
      if (
        ((Xc = 0),
        (qc = Kc = Qc = null),
        (Zc = !1),
        (ef = 0),
        (lp.current = null),
        null === n || null === n.return)
      ) {
        (vp = 1), (gp = t), (dp = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          l = t;
        if (
          ((t = pp),
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
          var p = Jf(o);
          if (null !== p) {
            (p.flags &= -257),
              Zf(p, o, s, 0, t),
              1 & p.mode && qf(i, u, t),
              (l = u);
            var h = (t = p).updateQueue;
            if (null === h) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else h.add(l);
            break e;
          }
          if (0 == (1 & t)) {
            qf(i, u, t), qp();
            break e;
          }
          l = Error(Ur(426));
        } else if (Fu && 1 & s.mode) {
          var v = Jf(o);
          if (null !== v) {
            0 == (65536 & v.flags) && (v.flags |= 256),
              Zf(v, o, s, 0, t),
              Qu(Yf(l, s));
            break e;
          }
        }
        (i = l = Yf(l, s)),
          4 !== vp && (vp = 2),
          null === kp ? (kp = [i]) : kp.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t), gc(i, Qf(0, l, t));
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
                    (null === Pp || !Pp.has(b))))
              ) {
                (i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  gc(i, Kf(i, s, t));
                break e;
              }
          }
          i = i.return;
        } while (null !== i);
      }
      nh(n);
    } catch (y) {
      (t = y), dp === n && null !== n && (dp = n = n.return);
      continue;
    }
    break;
  }
}
function Kp() {
  var e = sp.current;
  return (sp.current = Hf), null === e ? Hf : e;
}
function qp() {
  (0 !== vp && 3 !== vp && 2 !== vp) || (vp = 4),
    null === fp ||
      (0 == (268435455 & bp) && 0 == (268435455 & yp)) ||
      Vp(fp, pp);
}
function Jp(e, t) {
  var n = cp;
  cp |= 2;
  var r = Kp();
  for ((fp === e && pp === t) || ((Cp = null), Xp(e, t)); ; )
    try {
      Zp();
      break;
    } catch (ry) {
      Qp(e, ry);
    }
  if ((nc(), (cp = n), (sp.current = r), null !== dp)) throw Error(Ur(261));
  return (fp = null), (pp = 0), vp;
}
function Zp() {
  for (; null !== dp; ) th(dp);
}
function eh() {
  for (; null !== dp && !Ti(); ) th(dp);
}
function th(e) {
  var t = ip(e.alternate, e, hp);
  (e.memoizedProps = e.pendingProps),
    null === t ? nh(e) : (dp = t),
    (lp.current = null);
}
function nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (32768 & t.flags))) {
      if (null !== (n = Nd(n, t, hp))) return void (dp = n);
    } else {
      if (null !== (n = Td(n, t))) return (n.flags &= 32767), void (dp = n);
      if (null === e) return (vp = 6), void (dp = null);
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    }
    if (null !== (t = t.sibling)) return void (dp = t);
    dp = t = e;
  } while (null !== t);
  0 === vp && (vp = 5);
}
function rh(e, t, n) {
  var r = eo,
    a = up.transition;
  try {
    (up.transition = null),
      (eo = 1),
      (function (e, t, n, r) {
        do {
          ah();
        } while (null !== Tp);
        if (0 != (6 & cp)) throw Error(Ur(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(Ur(177));
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
              var a = 31 - Hi(n),
                i = 1 << a;
              (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
            }
          })(e, i),
          e === fp && ((dp = fp = null), (pp = 0)),
          (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
            Np ||
            ((Np = !0),
            fh(Ri, function () {
              return ah(), null;
            })),
          (i = 0 != (15990 & n.flags)),
          0 != (15990 & n.subtreeFlags) || i)
        ) {
          (i = up.transition), (up.transition = null);
          var o = eo;
          eo = 1;
          var s = cp;
          (cp |= 4),
            (lp.current = null),
            (function (e, t) {
              if (((zl = Oo), Xs((e = Gs())))) {
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
                Rl = { focusedElem: e, selectionRange: n }, Oo = !1, Ad = t;
                null !== Ad;

              )
                if (
                  ((e = (t = Ad).child),
                  0 != (1028 & t.subtreeFlags) && null !== e)
                )
                  (e.return = t), (Ad = e);
                else
                  for (; null !== Ad; ) {
                    t = Ad;
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
                                  t.elementType === t.type ? m : qu(t.type, m),
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
                            throw Error(Ur(163));
                        }
                    } catch (w) {
                      oh(t, t.return, w);
                    }
                    if (null !== (e = t.sibling)) {
                      (e.return = t.return), (Ad = e);
                      break;
                    }
                    Ad = t.return;
                  }
              (h = jd), (jd = !1);
            })(e, n),
            Jd(n, e),
            Qs(Rl),
            (Oo = !!zl),
            (Rl = zl = null),
            (e.current = n),
            ep(n),
            Di(),
            (cp = s),
            (eo = o),
            (up.transition = i);
        } else e.current = n;
        if (
          (Np && ((Np = !1), (Tp = e), (Dp = a)),
          (i = e.pendingLanes),
          0 === i && (Pp = null),
          (function (e) {
            if (Ui && 'function' == typeof Ui.onCommitFiberRoot)
              try {
                Ui.onCommitFiberRoot(
                  Fi,
                  e,
                  void 0,
                  128 == (128 & e.current.flags),
                );
              } catch (t) {}
          })(n.stateNode),
          Fp(e, Mi()),
          null !== t)
        )
          for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (a = t[n]),
              r(a.value, { componentStack: a.stack, digest: a.digest });
        if (Op) throw ((Op = !1), (e = _p), (_p = null), e);
        0 != (1 & Dp) && 0 !== e.tag && ah(),
          (i = e.pendingLanes),
          0 != (1 & i) ? (e === Lp ? Mp++ : ((Mp = 0), (Lp = e))) : (Mp = 0),
          Eu();
      })(e, t, n, r);
  } finally {
    (up.transition = a), (eo = r);
  }
  return null;
}
function ah() {
  if (null !== Tp) {
    var e = to(Dp),
      t = up.transition,
      n = eo;
    try {
      if (((up.transition = null), (eo = 16 > e ? 16 : e), null === Tp))
        var r = !1;
      else {
        if (((e = Tp), (Tp = null), (Dp = 0), 0 != (6 & cp)))
          throw Error(Ur(331));
        var a = cp;
        for (cp |= 4, Ad = e.current; null !== Ad; ) {
          var i = Ad,
            o = i.child;
          if (0 != (16 & Ad.flags)) {
            var s = i.deletions;
            if (null !== s) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (Ad = u; null !== Ad; ) {
                  var c = Ad;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Id(8, c, i);
                  }
                  var f = c.child;
                  if (null !== f) (f.return = c), (Ad = f);
                  else
                    for (; null !== Ad; ) {
                      var d = (c = Ad).sibling,
                        p = c.return;
                      if ((Hd(c), c === u)) {
                        Ad = null;
                        break;
                      }
                      if (null !== d) {
                        (d.return = p), (Ad = d);
                        break;
                      }
                      Ad = p;
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
              Ad = i;
            }
          }
          if (0 != (2064 & i.subtreeFlags) && null !== o)
            (o.return = i), (Ad = o);
          else
            e: for (; null !== Ad; ) {
              if (0 != (2048 & (i = Ad).flags))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Id(9, i, i.return);
                }
              var g = i.sibling;
              if (null !== g) {
                (g.return = i.return), (Ad = g);
                break e;
              }
              Ad = i.return;
            }
        }
        var b = e.current;
        for (Ad = b; null !== Ad; ) {
          var y = (o = Ad).child;
          if (0 != (2064 & o.subtreeFlags) && null !== y)
            (y.return = o), (Ad = y);
          else
            e: for (o = b; null !== Ad; ) {
              if (0 != (2048 & (s = Ad).flags))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fd(9, s);
                  }
                } catch (k) {
                  oh(s, s.return, k);
                }
              if (s === o) {
                Ad = null;
                break e;
              }
              var w = s.sibling;
              if (null !== w) {
                (w.return = s.return), (Ad = w);
                break e;
              }
              Ad = s.return;
            }
        }
        if (
          ((cp = a), Eu(), Ui && 'function' == typeof Ui.onPostCommitFiberRoot)
        )
          try {
            Ui.onPostCommitFiberRoot(Fi, e);
          } catch (k) {}
        r = !0;
      }
      return r;
    } finally {
      (eo = n), (up.transition = t);
    }
  }
  return !1;
}
function ih(e, t, n) {
  (e = mc(e, (t = Qf(0, (t = Yf(n, t)), 1)), 1)),
    (t = Rp()),
    null !== e && (Ji(e, 1, t), Fp(e, t));
}
function oh(e, t, n) {
  if (3 === e.tag) ih(e, e, n);
  else
    for (; null !== t; ) {
      if (3 === t.tag) {
        ih(t, e, n);
        break;
      }
      if (1 === t.tag) {
        var r = t.stateNode;
        if (
          'function' == typeof t.type.getDerivedStateFromError ||
          ('function' == typeof r.componentDidCatch &&
            (null === Pp || !Pp.has(r)))
        ) {
          (t = mc(t, (e = Kf(t, (e = Yf(n, e)), 1)), 1)),
            (e = Rp()),
            null !== t && (Ji(t, 1, e), Fp(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sh(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = Rp()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fp === e &&
      (pp & n) === n &&
      (4 === vp || (3 === vp && (130023424 & pp) === pp && 500 > Mi() - Ep)
        ? Xp(e, 0)
        : (wp |= n)),
    Fp(e, t);
}
function lh(e, t) {
  0 === t &&
    (0 == (1 & e.mode)
      ? (t = 1)
      : ((t = Yi), 0 == (130023424 & (Yi <<= 1)) && (Yi = 4194304)));
  var n = Rp();
  null !== (e = cc(e, t)) && (Ji(e, t, n), Fp(e, n));
}
function uh(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), lh(e, n);
}
function ch(e, t) {
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
      throw Error(Ur(314));
  }
  null !== r && r.delete(t), lh(e, n);
}
function fh(e, t) {
  return Pi(e, t);
}
function dh(e, t, n, r) {
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
function ph(e, t, n, r) {
  return new dh(e, t, n, r);
}
function hh(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function mh(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = ph(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function vh(e, t, n, r, a, i) {
  var o = 2;
  if (((r = e), 'function' == typeof e)) hh(e) && (o = 1);
  else if ('string' == typeof e) o = 5;
  else
    e: switch (e) {
      case aa:
        return gh(n.children, a, i, t);
      case ia:
        (o = 8), (a |= 8);
        break;
      case oa:
        return ((e = ph(12, n, t, 2 | a)).elementType = oa), (e.lanes = i), e;
      case ca:
        return ((e = ph(13, n, t, a)).elementType = ca), (e.lanes = i), e;
      case fa:
        return ((e = ph(19, n, t, a)).elementType = fa), (e.lanes = i), e;
      case ha:
        return bh(n, a, i, t);
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case sa:
              o = 10;
              break e;
            case la:
              o = 9;
              break e;
            case ua:
              o = 11;
              break e;
            case da:
              o = 14;
              break e;
            case pa:
              (o = 16), (r = null);
              break e;
          }
        throw Error(Ur(130, null == e ? e : typeof e, ''));
    }
  return ((t = ph(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
}
function gh(e, t, n, r) {
  return ((e = ph(7, e, r, t)).lanes = n), e;
}
function bh(e, t, n, r) {
  return (
    ((e = ph(22, e, r, t)).elementType = ha),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yh(e, t, n) {
  return ((e = ph(6, e, null, t)).lanes = n), e;
}
function wh(e, t, n) {
  return (
    ((t = ph(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kh(e, t, n, r, a) {
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
    (this.eventTimes = qi(0)),
    (this.expirationTimes = qi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function xh(e, t, n, r, a, i, o, s, l) {
  return (
    (e = new kh(e, t, n, s, l)),
    1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
    (i = ph(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dc(i),
    e
  );
}
function Eh(e) {
  if (!e) return lu;
  e: {
    if (Ei((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ur(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pu(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(Ur(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if (pu(n)) return vu(e, n, t);
  }
  return t;
}
function Sh(e, t, n, r, a, i, o, s, l) {
  return (
    ((e = xh(n, r, !0, e, 0, i, 0, s, l)).context = Eh(null)),
    (n = e.current),
    ((i = hc((r = Rp()), (a = jp(n)))).callback = null != t ? t : null),
    mc(n, i, a),
    (e.current.lanes = a),
    Ji(e, a, r),
    Fp(e, r),
    e
  );
}
function Ch(e, t, n, r) {
  var a = t.current,
    i = Rp(),
    o = jp(a);
  return (
    (n = Eh(n)),
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = hc(i, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    null !== (e = mc(a, t, o)) && (Ip(e, a, o, i), vc(e, a, o)),
    o
  );
}
function Oh(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function _h(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function Ph(e, t) {
  _h(e, t), (e = e.alternate) && _h(e, t);
}
ip = function (e, t, n) {
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || cu.current) td = !0;
    else {
      if (0 == (e.lanes & n) && 0 == (128 & t.flags))
        return (
          (td = !1),
          (function (e, t, n) {
            switch (t.tag) {
              case 3:
                fd(t), Xu();
                break;
              case 5:
                Uc(t);
                break;
              case 1:
                pu(t.type) && gu(t);
                break;
              case 4:
                Ic(t, t.stateNode.containerInfo);
                break;
              case 10:
                var r = t.type._context,
                  a = t.memoizedProps.value;
                su(Ju, r._currentValue), (r._currentValue = a);
                break;
              case 13:
                if (null !== (r = t.memoizedState))
                  return null !== r.dehydrated
                    ? (su(Bc, 1 & Bc.current), (t.flags |= 128), null)
                    : 0 != (n & t.child.childLanes)
                    ? yd(e, t, n)
                    : (su(Bc, 1 & Bc.current),
                      null !== (e = Od(e, t, n)) ? e.sibling : null);
                su(Bc, 1 & Bc.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                  if (r) return Sd(e, t, n);
                  t.flags |= 128;
                }
                if (
                  (null !== (a = t.memoizedState) &&
                    ((a.rendering = null),
                    (a.tail = null),
                    (a.lastEffect = null)),
                  su(Bc, Bc.current),
                  r)
                )
                  break;
                return null;
              case 22:
              case 23:
                return (t.lanes = 0), od(e, t, n);
            }
            return Od(e, t, n);
          })(e, t, n)
        );
      td = 0 != (131072 & e.flags);
    }
  else (td = !1), Fu && 0 != (1048576 & t.flags) && Au(t, _u, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cd(e, t), (e = t.pendingProps);
      var a = du(t, uu.current);
      ic(t, n), (a = af(null, t, r, e, a, n));
      var i = of();
      return (
        (t.flags |= 1),
        'object' == typeof a &&
        null !== a &&
        'function' == typeof a.render &&
        void 0 === a.$$typeof
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pu(r) ? ((i = !0), gu(t)) : (i = !1),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            dc(t),
            (a.updater = xc),
            (t.stateNode = a),
            (a._reactInternals = t),
            Oc(t, r, e, n),
            (t = cd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Fu && i && zu(t), nd(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cd(e, t),
          (e = t.pendingProps),
          (r = (a = r._init)(r._payload)),
          (t.type = r),
          (a = t.tag =
            (function (e) {
              if ('function' == typeof e) return hh(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === ua) return 11;
                if (e === da) return 14;
              }
              return 2;
            })(r)),
          (e = qu(r, e)),
          a)
        ) {
          case 0:
            t = ld(null, t, r, e, n);
            break e;
          case 1:
            t = ud(null, t, r, e, n);
            break e;
          case 11:
            t = rd(null, t, r, e, n);
            break e;
          case 14:
            t = ad(null, t, r, qu(r.type, e), n);
            break e;
        }
        throw Error(Ur(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ld(e, t, r, (a = t.elementType === r ? a : qu(r, a)), n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ud(e, t, r, (a = t.elementType === r ? a : qu(r, a)), n)
      );
    case 3:
      e: {
        if ((fd(t), null === e)) throw Error(Ur(387));
        (r = t.pendingProps),
          (a = (i = t.memoizedState).element),
          pc(e, t),
          bc(t, r, null, n);
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
            t = dd(e, t, r, n, (a = Yf(Error(Ur(423)), t)));
            break e;
          }
          if (r !== a) {
            t = dd(e, t, r, n, (a = Yf(Error(Ur(424)), t)));
            break e;
          }
          for (
            Iu = Wl(t.stateNode.containerInfo.firstChild),
              ju = t,
              Fu = !0,
              Uu = null,
              n = Mc(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Xu(), r === a)) {
            t = Od(e, t, n);
            break e;
          }
          nd(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uc(t),
        null === e && Wu(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = null !== e ? e.memoizedProps : null),
        (o = a.children),
        jl(r, a) ? (o = null) : null !== i && jl(r, i) && (t.flags |= 32),
        sd(e, t),
        nd(e, t, o, n),
        t.child
      );
    case 6:
      return null === e && Wu(t), null;
    case 13:
      return yd(e, t, n);
    case 4:
      return (
        Ic(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = Dc(t, null, r, n)) : nd(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        rd(e, t, r, (a = t.elementType === r ? a : qu(r, a)), n)
      );
    case 7:
      return nd(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return nd(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (o = a.value),
          su(Ju, r._currentValue),
          (r._currentValue = o),
          null !== i)
        )
          if (Bs(i.value, o)) {
            if (i.children === a.children && !cu.current) {
              t = Od(e, t, n);
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
                      (l = hc(-1, n & -n)).tag = 2;
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
                      ac(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
              else if (18 === i.tag) {
                if (null === (o = i.return)) throw Error(Ur(341));
                (o.lanes |= n),
                  null !== (s = o.alternate) && (s.lanes |= n),
                  ac(o, n, t),
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
        nd(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        ic(t, n),
        (r = r((a = oc(a)))),
        (t.flags |= 1),
        nd(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (a = qu((r = t.type), t.pendingProps)),
        ad(e, t, r, (a = qu(r.type, a)), n)
      );
    case 15:
      return id(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : qu(r, a)),
        Cd(e, t),
        (t.tag = 1),
        pu(r) ? ((e = !0), gu(t)) : (e = !1),
        ic(t, n),
        Sc(t, r, a),
        Oc(t, r, a, n),
        cd(null, t, r, !0, e, n)
      );
    case 19:
      return Sd(e, t, n);
    case 22:
      return od(e, t, n);
  }
  throw Error(Ur(156, t.tag));
};
var Nh =
  'function' == typeof reportError
    ? reportError
    : function (e) {
        console.error(e);
      };
function Th(e) {
  this._internalRoot = e;
}
function Dh(e) {
  this._internalRoot = e;
}
function Mh(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Lh(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function Ah() {}
function zh(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if ('function' == typeof a) {
      var s = a;
      a = function () {
        var e = Oh(o);
        s.call(e);
      };
    }
    Ch(t, o, e, a);
  } else
    o = (function (e, t, n, r, a) {
      if (a) {
        if ('function' == typeof r) {
          var i = r;
          r = function () {
            var e = Oh(o);
            i.call(e);
          };
        }
        var o = Sh(t, r, e, 0, null, !1, 0, '', Ah);
        return (
          (e._reactRootContainer = o),
          (e[Ql] = o.current),
          El(8 === e.nodeType ? e.parentNode : e),
          $p(),
          o
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if ('function' == typeof r) {
        var s = r;
        r = function () {
          var e = Oh(l);
          s.call(e);
        };
      }
      var l = xh(e, 0, !1, null, 0, !1, 0, '', Ah);
      return (
        (e._reactRootContainer = l),
        (e[Ql] = l.current),
        El(8 === e.nodeType ? e.parentNode : e),
        $p(function () {
          Ch(t, l, n, r);
        }),
        l
      );
    })(n, t, e, a, r);
  return Oh(o);
}
(Dh.prototype.render = Th.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(Ur(409));
    Ch(e, t, null, null);
  }),
  (Dh.prototype.unmount = Th.prototype.unmount =
    function () {
      var e = this._internalRoot;
      if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $p(function () {
          Ch(null, e, null, null);
        }),
          (t[Ql] = null);
      }
    }),
  (Dh.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = io();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mo.length && 0 !== t && t < mo[n].priority; n++);
      mo.splice(n, 0, e), 0 === n && yo(e);
    }
  }),
  (no = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $i(t.pendingLanes);
          0 !== n &&
            (Zi(t, 1 | n),
            Fp(t, Mi()),
            0 == (6 & cp) && ((Sp = Mi() + 500), Eu()));
        }
        break;
      case 13:
        $p(function () {
          var t = cc(e, 1);
          if (null !== t) {
            var n = Rp();
            Ip(t, e, 1, n);
          }
        }),
          Ph(e, 1);
    }
  }),
  (ro = function (e) {
    if (13 === e.tag) {
      var t = cc(e, 134217728);
      if (null !== t) Ip(t, e, 134217728, Rp());
      Ph(e, 134217728);
    }
  }),
  (ao = function (e) {
    if (13 === e.tag) {
      var t = jp(e),
        n = cc(e, t);
      if (null !== n) Ip(n, e, t, Rp());
      Ph(e, t);
    }
  }),
  (io = function () {
    return eo;
  }),
  (oo = function (e, t) {
    var n = eo;
    try {
      return (eo = e), t();
    } finally {
      eo = n;
    }
  }),
  (ri = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((La(e, n), (t = n.name), 'radio' === n.type && null != t)) {
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
              var a = nu(r);
              if (!a) throw Error(Ur(90));
              Pa(r), La(r, a);
            }
          }
        }
        break;
      case 'textarea':
        Ua(e, n);
        break;
      case 'select':
        null != (t = n.value) && ja(e, !!n.multiple, t, !1);
    }
  }),
  (ui = Yp),
  (ci = $p);
var Rh = { usingClientEntryPoint: !1, Events: [eu, tu, nu, si, li, Yp] },
  jh = {
    findFiberByHostInstance: Zl,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Ih = {
    bundleType: jh.bundleType,
    version: jh.version,
    rendererPackageName: jh.rendererPackageName,
    rendererConfig: jh.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ta.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = Oi(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      jh.findFiberByHostInstance ||
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
  var Fh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fh.isDisabled && Fh.supportsFiber)
    try {
      (Fi = Fh.inject(Ih)), (Ui = Fh);
    } catch (Ya) {}
}
(zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rh),
  (zr.createPortal = function (e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Mh(t)) throw Error(Ur(200));
    return (function (e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: ra,
        key: null == r ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    })(e, t, null, n);
  }),
  (zr.createRoot = function (e, t) {
    if (!Mh(e)) throw Error(Ur(299));
    var n = !1,
      r = '',
      a = Nh;
    return (
      null != t &&
        (!0 === t.unstable_strictMode && (n = !0),
        void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
        void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
      (t = xh(e, 1, !1, null, 0, n, 0, r, a)),
      (e[Ql] = t.current),
      El(8 === e.nodeType ? e.parentNode : e),
      new Th(t)
    );
  }),
  (zr.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(Ur(188));
      throw ((e = Object.keys(e).join(',')), Error(Ur(268, e)));
    }
    return (e = null === (e = Oi(t)) ? null : e.stateNode);
  }),
  (zr.flushSync = function (e) {
    return $p(e);
  }),
  (zr.hydrate = function (e, t, n) {
    if (!Lh(t)) throw Error(Ur(200));
    return zh(null, e, t, !0, n);
  }),
  (zr.hydrateRoot = function (e, t, n) {
    if (!Mh(e)) throw Error(Ur(405));
    var r = (null != n && n.hydratedSources) || null,
      a = !1,
      i = '',
      o = Nh;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (a = !0),
        void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
      (t = Sh(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
      (e[Ql] = t.current),
      El(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (a = (a = (n = r[e])._getVersion)(n._source)),
          null == t.mutableSourceEagerHydrationData
            ? (t.mutableSourceEagerHydrationData = [n, a])
            : t.mutableSourceEagerHydrationData.push(n, a);
    return new Dh(t);
  }),
  (zr.render = function (e, t, n) {
    if (!Lh(t)) throw Error(Ur(200));
    return zh(null, e, t, !1, n);
  }),
  (zr.unmountComponentAtNode = function (e) {
    if (!Lh(e)) throw Error(Ur(40));
    return (
      !!e._reactRootContainer &&
      ($p(function () {
        zh(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ql] = null);
        });
      }),
      !0)
    );
  }),
  (zr.unstable_batchedUpdates = Yp),
  (zr.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Lh(n)) throw Error(Ur(200));
    if (null == e || void 0 === e._reactInternals) throw Error(Ur(38));
    return zh(e, t, n, !1, r);
  }),
  (zr.version = '18.2.0-next-9e3b772b8-20220608'),
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
  (Ar.exports = zr);
var Uh = Ar.exports,
  Hh = !1,
  Bh = e.createContext(null),
  Vh = 'unmounted',
  Wh = 'exited',
  Yh = 'entering',
  $h = 'entered',
  Gh = 'exiting',
  Xh = (function (t) {
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
            ? ((a = Wh), (r.appearStatus = Yh))
            : (a = $h)
          : (a = e.unmountOnExit || e.mountOnEnter ? Vh : Wh),
        (r.state = { status: a }),
        (r.nextCallback = null),
        r
      );
    }
    (r = t),
      ((n = a).prototype = Object.create(r.prototype)),
      (n.prototype.constructor = n),
      hr(n, r),
      (a.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === Vh ? { status: Wh } : null;
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
            ? n !== Yh && n !== $h && (t = Yh)
            : (n !== Yh && n !== $h) || (t = Gh);
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
          if ((this.cancelNextCallback(), t === Yh)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : Uh.findDOMNode(this);
              n &&
                (function (e) {
                  e.scrollTop;
                })(n);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Wh &&
            this.setState({ status: Vh });
      }),
      (i.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          a = this.props.nodeRef ? [r] : [Uh.findDOMNode(this), r],
          i = a[0],
          o = a[1],
          s = this.getTimeouts(),
          l = r ? s.appear : s.enter;
        (!e && !n) || Hh
          ? this.safeSetState({ status: $h }, function () {
              t.props.onEntered(i);
            })
          : (this.props.onEnter(i, o),
            this.safeSetState({ status: Yh }, function () {
              t.props.onEntering(i, o),
                t.onTransitionEnd(l, function () {
                  t.safeSetState({ status: $h }, function () {
                    t.props.onEntered(i, o);
                  });
                });
            }));
      }),
      (i.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : Uh.findDOMNode(this);
        t && !Hh
          ? (this.props.onExit(r),
            this.safeSetState({ status: Gh }, function () {
              e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: Wh }, function () {
                    e.props.onExited(r);
                  });
                });
            }))
          : this.safeSetState({ status: Wh }, function () {
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
            : Uh.findDOMNode(this),
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
        if (t === Vh) return null;
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
          Bh.Provider,
          { value: null },
          'function' == typeof r
            ? r(t, a)
            : e.cloneElement(e.Children.only(r), a),
        );
      }),
      a
    );
  })(e.Component);
function Qh() {}
(Xh.contextType = Bh),
  (Xh.propTypes = {}),
  (Xh.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Qh,
    onEntering: Qh,
    onEntered: Qh,
    onExit: Qh,
    onExiting: Qh,
    onExited: Qh,
  }),
  (Xh.UNMOUNTED = Vh),
  (Xh.EXITED = Wh),
  (Xh.ENTERING = Yh),
  (Xh.ENTERED = $h),
  (Xh.EXITING = Gh);
var Kh = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  qh = !1,
  Jh = !1;
try {
  var Zh = {
    get passive() {
      return (qh = !0);
    },
    get once() {
      return (Jh = qh = !0);
    },
  };
  Kh &&
    (window.addEventListener('test', Zh, Zh),
    window.removeEventListener('test', Zh, !0));
} catch (ry) {}
function em(e, t, n, r) {
  return (
    (function (e, t, n, r) {
      if (r && 'boolean' != typeof r && !Jh) {
        var a = r.once,
          i = r.capture,
          o = n;
        !Jh &&
          a &&
          ((o =
            n.__once ||
            function e(r) {
              this.removeEventListener(t, e, i), n.call(this, r);
            }),
          (n.__once = o)),
          e.addEventListener(t, o, qh ? r : i);
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
function tm(e, t, n) {
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
    i = em(
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
function nm(e, t, n, r) {
  var a, i;
  null == n &&
    ((a = Lr(e, 'transitionDuration') || ''),
    (i = -1 === a.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(a) * i || 0));
  var o = tm(e, n, r),
    s = em(e, 'transitionend', t);
  return function () {
    o(), s();
  };
}
function rm(e, t) {
  const n = Lr(e, t) || '',
    r = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * r;
}
function am(e, t) {
  const n = rm(e, 'transitionDuration'),
    r = rm(e, 'transitionDelay'),
    a = nm(
      e,
      n => {
        n.target === e && (a(), t(n));
      },
      n + r,
    );
}
var im = function (e) {
  return e && 'function' != typeof e
    ? function (t) {
        e.current = t;
      }
    : e;
};
function om(e, t) {
  return r.useMemo(
    function () {
      return (function (e, t) {
        var n = im(e),
          r = im(t);
        return function (e) {
          n && n(e), r && r(e);
        };
      })(e, t);
    },
    [e, t],
  );
}
function sm(e) {
  return e && 'setState' in e ? Uh.findDOMNode(e) : null != e ? e : null;
}
var lm = e.forwardRef(
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
      h = om(p, c),
      m = e => {
        h(sm(e));
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
    return mr.exports.jsx(Xh, {
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
function um(e) {
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
function cm() {
  return r.useState(null);
}
function fm() {
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
var dm =
    'undefined' != typeof global &&
    global.navigator &&
    'ReactNative' === global.navigator.product,
  pm = 'undefined' != typeof document || dm ? r.useLayoutEffect : r.useEffect;
const hm = ['as', 'disabled'];
function mm({
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
const vm = r.forwardRef((e, t) => {
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
    })(e, hm);
  const [i, { tagName: o }] = mm(Object.assign({ tagName: n, disabled: r }, a));
  return mr.exports.jsx(o, Object.assign({}, a, i, { ref: t }));
});
vm.displayName = 'Button';
const gm = { [Yh]: 'show', [$h]: 'show' },
  bm = r.forwardRef(
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
      return mr.exports.jsx(lm, {
        ref: i,
        addEndListener: am,
        ...a,
        onEnter: o,
        childRef: t.ref,
        children: (a, i) =>
          r.cloneElement(t, {
            ...i,
            className: pr('fade', e, t.props.className, gm[a], n[a]),
          }),
      });
    },
  );
(bm.defaultProps = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
}),
  (bm.displayName = 'Fade');
var ym = bm,
  wm = /-(.)/g;
const km = e => {
  return (
    e[0].toUpperCase() +
    ((t = e),
    t.replace(wm, function (e, t) {
      return t.toUpperCase();
    })).slice(1)
  );
  var t;
};
function xm(e, { displayName: t = km(e), Component: n, defaultProps: a } = {}) {
  const i = r.forwardRef(
    ({ className: t, bsPrefix: r, as: a = n || 'div', ...i }, o) => {
      const s = Cr(r, e);
      return mr.exports.jsx(a, { ref: o, className: pr(t, s), ...i });
    },
  );
  return (i.defaultProps = a), (i.displayName = t), i;
}
const Em = r.forwardRef(
  (
    { as: e, bsPrefix: t, variant: n, size: r, active: a, className: i, ...o },
    s,
  ) => {
    const l = Cr(t, 'btn'),
      [u, { tagName: c }] = mm({ tagName: e, ...o }),
      f = c;
    return mr.exports.jsx(f, {
      ...u,
      ...o,
      ref: s,
      className: pr(
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
(Em.displayName = 'Button'),
  (Em.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
var Sm = Em;
const Cm = r.forwardRef(
  (
    { bsPrefix: e, size: t, vertical: n, className: r, as: a = 'div', ...i },
    o,
  ) => {
    const s = Cr(e, 'btn-group');
    let l = s;
    return (
      n && (l = `${s}-vertical`),
      mr.exports.jsx(a, { ...i, ref: o, className: pr(r, l, t && `${s}-${t}`) })
    );
  },
);
(Cm.displayName = 'ButtonGroup'),
  (Cm.defaultProps = { vertical: !1, role: 'group' });
var Om = Cm;
const _m = r.forwardRef(({ bsPrefix: e, className: t, ...n }, r) => {
  const a = Cr(e, 'btn-toolbar');
  return mr.exports.jsx('div', { ...n, ref: r, className: pr(t, a) });
});
(_m.displayName = 'ButtonToolbar'), (_m.defaultProps = { role: 'toolbar' });
var Pm = _m;
function Nm(e) {
  var t,
    n,
    a = ((t = e), ((n = r.useRef(t)).current = t), n);
  r.useEffect(function () {
    return function () {
      return a.current();
    };
  }, []);
}
var Tm = Math.pow(2, 31) - 1;
function Dm(e, t, n) {
  var r = n - Date.now();
  e.current =
    r <= Tm
      ? setTimeout(t, r)
      : setTimeout(function () {
          return Dm(e, t, n);
        }, Tm);
}
function Mm() {
  var e = fm(),
    t = r.useRef();
  return (
    Nm(function () {
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
              a <= Tm
                ? (t.current = setTimeout(r, a))
                : Dm(t, r, Date.now() + a));
        },
        clear: n,
      };
    }, [])
  );
}
var Lm = Object.prototype.hasOwnProperty;
function Am(e, t, n) {
  for (n of e.keys()) if (zm(n, t)) return n;
}
function zm(e, t) {
  var n, r, a;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && zm(e[r], t[r]); );
      return -1 === r;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r) && 'object' == typeof a && !(a = Am(t, a))) return !1;
        if (!t.has(a)) return !1;
      }
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r[0]) && 'object' == typeof a && !(a = Am(t, a))) return !1;
        if (!zm(r[1], t.get(a))) return !1;
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
        if (Lm.call(e, n) && ++r && !Lm.call(t, n)) return !1;
        if (!(n in t) || !zm(e[n], t[n])) return !1;
      }
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
var Rm = 'top',
  jm = 'bottom',
  Im = 'right',
  Fm = 'left',
  Um = 'auto',
  Hm = [Rm, jm, Im, Fm],
  Bm = 'start',
  Vm = 'end',
  Wm = 'clippingParents',
  Ym = 'viewport',
  $m = 'popper',
  Gm = 'reference',
  Xm = Hm.reduce(function (e, t) {
    return e.concat([t + '-' + Bm, t + '-' + Vm]);
  }, []),
  Qm = [].concat(Hm, [Um]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Bm, t + '-' + Vm]);
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
function qm(e) {
  return e.split('-')[0];
}
function Jm(e) {
  if (null == e) return window;
  if ('[object Window]' !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Zm(e) {
  return e instanceof Jm(e).Element || e instanceof Element;
}
function ev(e) {
  return e instanceof Jm(e).HTMLElement || e instanceof HTMLElement;
}
function tv(e) {
  return (
    'undefined' != typeof ShadowRoot &&
    (e instanceof Jm(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
var nv = Math.max,
  rv = Math.min,
  av = Math.round;
function iv() {
  var e = navigator.userAgentData;
  return null != e && e.brands
    ? e.brands
        .map(function (e) {
          return e.brand + '/' + e.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function ov() {
  return !/^((?!chrome|android).)*safari/i.test(iv());
}
function sv(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var r = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    ev(e) &&
    ((a = (e.offsetWidth > 0 && av(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && av(r.height) / e.offsetHeight) || 1));
  var o = (Zm(e) ? Jm(e) : window).visualViewport,
    s = !ov() && n,
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
function lv(e) {
  var t = sv(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function uv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && tv(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function cv(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function fv(e) {
  return Jm(e).getComputedStyle(e);
}
function dv(e) {
  return ['table', 'td', 'th'].indexOf(cv(e)) >= 0;
}
function pv(e) {
  return ((Zm(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function hv(e) {
  return 'html' === cv(e)
    ? e
    : e.assignedSlot || e.parentNode || (tv(e) ? e.host : null) || pv(e);
}
function mv(e) {
  return ev(e) && 'fixed' !== fv(e).position ? e.offsetParent : null;
}
function vv(e) {
  for (var t = Jm(e), n = mv(e); n && dv(n) && 'static' === fv(n).position; )
    n = mv(n);
  return n &&
    ('html' === cv(n) || ('body' === cv(n) && 'static' === fv(n).position))
    ? t
    : n ||
        (function (e) {
          var t = /firefox/i.test(iv());
          if (/Trident/i.test(iv()) && ev(e) && 'fixed' === fv(e).position)
            return null;
          var n = hv(e);
          for (
            tv(n) && (n = n.host);
            ev(n) && ['html', 'body'].indexOf(cv(n)) < 0;

          ) {
            var r = fv(n);
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
function gv(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function bv(e, t, n) {
  return nv(e, rv(t, n));
}
function yv(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function wv(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
var kv = function (e, t) {
  return yv(
    'number' !=
      typeof (e =
        'function' == typeof e
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e)
      ? e
      : wv(e, Hm),
  );
};
var xv = {
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
      s = qm(n.placement),
      l = gv(s),
      u = [Fm, Im].indexOf(s) >= 0 ? 'height' : 'width';
    if (i && o) {
      var c = kv(a.padding, n),
        f = lv(i),
        d = 'y' === l ? Rm : Fm,
        p = 'y' === l ? jm : Im,
        h =
          n.rects.reference[u] +
          n.rects.reference[l] -
          o[l] -
          n.rects.popper[u],
        m = o[l] - n.rects.reference[l],
        v = vv(i),
        g = v ? ('y' === l ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
        b = h / 2 - m / 2,
        y = c[d],
        w = g - f[u] - c[p],
        k = g / 2 - f[u] / 2 + b,
        x = bv(y, k, w),
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
      uv(t.elements.popper, r) &&
      (t.elements.arrow = r);
  },
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Ev(e) {
  return e.split('-')[1];
}
var Sv = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Cv(e) {
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
    y = Fm,
    w = Rm,
    k = window;
  if (u) {
    var x = vv(n),
      E = 'clientHeight',
      S = 'clientWidth';
    if (
      (x === Jm(n) &&
        'static' !== fv((x = pv(n))).position &&
        'absolute' === s &&
        ((E = 'scrollHeight'), (S = 'scrollWidth')),
      a === Rm || ((a === Fm || a === Im) && i === Vm))
    )
      (w = jm),
        (m -=
          (f && x === k && k.visualViewport ? k.visualViewport.height : x[E]) -
          r.height),
        (m *= l ? 1 : -1);
    if (a === Fm || ((a === Rm || a === jm) && i === Vm))
      (y = Im),
        (p -=
          (f && x === k && k.visualViewport ? k.visualViewport.width : x[S]) -
          r.width),
        (p *= l ? 1 : -1);
  }
  var C,
    O = Object.assign({ position: s }, u && Sv),
    _ =
      !0 === c
        ? (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1;
            return { x: av(t * r) / r || 0, y: av(n * r) / r || 0 };
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
var Ov = {
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
          placement: qm(t.placement),
          variation: Ev(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: a,
          isFixed: 'fixed' === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          Cv(
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
            Cv(
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
  _v = { passive: !0 };
var Pv = {
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
        l = Jm(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        i &&
          u.forEach(function (e) {
            e.addEventListener('scroll', n.update, _v);
          }),
        s && l.addEventListener('resize', n.update, _v),
        function () {
          i &&
            u.forEach(function (e) {
              e.removeEventListener('scroll', n.update, _v);
            }),
            s && l.removeEventListener('resize', n.update, _v);
        }
      );
    },
    data: {},
  },
  Nv = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Tv(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Nv[e];
  });
}
var Dv = { start: 'end', end: 'start' };
function Mv(e) {
  return e.replace(/start|end/g, function (e) {
    return Dv[e];
  });
}
function Lv(e) {
  var t = Jm(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Av(e) {
  return sv(pv(e)).left + Lv(e).scrollLeft;
}
function zv(e) {
  var t = fv(e),
    n = t.overflow,
    r = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Rv(e) {
  return ['html', 'body', '#document'].indexOf(cv(e)) >= 0
    ? e.ownerDocument.body
    : ev(e) && zv(e)
    ? e
    : Rv(hv(e));
}
function jv(e, t) {
  var n;
  void 0 === t && (t = []);
  var r = Rv(e),
    a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
    i = Jm(r),
    o = a ? [i].concat(i.visualViewport || [], zv(r) ? r : []) : r,
    s = t.concat(o);
  return a ? s : s.concat(jv(hv(o)));
}
function Iv(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Fv(e, t, n) {
  return t === Ym
    ? Iv(
        (function (e, t) {
          var n = Jm(e),
            r = pv(e),
            a = n.visualViewport,
            i = r.clientWidth,
            o = r.clientHeight,
            s = 0,
            l = 0;
          if (a) {
            (i = a.width), (o = a.height);
            var u = ov();
            (u || (!u && 'fixed' === t)) &&
              ((s = a.offsetLeft), (l = a.offsetTop));
          }
          return { width: i, height: o, x: s + Av(e), y: l };
        })(e, n),
      )
    : Zm(t)
    ? (function (e, t) {
        var n = sv(e, !1, 'fixed' === t);
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
    : Iv(
        (function (e) {
          var t,
            n = pv(e),
            r = Lv(e),
            a = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = nv(
              n.scrollWidth,
              n.clientWidth,
              a ? a.scrollWidth : 0,
              a ? a.clientWidth : 0,
            ),
            o = nv(
              n.scrollHeight,
              n.clientHeight,
              a ? a.scrollHeight : 0,
              a ? a.clientHeight : 0,
            ),
            s = -r.scrollLeft + Av(e),
            l = -r.scrollTop;
          return (
            'rtl' === fv(a || n).direction &&
              (s += nv(n.clientWidth, a ? a.clientWidth : 0) - i),
            { width: i, height: o, x: s, y: l }
          );
        })(pv(e)),
      );
}
function Uv(e, t, n, r) {
  var a =
      'clippingParents' === t
        ? (function (e) {
            var t = jv(hv(e)),
              n =
                ['absolute', 'fixed'].indexOf(fv(e).position) >= 0 && ev(e)
                  ? vv(e)
                  : e;
            return Zm(n)
              ? t.filter(function (e) {
                  return Zm(e) && uv(e, n) && 'body' !== cv(e);
                })
              : [];
          })(e)
        : [].concat(t),
    i = [].concat(a, [n]),
    o = i[0],
    s = i.reduce(function (t, n) {
      var a = Fv(e, n, r);
      return (
        (t.top = nv(a.top, t.top)),
        (t.right = rv(a.right, t.right)),
        (t.bottom = rv(a.bottom, t.bottom)),
        (t.left = nv(a.left, t.left)),
        t
      );
    }, Fv(e, o, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Hv(e) {
  var t,
    n = e.reference,
    r = e.element,
    a = e.placement,
    i = a ? qm(a) : null,
    o = a ? Ev(a) : null,
    s = n.x + n.width / 2 - r.width / 2,
    l = n.y + n.height / 2 - r.height / 2;
  switch (i) {
    case Rm:
      t = { x: s, y: n.y - r.height };
      break;
    case jm:
      t = { x: s, y: n.y + n.height };
      break;
    case Im:
      t = { x: n.x + n.width, y: l };
      break;
    case Fm:
      t = { x: n.x - r.width, y: l };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var u = i ? gv(i) : null;
  if (null != u) {
    var c = 'y' === u ? 'height' : 'width';
    switch (o) {
      case Bm:
        t[u] = t[u] - (n[c] / 2 - r[c] / 2);
        break;
      case Vm:
        t[u] = t[u] + (n[c] / 2 - r[c] / 2);
    }
  }
  return t;
}
function Bv(e, t) {
  void 0 === t && (t = {});
  var n = t,
    r = n.placement,
    a = void 0 === r ? e.placement : r,
    i = n.strategy,
    o = void 0 === i ? e.strategy : i,
    s = n.boundary,
    l = void 0 === s ? Wm : s,
    u = n.rootBoundary,
    c = void 0 === u ? Ym : u,
    f = n.elementContext,
    d = void 0 === f ? $m : f,
    p = n.altBoundary,
    h = void 0 !== p && p,
    m = n.padding,
    v = void 0 === m ? 0 : m,
    g = yv('number' != typeof v ? v : wv(v, Hm)),
    b = d === $m ? Gm : $m,
    y = e.rects.popper,
    w = e.elements[h ? b : d],
    k = Uv(Zm(w) ? w : w.contextElement || pv(e.elements.popper), l, c, o),
    x = sv(e.elements.reference),
    E = Hv({ reference: x, element: y, strategy: 'absolute', placement: a }),
    S = Iv(Object.assign({}, y, E)),
    C = d === $m ? S : x,
    O = {
      top: k.top - C.top + g.top,
      bottom: C.bottom - k.bottom + g.bottom,
      left: k.left - C.left + g.left,
      right: C.right - k.right + g.right,
    },
    _ = e.modifiersData.offset;
  if (d === $m && _) {
    var P = _[a];
    Object.keys(O).forEach(function (e) {
      var t = [Im, jm].indexOf(e) >= 0 ? 1 : -1,
        n = [Rm, jm].indexOf(e) >= 0 ? 'y' : 'x';
      O[e] += P[n] * t;
    });
  }
  return O;
}
var Vv = {
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
          g = qm(v),
          b =
            l ||
            (g === v || !h
              ? [Tv(v)]
              : (function (e) {
                  if (qm(e) === Um) return [];
                  var t = Tv(e);
                  return [Mv(e), t, Mv(t)];
                })(v)),
          y = [v].concat(b).reduce(function (e, n) {
            return e.concat(
              qm(n) === Um
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                      r = n.placement,
                      a = n.boundary,
                      i = n.rootBoundary,
                      o = n.padding,
                      s = n.flipVariations,
                      l = n.allowedAutoPlacements,
                      u = void 0 === l ? Qm : l,
                      c = Ev(r),
                      f = c
                        ? s
                          ? Xm
                          : Xm.filter(function (e) {
                              return Ev(e) === c;
                            })
                        : Hm,
                      d = f.filter(function (e) {
                        return u.indexOf(e) >= 0;
                      });
                    0 === d.length && (d = f);
                    var p = d.reduce(function (t, n) {
                      return (
                        (t[n] = Bv(e, {
                          placement: n,
                          boundary: a,
                          rootBoundary: i,
                          padding: o,
                        })[qm(n)]),
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
          _ = qm(O),
          P = Ev(O) === Bm,
          N = [Rm, jm].indexOf(_) >= 0,
          T = N ? 'width' : 'height',
          D = Bv(t, {
            placement: O,
            boundary: c,
            rootBoundary: f,
            altBoundary: d,
            padding: u,
          }),
          M = N ? (P ? Im : Fm) : P ? jm : Rm;
        w[T] > k[T] && (M = Tv(M));
        var L = Tv(M),
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
function Wv(e, t, n) {
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
function Yv(e) {
  return [Rm, Im, jm, Fm].some(function (t) {
    return e[t] >= 0;
  });
}
var $v = {
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
      o = Bv(t, { elementContext: 'reference' }),
      s = Bv(t, { altBoundary: !0 }),
      l = Wv(o, r),
      u = Wv(s, a, i),
      c = Yv(l),
      f = Yv(u);
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
var Gv = {
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
      o = Qm.reduce(function (e, n) {
        return (
          (e[n] = (function (e, t, n) {
            var r = qm(e),
              a = [Fm, Rm].indexOf(r) >= 0 ? -1 : 1,
              i =
                'function' == typeof n
                  ? n(Object.assign({}, t, { placement: e }))
                  : n,
              o = i[0],
              s = i[1];
            return (
              (o = o || 0),
              (s = (s || 0) * a),
              [Fm, Im].indexOf(r) >= 0 ? { x: s, y: o } : { x: o, y: s }
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
var Xv = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: function (e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = Hv({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: 'absolute',
      placement: t.placement,
    });
  },
  data: {},
};
var Qv = {
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
      v = Bv(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
      g = qm(t.placement),
      b = Ev(t.placement),
      y = !b,
      w = gv(g),
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
          T = 'y' === w ? Rm : Fm,
          D = 'y' === w ? jm : Im,
          M = 'y' === w ? 'height' : 'width',
          L = x[w],
          A = L + v[T],
          z = L - v[D],
          R = p ? -S[M] / 2 : 0,
          j = b === Bm ? E[M] : S[M],
          I = b === Bm ? -S[M] : -E[M],
          F = t.elements.arrow,
          U = p && F ? lv(F) : { width: 0, height: 0 },
          H = t.modifiersData['arrow#persistent']
            ? t.modifiersData['arrow#persistent'].padding
            : { top: 0, right: 0, bottom: 0, left: 0 },
          B = H[T],
          V = H[D],
          W = bv(0, E[M], U[M]),
          Y = y ? E[M] / 2 - R - W - B - O.mainAxis : j - W - B - O.mainAxis,
          $ = y ? -E[M] / 2 + R + W + V + O.mainAxis : I + W + V + O.mainAxis,
          G = t.elements.arrow && vv(t.elements.arrow),
          X = G ? ('y' === w ? G.clientTop || 0 : G.clientLeft || 0) : 0,
          Q = null != (N = null == _ ? void 0 : _[w]) ? N : 0,
          K = L + $ - Q,
          q = bv(p ? rv(A, L + Y - Q - X) : A, L, p ? nv(z, K) : z);
        (x[w] = q), (P[w] = q - L);
      }
      if (s) {
        var J,
          Z = 'x' === w ? Rm : Fm,
          ee = 'x' === w ? jm : Im,
          te = x[k],
          ne = 'y' === k ? 'height' : 'width',
          re = te + v[Z],
          ae = te - v[ee],
          ie = -1 !== [Rm, Fm].indexOf(g),
          oe = null != (J = null == _ ? void 0 : _[k]) ? J : 0,
          se = ie ? re : te - E[ne] - S[ne] - oe + O.altAxis,
          le = ie ? te + E[ne] + S[ne] - oe - O.altAxis : ae,
          ue =
            p && ie
              ? (fe = bv(se, te, (ce = le))) > ce
                ? ce
                : fe
              : bv(p ? se : re, te, p ? le : ae);
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
    i = ev(t),
    o =
      ev(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = av(t.width) / e.offsetWidth || 1,
          r = av(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      })(t),
    s = pv(t),
    l = sv(e, o, n),
    u = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      (('body' !== cv(t) || zv(s)) &&
        (u =
          (r = t) !== Jm(r) && ev(r)
            ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
            : Lv(r)),
      ev(t)
        ? (((c = sv(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
        : s && (c.x = Av(s))),
    {
      x: l.left + u.scrollLeft - c.x,
      y: l.top + u.scrollTop - c.y,
      width: l.width,
      height: l.height,
    }
  );
}
function qv(e) {
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
var Jv = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Zv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (e) {
    return !(e && 'function' == typeof e.getBoundingClientRect);
  });
}
const eg = (function (e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      a = t.defaultOptions,
      i = void 0 === a ? Jv : a;
    return function (e, t, n) {
      void 0 === n && (n = i);
      var a,
        o,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Jv, i),
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
                reference: Zm(e)
                  ? jv(e)
                  : e.contextElement
                  ? jv(e.contextElement)
                  : [],
                popper: jv(t),
              });
            var o,
              u,
              d = (function (e) {
                var t = qv(e);
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
              if (Zv(t, n)) {
                (s.rects = {
                  reference: Kv(t, vv(n), 'fixed' === s.options.strategy),
                  popper: lv(n),
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
      if (!Zv(e, t)) return c;
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
  })({ defaultModifiers: [$v, Xv, Ov, Pv, Gv, Vv, Qv, xv] }),
  tg = ['enabled', 'placement', 'strategy', 'modifiers'];
const ng = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  rg = {
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
  ag = [];
function ig(e, t, n = {}) {
  let {
      enabled: a = !0,
      placement: i = 'bottom',
      strategy: o = 'absolute',
      modifiers: s = ag,
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
    })(n, tg);
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
      (v = fm()),
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
    b = r.useMemo(() => (zm(u.current, s) || (u.current = s), u.current), [s]);
  return (
    r.useEffect(() => {
      c.current &&
        a &&
        c.current.setOptions({
          placement: i,
          strategy: o,
          modifiers: [...b, g, ng],
        });
    }, [o, i, g, a, b]),
    r.useEffect(() => {
      if (a && null != e && null != t)
        return (
          (c.current = eg(
            e,
            t,
            Object.assign({}, l, {
              placement: i,
              strategy: o,
              modifiers: [...b, rg, g],
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
function og(e, t) {
  return e.contains
    ? e.contains(t)
    : e.compareDocumentPosition
    ? e === t || !!(16 & e.compareDocumentPosition(t))
    : void 0;
}
const sg = () => {};
const lg = e => e && ('current' in e ? e.current : e),
  ug = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' };
function cg(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map(t => ((e[t].name = t), e[t]));
}
function fg({
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
    modifiers: cg(
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
const dg = r.createContext(Kh ? window : void 0);
dg.Provider;
const pg = (e, t) =>
  Kh
    ? null == e
      ? (t || _r()).body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function hg(e, t) {
  const n = r.useContext(dg),
    [a, i] = r.useState(() => pg(e, null == n ? void 0 : n.document));
  if (!a) {
    const t = pg(e);
    t && i(t);
  }
  return (
    r.useEffect(() => {
      t && a && t(a);
    }, [t, a]),
    r.useEffect(() => {
      const t = pg(e);
      t !== a && i(t);
    }, [e, a]),
    a
  );
}
function mg({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: a,
  unmountOnExit: i,
}) {
  const o = r.useRef(null),
    s = r.useRef(t),
    l = um(n);
  r.useEffect(() => {
    t ? (s.current = !0) : l(o.current);
  }, [t, l]);
  const u = om(o, e.ref),
    c = r.cloneElement(e, { ref: u });
  return t ? c : i || (!s.current && a) ? null : c;
}
function vg({ children: e, in: t, onExited: n, onEntered: a, transition: i }) {
  const [o, s] = r.useState(!t);
  t && o && s(!1);
  const l = (function ({ in: e, onTransition: t }) {
      const n = r.useRef(null),
        a = r.useRef(!0),
        i = um(t);
      return (
        pm(() => {
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
        pm(
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
    u = om(l, e.ref);
  return o && !t ? null : r.cloneElement(e, { ref: u });
}
const gg = 27,
  bg = () => {};
function yg(e, t, { disabled: n, clickTrigger: a } = {}) {
  const i = t || bg;
  !(function (e, t = sg, { disabled: n, clickTrigger: a = 'click' } = {}) {
    const i = r.useRef(!1),
      o = r.useRef(!1),
      s = r.useCallback(
        t => {
          const n = lg(e);
          var r;
          (i.current =
            !n ||
            !!((r = t).metaKey || r.altKey || r.ctrlKey || r.shiftKey) ||
            !(function (e) {
              return 0 === e.button;
            })(t) ||
            !!og(n, t.target) ||
            o.current),
            (o.current = !1);
        },
        [e],
      ),
      l = um(t => {
        const n = lg(e);
        n && og(n, t.target) && (o.current = !0);
      }),
      u = um(e => {
        i.current || t(e);
      });
    r.useEffect(() => {
      if (n || null == e) return;
      const t = _r(lg(e));
      let r = (t.defaultView || window).event,
        i = null;
      ug[a] && (i = em(t, ug[a], l, !0));
      const o = em(t, a, s, !0),
        c = em(t, a, e => {
          e !== r ? u(e) : (r = void 0);
        });
      let f = [];
      return (
        'ontouchstart' in t.documentElement &&
          (f = [].slice.call(t.body.children).map(e => em(e, 'mousemove', sg))),
        () => {
          null == i || i(), o(), c(), f.forEach(e => e());
        }
      );
    }, [e, n, a, s, l, u]);
  })(e, i, { disabled: n, clickTrigger: a });
  const o = um(e => {
    e.keyCode === gg && i(e);
  });
  r.useEffect(() => {
    if (n || null == e) return;
    const t = _r(lg(e));
    let r = (t.defaultView || window).event;
    const a = em(t, 'keyup', e => {
      e !== r ? o(e) : (r = void 0);
    });
    return () => {
      a();
    };
  }, [e, n, o]);
}
const wg = r.forwardRef((e, t) => {
  const {
      flip: n,
      offset: a,
      placement: i,
      containerPadding: o,
      popperConfig: s = {},
      transition: l,
      runTransition: u,
    } = e,
    [c, f] = cm(),
    [d, p] = cm(),
    h = om(f, t),
    m = hg(e.container),
    v = hg(e.target),
    [g, b] = r.useState(!e.show),
    y = ig(
      v,
      c,
      fg({
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
    (yg(c, e.onHide, {
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
        ? mr.exports.jsx(e, Object.assign({}, n))
        : t
        ? mr.exports.jsx(vg, Object.assign({}, n, { transition: t }))
        : mr.exports.jsx(mg, Object.assign({}, n));
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
    m ? Uh.createPortal(O, m) : null
  );
});
wg.displayName = 'Overlay';
var kg = xm('popover-header'),
  xg = xm('popover-body');
function Eg(e, t) {
  let n = e;
  return (
    'left' === e
      ? (n = t ? 'end' : 'start')
      : 'right' === e && (n = t ? 'start' : 'end'),
    n
  );
}
function Sg(e = 'absolute') {
  return {
    position: e,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none',
  };
}
const Cg = r.forwardRef(
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
    const d = Cr(e, 'popover'),
      p = Or(),
      [h] = (null == t ? void 0 : t.split('-')) || [],
      m = Eg(h, p);
    let v = r;
    return (
      u && !s && (v = { ...r, ...Sg(null == l ? void 0 : l.strategy) }),
      mr.exports.jsxs('div', {
        ref: f,
        role: 'tooltip',
        style: v,
        'x-placement': h,
        className: pr(n, d, h && `bs-popover-${m}`),
        ...c,
        children: [
          mr.exports.jsx('div', { className: 'popover-arrow', ...o }),
          i ? mr.exports.jsx(xg, { children: a }) : a,
        ],
      })
    );
  },
);
Cg.defaultProps = { placement: 'right' };
var Og = Object.assign(Cg, { Header: kg, Body: xg, POPPER_OFFSET: [0, 8] });
const _g = { transition: ym, rootClose: !1, show: !1, placement: 'top' };
const Pg = r.forwardRef(
  ({ children: e, transition: t, popperConfig: n = {}, ...a }, i) => {
    const o = r.useRef({}),
      [s, l] = r.useState(null),
      [u, c] = (function (e) {
        const t = r.useRef(null),
          n = Cr(void 0, 'popover'),
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
                    ? e || Og.POPPER_OFFSET
                    : e || [0, 0];
                  var r, a;
                },
              },
            }),
            [e, n],
          );
        return [t, [a]];
      })(a.offset),
      f = om(i, u),
      d = !0 === t ? ym : t || void 0,
      p = um(e => {
        l(e), null == n || null == n.onFirstUpdate || n.onFirstUpdate(e);
      });
    return (
      pm(() => {
        s && (null == o.current.scheduleUpdate || o.current.scheduleUpdate());
      }, [s]),
      r.useEffect(() => {
        a.show || l(null);
      }, [a.show]),
      mr.exports.jsx(wg, {
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
            (e.ref = n.__wrapped || (n.__wrapped = e => n(sm(e)))),
              (t.ref = r.__wrapped || (r.__wrapped = e => r(sm(e))));
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
                className: pr(e.props.className, !t && u && 'show'),
                style: { ...e.props.style, ...a.style },
              });
        },
      })
    );
  },
);
(Pg.displayName = 'Overlay'), (Pg.defaultProps = _g);
var Ng = Pg;
function Tg(e, t, n) {
  const [r] = t,
    a = r.currentTarget,
    i = r.relatedTarget || r.nativeEvent[n];
  (i && i === a) || og(a, i) || e(...t);
}
function Dg({
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
    p = om(d, n.ref),
    h = Mm(),
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
        Tg(D, e, 'fromElement');
      },
      [D],
    ),
    j = r.useCallback(
      (...e) => {
        Tg(M, e, 'toElement');
      },
      [M],
    ),
    I = null == e ? [] : [].concat(e),
    F = {
      ref: e => {
        p(sm(e));
      },
    };
  return (
    -1 !== I.indexOf('click') && (F.onClick = z),
    -1 !== I.indexOf('focus') && ((F.onFocus = L), (F.onBlur = A)),
    -1 !== I.indexOf('hover') && ((F.onMouseOver = R), (F.onMouseOut = j)),
    mr.exports.jsxs(mr.exports.Fragment, {
      children: [
        'function' == typeof n ? n(F) : r.cloneElement(n, F),
        mr.exports.jsx(Ng, {
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
Dg.defaultProps = { defaultShow: !1, trigger: ['hover', 'focus'] };
const Mg = r.forwardRef(
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
    e = Cr(e, 'tooltip');
    const f = Or(),
      [d] = (null == t ? void 0 : t.split('-')) || [],
      p = Eg(d, f);
    let h = r;
    return (
      l && !o && (h = { ...r, ...Sg(null == s ? void 0 : s.strategy) }),
      mr.exports.jsxs('div', {
        ref: c,
        style: h,
        role: 'tooltip',
        'x-placement': d,
        className: pr(n, e, `bs-tooltip-${p}`),
        ...u,
        children: [
          mr.exports.jsx('div', { className: 'tooltip-arrow', ...i }),
          mr.exports.jsx('div', { className: `${e}-inner`, children: a }),
        ],
      })
    );
  },
);
(Mg.defaultProps = { placement: 'right' }), (Mg.displayName = 'Tooltip');
var Lg = Mg;
class Ag {
  constructor(e, t, n, r, a) {
    E(this, 'tileId'),
      E(this, 'name'),
      E(this, 'asset'),
      E(this, 'thumbnailAsset'),
      E(this, 'price'),
      (this.tileId = e),
      (this.name = t),
      (this.asset = n),
      (this.thumbnailAsset = r),
      (this.price = a);
  }
}
class zg {}
E(zg, 'towers', [
  new Ag(0, 'Common', 'tower1.png', 'tower1_thumbnail.png', 25),
  new Ag(1, 'Ranger', 'tower2.png', 'tower2_thumbnail.png', 50),
  new Ag(2, 'Aerial', 'tower3.png', 'tower3_thumbnail.png', 100),
]);
class Rg {}
E(Rg, 'TOWER_SELECTED', 'TOWER_SELECTED'),
  E(Rg, 'ERASER_SELECTED', 'ERASER_SELECTED'),
  E(Rg, 'MOVE_SELECTED', 'MOVE_SELECTED'),
  E(Rg, 'COINS_CHANGED', 'COINS_CHANGED'),
  E(Rg, 'LOAD_MAP', 'LOAD_MAP'),
  E(Rg, 'MAP_DATA_CHANGED', 'MAP_DATA_CHANGED'),
  E(Rg, 'CLEAR_MAP', 'CLEAR_MAP'),
  E(Rg, 'SAVE_MAP', 'SAVE_MAP');
const jg = new t.Events.EventEmitter();
var Ig;
null === (Ig = window.HTMLSlotElement) ||
  void 0 === Ig ||
  Ig.prototype.assignedElements;
var Fg = {
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
const Ug = Phaser.Scene;
var Hg = function (e) {
    return e instanceof Ug;
  },
  Bg = function (e) {
    return null == e || 'object' != typeof e
      ? null
      : Hg(e)
      ? e
      : e.scene && Hg(e.scene)
      ? e.scene
      : e.parent && e.parent.scene && Hg(e.parent.scene)
      ? e.parent.scene
      : null;
  };
const Vg = Phaser.Game;
var Wg = function (e) {
    return e instanceof Vg;
  },
  Yg = function (e) {
    return null == e || 'object' != typeof e
      ? null
      : Wg(e)
      ? e
      : Wg(e.game)
      ? e.game
      : Hg(e)
      ? e.sys.game
      : Hg(e.scene)
      ? e.scene.sys.game
      : void 0;
  };
const $g = Phaser.Utils.Objects.GetValue;
class Gg {
  constructor(e, t) {
    this.setParent(e),
      (this.isShutdown = !1),
      this.setEventEmitter($g(t, 'eventEmitter', !0)),
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
    return (this.parent = e), (this.scene = Bg(e)), (this.game = Yg(e)), this;
  }
}
Object.assign(Gg.prototype, Fg);
const Xg = Phaser.Utils.Objects.GetValue;
class Qg extends Gg {
  constructor(e, t) {
    super(e, t),
      (this._isRunning = !1),
      (this.isPaused = !1),
      (this.tickingState = !1),
      this.setTickingMode(Xg(t, 'tickingMode', 1));
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
  qg = Phaser.Utils.Objects.GetValue;
class Jg extends Qg {
  constructor(e, t) {
    var n = Bg(e);
    n === e && (e = void 0),
      super(n, t),
      (this.gameObject = e),
      e && e.setInteractive(qg(t, 'inputConfig', void 0)),
      (this._enable = void 0),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(qg(e, 'enable', !0)),
      this.setDetectBounds(),
      void 0 === this.gameObject
        ? this.setDetectBounds(qg(e, 'bounds', void 0))
        : this.setDetectBounds(),
      (this.tracerState = Zg),
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
      (this.tracerState = eb),
      void 0 === this.gameObject && (this.isTouchingAnyObject = t.length > 0),
      this.onDragStart());
  }
  onPointerUp(e) {
    this.enable &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      this.pointer === e &&
      ((this.pointer = void 0),
      (this.movedState = !1),
      (this.tracerState = Zg),
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
      this.tracerState === eb && this.onDragEnd(),
      (this.pointer = void 0),
      (this.tracerState = Zg),
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
    return (this.state = tb), this;
  }
}
const Zg = 0,
  eb = 1,
  tb = 'IDLE';
var nb = function (e, t, n) {
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
const rb = ['next', 'exit', 'enter'];
class ab {
  constructor(e) {
    var t = nb(e, 'states', void 0);
    t && this.addStates(t);
    var n = nb(e, 'extend', void 0);
    if (n)
      for (var r in n)
        (this.hasOwnProperty(r) && void 0 !== this[r]) || (this[r] = n[r]);
    var a = nb(e, 'eventEmitter', void 0),
      i = nb(e, 'EventEmitterClass', void 0);
    this.setEventEmitter(a, i), (this._stateLock = !1), this.resetFromJSON(e);
  }
  shutdown() {
    this.destroyEventEmitter();
  }
  destroy() {
    this.shutdown();
  }
  resetFromJSON(e) {
    this.setEnable(nb(e, 'enable', !0)), this.start(nb(e, 'start', void 0));
    var t = nb(e, 'init', void 0);
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
    return rb;
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
Object.assign(ab.prototype, Fg);
var ib = function (e, t, n, r, a) {
  void 0 === a && (a = !1);
  var i = e._events[t];
  if (!i) return !1;
  for (var o = 0, s = i.length; o < s; o++) {
    var l = i[o];
    if (l.fn === n && l.context === r && l.once === a) return !0;
  }
  return !1;
};
const ob = ['next', 'exit', 'enter', 'update', 'preupdate', 'postupdate'];
class sb extends ab {
  shutdown() {
    this.stopUpdate(),
      this.stopPreUpdate(),
      this.stopPostUpdate(),
      (this._scene = void 0),
      super.shutdown();
  }
  resetFromJSON(e) {
    return super.resetFromJSON(e), (this._scene = nb(e, 'scene', void 0)), this;
  }
  get stateProperties() {
    return ob;
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
      ib(t, 'update', this.update, this) ||
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
      ib(t, 'preupdate', this.preupdate, this) ||
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
      ib(t, 'postupdate', this.postupdate, this) ||
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
const lb = Phaser.Utils.Objects.GetValue;
class ub extends Jg {
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
          this.state = cb;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new sb(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e),
      this.setDragThreshold(lb(e, 'threshold', 10)),
      this
    );
  }
  onDragStart() {
    (this.state = fb), 0 === this.dragThreshold && (this.state = db);
  }
  onDragEnd() {
    this.state = cb;
  }
  onDrag() {
    switch (this.state) {
      case fb:
        this.pointer.getDistance() >= this.dragThreshold && (this.state = db);
        break;
      case db:
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
    return this.state === db;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const cb = 'IDLE',
  fb = 'BEGIN',
  db = 'RECOGNIZED';
const pb = Phaser.Math.Distance.Between,
  hb = Phaser.Math.Angle.Between;
var mb = {
    getDt: function () {
      var e;
      return (e = this.scene), Yg(e).loop.delta;
    },
    getVelocity: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return pb(t.x, t.y, e.x, e.y) / (0.001 * this.getDt());
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
      return hb(t.x, t.y, e.x, e.y);
    },
  },
  vb = { 'up&down': 0, 'left&right': 1, '4dir': 2, '8dir': 3 },
  gb = {};
const bb = Phaser.Utils.Objects.GetValue,
  yb = Phaser.Math.RadToDeg;
Object.assign(
  class extends Jg {
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
            this.state = wb;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new sb(r)), this.clearDirectionStates();
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(bb(e, 'threshold', 10)),
        this.setVelocityThreshold(bb(e, 'velocityThreshold', 1e3)),
        this.setDirectionMode(bb(e, 'dir', '8dir')),
        this
      );
    }
    onDragStart() {
      this.state = kb;
    }
    onDragEnd() {
      this.state = wb;
    }
    onDrag() {
      this.state === kb &&
        (this.validDrag ||
          (this.validDrag =
            0 === this.dragThreshold ||
            this.pointer.getDistance() >= this.dragThreshold),
        this.validDrag &&
          this.dragVelocity > this.velocityThreshold &&
          (this.state = xb));
    }
    postUpdate(e, t) {
      this.isRunning && this.enable && this.state === xb && (this.state = wb);
    }
    get isSwiped() {
      return this.state === xb;
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
      return 'string' == typeof e && (e = vb[e]), (this.dirMode = e), this;
    }
    updateDirectionStates() {
      return (
        (function (e, t, n) {
          switch (
            (void 0 === n ? (n = {}) : !0 === n && (n = gb),
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
        })(yb(this.getVelocityAngle()), this.dirMode, this),
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
  mb,
);
const wb = 'IDLE',
  kb = 'BEGIN',
  xb = 'RECOGNIZED';
var Eb = function (e) {
  if ('object' != typeof e || null === e) return e;
  if (Array.isArray(e)) e.length = 0;
  else for (var t in e) delete e[t];
  return e;
};
const Sb = Phaser.Utils.Objects.GetValue,
  Cb = Phaser.Utils.Array.SpliceOne,
  Ob = Phaser.Math.Distance.Between,
  _b = Phaser.Math.Angle.Between;
class Pb {
  constructor(e, t) {
    var n = e.input.manager.pointersTotal - 1;
    n < 2 && e.input.addPointer(2 - n),
      (this.scene = e),
      this.setEventEmitter(Sb(t, 'eventEmitter', void 0)),
      (this._enable = void 0),
      (this.pointers = []),
      (this.movedState = {}),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(Sb(e, 'enable', !0)),
      (this.bounds = Sb(e, 'bounds', void 0)),
      (this.tracerState = Tb),
      (this.pointers.length = 0),
      Eb(this.movedState),
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
      Eb(this.movedState),
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
        case Tb:
          (this.tracerState = Db), this.onDrag1Start();
          break;
        case Db:
          (this.tracerState = Mb), this.onDrag2Start();
      }
  }
  onPointerUp(e) {
    if (this.enable && (!this.bounds || this.bounds.contains(e.x, e.y))) {
      var t = this.pointers.indexOf(e);
      if (-1 !== t)
        switch (
          (delete this.movedState[e.id], Cb(this.pointers, t), this.tracerState)
        ) {
          case Db:
            (this.tracerState = Tb), this.onDrag1End();
            break;
          case Mb:
            (this.tracerState = Db), this.onDrag2End(), this.onDrag1Start();
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
          case Db:
            this.onDrag1();
            break;
          case Mb:
            this.onDrag2();
        }
    }
  }
  dragCancel() {
    return (
      this.tracerState === Mb && this.onDrag2End(),
      (this.pointers.length = 0),
      Eb(this.movedState),
      (this.tracerState = Tb),
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
    if (this.tracerState !== Mb) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return Ob(e.x, e.y, t.x, t.y);
  }
  get angleBetween() {
    if (this.tracerState !== Mb) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return _b(e.x, e.y, t.x, t.y);
  }
  get drag1Vector() {
    var e = this.pointers[0];
    if (e && this.movedState[e.id]) {
      var t = e.position,
        n = e.prevPosition;
      (Nb.x = t.x - n.x), (Nb.y = t.y - n.y);
    } else (Nb.x = 0), (Nb.y = 0);
    return Nb;
  }
  get centerX() {
    if (this.tracerState !== Mb) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get centerY() {
    if (this.tracerState !== Mb) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.y + t.y) / 2;
  }
  get prevCenterX() {
    if (this.tracerState !== Mb) return 0;
    var e = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      t = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get prevCenterY() {
    if (this.tracerState !== Mb) return 0;
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
    return (this.state = Lb), this;
  }
}
Object.assign(Pb.prototype, Fg);
var Nb = {};
const Tb = 0,
  Db = 1,
  Mb = 2,
  Lb = 'IDLE',
  Ab = Phaser.Utils.Objects.GetValue;
class zb extends Pb {
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
          this.state = Rb;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new sb(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e), this.setDragThreshold(Ab(e, 'threshold', 0)), this
    );
  }
  onDrag2Start() {
    (this.scaleFactor = 1),
      (this.prevDistance = this.distanceBetween),
      (this.state = jb),
      0 === this.dragThreshold && (this.state = Ib);
  }
  onDrag2End() {
    this.state = Rb;
  }
  onDrag2() {
    switch (this.state) {
      case jb:
        if (
          this.pointers[0].getDistance() >= this.dragThreshold &&
          this.pointers[1].getDistance() >= this.dragThreshold
        ) {
          var e = this.distanceBetween;
          (this.scaleFactor = e / this.prevDistance),
            (this.prevDistance = e),
            (this.state = Ib);
        }
        break;
      case Ib:
        e = this.distanceBetween;
        (this.scaleFactor = e / this.prevDistance),
          this.emit('pinch', this),
          (this.prevDistance = e);
    }
  }
  get isPinched() {
    return this.state === Ib;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const Rb = 'IDLE',
  jb = 'BEGIN',
  Ib = 'RECOGNIZED',
  Fb = Phaser.Math.RotateAround;
var Ub = function (e, t, n, r) {
    return Fb(e, t, n, r), (e.rotation += r), e;
  },
  Hb = {};
const Bb = Phaser.Utils.Objects.GetValue,
  Vb = Phaser.Math.Angle.WrapDegrees,
  Wb = Phaser.Math.Angle.ShortestBetween,
  Yb = Phaser.Math.RadToDeg,
  $b = Phaser.Math.DegToRad;
var Gb = {
  spinObject: function (e, t) {
    if (!this.isRotation) return this;
    void 0 === t && (t = this.pointers[0].camera);
    var n = this.movementCenterX,
      r = this.movementCenterY,
      a = (function (e, t, n, r) {
        return (
          void 0 === r ? (r = {}) : !0 === r && (r = Hb),
          n.getWorldPoint(e, t, r),
          r
        );
      })(this.centerX, this.centerY, t, !0),
      i = a.x,
      o = a.y,
      s = this.rotation;
    if (Array.isArray(e))
      for (var l = e, u = 0, c = l.length; u < c; u++)
        ((e = l[u]).x += n), (e.y += r), Ub(e, i, o, s);
    else (e.x += n), (e.y += r), Ub(e, i, o, s);
    return this;
  },
};
Object.assign(
  class extends Pb {
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
            this.state = Xb;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new sb(r));
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(Bb(e, 'threshold', 0)),
        this
      );
    }
    onDrag2Start() {
      (this.prevAngle = Vb(Yb(this.angleBetween))),
        (this.state = Qb),
        0 === this.dragThreshold && (this.state = Kb);
    }
    onDrag2End() {
      this.state = Xb;
    }
    onDrag2() {
      switch (this.state) {
        case Qb:
          if (
            this.pointers[0].getDistance() >= this.dragThreshold &&
            this.pointers[1].getDistance() >= this.dragThreshold
          ) {
            var e = Vb(Yb(this.angleBetween));
            (this.angle = Wb(this.prevAngle, e)),
              (this.prevAngle = e),
              (this.state = Kb);
          }
          break;
        case Kb:
          e = Vb(Yb(this.angleBetween));
          (this.angle = Wb(this.prevAngle, e)),
            (this.prevAngle = e),
            this.emit('rotate', this);
      }
    }
    get isRotated() {
      return this.state === Kb;
    }
    get rotation() {
      return $b(this.angle);
    }
    setDragThreshold(e) {
      return (this.dragThreshold = e), this;
    }
  }.prototype,
  Gb,
);
const Xb = 'IDLE',
  Qb = 'BEGIN',
  Kb = 'RECOGNIZED';
class qb extends Phaser.GameObjects.Image {
  constructor(e, t, n, r) {
    super(e, n, r, `${t.name}-sprite`),
      E(this, 'towerType'),
      (this.towerType = t),
      (this.depth = r);
  }
}
class Jb {}
E(Jb, 'mapWidth', 64),
  E(Jb, 'mapHeight', 64),
  E(Jb, 'gridCellWidth', 128),
  E(Jb, 'gridCellHeight', 64),
  E(Jb, 'mapTileWidth', 512),
  E(Jb, 'mapTileHalfWidth', 256),
  E(Jb, 'mapTileHeight', 512),
  E(Jb, 'mapTileHalfHeight', 200),
  E(Jb, 'mapTileOffsetX', 250),
  E(Jb, 'mapTileOffsetY', 260),
  E(Jb, 'totalCoins', 6e3),
  E(Jb, 'mapLocalStorageKey', 'cc-map-designer-map');
class Zb extends t.Scene {
  constructor() {
    super({ key: 'TileMap' }),
      E(this, '_selectedObjectType', 0),
      E(this, '_selectedTower', zg.towers[0]),
      E(this, 'controls'),
      E(this, 'map'),
      E(this, 'groundLayer'),
      E(this, 'coinsUsed', 0),
      E(this, '_currentTowers', new Map());
  }
  preload() {
    this.load.image('building_1', './assets/building_1.png'),
      this.load.image('building_2', './assets/building_2.png'),
      this.load.image('tile_metallic', './assets/tile_metallic.png'),
      this.load.image('tile_f', './assets/tile_f.png'),
      this.load.image('tile_e', './assets/tile_e.png'),
      this.load.image('tile_satellite', './assets/tile_satellite.png'),
      zg.towers.forEach(e => {
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
      jg.on(Rg.TOWER_SELECTED, e => {
        (this._selectedObjectType = 0), (this._selectedTower = e);
      }),
      jg.on(Rg.ERASER_SELECTED, () => {
        this._selectedObjectType = 1;
      }),
      jg.on(Rg.MOVE_SELECTED, () => {
        this._selectedObjectType = 2;
      }),
      jg.on(Rg.LOAD_MAP, e => {
        this._loadMap(e);
      });
    const n = new zb(this),
      r = new ub(this),
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
      jg.on(Rg.SAVE_MAP, () => {
        (a.zoom = 0.1), (a.scrollX = -200), (a.scrollY = 2e3);
      }),
      this.input.on(t.Input.Events.POINTER_MOVE, e => {
        const n = this.map.getTileAtWorldXY(
          e.worldX - Jb.mapTileOffsetX,
          e.worldY - Jb.mapTileOffsetY,
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
          e.worldX - Jb.mapTileOffsetX,
          e.worldY - Jb.mapTileOffsetY,
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
      jg.emit(Rg.COINS_CHANGED, Jb.totalCoins);
    const i = localStorage.getItem(Jb.mapLocalStorageKey);
    if (i)
      try {
        this._loadMap(JSON.parse(i));
      } catch (ry) {
        this._loadMap(this._getEmptyMap());
      }
    else this._loadMap(this._getEmptyMap());
    jg.on(Rg.CLEAR_MAP, () => {
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
    if (0 === e || 0 === t || e === Jb.mapWidth - 1 || t === Jb.mapHeight - 1)
      return;
    if (
      0 === this._selectedObjectType &&
      this._selectedTower.price > Jb.totalCoins - this.coinsUsed
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
          new qb(
            this,
            this._selectedTower,
            i.pixelX + Jb.mapTileHalfWidth,
            i.pixelY + Jb.mapTileHalfHeight,
          ),
        ),
      ),
      this._updateMap());
  }
  _updateMap() {
    var e;
    const t = [];
    let n = 0;
    for (let r = 0; r < Jb.mapHeight; r++) {
      const a = [];
      for (let t = 0; t < Jb.mapWidth; t++)
        if (this._currentTowers.has(100 * t + r)) {
          const i = this._currentTowers.get(100 * t + r).towerType,
            o = zg.towers.findIndex(e => e.tileId === i.tileId);
          a.push(o + 1),
            (n += null != (e = null == i ? void 0 : i.price) ? e : 0);
        } else a.push(0);
      t.push(a);
    }
    jg.emit(Rg.MAP_DATA_CHANGED, t),
      localStorage.setItem(Jb.mapLocalStorageKey, JSON.stringify(t)),
      (this.coinsUsed = n),
      jg.emit(Rg.COINS_CHANGED, Jb.totalCoins - n);
  }
  _getEmptyMap() {
    const e = [];
    for (let t = 0; t < Jb.mapHeight; t++) {
      const t = [];
      for (let e = 0; e < Jb.mapWidth; e++) t.push(0);
      e.push(t);
    }
    return e;
  }
  _loadMap(e) {
    for (const n of this._currentTowers.values()) n.destroy();
    this._currentTowers.clear(),
      localStorage.setItem(Jb.mapLocalStorageKey, JSON.stringify(e));
    let t = 0;
    for (let n = 0; n < Jb.mapHeight; n++)
      for (let r = 0; r < Jb.mapWidth; r++) {
        const a = e[n][r];
        if (a >= 1) {
          const e = a - 1,
            i = this.groundLayer.getTileAt(r, n),
            o = 100 * r + n;
          this._currentTowers.set(
            o,
            this.add.existing(
              new qb(
                this,
                zg.towers[e],
                i.pixelX + Jb.mapTileHalfWidth,
                i.pixelY + Jb.mapTileHalfHeight,
              ),
            ),
          ),
            (t += zg.towers[e].price);
        }
      }
    (this.coinsUsed = t),
      jg.emit(Rg.COINS_CHANGED, Jb.totalCoins - t),
      this._updateMap();
  }
}
var ey = Object.defineProperty,
  ty = Object.getOwnPropertyDescriptor;
let ny =
  ((k = class extends a {
    constructor() {
      super(...arguments), E(this, '_game');
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
        scene: [Zb],
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
  E(
    k,
    'styles',
    n`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  ),
  k);
var ry;
ny = ((e, t, n, r) => {
  for (
    var a, i = r > 1 ? void 0 : r ? ty(t, n) : t, o = e.length - 1;
    o >= 0;
    o--
  )
    (a = e[o]) && (i = (r ? a(t, n, i) : a(i)) || i);
  return r && i && ey(t, n, i), i;
})(
  [
    ((ry = 'cc-map-designer'),
    e => {
      return 'function' == typeof e
        ? ((t = ry), (n = e), customElements.define(t, n), n)
        : ((e, t) => {
            const { kind: n, elements: r } = t;
            return {
              kind: n,
              elements: r,
              finisher(t) {
                customElements.define(e, t);
              },
            };
          })(ry, e);
      var t, n;
    }),
  ],
  ny,
);
const ay = (function (e = window.React, t, n, r, a) {
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
            cr(this.o, t, this.props[t], e ? e[t] : void 0, r);
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
          lr.has(r)
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
  })(o, 'cc-map-designer', ny),
  iy = () => {
    const [e, t] = r.useState(0);
    return (
      r.useEffect(() => {
        const e = n => {
          t(n),
            jg.removeAllListeners(Rg.COINS_CHANGED),
            jg.once(Rg.COINS_CHANGED, e);
        };
        return (
          jg.once(Rg.COINS_CHANGED, e),
          function () {
            jg.removeAllListeners(Rg.COINS_CHANGED);
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
function oy(e) {
  const [t, n] = r.useState([]);
  return (
    r.useEffect(() => {
      const e = t => {
        n(t),
          jg.removeAllListeners(Rg.MAP_DATA_CHANGED),
          jg.once(Rg.MAP_DATA_CHANGED, e);
      };
      return (
        jg.once(Rg.MAP_DATA_CHANGED, e),
        function () {
          jg.removeAllListeners(Rg.MAP_DATA_CHANGED);
        }
      );
    }, [t]),
    e.readonly
      ? r.createElement(
          'div',
          { style: { pointerEvents: 'none' } },
          r.createElement(ay, null),
        )
      : r.createElement(
          r.Fragment,
          null,
          r.createElement(
            Pm,
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
              Om,
              {
                style: { pointerEvents: 'auto', padding: '1rem 1rem 0' },
                id: 'tower-selection',
              },
              zg.towers.map(e =>
                r.createElement(
                  Dg,
                  {
                    key: `${e.name}-overlay`,
                    placement: 'bottom',
                    delay: { show: 50, hide: 100 },
                    overlay: t =>
                      r.createElement(
                        Lg,
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
                    Sm,
                    {
                      key: e.name,
                      variant: 'outline-light',
                      onClick: () => {
                        jg.emit(Rg.TOWER_SELECTED, e);
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
              Om,
              {
                style: { pointerEvents: 'auto', padding: '1rem 1rem 0' },
                id: 'tool-selection',
              },
              r.createElement(
                Sm,
                {
                  key: 'move',
                  variant: 'outline-light',
                  onClick: () => {
                    jg.emit(Rg.MOVE_SELECTED);
                  },
                },
                r.createElement(or, { size: '2x', icon: S }),
                r.createElement('br', null),
                r.createElement('span', null, 'Move'),
              ),
              r.createElement(
                Sm,
                {
                  key: 'clear',
                  variant: 'outline-light',
                  onClick: () => {
                    jg.emit(Rg.CLEAR_MAP);
                  },
                },
                r.createElement(or, { size: '2x', icon: _ }),
                r.createElement('br', null),
                r.createElement('span', null, 'Clear'),
              ),
              r.createElement(
                Sm,
                {
                  key: 'erase',
                  variant: 'outline-light',
                  onClick: () => {
                    jg.emit(Rg.ERASER_SELECTED);
                  },
                },
                r.createElement(or, { size: '2x', icon: O }),
                r.createElement('br', null),
                r.createElement('span', null, 'Erase'),
              ),
              r.createElement(
                Sm,
                {
                  key: 'save',
                  variant: 'outline-light',
                  onClick: () => {
                    jg.emit(Rg.SAVE_MAP), e.saveMapCallback(t);
                  },
                },
                r.createElement(or, { size: '2x', icon: C }),
                r.createElement('br', null),
                r.createElement('span', null, 'Save'),
              ),
            ),
            r.createElement(iy, null),
          ),
          r.createElement(ay, null),
        )
  );
}
class sy {
  static loadMap(e) {
    jg.emit(Rg.LOAD_MAP, e);
  }
  static setTotalCoins(e) {
    Jb.totalCoins = e;
  }
  static preloadMap(e) {
    localStorage.setItem(Jb.mapLocalStorageKey, JSON.stringify(e));
  }
  static setLocalStorageKey(e) {
    Jb.mapLocalStorageKey = e;
  }
}
const ly = {
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
function uy(e) {
  const [t, n] = r.useState(!1),
    [a, i] = r.useState(!1),
    [o, k] = r.useState(''),
    [x, E] = r.useState(''),
    [S, C] = r.useState(),
    { setIsOpen: O } = v();
  let _;
  const P = new s(l),
    N = new u(l),
    T = new c(l);
  r.useEffect(() => {
    P.getLatestMap(
      'MapDesigner' == e.pageType ? 'NORMAL' : 'DAILY_CHALLENGE',
    ).then(e => {
      C(JSON.parse(e.map));
    }),
      setTimeout(() => {
        'DailyChallenge' != e.pageType &&
          T.getCurrentUser().then(e => {
            !1 === e.isTutorialComplete && 2 == e.tutorialLevel && O(!0);
          });
      }, 200);
  }, []);
  const D = e => {
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
            (_ = a.toDataURL()),
            A(e);
        }),
        (o.src = r);
    },
    M = () => n(!1),
    L = () => {
      E(''), k(''), i(!1);
    },
    A = t => {
      if (S) {
        switch (t) {
          case 'save':
            M(),
              P.updateLatestMap({
                mapType:
                  'MapDesigner' == e.pageType ? 'NORMAL' : 'DAILY_CHALLENGE',
                mapImage: _,
                map: JSON.stringify(S),
                lock: !1,
              })
                .then(() => {
                  h.success('Map Saved');
                })
                .catch(e => {
                  e instanceof m && h.error(e.message);
                });
            break;
          case 'submit':
            M(),
              P.updateLatestMap({
                mapType:
                  'MapDesigner' == e.pageType ? 'NORMAL' : 'DAILY_CHALLENGE',
                mapImage: _,
                map: JSON.stringify(S),
                lock: !0,
              })
                .then(() => {
                  'MapDesigner' == e.pageType && h.success('Map Submitted');
                })
                .catch(e => {
                  e instanceof m && h.error(e.message);
                }),
              'DailyChallenge' == e.pageType &&
                N.createDailyChallengeMatch({ value: JSON.stringify(S) })
                  .then(() => {
                    h.success('Daily Challenge submitted succesfully');
                  })
                  .catch(e => {
                    e instanceof m && h.error(e.message);
                  });
            break;
          case 'commit':
            if (!o) return void E('Commit name cannot be empty!');
            L(),
              P.createMapRevision({
                mapType: 'NORMAL',
                mapImage: _,
                map: JSON.stringify(S),
                message: o,
              })
                .then(() => {
                  h.success('Map Commit Created');
                })
                .catch(e => {
                  e instanceof m && h.error(e.message);
                });
        }
        C(void 0), M();
      }
    };
  r.useEffect(() => {
    sy.setLocalStorageKey(
      'MapDesigner' == e.pageType
        ? 'cc-map-designer-map'
        : 'dc-map-designer-map',
    );
  }, [e.pageType]);
  return f(d, {
    children: [
      p('div', {
        className: ly.mapDesignerContainer,
        children: p(oy, {
          saveMapCallback: e => {
            n(!0), C(e);
          },
          readonly: !1,
        }),
      }),
      p('div', { className: ly.PsuedoMap, id: 'Psuedo' }),
      f(g, {
        show: t,
        centered: !0,
        onHide: M,
        contentClassName: ly.content,
        children: [
          f(g.Header, {
            className: ly.modalHeader,
            children: [
              p(g.Title, { className: ly.headerText, children: 'Save Map' }),
              p('button', {
                type: 'button',
                className: 'btn-close btn-close-white',
                'aria-label': 'Close',
                onClick: M,
              }),
            ],
          }),
          f(g.Body, {
            className: ly.modalContent,
            children: [
              f(b, {
                fluid: !0,
                children: [
                  p(y, {
                    children: f('p', {
                      className: ly.contentP,
                      children: [
                        p('span', { children: 'SAVE' }),
                        ' : Save map only.',
                      ],
                    }),
                  }),
                  p(y, {
                    children: f('p', {
                      className: ly.contentP,
                      children: [
                        p('span', { children: 'SUBMIT' }),
                        ' :',
                        ' ',
                        'MapDesigner' == e.pageType
                          ? 'Save map and submit to Leaderboard.'
                          : 'Save map and submit against the challenge',
                      ],
                    }),
                  }),
                  'MapDesigner' == e.pageType
                    ? p(y, {
                        children: f('p', {
                          className: ly.contentP,
                          children: [
                            p('span', { children: 'COMMIT' }),
                            ' : Create a commit revision with the current map.',
                          ],
                        }),
                      })
                    : p(d, {}),
                ],
              }),
              f(b, {
                fluid: !0,
                className: ly.buttonRow,
                children: [
                  p(w, {
                    className: ly.modalButton,
                    size: 'lg',
                    onClick: () => {
                      D('save');
                    },
                    variant: 'outline-light',
                    children: 'SAVE',
                  }),
                  p(w, {
                    className: ly.modalButton,
                    size: 'lg',
                    onClick: () => {
                      D('submit');
                    },
                    variant: 'outline-light',
                    children: 'Submit',
                  }),
                  'MapDesigner' == e.pageType
                    ? p(w, {
                        className: ly.modalButton,
                        onClick: () => {
                          M(), i(!0);
                        },
                        variant: 'outline-light',
                        size: 'lg',
                        children: 'Commit',
                      })
                    : p(d, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      f(g, {
        show: a,
        centered: !0,
        children: [
          f(g.Header, {
            className: ly.modalHeader,
            children: [
              p(g.Title, { className: ly.headerText, children: 'Commit Name' }),
              p('button', {
                type: 'button',
                className: 'btn-close btn-close-white',
                'aria-label': 'Close',
                onClick: L,
              }),
            ],
          }),
          f(g.Body, {
            className: ly.modalContent,
            children: [
              p(y, {
                children: p('input', {
                  type: 'text',
                  placeholder: 'Enter Commit Message',
                  value: o,
                  className: ly.commitNameInput,
                  onChange: e => {
                    k(e.target.value);
                  },
                }),
              }),
              p('p', { className: ly.commitModalError, children: x }),
              p('div', {
                className: ly.buttonRow,
                children: p(w, {
                  size: 'lg',
                  variant: 'outline-light',
                  className: ly.modalButton,
                  onClick: () => {
                    D('commit');
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
export { uy as M };