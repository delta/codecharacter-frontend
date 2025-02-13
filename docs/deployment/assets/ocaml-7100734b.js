import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var o = (function () {
  if (n) return r;
  function e(e) {
    e.languages.ocaml = {
      comment: /\(\*[\s\S]*?\*\)/,
      string: [
        { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
        {
          pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
          greedy: !0,
        },
      ],
      number:
        /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
      type: { pattern: /\B['`]\w*/, alias: 'variable' },
      directive: { pattern: /\B#\w+/, alias: 'function' },
      keyword:
        /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
      boolean: /\b(?:false|true)\b/,
      operator:
        /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
      punctuation: /[(){}\[\]|_.,:;]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'ocaml'), (e.aliases = []), r;
})();
const a = t({ __proto__: null, default: e(o) }, [o]);
export { a as o };
