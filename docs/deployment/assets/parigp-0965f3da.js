import { bz as r } from './index-24a58ae8.js';
function e(r, e) {
  for (var t = 0; t < e.length; t++) {
    const o = e[t];
    if ('string' != typeof o && !Array.isArray(o))
      for (const e in o)
        if ('default' !== e && !(e in r)) {
          const t = Object.getOwnPropertyDescriptor(o, e);
          t &&
            Object.defineProperty(
              r,
              e,
              t.get ? t : { enumerable: !0, get: () => o[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, o;
var n = (function () {
  if (o) return t;
  function r(r) {
    var e;
    r.languages.parigp = {
      comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
      string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
      keyword:
        ((e = [
          'breakpoint',
          'break',
          'dbg_down',
          'dbg_err',
          'dbg_up',
          'dbg_x',
          'forcomposite',
          'fordiv',
          'forell',
          'forpart',
          'forprime',
          'forstep',
          'forsubgroup',
          'forvec',
          'for',
          'iferr',
          'if',
          'local',
          'my',
          'next',
          'return',
          'until',
          'while',
        ]),
        (e = e
          .map(function (r) {
            return r.split('').join(' *');
          })
          .join('|')),
        RegExp('\\b(?:' + e + ')\\b')),
      function: /\w[\w ]*?(?= *\()/,
      number: {
        pattern:
          /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
        lookbehind: !0,
      },
      operator:
        /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
      punctuation: /[\[\]{}().,:;|]/,
    };
  }
  return (o = 1), (t = r), (r.displayName = 'parigp'), (r.aliases = []), t;
})();
const i = e({ __proto__: null, default: r(n) }, [n]);
export { i as p };
