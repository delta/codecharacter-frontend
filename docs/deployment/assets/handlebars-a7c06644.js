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
  n = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  m = Object.getOwnPropertyNames,
  o = Object.prototype.hasOwnProperty,
  i = (e, t, r, i) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let s of m(t))
        o.call(e, s) ||
          s === r ||
          n(e, s, {
            get: () => t[s],
            enumerable: !(i = a(t, s)) || i.enumerable,
          });
    return e;
  },
  s = {};
i(s, (t = e), 'default'), r && i(r, t, 'default');
var l = [
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
    comments: { blockComment: ['{{!--', '--}}'] },
    brackets: [
      ['\x3c!--', '--\x3e'],
      ['<', '>'],
      ['{{', '}}'],
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
      { open: '<', close: '>' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${l.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        afterText: /^<\/(\w[\w\d]*)\s*>$/i,
        action: { indentAction: s.languages.IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${l.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        action: { indentAction: s.languages.IndentAction.Indent },
      },
    ],
  },
  p = {
    defaultToken: '',
    tokenPostfix: '',
    tokenizer: {
      root: [
        [/\{\{!--/, 'comment.block.start.handlebars', '@commentBlock'],
        [/\{\{!/, 'comment.start.handlebars', '@comment'],
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.root' },
        ],
        [/<!DOCTYPE/, 'metatag.html', '@doctype'],
        [/<!--/, 'comment.html', '@commentHtml'],
        [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
        [
          /(<)(script)/,
          ['delimiter.html', { token: 'tag.html', next: '@script' }],
        ],
        [
          /(<)(style)/,
          ['delimiter.html', { token: 'tag.html', next: '@style' }],
        ],
        [
          /(<)([:\w]+)/,
          ['delimiter.html', { token: 'tag.html', next: '@otherTag' }],
        ],
        [
          /(<\/)(\w+)/,
          ['delimiter.html', { token: 'tag.html', next: '@otherTag' }],
        ],
        [/</, 'delimiter.html'],
        [/\{/, 'delimiter.html'],
        [/[^<{]+/],
      ],
      doctype: [
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' },
        ],
        [/[^>]+/, 'metatag.content.html'],
        [/>/, 'metatag.html', '@pop'],
      ],
      comment: [
        [/\}\}/, 'comment.end.handlebars', '@pop'],
        [/./, 'comment.content.handlebars'],
      ],
      commentBlock: [
        [/--\}\}/, 'comment.block.end.handlebars', '@pop'],
        [/./, 'comment.content.handlebars'],
      ],
      commentHtml: [
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' },
        ],
        [/-->/, 'comment.html', '@pop'],
        [/[^-]+/, 'comment.content.html'],
        [/./, 'comment.content.html'],
      ],
      otherTag: [
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.otherTag' },
        ],
        [/\/?>/, 'delimiter.html', '@pop'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [/[ \t\r\n]+/],
      ],
      script: [
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.script' },
        ],
        [/type/, 'attribute.name', '@scriptAfterType'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [
          />/,
          {
            token: 'delimiter.html',
            next: '@scriptEmbedded.text/javascript',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [
          /(<\/)(script\s*)(>)/,
          [
            'delimiter.html',
            'tag.html',
            { token: 'delimiter.html', next: '@pop' },
          ],
        ],
      ],
      scriptAfterType: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.scriptAfterType',
          },
        ],
        [/=/, 'delimiter', '@scriptAfterTypeEquals'],
        [
          />/,
          {
            token: 'delimiter.html',
            next: '@scriptEmbedded.text/javascript',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      scriptAfterTypeEquals: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.scriptAfterTypeEquals',
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
            token: 'delimiter.html',
            next: '@scriptEmbedded.text/javascript',
            nextEmbedded: 'text/javascript',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      scriptWithCustomType: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.scriptWithCustomType.$S2',
          },
        ],
        [
          />/,
          {
            token: 'delimiter.html',
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
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInEmbeddedState.scriptEmbedded.$S2',
            nextEmbedded: '@pop',
          },
        ],
        [
          /<\/script/,
          { token: '@rematch', next: '@pop', nextEmbedded: '@pop' },
        ],
      ],
      style: [
        [
          /\{\{/,
          { token: '@rematch', switchTo: '@handlebarsInSimpleState.style' },
        ],
        [/type/, 'attribute.name', '@styleAfterType'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [
          />/,
          {
            token: 'delimiter.html',
            next: '@styleEmbedded.text/css',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [
          /(<\/)(style\s*)(>)/,
          [
            'delimiter.html',
            'tag.html',
            { token: 'delimiter.html', next: '@pop' },
          ],
        ],
      ],
      styleAfterType: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.styleAfterType',
          },
        ],
        [/=/, 'delimiter', '@styleAfterTypeEquals'],
        [
          />/,
          {
            token: 'delimiter.html',
            next: '@styleEmbedded.text/css',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      styleAfterTypeEquals: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.styleAfterTypeEquals',
          },
        ],
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
            token: 'delimiter.html',
            next: '@styleEmbedded.text/css',
            nextEmbedded: 'text/css',
          },
        ],
        [/[ \t\r\n]+/],
        [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
      ],
      styleWithCustomType: [
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInSimpleState.styleWithCustomType.$S2',
          },
        ],
        [
          />/,
          {
            token: 'delimiter.html',
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
        [
          /\{\{/,
          {
            token: '@rematch',
            switchTo: '@handlebarsInEmbeddedState.styleEmbedded.$S2',
            nextEmbedded: '@pop',
          },
        ],
        [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
      ],
      handlebarsInSimpleState: [
        [/\{\{\{?/, 'delimiter.handlebars'],
        [/\}\}\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3' }],
        { include: 'handlebarsRoot' },
      ],
      handlebarsInEmbeddedState: [
        [/\{\{\{?/, 'delimiter.handlebars'],
        [
          /\}\}\}?/,
          {
            token: 'delimiter.handlebars',
            switchTo: '@$S2.$S3',
            nextEmbedded: '$S3',
          },
        ],
        { include: 'handlebarsRoot' },
      ],
      handlebarsRoot: [
        [/"[^"]*"/, 'string.handlebars'],
        [/[#/][^\s}]+/, 'keyword.helper.handlebars'],
        [/else\b/, 'keyword.helper.handlebars'],
        [/[\s]+/],
        [/[^}]/, 'variable.parameter.handlebars'],
      ],
    },
  };
export { d as conf, p as language };