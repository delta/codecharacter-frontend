import { u as s, c as r } from './ThemeProvider-528d6954.js';
import { r as a, c as e } from './index-3b0785b0.js';
const o = a.forwardRef(
  ({ bsPrefix: a, fluid: o, as: i = 'div', className: t, ...f }, n) => {
    const d = s(a, 'container');
    return e(i, {
      ref: n,
      ...f,
      className: r(
        t,
        o ? `${d}${'string' == typeof o ? `-${o}` : '-fluid'}` : d,
      ),
    });
  },
);
(o.displayName = 'Container'), (o.defaultProps = { fluid: !1 });
const i = o;
export { i as C };
