import { j as e, c as n, N as i } from './index-24a58ae8.js';
import { C as a } from './Container-4692a76f.js';
import { R as t } from './Row-59744247.js';
import { C as r } from './Col-ae03dcbb.js';
import './ThemeProvider-092c2682.js';
const c = {
  footerContainer: '_footerContainer_9ihwo_1',
  heading: '_heading_9ihwo_13',
  textContainer: '_textContainer_9ihwo_22',
  container: '_container_9ihwo_27',
  links: '_links_9ihwo_27',
  credit: '_credit_9ihwo_38',
  heart: '_heart_9ihwo_43',
  title: '_title_9ihwo_47',
  creditText: '_creditText_9ihwo_61',
  number: '_number_9ihwo_77',
};
function o() {
  return e('div', {
    className: c.footerContainer,
    children: [
      n('div', {
        children: e('div', {
          className: c.credit,
          children: [
            e('div', {
              className: c.creditText,
              children: [
                'Made with ',
                n('span', { className: c.heart, children: '❤' }),
                ' by',
                ' ',
              ],
            }),
            n('div', {
              children: n('a', {
                target: '_blank',
                href: 'https://delta.nitt.edu/',
                rel: 'noreferrer',
                className: c.title,
                children: 'Delta Force',
              }),
            }),
          ],
        }),
      }),
      e('div', {
        className: c.textContainer,
        children: [
          e('div', {
            className: c.container,
            children: [
              n('div', { className: c.heading, children: ' Contact' }),
              e('div', {
                children: [
                  'Shubham: ',
                  n('span', {
                    className: c.number,
                    children: '+91 9790959370',
                  }),
                ],
              }),
              e('div', {
                children: [
                  'Bhoopesh: ',
                  n('span', {
                    className: c.number,
                    children: ' +91 9962099029',
                  }),
                ],
              }),
              e('div', {
                children: [
                  'Raghavan: ',
                  n('span', {
                    className: c.number,
                    children: ' +91 9940107606 ',
                  }),
                ],
              }),
            ],
          }),
          e('div', {
            className: c.container,
            children: [
              n('div', { className: c.heading, children: 'Quick Links' }),
              n('div', {
                children: n(i, {
                  className: c.links,
                  to: '/dashboard',
                  children: 'DashBoard',
                }),
              }),
              n('div', {
                children: n('a', {
                  href: 'https://codecharacter-docs-2024.netlify.app/',
                  rel: 'noreferrer noopener',
                  target: '_blank',
                  className: c.links,
                  children: 'Documentation',
                }),
              }),
              n('div', {
                children: n('a', {
                  href: 'https://discord.gg/2HNpvAQx5N',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: c.links,
                  children: 'Discord',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const s = {
  container: '_container_1exa0_1',
  textContainer: '_textContainer_1exa0_6',
  glitch: '_glitch_1exa0_1',
};
function d({ className: i }) {
  return e('div', {
    className: `${s.textContainer} ${i}`,
    children: [
      n('span', { 'aria-hidden': 'true', children: 'Code Character' }),
      'Code Character',
      n('span', { 'aria-hidden': 'true', children: 'Code Character' }),
    ],
  });
}
const l = {
    about: '_about_1vnc3_1',
    descriptionContainer: '_descriptionContainer_1vnc3_10',
    imageContainer: '_imageContainer_1vnc3_14',
    content: '_content_1vnc3_20',
    col1: '_col1_1vnc3_26',
    col2: '_col2_1vnc3_33',
    aboutImage: '_aboutImage_1vnc3_40',
  },
  h = '' + new URL('deltaMap-a70e1cdd.png', import.meta.url).href;
function _() {
  return n('div', {
    children: n('div', {
      className: l.about,
      children: n(a, {
        fluid: !0,
        className: l.aboutcontainer,
        children: e(t, {
          children: [
            n(r, {
              className: l.col1,
              children: n('div', {
                className: l.aboutImage,
                children: n('img', { src: h, style: { objectFit: 'cover' } }),
              }),
            }),
            n(r, {
              className: l.col2,
              children: n('div', {
                className: l.content,
                children:
                  "The objective is to destroy and vanquish the opponent's territory by writing code and creating defenses via the in-game map. With progress and implementation of new competitive strategies, fight your way through, and dominate the top of the leaderboard.",
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
const m = {
  main: '_main_1cxhs_1',
  titleContainer: '_titleContainer_1cxhs_8',
  title: '_title_1cxhs_8',
  mainContainer: '_mainContainer_1cxhs_89',
};
function v() {
  return e('div', {
    className: m.main,
    children: [
      n('div', {
        className: m.titleContainer,
        children: n(d, { className: m.title }),
      }),
      n('div', {
        className: m.mainContainer,
        children: n('div', { className: m.vcr, children: n(_, {}) }),
      }),
      n(o, {}),
    ],
  });
}
export { v as default };
