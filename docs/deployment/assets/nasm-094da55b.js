import { bz as e } from './index-24a58ae8.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const r in n)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(n, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => n[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var a = (function () {
  if (n) return t;
  function e(e) {
    e.languages.nasm = {
      comment: /;.*$/m,
      string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      label: {
        pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
        lookbehind: !0,
        alias: 'function',
      },
      keyword: [
        /\[?BITS (?:16|32|64)\]?/,
        { pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im, lookbehind: !0 },
        /(?:extern|global)[^;\r\n]*/i,
        /(?:CPU|FLOAT|DEFAULT).*$/m,
      ],
      register: {
        pattern:
          /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
        alias: 'variable',
      },
      number:
        /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
      operator: /[\[\]*+\-\/%<>=&|$!]/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'nasm'), (e.aliases = []), t;
})();
const d = r({ __proto__: null, default: e(a) }, [a]);
export { d as n };
