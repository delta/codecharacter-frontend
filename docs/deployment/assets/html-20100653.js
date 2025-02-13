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
