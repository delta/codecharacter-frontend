import { bm as r } from './index-3b0785b0.js';
import { r as e } from './ruby-5ae06024.js';
function t(r, e) {
  for (var t = 0; t < e.length; t++) {
    const o = e[t];
    if ('string' != typeof o && !Array.isArray(o))
      for (const e in o)
        if ('default' !== e && !(e in r)) {
          const t = Object.getOwnPropertyDescriptor(o, e);
          t &&
            Object.defineProperty(
              r,
              e,
              t.get ? t : { enumerable: !0, get: () => o[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o = e();
const n = t({ __proto__: null, default: r(o) }, [o]);
export { n as r };