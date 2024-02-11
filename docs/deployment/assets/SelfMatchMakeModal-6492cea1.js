import {
  u as e,
  K as a,
  M as s,
  O as o,
  P as t,
  Q as r,
  b as l,
  r as n,
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
} from './index-3b0785b0.js';
import { s as S } from './SelfMatchModalStyle.module-be3de432.js';
import { B as b } from './Button-4e851fa0.js';
import { M as I } from './Modal-d30bd2b2.js';
import { C as x } from './Container-7e33f8ea.js';
import { R as B } from './Row-ee81c216.js';
import { C as R } from './Col-3f588678.js';
import { F as T } from './FormGroup-15454cea.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
const y = () => {
  const y = e(a),
    A = e(s),
    O = e(o),
    k = e(t),
    E = e(r),
    F = l(),
    [H, P] = n.useState([]),
    [D, G] = n.useState([]);
  return (
    n.useEffect(() => {
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
                .then(e => P(e))
                .catch(e => {
                  e instanceof d && h.error(e.message);
                });
              new p(c)
                .getMapRevisions()
                .then(e => G(e))
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
    u(I, {
      show: y,
      centered: !0,
      contentClassName: S.content,
      onHide: () => F(f(!1)),
      children: [
        u(I.Header, {
          className: S.selfMatchModalHeader,
          children: [
            C(I.Title, { className: S.headerText, children: 'Self Match' }),
            C('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => F(f(!1)),
            }),
          ],
        }),
        C(I.Body, {
          className: S.selfMatchModalBody,
          children: C(x, {
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
                        value: k,
                        onChange: e =>
                          (function (e) {
                            if ('Current Code' === e)
                              F(M('Current Code')), F(g(null));
                            else {
                              const a = H.filter(a => a.message === e);
                              F(M(a[0].message)), F(g(a[0].id));
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
                          H.map(e =>
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
                          value: E,
                          onChange: e =>
                            (function (e) {
                              if ('Current Map' === e)
                                F(N('Current Map')), F(v(null));
                              else {
                                const a = D.filter(a => a.message === e);
                                F(N(a[0].message)), F(v(a[0].id));
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
                              codeRevisionId: A,
                              mapRevisionId: O,
                            })
                            .catch(e => {
                              e instanceof d && h.error(e.message);
                            }),
                            F(f(!1));
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
