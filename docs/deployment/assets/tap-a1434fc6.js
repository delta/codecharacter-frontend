import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var a = (function () {
  if (r) return n;
  function e(e) {
    e.languages.tap = {
      fail: /not ok[^#{\n\r]*/,
      pass: /ok[^#{\n\r]*/,
      pragma: /pragma [+-][a-z]+/,
      bailout: /bail out!.*/i,
      version: /TAP version \d+/i,
      plan: /\d+\.\.\d+(?: +#.*)?/,
      subtest: { pattern: /# Subtest(?:: .*)?/, greedy: !0 },
      punctuation: /[{}]/,
      directive: /#.*/,
      yamlish: {
        pattern:
          /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
        lookbehind: !0,
        inside: e.languages.yaml,
        alias: 'language-yaml',
      },
    };
  }
  return (r = 1), (n = e), (e.displayName = 'tap'), (e.aliases = []), n;
})();
const i = t({ __proto__: null, default: e(a) }, [a]);
export { i as t };