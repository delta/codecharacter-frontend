import { bz as e } from './index-24a58ae8.js';
import { r } from './php-18ee2f99.js';
function t(e, r) {
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
var n, a;
var o = (function () {
  if (a) return n;
  a = 1;
  var e = r();
  function t(r) {
    r.register(e),
      r.languages.insertBefore('php', 'variable', {
        this: /\$this\b/,
        global:
          /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
        scope: {
          pattern: /\b[\w\\]+::/,
          inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
        },
      });
  }
  return (n = t), (t.displayName = 'phpExtras'), (t.aliases = []), n;
})();
const i = t({ __proto__: null, default: e(o) }, [o]);
export { i as p };
