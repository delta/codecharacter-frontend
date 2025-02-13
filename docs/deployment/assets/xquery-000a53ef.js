import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => a[t] },
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
  function e(e) {
    !(function (e) {
      (e.languages.xquery = e.languages.extend('markup', {
        'xquery-comment': {
          pattern: /\(:[\s\S]*?:\)/,
          greedy: !0,
          alias: 'comment',
        },
        string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
        extension: { pattern: /\(#.+?#\)/, alias: 'symbol' },
        variable: /\$[\w-:]+/,
        axis: {
          pattern:
            /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
          lookbehind: !0,
          alias: 'operator',
        },
        'keyword-operator': {
          pattern:
            /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
          lookbehind: !0,
          alias: 'operator',
        },
        keyword: {
          pattern:
            /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
          lookbehind: !0,
        },
        function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
        'xquery-element': {
          pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
          lookbehind: !0,
          alias: 'tag',
        },
        'xquery-attribute': {
          pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
          lookbehind: !0,
          alias: 'attr-name',
        },
        builtin: {
          pattern:
            /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
          lookbehind: !0,
        },
        number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
        operator: [
          /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
          { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
        ],
        punctuation: /[[\](){},;:/]/,
      })),
        (e.languages.xquery.tag.pattern =
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
        (e.languages.xquery.tag.inside['attr-value'].pattern =
          /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i),
        (e.languages.xquery.tag.inside['attr-value'].inside.punctuation =
          /^="|"$/),
        (e.languages.xquery.tag.inside['attr-value'].inside.expression = {
          pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,
          inside: { rest: e.languages.xquery },
          alias: 'language-xquery',
        });
      var t = function (e) {
          return 'string' == typeof e
            ? e
            : 'string' == typeof e.content
            ? e.content
            : e.content.map(t).join('');
        },
        n = function (a) {
          for (var o = [], r = 0; r < a.length; r++) {
            var i = a[r],
              s = !1;
            if (
              ('string' != typeof i &&
                ('tag' === i.type && i.content[0] && 'tag' === i.content[0].type
                  ? '</' === i.content[0].content[0].content
                    ? o.length > 0 &&
                      o[o.length - 1].tagName === t(i.content[0].content[1]) &&
                      o.pop()
                    : '/>' === i.content[i.content.length - 1].content ||
                      o.push({
                        tagName: t(i.content[0].content[1]),
                        openedBraces: 0,
                      })
                  : !(
                      o.length > 0 &&
                      'punctuation' === i.type &&
                      '{' === i.content
                    ) ||
                    (a[r + 1] &&
                      'punctuation' === a[r + 1].type &&
                      '{' === a[r + 1].content) ||
                    (a[r - 1] &&
                      'plain-text' === a[r - 1].type &&
                      '{' === a[r - 1].content)
                  ? o.length > 0 &&
                    o[o.length - 1].openedBraces > 0 &&
                    'punctuation' === i.type &&
                    '}' === i.content
                    ? o[o.length - 1].openedBraces--
                    : 'comment' !== i.type && (s = !0)
                  : o[o.length - 1].openedBraces++),
              (s || 'string' == typeof i) &&
                o.length > 0 &&
                0 === o[o.length - 1].openedBraces)
            ) {
              var l = t(i);
              r < a.length - 1 &&
                ('string' == typeof a[r + 1] ||
                  'plain-text' === a[r + 1].type) &&
                ((l += t(a[r + 1])), a.splice(r + 1, 1)),
                r > 0 &&
                  ('string' == typeof a[r - 1] ||
                    'plain-text' === a[r - 1].type) &&
                  ((l = t(a[r - 1]) + l), a.splice(r - 1, 1), r--),
                /^\s+$/.test(l)
                  ? (a[r] = l)
                  : (a[r] = new e.Token('plain-text', l, null, l));
            }
            i.content && 'string' != typeof i.content && n(i.content);
          }
        };
      e.hooks.add('after-tokenize', function (e) {
        'xquery' === e.language && n(e.tokens);
      });
    })(e);
  }
  return (a = 1), (n = e), (e.displayName = 'xquery'), (e.aliases = []), n;
})();
const r = t({ __proto__: null, default: e(o) }, [o]);
export { r as x };
