import { bm as e } from './index-3b0785b0.js';
function a(e, a) {
  for (var t = 0; t < a.length; t++) {
    const r = a[t];
    if ('string' != typeof r && !Array.isArray(r))
      for (const a in r)
        if ('default' !== a && !(a in e)) {
          const t = Object.getOwnPropertyDescriptor(r, a);
          t &&
            Object.defineProperty(
              e,
              a,
              t.get ? t : { enumerable: !0, get: () => r[a] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, r;
var n = (function () {
  if (r) return t;
  function e(e) {
    var a;
    ((a = e).languages.flow = a.languages.extend('javascript', {})),
      a.languages.insertBefore('flow', 'keyword', {
        type: [
          {
            pattern:
              /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
            alias: 'tag',
          },
        ],
      }),
      (a.languages.flow['function-variable'].pattern =
        /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
      delete a.languages.flow.parameter,
      a.languages.insertBefore('flow', 'operator', {
        'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
      }),
      Array.isArray(a.languages.flow.keyword) ||
        (a.languages.flow.keyword = [a.languages.flow.keyword]),
      a.languages.flow.keyword.unshift(
        {
          pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
          lookbehind: !0,
        },
        {
          pattern:
            /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
          lookbehind: !0,
        },
      );
  }
  return (r = 1), (t = e), (e.displayName = 'flow'), (e.aliases = []), t;
})();
const o = a({ __proto__: null, default: e(n) }, [n]);
export { o as f };