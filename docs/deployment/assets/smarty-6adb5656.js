import { bz as e } from './index-24a58ae8.js';
import { r as t } from './markup-templating-ec2e8fe9.js';
function r(e, t) {
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
var n, a;
var o = (function () {
  if (a) return n;
  a = 1;
  var e = t();
  function r(t) {
    var r;
    t.register(e),
      ((r = t).languages.smarty = {
        comment: /\{\*[\s\S]*?\*\}/,
        delimiter: { pattern: /^\{|\}$/i, alias: 'punctuation' },
        string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
        variable: [
          /\$(?!\d)\w+/,
          /#(?!\d)\w+#/,
          { pattern: /(\.|->)(?!\d)\w+/, lookbehind: !0 },
          { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 },
        ],
        function: [
          { pattern: /(\|\s*)@?(?!\d)\w+/, lookbehind: !0 },
          /^\/?(?!\d)\w+/,
          /(?!\d)\w+(?=\()/,
        ],
        'attr-name': {
          pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
          inside: {
            variable: { pattern: /(=\s*)(?!\d)\w+/, lookbehind: !0 },
            operator: /=/,
          },
        },
        punctuation: [/[\[\]().,:`]|->/],
        operator: [
          /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
          /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
          /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/,
        ],
        keyword: /\b(?:false|off|on|no|true|yes)\b/,
      }),
      r.hooks.add('before-tokenize', function (e) {
        var t = !1;
        r.languages['markup-templating'].buildPlaceholders(
          e,
          'smarty',
          /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,
          function (e) {
            return (
              '{/literal}' === e && (t = !1),
              !t && ('{literal}' === e && (t = !0), !0)
            );
          },
        );
      }),
      r.hooks.add('after-tokenize', function (e) {
        r.languages['markup-templating'].tokenizePlaceholders(e, 'smarty');
      });
  }
  return (n = r), (r.displayName = 'smarty'), (r.aliases = []), n;
})();
const i = r({ __proto__: null, default: e(o) }, [o]);
export { i as s };
