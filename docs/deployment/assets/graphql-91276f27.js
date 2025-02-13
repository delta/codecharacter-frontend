import { bz as e } from './index-24a58ae8.js';
function n(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if ('string' != typeof r && !Array.isArray(r))
      for (const n in r)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(r, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => r[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, r;
var a = (function () {
  if (r) return t;
  function e(e) {
    e.languages.graphql = {
      comment: /#.*/,
      string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
      number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:true|false)\b/,
      variable: /\$[a-z_]\w*/i,
      directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
      'attr-name': {
        pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: !0,
      },
      'class-name': {
        pattern:
          /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
        lookbehind: !0,
      },
      fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: 'function',
      },
      keyword:
        /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
      operator: /[!=|]|\.{3}/,
      punctuation: /[!(){}\[\]:=,]/,
      constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
    };
  }
  return (r = 1), (t = e), (e.displayName = 'graphql'), (e.aliases = []), t;
})();
const o = n({ __proto__: null, default: e(a) }, [a]);
export { o as g };
