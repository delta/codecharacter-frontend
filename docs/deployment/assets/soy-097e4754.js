import { bm as e } from './index-3b0785b0.js';
import { r as t } from './markup-templating-ec2e8fe9.js';
function a(e, t) {
  for (var a = 0; a < t.length; a++) {
    const r = t[a];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a &&
            Object.defineProperty(
              e,
              t,
              a.get ? a : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var l = (function () {
  if (n) return r;
  n = 1;
  var e = t();
  function a(t) {
    var a, r, n;
    t.register(e),
      (r = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/),
      (n = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/),
      ((a = t).languages.soy = {
        comment: [
          /\/\*[\s\S]*?\*\//,
          { pattern: /(\s)\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        'command-arg': {
          pattern:
            /({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
          lookbehind: !0,
          alias: 'string',
          inside: { punctuation: /\./ },
        },
        parameter: {
          pattern: /({+\/?\s*@?param\??\s+)\.?[\w.]+/,
          lookbehind: !0,
          alias: 'variable',
        },
        keyword: [
          {
            pattern:
              /({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
            lookbehind: !0,
          },
          /\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/,
        ],
        delimiter: { pattern: /^{+\/?|\/?}+$/, alias: 'punctuation' },
        property: /\w+(?==)/,
        variable: {
          pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,
          inside: {
            string: { pattern: r, greedy: !0 },
            number: n,
            punctuation: /[\[\].?]/,
          },
        },
        string: { pattern: r, greedy: !0 },
        function: [
          /\w+(?=\()/,
          { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: !0 },
        ],
        boolean: /\b(?:true|false)\b/,
        number: n,
        operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
        punctuation: /[{}()\[\]|.,:]/,
      }),
      a.hooks.add('before-tokenize', function (e) {
        var t = !1;
        a.languages['markup-templating'].buildPlaceholders(
          e,
          'soy',
          /{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,
          function (e) {
            return (
              '{/literal}' === e && (t = !1),
              !t && ('{literal}' === e && (t = !0), !0)
            );
          },
        );
      }),
      a.hooks.add('after-tokenize', function (e) {
        a.languages['markup-templating'].tokenizePlaceholders(e, 'soy');
      });
  }
  return (r = a), (a.displayName = 'soy'), (a.aliases = []), r;
})();
const i = a({ __proto__: null, default: e(l) }, [l]);
export { i as s };