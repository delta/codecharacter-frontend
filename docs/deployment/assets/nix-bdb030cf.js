import { bz as t } from './index-24a58ae8.js';
function e(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const e in n)
        if ('default' !== e && !(e in t)) {
          const r = Object.getOwnPropertyDescriptor(n, e);
          r &&
            Object.defineProperty(
              t,
              e,
              r.get ? r : { enumerable: !0, get: () => n[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var i = (function () {
  if (n) return r;
  function t(t) {
    (t.languages.nix = {
      comment: /\/\*[\s\S]*?\*\/|#.*/,
      string: {
        pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
            lookbehind: !0,
            inside: {
              antiquotation: { pattern: /^\$(?=\{)/, alias: 'variable' },
            },
          },
        },
      },
      url: [
        /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
        {
          pattern:
            /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
          lookbehind: !0,
        },
      ],
      antiquotation: { pattern: /\$(?=\{)/, alias: 'variable' },
      number: /\b\d+\b/,
      keyword:
        /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
      function:
        /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
      boolean: /\b(?:true|false)\b/,
      operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
      punctuation: /[{}()[\].,:;]/,
    }),
      (t.languages.nix.string.inside.interpolation.inside.rest =
        t.languages.nix);
  }
  return (n = 1), (r = t), (t.displayName = 'nix'), (t.aliases = []), r;
})();
const a = e({ __proto__: null, default: t(i) }, [i]);
export { a as n };
