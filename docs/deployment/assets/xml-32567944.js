import { m as e } from './Dashboard-988cf677.js';
import './index-3b0785b0.js';
import './react-code-blocks.esm-07e4c5dd.js';
import './extends-64d70faf.js';
import './setPrototypeOf-5f9718cf.js';
import './index.es-9a30e53f.js';
import './index-06bcf729.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './Modal-d30bd2b2.js';
import './ThemeProvider-528d6954.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './divWithClassName-662bab3a.js';
import './MapDesigner-7b166df6.js';
import './TourProvider-a2db2cbe.js';
import './Container-7e33f8ea.js';
import './Row-ee81c216.js';
import './Button-4e851fa0.js';
import './Col-3f588678.js';
import './Form-bd0943a7.js';
import './FormGroup-15454cea.js';
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
