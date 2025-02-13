import { bz as t } from './index-24a58ae8.js';
function n(t, n) {
  for (var e = 0; e < n.length; e++) {
    const a = n[e];
    if ('string' != typeof a && !Array.isArray(a))
      for (const n in a)
        if ('default' !== n && !(n in t)) {
          const e = Object.getOwnPropertyDescriptor(a, n);
          e &&
            Object.defineProperty(
              t,
              n,
              e.get ? e : { enumerable: !0, get: () => a[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var e, a;
var i = (function () {
  if (a) return e;
  function t(t) {
    var n;
    ((n = t).languages.xeora = n.languages.extend('markup', {
      constant: {
        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
        inside: { punctuation: { pattern: /\$/ } },
      },
      variable: {
        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
        inside: {
          punctuation: { pattern: /[$.]/ },
          operator: { pattern: /#+|[-+*~=^@]/ },
        },
      },
      'function-inline': {
        pattern:
          /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
        inside: {
          variable: {
            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
            inside: {
              punctuation: { pattern: /[,.|]/ },
              operator: { pattern: /#+|[-+*~=^@]/ },
            },
          },
          punctuation: { pattern: /\$\w:|[$:?.,|]/ },
        },
        alias: 'function',
      },
      'function-block': {
        pattern:
          /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
        inside: { punctuation: { pattern: /[$:{}?.,|]/ } },
        alias: 'function',
      },
      'directive-inline': {
        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: { tag: { pattern: /#\d/ } },
          },
        },
        alias: 'function',
      },
      'directive-block-open': {
        pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: { tag: { pattern: /#\d/ } },
          },
          attribute: {
            pattern: /![A-Z]+$/,
            inside: { punctuation: { pattern: /!/ } },
            alias: 'keyword',
          },
        },
        alias: 'function',
      },
      'directive-block-separator': {
        pattern: /}:[-\w.]+:{/,
        inside: { punctuation: { pattern: /[:{}]/ } },
        alias: 'function',
      },
      'directive-block-close': {
        pattern: /}:[-\w.]+\$/,
        inside: { punctuation: { pattern: /[:{}$]/ } },
        alias: 'function',
      },
    })),
      n.languages.insertBefore(
        'inside',
        'punctuation',
        { variable: n.languages.xeora['function-inline'].inside.variable },
        n.languages.xeora['function-block'],
      ),
      (n.languages.xeoracube = n.languages.xeora);
  }
  return (
    (a = 1), (e = t), (t.displayName = 'xeora'), (t.aliases = ['xeoracube']), e
  );
})();
const r = n({ __proto__: null, default: t(i) }, [i]);
export { r as x };
