import { r, c as o } from './index-3b0785b0.js';
const e = r.createContext({}),
  a = r.forwardRef(({ controlId: a, as: s = 'div', ...t }, n) => {
    const c = r.useMemo(() => ({ controlId: a }), [a]);
    return o(e.Provider, { value: c, children: o(s, { ...t, ref: n }) });
  });
a.displayName = 'FormGroup';
const s = a;
export { s as F, e as a };