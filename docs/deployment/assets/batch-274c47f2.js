import { bm as e } from './index-3b0785b0.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if ('string' != typeof n && !Array.isArray(n))
      for (const r in n)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(n, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => n[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, n;
var i = (function () {
  if (n) return t;
  function e(e) {
    var r, t, n, i;
    (r = /%%?[~:\w]+%?|!\S+!/),
      (t = {
        pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
        alias: 'attr-name',
        inside: { punctuation: /:/ },
      }),
      (n = /"[^"]*"/),
      (i = /(?:\b|-)\d+\b/),
      (e.languages.batch = {
        comment: [
          /^::.*/m,
          {
            pattern:
              /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
          },
        ],
        label: { pattern: /^:.*/m, alias: 'property' },
        command: [
          {
            pattern:
              /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
            lookbehind: !0,
            inside: {
              keyword: /^for\b|\b(?:in|do)\b/i,
              string: n,
              parameter: t,
              variable: r,
              number: i,
              punctuation: /[()',]/,
            },
          },
          {
            pattern:
              /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
            lookbehind: !0,
            inside: {
              keyword:
                /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
              string: n,
              parameter: t,
              variable: r,
              number: i,
              operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i,
            },
          },
          {
            pattern: /((?:^|[&()])[ \t]*)else\b/im,
            lookbehind: !0,
            inside: { keyword: /^else\b/i },
          },
          {
            pattern:
              /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            inside: {
              keyword: /^set\b/i,
              string: n,
              parameter: t,
              variable: [r, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
              number: i,
              operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
              punctuation: /[()',]/,
            },
          },
          {
            pattern:
              /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            inside: {
              keyword: /^\w+\b/i,
              string: n,
              parameter: t,
              label: {
                pattern: /(^\s*):\S+/m,
                lookbehind: !0,
                alias: 'property',
              },
              variable: r,
              number: i,
              operator: /\^/,
            },
          },
        ],
        operator: /[&@]/,
        punctuation: /[()']/,
      });
  }
  return (n = 1), (t = e), (e.displayName = 'batch'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(i) }, [i]);
export { a as b };