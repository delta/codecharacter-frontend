import { r as a, c as r, j as e } from './index-3b0785b0.js';
import { a as t } from './Avatar-86792f54.js';
const i = {
  formContainer: '_formContainer_mxyr1_1',
  wrapper: '_wrapper_mxyr1_7',
  avatarHeader: '_avatarHeader_mxyr1_13',
  avatarContainer: '_avatarContainer_mxyr1_27',
  termsContainer: '_termsContainer_mxyr1_44',
  avatar: '_avatar_mxyr1_13',
  avatarSelected: '_avatarSelected_mxyr1_90',
  avatarImg: '_avatarImg_mxyr1_94',
};
function n(n) {
  const [o, s] = a.useState(0),
    c = t();
  return r('div', {
    className: i.formContainer,
    children: e('div', {
      className: i.wrapper,
      children: [
        r('div', { className: i.avatarHeader, children: ' CHOOSE AN AVATAR ' }),
        r('div', {
          className: i.avatarContainer,
          children: c.map((a, e) =>
            r(
              'div',
              {
                className: `${i.avatar} ${o === a.id ? i.avatarSelected : ''}`,
                onClick: () => {
                  s(a.id), n.handleAvatarChange(a.id);
                },
                children: r('img', {
                  className: i.avatarImg,
                  src: a.url,
                  alt: 'avatar',
                }),
              },
              e,
            ),
          ),
        }),
        n.isSignUp &&
          e('div', {
            className: i.termsContainer,
            children: [
              'By Signing up, you agree to Google Recaptcha',
              ' ',
              r('span', {
                onClick: () =>
                  window.open('https://www.google.com/intl/en/policies/terms/'),
                children: 'Terms of Service',
              }),
              ' ',
              '&',
              ' ',
              r('span', {
                onClick: () =>
                  window.open(
                    'https://www.google.com/intl/en/policies/privacy/',
                  ),
                children: 'Privacy Policy',
              }),
            ],
          }),
      ],
    }),
  });
}
export { n as O };