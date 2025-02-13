import {
  r as e,
  ao as t,
  c as n,
  j as o,
  F as i,
  a5 as a,
  u as r,
  aZ as l,
  e as s,
  b as c,
  S as d,
  d as m,
  C as u,
  R as p,
  A as h,
  _ as f,
  a_ as g,
  au as v,
  ak as y,
  ax as b,
  aR as C,
  a$ as _,
  b0 as w,
  k as N,
} from './index-24a58ae8.js';
import { u as k, T as I } from './TourProvider-f8fb0617.js';
import { B as V } from './Button-0a98cdad.js';
import { B as O } from './ButtonGroup-493c836f.js';
import { p as S } from './index-06bcf729.js';
import { a as M } from './ThemeProvider-092c2682.js';
import { T as B, i as T } from './react-code-blocks.esm-2d1e384d.js';
import { C as E } from './Container-4692a76f.js';
import { R as j } from './Row-59744247.js';
import { C as x } from './Col-ae03dcbb.js';
import './extends-64d70faf.js';
import './setPrototypeOf-b9a4b5f8.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
const L = [
  {
    selector: '#History',
    content:
      'This is the your commit history timeline. You can view your committed maps and code here.',
  },
  {
    selector: '#CommitSelector',
    content: 'Switch between your map and code commits here.',
  },
  {
    selector: '#viewBox',
    content: 'This shows the map or the code you have committed',
  },
  {
    selector: '#CommitButton',
    content:
      'Click this button to load your commit into the Editor / Map Designer',
  },
];
var P = { __esModule: !0, default: void 0 },
  A = H(e),
  R = H(S),
  D = H(M);
function H(e) {
  return e && e.__esModule ? e : { default: e };
}
const F = ({
  animate: e = !0,
  className: t = '',
  layout: n = '2-columns',
  lineColor: o = '#FFF',
  children: i,
}) => (
  'object' == typeof window &&
    document.documentElement.style.setProperty('--line-color', o),
  A.default.createElement(
    'div',
    {
      className: (0, D.default)(t, 'vertical-timeline', {
        'vertical-timeline--animate': e,
        'vertical-timeline--two-columns': '2-columns' === n,
        'vertical-timeline--one-column-left':
          '1-column' === n || '1-column-left' === n,
        'vertical-timeline--one-column-right': '1-column-right' === n,
      }),
    },
    i,
  )
);
F.propTypes = {
  children: R.default.oneOfType([
    R.default.arrayOf(R.default.node),
    R.default.node,
  ]).isRequired,
  className: R.default.string,
  animate: R.default.bool,
  layout: R.default.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineColor: R.default.string,
};
var U = F;
P.default = U;
var $ = {};
function z() {
  return (
    (z =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      }),
    z.apply(this, arguments)
  );
}
function J(e, t) {
  return (J =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
var W = new Map(),
  q = new WeakMap(),
  Z = 0,
  G = void 0;
function X(e) {
  return Object.keys(e)
    .sort()
    .filter(function (t) {
      return void 0 !== e[t];
    })
    .map(function (t) {
      return (
        t +
        '_' +
        ('root' === t
          ? (n = e.root)
            ? (q.has(n) || ((Z += 1), q.set(n, Z.toString())), q.get(n))
            : '0'
          : e[t])
      );
      var n;
    })
    .toString();
}
function Y(e, t, n, o) {
  if (
    (void 0 === n && (n = {}),
    void 0 === o && (o = G),
    void 0 === window.IntersectionObserver && void 0 !== o)
  ) {
    var i = e.getBoundingClientRect();
    return (
      t(o, {
        isIntersecting: o,
        target: e,
        intersectionRatio: 'number' == typeof n.threshold ? n.threshold : 0,
        time: 0,
        boundingClientRect: i,
        intersectionRect: i,
        rootBounds: i,
      }),
      function () {}
    );
  }
  var a = (function (e) {
      var t = X(e),
        n = W.get(t);
      if (!n) {
        var o,
          i = new Map(),
          a = new IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var n,
                a =
                  t.isIntersecting &&
                  o.some(function (e) {
                    return t.intersectionRatio >= e;
                  });
              e.trackVisibility && void 0 === t.isVisible && (t.isVisible = a),
                null == (n = i.get(t.target)) ||
                  n.forEach(function (e) {
                    e(a, t);
                  });
            });
          }, e);
        (o =
          a.thresholds ||
          (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
          (n = { id: t, observer: a, elements: i }),
          W.set(t, n);
      }
      return n;
    })(n),
    r = a.id,
    l = a.observer,
    s = a.elements,
    c = s.get(e) || [];
  return (
    s.has(e) || s.set(e, c),
    c.push(t),
    l.observe(e),
    function () {
      c.splice(c.indexOf(t), 1),
        0 === c.length && (s.delete(e), l.unobserve(e)),
        0 === s.size && (l.disconnect(), W.delete(r));
    }
  );
}
var K = [
  'children',
  'as',
  'triggerOnce',
  'threshold',
  'root',
  'rootMargin',
  'onChange',
  'skip',
  'trackVisibility',
  'delay',
  'initialInView',
  'fallbackInView',
];
function Q(e) {
  return 'function' != typeof e.children;
}
var ee = (function (t) {
  var n, o;
  function i(e) {
    var n;
    return (
      ((n = t.call(this, e) || this).node = null),
      (n._unobserveCb = null),
      (n.handleNode = function (e) {
        n.node &&
          (n.unobserve(),
          e ||
            n.props.triggerOnce ||
            n.props.skip ||
            n.setState({ inView: !!n.props.initialInView, entry: void 0 })),
          (n.node = e || null),
          n.observeNode();
      }),
      (n.handleChange = function (e, t) {
        e && n.props.triggerOnce && n.unobserve(),
          Q(n.props) || n.setState({ inView: e, entry: t }),
          n.props.onChange && n.props.onChange(e, t);
      }),
      (n.state = { inView: !!e.initialInView, entry: void 0 }),
      n
    );
  }
  (o = t),
    ((n = i).prototype = Object.create(o.prototype)),
    (n.prototype.constructor = n),
    J(n, o);
  var a = i.prototype;
  return (
    (a.componentDidUpdate = function (e) {
      (e.rootMargin === this.props.rootMargin &&
        e.root === this.props.root &&
        e.threshold === this.props.threshold &&
        e.skip === this.props.skip &&
        e.trackVisibility === this.props.trackVisibility &&
        e.delay === this.props.delay) ||
        (this.unobserve(), this.observeNode());
    }),
    (a.componentWillUnmount = function () {
      this.unobserve(), (this.node = null);
    }),
    (a.observeNode = function () {
      if (this.node && !this.props.skip) {
        var e = this.props,
          t = e.threshold,
          n = e.root,
          o = e.rootMargin,
          i = e.trackVisibility,
          a = e.delay,
          r = e.fallbackInView;
        this._unobserveCb = Y(
          this.node,
          this.handleChange,
          {
            threshold: t,
            root: n,
            rootMargin: o,
            trackVisibility: i,
            delay: a,
          },
          r,
        );
      }
    }),
    (a.unobserve = function () {
      this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
    }),
    (a.render = function () {
      if (!Q(this.props)) {
        var t = this.state,
          n = t.inView,
          o = t.entry;
        return this.props.children({
          inView: n,
          entry: o,
          ref: this.handleNode,
        });
      }
      var i = this.props,
        a = i.children,
        r = i.as,
        l = (function (e, t) {
          if (null == e) return {};
          var n,
            o,
            i = {},
            a = Object.keys(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(i, K);
      return e.createElement(r || 'div', z({ ref: this.handleNode }, l), a);
    }),
    i
  );
})(e.Component);
(ee.displayName = 'InView'),
  (ee.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
const te = t(
  Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        InView: ee,
        default: ee,
        defaultFallbackInView: function (e) {
          G = e;
        },
        observe: Y,
        useInView: function (t) {
          var n = void 0 === t ? {} : t,
            o = n.threshold,
            i = n.delay,
            a = n.trackVisibility,
            r = n.rootMargin,
            l = n.root,
            s = n.triggerOnce,
            c = n.skip,
            d = n.initialInView,
            m = n.fallbackInView,
            u = e.useRef(),
            p = e.useState({ inView: !!d }),
            h = p[0],
            f = p[1],
            g = e.useCallback(
              function (e) {
                void 0 !== u.current && (u.current(), (u.current = void 0)),
                  c ||
                    (e &&
                      (u.current = Y(
                        e,
                        function (e, t) {
                          f({ inView: e, entry: t }),
                            t.isIntersecting &&
                              s &&
                              u.current &&
                              (u.current(), (u.current = void 0));
                        },
                        {
                          root: l,
                          rootMargin: r,
                          threshold: o,
                          trackVisibility: a,
                          delay: i,
                        },
                        m,
                      )));
              },
              [Array.isArray(o) ? o.toString() : o, l, r, s, c, a, m, i],
            );
          e.useEffect(function () {
            u.current || !h.entry || s || c || f({ inView: !!d });
          });
          var v = [g, h.inView, h.entry];
          return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v;
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
);
($.__esModule = !0), ($.default = void 0);
var ne = re(e),
  oe = re(S),
  ie = re(M),
  ae = te;
function re(e) {
  return e && e.__esModule ? e : { default: e };
}
const le = ({
  children: e = '',
  className: t = '',
  contentArrowStyle: n = null,
  contentStyle: o = null,
  date: i = '',
  dateClassName: a = '',
  icon: r = null,
  iconClassName: l = '',
  iconOnClick: s = null,
  onTimelineElementClick: c = null,
  iconStyle: d = null,
  id: m = '',
  position: u = '',
  style: p = null,
  textClassName: h = '',
  intersectionObserverProps: f = {
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: !0,
  },
  visible: g = !1,
}) =>
  ne.default.createElement(ae.InView, f, ({ inView: f, ref: v }) =>
    ne.default.createElement(
      'div',
      {
        ref: v,
        id: m,
        className: (0, ie.default)(t, 'vertical-timeline-element', {
          'vertical-timeline-element--left': 'left' === u,
          'vertical-timeline-element--right': 'right' === u,
          'vertical-timeline-element--no-children': '' === e,
        }),
        style: p,
      },
      ne.default.createElement(
        ne.default.Fragment,
        null,
        ne.default.createElement(
          'span',
          {
            style: d,
            onClick: s,
            className: (0, ie.default)(l, 'vertical-timeline-element-icon', {
              'bounce-in': f || g,
              'is-hidden': !(f || g),
            }),
          },
          r,
        ),
        ne.default.createElement(
          'div',
          {
            style: o,
            onClick: c,
            className: (0, ie.default)(h, 'vertical-timeline-element-content', {
              'bounce-in': f || g,
              'is-hidden': !(f || g),
            }),
          },
          ne.default.createElement('div', {
            style: n,
            className: 'vertical-timeline-element-content-arrow',
          }),
          e,
          ne.default.createElement(
            'span',
            { className: (0, ie.default)(a, 'vertical-timeline-element-date') },
            i,
          ),
        ),
      ),
    ),
  );
le.propTypes = {
  children: oe.default.oneOfType([
    oe.default.arrayOf(oe.default.node),
    oe.default.node,
  ]),
  className: oe.default.string,
  contentArrowStyle: oe.default.shape({}),
  contentStyle: oe.default.shape({}),
  date: oe.default.node,
  dateClassName: oe.default.string,
  icon: oe.default.element,
  iconClassName: oe.default.string,
  iconStyle: oe.default.shape({}),
  iconOnClick: oe.default.func,
  onTimelineElementClick: oe.default.func,
  id: oe.default.string,
  position: oe.default.string,
  style: oe.default.shape({}),
  textClassName: oe.default.string,
  visible: oe.default.bool,
  intersectionObserverProps: oe.default.shape({
    root: oe.default.object,
    rootMargin: oe.default.string,
    threshold: oe.default.number,
    triggerOnce: oe.default.bool,
  }),
};
var se = le;
$.default = se;
var ce = { VerticalTimeline: P.default, VerticalTimelineElement: $.default };
function de(t) {
  const a = { background: '#1E3821', color: '#fff' },
    [r, l] = e.useState('0');
  return n(ce.VerticalTimeline, {
    layout: '1-column-left',
    lineColor: '#EAEAEA',
    children:
      t.commitHistoryDetails && t.commitHistoryDetails.length > 0
        ? t.commitHistoryDetails.map(e => {
            return n(
              ce.VerticalTimelineElement,
              {
                className: 'vertical-timeline-element--work',
                contentStyle: {
                  background: 'rgba(26, 26, 26, 0.7)',
                  color: '#fff',
                },
                date:
                  ((s = e.createdAt.toString()),
                  `${s.substring(8, 10)}-${s.substring(5, 7)}-${s.substring(
                    0,
                    4,
                  )}`),
                iconStyle:
                  r == e.id ? a : { background: '#444444', color: '#444444' },
                onTimelineElementClick: () => {
                  l(e.id), t.commitID(e.id);
                },
                children: o(i, {
                  children: [
                    n('h6', {
                      className: 'vertical-timeline-element-title',
                      children: e.message,
                    }),
                    n('h6', { children: 'codeType' in e ? e.codeType : '' }),
                  ],
                }),
              },
              e.id.toString(),
            );
            var s;
          })
        : n('h1', {
            className: 'noCommitStyle',
            children: 'No Commits available',
          }),
  });
}
const me = {
  historyMain: '_historyMain_12mol_1',
  viewContainer: '_viewContainer_12mol_10',
  codeView: '_codeView_12mol_14',
  buttonContainer: '_buttonContainer_12mol_22',
  whiteButton: '_whiteButton_12mol_29',
  darkButton: '_darkButton_12mol_45',
  codeBox: '_codeBox_12mol_71',
  mapBox: '_mapBox_12mol_82',
  select: '_select_12mol_94',
  selectButton: '_selectButton_12mol_99',
  completeTimeline: '_completeTimeline_12mol_120',
  noCommitDataHeader: '_noCommitDataHeader_12mol_133',
  mapImg: '_mapImg_12mol_151',
  mapLoad: '_mapLoad_12mol_159',
};
function ue(e) {
  return n(B, {
    text: e.code,
    language: e.codeLang,
    showLineNumbers: '' != e.code,
    theme: T,
  });
}
function pe() {
  const [t, i] = e.useState('Code'),
    [N, I] = e.useState([]),
    [S, M] = e.useState([]),
    [B, T] = e.useState(!1),
    [L, P] = e.useState(!1),
    [A, R] = e.useState(''),
    [D, H] = e.useState(''),
    [F, U] = e.useState(a.Normal),
    [$, z] = e.useState({ map: [], mapImg: '' }),
    [J, W] = e.useState(''),
    q = r(l),
    Z = s(),
    G = c(),
    X = new d(m),
    Y = new u(m),
    { setIsOpen: K } = k();
  e.useEffect(() => {
    setTimeout(() => {
      Y.getCurrentUser().then(e => {
        !1 === e.isTutorialComplete && 4 == e.tutorialLevel && K(!0);
      });
    }, 200);
    const e = new p(m);
    e
      .getCodeRevisions()
      .then(t => {
        e.getCodeRevisions(a.Pvp)
          .then(e => {
            I([...t, ...e]), P(!0);
          })
          .catch(e => {
            e instanceof h && f.error(e.message);
          });
      })
      .catch(e => {
        e instanceof h && f.error(e.message);
      }),
      X.getMapRevisions()
        .then(e => {
          T(!0), M(e);
        })
        .catch(e => {
          e instanceof h && f.error(e.message);
        });
  }, []);
  return o(E, {
    fluid: !0,
    className: me.historyMain,
    children: [
      n('div', {
        className: me.buttonContainer,
        children: n('div', {
          className: me.codeMapButton,
          children: o(O, {
            id: 'CommitSelector',
            children: [
              n(V, {
                className: 'Map' == t ? me.whiteButton : me.darkButton,
                onClick: () => {
                  i('Map');
                },
                variant: 'outline-light',
                children: 'MAP',
              }),
              n(V, {
                variant: 'outline-light',
                className: 'Code' == t ? me.whiteButton : me.darkButton,
                onClick: () => {
                  i('Code');
                },
                children: 'CODE',
              }),
            ],
          }),
        }),
      }),
      o(j, {
        className: me.viewContainer,
        children: [
          n(x, {
            lg: '4',
            style: { marginLeft: '5%' },
            children: n('div', {
              className: me.completeTimeline,
              id: 'History',
              children:
                (L && 'Code' == t) || (B && 'Map' == t)
                  ? n(de, {
                      commitID: e => {
                        z({ map: $.map, mapImg: '' }),
                          N.forEach(t => {
                            t.id === e &&
                              (R(t.code),
                              H(t.language.toLowerCase()),
                              W(t.message),
                              U(t.codeType));
                          }),
                          S.forEach(t => {
                            var n;
                            t.id == e &&
                              (W(t.message),
                              q.some(t => t.CommitId == e)
                                ? z({
                                    map: JSON.parse(t.map),
                                    mapImg:
                                      null ==
                                      (n = q.find(t => t.CommitId === e))
                                        ? void 0
                                        : n.Image,
                                  })
                                : X.getMapByCommitID(t.id)
                                    .then(n => {
                                      z({
                                        map: JSON.parse(t.map),
                                        mapImg: n.mapImage,
                                      }),
                                        G(
                                          g({ CommitId: e, Image: n.mapImage }),
                                        );
                                    })
                                    .catch(e => {
                                      e instanceof h && f.error(e.message);
                                    }));
                          });
                      },
                      commitHistoryDetails: 'Code' === t ? N : S,
                      SelectedButton: t,
                    })
                  : n('h1', {
                      className: me.noCommitDataHeader,
                      children: 'Loading...',
                    }),
            }),
          }),
          o(x, {
            lg: '9',
            className: me.codeView,
            id: 'viewBox',
            children: [
              n('div', {
                className: 'Code' == t ? me.codeBox : me.mapBox,
                children:
                  'Code' == t
                    ? n(ue, { code: A, codeLang: D })
                    : '' != $.mapImg
                    ? n('img', { className: me.mapImg, src: $.mapImg })
                    : n('div', {
                        className: me.mapLoad,
                        children: 'Map image not found',
                      }),
              }),
              n('div', {
                className: me.select,
                children: n(V, {
                  className: me.selectButton,
                  size: 'lg',
                  onClick: () => {
                    if ('Code' == t && '' != A) {
                      switch (
                        (G(
                          v({
                            currentUserLanguage: 'cpp' === D ? 'c_cpp' : D,
                            currentUserCode: A,
                            gameType: F === a.Normal ? y.NORMAL : y.PVP,
                          }),
                        ),
                        G(
                          b({
                            gameType: F === a.Normal ? y.NORMAL : y.PVP,
                            language: 'cpp' === D ? 'c_cpp' : D,
                          }),
                        ),
                        G(C('cpp' === D ? 'c_cpp' : D)),
                        D)
                      ) {
                        case 'cpp':
                          localStorage.setItem('languageChose', 'C++');
                          break;
                        case 'python':
                          localStorage.setItem('languageChose', 'Python');
                          break;
                        case 'java':
                          localStorage.setItem('languageChose', 'Java');
                          break;
                        default:
                          G(C('c_cpp'));
                      }
                      _.success(` Loaded commit - ${J}`),
                        Z('/dashboard', { replace: !0 });
                    } else
                      'Map' == t &&
                        '' != $.mapImg &&
                        0 !== $.map.length &&
                        (G(w($)),
                        _.success(` Loaded commit - ${J}`),
                        Z('/mapdesigner', { replace: !0 }));
                  },
                  variant: 'outline-light',
                  id: 'CommitButton',
                  children: 'LOAD COMMIT',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const he = () => {
  const e = new u(m),
    t = r(N),
    o = s();
  return n(I, {
    setOpened: n => {
      !1 === n &&
        e
          .updateCurrentUser({
            name: t.name,
            country: t.country,
            college: t.college,
            updateTutorialLevel: 'NEXT',
          })
          .then(() => {
            o('/battletv', { replace: !0 });
          })
          .catch(e => {
            e instanceof h && f.error(e.message);
          });
    },
    steps: L,
    children: n(pe, {}),
  });
};
export { he as default };
