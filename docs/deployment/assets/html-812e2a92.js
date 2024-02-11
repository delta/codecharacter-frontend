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
  r,
  i = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  n = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  m = (e, t, r, m) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let p of n(t))
        s.call(e, p) ||
          p === r ||
          i(e, p, {
            get: () => t[p],
            enumerable: !(m = o(t, p)) || m.enumerable,
          });
    return e;
  },
  p = {};
m(p, (t = e), 'default'), r && m(r, t, 'default');
var a = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ],
  d = {
    wordPattern:
      /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: { blockComment: ['\x3c!--', '--\x3e'] },
    brackets: [
      ['\x3c!--', '--\x3e'],
      ['<', '>'],
      ['{', '}'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    surroundingPairs: [
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '<', close: '>' },
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${a.join('|')}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
        action: { indentAction: p.languages.IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${a.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        action: { indentAction: p.languages.IndentAction.Indent },
      },
    ],
    folding: {
      markers: {
        start: new RegExp('^\\s*\x3c!--\\s*#region\\b.*--\x3e'),
        end: new RegExp('^\\s*\x3c!--\\s*#endregion\\b.*--\x3e'),
      },
    },
  },
  l = {
    defaultToken: '',
    tokenPostfix: '.html',
    ignoreCase: !0,
    tokenizer: {
      root: [
        [/<!DOCTYPE/, 'metatag', '@doctype'],
        [/<!--/, 'comment', '@comment'],
        [
          /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
          ['delimiter', 'tag', '', 'delimiter'],
        ],
        [/(<)(script)/, ['delimiter', { token: 'tag', next: '@script' }]],
        [/(<)(style)/, ['delimiter', { token: 'tag', next: '@style' }]],
        [
          /(<)((?:[\w\-]+:)?[\w\-]+)/,
          ['delimiter', { token: 'tag', next: '@otherTag' }],
        ],
        [
          /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
          ['delimiter', { token: 'tag', next: '@otherTag' }],
        ],
        [/</, 'delimiter'],
        [/[^<]+/],
      ],
      doctype: [
        [/[^>]+/, 'metatag.content'],
        [/>/, 'metatag', '@pop'],
      ],
      comment: [
        [/-->/, 'comment', '@pop'],
        [/[^-]+/, 'comment.content'],
        [/./, 'comment.content'],
      ],
      otherTag: [
        [/\/?>/, 'delimiter', '@pop'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [/[ \t\r\n]+/],
      ],
      script: [
        [/type/, 'attribute.name', '@scriptAfterType'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [
          />/,
          {
            token: 'delimiter',
            next: '@scriptEmbedded',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [
          /(<\/)(script\s*)(>)/,
          ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }],
        ],
      ],
      scriptAfterType: [
        [/=/, 'delimiter', '@scriptAfterTypeEquals'],
        [
          />/,
          {
            token: 'delimiter',
            next: '@scriptEmbedded',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      scriptAfterTypeEquals: [
        [
          /"module"/,
          {
            token: 'attribute.value',
            switchTo: '@scriptWithCustomType.text/javascript',
          },
        ],
        [
          /'module'/,
          {
            token: 'attribute.value',
            switchTo: '@scriptWithCustomType.text/javascript',
          },
        ],
        [
          /"([^"]*)"/,
          { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' },
        ],
        [
          /'([^']*)'/,
          { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' },
        ],
        [
          />/,
          {
            token: 'delimiter',
            next: '@scriptEmbedded',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      scriptWithCustomType: [
        [
          />/,
          {
            token: 'delimiter',
            next: '@scriptEmbedded.$S2',
            nextEmbedded: '$S2',
          },
        ],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [/[ \t\r\n]+/],
        [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      scriptEmbedded: [
        [
          /<\/script/,
          { token: '@rematch', next: '@pop', nextEmbedded: '@pop' },
        ],
        [/[^<]+/, ''],
      ],
      style: [
        [/type/, 'attribute.name', '@styleAfterType'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [
          />/,
          {
            token: 'delimiter',
            next: '@styleEmbedded',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [
          /(<\/)(style\s*)(>)/,
          ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }],
        ],
      ],
      styleAfterType: [
        [/=/, 'delimiter', '@styleAfterTypeEquals'],
        [
          />/,
          {
            token: 'delimiter',
            next: '@styleEmbedded',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      styleAfterTypeEquals: [
        [
          /"([^"]*)"/,
          { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' },
        ],
        [
          /'([^']*)'/,
          { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' },
        ],
        [
          />/,
          {
            token: 'delimiter',
            next: '@styleEmbedded',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      styleWithCustomType: [
        [
          />/,
          {
            token: 'delimiter',
            next: '@styleEmbedded.$S2',
            nextEmbedded: '$S2',
          },
        ],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [/[ \t\r\n]+/],
        [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      styleEmbedded: [
        [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
        [/[^<]+/, ''],
      ],
    },
  };
export { d as conf, l as language };
