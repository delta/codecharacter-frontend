import { u as r, c as e } from './ThemeProvider-092c2682.js';
import { r as s, c as a } from './index-24a58ae8.js';
const o = s.forwardRef(
  (
    { bsPrefix: s, size: o, vertical: t, className: i, as: c = 'div', ...l },
    m,
  ) => {
    const p = r(s, 'btn-group');
    let f = p;
    return (
      t && (f = `${p}-vertical`),
      a(c, { ...l, ref: m, className: e(i, f, o && `${p}-${o}`) })
    );
  },
);
(o.displayName = 'ButtonGroup'),
  (o.defaultProps = { vertical: !1, role: 'group' });
const t = o;
export { t as B };
