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
    !(function (e) {
      (e.languages.sass = e.languages.extend('css', {
        comment: {
          pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
          lookbehind: !0,
        },
      })),
        e.languages.insertBefore('sass', 'atrule', {
          'atrule-line': {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            inside: { atrule: /(?:@[\w-]+|[+=])/m },
          },
        }),
        delete e.languages.sass.atrule;
      var t = /\$[-\w]+|#\{\$[-\w]+\}/,
        r = [
          /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
          { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
        ];
      e.languages.insertBefore('sass', 'property', {
        'variable-line': {
          pattern: /^[ \t]*\$.+/m,
          inside: { punctuation: /:/, variable: t, operator: r },
        },
        'property-line': {
          pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
          inside: {
            property: [
              /[^:\s]+(?=\s*:)/,
              { pattern: /(:)[^:\s]+/, lookbehind: !0 },
            ],
            punctuation: /:/,
            variable: t,
            operator: r,
            important: e.languages.sass.important,
          },
        },
      }),
        delete e.languages.sass.property,
        delete e.languages.sass.important,
        e.languages.insertBefore('sass', 'punctuation', {
          selector: {
            pattern:
              /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
            lookbehind: !0,
          },
        });
    })(e);
  }
  return (n = 1), (r = e), (e.displayName = 'sass'), (e.aliases = []), r;
})();
const s = t({ __proto__: null, default: e(a) }, [a]);
export { s };