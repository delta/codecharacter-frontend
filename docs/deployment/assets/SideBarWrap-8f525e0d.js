import {
  u as A,
  I as e,
  h as g,
  r as t,
  z as B,
  C as s,
  d as o,
  b as i,
  c as C,
  j as a,
  L as r,
  w,
  F as c,
  B as n,
  _ as I,
  A as Q,
} from './index-3b0785b0.js';
import { u as l, T as E } from './TourProvider-a2db2cbe.js';
const d = '' + new URL('code_editor-7ccd362a.svg', import.meta.url).href,
  Y = '' + new URL('map-d5b0bb57.svg', import.meta.url).href,
  h = '' + new URL('leaderboard-49e9b7b0.svg', import.meta.url).href,
  m = '' + new URL('commit-ebf69233.svg', import.meta.url).href,
  D = '' + new URL('battletv-dc4c5f64.svg', import.meta.url).href,
  L = '' + new URL('documentation-91d65660.svg', import.meta.url).href,
  F = '_sideBar_mtr8t_1',
  p = '_sideBarIcon_mtr8t_11',
  G = '_sideBarIconComponent_mtr8t_19',
  M = '_up_mtr8t_25',
  u = '_deltaLogo_mtr8t_29',
  x = [
    { icon: d, route: 'dashboard', tooltip: 'Code Editor' },
    { icon: Y, route: 'mapdesigner', tooltip: 'Map Designer' },
    { icon: h, route: 'leaderboard', tooltip: 'Leaderboard' },
    { icon: m, route: 'history', tooltip: 'Commits' },
    { icon: D, route: 'battletv', tooltip: 'Battle TV' },
  ],
  b = () => {
    const I = A(e);
    function Q() {
      N(n(!0 !== I));
    }
    const E = g(),
      [Y, h] = t.useState('/dashboard'),
      { setIsOpen: m } = l(),
      D = A(B),
      b = new s(o),
      N = i();
    return (
      t.useEffect(() => {
        h(E.pathname);
      }, [E]),
      t.useEffect(() => {
        setTimeout(() => {
          null != localStorage.getItem('token') &&
            b.getCurrentUser().then(A => {
              !1 === A.isTutorialComplete && 6 === A.tutorialLevel && m(!0);
            });
        }, 1e3);
      }, [D]),
      C('div', {
        children:
          '/' != Y &&
          '/register' != Y &&
          '/login' != Y &&
          '/activate' != Y &&
          '/reset-password' != Y &&
          '/incomplete-profile' != Y
            ? a('div', {
                className: F,
                children: [
                  C('div', {
                    className: M,
                    children: x.map(A =>
                      'Editor Settings' === A.tooltip
                        ? C(
                            'div',
                            {
                              className: p,
                              children: C('img', {
                                src: A.icon,
                                alt: A.tooltip,
                                title: A.tooltip,
                                onClick: Q,
                                className: G,
                              }),
                            },
                            x.indexOf(A),
                          )
                        : A.icon == d
                        ? C(
                            'div',
                            {
                              className: p,
                              children: C(
                                r,
                                {
                                  to: A.route,
                                  children: C('img', {
                                    src: A.icon,
                                    alt: A.tooltip,
                                    title: A.tooltip,
                                    className: G,
                                    onClick: () => {
                                      N(w('Dashboard'));
                                    },
                                  }),
                                },
                                A.route,
                              ),
                            },
                            x.indexOf(A),
                          )
                        : C(
                            'div',
                            {
                              className: p,
                              children: C(
                                r,
                                {
                                  to: A.route,
                                  children: C('img', {
                                    src: A.icon,
                                    alt: A.tooltip,
                                    title: A.tooltip,
                                    className: G,
                                  }),
                                },
                                A.route,
                              ),
                            },
                            x.indexOf(A),
                          ),
                    ),
                  }),
                  a('div', {
                    children: [
                      C('div', {
                        className: p,
                        id: 'documentation',
                        children: C('div', {
                          title: 'View Documentation',
                          children: C('a', {
                            href: 'https://codecharacter-docs-2023.netlify.app/',
                            rel: 'noreferrer noopener',
                            target: '_blank',
                            children: C('img', {
                              src: L,
                              alt: 'delta',
                              className: G,
                            }),
                          }),
                        }),
                      }),
                      C('div', {
                        className: p,
                        id: 'DELTA',
                        children: C('div', {
                          title: 'Made with ❤ by Delta',
                          children: C('div', {
                            className: u,
                            onClick: () => {
                              window.open('https://delta.nitt.edu/');
                            },
                            children: C('img', {
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
            : C(c, {}),
      })
    );
  },
  N = [
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
  W = () => {
    const A = new s(o);
    return C(E, {
      setOpened: e => {
        !1 === e &&
          A.updateCurrentUser({ updateTutorialLevel: 'NEXT' })
            .then(() => {
              I.success('Tutorial Completed');
            })
            .catch(A => {
              A instanceof Q && I.error(A.message);
            });
      },
      steps: N,
      children: C(b, {}),
    });
  };
export { W as default };