import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var o = (function () {
  if (n) return r;
  function e(e) {
    e.languages.matlab = {
      comment: [/%\{[\s\S]*?\}%/, /%.+/],
      string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
      number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
      keyword:
        /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
      function: /(?!\d)\w+(?=\s*\()/,
      operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
      punctuation: /\.{3}|[.,;\[\](){}!]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'matlab'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(o) }, [o]);
export { i as m };