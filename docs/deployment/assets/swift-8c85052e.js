import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var i = 0; i < t.length; i++) {
    const n = t[i];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const i = Object.getOwnPropertyDescriptor(n, t);
          i &&
            Object.defineProperty(
              e,
              t,
              i.get ? i : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var i, n;
var r = (function () {
  if (n) return i;
  function e(e) {
    (e.languages.swift = e.languages.extend('clike', {
      string: {
        pattern:
          /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
            inside: { delimiter: { pattern: /^\\\(|\)$/, alias: 'variable' } },
          },
        },
      },
      keyword:
        /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
      number:
        /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
      constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
      atrule:
        /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
      builtin:
        /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/,
    })),
      (e.languages.swift.string.inside.interpolation.inside.rest =
        e.languages.swift);
  }
  return (n = 1), (i = e), (e.displayName = 'swift'), (e.aliases = []), i;
})();
const a = t({ __proto__: null, default: e(r) }, [r]);
export { a as s };
