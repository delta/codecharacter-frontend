import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var n = 0; n < e.length; n++) {
    const a = e[n];
    if ('string' != typeof a && !Array.isArray(a))
      for (const e in a)
        if ('default' !== e && !(e in t)) {
          const n = Object.getOwnPropertyDescriptor(a, e);
          n &&
            Object.defineProperty(
              t,
              e,
              n.get ? n : { enumerable: !0, get: () => a[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, a;
var r = (function () {
  if (a) return n;
  function t(t) {
    (t.languages.yaml = {
      scalar: {
        pattern:
          /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern:
          /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
        lookbehind: !0,
        alias: 'atrule',
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: 'important',
      },
      datetime: {
        pattern:
          /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
        lookbehind: !0,
        alias: 'number',
      },
      boolean: {
        pattern:
          /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: 'important',
      },
      null: {
        pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: 'important',
      },
      string: {
        pattern:
          /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
        lookbehind: !0,
        greedy: !0,
      },
      number: {
        pattern:
          /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
      },
      tag: /![^\s]+/,
      important: /[&*][\w]+/,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (t.languages.yml = t.languages.yaml);
  }
  return (a = 1), (n = t), (t.displayName = 'yaml'), (t.aliases = ['yml']), n;
})();
const o = e({ __proto__: null, default: t(r) }, [r]);
export { o as y };
