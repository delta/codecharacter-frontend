import { c as s, u as e, b as a, d as o } from './ThemeProvider-528d6954.js';
import { r, c as t } from './index-3b0785b0.js';
const n = r.forwardRef((r, n) => {
  const [{ className: c, ...l }, { as: f = 'div', bsPrefix: p, spans: i }] =
    (function ({ as: r, bsPrefix: t, className: n, ...c }) {
      t = e(t, 'col');
      const l = a(),
        f = o(),
        p = [],
        i = [];
      return (
        l.forEach(s => {
          const e = c[s];
          let a, o, r;
          delete c[s],
            'object' == typeof e && null != e
              ? ({ span: a, offset: o, order: r } = e)
              : (a = e);
          const n = s !== f ? `-${s}` : '';
          a && p.push(!0 === a ? `${t}${n}` : `${t}${n}-${a}`),
            null != r && i.push(`order${n}-${r}`),
            null != o && i.push(`offset${n}-${o}`);
        }),
        [
          { ...c, className: s(n, ...p, ...i) },
          { as: r, bsPrefix: t, spans: p },
        ]
      );
    })(r);
  return t(f, { ...l, ref: n, className: s(c, !i.length && p) });
});
n.displayName = 'Col';
const c = n;
export { c as C };