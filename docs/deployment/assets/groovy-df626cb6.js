import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var a = (function () {
  if (r) return n;
  function e(e) {
    (e.languages.groovy = e.languages.extend('clike', {
      keyword:
        /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
      string: [
        {
          pattern: /("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/,
          greedy: !0,
        },
        { pattern: /(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
      ],
      number:
        /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
      operator: {
        pattern:
          /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
        lookbehind: !0,
      },
      punctuation: /\.+|[{}[\];(),:$]/,
    })),
      e.languages.insertBefore('groovy', 'string', {
        shebang: { pattern: /#!.+/, alias: 'comment' },
      }),
      e.languages.insertBefore('groovy', 'punctuation', {
        'spock-block': /\b(?:setup|given|when|then|and|cleanup|expect|where):/,
      }),
      e.languages.insertBefore('groovy', 'function', {
        annotation: {
          alias: 'punctuation',
          pattern: /(^|[^.])@\w+/,
          lookbehind: !0,
        },
      }),
      e.hooks.add('wrap', function (t) {
        if ('groovy' === t.language && 'string' === t.type) {
          var n = t.content.value[0];
          if ("'" != n) {
            var r = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
            '$' === n && (r = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
              (t.content.value = t.content.value
                .replace(/&lt;/g, '<')
                .replace(/&amp;/g, '&')),
              (t.content = e.highlight(t.content.value, {
                expression: {
                  pattern: r,
                  lookbehind: !0,
                  inside: e.languages.groovy,
                },
              })),
              t.classes.push('/' === n ? 'regex' : 'gstring');
          }
        }
      });
  }
  return (r = 1), (n = e), (e.displayName = 'groovy'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as g };