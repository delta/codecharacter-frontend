import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var a = (function () {
  if (r) return n;
  function e(e) {
    (e.languages.n4js = e.languages.extend('javascript', {
      keyword:
        /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    })),
      e.languages.insertBefore('n4js', 'constant', {
        annotation: { pattern: /@+\w+/, alias: 'operator' },
      }),
      (e.languages.n4jsd = e.languages.n4js);
  }
  return (r = 1), (n = e), (e.displayName = 'n4js'), (e.aliases = []), n;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as n };