import { bm as e } from './index-3b0785b0.js';
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
var a = (function () {
  if (n) return r;
  function e(e) {
    e.languages.elm = {
      comment: /--.*|{-[\s\S]*?-}/,
      char: {
        pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
        greedy: !0,
      },
      string: [
        { pattern: /"""[\s\S]*?"""/, greedy: !0 },
        {
          pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
          greedy: !0,
        },
      ],
      import_statement: {
        pattern:
          /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
        inside: { keyword: /\b(?:import|as|exposing)\b/ },
      },
      keyword:
        /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
      builtin:
        /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
      number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
      operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
      hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
      constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
      punctuation: /[{}[\]|(),.:]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'elm'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(a) }, [a]);
export { i as e };