import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var a = 0; a < t.length; a++) {
    const n = t[a];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(n, t);
          a &&
            Object.defineProperty(
              e,
              t,
              a.get ? a : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var a, n;
var r = (function () {
  if (n) return a;
  function e(e) {
    (e.languages.actionscript = e.languages.extend('javascript', {
      keyword:
        /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
      operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
    })),
      (e.languages.actionscript['class-name'].alias = 'function'),
      e.languages.markup &&
        e.languages.insertBefore('actionscript', 'string', {
          xml: {
            pattern:
              /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
            lookbehind: !0,
            inside: { rest: e.languages.markup },
          },
        });
  }
  return (
    (n = 1), (a = e), (e.displayName = 'actionscript'), (e.aliases = []), a
  );
})();
const i = t({ __proto__: null, default: e(r) }, [r]);
export { i as a };
