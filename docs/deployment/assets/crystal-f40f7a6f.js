import { bz as e } from './index-24a58ae8.js';
import { r as t } from './ruby-5ae06024.js';
function r(e, t) {
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
var a, n;
var s = (function () {
  if (n) return a;
  n = 1;
  var e = t();
  function r(t) {
    var r;
    t.register(e),
      ((r = t).languages.crystal = r.languages.extend('ruby', {
        keyword: [
          /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
          { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 },
        ],
        number:
          /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,
      })),
      r.languages.insertBefore('crystal', 'string', {
        attribute: {
          pattern: /@\[.+?\]/,
          alias: 'attr-name',
          inside: {
            delimiter: { pattern: /^@\[|\]$/, alias: 'tag' },
            rest: r.languages.crystal,
          },
        },
        expansion: [
          {
            pattern: /\{\{.+?\}\}/,
            inside: {
              delimiter: { pattern: /^\{\{|\}\}$/, alias: 'tag' },
              rest: r.languages.crystal,
            },
          },
          {
            pattern: /\{%.+?%\}/,
            inside: {
              delimiter: { pattern: /^\{%|%\}$/, alias: 'tag' },
              rest: r.languages.crystal,
            },
          },
        ],
      });
  }
  return (a = r), (r.displayName = 'crystal'), (r.aliases = []), a;
})();
const i = r({ __proto__: null, default: e(s) }, [s]);
export { i as c };
