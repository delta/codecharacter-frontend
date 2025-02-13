import {
  u as e,
  a0 as a,
  a1 as s,
  a2 as o,
  a3 as t,
  a4 as r,
  b as l,
  r as n,
  t as i,
  d as c,
  R as d,
  a5 as m,
  A as h,
  _ as u,
  j as p,
  a6 as C,
  c as f,
  a7 as g,
  a8 as M,
  a9 as N,
  aa as v,
  Z as j,
  $ as w,
} from './index-24a58ae8.js';
import { s as y } from './SelfMatchModalStyle.module-be3de432.js';
import { B as P } from './Button-0a98cdad.js';
import { M as S } from './Modal-5efe701c.js';
import { C as b } from './Container-4692a76f.js';
import { R as x } from './Row-59744247.js';
import { C as I } from './Col-ae03dcbb.js';
import { F as B } from './FormGroup-06fc443c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
const T = () => {
  const T = e(a),
    R = e(s),
    A = e(o),
    E = e(t),
    F = e(r),
    O = l(),
    [k, D] = n.useState([]);
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
              new d(c)
                .getCodeRevisions(m.Pvp)
                .then(e => D(e))
                .catch(e => {
                  e instanceof h && u.error(e.message);
                });
            }
          })
          .catch(e => {
            e instanceof h && u.error(e.message);
          });
      }
    }, [T]),
    p(S, {
      show: T,
      centered: !0,
      contentClassName: y.content,
      onHide: () => O(C(!1)),
      children: [
        p(S.Header, {
          className: y.selfMatchModalHeader,
          children: [
            f(S.Title, { className: y.headerText, children: 'Self Match' }),
            f('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => O(C(!1)),
            }),
          ],
        }),
        f(S.Body, {
          className: y.selfMatchModalBody,
          children: f(b, {
            fluid: !0,
            children: p(x, {
              children: [
                f(I, {
                  xs: 12,
                  className: y.selfMatchModalFormGroup,
                  children: p(B, {
                    controlId: 'code1CommitName',
                    children: [
                      f('div', {
                        className: y.selfMatchModalLabel,
                        children: 'Code 1 Commit Name',
                      }),
                      p('select', {
                        className: y.selfMatchModalDropdown,
                        value: E,
                        onChange: e =>
                          (function (e) {
                            if ('Current Player 1 Code' === e)
                              O(g('Current Player 1 Code')), O(M(null));
                            else {
                              const a = k.filter(a => a.message === e);
                              O(g(a[0].message)), O(M(a[0].id));
                            }
                          })(e.target.value),
                        children: [
                          f(
                            'option',
                            {
                              value: 'Current Player 1 Code',
                              className: y.dropdownOptions,
                              children: 'Current Code',
                            },
                            'Current Player 1 Code',
                          ),
                          k.map(e =>
                            f(
                              'option',
                              {
                                value: e.message,
                                className: y.dropdownOptions,
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
                p(I, {
                  xs: 12,
                  className: y.selfMatchModalFormGroup,
                  children: [
                    p(B, {
                      controlId: 'code2CommitName',
                      children: [
                        f('div', {
                          className: y.selfMatchModalLabel,
                          children: 'Code 2 Commit Name',
                        }),
                        p('select', {
                          className: y.selfMatchModalDropdown,
                          value: F,
                          onChange: e =>
                            (function (e) {
                              if ('Current Player 2 Code' === e)
                                O(N('Current Player 2 Code')), O(v(null));
                              else {
                                const a = k.filter(a => a.message === e);
                                O(N(a[0].message)), O(v(a[0].id));
                              }
                            })(e.target.value),
                          children: [
                            f(
                              'option',
                              {
                                value: 'Current Player 2 Code',
                                className: y.dropdownOptions,
                                children: 'Current Code',
                              },
                              'Current Player 2 Code',
                            ),
                            k.map(e =>
                              f(
                                'option',
                                {
                                  value: e.message,
                                  className: y.dropdownOptions,
                                  children: e.message,
                                },
                                e.message,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    f('div', {
                      children: f(P, {
                        className: y.selfMatchModalSimulateBtn,
                        size: 'lg',
                        onClick: function () {
                          new j(c)
                            .createMatch({
                              mode: w.Selfpvp,
                              codeRevisionId: R,
                              codeRevisionId2: A,
                            })
                            .catch(e => {
                              e instanceof h && u.error(e.message);
                            }),
                            O(C(!1));
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
export { T as default };
