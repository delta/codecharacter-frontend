import { ap as e } from './index-24a58ae8.js';
import { a as n } from './markup-3761cd6e.js';
import { a as r } from './css-65709906.js';
import { a as l } from './clike-8af1328a.js';
import { a as t } from './javascript-8ff54fc9.js';
function a(e, n) {
  for (var r = 0; r < n.length; r++) {
    const l = n[r];
    if ('string' != typeof l && !Array.isArray(l))
      for (const n in l)
        if ('default' !== n && !(n in e)) {
          const r = Object.getOwnPropertyDescriptor(l, n);
          r &&
            Object.defineProperty(
              e,
              n,
              r.get ? r : { enumerable: !0, get: () => l[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o = {},
  i = {
    get exports() {
      return o;
    },
    set exports(e) {
      o = e;
    },
  },
  u = function () {
    for (var e = {}, n = 0; n < arguments.length; n++) {
      var r = arguments[n];
      for (var l in r) s.call(r, l) && (e[l] = r[l]);
    }
    return e;
  },
  s = Object.prototype.hasOwnProperty;
var c = d,
  p = d.prototype;
function d(e, n, r) {
  (this.property = e), (this.normal = n), r && (this.space = r);
}
(p.space = null), (p.normal = {}), (p.property = {});
var g = u,
  f = c,
  m = function (e) {
    var n,
      r,
      l = e.length,
      t = [],
      a = [],
      o = -1;
    for (; ++o < l; )
      (n = e[o]), t.push(n.property), a.push(n.normal), (r = n.space);
    return new f(g.apply(null, t), g.apply(null, a), r);
  };
var h = function (e) {
  return e.toLowerCase();
};
var y = b,
  v = b.prototype;
function b(e, n) {
  (this.property = e), (this.attribute = n);
}
(v.space = null),
  (v.attribute = null),
  (v.property = null),
  (v.boolean = !1),
  (v.booleanish = !1),
  (v.overloadedBoolean = !1),
  (v.number = !1),
  (v.commaSeparated = !1),
  (v.spaceSeparated = !1),
  (v.commaOrSpaceSeparated = !1),
  (v.mustUseProperty = !1),
  (v.defined = !1);
var w = {},
  x = 0;
function S() {
  return Math.pow(2, ++x);
}
(w.boolean = S()),
  (w.booleanish = S()),
  (w.overloadedBoolean = S()),
  (w.number = S()),
  (w.spaceSeparated = S()),
  (w.commaSeparated = S()),
  (w.commaOrSpaceSeparated = S());
var C = y,
  k = w,
  A = L;
(L.prototype = new C()), (L.prototype.defined = !0);
var P = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated',
  ],
  O = P.length;
function L(e, n, r, l) {
  var t,
    a = -1;
  for (N(this, 'space', l), C.call(this, e, n); ++a < O; )
    N(this, (t = P[a]), (r & k[t]) === k[t]);
}
function N(e, n, r) {
  r && (e[n] = r);
}
var E = h,
  M = c,
  j = A,
  T = function (e) {
    var n,
      r,
      l = e.space,
      t = e.mustUseProperty || [],
      a = e.attributes || {},
      o = e.properties,
      i = e.transform,
      u = {},
      s = {};
    for (n in o)
      (r = new j(n, i(a, n), o[n], l)),
        -1 !== t.indexOf(n) && (r.mustUseProperty = !0),
        (u[n] = r),
        (s[E(n)] = n),
        (s[E(r.attribute)] = n);
    return new M(u, s, l);
  };
var D = T({
  space: 'xlink',
  transform: function (e, n) {
    return 'xlink:' + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null,
  },
});
var I = T({
  space: 'xml',
  transform: function (e, n) {
    return 'xml:' + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
});
var R = function (e, n) {
    return n in e ? e[n] : n;
  },
  U = function (e, n) {
    return R(e, n.toLowerCase());
  };
var H = T({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: U,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  B = w,
  z = T,
  q = B.booleanish,
  W = B.number,
  F = B.spaceSeparated,
  _ = z({
    transform: function (e, n) {
      return 'role' === n ? n : 'aria-' + n.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: q,
      ariaAutoComplete: null,
      ariaBusy: q,
      ariaChecked: q,
      ariaColCount: W,
      ariaColIndex: W,
      ariaColSpan: W,
      ariaControls: F,
      ariaCurrent: null,
      ariaDescribedBy: F,
      ariaDetails: null,
      ariaDisabled: q,
      ariaDropEffect: F,
      ariaErrorMessage: null,
      ariaExpanded: q,
      ariaFlowTo: F,
      ariaGrabbed: q,
      ariaHasPopup: null,
      ariaHidden: q,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: F,
      ariaLevel: W,
      ariaLive: null,
      ariaModal: q,
      ariaMultiLine: q,
      ariaMultiSelectable: q,
      ariaOrientation: null,
      ariaOwns: F,
      ariaPlaceholder: null,
      ariaPosInSet: W,
      ariaPressed: q,
      ariaReadOnly: q,
      ariaRelevant: null,
      ariaRequired: q,
      ariaRoleDescription: F,
      ariaRowCount: W,
      ariaRowIndex: W,
      ariaRowSpan: W,
      ariaSelected: q,
      ariaSetSize: W,
      ariaSort: null,
      ariaValueMax: W,
      ariaValueMin: W,
      ariaValueNow: W,
      ariaValueText: null,
      role: null,
    },
  });
var G = w,
  V = T,
  K = U,
  J = G.boolean,
  Y = G.overloadedBoolean,
  $ = G.booleanish,
  Q = G.number,
  X = G.spaceSeparated,
  Z = G.commaSeparated,
  ee = m([
    I,
    D,
    H,
    _,
    V({
      space: 'html',
      attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv',
      },
      transform: K,
      mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
      properties: {
        abbr: null,
        accept: Z,
        acceptCharset: X,
        accessKey: X,
        action: null,
        allow: null,
        allowFullScreen: J,
        allowPaymentRequest: J,
        allowUserMedia: J,
        alt: null,
        as: null,
        async: J,
        autoCapitalize: null,
        autoComplete: X,
        autoFocus: J,
        autoPlay: J,
        capture: J,
        charSet: null,
        checked: J,
        cite: null,
        className: X,
        cols: Q,
        colSpan: null,
        content: null,
        contentEditable: $,
        controls: J,
        controlsList: X,
        coords: Q | Z,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: J,
        defer: J,
        dir: null,
        dirName: null,
        disabled: J,
        download: Y,
        draggable: $,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: J,
        formTarget: null,
        headers: X,
        height: Q,
        hidden: J,
        high: Q,
        href: null,
        hrefLang: null,
        htmlFor: X,
        httpEquiv: X,
        id: null,
        imageSizes: null,
        imageSrcSet: Z,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: J,
        itemId: null,
        itemProp: X,
        itemRef: X,
        itemScope: J,
        itemType: X,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: J,
        low: Q,
        manifest: null,
        max: null,
        maxLength: Q,
        media: null,
        method: null,
        min: null,
        minLength: Q,
        multiple: J,
        muted: J,
        name: null,
        nonce: null,
        noModule: J,
        noValidate: J,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: J,
        optimum: Q,
        pattern: null,
        ping: X,
        placeholder: null,
        playsInline: J,
        poster: null,
        preload: null,
        readOnly: J,
        referrerPolicy: null,
        rel: X,
        required: J,
        reversed: J,
        rows: Q,
        rowSpan: Q,
        sandbox: X,
        scope: null,
        scoped: J,
        seamless: J,
        selected: J,
        shape: null,
        size: Q,
        sizes: null,
        slot: null,
        span: Q,
        spellCheck: $,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: Z,
        start: Q,
        step: null,
        style: null,
        tabIndex: Q,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: J,
        useMap: null,
        value: $,
        width: Q,
        wrap: null,
        align: null,
        aLink: null,
        archive: X,
        axis: null,
        background: null,
        bgColor: null,
        border: Q,
        borderColor: null,
        bottomMargin: Q,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: J,
        declare: J,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: Q,
        leftMargin: Q,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: Q,
        marginWidth: Q,
        noResize: J,
        noHref: J,
        noShade: J,
        noWrap: J,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: Q,
        rules: null,
        scheme: null,
        scrolling: $,
        standby: null,
        summary: null,
        text: null,
        topMargin: Q,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: Q,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: J,
        disableRemotePlayback: J,
        prefix: null,
        property: null,
        results: Q,
        security: null,
        unselectable: null,
      },
    }),
  ]),
  ne = h,
  re = A,
  le = y,
  te = 'data',
  ae = function (e, n) {
    var r = ne(n),
      l = n,
      t = le;
    if (r in e.normal) return e.property[e.normal[r]];
    r.length > 4 &&
      r.slice(0, 4) === te &&
      oe.test(n) &&
      ('-' === n.charAt(4)
        ? (l = (function (e) {
            var n = e.slice(5).replace(ie, ce);
            return te + n.charAt(0).toUpperCase() + n.slice(1);
          })(n))
        : (n = (function (e) {
            var n = e.slice(4);
            if (ie.test(n)) return e;
            (n = n.replace(ue, se)), '-' !== n.charAt(0) && (n = '-' + n);
            return te + n;
          })(n)),
      (t = re));
    return new t(l, n);
  },
  oe = /^data[-\w.:]+$/i,
  ie = /-[a-z]/g,
  ue = /[A-Z]/g;
function se(e) {
  return '-' + e.toLowerCase();
}
function ce(e) {
  return e.charAt(1).toUpperCase();
}
var pe = function (e, n) {
    var r,
      l,
      t,
      a = e || '',
      o = n || 'div',
      i = {},
      u = 0;
    for (; u < a.length; )
      (de.lastIndex = u),
        (t = de.exec(a)),
        (r = a.slice(u, t ? t.index : a.length)) &&
          (l
            ? '#' === l
              ? (i.id = r)
              : i.className
              ? i.className.push(r)
              : (i.className = [r])
            : (o = r),
          (u += r.length)),
        t && ((l = t[0]), u++);
    return { type: 'element', tagName: o, properties: i, children: [] };
  },
  de = /[#.]/g;
var ge = {
    parse: function (e) {
      var n = String(e || fe).trim();
      return n === fe ? [] : n.split(he);
    },
    stringify: function (e) {
      return e.join(me).trim();
    },
  },
  fe = '',
  me = ' ',
  he = /[ \t\n\r\f]+/g;
var ye = {
    parse: function (e) {
      var n,
        r = [],
        l = String(e || we),
        t = l.indexOf(ve),
        a = 0,
        o = !1;
      for (; !o; )
        -1 === t && ((t = l.length), (o = !0)),
          (!(n = l.slice(a, t).trim()) && o) || r.push(n),
          (a = t + 1),
          (t = l.indexOf(ve, a));
      return r;
    },
    stringify: function (e, n) {
      var r = n || {},
        l = !1 === r.padLeft ? we : be,
        t = r.padRight ? be : we;
      e[e.length - 1] === we && (e = e.concat(we));
      return e.join(t + ve + l).trim();
    },
  },
  ve = ',',
  be = ' ',
  we = '';
var xe = ae,
  Se = h,
  Ce = pe,
  ke = ge.parse,
  Ae = ye.parse,
  Pe = function (e, n, r) {
    var l = r
      ? (function (e) {
          var n,
            r = e.length,
            l = -1,
            t = {};
          for (; ++l < r; ) t[(n = e[l]).toLowerCase()] = n;
          return t;
        })(r)
      : null;
    return function (e, r) {
      var a,
        o = Ce(e, n),
        i = Array.prototype.slice.call(arguments, 2),
        u = o.tagName.toLowerCase();
      (o.tagName = l && Oe.call(l, u) ? l[u] : u),
        r &&
          (function (e, n) {
            return (
              'string' == typeof e ||
              'length' in e ||
              (function (e, n) {
                var r = n.type;
                if ('input' === e || !r || 'string' != typeof r) return !1;
                if ('object' == typeof n.children && 'length' in n.children)
                  return !0;
                if (((r = r.toLowerCase()), 'button' === e))
                  return (
                    'menu' !== r &&
                    'submit' !== r &&
                    'reset' !== r &&
                    'button' !== r
                  );
                return 'value' in n;
              })(n.tagName, e)
            );
          })(r, o) &&
          (i.unshift(r), (r = null));
      if (r) for (a in r) t(o.properties, a, r[a]);
      Le(o.children, i),
        'template' === o.tagName &&
          ((o.content = { type: 'root', children: o.children }),
          (o.children = []));
      return o;
    };
    function t(n, r, l) {
      var t, a, o;
      null != l &&
        l == l &&
        ((a = (t = xe(e, r)).property),
        'string' == typeof (o = l) &&
          (t.spaceSeparated
            ? (o = ke(o))
            : t.commaSeparated
            ? (o = Ae(o))
            : t.commaOrSpaceSeparated && (o = ke(Ae(o).join(' ')))),
        'style' === a &&
          'string' != typeof l &&
          (o = (function (e) {
            var n,
              r = [];
            for (n in e) r.push([n, e[n]].join(': '));
            return r.join('; ');
          })(o)),
        'className' === a && n.className && (o = n.className.concat(o)),
        (n[a] = (function (e, n, r) {
          var l, t, a;
          if ('object' != typeof r || !('length' in r)) return Ne(e, n, r);
          (t = r.length), (l = -1), (a = []);
          for (; ++l < t; ) a[l] = Ne(e, n, r[l]);
          return a;
        })(t, a, o)));
    }
  },
  Oe = {}.hasOwnProperty;
function Le(e, n) {
  var r, l;
  if ('string' != typeof n && 'number' != typeof n)
    if ('object' == typeof n && 'length' in n)
      for (r = -1, l = n.length; ++r < l; ) Le(e, n[r]);
    else {
      if ('object' != typeof n || !('type' in n))
        throw new Error('Expected node, nodes, or string, got `' + n + '`');
      e.push(n);
    }
  else e.push({ type: 'text', value: String(n) });
}
function Ne(e, n, r) {
  var l = r;
  return (
    e.number || e.positiveNumber
      ? isNaN(l) || '' === l || (l = Number(l))
      : (e.boolean || e.overloadedBoolean) &&
        ('string' != typeof l || ('' !== l && Se(r) !== Se(n)) || (l = !0)),
    l
  );
}
var Ee = Pe(ee, 'div');
Ee.displayName = 'html';
var Me = Ee;
i.exports = Me;
var je = function (e) {
  var n = 'string' == typeof e ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
};
var Te,
  De = function (e) {
    var n = 'string' == typeof e ? e.charCodeAt(0) : e;
    return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
  },
  Ie = je;
var Re = 59;
var Ue = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Acirc: 'Â',
    Agrave: 'À',
    Aring: 'Å',
    Atilde: 'Ã',
    Auml: 'Ä',
    COPY: '©',
    Ccedil: 'Ç',
    ETH: 'Ð',
    Eacute: 'É',
    Ecirc: 'Ê',
    Egrave: 'È',
    Euml: 'Ë',
    GT: '>',
    Iacute: 'Í',
    Icirc: 'Î',
    Igrave: 'Ì',
    Iuml: 'Ï',
    LT: '<',
    Ntilde: 'Ñ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ograve: 'Ò',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Ouml: 'Ö',
    QUOT: '"',
    REG: '®',
    THORN: 'Þ',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Ugrave: 'Ù',
    Uuml: 'Ü',
    Yacute: 'Ý',
    aacute: 'á',
    acirc: 'â',
    acute: '´',
    aelig: 'æ',
    agrave: 'à',
    amp: '&',
    aring: 'å',
    atilde: 'ã',
    auml: 'ä',
    brvbar: '¦',
    ccedil: 'ç',
    cedil: '¸',
    cent: '¢',
    copy: '©',
    curren: '¤',
    deg: '°',
    divide: '÷',
    eacute: 'é',
    ecirc: 'ê',
    egrave: 'è',
    eth: 'ð',
    euml: 'ë',
    frac12: '½',
    frac14: '¼',
    frac34: '¾',
    gt: '>',
    iacute: 'í',
    icirc: 'î',
    iexcl: '¡',
    igrave: 'ì',
    iquest: '¿',
    iuml: 'ï',
    laquo: '«',
    lt: '<',
    macr: '¯',
    micro: 'µ',
    middot: '·',
    nbsp: ' ',
    not: '¬',
    ntilde: 'ñ',
    oacute: 'ó',
    ocirc: 'ô',
    ograve: 'ò',
    ordf: 'ª',
    ordm: 'º',
    oslash: 'ø',
    otilde: 'õ',
    ouml: 'ö',
    para: '¶',
    plusmn: '±',
    pound: '£',
    quot: '"',
    raquo: '»',
    reg: '®',
    sect: '§',
    shy: '­',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    szlig: 'ß',
    thorn: 'þ',
    times: '×',
    uacute: 'ú',
    ucirc: 'û',
    ugrave: 'ù',
    uml: '¨',
    uuml: 'ü',
    yacute: 'ý',
    yen: '¥',
    yuml: 'ÿ',
  },
  He = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ',
  },
  Be = je,
  ze = function (e) {
    var n = 'string' == typeof e ? e.charCodeAt(0) : e;
    return (
      (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57)
    );
  },
  qe = function (e) {
    return De(e) || Ie(e);
  },
  We = function (e) {
    var n,
      r = '&' + e + ';';
    if (
      (((Te = Te || document.createElement('i')).innerHTML = r),
      (n = Te.textContent).charCodeAt(n.length - 1) === Re && 'semi' !== e)
    )
      return !1;
    return n !== r && n;
  },
  Fe = function (e, n) {
    var r,
      l,
      t = {};
    n || (n = {});
    for (l in Ke) (r = n[l]), (t[l] = null == r ? Ke[l] : r);
    (t.position.indent || t.position.start) &&
      ((t.indent = t.position.indent || []), (t.position = t.position.start));
    return (function (e, n) {
      var r,
        l,
        t,
        a,
        o,
        i,
        u,
        s,
        c,
        p,
        d,
        g,
        f,
        m,
        h,
        y,
        v,
        b,
        w,
        x = n.additional,
        S = n.nonTerminated,
        C = n.text,
        k = n.reference,
        A = n.warning,
        P = n.textContext,
        O = n.referenceContext,
        L = n.warningContext,
        N = n.position,
        E = n.indent || [],
        M = e.length,
        j = 0,
        T = -1,
        D = N.column || 1,
        I = N.line || 1,
        R = '',
        U = [];
      'string' == typeof x && (x = x.charCodeAt(0));
      (y = H()), (s = A ? B : Ve), j--, M++;
      for (; ++j < M; )
        if ((o === Ye && (D = E[T] || 1), (o = e.charCodeAt(j)) === Xe)) {
          if (
            (u = e.charCodeAt(j + 1)) === Je ||
            u === Ye ||
            u === $e ||
            u === Qe ||
            u === Xe ||
            u === en ||
            u != u ||
            (x && u === x)
          ) {
            (R += Ge(o)), D++;
            continue;
          }
          for (
            g = f = j + 1,
              w = f,
              u === rn
                ? ((w = ++g),
                  (u = e.charCodeAt(w)) === ln || u === tn
                    ? ((m = un), (w = ++g))
                    : (m = sn))
                : (m = on),
              r = '',
              d = '',
              a = '',
              h = pn[m],
              w--;
            ++w < M && h((u = e.charCodeAt(w)));

          )
            (a += Ge(u)), m === on && _e.call(Ue, a) && ((r = a), (d = Ue[a]));
          (t = e.charCodeAt(w) === Ze) &&
            (w++, (l = m === on && We(a)) && ((r = a), (d = l))),
            (b = 1 + w - f),
            (t || S) &&
              (a
                ? m === on
                  ? (t && !d
                      ? s(hn, 1)
                      : (r !== a &&
                          ((b = 1 + (w = g + r.length) - g), (t = !1)),
                        t ||
                          ((c = r ? dn : fn),
                          n.attribute
                            ? (u = e.charCodeAt(w)) === nn
                              ? (s(c, b), (d = null))
                              : qe(u)
                              ? (d = null)
                              : s(c, b)
                            : s(c, b))),
                    (i = d))
                  : (t || s(gn, b),
                    wn((i = parseInt(a, cn[m])))
                      ? (s(vn, b), (i = Ge(an)))
                      : i in He
                      ? (s(yn, b), (i = He[i]))
                      : ((p = ''),
                        xn(i) && s(yn, b),
                        i > 65535 &&
                          ((p += Ge(((i -= 65536) >>> 10) | 55296)),
                          (i = 56320 | (1023 & i))),
                        (i = p + Ge(i))))
                : m !== on && s(mn, b)),
            i
              ? (z(),
                (y = H()),
                (j = w - 1),
                (D += w - f + 1),
                U.push(i),
                (v = H()).offset++,
                k && k.call(O, i, { start: y, end: v }, e.slice(f - 1, w)),
                (y = v))
              : ((a = e.slice(f - 1, w)),
                (R += a),
                (D += a.length),
                (j = w - 1));
        } else
          10 === o && (I++, T++, (D = 0)), o == o ? ((R += Ge(o)), D++) : z();
      return U.join('');
      function H() {
        return { line: I, column: D, offset: j + (N.offset || 0) };
      }
      function B(e, n) {
        var r = H();
        (r.column += n), (r.offset += n), A.call(L, bn[e], r, e);
      }
      function z() {
        R && (U.push(R), C && C.call(P, R, { start: y, end: H() }), (R = ''));
      }
    })(e, t);
  },
  _e = {}.hasOwnProperty,
  Ge = String.fromCharCode,
  Ve = Function.prototype,
  Ke = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  Je = 9,
  Ye = 10,
  $e = 12,
  Qe = 32,
  Xe = 38,
  Ze = 59,
  en = 60,
  nn = 61,
  rn = 35,
  ln = 88,
  tn = 120,
  an = 65533,
  on = 'named',
  un = 'hexadecimal',
  sn = 'decimal',
  cn = {};
(cn[un] = 16), (cn[sn] = 10);
var pn = {};
(pn[on] = qe), (pn[sn] = Be), (pn[un] = ze);
var dn = 1,
  gn = 2,
  fn = 3,
  mn = 4,
  hn = 5,
  yn = 6,
  vn = 7,
  bn = {};
function wn(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function xn(e) {
  return (
    (e >= 1 && e <= 8) ||
    11 === e ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    65535 == (65535 & e) ||
    65534 == (65535 & e)
  );
}
(bn[dn] = 'Named character references must be terminated by a semicolon'),
  (bn[gn] = 'Numeric character references must be terminated by a semicolon'),
  (bn[fn] = 'Named character references cannot be empty'),
  (bn[mn] = 'Numeric character references cannot be empty'),
  (bn[hn] = 'Named character references must be known'),
  (bn[yn] = 'Numeric character references cannot be disallowed'),
  (bn[vn] =
    'Numeric character references cannot be outside the permissible Unicode range');
var Sn,
  Cn,
  kn = {};
(Sn = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  },
}),
  (Cn = (function (e) {
    var n = /\blang(?:uage)?-([\w-]+)\b/i,
      r = 0,
      l = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function (e) {
            return e instanceof t
              ? new t(e.type, l.util.encode(e.content), e.alias)
              : Array.isArray(e)
              ? e.map(l.util.encode)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++r }), e.__id
            );
          },
          clone: function e(n, r) {
            var t,
              a,
              o = l.util.type(n);
            switch (((r = r || {}), o)) {
              case 'Object':
                if (((a = l.util.objId(n)), r[a])) return r[a];
                for (var i in ((t = {}), (r[a] = t), n))
                  n.hasOwnProperty(i) && (t[i] = e(n[i], r));
                return t;
              case 'Array':
                return (
                  (a = l.util.objId(n)),
                  r[a]
                    ? r[a]
                    : ((t = []),
                      (r[a] = t),
                      n.forEach(function (n, l) {
                        t[l] = e(n, r);
                      }),
                      t)
                );
              default:
                return n;
            }
          },
        },
        languages: {
          extend: function (e, n) {
            var r = l.util.clone(l.languages[e]);
            for (var t in n) r[t] = n[t];
            return r;
          },
          insertBefore: function (e, n, r, t) {
            var a = (t = t || l.languages)[e],
              o = {};
            for (var i in a)
              if (a.hasOwnProperty(i)) {
                if (i == n)
                  for (var u in r) r.hasOwnProperty(u) && (o[u] = r[u]);
                r.hasOwnProperty(i) || (o[i] = a[i]);
              }
            var s = t[e];
            return (
              (t[e] = o),
              l.languages.DFS(l.languages, function (n, r) {
                r === s && n != e && (this[n] = o);
              }),
              o
            );
          },
          DFS: function e(n, r, t, a) {
            a = a || {};
            var o = l.util.objId;
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                r.call(n, i, n[i], t || i);
                var u = n[i],
                  s = l.util.type(u);
                'Object' !== s || a[o(u)]
                  ? 'Array' !== s || a[o(u)] || ((a[o(u)] = !0), e(u, r, i, a))
                  : ((a[o(u)] = !0), e(u, r, null, a));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          l.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, r) {
          var t = {
            callback: r,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          l.hooks.run('before-highlightall', t);
          for (var a, o = e.querySelectorAll(t.selector), i = 0; (a = o[i++]); )
            l.highlightElement(a, !0 === n, t.callback);
        },
        highlightElement: function (r, t, a) {
          for (var o, i = 'none', u = r; u && !n.test(u.className); )
            u = u.parentNode;
          u &&
            ((i = (u.className.match(n) || [, 'none'])[1].toLowerCase()),
            (o = l.languages[i])),
            (r.className =
              r.className.replace(n, '').replace(/\s+/g, ' ') +
              ' language-' +
              i),
            r.parentNode &&
              ((u = r.parentNode),
              /pre/i.test(u.nodeName) &&
                (u.className =
                  u.className.replace(n, '').replace(/\s+/g, ' ') +
                  ' language-' +
                  i));
          var s = { element: r, language: i, grammar: o, code: r.textContent },
            c = function (e) {
              (s.highlightedCode = e),
                l.hooks.run('before-insert', s),
                (s.element.innerHTML = s.highlightedCode),
                l.hooks.run('after-highlight', s),
                l.hooks.run('complete', s),
                a && a.call(s.element);
            };
          if ((l.hooks.run('before-sanity-check', s), s.code))
            if ((l.hooks.run('before-highlight', s), s.grammar))
              if (t && e.Worker) {
                var p = new Worker(l.filename);
                (p.onmessage = function (e) {
                  c(e.data);
                }),
                  p.postMessage(
                    JSON.stringify({
                      language: s.language,
                      code: s.code,
                      immediateClose: !0,
                    }),
                  );
              } else c(l.highlight(s.code, s.grammar, s.language));
            else c(l.util.encode(s.code));
          else l.hooks.run('complete', s);
        },
        highlight: function (e, n, r) {
          var a = { code: e, grammar: n, language: r };
          return (
            l.hooks.run('before-tokenize', a),
            (a.tokens = l.tokenize(a.code, a.grammar)),
            l.hooks.run('after-tokenize', a),
            t.stringify(l.util.encode(a.tokens), a.language)
          );
        },
        matchGrammar: function (e, n, r, a, o, i, u) {
          for (var s in r)
            if (r.hasOwnProperty(s) && r[s]) {
              if (s == u) return;
              var c = r[s];
              c = 'Array' === l.util.type(c) ? c : [c];
              for (var p = 0; p < c.length; ++p) {
                var d = c[p],
                  g = d.inside,
                  f = !!d.lookbehind,
                  m = !!d.greedy,
                  h = 0,
                  y = d.alias;
                if (m && !d.pattern.global) {
                  var v = d.pattern.toString().match(/[imuy]*$/)[0];
                  d.pattern = RegExp(d.pattern.source, v + 'g');
                }
                d = d.pattern || d;
                for (var b = a, w = o; b < n.length; w += n[b].length, ++b) {
                  var x = n[b];
                  if (n.length > e.length) return;
                  if (!(x instanceof t)) {
                    if (m && b != n.length - 1) {
                      if (((d.lastIndex = w), !(O = d.exec(e)))) break;
                      for (
                        var S = O.index + (f ? O[1].length : 0),
                          C = O.index + O[0].length,
                          k = b,
                          A = w,
                          P = n.length;
                        k < P && (A < C || (!n[k].type && !n[k - 1].greedy));
                        ++k
                      )
                        S >= (A += n[k].length) && (++b, (w = A));
                      if (n[b] instanceof t) continue;
                      (L = k - b), (x = e.slice(w, A)), (O.index -= w);
                    } else {
                      d.lastIndex = 0;
                      var O = d.exec(x),
                        L = 1;
                    }
                    if (O) {
                      f && (h = O[1] ? O[1].length : 0),
                        (C = (S = O.index + h) + (O = O[0].slice(h)).length);
                      var N = x.slice(0, S),
                        E = x.slice(C),
                        M = [b, L];
                      N && (++b, (w += N.length), M.push(N));
                      var j = new t(s, g ? l.tokenize(O, g) : O, y, O, m);
                      if (
                        (M.push(j),
                        E && M.push(E),
                        Array.prototype.splice.apply(n, M),
                        1 != L && l.matchGrammar(e, n, r, b, w, !0, s),
                        i)
                      )
                        break;
                    } else if (i) break;
                  }
                }
              }
            }
        },
        tokenize: function (e, n) {
          var r = [e],
            t = n.rest;
          if (t) {
            for (var a in t) n[a] = t[a];
            delete n.rest;
          }
          return l.matchGrammar(e, r, n, 0, 0, !1), r;
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var r = l.hooks.all;
            (r[e] = r[e] || []), r[e].push(n);
          },
          run: function (e, n) {
            var r = l.hooks.all[e];
            if (r && r.length) for (var t, a = 0; (t = r[a++]); ) t(n);
          },
        },
        Token: t,
      };
    function t(e, n, r, l, t) {
      (this.type = e),
        (this.content = n),
        (this.alias = r),
        (this.length = 0 | (l || '').length),
        (this.greedy = !!t);
    }
    if (
      ((e.Prism = l),
      (t.stringify = function (e, n) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e))
          return e
            .map(function (e) {
              return t.stringify(e, n);
            })
            .join('');
        var r = {
          type: e.type,
          content: t.stringify(e.content, n),
          tag: 'span',
          classes: ['token', e.type],
          attributes: {},
          language: n,
        };
        if (e.alias) {
          var a = Array.isArray(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(r.classes, a);
        }
        l.hooks.run('wrap', r);
        var o = Object.keys(r.attributes)
          .map(function (e) {
            return (
              e + '="' + (r.attributes[e] || '').replace(/"/g, '&quot;') + '"'
            );
          })
          .join(' ');
        return (
          '<' +
          r.tag +
          ' class="' +
          r.classes.join(' ') +
          '"' +
          (o ? ' ' + o : '') +
          '>' +
          r.content +
          '</' +
          r.tag +
          '>'
        );
      }),
      !e.document)
    )
      return e.addEventListener
        ? (l.disableWorkerMessageHandler ||
            e.addEventListener(
              'message',
              function (n) {
                var r = JSON.parse(n.data),
                  t = r.language,
                  a = r.code,
                  o = r.immediateClose;
                e.postMessage(l.highlight(a, l.languages[t], t)),
                  o && e.close();
              },
              !1,
            ),
          l)
        : l;
    var a =
      document.currentScript ||
      [].slice.call(document.getElementsByTagName('script')).pop();
    return (
      a &&
        ((l.filename = a.src),
        l.manual ||
          a.hasAttribute('data-manual') ||
          ('loading' !== document.readyState
            ? window.requestAnimationFrame
              ? window.requestAnimationFrame(l.highlightAll)
              : window.setTimeout(l.highlightAll, 16)
            : document.addEventListener('DOMContentLoaded', l.highlightAll))),
      l
    );
  })(
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  )),
  Sn.exports && (Sn.exports = Cn),
  void 0 !== e && (e.Prism = Cn);
var An,
  Pn,
  On =
    ((Pn = (An = 'Prism' in e) ? e.Prism : void 0),
    function () {
      An ? (e.Prism = Pn) : delete e.Prism, (An = void 0), (Pn = void 0);
    });
('undefined' == typeof window
  ? 'undefined' == typeof self
    ? {}
    : self
  : window
).Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var Ln = o,
  Nn = Fe,
  En = kn,
  Mn = n,
  jn = r,
  Tn = l,
  Dn = t;
On();
var In = {}.hasOwnProperty;
function Rn() {}
Rn.prototype = En;
var Un = new Rn(),
  Hn = Un;
function Bn(e) {
  if ('function' != typeof e || !e.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + e + '`');
  void 0 === Un.languages[e.displayName] && e(Un);
}
(Un.highlight = function (e, n) {
  var r,
    l = En.highlight;
  if ('string' != typeof e)
    throw new Error('Expected `string` for `value`, got `' + e + '`');
  if ('Object' === Un.util.type(n)) (r = n), (n = null);
  else {
    if ('string' != typeof n)
      throw new Error('Expected `string` for `name`, got `' + n + '`');
    if (!In.call(Un.languages, n))
      throw new Error('Unknown language: `' + n + '` is not registered');
    r = Un.languages[n];
  }
  return l.call(this, e, r, n);
}),
  (Un.register = Bn),
  (Un.alias = function (e, n) {
    var r,
      l,
      t,
      a,
      o = Un.languages,
      i = e;
    n && ((i = {})[e] = n);
    for (r in i)
      for (
        t = (l = 'string' == typeof (l = i[r]) ? [l] : l).length, a = -1;
        ++a < t;

      )
        o[l[a]] = o[r];
  }),
  (Un.registered = function (e) {
    if ('string' != typeof e)
      throw new Error('Expected `string` for `language`, got `' + e + '`');
    return In.call(Un.languages, e);
  }),
  (Un.listLanguages = function () {
    var e,
      n = Un.languages,
      r = [];
    for (e in n) In.call(n, e) && 'object' == typeof n[e] && r.push(e);
    return r;
  }),
  Bn(Mn),
  Bn(jn),
  Bn(Tn),
  Bn(Dn),
  (Un.util.encode = function (e) {
    return e;
  }),
  (Un.Token.stringify = function (e, n, r) {
    var l;
    if ('string' == typeof e) return { type: 'text', value: e };
    if ('Array' === Un.util.type(e))
      return (function (e, n) {
        var r,
          l = [],
          t = e.length,
          a = -1;
        for (; ++a < t; ) '' !== (r = e[a]) && null != r && l.push(r);
        (a = -1), (t = l.length);
        for (; ++a < t; ) (r = l[a]), (l[a] = Un.Token.stringify(r, n, l));
        return l;
      })(e, n);
    (l = {
      type: e.type,
      content: Un.Token.stringify(e.content, n, r),
      tag: 'span',
      classes: ['token', e.type],
      attributes: {},
      language: n,
      parent: r,
    }),
      e.alias && (l.classes = l.classes.concat(e.alias));
    return (
      Un.hooks.run('wrap', l),
      Ln(
        l.tag + '.' + l.classes.join('.'),
        (function (e) {
          var n;
          for (n in e) e[n] = Nn(e[n]);
          return e;
        })(l.attributes),
        l.content,
      )
    );
  });
const zn = a({ __proto__: null, default: Hn }, [Hn]);
export { zn as c };
