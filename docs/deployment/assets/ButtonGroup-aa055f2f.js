import { u as r, c as e } from './ThemeProvider-a8cd1696.js';
import { r as s, c as a } from './index-624895d1.js';
const o = s.forwardRef(
  (
    { bsPrefix: s, size: o, vertical: t, className: i, as: c = 'div', ...l },
    p,
  ) => {
    const m = r(s, 'btn-group');
    let f = m;
    return (
      t && (f = `${m}-vertical`),
      a(c, { ...l, ref: p, className: e(i, f, o && `${m}-${o}`) })
    );
  },
);
(o.displayName = 'ButtonGroup'),
  (o.defaultProps = { vertical: !1, role: 'group' });
const t = o;
export { t as B };
