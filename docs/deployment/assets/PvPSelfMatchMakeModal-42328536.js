import {
  u as e,
  a0 as a,
  a1 as s,
  a2 as o,
  a3 as t,
  a4 as l,
  b as r,
  r as n,
  t as i,
  d as c,
  R as d,
  a5 as m,
  A as h,
  _ as u,
  j as C,
  a6 as p,
  c as f,
  a7 as g,
  a8 as M,
  a9 as N,
  aa as v,
  Z as j,
  $ as y,
} from './index-3b0785b0.js';
import { s as w } from './SelfMatchModalStyle.module-be3de432.js';
import { B as P } from './Button-4e851fa0.js';
import { M as S } from './Modal-d30bd2b2.js';
import { C as b } from './Container-7e33f8ea.js';
import { R as I } from './Row-ee81c216.js';
import { C as x } from './Col-3f588678.js';
import { F as B } from './FormGroup-15454cea.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
const T = () => {
  const T = e(a),
    A = e(s),
    R = e(o),
    O = e(t),
    k = e(l),
    E = r(),
    [F, H] = n.useState([]);
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
                .then(e => H(e))
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
    C(S, {
      show: T,
      centered: !0,
      contentClassName: w.content,
      onHide: () => E(p(!1)),
      children: [
        C(S.Header, {
          className: w.selfMatchModalHeader,
          children: [
            f(S.Title, { className: w.headerText, children: 'Self Match' }),
            f('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => E(p(!1)),
            }),
          ],
        }),
        f(S.Body, {
          className: w.selfMatchModalBody,
          children: f(b, {
            fluid: !0,
            children: C(I, {
              children: [
                f(x, {
                  xs: 12,
                  className: w.selfMatchModalFormGroup,
                  children: C(B, {
                    controlId: 'code1CommitName',
                    children: [
                      f('div', {
                        className: w.selfMatchModalLabel,
                        children: 'Code 1 Commit Name',
                      }),
                      C('select', {
                        className: w.selfMatchModalDropdown,
                        value: O,
                        onChange: e =>
                          (function (e) {
                            if ('Current Player 1 Code' === e)
                              E(g('Current Player 1 Code')), E(M(null));
                            else {
                              const a = F.filter(a => a.message === e);
                              E(g(a[0].message)), E(M(a[0].id));
                            }
                          })(e.target.value),
                        children: [
                          f(
                            'option',
                            {
                              value: 'Current Player 1 Code',
                              className: w.dropdownOptions,
                              children: 'Current Code',
                            },
                            'Current Player 1 Code',
                          ),
                          F.map(e =>
                            f(
                              'option',
                              {
                                value: e.message,
                                className: w.dropdownOptions,
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
                C(x, {
                  xs: 12,
                  className: w.selfMatchModalFormGroup,
                  children: [
                    C(B, {
                      controlId: 'code2CommitName',
                      children: [
                        f('div', {
                          className: w.selfMatchModalLabel,
                          children: 'Code 2 Commit Name',
                        }),
                        C('select', {
                          className: w.selfMatchModalDropdown,
                          value: k,
                          onChange: e =>
                            (function (e) {
                              if ('Current Player 2 Code' === e)
                                E(N('Current Player 2 Code')), E(v(null));
                              else {
                                const a = F.filter(a => a.message === e);
                                E(N(a[0].message)), E(v(a[0].id));
                              }
                            })(e.target.value),
                          children: [
                            f(
                              'option',
                              {
                                value: 'Current Player 2 Code',
                                className: w.dropdownOptions,
                                children: 'Current Code',
                              },
                              'Current Player 2 Code',
                            ),
                            F.map(e =>
                              f(
                                'option',
                                {
                                  value: e.message,
                                  className: w.dropdownOptions,
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
                        className: w.selfMatchModalSimulateBtn,
                        size: 'lg',
                        onClick: function () {
                          new j(c)
                            .createMatch({
                              mode: y.Selfpvp,
                              codeRevisionId: A,
                              codeRevisionId2: R,
                            })
                            .catch(e => {
                              e instanceof h && u.error(e.message);
                            }),
                            E(p(!1));
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
