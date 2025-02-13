import {
  u as e,
  K as a,
  M as s,
  O as o,
  P as t,
  Q as r,
  b as n,
  r as l,
  t as i,
  d as c,
  R as m,
  A as d,
  _ as h,
  S as p,
  j as u,
  U as f,
  c as C,
  V as M,
  W as g,
  X as N,
  Y as v,
  Z as j,
  $ as w,
} from './index-24a58ae8.js';
import { s as S } from './SelfMatchModalStyle.module-be3de432.js';
import { B as b } from './Button-0a98cdad.js';
import { M as x } from './Modal-5efe701c.js';
import { C as I } from './Container-4692a76f.js';
import { R as B } from './Row-59744247.js';
import { C as R } from './Col-ae03dcbb.js';
import { F as T } from './FormGroup-06fc443c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
const y = () => {
  const y = e(a),
    O = e(s),
    A = e(o),
    E = e(t),
    F = e(r),
    P = n(),
    [W, k] = l.useState([]),
    [D, H] = l.useState([]);
  return (
    l.useEffect(() => {
      if (null !== localStorage.getItem('token')) {
        new i(c)
          .getAuthStatus()
          .then(e => {
            const { status: a } = e;
            if (
              'AUTHENTICATED' === a &&
              null != localStorage.getItem('token')
            ) {
              new m(c)
                .getCodeRevisions()
                .then(e => k(e))
                .catch(e => {
                  e instanceof d && h.error(e.message);
                });
              new p(c)
                .getMapRevisions()
                .then(e => H(e))
                .catch(e => {
                  e instanceof d && h.error(e.message);
                });
            }
          })
          .catch(e => {
            e instanceof d && h.error(e.message);
          });
      }
    }, [y]),
    u(x, {
      show: y,
      centered: !0,
      contentClassName: S.content,
      onHide: () => P(f(!1)),
      children: [
        u(x.Header, {
          className: S.selfMatchModalHeader,
          children: [
            C(x.Title, { className: S.headerText, children: 'Self Match' }),
            C('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => P(f(!1)),
            }),
          ],
        }),
        C(x.Body, {
          className: S.selfMatchModalBody,
          children: C(I, {
            fluid: !0,
            children: u(B, {
              children: [
                C(R, {
                  xs: 12,
                  className: S.selfMatchModalFormGroup,
                  children: u(T, {
                    controlId: 'codeCommitName',
                    children: [
                      C('div', {
                        className: S.selfMatchModalLabel,
                        children: 'Code Commit Name',
                      }),
                      u('select', {
                        className: S.selfMatchModalDropdown,
                        value: E,
                        onChange: e =>
                          (function (e) {
                            if ('Current Code' === e)
                              P(M('Current Code')), P(g(null));
                            else {
                              const a = W.filter(a => a.message === e);
                              P(M(a[0].message)), P(g(a[0].id));
                            }
                          })(e.target.value),
                        children: [
                          C(
                            'option',
                            {
                              value: 'Current Code',
                              className: S.dropdownOptions,
                              children: 'Current Code',
                            },
                            'Current Code',
                          ),
                          W.map(e =>
                            C(
                              'option',
                              {
                                value: e.message,
                                className: S.dropdownOptions,
                                children: e.message,
                              },
                              e.message,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
                u(R, {
                  xs: 12,
                  className: S.selfMatchModalFormGroup,
                  children: [
                    u(T, {
                      controlId: 'mapCommitName',
                      children: [
                        C('div', {
                          className: S.selfMatchModalLabel,
                          children: 'Map Commit Name',
                        }),
                        u('select', {
                          className: S.selfMatchModalDropdown,
                          value: F,
                          onChange: e =>
                            (function (e) {
                              if ('Current Map' === e)
                                P(N('Current Map')), P(v(null));
                              else {
                                const a = D.filter(a => a.message === e);
                                P(N(a[0].message)), P(v(a[0].id));
                              }
                            })(e.target.value),
                          children: [
                            C(
                              'option',
                              {
                                value: 'Current Map',
                                className: S.dropdownOptions,
                                children: 'Current Map',
                              },
                              'Current Map',
                            ),
                            D.map(e =>
                              C(
                                'option',
                                {
                                  value: e.message,
                                  className: S.dropdownOptions,
                                  children: e.message,
                                },
                                e.message,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    C('div', {
                      children: C(b, {
                        className: S.selfMatchModalSimulateBtn,
                        size: 'lg',
                        onClick: function () {
                          new j(c)
                            .createMatch({
                              mode: w.Self,
                              codeRevisionId: O,
                              mapRevisionId: A,
                            })
                            .catch(e => {
                              e instanceof d && h.error(e.message);
                            }),
                            P(f(!1));
                        },
                        variant: 'outline-light',
                        children: 'SIMULATE',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
};
export { y as default };
