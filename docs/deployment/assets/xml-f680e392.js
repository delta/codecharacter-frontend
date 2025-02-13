import { m as e } from './Dashboard-bf38bfb8.js';
import './index-24a58ae8.js';
import './react-code-blocks.esm-2d1e384d.js';
import './extends-64d70faf.js';
import './setPrototypeOf-b9a4b5f8.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './index.es-8a521e47.js';
import './index-06bcf729.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './_baseFlatten-13b14a1d.js';
import './Modal-5efe701c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './divWithClassName-cc198704.js';
import './MapDesigner-5fad8ad1.js';
import './TourProvider-f8fb0617.js';
import './Container-4692a76f.js';
import './Row-59744247.js';
import './Button-0a98cdad.js';
import './Col-ae03dcbb.js';
import './Form-0bcab3dd.js';
import './FormGroup-06fc443c.js';
var t,
  o,
  i = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  a = Object.prototype.hasOwnProperty,
  m = (e, t, o, m) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let s of r(t))
        a.call(e, s) ||
          s === o ||
          i(e, s, {
            get: () => t[s],
            enumerable: !(m = n(t, s)) || m.enumerable,
          });
    return e;
  },
  s = {};
m(s, (t = e), 'default'), o && m(o, t, 'default');
var p = {
    comments: { blockComment: ['\x3c!--', '--\x3e'] },
    brackets: [['<', '>']],
    autoClosingPairs: [
      { open: '<', close: '>' },
      { open: "'", close: "'" },
      { open: '"', close: '"' },
    ],
    surroundingPairs: [
      { open: '<', close: '>' },
      { open: "'", close: "'" },
      { open: '"', close: '"' },
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          '<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$',
          'i',
        ),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
        action: { indentAction: s.languages.IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp('<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$', 'i'),
        action: { indentAction: s.languages.IndentAction.Indent },
      },
    ],
  },
  c = {
    defaultToken: '',
    tokenPostfix: '.xml',
    ignoreCase: !0,
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
      root: [
        [/[^<&]+/, ''],
        { include: '@whitespace' },
        [
          /(<)(@qualifiedName)/,
          [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }],
        ],
        [
          /(<\/)(@qualifiedName)(\s*)(>)/,
          [
            { token: 'delimiter' },
            { token: 'tag' },
            '',
            { token: 'delimiter' },
          ],
        ],
        [
          /(<\?)(@qualifiedName)/,
          [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }],
        ],
        [
          /(<\!)(@qualifiedName)/,
          [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }],
        ],
        [/<\!\[CDATA\[/, { token: 'delimiter.cdata', next: '@cdata' }],
        [/&\w+;/, 'string.escape'],
      ],
      cdata: [
        [/[^\]]+/, ''],
        [/\]\]>/, { token: 'delimiter.cdata', next: '@pop' }],
        [/\]/, ''],
      ],
      tag: [
        [/[ \t\r\n]+/, ''],
        [
          /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
          ['attribute.name', '', 'attribute.value'],
        ],
        [
          /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
          ['attribute.name', '', 'attribute.value'],
        ],
        [
          /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
          ['attribute.name', '', 'attribute.value'],
        ],
        [/@qualifiedName/, 'attribute.name'],
        [/\?>/, { token: 'delimiter', next: '@pop' }],
        [/(\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],
        [/>/, { token: 'delimiter', next: '@pop' }],
      ],
      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/<!--/, { token: 'comment', next: '@comment' }],
      ],
      comment: [
        [/[^<\-]+/, 'comment.content'],
        [/-->/, { token: 'comment', next: '@pop' }],
        [/<!--/, 'comment.content.invalid'],
        [/[<\-]/, 'comment.content'],
      ],
    },
  };
export { p as conf, c as language };
