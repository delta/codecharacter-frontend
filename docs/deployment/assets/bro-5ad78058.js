import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ('string' != typeof r && !Array.isArray(r))
      for (const t in r)
        if ('default' !== t && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var n, r;
var o = (function () {
  if (r) return n;
  function e(e) {
    e.languages.bro = {
      comment: {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0,
        inside: { italic: /\b(?:TODO|FIXME|XXX)\b/ },
      },
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      boolean: /\b[TF]\b/,
      function: {
        pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
        inside: { keyword: /^(?:function|hook|event)/ },
      },
      variable: {
        pattern: /(?:global|local) \w+/i,
        inside: { keyword: /(?:global|local)/ },
      },
      builtin:
        /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
      constant: { pattern: /const \w+/i, inside: { keyword: /const/ } },
      keyword:
        /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
      operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      punctuation: /[{}[\];(),.:]/,
    };
  }
  return (r = 1), (n = e), (e.displayName = 'bro'), (e.aliases = []), n;
})();
const i = t({ __proto__: null, default: e(o) }, [o]);
export { i as b };
