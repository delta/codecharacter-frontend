import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, a;
var r = (function () {
  if (a) return n;
  function e(e) {
    !(function (e) {
      e.languages.pug = {
        comment: {
          pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
          lookbehind: !0,
        },
        'multiline-script': {
          pattern:
            /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: !0,
          inside: { rest: e.languages.javascript },
        },
        filter: {
          pattern:
            /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: !0,
          inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } },
        },
        'multiline-plain-text': {
          pattern:
            /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: !0,
        },
        markup: {
          pattern: /(^[\t ]*)<.+/m,
          lookbehind: !0,
          inside: { rest: e.languages.markup },
        },
        doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
        'flow-control': {
          pattern:
            /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
          lookbehind: !0,
          inside: {
            each: {
              pattern: /^each .+? in\b/,
              inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
            },
            branch: {
              pattern: /^(?:if|unless|else|case|when|default|while)\b/,
              alias: 'keyword',
            },
            rest: e.languages.javascript,
          },
        },
        keyword: {
          pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
          lookbehind: !0,
        },
        mixin: [
          {
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {
              keyword: /^mixin/,
              function: /\w+(?=\s*\(|\s*$)/,
              punctuation: /[(),.]/,
            },
          },
          {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {
              name: { pattern: /^\+\w+/, alias: 'function' },
              rest: e.languages.javascript,
            },
          },
        ],
        script: {
          pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
          lookbehind: !0,
          inside: { rest: e.languages.javascript },
        },
        'plain-text': {
          pattern:
            /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
          lookbehind: !0,
        },
        tag: {
          pattern:
            /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
          lookbehind: !0,
          inside: {
            attributes: [
              {
                pattern: /&[^(]+\([^)]+\)/,
                inside: { rest: e.languages.javascript },
              },
              {
                pattern: /\([^)]+\)/,
                inside: {
                  'attr-value': {
                    pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                    lookbehind: !0,
                    inside: { rest: e.languages.javascript },
                  },
                  'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                  punctuation: /[!=(),]+/,
                },
              },
            ],
            punctuation: /:/,
          },
        },
        code: [
          {
            pattern: /(^[\t ]*(?:-|!?=)).+/m,
            lookbehind: !0,
            inside: { rest: e.languages.javascript },
          },
        ],
        punctuation: /[.\-!=|]+/,
      };
      for (
        var t =
            /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/
              .source,
          n = [
            { filter: 'atpl', language: 'twig' },
            { filter: 'coffee', language: 'coffeescript' },
            'ejs',
            'handlebars',
            'less',
            'livescript',
            'markdown',
            { filter: 'sass', language: 'scss' },
            'stylus',
          ],
          a = {},
          r = 0,
          i = n.length;
        r < i;
        r++
      ) {
        var s = n[r];
        (s = 'string' == typeof s ? { filter: s, language: s } : s),
          e.languages[s.language] &&
            (a['filter-' + s.filter] = {
              pattern: RegExp(t.replace('{{filter_name}}', s.filter), 'm'),
              lookbehind: !0,
              inside: {
                'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
                rest: e.languages[s.language],
              },
            });
      }
      e.languages.insertBefore('pug', 'filter', a);
    })(e);
  }
  return (a = 1), (n = e), (e.displayName = 'pug'), (e.aliases = []), n;
})();
const i = t({ __proto__: null, default: e(r) }, [r]);
export { i as p };
