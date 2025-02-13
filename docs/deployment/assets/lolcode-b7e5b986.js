import { bz as e } from './index-24a58ae8.js';
function t(e, t) {
  for (var o = 0; o < t.length; o++) {
    const n = t[o];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(n, t);
          o &&
            Object.defineProperty(
              e,
              t,
              o.get ? o : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var o, n;
var r = (function () {
  if (n) return o;
  function e(e) {
    e.languages.lolcode = {
      comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
      string: {
        pattern: /"(?::.|[^"])*"/,
        inside: {
          variable: /:\{[^}]+\}/,
          symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/],
        },
        greedy: !0,
      },
      number: /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
      symbol: {
        pattern:
          /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
        lookbehind: !0,
        inside: { keyword: /A(?=\s)/ },
      },
      label: {
        pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
        lookbehind: !0,
        alias: 'string',
      },
      function: {
        pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
        lookbehind: !0,
      },
      keyword: [
        {
          pattern:
            /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
          lookbehind: !0,
        },
        /'Z(?=\s|,|$)/,
      ],
      boolean: { pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/, lookbehind: !0 },
      variable: { pattern: /(^|\s)IT(?=\s|,|$)/, lookbehind: !0 },
      operator: {
        pattern:
          /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
        lookbehind: !0,
      },
      punctuation: /\.{3}|…|,|!/,
    };
  }
  return (n = 1), (o = e), (e.displayName = 'lolcode'), (e.aliases = []), o;
})();
const I = t({ __proto__: null, default: e(r) }, [r]);
export { I as l };
