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
var s = (function () {
  if (r) return n;
  function e(e) {
    (e.languages.css.selector = {
      pattern: e.languages.css.selector,
      inside: {
        'pseudo-element':
          /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        'pseudo-class': /:[-\w]+/,
        class: /\.[-:.\w]+/,
        id: /#[-:.\w]+/,
        attribute: {
          pattern:
            /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
          greedy: !0,
          inside: {
            punctuation: /^\[|\]$/,
            'case-sensitivity': {
              pattern: /(\s)[si]$/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            namespace: {
              pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
              lookbehind: !0,
              inside: { punctuation: /\|$/ },
            },
            attribute: { pattern: /^(\s*)[-\w\xA0-\uFFFF]+/, lookbehind: !0 },
            value: [
              /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              { pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 },
            ],
            operator: /[|~*^$]?=/,
          },
        },
        'n-th': [
          {
            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
            lookbehind: !0,
            inside: { number: /[\dn]+/, operator: /[+-]/ },
          },
          { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
        ],
        punctuation: /[()]/,
      },
    }),
      e.languages.insertBefore('css', 'property', {
        variable: {
          pattern:
            /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
          lookbehind: !0,
        },
      }),
      e.languages.insertBefore('css', 'function', {
        operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
        hexcode: /#[\da-f]{3,8}/i,
        entity: /\\[\da-f]{1,8}/i,
        unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
        number: /-?[\d.]+/,
      });
  }
  return (r = 1), (n = e), (e.displayName = 'cssExtras'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(s) }, [s]);
export { o as c };