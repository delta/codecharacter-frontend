import { bz as e } from './index-24a58ae8.js';
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
var a = (function () {
  if (r) return n;
  function e(e) {
    (e.languages.reason = e.languages.extend('clike', {
      comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
      string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
      'class-name': /\b[A-Z]\w*/,
      keyword:
        /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
      operator:
        /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
    })),
      e.languages.insertBefore('reason', 'class-name', {
        character: {
          pattern:
            /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
          alias: 'string',
        },
        constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
        label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
      }),
      delete e.languages.reason.function;
  }
  return (r = 1), (n = e), (e.displayName = 'reason'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as r };
