import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, a;
var s = (function () {
  if (a) return n;
  function e(e) {
    var t, n;
    (n =
      /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/),
      ((t = e).languages.protobuf = t.languages.extend('clike', {
        'class-name': {
          pattern:
            /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
          lookbehind: !0,
        },
        keyword:
          /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/,
      })),
      t.languages.insertBefore('protobuf', 'operator', {
        map: {
          pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
          alias: 'class-name',
          inside: { punctuation: /[<>.,]/, builtin: n },
        },
        builtin: n,
        'positional-class-name': {
          pattern:
            /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
          alias: 'class-name',
          inside: { punctuation: /\./ },
        },
        annotation: { pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/, lookbehind: !0 },
      });
  }
  return (a = 1), (n = e), (e.displayName = 'protobuf'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(s) }, [s]);
export { o as p };
