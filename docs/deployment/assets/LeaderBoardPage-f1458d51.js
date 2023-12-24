import {
  r as e,
  c as a,
  j as t,
  u as r,
  k as s,
  ap as c,
  d as n,
  A as l,
  _ as i,
  F as o,
  aP as d,
  aQ as h,
  aR as m,
  Z as u,
  $ as _,
  C as p,
  e as N,
} from './index-624895d1.js';
import { g as b } from './Avatar-86792f54.js';
import { u as k, c as g } from './ThemeProvider-a8cd1696.js';
import { M as A } from './Modal-e0d29421.js';
import { B as f } from './Button-1591a852.js';
import { D as v } from './Dropdown-e4232a0e.js';
import { u as y, T as C } from './TourProvider-926faeac.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-b4c3ccd3.js';
import './index-06bcf729.js';
import './divWithClassName-487073c7.js';
import './extends-64d70faf.js';
import './react-lifecycles-compat.es-642e4ba5.js';
const T = e.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        striped: r,
        bordered: s,
        borderless: c,
        hover: n,
        size: l,
        variant: i,
        responsive: o,
        ...d
      },
      h,
    ) => {
      const m = k(e, 'table'),
        u = g(
          t,
          m,
          i && `${m}-${i}`,
          l && `${m}-${l}`,
          r && `${m}-${'string' == typeof r ? `striped-${r}` : 'striped'}`,
          s && `${m}-bordered`,
          c && `${m}-borderless`,
          n && `${m}-hover`,
        ),
        _ = a('table', { ...d, className: u, ref: h });
      if (o) {
        let e = `${m}-responsive`;
        return (
          'string' == typeof o && (e = `${e}-${o}`),
          a('div', { className: e, children: _ })
        );
      }
      return _;
    },
  ),
  w = {
    header: '_header_1ck92_1',
    header__icon: '_header__icon_1ck92_14',
    header__title: '_header__title_1ck92_20',
    mainleaderboard: '_mainleaderboard_1ck92_27',
    ranklist: '_ranklist_1ck92_33',
    list: '_list_1ck92_42',
    item: '_item_1ck92_53',
    tier3: '_tier3_1ck92_62',
    tier2: '_tier2_1ck92_68',
    tier1: '_tier1_1ck92_74',
    tier0: '_tier0_1ck92_80',
    currentUserItem: '_currentUserItem_1ck92_86',
    tierheader: '_tierheader_1ck92_93',
    pos: '_pos_1ck92_97',
    pic: '_pic_1ck92_105',
    name: '_name_1ck92_113',
    score: '_score_1ck92_137',
    tableHeader: '_tableHeader_1ck92_166',
    attackButton: '_attackButton_1ck92_178',
    attackImg: '_attackImg_1ck92_192',
    paginationouter: '_paginationouter_1ck92_197',
    pagination: '_pagination_1ck92_197',
    menuText: '_menuText_1ck92_217',
    menuBackground: '_menuBackground_1ck92_222',
    matchHeader: '_matchHeader_1ck92_226',
    headerText: '_headerText_1ck92_233',
    matchBody: '_matchBody_1ck92_241',
    matchFooter: '_matchFooter_1ck92_251',
    matchModalBtn: '_matchModalBtn_1ck92_256',
    content: '_content_1ck92_269',
    button: '_button_1ck92_273',
    menu: '_menu_1ck92_217',
    'dropdown-toggle': '_dropdown-toggle_1ck92_298',
  };
function S() {
  const [h, m] = e.useState(0),
    [u, _] = e.useState([]),
    [p, N] = e.useState([]),
    [k, g] = e.useState(!1),
    A = r(s).username;
  function f() {
    let e = !1;
    return 0 == p.length && (e = !0), e;
  }
  e.useEffect(() => {
    v(h);
  }, [h]),
    e.useEffect(() => {
      f();
    }, [p]);
  const v = e => {
    g(!1);
    const a = new c(n);
    a
      .getDailyChallengeLeaderBoard(e, 8)
      .then(e => {
        _(e), g(!0);
      })
      .catch(e => {
        e instanceof l && i.error(e.message);
      }),
      a
        .getDailyChallengeLeaderBoard(e + 1, 8)
        .then(e => {
          N(e);
        })
        .catch(e => {
          e instanceof l && i.error(e.message);
        });
  };
  return t(o, {
    children: [
      a(o, {
        children: k
          ? a(o, {
              children: a('div', {
                className: w.list,
                children: t(T, {
                  hover: !0,
                  className: w.list,
                  responsive: !0,
                  children: [
                    a('thead', {
                      children: t('tr', {
                        className: w.tableHeader,
                        children: [
                          a('th', {
                            className: w.tableHeader,
                            children: 'RANK',
                          }),
                          a('th', {
                            className: w.tableHeader,
                            children: 'USERNAME',
                          }),
                          a('th', {
                            className: w.tableHeader,
                            children: 'SCORE',
                          }),
                        ],
                      }),
                    }),
                    a('tbody', {
                      children:
                        u &&
                        u.map(e =>
                          t(
                            'tr',
                            {
                              className:
                                w.item +
                                ' ' +
                                (A === e.userName ? w.currentUserItem : ''),
                              children: [
                                a('td', {
                                  className: w.pos,
                                  children: u.indexOf(e) + 1 + 8 * h,
                                }),
                                a('td', {
                                  className: w.name,
                                  children: t('div', {
                                    children: [
                                      a('img', {
                                        className: w.pic,
                                        src: b(e.avatarId).url,
                                      }),
                                      ' ' + e.userName.substring(0, 10),
                                    ],
                                  }),
                                }),
                                a('td', {
                                  className: w.score,
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
          : a(d, {}),
      }),
      t('nav', {
        className: w.paginationouter,
        children: [
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              0 !== h && m(e => e - 1);
            },
            children: '<',
          }),
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              f() ? i("You're at the last page") : m(e => e + 1);
            },
            children: '>',
          }),
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              v(0), m(0);
            },
            children: 'Refresh',
          }),
        ],
      }),
    ],
  });
}
function B() {
  return t('div', {
    className: w.body,
    children: [
      a('div', {
        className: w.header,
        children: a('h1', {
          className: w.header__title,
          children: a('span', { children: 'Daily Challenge Leaderboard' }),
        }),
      }),
      a('div', { className: w.ranklist, children: a(S, {}) }),
    ],
  });
}
const I =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgBvZfdbdswEMdPRP0uA/54bLqBO0HrCZpMUHuCuhPUmaDtBHEnaDaIN0gygfPmT8B+N2Dn/gHlUDRJHSkkf0CAJPLufiLvTlJGhjabzeXhcPhNZT01Go2rZrO5oxrabrf5fr//z6cX5n2l1M9Wq3VbXH8wBxkmtw1wzY7u2GE/FUrD3PFpzx7TMV8BSaaehsopUiEYl6RASVCxMLFAUVBSGM6hnReo0+lMjsfjP6oJJYVBLDOhocw1cblcTrIs+05hPXD1nSV6DEy32x3Y9zOfQQpUXRjIm0MwiN0+gLHNIyXCQBlVKGWlfDZVMCKgUIAYKAmMGMgVIAZKChMFlAq1Wq0GaCckVBRQKlSMooHeGioJ6C2hSn0I/YT3/Idroh67KXpOSp+yhfyyx5QZUHfZP+v1+pcNo8cGZoA6UDrGjT12AjJbPgcZF1CO10GvLhR8I4Y5Vkw85RCWD8SmF86RMRtekvvdNOVy7hcX0pziOVP2ObLuD4vWUEpqF1SFJuxoGAlFPhjo7HsIE0goftLSAwm3zwsDOcteslKh14FwpYauDu78/GBnHykRBpKslC/G2QpZFeDSAz/ZZxKIV/qeAh9rKJp2u31t3lORMFDP7lMu6TlVX45j25cSwkz42IUc2TCWL9j+JQGU8jgwDa51afdJAOWB6bOPEXxVQanFYjEKwXCCvoyxQzS1K3Ocf4M/2Tb2PdjAFufwFYICi2KDL1UwhTgBp6T7lK/SrAobahtz3AvFP43fMq4EJB7eJXkIxhQv71c7UOwc7lVjXgxzy1+29mTMYFs+jphI7yTEQkwdu1yRs9ksn8/nF/TOQlwcxfUzgG9tQKw/RCgAAAAASUVORK5CYII=';
function x() {
  const [c, p] = e.useState(0),
    [N, k] = e.useState([]),
    [g, y] = e.useState([]),
    [C, S] = e.useState(!1),
    [B, x] = e.useState(!1),
    [H, M] = e.useState(''),
    [R, U] = e.useState(void 0),
    j = () => x(!1),
    D = r(s).username;
  function E() {
    let e = !1;
    return 0 == g.length && (e = !0), e;
  }
  e.useEffect(() => {
    O(c, R);
  }, [c]),
    e.useEffect(() => {
      E();
    }, [g]);
  const O = (e, a) => {
    S(!1);
    const t = new h(n);
    t
      .getLeaderboard(e, 8, a)
      .then(e => {
        k(e), S(!0);
      })
      .catch(e => {
        e instanceof l && i.error(e.message);
      }),
      t
        .getLeaderboard(e + 1, 8, a)
        .then(e => {
          y(e), S(!0);
        })
        .catch(e => {
          e instanceof l && i.error(e.message);
        });
  };
  return t(o, {
    children: [
      a(o, {
        children: C
          ? a(o, {
              children: t('div', {
                className: w.list,
                children: [
                  t(A, {
                    show: B,
                    onHide: j,
                    contentClassName: w.content,
                    children: [
                      t(A.Header, {
                        className: w.matchHeader,
                        children: [
                          a(A.Title, {
                            className: w.headerText,
                            children: 'Start a new match',
                          }),
                          a('button', {
                            type: 'button',
                            className: 'btn-close btn-close-white',
                            'aria-label': 'Close',
                            onClick: j,
                          }),
                        ],
                      }),
                      t(A.Body, {
                        className: w.matchBody,
                        children: [
                          'Do you want to start a match against ',
                          H,
                          '?',
                        ],
                      }),
                      a(A.Footer, {
                        className: w.matchFooter,
                        children: a(f, {
                          className: w.matchModalBtn,
                          variant: 'outline-light',
                          size: 'lg',
                          onClick: () =>
                            (async function () {
                              new u(n)
                                .createMatch({
                                  mode: _.Manual,
                                  opponentUsername: H,
                                  codeRevisionId: void 0,
                                  mapRevisionId: void 0,
                                })
                                .catch(e => {
                                  e instanceof l && i.error(e.message);
                                }),
                                x(!1);
                            })(),
                          children: 'Start match',
                        }),
                      }),
                    ],
                  }),
                  t(T, {
                    hover: !0,
                    className: w.list,
                    responsive: !0,
                    children: [
                      a('thead', {
                        children: t('tr', {
                          className: w.tableHeader,
                          children: [
                            a('th', {
                              className: w.tableHeader,
                              children: 'RANK',
                            }),
                            a('th', {
                              className: w.tableHeader,
                              children: 'USERNAME',
                            }),
                            a('th', {
                              className: w.tableHeader,
                              children: 'RATINGS',
                            }),
                            a('th', { className: w.tableHeader }),
                            a('th', {
                              className: w.tableHeader,
                              children: 'WON',
                            }),
                            a('th', {
                              className: w.tableHeader,
                              children: 'LOST',
                            }),
                            a('th', {
                              className: w.tableHeader,
                              children: 'TIED',
                            }),
                          ],
                        }),
                      }),
                      a('tbody', {
                        children:
                          N &&
                          N.map(e =>
                            t(
                              'tr',
                              {
                                className:
                                  w.item +
                                  ' ' +
                                  (D === e.user.username
                                    ? w.currentUserItem
                                    : ''),
                                children: [
                                  a('td', {
                                    className: w.pos,
                                    children: N.indexOf(e) + 1 + 8 * c,
                                  }),
                                  a('td', {
                                    className: w.name,
                                    children: t('div', {
                                      children: [
                                        a('img', {
                                          className: w.pic,
                                          src: b(e.user.avatarId).url,
                                        }),
                                        a('span', {
                                          className: w.namespan,
                                          children:
                                            ' ' +
                                            e.user.username.substring(0, 10),
                                        }),
                                      ],
                                    }),
                                  }),
                                  a('td', {
                                    className: w.score,
                                    children: e.stats.rating.toFixed(3),
                                  }),
                                  D === e.user.username
                                    ? a('td', {
                                        className: w.score,
                                        children: '---',
                                      })
                                    : a('td', {
                                        className: w.attackButton,
                                        onClick: () => {
                                          return (
                                            (a = e.user.username),
                                            M(a),
                                            void x(!0)
                                          );
                                          var a;
                                        },
                                        children: a('img', {
                                          className: w.attackImg,
                                          src: I,
                                        }),
                                      }),
                                  a('td', {
                                    className: w.score,
                                    children: e.stats.wins,
                                  }),
                                  a('td', {
                                    className: w.score,
                                    children: e.stats.losses,
                                  }),
                                  a('td', {
                                    className: w.score,
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
          : a(d, {}),
      }),
      t('nav', {
        className: w.paginationouter,
        children: [
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              0 !== c && p(e => e - 1);
            },
            children: '<',
          }),
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              E() ? i("You're at the last page") : p(e => e + 1);
            },
            children: '>',
          }),
          a('button', {
            type: 'button',
            className: w.button,
            onClick: () => {
              O(0, R), p(0);
            },
            id: 'refresh',
            children: 'Refresh',
          }),
          t(v, {
            id: 'tiers',
            children: [
              a(v.Toggle, {
                variant: 'dark',
                className: w.button,
                children: (null == R ? void 0 : R.toString()) || 'All Tiers',
              }),
              t(v.Menu, {
                className: w.menuBackground,
                children: [
                  a(v.Item, {
                    className: w.menuText,
                    onClick: () => {
                      U(void 0), O(0), p(0);
                    },
                    children: 'All Tiers',
                  }),
                  a(v.Item, {
                    className: w.menuText,
                    onClick: () => {
                      U(m.Tier1), O(0, m.Tier1), p(0);
                    },
                    children: 'Tier 1',
                  }),
                  a(v.Item, {
                    className: w.menuText,
                    onClick: () => {
                      U(m.Tier2), O(0, m.Tier2), p(0);
                    },
                    children: 'Tier 2',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function H() {
  return t('div', {
    className: w.body,
    children: [
      a('div', {
        className: w.header,
        children: a('h1', {
          className: w.header__title,
          children: a('span', { children: 'Match Leaderboard' }),
        }),
      }),
      a('div', { className: w.ranklist, children: a(x, {}) }),
    ],
  });
}
function M() {
  const [r, s] = e.useState(!1);
  e.useState('Daily Challenge Leaderboard');
  const { setIsOpen: c } = y(),
    l = new p(n);
  return (
    e.useEffect(() => {
      setTimeout(() => {
        l.getCurrentUser().then(e => {
          !1 === e.isTutorialComplete && 3 == e.tutorialLevel && c(!0);
        });
      }, 200);
    }, []),
    t('div', {
      className: w.mainleaderboard,
      id: 'LeaderBoard',
      children: [a(r ? B : H, {}), a(o, {})],
    })
  );
}
const R = [
    {
      selector: '#LeaderBoard',
      content:
        'This is the Leaderboard, you can rank up by winning more games. You can also view your daily challenge ranking by clicking on the daily challenge leaderboard button.',
    },
    { selector: '#refresh', content: 'Click here to refresh the leaderboard.' },
    { selector: '#tiers', content: 'Switch to filter players by tier.' },
  ],
  U = () => {
    const e = new p(n),
      t = r(s),
      c = N();
    return a(C, {
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
              c('/history', { replace: !0 });
            })
            .catch(e => {
              e instanceof l && i.error(e.message);
            });
      },
      steps: R,
      children: a(M, {}),
    });
  };
export { U as default };
