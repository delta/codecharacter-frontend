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
    (e.languages.less = e.languages.extend('css', {
      comment: [
        /\/\*[\s\S]*?\*\//,
        { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
      ],
      atrule: {
        pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
        inside: { punctuation: /[:()]/ },
      },
      selector: {
        pattern:
          /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
        inside: { variable: /@+[\w-]+/ },
      },
      property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
      operator: /[+\-*\/]/,
    })),
      e.languages.insertBefore('less', 'property', {
        variable: [
          { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
          /@@?[\w-]+/,
        ],
        'mixin-usage': {
          pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
          lookbehind: !0,
          alias: 'function',
        },
      });
  }
  return (n = 1), (r = e), (e.displayName = 'less'), (e.aliases = []), r;
})();
const s = t({ __proto__: null, default: e(a) }, [a]);
export { s as l };