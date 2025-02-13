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
  n,
  r = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  i = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = (e, t, n, l) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let a of i(t))
        s.call(e, a) ||
          a === n ||
          r(e, a, {
            get: () => t[a],
            enumerable: !(l = o(t, a)) || l.enumerable,
          });
    return e;
  },
  a = {};
l(a, (t = e), 'default'), n && l(n, t, 'default');
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
        action: { indentAction: a.languages.IndentAction.Indent },
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
