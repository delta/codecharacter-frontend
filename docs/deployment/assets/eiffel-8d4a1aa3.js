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
    e.languages.eiffel = {
      comment: /--.*/,
      string: [
        { pattern: /"([^[]*)\[[\s\S]*?\]\1"/, greedy: !0 },
        { pattern: /"([^{]*)\{[\s\S]*?\}\1"/, greedy: !0 },
        { pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/, greedy: !0 },
      ],
      char: /'(?:%.|[^%'\r\n])+'/,
      keyword:
        /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
      boolean: /\b(?:True|False)\b/i,
      'class-name': { pattern: /\b[A-Z][\dA-Z_]*\b/, alias: 'builtin' },
      number: [
        /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
        /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i,
      ],
      punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
      operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'eiffel'), (e.aliases = []), t;
})();
const o = r({ __proto__: null, default: e(a) }, [a]);
export { o as e };
