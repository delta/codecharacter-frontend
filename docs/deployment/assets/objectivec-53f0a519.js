import { bz as e } from './index-24a58ae8.js';
import { r as t } from './c-6c432317.js';
function r(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, o;
var i = (function () {
  if (o) return n;
  o = 1;
  var e = t();
  function r(t) {
    t.register(e),
      (t.languages.objectivec = t.languages.extend('c', {
        keyword:
          /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        string:
          /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
      })),
      delete t.languages.objectivec['class-name'];
  }
  return (n = r), (r.displayName = 'objectivec'), (r.aliases = []), n;
})();
const a = r({ __proto__: null, default: e(i) }, [i]);
export { a as o };
