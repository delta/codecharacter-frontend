import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var i = (function () {
  if (r) return n;
  function e(e) {
    (e.languages.livescript = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
        { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
      ],
      'interpolated-string': {
        pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          variable: {
            pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
            lookbehind: !0,
          },
          interpolation: {
            pattern: /(^|[^\\])#\{[^}]+\}/m,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^#\{|\}$/,
                alias: 'variable',
              },
            },
          },
          string: /[\s\S]+/,
        },
      },
      string: [
        { pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        { pattern: /<\[[\s\S]*?\]>/, greedy: !0 },
        /\\[^\s,;\])}]+/,
      ],
      regex: [
        {
          pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
          greedy: !0,
          inside: { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 } },
        },
        { pattern: /\/(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}/, greedy: !0 },
      ],
      keyword: {
        pattern:
          /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
        lookbehind: !0,
      },
      'keyword-operator': {
        pattern:
          /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
        lookbehind: !0,
        alias: 'operator',
      },
      boolean: {
        pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
        lookbehind: !0,
      },
      argument: {
        pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
        lookbehind: !0,
        alias: 'variable',
      },
      number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
      identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
      operator: [
        { pattern: /( )\.(?= )/, lookbehind: !0 },
        /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/,
      ],
      punctuation: /[(){}\[\]|.,:;`]/,
    }),
      (e.languages.livescript[
        'interpolated-string'
      ].inside.interpolation.inside.rest = e.languages.livescript);
  }
  return (r = 1), (n = e), (e.displayName = 'livescript'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(i) }, [i]);
export { o as l };