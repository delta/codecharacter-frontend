var e, n;
function t() {
  if (n) return e;
  function t(e) {
    !(function (e) {
      function n(e, n) {
        return '___' + e.toUpperCase() + n + '___';
      }
      Object.defineProperties((e.languages['markup-templating'] = {}), {
        buildPlaceholders: {
          value: function (t, a, r, o) {
            if (t.language === a) {
              var i = (t.tokenStack = []);
              (t.code = t.code.replace(r, function (e) {
                if ('function' == typeof o && !o(e)) return e;
                for (
                  var r, u = i.length;
                  -1 !== t.code.indexOf((r = n(a, u)));

                )
                  ++u;
                return (i[u] = e), r;
              })),
                (t.grammar = e.languages.markup);
            }
          },
        },
        tokenizePlaceholders: {
          value: function (t, a) {
            if (t.language === a && t.tokenStack) {
              t.grammar = e.languages[a];
              var r = 0,
                o = Object.keys(t.tokenStack);
              !(function i(u) {
                for (var c = 0; c < u.length && !(r >= o.length); c++) {
                  var g = u[c];
                  if (
                    'string' == typeof g ||
                    (g.content && 'string' == typeof g.content)
                  ) {
                    var l = o[r],
                      p = t.tokenStack[l],
                      s = 'string' == typeof g ? g : g.content,
                      f = n(a, l),
                      k = s.indexOf(f);
                    if (k > -1) {
                      ++r;
                      var m = s.substring(0, k),
                        d = new e.Token(
                          a,
                          e.tokenize(p, t.grammar),
                          'language-' + a,
                          p,
                        ),
                        v = s.substring(k + f.length),
                        y = [];
                      m && y.push.apply(y, i([m])),
                        y.push(d),
                        v && y.push.apply(y, i([v])),
                        'string' == typeof g
                          ? u.splice.apply(u, [c, 1].concat(y))
                          : (g.content = y);
                    }
                  } else g.content && i(g.content);
                }
                return u;
              })(t.tokens);
            }
          },
        },
      });
    })(e);
  }
  return (
    (n = 1), (e = t), (t.displayName = 'markupTemplating'), (t.aliases = []), e
  );
}
export { t as r };
