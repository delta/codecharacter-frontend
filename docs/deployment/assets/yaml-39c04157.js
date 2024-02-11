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
  n,
  r = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  i = Object.getOwnPropertyNames,
  l = Object.prototype.hasOwnProperty,
  a = (e, t, n, a) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let s of i(t))
        l.call(e, s) ||
          s === n ||
          r(e, s, {
            get: () => t[s],
            enumerable: !(a = o(t, s)) || a.enumerable,
          });
    return e;
  },
  s = {};
a(s, (t = e), 'default'), n && a(n, t, 'default');
var c = {
    comments: { lineComment: '#' },
    brackets: [
      ['{', '}'],
      ['[', ']'],
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
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    folding: { offSide: !0 },
    onEnterRules: [
      {
        beforeText: /:\s*$/,
        action: { indentAction: s.languages.IndentAction.Indent },
      },
    ],
  },
  m = {
    tokenPostfix: '.yaml',
    brackets: [
      { token: 'delimiter.bracket', open: '{', close: '}' },
      { token: 'delimiter.square', open: '[', close: ']' },
    ],
    keywords: [
      'true',
      'True',
      'TRUE',
      'false',
      'False',
      'FALSE',
      'null',
      'Null',
      'Null',
      '~',
    ],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate:
      /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
      root: [
        { include: '@whitespace' },
        { include: '@comment' },
        [/%[^ ]+.*$/, 'meta.directive'],
        [/---/, 'operators.directivesEnd'],
        [/\.{3}/, 'operators.documentEnd'],
        [/[-?:](?= )/, 'operators'],
        { include: '@anchor' },
        { include: '@tagHandle' },
        { include: '@flowCollections' },
        { include: '@blockStyle' },
        [/@numberInteger(?![ \t]*\S+)/, 'number'],
        [/@numberFloat(?![ \t]*\S+)/, 'number.float'],
        [/@numberOctal(?![ \t]*\S+)/, 'number.octal'],
        [/@numberHex(?![ \t]*\S+)/, 'number.hex'],
        [/@numberInfinity(?![ \t]*\S+)/, 'number.infinity'],
        [/@numberNaN(?![ \t]*\S+)/, 'number.nan'],
        [/@numberDate(?![ \t]*\S+)/, 'number.date'],
        [
          /(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,
          ['type', 'white', 'operators', 'white'],
        ],
        { include: '@flowScalars' },
        [/[^#]+/, { cases: { '@keywords': 'keyword', '@default': 'string' } }],
      ],
      object: [
        { include: '@whitespace' },
        { include: '@comment' },
        [/\}/, '@brackets', '@pop'],
        [/,/, 'delimiter.comma'],
        [/:(?= )/, 'operators'],
        [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, 'type'],
        { include: '@flowCollections' },
        { include: '@flowScalars' },
        { include: '@tagHandle' },
        { include: '@anchor' },
        { include: '@flowNumber' },
        [
          /[^\},]+/,
          { cases: { '@keywords': 'keyword', '@default': 'string' } },
        ],
      ],
      array: [
        { include: '@whitespace' },
        { include: '@comment' },
        [/\]/, '@brackets', '@pop'],
        [/,/, 'delimiter.comma'],
        { include: '@flowCollections' },
        { include: '@flowScalars' },
        { include: '@tagHandle' },
        { include: '@anchor' },
        { include: '@flowNumber' },
        [
          /[^\],]+/,
          { cases: { '@keywords': 'keyword', '@default': 'string' } },
        ],
      ],
      multiString: [[/^( +).+$/, 'string', '@multiStringContinued.$1']],
      multiStringContinued: [
        [
          /^( *).+$/,
          {
            cases: {
              '$1==$S2': 'string',
              '@default': { token: '@rematch', next: '@popall' },
            },
          },
        ],
      ],
      whitespace: [[/[ \t\r\n]+/, 'white']],
      comment: [[/#.*$/, 'comment']],
      flowCollections: [
        [/\[/, '@brackets', '@array'],
        [/\{/, '@brackets', '@object'],
      ],
      flowScalars: [
        [/"([^"\\]|\\.)*$/, 'string.invalid'],
        [/'([^'\\]|\\.)*$/, 'string.invalid'],
        [/'[^']*'/, 'string'],
        [/"/, 'string', '@doubleQuotedString'],
      ],
      doubleQuotedString: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop'],
      ],
      blockStyle: [[/[>|][0-9]*[+-]?$/, 'operators', '@multiString']],
      flowNumber: [
        [/@numberInteger(?=[ \t]*[,\]\}])/, 'number'],
        [/@numberFloat(?=[ \t]*[,\]\}])/, 'number.float'],
        [/@numberOctal(?=[ \t]*[,\]\}])/, 'number.octal'],
        [/@numberHex(?=[ \t]*[,\]\}])/, 'number.hex'],
        [/@numberInfinity(?=[ \t]*[,\]\}])/, 'number.infinity'],
        [/@numberNaN(?=[ \t]*[,\]\}])/, 'number.nan'],
        [/@numberDate(?=[ \t]*[,\]\}])/, 'number.date'],
      ],
      tagHandle: [[/\![^ ]*/, 'tag']],
      anchor: [[/[&*][^ ]+/, 'namespace']],
    },
  };
export { c as conf, m as language };
