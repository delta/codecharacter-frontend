import { bm as e } from './index-3b0785b0.js';
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
var a = (function () {
  if (n) return i;
  function e(e) {
    (e.languages.wiki = e.languages.extend('markup', {
      'block-comment': {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: !0,
        alias: 'comment',
      },
      heading: {
        pattern: /^(=+).+?\1/m,
        inside: { punctuation: /^=+|=+$/, important: /.+/ },
      },
      emphasis: {
        pattern: /('{2,5}).+?\1/,
        inside: {
          'bold italic': { pattern: /(''''').+?(?=\1)/, lookbehind: !0 },
          bold: { pattern: /(''')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
          italic: { pattern: /('')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
          punctuation: /^''+|''+$/,
        },
      },
      hr: { pattern: /^-{4,}/m, alias: 'punctuation' },
      url: [
        /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
        /\[\[.+?\]\]|\[.+?\]/,
      ],
      variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
      symbol: [/^#redirect/im, /~{3,5}/],
      'table-tag': {
        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
        lookbehind: !0,
        inside: {
          'table-bar': { pattern: /\|$/, alias: 'punctuation' },
          rest: e.languages.markup.tag.inside,
        },
      },
      punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m,
    })),
      e.languages.insertBefore('wiki', 'tag', {
        nowiki: {
          pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
          inside: {
            tag: {
              pattern:
                /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
              inside: e.languages.markup.tag.inside,
            },
          },
        },
      });
  }
  return (n = 1), (i = e), (e.displayName = 'wiki'), (e.aliases = []), i;
})();
const r = t({ __proto__: null, default: e(a) }, [a]);
export { r as w };