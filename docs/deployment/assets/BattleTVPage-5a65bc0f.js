import {
  C as e,
  d as a,
  r as t,
  bi as n,
  j as s,
  c as r,
  e as l,
  u as i,
  bj as c,
  bk as d,
  bl as o,
  bm as h,
  k as m,
  bn as u,
  b as _,
  bo as b,
  F as g,
  bg as p,
  ak as N,
  bp as A,
  w as v,
  x as f,
  bq as C,
  $ as T,
  f as y,
  A as R,
  _ as B,
} from './index-24a58ae8.js';
import { g as P } from './Avatar-86792f54.js';
import { u as E, T as V } from './TourProvider-f8fb0617.js';
import { B as w } from './ButtonGroup-493c836f.js';
import { B as k } from './Button-0a98cdad.js';
import './ThemeProvider-092c2682.js';
const L = {
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
  j =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAdCAYAAAAzfpVwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgBtVjbTeNAFL0JIPEZJJ5/TgULHZgKyFZAqIClgiQVQCrAqWChAlxCOoj/EA8p/gCBeCR7jnccDU7suXbgSInH47njM/c1d1yTJTEejxvv7+8emvvT6dRbMGRYr9fjra2tUJZETSqABD8+Ptogd1Sr1UiyoRQN8Rusra2FGxsbkZREKbIPDw8+Lqcg15LlEYB0rwxpFVlj6nM02/L9UJN2kn18fDyGJi9KmLoKIvx629vbQdGgQrIw+zlI/hE34slkMkAgDT8/P0N2rKysNHDv4b4Fvz5Cl3OxGNdFIPZyn+c9uL+/vxSF2UGy//Ly0m02m3HemNvbWw/kuehTcSOAhk9ES1ZJNIbWT3Z2dq5ECbhUC4vj3C4tLyQ8Rxam74BEVxzAmN+LiDIYX19fG+vr6zGCJs4h/Nc1P1ziAi5xZvfV7RtotK0hStNniTKtQf4GWWMMk4945b1JdzNsbm5Sru96B2OFwW33zTQLjXh4wQ2anmOeGEFzsLe3F1lEC62RDRyTCkfidocYae0gTWszzUK4oyBKXGWI+i5r8LmtYeMeA3Gj8fb2dp7eJGSpVVEmfKSj6wyRjkZuwbihRg5WaaULTcgaraoAf43SNs2Ji68U9c34BGk+1iBdaOoGba0gXjKLcEa9lEDZ8RZ8/qVkQ6kApqeq47nDlRAN+JeQhV/0tFJ4iZ+2TaCEStHQzrvcipVytGbCLyHLwhiEVTsRfHbfvtcuNDsO8xyJDkGafWapC8U0dwunWaGRYztQuFAEQCFhPrdPCib7OGtiyEWpVr+QNezPxA2eEr5kD+xmXWjuUOZdghY75HO7E/IsaDRVWM/O6XO1AbbIC1FUR3m1wWg0Yl3A+iBeVInd3d2xZHTWBrRGdpELqy5MGGDCYylG6aqLROFGl65CHs8HmLed7a8VTKwhnFRHq6ur/aJjiTlgdjSFfB7RQrLynzB90bm7YQy1fIXfNdpRunGYNPcLfW3NsYjV3O7ubu6CnGcwUzZ28EJPfg5c3JnrDFYXBzgBVnxI88jPIHh+fm66iBKlvhvwLIUA6Wp82QW6Debql/lSU+mLjDkA+miStK8Uo6mHWOj109NTUHTAzEMlslmw3gSJBgJrf+4FCDhchjB1VIWgjX8VP+bvxaf6hgAAAABJRU5ErkJggg==',
  U = '' + new URL('codechar_favicon-2dcc0475.png', import.meta.url).href;
function D(e, a) {
  if (e.username === a.user1.username) {
    if (a.matchVerdict === C.Player1) return L.battlecardwin;
    if (a.matchVerdict == C.Player2) return L.battlecardlose;
    if (a.matchVerdict == C.Success) return L.battlecardwin;
    if (a.matchVerdict == C.Failure) return L.battlecardlose;
  } else {
    if (a.matchVerdict === C.Player1) return L.battlecardlose;
    if (a.matchVerdict == C.Player2) return L.battlecardwin;
  }
  return L.battlecardtie;
}
function O(e) {
  let a = '';
  return e.matchMode == T.Auto && (a = L.automatch), a;
}
function S(e, a) {
  if ('games' in a) {
    const t = [...a.games.values()];
    return e.username == a.user1.username ? t[0] : t[t.length - 1];
  }
  return a.game;
}
function G({ battleTvType: e }) {
  const a = l(),
    t = e == n.PVP ? i(c) : e == n.NORMAL ? i(d) : i(o),
    C = i(h),
    T = i(m),
    y = i(u),
    R = t.page,
    B = _();
  return (
    t.hasbeenFetched || B(b({ battleTvType: e, page: R })),
    s(g, {
      children: [
        r(g, {
          children:
            C || y
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
                          className: L.message,
                          children: 'You have not played any matches yet',
                        })
                      : t.battles &&
                        t.battles.map(t => {
                          var l, i;
                          return r(
                            'div',
                            {
                              className: L.item,
                              children: s('div', {
                                className: L.item + ' ' + D(T, t) + ' ' + O(t),
                                children: [
                                  s('span', {
                                    className: L.username,
                                    children: [
                                      r('div', {
                                        className: L.picholder,
                                        children: r('img', {
                                          src: P(t.user1.avatarId).url,
                                          className: L.pic,
                                        }),
                                      }),
                                      r('span', {
                                        className: [L.name].join(' '),
                                        children: t.user1.username.substring(
                                          0,
                                          10,
                                        ),
                                      }),
                                    ],
                                  }),
                                  r('span', {
                                    className: L.coinsusedleft,
                                    children:
                                      'game' in t
                                        ? t.game.scorePlayer1
                                        : [...t.games.values()][0].coinsUsed,
                                  }),
                                  'games' in t &&
                                    r('span', {
                                      className: L.scoreleft,
                                      children: [
                                        ...t.games.values(),
                                      ][0].destruction.toFixed(2),
                                    }),
                                  r('div', {
                                    className: L.watchButton,
                                    onClick: () => {
                                      B(p(e === n.PVP ? N.PVP : N.NORMAL)),
                                        B(
                                          A({
                                            id: e === n.PVP ? t.id : S(T, t).id,
                                            callback: () => {
                                              null === t.user2 &&
                                                (B(v('DailyChallenge')),
                                                B(f(!0))),
                                                a('/dashboard');
                                            },
                                            gameType:
                                              e == n.PVP ? N.PVP : N.NORMAL,
                                          }),
                                        );
                                    },
                                    children: r('img', { src: j }),
                                  }),
                                  r('span', {
                                    className: L.scoreright,
                                    children:
                                      'game' in t
                                        ? t.game.scorePlayer2
                                        : [...t.games.values()][
                                            1 === [...t.games.values()].length
                                              ? 0
                                              : 1
                                          ].destruction.toFixed(2),
                                  }),
                                  'games' in t &&
                                    r('span', {
                                      className: L.scoreleft,
                                      children: [...t.games.values()][
                                        1 === [...t.games.values()].length
                                          ? 0
                                          : 1
                                      ].coinsUsed,
                                    }),
                                  s('span', {
                                    className: L.username,
                                    children: [
                                      r('span', {
                                        className: [L.name, L.right].join(' '),
                                        children:
                                          null !== t.user2
                                            ? null == (l = t.user2)
                                              ? void 0
                                              : l.username
                                            : 'Daily Challenge',
                                      }),
                                      r('div', {
                                        className: L.picholder,
                                        children: r('img', {
                                          src:
                                            null == t.user2
                                              ? U
                                              : P(
                                                  null == (i = t.user2)
                                                    ? void 0
                                                    : i.avatarId,
                                                ).url,
                                          className: L.pic,
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
          className: L.paginationouter,
          children: [
            r('button', {
              type: 'button',
              className: L.button,
              onClick: () => {
                0 !== R && B(b({ battleTvType: e, page: R - 1 }));
              },
              children: '<',
            }),
            r('div', { className: L.button, children: R + 1 }),
            r('button', {
              type: 'button',
              className: L.button,
              onClick: () => {
                B(b({ battleTvType: e, page: R + 1 }));
              },
              children: '>',
            }),
            r('button', {
              type: 'button',
              className: L.button,
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
function I() {
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
      className: L.body,
      id: 'battleTV',
      children: [
        r('div', {
          className: L.buttonContainer,
          children: r('div', {
            className: L.codeMapButton,
            children: s(w, {
              id: 'BattleTvTypeSelector',
              children: [
                r(k, {
                  className: c == n.NORMAL ? L.whiteButton : L.darkButton,
                  onClick: () => {
                    d(n.NORMAL);
                  },
                  variant: 'outline-light',
                  children: 'Normal',
                }),
                r(k, {
                  variant: 'outline-light',
                  className: c == n.PVP ? L.whiteButton : L.darkButton,
                  onClick: () => {
                    d(n.PVP);
                  },
                  children: 'PvP',
                }),
                r(k, {
                  variant: 'outline-light',
                  className: c == n.DC ? L.whiteButton : L.darkButton,
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
          className: L.ranklist,
          children: [
            c !== n.PVP
              ? s('div', {
                  className: L.tableheaderdiv,
                  children: [
                    r('span', {
                      className: L.tableheader,
                      children: 'ATTACKER',
                    }),
                    r('span', {
                      className: L.tableheader,
                      children: 'COINS USED',
                    }),
                    r('span', {
                      className: L.tableheader,
                      children: 'DESTRUCTION(%)',
                    }),
                    r('span', { className: L.tableheader }),
                    r('span', {
                      className: L.tableheader,
                      children: 'DESTRUCTION(%)',
                    }),
                    r('span', {
                      className: L.tableheader,
                      children: 'COINS USED',
                    }),
                    r('span', {
                      className: L.tableheader,
                      children: 'DEFENDER',
                    }),
                  ],
                })
              : s('div', {
                  className: L.tableheaderdiv,
                  children: [
                    r('span', {
                      className: L.tableheader,
                      children: 'PLAYER 1',
                    }),
                    r('span', { className: L.tableheader, children: 'SCORE' }),
                    r('span', { className: L.tableheader }),
                    r('span', { className: L.tableheader, children: 'SCORE' }),
                    r('span', {
                      className: L.tableheader,
                      children: 'PLAYER 2',
                    }),
                  ],
                }),
            r(G, { battleTvType: c }),
          ],
        }),
      ],
    })
  );
}
const F = [
    {
      selector: '#battleTV',
      content:
        'This is the Battle TV, you can see the previous battles here. Click on the eye icon to view the match simulation',
    },
  ],
  x = () => {
    const t = new e(a),
      n = i(m),
      s = l(),
      c = _();
    return r(V, {
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
              c(y(!0)), s('/dashboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof R && B.error(e.message);
            });
      },
      steps: F,
      children: r(I, {}),
    });
  };
export { x as default };
