import { bm as e } from './index-3b0785b0.js';
import { r as n } from './markup-templating-ec2e8fe9.js';
function t(e, n) {
  for (var t = 0; t < n.length; t++) {
    const o = n[t];
    if ('string' != typeof o && !Array.isArray(o))
      for (const n in o)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(o, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => o[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o, a;
var r = (function () {
  if (a) return o;
  a = 1;
  var e = n();
  function t(n) {
    n.register(e),
      (function (e) {
        e.languages.django = {
          comment: /^{#[\s\S]*?#}$/,
          tag: {
            pattern: /(^{%[+-]?\s*)\w+/,
            lookbehind: !0,
            alias: 'keyword',
          },
          delimiter: {
            pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
            alias: 'punctuation',
          },
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          filter: { pattern: /(\|)\w+/, lookbehind: !0, alias: 'function' },
          test: {
            pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
            lookbehind: !0,
            alias: 'function',
          },
          function: /\b[a-z_]\w+(?=\s*\()/i,
          keyword:
            /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
          operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          number: /\b\d+(?:\.\d+)?\b/,
          boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
          variable: /\b\w+?\b/,
          punctuation: /[{}[\](),.:;]/,
        };
        var n = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,
          t = e.languages['markup-templating'];
        e.hooks.add('before-tokenize', function (e) {
          t.buildPlaceholders(e, 'django', n);
        }),
          e.hooks.add('after-tokenize', function (e) {
            t.tokenizePlaceholders(e, 'django');
          }),
          (e.languages.jinja2 = e.languages.django),
          e.hooks.add('before-tokenize', function (e) {
            t.buildPlaceholders(e, 'jinja2', n);
          }),
          e.hooks.add('after-tokenize', function (e) {
            t.tokenizePlaceholders(e, 'jinja2');
          });
      })(n);
  }
  return (o = t), (t.displayName = 'django'), (t.aliases = ['jinja2']), o;
})();
const i = t({ __proto__: null, default: e(r) }, [r]);
export { i as d };