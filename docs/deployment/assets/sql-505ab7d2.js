import { bm as e } from './index-3b0785b0.js';
import { r } from './sql-1ec4f4b4.js';
function t(e, r) {
  for (var t = 0; t < r.length; t++) {
    const o = r[t];
    if ('string' != typeof o && !Array.isArray(o))
      for (const r in o)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(o, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => o[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o = r();
const n = t({ __proto__: null, default: e(o) }, [o]);
export { n as s };