import { bm as E } from './index-3b0785b0.js';
function e(E, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if ('string' != typeof n && !Array.isArray(n))
      for (const e in n)
        if ('default' !== e && !(e in E)) {
          const r = Object.getOwnPropertyDescriptor(n, e);
          r &&
            Object.defineProperty(
              E,
              e,
              r.get ? r : { enumerable: !0, get: () => n[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(E, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, n;
var t = (function () {
  if (n) return r;
  function E(E) {
    E.languages.fortran = {
      'quoted-number': { pattern: /[BOZ](['"])[A-F0-9]+\1/i, alias: 'number' },
      string: {
        pattern:
          /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
        inside: {
          comment: { pattern: /(&(?:\r\n?|\n)\s*)!.*/, lookbehind: !0 },
        },
      },
      comment: { pattern: /!.*/, greedy: !0 },
      boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
      number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
      keyword: [
        /\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i,
        /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,
        /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,
        /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i,
      ],
      operator: [
        /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,
        { pattern: /(^|(?!\().)\/(?!\))/, lookbehind: !0 },
      ],
      punctuation: /\(\/|\/\)|[(),;:&]/,
    };
  }
  return (n = 1), (r = E), (E.displayName = 'fortran'), (E.aliases = []), r;
})();
const T = e({ __proto__: null, default: E(t) }, [t]);
export { T as f };