import { bz as e } from './index-24a58ae8.js';
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
    e.languages.r = {
      comment: /#.*/,
      string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
      'percent-operator': { pattern: /%[^%\s]*%/, alias: 'operator' },
      boolean: /\b(?:TRUE|FALSE)\b/,
      ellipsis: /\.\.(?:\.|\d+)/,
      number: [
        /\b(?:NaN|Inf)\b/,
        /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
      ],
      keyword:
        /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
      operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
      punctuation: /[(){}\[\],;]/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'r'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(o) }, [o]);
export { a as r };
