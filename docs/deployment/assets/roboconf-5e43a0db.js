import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var r = 0; r < e.length; r++) {
    const o = e[r];
    if ('string' != typeof o && !Array.isArray(o))
      for (const e in o)
        if ('default' !== e && !(e in t)) {
          const r = Object.getOwnPropertyDescriptor(o, e);
          r &&
            Object.defineProperty(
              t,
              e,
              r.get ? r : { enumerable: !0, get: () => o[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, o;
var n = (function () {
  if (o) return r;
  function t(t) {
    t.languages.roboconf = {
      comment: /#.*/,
      keyword: {
        pattern:
          /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
        lookbehind: !0,
      },
      component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: 'variable' },
      property: /[\w.-]+(?=[ \t]*:)/,
      value: {
        pattern: /(=[ \t]*)[^,;]+/,
        lookbehind: !0,
        alias: 'attr-value',
      },
      optional: { pattern: /\(optional\)/, alias: 'builtin' },
      wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: 'operator' },
      punctuation: /[{},.;:=]/,
    };
  }
  return (o = 1), (r = t), (t.displayName = 'roboconf'), (t.aliases = []), r;
})();
const a = e({ __proto__: null, default: t(n) }, [n]);
export { a as r };
