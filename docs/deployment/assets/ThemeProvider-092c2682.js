import { r as t } from './index-24a58ae8.js';
var n,
  e = {};
(n = {
  get exports() {
    return e;
  },
  set exports(t) {
    e = t;
  },
}),
  (function () {
    var t = {}.hasOwnProperty;
    function e() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var o = arguments[r];
        if (o) {
          var s = typeof o;
          if ('string' === s || 'number' === s) n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var i = e.apply(null, o);
              i && n.push(i);
            }
          } else if ('object' === s) {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes('[native code]')
            ) {
              n.push(o.toString());
              continue;
            }
            for (var a in o) t.call(o, a) && o[a] && n.push(a);
          }
        }
      }
      return n.join(' ');
    }
    n.exports ? ((e.default = e), (n.exports = e)) : (window.classNames = e);
  })();
const r = e,
  o = t.createContext({
    prefixes: {},
    breakpoints: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    minBreakpoint: 'xs',
  });
function s(n, e) {
  const { prefixes: r } = t.useContext(o);
  return n || r[e] || e;
}
function i() {
  const { breakpoints: n } = t.useContext(o);
  return n;
}
function a() {
  const { minBreakpoint: n } = t.useContext(o);
  return n;
}
function u() {
  const { dir: n } = t.useContext(o);
  return 'rtl' === n;
}
export { e as a, i as b, r as c, a as d, u as e, s as u };
