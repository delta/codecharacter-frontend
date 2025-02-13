import { u as r, c as s } from './ThemeProvider-092c2682.js';
import { r as a, c as e } from './index-24a58ae8.js';
const o = a.forwardRef(
  ({ bsPrefix: a, fluid: o, as: i = 'div', className: t, ...f }, n) => {
    const d = r(a, 'container');
    return e(i, {
      ref: n,
      ...f,
      className: s(
        t,
        o ? `${d}${'string' == typeof o ? `-${o}` : '-fluid'}` : d,
      ),
    });
  },
);
(o.displayName = 'Container'), (o.defaultProps = { fluid: !1 });
const i = o;
export { i as C };
