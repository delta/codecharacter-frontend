function e(e, t) {
  for (var s = 0; s < t.length; s++) {
    const n = t[s];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const s = Object.getOwnPropertyDescriptor(n, t);
          s &&
            Object.defineProperty(
              e,
              t,
              s.get ? s : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t = s;
function s(e) {
  !(function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: { rule: /@[\w-]+/ },
      },
      url: {
        pattern: RegExp('url\\((?:' + t.source + '|[^\n\r()]*)\\)', 'i'),
        inside: { function: /^url/i, punctuation: /^\(|\)$/ },
      },
      selector: RegExp('[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)'),
      string: { pattern: t, greedy: !0 },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var s = e.languages.markup;
    s &&
      (s.tag.addInlined('style', 'css'),
      e.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': { pattern: /^\s*style/i, inside: s.tag.inside },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': { pattern: /.+/i, inside: e.languages.css },
            },
            alias: 'language-css',
          },
        },
        s.tag,
      ));
  })(e);
}
(s.displayName = 'css'), (s.aliases = []);
const n = e({ __proto__: null, default: t }, [t]);
export { t as a, n as c };