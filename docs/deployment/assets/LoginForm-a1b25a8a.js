import {
  r as e,
  c as a,
  j as o,
  a$ as t,
  t as s,
  b5 as r,
  A as n,
  e as i,
  u as l,
  l as c,
  o as d,
  b as h,
  b6 as m,
  b7 as u,
  _ as p,
  b8 as f,
} from './index-24a58ae8.js';
import { F as g, h as v } from './index.es-8a521e47.js';
import { s as N } from './auth.module-7fd06f12.js';
import { B as b } from './Button-0a98cdad.js';
import { M as w } from './Modal-5efe701c.js';
import './index-06bcf729.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './divWithClassName-cc198704.js';
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
      children: o(w, {
        show: i.open,
        onHide: i.handleForgetPassword,
        'aria-labelledby': 'contained-modal-title-vcenter',
        centered: !0,
        contentClassName: _.content,
        className: _.modal,
        children: [
          o(w.Header, {
            className: _.editorInfoHeader,
            children: [
              a(w.Title, {
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
          o(w.Body, {
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
              a(b, {
                className: _.forgetPasswordModalbtn,
                size: 'lg',
                onClick: () => {
                  if (
                    l.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
                  ) {
                    new s(r)
                      .forgotPassword({ email: l })
                      .then(() => {
                        i.handleForgetPassword(),
                          t.success('Forget password email sent');
                      })
                      .catch(e => {
                        e instanceof n && t.error(e.message);
                      });
                  } else t.error('Enter valid email');
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
  const t = i(),
    s = l(c),
    r = l(d),
    [n, b] = e.useState(''),
    [w, _] = e.useState(''),
    [P, x] = e.useState(!1),
    B = h(),
    M = l(m);
  e.useEffect(() => {
    _('');
  }, [M]),
    e.useEffect(() => {
      s && !r && t('/dashboard', { replace: !0 });
    }, [s, r]);
  const T = () => {
    x(0 == P);
  };
  return o('div', {
    className: N.mainContainer,
    children: [
      a('h1', { className: N.signInText, children: ' Sign In' }),
      o('div', {
        className: N.cardContainer,
        children: [
          o('div', {
            className: N.externalAuthButtons,
            children: [
              a('div', {
                children: a('a', {
                  href: `${u}/oauth2/authorization/google`,
                  rel: 'noreferrer',
                  children: a('button', {
                    className: N.googleButton,
                    children: o('div', {
                      className: N.oauthButtonText,
                      children: [
                        ' ',
                        'LOGIN WITH GOOGLE',
                        ' ',
                        a(g, { icon: z }),
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
                    children: o('div', {
                      className: N.oauthButtonText,
                      children: [
                        ' ',
                        'LOGIN WITH GITHUB',
                        ' ',
                        a(g, { icon: I }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
          o('div', {
            className: N.separator,
            children: [
              a('div', { className: N.verticalLine }),
              a('h2', { className: N.subText, children: 'OR' }),
              a('div', { className: N.verticalLine }),
            ],
          }),
          o('form', {
            className: N.formContainer,
            children: [
              o('div', {
                className: N.loginCredentialsContainer,
                children: [
                  a('div', {
                    children: a('input', {
                      type: 'text',
                      value: n,
                      className: N.email,
                      onChange: e => {
                        b(e.target.value);
                      },
                      placeholder: 'EMAIL   ',
                    }),
                  }),
                  a('div', {
                    children: a('input', {
                      type: 'password',
                      value: w,
                      placeholder: 'PASSWORD   ',
                      onChange: e => {
                        _(e.target.value);
                      },
                      className: N.password,
                    }),
                  }),
                ],
              }),
              o('div', {
                children: [
                  o('button', {
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
                      n.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      ) &&
                      w.match(
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                      )
                        ? B(f({ email: n, password: w }))
                        : p.error('Invalid username or password');
                    },
                    children: o('div', {
                      className: N.iconAlign,
                      children: [
                        a('div', { className: N.loginText, children: 'LOGIN' }),
                        a('div', { className: N.line }),
                        a(g, { className: N.loginIcon, icon: v }),
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
