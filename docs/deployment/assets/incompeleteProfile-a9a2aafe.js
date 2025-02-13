import {
  r as e,
  b as a,
  e as t,
  j as n,
  c as l,
  a$ as r,
  C as s,
  d as o,
  s as i,
  _ as c,
  A as m,
} from './index-24a58ae8.js';
import { R as u } from './index.esm-560e8225.js';
import { F as d, h as _ } from './index.es-8a521e47.js';
import { O as h } from './OtherDetails-b96a3675.js';
import './index-06bcf729.js';
import './Avatar-86792f54.js';
const p = {
  mainContainer: '_mainContainer_53dlq_1',
  titleContainer: '_titleContainer_53dlq_8',
  subTitle: '_subTitle_53dlq_18',
  formContainer: '_formContainer_53dlq_28',
  name: '_name_53dlq_35',
  username: '_username_53dlq_36',
  collegeName: '_collegeName_53dlq_37',
  flagContainer: '_flagContainer_53dlq_66',
  loginButton: '_loginButton_53dlq_72',
  buttonIcon: '_buttonIcon_53dlq_83',
};
function g() {
  const [g, f] = e.useState(''),
    [N, C] = e.useState('IN'),
    [v, b] = e.useState(''),
    [q, y] = e.useState(''),
    [I, x] = e.useState(0),
    S = a(),
    j = t(),
    A = e => {
      C(e);
    },
    E = e => {
      const a = new Intl.DisplayNames(['en'], { type: 'region' }).of(e);
      return a || 'INDIA';
    };
  return n('div', {
    className: p.mainContainer,
    children: [
      n('div', {
        children: [
          l('h1', {
            className: p.titleContainer,
            children: 'Profile Completion',
          }),
          l('h5', {
            className: p.subTitle,
            children: 'Please complete your profile to start playing',
          }),
        ],
      }),
      n('div', {
        className: p.formContainer,
        children: [
          l('input', {
            type: 'text',
            placeholder: 'NAME  ',
            autoComplete: 'off',
            value: q,
            onChange: e => {
              y(e.target.value);
            },
            className: p.name,
          }),
          l('input', {
            type: 'text',
            placeholder: 'USERNAME  ',
            value: v,
            onChange: e => {
              b(e.target.value);
            },
            className: p.username,
          }),
          l('div', {
            className: p.flagContainer,
            children: l(u, {
              className: p.flagText,
              searchable: !0,
              selected: null != N ? N : 'IN',
              onSelect: null != A ? A : () => {},
            }),
          }),
          l('input', {
            type: 'text',
            placeholder: 'COLLEGE  ',
            value: g,
            onChange: e => {
              f(e.target.value);
            },
            className: p.collegeName,
          }),
          l(h, { formNumber: 3, handleAvatarChange: x, isSignUp: !1 }),
          l('div', {
            children: n('button', {
              type: 'button',
              onClick: () => {
                if (q.trim().length < 5)
                  r.error('Name should be atleast 5 characters');
                else if (v.length < 5)
                  r.error('Username should be atleast 5 characters');
                else if (0 == g.trim().length)
                  r.error('Please enter your college name');
                else {
                  new s(o)
                    .completeUserProfile({
                      username: v,
                      name: q,
                      country: E(N),
                      college: g,
                      avatarId: I,
                    })
                    .then(() => {
                      S(i()),
                        c.success('Profile completed'),
                        j('/login', { replace: !0 });
                    })
                    .catch(e => {
                      e instanceof m && c.error(e.message);
                    });
                }
              },
              className: p.loginButton,
              children: [
                l('div', { children: 'LOGIN ' }),
                l(d, { className: p.buttonIcon, icon: _ }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { g as default };
