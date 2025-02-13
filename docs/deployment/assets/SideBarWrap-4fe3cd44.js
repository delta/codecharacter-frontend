import {
  j as A,
  c as e,
  u as t,
  I as o,
  h as i,
  r as s,
  e as g,
  z as a,
  C as r,
  d as B,
  b as l,
  F as C,
  L as n,
  w as c,
  B as I,
  x as d,
  _ as w,
  A as Q,
} from './index-24a58ae8.js';
import { u as h, T as E } from './TourProvider-f8fb0617.js';
import { M as m } from './Modal-5efe701c.js';
import { B as p } from './Button-0a98cdad.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
const Y = '' + new URL('code_editor-7ccd362a.svg', import.meta.url).href,
  u = '' + new URL('map-d5b0bb57.svg', import.meta.url).href,
  F = '' + new URL('leaderboard-49e9b7b0.svg', import.meta.url).href,
  L = '' + new URL('commit-ebf69233.svg', import.meta.url).href,
  D = '' + new URL('battletv-dc4c5f64.svg', import.meta.url).href,
  G = '' + new URL('documentation-91d65660.svg', import.meta.url).href,
  x = '' + new URL('statistics-82e6f88d.svg', import.meta.url).href,
  b =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABQCAYAAACtSqN4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIySURBVHgB7ZzxUcIwFMZfPAeQDeoGsIEbgBOIE6gTKBOgEwgTgBPoBrABbAAbxPfoh5xcWyD2vJJ8v7tH/ki4Nr++JoFr46QA7/2VFj2NrkZbI5PzZq6x1Jg658ZHfUMl9DRWPl4WGnf7/b7YkzDUYqJxJfGSaYy0r8+FtVbh02O47b+DhL4W75ImtzpuTLciFnL+A2Ioa43rTTZUpM5C48bns8jZ4vMJYFHRz741mlRIiGbQtL74chlTazArqexKZCC7Cy+6s8+iL+kA4iQykOGrorqkRBhl/b0QsiFIhErNND59c5biNuBn8gdOvjVwwJk0bxlu64GOnvayqlFZf0MywpalTZxW7ZyCV8chGVHYviGs9bRbVQ3qzIgmE5ypnDXApdTEf6876r5FmRGAIgBFgNrGiIZPqwdhRoAQEWuJkBARc2kuHxIIf3SBkzMCB+poTKUZmIAvOUJCFfyHCnDWABQBKAJQBKAIQBGAIgBFAIoAFAEoAlAEoAhAEYAiAEUAigAUASgCUASgCEARgCIARQCKABQBKAJQBKAIQBGAIgBFAIoAFAEoArhzf2K2LpgRgCIAReSsKSJnnLoIe2p34Jx7rHpfo6UNonwSvwjLiGVJXVtSwieykcZB/OGtVXqSAA5X3TbbSefq77AxcKRj4dN21yG76hNJl8HPOxkq41WLB0mT3YLK5lItBpIovxZUKuNFi3spn1JjZVz6upLPt22zLZgyiXdNYYPlmyXAN4Wu+l1uziwyAAAAAElFTkSuQmCC',
  M = '_sideBar_mtr8t_1',
  N = '_sideBarIcon_mtr8t_11',
  k = '_sideBarIconComponent_mtr8t_19',
  f = '_up_mtr8t_25',
  W = '_deltaLogo_mtr8t_29',
  H = '_tutorialModal_qpkp1_1',
  U = '_headerText_qpkp1_14',
  v = '_tutorialModalHeader_qpkp1_21',
  P = '_tutorialModalBtn_qpkp1_28',
  T = t =>
    A(m, {
      show: t.show,
      onHide: t.handleTutorialClose,
      contentClassName: H,
      children: [
        A(m.Header, {
          className: v,
          children: [
            e(m.Title, { className: U, children: 'Code Tutorials' }),
            e('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: t.handleTutorialClose,
            }),
          ],
        }),
        e(m.Body, {
          children:
            'Commander, we are here to help you started with some code tutorials of the game.',
        }),
        A(m.Footer, {
          children: [
            e(p, {
              variant: 'outline-light',
              className: P,
              onClick: t.handleTutorialClose,
              children: 'Not Right Now!',
            }),
            e(p, {
              variant: 'outline-light',
              className: P,
              onClick: t.handleTutorialTake,
              children: 'Take Me There',
            }),
          ],
        }),
      ],
    }),
  z = [
    { icon: Y, route: 'dashboard', tooltip: 'Code Editor' },
    { icon: u, route: 'mapdesigner', tooltip: 'Map Designer' },
    { icon: F, route: 'leaderboard', tooltip: 'Leaderboard' },
    { icon: L, route: 'history', tooltip: 'Commits' },
    { icon: D, route: 'battletv', tooltip: 'Battle TV' },
    { icon: b, route: 'dashboard', tooltip: 'Code Tutorials' },
    { icon: x, route: 'statistics', tooltip: 'Statistics' },
  ],
  S = () => {
    const w = t(o);
    function Q() {
      U(I(!0 !== w));
    }
    const E = i(),
      [m, p] = s.useState('/dashboard'),
      u = g(),
      [F, L] = s.useState(!1),
      { setIsOpen: D } = h(),
      x = t(a),
      H = new r(B),
      U = l();
    return (
      s.useEffect(() => {
        p(E.pathname);
      }, [E]),
      s.useEffect(() => {
        setTimeout(() => {
          null != localStorage.getItem('token') &&
            H.getCurrentUser().then(A => {
              !1 === A.isTutorialComplete && 6 === A.tutorialLevel && D(!0);
            });
        }, 1e3);
      }, [x]),
      A(C, {
        children: [
          e(T, {
            show: F,
            handleTutorialClose: () => {
              U(c('Dashboard')), u('/dashboard'), L(!1);
            },
            handleTutorialTake: () => {
              U(d(!1)),
                U(c('Tutorials')),
                u('/dashboard', { replace: !0 }),
                L(!1);
            },
          }),
          e('div', {
            children:
              '/' != m &&
              '/register' != m &&
              '/login' != m &&
              '/activate' != m &&
              '/reset-password' != m &&
              '/incomplete-profile' != m
                ? A('div', {
                    className: M,
                    children: [
                      e('div', {
                        className: f,
                        children: z.map(A =>
                          'Editor Settings' === A.tooltip
                            ? e(
                                'div',
                                {
                                  className: N,
                                  children: e('img', {
                                    src: A.icon,
                                    alt: A.tooltip,
                                    title: A.tooltip,
                                    onClick: Q,
                                    className: k,
                                  }),
                                },
                                z.indexOf(A),
                              )
                            : A.icon == Y
                            ? e(
                                'div',
                                {
                                  className: N,
                                  children: e(
                                    n,
                                    {
                                      to: A.route,
                                      children: e('img', {
                                        src: A.icon,
                                        alt: A.tooltip,
                                        title: A.tooltip,
                                        className: k,
                                        onClick: () => {
                                          U(c('Dashboard'));
                                        },
                                      }),
                                    },
                                    A.route,
                                  ),
                                },
                                z.indexOf(A),
                              )
                            : A.icon == b
                            ? e(
                                'div',
                                {
                                  className: N,
                                  children: e(
                                    n,
                                    {
                                      to: A.route,
                                      children: e('img', {
                                        src: b,
                                        alt: A.tooltip,
                                        className: k,
                                        title: 'Code Tutorials',
                                        onClick: () => {
                                          L(!0);
                                        },
                                      }),
                                    },
                                    A.route,
                                  ),
                                },
                                z.indexOf(A),
                              )
                            : e(
                                'div',
                                {
                                  className: N,
                                  children: e(
                                    n,
                                    {
                                      to: A.route,
                                      children: e('img', {
                                        src: A.icon,
                                        alt: A.tooltip,
                                        title: A.tooltip,
                                        className: k,
                                      }),
                                    },
                                    A.route,
                                  ),
                                },
                                z.indexOf(A),
                              ),
                        ),
                      }),
                      A('div', {
                        children: [
                          e('div', {
                            className: N,
                            id: 'documentation',
                            children: e('div', {
                              title: 'View Documentation',
                              children: e('a', {
                                href: 'https://codecharacter-docs-2024.netlify.app/',
                                rel: 'noreferrer noopener',
                                target: '_blank',
                                children: e('img', {
                                  src: G,
                                  alt: 'delta',
                                  className: k,
                                }),
                              }),
                            }),
                          }),
                          e('div', {
                            className: N,
                            id: 'DELTA',
                            children: e('div', {
                              title: 'Made with ❤ by Delta',
                              children: e('div', {
                                className: W,
                                onClick: () => {
                                  window.open('https://delta.nitt.edu/');
                                },
                                children: e('img', {
                                  src: 'data:image/png;base64,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',
                                  alt: 'delta',
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : e(C, {}),
          }),
        ],
      })
    );
  },
  Z = [
    {
      selector: '#documentation',
      content:
        "The documentation for CodeCharacter can be found here, it's highly recommended to go through it before starting the game.",
    },
    {
      selector: '#DELTA',
      content: 'This game was made with ❤ by Delta Force.',
    },
  ],
  j = () => {
    const A = new r(B);
    return e(E, {
      setOpened: e => {
        !1 === e &&
          A.updateCurrentUser({ updateTutorialLevel: 'NEXT' })
            .then(() => {
              w.success('Tutorial Completed');
            })
            .catch(A => {
              A instanceof Q && w.error(A.message);
            });
      },
      steps: Z,
      children: e(S, {}),
    });
  };
export { j as default };
