import { bm as r } from './index-3b0785b0.js';
function e(r, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const e in n)
        if ('default' !== e && !(e in r)) {
          const t = Object.getOwnPropertyDescriptor(n, e);
          t &&
            Object.defineProperty(
              r,
              e,
              t.get ? t : { enumerable: !0, get: () => n[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var o = (function () {
  if (n) return t;
  function r(r) {
    r.languages.prolog = {
      comment: [/%.+/, /\/\*[\s\S]*?\*\//],
      string: {
        pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
      variable: /\b[A-Z_]\w*/,
      function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
      number: /\b\d+\.?\d*/,
      operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
      punctuation: /[(){}\[\],]/,
    };
  }
  return (n = 1), (t = r), (r.displayName = 'prolog'), (r.aliases = []), t;
})();
const i = e({ __proto__: null, default: r(o) }, [o]);
export { i as p };