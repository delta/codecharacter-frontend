import { bm as e } from './index-3b0785b0.js';
import { r as t } from './typescript-68e4456e.js';
function r(e, t) {
  for (var r = 0; r < t.length; r++) {
    const o = t[r];
    if ('string' != typeof o && !Array.isArray(o))
      for (const t in o)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(o, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => o[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o = t();
const n = r({ __proto__: null, default: e(o) }, [o]);
export { n as t };