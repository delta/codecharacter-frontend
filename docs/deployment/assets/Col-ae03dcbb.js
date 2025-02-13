import { c as s, u as e, b as a, d as r } from './ThemeProvider-092c2682.js';
import { r as o, c as t } from './index-24a58ae8.js';
const n = o.forwardRef((o, n) => {
  const [{ className: c, ...l }, { as: f = 'div', bsPrefix: p, spans: i }] =
    (function ({ as: o, bsPrefix: t, className: n, ...c }) {
      t = e(t, 'col');
      const l = a(),
        f = r(),
        p = [],
        i = [];
      return (
        l.forEach(s => {
          const e = c[s];
          let a, r, o;
          delete c[s],
            'object' == typeof e && null != e
              ? ({ span: a, offset: r, order: o } = e)
              : (a = e);
          const n = s !== f ? `-${s}` : '';
          a && p.push(!0 === a ? `${t}${n}` : `${t}${n}-${a}`),
            null != o && i.push(`order${n}-${o}`),
            null != r && i.push(`offset${n}-${r}`);
        }),
        [
          { ...c, className: s(n, ...p, ...i) },
          { as: o, bsPrefix: t, spans: p },
        ]
      );
    })(o);
  return t(f, { ...l, ref: n, className: s(c, !i.length && p) });
});
n.displayName = 'Col';
const c = n;
export { c as C };
