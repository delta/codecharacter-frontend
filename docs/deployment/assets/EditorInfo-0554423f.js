import {
  u as e,
  ab as s,
  ac as i,
  ad as o,
  b as r,
  j as t,
  ae as a,
  c as l,
} from './index-24a58ae8.js';
import { M as c } from './Modal-5efe701c.js';
import { R as d } from './Row-59744247.js';
import { C as n } from './Col-ae03dcbb.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
const m = '_InfoGroup_b9mly_1',
  p = '_editorInfoHeader_b9mly_9',
  h = '_content_b9mly_19',
  b = '_headerText_b9mly_23',
  _ = '_editorInfoBody_b9mly_30',
  y = '_infoDiv_b9mly_62',
  C = '_dcDescription_b9mly_71',
  u = [
    { key: 'Ctrl + S', description: 'Save' },
    { key: 'Ctrl + ALT + N', description: 'Simulate' },
    { key: 'Ctrl + K', description: 'Commit' },
    { key: 'Ctrl + Shift + S', description: 'Submit' },
    { key: 'Ctrl + M', description: 'Change Mode' },
  ],
  j = () => {
    const j = e(s),
      f = e(i),
      N = e(o),
      k = r();
    return t(c, {
      show: N,
      centered: !0,
      contentClassName: h,
      onHide: () => k(a(!1)),
      children: [
        t(c.Header, {
          className: p,
          children: [
            l(
              c.Title,
              'Dashboard' == j || 'Tutorials' == j
                ? { className: b, children: 'Editor Shortcuts' }
                : { className: b, children: 'DC Description' },
            ),
            l('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => k(a(!1)),
            }),
          ],
        }),
        l(c.Body, {
          className: _,
          children:
            'Dashboard' == j || 'Tutorials' == j
              ? l(d, {
                  children: u.map((e, s) =>
                    t(
                      n,
                      {
                        xs: 12,
                        className: m,
                        children: [
                          t('div', {
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
              : l('div', { className: C, children: f }),
        }),
      ],
    });
  };
export { j as default };
