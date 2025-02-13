function e(e, a) {
  for (var t = 0; t < a.length; t++) {
    const n = a[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const a in n)
        if ('default' !== a && !(a in e)) {
          const t = Object.getOwnPropertyDescriptor(n, a);
          t &&
            Object.defineProperty(
              e,
              a,
              t.get ? t : { enumerable: !0, get: () => n[a] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var a = t;
function t(e) {
  (e.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
            ],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: /&#?[\da-z]{1,8};/i,
  }),
    (e.languages.markup.tag.inside['attr-value'].inside.entity =
      e.languages.markup.entity),
    e.hooks.add('wrap', function (e) {
      'entity' === e.type &&
        (e.attributes.title = e.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(e.languages.markup.tag, 'addInlined', {
      value: function (a, t) {
        var n = {};
        (n['language-' + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[t],
        }),
          (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var s = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
        };
        s['language-' + t] = { pattern: /[\s\S]+/, inside: e.languages[t] };
        var i = {};
        (i[a] = {
          pattern: RegExp(
            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              a,
            ),
            'i',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s,
        }),
          e.languages.insertBefore('markup', 'cdata', i);
      },
    }),
    (e.languages.xml = e.languages.extend('markup', {})),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup);
}
(t.displayName = 'markup'), (t.aliases = ['xml', 'html', 'mathml', 'svg']);
const n = e({ __proto__: null, default: a }, [a]);
export { a, n as m };
