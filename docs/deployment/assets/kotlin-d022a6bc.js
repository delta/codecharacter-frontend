import { bz as e } from './index-24a58ae8.js';
function n(e, n) {
  for (var t = 0; t < n.length; t++) {
    const a = n[t];
    if ('string' != typeof a && !Array.isArray(a))
      for (const n in a)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(a, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => a[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, a;
var i = (function () {
  if (a) return t;
  function e(e) {
    !(function (e) {
      (e.languages.kotlin = e.languages.extend('clike', {
        keyword: {
          pattern:
            /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
          lookbehind: !0,
        },
        function: [
          /\w+(?=\s*\()/,
          { pattern: /(\.)\w+(?=\s*\{)/, lookbehind: !0 },
        ],
        number:
          /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
        operator:
          /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
      })),
        delete e.languages.kotlin['class-name'],
        e.languages.insertBefore('kotlin', 'string', {
          'raw-string': { pattern: /("""|''')[\s\S]*?\1/, alias: 'string' },
        }),
        e.languages.insertBefore('kotlin', 'keyword', {
          annotation: {
            pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
            alias: 'builtin',
          },
        }),
        e.languages.insertBefore('kotlin', 'function', {
          label: { pattern: /\w+@|@\w+/, alias: 'symbol' },
        });
      var n = [
        {
          pattern: /\$\{[^}]+\}/,
          inside: {
            delimiter: { pattern: /^\$\{|\}$/, alias: 'variable' },
            rest: e.languages.kotlin,
          },
        },
        { pattern: /\$\w+/, alias: 'variable' },
      ];
      e.languages.kotlin.string.inside = e.languages.kotlin[
        'raw-string'
      ].inside = { interpolation: n };
    })(e);
  }
  return (a = 1), (t = e), (e.displayName = 'kotlin'), (e.aliases = []), t;
})();
const r = n({ __proto__: null, default: e(i) }, [i]);
export { r as k };
