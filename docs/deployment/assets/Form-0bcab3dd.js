import { c as e, u as a } from './ThemeProvider-092c2682.js';
import { p as s } from './index-06bcf729.js';
import { r as l, c as r, j as t, F as o } from './index-24a58ae8.js';
import { a as i, F as n } from './FormGroup-06fc443c.js';
import { c } from './createWithBsPrefix-6a3b0d2e.js';
import { C as d } from './Col-ae03dcbb.js';
const m = { type: s.string, tooltip: s.bool, as: s.elementType },
  f = l.forwardRef(
    (
      { as: a = 'div', className: s, type: l = 'valid', tooltip: t = !1, ...o },
      i,
    ) =>
      r(a, {
        ...o,
        ref: i,
        className: e(s, `${l}-${t ? 'tooltip' : 'feedback'}`),
      }),
  );
(f.displayName = 'Feedback'), (f.propTypes = m);
const p = f,
  b = l.forwardRef(
    (
      {
        id: s,
        bsPrefix: t,
        className: o,
        type: n = 'checkbox',
        isValid: c = !1,
        isInvalid: d = !1,
        as: m = 'input',
        ...f
      },
      p,
    ) => {
      const { controlId: b } = l.useContext(i);
      return (
        (t = a(t, 'form-check-input')),
        r(m, {
          ...f,
          ref: p,
          type: n,
          id: s || b,
          className: e(o, t, c && 'is-valid', d && 'is-invalid'),
        })
      );
    },
  );
b.displayName = 'FormCheckInput';
const u = b,
  y = l.forwardRef(({ bsPrefix: s, className: t, htmlFor: o, ...n }, c) => {
    const { controlId: d } = l.useContext(i);
    return (
      (s = a(s, 'form-check-label')),
      r('label', { ...n, ref: c, htmlFor: o || d, className: e(t, s) })
    );
  });
y.displayName = 'FormCheckLabel';
const h = y,
  N = l.forwardRef(
    (
      {
        id: s,
        bsPrefix: n,
        bsSwitchPrefix: c,
        inline: d = !1,
        reverse: m = !1,
        disabled: f = !1,
        isValid: b = !1,
        isInvalid: y = !1,
        feedbackTooltip: N = !1,
        feedback: x,
        feedbackType: v,
        className: F,
        style: w,
        title: I = '',
        type: k = 'checkbox',
        label: C,
        children: g,
        as: P = 'input',
        ...R
      },
      $,
    ) => {
      (n = a(n, 'form-check')), (c = a(c, 'form-switch'));
      const { controlId: j } = l.useContext(i),
        T = l.useMemo(() => ({ controlId: s || j }), [j, s]),
        L =
          (!g && null != C && !1 !== C) ||
          (function (e, a) {
            return l.Children.toArray(e).some(
              e => l.isValidElement(e) && e.type === a,
            );
          })(g, h),
        S = r(u, {
          ...R,
          type: 'switch' === k ? 'checkbox' : k,
          ref: $,
          isValid: b,
          isInvalid: y,
          disabled: f,
          as: P,
        });
      return r(i.Provider, {
        value: T,
        children: r('div', {
          style: w,
          className: e(
            F,
            L && n,
            d && `${n}-inline`,
            m && `${n}-reverse`,
            'switch' === k && c,
          ),
          children:
            g ||
            t(o, {
              children: [
                S,
                L && r(h, { title: I, children: C }),
                x && r(p, { type: v, tooltip: N, children: x }),
              ],
            }),
        }),
      });
    },
  );
N.displayName = 'FormCheck';
const x = Object.assign(N, { Input: u, Label: h }),
  v = l.forwardRef(
    (
      {
        bsPrefix: s,
        type: t,
        size: o,
        htmlSize: n,
        id: c,
        className: d,
        isValid: m = !1,
        isInvalid: f = !1,
        plaintext: p,
        readOnly: b,
        as: u = 'input',
        ...y
      },
      h,
    ) => {
      const { controlId: N } = l.useContext(i);
      let x;
      return (
        (s = a(s, 'form-control')),
        (x = p ? { [`${s}-plaintext`]: !0 } : { [s]: !0, [`${s}-${o}`]: o }),
        r(u, {
          ...y,
          type: t,
          size: n,
          ref: h,
          readOnly: b,
          id: c || N,
          className: e(
            d,
            x,
            m && 'is-valid',
            f && 'is-invalid',
            'color' === t && `${s}-color`,
          ),
        })
      );
    },
  );
v.displayName = 'FormControl';
const F = Object.assign(v, { Feedback: p }),
  w = c('form-floating'),
  I = l.forwardRef(
    (
      {
        as: s = 'label',
        bsPrefix: t,
        column: o,
        visuallyHidden: n,
        className: c,
        htmlFor: m,
        ...f
      },
      p,
    ) => {
      const { controlId: b } = l.useContext(i);
      t = a(t, 'form-label');
      let u = 'col-form-label';
      'string' == typeof o && (u = `${u} ${u}-${o}`);
      const y = e(c, t, n && 'visually-hidden', o && u);
      return (
        (m = m || b),
        o
          ? r(d, { ref: p, as: 'label', className: y, htmlFor: m, ...f })
          : r(s, { ref: p, className: y, htmlFor: m, ...f })
      );
    },
  );
(I.displayName = 'FormLabel'),
  (I.defaultProps = { column: !1, visuallyHidden: !1 });
const k = I,
  C = l.forwardRef(({ bsPrefix: s, className: t, id: o, ...n }, c) => {
    const { controlId: d } = l.useContext(i);
    return (
      (s = a(s, 'form-range')),
      r('input', {
        ...n,
        type: 'range',
        ref: c,
        className: e(t, s),
        id: o || d,
      })
    );
  });
C.displayName = 'FormRange';
const g = C,
  P = l.forwardRef(
    (
      {
        bsPrefix: s,
        size: t,
        htmlSize: o,
        className: n,
        isValid: c = !1,
        isInvalid: d = !1,
        id: m,
        ...f
      },
      p,
    ) => {
      const { controlId: b } = l.useContext(i);
      return (
        (s = a(s, 'form-select')),
        r('select', {
          ...f,
          size: o,
          ref: p,
          className: e(
            n,
            s,
            t && `${s}-${t}`,
            c && 'is-valid',
            d && 'is-invalid',
          ),
          id: m || b,
        })
      );
    },
  );
P.displayName = 'FormSelect';
const R = P,
  $ = l.forwardRef(
    ({ bsPrefix: s, className: l, as: t = 'small', muted: o, ...i }, n) => (
      (s = a(s, 'form-text')),
      r(t, { ...i, ref: n, className: e(l, s, o && 'text-muted') })
    ),
  );
$.displayName = 'FormText';
const j = $,
  T = l.forwardRef((e, a) => r(x, { ...e, ref: a, type: 'switch' }));
T.displayName = 'Switch';
const L = Object.assign(T, { Input: x.Input, Label: x.Label }),
  S = l.forwardRef(
    (
      { bsPrefix: s, className: l, children: o, controlId: i, label: c, ...d },
      m,
    ) => (
      (s = a(s, 'form-floating')),
      t(n, {
        ref: m,
        className: e(l, s),
        controlId: i,
        ...d,
        children: [o, r('label', { htmlFor: i, children: c })],
      })
    ),
  );
S.displayName = 'FloatingLabel';
const z = S,
  O = { _ref: s.any, validated: s.bool, as: s.elementType },
  V = l.forwardRef(({ className: a, validated: s, as: l = 'form', ...t }, o) =>
    r(l, { ...t, ref: o, className: e(a, s && 'was-validated') }),
  );
(V.displayName = 'Form'), (V.propTypes = O);
const E = Object.assign(V, {
  Group: n,
  Control: F,
  Floating: w,
  Check: x,
  Switch: L,
  Label: k,
  Text: j,
  Range: g,
  Select: R,
  FloatingLabel: z,
});
export { E as F };
