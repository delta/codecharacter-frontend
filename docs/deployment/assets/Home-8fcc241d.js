import { j as e, c as n, N as t, r } from './index-3b0785b0.js';
import { C as i } from './Container-7e33f8ea.js';
import { R as a } from './Row-ee81c216.js';
import { C as c } from './Col-3f588678.js';
import './ThemeProvider-528d6954.js';
const o = {
  footerContainer: '_footerContainer_16e9n_1',
  heading: '_heading_16e9n_13',
  textContainer: '_textContainer_16e9n_21',
  container: '_container_16e9n_26',
  links: '_links_16e9n_26',
  credit: '_credit_16e9n_36',
  title: '_title_16e9n_41',
  creditText: '_creditText_16e9n_54',
};
function l() {
  return e('div', {
    className: o.footerContainer,
    children: [
      n('div', {
        children: e('div', {
          className: o.credit,
          children: [
            e('div', {
              className: o.creditText,
              children: [
                'Made with ',
                n('span', { className: o.heart, children: '❤' }),
                ' by',
                ' ',
              ],
            }),
            n('div', {
              children: n('a', {
                target: '_blank',
                href: 'https://delta.nitt.edu/',
                rel: 'noreferrer',
                className: o.title,
                children: 'Delta Force',
              }),
            }),
          ],
        }),
      }),
      e('div', {
        className: o.textContainer,
        children: [
          e('div', {
            className: o.container,
            children: [
              n('div', { className: o.heading, children: ' Contact' }),
              n('div', { children: 'Ezhil: +91 6381553859' }),
              n('div', { children: 'Ram Ganesh: +91 9025517379' }),
              n('div', { children: 'Vignesh: +91 6381196740' }),
            ],
          }),
          e('div', {
            className: o.container,
            children: [
              n('div', { className: o.heading, children: 'Quick Links' }),
              n('div', {
                children: n(t, {
                  className: o.links,
                  to: '/dashboard',
                  children: 'DashBoard',
                }),
              }),
              n('div', {
                children: n('a', {
                  href: 'https://codecharacter-docs-2023.netlify.app/',
                  rel: 'noreferrer noopener',
                  target: '_blank',
                  className: o.links,
                  children: 'Documentation',
                }),
              }),
              n('div', {
                children: n('a', {
                  href: 'https://discord.gg/QcYMveUaGQ',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: o.links,
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
  container: '_container_bm3rc_1',
  textContainer: '_textContainer_bm3rc_6',
  glitchtext: '_glitchtext_bm3rc_10',
  glitch1: '_glitch1_bm3rc_1',
  glitch2: '_glitch2_bm3rc_1',
  glitch3: '_glitch3_bm3rc_1',
};
function d(t) {
  const [i, a] = r.useState(''),
    c = t.value,
    o = r.useRef(0);
  return (
    r.useEffect(() => {
      if (o.current < c.length) {
        const e = setInterval(function () {
          a(
            i.substring(0, i.length - 1) +
              c[o.current] +
              (i.length == c.length ? '' : '_'),
          ),
            o.current++;
        }, 150);
        return () => {
          clearInterval(e);
        };
      }
      {
        const e = setTimeout(() => {
          a(''), (o.current = 0);
        }, 3e3);
        return () => {
          clearTimeout(e);
        };
      }
    }, [i]),
    n('div', {
      className: s.container,
      children: e('div', {
        className: s.textContainer,
        children: [
          n('div', { className: s.glitchtext, children: i }),
          n('div', { className: s.glitchtext, children: i }),
          n('div', { className: s.glitchtext, children: i }),
        ],
      }),
    })
  );
}
const h = {
    about: '_about_1xnzv_1',
    descriptionContainer: '_descriptionContainer_1xnzv_10',
    imageContainer: '_imageContainer_1xnzv_14',
    content: '_content_1xnzv_20',
    col1: '_col1_1xnzv_27',
    col2: '_col2_1xnzv_35',
    aboutImage: '_aboutImage_1xnzv_42',
  },
  _ = '' + new URL('deltaMap-afb35fa2.png', import.meta.url).href;
function m() {
  return n('div', {
    children: n('div', {
      className: h.about,
      children: n(i, {
        fluid: !0,
        className: h.aboutcontainer,
        children: e(a, {
          children: [
            n(c, {
              className: h.col1,
              children: n('div', {
                className: h.aboutImage,
                children: n('img', { src: _, style: { objectFit: 'cover' } }),
              }),
            }),
            n(c, {
              className: h.col2,
              children: n('div', {
                className: h.content,
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
const v = {
    mainContainer: '_mainContainer_l381o_1',
    jumbotron: '_jumbotron_l381o_7',
    delta: '_delta_l381o_22',
    heart: '_heart_l381o_37',
    arrowContainer: '_arrowContainer_l381o_40',
    arrow: '_arrow_l381o_40',
  },
  u = '' + new URL('DownArrow-7d8b9380.svg', import.meta.url).href;
function g() {
  const t = r.useRef(null);
  return e('div', {
    className: v.mainContainer,
    children: [
      e('div', {
        className: v.jumbotron,
        children: [
          n(d, { value: 'Code Character' }),
          n('div', {
            className: v.arrowContainer,
            children: n('img', {
              onClick: () => {
                var e;
                null == (e = t.current) ||
                  e.scrollIntoView({ behavior: 'smooth' });
              },
              className: v.arrow,
              src: u,
            }),
          }),
        ],
      }),
      n('div', { ref: t, children: n(m, {}) }),
      n(l, {}),
    ],
  });
}
export { g as default };