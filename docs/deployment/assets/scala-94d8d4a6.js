import { bm as e } from './index-3b0785b0.js';
import { r as t } from './java-4419a31c.js';
function a(e, t) {
  for (var a = 0; a < t.length; a++) {
    const r = t[a];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a &&
            Object.defineProperty(
              e,
              t,
              a.get ? a : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var l = (function () {
  if (n) return r;
  n = 1;
  var e = t();
  function a(t) {
    t.register(e),
      (t.languages.scala = t.languages.extend('java', {
        keyword:
          /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
        string: [
          { pattern: /"""[\s\S]*?"""/, greedy: !0 },
          { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        ],
        builtin:
          /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
        number:
          /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
        symbol: /'[^\d\s\\]\w*/,
      })),
      delete t.languages.scala['class-name'],
      delete t.languages.scala.function;
  }
  return (r = a), (a.displayName = 'scala'), (a.aliases = []), r;
})();
const o = a({ __proto__: null, default: e(l) }, [l]);
export { o as s };