import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if ('string' != typeof i && !Array.isArray(i))
      for (const t in i)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(i, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => i[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, i;
var a = (function () {
  if (i) return n;
  function e(e) {
    !(function (e) {
      e.languages.puppet = {
        heredoc: [
          {
            pattern:
              /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
            lookbehind: !0,
            alias: 'string',
            inside: { punctuation: /(?=\S).*\S(?= *$)/ },
          },
          {
            pattern:
              /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
            lookbehind: !0,
            greedy: !0,
            alias: 'string',
            inside: { punctuation: /(?=\S).*\S(?= *$)/ },
          },
          {
            pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
            alias: 'string',
            inside: {
              punctuation: { pattern: /(\().+?(?=\))/, lookbehind: !0 },
            },
          },
        ],
        'multiline-comment': {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: !0,
          greedy: !0,
          alias: 'comment',
        },
        regex: {
          pattern:
            /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            'extended-regex': {
              pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
              inside: { comment: /#.*/ },
            },
          },
        },
        comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
        string: {
          pattern:
            /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
          greedy: !0,
          inside: { 'double-quoted': { pattern: /^"[\s\S]*"$/, inside: {} } },
        },
        variable: {
          pattern: /\$(?:::)?\w+(?:::\w+)*/,
          inside: { punctuation: /::/ },
        },
        'attr-name': /(?:\w+|\*)(?=\s*=>)/,
        function: [
          { pattern: /(\.)(?!\d)\w+/, lookbehind: !0 },
          /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/,
        ],
        number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
        boolean: /\b(?:true|false)\b/,
        keyword:
          /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
        datatype: {
          pattern:
            /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
          alias: 'symbol',
        },
        operator:
          /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
        punctuation: /[\[\]{}().,;]|:+/,
      };
      var t = [
        {
          pattern:
            /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
          lookbehind: !0,
          inside: {
            'short-variable': {
              pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
              lookbehind: !0,
              alias: 'variable',
              inside: { punctuation: /::/ },
            },
            delimiter: { pattern: /^\$/, alias: 'variable' },
            rest: e.languages.puppet,
          },
        },
        {
          pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
          lookbehind: !0,
          alias: 'variable',
          inside: { punctuation: /::/ },
        },
      ];
      (e.languages.puppet.heredoc[0].inside.interpolation = t),
        (e.languages.puppet.string.inside[
          'double-quoted'
        ].inside.interpolation = t);
    })(e);
  }
  return (i = 1), (n = e), (e.displayName = 'puppet'), (e.aliases = []), n;
})();
const r = t({ __proto__: null, default: e(a) }, [a]);
export { r as p };
