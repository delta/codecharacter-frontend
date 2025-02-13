import {
  r as e,
  c as a,
  b as t,
  u as r,
  k as s,
  bd as n,
  d as c,
  A as l,
  _ as i,
  aI as o,
  j as d,
  F as u,
  be as m,
  bf as h,
  Z as N,
  $ as _,
  bg as p,
  ak as g,
  C as b,
  e as A,
} from './index-24a58ae8.js';
import { g as f } from './Avatar-86792f54.js';
import { M as v } from './Modal-5efe701c.js';
import { B as C } from './Button-0a98cdad.js';
import { u as y, c as B } from './ThemeProvider-092c2682.js';
import { D as P } from './Dropdown-6fdeb033.js';
import { u as k, T as w } from './TourProvider-f8fb0617.js';
import { B as T } from './ButtonGroup-493c836f.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
import './extends-64d70faf.js';
import './react-lifecycles-compat.es-642e4ba5.js';
const S = e.forwardRef(
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
      const m = y(e, 'table'),
        h = B(
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
  I = {
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
  H =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgBvZfdbdswEMdPRP0uA/54bLqBO0HrCZpMUHuCuhPUmaDtBHEnaDaIN0gygfPmT8B+N2Dn/gHlUDRJHSkkf0CAJPLufiLvTlJGhjabzeXhcPhNZT01Go2rZrO5oxrabrf5fr//z6cX5n2l1M9Wq3VbXH8wBxkmtw1wzY7u2GE/FUrD3PFpzx7TMV8BSaaehsopUiEYl6RASVCxMLFAUVBSGM6hnReo0+lMjsfjP6oJJYVBLDOhocw1cblcTrIs+05hPXD1nSV6DEy32x3Y9zOfQQpUXRjIm0MwiN0+gLHNIyXCQBlVKGWlfDZVMCKgUIAYKAmMGMgVIAZKChMFlAq1Wq0GaCckVBRQKlSMooHeGioJ6C2hSn0I/YT3/Idroh67KXpOSp+yhfyyx5QZUHfZP+v1+pcNo8cGZoA6UDrGjT12AjJbPgcZF1CO10GvLhR8I4Y5Vkw85RCWD8SmF86RMRtekvvdNOVy7hcX0pziOVP2ObLuD4vWUEpqF1SFJuxoGAlFPhjo7HsIE0goftLSAwm3zwsDOcteslKh14FwpYauDu78/GBnHykRBpKslC/G2QpZFeDSAz/ZZxKIV/qeAh9rKJp2u31t3lORMFDP7lMu6TlVX45j25cSwkz42IUc2TCWL9j+JQGU8jgwDa51afdJAOWB6bOPEXxVQanFYjEKwXCCvoyxQzS1K3Ocf4M/2Tb2PdjAFufwFYICi2KDL1UwhTgBp6T7lK/SrAobahtz3AvFP43fMq4EJB7eJXkIxhQv71c7UOwc7lVjXgxzy1+29mTMYFs+jphI7yTEQkwdu1yRs9ksn8/nF/TOQlwcxfUzgG9tQKw/RCgAAAAASUVORK5CYII=';
function x(b) {
  const [A, y] = e.useState(0),
    [B, k] = e.useState([]),
    [w, T] = e.useState([]),
    [x, M] = e.useState([]),
    [R, U] = e.useState([]),
    [j, L] = e.useState([]),
    [D, E] = e.useState([]),
    [O, F] = e.useState(!1),
    [V, G] = e.useState(!1),
    [K, z] = e.useState(!1),
    [Q, X] = e.useState(!1),
    [Y, J] = e.useState(''),
    [W, Z] = e.useState(void 0),
    $ = t(),
    q = () => X(!1),
    ee = e => {
      J(e), X(!0);
    },
    ae = r(s).username,
    te = new n(c);
  switch (b.page) {
    case 'PvP':
      e.useEffect(() => {
        le(A, W);
      }, [A]),
        e.useEffect(() => {
          se();
        }, [R]);
      break;
    case 'DailyChallenge':
      e.useEffect(() => {
        ie(A);
      }, [A]),
        e.useEffect(() => {
          ne();
        }, [D]);
      break;
    default:
      e.useEffect(() => {
        ce(A, W);
      }, [A]),
        e.useEffect(() => {
          re();
        }, [w]);
  }
  function re() {
    let e = !1;
    return 0 == w.length && (e = !0), e;
  }
  function se() {
    let e = !1;
    return 0 == R.length && (e = !0), e;
  }
  function ne() {
    let e = !1;
    return 0 == D.length && (e = !0), e;
  }
  const ce = (e, a) => {
      F(!1),
        te
          .getLeaderboard(e, 8, a)
          .then(e => {
            k(e), F(!0);
          })
          .catch(e => {
            e instanceof l && i.error(e.message);
          }),
        te
          .getLeaderboard(e + 1, 8, a)
          .then(e => {
            T(e), F(!0);
          })
          .catch(e => {
            e instanceof l && i.error(e.message);
          });
    },
    le = (e, a) => {
      G(!1),
        te
          .getPvPLeaderboard(e, 8, a)
          .then(e => {
            M(e), G(!0);
          })
          .catch(e => {
            e instanceof l && i.error(e.message);
          }),
        te
          .getPvPLeaderboard(e + 1, 8, a)
          .then(e => {
            U(e), G(!0);
          })
          .catch(e => {
            e instanceof l && i.error(e.message);
          });
    },
    ie = e => {
      z(!1);
      const a = new o(c);
      a
        .getDailyChallengeLeaderBoard(e, 8)
        .then(e => {
          L(e), z(!0);
        })
        .catch(e => {
          e instanceof l && i.error(e.message);
        }),
        a
          .getDailyChallengeLeaderBoard(e + 1, 8)
          .then(e => {
            E(e), F(!0);
          })
          .catch(e => {
            e instanceof l && i.error(e.message);
          });
    };
  return d(u, {
    children: [
      a(u, {
        children:
          'Normal' == b.page
            ? O
              ? a(u, {
                  children: d('div', {
                    className: I.list,
                    children: [
                      d(v, {
                        show: Q,
                        onHide: q,
                        contentClassName: I.content,
                        children: [
                          d(v.Header, {
                            className: I.matchHeader,
                            children: [
                              a(v.Title, {
                                className: I.headerText,
                                children: 'Start a new match',
                              }),
                              a('button', {
                                type: 'button',
                                className: 'btn-close btn-close-white',
                                'aria-label': 'Close',
                                onClick: q,
                              }),
                            ],
                          }),
                          d(v.Body, {
                            className: I.matchBody,
                            children: [
                              'Do you want to start a match against',
                              ' ',
                              Y,
                              '?',
                            ],
                          }),
                          a(v.Footer, {
                            className: I.matchFooter,
                            children: a(C, {
                              className: I.matchModalBtn,
                              variant: 'outline-light',
                              size: 'lg',
                              onClick: () =>
                                (async function () {
                                  new N(c)
                                    .createMatch({
                                      mode: _.Manual,
                                      opponentUsername: Y,
                                      codeRevisionId: void 0,
                                      mapRevisionId: void 0,
                                    })
                                    .catch(e => {
                                      e instanceof l && i.error(e.message);
                                    }),
                                    $(p(g.NORMAL)),
                                    X(!1);
                                })(),
                              children: 'Start match',
                            }),
                          }),
                        ],
                      }),
                      d(S, {
                        hover: !0,
                        className: I.list,
                        responsive: !0,
                        children: [
                          a('thead', {
                            children: d('tr', {
                              className: I.tableHeader,
                              children: [
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'RANK',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'USERNAME',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'RATINGS',
                                }),
                                a('th', { className: I.tableHeader }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'WON',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'LOST',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'TIED',
                                }),
                              ],
                            }),
                          }),
                          a('tbody', {
                            children:
                              B &&
                              B.map(e =>
                                d(
                                  'tr',
                                  {
                                    className:
                                      I.item +
                                      ' ' +
                                      (ae === e.user.username
                                        ? I.currentUserItem
                                        : ''),
                                    children: [
                                      a('td', {
                                        className: I.pos,
                                        children: B.indexOf(e) + 1 + 8 * A,
                                      }),
                                      a('td', {
                                        className: I.name,
                                        children: d('div', {
                                          children: [
                                            a('img', {
                                              className: I.pic,
                                              src: f(e.user.avatarId).url,
                                            }),
                                            a('span', {
                                              className: I.namespan,
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
                                        className: I.score,
                                        children: e.stats.rating.toFixed(3),
                                      }),
                                      ae === e.user.username
                                        ? a('td', {
                                            className: I.score,
                                            children: '---',
                                          })
                                        : a('td', {
                                            className: I.attackButton,
                                            onClick: () => ee(e.user.username),
                                            children: a('img', {
                                              className: I.attackImg,
                                              src: H,
                                            }),
                                          }),
                                      a('td', {
                                        className: I.score,
                                        children: e.stats.wins,
                                      }),
                                      a('td', {
                                        className: I.score,
                                        children: e.stats.losses,
                                      }),
                                      a('td', {
                                        className: I.score,
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
              : a(m, {})
            : 'PvP' == b.page
            ? V
              ? a(u, {
                  children: d('div', {
                    className: I.list,
                    children: [
                      d(v, {
                        show: Q,
                        onHide: q,
                        contentClassName: I.content,
                        children: [
                          d(v.Header, {
                            className: I.matchHeader,
                            children: [
                              a(v.Title, {
                                className: I.headerText,
                                children: 'Start a new PvP match',
                              }),
                              a('button', {
                                type: 'button',
                                className: 'btn-close btn-close-white',
                                'aria-label': 'Close',
                                onClick: q,
                              }),
                            ],
                          }),
                          d(v.Body, {
                            className: I.matchBody,
                            children: [
                              'Do you want to start a PvP match against',
                              ' ',
                              Y,
                              '?',
                            ],
                          }),
                          a(v.Footer, {
                            className: I.matchFooter,
                            children: a(C, {
                              className: I.matchModalBtn,
                              variant: 'outline-light',
                              size: 'lg',
                              onClick: () =>
                                (async function () {
                                  new N(c)
                                    .createMatch({
                                      mode: _.Pvp,
                                      opponentUsername: Y,
                                      codeRevisionId: void 0,
                                      codeRevisionId2: void 0,
                                    })
                                    .catch(e => {
                                      e instanceof l && i.error(e.message);
                                    }),
                                    $(p(g.PVP)),
                                    X(!1);
                                })(),
                              children: 'Start match',
                            }),
                          }),
                        ],
                      }),
                      d(S, {
                        hover: !0,
                        className: I.list,
                        responsive: !0,
                        children: [
                          a('thead', {
                            children: d('tr', {
                              className: I.tableHeader,
                              children: [
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'RANK',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'USERNAME',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'RATINGS',
                                }),
                                a('th', { className: I.tableHeader }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'WON',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'LOST',
                                }),
                                a('th', {
                                  className: I.tableHeader,
                                  children: 'TIED',
                                }),
                              ],
                            }),
                          }),
                          a('tbody', {
                            children:
                              x &&
                              x.map(e =>
                                d(
                                  'tr',
                                  {
                                    className:
                                      I.item +
                                      ' ' +
                                      (ae === e.user.username
                                        ? I.currentUserItem
                                        : ''),
                                    children: [
                                      a('td', {
                                        className: I.pos,
                                        children: x.indexOf(e) + 1 + 8 * A,
                                      }),
                                      a('td', {
                                        className: I.name,
                                        children: d('div', {
                                          children: [
                                            a('img', {
                                              className: I.pic,
                                              src: f(e.user.avatarId).url,
                                            }),
                                            a('span', {
                                              className: I.namespan,
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
                                        className: I.score,
                                        children: e.stats.rating.toFixed(3),
                                      }),
                                      ae === e.user.username
                                        ? a('td', {
                                            className: I.score,
                                            children: '---',
                                          })
                                        : a('td', {
                                            className: I.attackButton,
                                            onClick: () => ee(e.user.username),
                                            children: a('img', {
                                              className: I.attackImg,
                                              src: H,
                                            }),
                                          }),
                                      a('td', {
                                        className: I.score,
                                        children: e.stats.wins,
                                      }),
                                      a('td', {
                                        className: I.score,
                                        children: e.stats.losses,
                                      }),
                                      a('td', {
                                        className: I.score,
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
              : a(m, {})
            : K
            ? a(u, {
                children: a('div', {
                  className: I.list,
                  children: d(S, {
                    hover: !0,
                    className: I.list,
                    responsive: !0,
                    children: [
                      a('thead', {
                        children: d('tr', {
                          className: I.tableHeader,
                          children: [
                            a('th', {
                              className: I.tableHeader,
                              children: 'RANK',
                            }),
                            a('th', {
                              className: I.tableHeader,
                              children: 'USERNAME',
                            }),
                            a('th', {
                              className: I.tableHeader,
                              children: 'SCORE',
                            }),
                          ],
                        }),
                      }),
                      a('tbody', {
                        children:
                          j &&
                          j.map(e =>
                            d(
                              'tr',
                              {
                                className:
                                  I.item +
                                  ' ' +
                                  (ae === e.userName ? I.currentUserItem : ''),
                                children: [
                                  a('td', {
                                    className: I.pos,
                                    children: j.indexOf(e) + 1 + 8 * A,
                                  }),
                                  a('td', {
                                    className: I.name,
                                    children: d('div', {
                                      children: [
                                        a('img', {
                                          className: I.pic,
                                          src: f(e.avatarId).url,
                                        }),
                                        ' ' + e.userName.substring(0, 10),
                                      ],
                                    }),
                                  }),
                                  a('td', {
                                    className: I.score,
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
            : a(m, {}),
      }),
      d('nav', {
        className: I.paginationouter,
        children: [
          a('button', {
            type: 'button',
            className: I.button,
            onClick: () => {
              0 !== A && y(e => e - 1);
            },
            children: '<',
          }),
          a('button', {
            type: 'button',
            className: I.button,
            onClick: () => {
              ('Normal' != b.page || re()) &&
              ('PvP' != b.page || se()) &&
              ('DailyChallenge' != b.page || ne())
                ? i("You're at the last page")
                : y(e => e + 1);
            },
            children: '>',
          }),
          a('button', {
            type: 'button',
            className: I.button,
            onClick: () => {
              'Normal' == b.page
                ? (ce(0, W), y(0))
                : 'PvP' == b.page
                ? (le(0, W), y(0))
                : 'DailyChallenge' == b.page && ie(0);
            },
            id: 'refresh',
            children: 'Refresh',
          }),
          'DailyChallenge' != b.page
            ? d(P, {
                id: 'tiers',
                children: [
                  a(P.Toggle, {
                    variant: 'dark',
                    className: I.button,
                    children:
                      (null == W ? void 0 : W.toString()) || 'All Tiers',
                  }),
                  d(P.Menu, {
                    className: I.menuBackground,
                    children: [
                      a(P.Item, {
                        className: I.menuText,
                        onClick: () => {
                          Z(void 0), 'Normal' == b.page ? ce(0) : le(0), y(0);
                        },
                        children: 'All Tiers',
                      }),
                      a(P.Item, {
                        className: I.menuText,
                        onClick: () => {
                          Z(h.Tier1),
                            'Normal' == b.page
                              ? ce(0, h.Tier1)
                              : le(0, h.Tier1),
                            y(0);
                        },
                        children: 'Tier 1',
                      }),
                      a(P.Item, {
                        className: I.menuText,
                        onClick: () => {
                          Z(h.Tier2),
                            'Normal' == b.page
                              ? ce(0, h.Tier2)
                              : le(0, h.Tier2),
                            y(0);
                        },
                        children: 'Tier 2',
                      }),
                    ],
                  }),
                ],
              })
            : a(u, {}),
        ],
      }),
    ],
  });
}
function M(e) {
  return a('div', {
    className: I.body,
    children: a('div', {
      className: I.ranklist,
      children: a(x, { page: e.page }),
    }),
  });
}
function R() {
  const [t, r] = e.useState('Normal Leaderboard'),
    [s, n] = e.useState('Normal'),
    { setIsOpen: l } = k(),
    i = new b(c);
  return (
    e.useEffect(() => {
      setTimeout(() => {
        i.getCurrentUser().then(e => {
          !1 === e.isTutorialComplete && 3 == e.tutorialLevel && l(!0);
        });
      }, 200);
    }, []),
    d('div', {
      className: I.mainleaderboard,
      id: 'LeaderBoard',
      children: [
        a('div', {
          className: I.buttonContainer,
          children: a('div', {
            className: I.codeMapButton,
            children: d(T, {
              id: 'LeaderboardTypeSelector',
              children: [
                a(C, {
                  className: 'Normal' == s ? I.whiteButton : I.darkButton,
                  onClick: () => {
                    n('Normal'), r('Normal Leaderboard');
                  },
                  variant: 'outline-light',
                  children: 'Normal',
                }),
                a(C, {
                  variant: 'outline-light',
                  className: 'PvP' == s ? I.whiteButton : I.darkButton,
                  onClick: () => {
                    n('PvP'), r('PvP Leaderboard');
                  },
                  children: 'PvP',
                }),
              ],
            }),
          }),
        }),
        a(
          M,
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
const U = [
    {
      selector: '#LeaderBoard',
      content:
        'This is the Leaderboard, you can rank up by winning more games. You can also view your daily challenge ranking by clicking on the daily challenge leaderboard button.',
    },
    { selector: '#refresh', content: 'Click here to refresh the leaderboard.' },
    { selector: '#tiers', content: 'Switch to filter players by tier.' },
  ],
  j = () => {
    const e = new b(c),
      t = r(s),
      n = A();
    return a(w, {
      setOpened: a => {
        !1 === a &&
          e
            .updateCurrentUser({
              name: t.name,
              country: t.country,
              college: t.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              n('/history', { replace: !0 });
            })
            .catch(e => {
              e instanceof l && i.error(e.message);
            });
      },
      steps: U,
      children: a(R, {}),
    });
  };
export { j as default };
