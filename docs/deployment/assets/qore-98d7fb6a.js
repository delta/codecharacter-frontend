import { bz as e } from './index-24a58ae8.js';
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
    e.languages.qore = e.languages.extend('clike', {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
        lookbehind: !0,
      },
      string: { pattern: /("|')(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
      variable: /\$(?!\d)\w+\b/,
      keyword:
        /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
      number:
        /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
      boolean: /\b(?:true|false)\b/i,
      operator: {
        pattern:
          /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
        lookbehind: !0,
      },
      function: /\$?\b(?!\d)\w+(?=\()/,
    });
  }
  return (n = 1), (r = e), (e.displayName = 'qore'), (e.aliases = []), r;
})();
const a = t({ __proto__: null, default: e(o) }, [o]);
export { a as q };
