import { bz as e } from './index-24a58ae8.js';
function r(e, r) {
  for (var n = 0; n < r.length; n++) {
    const t = r[n];
    if ('string' != typeof t && !Array.isArray(t))
      for (const r in t)
        if ('default' !== r && !(r in e)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n &&
            Object.defineProperty(
              e,
              r,
              n.get ? n : { enumerable: !0, get: () => t[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, t;
var a = (function () {
  if (t) return n;
  function e(e) {
    (e.languages.elixir = {
      comment: /#.*/m,
      regex: {
        pattern:
          /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
        greedy: !0,
      },
      string: [
        {
          pattern:
            /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
          greedy: !0,
          inside: {},
        },
        { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
        {
          pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0,
          inside: {},
        },
      ],
      atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: 'symbol' },
      'attr-name': /\w+:(?!:)/,
      capture: {
        pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
        lookbehind: !0,
        alias: 'function',
      },
      argument: { pattern: /(^|[^&])&\d+/, lookbehind: !0, alias: 'variable' },
      attribute: { pattern: /@\w+/, alias: 'variable' },
      number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
      keyword:
        /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
      boolean: /\b(?:true|false|nil)\b/,
      operator: [
        /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
        { pattern: /([^<])<(?!<)/, lookbehind: !0 },
        { pattern: /([^>])>(?!>)/, lookbehind: !0 },
      ],
      punctuation: /<<|>>|[.,%\[\]{}()]/,
    }),
      e.languages.elixir.string.forEach(function (r) {
        r.inside = {
          interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
              rest: e.languages.elixir,
            },
          },
        };
      });
  }
  return (t = 1), (n = e), (e.displayName = 'elixir'), (e.aliases = []), n;
})();
const i = r({ __proto__: null, default: e(a) }, [a]);
export { i as e };
