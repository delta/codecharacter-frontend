import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const e in r)
        if ('default' !== e && !(e in t)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n &&
            Object.defineProperty(
              t,
              e,
              n.get ? n : { enumerable: !0, get: () => r[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var i = (function () {
  if (r) return n;
  function t(t) {
    t.languages.ini = {
      comment: /^[ \t]*[;#].*$/m,
      selector: /^[ \t]*\[.*?\]/m,
      constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
      'attr-value': { pattern: /=.*/, inside: { punctuation: /^[=]/ } },
    };
  }
  return (r = 1), (n = t), (t.displayName = 'ini'), (t.aliases = []), n;
})();
const o = e({ __proto__: null, default: t(i) }, [i]);
export { o as i };
