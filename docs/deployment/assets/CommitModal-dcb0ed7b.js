import {
  u as e,
  af as s,
  ag as a,
  ah as t,
  ai as o,
  b as r,
  R as i,
  d as n,
  r as m,
  j as c,
  aj as l,
  c as d,
  ak as p,
  _ as u,
  A as h,
  al as _,
} from './index-24a58ae8.js';
import { M as j } from './Modal-5efe701c.js';
import { R as C } from './Row-59744247.js';
import { F as f } from './Form-0bcab3dd.js';
import { B as w } from './Button-0a98cdad.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
import './FormGroup-06fc443c.js';
import './Col-ae03dcbb.js';
const g = '_editorInfoHeader_1wsnu_1',
  N = '_headerText_1wsnu_13',
  y = '_editorInfoBody_1wsnu_20',
  b = '_commitModalInput_1wsnu_33',
  v = '_commitModalbtn_1wsnu_57',
  M = '_content_1wsnu_71',
  x = () => {
    const x = e(s),
      P = e(a),
      B = e(t),
      R = e(o),
      T = r(),
      I = new i(n),
      [W, k] = m.useState('');
    return c(j, {
      show: x,
      centered: !0,
      contentClassName: M,
      onHide: () => T(l(!1)),
      children: [
        c(j.Header, {
          className: g,
          children: [
            d(j.Title, { className: N, children: 'Commit ' }),
            d('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => T(l(!1)),
            }),
          ],
        }),
        d(j.Body, {
          className: y,
          children: d(C, {
            children: c(f, {
              children: [
                d('input', {
                  type: 'text',
                  placeholder: 'Enter Commit Message',
                  value: W,
                  className: b,
                  onChange: e => {
                    k(e.target.value);
                  },
                }),
                d(w, {
                  className: v,
                  size: 'lg',
                  onClick: () => {
                    let e = _.Cpp;
                    'c_cpp' === P
                      ? (e = _.Cpp)
                      : 'python' === P
                      ? (e = _.Python)
                      : 'java' === P && (e = _.Java),
                      I.createCodeRevision({
                        code: B,
                        message: W,
                        language: e,
                        codeType: R === p.NORMAL ? 'NORMAL' : 'PVP',
                      })
                        .then(() => {
                          u.success('Code Committed'), k(''), T(l(!1));
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
export { x as default };
