import { bm as e } from './index-3b0785b0.js';
function a(e, a) {
  for (var t = 0; t < a.length; t++) {
    const n = a[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const a in n)
        if ('default' !== a && !(a in e)) {
          const t = Object.getOwnPropertyDescriptor(n, a);
          t &&
            Object.defineProperty(
              e,
              a,
              t.get ? t : { enumerable: !0, get: () => n[a] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var r = (function () {
  if (n) return t;
  function e(e) {
    var a, t, n;
    (n = {
      'equation-command': {
        pattern: (t = /\\(?:[^a-z()[\]]|[a-z*]+)/i),
        alias: 'regex',
      },
    }),
      ((a = e).languages.latex = {
        comment: /%.*/m,
        cdata: {
          pattern:
            /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: !0,
        },
        equation: [
          {
            pattern:
              /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: 'string',
          },
          {
            pattern:
              /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: 'string',
          },
        ],
        keyword: {
          pattern:
            /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
          lookbehind: !0,
        },
        url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
        headline: {
          pattern:
            /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
          lookbehind: !0,
          alias: 'class-name',
        },
        function: { pattern: t, alias: 'selector' },
        punctuation: /[[\]{}&]/,
      }),
      (a.languages.tex = a.languages.latex),
      (a.languages.context = a.languages.latex);
  }
  return (
    (n = 1),
    (t = e),
    (e.displayName = 'latex'),
    (e.aliases = ['tex', 'context']),
    t
  );
})();
const i = a({ __proto__: null, default: e(r) }, [r]);
export { i as l };