var e = {},
  r = {
    get exports() {
      return e;
    },
    set exports(r) {
      e = r;
    },
  },
  t = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
function n() {}
function o() {}
o.resetWarningCache = n;
r.exports = (function () {
  function e(e, r, n, o, a, p) {
    if (p !== t) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((s.name = 'Invariant Violation'), s);
    }
  }
  function r() {
    return e;
  }
  e.isRequired = e;
  var a = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: o,
    resetWarningCache: n,
  };
  return (a.PropTypes = a), a;
})();
export { e as p };
