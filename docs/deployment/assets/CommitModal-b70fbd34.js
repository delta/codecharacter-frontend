import {
  u as e,
  af as s,
  ag as a,
  ah as t,
  ai as o,
  b as r,
  R as n,
  d as i,
  r as m,
  j as l,
  aj as c,
  c as d,
  ak as p,
  _ as u,
  A as h,
  al as _,
} from './index-3b0785b0.js';
import { M as j } from './Modal-d30bd2b2.js';
import { R as C } from './Row-ee81c216.js';
import { F as f } from './Form-bd0943a7.js';
import { B as w } from './Button-4e851fa0.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
import './FormGroup-15454cea.js';
import './Col-3f588678.js';
const g = '_editorInfoHeader_1wsnu_1',
  N = '_headerText_1wsnu_13',
  v = '_editorInfoBody_1wsnu_20',
  y = '_commitModalInput_1wsnu_33',
  M = '_commitModalbtn_1wsnu_57',
  b = '_content_1wsnu_71',
  B = () => {
    const B = e(s),
      x = e(a),
      P = e(t),
      R = e(o),
      T = r(),
      A = new n(i),
      [I, k] = m.useState('');
    return l(j, {
      show: B,
      centered: !0,
      contentClassName: b,
      onHide: () => T(c(!1)),
      children: [
        l(j.Header, {
          className: g,
          children: [
            d(j.Title, { className: N, children: 'Commit ' }),
            d('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => T(c(!1)),
            }),
          ],
        }),
        d(j.Body, {
          className: v,
          children: d(C, {
            children: l(f, {
              children: [
                d('input', {
                  type: 'text',
                  placeholder: 'Enter Commit Message',
                  value: I,
                  className: y,
                  onChange: e => {
                    k(e.target.value);
                  },
                }),
                d(w, {
                  className: M,
                  size: 'lg',
                  onClick: () => {
                    let e = _.Cpp;
                    'c_cpp' === x
                      ? (e = _.Cpp)
                      : 'python' === x
                      ? (e = _.Python)
                      : 'java' === x && (e = _.Java),
                      A.createCodeRevision({
                        code: P,
                        message: I,
                        language: e,
                        codeType: R === p.NORMAL ? 'NORMAL' : 'PVP',
                      })
                        .then(() => {
                          u.success('Code Committed'), k(''), T(c(!1));
                        })
                        .catch(e => {
                          e instanceof h && u.error(e.message);
                        });
                  },
                  variant: 'outline-light',
                  children: 'SUBMIT',
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
export { B as default };
