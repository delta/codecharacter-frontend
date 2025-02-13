var t,
  e = Object.defineProperty,
  i = (t, i, s) => (
    ((t, i, s) => {
      i in t
        ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (t[i] = s);
    })(t, 'symbol' != typeof i ? i + '' : i, s),
    s
  );
import {
  r as s,
  am as n,
  j as o,
  c as a,
  br as r,
  d as h,
  C as l,
  A as c,
  _ as d,
  F as u,
  be as f,
  e as g,
  u as p,
  bs as m,
  b,
  bt as x,
  bu as _,
  v as y,
  k as v,
  s as w,
  bv as k,
  bw as M,
  a$ as S,
  bx as P,
} from './index-24a58ae8.js';
import { F as C, i as O, j as A } from './index.es-8a521e47.js';
import { R as D } from './index.esm-560e8225.js';
import { c as L } from './ThemeProvider-092c2682.js';
import { a as T, g as I } from './Avatar-86792f54.js';
import { F as E } from './Form-0bcab3dd.js';
import { B as R } from './Button-0a98cdad.js';
import './index-06bcf729.js';
import './FormGroup-06fc443c.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './Col-ae03dcbb.js';
const F = {
  profileBody: '_profileBody_rvoix_1',
  Container: '_Container_rvoix_8',
  footer: '_footer_rvoix_16',
  header: '_header_rvoix_19',
  userNameContent: '_userNameContent_rvoix_29',
  userName: '_userName_rvoix_29',
  changeCredsHeader: '_changeCredsHeader_rvoix_40',
  label: '_label_rvoix_47',
  profileContainer: '_profileContainer_rvoix_53',
  imageContainer: '_imageContainer_rvoix_60',
  profileName: '_profileName_rvoix_72',
  formContainer: '_formContainer_rvoix_76',
  flagContainer: '_flagContainer_rvoix_84',
  submitButton: '_submitButton_rvoix_113',
  eyeContainer: '_eyeContainer_rvoix_150',
  eye: '_eye_rvoix_150',
  linkButton: '_linkButton_rvoix_162',
  avatarContainer: '_avatarContainer_rvoix_184',
  avatar: '_avatar_rvoix_184',
  avatarSelected: '_avatarSelected_rvoix_223',
  avatarImg: '_avatarImg_rvoix_227',
  changeCredsContainer: '_changeCredsContainer_rvoix_232',
  inputField: '_inputField_rvoix_237',
  profileScrollBody: '_profileScrollBody_rvoix_263',
  toastPassword: '_toastPassword_rvoix_269',
};
function z(t) {
  return (t + 0.5) | 0;
}
const N = (t, e, i) => Math.max(Math.min(t, i), e);
function B(t) {
  return N(z(2.55 * t), 0, 255);
}
function H(t) {
  return N(z(255 * t), 0, 255);
}
function V(t) {
  return N(z(t / 2.55) / 100, 0, 1);
}
function j(t) {
  return N(z(100 * t), 0, 100);
}
const W = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  $ = [...'0123456789ABCDEF'],
  Y = t => $[15 & t],
  U = t => $[(240 & t) >> 4] + $[15 & t],
  X = t => (240 & t) >> 4 == (15 & t),
  q = t => X(t.r) && X(t.g) && X(t.b) && X(t.a);
const K = (t, e) => (t < 255 ? e(t) : '');
const G =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Z(t, e, i) {
  const s = e * Math.min(i, 1 - i),
    n = (e, n = (e + t / 30) % 12) =>
      i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
  return [n(0), n(8), n(4)];
}
function Q(t, e, i) {
  const s = (s, n = (s + t / 60) % 6) =>
    i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
  return [s(5), s(3), s(1)];
}
function J(t, e, i) {
  const s = Z(t, 1, 0.5);
  let n;
  for (e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0; n < 3; n++)
    (s[n] *= 1 - e - i), (s[n] += e);
  return s;
}
function tt(t) {
  const e = t.r / 255,
    i = t.g / 255,
    s = t.b / 255,
    n = Math.max(e, i, s),
    o = Math.min(e, i, s),
    a = (n + o) / 2;
  let r, h, l;
  return (
    n !== o &&
      ((l = n - o),
      (h = a > 0.5 ? l / (2 - n - o) : l / (n + o)),
      (r = (function (t, e, i, s, n) {
        return t === n
          ? (e - i) / s + (e < i ? 6 : 0)
          : e === n
          ? (i - t) / s + 2
          : (t - e) / s + 4;
      })(e, i, s, l, n)),
      (r = 60 * r + 0.5)),
    [0 | r, h || 0, a]
  );
}
function et(t, e, i, s) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(H);
}
function it(t, e, i) {
  return et(Z, t, e, i);
}
function st(t) {
  return ((t % 360) + 360) % 360;
}
function nt(t) {
  const e = G.exec(t);
  let i,
    s = 255;
  if (!e) return;
  e[5] !== i && (s = e[6] ? B(+e[5]) : H(+e[5]));
  const n = st(+e[2]),
    o = +e[3] / 100,
    a = +e[4] / 100;
  return (
    (i =
      'hwb' === e[1]
        ? (function (t, e, i) {
            return et(J, t, e, i);
          })(n, o, a)
        : 'hsv' === e[1]
        ? (function (t, e, i) {
            return et(Q, t, e, i);
          })(n, o, a)
        : it(n, o, a)),
    { r: i[0], g: i[1], b: i[2], a: s }
  );
}
const ot = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  at = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
let rt;
function ht(t) {
  rt ||
    ((rt = (function () {
      const t = {},
        e = Object.keys(at),
        i = Object.keys(ot);
      let s, n, o, a, r;
      for (s = 0; s < e.length; s++) {
        for (a = r = e[s], n = 0; n < i.length; n++)
          (o = i[n]), (r = r.replace(o, ot[o]));
        (o = parseInt(at[a], 16)),
          (t[r] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
      }
      return t;
    })()),
    (rt.transparent = [0, 0, 0, 0]));
  const e = rt[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
}
const lt =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
const ct = t =>
    t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
  dt = t => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function ut(t, e, i) {
  if (t) {
    let s = tt(t);
    (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
      (s = it(s)),
      (t.r = s[0]),
      (t.g = s[1]),
      (t.b = s[2]);
  }
}
function ft(t, e) {
  return t ? Object.assign(e || {}, t) : t;
}
function gt(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = H(t[3])))
      : ((e = ft(t, { r: 0, g: 0, b: 0, a: 1 })).a = H(e.a)),
    e
  );
}
function pt(t) {
  return 'r' === t.charAt(0)
    ? (function (t) {
        const e = lt.exec(t);
        let i,
          s,
          n,
          o = 255;
        if (e) {
          if (e[7] !== i) {
            const t = +e[7];
            o = e[8] ? B(t) : N(255 * t, 0, 255);
          }
          return (
            (i = +e[1]),
            (s = +e[3]),
            (n = +e[5]),
            (i = 255 & (e[2] ? B(i) : N(i, 0, 255))),
            (s = 255 & (e[4] ? B(s) : N(s, 0, 255))),
            (n = 255 & (e[6] ? B(n) : N(n, 0, 255))),
            { r: i, g: s, b: n, a: o }
          );
        }
      })(t)
    : nt(t);
}
class mt {
  constructor(t) {
    if (t instanceof mt) return t;
    const e = typeof t;
    let i;
    var s, n, o;
    'object' === e
      ? (i = gt(t))
      : 'string' === e &&
        ((o = (s = t).length),
        '#' === s[0] &&
          (4 === o || 5 === o
            ? (n = {
                r: 255 & (17 * W[s[1]]),
                g: 255 & (17 * W[s[2]]),
                b: 255 & (17 * W[s[3]]),
                a: 5 === o ? 17 * W[s[4]] : 255,
              })
            : (7 !== o && 9 !== o) ||
              (n = {
                r: (W[s[1]] << 4) | W[s[2]],
                g: (W[s[3]] << 4) | W[s[4]],
                b: (W[s[5]] << 4) | W[s[6]],
                a: 9 === o ? (W[s[7]] << 4) | W[s[8]] : 255,
              })),
        (i = n || ht(t) || pt(t))),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ft(this._rgb);
    return t && (t.a = V(t.a)), t;
  }
  set rgb(t) {
    this._rgb = gt(t);
  }
  rgbString() {
    return this._valid
      ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${V(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
      : void 0;
    var t;
  }
  hexString() {
    return this._valid
      ? ((t = this._rgb),
        (e = q(t) ? Y : U),
        t ? '#' + e(t.r) + e(t.g) + e(t.b) + K(t.a, e) : void 0)
      : void 0;
    var t, e;
  }
  hslString() {
    return this._valid
      ? (function (t) {
          if (!t) return;
          const e = tt(t),
            i = e[0],
            s = j(e[1]),
            n = j(e[2]);
          return t.a < 255
            ? `hsla(${i}, ${s}%, ${n}%, ${V(t.a)})`
            : `hsl(${i}, ${s}%, ${n}%)`;
        })(this._rgb)
      : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb,
        s = t.rgb;
      let n;
      const o = e === n ? 0.5 : e,
        a = 2 * o - 1,
        r = i.a - s.a,
        h = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
      (n = 1 - h),
        (i.r = 255 & (h * i.r + n * s.r + 0.5)),
        (i.g = 255 & (h * i.g + n * s.g + 0.5)),
        (i.b = 255 & (h * i.b + n * s.b + 0.5)),
        (i.a = o * i.a + (1 - o) * s.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, e) {
    return (
      t &&
        (this._rgb = (function (t, e, i) {
          const s = dt(V(t.r)),
            n = dt(V(t.g)),
            o = dt(V(t.b));
          return {
            r: H(ct(s + i * (dt(V(e.r)) - s))),
            g: H(ct(n + i * (dt(V(e.g)) - n))),
            b: H(ct(o + i * (dt(V(e.b)) - o))),
            a: t.a + i * (e.a - t.a),
          };
        })(this._rgb, t._rgb, e)),
      this
    );
  }
  clone() {
    return new mt(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = H(t)), this;
  }
  clearer(t) {
    return (this._rgb.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = z(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    return (this._rgb.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return ut(this._rgb, 2, t), this;
  }
  darken(t) {
    return ut(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ut(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ut(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return (
      (function (t, e) {
        var i = tt(t);
        (i[0] = st(i[0] + e)),
          (i = it(i)),
          (t.r = i[0]),
          (t.g = i[1]),
          (t.b = i[2]);
      })(this._rgb, t),
      this
    );
  }
}
function bt() {}
const xt = (() => {
  let t = 0;
  return () => t++;
})();
function _t(t) {
  return null == t;
}
function yt(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
}
function vt(t) {
  return null !== t && '[object Object]' === Object.prototype.toString.call(t);
}
function wt(t) {
  return ('number' == typeof t || t instanceof Number) && isFinite(+t);
}
function kt(t, e) {
  return wt(t) ? t : e;
}
function Mt(t, e) {
  return void 0 === t ? e : t;
}
const St = (t, e) =>
  'string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
function Pt(t, e, i) {
  if (t && 'function' == typeof t.call) return t.apply(i, e);
}
function Ct(t, e, i, s) {
  let n, o, a;
  if (yt(t))
    if (((o = t.length), s)) for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
    else for (n = 0; n < o; n++) e.call(i, t[n], n);
  else if (vt(t))
    for (a = Object.keys(t), o = a.length, n = 0; n < o; n++)
      e.call(i, t[a[n]], a[n]);
}
function Ot(t, e) {
  let i, s, n, o;
  if (!t || !e || t.length !== e.length) return !1;
  for (i = 0, s = t.length; i < s; ++i)
    if (
      ((n = t[i]),
      (o = e[i]),
      n.datasetIndex !== o.datasetIndex || n.index !== o.index)
    )
      return !1;
  return !0;
}
function At(t) {
  if (yt(t)) return t.map(At);
  if (vt(t)) {
    const e = Object.create(null),
      i = Object.keys(t),
      s = i.length;
    let n = 0;
    for (; n < s; ++n) e[i[n]] = At(t[i[n]]);
    return e;
  }
  return t;
}
function Dt(t) {
  return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
}
function Lt(t, e, i, s) {
  if (!Dt(t)) return;
  const n = e[t],
    o = i[t];
  vt(n) && vt(o) ? Tt(n, o, s) : (e[t] = At(o));
}
function Tt(t, e, i) {
  const s = yt(e) ? e : [e],
    n = s.length;
  if (!vt(t)) return t;
  const o = (i = i || {}).merger || Lt;
  let a;
  for (let r = 0; r < n; ++r) {
    if (((a = s[r]), !vt(a))) continue;
    const e = Object.keys(a);
    for (let s = 0, n = e.length; s < n; ++s) o(e[s], t, a, i);
  }
  return t;
}
function It(t, e) {
  return Tt(t, e, { merger: Et });
}
function Et(t, e, i) {
  if (!Dt(t)) return;
  const s = e[t],
    n = i[t];
  vt(s) && vt(n)
    ? It(s, n)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = At(n));
}
const Rt = { '': t => t, x: t => t.x, y: t => t.y };
function Ft(t, e) {
  const i =
    Rt[e] ||
    (Rt[e] = (function (t) {
      const e = (function (t) {
        const e = t.split('.'),
          i = [];
        let s = '';
        for (const n of e)
          (s += n),
            s.endsWith('\\')
              ? (s = s.slice(0, -1) + '.')
              : (i.push(s), (s = ''));
        return i;
      })(t);
      return t => {
        for (const i of e) {
          if ('' === i) break;
          t = t && t[i];
        }
        return t;
      };
    })(e));
  return i(t);
}
function zt(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Nt = t => void 0 !== t,
  Bt = t => 'function' == typeof t,
  Ht = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const i of t) if (!e.has(i)) return !1;
    return !0;
  };
const Vt = Math.PI,
  jt = 2 * Vt,
  Wt = Number.POSITIVE_INFINITY,
  $t = Vt / 180,
  Yt = Vt / 2,
  Ut = Vt / 4,
  Xt = (2 * Vt) / 3,
  qt = Math.log10,
  Kt = Math.sign;
function Gt(t, e, i) {
  return Math.abs(t - e) < i;
}
function Zt(t) {
  const e = Math.round(t);
  t = Gt(t, e, t / 1e3) ? e : t;
  const i = Math.pow(10, Math.floor(qt(t))),
    s = t / i;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
}
function Qt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Jt(t, e, i) {
  let s, n, o;
  for (s = 0, n = t.length; s < n; s++)
    (o = t[s][i]),
      isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
}
function te(t) {
  return t * (Vt / 180);
}
function ee(t) {
  return t * (180 / Vt);
}
function ie(t) {
  if (!wt(t)) return;
  let e = 1,
    i = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
  return i;
}
function se(t) {
  return ((t % jt) + jt) % jt;
}
function ne(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function oe(t, e, i, s = 1e-6) {
  return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
}
function ae(t, e, i) {
  i = i || (i => t[i] < e);
  let s,
    n = t.length - 1,
    o = 0;
  for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
  return { lo: o, hi: n };
}
const re = (t, e, i, s) =>
    ae(
      t,
      i,
      s
        ? s => {
            const n = t[s][e];
            return n < i || (n === i && t[s + 1][e] === i);
          }
        : s => t[s][e] < i,
    ),
  he = (t, e, i) => ae(t, i, s => t[s][e] >= i);
const le = ['push', 'pop', 'shift', 'splice', 'unshift'];
function ce(t, e) {
  const i = t._chartjs;
  if (!i) return;
  const s = i.listeners,
    n = s.indexOf(e);
  -1 !== n && s.splice(n, 1),
    s.length > 0 ||
      (le.forEach(e => {
        delete t[e];
      }),
      delete t._chartjs);
}
function de(t) {
  const e = new Set();
  let i, s;
  for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
  return e.size === s ? t : Array.from(e);
}
const ue =
  'undefined' == typeof window
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
function fe(t, e) {
  let i = [],
    s = !1;
  return function (...n) {
    (i = n),
      s ||
        ((s = !0),
        ue.call(window, () => {
          (s = !1), t.apply(e, i);
        }));
  };
}
const ge = t => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
  pe = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2),
  me = t => 0 === t || 1 === t,
  be = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * jt) / i),
  xe = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * jt) / i) + 1,
  _e = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => -t * (t - 2),
    easeInOutQuad: t =>
      (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (t -= 1) * t * t + 1,
    easeInOutCubic: t =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: t =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: t =>
      (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: t => 1 - Math.cos(t * Yt),
    easeOutSine: t => Math.sin(t * Yt),
    easeInOutSine: t => -0.5 * (Math.cos(Vt * t) - 1),
    easeInExpo: t => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: t => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
    easeInOutExpo: t =>
      me(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
        : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
    easeInCirc: t => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: t =>
      (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: t => (me(t) ? t : be(t, 0.075, 0.3)),
    easeOutElastic: t => (me(t) ? t : xe(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      const e = 0.1125;
      return me(t)
        ? t
        : t < 0.5
        ? 0.5 * be(2 * t, e, 0.45)
        : 0.5 + 0.5 * xe(2 * t - 1, e, 0.45);
    },
    easeInBack(t) {
      const e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack(t) {
      const e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: t => 1 - _e.easeOutBounce(1 - t),
    easeOutBounce(t) {
      const e = 7.5625,
        i = 2.75;
      return t < 1 / i
        ? e * t * t
        : t < 2 / i
        ? e * (t -= 1.5 / i) * t + 0.75
        : t < 2.5 / i
        ? e * (t -= 2.25 / i) * t + 0.9375
        : e * (t -= 2.625 / i) * t + 0.984375;
    },
    easeInOutBounce: t =>
      t < 0.5
        ? 0.5 * _e.easeInBounce(2 * t)
        : 0.5 * _e.easeOutBounce(2 * t - 1) + 0.5,
  };
function ye(t) {
  if (t && 'object' == typeof t) {
    const e = t.toString();
    return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
  }
  return !1;
}
function ve(t) {
  return ye(t) ? t : new mt(t);
}
function we(t) {
  return ye(t) ? t : new mt(t).saturate(0.5).darken(0.1).hexString();
}
const ke = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  Me = ['color', 'borderColor', 'backgroundColor'];
const Se = new Map();
function Pe(t, e, i) {
  return (function (t, e) {
    e = e || {};
    const i = t + JSON.stringify(e);
    let s = Se.get(i);
    return s || ((s = new Intl.NumberFormat(t, e)), Se.set(i, s)), s;
  })(e, i).format(t);
}
const Ce = {
  values: t => (yt(t) ? t : '' + t),
  numeric(t, e, i) {
    if (0 === t) return '0';
    const s = this.chart.options.locale;
    let n,
      o = t;
    if (i.length > 1) {
      const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (e < 1e-4 || e > 1e15) && (n = 'scientific'),
        (o = (function (t, e) {
          let i =
            e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        })(t, i));
    }
    const a = qt(Math.abs(o)),
      r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      h = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r };
    return Object.assign(h, this.options.ticks.format), Pe(t, s, h);
  },
  logarithmic(t, e, i) {
    if (0 === t) return '0';
    const s = i[e].significand || t / Math.pow(10, Math.floor(qt(t)));
    return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
      ? Ce.numeric.call(this, t, e, i)
      : '';
  },
};
var Oe = { formatters: Ce };
const Ae = Object.create(null),
  De = Object.create(null);
function Le(t, e) {
  if (!e) return t;
  const i = e.split('.');
  for (let s = 0, n = i.length; s < n; ++s) {
    const e = i[s];
    t = t[e] || (t[e] = Object.create(null));
  }
  return t;
}
function Te(t, e, i) {
  return 'string' == typeof e ? Tt(Le(t, e), i) : Tt(Le(t, ''), e);
}
class Ie {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove',
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (t, e) => we(e.backgroundColor)),
      (this.hoverBorderColor = (t, e) => we(e.borderColor)),
      (this.hoverColor = (t, e) => we(e.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return Te(this, t, e);
  }
  get(t) {
    return Le(this, t);
  }
  describe(t, e) {
    return Te(De, t, e);
  }
  override(t, e) {
    return Te(Ae, t, e);
  }
  route(t, e, i, s) {
    const n = Le(this, t),
      o = Le(this, i),
      a = '_' + e;
    Object.defineProperties(n, {
      [a]: { value: n[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const t = this[a],
            e = o[s];
          return vt(t) ? Object.assign({}, e, t) : Mt(t, e);
        },
        set(t) {
          this[a] = t;
        },
      },
    });
  }
  apply(t) {
    t.forEach(t => t(this));
  }
}
var Ee = new Ie(
  {
    _scriptable: t => !t.startsWith('on'),
    _indexable: t => 'events' !== t,
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [
    function (t) {
      t.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      }),
        t.describe('animation', {
          _fallback: !1,
          _indexable: !1,
          _scriptable: t =>
            'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
        }),
        t.set('animations', {
          colors: { type: 'color', properties: Me },
          numbers: { type: 'number', properties: ke },
        }),
        t.describe('animations', { _fallback: 'animation' }),
        t.set('transitions', {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: 'transparent' },
              visible: { type: 'boolean', duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: 'transparent' },
              visible: { type: 'boolean', easing: 'linear', fn: t => 0 | t },
            },
          },
        });
    },
    function (t) {
      t.set('layout', {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
    },
    function (t) {
      t.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Oe.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: !1,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2,
        },
      }),
        t.route('scale.ticks', 'color', '', 'color'),
        t.route('scale.grid', 'color', '', 'borderColor'),
        t.route('scale.border', 'color', '', 'borderColor'),
        t.route('scale.title', 'color', '', 'color'),
        t.describe('scale', {
          _fallback: !1,
          _scriptable: t =>
            !t.startsWith('before') &&
            !t.startsWith('after') &&
            'callback' !== t &&
            'parser' !== t,
          _indexable: t =>
            'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
        }),
        t.describe('scales', { _fallback: 'scale' }),
        t.describe('scale.ticks', {
          _scriptable: t => 'backdropPadding' !== t && 'callback' !== t,
          _indexable: t => 'backdropPadding' !== t,
        });
    },
  ],
);
function Re(t, e, i, s, n) {
  let o = e[n];
  return (
    o || ((o = e[n] = t.measureText(n).width), i.push(n)), o > s && (s = o), s
  );
}
function Fe(t, e, i, s) {
  let n = ((s = s || {}).data = s.data || {}),
    o = (s.garbageCollect = s.garbageCollect || []);
  s.font !== e &&
    ((n = s.data = {}), (o = s.garbageCollect = []), (s.font = e)),
    t.save(),
    (t.font = e);
  let a = 0;
  const r = i.length;
  let h, l, c, d, u;
  for (h = 0; h < r; h++)
    if (((d = i[h]), null != d && !0 !== yt(d))) a = Re(t, n, o, a, d);
    else if (yt(d))
      for (l = 0, c = d.length; l < c; l++)
        (u = d[l]), null == u || yt(u) || (a = Re(t, n, o, a, u));
  t.restore();
  const f = o.length / 2;
  if (f > i.length) {
    for (h = 0; h < f; h++) delete n[o[h]];
    o.splice(0, f);
  }
  return a;
}
function ze(t, e, i) {
  const s = t.currentDevicePixelRatio,
    n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
  return Math.round((e - n) * s) / s + n;
}
function Ne(t, e) {
  (e = e || t.getContext('2d')).save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore();
}
function Be(t, e, i, s) {
  He(t, e, i, s, null);
}
function He(t, e, i, s, n) {
  let o, a, r, h, l, c, d, u;
  const f = e.pointStyle,
    g = e.rotation,
    p = e.radius;
  let m = (g || 0) * $t;
  if (
    f &&
    'object' == typeof f &&
    ((o = f.toString()),
    '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
  )
    return (
      t.save(),
      t.translate(i, s),
      t.rotate(m),
      t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      void t.restore()
    );
  if (!(isNaN(p) || p <= 0)) {
    switch ((t.beginPath(), f)) {
      default:
        n ? t.ellipse(i, s, n / 2, p, 0, 0, jt) : t.arc(i, s, p, 0, jt),
          t.closePath();
        break;
      case 'triangle':
        (c = n ? n / 2 : p),
          t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
          (m += Xt),
          t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
          (m += Xt),
          t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
          t.closePath();
        break;
      case 'rectRounded':
        (l = 0.516 * p),
          (h = p - l),
          (a = Math.cos(m + Ut) * h),
          (d = Math.cos(m + Ut) * (n ? n / 2 - l : h)),
          (r = Math.sin(m + Ut) * h),
          (u = Math.sin(m + Ut) * (n ? n / 2 - l : h)),
          t.arc(i - d, s - r, l, m - Vt, m - Yt),
          t.arc(i + u, s - a, l, m - Yt, m),
          t.arc(i + d, s + r, l, m, m + Yt),
          t.arc(i - u, s + a, l, m + Yt, m + Vt),
          t.closePath();
        break;
      case 'rect':
        if (!g) {
          (h = Math.SQRT1_2 * p),
            (c = n ? n / 2 : h),
            t.rect(i - c, s - h, 2 * c, 2 * h);
          break;
        }
        m += Ut;
      case 'rectRot':
        (d = Math.cos(m) * (n ? n / 2 : p)),
          (a = Math.cos(m) * p),
          (r = Math.sin(m) * p),
          (u = Math.sin(m) * (n ? n / 2 : p)),
          t.moveTo(i - d, s - r),
          t.lineTo(i + u, s - a),
          t.lineTo(i + d, s + r),
          t.lineTo(i - u, s + a),
          t.closePath();
        break;
      case 'crossRot':
        m += Ut;
      case 'cross':
        (d = Math.cos(m) * (n ? n / 2 : p)),
          (a = Math.cos(m) * p),
          (r = Math.sin(m) * p),
          (u = Math.sin(m) * (n ? n / 2 : p)),
          t.moveTo(i - d, s - r),
          t.lineTo(i + d, s + r),
          t.moveTo(i + u, s - a),
          t.lineTo(i - u, s + a);
        break;
      case 'star':
        (d = Math.cos(m) * (n ? n / 2 : p)),
          (a = Math.cos(m) * p),
          (r = Math.sin(m) * p),
          (u = Math.sin(m) * (n ? n / 2 : p)),
          t.moveTo(i - d, s - r),
          t.lineTo(i + d, s + r),
          t.moveTo(i + u, s - a),
          t.lineTo(i - u, s + a),
          (m += Ut),
          (d = Math.cos(m) * (n ? n / 2 : p)),
          (a = Math.cos(m) * p),
          (r = Math.sin(m) * p),
          (u = Math.sin(m) * (n ? n / 2 : p)),
          t.moveTo(i - d, s - r),
          t.lineTo(i + d, s + r),
          t.moveTo(i + u, s - a),
          t.lineTo(i - u, s + a);
        break;
      case 'line':
        (a = n ? n / 2 : Math.cos(m) * p),
          (r = Math.sin(m) * p),
          t.moveTo(i - a, s - r),
          t.lineTo(i + a, s + r);
        break;
      case 'dash':
        t.moveTo(i, s),
          t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
        break;
      case !1:
        t.closePath();
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function Ve(t, e, i) {
  return (
    (i = i || 0.5),
    !e ||
      (t &&
        t.x > e.left - i &&
        t.x < e.right + i &&
        t.y > e.top - i &&
        t.y < e.bottom + i)
  );
}
function je(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function We(t) {
  t.restore();
}
function $e(t, e, i, s, n, o = {}) {
  const a = yt(e) ? e : [e],
    r = o.strokeWidth > 0 && '' !== o.strokeColor;
  let h, l;
  for (
    t.save(),
      t.font = n.string,
      (function (t, e) {
        e.translation && t.translate(e.translation[0], e.translation[1]);
        _t(e.rotation) || t.rotate(e.rotation);
        e.color && (t.fillStyle = e.color);
        e.textAlign && (t.textAlign = e.textAlign);
        e.textBaseline && (t.textBaseline = e.textBaseline);
      })(t, o),
      h = 0;
    h < a.length;
    ++h
  )
    (l = a[h]),
      o.backdrop && Ue(t, o.backdrop),
      r &&
        (o.strokeColor && (t.strokeStyle = o.strokeColor),
        _t(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
        t.strokeText(l, i, s, o.maxWidth)),
      t.fillText(l, i, s, o.maxWidth),
      Ye(t, i, s, l, o),
      (s += n.lineHeight);
  t.restore();
}
function Ye(t, e, i, s, n) {
  if (n.strikethrough || n.underline) {
    const o = t.measureText(s),
      a = e - o.actualBoundingBoxLeft,
      r = e + o.actualBoundingBoxRight,
      h = i - o.actualBoundingBoxAscent,
      l = i + o.actualBoundingBoxDescent,
      c = n.strikethrough ? (h + l) / 2 : l;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = n.decorationWidth || 2),
      t.moveTo(a, c),
      t.lineTo(r, c),
      t.stroke();
  }
}
function Ue(t, e) {
  const i = t.fillStyle;
  (t.fillStyle = e.color),
    t.fillRect(e.left, e.top, e.width, e.height),
    (t.fillStyle = i);
}
function Xe(t, e) {
  const { x: i, y: s, w: n, h: o, radius: a } = e;
  t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -Yt, Vt, !0),
    t.lineTo(i, s + o - a.bottomLeft),
    t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, Vt, Yt, !0),
    t.lineTo(i + n - a.bottomRight, s + o),
    t.arc(
      i + n - a.bottomRight,
      s + o - a.bottomRight,
      a.bottomRight,
      Yt,
      0,
      !0,
    ),
    t.lineTo(i + n, s + a.topRight),
    t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -Yt, !0),
    t.lineTo(i + a.topLeft, s);
}
const qe = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Ke = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ge(t, e) {
  const i = ('' + t).match(qe);
  if (!i || 'normal' === i[1]) return 1.2 * e;
  switch (((t = +i[2]), i[3])) {
    case 'px':
      return t;
    case '%':
      t /= 100;
  }
  return e * t;
}
const Ze = t => +t || 0;
function Qe(t, e) {
  const i = {},
    s = vt(e),
    n = s ? Object.keys(e) : e,
    o = vt(t) ? (s ? i => Mt(t[i], t[e[i]]) : e => t[e]) : () => t;
  for (const a of n) i[a] = Ze(o(a));
  return i;
}
function Je(t) {
  return Qe(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function ti(t) {
  return Qe(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function ei(t) {
  const e = Je(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function ii(t, e) {
  (t = t || {}), (e = e || Ee.font);
  let i = Mt(t.size, e.size);
  'string' == typeof i && (i = parseInt(i, 10));
  let s = Mt(t.style, e.style);
  s &&
    !('' + s).match(Ke) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const n = {
    family: Mt(t.family, e.family),
    lineHeight: Ge(Mt(t.lineHeight, e.lineHeight), i),
    size: i,
    style: s,
    weight: Mt(t.weight, e.weight),
    string: '',
  };
  return (
    (n.string = (function (t) {
      return !t || _t(t.size) || _t(t.family)
        ? null
        : (t.style ? t.style + ' ' : '') +
            (t.weight ? t.weight + ' ' : '') +
            t.size +
            'px ' +
            t.family;
    })(n)),
    n
  );
}
function si(t, e, i, s) {
  let n,
    o,
    a,
    r = !0;
  for (n = 0, o = t.length; n < o; ++n)
    if (
      ((a = t[n]),
      void 0 !== a &&
        (void 0 !== e && 'function' == typeof a && ((a = a(e)), (r = !1)),
        void 0 !== i && yt(a) && ((a = a[i % a.length]), (r = !1)),
        void 0 !== a))
    )
      return s && !r && (s.cacheable = !1), a;
}
function ni(t, e) {
  return Object.assign(Object.create(t), e);
}
function oi(t, e = [''], i = t, s, n = () => t[0]) {
  Nt(s) || (s = mi('_fallback', t));
  const o = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: t,
    _rootScopes: i,
    _fallback: s,
    _getTarget: n,
    override: n => oi([n, ...t], e, i, s),
  };
  return new Proxy(o, {
    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
    get: (i, s) =>
      ci(i, s, () =>
        (function (t, e, i, s) {
          let n;
          for (const o of e)
            if (((n = mi(hi(o, t), i)), Nt(n)))
              return li(t, n) ? gi(i, s, t, n) : n;
        })(s, e, t, i),
      ),
    getOwnPropertyDescriptor: (t, e) =>
      Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
    has: (t, e) => bi(t).includes(e),
    ownKeys: t => bi(t),
    set(t, e, i) {
      const s = t._storage || (t._storage = n());
      return (t[e] = s[e] = i), delete t._keys, !0;
    },
  });
}
function ai(t, e, i, s) {
  const n = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: ri(t, s),
    setContext: e => ai(t, e, i, s),
    override: n => ai(t.override(n), e, i, s),
  };
  return new Proxy(n, {
    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
    get: (t, e, i) =>
      ci(t, e, () =>
        (function (t, e, i) {
          const { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = t;
          let r = s[e];
          Bt(r) &&
            a.isScriptable(e) &&
            (r = (function (t, e, i, s) {
              const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i;
              if (r.has(t))
                throw new Error(
                  'Recursion detected: ' + Array.from(r).join('->') + '->' + t,
                );
              r.add(t),
                (e = e(o, a || s)),
                r.delete(t),
                li(t, e) && (e = gi(n._scopes, n, t, e));
              return e;
            })(e, r, t, i));
          yt(r) &&
            r.length &&
            (r = (function (t, e, i, s) {
              const {
                _proxy: n,
                _context: o,
                _subProxy: a,
                _descriptors: r,
              } = i;
              if (Nt(o.index) && s(t)) e = e[o.index % e.length];
              else if (vt(e[0])) {
                const i = e,
                  s = n._scopes.filter(t => t !== i);
                e = [];
                for (const h of i) {
                  const i = gi(s, n, t, h);
                  e.push(ai(i, o, a && a[t], r));
                }
              }
              return e;
            })(e, r, t, a.isIndexable));
          li(e, r) && (r = ai(r, n, o && o[e], a));
          return r;
        })(t, e, i),
      ),
    getOwnPropertyDescriptor: (e, i) =>
      e._descriptors.allKeys
        ? Reflect.has(t, i)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, i),
    getPrototypeOf: () => Reflect.getPrototypeOf(t),
    has: (e, i) => Reflect.has(t, i),
    ownKeys: () => Reflect.ownKeys(t),
    set: (e, i, s) => ((t[i] = s), delete e[i], !0),
  });
}
function ri(t, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: i = e.scriptable,
    _indexable: s = e.indexable,
    _allKeys: n = e.allKeys,
  } = t;
  return {
    allKeys: n,
    scriptable: i,
    indexable: s,
    isScriptable: Bt(i) ? i : () => i,
    isIndexable: Bt(s) ? s : () => s,
  };
}
const hi = (t, e) => (t ? t + zt(e) : e),
  li = (t, e) =>
    vt(e) &&
    'adapters' !== t &&
    (null === Object.getPrototypeOf(e) || e.constructor === Object);
function ci(t, e, i) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  const s = i();
  return (t[e] = s), s;
}
function di(t, e, i) {
  return Bt(t) ? t(e, i) : t;
}
const ui = (t, e) => (!0 === t ? e : 'string' == typeof t ? Ft(e, t) : void 0);
function fi(t, e, i, s, n) {
  for (const o of e) {
    const e = ui(i, o);
    if (e) {
      t.add(e);
      const o = di(e._fallback, i, n);
      if (Nt(o) && o !== i && o !== s) return o;
    } else if (!1 === e && Nt(s) && i !== s) return null;
  }
  return !1;
}
function gi(t, e, i, s) {
  const n = e._rootScopes,
    o = di(e._fallback, i, s),
    a = [...t, ...n],
    r = new Set();
  r.add(s);
  let h = pi(r, a, i, o || i, s);
  return (
    null !== h &&
    (!Nt(o) || o === i || ((h = pi(r, a, o, h, s)), null !== h)) &&
    oi(Array.from(r), [''], n, o, () =>
      (function (t, e, i) {
        const s = t._getTarget();
        e in s || (s[e] = {});
        const n = s[e];
        if (yt(n) && vt(i)) return i;
        return n || {};
      })(e, i, s),
    )
  );
}
function pi(t, e, i, s, n) {
  for (; i; ) i = fi(t, e, i, s, n);
  return i;
}
function mi(t, e) {
  for (const i of e) {
    if (!i) continue;
    const e = i[t];
    if (Nt(e)) return e;
  }
}
function bi(t) {
  let e = t._keys;
  return (
    e ||
      (e = t._keys =
        (function (t) {
          const e = new Set();
          for (const i of t)
            for (const t of Object.keys(i).filter(t => !t.startsWith('_')))
              e.add(t);
          return Array.from(e);
        })(t._scopes)),
    e
  );
}
function xi() {
  return 'undefined' != typeof window && 'undefined' != typeof document;
}
function _i(t) {
  let e = t.parentNode;
  return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
}
function yi(t, e, i) {
  let s;
  return (
    'string' == typeof t
      ? ((s = parseInt(t, 10)),
        -1 !== t.indexOf('%') && (s = (s / 100) * e.parentNode[i]))
      : (s = t),
    s
  );
}
const vi = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
const wi = ['top', 'right', 'bottom', 'left'];
function ki(t, e, i) {
  const s = {};
  i = i ? '-' + i : '';
  for (let n = 0; n < 4; n++) {
    const o = wi[n];
    s[o] = parseFloat(t[e + '-' + o + i]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const Mi = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
function Si(t, e) {
  if ('native' in t) return t;
  const { canvas: i, currentDevicePixelRatio: s } = e,
    n = vi(i),
    o = 'border-box' === n.boxSizing,
    a = ki(n, 'padding'),
    r = ki(n, 'border', 'width'),
    {
      x: h,
      y: l,
      box: c,
    } = (function (t, e) {
      const i = t.touches,
        s = i && i.length ? i[0] : t,
        { offsetX: n, offsetY: o } = s;
      let a,
        r,
        h = !1;
      if (Mi(n, o, t.target)) (a = n), (r = o);
      else {
        const t = e.getBoundingClientRect();
        (a = s.clientX - t.left), (r = s.clientY - t.top), (h = !0);
      }
      return { x: a, y: r, box: h };
    })(t, i),
    d = a.left + (c && r.left),
    u = a.top + (c && r.top);
  let { width: f, height: g } = e;
  return (
    o && ((f -= a.width + r.width), (g -= a.height + r.height)),
    {
      x: Math.round((((h - d) / f) * i.width) / s),
      y: Math.round((((l - u) / g) * i.height) / s),
    }
  );
}
const Pi = t => Math.round(10 * t) / 10;
function Ci(t, e, i, s) {
  const n = vi(t),
    o = ki(n, 'margin'),
    a = yi(n.maxWidth, t, 'clientWidth') || Wt,
    r = yi(n.maxHeight, t, 'clientHeight') || Wt,
    h = (function (t, e, i) {
      let s, n;
      if (void 0 === e || void 0 === i) {
        const o = _i(t);
        if (o) {
          const t = o.getBoundingClientRect(),
            a = vi(o),
            r = ki(a, 'border', 'width'),
            h = ki(a, 'padding');
          (e = t.width - h.width - r.width),
            (i = t.height - h.height - r.height),
            (s = yi(a.maxWidth, o, 'clientWidth')),
            (n = yi(a.maxHeight, o, 'clientHeight'));
        } else (e = t.clientWidth), (i = t.clientHeight);
      }
      return { width: e, height: i, maxWidth: s || Wt, maxHeight: n || Wt };
    })(t, e, i);
  let { width: l, height: c } = h;
  if ('content-box' === n.boxSizing) {
    const t = ki(n, 'border', 'width'),
      e = ki(n, 'padding');
    (l -= e.width + t.width), (c -= e.height + t.height);
  }
  (l = Math.max(0, l - o.width)),
    (c = Math.max(0, s ? l / s : c - o.height)),
    (l = Pi(Math.min(l, a, h.maxWidth))),
    (c = Pi(Math.min(c, r, h.maxHeight))),
    l && !c && (c = Pi(l / 2));
  return (
    (void 0 !== e || void 0 !== i) &&
      s &&
      h.height &&
      c > h.height &&
      ((c = h.height), (l = Pi(Math.floor(c * s)))),
    { width: l, height: c }
  );
}
function Oi(t, e, i) {
  const s = e || 1,
    n = Math.floor(t.height * s),
    o = Math.floor(t.width * s);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const a = t.canvas;
  return (
    a.style &&
      (i || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
    (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) &&
      ((t.currentDevicePixelRatio = s),
      (a.height = n),
      (a.width = o),
      t.ctx.setTransform(s, 0, 0, s, 0, 0),
      !0)
  );
}
const Ai = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    window.addEventListener('test', null, e),
      window.removeEventListener('test', null, e);
  } catch (e) {}
  return t;
})();
function Di(t, e) {
  const i = (function (t, e) {
      return vi(t).getPropertyValue(e);
    })(t, e),
    s = i && i.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
const Li = function (t, e) {
    return {
      x: i => t + t + e - i,
      setWidth(t) {
        e = t;
      },
      textAlign: t => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
      xPlus: (t, e) => t - e,
      leftForLtr: (t, e) => t - e,
    };
  },
  Ti = function () {
    return {
      x: t => t,
      setWidth(t) {},
      textAlign: t => t,
      xPlus: (t, e) => t + e,
      leftForLtr: (t, e) => t,
    };
  };
function Ii(t, e, i) {
  return t ? Li(e, i) : Ti();
}
function Ei(t, e) {
  let i, s;
  ('ltr' !== e && 'rtl' !== e) ||
    ((i = t.canvas.style),
    (s = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
    i.setProperty('direction', e, 'important'),
    (t.prevTextDirection = s));
}
function Ri(t, e) {
  void 0 !== e &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty('direction', e[0], e[1]));
}
class Fi {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, i, s) {
    const n = e.listeners[s],
      o = e.duration;
    n.forEach(s =>
      s({
        chart: t,
        initial: e.initial,
        numSteps: o,
        currentStep: Math.min(i - e.start, o),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = ue.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return;
      const n = i.items;
      let o,
        a = n.length - 1,
        r = !1;
      for (; a >= 0; --a)
        (o = n[a]),
          o._active
            ? (o._total > i.duration && (i.duration = o._total),
              o.tick(t),
              (r = !0))
            : ((n[a] = n[n.length - 1]), n.pop());
      r && (s.draw(), this._notify(s, i, t, 'progress')),
        n.length ||
          ((i.running = !1),
          this._notify(s, i, t, 'complete'),
          (i.initial = !1)),
        (e += n.length);
    }),
      (this._lastDate = t),
      0 === e && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, i)),
      i
    );
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    e && e.length && this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !!(e && e.running && e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s) i[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), 'complete');
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var zi = new Fi();
const Ni = 'transparent',
  Bi = {
    boolean: (t, e, i) => (i > 0.5 ? e : t),
    color(t, e, i) {
      const s = ve(t || Ni),
        n = s.valid && ve(e || Ni);
      return n && n.valid ? n.mix(s, i).hexString() : e;
    },
    number: (t, e, i) => t + (e - t) * i,
  };
class Hi {
  constructor(t, e, i, s) {
    const n = e[i];
    s = si([t.to, s, n, t.from]);
    const o = si([t.from, n, s]);
    (this._active = !0),
      (this._fn = t.fn || Bi[t.type || typeof o]),
      (this._easing = _e[t.easing] || _e.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = i),
      (this._from = o),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        n = i - this._start,
        o = this._duration - n;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += n),
        (this._loop = !!t.loop),
        (this._to = si([t.to, e, s, t.from])),
        (this._from = si([t.from, s, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      i = this._duration,
      s = this._prop,
      n = this._from,
      o = this._loop,
      a = this._to;
    let r;
    if (((this._active = n !== a && (o || e < i)), !this._active))
      return (this._target[s] = a), void this._notify(!0);
    e < 0
      ? (this._target[s] = n)
      : ((r = (e / i) % 2),
        (r = o && r > 1 ? 2 - r : r),
        (r = this._easing(Math.min(1, Math.max(0, r)))),
        (this._target[s] = this._fn(n, a, r)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({ res: e, rej: i });
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      i = this._promises || [];
    for (let s = 0; s < i.length; s++) i[s][e]();
  }
}
class Vi {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!vt(t)) return;
    const e = Object.keys(Ee.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach(s => {
      const n = t[s];
      if (!vt(n)) return;
      const o = {};
      for (const t of e) o[t] = n[t];
      ((yt(n.properties) && n.properties) || [s]).forEach(t => {
        (t !== s && i.has(t)) || i.set(t, o);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options,
      s = (function (t, e) {
        if (!e) return;
        let i = t.options;
        if (!i) return void (t.options = e);
        i.$shared &&
          (t.options = i =
            Object.assign({}, i, { $shared: !1, $animations: {} }));
        return i;
      })(t, i);
    if (!s) return [];
    const n = this._createAnimations(s, i);
    return (
      i.$shared &&
        (function (t, e) {
          const i = [],
            s = Object.keys(e);
          for (let n = 0; n < s.length; n++) {
            const e = t[s[n]];
            e && e.active() && i.push(e.wait());
          }
          return Promise.all(i);
        })(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {},
        ),
      n
    );
  }
  _createAnimations(t, e) {
    const i = this._properties,
      s = [],
      n = t.$animations || (t.$animations = {}),
      o = Object.keys(e),
      a = Date.now();
    let r;
    for (r = o.length - 1; r >= 0; --r) {
      const h = o[r];
      if ('$' === h.charAt(0)) continue;
      if ('options' === h) {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const l = e[h];
      let c = n[h];
      const d = i.get(h);
      if (c) {
        if (d && c.active()) {
          c.update(d, l, a);
          continue;
        }
        c.cancel();
      }
      d && d.duration
        ? ((n[h] = c = new Hi(d, t, h, l)), s.push(c))
        : (t[h] = l);
    }
    return s;
  }
  update(t, e) {
    if (0 === this._properties.size) return void Object.assign(t, e);
    const i = this._createAnimations(t, e);
    return i.length ? (zi.add(this._chart, i), !0) : void 0;
  }
}
function ji(t, e) {
  const i = (t && t.options) || {},
    s = i.reverse,
    n = void 0 === i.min ? e : 0,
    o = void 0 === i.max ? e : 0;
  return { start: s ? o : n, end: s ? n : o };
}
function Wi(t, e) {
  const i = [],
    s = t._getSortedDatasetMetas(e);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
  return i;
}
function $i(t, e, i, s = {}) {
  const n = t.keys,
    o = 'single' === s.mode;
  let a, r, h, l;
  if (null !== e) {
    for (a = 0, r = n.length; a < r; ++a) {
      if (((h = +n[a]), h === i)) {
        if (s.all) continue;
        break;
      }
      (l = t.values[h]), wt(l) && (o || 0 === e || Kt(e) === Kt(l)) && (e += l);
    }
    return e;
  }
}
function Yi(t, e) {
  const i = t && t.options.stacked;
  return i || (void 0 === i && void 0 !== e.stack);
}
function Ui(t, e, i) {
  const s = t[e] || (t[e] = {});
  return s[i] || (s[i] = {});
}
function Xi(t, e, i, s) {
  for (const n of e.getMatchingVisibleMetas(s).reverse()) {
    const e = t[n.index];
    if ((i && e > 0) || (!i && e < 0)) return n.index;
  }
  return null;
}
function qi(t, e) {
  const { chart: i, _cachedMeta: s } = t,
    n = i._stacks || (i._stacks = {}),
    { iScale: o, vScale: a, index: r } = s,
    h = o.axis,
    l = a.axis,
    c = (function (t, e, i) {
      return `${t.id}.${e.id}.${i.stack || i.type}`;
    })(o, a, s),
    d = e.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const t = e[f],
      { [h]: i, [l]: o } = t;
    (u = (t._stacks || (t._stacks = {}))[l] = Ui(n, c, i)),
      (u[r] = o),
      (u._top = Xi(u, a, !0, s.type)),
      (u._bottom = Xi(u, a, !1, s.type));
    (u._visualValues || (u._visualValues = {}))[r] = o;
  }
}
function Ki(t, e) {
  const i = t.scales;
  return Object.keys(i)
    .filter(t => i[t].axis === e)
    .shift();
}
function Gi(t, e) {
  const i = t.controller.index,
    s = t.vScale && t.vScale.axis;
  if (s) {
    e = e || t._parsed;
    for (const t of e) {
      const e = t._stacks;
      if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
      delete e[s][i],
        void 0 !== e[s]._visualValues &&
          void 0 !== e[s]._visualValues[i] &&
          delete e[s]._visualValues[i];
    }
  }
}
const Zi = t => 'reset' === t || 'none' === t,
  Qi = (t, e) => (e ? t : Object.assign({}, t));
class Ji {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Yi(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(t) {
    this.index !== t && Gi(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      i = this.getDataset(),
      s = (t, e, i, s) => ('x' === t ? e : 'r' === t ? s : i),
      n = (e.xAxisID = Mt(i.xAxisID, Ki(t, 'x'))),
      o = (e.yAxisID = Mt(i.yAxisID, Ki(t, 'y'))),
      a = (e.rAxisID = Mt(i.rAxisID, Ki(t, 'r'))),
      r = e.indexAxis,
      h = (e.iAxisID = s(r, n, o, a)),
      l = (e.vAxisID = s(r, o, n, a));
    (e.xScale = this.getScaleForId(n)),
      (e.yScale = this.getScaleForId(o)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(h)),
      (e.vScale = this.getScaleForId(l));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ce(this._data, this), t._stacked && Gi(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      i = this._data;
    if (vt(e))
      this._data = (function (t) {
        const e = Object.keys(t),
          i = new Array(e.length);
        let s, n, o;
        for (s = 0, n = e.length; s < n; ++s)
          (o = e[s]), (i[s] = { x: o, y: t[o] });
        return i;
      })(e);
    else if (i !== e) {
      if (i) {
        ce(i, this);
        const t = this._cachedMeta;
        Gi(t), (t._parsed = []);
      }
      e &&
        Object.isExtensible(e) &&
        ((n = this),
        (s = e)._chartjs
          ? s._chartjs.listeners.push(n)
          : (Object.defineProperty(s, '_chartjs', {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [n] },
            }),
            le.forEach(t => {
              const e = '_onData' + zt(t),
                i = s[t];
              Object.defineProperty(s, t, {
                configurable: !0,
                enumerable: !1,
                value(...t) {
                  const n = i.apply(this, t);
                  return (
                    s._chartjs.listeners.forEach(i => {
                      'function' == typeof i[e] && i[e](...t);
                    }),
                    n
                  );
                },
              });
            }))),
        (this._syncList = []),
        (this._data = e);
    }
    var s, n;
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const n = e._stacked;
    (e._stacked = Yi(e.vScale, e)),
      e.stack !== i.stack && ((s = !0), Gi(e), (e.stack = i.stack)),
      this._resyncElements(t),
      (s || n !== e._stacked) && qi(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: n, _stacked: o } = i,
      a = n.axis;
    let r,
      h,
      l,
      c = (0 === t && e === s.length) || i._sorted,
      d = t > 0 && i._parsed[t - 1];
    if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (l = s);
    else {
      l = yt(s[t])
        ? this.parseArrayData(i, s, t, e)
        : vt(s[t])
        ? this.parseObjectData(i, s, t, e)
        : this.parsePrimitiveData(i, s, t, e);
      const n = () => null === h[a] || (d && h[a] < d[a]);
      for (r = 0; r < e; ++r)
        (i._parsed[r + t] = h = l[r]), c && (n() && (c = !1), (d = h));
      i._sorted = c;
    }
    o && qi(this, l);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: n, vScale: o } = t,
      a = n.axis,
      r = o.axis,
      h = n.getLabels(),
      l = n === o,
      c = new Array(s);
    let d, u, f;
    for (d = 0, u = s; d < u; ++d)
      (f = d + i),
        (c[d] = { [a]: l || n.parse(h[f], f), [r]: o.parse(e[f], f) });
    return c;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: n, yScale: o } = t,
      a = new Array(s);
    let r, h, l, c;
    for (r = 0, h = s; r < h; ++r)
      (l = r + i),
        (c = e[l]),
        (a[r] = { x: n.parse(c[0], l), y: o.parse(c[1], l) });
    return a;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: n, yScale: o } = t,
      { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
      h = new Array(s);
    let l, c, d, u;
    for (l = 0, c = s; l < c; ++l)
      (d = l + i),
        (u = e[d]),
        (h[l] = { x: n.parse(Ft(u, a), d), y: o.parse(Ft(u, r), d) });
    return h;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart,
      n = this._cachedMeta,
      o = e[t.axis];
    return $i(
      { keys: Wi(s, !0), values: e._stacks[t.axis]._visualValues },
      o,
      n.index,
      { mode: i },
    );
  }
  updateRangeFromParsed(t, e, i, s) {
    const n = i[e.axis];
    let o = null === n ? NaN : n;
    const a = s && i._stacks[e.axis];
    s && a && ((s.values = a), (o = $i(s, n, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, e) {
    const i = this._cachedMeta,
      s = i._parsed,
      n = i._sorted && t === i.iScale,
      o = s.length,
      a = this._getOtherScale(t),
      r = ((t, e, i) =>
        t && !e.hidden && e._stacked && { keys: Wi(i, !0), values: null })(
        e,
        i,
        this.chart,
      ),
      h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: l, max: c } = (function (t) {
        const {
          min: e,
          max: i,
          minDefined: s,
          maxDefined: n,
        } = t.getUserBounds();
        return {
          min: s ? e : Number.NEGATIVE_INFINITY,
          max: n ? i : Number.POSITIVE_INFINITY,
        };
      })(a);
    let d, u;
    function f() {
      u = s[d];
      const e = u[a.axis];
      return !wt(u[t.axis]) || l > e || c < e;
    }
    for (
      d = 0;
      d < o && (f() || (this.updateRangeFromParsed(h, t, u, r), !n));
      ++d
    );
    if (n)
      for (d = o - 1; d >= 0; --d)
        if (!f()) {
          this.updateRangeFromParsed(h, t, u, r);
          break;
        }
    return h;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      i = [];
    let s, n, o;
    for (s = 0, n = e.length; s < n; ++s)
      (o = e[s][t.axis]), wt(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = e.iScale,
      s = e.vScale,
      n = this.getParsed(t);
    return {
      label: i ? '' + i.getLabelForValue(n[i.axis]) : '',
      value: s ? '' + s.getLabelForValue(n[s.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || 'default'),
      (e._clip = (function (t) {
        let e, i, s, n;
        return (
          vt(t)
            ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
            : (e = i = s = n = t),
          { top: e, right: i, bottom: s, left: n, disabled: !1 === t }
        );
      })(
        Mt(
          this.options.clip,
          (function (t, e, i) {
            if (!1 === i) return !1;
            const s = ji(t, i),
              n = ji(e, i);
            return { top: n.end, right: s.end, bottom: n.start, left: s.start };
          })(e.xScale, e.yScale, this.getMaxOverflow()),
        ),
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      n = e.chartArea,
      o = [],
      a = this._drawStart || 0,
      r = this._drawCount || s.length - a,
      h = this.options.drawActiveElementsOnTop;
    let l;
    for (i.dataset && i.dataset.draw(t, n, a, r), l = a; l < a + r; ++l) {
      const e = s[l];
      e.hidden || (e.active && h ? o.push(e) : e.draw(t, n));
    }
    for (l = 0; l < o.length; ++l) o[l].draw(t, n);
  }
  getStyle(t, e) {
    const i = e ? 'active' : 'default';
    return void 0 === t && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let n;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const e = this._cachedMeta.data[t];
      (n =
        e.$context ||
        (e.$context = (function (t, e, i) {
          return ni(t, {
            active: !1,
            dataIndex: e,
            parsed: void 0,
            raw: void 0,
            element: i,
            index: e,
            mode: 'default',
            type: 'data',
          });
        })(this.getContext(), t, e))),
        (n.parsed = this.getParsed(t)),
        (n.raw = s.data[t]),
        (n.index = n.dataIndex = t);
    } else
      (n =
        this.$context ||
        (this.$context = (function (t, e) {
          return ni(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: 'default',
            type: 'dataset',
          });
        })(this.chart.getContext(), this.index))),
        (n.dataset = s),
        (n.index = n.datasetIndex = this.index);
    return (n.active = !!e), (n.mode = i), n;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', i) {
    const s = 'active' === e,
      n = this._cachedDataOpts,
      o = t + '-' + e,
      a = n[o],
      r = this.enableOptionSharing && Nt(i);
    if (a) return Qi(a, r);
    const h = this.chart.config,
      l = h.datasetElementScopeKeys(this._type, t),
      c = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      d = h.getOptionScopes(this.getDataset(), l),
      u = Object.keys(Ee.elements[t]),
      f = h.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
    return f.$shared && ((f.$shared = r), (n[o] = Object.freeze(Qi(f, r)))), f;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart,
      n = this._cachedDataOpts,
      o = `animation-${e}`,
      a = n[o];
    if (a) return a;
    let r;
    if (!1 !== s.options.animation) {
      const s = this.chart.config,
        n = s.datasetAnimationScopeKeys(this._type, e),
        o = s.getOptionScopes(this.getDataset(), n);
      r = s.createResolver(o, this.getContext(t, i, e));
    }
    const h = new Vi(s, r && r.animations);
    return r && r._cacheable && (n[o] = Object.freeze(h)), h;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || Zi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      n = this.getSharedOptions(i),
      o = this.includeOptions(e, n) || n !== s;
    return (
      this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o }
    );
  }
  updateElement(t, e, i, s) {
    Zi(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !Zi(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const n = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: (!s && this.getSharedOptions(n)) || n,
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      i = this._cachedMeta.data;
    for (const [a, r, h] of this._syncList) this[a](r, h);
    this._syncList = [];
    const s = i.length,
      n = e.length,
      o = Math.min(n, s);
    o && this.parse(0, o),
      n > s
        ? this._insertElements(s, n - s, t)
        : n < s && this._removeElements(n, s - n);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta,
      n = s.data,
      o = t + e;
    let a;
    const r = t => {
      for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
    };
    for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
    this._parsing && r(s._parsed),
      this.parse(t, e),
      i && this.updateElements(n, t, e, 'reset');
  }
  updateElements(t, e, i, s) {}
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && Gi(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const i = arguments.length - 2;
    i && this._sync(['_insertElements', t, i]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
function ts(t) {
  const e = t.iScale,
    i = (function (t, e) {
      if (!t._cache.$bar) {
        const i = t.getMatchingVisibleMetas(e);
        let s = [];
        for (let e = 0, n = i.length; e < n; e++)
          s = s.concat(i[e].controller.getAllParsedValues(t));
        t._cache.$bar = de(s.sort((t, e) => t - e));
      }
      return t._cache.$bar;
    })(e, t.type);
  let s,
    n,
    o,
    a,
    r = e._length;
  const h = () => {
    32767 !== o &&
      -32768 !== o &&
      (Nt(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
  };
  for (s = 0, n = i.length; s < n; ++s) (o = e.getPixelForValue(i[s])), h();
  for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)
    (o = e.getPixelForTick(s)), h();
  return r;
}
function es(t, e, i, s) {
  return (
    yt(t)
      ? (function (t, e, i, s) {
          const n = i.parse(t[0], s),
            o = i.parse(t[1], s),
            a = Math.min(n, o),
            r = Math.max(n, o);
          let h = a,
            l = r;
          Math.abs(a) > Math.abs(r) && ((h = r), (l = a)),
            (e[i.axis] = l),
            (e._custom = {
              barStart: h,
              barEnd: l,
              start: n,
              end: o,
              min: a,
              max: r,
            });
        })(t, e, i, s)
      : (e[i.axis] = i.parse(t, s)),
    e
  );
}
function is(t, e, i, s) {
  const n = t.iScale,
    o = t.vScale,
    a = n.getLabels(),
    r = n === o,
    h = [];
  let l, c, d, u;
  for (l = i, c = i + s; l < c; ++l)
    (u = e[l]),
      (d = {}),
      (d[n.axis] = r || n.parse(a[l], l)),
      h.push(es(u, d, o, l));
  return h;
}
function ss(t) {
  return t && void 0 !== t.barStart && void 0 !== t.barEnd;
}
function ns(t, e, i, s) {
  let n = e.borderSkipped;
  const o = {};
  if (!n) return void (t.borderSkipped = o);
  if (!0 === n)
    return void (t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0,
    });
  const {
    start: a,
    end: r,
    reverse: h,
    top: l,
    bottom: c,
  } = (function (t) {
    let e, i, s, n, o;
    return (
      t.horizontal
        ? ((e = t.base > t.x), (i = 'left'), (s = 'right'))
        : ((e = t.base < t.y), (i = 'bottom'), (s = 'top')),
      e ? ((n = 'end'), (o = 'start')) : ((n = 'start'), (o = 'end')),
      { start: i, end: s, reverse: e, top: n, bottom: o }
    );
  })(t);
  'middle' === n &&
    i &&
    ((t.enableBorderRadius = !0),
    (i._top || 0) === s
      ? (n = l)
      : (i._bottom || 0) === s
      ? (n = c)
      : ((o[os(c, a, r, h)] = !0), (n = l))),
    (o[os(n, a, r, h)] = !0),
    (t.borderSkipped = o);
}
function os(t, e, i, s) {
  var n, o, a;
  return (
    s
      ? ((a = i),
        (t = as((t = (n = t) === (o = e) ? a : n === a ? o : n), i, e)))
      : (t = as(t, e, i)),
    t
  );
}
function as(t, e, i) {
  return 'start' === t ? e : 'end' === t ? i : t;
}
function rs(t, { inflateAmount: e }, i) {
  t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
}
i(Ji, 'defaults', {}),
  i(Ji, 'datasetElementType', null),
  i(Ji, 'dataElementType', null);
class hs extends Ji {
  parsePrimitiveData(t, e, i, s) {
    return is(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return is(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: n, vScale: o } = t,
      { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
      h = 'x' === n.axis ? a : r,
      l = 'x' === o.axis ? a : r,
      c = [];
    let d, u, f, g;
    for (d = i, u = i + s; d < u; ++d)
      (g = e[d]),
        (f = {}),
        (f[n.axis] = n.parse(Ft(g, h), d)),
        c.push(es(Ft(g, l), f, o, d));
    return c;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const n = i._custom;
    n &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, n.min)), (t.max = Math.max(t.max, n.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: i, vScale: s } = e,
      n = this.getParsed(t),
      o = n._custom,
      a = ss(o)
        ? '[' + o.start + ', ' + o.end + ']'
        : '' + s.getLabelForValue(n[s.axis]);
    return { label: '' + i.getLabelForValue(n[i.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    this._cachedMeta.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const n = 'reset' === s,
      {
        index: o,
        _cachedMeta: { vScale: a },
      } = this,
      r = a.getBasePixel(),
      h = a.isHorizontal(),
      l = this._getRuler(),
      { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, s);
    for (let u = e; u < e + i; u++) {
      const e = this.getParsed(u),
        i =
          n || _t(e[a.axis])
            ? { base: r, head: r }
            : this._calculateBarValuePixels(u),
        f = this._calculateBarIndexPixels(u, l),
        g = (e._stacks || {})[a.axis],
        p = {
          horizontal: h,
          base: i.base,
          enableBorderRadius:
            !g || ss(e._custom) || o === g._top || o === g._bottom,
          x: h ? i.head : f.center,
          y: h ? f.center : i.head,
          height: h ? f.size : Math.abs(i.size),
          width: h ? Math.abs(i.size) : f.size,
        };
      d &&
        (p.options =
          c || this.resolveDataElementOptions(u, t[u].active ? 'active' : s));
      const m = p.options || t[u].options;
      ns(p, m, g, o), rs(p, m, l.ratio), this.updateElement(t[u], u, p, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta,
      s = i
        .getMatchingVisibleMetas(this._type)
        .filter(t => t.controller.options.grouped),
      n = i.options.stacked,
      o = [],
      a = t => {
        const i = t.controller.getParsed(e),
          s = i && i[t.vScale.axis];
        if (_t(s) || isNaN(s)) return !0;
      };
    for (const r of s)
      if (
        (void 0 === e || !a(r)) &&
        ((!1 === n ||
          -1 === o.indexOf(r.stack) ||
          (void 0 === n && void 0 === r.stack)) &&
          o.push(r.stack),
        r.index === t)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i),
      n = void 0 !== e ? s.indexOf(e) : -1;
    return -1 === n ? s.length - 1 : n;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      i = e.iScale,
      s = [];
    let n, o;
    for (n = 0, o = e.data.length; n < o; ++n)
      s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
    const a = t.barThickness;
    return {
      min: a || ts(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: i, index: s },
        options: { base: n, minBarLength: o },
      } = this,
      a = n || 0,
      r = this.getParsed(t),
      h = r._custom,
      l = ss(h);
    let c,
      d,
      u = r[e.axis],
      f = 0,
      g = i ? this.applyStack(e, r, i) : u;
    g !== u && ((f = g - u), (g = u)),
      l &&
        ((u = h.barStart),
        (g = h.barEnd - h.barStart),
        0 !== u && Kt(u) !== Kt(h.barEnd) && (f = 0),
        (f += u));
    const p = _t(n) || l ? f : n;
    let m = e.getPixelForValue(p);
    if (
      ((c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + g) : m),
      (d = c - m),
      Math.abs(d) < o)
    ) {
      (d =
        (function (t, e, i) {
          return 0 !== t
            ? Kt(t)
            : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
        })(d, e, a) * o),
        u === a && (m -= d / 2);
      const t = e.getPixelForDecimal(0),
        n = e.getPixelForDecimal(1),
        h = Math.min(t, n),
        f = Math.max(t, n);
      (m = Math.max(Math.min(m, f), h)),
        (c = m + d),
        i &&
          !l &&
          (r._stacks[e.axis]._visualValues[s] =
            e.getValueForPixel(c) - e.getValueForPixel(m));
    }
    if (m === e.getPixelForValue(a)) {
      const t = (Kt(d) * e.getLineWidthForValue(a)) / 2;
      (m += t), (d -= t);
    }
    return { size: d, base: m, head: c, center: c + d / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale,
      s = this.options,
      n = s.skipNull,
      o = Mt(s.maxBarThickness, 1 / 0);
    let a, r;
    if (e.grouped) {
      const i = n ? this._getStackCount(t) : e.stackCount,
        h =
          'flex' === s.barThickness
            ? (function (t, e, i, s) {
                const n = e.pixels,
                  o = n[t];
                let a = t > 0 ? n[t - 1] : null,
                  r = t < n.length - 1 ? n[t + 1] : null;
                const h = i.categoryPercentage;
                null === a && (a = o - (null === r ? e.end - e.start : r - o)),
                  null === r && (r = o + o - a);
                const l = o - ((o - Math.min(a, r)) / 2) * h;
                return {
                  chunk: ((Math.abs(r - a) / 2) * h) / s,
                  ratio: i.barPercentage,
                  start: l,
                };
              })(t, e, s, i)
            : (function (t, e, i, s) {
                const n = i.barThickness;
                let o, a;
                return (
                  _t(n)
                    ? ((o = e.min * i.categoryPercentage),
                      (a = i.barPercentage))
                    : ((o = n * s), (a = 1)),
                  { chunk: o / s, ratio: a, start: e.pixels[t] - o / 2 }
                );
              })(t, e, s, i),
        l = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          n ? t : void 0,
        );
      (a = h.start + h.chunk * l + h.chunk / 2),
        (r = Math.min(o, h.chunk * h.ratio));
    } else
      (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
        (r = Math.min(o, e.min * e.ratio));
    return { base: a - r / 2, head: a + r / 2, center: a, size: r };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      i = t.data,
      s = i.length;
    let n = 0;
    for (; n < s; ++n)
      null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
  }
}
function ls() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  );
}
i(hs, 'id', 'bar'),
  i(hs, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'base', 'width', 'height'],
      },
    },
  }),
  i(hs, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  });
class cs {
  static override(t) {
    Object.assign(cs.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {}
  formats() {
    return ls();
  }
  parse() {
    return ls();
  }
  format() {
    return ls();
  }
  add() {
    return ls();
  }
  diff() {
    return ls();
  }
  startOf() {
    return ls();
  }
  endOf() {
    return ls();
  }
}
var ds = cs;
function us(t, e, i, s) {
  const { controller: n, data: o, _sorted: a } = t,
    r = n._cachedMeta.iScale;
  if (r && e === r.axis && 'r' !== e && a && o.length) {
    const t = r._reversePixels ? he : re;
    if (!s) return t(o, e, i);
    if (n._sharedOptions) {
      const s = o[0],
        n = 'function' == typeof s.getRange && s.getRange(e);
      if (n) {
        const s = t(o, e, i - n),
          a = t(o, e, i + n);
        return { lo: s.lo, hi: a.hi };
      }
    }
  }
  return { lo: 0, hi: o.length - 1 };
}
function fs(t, e, i, s, n) {
  const o = t.getSortedVisibleDatasetMetas(),
    a = i[e];
  for (let r = 0, h = o.length; r < h; ++r) {
    const { index: t, data: i } = o[r],
      { lo: h, hi: l } = us(o[r], e, a, n);
    for (let e = h; e <= l; ++e) {
      const n = i[e];
      n.skip || s(n, t, e);
    }
  }
}
function gs(t, e, i, s, n) {
  const o = [];
  if (!n && !t.isPointInArea(e)) return o;
  return (
    fs(
      t,
      i,
      e,
      function (i, a, r) {
        (n || Ve(i, t.chartArea, 0)) &&
          i.inRange(e.x, e.y, s) &&
          o.push({ element: i, datasetIndex: a, index: r });
      },
      !0,
    ),
    o
  );
}
function ps(t, e, i, s) {
  let n = [];
  return (
    fs(t, i, e, function (t, i, o) {
      const { startAngle: a, endAngle: r } = t.getProps(
          ['startAngle', 'endAngle'],
          s,
        ),
        { angle: h } = (function (t, e) {
          const i = e.x - t.x,
            s = e.y - t.y,
            n = Math.sqrt(i * i + s * s);
          let o = Math.atan2(s, i);
          return o < -0.5 * Vt && (o += jt), { angle: o, distance: n };
        })(t, { x: e.x, y: e.y });
      (function (t, e, i, s) {
        const n = se(t),
          o = se(e),
          a = se(i),
          r = se(o - n),
          h = se(a - n),
          l = se(n - o),
          c = se(n - a);
        return n === o || n === a || (s && o === a) || (r > h && l < c);
      })(h, a, r) && n.push({ element: t, datasetIndex: i, index: o });
    }),
    n
  );
}
function ms(t, e, i, s, n, o) {
  let a = [];
  const r = (function (t) {
    const e = -1 !== t.indexOf('x'),
      i = -1 !== t.indexOf('y');
    return function (t, s) {
      const n = e ? Math.abs(t.x - s.x) : 0,
        o = i ? Math.abs(t.y - s.y) : 0;
      return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
    };
  })(i);
  let h = Number.POSITIVE_INFINITY;
  return (
    fs(t, i, e, function (i, l, c) {
      const d = i.inRange(e.x, e.y, n);
      if (s && !d) return;
      const u = i.getCenterPoint(n);
      if (!(!!o || t.isPointInArea(u)) && !d) return;
      const f = r(e, u);
      f < h
        ? ((a = [{ element: i, datasetIndex: l, index: c }]), (h = f))
        : f === h && a.push({ element: i, datasetIndex: l, index: c });
    }),
    a
  );
}
function bs(t, e, i, s, n, o) {
  return o || t.isPointInArea(e)
    ? 'r' !== i || s
      ? ms(t, e, i, s, n, o)
      : ps(t, e, i, n)
    : [];
}
function xs(t, e, i, s, n) {
  const o = [],
    a = 'x' === i ? 'inXRange' : 'inYRange';
  let r = !1;
  return (
    fs(t, i, e, (t, s, h) => {
      t[a](e[i], n) &&
        (o.push({ element: t, datasetIndex: s, index: h }),
        (r = r || t.inRange(e.x, e.y, n)));
    }),
    s && !r ? [] : o
  );
}
var _s = {
  evaluateInteractionItems: fs,
  modes: {
    index(t, e, i, s) {
      const n = Si(e, t),
        o = i.axis || 'x',
        a = i.includeInvisible || !1,
        r = i.intersect ? gs(t, n, o, s, a) : bs(t, n, o, !1, s, a),
        h = [];
      return r.length
        ? (t.getSortedVisibleDatasetMetas().forEach(t => {
            const e = r[0].index,
              i = t.data[e];
            i &&
              !i.skip &&
              h.push({ element: i, datasetIndex: t.index, index: e });
          }),
          h)
        : [];
    },
    dataset(t, e, i, s) {
      const n = Si(e, t),
        o = i.axis || 'xy',
        a = i.includeInvisible || !1;
      let r = i.intersect ? gs(t, n, o, s, a) : bs(t, n, o, !1, s, a);
      if (r.length > 0) {
        const e = r[0].datasetIndex,
          i = t.getDatasetMeta(e).data;
        r = [];
        for (let t = 0; t < i.length; ++t)
          r.push({ element: i[t], datasetIndex: e, index: t });
      }
      return r;
    },
    point: (t, e, i, s) =>
      gs(t, Si(e, t), i.axis || 'xy', s, i.includeInvisible || !1),
    nearest(t, e, i, s) {
      const n = Si(e, t),
        o = i.axis || 'xy',
        a = i.includeInvisible || !1;
      return bs(t, n, o, i.intersect, s, a);
    },
    x: (t, e, i, s) => xs(t, Si(e, t), 'x', i.intersect, s),
    y: (t, e, i, s) => xs(t, Si(e, t), 'y', i.intersect, s),
  },
};
const ys = ['left', 'top', 'right', 'bottom'];
function vs(t, e) {
  return t.filter(t => t.pos === e);
}
function ws(t, e) {
  return t.filter(t => -1 === ys.indexOf(t.pos) && t.box.axis === e);
}
function ks(t, e) {
  return t.sort((t, i) => {
    const s = e ? i : t,
      n = e ? t : i;
    return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
  });
}
function Ms(t, e) {
  const i = (function (t) {
      const e = {};
      for (const i of t) {
        const { stack: t, pos: s, stackWeight: n } = i;
        if (!t || !ys.includes(s)) continue;
        const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += n);
      }
      return e;
    })(t),
    { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
  let o, a, r;
  for (o = 0, a = t.length; o < a; ++o) {
    r = t[o];
    const { fullSize: a } = r.box,
      h = i[r.stack],
      l = h && r.stackWeight / h.weight;
    r.horizontal
      ? ((r.width = l ? l * s : a && e.availableWidth), (r.height = n))
      : ((r.width = s), (r.height = l ? l * n : a && e.availableHeight));
  }
  return i;
}
function Ss(t, e, i, s) {
  return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
}
function Ps(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function Cs(t, e, i, s) {
  const { pos: n, box: o } = i,
    a = t.maxPadding;
  if (!vt(n)) {
    i.size && (t[n] -= i.size);
    const e = s[i.stack] || { size: 0, count: 1 };
    (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
      (i.size = e.size / e.count),
      (t[n] += i.size);
  }
  o.getPadding && Ps(a, o.getPadding());
  const r = Math.max(0, e.outerWidth - Ss(a, t, 'left', 'right')),
    h = Math.max(0, e.outerHeight - Ss(a, t, 'top', 'bottom')),
    l = r !== t.w,
    c = h !== t.h;
  return (
    (t.w = r),
    (t.h = h),
    i.horizontal ? { same: l, other: c } : { same: c, other: l }
  );
}
function Os(t, e) {
  const i = e.maxPadding;
  function s(t) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      t.forEach(t => {
        s[t] = Math.max(e[t], i[t]);
      }),
      s
    );
  }
  return s(t ? ['left', 'right'] : ['top', 'bottom']);
}
function As(t, e, i, s) {
  const n = [];
  let o, a, r, h, l, c;
  for (o = 0, a = t.length, l = 0; o < a; ++o) {
    (r = t[o]),
      (h = r.box),
      h.update(r.width || e.w, r.height || e.h, Os(r.horizontal, e));
    const { same: a, other: d } = Cs(e, i, r, s);
    (l |= a && n.length), (c = c || d), h.fullSize || n.push(r);
  }
  return (l && As(n, e, i, s)) || c;
}
function Ds(t, e, i, s, n) {
  (t.top = i),
    (t.left = e),
    (t.right = e + s),
    (t.bottom = i + n),
    (t.width = s),
    (t.height = n);
}
function Ls(t, e, i, s) {
  const n = i.padding;
  let { x: o, y: a } = e;
  for (const r of t) {
    const t = r.box,
      h = s[r.stack] || { count: 1, placed: 0, weight: 1 },
      l = r.stackWeight / h.weight || 1;
    if (r.horizontal) {
      const s = e.w * l,
        o = h.size || t.height;
      Nt(h.start) && (a = h.start),
        t.fullSize
          ? Ds(t, n.left, a, i.outerWidth - n.right - n.left, o)
          : Ds(t, e.left + h.placed, a, s, o),
        (h.start = a),
        (h.placed += s),
        (a = t.bottom);
    } else {
      const s = e.h * l,
        a = h.size || t.width;
      Nt(h.start) && (o = h.start),
        t.fullSize
          ? Ds(t, o, n.top, a, i.outerHeight - n.bottom - n.top)
          : Ds(t, o, e.top + h.placed, a, s),
        (h.start = o),
        (h.placed += s),
        (o = t.right);
    }
  }
  (e.x = o), (e.y = a);
}
var Ts = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || 'top'),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(t) {
                e.draw(t);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const i = t.boxes ? t.boxes.indexOf(e) : -1;
    -1 !== i && t.boxes.splice(i, 1);
  },
  configure(t, e, i) {
    (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
  },
  update(t, e, i, s) {
    if (!t) return;
    const n = ei(t.options.layout.padding),
      o = Math.max(e - n.width, 0),
      a = Math.max(i - n.height, 0),
      r = (function (t) {
        const e = (function (t) {
            const e = [];
            let i, s, n, o, a, r;
            for (i = 0, s = (t || []).length; i < s; ++i)
              (n = t[i]),
                ({
                  position: o,
                  options: { stack: a, stackWeight: r = 1 },
                } = n),
                e.push({
                  index: i,
                  box: n,
                  pos: o,
                  horizontal: n.isHorizontal(),
                  weight: n.weight,
                  stack: a && o + a,
                  stackWeight: r,
                });
            return e;
          })(t),
          i = ks(
            e.filter(t => t.box.fullSize),
            !0,
          ),
          s = ks(vs(e, 'left'), !0),
          n = ks(vs(e, 'right')),
          o = ks(vs(e, 'top'), !0),
          a = ks(vs(e, 'bottom')),
          r = ws(e, 'x'),
          h = ws(e, 'y');
        return {
          fullSize: i,
          leftAndTop: s.concat(o),
          rightAndBottom: n.concat(h).concat(a).concat(r),
          chartArea: vs(e, 'chartArea'),
          vertical: s.concat(n).concat(h),
          horizontal: o.concat(a).concat(r),
        };
      })(t.boxes),
      h = r.vertical,
      l = r.horizontal;
    Ct(t.boxes, t => {
      'function' == typeof t.beforeLayout && t.beforeLayout();
    });
    const c =
        h.reduce(
          (t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1),
          0,
        ) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: i,
        padding: n,
        availableWidth: o,
        availableHeight: a,
        vBoxMaxWidth: o / 2 / c,
        hBoxMaxHeight: a / 2,
      }),
      u = Object.assign({}, n);
    Ps(u, ei(s));
    const f = Object.assign(
        { maxPadding: u, w: o, h: a, x: n.left, y: n.top },
        n,
      ),
      g = Ms(h.concat(l), d);
    As(r.fullSize, f, d, g),
      As(h, f, d, g),
      As(l, f, d, g) && As(h, f, d, g),
      (function (t) {
        const e = t.maxPadding;
        function i(i) {
          const s = Math.max(e[i] - t[i], 0);
          return (t[i] += s), s;
        }
        (t.y += i('top')), (t.x += i('left')), i('right'), i('bottom');
      })(f),
      Ls(r.leftAndTop, f, d, g),
      (f.x += f.w),
      (f.y += f.h),
      Ls(r.rightAndBottom, f, d, g),
      (t.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      Ct(r.chartArea, e => {
        const i = e.box;
        Object.assign(i, t.chartArea),
          i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Is {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {}
  removeEventListener(t, e, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (i = i || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Es extends Is {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Rs = '$chartjs',
  Fs = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  zs = t => null === t || '' === t;
const Ns = !!Ai && { passive: !0 };
function Bs(t, e, i) {
  t.canvas.removeEventListener(e, i, Ns);
}
function Hs(t, e) {
  for (const i of t) if (i === e || i.contains(e)) return !0;
}
function Vs(t, e, i) {
  const s = t.canvas,
    n = new MutationObserver(t => {
      let e = !1;
      for (const i of t)
        (e = e || Hs(i.addedNodes, s)), (e = e && !Hs(i.removedNodes, s));
      e && i();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function js(t, e, i) {
  const s = t.canvas,
    n = new MutationObserver(t => {
      let e = !1;
      for (const i of t)
        (e = e || Hs(i.removedNodes, s)), (e = e && !Hs(i.addedNodes, s));
      e && i();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
const Ws = new Map();
let $s = 0;
function Ys() {
  const t = window.devicePixelRatio;
  t !== $s &&
    (($s = t),
    Ws.forEach((e, i) => {
      i.currentDevicePixelRatio !== t && e();
    }));
}
function Us(t, e, i) {
  const s = t.canvas,
    n = s && _i(s);
  if (!n) return;
  const o = fe((t, e) => {
      const s = n.clientWidth;
      i(t, e), s < n.clientWidth && i();
    }, window),
    a = new ResizeObserver(t => {
      const e = t[0],
        i = e.contentRect.width,
        s = e.contentRect.height;
      (0 === i && 0 === s) || o(i, s);
    });
  return (
    a.observe(n),
    (function (t, e) {
      Ws.size || window.addEventListener('resize', Ys), Ws.set(t, e);
    })(t, o),
    a
  );
}
function Xs(t, e, i) {
  i && i.disconnect(),
    'resize' === e &&
      (function (t) {
        Ws.delete(t), Ws.size || window.removeEventListener('resize', Ys);
      })(t);
}
function qs(t, e, i) {
  const s = t.canvas,
    n = fe(e => {
      null !== t.ctx &&
        i(
          (function (t, e) {
            const i = Fs[t.type] || t.type,
              { x: s, y: n } = Si(t, e);
            return {
              type: i,
              chart: e,
              native: t,
              x: void 0 !== s ? s : null,
              y: void 0 !== n ? n : null,
            };
          })(e, t),
        );
    }, t);
  return (
    (function (t, e, i) {
      t.addEventListener(e, i, Ns);
    })(s, e, n),
    n
  );
}
class Ks extends Is {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext('2d');
    return i && i.canvas === t
      ? ((function (t, e) {
          const i = t.style,
            s = t.getAttribute('height'),
            n = t.getAttribute('width');
          if (
            ((t[Rs] = {
              initial: {
                height: s,
                width: n,
                style: { display: i.display, height: i.height, width: i.width },
              },
            }),
            (i.display = i.display || 'block'),
            (i.boxSizing = i.boxSizing || 'border-box'),
            zs(n))
          ) {
            const e = Di(t, 'width');
            void 0 !== e && (t.width = e);
          }
          if (zs(s))
            if ('' === t.style.height) t.height = t.width / (e || 2);
            else {
              const e = Di(t, 'height');
              void 0 !== e && (t.height = e);
            }
        })(t, e),
        i)
      : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Rs]) return !1;
    const i = e[Rs].initial;
    ['height', 'width'].forEach(t => {
      const s = i[t];
      _t(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
    });
    const s = i.style || {};
    return (
      Object.keys(s).forEach(t => {
        e.style[t] = s[t];
      }),
      (e.width = e.width),
      delete e[Rs],
      !0
    );
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      n = { attach: Vs, detach: js, resize: Us }[e] || qs;
    s[e] = n(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[e];
    if (!s) return;
    (({ attach: Xs, detach: Xs, resize: Xs })[e] || Bs)(t, e, s),
      (i[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return Ci(t, e, i, s);
  }
  isAttached(t) {
    const e = _i(t);
    return !(!e || !e.isConnected);
  }
}
class Gs {
  constructor() {
    i(this, 'active', !1);
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps(['x', 'y'], t);
    return { x: e, y: i };
  }
  hasValue() {
    return Qt(this.x) && Qt(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i) return this;
    const s = {};
    return (
      t.forEach(t => {
        s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
      }),
      s
    );
  }
}
function Zs(t, e) {
  const i = t.options.ticks,
    s = (function (t) {
      const e = t.options.offset,
        i = t._tickSize(),
        s = t._length / i + (e ? 0 : 1),
        n = t._maxLength / i;
      return Math.floor(Math.min(s, n));
    })(t),
    n = Math.min(i.maxTicksLimit || s, s),
    o = i.major.enabled
      ? (function (t) {
          const e = [];
          let i, s;
          for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
          return e;
        })(e)
      : [],
    a = o.length,
    r = o[0],
    h = o[a - 1],
    l = [];
  if (a > n)
    return (
      (function (t, e, i, s) {
        let n,
          o = 0,
          a = i[0];
        for (s = Math.ceil(s), n = 0; n < t.length; n++)
          n === a && (e.push(t[n]), o++, (a = i[o * s]));
      })(e, l, o, a / n),
      l
    );
  const c = (function (t, e, i) {
    const s = (function (t) {
        const e = t.length;
        let i, s;
        if (e < 2) return !1;
        for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
        return s;
      })(t),
      n = e.length / i;
    if (!s) return Math.max(n, 1);
    const o = (function (t) {
      const e = [],
        i = Math.sqrt(t);
      let s;
      for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
      return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
    })(s);
    for (let a = 0, r = o.length - 1; a < r; a++) {
      const t = o[a];
      if (t > n) return t;
    }
    return Math.max(n, 1);
  })(o, e, n);
  if (a > 0) {
    let t, i;
    const s = a > 1 ? Math.round((h - r) / (a - 1)) : null;
    for (Qs(e, l, c, _t(s) ? 0 : r - s, r), t = 0, i = a - 1; t < i; t++)
      Qs(e, l, c, o[t], o[t + 1]);
    return Qs(e, l, c, h, _t(s) ? e.length : h + s), l;
  }
  return Qs(e, l, c), l;
}
function Qs(t, e, i, s, n) {
  const o = Mt(s, 0),
    a = Math.min(Mt(n, t.length), t.length);
  let r,
    h,
    l,
    c = 0;
  for (
    i = Math.ceil(i), n && ((r = n - s), (i = r / Math.floor(r / i))), l = o;
    l < 0;

  )
    c++, (l = Math.round(o + c * i));
  for (h = Math.max(o, 0); h < a; h++)
    h === l && (e.push(t[h]), c++, (l = Math.round(o + c * i)));
}
i(Gs, 'defaults', {}), i(Gs, 'defaultRoutes');
const Js = t => ('left' === t ? 'right' : 'right' === t ? 'left' : t),
  tn = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i),
  en = (t, e) => Math.min(e || t, t);
function sn(t, e) {
  const i = [],
    s = t.length / e,
    n = t.length;
  let o = 0;
  for (; o < n; o += s) i.push(t[Math.floor(o)]);
  return i;
}
function nn(t, e, i) {
  const s = t.ticks.length,
    n = Math.min(e, s - 1),
    o = t._startPixel,
    a = t._endPixel,
    r = 1e-6;
  let h,
    l = t.getPixelForTick(n);
  if (
    !(
      i &&
      ((h =
        1 === s
          ? Math.max(l - o, a - l)
          : 0 === e
          ? (t.getPixelForTick(1) - l) / 2
          : (l - t.getPixelForTick(n - 1)) / 2),
      (l += n < e ? h : -h),
      l < o - r || l > a + r)
    )
  )
    return l;
}
function on(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function an(t, e) {
  if (!t.display) return 0;
  const i = ii(t.font, e),
    s = ei(t.padding);
  return (yt(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
}
function rn(t, e, i) {
  let s = ge(t);
  return ((i && 'right' !== e) || (!i && 'right' === e)) && (s = Js(s)), s;
}
class hn extends Gs {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return (
      (t = kt(t, Number.POSITIVE_INFINITY)),
      (e = kt(e, Number.NEGATIVE_INFINITY)),
      (i = kt(i, Number.POSITIVE_INFINITY)),
      (s = kt(s, Number.NEGATIVE_INFINITY)),
      { min: kt(t, i), max: kt(e, s), minDefined: wt(t), maxDefined: wt(e) }
    );
  }
  getMinMax(t) {
    let e,
      { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds();
    if (n && o) return { min: i, max: s };
    const a = this.getMatchingVisibleMetas();
    for (let r = 0, h = a.length; r < h; ++r)
      (e = a[r].controller.getMinMax(this, t)),
        n || (i = Math.min(i, e.min)),
        o || (s = Math.max(s, e.max));
    return (
      (i = o && i > s ? s : i),
      (s = n && i > s ? i : s),
      { min: kt(i, kt(s, i)), max: kt(s, kt(i, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Pt(this.options.beforeUpdate, [this]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: n, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = (function (t, e, i) {
          const { min: s, max: n } = t,
            o = St(e, (n - s) / 2),
            a = (t, e) => (i && 0 === t ? 0 : t + e);
          return { min: a(s, -Math.abs(o)), max: a(n, o) };
        })(this, n, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const r = a < this.ticks.length;
    this._convertTicksToLabels(r ? sn(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || 'auto' === o.source) &&
        ((this.ticks = Zs(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      r && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t,
      e,
      i = this.options.reverse;
    this.isHorizontal()
      ? ((t = this.left), (e = this.right))
      : ((t = this.top), (e = this.bottom), (i = !i)),
      (this._startPixel = t),
      (this._endPixel = e),
      (this._reversePixels = i),
      (this._length = e - t),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Pt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Pt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Pt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Pt(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    Pt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, n;
    for (i = 0, s = t.length; i < s; i++)
      (n = t[i]), (n.label = Pt(e.callback, [n.value, i, t], this));
  }
  afterTickToLabelConversion() {
    Pt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Pt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      i = en(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      n = e.maxRotation;
    let o,
      a,
      r,
      h = s;
    if (
      !this._isVisible() ||
      !e.display ||
      s >= n ||
      i <= 1 ||
      !this.isHorizontal()
    )
      return void (this.labelRotation = s);
    const l = this._getLabelSizes(),
      c = l.widest.width,
      d = l.highest.height,
      u = ne(this.chart.width - c, 0, this.maxWidth);
    (o = t.offset ? this.maxWidth / i : u / (i - 1)),
      c + 6 > o &&
        ((o = u / (i - (t.offset ? 0.5 : 1))),
        (a =
          this.maxHeight -
          on(t.grid) -
          e.padding -
          an(t.title, this.chart.options.font)),
        (r = Math.sqrt(c * c + d * d)),
        (h = ee(
          Math.min(
            Math.asin(ne((l.highest.height + 6) / o, -1, 1)),
            Math.asin(ne(a / r, -1, 1)) - Math.asin(ne(d / r, -1, 1)),
          ),
        )),
        (h = Math.max(s, Math.min(n, h)))),
      (this.labelRotation = h);
  }
  afterCalculateLabelRotation() {
    Pt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Pt(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: i, title: s, grid: n },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const o = an(s, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = on(n) + o))
          : ((t.height = this.maxHeight), (t.width = on(n) + o)),
        i.display && this.ticks.length)
      ) {
        const {
            first: e,
            last: s,
            widest: n,
            highest: o,
          } = this._getLabelSizes(),
          r = 2 * i.padding,
          h = te(this.labelRotation),
          l = Math.cos(h),
          c = Math.sin(h);
        if (a) {
          const e = i.mirror ? 0 : c * n.width + l * o.height;
          t.height = Math.min(this.maxHeight, t.height + e + r);
        } else {
          const e = i.mirror ? 0 : l * n.width + c * o.height;
          t.width = Math.min(this.maxWidth, t.width + e + r);
        }
        this._calculatePadding(e, s, c, l);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, i, s) {
    const {
        ticks: { align: n, padding: o },
        position: a,
      } = this.options,
      r = 0 !== this.labelRotation,
      h = 'top' !== a && 'x' === this.axis;
    if (this.isHorizontal()) {
      const a = this.getPixelForTick(0) - this.left,
        l = this.right - this.getPixelForTick(this.ticks.length - 1);
      let c = 0,
        d = 0;
      r
        ? h
          ? ((c = s * t.width), (d = i * e.height))
          : ((c = i * t.height), (d = s * e.width))
        : 'start' === n
        ? (d = e.width)
        : 'end' === n
        ? (c = t.width)
        : 'inner' !== n && ((c = t.width / 2), (d = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((c - a + o) * this.width) / (this.width - a),
          0,
        )),
        (this.paddingRight = Math.max(
          ((d - l + o) * this.width) / (this.width - l),
          0,
        ));
    } else {
      let i = e.height / 2,
        s = t.height / 2;
      'start' === n
        ? ((i = 0), (s = t.height))
        : 'end' === n && ((i = e.height), (s = 0)),
        (this.paddingTop = i + o),
        (this.paddingBottom = s + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    Pt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return 'top' === e || 'bottom' === e || 'x' === t;
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    let e, i;
    for (
      this.beforeTickToLabelConversion(),
        this.generateTickLabels(t),
        e = 0,
        i = t.length;
      e < i;
      e++
    )
      _t(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = sn(i, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit,
          ));
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: n } = this,
      o = [],
      a = [],
      r = Math.floor(e / en(e, i));
    let h,
      l,
      c,
      d,
      u,
      f,
      g,
      p,
      m,
      b,
      x,
      _ = 0,
      y = 0;
    for (h = 0; h < e; h += r) {
      if (
        ((d = t[h].label),
        (u = this._resolveTickFontOptions(h)),
        (s.font = f = u.string),
        (g = n[f] = n[f] || { data: {}, gc: [] }),
        (p = u.lineHeight),
        (m = b = 0),
        _t(d) || yt(d))
      ) {
        if (yt(d))
          for (l = 0, c = d.length; l < c; ++l)
            (x = d[l]),
              _t(x) || yt(x) || ((m = Re(s, g.data, g.gc, m, x)), (b += p));
      } else (m = Re(s, g.data, g.gc, m, d)), (b = p);
      o.push(m), a.push(b), (_ = Math.max(m, _)), (y = Math.max(b, y));
    }
    !(function (t, e) {
      Ct(t, t => {
        const i = t.gc,
          s = i.length / 2;
        let n;
        if (s > e) {
          for (n = 0; n < s; ++n) delete t.data[i[n]];
          i.splice(0, s);
        }
      });
    })(n, e);
    const v = o.indexOf(_),
      w = a.indexOf(y),
      k = t => ({ width: o[t] || 0, height: a[t] || 0 });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(v),
      highest: k(w),
      widths: o,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return ne(this._alignToPixels ? ze(this.chart, e, 0) : e, -32768, 32767);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return (
        i.$context ||
        (i.$context = (function (t, e, i) {
          return ni(t, { tick: i, index: e, type: 'tick' });
        })(this.getContext(), t, i))
      );
    }
    return (
      this.$context ||
      (this.$context = ni(this.chart.getContext(), {
        scale: this,
        type: 'scale',
      }))
    );
  }
  _tickSize() {
    const t = this.options.ticks,
      e = te(this.labelRotation),
      i = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      n = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      a = n ? n.widest.width + o : 0,
      r = n ? n.highest.height + o : 0;
    return this.isHorizontal()
      ? r * i > a * s
        ? a / i
        : r / s
      : r * s < a * i
      ? r / i
      : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      i = this.chart,
      s = this.options,
      { grid: n, position: o, border: a } = s,
      r = n.offset,
      h = this.isHorizontal(),
      l = this.ticks.length + (r ? 1 : 0),
      c = on(n),
      d = [],
      u = a.setContext(this.getContext()),
      f = u.display ? u.width : 0,
      g = f / 2,
      p = function (t) {
        return ze(i, t, f);
      };
    let m, b, x, _, y, v, w, k, M, S, P, C;
    if ('top' === o)
      (m = p(this.bottom)),
        (v = this.bottom - c),
        (k = m - g),
        (S = p(t.top) + g),
        (C = t.bottom);
    else if ('bottom' === o)
      (m = p(this.top)),
        (S = t.top),
        (C = p(t.bottom) - g),
        (v = m + g),
        (k = this.top + c);
    else if ('left' === o)
      (m = p(this.right)),
        (y = this.right - c),
        (w = m - g),
        (M = p(t.left) + g),
        (P = t.right);
    else if ('right' === o)
      (m = p(this.left)),
        (M = t.left),
        (P = p(t.right) - g),
        (y = m + g),
        (w = this.left + c);
    else if ('x' === e) {
      if ('center' === o) m = p((t.top + t.bottom) / 2 + 0.5);
      else if (vt(o)) {
        const t = Object.keys(o)[0],
          e = o[t];
        m = p(this.chart.scales[t].getPixelForValue(e));
      }
      (S = t.top), (C = t.bottom), (v = m + g), (k = v + c);
    } else if ('y' === e) {
      if ('center' === o) m = p((t.left + t.right) / 2);
      else if (vt(o)) {
        const t = Object.keys(o)[0],
          e = o[t];
        m = p(this.chart.scales[t].getPixelForValue(e));
      }
      (y = m - g), (w = y - c), (M = t.left), (P = t.right);
    }
    const O = Mt(s.ticks.maxTicksLimit, l),
      A = Math.max(1, Math.ceil(l / O));
    for (b = 0; b < l; b += A) {
      const t = this.getContext(b),
        e = n.setContext(t),
        s = a.setContext(t),
        o = e.lineWidth,
        l = e.color,
        c = s.dash || [],
        u = s.dashOffset,
        f = e.tickWidth,
        g = e.tickColor,
        p = e.tickBorderDash || [],
        m = e.tickBorderDashOffset;
      (x = nn(this, b, r)),
        void 0 !== x &&
          ((_ = ze(i, x, o)),
          h ? (y = w = M = P = _) : (v = k = S = C = _),
          d.push({
            tx1: y,
            ty1: v,
            tx2: w,
            ty2: k,
            x1: M,
            y1: S,
            x2: P,
            y2: C,
            width: o,
            color: l,
            borderDash: c,
            borderDashOffset: u,
            tickWidth: f,
            tickColor: g,
            tickBorderDash: p,
            tickBorderDashOffset: m,
          }));
    }
    return (this._ticksLength = l), (this._borderValue = m), d;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      i = this.options,
      { position: s, ticks: n } = i,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: r, crossAlign: h, padding: l, mirror: c } = n,
      d = on(i.grid),
      u = d + l,
      f = c ? -l : u,
      g = -te(this.labelRotation),
      p = [];
    let m,
      b,
      x,
      _,
      y,
      v,
      w,
      k,
      M,
      S,
      P,
      C,
      O = 'middle';
    if ('top' === s)
      (v = this.bottom - f), (w = this._getXAxisLabelAlignment());
    else if ('bottom' === s)
      (v = this.top + f), (w = this._getXAxisLabelAlignment());
    else if ('left' === s) {
      const t = this._getYAxisLabelAlignment(d);
      (w = t.textAlign), (y = t.x);
    } else if ('right' === s) {
      const t = this._getYAxisLabelAlignment(d);
      (w = t.textAlign), (y = t.x);
    } else if ('x' === e) {
      if ('center' === s) v = (t.top + t.bottom) / 2 + u;
      else if (vt(s)) {
        const t = Object.keys(s)[0],
          e = s[t];
        v = this.chart.scales[t].getPixelForValue(e) + u;
      }
      w = this._getXAxisLabelAlignment();
    } else if ('y' === e) {
      if ('center' === s) y = (t.left + t.right) / 2 - u;
      else if (vt(s)) {
        const t = Object.keys(s)[0],
          e = s[t];
        y = this.chart.scales[t].getPixelForValue(e);
      }
      w = this._getYAxisLabelAlignment(d).textAlign;
    }
    'y' === e && ('start' === r ? (O = 'top') : 'end' === r && (O = 'bottom'));
    const A = this._getLabelSizes();
    for (m = 0, b = a.length; m < b; ++m) {
      (x = a[m]), (_ = x.label);
      const t = n.setContext(this.getContext(m));
      (k = this.getPixelForTick(m) + n.labelOffset),
        (M = this._resolveTickFontOptions(m)),
        (S = M.lineHeight),
        (P = yt(_) ? _.length : 1);
      const e = P / 2,
        i = t.color,
        r = t.textStrokeColor,
        l = t.textStrokeWidth;
      let d,
        u = w;
      if (
        (o
          ? ((y = k),
            'inner' === w &&
              (u =
                m === b - 1
                  ? this.options.reverse
                    ? 'left'
                    : 'right'
                  : 0 === m
                  ? this.options.reverse
                    ? 'right'
                    : 'left'
                  : 'center'),
            (C =
              'top' === s
                ? 'near' === h || 0 !== g
                  ? -P * S + S / 2
                  : 'center' === h
                  ? -A.highest.height / 2 - e * S + S
                  : -A.highest.height + S / 2
                : 'near' === h || 0 !== g
                ? S / 2
                : 'center' === h
                ? A.highest.height / 2 - e * S
                : A.highest.height - P * S),
            c && (C *= -1),
            0 === g || t.showLabelBackdrop || (y += (S / 2) * Math.sin(g)))
          : ((v = k), (C = ((1 - P) * S) / 2)),
        t.showLabelBackdrop)
      ) {
        const e = ei(t.backdropPadding),
          i = A.heights[m],
          s = A.widths[m];
        let n = C - e.top,
          o = 0 - e.left;
        switch (O) {
          case 'middle':
            n -= i / 2;
            break;
          case 'bottom':
            n -= i;
        }
        switch (w) {
          case 'center':
            o -= s / 2;
            break;
          case 'right':
            o -= s;
        }
        d = {
          left: o,
          top: n,
          width: s + e.width,
          height: i + e.height,
          color: t.backdropColor,
        };
      }
      p.push({
        label: _,
        font: M,
        textOffset: C,
        options: {
          rotation: g,
          color: i,
          strokeColor: r,
          strokeWidth: l,
          textAlign: u,
          textBaseline: O,
          translation: [y, v],
          backdrop: d,
        },
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-te(this.labelRotation)) return 'top' === t ? 'left' : 'right';
    let i = 'center';
    return (
      'start' === e.align
        ? (i = 'left')
        : 'end' === e.align
        ? (i = 'right')
        : 'inner' === e.align && (i = 'inner'),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: i, mirror: s, padding: n },
      } = this.options,
      o = t + n,
      a = this._getLabelSizes().widest.width;
    let r, h;
    return (
      'left' === e
        ? s
          ? ((h = this.right + n),
            'near' === i
              ? (r = 'left')
              : 'center' === i
              ? ((r = 'center'), (h += a / 2))
              : ((r = 'right'), (h += a)))
          : ((h = this.right - o),
            'near' === i
              ? (r = 'right')
              : 'center' === i
              ? ((r = 'center'), (h -= a / 2))
              : ((r = 'left'), (h = this.left)))
        : 'right' === e
        ? s
          ? ((h = this.left + n),
            'near' === i
              ? (r = 'right')
              : 'center' === i
              ? ((r = 'center'), (h -= a / 2))
              : ((r = 'left'), (h -= a)))
          : ((h = this.left + o),
            'near' === i
              ? (r = 'left')
              : 'center' === i
              ? ((r = 'center'), (h += a / 2))
              : ((r = 'right'), (h = this.right)))
        : (r = 'right'),
      { textAlign: r, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    return 'left' === e || 'right' === e
      ? { top: 0, left: this.left, bottom: t.height, right: this.right }
      : 'top' === e || 'bottom' === e
      ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
      : void 0;
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: i,
      top: s,
      width: n,
      height: o,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const i = this.ticks.findIndex(e => e.value === t);
    if (i >= 0) {
      return e.setContext(this.getContext(i)).lineWidth;
    }
    return 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      i = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let n, o;
    const a = (t, e, s) => {
      s.width &&
        s.color &&
        (i.save(),
        (i.lineWidth = s.width),
        (i.strokeStyle = s.color),
        i.setLineDash(s.borderDash || []),
        (i.lineDashOffset = s.borderDashOffset),
        i.beginPath(),
        i.moveTo(t.x, t.y),
        i.lineTo(e.x, e.y),
        i.stroke(),
        i.restore());
    };
    if (e.display)
      for (n = 0, o = s.length; n < o; ++n) {
        const t = s[n];
        e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
          e.drawTicks &&
            a(
              { x: t.tx1, y: t.ty1 },
              { x: t.tx2, y: t.ty2 },
              {
                color: t.tickColor,
                width: t.tickWidth,
                borderDash: t.tickBorderDash,
                borderDashOffset: t.tickBorderDashOffset,
              },
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: i, grid: s },
      } = this,
      n = i.setContext(this.getContext()),
      o = i.display ? n.width : 0;
    if (!o) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      r = this._borderValue;
    let h, l, c, d;
    this.isHorizontal()
      ? ((h = ze(t, this.left, o) - o / 2),
        (l = ze(t, this.right, a) + a / 2),
        (c = d = r))
      : ((c = ze(t, this.top, o) - o / 2),
        (d = ze(t, this.bottom, a) + a / 2),
        (h = l = r)),
      e.save(),
      (e.lineWidth = n.width),
      (e.strokeStyle = n.color),
      e.beginPath(),
      e.moveTo(h, c),
      e.lineTo(l, d),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const e = this.ctx,
      i = this._computeLabelArea();
    i && je(e, i);
    const s = this.getLabelItems(t);
    for (const n of s) {
      const t = n.options,
        i = n.font;
      $e(e, n.label, 0, n.textOffset, i, t);
    }
    i && We(e);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: i, reverse: s },
    } = this;
    if (!i.display) return;
    const n = ii(i.font),
      o = ei(i.padding),
      a = i.align;
    let r = n.lineHeight / 2;
    'bottom' === e || 'center' === e || vt(e)
      ? ((r += o.bottom),
        yt(i.text) && (r += n.lineHeight * (i.text.length - 1)))
      : (r += o.top);
    const {
      titleX: h,
      titleY: l,
      maxWidth: c,
      rotation: d,
    } = (function (t, e, i, s) {
      const { top: n, left: o, bottom: a, right: r, chart: h } = t,
        { chartArea: l, scales: c } = h;
      let d,
        u,
        f,
        g = 0;
      const p = a - n,
        m = r - o;
      if (t.isHorizontal()) {
        if (((u = pe(s, o, r)), vt(i))) {
          const t = Object.keys(i)[0],
            s = i[t];
          f = c[t].getPixelForValue(s) + p - e;
        } else
          f = 'center' === i ? (l.bottom + l.top) / 2 + p - e : tn(t, i, e);
        d = r - o;
      } else {
        if (vt(i)) {
          const t = Object.keys(i)[0],
            s = i[t];
          u = c[t].getPixelForValue(s) - m + e;
        } else
          u = 'center' === i ? (l.left + l.right) / 2 - m + e : tn(t, i, e);
        (f = pe(s, a, n)), (g = 'left' === i ? -Yt : Yt);
      }
      return { titleX: u, titleY: f, maxWidth: d, rotation: g };
    })(this, r, e, a);
    $e(t, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: c,
      rotation: d,
      textAlign: rn(a, e, s),
      textBaseline: 'middle',
      translation: [h, l],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      i = Mt(t.grid && t.grid.z, -1),
      s = Mt(t.border && t.border.z, 0);
    return this._isVisible() && this.draw === hn.prototype.draw
      ? [
          {
            z: i,
            draw: t => {
              this.drawBackground(), this.drawGrid(t), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: t => {
              this.drawLabels(t);
            },
          },
        ]
      : [
          {
            z: e,
            draw: t => {
              this.draw(t);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const o = e[n];
      o[i] !== this.id || (t && o.type !== t) || s.push(o);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    return ii(this.options.ticks.setContext(this.getContext(t)).font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ln {
  constructor(t, e, i) {
    (this.type = t),
      (this.scope = e),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype,
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    (function (t) {
      return 'id' in t && 'defaults' in t;
    })(e) && (i = this.register(e));
    const s = this.items,
      n = t.id,
      o = this.scope + '.' + n;
    if (!n) throw new Error('class does not have id: ' + t);
    return (
      n in s ||
        ((s[n] = t),
        (function (t, e, i) {
          const s = Tt(Object.create(null), [
            i ? Ee.get(i) : {},
            Ee.get(e),
            t.defaults,
          ]);
          Ee.set(e, s),
            t.defaultRoutes &&
              (function (t, e) {
                Object.keys(e).forEach(i => {
                  const s = i.split('.'),
                    n = s.pop(),
                    o = [t].concat(s).join('.'),
                    a = e[i].split('.'),
                    r = a.pop(),
                    h = a.join('.');
                  Ee.route(o, n, h, r);
                });
              })(e, t.defaultRoutes);
          t.descriptors && Ee.describe(e, t.descriptors);
        })(t, o, i),
        this.override && Ee.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      i = t.id,
      s = this.scope;
    i in e && delete e[i],
      s && i in Ee[s] && (delete Ee[s][i], this.override && delete Ae[i]);
  }
}
class cn {
  constructor() {
    (this.controllers = new ln(Ji, 'datasets', !0)),
      (this.elements = new ln(Gs, 'elements')),
      (this.plugins = new ln(Object, 'plugins')),
      (this.scales = new ln(hn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, i) {
    [...e].forEach(e => {
      const s = i || this._getRegistryForType(e);
      i || s.isForType(e) || (s === this.plugins && e.id)
        ? this._exec(t, s, e)
        : Ct(e, e => {
            const s = i || this._getRegistryForType(e);
            this._exec(t, s, e);
          });
    });
  }
  _exec(t, e, i) {
    const s = zt(t);
    Pt(i['before' + s], [], i), e[t](i), Pt(i['after' + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (void 0 === s)
      throw new Error('"' + t + '" is not a registered ' + i + '.');
    return s;
  }
}
var dn = new cn();
class un {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, s) {
    'beforeInit' === e &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, 'install'));
    const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      o = this._notify(n, t, e, i);
    return (
      'afterDestroy' === e &&
        (this._notify(n, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      o
    );
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const n of t) {
      const t = n.plugin;
      if (!1 === Pt(t[i], [e, s, n.options], t) && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    _t(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config,
      s = Mt(i.options && i.options.plugins, {}),
      n = (function (t) {
        const e = {},
          i = [],
          s = Object.keys(dn.plugins.items);
        for (let o = 0; o < s.length; o++) i.push(dn.getPlugin(s[o]));
        const n = t.plugins || [];
        for (let o = 0; o < n.length; o++) {
          const t = n[o];
          -1 === i.indexOf(t) && (i.push(t), (e[t.id] = !0));
        }
        return { plugins: i, localIds: e };
      })(i);
    return !1 !== s || e
      ? (function (t, { plugins: e, localIds: i }, s, n) {
          const o = [],
            a = t.getContext();
          for (const r of e) {
            const e = r.id,
              h = fn(s[e], n);
            null !== h &&
              o.push({
                plugin: r,
                options: gn(t.config, { plugin: r, local: i[e] }, h, a),
              });
          }
          return o;
        })(t, n, s, e)
      : [];
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      i = this._cache,
      s = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
    this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start');
  }
}
function fn(t, e) {
  return e || !1 !== t ? (!0 === t ? {} : t) : null;
}
function gn(t, { plugin: e, local: i }, s, n) {
  const o = t.pluginScopeKeys(e),
    a = t.getOptionScopes(s, o);
  return (
    i && e.defaults && a.push(e.defaults),
    t.createResolver(a, n, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function pn(t, e) {
  const i = Ee.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x'
  );
}
function mn(t, e) {
  if ('x' === t || 'y' === t || 'r' === t) return t;
  var i;
  if (
    (t =
      e.axis ||
      ('top' === (i = e.position) || 'bottom' === i
        ? 'x'
        : 'left' === i || 'right' === i
        ? 'y'
        : void 0) ||
      (t.length > 1 && mn(t[0].toLowerCase(), e)))
  )
    return t;
  throw new Error(
    `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function bn(t) {
  const e = t.options || (t.options = {});
  (e.plugins = Mt(e.plugins, {})),
    (e.scales = (function (t, e) {
      const i = Ae[t.type] || { scales: {} },
        s = e.scales || {},
        n = pn(t.type, e),
        o = Object.create(null);
      return (
        Object.keys(s).forEach(t => {
          const e = s[t];
          if (!vt(e))
            return console.error(`Invalid scale configuration for scale: ${t}`);
          if (e._proxy)
            return console.warn(
              `Ignoring resolver passed as options for scale: ${t}`,
            );
          const a = mn(t, e),
            r = (function (t, e) {
              return t === e ? '_index_' : '_value_';
            })(a, n),
            h = i.scales || {};
          o[t] = It(Object.create(null), [{ axis: a }, e, h[a], h[r]]);
        }),
        t.data.datasets.forEach(i => {
          const n = i.type || t.type,
            a = i.indexAxis || pn(n, e),
            r = (Ae[n] || {}).scales || {};
          Object.keys(r).forEach(t => {
            const e = (function (t, e) {
                let i = t;
                return (
                  '_index_' === t
                    ? (i = e)
                    : '_value_' === t && (i = 'x' === e ? 'y' : 'x'),
                  i
                );
              })(t, a),
              n = i[e + 'AxisID'] || e;
            (o[n] = o[n] || Object.create(null)),
              It(o[n], [{ axis: e }, s[n], r[t]]);
          });
        }),
        Object.keys(o).forEach(t => {
          const e = o[t];
          It(e, [Ee.scales[e.type], Ee.scale]);
        }),
        o
      );
    })(t, e));
}
function xn(t) {
  return (
    ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
  );
}
const _n = new Map(),
  yn = new Set();
function vn(t, e) {
  let i = _n.get(t);
  return i || ((i = e()), _n.set(t, i), yn.add(i)), i;
}
const wn = (t, e, i) => {
  const s = Ft(e, i);
  void 0 !== s && t.add(s);
};
class kn {
  constructor(t) {
    (this._config = (function (t) {
      return ((t = t || {}).data = xn(t.data)), bn(t), t;
    })(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = xn(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), bn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return vn(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return vn(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return vn(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id;
    return vn(`${this.type}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (s && !e) || ((s = new Map()), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: n } = this,
      o = this._cachedScopes(t, i),
      a = o.get(e);
    if (a) return a;
    const r = new Set();
    e.forEach(e => {
      t && (r.add(t), e.forEach(e => wn(r, t, e))),
        e.forEach(t => wn(r, s, t)),
        e.forEach(t => wn(r, Ae[n] || {}, t)),
        e.forEach(t => wn(r, Ee, t)),
        e.forEach(t => wn(r, De, t));
    });
    const h = Array.from(r);
    return (
      0 === h.length && h.push(Object.create(null)), yn.has(e) && o.set(e, h), h
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, Ae[e] || {}, Ee.datasets[e] || {}, { type: e }, Ee, De];
  }
  resolveNamedOptions(t, e, i, s = ['']) {
    const n = { $shared: !0 },
      { resolver: o, subPrefixes: a } = Mn(this._resolverCache, t, s);
    let r = o;
    if (
      (function (t, e) {
        const { isScriptable: i, isIndexable: s } = ri(t);
        for (const n of e) {
          const e = i(n),
            o = s(n),
            a = (o || e) && t[n];
          if ((e && (Bt(a) || Sn(a))) || (o && yt(a))) return !0;
        }
        return !1;
      })(o, e)
    ) {
      n.$shared = !1;
      r = ai(o, (i = Bt(i) ? i() : i), this.createResolver(t, i, a));
    }
    for (const h of e) n[h] = r[h];
    return n;
  }
  createResolver(t, e, i = [''], s) {
    const { resolver: n } = Mn(this._resolverCache, t, i);
    return vt(e) ? ai(n, e, void 0, s) : n;
  }
}
function Mn(t, e, i) {
  let s = t.get(e);
  s || ((s = new Map()), t.set(e, s));
  const n = i.join();
  let o = s.get(n);
  if (!o) {
    (o = {
      resolver: oi(e, i),
      subPrefixes: i.filter(t => !t.toLowerCase().includes('hover')),
    }),
      s.set(n, o);
  }
  return o;
}
const Sn = t =>
  vt(t) && Object.getOwnPropertyNames(t).reduce((e, i) => e || Bt(t[i]), !1);
const Pn = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Cn(t, e) {
  return 'top' === t || 'bottom' === t || (-1 === Pn.indexOf(t) && 'x' === e);
}
function On(t, e) {
  return function (i, s) {
    return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
  };
}
function An(t) {
  const e = t.chart,
    i = e.options.animation;
  e.notifyPlugins('afterRender'), Pt(i && i.onComplete, [t], e);
}
function Dn(t) {
  const e = t.chart,
    i = e.options.animation;
  Pt(i && i.onProgress, [t], e);
}
function Ln(t) {
  return (
    xi() && 'string' == typeof t
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const Tn = {},
  In = t => {
    const e = Ln(t);
    return Object.values(Tn)
      .filter(t => t.canvas === e)
      .pop();
  };
function En(t, e, i) {
  const s = Object.keys(t);
  for (const n of s) {
    const s = +n;
    if (s >= e) {
      const o = t[n];
      delete t[n], (i > 0 || s > e) && (t[s + i] = o);
    }
  }
}
let Rn =
  (i(
    (t = class {
      static register(...t) {
        dn.add(...t), Fn();
      }
      static unregister(...t) {
        dn.remove(...t), Fn();
      }
      constructor(t, e) {
        const i = (this.config = new kn(e)),
          s = Ln(t),
          n = In(s);
        if (n)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              n.id +
              "' must be destroyed before the canvas with ID '" +
              n.canvas.id +
              "' can be reused.",
          );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform ||
          (function (t) {
            return !xi() ||
              ('undefined' != typeof OffscreenCanvas &&
                t instanceof OffscreenCanvas)
              ? Es
              : Ks;
          })(s))()),
          this.platform.updateConfig(i);
        const a = this.platform.acquireContext(s, o.aspectRatio),
          r = a && a.canvas,
          h = r && r.height,
          l = r && r.width;
        (this.id = xt()),
          (this.ctx = a),
          (this.canvas = r),
          (this.width = l),
          (this.height = h),
          (this._options = o),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new un()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = (function (t, e) {
            let i;
            return function (...s) {
              return (
                e
                  ? (clearTimeout(i), (i = setTimeout(t, e, s)))
                  : t.apply(this, s),
                e
              );
            };
          })(t => this.update(t), o.resizeDelay || 0)),
          (this._dataChanges = []),
          (Tn[this.id] = this),
          a && r
            ? (zi.listen(this, 'complete', An),
              zi.listen(this, 'progress', Dn),
              this._initialize(),
              this.attached && this.update())
            : console.error(
                "Failed to create chart: can't acquire context from the given item",
              );
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: t, maintainAspectRatio: e },
          width: i,
          height: s,
          _aspectRatio: n,
        } = this;
        return _t(t) ? (e && n ? n : s ? i / s : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return dn;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive
            ? this.resize()
            : Oi(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return Ne(this.canvas, this.ctx), this;
      }
      stop() {
        return zi.stop(this), this;
      }
      resize(t, e) {
        zi.running(this)
          ? (this._resizeBeforeDraw = { width: t, height: e })
          : this._resize(t, e);
      }
      _resize(t, e) {
        const i = this.options,
          s = this.canvas,
          n = i.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(s, t, e, n),
          a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          r = this.width ? 'resize' : 'attach';
        (this.width = o.width),
          (this.height = o.height),
          (this._aspectRatio = this.aspectRatio),
          Oi(this, a, !0) &&
            (this.notifyPlugins('resize', { size: o }),
            Pt(i.onResize, [this, o], this),
            this.attached && this._doResize(r) && this.render());
      }
      ensureScalesHaveIDs() {
        Ct(this.options.scales || {}, (t, e) => {
          t.id = e;
        });
      }
      buildOrUpdateScales() {
        const t = this.options,
          e = t.scales,
          i = this.scales,
          s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
        let n = [];
        e &&
          (n = n.concat(
            Object.keys(e).map(t => {
              const i = e[t],
                s = mn(t, i),
                n = 'r' === s,
                o = 'x' === s;
              return {
                options: i,
                dposition: n ? 'chartArea' : o ? 'bottom' : 'left',
                dtype: n ? 'radialLinear' : o ? 'category' : 'linear',
              };
            }),
          )),
          Ct(n, e => {
            const n = e.options,
              o = n.id,
              a = mn(o, n),
              r = Mt(n.type, e.dtype);
            (void 0 !== n.position && Cn(n.position, a) === Cn(e.dposition)) ||
              (n.position = e.dposition),
              (s[o] = !0);
            let h = null;
            if (o in i && i[o].type === r) h = i[o];
            else {
              (h = new (dn.getScale(r))({
                id: o,
                type: r,
                ctx: this.ctx,
                chart: this,
              })),
                (i[h.id] = h);
            }
            h.init(n, t);
          }),
          Ct(s, (t, e) => {
            t || delete i[e];
          }),
          Ct(i, t => {
            Ts.configure(this, t, t.options), Ts.addBox(this, t);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          e = this.data.datasets.length,
          i = t.length;
        if ((t.sort((t, e) => t.index - e.index), i > e)) {
          for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
          t.splice(e, i - e);
        }
        this._sortedMetasets = t.slice(0).sort(On('order', 'index'));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: e },
        } = this;
        t.length > e.length && delete this._stacks,
          t.forEach((t, i) => {
            0 === e.filter(e => e === t._dataset).length &&
              this._destroyDatasetMeta(i);
          });
      }
      buildOrUpdateControllers() {
        const t = [],
          e = this.data.datasets;
        let i, s;
        for (
          this._removeUnreferencedMetasets(), i = 0, s = e.length;
          i < s;
          i++
        ) {
          const s = e[i];
          let n = this.getDatasetMeta(i);
          const o = s.type || this.config.type;
          if (
            (n.type &&
              n.type !== o &&
              (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
            (n.type = o),
            (n.indexAxis = s.indexAxis || pn(o, this.options)),
            (n.order = s.order || 0),
            (n.index = i),
            (n.label = '' + s.label),
            (n.visible = this.isDatasetVisible(i)),
            n.controller)
          )
            n.controller.updateIndex(i), n.controller.linkScales();
          else {
            const e = dn.getController(o),
              { datasetElementType: s, dataElementType: a } = Ee.datasets[o];
            Object.assign(e, {
              dataElementType: dn.getElement(a),
              datasetElementType: s && dn.getElement(s),
            }),
              (n.controller = new e(this, i)),
              t.push(n.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        Ct(
          this.data.datasets,
          (t, e) => {
            this.getDatasetMeta(e).controller.reset();
          },
          this,
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins('reset');
      }
      update(t) {
        const e = this.config;
        e.update();
        const i = (this._options = e.createResolver(
            e.chartOptionScopes(),
            this.getContext(),
          )),
          s = (this._animationsDisabled = !i.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 ===
            this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
        )
          return;
        const n = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let h = 0, l = this.data.datasets.length; h < l; h++) {
          const { controller: t } = this.getDatasetMeta(h),
            e = !s && -1 === n.indexOf(t);
          t.buildOrUpdateElements(e), (o = Math.max(+t.getMaxOverflow(), o));
        }
        (o = this._minPadding = i.layout.autoPadding ? o : 0),
          this._updateLayout(o),
          s ||
            Ct(n, t => {
              t.reset();
            }),
          this._updateDatasets(t),
          this.notifyPlugins('afterUpdate', { mode: t }),
          this._layers.sort(On('z', '_idx'));
        const { _active: a, _lastEvent: r } = this;
        r
          ? this._eventHandler(r, !0)
          : a.length && this._updateHoverStyles(a, a, !0),
          this.render();
      }
      _updateScales() {
        Ct(this.scales, t => {
          Ts.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          e = new Set(Object.keys(this._listeners)),
          i = new Set(t.events);
        (Ht(e, i) && !!this._responsiveListeners === t.responsive) ||
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          e = this._getUniformDataChanges() || [];
        for (const { method: i, start: s, count: n } of e) {
          En(t, s, '_removeElements' === i ? -n : n);
        }
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
          i = e =>
            new Set(
              t
                .filter(t => t[0] === e)
                .map((t, e) => e + ',' + t.splice(1).join(',')),
            ),
          s = i(0);
        for (let n = 1; n < e; n++) if (!Ht(s, i(n))) return;
        return Array.from(s)
          .map(t => t.split(','))
          .map(t => ({ method: t[1], start: +t[2], count: +t[3] }));
      }
      _updateLayout(t) {
        if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 }))
          return;
        Ts.update(this, this.width, this.height, t);
        const e = this.chartArea,
          i = e.width <= 0 || e.height <= 0;
        (this._layers = []),
          Ct(
            this.boxes,
            t => {
              (i && 'chartArea' === t.position) ||
                (t.configure && t.configure(),
                this._layers.push(...t._layers()));
            },
            this,
          ),
          this._layers.forEach((t, e) => {
            t._idx = e;
          }),
          this.notifyPlugins('afterLayout');
      }
      _updateDatasets(t) {
        if (
          !1 !==
          this.notifyPlugins('beforeDatasetsUpdate', {
            mode: t,
            cancelable: !0,
          })
        ) {
          for (let t = 0, e = this.data.datasets.length; t < e; ++t)
            this.getDatasetMeta(t).controller.configure();
          for (let e = 0, i = this.data.datasets.length; e < i; ++e)
            this._updateDataset(e, Bt(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins('afterDatasetsUpdate', { mode: t });
        }
      }
      _updateDataset(t, e) {
        const i = this.getDatasetMeta(t),
          s = { meta: i, index: t, mode: e, cancelable: !0 };
        !1 !== this.notifyPlugins('beforeDatasetUpdate', s) &&
          (i.controller._update(e),
          (s.cancelable = !1),
          this.notifyPlugins('afterDatasetUpdate', s));
      }
      render() {
        !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
          (zi.has(this)
            ? this.attached && !zi.running(this) && zi.start(this)
            : (this.draw(), An({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: t, height: e } = this._resizeBeforeDraw;
          this._resize(t, e), (this._resizeBeforeDraw = null);
        }
        if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
        if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
      }
      _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
          i = [];
        let s, n;
        for (s = 0, n = e.length; s < n; ++s) {
          const n = e[s];
          (t && !n.visible) || i.push(n);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }))
          return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(t) {
        const e = this.ctx,
          i = t._clip,
          s = !i.disabled,
          n =
            (function (t) {
              const { xScale: e, yScale: i } = t;
              if (e && i)
                return {
                  left: e.left,
                  right: e.right,
                  top: i.top,
                  bottom: i.bottom,
                };
            })(t) || this.chartArea,
          o = { meta: t, index: t.index, cancelable: !0 };
        !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
          (s &&
            je(e, {
              left: !1 === i.left ? 0 : n.left - i.left,
              right: !1 === i.right ? this.width : n.right + i.right,
              top: !1 === i.top ? 0 : n.top - i.top,
              bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
            }),
          t.controller.draw(),
          s && We(e),
          (o.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', o));
      }
      isPointInArea(t) {
        return Ve(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, i, s) {
        const n = _s.modes[e];
        return 'function' == typeof n ? n(this, t, i, s) : [];
      }
      getDatasetMeta(t) {
        const e = this.data.datasets[t],
          i = this._metasets;
        let s = i.filter(t => t && t._dataset === e).pop();
        return (
          s ||
            ((s = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
            i.push(s)),
          s
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = ni(null, { chart: this, type: 'chart' }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const i = this.getDatasetMeta(t);
        return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, i) {
        const s = i ? 'show' : 'hide',
          n = this.getDatasetMeta(t),
          o = n.controller._resolveAnimations(void 0, s);
        Nt(e)
          ? ((n.data[e].hidden = !i), this.update())
          : (this.setDatasetVisibility(t, i),
            o.update(n, { visible: i }),
            this.update(e => (e.datasetIndex === t ? s : void 0)));
      }
      hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
      show(t, e) {
        this._updateVisibility(t, e, !0);
      }
      _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (
          this.stop(), zi.remove(this), t = 0, e = this.data.datasets.length;
          t < e;
          ++t
        )
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            Ne(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          delete Tn[this.id],
          this.notifyPlugins('afterDestroy');
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        const t = this._listeners,
          e = this.platform,
          i = (i, s) => {
            e.addEventListener(this, i, s), (t[i] = s);
          },
          s = (t, e, i) => {
            (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
          };
        Ct(this.options.events, t => i(t, s));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
          e = this.platform,
          i = (i, s) => {
            e.addEventListener(this, i, s), (t[i] = s);
          },
          s = (i, s) => {
            t[i] && (e.removeEventListener(this, i, s), delete t[i]);
          },
          n = (t, e) => {
            this.canvas && this.resize(t, e);
          };
        let o;
        const a = () => {
          s('attach', a),
            (this.attached = !0),
            this.resize(),
            i('resize', n),
            i('detach', o);
        };
        (o = () => {
          (this.attached = !1),
            s('resize', n),
            this._stop(),
            this._resize(0, 0),
            i('attach', a);
        }),
          e.isAttached(this.canvas) ? a() : o();
      }
      unbindEvents() {
        Ct(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
          (this._listeners = {}),
          Ct(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, e, i) {
        const s = i ? 'set' : 'remove';
        let n, o, a, r;
        for (
          'dataset' === e &&
            ((n = this.getDatasetMeta(t[0].datasetIndex)),
            n.controller['_' + s + 'DatasetHoverStyle']()),
            a = 0,
            r = t.length;
          a < r;
          ++a
        ) {
          o = t[a];
          const e = o && this.getDatasetMeta(o.datasetIndex).controller;
          e && e[s + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        const e = this._active || [],
          i = t.map(({ datasetIndex: t, index: e }) => {
            const i = this.getDatasetMeta(t);
            if (!i) throw new Error('No dataset found at index ' + t);
            return { datasetIndex: t, element: i.data[e], index: e };
          });
        !Ot(i, e) &&
          ((this._active = i),
          (this._lastEvent = null),
          this._updateHoverStyles(i, e));
      }
      notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
      isPluginEnabled(t) {
        return 1 === this._plugins._cache.filter(e => e.plugin.id === t).length;
      }
      _updateHoverStyles(t, e, i) {
        const s = this.options.hover,
          n = (t, e) =>
            t.filter(
              t =>
                !e.some(
                  e => t.datasetIndex === e.datasetIndex && t.index === e.index,
                ),
            ),
          o = n(e, t),
          a = i ? t : n(t, e);
        o.length && this.updateHoverStyle(o, s.mode, !1),
          a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
      }
      _eventHandler(t, e) {
        const i = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: this.isPointInArea(t),
          },
          s = e =>
            (e.options.events || this.options.events).includes(t.native.type);
        if (!1 === this.notifyPlugins('beforeEvent', i, s)) return;
        const n = this._handleEvent(t, e, i.inChartArea);
        return (
          (i.cancelable = !1),
          this.notifyPlugins('afterEvent', i, s),
          (n || i.changed) && this.render(),
          this
        );
      }
      _handleEvent(t, e, i) {
        const { _active: s = [], options: n } = this,
          o = e,
          a = this._getActiveElements(t, s, i, o),
          r = (function (t) {
            return (
              'mouseup' === t.type ||
              'click' === t.type ||
              'contextmenu' === t.type
            );
          })(t),
          h = (function (t, e, i, s) {
            return i && 'mouseout' !== t.type ? (s ? e : t) : null;
          })(t, this._lastEvent, i, r);
        i &&
          ((this._lastEvent = null),
          Pt(n.onHover, [t, a, this], this),
          r && Pt(n.onClick, [t, a, this], this));
        const l = !Ot(a, s);
        return (
          (l || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
          (this._lastEvent = h),
          l
        );
      }
      _getActiveElements(t, e, i, s) {
        if ('mouseout' === t.type) return [];
        if (!i) return e;
        const n = this.options.hover;
        return this.getElementsAtEventForMode(t, n.mode, n, s);
      }
    }),
    'defaults',
    Ee,
  ),
  i(t, 'instances', Tn),
  i(t, 'overrides', Ae),
  i(t, 'registry', dn),
  i(t, 'version', '4.2.1'),
  i(t, 'getChart', In),
  t);
function Fn() {
  return Ct(Rn.instances, t => t._plugins.invalidate());
}
function zn(t, e) {
  const {
    x: i,
    y: s,
    base: n,
    width: o,
    height: a,
  } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
  let r, h, l, c, d;
  return (
    t.horizontal
      ? ((d = a / 2),
        (r = Math.min(i, n)),
        (h = Math.max(i, n)),
        (l = s - d),
        (c = s + d))
      : ((d = o / 2),
        (r = i - d),
        (h = i + d),
        (l = Math.min(s, n)),
        (c = Math.max(s, n))),
    { left: r, top: l, right: h, bottom: c }
  );
}
function Nn(t, e, i, s) {
  return t ? 0 : ne(e, i, s);
}
function Bn(t) {
  const e = zn(t),
    i = e.right - e.left,
    s = e.bottom - e.top,
    n = (function (t, e, i) {
      const s = t.options.borderWidth,
        n = t.borderSkipped,
        o = Je(s);
      return {
        t: Nn(n.top, o.top, 0, i),
        r: Nn(n.right, o.right, 0, e),
        b: Nn(n.bottom, o.bottom, 0, i),
        l: Nn(n.left, o.left, 0, e),
      };
    })(t, i / 2, s / 2),
    o = (function (t, e, i) {
      const { enableBorderRadius: s } = t.getProps(['enableBorderRadius']),
        n = t.options.borderRadius,
        o = ti(n),
        a = Math.min(e, i),
        r = t.borderSkipped,
        h = s || vt(n);
      return {
        topLeft: Nn(!h || r.top || r.left, o.topLeft, 0, a),
        topRight: Nn(!h || r.top || r.right, o.topRight, 0, a),
        bottomLeft: Nn(!h || r.bottom || r.left, o.bottomLeft, 0, a),
        bottomRight: Nn(!h || r.bottom || r.right, o.bottomRight, 0, a),
      };
    })(t, i / 2, s / 2);
  return {
    outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
    inner: {
      x: e.left + n.l,
      y: e.top + n.t,
      w: i - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
      },
    },
  };
}
function Hn(t, e, i, s) {
  const n = null === e,
    o = null === i,
    a = t && !(n && o) && zn(t, s);
  return a && (n || oe(e, a.left, a.right)) && (o || oe(i, a.top, a.bottom));
}
function Vn(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function jn(t, e, i = {}) {
  const s = t.x !== i.x ? -e : 0,
    n = t.y !== i.y ? -e : 0,
    o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
    a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
  return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius };
}
class Wn extends Gs {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: i, backgroundColor: s },
      } = this,
      { inner: n, outer: o } = Bn(this),
      a =
        (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight
          ? Xe
          : Vn;
    var r;
    t.save(),
      (o.w === n.w && o.h === n.h) ||
        (t.beginPath(),
        a(t, jn(o, e, n)),
        t.clip(),
        a(t, jn(n, -e, o)),
        (t.fillStyle = i),
        t.fill('evenodd')),
      t.beginPath(),
      a(t, jn(n, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore();
  }
  inRange(t, e, i) {
    return Hn(this, t, e, i);
  }
  inXRange(t, e) {
    return Hn(this, t, null, e);
  }
  inYRange(t, e) {
    return Hn(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: i,
      base: s,
      horizontal: n,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
    return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
  }
  getRange(t) {
    return 'x' === t ? this.width / 2 : this.height / 2;
  }
}
i(Wn, 'id', 'bar'),
  i(Wn, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  i(Wn, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
const $n = (t, e) => {
  let { boxHeight: i = e, boxWidth: s = e } = t;
  return (
    t.usePointStyle &&
      ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
    { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
  );
};
class Yn extends Gs {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, i) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = Pt(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter(e => t.filter(e, this.chart.data))),
      t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) return void (this.width = this.height = 0);
    const i = t.labels,
      s = ii(i.font),
      n = s.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: r } = $n(i, n);
    let h, l;
    (e.font = s.string),
      this.isHorizontal()
        ? ((h = this.maxWidth), (l = this._fitRows(o, n, a, r) + 10))
        : ((l = this.maxHeight), (h = this._fitCols(o, s, a, r) + 10)),
      (this.width = Math.min(h, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(l, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, i, s) {
    const {
        ctx: n,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      r = (this.legendHitBoxes = []),
      h = (this.lineWidths = [0]),
      l = s + a;
    let c = t;
    (n.textAlign = 'left'), (n.textBaseline = 'middle');
    let d = -1,
      u = -l;
    return (
      this.legendItems.forEach((t, f) => {
        const g = i + e / 2 + n.measureText(t.text).width;
        (0 === f || h[h.length - 1] + g + 2 * a > o) &&
          ((c += l), (h[h.length - (f > 0 ? 0 : 1)] = 0), (u += l), d++),
          (r[f] = { left: 0, top: u, row: d, width: g, height: s }),
          (h[h.length - 1] += g + a);
      }),
      c
    );
  }
  _fitCols(t, e, i, s) {
    const {
        ctx: n,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      r = (this.legendHitBoxes = []),
      h = (this.columnSizes = []),
      l = o - t;
    let c = a,
      d = 0,
      u = 0,
      f = 0,
      g = 0;
    return (
      this.legendItems.forEach((t, o) => {
        const { itemWidth: p, itemHeight: m } = (function (t, e, i, s, n) {
          const o = (function (t, e, i, s) {
              let n = t.text;
              n &&
                'string' != typeof n &&
                (n = n.reduce((t, e) => (t.length > e.length ? t : e)));
              return e + i.size / 2 + s.measureText(n).width;
            })(s, t, e, i),
            a = (function (t, e, i) {
              let s = t;
              'string' != typeof e.text && (s = Un(e, i));
              return s;
            })(n, s, e.lineHeight);
          return { itemWidth: o, itemHeight: a };
        })(i, e, n, t, s);
        o > 0 &&
          u + m + 2 * a > l &&
          ((c += d + a),
          h.push({ width: d, height: u }),
          (f += d + a),
          g++,
          (d = u = 0)),
          (r[o] = { left: f, top: u, col: g, width: p, height: m }),
          (d = Math.max(d, p)),
          (u += m + a);
      }),
      (c += d),
      h.push({ width: d, height: u }),
      c
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: i,
          labels: { padding: s },
          rtl: n,
        },
      } = this,
      o = Ii(n, this.left, this.width);
    if (this.isHorizontal()) {
      let n = 0,
        a = pe(i, this.left + s, this.right - this.lineWidths[n]);
      for (const r of e)
        n !== r.row &&
          ((n = r.row),
          (a = pe(i, this.left + s, this.right - this.lineWidths[n]))),
          (r.top += this.top + t + s),
          (r.left = o.leftForLtr(o.x(a), r.width)),
          (a += r.width + s);
    } else {
      let n = 0,
        a = pe(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
      for (const r of e)
        r.col !== n &&
          ((n = r.col),
          (a = pe(
            i,
            this.top + t + s,
            this.bottom - this.columnSizes[n].height,
          ))),
          (r.top = a),
          (r.left += this.left + s),
          (r.left = o.leftForLtr(o.x(r.left), r.width)),
          (a += r.height + s);
    }
  }
  isHorizontal() {
    return (
      'top' === this.options.position || 'bottom' === this.options.position
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      je(t, this), this._draw(), We(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
      { align: n, labels: o } = t,
      a = Ee.color,
      r = Ii(t.rtl, this.left, this.width),
      h = ii(o.font),
      { padding: l } = o,
      c = h.size,
      d = c / 2;
    let u;
    this.drawTitle(),
      (s.textAlign = r.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = h.string);
    const { boxWidth: f, boxHeight: g, itemHeight: p } = $n(o, c),
      m = this.isHorizontal(),
      b = this._computeTitleHeight();
    (u = m
      ? {
          x: pe(n, this.left + l, this.right - i[0]),
          y: this.top + l + b,
          line: 0,
        }
      : {
          x: this.left + l,
          y: pe(n, this.top + b + l, this.bottom - e[0].height),
          line: 0,
        }),
      Ei(this.ctx, t.textDirection);
    const x = p + l;
    this.legendItems.forEach((_, y) => {
      (s.strokeStyle = _.fontColor), (s.fillStyle = _.fontColor);
      const v = s.measureText(_.text).width,
        w = r.textAlign(_.textAlign || (_.textAlign = o.textAlign)),
        k = f + d + v;
      let M = u.x,
        S = u.y;
      r.setWidth(this.width),
        m
          ? y > 0 &&
            M + k + l > this.right &&
            ((S = u.y += x),
            u.line++,
            (M = u.x = pe(n, this.left + l, this.right - i[u.line])))
          : y > 0 &&
            S + x > this.bottom &&
            ((M = u.x = M + e[u.line].width + l),
            u.line++,
            (S = u.y =
              pe(n, this.top + b + l, this.bottom - e[u.line].height)));
      if (
        ((function (t, e, i) {
          if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
          s.save();
          const n = Mt(i.lineWidth, 1);
          if (
            ((s.fillStyle = Mt(i.fillStyle, a)),
            (s.lineCap = Mt(i.lineCap, 'butt')),
            (s.lineDashOffset = Mt(i.lineDashOffset, 0)),
            (s.lineJoin = Mt(i.lineJoin, 'miter')),
            (s.lineWidth = n),
            (s.strokeStyle = Mt(i.strokeStyle, a)),
            s.setLineDash(Mt(i.lineDash, [])),
            o.usePointStyle)
          ) {
            const a = {
                radius: (g * Math.SQRT2) / 2,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                borderWidth: n,
              },
              h = r.xPlus(t, f / 2);
            He(s, a, h, e + d, o.pointStyleWidth && f);
          } else {
            const o = e + Math.max((c - g) / 2, 0),
              a = r.leftForLtr(t, f),
              h = ti(i.borderRadius);
            s.beginPath(),
              Object.values(h).some(t => 0 !== t)
                ? Xe(s, { x: a, y: o, w: f, h: g, radius: h })
                : s.rect(a, o, f, g),
              s.fill(),
              0 !== n && s.stroke();
          }
          s.restore();
        })(r.x(M), S, _),
        (M = ((t, e, i, s) =>
          t === (s ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
          w,
          M + f + d,
          m ? M + k : this.right,
          t.rtl,
        )),
        (function (t, e, i) {
          $e(s, i.text, t, e + p / 2, h, {
            strikethrough: i.hidden,
            textAlign: r.textAlign(i.textAlign),
          });
        })(r.x(M), S, _),
        m)
      )
        u.x += k + l;
      else if ('string' != typeof _.text) {
        const t = h.lineHeight;
        u.y += Un(_, t);
      } else u.y += x;
    }),
      Ri(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      i = ii(e.font),
      s = ei(e.padding);
    if (!e.display) return;
    const n = Ii(t.rtl, this.left, this.width),
      o = this.ctx,
      a = e.position,
      r = i.size / 2,
      h = s.top + r;
    let l,
      c = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (l = this.top + h),
        (c = pe(t.align, c, this.right - d));
    else {
      const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
      l =
        h +
        pe(
          t.align,
          this.top,
          this.bottom - e - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const u = pe(a, c, c + d);
    (o.textAlign = n.textAlign(ge(a))),
      (o.textBaseline = 'middle'),
      (o.strokeStyle = e.color),
      (o.fillStyle = e.color),
      (o.font = i.string),
      $e(o, e.text, u, l, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = ii(t.font),
      i = ei(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, n;
    if (oe(t, this.left, this.right) && oe(e, this.top, this.bottom))
      for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
        if (
          ((s = n[i]),
          oe(t, s.left, s.left + s.width) && oe(e, s.top, s.top + s.height))
        )
          return this.legendItems[i];
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (
      !(function (t, e) {
        if (('mousemove' === t || 'mouseout' === t) && (e.onHover || e.onLeave))
          return !0;
        if (e.onClick && ('click' === t || 'mouseup' === t)) return !0;
        return !1;
      })(t.type, e)
    )
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if ('mousemove' === t.type || 'mouseout' === t.type) {
      const o = this._hoveredItem,
        a =
          ((n = i),
          null !== (s = o) &&
            null !== n &&
            s.datasetIndex === n.datasetIndex &&
            s.index === n.index);
      o && !a && Pt(e.onLeave, [t, o, this], this),
        (this._hoveredItem = i),
        i && !a && Pt(e.onHover, [t, i, this], this);
    } else i && Pt(e.onClick, [t, i, this], this);
    var s, n;
  }
}
function Un(t, e) {
  return e * (t.text ? t.text.length + 0.5 : 0);
}
var Xn = {
  id: 'legend',
  _element: Yn,
  start(t, e, i) {
    const s = (t.legend = new Yn({ ctx: t.ctx, options: i, chart: t }));
    Ts.configure(t, s, i), Ts.addBox(t, s);
  },
  stop(t) {
    Ts.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, i) {
    const s = t.legend;
    Ts.configure(t, s, i), (s.options = i);
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, i) {
      const s = e.datasetIndex,
        n = i.chart;
      n.isDatasetVisible(s)
        ? (n.hide(s), (e.hidden = !0))
        : (n.show(s), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: t => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets,
          {
            labels: {
              usePointStyle: i,
              pointStyle: s,
              textAlign: n,
              color: o,
              useBorderRadius: a,
              borderRadius: r,
            },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map(t => {
          const h = t.controller.getStyle(i ? 0 : void 0),
            l = ei(h.borderWidth);
          return {
            text: e[t.index].label,
            fillStyle: h.backgroundColor,
            fontColor: o,
            hidden: !t.visible,
            lineCap: h.borderCapStyle,
            lineDash: h.borderDash,
            lineDashOffset: h.borderDashOffset,
            lineJoin: h.borderJoinStyle,
            lineWidth: (l.width + l.height) / 4,
            strokeStyle: h.borderColor,
            pointStyle: s || h.pointStyle,
            rotation: h.rotation,
            textAlign: n || h.textAlign,
            borderRadius: a && (r || h.borderRadius),
            datasetIndex: t.index,
          };
        }, this);
      },
    },
    title: {
      color: t => t.chart.options.color,
      display: !1,
      position: 'center',
      text: '',
    },
  },
  descriptors: {
    _scriptable: t => !t.startsWith('on'),
    labels: {
      _scriptable: t => !['generateLabels', 'filter', 'sort'].includes(t),
    },
  },
};
class qn extends Gs {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display))
      return void (this.width = this.height = this.right = this.bottom = 0);
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = yt(i.text) ? i.text.length : 1;
    this._padding = ei(i.padding);
    const n = s * ii(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = n) : (this.width = n);
  }
  isHorizontal() {
    const t = this.options.position;
    return 'top' === t || 'bottom' === t;
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: n, options: o } = this,
      a = o.align;
    let r,
      h,
      l,
      c = 0;
    return (
      this.isHorizontal()
        ? ((h = pe(a, i, n)), (l = e + t), (r = n - i))
        : ('left' === o.position
            ? ((h = i + t), (l = pe(a, s, e)), (c = -0.5 * Vt))
            : ((h = n - t), (l = pe(a, e, s)), (c = 0.5 * Vt)),
          (r = s - e)),
      { titleX: h, titleY: l, maxWidth: r, rotation: c }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const i = ii(e.font),
      s = i.lineHeight / 2 + this._padding.top,
      { titleX: n, titleY: o, maxWidth: a, rotation: r } = this._drawArgs(s);
    $e(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: a,
      rotation: r,
      textAlign: ge(e.align),
      textBaseline: 'middle',
      translation: [n, o],
    });
  }
}
var Kn = {
  id: 'title',
  _element: qn,
  start(t, e, i) {
    !(function (t, e) {
      const i = new qn({ ctx: t.ctx, options: e, chart: t });
      Ts.configure(t, i, e), Ts.addBox(t, i), (t.titleBlock = i);
    })(t, i);
  },
  stop(t) {
    const e = t.titleBlock;
    Ts.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, i) {
    const s = t.titleBlock;
    Ts.configure(t, s, i), (s.options = i);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Gn = {
  average(t) {
    if (!t.length) return !1;
    let e,
      i,
      s = 0,
      n = 0,
      o = 0;
    for (e = 0, i = t.length; e < i; ++e) {
      const i = t[e].element;
      if (i && i.hasValue()) {
        const t = i.tooltipPosition();
        (s += t.x), (n += t.y), ++o;
      }
    }
    return { x: s / o, y: n / o };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let i,
      s,
      n,
      o = e.x,
      a = e.y,
      r = Number.POSITIVE_INFINITY;
    for (i = 0, s = t.length; i < s; ++i) {
      const s = t[i].element;
      if (s && s.hasValue()) {
        const t = s.getCenterPoint(),
          i =
            ((h = e),
            (l = t),
            Math.sqrt(Math.pow(l.x - h.x, 2) + Math.pow(l.y - h.y, 2)));
        i < r && ((r = i), (n = s));
      }
    }
    var h, l;
    if (n) {
      const t = n.tooltipPosition();
      (o = t.x), (a = t.y);
    }
    return { x: o, y: a };
  },
};
function Zn(t, e) {
  return e && (yt(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Qn(t) {
  return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
    ? t.split('\n')
    : t;
}
function Jn(t, e) {
  const { element: i, datasetIndex: s, index: n } = e,
    o = t.getDatasetMeta(s).controller,
    { label: a, value: r } = o.getLabelAndValue(n);
  return {
    chart: t,
    label: a,
    parsed: o.getParsed(n),
    raw: t.data.datasets[s].data[n],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: i,
  };
}
function to(t, e) {
  const i = t.chart.ctx,
    { body: s, footer: n, title: o } = t,
    { boxWidth: a, boxHeight: r } = e,
    h = ii(e.bodyFont),
    l = ii(e.titleFont),
    c = ii(e.footerFont),
    d = o.length,
    u = n.length,
    f = s.length,
    g = ei(e.padding);
  let p = g.height,
    m = 0,
    b = s.reduce(
      (t, e) => t + e.before.length + e.lines.length + e.after.length,
      0,
    );
  if (
    ((b += t.beforeBody.length + t.afterBody.length),
    d &&
      (p += d * l.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    b)
  ) {
    p +=
      f * (e.displayColors ? Math.max(r, h.lineHeight) : h.lineHeight) +
      (b - f) * h.lineHeight +
      (b - 1) * e.bodySpacing;
  }
  u && (p += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
  let x = 0;
  const _ = function (t) {
    m = Math.max(m, i.measureText(t).width + x);
  };
  return (
    i.save(),
    (i.font = l.string),
    Ct(t.title, _),
    (i.font = h.string),
    Ct(t.beforeBody.concat(t.afterBody), _),
    (x = e.displayColors ? a + 2 + e.boxPadding : 0),
    Ct(s, t => {
      Ct(t.before, _), Ct(t.lines, _), Ct(t.after, _);
    }),
    (x = 0),
    (i.font = c.string),
    Ct(t.footer, _),
    i.restore(),
    (m += g.width),
    { width: m, height: p }
  );
}
function eo(t, e, i, s) {
  const { x: n, width: o } = i,
    {
      width: a,
      chartArea: { left: r, right: h },
    } = t;
  let l = 'center';
  return (
    'center' === s
      ? (l = n <= (r + h) / 2 ? 'left' : 'right')
      : n <= o / 2
      ? (l = 'left')
      : n >= a - o / 2 && (l = 'right'),
    (function (t, e, i, s) {
      const { x: n, width: o } = s,
        a = i.caretSize + i.caretPadding;
      return (
        ('left' === t && n + o + a > e.width) ||
        ('right' === t && n - o - a < 0) ||
        void 0
      );
    })(l, t, e, i) && (l = 'center'),
    l
  );
}
function io(t, e, i) {
  const s =
    i.yAlign ||
    e.yAlign ||
    (function (t, e) {
      const { y: i, height: s } = e;
      return i < s / 2 ? 'top' : i > t.height - s / 2 ? 'bottom' : 'center';
    })(t, i);
  return { xAlign: i.xAlign || e.xAlign || eo(t, e, i, s), yAlign: s };
}
function so(t, e, i, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
    { xAlign: r, yAlign: h } = i,
    l = n + o,
    { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = ti(a);
  let g = (function (t, e) {
    let { x: i, width: s } = t;
    return 'right' === e ? (i -= s) : 'center' === e && (i -= s / 2), i;
  })(e, r);
  const p = (function (t, e, i) {
    let { y: s, height: n } = t;
    return 'top' === e ? (s += i) : (s -= 'bottom' === e ? n + i : n / 2), s;
  })(e, h, l);
  return (
    'center' === h
      ? 'left' === r
        ? (g += l)
        : 'right' === r && (g -= l)
      : 'left' === r
      ? (g -= Math.max(c, u) + n)
      : 'right' === r && (g += Math.max(d, f) + n),
    { x: ne(g, 0, s.width - e.width), y: ne(p, 0, s.height - e.height) }
  );
}
function no(t, e, i) {
  const s = ei(i.padding);
  return 'center' === e
    ? t.x + t.width / 2
    : 'right' === e
    ? t.x + t.width - s.right
    : t.x + s.left;
}
function oo(t) {
  return Zn([], Qn(t));
}
function ao(t, e) {
  const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return i ? t.override(i) : t;
}
const ro = {
  beforeTitle: bt,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        i = e.chart.data.labels,
        s = i ? i.length : 0;
      if (this && this.options && 'dataset' === this.options.mode)
        return e.dataset.label || '';
      if (e.label) return e.label;
      if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
    }
    return '';
  },
  afterTitle: bt,
  beforeBody: bt,
  beforeLabel: bt,
  label(t) {
    if (this && this.options && 'dataset' === this.options.mode)
      return t.label + ': ' + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || '';
    e && (e += ': ');
    const i = t.formattedValue;
    return _t(i) || (e += i), e;
  },
  labelColor(t) {
    const e = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const e = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return { pointStyle: e.pointStyle, rotation: e.rotation };
  },
  afterLabel: bt,
  afterBody: bt,
  beforeFooter: bt,
  footer: bt,
  afterFooter: bt,
};
function ho(t, e, i, s) {
  const n = t[e].call(i, s);
  return void 0 === n ? ro[e].call(i, s) : n;
}
class lo extends Gs {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && e.options.animation && i.animations,
      n = new Vi(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context =
        ((t = this.chart.getContext()),
        (e = this),
        (i = this._tooltipItems),
        ni(t, { tooltip: e, tooltipItems: i, type: 'tooltip' })))
    );
    var t, e, i;
  }
  getTitle(t, e) {
    const { callbacks: i } = e,
      s = ho(i, 'beforeTitle', this, t),
      n = ho(i, 'title', this, t),
      o = ho(i, 'afterTitle', this, t);
    let a = [];
    return (a = Zn(a, Qn(s))), (a = Zn(a, Qn(n))), (a = Zn(a, Qn(o))), a;
  }
  getBeforeBody(t, e) {
    return oo(ho(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e,
      s = [];
    return (
      Ct(t, t => {
        const e = { before: [], lines: [], after: [] },
          n = ao(i, t);
        Zn(e.before, Qn(ho(n, 'beforeLabel', this, t))),
          Zn(e.lines, ho(n, 'label', this, t)),
          Zn(e.after, Qn(ho(n, 'afterLabel', this, t))),
          s.push(e);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return oo(ho(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e,
      s = ho(i, 'beforeFooter', this, t),
      n = ho(i, 'footer', this, t),
      o = ho(i, 'afterFooter', this, t);
    let a = [];
    return (a = Zn(a, Qn(s))), (a = Zn(a, Qn(n))), (a = Zn(a, Qn(o))), a;
  }
  _createItems(t) {
    const e = this._active,
      i = this.chart.data,
      s = [],
      n = [],
      o = [];
    let a,
      r,
      h = [];
    for (a = 0, r = e.length; a < r; ++a) h.push(Jn(this.chart, e[a]));
    return (
      t.filter && (h = h.filter((e, s, n) => t.filter(e, s, n, i))),
      t.itemSort && (h = h.sort((e, s) => t.itemSort(e, s, i))),
      Ct(h, e => {
        const i = ao(t.callbacks, e);
        s.push(ho(i, 'labelColor', this, e)),
          n.push(ho(i, 'labelPointStyle', this, e)),
          o.push(ho(i, 'labelTextColor', this, e));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = n),
      (this.labelTextColors = o),
      (this.dataPoints = h),
      h
    );
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()),
      s = this._active;
    let n,
      o = [];
    if (s.length) {
      const t = Gn[i.position].call(this, s, this._eventPosition);
      (o = this._createItems(i)),
        (this.title = this.getTitle(o, i)),
        (this.beforeBody = this.getBeforeBody(o, i)),
        (this.body = this.getBody(o, i)),
        (this.afterBody = this.getAfterBody(o, i)),
        (this.footer = this.getFooter(o, i));
      const e = (this._size = to(this, i)),
        a = Object.assign({}, t, e),
        r = io(this.chart, i, a),
        h = so(i, a, r, this.chart);
      (this.xAlign = r.xAlign),
        (this.yAlign = r.yAlign),
        (n = {
          opacity: 1,
          x: h.x,
          y: h.y,
          width: e.width,
          height: e.height,
          caretX: t.x,
          caretY: t.y,
        });
    } else 0 !== this.opacity && (n = { opacity: 0 });
    (this._tooltipItems = o),
      (this.$context = void 0),
      n && this._resolveAnimations().update(this, n),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, i, s) {
    const n = this.getCaretPosition(t, i, s);
    e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: n } = this,
      { caretSize: o, cornerRadius: a } = i,
      { topLeft: r, topRight: h, bottomLeft: l, bottomRight: c } = ti(a),
      { x: d, y: u } = t,
      { width: f, height: g } = e;
    let p, m, b, x, _, y;
    return (
      'center' === n
        ? ((_ = u + g / 2),
          'left' === s
            ? ((p = d), (m = p - o), (x = _ + o), (y = _ - o))
            : ((p = d + f), (m = p + o), (x = _ - o), (y = _ + o)),
          (b = p))
        : ((m =
            'left' === s
              ? d + Math.max(r, l) + o
              : 'right' === s
              ? d + f - Math.max(h, c) - o
              : this.caretX),
          'top' === n
            ? ((x = u), (_ = x - o), (p = m - o), (b = m + o))
            : ((x = u + g), (_ = x + o), (p = m + o), (b = m - o)),
          (y = x)),
      { x1: p, x2: m, x3: b, y1: x, y2: _, y3: y }
    );
  }
  drawTitle(t, e, i) {
    const s = this.title,
      n = s.length;
    let o, a, r;
    if (n) {
      const h = Ii(i.rtl, this.x, this.width);
      for (
        t.x = no(this, i.titleAlign, i),
          e.textAlign = h.textAlign(i.titleAlign),
          e.textBaseline = 'middle',
          o = ii(i.titleFont),
          a = i.titleSpacing,
          e.fillStyle = i.titleColor,
          e.font = o.string,
          r = 0;
        r < n;
        ++r
      )
        e.fillText(s[r], h.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + a),
          r + 1 === n && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, i, s, n) {
    const o = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: r, boxWidth: h, boxPadding: l } = n,
      c = ii(n.bodyFont),
      d = no(this, 'left', n),
      u = s.x(d),
      f = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0,
      g = e.y + f;
    if (n.usePointStyle) {
      const e = {
          radius: Math.min(h, r) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        i = s.leftForLtr(u, h) + h / 2,
        l = g + r / 2;
      (t.strokeStyle = n.multiKeyBackground),
        (t.fillStyle = n.multiKeyBackground),
        Be(t, e, i, l),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        Be(t, e, i, l);
    } else {
      (t.lineWidth = vt(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const e = s.leftForLtr(u, h - l),
        i = s.leftForLtr(s.xPlus(u, 1), h - l - 2),
        a = ti(o.borderRadius);
      Object.values(a).some(t => 0 !== t)
        ? (t.beginPath(),
          (t.fillStyle = n.multiKeyBackground),
          Xe(t, { x: e, y: g, w: h, h: r, radius: a }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          Xe(t, { x: i, y: g + 1, w: h - 2, h: r - 2, radius: a }),
          t.fill())
        : ((t.fillStyle = n.multiKeyBackground),
          t.fillRect(e, g, h, r),
          t.strokeRect(e, g, h, r),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(i, g + 1, h - 2, r - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this,
      {
        bodySpacing: n,
        bodyAlign: o,
        displayColors: a,
        boxHeight: r,
        boxWidth: h,
        boxPadding: l,
      } = i,
      c = ii(i.bodyFont);
    let d = c.lineHeight,
      u = 0;
    const f = Ii(i.rtl, this.x, this.width),
      g = function (i) {
        e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + n);
      },
      p = f.textAlign(o);
    let m, b, x, _, y, v, w;
    for (
      e.textAlign = o,
        e.textBaseline = 'middle',
        e.font = c.string,
        t.x = no(this, p, i),
        e.fillStyle = i.bodyColor,
        Ct(this.beforeBody, g),
        u = a && 'right' !== p ? ('center' === o ? h / 2 + l : h + 2 + l) : 0,
        _ = 0,
        v = s.length;
      _ < v;
      ++_
    ) {
      for (
        m = s[_],
          b = this.labelTextColors[_],
          e.fillStyle = b,
          Ct(m.before, g),
          x = m.lines,
          a &&
            x.length &&
            (this._drawColorBox(e, t, _, f, i),
            (d = Math.max(c.lineHeight, r))),
          y = 0,
          w = x.length;
        y < w;
        ++y
      )
        g(x[y]), (d = c.lineHeight);
      Ct(m.after, g);
    }
    (u = 0), (d = c.lineHeight), Ct(this.afterBody, g), (t.y -= n);
  }
  drawFooter(t, e, i) {
    const s = this.footer,
      n = s.length;
    let o, a;
    if (n) {
      const r = Ii(i.rtl, this.x, this.width);
      for (
        t.x = no(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          e.textAlign = r.textAlign(i.footerAlign),
          e.textBaseline = 'middle',
          o = ii(i.footerFont),
          e.fillStyle = i.footerColor,
          e.font = o.string,
          a = 0;
        a < n;
        ++a
      )
        e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: n, yAlign: o } = this,
      { x: a, y: r } = t,
      { width: h, height: l } = i,
      {
        topLeft: c,
        topRight: d,
        bottomLeft: u,
        bottomRight: f,
      } = ti(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(a + c, r),
      'top' === o && this.drawCaret(t, e, i, s),
      e.lineTo(a + h - d, r),
      e.quadraticCurveTo(a + h, r, a + h, r + d),
      'center' === o && 'right' === n && this.drawCaret(t, e, i, s),
      e.lineTo(a + h, r + l - f),
      e.quadraticCurveTo(a + h, r + l, a + h - f, r + l),
      'bottom' === o && this.drawCaret(t, e, i, s),
      e.lineTo(a + u, r + l),
      e.quadraticCurveTo(a, r + l, a, r + l - u),
      'center' === o && 'left' === n && this.drawCaret(t, e, i, s),
      e.lineTo(a, r + c),
      e.quadraticCurveTo(a, r, a + c, r),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      i = this.$animations,
      s = i && i.x,
      n = i && i.y;
    if (s || n) {
      const i = Gn[t.position].call(this, this._active, this._eventPosition);
      if (!i) return;
      const o = (this._size = to(this, t)),
        a = Object.assign({}, i, this._size),
        r = io(e, t, a),
        h = so(t, a, r, e);
      (s._to === h.x && n._to === h.y) ||
        ((this.xAlign = r.xAlign),
        (this.yAlign = r.yAlign),
        (this.width = o.width),
        (this.height = o.height),
        (this.caretX = i.x),
        (this.caretY = i.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      n = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const o = ei(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(n, t, s, e),
      Ei(t, e.textDirection),
      (n.y += o.top),
      this.drawTitle(n, t, e),
      this.drawBody(n, t, e),
      this.drawFooter(n, t, e),
      Ri(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active,
      s = t.map(({ datasetIndex: t, index: e }) => {
        const i = this.chart.getDatasetMeta(t);
        if (!i) throw new Error('Cannot find a dataset at index ' + t);
        return { datasetIndex: t, element: i.data[e], index: e };
      }),
      n = !Ot(i, s),
      o = this._positionChanged(s, e);
    (n || o) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      n = this._active || [],
      o = this._getActiveElements(t, n, e, i),
      a = this._positionChanged(o, t),
      r = e || !Ot(o, n) || a;
    return (
      r &&
        ((this._active = o),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      r
    );
  }
  _getActiveElements(t, e, i, s) {
    const n = this.options;
    if ('mouseout' === t.type) return [];
    if (!s) return e;
    const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
    return n.reverse && o.reverse(), o;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: n } = this,
      o = Gn[n.position].call(this, t, e);
    return !1 !== o && (i !== o.x || s !== o.y);
  }
}
i(lo, 'positioners', Gn);
var co = {
  id: 'tooltip',
  _element: lo,
  positioners: Gn,
  afterInit(t, e, i) {
    i && (t.tooltip = new lo({ chart: t, options: i }));
  },
  beforeUpdate(t, e, i) {
    t.tooltip && t.tooltip.initialize(i);
  },
  reset(t, e, i) {
    t.tooltip && t.tooltip.initialize(i);
  },
  afterDraw(t) {
    const e = t.tooltip;
    if (e && e._willRender()) {
      const i = { tooltip: e };
      if (!1 === t.notifyPlugins('beforeTooltipDraw', { ...i, cancelable: !0 }))
        return;
      e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i);
    }
  },
  afterEvent(t, e) {
    if (t.tooltip) {
      const i = e.replay;
      t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: { weight: 'bold' },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: 'bold' },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t, e) => e.bodyFont.size,
    boxWidth: (t, e) => e.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: { duration: 400, easing: 'easeOutQuart' },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: { easing: 'linear', duration: 200 },
    },
    callbacks: ro,
  },
  defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
  descriptors: {
    _scriptable: t => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: 'animation' },
  },
  additionalOptionScopes: ['interaction'],
};
const uo = (t, e, i, s) => (
  'string' == typeof e
    ? ((i = t.push(e) - 1), s.unshift({ index: i, label: e }))
    : isNaN(e) && (i = null),
  i
);
function fo(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class go extends hn {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const t = this.getLabels();
      for (const { index: i, label: s } of e) t[i] === s && t.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (_t(t)) return null;
    const i = this.getLabels();
    return (
      (e =
        isFinite(e) && i[e] === t
          ? e
          : (function (t, e, i, s) {
              const n = t.indexOf(e);
              return -1 === n ? uo(t, e, i, s) : n !== t.lastIndexOf(e) ? i : n;
            })(i, t, Mt(e, t), this._addedLabels)),
      ((t, e) => (null === t ? null : ne(Math.round(t), 0, e)))(e, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    'ticks' === this.options.bounds &&
      (t || (i = 0), e || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      i = this.options.offset,
      s = [];
    let n = this.getLabels();
    (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
      (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let o = t; o <= e; o++) s.push({ value: o });
    return s;
  }
  getLabelForValue(t) {
    return fo.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      'number' != typeof t && (t = this.parse(t)),
      null === t
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function po(t, e) {
  const i = [],
    {
      bounds: s,
      step: n,
      min: o,
      max: a,
      precision: r,
      count: h,
      maxTicks: l,
      maxDigits: c,
      includeBounds: d,
    } = t,
    u = n || 1,
    f = l - 1,
    { min: g, max: p } = e,
    m = !_t(o),
    b = !_t(a),
    x = !_t(h),
    _ = (p - g) / (c + 1);
  let y,
    v,
    w,
    k,
    M = Zt((p - g) / f / u) * u;
  if (M < 1e-14 && !m && !b) return [{ value: g }, { value: p }];
  (k = Math.ceil(p / M) - Math.floor(g / M)),
    k > f && (M = Zt((k * M) / f / u) * u),
    _t(r) || ((y = Math.pow(10, r)), (M = Math.ceil(M * y) / y)),
    'ticks' === s
      ? ((v = Math.floor(g / M) * M), (w = Math.ceil(p / M) * M))
      : ((v = g), (w = p)),
    m &&
    b &&
    n &&
    (function (t, e) {
      const i = Math.round(t);
      return i - e <= t && i + e >= t;
    })((a - o) / n, M / 1e3)
      ? ((k = Math.round(Math.min((a - o) / M, l))),
        (M = (a - o) / k),
        (v = o),
        (w = a))
      : x
      ? ((v = m ? o : v), (w = b ? a : w), (k = h - 1), (M = (w - v) / k))
      : ((k = (w - v) / M),
        (k = Gt(k, Math.round(k), M / 1e3) ? Math.round(k) : Math.ceil(k)));
  const S = Math.max(ie(M), ie(v));
  (y = Math.pow(10, _t(r) ? S : r)),
    (v = Math.round(v * y) / y),
    (w = Math.round(w * y) / y);
  let P = 0;
  for (
    m &&
    (d && v !== o
      ? (i.push({ value: o }),
        v < o && P++,
        Gt(Math.round((v + P * M) * y) / y, o, mo(o, _, t)) && P++)
      : v < o && P++);
    P < k;
    ++P
  )
    i.push({ value: Math.round((v + P * M) * y) / y });
  return (
    b && d && w !== a
      ? i.length && Gt(i[i.length - 1].value, a, mo(a, _, t))
        ? (i[i.length - 1].value = a)
        : i.push({ value: a })
      : (b && w !== a) || i.push({ value: w }),
    i
  );
}
function mo(t, e, { horizontal: i, minRotation: s }) {
  const n = te(s),
    o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
    a = 0.75 * e * ('' + t).length;
  return Math.min(e / o, a);
}
i(go, 'id', 'category'), i(go, 'defaults', { ticks: { callback: fo } });
class bo extends hn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return _t(t) ||
      (('number' == typeof t || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: n } = this;
    const o = t => (s = e ? s : t),
      a = t => (n = i ? n : t);
    if (t) {
      const t = Kt(s),
        e = Kt(n);
      t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
    }
    if (s === n) {
      let e = 0 === n ? 1 : Math.abs(0.05 * n);
      a(n + e), t || o(s - e);
    }
    (this.min = s), (this.max = n);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let e,
      { maxTicksLimit: i, stepSize: s } = t;
    return (
      s
        ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          e > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`,
            ),
            (e = 1e3)))
        : ((e = this.computeTickLimit()), (i = i || 11)),
      i && (e = Math.min(i, e)),
      e
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = po(
      {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: !1 !== e.includeBounds,
      },
      this._range || this,
    );
    return (
      'ticks' === t.bounds && Jt(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (i += s);
    }
    (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
  }
  getLabelForValue(t) {
    return Pe(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class xo extends bo {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = wt(t) ? t : 0),
      (this.max = wt(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      i = te(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      n = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, n.lineHeight / s));
  }
  getPixelForValue(t) {
    return null === t
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
i(xo, 'id', 'linear'),
  i(xo, 'defaults', { ticks: { callback: Oe.formatters.numeric } });
const _o = t => Math.floor(qt(t)),
  yo = (t, e) => Math.pow(10, _o(t) + e);
function vo(t) {
  return 1 === t / Math.pow(10, _o(t));
}
function wo(t, e, i) {
  const s = Math.pow(10, i),
    n = Math.floor(t / s);
  return Math.ceil(e / s) - n;
}
function ko(t, { min: e, max: i }) {
  e = kt(t.min, e);
  const s = [],
    n = _o(e);
  let o = (function (t, e) {
      let i = _o(e - t);
      for (; wo(t, e, i) > 10; ) i++;
      for (; wo(t, e, i) < 10; ) i--;
      return Math.min(i, _o(t));
    })(e, i),
    a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const r = Math.pow(10, o),
    h = n > o ? Math.pow(10, n) : 0,
    l = Math.round((e - h) * a) / a,
    c = Math.floor((e - h) / r / 10) * r * 10;
  let d = Math.floor((l - c) / Math.pow(10, o)),
    u = kt(t.min, Math.round((h + c + d * Math.pow(10, o)) * a) / a);
  for (; u < i; )
    s.push({ value: u, major: vo(u), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (o++, (d = 2), (a = o >= 0 ? 1 : a)),
      (u = Math.round((h + c + d * Math.pow(10, o)) * a) / a);
  const f = kt(t.max, u);
  return s.push({ value: f, major: vo(f), significand: d }), s;
}
class Mo extends hn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const i = bo.prototype.parse.apply(this, [t, e]);
    if (0 !== i) return wt(i) && i > 0 ? i : null;
    this._zero = !0;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = wt(t) ? Math.max(0, t) : null),
      (this.max = wt(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !wt(this._userMin) &&
        (this.min = t === yo(this.min, 0) ? yo(this.min, -1) : yo(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min,
      s = this.max;
    const n = e => (i = t ? i : e),
      o = t => (s = e ? s : t);
    i === s && (i <= 0 ? (n(1), o(10)) : (n(yo(i, -1)), o(yo(s, 1)))),
      i <= 0 && n(yo(s, -1)),
      s <= 0 && o(yo(i, 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = ko({ min: this._userMin, max: this._userMax }, this);
    return (
      'ticks' === t.bounds && Jt(e, this, 'value'),
      t.reverse
        ? (e.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      e
    );
  }
  getLabelForValue(t) {
    return void 0 === t
      ? '0'
      : Pe(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = qt(t)),
      (this._valueRange = qt(this.max) - qt(t));
  }
  getPixelForValue(t) {
    return (
      (void 0 !== t && 0 !== t) || (t = this.min),
      null === t || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (qt(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function So(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const t = ei(e.backdropPadding);
    return Mt(e.font && e.font.size, Ee.font.size) + t.height;
  }
  return 0;
}
function Po(t, e, i, s, n) {
  return t === s || t === n
    ? { start: e - i / 2, end: e + i / 2 }
    : t < s || t > n
    ? { start: e - i, end: e }
    : { start: e, end: e + i };
}
function Co(t) {
  const e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom,
    },
    i = Object.assign({}, e),
    s = [],
    n = [],
    o = t._pointLabels.length,
    a = t.options.pointLabels,
    r = a.centerPointLabels ? Vt / o : 0;
  for (let d = 0; d < o; d++) {
    const o = a.setContext(t.getPointLabelContext(d));
    n[d] = o.padding;
    const u = t.getPointPosition(d, t.drawingArea + n[d], r),
      f = ii(o.font),
      g =
        ((h = t.ctx),
        (l = f),
        (c = yt((c = t._pointLabels[d])) ? c : [c]),
        { w: Fe(h, l.string, c), h: c.length * l.lineHeight });
    s[d] = g;
    const p = se(t.getIndexAngle(d) + r),
      m = Math.round(ee(p));
    Oo(i, e, p, Po(m, u.x, g.w, 0, 180), Po(m, u.y, g.h, 90, 270));
  }
  var h, l, c;
  t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
    (t._pointLabelItems = (function (t, e, i) {
      const s = [],
        n = t._pointLabels.length,
        o = t.options,
        a = So(o) / 2,
        r = t.drawingArea,
        h = o.pointLabels.centerPointLabels ? Vt / n : 0;
      for (let l = 0; l < n; l++) {
        const n = t.getPointPosition(l, r + a + i[l], h),
          o = Math.round(ee(se(n.angle + Yt))),
          c = e[l],
          d = Lo(n.y, c.h, o),
          u = Ao(o),
          f = Do(n.x, c.w, u);
        s.push({
          x: n.x,
          y: d,
          textAlign: u,
          left: f,
          top: d,
          right: f + c.w,
          bottom: d + c.h,
        });
      }
      return s;
    })(t, s, n));
}
function Oo(t, e, i, s, n) {
  const o = Math.abs(Math.sin(i)),
    a = Math.abs(Math.cos(i));
  let r = 0,
    h = 0;
  s.start < e.l
    ? ((r = (e.l - s.start) / o), (t.l = Math.min(t.l, e.l - r)))
    : s.end > e.r && ((r = (s.end - e.r) / o), (t.r = Math.max(t.r, e.r + r))),
    n.start < e.t
      ? ((h = (e.t - n.start) / a), (t.t = Math.min(t.t, e.t - h)))
      : n.end > e.b &&
        ((h = (n.end - e.b) / a), (t.b = Math.max(t.b, e.b + h)));
}
function Ao(t) {
  return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
}
function Do(t, e, i) {
  return 'right' === i ? (t -= e) : 'center' === i && (t -= e / 2), t;
}
function Lo(t, e, i) {
  return (
    90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t
  );
}
function To(t, e, i, s) {
  const { ctx: n } = t;
  if (i) n.arc(t.xCenter, t.yCenter, e, 0, jt);
  else {
    let i = t.getPointPosition(0, e);
    n.moveTo(i.x, i.y);
    for (let o = 1; o < s; o++)
      (i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y);
  }
}
i(Mo, 'id', 'logarithmic'),
  i(Mo, 'defaults', {
    ticks: { callback: Oe.formatters.logarithmic, major: { enabled: !0 } },
  });
class Io extends bo {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = ei(So(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = wt(t) && !isNaN(t) ? t : 0),
      (this.max = wt(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / So(this.options));
  }
  generateTickLabels(t) {
    bo.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((t, e) => {
          const i = Pt(this.options.pointLabels.callback, [t, e], this);
          return i || 0 === i ? i : '';
        })
        .filter((t, e) => this.chart.getDataVisibility(e)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Co(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, i, s),
      ));
  }
  getIndexAngle(t) {
    return se(
      t * (jt / (this._pointLabels.length || 1)) +
        te(this.options.startAngle || 0),
    );
  }
  getDistanceFromCenterForValue(t) {
    if (_t(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (_t(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return (function (t, e, i) {
        return ni(t, { label: i, index: e, type: 'pointLabel' });
      })(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - Yt + i;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t];
    return { left: e, top: i, right: s, bottom: n };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        To(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length,
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: i, grid: s, border: n } = e,
      o = this._pointLabels.length;
    let a, r, h;
    if (
      (e.pointLabels.display &&
        (function (t, e) {
          const {
            ctx: i,
            options: { pointLabels: s },
          } = t;
          for (let n = e - 1; n >= 0; n--) {
            const e = s.setContext(t.getPointLabelContext(n)),
              o = ii(e.font),
              {
                x: a,
                y: r,
                textAlign: h,
                left: l,
                top: c,
                right: d,
                bottom: u,
              } = t._pointLabelItems[n],
              { backdropColor: f } = e;
            if (!_t(f)) {
              const t = ti(e.borderRadius),
                s = ei(e.backdropPadding);
              i.fillStyle = f;
              const n = l - s.left,
                o = c - s.top,
                a = d - l + s.width,
                r = u - c + s.height;
              Object.values(t).some(t => 0 !== t)
                ? (i.beginPath(),
                  Xe(i, { x: n, y: o, w: a, h: r, radius: t }),
                  i.fill())
                : i.fillRect(n, o, a, r);
            }
            $e(i, t._pointLabels[n], a, r + o.lineHeight / 2, o, {
              color: e.color,
              textAlign: h,
              textBaseline: 'middle',
            });
          }
        })(this, o),
      s.display &&
        this.ticks.forEach((t, e) => {
          if (0 !== e) {
            r = this.getDistanceFromCenterForValue(t.value);
            const i = this.getContext(e),
              a = s.setContext(i),
              h = n.setContext(i);
            !(function (t, e, i, s, n) {
              const o = t.ctx,
                a = e.circular,
                { color: r, lineWidth: h } = e;
              (!a && !s) ||
                !r ||
                !h ||
                i < 0 ||
                (o.save(),
                (o.strokeStyle = r),
                (o.lineWidth = h),
                o.setLineDash(n.dash),
                (o.lineDashOffset = n.dashOffset),
                o.beginPath(),
                To(t, i, a, s),
                o.closePath(),
                o.stroke(),
                o.restore());
            })(this, a, r, o, h);
          }
        }),
      i.display)
    ) {
      for (t.save(), a = o - 1; a >= 0; a--) {
        const s = i.setContext(this.getPointLabelContext(a)),
          { color: n, lineWidth: o } = s;
        o &&
          n &&
          ((t.lineWidth = o),
          (t.strokeStyle = n),
          t.setLineDash(s.borderDash),
          (t.lineDashOffset = s.borderDashOffset),
          (r = this.getDistanceFromCenterForValue(
            e.ticks.reverse ? this.min : this.max,
          )),
          (h = this.getPointPosition(a, r)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(h.x, h.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      i = e.ticks;
    if (!i.display) return;
    const s = this.getIndexAngle(0);
    let n, o;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((s, a) => {
        if (0 === a && !e.reverse) return;
        const r = i.setContext(this.getContext(a)),
          h = ii(r.font);
        if (
          ((n = this.getDistanceFromCenterForValue(this.ticks[a].value)),
          r.showLabelBackdrop)
        ) {
          (t.font = h.string),
            (o = t.measureText(s.label).width),
            (t.fillStyle = r.backdropColor);
          const e = ei(r.backdropPadding);
          t.fillRect(
            -o / 2 - e.left,
            -n - h.size / 2 - e.top,
            o + e.width,
            h.size + e.height,
          );
        }
        $e(t, s.label, 0, -n, h, { color: r.color });
      }),
      t.restore();
  }
  drawTitle() {}
}
i(Io, 'id', 'radialLinear'),
  i(Io, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Oe.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback: t => t,
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  i(Io, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  i(Io, 'descriptors', { angleLines: { _fallback: 'grid' } });
const Eo = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ro = Object.keys(Eo);
function Fo(t, e) {
  return t - e;
}
function zo(t, e) {
  if (_t(e)) return null;
  const i = t._adapter,
    { parser: s, round: n, isoWeekday: o } = t._parseOpts;
  let a = e;
  return (
    'function' == typeof s && (a = s(a)),
    wt(a) || (a = 'string' == typeof s ? i.parse(a, s) : i.parse(a)),
    null === a
      ? null
      : (n &&
          (a =
            'week' !== n || (!Qt(o) && !0 !== o)
              ? i.startOf(a, n)
              : i.startOf(a, 'isoWeek', o)),
        +a)
  );
}
function No(t, e, i, s) {
  const n = Ro.length;
  for (let o = Ro.indexOf(t); o < n - 1; ++o) {
    const t = Eo[Ro[o]],
      n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
    if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Ro[o];
  }
  return Ro[n - 1];
}
function Bo(t, e, i) {
  if (i) {
    if (i.length) {
      const { lo: s, hi: n } = ae(i, e);
      t[i[s] >= e ? i[s] : i[n]] = !0;
    }
  } else t[e] = !0;
}
function Ho(t, e, i) {
  const s = [],
    n = {},
    o = e.length;
  let a, r;
  for (a = 0; a < o; ++a)
    (r = e[a]), (n[r] = a), s.push({ value: r, major: !1 });
  return 0 !== o && i
    ? (function (t, e, i, s) {
        const n = t._adapter,
          o = +n.startOf(e[0].value, s),
          a = e[e.length - 1].value;
        let r, h;
        for (r = o; r <= a; r = +n.add(r, 1, s))
          (h = i[r]), h >= 0 && (e[h].major = !0);
        return e;
      })(t, s, n, i)
    : s;
}
class Vo extends hn {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new ds(t.adapters.date));
    s.init(e),
      It(i.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return void 0 === t ? null : zo(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      i = t.time.unit || 'day';
    let { min: s, max: n, minDefined: o, maxDefined: a } = this.getUserBounds();
    function r(t) {
      o || isNaN(t.min) || (s = Math.min(s, t.min)),
        a || isNaN(t.max) || (n = Math.max(n, t.max));
    }
    (o && a) ||
      (r(this._getLabelBounds()),
      ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
        r(this.getMinMax(!1))),
      (s = wt(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
      (n = wt(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, n - 1)),
      (this.max = Math.max(s + 1, n));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      i = t.ticks,
      s = 'labels' === i.source ? this.getLabelTimestamps() : this._generate();
    'ticks' === t.bounds &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const n = this.min,
      o = (function (t, e, i) {
        let s = 0,
          n = t.length;
        for (; s < n && t[s] < e; ) s++;
        for (; n > s && t[n - 1] > i; ) n--;
        return s > 0 || n < t.length ? t.slice(s, n) : t;
      })(s, n, this.max);
    return (
      (this._unit =
        e.unit ||
        (i.autoSkip
          ? No(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
          : (function (t, e, i, s, n) {
              for (let o = Ro.length - 1; o >= Ro.indexOf(i); o--) {
                const i = Ro[o];
                if (Eo[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
              }
              return Ro[i ? Ro.indexOf(i) : 0];
            })(this, o.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        i.major.enabled && 'year' !== this._unit
          ? (function (t) {
              for (let e = Ro.indexOf(t) + 1, i = Ro.length; e < i; ++e)
                if (Eo[Ro[e]].common) return Ro[e];
            })(this._unit)
          : void 0),
      this.initOffsets(s),
      t.reverse && o.reverse(),
      Ho(this, o, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map(t => +t.value));
  }
  initOffsets(t = []) {
    let e,
      i,
      s = 0,
      n = 0;
    this.options.offset &&
      t.length &&
      ((e = this.getDecimalForValue(t[0])),
      (s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
      (i = this.getDecimalForValue(t[t.length - 1])),
      (n =
        1 === t.length
          ? i
          : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (s = ne(s, 0, o)),
      (n = ne(n, 0, o)),
      (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      i = this.max,
      s = this.options,
      n = s.time,
      o = n.unit || No(n.minUnit, e, i, this._getLabelCapacity(e)),
      a = Mt(s.ticks.stepSize, 1),
      r = 'week' === o && n.isoWeekday,
      h = Qt(r) || !0 === r,
      l = {};
    let c,
      d,
      u = e;
    if (
      (h && (u = +t.startOf(u, 'isoWeek', r)),
      (u = +t.startOf(u, h ? 'day' : o)),
      t.diff(i, e, o) > 1e5 * a)
    )
      throw new Error(
        e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + o,
      );
    const f = 'data' === s.ticks.source && this.getDataTimestamps();
    for (c = u, d = 0; c < i; c = +t.add(c, a, o), d++) Bo(l, c, f);
    return (
      (c !== i && 'ticks' !== s.bounds && 1 !== d) || Bo(l, c, f),
      Object.keys(l)
        .sort((t, e) => t - e)
        .map(t => +t)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? e.format(t, i.tooltipFormat)
      : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const i = this.options.time.displayFormats,
      s = this._unit,
      n = e || i[s];
    return this._adapter.format(t, n);
  }
  _tickFormatFunction(t, e, i, s) {
    const n = this.options,
      o = n.ticks.callback;
    if (o) return Pt(o, [t, e, i], this);
    const a = n.time.displayFormats,
      r = this._unit,
      h = this._majorUnit,
      l = r && a[r],
      c = h && a[h],
      d = i[e],
      u = h && c && d && d.major;
    return this._adapter.format(t, s || (u ? c : l));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return null === t ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = te(this.isHorizontal() ? e.maxRotation : e.minRotation),
      n = Math.cos(s),
      o = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * n + a * o, h: i * o + a * n };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      i = e.displayFormats,
      s = i[e.unit] || i.millisecond,
      n = this._tickFormatFunction(t, 0, Ho(this, [t], this._majorUnit), s),
      o = this._getLabelSize(n),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t,
      e,
      i = this._cache.data || [];
    if (i.length) return i;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (t = 0, e = s.length; t < e; ++t)
      i = i.concat(s[t].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(i));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e) t.push(zo(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return de(t.sort(Fo));
  }
}
function jo(t, e, i) {
  let s,
    n,
    o,
    a,
    r = 0,
    h = t.length - 1;
  i
    ? (e >= t[r].pos && e <= t[h].pos && ({ lo: r, hi: h } = re(t, 'pos', e)),
      ({ pos: s, time: o } = t[r]),
      ({ pos: n, time: a } = t[h]))
    : (e >= t[r].time &&
        e <= t[h].time &&
        ({ lo: r, hi: h } = re(t, 'time', e)),
      ({ time: s, pos: o } = t[r]),
      ({ time: n, pos: a } = t[h]));
  const l = n - s;
  return l ? o + ((a - o) * (e - s)) / l : o;
}
i(Vo, 'id', 'time'),
  i(Vo, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  });
class Wo extends Vo {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = jo(e, this.min)),
      (this._tableRange = jo(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this,
      s = [],
      n = [];
    let o, a, r, h, l;
    for (o = 0, a = t.length; o < a; ++o)
      (h = t[o]), h >= e && h <= i && s.push(h);
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, a = s.length; o < a; ++o)
      (l = s[o + 1]),
        (r = s[o - 1]),
        (h = s[o]),
        Math.round((l + r) / 2) !== h && n.push({ time: h, pos: o / (a - 1) });
    return n;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      (t =
        e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (jo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end;
    return jo(this._table, i * this._tableRange + this._minPos, !0);
  }
}
i(Wo, 'id', 'timeseries'), i(Wo, 'defaults', Vo.defaults);
const $o = 'label';
function Yo(t, e) {
  'function' == typeof t ? t(e) : t && (t.current = e);
}
function Uo(t, e) {
  t.labels = e;
}
function Xo(t, e) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $o;
  const s = [];
  t.datasets = e.map(e => {
    const n = t.datasets.find(t => t[i] === e[i]);
    return n && e.data && !s.includes(n)
      ? (s.push(n), Object.assign(n, e), n)
      : { ...e };
  });
}
function qo(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $o;
  const i = { labels: [], datasets: [] };
  return Uo(i, t.labels), Xo(i, t.datasets, e), i;
}
function Ko(t, e) {
  const {
      height: i = 150,
      width: o = 300,
      redraw: a = !1,
      datasetIdKey: r,
      type: h,
      data: l,
      options: c,
      plugins: d = [],
      fallbackContent: u,
      updateMode: f,
      ...g
    } = t,
    p = s.useRef(null),
    m = s.useRef(),
    b = () => {
      p.current &&
        ((m.current = new Rn(p.current, {
          type: h,
          data: qo(l, r),
          options: c && { ...c },
          plugins: d,
        })),
        Yo(e, m.current));
    },
    x = () => {
      Yo(e, null), m.current && (m.current.destroy(), (m.current = null));
    };
  return (
    s.useEffect(() => {
      !a &&
        m.current &&
        c &&
        (function (t, e) {
          const i = t.options;
          i && e && Object.assign(i, e);
        })(m.current, c);
    }, [a, c]),
    s.useEffect(() => {
      !a && m.current && Uo(m.current.config.data, l.labels);
    }, [a, l.labels]),
    s.useEffect(() => {
      !a && m.current && l.datasets && Xo(m.current.config.data, l.datasets, r);
    }, [a, l.datasets]),
    s.useEffect(() => {
      m.current && (a ? (x(), setTimeout(b)) : m.current.update(f));
    }, [a, c, l.labels, l.datasets, f]),
    s.useEffect(() => {
      m.current && (x(), setTimeout(b));
    }, [h]),
    s.useEffect(() => (b(), () => x()), []),
    n.createElement(
      'canvas',
      Object.assign({ ref: p, role: 'img', height: i, width: o }, g),
      u,
    )
  );
}
const Go = s.forwardRef(Ko);
function Zo(t, e) {
  return (
    Rn.register(e),
    s.forwardRef((e, i) =>
      n.createElement(Go, Object.assign({}, e, { ref: i, type: t })),
    )
  );
}
const Qo = Zo('bar', hs),
  Jo = {
    header: '_header_2patf_1',
    header__title: '_header__title_2patf_13',
    ranklist: '_ranklist_2patf_19',
  };
function ta() {
  const [t, e] = s.useState(!1),
    [i, n] = s.useState([]),
    [o, g] = s.useState([]),
    [p, m] = s.useState([]),
    b = new r(h),
    x = [],
    _ = [],
    [y, v] = s.useState({
      labels: ['a'],
      datasets: [{ label: '', data: [1], backgroundColor: '' }],
    });
  return (
    Rn.register(go, xo, Wn, Kn, co, Xn),
    s.useEffect(() => {
      v({
        labels: o,
        datasets: [
          {
            label: 'Rating History',
            data: p,
            backgroundColor: 'rgb(59, 128, 121)',
          },
        ],
      });
    }, [o]),
    s.useEffect(() => {
      new l(h).getCurrentUser().then(t => {
        !(function (t) {
          e(!1);
          b.getRatingHistory(t)
            .then(t => {
              n(t), e(!0);
            })
            .catch(t => {
              t instanceof c && d.error(t.message);
            });
        })(t.id);
      });
    }, []),
    s.useEffect(() => {
      i &&
        i.map(t => {
          const e = t.validFrom.slice(11, 19);
          x.push(e);
          const i = t.rating;
          _.push(i), m(_), g(x);
        });
    }, [t]),
    a(u, {
      children: a(u, {
        children: t
          ? a(Qo, {
              options: {
                responsive: !0,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: !0, text: 'YOUR RATING HISTORY' },
                },
              },
              data: y,
            })
          : a(f, {}),
      }),
    })
  );
}
function ea() {
  return o('div', {
    className: Jo.body,
    children: [
      a('div', {
        className: Jo.header,
        children: a('h1', {
          className: Jo.header__title,
          children: a('span', { children: 'Rating Chart' }),
        }),
      }),
      a('div', { className: Jo.ranklist, children: a(ta, {}) }),
    ],
  });
}
const ia = () => {
  const t = g(),
    e = T(),
    [i, n] = s.useState('IN'),
    [r, h] = s.useState(''),
    [l, c] = s.useState(''),
    [d, u] = s.useState(''),
    [f, z] = s.useState(!1),
    [N, B] = s.useState(''),
    [H, V] = s.useState(''),
    [j, W] = s.useState(0),
    [$, Y] = s.useState({
      oldpassword: 'password',
      password: 'password',
      confirmPassword: 'password',
    }),
    U = p(m),
    X = () => {
      'password' === $.oldpassword
        ? Y({
            oldpassword: 'text',
            password: $.password,
            confirmPassword: $.confirmPassword,
          })
        : Y({
            oldpassword: 'password',
            password: $.password,
            confirmPassword: $.confirmPassword,
          });
    },
    q = () => {
      'password' === $.password
        ? Y({
            oldpassword: $.oldpassword,
            password: 'text',
            confirmPassword: $.confirmPassword,
          })
        : Y({
            oldpassword: $.oldpassword,
            password: 'password',
            confirmPassword: $.confirmPassword,
          });
    },
    K = () => {
      'password' === $.confirmPassword
        ? Y({
            oldpassword: $.oldpassword,
            password: $.password,
            confirmPassword: 'text',
          })
        : Y({
            oldpassword: $.oldpassword,
            password: $.password,
            confirmPassword: 'password',
          });
    },
    G = b(),
    Z = p(x),
    Q = p(_);
  s.useEffect(() => {
    Q && (V(''), B(''));
  }, [Q]),
    s.useEffect(() => {
      f &&
        0 == U &&
        (u(''),
        h(''),
        c(''),
        z(!1),
        G(y()),
        localStorage.removeItem('token'),
        t('/login', { replace: !0 }));
    }, [Z]);
  const J = p(v);
  s.useEffect(() => {
    W(J.avatarId);
  }, [J]),
    s.useEffect(() => {
      null != localStorage.getItem('token') && G(w());
    }, [J]);
  const tt = t => {
      const e = new Intl.DisplayNames(['en'], { type: 'region' }).of(t);
      return e || 'INDIA';
    },
    et = s.useRef(null),
    it = () => {
      et.current && et.current.scrollTo({ top: 1e3, behavior: 'smooth' });
    };
  return a('div', {
    className: F.profileScrollBody,
    id: 'profileScrollBody',
    ref: et,
    children: o('div', {
      className: F.profileBody,
      children: [
        o('div', {
          className: F.header,
          id: 'header',
          children: [
            o('div', {
              className: F.userNameContent,
              children: [
                'HEY, ',
                a('p', { className: F.userName, children: J.username }),
                ' ',
              ],
            }),
            a('div', {
              className: F.imageContainer,
              children: a('img', {
                src: I(J.avatarId).url,
                alt: 'User Avatar',
              }),
            }),
          ],
        }),
        o('div', {
          className: F.Container,
          children: [
            o(E, {
              className: F.formContainer,
              children: [
                o('div', {
                  children: [
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicUserName',
                      children: [
                        a(E.Label, { className: F.label, children: 'NAME' }),
                        a(E.Control, {
                          type: 'text',
                          placeholder: J.name || 'Full Name',
                          value: H,
                          className: F.inputField,
                          onChange: t => {
                            V(t.target.value);
                          },
                        }),
                      ],
                    }),
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicCollege',
                      children: [
                        a(E.Label, { className: F.label, children: 'COLLEGE' }),
                        a(E.Control, {
                          type: 'text',
                          placeholder: J.college || 'College',
                          value: N,
                          className: F.inputField,
                          onChange: t => {
                            B(t.target.value);
                          },
                        }),
                      ],
                    }),
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicEmail',
                      children: [
                        a(E.Label, { className: F.label, children: 'COUNTRY' }),
                        a(D, {
                          selected: i,
                          searchable: !0,
                          id: 'flags',
                          placeholder: 'Search your country',
                          onSelect: t => {
                            n(t);
                          },
                          className: L(F.flagContainer, F.inputField),
                          selectedSize: 26,
                        }),
                      ],
                    }),
                    o(E.Group, {
                      className: L('mb-4'),
                      controlId: 'formBasicAvatar',
                      children: [
                        a(E.Label, {
                          className: F.label,
                          children: 'CHOOSE AN AVATAR',
                        }),
                        a('div', {
                          children: a('div', {
                            className: F.avatarContainer,
                            children: e.map((t, e) =>
                              a(
                                'div',
                                {
                                  className: `${F.avatar} ${
                                    j === t.id ? F.avatarSelected : ''
                                  }`,
                                  onClick: () => {
                                    var e;
                                    W(t.id), (e = t.id), W(e);
                                  },
                                  children: a('img', {
                                    className: F.avatarImg,
                                    src: t.url,
                                    alt: 'avatar',
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    a('div', {
                      className: L('d-grid gap-2'),
                      children: o(R, {
                        onClick: () => {
                          G(
                            M({
                              userName:
                                '' === H.toString().trim() ? J.username : H,
                              college:
                                '' === N.toString().trim() ? J.college : N,
                              country: tt(i),
                              avatarId: j,
                            }),
                          );
                        },
                        disabled:
                          H.length < 5 &&
                          0 == N.length &&
                          j === J.avatarId &&
                          tt(i) === J.country,
                        size: 'lg',
                        className: F.submitButton,
                        children: ['SAVE CHANGES', ' '],
                      }),
                    }),
                    a('div', {
                      className: F.footer,
                      children: a(R, {
                        variant: 'link',
                        onClick: () => {
                          it(), G(k());
                        },
                        className: F.linkButton,
                        children: 'CHANGE CREDENTIALS ',
                      }),
                    }),
                  ],
                }),
                o('div', {
                  children: [
                    a('div', {
                      className: F.changeCredsHeader,
                      children: 'CHANGE CREDENTIALS',
                    }),
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicoldPassword',
                      children: [
                        a(E.Label, {
                          className: F.label,
                          children: 'OLD PASSWORD',
                        }),
                        o('div', {
                          className: F.eyeContainer,
                          children: [
                            a(E.Control, {
                              type: $.oldpassword,
                              placeholder: 'Old Password',
                              value: d,
                              onChange: t => {
                                u(t.target.value);
                              },
                              className: F.inputField,
                            }),
                            a('div', {
                              className: F.eye,
                              children:
                                'password' === $.oldpassword
                                  ? a(C, { size: 'lg', icon: O, onClick: X })
                                  : a(C, { size: 'lg', icon: A, onClick: X }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicPassword',
                      children: [
                        a(E.Label, {
                          className: F.label,
                          children: 'NEW PASSWORD',
                        }),
                        o('div', {
                          className: F.eyeContainer,
                          children: [
                            a(E.Control, {
                              type: $.password,
                              placeholder: 'Password',
                              value: r,
                              onChange: t => {
                                h(t.target.value);
                              },
                              className: F.inputField,
                            }),
                            a('div', {
                              className: F.eye,
                              children:
                                'password' === $.password
                                  ? a(C, { size: 'lg', icon: O, onClick: q })
                                  : a(C, { size: 'lg', icon: A, onClick: q }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o(E.Group, {
                      className: L('mb-4', F.formField),
                      controlId: 'formBasicConfirmPassword',
                      children: [
                        a(E.Label, {
                          className: F.label,
                          children: 'CONFIRM PASSWORD',
                        }),
                        o('div', {
                          className: F.eyeContainer,
                          children: [
                            a(E.Control, {
                              type: $.confirmPassword,
                              placeholder: 'Confirm Password',
                              value: l,
                              className: F.inputField,
                              onChange: t => {
                                c(t.target.value);
                              },
                            }),
                            a('div', {
                              className: F.eye,
                              children:
                                'password' === $.confirmPassword
                                  ? a(C, { size: 'lg', icon: O, onClick: K })
                                  : a(C, { size: 'lg', icon: A, onClick: K }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a('div', {
                      className: L('d-grid gap-2'),
                      children: o(R, {
                        onClick: () => {
                          d.length < 8
                            ? S.error('Incorrect Old password')
                            : r.match(
                                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                              )
                            ? l !== r
                              ? S.error(
                                  "Confirm password and Password don't match",
                                )
                              : G(
                                  P({
                                    oldPassword: d,
                                    newPassword: r,
                                    confirmPassword: l,
                                  }),
                                )
                            : S.error(() =>
                                o('ul', {
                                  className: F.toastPassword,
                                  children: [
                                    a('li', {
                                      children:
                                        'Password needs to be minimum 8 characters long',
                                    }),
                                    a('li', {
                                      children:
                                        'Password must contain atleast 1 Number, 1 Upper case and 1 Special Character',
                                    }),
                                  ],
                                }),
                              );
                        },
                        disabled:
                          0 == d.length || 0 == r.length || 0 == l.length,
                        size: 'lg',
                        id: 'submit',
                        className: F.submitButton,
                        children: ['SUBMIT', ' '],
                      }),
                    }),
                    o('div', {
                      className: F.footer,
                      children: [
                        a(R, {
                          variant: 'link',
                          onClick: () => {
                            et.current &&
                              et.current.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              });
                          },
                          className: F.linkButton,
                          children: ' EDIT PROFILE',
                        }),
                        a(R, {
                          variant: 'link',
                          onClick: () => {
                            et.current &&
                              et.current.scrollTo({
                                top: 1900,
                                behavior: 'smooth',
                              });
                          },
                          className: F.linkButton,
                          children: ' RATING CHART',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a(ea, {}),
            a('div', {
              className: F.footer,
              children: a(R, {
                variant: 'link',
                onClick: () => {
                  it(), G(k());
                },
                className: F.linkButton,
                children: 'CHANGE CREDENTIALS ',
              }),
            }),
          ],
        }),
      ],
    }),
  });
};
export { ia as default };
