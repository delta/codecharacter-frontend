import { bm as e } from './index-3b0785b0.js';
function t(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const t in n)
        if ('default' !== t && !(t in e)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r &&
            Object.defineProperty(
              e,
              t,
              r.get ? r : { enumerable: !0, get: () => n[t] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var a = (function () {
  if (n) return r;
  function e(e) {
    e.languages.tcl = {
      comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
      string: { pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/, greedy: !0 },
      variable: [
        { pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, lookbehind: !0 },
        { pattern: /(\$){[^}]+}/, lookbehind: !0 },
        {
          pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
          lookbehind: !0,
        },
      ],
      function: { pattern: /(^\s*proc[ \t]+)[^\s]+/m, lookbehind: !0 },
      builtin: [
        {
          pattern:
            /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
          lookbehind: !0,
        },
        /\b(?:elseif|else)\b/,
      ],
      scope: {
        pattern: /(^\s*)(?:global|upvar|variable)\b/m,
        lookbehind: !0,
        alias: 'constant',
      },
      keyword: {
        pattern:
          /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
        lookbehind: !0,
      },
      operator:
        /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
      punctuation: /[{}()\[\]]/,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'tcl'), (e.aliases = []), r;
})();
const o = t({ __proto__: null, default: e(a) }, [a]);
export { o as t };