import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(a, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, a;
var n = (function () {
  if (a) return r;
  function e(e) {
    e.languages.hsts = {
      directive: {
        pattern: /\b(?:max-age=|includeSubDomains|preload)/,
        alias: 'keyword',
      },
      safe: { pattern: /\d{8,}/, alias: 'selector' },
      unsafe: { pattern: /\d{1,7}/, alias: 'function' },
    };
  }
  return (a = 1), (r = e), (e.displayName = 'hsts'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(n) }, [n]);
export { o as h };