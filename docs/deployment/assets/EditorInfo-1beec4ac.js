import {
  u as e,
  ab as s,
  ac as i,
  ad as r,
  b as t,
  j as o,
  ae as a,
  c as l,
} from './index-3b0785b0.js';
import { M as d } from './Modal-d30bd2b2.js';
import { R as c } from './Row-ee81c216.js';
import { C as n } from './Col-3f588678.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
const m = '_InfoGroup_b9mly_1',
  p = '_editorInfoHeader_b9mly_9',
  h = '_content_b9mly_19',
  _ = '_headerText_b9mly_23',
  b = '_editorInfoBody_b9mly_30',
  y = '_infoDiv_b9mly_62',
  C = '_dcDescription_b9mly_71',
  f = [
    { key: 'Ctrl + S', description: 'Save' },
    { key: 'Ctrl + ALT + N', description: 'Simulate' },
    { key: 'Ctrl + K', description: 'Commit' },
    { key: 'Ctrl + Shift + S', description: 'Submit' },
    { key: 'Ctrl + Z', description: 'Undo' },
    { key: 'Ctrl + Y', description: 'Redo' },
  ],
  N = () => {
    const N = e(s),
      j = e(i),
      u = e(r),
      v = t();
    return o(d, {
      show: u,
      centered: !0,
      contentClassName: h,
      onHide: () => v(a(!1)),
      children: [
        o(d.Header, {
          className: p,
          children: [
            l(
              d.Title,
              'Dashboard' == N || 'PvP' == N
                ? { className: _, children: 'Editor Shortcuts' }
                : { className: _, children: 'DC Description' },
            ),
            l('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => v(a(!1)),
            }),
          ],
        }),
        l(d.Body, {
          className: b,
          children:
            'Dashboard' == N || 'PvP' == N
              ? l(c, {
                  children: f.map((e, s) =>
                    o(
                      n,
                      {
                        xs: 12,
                        className: m,
                        children: [
                          o('div', {
                            className: y,
                            children: [
                              l('b', { children: e.key }),
                              l('b', { children: e.description }),
                            ],
                          }),
                          l('br', {}),
                        ],
                      },
                      s,
                    ),
                  ),
                })
              : l('div', { className: C, children: j }),
        }),
      ],
    });
  };
export { N as default };
