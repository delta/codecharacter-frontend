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
  i,
  o = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  n = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = (e, t, i, l) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let a of n(t))
        s.call(e, a) ||
          a === i ||
          o(e, a, {
            get: () => t[a],
            enumerable: !(l = r(t, a)) || l.enumerable,
          });
    return e;
  },
  a = {};
l(a, (t = e), 'default'), i && l(i, t, 'default');
var d = [
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
  m = {
    wordPattern:
      /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    brackets: [
      ['\x3c!--', '--\x3e'],
      ['<', '>'],
      ['{{', '}}'],
      ['{%', '%}'],
      ['{', '}'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '%', close: '%' },
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
          `<(?!(?:${d.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        afterText: /^<\/(\w[\w\d]*)\s*>$/i,
        action: { indentAction: a.languages.IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${d.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i',
        ),
        action: { indentAction: a.languages.IndentAction.Indent },
      },
    ],
  },
  c = {
    defaultToken: '',
    tokenPostfix: '',
    builtinTags: [
      'if',
      'else',
      'elseif',
      'endif',
      'render',
      'assign',
      'capture',
      'endcapture',
      'case',
      'endcase',
      'comment',
      'endcomment',
      'cycle',
      'decrement',
      'for',
      'endfor',
      'include',
      'increment',
      'layout',
      'raw',
      'endraw',
      'render',
      'tablerow',
      'endtablerow',
      'unless',
      'endunless',
    ],
    builtinFilters: [
      'abs',
      'append',
      'at_least',
      'at_most',
      'capitalize',
      'ceil',
      'compact',
      'date',
      'default',
      'divided_by',
      'downcase',
      'escape',
      'escape_once',
      'first',
      'floor',
      'join',
      'json',
      'last',
      'lstrip',
      'map',
      'minus',
      'modulo',
      'newline_to_br',
      'plus',
      'prepend',
      'remove',
      'remove_first',
      'replace',
      'replace_first',
      'reverse',
      'round',
      'rstrip',
      'size',
      'slice',
      'sort',
      'sort_natural',
      'split',
      'strip',
      'strip_html',
      'strip_newlines',
      'times',
      'truncate',
      'truncatewords',
      'uniq',
      'upcase',
      'url_decode',
      'url_encode',
      'where',
    ],
    constants: ['true', 'false'],
    operators: ['==', '!=', '>', '<', '>=', '<='],
    symbol: /[=><!]+/,
    identifier: /[a-zA-Z_][\w]*/,
    tokenizer: {
      root: [
        [/\{\%\s*comment\s*\%\}/, 'comment.start.liquid', '@comment'],
        [/\{\{/, { token: '@rematch', switchTo: '@liquidState.root' }],
        [/\{\%/, { token: '@rematch', switchTo: '@liquidState.root' }],
        [/(<)([\w\-]+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
        [
          /(<)([:\w]+)/,
          ['delimiter.html', { token: 'tag.html', next: '@otherTag' }],
        ],
        [
          /(<\/)([\w\-]+)/,
          ['delimiter.html', { token: 'tag.html', next: '@otherTag' }],
        ],
        [/</, 'delimiter.html'],
        [/\{/, 'delimiter.html'],
        [/[^<{]+/],
      ],
      comment: [
        [/\{\%\s*endcomment\s*\%\}/, 'comment.end.liquid', '@pop'],
        [/./, 'comment.content.liquid'],
      ],
      otherTag: [
        [/\{\{/, { token: '@rematch', switchTo: '@liquidState.otherTag' }],
        [/\{\%/, { token: '@rematch', switchTo: '@liquidState.otherTag' }],
        [/\/?>/, 'delimiter.html', '@pop'],
        [/"([^"]*)"/, 'attribute.value'],
        [/'([^']*)'/, 'attribute.value'],
        [/[\w\-]+/, 'attribute.name'],
        [/=/, 'delimiter'],
        [/[ \t\r\n]+/],
      ],
      liquidState: [
        [/\{\{/, 'delimiter.output.liquid'],
        [/\}\}/, { token: 'delimiter.output.liquid', switchTo: '@$S2.$S3' }],
        [/\{\%/, 'delimiter.tag.liquid'],
        [/raw\s*\%\}/, 'delimiter.tag.liquid', '@liquidRaw'],
        [/\%\}/, { token: 'delimiter.tag.liquid', switchTo: '@$S2.$S3' }],
        { include: 'liquidRoot' },
      ],
      liquidRaw: [
        [/^(?!\{\%\s*endraw\s*\%\}).+/],
        [/\{\%/, 'delimiter.tag.liquid'],
        [/@identifier/],
        [/\%\}/, { token: 'delimiter.tag.liquid', next: '@root' }],
      ],
      liquidRoot: [
        [/\d+(\.\d+)?/, 'number.liquid'],
        [/"[^"]*"/, 'string.liquid'],
        [/'[^']*'/, 'string.liquid'],
        [/\s+/],
        [
          /@symbol/,
          { cases: { '@operators': 'operator.liquid', '@default': '' } },
        ],
        [/\./],
        [
          /@identifier/,
          {
            cases: {
              '@constants': 'keyword.liquid',
              '@builtinFilters': 'predefined.liquid',
              '@builtinTags': 'predefined.liquid',
              '@default': 'variable.liquid',
            },
          },
        ],
        [/[^}|%]/, 'variable.liquid'],
      ],
    },
  };
export { m as conf, c as language };
