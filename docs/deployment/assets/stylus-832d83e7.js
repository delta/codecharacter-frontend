import { bz as t } from './index-24a58ae8.js';
function n(t, n) {
  for (var e = 0; e < n.length; e++) {
    const r = n[e];
    if ('string' != typeof r && !Array.isArray(r))
      for (const n in r)
        if ('default' !== n && !(n in t)) {
          const e = Object.getOwnPropertyDescriptor(r, n);
          e &&
            Object.defineProperty(
              t,
              n,
              e.get ? e : { enumerable: !0, get: () => r[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var e, r;
var i = (function () {
  if (r) return e;
  function t(t) {
    var n, e;
    (n = t),
      ((e = {
        url: /url\((["']?).*?\1\)/i,
        string: {
          pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          greedy: !0,
        },
        interpolation: null,
        func: null,
        important: /\B!(?:important|optional)\b/i,
        keyword: {
          pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
          lookbehind: !0,
        },
        hexcode: /#[\da-f]{3,6}/i,
        number: /\b\d+(?:\.\d+)?%?/,
        boolean: /\b(?:true|false)\b/,
        operator: [
          /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
        ],
        punctuation: /[{}()\[\];:,]/,
      }).interpolation = {
        pattern: /\{[^\r\n}:]+\}/,
        alias: 'variable',
        inside: {
          delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
          rest: e,
        },
      }),
      (e.func = {
        pattern: /[\w-]+\([^)]*\).*/,
        inside: { function: /^[^(]+/, rest: e },
      }),
      (n.languages.stylus = {
        comment: {
          pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: !0,
        },
        'atrule-declaration': {
          pattern: /(^\s*)@.+/m,
          lookbehind: !0,
          inside: { atrule: /^@[\w-]+/, rest: e },
        },
        'variable-declaration': {
          pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
          lookbehind: !0,
          inside: { variable: /^\S+/, rest: e },
        },
        statement: {
          pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
          lookbehind: !0,
          inside: { keyword: /^\S+/, rest: e },
        },
        'property-declaration': {
          pattern:
            /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
          lookbehind: !0,
          inside: {
            property: {
              pattern: /^[^\s:]+/,
              inside: { interpolation: e.interpolation },
            },
            rest: e,
          },
        },
        selector: {
          pattern:
            /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
          lookbehind: !0,
          inside: { interpolation: e.interpolation, punctuation: /[{},]/ },
        },
        func: e.func,
        string: e.string,
        interpolation: e.interpolation,
        punctuation: /[{}()\[\];:.]/,
      });
  }
  return (r = 1), (e = t), (t.displayName = 'stylus'), (t.aliases = []), e;
})();
const o = n({ __proto__: null, default: t(i) }, [i]);
export { o as s };
