import { bm as e } from './index-3b0785b0.js';
function n(e, n) {
  for (var t = 0; t < n.length; t++) {
    const a = n[t];
    if ('string' != typeof a && !Array.isArray(a))
      for (const n in a)
        if ('default' !== n && !(n in e)) {
          const t = Object.getOwnPropertyDescriptor(a, n);
          t &&
            Object.defineProperty(
              e,
              n,
              t.get ? t : { enumerable: !0, get: () => a[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, a;
var r = (function () {
  if (a) return t;
  function e(e) {
    !(function (e) {
      function n(e) {
        return RegExp('(\\()' + e + '(?=[\\s\\)])');
      }
      function t(e) {
        return RegExp('([\\s([])' + e + '(?=[\\s)])');
      }
      var a = '[-+*/_~!@$%^=<>{}\\w]+',
        r = '&' + a,
        i = '(\\()',
        o = '(?=\\))',
        s = '(?=\\s)',
        l = {
          heading: { pattern: /;;;.*/, alias: ['comment', 'title'] },
          comment: /;.*/,
          string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: !0,
            inside: {
              argument: /[-A-Z]+(?=[.,\s])/,
              symbol: RegExp('`' + a + "'"),
            },
          },
          'quoted-symbol': {
            pattern: RegExp("#?'" + a),
            alias: ['variable', 'symbol'],
          },
          'lisp-property': { pattern: RegExp(':' + a), alias: 'property' },
          splice: { pattern: RegExp(',@?' + a), alias: ['symbol', 'variable'] },
          keyword: [
            {
              pattern: RegExp(
                i +
                  '(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)' +
                  s,
              ),
              lookbehind: !0,
            },
            {
              pattern: RegExp(
                i + '(?:for|do|collect|return|finally|append|concat|in|by)' + s,
              ),
              lookbehind: !0,
            },
          ],
          declare: { pattern: n('declare'), lookbehind: !0, alias: 'keyword' },
          interactive: {
            pattern: n('interactive'),
            lookbehind: !0,
            alias: 'keyword',
          },
          boolean: { pattern: t('(?:t|nil)'), lookbehind: !0 },
          number: { pattern: t('[-+]?\\d+(?:\\.\\d*)?'), lookbehind: !0 },
          defvar: {
            pattern: RegExp(i + 'def(?:var|const|custom|group)\\s+' + a),
            lookbehind: !0,
            inside: { keyword: /^def[a-z]+/, variable: RegExp(a) },
          },
          defun: {
            pattern: RegExp(
              i +
                '(?:cl-)?(?:defun\\*?|defmacro)\\s+' +
                a +
                '\\s+\\([\\s\\S]*?\\)',
            ),
            lookbehind: !0,
            inside: {
              keyword: /^(?:cl-)?def\S+/,
              arguments: null,
              function: { pattern: RegExp('(^\\s)' + a), lookbehind: !0 },
              punctuation: /[()]/,
            },
          },
          lambda: {
            pattern: RegExp(i + 'lambda\\s+\\((?:&?' + a + '\\s*)*\\)'),
            lookbehind: !0,
            inside: {
              keyword: /^lambda/,
              arguments: null,
              punctuation: /[()]/,
            },
          },
          car: { pattern: RegExp(i + a), lookbehind: !0 },
          punctuation: [
            /(['`,]?\(|[)\[\]])/,
            { pattern: /(\s)\.(?=\s)/, lookbehind: !0 },
          ],
        },
        p = {
          'lisp-marker': RegExp(r),
          rest: {
            argument: { pattern: RegExp(a), alias: 'variable' },
            varform: {
              pattern: RegExp(i + a + '\\s+\\S[\\s\\S]*' + o),
              lookbehind: !0,
              inside: {
                string: l.string,
                boolean: l.boolean,
                number: l.number,
                symbol: l.symbol,
                punctuation: /[()]/,
              },
            },
          },
        },
        d = '\\S+(?:\\s+\\S+)*',
        u = {
          pattern: RegExp(i + '[\\s\\S]*' + o),
          lookbehind: !0,
          inside: {
            'rest-vars': {
              pattern: RegExp('&(?:rest|body)\\s+' + d),
              inside: p,
            },
            'other-marker-vars': {
              pattern: RegExp('&(?:optional|aux)\\s+' + d),
              inside: p,
            },
            keys: {
              pattern: RegExp('&key\\s+' + d + '(?:\\s+&allow-other-keys)?'),
              inside: p,
            },
            argument: { pattern: RegExp(a), alias: 'variable' },
            punctuation: /[()]/,
          },
        };
      (l.lambda.inside.arguments = u),
        (l.defun.inside.arguments = e.util.clone(u)),
        (l.defun.inside.arguments.inside.sublist = u),
        (e.languages.lisp = l),
        (e.languages.elisp = l),
        (e.languages.emacs = l),
        (e.languages['emacs-lisp'] = l);
    })(e);
  }
  return (a = 1), (t = e), (e.displayName = 'lisp'), (e.aliases = []), t;
})();
const i = n({ __proto__: null, default: e(r) }, [r]);
export { i as l };