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
    e.languages.rip = {
      comment: /#.*/,
      keyword:
        /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
      builtin: /@|\bSystem\b/,
      boolean: /\b(?:true|false)\b/,
      date: /\b\d{4}-\d{2}-\d{2}\b/,
      time: /\b\d{2}:\d{2}:\d{2}\b/,
      datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
      character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
      regex: {
        pattern:
          /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0,
      },
      symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
      string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
      number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
      punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
      reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'rip'), (e.aliases = []), t;
})();
const i = r({ __proto__: null, default: e(a) }, [a]);
export { i as r };
