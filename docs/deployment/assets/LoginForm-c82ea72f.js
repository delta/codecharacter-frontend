import {
  r as e,
  c as a,
  j as t,
  aQ as o,
  t as s,
  aW as n,
  A as r,
  e as i,
  u as l,
  l as c,
  o as d,
  b as h,
  aX as m,
  aY as u,
  _ as f,
  aZ as g,
} from './index-3b0785b0.js';
import { F as p, h as v } from './index.es-9a30e53f.js';
import { s as N } from './auth.module-7fd06f12.js';
import { B as w } from './Button-4e851fa0.js';
import { M as b } from './Modal-d30bd2b2.js';
import './index-06bcf729.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './divWithClassName-662bab3a.js';
var z = {
    prefix: 'fab',
    iconName: 'google',
    icon: [
      488,
      512,
      [],
      'f1a0',
      'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
    ],
  },
  I = {
    prefix: 'fab',
    iconName: 'github',
    icon: [
      496,
      512,
      [],
      'f09b',
      'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
    ],
  };
const _ = {
    editorInfoHeader: '_editorInfoHeader_wzn7q_1',
    headerText: '_headerText_wzn7q_12',
    editorInfoBody: '_editorInfoBody_wzn7q_19',
    forgetPasswordModalInput: '_forgetPasswordModalInput_wzn7q_32',
    forgetPasswordModalbtn: '_forgetPasswordModalbtn_wzn7q_56',
    content: '_content_wzn7q_70',
  },
  C = i => {
    const [l, c] = e.useState('');
    return a('div', {
      children: t(b, {
        show: i.open,
        onHide: i.handleForgetPassword,
        'aria-labelledby': 'contained-modal-title-vcenter',
        centered: !0,
        contentClassName: _.content,
        className: _.modal,
        children: [
          t(b.Header, {
            className: _.editorInfoHeader,
            children: [
              a(b.Title, {
                className: _.headerText,
                children: 'Forgot Password',
              }),
              a('button', {
                type: 'button',
                className: 'btn-close btn-close-white',
                'aria-label': 'Close',
                onClick: i.handleForgetPassword,
              }),
            ],
          }),
          t(b.Body, {
            className: _.editorInfoBody,
            children: [
              a('div', {
                children: a('input', {
                  type: 'name',
                  placeholder: 'EMAIL  ',
                  value: l,
                  className: _.forgetPasswordModalInput,
                  onChange: e => {
                    c(e.target.value);
                  },
                }),
              }),
              a(w, {
                className: _.forgetPasswordModalbtn,
                size: 'lg',
                onClick: () => {
                  if (
                    l.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
                  ) {
                    new s(n)
                      .forgotPassword({ email: l })
                      .then(() => {
                        i.handleForgetPassword(),
                          o.success('Forget password email sent');
                      })
                      .catch(e => {
                        e instanceof r && o.error(e.message);
                      });
                  } else o.error('Enter valid email');
                },
                variant: 'outline-light',
                children: 'SUBMIT',
              }),
            ],
          }),
        ],
      }),
    });
  };
function P() {
  const o = i(),
    s = l(c),
    n = l(d),
    [r, w] = e.useState(''),
    [b, _] = e.useState(''),
    [P, x] = e.useState(!1),
    B = h(),
    M = l(m);
  e.useEffect(() => {
    _('');
  }, [M]),
    e.useEffect(() => {
      s && !n && o('/dashboard', { replace: !0 });
    }, [s, n]);
  const T = () => {
    x(0 == P);
  };
  return t('div', {
    className: N.mainContainer,
    children: [
      a('h1', { className: N.signInText, children: ' Sign In' }),
      t('div', {
        className: N.cardContainer,
        children: [
          t('div', {
            className: N.externalAuthButtons,
            children: [
              a('div', {
                children: a('a', {
                  href: `${u}/oauth2/authorization/google`,
                  rel: 'noreferrer',
                  children: a('button', {
                    className: N.googleButton,
                    children: t('div', {
                      className: N.oauthButtonText,
                      children: [
                        ' ',
                        'LOGIN WITH GOOGLE',
                        ' ',
                        a(p, { icon: z }),
                      ],
                    }),
                  }),
                }),
              }),
              a('div', {
                children: a('a', {
                  href: `${u}/oauth2/authorization/github`,
                  rel: 'noreferrer',
                  children: a('button', {
                    className: N.githubButton,
                    children: t('div', {
                      className: N.oauthButtonText,
                      children: [
                        ' ',
                        'LOGIN WITH GITHUB',
                        ' ',
                        a(p, { icon: I }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
          t('div', {
            className: N.separator,
            children: [
              a('div', { className: N.verticalLine }),
              a('h2', { className: N.subText, children: 'OR' }),
              a('div', { className: N.verticalLine }),
            ],
          }),
          t('form', {
            className: N.formContainer,
            children: [
              t('div', {
                className: N.loginCredentialsContainer,
                children: [
                  a('div', {
                    children: a('input', {
                      type: 'text',
                      value: r,
                      className: N.email,
                      onChange: e => {
                        w(e.target.value);
                      },
                      placeholder: 'EMAIL   ',
                    }),
                  }),
                  a('div', {
                    children: a('input', {
                      type: 'password',
                      value: b,
                      placeholder: 'PASSWORD   ',
                      onChange: e => {
                        _(e.target.value);
                      },
                      className: N.password,
                    }),
                  }),
                ],
              }),
              t('div', {
                children: [
                  t('button', {
                    type: 'button',
                    className: N.forgotPassword,
                    onClick: T,
                    children: [' ', 'FORGOT PASSWORD', ' '],
                  }),
                  a(C, { open: P, handleForgetPassword: T }),
                ],
              }),
              a('div', {
                children: a('div', {
                  children: a('button', {
                    type: 'button',
                    className: N.loginButton,
                    onClick: () => {
                      r.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      ) &&
                      b.match(
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                      )
                        ? B(g({ email: r, password: b }))
                        : f.error('Invalid username or password');
                    },
                    children: t('div', {
                      className: N.iconAlign,
                      children: [
                        a('div', { className: N.loginText, children: 'LOGIN' }),
                        a('div', { className: N.line }),
                        a(p, { className: N.loginIcon, icon: v }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function x() {
  return a(P, {});
}
export { x as default };