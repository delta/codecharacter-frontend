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
var a = (function () {
  if (n) return r;
  function e(e) {
    e.languages.scheme = {
      comment: /;.*/,
      string: { pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/, greedy: !0 },
      character: {
        pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
        alias: 'string',
      },
      keyword: {
        pattern:
          /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
        lookbehind: !0,
      },
      builtin: {
        pattern:
          /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
        lookbehind: !0,
      },
      number: {
        pattern:
          /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
        lookbehind: !0,
      },
      boolean: /#[tf]/,
      operator: {
        pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
        lookbehind: !0,
      },
      function: { pattern: /(\()[^()'\s]+(?=[()\s)]|$)/, lookbehind: !0 },
      punctuation: /[()']/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'scheme'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as s };