import { bm as e } from './index-3b0785b0.js';
function n(e, n) {
  for (var t = 0; t < n.length; t++) {
    const a = n[t];
    if ('string' != typeof a && !Array.isArray(a))
      for (const n in a)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(a, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => a[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, a;
var r = (function () {
  if (a) return t;
  function e(e) {
    var n, t;
    (t = (n = e).languages.parser =
      n.languages.extend('markup', {
        keyword: {
          pattern:
            /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
          lookbehind: !0,
        },
        variable: {
          pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
          lookbehind: !0,
          inside: { punctuation: /\.|:+/ },
        },
        function: {
          pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
          lookbehind: !0,
          inside: {
            keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: !0 },
            punctuation: /\.|:+/,
          },
        },
        escape: {
          pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
          alias: 'builtin',
        },
        punctuation: /[\[\](){};]/,
      })),
      (t = n.languages.insertBefore('parser', 'keyword', {
        'parser-comment': {
          pattern: /(\s)#.*/,
          lookbehind: !0,
          alias: 'comment',
        },
        expression: {
          pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
          greedy: !0,
          lookbehind: !0,
          inside: {
            string: {
              pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
              lookbehind: !0,
            },
            keyword: t.keyword,
            variable: t.variable,
            function: t.function,
            boolean: /\b(?:true|false)\b/,
            number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
            escape: t.escape,
            operator:
              /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
            punctuation: t.punctuation,
          },
        },
      })),
      (t = n.languages.insertBefore(
        'inside',
        'punctuation',
        {
          expression: t.expression,
          keyword: t.keyword,
          variable: t.variable,
          function: t.function,
          escape: t.escape,
          'parser-punctuation': {
            pattern: t.punctuation,
            alias: 'punctuation',
          },
        },
        t.tag.inside['attr-value'],
      ));
  }
  return (a = 1), (t = e), (e.displayName = 'parser'), (e.aliases = []), t;
})();
const i = n({ __proto__: null, default: e(r) }, [r]);
export { i as p };