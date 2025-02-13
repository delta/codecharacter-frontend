import { bz as e } from './index-24a58ae8.js';
import { r } from './jsx-988ee31a.js';
import { r as t } from './typescript-68e4456e.js';
function n(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const r in n)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(n, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => n[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var s, o;
var a = (function () {
  if (o) return s;
  o = 1;
  var e = r(),
    n = t();
  function a(r) {
    r.register(e), r.register(n);
    var t = r.util.clone(r.languages.typescript);
    r.languages.tsx = r.languages.extend('jsx', t);
  }
  return (s = a), (a.displayName = 'tsx'), (a.aliases = []), s;
})();
const i = n({ __proto__: null, default: e(a) }, [a]);
export { i as t };
