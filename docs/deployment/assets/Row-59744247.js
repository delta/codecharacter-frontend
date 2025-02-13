import { u as s, b as o, d as e, c as r } from './ThemeProvider-092c2682.js';
import { r as a, c } from './index-24a58ae8.js';
const t = a.forwardRef(
  ({ bsPrefix: a, className: t, as: l = 'div', ...n }, f) => {
    const m = s(a, 'row'),
      d = o(),
      i = e(),
      p = `${m}-cols`,
      u = [];
    return (
      d.forEach(s => {
        const o = n[s];
        let e;
        delete n[s],
          null != o && 'object' == typeof o ? ({ cols: e } = o) : (e = o);
        const r = s !== i ? `-${s}` : '';
        null != e && u.push(`${p}${r}-${e}`);
      }),
      c(l, { ref: f, ...n, className: r(t, m, ...u) })
    );
  },
);
t.displayName = 'Row';
const l = t;
export { l as R };
