import { bm as e } from './index-3b0785b0.js';
import { r as a } from './markup-templating-ec2e8fe9.js';
function t(e, a) {
  for (var t = 0; t < a.length; t++) {
    const r = a[t];
    if ('string' != typeof r && !Array.isArray(r))
      for (const a in r)
        if ('default' !== a && !(a in e)) {
          const t = Object.getOwnPropertyDescriptor(r, a);
          t &&
            Object.defineProperty(
              e,
              a,
              t.get ? t : { enumerable: !0, get: () => r[a] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var o = (function () {
  if (n) return r;
  n = 1;
  var e = a();
  function t(a) {
    var t;
    a.register(e),
      ((t = a).languages.handlebars = {
        comment: /\{\{![\s\S]*?\}\}/,
        delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
        string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        boolean: /\b(?:true|false)\b/,
        block: {
          pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
          lookbehind: !0,
          alias: 'keyword',
        },
        brackets: {
          pattern: /\[[^\]]+\]/,
          inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
        },
        punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
        variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
      }),
      t.hooks.add('before-tokenize', function (e) {
        t.languages['markup-templating'].buildPlaceholders(
          e,
          'handlebars',
          /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g,
        );
      }),
      t.hooks.add('after-tokenize', function (e) {
        t.languages['markup-templating'].tokenizePlaceholders(e, 'handlebars');
      });
  }
  return (r = t), (t.displayName = 'handlebars'), (t.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(o) }, [o]);
export { i as h };