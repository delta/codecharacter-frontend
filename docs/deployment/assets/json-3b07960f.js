import { bm as e } from './index-3b0785b0.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const r in n)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(n, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => n[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var o = (function () {
  if (n) return t;
  function e(e) {
    e.languages.json = {
      property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
      string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
      comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:true|false)\b/,
      null: { pattern: /\bnull\b/, alias: 'keyword' },
    };
  }
  return (n = 1), (t = e), (e.displayName = 'json'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(o) }, [o]);
export { a as j };