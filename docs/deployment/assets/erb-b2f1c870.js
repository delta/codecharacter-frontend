import { bz as e } from './index-24a58ae8.js';
import { r } from './markup-templating-ec2e8fe9.js';
import { r as t } from './ruby-5ae06024.js';
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
var a, o;
var i = (function () {
  if (o) return a;
  o = 1;
  var e = r(),
    n = t();
  function i(r) {
    var t;
    r.register(e),
      r.register(n),
      ((t = r).languages.erb = t.languages.extend('ruby', {})),
      t.languages.insertBefore('erb', 'comment', {
        delimiter: { pattern: /^<%=?|%>$/, alias: 'punctuation' },
      }),
      t.hooks.add('before-tokenize', function (e) {
        t.languages['markup-templating'].buildPlaceholders(
          e,
          'erb',
          /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm,
        );
      }),
      t.hooks.add('after-tokenize', function (e) {
        t.languages['markup-templating'].tokenizePlaceholders(e, 'erb');
      });
  }
  return (a = i), (i.displayName = 'erb'), (i.aliases = []), a;
})();
const s = n({ __proto__: null, default: e(i) }, [i]);
export { s as e };
