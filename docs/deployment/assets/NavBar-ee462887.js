import {
  r as e,
  u as a,
  n,
  a as o,
  b as l,
  g as i,
  j as t,
  F as r,
  c as s,
  m as c,
  C as d,
  d as m,
  e as _,
  L as h,
  i as u,
  f as v,
  A as f,
  _ as g,
  h as p,
  k as N,
  l as k,
  o as C,
  p as I,
  q as w,
  s as L,
  t as b,
  N as T,
  v as x,
  w as y,
  x as j,
  y as B,
} from './index-3b0785b0.js';
import { g as S } from './Avatar-86792f54.js';
import { D as E, a as D } from './Dropdown-4b058903.js';
import { B as M } from './ButtonGroup-f73c4b68.js';
import { M as P } from './Modal-d30bd2b2.js';
import { B as R } from './Button-4e851fa0.js';
import './ThemeProvider-528d6954.js';
import './extends-64d70faf.js';
import './setPrototypeOf-5f9718cf.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './index-06bcf729.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './divWithClassName-662bab3a.js';
const $ = {
    navBar: '_navBar_vnkle_1',
    navBarContainer: '_navBarContainer_vnkle_10',
    navContainer: '_navContainer_vnkle_19',
    navLink: '_navLink_vnkle_23',
    profileLink: '_profileLink_vnkle_43',
    navLogo: '_navLogo_vnkle_48',
    logoLink: '_logoLink_vnkle_55',
    branding: '_branding_vnkle_61',
    profileIcons: '_profileIcons_vnkle_65',
    profile: '_profile_vnkle_43',
    ProfileIcon: '_ProfileIcon_vnkle_83',
    profileIconImg: '_profileIconImg_vnkle_89',
    profileName: '_profileName_vnkle_94',
    notifIcon: '_notifIcon_vnkle_103',
    dcIcon: '_dcIcon_vnkle_109',
  },
  H = '_notifIconContainer_3u02r_1',
  A = '_notifIcon_3u02r_1',
  U = '_notifIconShow_3u02r_21',
  F = '_notifUnreadCounter_3u02r_24',
  O = '_notifModal_3u02r_40',
  W = '_notifModalShow_3u02r_58',
  V = '_notifModalTriangle_3u02r_61',
  q = '_notifTriangleShow_3u02r_73',
  G = '_notifTextContainer_3u02r_77',
  z = '_notifText_3u02r_77',
  J = '_notif_3u02r_1',
  Y = '_notifRead_3u02r_101',
  K = '_notifLine_3u02r_104',
  Q = '_notifHeader_3u02r_109',
  X = '_notifContent_3u02r_115',
  Z = '_notifTime_3u02r_119',
  ee = '_notifTimeSection_3u02r_122',
  ae = '' + new URL('notification-bf1d7013.svg', import.meta.url).href,
  ne = () => {
    const d = e.useRef(null),
      m = e.useRef(null),
      _ = e.useRef(null),
      h = a(n).slice().reverse(),
      u = a(o),
      v = l();
    e.useEffect(() => {
      v(i());
    }, []),
      e.useEffect(() => {
        const e = e => {
          var a, n, o;
          const l = e.target;
          (null == (a = d.current) ? void 0 : a.contains(l)) ||
            (null == (n = m.current) ? void 0 : n.contains(l)) ||
            !(null == (o = d.current) ? void 0 : o.classList.contains(W)) ||
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
        var e, a, n, o;
        (null == (e = d.current) ? void 0 : e.classList.contains(W)) &&
          u > 0 &&
          v(c()),
          null == (a = d.current) || a.classList.toggle(W),
          null == (n = m.current) || n.classList.toggle(U),
          null == (o = _.current) || o.classList.toggle(q);
      },
      g = e => {
        const a = new Date(e),
          n = Math.round((new Date().getTime() - a.getTime()) / 864e5);
        return `${0 === n ? 'Today' : 1 === n ? 'Yesterday' : `${n} days`}`;
      },
      p = e => {
        const a = new Date(e);
        return `${a.getHours()}:${a.getMinutes()}`;
      };
    return t(r, {
      children: [
        t('div', {
          className: H,
          ref: m,
          onClick: f,
          children: [
            s('img', {
              src: ae,
              title: 'Notifications',
              className: A,
              alt: 'BellIcon',
            }),
            u > 0 ? s('div', { className: F, children: u }) : null,
          ],
        }),
        s('div', { className: V, ref: _ }),
        s('div', {
          className: O,
          ref: d,
          children:
            h.length > 0
              ? h.map(e =>
                  t(
                    'div',
                    {
                      className: `${J} ${e.read ? Y : ''}`,
                      children: [
                        t('div', {
                          className: K,
                          children: [
                            s('h5', { className: Q, children: e.title }),
                            t('div', {
                              className: ee,
                              children: [
                                s('p', {
                                  className: Z,
                                  children: p(e.createdAt),
                                }),
                                s('p', {
                                  className: Z,
                                  children: g(e.createdAt),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s('div', {
                          className: K,
                          children: s('p', {
                            className: X,
                            children: e.content,
                          }),
                        }),
                      ],
                    },
                    e.id,
                  ),
                )
              : s('div', {
                  className: G,
                  children: s('p', {
                    className: z,
                    children: 'No notifications',
                  }),
                }),
        }),
      ],
    });
  },
  oe = '_dropdown_8an3w_1',
  le = '_menuBackground_8an3w_5',
  ie = '_menuText_8an3w_9',
  te = e => {
    const a = new d(m),
      n = _(),
      o = l();
    return s('div', {
      className: oe,
      children: t(E, {
        as: M,
        children: [
          t(D, {
            size: 'lg',
            variant: 'dark',
            id: 'dropdown-basic-button',
            children: [e.image, ' '],
          }),
          t(E.Menu, {
            className: le,
            children: [
              s(E.Item, {
                as: h,
                to: '/profile',
                className: ie,
                children: 'View Profile',
              }),
              s(E.Item, {
                onClick: () => {
                  a.updateCurrentUser({ updateTutorialLevel: 'RESET' })
                    .then(() => {
                      n('/dashboard', { replace: !0 }), o(u(!0)), o(v(!1));
                    })
                    .catch(e => {
                      e instanceof f && g.error(e.message);
                    });
                },
                className: ie,
                children: 'Revisit Tutorial',
              }),
              s(E.Item, {
                onClick: e.onLogout,
                className: ie,
                children: 'Logout',
              }),
            ],
          }),
        ],
      }),
    });
  },
  re = '' + new URL('sign_up-640f3645.svg', import.meta.url).href,
  se = '' + new URL('sign_in-8b80ec5b.svg', import.meta.url).href,
  ce = '_dcmodal_xxjom_1',
  de = '_headerText_xxjom_14',
  me = '_dcmodalHeader_xxjom_21',
  _e = '_dcmodalBtn_xxjom_28',
  he = e => {
    const a = _();
    return t(P, {
      show: e.show,
      onHide: e.handleClose,
      contentClassName: ce,
      children: [
        t(P.Header, {
          className: me,
          children: [
            s(P.Title, { className: de, children: 'Daily Challenge' }),
            s('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: e.handleClose,
            }),
          ],
        }),
        s(P.Body, { children: "Woohoo, you've completed today's challenge!" }),
        t(P.Footer, {
          children: [
            s(R, {
              variant: 'outline-light',
              className: _e,
              onClick: e.handleTake,
              children: 'View Latest Challenge',
            }),
            s(R, {
              variant: 'outline-light',
              className: _e,
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
  ue = e =>
    t(P, {
      show: e.show,
      onHide: e.handleClose,
      contentClassName: ce,
      children: [
        t(P.Header, {
          className: me,
          children: [
            s(P.Title, { className: de, children: 'Daily Challenge' }),
            s('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: e.handleClose,
            }),
          ],
        }),
        s(P.Body, {
          children:
            "Commander, we hope you are ready for today's daily challenge.",
        }),
        t(P.Footer, {
          children: [
            s(R, {
              variant: 'outline-light',
              className: _e,
              onClick: e.handleClose,
              children: 'Not Right Now!',
            }),
            s(R, {
              variant: 'outline-light',
              className: _e,
              onClick: e.handleTake,
              children: 'Take Me There',
            }),
          ],
        }),
      ],
    }),
  ve = () => {
    const n = l(),
      o = _(),
      i = p(),
      c = a(N),
      d = a(k),
      u = a(C);
    a(I),
      e.useEffect(() => {
        document.cookie.split(';').map(e => {
          if (0 != e.trim().startsWith('bearer-token')) {
            const a = e.indexOf('=') + 1,
              o = e.slice(a);
            localStorage.setItem('token', o), n(w());
          }
        });
      }, [document.cookie]),
      e.useEffect(() => {
        null != localStorage.getItem('token') && n(L());
      }, [c]),
      e.useEffect(() => {
        if (null != localStorage.getItem('token')) {
          new b(m)
            .getAuthStatus()
            .then(e => {
              const { status: a } = e;
              'PROFILE_INCOMPLETE' === a
                ? o('/incomplete-profile', { replace: !0 })
                : 'AUTHENTICATED' === a &&
                  null != localStorage.getItem('token') &&
                  o('/dashboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof f && g.error(e.message);
            });
        }
      }, [d]);
    const v = () => {
        var e;
        n(x()),
          localStorage.removeItem('token'),
          (e = 'bearer-token'),
          (document.cookie =
            e + `=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${B};`),
          o('/login', { replace: !0 });
      },
      [E, D] = e.useState(!1),
      M = () => {
        n(y('DailyChallenge')),
          n(j(!1)),
          o('/dashboard', { replace: !0 }),
          D(!1),
          R(!1);
      },
      [P, R] = e.useState(!1);
    return t('div', {
      className: $.navBar,
      children: [
        s(he, {
          show: P,
          handleClose: () => {
            n(y('Dashboard')), o('/dashboard', { replace: !0 }), R(!1);
          },
          handleTake: M,
        }),
        s(ue, { show: E, handleClose: () => D(!1), handleTake: M }),
        t('div', {
          className: $.navBarContainer,
          children: [
            s('div', {
              className: $.branding,
              children: s(h, {
                to: '/',
                className: $.logoLink,
                children: s('div', {
                  className: $.navLogo,
                  children: '<CodeCharacter/>',
                }),
              }),
            }),
            ('/' === i.pathname || '/register' === i.pathname) &&
              !d &&
              s('div', {
                className: $.navContainer,
                children: t(T, {
                  to: '/login',
                  className: `${$.navLink}`,
                  children: [s('img', { src: se }), 'Sign In'],
                }),
              }),
            '/login' === i.pathname &&
              !d &&
              s('div', {
                className: $.navContainer,
                children: t(T, {
                  to: '/register',
                  className: `${$.navLink}`,
                  children: [s('img', { src: re }), 'Sign Up'],
                }),
              }),
            '/' === i.pathname &&
              d &&
              s('div', {
                className: $.navContainer,
                children: t(T, {
                  to: '/dashboard',
                  className: `${$.navLink}`,
                  children: [s('img', { src: se }), 'Dashboard'],
                }),
              }),
          ],
        }),
        d && !u && '/incomplete-profile' != i.pathname && '/' != i.pathname
          ? t('div', {
              className: $.profileIcons,
              children: [
                s('div', {
                  className: $.notifIconContainer,
                  children: s(r, {}),
                }),
                s('div', { className: $.notifIcon, children: s(ne, {}) }),
                s('div', {
                  className: $.ProfileIcon,
                  children: s(te, {
                    image: s('img', {
                      className: $.profileIconImg,
                      src: S(c.avatarId).url,
                      alt: 'Profile Icon',
                      title: 'Profile Icon',
                    }),
                    onLogout: () => {
                      v();
                    },
                  }),
                }),
              ],
            })
          : s(r, {}),
      ],
    });
  };
export { ve as default };