import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, a;
var r = (function () {
  if (a) return n;
  function e(e) {
    (e.languages.csharp = e.languages.extend('clike', {
      keyword:
        /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
      string: [
        { pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 },
      ],
      'class-name': [
        {
          pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
          inside: { punctuation: /\./ },
        },
        {
          pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
        {
          pattern:
            /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
        {
          pattern:
            /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
      ],
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
      operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
      punctuation: /\?\.?|::|[{}[\];(),.:]/,
    })),
      e.languages.insertBefore('csharp', 'class-name', {
        'generic-method': {
          pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
          inside: {
            function: /^\w+/,
            'class-name': {
              pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
              inside: { punctuation: /\./ },
            },
            keyword: e.languages.csharp.keyword,
            punctuation: /[<>(),.:]/,
          },
        },
        preprocessor: {
          pattern: /(^\s*)#.*/m,
          lookbehind: !0,
          alias: 'property',
          inside: {
            directive: {
              pattern:
                /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
              lookbehind: !0,
              alias: 'keyword',
            },
          },
        },
      }),
      (e.languages.dotnet = e.languages.cs = e.languages.csharp);
  }
  return (
    (a = 1),
    (n = e),
    (e.displayName = 'csharp'),
    (e.aliases = ['dotnet', 'cs']),
    n
  );
})();
const i = t({ __proto__: null, default: e(r) }, [r]);
export { i as c };