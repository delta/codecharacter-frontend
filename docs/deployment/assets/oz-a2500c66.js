import { bz as e } from './index-24a58ae8.js';
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
    e.languages.oz = {
      comment: /\/\*[\s\S]*?\*\/|%.*/,
      string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 },
      atom: { pattern: /'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, alias: 'builtin' },
      keyword:
        /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
      function: [
        /[a-z][A-Za-z\d]*(?=\()/,
        { pattern: /(\{)[A-Z][A-Za-z\d]*/, lookbehind: !0 },
      ],
      number:
        /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
      variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
      'attr-name': /\w+(?=:)/,
      operator:
        /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
      punctuation: /[\[\](){}.:;?]/,
    };
  }
  return (a = 1), (r = e), (e.displayName = 'oz'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(n) }, [n]);
export { o };
