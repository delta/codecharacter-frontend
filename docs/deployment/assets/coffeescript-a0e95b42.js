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
    var t, n, r;
    (n = /#(?!\{).+/),
      (r = { pattern: /#\{[^}]+\}/, alias: 'variable' }),
      ((t = e).languages.coffeescript = t.languages.extend('javascript', {
        comment: n,
        string: [
          { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
          {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            inside: { interpolation: r },
          },
        ],
        keyword:
          /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
      })),
      t.languages.insertBefore('coffeescript', 'comment', {
        'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
        'block-regex': {
          pattern: /\/{3}[\s\S]*?\/{3}/,
          alias: 'regex',
          inside: { comment: n, interpolation: r },
        },
      }),
      t.languages.insertBefore('coffeescript', 'string', {
        'inline-javascript': {
          pattern: /`(?:\\[\s\S]|[^\\`])*`/,
          inside: {
            delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
            rest: t.languages.javascript,
          },
        },
        'multiline-string': [
          { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
          {
            pattern: /"""[\s\S]*?"""/,
            greedy: !0,
            alias: 'string',
            inside: { interpolation: r },
          },
        ],
      }),
      t.languages.insertBefore('coffeescript', 'keyword', {
        property: /(?!\d)\w+(?=\s*:(?!:))/,
      }),
      delete t.languages.coffeescript['template-string'],
      (t.languages.coffee = t.languages.coffeescript);
  }
  return (
    (r = 1),
    (n = e),
    (e.displayName = 'coffeescript'),
    (e.aliases = ['coffee']),
    n
  );
})();
const i = t({ __proto__: null, default: e(a) }, [a]);
export { i as c };