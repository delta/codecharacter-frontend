import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const e in n)
        if ('default' !== e && !(e in t)) {
          const r = Object.getOwnPropertyDescriptor(n, e);
          r &&
            Object.defineProperty(
              t,
              e,
              r.get ? r : { enumerable: !0, get: () => n[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var o = (function () {
  if (n) return r;
  function t(t) {
    t.languages.properties = {
      comment: /^[ \t]*[#!].*$/m,
      'attr-value': {
        pattern:
          /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: !0,
      },
      'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
      punctuation: /[=:]/,
    };
  }
  return (n = 1), (r = t), (t.displayName = 'properties'), (t.aliases = []), r;
})();
const a = e({ __proto__: null, default: t(o) }, [o]);
export { a as p };
