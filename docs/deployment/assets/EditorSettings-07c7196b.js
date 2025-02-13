import {
  u as e,
  I as a,
  D as s,
  T as t,
  b as o,
  E as i,
  j as r,
  B as l,
  c as n,
  G as c,
  H as d,
  J as m,
} from './index-24a58ae8.js';
import { M as _ } from './Modal-5efe701c.js';
import { C as h } from './Container-4692a76f.js';
import { R as p } from './Row-59744247.js';
import { C as u } from './Col-ae03dcbb.js';
import { F as v } from './FormGroup-06fc443c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
const N = '_settingFormGroup_2az02_1',
  z = '_editorSettingsHeader_2az02_8',
  g = '_headerText_2az02_15',
  j = '_autocompletediv_2az02_22',
  f = '_autocompletebtn_2az02_31',
  b = '_autocompleteLabel_2az02_36',
  C = '_toggle_2az02_46',
  x = '_toggleHandle_2az02_55',
  w = '_on_2az02_66',
  T = '_off_2az02_75',
  y = '_editorSettingsBody_2az02_79',
  B = '_settingLabel_2az02_86',
  H = '_settingDropdown_2az02_94',
  S = '_optionsDropdown_2az02_110',
  k = '_content_2az02_113',
  D = () => {
    const D = e(a),
      F = e(s),
      I = e(t),
      P = o(),
      W = e(i),
      E = [];
    for (let e = 8; e <= 40; e += 2) E.push(e);
    return r(_, {
      show: D,
      centered: !0,
      onHide: () => P(l(!1)),
      contentClassName: k,
      children: [
        r(_.Header, {
          className: z,
          children: [
            n(_.Title, { className: g, children: 'Settings' }),
            n('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => P(l(!1)),
            }),
          ],
        }),
        n(_.Body, {
          className: y,
          children: n(h, {
            fluid: !0,
            children: r(p, {
              children: [
                n(u, {
                  xs: 12,
                  className: N,
                  children: r(v, {
                    controlId: 'fontSize',
                    children: [
                      n('div', { className: B, children: 'Font Size' }),
                      n('select', {
                        className: H,
                        value: F,
                        onChange: e => {
                          return (a = Number(e.target.value)), void P(c(a));
                          var a;
                        },
                        children: E.map(e =>
                          n(
                            'option',
                            { value: e, className: S, children: e },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                n(u, {
                  xs: 12,
                  className: N,
                  children: r(v, {
                    controlId: 'editorTheme',
                    children: [
                      n('div', { className: B, children: 'Editor Theme' }),
                      n('select', {
                        className: H,
                        value: I,
                        onChange: e => {
                          var a;
                          (a = e.target.value), P(d(a));
                        },
                        children: [
                          'vs-light',
                          'vs-dark',
                          'high-contrast-black',
                        ].map(e =>
                          n(
                            'option',
                            { value: e, className: S, children: e },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                n(u, {
                  xs: 12,
                  children: r('div', {
                    className: j,
                    children: [
                      n('div', { className: b, children: 'Intellisense' }),
                      n('div', {
                        className: f,
                        children: n('div', {
                          className: `${C} ${W ? w : T}`,
                          onClick: () => {
                            P(m(!W));
                          },
                          children: n('div', { className: x }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
export { D as default };
