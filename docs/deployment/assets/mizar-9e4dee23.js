import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const i = t[r];
    if ('string' != typeof i && !Array.isArray(i))
      for (const t in i)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(i, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => i[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, i;
var n = (function () {
  if (i) return r;
  function e(e) {
    e.languages.mizar = {
      comment: /::.+/,
      keyword:
        /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
      parameter: { pattern: /\$(?:10|\d)/, alias: 'variable' },
      variable: /\w+(?=:)/,
      number: /(?:\b|-)\d+\b/,
      operator: /\.\.\.|->|&|\.?=/,
      punctuation: /\(#|#\)|[,:;\[\](){}]/,
    };
  }
  return (i = 1), (r = e), (e.displayName = 'mizar'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(n) }, [n]);
export { o as m };