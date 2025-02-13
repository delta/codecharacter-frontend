import { bz as e } from './index-24a58ae8.js';
function n(e, n) {
  for (var t = 0; t < n.length; t++) {
    const i = n[t];
    if ('string' != typeof i && !Array.isArray(i))
      for (const n in i)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(i, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => i[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, i;
var a = (function () {
  if (i) return t;
  function e(e) {
    !(function (e) {
      var n = /(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source,
        t = {
          css: { pattern: /\{[^}]+\}/, inside: { rest: e.languages.css } },
          'class-id': {
            pattern: /(\()[^)]+(?=\))/,
            lookbehind: !0,
            alias: 'attr-value',
          },
          lang: {
            pattern: /(\[)[^\]]+(?=\])/,
            lookbehind: !0,
            alias: 'attr-value',
          },
          punctuation: /[\\\/]\d+|\S/,
        },
        i = (e.languages.textile = e.languages.extend('markup', {
          phrase: {
            pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
            lookbehind: !0,
            inside: {
              'block-tag': {
                pattern: RegExp('^[a-z]\\w*(?:' + n + '|[<>=()])*\\.'),
                inside: {
                  modifier: {
                    pattern: RegExp(
                      '(^[a-z]\\w*)(?:' + n + '|[<>=()])+(?=\\.)',
                    ),
                    lookbehind: !0,
                    inside: t,
                  },
                  tag: /^[a-z]\w*/,
                  punctuation: /\.$/,
                },
              },
              list: {
                pattern: RegExp('^[*#]+(?:' + n + ')?\\s+.+', 'm'),
                inside: {
                  modifier: {
                    pattern: RegExp('(^[*#]+)' + n),
                    lookbehind: !0,
                    inside: t,
                  },
                  punctuation: /^[*#]+/,
                },
              },
              table: {
                pattern: RegExp(
                  '^(?:(?:' +
                    n +
                    '|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:' +
                    n +
                    '|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|',
                  'm',
                ),
                inside: {
                  modifier: {
                    pattern: RegExp(
                      '(^|\\|(?:\\r?\\n|\\r)?)(?:' +
                        n +
                        '|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)',
                    ),
                    lookbehind: !0,
                    inside: t,
                  },
                  punctuation: /\||^\./,
                },
              },
              inline: {
                pattern: RegExp(
                  '(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:' + n + ')?.+?\\1',
                ),
                inside: {
                  bold: {
                    pattern: RegExp('(^(\\*\\*?)(?:' + n + ')?).+?(?=\\2)'),
                    lookbehind: !0,
                  },
                  italic: {
                    pattern: RegExp('(^(__?)(?:' + n + ')?).+?(?=\\2)'),
                    lookbehind: !0,
                  },
                  cite: {
                    pattern: RegExp('(^\\?\\?(?:' + n + ')?).+?(?=\\?\\?)'),
                    lookbehind: !0,
                    alias: 'string',
                  },
                  code: {
                    pattern: RegExp('(^@(?:' + n + ')?).+?(?=@)'),
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  inserted: {
                    pattern: RegExp('(^\\+(?:' + n + ')?).+?(?=\\+)'),
                    lookbehind: !0,
                  },
                  deleted: {
                    pattern: RegExp('(^-(?:' + n + ')?).+?(?=-)'),
                    lookbehind: !0,
                  },
                  span: {
                    pattern: RegExp('(^%(?:' + n + ')?).+?(?=%)'),
                    lookbehind: !0,
                  },
                  modifier: {
                    pattern: RegExp('(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])' + n),
                    lookbehind: !0,
                    inside: t,
                  },
                  punctuation: /[*_%?@+\-^~]+/,
                },
              },
              'link-ref': {
                pattern: /^\[[^\]]+\]\S+$/m,
                inside: {
                  string: { pattern: /(\[)[^\]]+(?=\])/, lookbehind: !0 },
                  url: { pattern: /(\])\S+$/, lookbehind: !0 },
                  punctuation: /[\[\]]/,
                },
              },
              link: {
                pattern: RegExp(
                  '"(?:' + n + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))',
                ),
                inside: {
                  text: {
                    pattern: RegExp('(^"(?:' + n + ')?)[^"]+(?=")'),
                    lookbehind: !0,
                  },
                  modifier: {
                    pattern: RegExp('(^")' + n),
                    lookbehind: !0,
                    inside: t,
                  },
                  url: { pattern: /(:).+/, lookbehind: !0 },
                  punctuation: /[":]/,
                },
              },
              image: {
                pattern: RegExp(
                  '!(?:' +
                    n +
                    '|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?',
                ),
                inside: {
                  source: {
                    pattern: RegExp(
                      '(^!(?:' +
                        n +
                        '|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)',
                    ),
                    lookbehind: !0,
                    alias: 'url',
                  },
                  modifier: {
                    pattern: RegExp('(^!)(?:' + n + '|[<>=()])+'),
                    lookbehind: !0,
                    inside: t,
                  },
                  url: { pattern: /(:).+/, lookbehind: !0 },
                  punctuation: /[!:]/,
                },
              },
              footnote: {
                pattern: /\b\[\d+\]/,
                alias: 'comment',
                inside: { punctuation: /\[|\]/ },
              },
              acronym: {
                pattern: /\b[A-Z\d]+\([^)]+\)/,
                inside: {
                  comment: { pattern: /(\()[^)]+(?=\))/, lookbehind: !0 },
                  punctuation: /[()]/,
                },
              },
              mark: {
                pattern: /\b\((?:TM|R|C)\)/,
                alias: 'comment',
                inside: { punctuation: /[()]/ },
              },
            },
          },
        })),
        a = i.phrase.inside,
        o = {
          inline: a.inline,
          link: a.link,
          image: a.image,
          footnote: a.footnote,
          acronym: a.acronym,
          mark: a.mark,
        };
      i.tag.pattern =
        /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
      var r = a.inline.inside;
      (r.bold.inside = o),
        (r.italic.inside = o),
        (r.inserted.inside = o),
        (r.deleted.inside = o),
        (r.span.inside = o);
      var p = a.table.inside;
      (p.inline = o.inline),
        (p.link = o.link),
        (p.image = o.image),
        (p.footnote = o.footnote),
        (p.acronym = o.acronym),
        (p.mark = o.mark);
    })(e);
  }
  return (i = 1), (t = e), (e.displayName = 'textile'), (e.aliases = []), t;
})();
const o = n({ __proto__: null, default: e(a) }, [a]);
export { o as t };
