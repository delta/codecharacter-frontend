import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if ('string' != typeof o && !Array.isArray(o))
      for (const t in o)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(o, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => o[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, o;
var r = (function () {
  if (o) return n;
  function e(e) {
    e.languages.autoit = {
      comment: [
        /;.*/,
        {
          pattern:
            /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
          lookbehind: !0,
        },
      ],
      url: {
        pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
        lookbehind: !0,
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
        greedy: !0,
        inside: { variable: /([%$@])\w+\1/ },
      },
      directive: { pattern: /(^\s*)#\w+/m, lookbehind: !0, alias: 'keyword' },
      function: /\b\w+(?=\()/,
      variable: /[$@]\w+/,
      keyword:
        /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
      number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
      boolean: /\b(?:True|False)\b/i,
      operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
      punctuation: /[\[\]().,:]/,
    };
  }
  return (o = 1), (n = e), (e.displayName = 'autoit'), (e.aliases = []), n;
})();
const i = t({ __proto__: null, default: e(r) }, [r]);
export { i as a };