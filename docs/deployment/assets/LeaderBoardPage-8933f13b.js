import {
  r as e,
  c as a,
  u as t,
  k as r,
  b2 as s,
  d as n,
  A as c,
  _ as l,
  aC as i,
  j as o,
  F as d,
  b3 as u,
  b4 as m,
  Z as h,
  $ as N,
  C as _,
  e as p,
} from './index-3b0785b0.js';
import { g } from './Avatar-86792f54.js';
import { M as b } from './Modal-d30bd2b2.js';
import { B as f } from './Button-4e851fa0.js';
import { u as A, c as v } from './ThemeProvider-528d6954.js';
import { D as C } from './Dropdown-4b058903.js';
import { u as B, T as k } from './TourProvider-a2db2cbe.js';
import { B as w } from './ButtonGroup-f73c4b68.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
import './extends-64d70faf.js';
import './react-lifecycles-compat.es-642e4ba5.js';
const y = e.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        striped: r,
        bordered: s,
        borderless: n,
        hover: c,
        size: l,
        variant: i,
        responsive: o,
        ...d
      },
      u,
    ) => {
      const m = A(e, 'table'),
        h = v(
          t,
          m,
          i && `${m}-${i}`,
          l && `${m}-${l}`,
          r && `${m}-${'string' == typeof r ? `striped-${r}` : 'striped'}`,
          s && `${m}-bordered`,
          n && `${m}-borderless`,
          c && `${m}-hover`,
        ),
        N = a('table', { ...d, className: h, ref: u });
      if (o) {
        let e = `${m}-responsive`;
        return (
          'string' == typeof o && (e = `${e}-${o}`),
          a('div', { className: e, children: N })
        );
      }
      return N;
    },
  ),
  T = {
    header: '_header_1uurt_1',
    header__icon: '_header__icon_1uurt_14',
    header__title: '_header__title_1uurt_20',
    mainleaderboard: '_mainleaderboard_1uurt_27',
    ranklist: '_ranklist_1uurt_33',
    list: '_list_1uurt_42',
    item: '_item_1uurt_53',
    tier3: '_tier3_1uurt_62',
    tier2: '_tier2_1uurt_68',
    tier1: '_tier1_1uurt_74',
    tier0: '_tier0_1uurt_80',
    currentUserItem: '_currentUserItem_1uurt_86',
    tierheader: '_tierheader_1uurt_93',
    pos: '_pos_1uurt_97',
    pic: '_pic_1uurt_105',
    name: '_name_1uurt_113',
    score: '_score_1uurt_137',
    tableHeader: '_tableHeader_1uurt_166',
    attackButton: '_attackButton_1uurt_178',
    attackImg: '_attackImg_1uurt_192',
    paginationouter: '_paginationouter_1uurt_197',
    pagination: '_pagination_1uurt_197',
    menuText: '_menuText_1uurt_217',
    menuBackground: '_menuBackground_1uurt_222',
    matchHeader: '_matchHeader_1uurt_226',
    headerText: '_headerText_1uurt_233',
    matchBody: '_matchBody_1uurt_241',
    matchFooter: '_matchFooter_1uurt_251',
    matchModalBtn: '_matchModalBtn_1uurt_256',
    content: '_content_1uurt_269',
    button: '_button_1uurt_273',
    menu: '_menu_1uurt_217',
    'dropdown-toggle': '_dropdown-toggle_1uurt_298',
    selectButton: '_selectButton_1uurt_303',
    buttonContainer: '_buttonContainer_1uurt_324',
    whiteButton: '_whiteButton_1uurt_331',
    darkButton: '_darkButton_1uurt_348',
  },
  S =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgBvZfdbdswEMdPRP0uA/54bLqBO0HrCZpMUHuCuhPUmaDtBHEnaDaIN0gygfPmT8B+N2Dn/gHlUDRJHSkkf0CAJPLufiLvTlJGhjabzeXhcPhNZT01Go2rZrO5oxrabrf5fr//z6cX5n2l1M9Wq3VbXH8wBxkmtw1wzY7u2GE/FUrD3PFpzx7TMV8BSaaehsopUiEYl6RASVCxMLFAUVBSGM6hnReo0+lMjsfjP6oJJYVBLDOhocw1cblcTrIs+05hPXD1nSV6DEy32x3Y9zOfQQpUXRjIm0MwiN0+gLHNIyXCQBlVKGWlfDZVMCKgUIAYKAmMGMgVIAZKChMFlAq1Wq0GaCckVBRQKlSMooHeGioJ6C2hSn0I/YT3/Idroh67KXpOSp+yhfyyx5QZUHfZP+v1+pcNo8cGZoA6UDrGjT12AjJbPgcZF1CO10GvLhR8I4Y5Vkw85RCWD8SmF86RMRtekvvdNOVy7hcX0pziOVP2ObLuD4vWUEpqF1SFJuxoGAlFPhjo7HsIE0goftLSAwm3zwsDOcteslKh14FwpYauDu78/GBnHykRBpKslC/G2QpZFeDSAz/ZZxKIV/qeAh9rKJp2u31t3lORMFDP7lMu6TlVX45j25cSwkz42IUc2TCWL9j+JQGU8jgwDa51afdJAOWB6bOPEXxVQanFYjEKwXCCvoyxQzS1K3Ocf4M/2Tb2PdjAFufwFYICi2KDL1UwhTgBp6T7lK/SrAobahtz3AvFP43fMq4EJB7eJXkIxhQv71c7UOwc7lVjXgxzy1+29mTMYFs+jphI7yTEQkwdu1yRs9ksn8/nF/TOQlwcxfUzgG9tQKw/RCgAAAAASUVORK5CYII=';
function P(_) {
  const [p, A] = e.useState(0),
    [v, B] = e.useState([]),
    [k, w] = e.useState([]),
    [P, I] = e.useState([]),
    [H, x] = e.useState([]),
    [M, R] = e.useState([]),
    [U, E] = e.useState([]),
    [L, j] = e.useState(!1),
    [D, O] = e.useState(!1),
    [F, G] = e.useState(!1),
    [K, V] = e.useState(!1),
    [Q, z] = e.useState(''),
    [X, Y] = e.useState(void 0),
    J = () => V(!1),
    Z = e => {
      z(e), V(!0);
    },
    $ = t(r).username,
    W = new s(n);
  switch (_.page) {
    case 'PvP':
      e.useEffect(() => {
        ae(p);
      }, [p]),
        e.useEffect(() => {
          !(function () {
            let e = !1;
            0 == H.length && (e = !0);
          })();
        }, [H]);
      break;
    case 'DailyChallenge':
      e.useEffect(() => {
        te(p);
      }, [p]),
        e.useEffect(() => {
          !(function () {
            let e = !1;
            0 == U.length && (e = !0);
          })();
        }, [U]);
      break;
    default:
      e.useEffect(() => {
        ee(p, X);
      }, [p]),
        e.useEffect(() => {
          q();
        }, [k]);
  }
  function q() {
    let e = !1;
    return 0 == k.length && (e = !0), e;
  }
  const ee = (e, a) => {
      j(!1),
        W.getLeaderboard(e, 8, a)
          .then(e => {
            B(e), j(!0);
          })
          .catch(e => {
            e instanceof c && l.error(e.message);
          }),
        W.getLeaderboard(e + 1, 8, a)
          .then(e => {
            w(e), j(!0);
          })
          .catch(e => {
            e instanceof c && l.error(e.message);
          });
    },
    ae = e => {
      O(!1),
        W.getPvPLeaderboard(e, 8)
          .then(e => {
            I(e), O(!0);
          })
          .catch(e => {
            e instanceof c && l.error(e.message);
          }),
        W.getPvPLeaderboard(e + 1, 8)
          .then(e => {
            x(e), O(!0);
          })
          .catch(e => {
            e instanceof c && l.error(e.message);
          });
    },
    te = e => {
      G(!1);
      const a = new i(n);
      a
        .getDailyChallengeLeaderBoard(e, 8)
        .then(e => {
          R(e), G(!0);
        })
        .catch(e => {
          e instanceof c && l.error(e.message);
        }),
        a
          .getDailyChallengeLeaderBoard(e + 1, 8)
          .then(e => {
            E(e), j(!0);
          })
          .catch(e => {
            e instanceof c && l.error(e.message);
          });
    };
  return o(d, {
    children: [
      a(d, {
        children:
          'Normal' == _.page
            ? L
              ? a(d, {
                  children: o('div', {
                    className: T.list,
                    children: [
                      o(b, {
                        show: K,
                        onHide: J,
                        contentClassName: T.content,
                        children: [
                          o(b.Header, {
                            className: T.matchHeader,
                            children: [
                              a(b.Title, {
                                className: T.headerText,
                                children: 'Start a new match',
                              }),
                              a('button', {
                                type: 'button',
                                className: 'btn-close btn-close-white',
                                'aria-label': 'Close',
                                onClick: J,
                              }),
                            ],
                          }),
                          o(b.Body, {
                            className: T.matchBody,
                            children: [
                              'Do you want to start a match against',
                              ' ',
                              Q,
                              '?',
                            ],
                          }),
                          a(b.Footer, {
                            className: T.matchFooter,
                            children: a(f, {
                              className: T.matchModalBtn,
                              variant: 'outline-light',
                              size: 'lg',
                              onClick: () =>
                                (async function () {
                                  new h(n)
                                    .createMatch({
                                      mode: N.Manual,
                                      opponentUsername: Q,
                                      codeRevisionId: void 0,
                                      mapRevisionId: void 0,
                                    })
                                    .catch(e => {
                                      e instanceof c && l.error(e.message);
                                    }),
                                    V(!1);
                                })(),
                              children: 'Start match',
                            }),
                          }),
                        ],
                      }),
                      o(y, {
                        hover: !0,
                        className: T.list,
                        responsive: !0,
                        children: [
                          a('thead', {
                            children: o('tr', {
                              className: T.tableHeader,
                              children: [
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'RANK',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'USERNAME',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'RATINGS',
                                }),
                                a('th', { className: T.tableHeader }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'WON',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'LOST',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'TIED',
                                }),
                              ],
                            }),
                          }),
                          a('tbody', {
                            children:
                              v &&
                              v.map(e =>
                                o(
                                  'tr',
                                  {
                                    className:
                                      T.item +
                                      ' ' +
                                      ($ === e.user.username
                                        ? T.currentUserItem
                                        : ''),
                                    children: [
                                      a('td', {
                                        className: T.pos,
                                        children: v.indexOf(e) + 1 + 8 * p,
                                      }),
                                      a('td', {
                                        className: T.name,
                                        children: o('div', {
                                          children: [
                                            a('img', {
                                              className: T.pic,
                                              src: g(e.user.avatarId).url,
                                            }),
                                            a('span', {
                                              className: T.namespan,
                                              children:
                                                ' ' +
                                                e.user.username.substring(
                                                  0,
                                                  10,
                                                ),
                                            }),
                                          ],
                                        }),
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.rating.toFixed(3),
                                      }),
                                      $ === e.user.username
                                        ? a('td', {
                                            className: T.score,
                                            children: '---',
                                          })
                                        : a('td', {
                                            className: T.attackButton,
                                            onClick: () => Z(e.user.username),
                                            children: a('img', {
                                              className: T.attackImg,
                                              src: S,
                                            }),
                                          }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.wins,
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.losses,
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.ties,
                                      }),
                                    ],
                                  },
                                  e.user.username,
                                ),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : a(u, {})
            : 'PvP' == _.page
            ? D
              ? a(d, {
                  children: o('div', {
                    className: T.list,
                    children: [
                      o(b, {
                        show: K,
                        onHide: J,
                        contentClassName: T.content,
                        children: [
                          o(b.Header, {
                            className: T.matchHeader,
                            children: [
                              a(b.Title, {
                                className: T.headerText,
                                children: 'Start a new PvP match',
                              }),
                              a('button', {
                                type: 'button',
                                className: 'btn-close btn-close-white',
                                'aria-label': 'Close',
                                onClick: J,
                              }),
                            ],
                          }),
                          o(b.Body, {
                            className: T.matchBody,
                            children: [
                              'Do you want to start a PvP match against',
                              ' ',
                              Q,
                              '?',
                            ],
                          }),
                          a(b.Footer, {
                            className: T.matchFooter,
                            children: a(f, {
                              className: T.matchModalBtn,
                              variant: 'outline-light',
                              size: 'lg',
                              onClick: () =>
                                (async function () {
                                  new h(n)
                                    .createMatch({
                                      mode: N.Pvp,
                                      opponentUsername: Q,
                                      codeRevisionId: void 0,
                                      codeRevisionId2: void 0,
                                    })
                                    .catch(e => {
                                      e instanceof c && l.error(e.message);
                                    }),
                                    V(!1);
                                })(),
                              children: 'Start match',
                            }),
                          }),
                        ],
                      }),
                      o(y, {
                        hover: !0,
                        className: T.list,
                        responsive: !0,
                        children: [
                          a('thead', {
                            children: o('tr', {
                              className: T.tableHeader,
                              children: [
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'RANK',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'USERNAME',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'RATINGS',
                                }),
                                a('th', { className: T.tableHeader }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'WON',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'LOST',
                                }),
                                a('th', {
                                  className: T.tableHeader,
                                  children: 'TIED',
                                }),
                              ],
                            }),
                          }),
                          a('tbody', {
                            children:
                              P &&
                              P.map(e =>
                                o(
                                  'tr',
                                  {
                                    className:
                                      T.item +
                                      ' ' +
                                      ($ === e.user.username
                                        ? T.currentUserItem
                                        : ''),
                                    children: [
                                      a('td', {
                                        className: T.pos,
                                        children: P.indexOf(e) + 1 + 8 * p,
                                      }),
                                      a('td', {
                                        className: T.name,
                                        children: o('div', {
                                          children: [
                                            a('img', {
                                              className: T.pic,
                                              src: g(e.user.avatarId).url,
                                            }),
                                            a('span', {
                                              className: T.namespan,
                                              children:
                                                ' ' +
                                                e.user.username.substring(
                                                  0,
                                                  10,
                                                ),
                                            }),
                                          ],
                                        }),
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.rating.toFixed(3),
                                      }),
                                      $ === e.user.username
                                        ? a('td', {
                                            className: T.score,
                                            children: '---',
                                          })
                                        : a('td', {
                                            className: T.attackButton,
                                            onClick: () => Z(e.user.username),
                                            children: a('img', {
                                              className: T.attackImg,
                                              src: S,
                                            }),
                                          }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.wins,
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.losses,
                                      }),
                                      a('td', {
                                        className: T.score,
                                        children: e.stats.ties,
                                      }),
                                    ],
                                  },
                                  e.user.username,
                                ),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : a(u, {})
            : F
            ? a(d, {
                children: a('div', {
                  className: T.list,
                  children: o(y, {
                    hover: !0,
                    className: T.list,
                    responsive: !0,
                    children: [
                      a('thead', {
                        children: o('tr', {
                          className: T.tableHeader,
                          children: [
                            a('th', {
                              className: T.tableHeader,
                              children: 'RANK',
                            }),
                            a('th', {
                              className: T.tableHeader,
                              children: 'USERNAME',
                            }),
                            a('th', {
                              className: T.tableHeader,
                              children: 'SCORE',
                            }),
                          ],
                        }),
                      }),
                      a('tbody', {
                        children:
                          M &&
                          M.map(e =>
                            o(
                              'tr',
                              {
                                className:
                                  T.item +
                                  ' ' +
                                  ($ === e.userName ? T.currentUserItem : ''),
                                children: [
                                  a('td', {
                                    className: T.pos,
                                    children: M.indexOf(e) + 1 + 8 * p,
                                  }),
                                  a('td', {
                                    className: T.name,
                                    children: o('div', {
                                      children: [
                                        a('img', {
                                          className: T.pic,
                                          src: g(e.avatarId).url,
                                        }),
                                        ' ' + e.userName.substring(0, 10),
                                      ],
                                    }),
                                  }),
                                  a('td', {
                                    className: T.score,
                                    children: e.score.toFixed(2),
                                  }),
                                ],
                              },
                              e.userName,
                            ),
                          ),
                      }),
                    ],
                  }),
                }),
              })
            : a(u, {}),
      }),
      o('nav', {
        className: T.paginationouter,
        children: [
          a('button', {
            type: 'button',
            className: T.button,
            onClick: () => {
              0 !== p && A(e => e - 1);
            },
            children: '<',
          }),
          a('button', {
            type: 'button',
            className: T.button,
            onClick: () => {
              q() ? l("You're at the last page") : A(e => e + 1);
            },
            children: '>',
          }),
          a('button', {
            type: 'button',
            className: T.button,
            onClick: () => {
              'Normal' == _.page ? (ee(0, X), A(0)) : (ae(0), A(0));
            },
            id: 'refresh',
            children: 'Refresh',
          }),
          'Normal' == _.page
            ? o(C, {
                id: 'tiers',
                children: [
                  a(C.Toggle, {
                    variant: 'dark',
                    className: T.button,
                    children:
                      (null == X ? void 0 : X.toString()) || 'All Tiers',
                  }),
                  o(C.Menu, {
                    className: T.menuBackground,
                    children: [
                      a(C.Item, {
                        className: T.menuText,
                        onClick: () => {
                          Y(void 0), ee(0), A(0);
                        },
                        children: 'All Tiers',
                      }),
                      a(C.Item, {
                        className: T.menuText,
                        onClick: () => {
                          Y(m.Tier1), ee(0, m.Tier1), A(0);
                        },
                        children: 'Tier 1',
                      }),
                      a(C.Item, {
                        className: T.menuText,
                        onClick: () => {
                          Y(m.Tier2), ee(0, m.Tier2), A(0);
                        },
                        children: 'Tier 2',
                      }),
                    ],
                  }),
                ],
              })
            : a(d, {}),
        ],
      }),
    ],
  });
}
function I(e) {
  return a('div', {
    className: T.body,
    children: a('div', {
      className: T.ranklist,
      children: a(P, { page: e.page }),
    }),
  });
}
function H() {
  const [t, r] = e.useState('Normal Leaderboard'),
    [s, c] = e.useState('Normal'),
    { setIsOpen: l } = B(),
    i = new _(n);
  return (
    e.useEffect(() => {
      setTimeout(() => {
        i.getCurrentUser().then(e => {
          !1 === e.isTutorialComplete && 3 == e.tutorialLevel && l(!0);
        });
      }, 200);
    }, []),
    o('div', {
      className: T.mainleaderboard,
      id: 'LeaderBoard',
      children: [
        a('div', {
          className: T.buttonContainer,
          children: a('div', {
            className: T.codeMapButton,
            children: o(w, {
              id: 'LeaderboardTypeSelector',
              children: [
                a(f, {
                  className: 'Normal' == s ? T.whiteButton : T.darkButton,
                  onClick: () => {
                    c('Normal'), r('Normal Leaderboard');
                  },
                  variant: 'outline-light',
                  children: 'Normal',
                }),
                a(f, {
                  variant: 'outline-light',
                  className: 'PvP' == s ? T.whiteButton : T.darkButton,
                  onClick: () => {
                    c('PvP'), r('PvP Leaderboard');
                  },
                  children: 'PvP',
                }),
              ],
            }),
          }),
        }),
        a(
          I,
          'Daily Challenge Leaderboard' == t
            ? { page: 'DailyChallenge' }
            : 'PvP Leaderboard' == t
            ? { page: 'PvP' }
            : { page: 'Normal' },
          t,
        ),
      ],
    })
  );
}
const x = [
    {
      selector: '#LeaderBoard',
      content:
        'This is the Leaderboard, you can rank up by winning more games. You can also view your daily challenge ranking by clicking on the daily challenge leaderboard button.',
    },
    { selector: '#refresh', content: 'Click here to refresh the leaderboard.' },
    { selector: '#tiers', content: 'Switch to filter players by tier.' },
  ],
  M = () => {
    const e = new _(n),
      s = t(r),
      i = p();
    return a(k, {
      setOpened: a => {
        !1 === a &&
          e
            .updateCurrentUser({
              name: s.name,
              country: s.country,
              college: s.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              i('/history', { replace: !0 });
            })
            .catch(e => {
              e instanceof c && l.error(e.message);
            });
      },
      steps: x,
      children: a(H, {}),
    });
  };
export { M as default };
