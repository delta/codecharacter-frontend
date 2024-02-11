import {
  u as e,
  I as a,
  D as s,
  T as t,
  b as o,
  E as l,
  j as i,
  B as r,
  c as n,
  G as c,
  H as d,
  J as m,
} from './index-3b0785b0.js';
import { M as _ } from './Modal-d30bd2b2.js';
import { C as h } from './Container-7e33f8ea.js';
import { R as p } from './Row-ee81c216.js';
import { C as v } from './Col-3f588678.js';
import { F as u } from './FormGroup-15454cea.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
const N = '_settingFormGroup_2az02_1',
  z = '_editorSettingsHeader_2az02_8',
  g = '_headerText_2az02_15',
  f = '_autocompletediv_2az02_22',
  j = '_autocompletebtn_2az02_31',
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
  F = () => {
    const F = e(a),
      I = e(s),
      D = e(t),
      G = o(),
      P = e(l),
      E = [];
    for (let e = 8; e <= 40; e += 2) E.push(e);
    return i(_, {
      show: F,
      centered: !0,
      onHide: () => G(r(!1)),
      contentClassName: k,
      children: [
        i(_.Header, {
          className: z,
          children: [
            n(_.Title, { className: g, children: 'Settings' }),
            n('button', {
              type: 'button',
              className: 'btn-close btn-close-white',
              'aria-label': 'Close',
              onClick: () => G(r(!1)),
            }),
          ],
        }),
        n(_.Body, {
          className: y,
          children: n(h, {
            fluid: !0,
            children: i(p, {
              children: [
                n(v, {
                  xs: 12,
                  className: N,
                  children: i(u, {
                    controlId: 'fontSize',
                    children: [
                      n('div', { className: B, children: 'Font Size' }),
                      n('select', {
                        className: H,
                        value: I,
                        onChange: e => {
                          return (a = Number(e.target.value)), void G(c(a));
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
                n(v, {
                  xs: 12,
                  className: N,
                  children: i(u, {
                    controlId: 'editorTheme',
                    children: [
                      n('div', { className: B, children: 'Editor Theme' }),
                      n('select', {
                        className: H,
                        value: D,
                        onChange: e => {
                          var a;
                          (a = e.target.value), G(d(a));
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
                n(v, {
                  xs: 12,
                  children: i('div', {
                    className: f,
                    children: [
                      n('div', { className: b, children: 'Intellisense' }),
                      n('div', {
                        className: j,
                        children: n('div', {
                          className: `${C} ${P ? w : T}`,
                          onClick: () => {
                            G(m(!P));
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
export { F as default };
