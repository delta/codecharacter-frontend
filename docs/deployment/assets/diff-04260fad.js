import { bz as e } from './index-24a58ae8.js';
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
var a = (function () {
  if (n) return t;
  function e(e) {
    !(function (e) {
      e.languages.diff = {
        coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
      };
      var r = {
        'deleted-sign': '-',
        'deleted-arrow': '<',
        'inserted-sign': '+',
        'inserted-arrow': '>',
        unchanged: ' ',
        diff: '!',
      };
      Object.keys(r).forEach(function (t) {
        var n = r[t],
          a = [];
        /^\w+$/.test(t) || a.push(/\w+/.exec(t)[0]),
          'diff' === t && a.push('bold'),
          (e.languages.diff[t] = {
            pattern: RegExp(
              '^(?:[' + n + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
              'm',
            ),
            alias: a,
          });
      }),
        Object.defineProperty(e.languages.diff, 'PREFIXES', { value: r });
    })(e);
  }
  return (n = 1), (t = e), (e.displayName = 'diff'), (e.aliases = []), t;
})();
const i = r({ __proto__: null, default: e(a) }, [a]);
export { i as d };
