import { bz as e } from './index-24a58ae8.js';
import { r as t } from './c-6c432317.js';
function r(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if ('string' != typeof a && !Array.isArray(a))
      for (const t in a)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(a, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => a[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var a, n;
var i = (function () {
  if (n) return a;
  n = 1;
  var e = t();
  function r(t) {
    t.register(e),
      (function (e) {
        e.languages.pure = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
            /#!.+/,
          ],
          'inline-lang': {
            pattern: /%<[\s\S]+?%>/,
            greedy: !0,
            inside: {
              lang: {
                pattern: /(^%< *)-\*-.+?-\*-/,
                lookbehind: !0,
                alias: 'comment',
              },
              delimiter: { pattern: /^%<.*|%>$/, alias: 'punctuation' },
            },
          },
          string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
          number: {
            pattern:
              /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
            lookbehind: !0,
          },
          keyword:
            /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
          function:
            /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
          special: { pattern: /\b__[a-z]+__\b/i, alias: 'builtin' },
          operator:
            /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
          punctuation: /[(){}\[\];,|]/,
        };
        var t = /%< *-\*- *{lang}\d* *-\*-[\s\S]+?%>/.source;
        ['c', { lang: 'c++', alias: 'cpp' }, 'fortran'].forEach(function (r) {
          var a = r;
          if (
            ('string' != typeof r && ((a = r.alias), (r = r.lang)),
            e.languages[a])
          ) {
            var n = {};
            (n['inline-lang-' + a] = {
              pattern: RegExp(
                t.replace('{lang}', r.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')),
                'i',
              ),
              inside: e.util.clone(e.languages.pure['inline-lang'].inside),
            }),
              (n['inline-lang-' + a].inside.rest = e.util.clone(
                e.languages[a],
              )),
              e.languages.insertBefore('pure', 'inline-lang', n);
          }
        }),
          e.languages.c &&
            (e.languages.pure['inline-lang'].inside.rest = e.util.clone(
              e.languages.c,
            ));
      })(t);
  }
  return (a = r), (r.displayName = 'pure'), (r.aliases = []), a;
})();
const o = r({ __proto__: null, default: e(i) }, [i]);
export { o as p };
