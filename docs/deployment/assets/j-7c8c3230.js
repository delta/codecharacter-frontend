import { bm as e } from './index-3b0785b0.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const r in n)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(n, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => n[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var a = (function () {
  if (n) return t;
  function e(e) {
    e.languages.j = {
      comment: /\bNB\..*/,
      string: { pattern: /'(?:''|[^'\r\n])*'/, greedy: !0 },
      keyword:
        /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
      verb: {
        pattern:
          /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
        alias: 'keyword',
      },
      number:
        /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
      adverb: { pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, alias: 'builtin' },
      operator: /[=a][.:]|_\./,
      conjunction: {
        pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
        alias: 'variable',
      },
      punctuation: /[()]/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'j'), (e.aliases = []), t;
})();
const o = r({ __proto__: null, default: e(a) }, [a]);
export { o as j };