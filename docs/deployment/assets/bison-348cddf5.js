import { bz as e } from './index-24a58ae8.js';
import { r as t } from './c-6c432317.js';
function n(e, t) {
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
var r, a;
var i = (function () {
  if (a) return r;
  a = 1;
  var e = t();
  function n(t) {
    t.register(e),
      (t.languages.bison = t.languages.extend('c', {})),
      t.languages.insertBefore('bison', 'comment', {
        bison: {
          pattern: /^[\s\S]*?%%[\s\S]*?%%/,
          inside: {
            c: {
              pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
              inside: {
                delimiter: { pattern: /^%?\{|%?\}$/, alias: 'punctuation' },
                'bison-variable': {
                  pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                  alias: 'variable',
                  inside: { punctuation: /<|>/ },
                },
                rest: t.languages.c,
              },
            },
            comment: t.languages.c.comment,
            string: t.languages.c.string,
            property: /\S+(?=:)/,
            keyword: /%\w+/,
            number: {
              pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
              lookbehind: !0,
            },
            punctuation: /%[%?]|[|:;\[\]<>]/,
          },
        },
      });
  }
  return (r = n), (n.displayName = 'bison'), (n.aliases = []), r;
})();
const o = n({ __proto__: null, default: e(i) }, [i]);
export { o as b };
