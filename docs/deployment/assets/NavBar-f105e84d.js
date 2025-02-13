import {
  r as e,
  u as a,
  n,
  a as s,
  b as t,
  g as o,
  j as l,
  F as r,
  c as i,
  m as c,
  C as d,
  d as m,
  e as h,
  L as _,
  i as u,
  f as p,
  A as f,
  _ as g,
  h as N,
  k as v,
  l as C,
  o as w,
  p as k,
  q as b,
  s as T,
  t as I,
  N as L,
  v as j,
  w as x,
  x as y,
  y as S,
} from './index-24a58ae8.js';
import { g as E } from './Avatar-86792f54.js';
import { D as B, a as D } from './Dropdown-6fdeb033.js';
import { B as M } from './ButtonGroup-493c836f.js';
import { M as R } from './Modal-5efe701c.js';
import { B as P } from './Button-0a98cdad.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './extends-64d70faf.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './index-06bcf729.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './setPrototypeOf-b9a4b5f8.js';
import './divWithClassName-cc198704.js';
const $ = '_navBar_r5m8p_1',
  H = '_navBarContainer_r5m8p_12',
  A = '_navContainer_r5m8p_21',
  U = '_navLink_r5m8p_25',
  W = '_navLogo_r5m8p_50',
  F = '_logoLink_r5m8p_57',
  O = '_branding_r5m8p_63',
  V = '_profileIcons_r5m8p_70',
  q = '_ProfileIcon_r5m8p_88',
  z = '_profileIconImg_r5m8p_94',
  G = '_notifIcon_r5m8p_109',
  J = '_notifIconContainer_r5m8p_169',
  Y = '_notifIconContainer_3u02r_1',
  K = '_notifIcon_3u02r_1',
  Q = '_notifIconShow_3u02r_21',
  X = '_notifUnreadCounter_3u02r_24',
  Z = '_notifModal_3u02r_40',
  ee = '_notifModalShow_3u02r_58',
  ae = '_notifModalTriangle_3u02r_61',
  ne = '_notifTriangleShow_3u02r_73',
  se = '_notifTextContainer_3u02r_77',
  te = '_notifText_3u02r_77',
  oe = '_notif_3u02r_1',
  le = '_notifRead_3u02r_101',
  re = '_notifLine_3u02r_104',
  ie = '_notifHeader_3u02r_109',
  ce = '_notifContent_3u02r_115',
  de = '_notifTime_3u02r_119',
  me = '_notifTimeSection_3u02r_122',
  he = '' + new URL('notification-bf1d7013.svg', import.meta.url).href,
  _e = () => {
    const d = e.useRef(null),
      m = e.useRef(null),
      h = e.useRef(null),
      _ = a(n).slice().reverse(),
      u = a(s),
      p = t();
    e.useEffect(() => {
      p(o());
    }, []),
      e.useEffect(() => {
        const e = e => {
          var a, n, s;
          const t = e.target;
          (null == (a = d.current) ? void 0 : a.contains(t)) ||
            (null == (n = m.current) ? void 0 : n.contains(t)) ||
            !(null == (s = d.current) ? void 0 : s.classList.contains(ee)) ||
            f();
        };
        return (
          window.addEventListener('click', e),
          () => {
            window.removeEventListener('click', e);
          }
        );
      }, [u]);
    const f = () => {
        var e, a, n, s;
        (null == (e = d.current) ? void 0 : e.classList.contains(ee)) &&
          u > 0 &&
          p(c()),
          null == (a = d.current) || a.classList.toggle(ee),
          null == (n = m.current) || n.classList.toggle(Q),
          null == (s = h.current) || s.classList.toggle(ne);
      },
      g = e => {
        const a = new Date(e),
          n = Math.round((new Date().getTime() - a.getTime()) / 864e5);
        return `${0 === n ? 'Today' : 1 === n ? 'Yesterday' : `${n} days`}`;
      },
      N = e => {
        const a = new Date(e);
        return `${a.getHours()}:${a.getMinutes()}`;
      };
    return l(r, {
      children: [
        l('div', {
          className: Y,
          ref: m,
          onClick: f,
          children: [
            i('img', {
              src: he,
              title: 'Notifications',
              className: K,
              alt: 'BellIcon',
            }),
            u > 0 ? i('div', { className: X, children: u }) : null,
          ],
        }),
        i('div', { className: ae, ref: h }),
        i('div', {
          className: Z,
          ref: d,
          children:
            _.length > 0
              ? _.map(e =>
                  l(
                    'div',
                    {
                      className: `${oe} ${e.read ? le : ''}`,
                      children: [
                        l('div', {
                          className: re,
                          children: [
                            i('h5', { className: ie, children: e.title }),
                            l('div', {
                              className: me,
                              children: [
                                i('p', {
                                  className: de,
                                  children: N(e.createdAt),
                                }),
                                i('p', {
                                  className: de,
                                  children: g(e.createdAt),
                                }),
                              ],
                            }),
                          ],
                        }),
                        i('div', {
                          className: re,
                          children: i('p', {
                            className: ce,
                            children: e.content,
                          }),
                        }),
                      ],
                    },
                    e.id,
                  ),
                )
              : i('div', {
                  className: se,
                  children: i('p', {
                    className: te,
                    children: 'No notifications',
                  }),
                }),
        }),
      ],
    });
  },
  ue = '_dropdown_182l3_1',
  pe = '_menuBackground_182l3_4',
  fe = '_menuText_182l3_8',
  ge = e => {
    const a = new d(m),
      n = h(),
      s = t();
    return i('div', {
      className: ue,
      children: l(B, {
        as: M,
        children: [
          l(D, {
            size: 'lg',
            variant: 'dark',
            id: 'dropdown-basic-button',
            children: [e.image, ' '],
          }),
          l(B.Menu, {
            className: pe,
            children: [
              i(B.Item, {
                as: _,
                to: '/profile',
                className: fe,
                children: 'View Profile',
              }),
              i(B.Item, {
                onClick: () => {
                  a.updateCurrentUser({ updateTutorialLevel: 'RESET' })
                    .then(() => {
                      n('/dashboard', { replace: !0 }), s(u(!0)), s(p(!1));
                    })
                    .catch(e => {
                      e instanceof f && g.error(e.message);
                    });
                },
                className: fe,
                children: 'Revisit Tour',
              }),
              i(B.Item, {
                onClick: e.onLogout,
                className: fe,
                children: 'Logout',
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ne = '' + new URL('sign_up-640f3645.svg', import.meta.url).href,
  ve = '' + new URL('sign_in-8b80ec5b.svg', import.meta.url).href,
  Ce = '_dcmodal_xxjom_1',
  we = '_headerText_xxjom_14',
  ke = '_dcmodalHeader_xxjom_21',
  be = '_dcmodalBtn_xxjom_28',
  Te = e => {
    const a = h();
    return l(R, {
      show: e.show,
      onHide: e.handleClose,
      contentClassName: Ce,
      children: [
        l(R.Header, {
          className: ke,
          children: [
            i(R.Title, { className: we, children: 'Daily Challenge' }),
            i('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: e.handleClose,
            }),
          ],
        }),
        i(R.Body, { children: "Woohoo, you've completed today's challenge!" }),
        l(R.Footer, {
          children: [
            i(P, {
              variant: 'outline-light',
              className: be,
              onClick: e.handleTake,
              children: 'View Latest Challenge',
            }),
            i(P, {
              variant: 'outline-light',
              className: be,
              onClick: () => {
                e.handleClose(), a('/leaderboard', { replace: !0 });
              },
              children: 'View Leaderboard',
            }),
          ],
        }),
      ],
    });
  },
  Ie = e =>
    l(R, {
      show: e.show,
      onHide: e.handleClose,
      contentClassName: Ce,
      children: [
        l(R.Header, {
          className: ke,
          children: [
            i(R.Title, { className: we, children: 'Daily Challenge' }),
            i('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: e.handleClose,
            }),
          ],
        }),
        i(R.Body, {
          children:
            "Commander, we hope you are ready for today's daily challenge.",
        }),
        l(R.Footer, {
          children: [
            i(P, {
              variant: 'outline-light',
              className: be,
              onClick: e.handleClose,
              children: 'Not Right Now!',
            }),
            i(P, {
              variant: 'outline-light',
              className: be,
              onClick: e.handleTake,
              children: 'Take Me There',
            }),
          ],
        }),
      ],
    }),
  Le = () => {
    const n = t(),
      s = h(),
      o = N(),
      c = a(v),
      d = a(C),
      u = a(w);
    a(k),
      e.useEffect(() => {
        document.cookie.split(';').map(e => {
          if (0 != e.trim().startsWith('bearer-token')) {
            const a = e.indexOf('=') + 1,
              s = e.slice(a);
            localStorage.setItem('token', s), n(b());
          }
        });
      }, [document.cookie]),
      e.useEffect(() => {
        null != localStorage.getItem('token') && n(T());
      }, [c]),
      e.useEffect(() => {
        if (null != localStorage.getItem('token')) {
          new I(m)
            .getAuthStatus()
            .then(e => {
              const { status: a } = e;
              'PROFILE_INCOMPLETE' === a
                ? s('/incomplete-profile', { replace: !0 })
                : 'AUTHENTICATED' === a &&
                  null != localStorage.getItem('token') &&
                  s('/dashboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof f && g.error(e.message);
            });
        }
      }, [d]);
    const p = () => {
        var e;
        n(j()),
          localStorage.removeItem('token'),
          (e = 'bearer-token'),
          (document.cookie =
            e + `=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${S};`),
          s('/login', { replace: !0 });
      },
      [B, D] = e.useState(!1),
      M = () => {
        n(x('DailyChallenge')),
          n(y(!1)),
          s('/dashboard', { replace: !0 }),
          D(!1),
          P(!1);
      },
      [R, P] = e.useState(!1);
    return l('div', {
      className: $,
      children: [
        i(Te, {
          show: R,
          handleClose: () => {
            n(x('Dashboard')), s('/dashboard', { replace: !0 }), P(!1);
          },
          handleTake: M,
        }),
        i(Ie, { show: B, handleClose: () => D(!1), handleTake: M }),
        l('div', {
          className: H,
          children: [
            i('div', {
              className: O,
              children: i(_, {
                to: '/',
                className: F,
                children: i('div', {
                  className: W,
                  children: '<CodeCharacter/>',
                }),
              }),
            }),
            ('/' === o.pathname || '/register' === o.pathname) &&
              !d &&
              i('div', {
                className: A,
                children: l(L, {
                  to: '/login',
                  className: `${U}`,
                  children: [i('img', { src: ve }), 'Sign In'],
                }),
              }),
            '/login' === o.pathname &&
              !d &&
              i('div', {
                className: A,
                children: l(L, {
                  to: '/register',
                  className: `${U}`,
                  children: [i('img', { src: Ne }), 'Sign Up'],
                }),
              }),
            '/' === o.pathname &&
              d &&
              i('div', {
                className: A,
                children: l(L, {
                  to: '/dashboard',
                  className: `${U}`,
                  children: [i('img', { src: ve }), 'Dashboard'],
                }),
              }),
          ],
        }),
        d && !u && '/incomplete-profile' != o.pathname && '/' != o.pathname
          ? l('div', {
              className: V,
              children: [
                i('div', { className: J, children: i(r, {}) }),
                i('div', { className: G, children: i(_e, {}) }),
                i('div', {
                  className: q,
                  children: i(ge, {
                    image: i('img', {
                      className: z,
                      src: E(c.avatarId).url,
                      alt: 'Profile Icon',
                      title: 'Profile Icon',
                    }),
                    onLogout: () => {
                      p();
                    },
                  }),
                }),
              ],
            })
          : i(r, {}),
      ],
    });
  };
export { Le as default };
