import {
  r as e,
  ac as a,
  aT as t,
  C as n,
  d as r,
  j as s,
  c as i,
  e as l,
  u as o,
  aU as c,
  k as u,
  b as p,
  aV as d,
  F as g,
  aW as h,
  w as m,
  x as f,
  aX as b,
  $ as v,
  f as C,
  A as y,
  _ as N,
} from './index-624895d1.js';
import { g as P } from './Avatar-86792f54.js';
import { u as _, T as k } from './TourProvider-926faeac.js';
var L,
  x = {};
(L = e =>
  (() => {
    var a = {
        703: (e, a, t) => {
          var n = t(414);
          function r() {}
          function s() {}
          (s.resetWarningCache = r),
            (e.exports = function () {
              function e(e, a, t, r, s, i) {
                if (i !== n) {
                  var l = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                  );
                  throw ((l.name = 'Invariant Violation'), l);
                }
              }
              function a() {
                return e;
              }
              e.isRequired = e;
              var t = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: a,
                element: e,
                elementType: e,
                instanceOf: a,
                node: e,
                objectOf: a,
                oneOf: a,
                oneOfType: a,
                shape: a,
                exact: a,
                checkPropTypes: s,
                resetWarningCache: r,
              };
              return (t.PropTypes = t), t;
            });
        },
        697: (e, a, t) => {
          e.exports = t(703)();
        },
        414: e => {
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        98: a => {
          a.exports = e;
        },
      },
      t = {};
    function n(e) {
      var r = t[e];
      if (void 0 !== r) return r.exports;
      var s = (t[e] = { exports: {} });
      return a[e](s, s.exports, n), s.exports;
    }
    (n.n = e => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return n.d(a, { a: a }), a;
    }),
      (n.d = (e, a) => {
        for (var t in a)
          n.o(a, t) &&
            !n.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
      }),
      (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
      (n.r = e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var r = {};
    return (
      (() => {
        n.r(r), n.d(r, { default: () => y });
        var e = n(98),
          a = n.n(e),
          t = n(697),
          s = n.n(t);
        function i() {
          return (
            (i = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }
                  return e;
                }),
            i.apply(this, arguments)
          );
        }
        var l = function (e) {
          var t = e.pageClassName,
            n = e.pageLinkClassName,
            r = e.page,
            s = e.selected,
            l = e.activeClassName,
            o = e.activeLinkClassName,
            c = e.getEventListener,
            u = e.pageSelectedHandler,
            p = e.href,
            d = e.extraAriaContext,
            g = e.pageLabelBuilder,
            h = e.rel,
            m = e.ariaLabel || 'Page ' + r + (d ? ' ' + d : ''),
            f = null;
          return (
            s &&
              ((f = 'page'),
              (m = e.ariaLabel || 'Page ' + r + ' is your current page'),
              (t = void 0 !== t ? t + ' ' + l : l),
              void 0 !== n ? void 0 !== o && (n = n + ' ' + o) : (n = o)),
            a().createElement(
              'li',
              { className: t },
              a().createElement(
                'a',
                i(
                  {
                    rel: h,
                    role: p ? void 0 : 'button',
                    className: n,
                    href: p,
                    tabIndex: s ? '-1' : '0',
                    'aria-label': m,
                    'aria-current': f,
                    onKeyPress: u,
                  },
                  c(u),
                ),
                g(r),
              ),
            )
          );
        };
        l.propTypes = {
          pageSelectedHandler: s().func.isRequired,
          selected: s().bool.isRequired,
          pageClassName: s().string,
          pageLinkClassName: s().string,
          activeClassName: s().string,
          activeLinkClassName: s().string,
          extraAriaContext: s().string,
          href: s().string,
          ariaLabel: s().string,
          page: s().number.isRequired,
          getEventListener: s().func.isRequired,
          pageLabelBuilder: s().func.isRequired,
          rel: s().string,
        };
        const o = l;
        function c() {
          return (
            (c = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }
                  return e;
                }),
            c.apply(this, arguments)
          );
        }
        var u = function (e) {
          var t = e.breakLabel,
            n = e.breakClassName,
            r = e.breakLinkClassName,
            s = e.breakHandler,
            i = e.getEventListener,
            l = n || 'break';
          return a().createElement(
            'li',
            { className: l },
            a().createElement(
              'a',
              c(
                { className: r, role: 'button', tabIndex: '0', onKeyPress: s },
                i(s),
              ),
              t,
            ),
          );
        };
        u.propTypes = {
          breakLabel: s().oneOfType([s().string, s().node]),
          breakClassName: s().string,
          breakLinkClassName: s().string,
          breakHandler: s().func.isRequired,
          getEventListener: s().func.isRequired,
        };
        const p = u;
        function d(e) {
          return null != e
            ? e
            : arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : '';
        }
        function g(e) {
          return (g =
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
        function h() {
          return (
            (h = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }
                  return e;
                }),
            h.apply(this, arguments)
          );
        }
        function m(e, a) {
          return (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, a) {
                return (e.__proto__ = a), e;
              })(e, a);
        }
        function f(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function b(e) {
          return (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function v(e, a, t) {
          return (
            a in e
              ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[a] = t),
            e
          );
        }
        var C = (function (e) {
          !(function (e, a) {
            if ('function' != typeof a && null !== a)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (e.prototype = Object.create(a && a.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              a && m(e, a);
          })(l, e);
          var t,
            n,
            r,
            s,
            i =
              ((r = l),
              (s = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  a = b(r);
                if (s) {
                  var t = b(this).constructor;
                  e = Reflect.construct(a, arguments, t);
                } else e = a.apply(this, arguments);
                return (function (e, a) {
                  if (a && ('object' === g(a) || 'function' == typeof a))
                    return a;
                  if (void 0 !== a)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined',
                    );
                  return f(e);
                })(this, e);
              });
          function l(e) {
            var t, n;
            return (
              (function (e, a) {
                if (!(e instanceof a))
                  throw new TypeError('Cannot call a class as a function');
              })(this, l),
              v(f((t = i.call(this, e))), 'handlePreviousPage', function (e) {
                var a = t.state.selected;
                t.handleClick(e, null, a > 0 ? a - 1 : void 0, {
                  isPrevious: !0,
                });
              }),
              v(f(t), 'handleNextPage', function (e) {
                var a = t.state.selected,
                  n = t.props.pageCount;
                t.handleClick(e, null, a < n - 1 ? a + 1 : void 0, {
                  isNext: !0,
                });
              }),
              v(f(t), 'handlePageSelected', function (e, a) {
                if (t.state.selected === e)
                  return (
                    t.callActiveCallback(e),
                    void t.handleClick(a, null, void 0, { isActive: !0 })
                  );
                t.handleClick(a, null, e);
              }),
              v(f(t), 'handlePageChange', function (e) {
                t.state.selected !== e &&
                  (t.setState({ selected: e }), t.callCallback(e));
              }),
              v(f(t), 'getEventListener', function (e) {
                return v({}, t.props.eventListener, e);
              }),
              v(f(t), 'handleClick', function (e, a, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  s = r.isPrevious,
                  i = void 0 !== s && s,
                  l = r.isNext,
                  o = void 0 !== l && l,
                  c = r.isBreak,
                  u = void 0 !== c && c,
                  p = r.isActive,
                  d = void 0 !== p && p;
                e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                var g = t.state.selected,
                  h = t.props.onClick,
                  m = n;
                if (h) {
                  var f = h({
                    index: a,
                    selected: g,
                    nextSelectedPage: n,
                    event: e,
                    isPrevious: i,
                    isNext: o,
                    isBreak: u,
                    isActive: d,
                  });
                  if (!1 === f) return;
                  Number.isInteger(f) && (m = f);
                }
                void 0 !== m && t.handlePageChange(m);
              }),
              v(f(t), 'handleBreakClick', function (e, a) {
                var n = t.state.selected;
                t.handleClick(
                  a,
                  e,
                  n < e ? t.getForwardJump() : t.getBackwardJump(),
                  { isBreak: !0 },
                );
              }),
              v(f(t), 'callCallback', function (e) {
                void 0 !== t.props.onPageChange &&
                  'function' == typeof t.props.onPageChange &&
                  t.props.onPageChange({ selected: e });
              }),
              v(f(t), 'callActiveCallback', function (e) {
                void 0 !== t.props.onPageActive &&
                  'function' == typeof t.props.onPageActive &&
                  t.props.onPageActive({ selected: e });
              }),
              v(f(t), 'getElementPageRel', function (e) {
                var a = t.state.selected,
                  n = t.props,
                  r = n.nextPageRel,
                  s = n.prevPageRel,
                  i = n.selectedPageRel;
                return a - 1 === e ? s : a === e ? i : a + 1 === e ? r : void 0;
              }),
              v(f(t), 'pagination', function () {
                var e = [],
                  n = t.props,
                  r = n.pageRangeDisplayed,
                  s = n.pageCount,
                  i = n.marginPagesDisplayed,
                  l = n.breakLabel,
                  o = n.breakClassName,
                  c = n.breakLinkClassName,
                  u = t.state.selected;
                if (s <= r)
                  for (var d = 0; d < s; d++) e.push(t.getPageElement(d));
                else {
                  var g = r / 2,
                    h = r - g;
                  u > s - r / 2
                    ? (g = r - (h = s - u))
                    : u < r / 2 && (h = r - (g = u));
                  var m,
                    f,
                    b = function (e) {
                      return t.getPageElement(e);
                    },
                    v = [];
                  for (m = 0; m < s; m++) {
                    var C = m + 1;
                    C <= i ||
                    C > s - i ||
                    (m >= u - g && m <= u + (0 === u && r > 1 ? h - 1 : h))
                      ? v.push({ type: 'page', index: m, display: b(m) })
                      : l &&
                        v.length > 0 &&
                        v[v.length - 1].display !== f &&
                        (r > 0 || i > 0) &&
                        ((f = a().createElement(p, {
                          key: m,
                          breakLabel: l,
                          breakClassName: o,
                          breakLinkClassName: c,
                          breakHandler: t.handleBreakClick.bind(null, m),
                          getEventListener: t.getEventListener,
                        })),
                        v.push({ type: 'break', index: m, display: f }));
                  }
                  v.forEach(function (a, t) {
                    var n = a;
                    'break' === a.type &&
                      v[t - 1] &&
                      'page' === v[t - 1].type &&
                      v[t + 1] &&
                      'page' === v[t + 1].type &&
                      v[t + 1].index - v[t - 1].index <= 2 &&
                      (n = {
                        type: 'page',
                        index: a.index,
                        display: b(a.index),
                      }),
                      e.push(n.display);
                  });
                }
                return e;
              }),
              void 0 !== e.initialPage &&
                void 0 !== e.forcePage &&
                console.warn(
                  '(react-paginate): Both initialPage ('
                    .concat(e.initialPage, ') and forcePage (')
                    .concat(
                      e.forcePage,
                      ') props are provided, which is discouraged.',
                    ) +
                    ' Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components',
                ),
              (n = e.initialPage
                ? e.initialPage
                : e.forcePage
                ? e.forcePage
                : 0),
              (t.state = { selected: n }),
              t
            );
          }
          return (
            (t = l),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    a = e.initialPage,
                    t = e.disableInitialCallback,
                    n = e.extraAriaContext,
                    r = e.pageCount,
                    s = e.forcePage;
                  void 0 === a || t || this.callCallback(a),
                    n &&
                      console.warn(
                        'DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.',
                      ),
                    Number.isInteger(r) ||
                      console.warn(
                        '(react-paginate): The pageCount prop value provided is not an integer ('.concat(
                          r,
                          '). Did you forget a Math.ceil()?',
                        ),
                      ),
                    void 0 !== a &&
                      a > r - 1 &&
                      console.warn(
                        '(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ('
                          .concat(a, ' > ')
                          .concat(r - 1, ').'),
                      ),
                    void 0 !== s &&
                      s > r - 1 &&
                      console.warn(
                        '(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ('
                          .concat(s, ' > ')
                          .concat(r - 1, ').'),
                      );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  void 0 !== this.props.forcePage &&
                    this.props.forcePage !== e.forcePage &&
                    (this.props.forcePage > this.props.pageCount - 1 &&
                      console.warn(
                        '(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ('
                          .concat(this.props.forcePage, ' > ')
                          .concat(this.props.pageCount - 1, ').'),
                      ),
                    this.setState({ selected: this.props.forcePage })),
                    Number.isInteger(e.pageCount) &&
                      !Number.isInteger(this.props.pageCount) &&
                      console.warn(
                        '(react-paginate): The pageCount prop value provided is not an integer ('.concat(
                          this.props.pageCount,
                          '). Did you forget a Math.ceil()?',
                        ),
                      );
                },
              },
              {
                key: 'getForwardJump',
                value: function () {
                  var e = this.state.selected,
                    a = this.props,
                    t = a.pageCount,
                    n = e + a.pageRangeDisplayed;
                  return n >= t ? t - 1 : n;
                },
              },
              {
                key: 'getBackwardJump',
                value: function () {
                  var e = this.state.selected - this.props.pageRangeDisplayed;
                  return e < 0 ? 0 : e;
                },
              },
              {
                key: 'getElementHref',
                value: function (e) {
                  var a = this.props,
                    t = a.hrefBuilder,
                    n = a.pageCount,
                    r = a.hrefAllControls;
                  if (t)
                    return r || (e >= 0 && e < n)
                      ? t(e + 1, n, this.state.selected)
                      : void 0;
                },
              },
              {
                key: 'ariaLabelBuilder',
                value: function (e) {
                  var a = e === this.state.selected;
                  if (
                    this.props.ariaLabelBuilder &&
                    e >= 0 &&
                    e < this.props.pageCount
                  ) {
                    var t = this.props.ariaLabelBuilder(e + 1, a);
                    return (
                      this.props.extraAriaContext &&
                        !a &&
                        (t = t + ' ' + this.props.extraAriaContext),
                      t
                    );
                  }
                },
              },
              {
                key: 'getPageElement',
                value: function (e) {
                  var t = this.state.selected,
                    n = this.props,
                    r = n.pageClassName,
                    s = n.pageLinkClassName,
                    i = n.activeClassName,
                    l = n.activeLinkClassName,
                    c = n.extraAriaContext,
                    u = n.pageLabelBuilder;
                  return a().createElement(o, {
                    key: e,
                    pageSelectedHandler: this.handlePageSelected.bind(null, e),
                    selected: t === e,
                    rel: this.getElementPageRel(e),
                    pageClassName: r,
                    pageLinkClassName: s,
                    activeClassName: i,
                    activeLinkClassName: l,
                    extraAriaContext: c,
                    href: this.getElementHref(e),
                    ariaLabel: this.ariaLabelBuilder(e),
                    page: e + 1,
                    pageLabelBuilder: u,
                    getEventListener: this.getEventListener,
                  });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.renderOnZeroPageCount;
                  if (0 === this.props.pageCount && void 0 !== e)
                    return e ? e(this.props) : e;
                  var t = this.props,
                    n = t.disabledClassName,
                    r = t.disabledLinkClassName,
                    s = t.pageCount,
                    i = t.className,
                    l = t.containerClassName,
                    o = t.previousLabel,
                    c = t.previousClassName,
                    u = t.previousLinkClassName,
                    p = t.previousAriaLabel,
                    g = t.prevRel,
                    m = t.nextLabel,
                    f = t.nextClassName,
                    b = t.nextLinkClassName,
                    v = t.nextAriaLabel,
                    C = t.nextRel,
                    y = this.state.selected,
                    N = 0 === y,
                    P = y === s - 1,
                    _ = ''.concat(d(c)).concat(N ? ' '.concat(d(n)) : ''),
                    k = ''.concat(d(f)).concat(P ? ' '.concat(d(n)) : ''),
                    L = ''.concat(d(u)).concat(N ? ' '.concat(d(r)) : ''),
                    x = ''.concat(d(b)).concat(P ? ' '.concat(d(r)) : ''),
                    A = N ? 'true' : 'false',
                    j = P ? 'true' : 'false';
                  return a().createElement(
                    'ul',
                    {
                      className: i || l,
                      role: 'navigation',
                      'aria-label': 'Pagination',
                    },
                    a().createElement(
                      'li',
                      { className: _ },
                      a().createElement(
                        'a',
                        h(
                          {
                            className: L,
                            href: this.getElementHref(y - 1),
                            tabIndex: N ? '-1' : '0',
                            role: 'button',
                            onKeyPress: this.handlePreviousPage,
                            'aria-disabled': A,
                            'aria-label': p,
                            rel: g,
                          },
                          this.getEventListener(this.handlePreviousPage),
                        ),
                        o,
                      ),
                    ),
                    this.pagination(),
                    a().createElement(
                      'li',
                      { className: k },
                      a().createElement(
                        'a',
                        h(
                          {
                            className: x,
                            href: this.getElementHref(y + 1),
                            tabIndex: P ? '-1' : '0',
                            role: 'button',
                            onKeyPress: this.handleNextPage,
                            'aria-disabled': j,
                            'aria-label': v,
                            rel: C,
                          },
                          this.getEventListener(this.handleNextPage),
                        ),
                        m,
                      ),
                    ),
                  );
                },
              },
            ]) &&
              (function (e, a) {
                for (var t = 0; t < a.length; t++) {
                  var n = a[t];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            l
          );
        })(e.Component);
        v(C, 'propTypes', {
          pageCount: s().number.isRequired,
          pageRangeDisplayed: s().number,
          marginPagesDisplayed: s().number,
          previousLabel: s().node,
          previousAriaLabel: s().string,
          prevPageRel: s().string,
          prevRel: s().string,
          nextLabel: s().node,
          nextAriaLabel: s().string,
          nextPageRel: s().string,
          nextRel: s().string,
          breakLabel: s().oneOfType([s().string, s().node]),
          hrefBuilder: s().func,
          hrefAllControls: s().bool,
          onPageChange: s().func,
          onPageActive: s().func,
          onClick: s().func,
          initialPage: s().number,
          forcePage: s().number,
          disableInitialCallback: s().bool,
          containerClassName: s().string,
          className: s().string,
          pageClassName: s().string,
          pageLinkClassName: s().string,
          pageLabelBuilder: s().func,
          activeClassName: s().string,
          activeLinkClassName: s().string,
          previousClassName: s().string,
          nextClassName: s().string,
          previousLinkClassName: s().string,
          nextLinkClassName: s().string,
          disabledClassName: s().string,
          disabledLinkClassName: s().string,
          breakClassName: s().string,
          breakLinkClassName: s().string,
          extraAriaContext: s().string,
          ariaLabelBuilder: s().func,
          eventListener: s().string,
          renderOnZeroPageCount: s().func,
          selectedPageRel: s().string,
        }),
          v(C, 'defaultProps', {
            pageRangeDisplayed: 2,
            marginPagesDisplayed: 3,
            activeClassName: 'selected',
            previousLabel: 'Previous',
            previousClassName: 'previous',
            previousAriaLabel: 'Previous page',
            prevPageRel: 'prev',
            prevRel: 'prev',
            nextLabel: 'Next',
            nextClassName: 'next',
            nextAriaLabel: 'Next page',
            nextPageRel: 'next',
            nextRel: 'next',
            breakLabel: '...',
            disabledClassName: 'disabled',
            disableInitialCallback: !1,
            pageLabelBuilder: function (e) {
              return e;
            },
            eventListener: 'onClick',
            renderOnZeroPageCount: void 0,
            selectedPageRel: 'canonical',
            hrefAllControls: !1,
          });
        const y = C;
      })(),
      r
    );
  })()),
  ({
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
    },
  }.exports = L(e));
const A = t(x),
  j = {
    body: '_body_j3cnu_1',
    header: '_header_j3cnu_7',
    header__icon: '_header__icon_j3cnu_19',
    header__title: '_header__title_j3cnu_25',
    message: '_message_j3cnu_32',
    ranklist: '_ranklist_j3cnu_41',
    list: '_list_j3cnu_48',
    item: '_item_j3cnu_59',
    automatch: '_automatch_j3cnu_72',
    picholder: '_picholder_j3cnu_76',
    pic: '_pic_j3cnu_76',
    watchButton: '_watchButton_j3cnu_88',
    battlecardwin: '_battlecardwin_j3cnu_100',
    battlecardlose: '_battlecardlose_j3cnu_106',
    battlecardtie: '_battlecardtie_j3cnu_112',
    name: '_name_j3cnu_118',
    username: '_username_j3cnu_129',
    scoreleft: '_scoreleft_j3cnu_137',
    scoreright: '_scoreright_j3cnu_147',
    coinsusedright: '_coinsusedright_j3cnu_157',
    coinsusedleft: '_coinsusedleft_j3cnu_167',
    score: '_score_j3cnu_137',
    tableheader: '_tableheader_j3cnu_194',
    tableheaderdiv: '_tableheaderdiv_j3cnu_205',
    paginationouter: '_paginationouter_j3cnu_213',
    pagination: '_pagination_j3cnu_213',
    pageNum: '_pageNum_j3cnu_228',
    break: '_break_j3cnu_249',
    active: '_active_j3cnu_253',
    button: '_button_j3cnu_264',
  },
  E =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAdCAYAAAAzfpVwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgBtVjbTeNAFL0JIPEZJJ5/TgULHZgKyFZAqIClgiQVQCrAqWChAlxCOoj/EA8p/gCBeCR7jnccDU7suXbgSInH47njM/c1d1yTJTEejxvv7+8emvvT6dRbMGRYr9fjra2tUJZETSqABD8+Ptogd1Sr1UiyoRQN8Rusra2FGxsbkZREKbIPDw8+Lqcg15LlEYB0rwxpFVlj6nM02/L9UJN2kn18fDyGJi9KmLoKIvx629vbQdGgQrIw+zlI/hE34slkMkAgDT8/P0N2rKysNHDv4b4Fvz5Cl3OxGNdFIPZyn+c9uL+/vxSF2UGy//Ly0m02m3HemNvbWw/kuehTcSOAhk9ES1ZJNIbWT3Z2dq5ECbhUC4vj3C4tLyQ8Rxam74BEVxzAmN+LiDIYX19fG+vr6zGCJs4h/Nc1P1ziAi5xZvfV7RtotK0hStNniTKtQf4GWWMMk4945b1JdzNsbm5Sru96B2OFwW33zTQLjXh4wQ2anmOeGEFzsLe3F1lEC62RDRyTCkfidocYae0gTWszzUK4oyBKXGWI+i5r8LmtYeMeA3Gj8fb2dp7eJGSpVVEmfKSj6wyRjkZuwbihRg5WaaULTcgaraoAf43SNs2Ji68U9c34BGk+1iBdaOoGba0gXjKLcEa9lEDZ8RZ8/qVkQ6kApqeq47nDlRAN+JeQhV/0tFJ4iZ+2TaCEStHQzrvcipVytGbCLyHLwhiEVTsRfHbfvtcuNDsO8xyJDkGafWapC8U0dwunWaGRYztQuFAEQCFhPrdPCib7OGtiyEWpVr+QNezPxA2eEr5kD+xmXWjuUOZdghY75HO7E/IsaDRVWM/O6XO1AbbIC1FUR3m1wWg0Yl3A+iBeVInd3d2xZHTWBrRGdpELqy5MGGDCYylG6aqLROFGl65CHs8HmLed7a8VTKwhnFRHq6ur/aJjiTlgdjSFfB7RQrLynzB90bm7YQy1fIXfNdpRunGYNPcLfW3NsYjV3O7ubu6CnGcwUzZ28EJPfg5c3JnrDFYXBzgBVnxI88jPIHh+fm66iBKlvhvwLIUA6Wp82QW6Debql/lSU+mLjDkA+miStK8Uo6mHWOj109NTUHTAzEMlslmw3gSJBgJrf+4FCDhchjB1VIWgjX8VP+bvxaf6hgAAAABJRU5ErkJggg==',
  R = '' + new URL('codechar_favicon-2dcc0475.png', import.meta.url).href;
function O(e, a) {
  if (e.username === a.user1.username) {
    if (a.matchVerdict === b.Player1) return j.battlecardwin;
    if (a.matchVerdict == b.Player2) return j.battlecardlose;
    if (a.matchVerdict == b.Success) return j.battlecardwin;
    if (a.matchVerdict == b.Failure) return j.battlecardlose;
  } else {
    if (a.matchVerdict === b.Player1) return j.battlecardlose;
    if (a.matchVerdict == b.Player2) return j.battlecardwin;
  }
  return j.battlecardtie;
}
function w(e) {
  let a = '';
  return e.matchMode == v.Auto && (a = j.automatch), a;
}
function T(e, a) {
  const t = [...a.games.values()];
  return e.username == a.user1.username ? t[0] : t[t.length - 1];
}
function B() {
  const [a, t] = e.useState(0),
    [n, r] = e.useState(0),
    [b, v] = e.useState([]),
    C = l(),
    { battletv: y, loading: N, hasbeenFetched: _, hasErrors: k } = o(c),
    L = o(u),
    x = p();
  _ || x(d()),
    e.useEffect(() => {
      const e = n + 8;
      v(y.slice(n, e)), t(Math.ceil(y.length / 8));
    }, [n, 8, y]);
  return s(g, {
    children: [
      i(g, {
        children:
          N || k
            ? i('div', {
                className: 'd-flex justify-content-center',
                children: i('div', {
                  className: 'spinner-border text-white',
                  role: 'status',
                  children: i('span', {
                    className: 'sr-only',
                    children: 'Loading...',
                  }),
                }),
              })
            : i(g, {
                children:
                  0 == b.length
                    ? i('div', {
                        className: j.message,
                        children: 'You have not played any matches yet',
                      })
                    : b &&
                      b.map(e => {
                        var a, t;
                        return i(
                          'div',
                          {
                            className: j.item,
                            children: s('div', {
                              className: j.item + ' ' + O(L, e) + ' ' + w(e),
                              children: [
                                s('span', {
                                  className: j.username,
                                  children: [
                                    i('div', {
                                      className: j.picholder,
                                      children: i('img', {
                                        src: P(e.user1.avatarId).url,
                                        className: j.pic,
                                      }),
                                    }),
                                    i('span', {
                                      className: [j.name].join(' '),
                                      children: e.user1.username.substring(
                                        0,
                                        10,
                                      ),
                                    }),
                                  ],
                                }),
                                i('span', {
                                  className: j.coinsusedleft,
                                  children: [...e.games.values()][0].coinsUsed,
                                }),
                                i('span', {
                                  className: j.scoreleft,
                                  children: [
                                    ...e.games.values(),
                                  ][0].destruction.toFixed(2),
                                }),
                                i('div', {
                                  className: j.watchButton,
                                  onClick: () => {
                                    x(
                                      h({
                                        id: T(L, e).id,
                                        callback: () => {
                                          null === e.user2 &&
                                            (x(m('DailyChallenge')), x(f(!0))),
                                            C('/dashboard');
                                        },
                                      }),
                                    );
                                  },
                                  children: i('img', { src: E }),
                                }),
                                i('span', {
                                  className: j.scoreright,
                                  children: [...e.games.values()][
                                    1 === [...e.games.values()].length ? 0 : 1
                                  ].destruction.toFixed(2),
                                }),
                                i('span', {
                                  className: j.coinsusedright,
                                  children: [...e.games.values()][
                                    1 === [...e.games.values()].length ? 0 : 1
                                  ].coinsUsed,
                                }),
                                s('span', {
                                  className: j.username,
                                  children: [
                                    i('span', {
                                      className: [j.name, j.right].join(' '),
                                      children:
                                        null !== e.user2
                                          ? null == (a = e.user2)
                                            ? void 0
                                            : a.username
                                          : 'Daily Challenge',
                                    }),
                                    i('div', {
                                      className: j.picholder,
                                      children: i('img', {
                                        src:
                                          null == e.user2
                                            ? R
                                            : P(
                                                null == (t = e.user2)
                                                  ? void 0
                                                  : t.avatarId,
                                              ).url,
                                        className: j.pic,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id,
                        );
                      }),
              }),
      }),
      s('nav', {
        className: j.paginationouter,
        children: [
          i(A, {
            previousLabel: '<',
            nextLabel: '>',
            pageLinkClassName: j.pageNum,
            previousLinkClassName: j.pageNum,
            nextLinkClassName: j.pageNum,
            breakLabel: '...',
            breakLinkClassName: j.pageNum,
            pageCount: a,
            marginPagesDisplayed: 2,
            pageRangeDisplayed: 5,
            onPageChange: e => {
              const a = (8 * e.selected) % y.length;
              r(a);
            },
            containerClassName: j.pagination,
            activeClassName: 'active',
          }),
          i('button', {
            type: 'button',
            className: j.button,
            onClick: () => {
              x(d());
            },
            id: 'refresh',
            children: 'Refresh',
          }),
        ],
      }),
    ],
  });
}
function S() {
  const { setIsOpen: a } = _(),
    t = new n(r);
  return (
    e.useEffect(() => {
      setTimeout(() => {
        t.getCurrentUser().then(e => {
          !1 === e.isTutorialComplete && 5 == e.tutorialLevel && a(!0);
        });
      }, 200);
    }, []),
    s('div', {
      className: j.body,
      id: 'battleTV',
      children: [
        i('div', {
          className: j.header,
          children: i('h1', {
            className: j.header__title,
            children: i('span', { children: 'Battle TV' }),
          }),
        }),
        s('div', {
          className: j.ranklist,
          children: [
            s('div', {
              className: j.tableheaderdiv,
              children: [
                i('span', { className: j.tableheader, children: 'ATTACKER' }),
                i('span', { className: j.tableheader, children: 'COINS USED' }),
                i('span', {
                  className: j.tableheader,
                  children: 'DESTRUCTION(%)',
                }),
                i('span', { className: j.tableheader }),
                i('span', {
                  className: j.tableheader,
                  children: 'DESTRUCTION(%)',
                }),
                i('span', { className: j.tableheader, children: 'COINS USED' }),
                i('span', { className: j.tableheader, children: 'DEFENDER' }),
              ],
            }),
            i(B, {}),
          ],
        }),
      ],
    })
  );
}
const D = [
    {
      selector: '#battleTV',
      content:
        'This is the Battle TV, you can see the previous battles here. Click on the eye icon to view the match simulation',
    },
  ],
  I = () => {
    const e = new n(r),
      a = o(u),
      t = l(),
      s = p();
    return i(k, {
      setOpened: n => {
        !1 === n &&
          e
            .updateCurrentUser({
              name: a.name,
              country: a.country,
              college: a.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              s(C(!0)), t('/dashboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof y && N.error(e.message);
            });
      },
      steps: D,
      children: i(S, {}),
    });
  };
export { I as default };
