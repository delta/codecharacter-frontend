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
var o = (function () {
  if (n) return t;
  function e(e) {
    (e.languages.docker = {
      keyword: {
        pattern:
          /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
        lookbehind: !0,
      },
      string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      comment: /#.*/,
      punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/,
    }),
      (e.languages.dockerfile = e.languages.docker);
  }
  return (
    (n = 1),
    (t = e),
    (e.displayName = 'docker'),
    (e.aliases = ['dockerfile']),
    t
  );
})();
const a = r({ __proto__: null, default: e(o) }, [o]);
export { a as d };