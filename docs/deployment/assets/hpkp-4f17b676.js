import { bz as e } from './index-24a58ae8.js';
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
    e.languages.hpkp = {
      directive: {
        pattern:
          /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
        alias: 'keyword',
      },
      safe: { pattern: /\d{7,}/, alias: 'selector' },
      unsafe: { pattern: /\d{1,6}/, alias: 'function' },
    };
  }
  return (a = 1), (r = e), (e.displayName = 'hpkp'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(n) }, [n]);
export { o as h };
