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
    e.languages.monkey = {
      string: /"[^"\r\n]*"/,
      comment: [
        { pattern: /^#Rem\s+[\s\S]*?^#End/im, greedy: !0 },
        { pattern: /'.+/, greedy: !0 },
      ],
      preprocessor: {
        pattern: /(^[ \t]*)#.+/m,
        lookbehind: !0,
        alias: 'comment',
      },
      function: /\w+(?=\()/,
      'type-char': { pattern: /(\w)[?%#$]/, lookbehind: !0, alias: 'variable' },
      number: {
        pattern:
          /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
        lookbehind: !0,
      },
      keyword:
        /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
      operator:
        /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
      punctuation: /[.,:;()\[\]]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'monkey'), (e.aliases = []), r;
})();
const a = t({ __proto__: null, default: e(o) }, [o]);
export { a as m };
