import {
  r as e,
  e as a,
  h as s,
  j as t,
  c as r,
  t as o,
  b5 as n,
  _ as l,
  A as d,
  a$ as c,
} from './index-24a58ae8.js';
import { s as i } from './auth.module-7fd06f12.js';
function u() {
  const [u, h] = e.useState(!1),
    [m, p] = e.useState(!1),
    [w, g] = e.useState(''),
    [S, f] = e.useState(''),
    v = a(),
    P = s(),
    N = new URLSearchParams(P.search).get('token'),
    R = () => {
      if (m) c.error('Password did not match the format');
      else {
        if (!u) return !0;
        c.error('Password and confirm password did not match');
      }
    };
  return t('div', {
    className: i.mainContainer,
    children: [
      r('h2', { className: i.signUpText, children: 'Reset Password' }),
      t('div', {
        className: i.resetPasswordContainer,
        children: [
          r('input', {
            type: 'password',
            placeholder: 'NEW PASSWORD',
            value: S,
            onChange: e => {
              null != e.target.value && f(e.target.value);
              e.target.value
                .toString()
                .match(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                )
                ? p(!1)
                : p(!0);
            },
            className: i.password,
          }),
          r('div', {
            children: r('input', {
              type: 'password',
              placeholder: 'CONFIRM PASSWORD',
              value: w,
              className: i.password,
              onChange: e => {
                g(e.target.value);
                e.target.value.match(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                ) && e.target.value === S
                  ? h(!1)
                  : h(!0);
              },
            }),
          }),
          r('div', {
            children: t('button', {
              type: 'button',
              className: i.resetPasswordButton,
              onClick: () => {
                if (
                  (S.match(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                  )
                    ? p(!1)
                    : p(!0),
                  h(w !== S),
                  R())
                ) {
                  new o(n)
                    .resetPassword({
                      token: null != N ? N : 'no-token',
                      password: S,
                      passwordConfirmation: w,
                    })
                    .then(() => {
                      l.success('Password Reset done successfully'),
                        v('/login', { replace: !0 });
                    })
                    .catch(e => {
                      e instanceof d && l.error(e.message);
                    });
                }
              },
              children: ['RESET PASSWORD', ' '],
            }),
          }),
        ],
      }),
    ],
  });
}
export { u as default };
