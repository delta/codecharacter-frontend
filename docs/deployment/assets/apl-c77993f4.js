import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const e in r)
        if ('default' !== e && !(e in t)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n &&
            Object.defineProperty(
              t,
              e,
              n.get ? n : { enumerable: !0, get: () => r[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var a = (function () {
  if (r) return n;
  function t(t) {
    t.languages.apl = {
      comment: /(?:⍝|#[! ]).*$/m,
      string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 },
      number:
        /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
      statement: /:[A-Z][a-z][A-Za-z]*\b/,
      'system-function': { pattern: /⎕[A-Z]+/i, alias: 'function' },
      constant: /[⍬⌾#⎕⍞]/,
      function:
        /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
      'monadic-operator': { pattern: /[\\\/⌿⍀¨⍨⌶&∥]/, alias: 'operator' },
      'dyadic-operator': { pattern: /[.⍣⍠⍤∘⌸@⌺]/, alias: 'operator' },
      assignment: { pattern: /←/, alias: 'keyword' },
      punctuation: /[\[;\]()◇⋄]/,
      dfn: { pattern: /[{}⍺⍵⍶⍹∇⍫:]/, alias: 'builtin' },
    };
  }
  return (r = 1), (n = t), (t.displayName = 'apl'), (t.aliases = []), n;
})();
const o = e({ __proto__: null, default: t(a) }, [a]);
export { o as a };
