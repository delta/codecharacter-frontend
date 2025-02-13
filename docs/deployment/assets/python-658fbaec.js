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
  s = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  i = Object.getOwnPropertyNames,
  n = Object.prototype.hasOwnProperty,
  a = (e, t, r, a) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let l of i(t))
        n.call(e, l) ||
          l === r ||
          s(e, l, {
            get: () => t[l],
            enumerable: !(a = o(t, l)) || a.enumerable,
          });
    return e;
  },
  l = {};
a(l, (t = e), 'default'), r && a(r, t, 'default');
var p = {
    comments: { lineComment: '#', blockComment: ["'''", "'''"] },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"', notIn: ['string'] },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          '^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$',
        ),
        action: { indentAction: l.languages.IndentAction.Indent },
      },
    ],
    folding: {
      offSide: !0,
      markers: {
        start: new RegExp('^\\s*#region\\b'),
        end: new RegExp('^\\s*#endregion\\b'),
      },
    },
  },
  c = {
    defaultToken: '',
    tokenPostfix: '.python',
    keywords: [
      'False',
      'None',
      'True',
      '_',
      'and',
      'as',
      'assert',
      'async',
      'await',
      'break',
      'case',
      'class',
      'continue',
      'def',
      'del',
      'elif',
      'else',
      'except',
      'exec',
      'finally',
      'for',
      'from',
      'global',
      'if',
      'import',
      'in',
      'is',
      'lambda',
      'match',
      'nonlocal',
      'not',
      'or',
      'pass',
      'print',
      'raise',
      'return',
      'try',
      'while',
      'with',
      'yield',
      'int',
      'float',
      'long',
      'complex',
      'hex',
      'abs',
      'all',
      'any',
      'apply',
      'basestring',
      'bin',
      'bool',
      'buffer',
      'bytearray',
      'callable',
      'chr',
      'classmethod',
      'cmp',
      'coerce',
      'compile',
      'complex',
      'delattr',
      'dict',
      'dir',
      'divmod',
      'enumerate',
      'eval',
      'execfile',
      'file',
      'filter',
      'format',
      'frozenset',
      'getattr',
      'globals',
      'hasattr',
      'hash',
      'help',
      'id',
      'input',
      'intern',
      'isinstance',
      'issubclass',
      'iter',
      'len',
      'locals',
      'list',
      'map',
      'max',
      'memoryview',
      'min',
      'next',
      'object',
      'oct',
      'open',
      'ord',
      'pow',
      'print',
      'property',
      'reversed',
      'range',
      'raw_input',
      'reduce',
      'reload',
      'repr',
      'reversed',
      'round',
      'self',
      'set',
      'setattr',
      'slice',
      'sorted',
      'staticmethod',
      'str',
      'sum',
      'super',
      'tuple',
      'type',
      'unichr',
      'unicode',
      'vars',
      'xrange',
      'zip',
      '__dict__',
      '__methods__',
      '__members__',
      '__class__',
      '__bases__',
      '__name__',
      '__mro__',
      '__subclasses__',
      '__init__',
      '__import__',
    ],
    brackets: [
      { open: '{', close: '}', token: 'delimiter.curly' },
      { open: '[', close: ']', token: 'delimiter.bracket' },
      { open: '(', close: ')', token: 'delimiter.parenthesis' },
    ],
    tokenizer: {
      root: [
        { include: '@whitespace' },
        { include: '@numbers' },
        { include: '@strings' },
        [/[,:;]/, 'delimiter'],
        [/[{}\[\]()]/, '@brackets'],
        [/@[a-zA-Z_]\w*/, 'tag'],
        [
          /[a-zA-Z_]\w*/,
          { cases: { '@keywords': 'keyword', '@default': 'identifier' } },
        ],
      ],
      whitespace: [
        [/\s+/, 'white'],
        [/(^#.*$)/, 'comment'],
        [/'''/, 'string', '@endDocString'],
        [/"""/, 'string', '@endDblDocString'],
      ],
      endDocString: [
        [/[^']+/, 'string'],
        [/\\'/, 'string'],
        [/'''/, 'string', '@popall'],
        [/'/, 'string'],
      ],
      endDblDocString: [
        [/[^"]+/, 'string'],
        [/\\"/, 'string'],
        [/"""/, 'string', '@popall'],
        [/"/, 'string'],
      ],
      numbers: [
        [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
        [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number'],
      ],
      strings: [
        [/'$/, 'string.escape', '@popall'],
        [/'/, 'string.escape', '@stringBody'],
        [/"$/, 'string.escape', '@popall'],
        [/"/, 'string.escape', '@dblStringBody'],
      ],
      stringBody: [
        [/[^\\']+$/, 'string', '@popall'],
        [/[^\\']+/, 'string'],
        [/\\./, 'string'],
        [/'/, 'string.escape', '@popall'],
        [/\\$/, 'string'],
      ],
      dblStringBody: [
        [/[^\\"]+$/, 'string', '@popall'],
        [/[^\\"]+/, 'string'],
        [/\\./, 'string'],
        [/"/, 'string.escape', '@popall'],
        [/\\$/, 'string'],
      ],
    },
  };
export { p as conf, c as language };
