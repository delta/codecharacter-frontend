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
  o = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  i = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  c = (e, t, n, c) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let a of i(t))
        s.call(e, a) ||
          a === n ||
          o(e, a, {
            get: () => t[a],
            enumerable: !(c = r(t, a)) || c.enumerable,
          });
    return e;
  },
  a = {};
c(a, (t = e), 'default'), n && c(n, t, 'default');
var p = {
    wordPattern:
      /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: { lineComment: '//', blockComment: ['/*', '*/'] },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    onEnterRules: [
      {
        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
        afterText: /^\s*\*\/$/,
        action: {
          indentAction: a.languages.IndentAction.IndentOutdent,
          appendText: ' * ',
        },
      },
      {
        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
        action: {
          indentAction: a.languages.IndentAction.None,
          appendText: ' * ',
        },
      },
      {
        beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
        action: {
          indentAction: a.languages.IndentAction.None,
          appendText: '* ',
        },
      },
      {
        beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
        action: { indentAction: a.languages.IndentAction.None, removeText: 1 },
      },
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"', notIn: ['string'] },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
      { open: '`', close: '`', notIn: ['string', 'comment'] },
      { open: '/**', close: ' */', notIn: ['string'] },
    ],
    folding: {
      markers: {
        start: new RegExp('^\\s*//\\s*#?region\\b'),
        end: new RegExp('^\\s*//\\s*#?endregion\\b'),
      },
    },
  },
  g = {
    defaultToken: 'invalid',
    tokenPostfix: '.ts',
    keywords: [
      'abstract',
      'any',
      'as',
      'asserts',
      'bigint',
      'boolean',
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'const',
      'constructor',
      'debugger',
      'declare',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'implements',
      'import',
      'in',
      'infer',
      'instanceof',
      'interface',
      'is',
      'keyof',
      'let',
      'module',
      'namespace',
      'never',
      'new',
      'null',
      'number',
      'object',
      'out',
      'package',
      'private',
      'protected',
      'public',
      'override',
      'readonly',
      'require',
      'global',
      'return',
      'set',
      'static',
      'string',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'type',
      'typeof',
      'undefined',
      'unique',
      'unknown',
      'var',
      'void',
      'while',
      'with',
      'yield',
      'async',
      'await',
      'of',
    ],
    operators: [
      '<=',
      '>=',
      '==',
      '!=',
      '===',
      '!==',
      '=>',
      '+',
      '-',
      '**',
      '*',
      '/',
      '%',
      '++',
      '--',
      '<<',
      '</',
      '>>',
      '>>>',
      '&',
      '|',
      '^',
      '!',
      '~',
      '&&',
      '||',
      '??',
      '?',
      ':',
      '=',
      '+=',
      '-=',
      '*=',
      '**=',
      '/=',
      '%=',
      '<<=',
      '>>=',
      '>>>=',
      '&=',
      '|=',
      '^=',
      '@',
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes:
      /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc:
      /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    tokenizer: {
      root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],
      common: [
        [
          /[a-z_$][\w$]*/,
          { cases: { '@keywords': 'keyword', '@default': 'identifier' } },
        ],
        [/[A-Z][\w\$]*/, 'type.identifier'],
        { include: '@whitespace' },
        [
          /\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
          { token: 'regexp', bracket: '@open', next: '@regexp' },
        ],
        [/[()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [/!(?=([^=]|$))/, 'delimiter'],
        [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
        [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
        [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
        [/0[xX](@hexdigits)n?/, 'number.hex'],
        [/0[oO]?(@octaldigits)n?/, 'number.octal'],
        [/0[bB](@binarydigits)n?/, 'number.binary'],
        [/(@digits)n?/, 'number'],
        [/[;,.]/, 'delimiter'],
        [/"([^"\\]|\\.)*$/, 'string.invalid'],
        [/'([^'\\]|\\.)*$/, 'string.invalid'],
        [/"/, 'string', '@string_double'],
        [/'/, 'string', '@string_single'],
        [/`/, 'string', '@string_backtick'],
      ],
      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment'],
      ],
      comment: [
        [/[^\/*]+/, 'comment'],
        [/\*\//, 'comment', '@pop'],
        [/[\/*]/, 'comment'],
      ],
      jsdoc: [
        [/[^\/*]+/, 'comment.doc'],
        [/\*\//, 'comment.doc', '@pop'],
        [/[\/*]/, 'comment.doc'],
      ],
      regexp: [
        [
          /(\{)(\d+(?:,\d*)?)(\})/,
          [
            'regexp.escape.control',
            'regexp.escape.control',
            'regexp.escape.control',
          ],
        ],
        [
          /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
          [
            'regexp.escape.control',
            { token: 'regexp.escape.control', next: '@regexrange' },
          ],
        ],
        [
          /(\()(\?:|\?=|\?!)/,
          ['regexp.escape.control', 'regexp.escape.control'],
        ],
        [/[()]/, 'regexp.escape.control'],
        [/@regexpctl/, 'regexp.escape.control'],
        [/[^\\\/]/, 'regexp'],
        [/@regexpesc/, 'regexp.escape'],
        [/\\\./, 'regexp.invalid'],
        [
          /(\/)([dgimsuy]*)/,
          [
            { token: 'regexp', bracket: '@close', next: '@pop' },
            'keyword.other',
          ],
        ],
      ],
      regexrange: [
        [/-/, 'regexp.escape.control'],
        [/\^/, 'regexp.invalid'],
        [/@regexpesc/, 'regexp.escape'],
        [/[^\]]/, 'regexp'],
        [
          /\]/,
          { token: 'regexp.escape.control', next: '@pop', bracket: '@close' },
        ],
      ],
      string_double: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop'],
      ],
      string_single: [
        [/[^\\']+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/'/, 'string', '@pop'],
      ],
      string_backtick: [
        [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
        [/[^\\`$]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/`/, 'string', '@pop'],
      ],
      bracketCounting: [
        [/\{/, 'delimiter.bracket', '@bracketCounting'],
        [/\}/, 'delimiter.bracket', '@pop'],
        { include: 'common' },
      ],
    },
  };
export { p as conf, g as language };