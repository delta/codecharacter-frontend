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
var i = (function () {
  if (a) return n;
  function e(e) {
    !(function (e) {
      e.languages.velocity = e.languages.extend('markup', {});
      var t = {
        variable: {
          pattern:
            /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
          lookbehind: !0,
          inside: {},
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        number: /\b\d+\b/,
        boolean: /\b(?:true|false)\b/,
        operator:
          /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
        punctuation: /[(){}[\]:,.]/,
      };
      (t.variable.inside = {
        string: t.string,
        function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: !0 },
        number: t.number,
        boolean: t.boolean,
        punctuation: t.punctuation,
      }),
        e.languages.insertBefore('velocity', 'comment', {
          unparsed: {
            pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^#\[\[|]]#$/ },
          },
          'velocity-comment': [
            {
              pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
              lookbehind: !0,
              greedy: !0,
              alias: 'comment',
            },
            {
              pattern: /(^|[^\\])##.*/,
              lookbehind: !0,
              greedy: !0,
              alias: 'comment',
            },
          ],
          directive: {
            pattern:
              /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
            lookbehind: !0,
            inside: {
              keyword: {
                pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
                inside: { punctuation: /[{}]/ },
              },
              rest: t,
            },
          },
          variable: t.variable,
        }),
        (e.languages.velocity.tag.inside['attr-value'].inside.rest =
          e.languages.velocity);
    })(e);
  }
  return (a = 1), (n = e), (e.displayName = 'velocity'), (e.aliases = []), n;
})();
const r = t({ __proto__: null, default: e(i) }, [i]);
export { r as v };