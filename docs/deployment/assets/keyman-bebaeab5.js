import { bz as e } from './index-24a58ae8.js';
function a(e, a) {
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
var t, n;
var o = (function () {
  if (n) return t;
  function e(e) {
    e.languages.keyman = {
      comment: /\bc\s.*/i,
      function:
        /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
      string: /("|').*?\1/,
      bold: [
        /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
        /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i,
      ],
      keyword:
        /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
      atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
      number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
      operator: /[+>\\,()]/,
      tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i,
    };
  }
  return (n = 1), (t = e), (e.displayName = 'keyman'), (e.aliases = []), t;
})();
const r = a({ __proto__: null, default: e(o) }, [o]);
export { r as k };
