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
    e.languages.julia = {
      comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
      string: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,
      keyword:
        /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
      boolean: /\b(?:true|false)\b/,
      number:
        /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,
      operator:
        /[-+*^%÷&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,
      punctuation: /[{}[\];(),.:]/,
      constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'julia'), (e.aliases = []), r;
})();
const a = t({ __proto__: null, default: e(o) }, [o]);
export { a as j };