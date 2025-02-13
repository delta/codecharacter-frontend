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
    !(function (e) {
      e.languages.haml = {
        'multiline-comment': {
          pattern:
            /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
          lookbehind: !0,
          alias: 'comment',
        },
        'multiline-code': [
          {
            pattern:
              /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
            lookbehind: !0,
            inside: { rest: e.languages.ruby },
          },
          {
            pattern:
              /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
            lookbehind: !0,
            inside: { rest: e.languages.ruby },
          },
        ],
        filter: {
          pattern:
            /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
          lookbehind: !0,
          inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } },
        },
        markup: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
          lookbehind: !0,
          inside: { rest: e.languages.markup },
        },
        doctype: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
          lookbehind: !0,
        },
        tag: {
          pattern:
            /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
          lookbehind: !0,
          inside: {
            attributes: [
              {
                pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby },
              },
              {
                pattern: /\([^)]+\)/,
                inside: {
                  'attr-value': {
                    pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                    lookbehind: !0,
                  },
                  'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
                  punctuation: /[=(),]/,
                },
              },
              { pattern: /\[[^\]]+\]/, inside: { rest: e.languages.ruby } },
            ],
            punctuation: /[<>]/,
          },
        },
        code: {
          pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
          lookbehind: !0,
          inside: { rest: e.languages.ruby },
        },
        interpolation: {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
            rest: e.languages.ruby,
          },
        },
        punctuation: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
          lookbehind: !0,
        },
      };
      for (
        var t = [
            'css',
            { filter: 'coffee', language: 'coffeescript' },
            'erb',
            'javascript',
            'less',
            'markdown',
            'ruby',
            'scss',
            'textile',
          ],
          r = {},
          n = 0,
          a = t.length;
        n < a;
        n++
      ) {
        var i = t[n];
        (i = 'string' == typeof i ? { filter: i, language: i } : i),
          e.languages[i.language] &&
            (r['filter-' + i.filter] = {
              pattern: RegExp(
                '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+'.replace(
                  '{{filter_name}}',
                  i.filter,
                ),
              ),
              lookbehind: !0,
              inside: {
                'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
                rest: e.languages[i.language],
              },
            });
      }
      e.languages.insertBefore('haml', 'filter', r);
    })(e);
  }
  return (n = 1), (r = e), (e.displayName = 'haml'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(a) }, [a]);
export { i as h };
