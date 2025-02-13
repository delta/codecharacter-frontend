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
var a = (function () {
  if (n) return r;
  function e(e) {
    e.languages.rust = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
      ],
      string: [
        { pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, greedy: !0 },
        { pattern: /b?"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
      ],
      char: {
        pattern:
          /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
        alias: 'string',
      },
      'lifetime-annotation': { pattern: /'[^\s>']+/, alias: 'symbol' },
      keyword:
        /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      attribute: { pattern: /#!?\[.+?\]/, greedy: !0, alias: 'attr-name' },
      function: [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/],
      'macro-rules': { pattern: /\w+!/, alias: 'function' },
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
      'closure-params': {
        pattern: /\|[^|]*\|(?=\s*[{-])/,
        inside: { punctuation: /[|:,]/, operator: /[&*]/ },
      },
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'rust'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as r };
