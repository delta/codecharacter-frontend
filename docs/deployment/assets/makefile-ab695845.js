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
var i = (function () {
  if (n) return t;
  function e(e) {
    e.languages.makefile = {
      comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: !0,
      },
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
      symbol: {
        pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
        inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
      },
      variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
      keyword: [
        /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
        {
          pattern:
            /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
          lookbehind: !0,
        },
      ],
      operator: /(?:::|[?:+!])?=|[|@]/,
      punctuation: /[:;(){}]/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'makefile'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(i) }, [i]);
export { a as m };
