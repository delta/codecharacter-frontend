import {
  r as e,
  c as a,
  h as r,
  e as t,
  br as i,
  b5 as s,
  A as d,
  j as c,
} from './index-24a58ae8.js';
import { u as n, c as o } from './ThemeProvider-092c2682.js';
import { c as l } from './createWithBsPrefix-6a3b0d2e.js';
import { d as m } from './divWithClassName-cc198704.js';
const f = e.forwardRef(
  ({ bsPrefix: e, className: r, variant: t, as: i = 'img', ...s }, d) => {
    const c = n(e, 'card-img');
    return a(i, { ref: d, className: o(t ? `${c}-${t}` : c, r), ...s });
  },
);
f.displayName = 'CardImg';
const h = f,
  u = e.createContext(null);
u.displayName = 'CardHeaderContext';
const x = u,
  b = e.forwardRef(({ bsPrefix: r, className: t, as: i = 'div', ...s }, d) => {
    const c = n(r, 'card-header'),
      l = e.useMemo(() => ({ cardHeaderBsPrefix: c }), [c]);
    return a(x.Provider, {
      value: l,
      children: a(i, { ref: d, ...s, className: o(t, c) }),
    });
  });
b.displayName = 'CardHeader';
const p = b,
  _ = m('h5'),
  g = m('h6'),
  v = l('card-body'),
  y = l('card-title', { Component: _ }),
  N = l('card-subtitle', { Component: g }),
  C = l('card-link', { Component: 'a' }),
  k = l('card-text', { Component: 'p' }),
  P = l('card-footer'),
  w = l('card-img-overlay'),
  T = e.forwardRef(
    (
      {
        bsPrefix: e,
        className: r,
        bg: t,
        text: i,
        border: s,
        body: d,
        children: c,
        as: l = 'div',
        ...m
      },
      f,
    ) => {
      const h = n(e, 'card');
      return a(l, {
        ref: f,
        ...m,
        className: o(
          r,
          h,
          t && `bg-${t}`,
          i && `text-${i}`,
          s && `border-${s}`,
        ),
        children: d ? a(v, { children: c }) : c,
      });
    },
  );
(T.displayName = 'Card'), (T.defaultProps = { body: !1 });
const z = Object.assign(T, {
    Img: h,
    Title: y,
    Subtitle: N,
    Body: v,
    Link: C,
    Text: k,
    Header: p,
    Footer: P,
    ImgOverlay: w,
  }),
  j = '_modalContainer_xkz8h_1',
  B = '_cardContainer_xkz8h_10',
  V = '_cardTitle_xkz8h_15',
  R = '_cardBody_xkz8h_16',
  S = '_cardTitleFailed_xkz8h_22',
  $ = '_cardBodyFailed_xkz8h_23',
  A = () => {
    const n = r(),
      o = t(),
      l = new URLSearchParams(n.search).get('id'),
      m = new URLSearchParams(n.search).get('token'),
      [f, h] = e.useState('Verifying'),
      [u, x] = e.useState('Account can not be verified');
    return (
      e.useEffect(() => {
        'Verified' === f &&
          setTimeout(() => {
            o('/login', { replace: !0 });
          }, 3e3);
      }, [f]),
      e.useEffect(() => {
        if (null != l && null != m) {
          new i(s)
            .activateUser(l, { token: m })
            .then(() => {
              h('Verified'),
                x(
                  'Your Account has been verified. You can now start playing \n You will be redirected to the Login page',
                );
            })
            .catch(e => {
              e instanceof d &&
                (h('Verification Failed'),
                x(e.message + '\n Account can not be verfied'));
            });
        }
      }, [l, m]),
      a('div', {
        className: j,
        children: a(z, {
          className: B,
          children: c(z.Body, {
            children: [
              a(z.Title, { className: 'Verified' === f ? V : S, children: f }),
              a('div', {
                className: 'Verified' === f ? R : $,
                children: a(z.Text, { children: u }),
              }),
            ],
          }),
        }),
      })
    );
  };
export { A as default };
