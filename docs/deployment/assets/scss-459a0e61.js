import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var a = (function () {
  if (n) return r;
  function e(e) {
    (e.languages.scss = e.languages.extend('css', {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      atrule: {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: { rule: /@[\w-]+/ },
      },
      url: /(?:[-a-z]+-)?url(?=\()/i,
      selector: {
        pattern:
          /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
          parent: { pattern: /&/, alias: 'important' },
          placeholder: /%[-\w]+/,
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        },
      },
      property: {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
      },
    })),
      e.languages.insertBefore('scss', 'atrule', {
        keyword: [
          /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
          { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
        ],
      }),
      e.languages.insertBefore('scss', 'important', {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/,
      }),
      e.languages.insertBefore('scss', 'function', {
        placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
        statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
        boolean: /\b(?:true|false)\b/,
        null: { pattern: /\bnull\b/, alias: 'keyword' },
        operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
          lookbehind: !0,
        },
      }),
      (e.languages.scss.atrule.inside.rest = e.languages.scss);
  }
  return (n = 1), (r = e), (e.displayName = 'scss'), (e.aliases = []), r;
})();
const s = t({ __proto__: null, default: e(a) }, [a]);
export { s };