import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var a = 0; a < t.length; a++) {
    const r = t[a];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a &&
            Object.defineProperty(
              e,
              t,
              a.get ? a : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var a, r;
var n = (function () {
  if (r) return a;
  function e(e) {
    (e.languages.haxe = e.languages.extend('clike', {
      string: {
        pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
            lookbehind: !0,
            inside: { interpolation: { pattern: /^\$\w*/, alias: 'variable' } },
          },
        },
      },
      keyword:
        /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
      operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/,
    })),
      e.languages.insertBefore('haxe', 'class-name', {
        regex: { pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/, greedy: !0 },
      }),
      e.languages.insertBefore('haxe', 'keyword', {
        preprocessor: { pattern: /#\w+/, alias: 'builtin' },
        metadata: { pattern: /@:?\w+/, alias: 'symbol' },
        reification: { pattern: /\$(?:\w+|(?=\{))/, alias: 'variable' },
      }),
      (e.languages.haxe.string.inside.interpolation.inside.rest =
        e.languages.haxe),
      delete e.languages.haxe['class-name'];
  }
  return (r = 1), (a = e), (e.displayName = 'haxe'), (e.aliases = []), a;
})();
const i = t({ __proto__: null, default: e(n) }, [n]);
export { i as h };