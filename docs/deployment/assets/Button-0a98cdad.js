import { u as a, c as e } from './ThemeProvider-092c2682.js';
import { r as t, c as r } from './index-24a58ae8.js';
const n = ['as', 'disabled'];
function s({
  tagName: a,
  disabled: e,
  href: t,
  target: r,
  rel: n,
  role: s,
  onClick: i,
  tabIndex: o = 0,
  type: l,
}) {
  a || (a = null != t || null != r || null != n ? 'a' : 'button');
  const d = { tagName: a };
  if ('button' === a) return [{ type: l || 'button', disabled: e }, d];
  const u = r => {
    (e ||
      ('a' === a &&
        (function (a) {
          return !a || '#' === a.trim();
        })(t))) &&
      r.preventDefault(),
      e ? r.stopPropagation() : null == i || i(r);
  };
  return (
    'a' === a && (t || (t = '#'), e && (t = void 0)),
    [
      {
        role: null != s ? s : 'button',
        disabled: void 0,
        tabIndex: e ? void 0 : o,
        href: t,
        target: 'a' === a ? r : void 0,
        'aria-disabled': e || void 0,
        rel: 'a' === a ? n : void 0,
        onClick: u,
        onKeyDown: a => {
          ' ' === a.key && (a.preventDefault(), u(a));
        },
      },
      d,
    ]
  );
}
const i = t.forwardRef((a, e) => {
  let { as: t, disabled: i } = a,
    o = (function (a, e) {
      if (null == a) return {};
      var t,
        r,
        n = {},
        s = Object.keys(a);
      for (r = 0; r < s.length; r++)
        (t = s[r]), e.indexOf(t) >= 0 || (n[t] = a[t]);
      return n;
    })(a, n);
  const [l, { tagName: d }] = s(Object.assign({ tagName: t, disabled: i }, o));
  return r(d, Object.assign({}, o, l, { ref: e }));
});
i.displayName = 'Button';
const o = t.forwardRef(
  (
    { as: t, bsPrefix: n, variant: i, size: o, active: l, className: d, ...u },
    c,
  ) => {
    const f = a(n, 'btn'),
      [b, { tagName: m }] = s({ tagName: t, ...u });
    return r(m, {
      ...b,
      ...u,
      ref: c,
      className: e(
        d,
        f,
        l && 'active',
        i && `${f}-${i}`,
        o && `${f}-${o}`,
        u.href && u.disabled && 'disabled',
      ),
    });
  },
);
(o.displayName = 'Button'),
  (o.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
const l = o;
export { l as B, i as a, s as u };
