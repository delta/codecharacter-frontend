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
    e.languages.smalltalk = {
      comment: /"(?:""|[^"])*"/,
      string: /'(?:''|[^'])*'/,
      symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
      'block-arguments': {
        pattern: /(\[\s*):[^\[|]*\|/,
        lookbehind: !0,
        inside: { variable: /:[\da-z]+/i, punctuation: /\|/ },
      },
      'temporary-variables': {
        pattern: /\|[^|]+\|/,
        inside: { variable: /[\da-z]+/i, punctuation: /\|/ },
      },
      keyword: /\b(?:nil|true|false|self|super|new)\b/,
      character: { pattern: /\$./, alias: 'string' },
      number: [
        /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
        /\b\d+(?:\.\d+)?(?:e-?\d+)?/,
      ],
      operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
      punctuation: /[.;:?\[\](){}]/,
    };
  }
  return (a = 1), (r = e), (e.displayName = 'smalltalk'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(n) }, [n]);
export { i as s };