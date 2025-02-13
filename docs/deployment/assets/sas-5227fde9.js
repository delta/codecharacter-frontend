import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const e in r)
        if ('default' !== e && !(e in t)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n &&
            Object.defineProperty(
              t,
              e,
              n.get ? n : { enumerable: !0, get: () => r[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var a = (function () {
  if (r) return n;
  function t(t) {
    t.languages.sas = {
      datalines: {
        pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
        alias: 'string',
        inside: {
          keyword: {
            pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
            lookbehind: !0,
          },
          punctuation: /;/,
        },
      },
      comment: [
        { pattern: /(^\s*|;\s*)\*.*;/m, lookbehind: !0 },
        /\/\*[\s\S]+?\*\//,
      ],
      datetime: { pattern: /'[^']+'(?:dt?|t)\b/i, alias: 'number' },
      string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
      keyword:
        /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
      number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
      operator:
        /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
      punctuation: /[$%@.(){}\[\];,\\]/,
    };
  }
  return (r = 1), (n = t), (t.displayName = 'sas'), (t.aliases = []), n;
})();
const i = e({ __proto__: null, default: t(a) }, [a]);
export { i as s };
