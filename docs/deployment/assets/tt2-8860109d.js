import { bm as e } from './index-3b0785b0.js';
import { r as t } from './markup-templating-ec2e8fe9.js';
function r(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(a, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var a, n;
var i = (function () {
  if (n) return a;
  n = 1;
  var e = t();
  function r(t) {
    var r;
    t.register(e),
      ((r = t).languages.tt2 = r.languages.extend('clike', {
        comment: /#.*|\[%#[\s\S]*?%\]/,
        keyword:
          /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
        punctuation: /[[\]{},()]/,
      })),
      r.languages.insertBefore('tt2', 'number', {
        operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
        variable: { pattern: /[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i },
      }),
      r.languages.insertBefore('tt2', 'keyword', {
        delimiter: { pattern: /^(?:\[%|%%)-?|-?%]$/, alias: 'punctuation' },
      }),
      r.languages.insertBefore('tt2', 'string', {
        'single-quoted-string': {
          pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
          greedy: !0,
          alias: 'string',
        },
        'double-quoted-string': {
          pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
          greedy: !0,
          alias: 'string',
          inside: {
            variable: { pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i },
          },
        },
      }),
      delete r.languages.tt2.string,
      r.hooks.add('before-tokenize', function (e) {
        r.languages['markup-templating'].buildPlaceholders(
          e,
          'tt2',
          /\[%[\s\S]+?%\]/g,
        );
      }),
      r.hooks.add('after-tokenize', function (e) {
        r.languages['markup-templating'].tokenizePlaceholders(e, 'tt2');
      });
  }
  return (a = r), (r.displayName = 'tt2'), (r.aliases = []), a;
})();
const o = r({ __proto__: null, default: e(i) }, [i]);
export { o as t };