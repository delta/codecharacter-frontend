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
    e.languages.brainfuck = {
      pointer: { pattern: /<|>/, alias: 'keyword' },
      increment: { pattern: /\+/, alias: 'inserted' },
      decrement: { pattern: /-/, alias: 'deleted' },
      branching: { pattern: /\[|\]/, alias: 'important' },
      operator: /[.,]/,
      comment: /\S+/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'brainfuck'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(a) }, [a]);
export { i as b };