import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if ('string' != typeof i && !Array.isArray(i))
      for (const t in i)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(i, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => i[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, i;
var r = (function () {
  if (i) return n;
  function e(e) {
    (e.languages.jolie = e.languages.extend('clike', {
      keyword:
        /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
      builtin:
        /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
      number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
      operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
      symbol: /[|;@]/,
      punctuation: /[,.]/,
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
    })),
      delete e.languages.jolie['class-name'],
      e.languages.insertBefore('jolie', 'keyword', {
        function: {
          pattern:
            /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
          lookbehind: !0,
        },
        aggregates: {
          pattern:
            /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
          lookbehind: !0,
          inside: {
            withExtension: {
              pattern: /\bwith\s+\w+/,
              inside: { keyword: /\bwith\b/ },
            },
            function: { pattern: /\w+/ },
            punctuation: { pattern: /,/ },
          },
        },
        redirects: {
          pattern:
            /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
          lookbehind: !0,
          inside: {
            punctuation: { pattern: /,/ },
            function: { pattern: /\w+/ },
            symbol: { pattern: /=>/ },
          },
        },
      });
  }
  return (i = 1), (n = e), (e.displayName = 'jolie'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(r) }, [r]);
export { o as j };