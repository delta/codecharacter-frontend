import { m as e } from './Dashboard-d64d825e.js';
import './index-624895d1.js';
import './react-code-blocks.esm-257a1905.js';
import './extends-64d70faf.js';
import './setPrototypeOf-5f9718cf.js';
import './index.es-33825df4.js';
import './index-06bcf729.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './Modal-e0d29421.js';
import './ThemeProvider-a8cd1696.js';
import './createWithBsPrefix-b4c3ccd3.js';
import './divWithClassName-487073c7.js';
import './MapDesigner-c6077f8a.js';
import './TourProvider-926faeac.js';
import './Container-27f3d7ab.js';
import './Row-e326ec9f.js';
import './Button-1591a852.js';
import './Col-465cf901.js';
import './Form-ab02df86.js';
import './FormGroup-c1cd9298.js';
var t,
  o,
  n = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  r = Object.prototype.hasOwnProperty,
  m = (e, t, o, m) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let s of a(t))
        r.call(e, s) ||
          s === o ||
          n(e, s, {
            get: () => t[s],
            enumerable: !(m = i(t, s)) || m.enumerable,
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
