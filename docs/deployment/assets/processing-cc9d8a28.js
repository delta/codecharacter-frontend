import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
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
var r, n;
var a = (function () {
  if (n) return r;
  function e(e) {
    (e.languages.processing = e.languages.extend('clike', {
      keyword:
        /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
      operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/,
    })),
      e.languages.insertBefore('processing', 'number', {
        constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
        type: {
          pattern:
            /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
          alias: 'variable',
        },
      }),
      (e.languages.processing.function.pattern = /\w+(?=\s*\()/),
      (e.languages.processing['class-name'].alias = 'variable');
  }
  return (n = 1), (r = e), (e.displayName = 'processing'), (e.aliases = []), r;
})();
const s = t({ __proto__: null, default: e(a) }, [a]);
export { s as p };
