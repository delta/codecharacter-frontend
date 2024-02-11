import {
  C as e,
  d as a,
  r as t,
  b6 as n,
  j as s,
  c as r,
  e as l,
  u as i,
  b7 as c,
  b8 as d,
  b9 as o,
  ba as h,
  k as u,
  bb as m,
  b as _,
  bc as b,
  F as g,
  bd as p,
  w as N,
  x as A,
  ak as v,
  be as f,
  $ as C,
  f as T,
  A as y,
  _ as B,
} from './index-3b0785b0.js';
import { g as R } from './Avatar-86792f54.js';
import { u as E, T as w } from './TourProvider-a2db2cbe.js';
import { B as P } from './ButtonGroup-f73c4b68.js';
import { B as V } from './Button-4e851fa0.js';
import './ThemeProvider-528d6954.js';
const k = {
    body: '_body_12a4n_1',
    header: '_header_12a4n_7',
    header__icon: '_header__icon_12a4n_19',
    header__title: '_header__title_12a4n_25',
    message: '_message_12a4n_32',
    ranklist: '_ranklist_12a4n_41',
    list: '_list_12a4n_48',
    item: '_item_12a4n_59',
    automatch: '_automatch_12a4n_72',
    picholder: '_picholder_12a4n_76',
    pic: '_pic_12a4n_76',
    watchButton: '_watchButton_12a4n_88',
    battlecardwin: '_battlecardwin_12a4n_100',
    battlecardlose: '_battlecardlose_12a4n_106',
    battlecardtie: '_battlecardtie_12a4n_112',
    name: '_name_12a4n_118',
    username: '_username_12a4n_129',
    scoreleft: '_scoreleft_12a4n_137',
    scoreright: '_scoreright_12a4n_147',
    coinsusedright: '_coinsusedright_12a4n_157',
    coinsusedleft: '_coinsusedleft_12a4n_167',
    score: '_score_12a4n_137',
    tableheader: '_tableheader_12a4n_194',
    tableheaderdiv: '_tableheaderdiv_12a4n_205',
    paginationouter: '_paginationouter_12a4n_213',
    pagination: '_pagination_12a4n_213',
    pageNum: '_pageNum_12a4n_228',
    break: '_break_12a4n_249',
    active: '_active_12a4n_253',
    button: '_button_12a4n_264',
    whiteButton: '_whiteButton_12a4n_284',
    darkButton: '_darkButton_12a4n_301',
    buttonContainer: '_buttonContainer_12a4n_328',
  },
  L =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAdCAYAAAAzfpVwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgBtVjbTeNAFL0JIPEZJJ5/TgULHZgKyFZAqIClgiQVQCrAqWChAlxCOoj/EA8p/gCBeCR7jnccDU7suXbgSInH47njM/c1d1yTJTEejxvv7+8emvvT6dRbMGRYr9fjra2tUJZETSqABD8+Ptogd1Sr1UiyoRQN8Rusra2FGxsbkZREKbIPDw8+Lqcg15LlEYB0rwxpFVlj6nM02/L9UJN2kn18fDyGJi9KmLoKIvx629vbQdGgQrIw+zlI/hE34slkMkAgDT8/P0N2rKysNHDv4b4Fvz5Cl3OxGNdFIPZyn+c9uL+/vxSF2UGy//Ly0m02m3HemNvbWw/kuehTcSOAhk9ES1ZJNIbWT3Z2dq5ECbhUC4vj3C4tLyQ8Rxam74BEVxzAmN+LiDIYX19fG+vr6zGCJs4h/Nc1P1ziAi5xZvfV7RtotK0hStNniTKtQf4GWWMMk4945b1JdzNsbm5Sru96B2OFwW33zTQLjXh4wQ2anmOeGEFzsLe3F1lEC62RDRyTCkfidocYae0gTWszzUK4oyBKXGWI+i5r8LmtYeMeA3Gj8fb2dp7eJGSpVVEmfKSj6wyRjkZuwbihRg5WaaULTcgaraoAf43SNs2Ji68U9c34BGk+1iBdaOoGba0gXjKLcEa9lEDZ8RZ8/qVkQ6kApqeq47nDlRAN+JeQhV/0tFJ4iZ+2TaCEStHQzrvcipVytGbCLyHLwhiEVTsRfHbfvtcuNDsO8xyJDkGafWapC8U0dwunWaGRYztQuFAEQCFhPrdPCib7OGtiyEWpVr+QNezPxA2eEr5kD+xmXWjuUOZdghY75HO7E/IsaDRVWM/O6XO1AbbIC1FUR3m1wWg0Yl3A+iBeVInd3d2xZHTWBrRGdpELqy5MGGDCYylG6aqLROFGl65CHs8HmLed7a8VTKwhnFRHq6ur/aJjiTlgdjSFfB7RQrLynzB90bm7YQy1fIXfNdpRunGYNPcLfW3NsYjV3O7ubu6CnGcwUzZ28EJPfg5c3JnrDFYXBzgBVnxI88jPIHh+fm66iBKlvhvwLIUA6Wp82QW6Debql/lSU+mLjDkA+miStK8Uo6mHWOj109NTUHTAzEMlslmw3gSJBgJrf+4FCDhchjB1VIWgjX8VP+bvxaf6hgAAAABJRU5ErkJggg==',
  j = '' + new URL('codechar_favicon-2dcc0475.png', import.meta.url).href;
function U(e, a) {
  if (e.username === a.user1.username) {
    if (a.matchVerdict === f.Player1) return k.battlecardwin;
    if (a.matchVerdict == f.Player2) return k.battlecardlose;
    if (a.matchVerdict == f.Success) return k.battlecardwin;
    if (a.matchVerdict == f.Failure) return k.battlecardlose;
  } else {
    if (a.matchVerdict === f.Player1) return k.battlecardlose;
    if (a.matchVerdict == f.Player2) return k.battlecardwin;
  }
  return k.battlecardtie;
}
function D(e) {
  let a = '';
  return e.matchMode == C.Auto && (a = k.automatch), a;
}
function S(e, a) {
  if ('games' in a) {
    const t = [...a.games.values()];
    return e.username == a.user1.username ? t[0] : t[t.length - 1];
  }
  return a.game;
}
function O({ battleTvType: e }) {
  const a = l(),
    t = e == n.PVP ? i(c) : e == n.NORMAL ? i(d) : i(o),
    f = i(h),
    C = i(u),
    T = i(m),
    y = t.page,
    B = _();
  return (
    t.hasbeenFetched || B(b({ battleTvType: e, page: y })),
    s(g, {
      children: [
        r(g, {
          children:
            f || T
              ? r('div', {
                  className: 'd-flex justify-content-center',
                  children: r('div', {
                    className: 'spinner-border text-white',
                    role: 'status',
                    children: r('span', {
                      className: 'sr-only',
                      children: 'Loading...',
                    }),
                  }),
                })
              : r(g, {
                  children:
                    0 == t.battles.length
                      ? r('div', {
                          className: k.message,
                          children: 'You have not played any matches yet',
                        })
                      : t.battles &&
                        t.battles.map(t => {
                          var l, i;
                          return r(
                            'div',
                            {
                              className: k.item,
                              children: s('div', {
                                className: k.item + ' ' + U(C, t) + ' ' + D(t),
                                children: [
                                  s('span', {
                                    className: k.username,
                                    children: [
                                      r('div', {
                                        className: k.picholder,
                                        children: r('img', {
                                          src: R(t.user1.avatarId).url,
                                          className: k.pic,
                                        }),
                                      }),
                                      r('span', {
                                        className: [k.name].join(' '),
                                        children: t.user1.username.substring(
                                          0,
                                          10,
                                        ),
                                      }),
                                    ],
                                  }),
                                  r('span', {
                                    className: k.coinsusedleft,
                                    children:
                                      'game' in t
                                        ? t.game.scorePlayer1
                                        : [...t.games.values()][0].coinsUsed,
                                  }),
                                  r('span', {
                                    className: k.scoreleft,
                                    children:
                                      'game' in t
                                        ? '----'
                                        : [
                                            ...t.games.values(),
                                          ][0].destruction.toFixed(2),
                                  }),
                                  r('div', {
                                    className: k.watchButton,
                                    onClick: () => {
                                      B(
                                        p({
                                          id: e === n.PVP ? t.id : S(C, t).id,
                                          callback: () => {
                                            null === t.user2 &&
                                              (B(N('DailyChallenge')),
                                              B(A(!0))),
                                              a('/dashboard');
                                          },
                                          gameType:
                                            e == n.PVP ? v.PVP : v.NORMAL,
                                        }),
                                      );
                                    },
                                    children: r('img', { src: L }),
                                  }),
                                  r('span', {
                                    className: k.scoreright,
                                    children:
                                      'game' in t
                                        ? t.game.scorePlayer2
                                        : [...t.games.values()][
                                            1 === [...t.games.values()].length
                                              ? 0
                                              : 1
                                          ].destruction.toFixed(2),
                                  }),
                                  r('span', {
                                    className: k.coinsusedright,
                                    children:
                                      'game' in t
                                        ? '----'
                                        : [...t.games.values()][
                                            1 === [...t.games.values()].length
                                              ? 0
                                              : 1
                                          ].coinsUsed,
                                  }),
                                  s('span', {
                                    className: k.username,
                                    children: [
                                      r('span', {
                                        className: [k.name, k.right].join(' '),
                                        children:
                                          null !== t.user2
                                            ? null == (l = t.user2)
                                              ? void 0
                                              : l.username
                                            : 'Daily Challenge',
                                      }),
                                      r('div', {
                                        className: k.picholder,
                                        children: r('img', {
                                          src:
                                            null == t.user2
                                              ? j
                                              : R(
                                                  null == (i = t.user2)
                                                    ? void 0
                                                    : i.avatarId,
                                                ).url,
                                          className: k.pic,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t.id,
                          );
                        }),
                }),
        }),
        s('nav', {
          className: k.paginationouter,
          children: [
            r('button', {
              type: 'button',
              className: k.button,
              onClick: () => {
                0 !== y && B(b({ battleTvType: e, page: y - 1 }));
              },
              children: '<',
            }),
            r('div', { className: k.button, children: y + 1 }),
            r('button', {
              type: 'button',
              className: k.button,
              onClick: () => {
                B(b({ battleTvType: e, page: y + 1 }));
              },
              children: '>',
            }),
            r('button', {
              type: 'button',
              className: k.button,
              onClick: () => {
                B(b({ battleTvType: e, page: 0 }));
              },
              id: 'refresh',
              children: 'Refresh',
            }),
          ],
        }),
      ],
    })
  );
}
function G() {
  const { setIsOpen: l } = E(),
    i = new e(a),
    [c, d] = t.useState(n.NORMAL);
  return (
    t.useEffect(() => {
      setTimeout(() => {
        i.getCurrentUser().then(e => {
          !1 === e.isTutorialComplete && 5 == e.tutorialLevel && l(!0);
        });
      }, 200);
    }, []),
    s('div', {
      className: k.body,
      id: 'battleTV',
      children: [
        r('div', {
          className: k.buttonContainer,
          children: r('div', {
            className: k.codeMapButton,
            children: s(P, {
              id: 'BattleTvTypeSelector',
              children: [
                r(V, {
                  className: c == n.NORMAL ? k.whiteButton : k.darkButton,
                  onClick: () => {
                    d(n.NORMAL);
                  },
                  variant: 'outline-light',
                  children: 'Normal',
                }),
                r(V, {
                  variant: 'outline-light',
                  className: c == n.PVP ? k.whiteButton : k.darkButton,
                  onClick: () => {
                    d(n.PVP);
                  },
                  children: 'PvP',
                }),
                r(V, {
                  variant: 'outline-light',
                  className: c == n.DC ? k.whiteButton : k.darkButton,
                  onClick: () => {
                    d(n.DC);
                  },
                  children: 'Daily Challenge',
                }),
              ],
            }),
          }),
        }),
        s('div', {
          className: k.ranklist,
          children: [
            c !== n.PVP
              ? s('div', {
                  className: k.tableheaderdiv,
                  children: [
                    r('span', {
                      className: k.tableheader,
                      children: 'ATTACKER',
                    }),
                    r('span', {
                      className: k.tableheader,
                      children: 'COINS USED',
                    }),
                    r('span', {
                      className: k.tableheader,
                      children: 'DESTRUCTION(%)',
                    }),
                    r('span', { className: k.tableheader }),
                    r('span', {
                      className: k.tableheader,
                      children: 'DESTRUCTION(%)',
                    }),
                    r('span', {
                      className: k.tableheader,
                      children: 'COINS USED',
                    }),
                    r('span', {
                      className: k.tableheader,
                      children: 'DEFENDER',
                    }),
                  ],
                })
              : s('div', {
                  className: k.tableheaderdiv,
                  children: [
                    r('span', {
                      className: k.tableheader,
                      children: 'PLAYER 1',
                    }),
                    r('span', { className: k.tableheader, children: 'SCORE' }),
                    r('span', { className: k.tableheader }),
                    r('span', { className: k.tableheader, children: 'SCORE' }),
                    r('span', {
                      className: k.tableheader,
                      children: 'PLAYER 2',
                    }),
                  ],
                }),
            r(O, { battleTvType: c }),
          ],
        }),
      ],
    })
  );
}
const I = [
    {
      selector: '#battleTV',
      content:
        'This is the Battle TV, you can see the previous battles here. Click on the eye icon to view the match simulation',
    },
  ],
  x = () => {
    const t = new e(a),
      n = i(u),
      s = l(),
      c = _();
    return r(w, {
      setOpened: e => {
        !1 === e &&
          t
            .updateCurrentUser({
              name: n.name,
              country: n.country,
              college: n.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              c(T(!0)), s('/dashboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof y && B.error(e.message);
            });
      },
      steps: I,
      children: r(G, {}),
    });
  };
export { x as default };
