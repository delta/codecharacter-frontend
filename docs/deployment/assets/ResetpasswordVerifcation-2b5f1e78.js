import {
  r as a,
  e,
  h as s,
  j as t,
  c as r,
  t as o,
  aW as n,
  _ as l,
  A as d,
  aQ as c,
} from './index-3b0785b0.js';
import { s as i } from './auth.module-7fd06f12.js';
function u() {
  const [u, h] = a.useState(!1),
    [m, p] = a.useState(!1),
    [w, g] = a.useState(''),
    [S, f] = a.useState(''),
    v = e(),
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
            onChange: a => {
              null != a.target.value && f(a.target.value);
              a.target.value
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
              onChange: a => {
                g(a.target.value);
                a.target.value.match(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                ) && a.target.value === S
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
                    .catch(a => {
                      a instanceof d && l.error(a.message);
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