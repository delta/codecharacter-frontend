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
var o = (function () {
  if (n) return r;
  function e(e) {
    e.languages.git = {
      comment: /^#.*/m,
      deleted: /^[-–].*/m,
      inserted: /^\+.*/m,
      string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
      command: {
        pattern: /^.*\$ git .*$/m,
        inside: { parameter: /\s--?\w+/m },
      },
      coord: /^@@.*@@$/m,
      commit_sha1: /^commit \w{40}$/m,
    };
  }
  return (n = 1), (r = e), (e.displayName = 'git'), (e.aliases = []), r;
})();
const i = t({ __proto__: null, default: e(o) }, [o]);
export { i as g };