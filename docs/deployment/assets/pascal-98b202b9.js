import { bz as e } from './index-24a58ae8.js';
function r(e, r) {
  for (var t = 0; t < r.length; t++) {
    const a = r[t];
    if ('string' != typeof a && !Array.isArray(a))
      for (const r in a)
        if ('default' !== r && !(r in e)) {
          const t = Object.getOwnPropertyDescriptor(a, r);
          t &&
            Object.defineProperty(
              e,
              r,
              t.get ? t : { enumerable: !0, get: () => a[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var t, a;
var i = (function () {
  if (a) return t;
  function e(e) {
    (e.languages.pascal = {
      comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
      string: {
        pattern: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
        greedy: !0,
      },
      keyword: [
        {
          pattern:
            /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
          lookbehind: !0,
        },
        {
          pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
          lookbehind: !0,
        },
        {
          pattern:
            /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
          lookbehind: !0,
        },
        {
          pattern:
            /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
          lookbehind: !0,
        },
      ],
      number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
      operator: [
        /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
        {
          pattern:
            /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
          lookbehind: !0,
        },
      ],
      punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
    }),
      (e.languages.objectpascal = e.languages.pascal);
  }
  return (
    (a = 1),
    (t = e),
    (e.displayName = 'pascal'),
    (e.aliases = ['objectpascal']),
    t
  );
})();
const n = r({ __proto__: null, default: e(i) }, [i]);
export { n as p };
