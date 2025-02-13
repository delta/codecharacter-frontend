import { u as r, c as e } from './ThemeProvider-092c2682.js';
import { r as s, c as a } from './index-24a58ae8.js';
var o = /-(.)/g;
const t = r => {
  return (
    r[0].toUpperCase() +
    ((e = r),
    e.replace(o, function (r, e) {
      return e.toUpperCase();
    })).slice(1)
  );
  var e;
};
function n(o, { displayName: n = t(o), Component: p, defaultProps: c } = {}) {
  const i = s.forwardRef(
    ({ className: s, bsPrefix: t, as: n = p || 'div', ...c }, i) => {
      const f = r(t, o);
      return a(n, { ref: i, className: e(s, f), ...c });
    },
  );
  return (i.defaultProps = c), (i.displayName = n), i;
}
export { n as c };
