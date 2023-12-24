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
