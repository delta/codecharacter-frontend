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
    e.languages.lua = {
      comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
      string: {
        pattern:
          /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
        greedy: !0,
      },
      number:
        /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
      keyword:
        /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
      function: /(?!\d)\w+(?=\s*(?:[({]))/,
      operator: [
        /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
        { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
      ],
      punctuation: /[\[\](){},;]|\.+|:+/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'lua'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(o) }, [o]);
export { a as l };