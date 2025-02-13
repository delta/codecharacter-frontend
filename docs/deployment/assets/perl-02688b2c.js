import { bz as e } from './index-24a58ae8.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const s = r[t];
    if ('string' != typeof s && !Array.isArray(s))
      for (const r in s)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(s, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => s[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, s;
var n = (function () {
  if (s) return t;
  function e(e) {
    e.languages.perl = {
      comment: [
        { pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m, lookbehind: !0 },
        { pattern: /(^|[^\\$])#.*/, lookbehind: !0 },
      ],
      string: [
        {
          pattern:
            /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
          greedy: !0,
        },
        {
          pattern:
            /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
          greedy: !0,
        },
        { pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, greedy: !0 },
        { pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, greedy: !0 },
        {
          pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
          greedy: !0,
        },
        { pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, greedy: !0 },
        { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
        { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
      ],
      regex: [
        {
          pattern:
            /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern:
            /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern:
            /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
          greedy: !0,
        },
      ],
      variable: [
        /[&*$@%]\{\^[A-Z]+\}/,
        /[&*$@%]\^[A-Z_]/,
        /[&*$@%]#?(?=\{)/,
        /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,
        /[&*$@%]\d+/,
        /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
      ],
      filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: 'symbol' },
      vstring: { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: 'string' },
      function: { pattern: /sub [a-z0-9_]+/i, inside: { keyword: /sub/ } },
      keyword:
        /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
      operator:
        /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
      punctuation: /[{}[\];(),:]/,
    };
  }
  return (s = 1), (t = e), (e.displayName = 'perl'), (e.aliases = []), t;
})();
const a = r({ __proto__: null, default: e(n) }, [n]);
export { a as p };
