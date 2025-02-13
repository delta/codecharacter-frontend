import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var r = 0; r < e.length; r++) {
    const a = e[r];
    if ('string' != typeof a && !Array.isArray(a))
      for (const e in a)
        if ('default' !== e && !(e in t)) {
          const r = Object.getOwnPropertyDescriptor(a, e);
          r &&
            Object.defineProperty(
              t,
              e,
              r.get ? r : { enumerable: !0, get: () => a[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, a;
var n = (function () {
  if (a) return r;
  function t(t) {
    !(function (t) {
      t.languages.http = {
        'request-line': {
          pattern:
            /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
          inside: {
            property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
            'attr-name': /:\w+/,
          },
        },
        'response-status': {
          pattern: /^HTTP\/1.[01] \d+.*/m,
          inside: {
            property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 },
          },
        },
        'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' },
      };
      var e,
        r,
        a,
        n = t.languages,
        i = {
          'application/javascript': n.javascript,
          'application/json': n.json || n.javascript,
          'application/xml': n.xml,
          'text/xml': n.xml,
          'text/html': n.html,
          'text/css': n.css,
        },
        o = { 'application/json': !0, 'application/xml': !0 };
      for (var s in i)
        if (i[s]) {
          e = e || {};
          var p = o[s]
            ? ((a = void 0),
              (a = (r = s).replace(/^[a-z]+\//, '')),
              '(?:' + r + '|\\w+/(?:[\\w.-]+\\+)+' + a + '(?![+\\w.-]))')
            : s;
          e[s] = {
            pattern: RegExp(
              '(content-type:\\s*' +
                p +
                '[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*',
              'i',
            ),
            lookbehind: !0,
            inside: { rest: i[s] },
          };
        }
      e && t.languages.insertBefore('http', 'header-name', e);
    })(t);
  }
  return (a = 1), (r = t), (t.displayName = 'http'), (t.aliases = []), r;
})();
const i = e({ __proto__: null, default: t(n) }, [n]);
export { i as h };
