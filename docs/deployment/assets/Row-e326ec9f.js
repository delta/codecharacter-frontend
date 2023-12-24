import { u as s, b as o, d as e, c as a } from './ThemeProvider-a8cd1696.js';
import { r, c } from './index-624895d1.js';
const t = r.forwardRef(
  ({ bsPrefix: r, className: t, as: l = 'div', ...n }, f) => {
    const m = s(r, 'row'),
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
        const a = s !== i ? `-${s}` : '';
        null != e && u.push(`${p}${a}-${e}`);
      }),
      c(l, { ref: f, ...n, className: a(t, m, ...u) })
    );
  },
);
t.displayName = 'Row';
const l = t;
export { l as R };
