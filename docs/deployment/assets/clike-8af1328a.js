function e(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if ('string' != typeof r && !Array.isArray(r))
      for (const n in r)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(r, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => r[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n = t;
function t(e) {
  e.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/,
  };
}
(t.displayName = 'clike'), (t.aliases = []);
const r = e({ __proto__: null, default: n }, [n]);
export { n as a, r as c };