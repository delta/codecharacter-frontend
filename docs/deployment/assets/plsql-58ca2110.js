import { bz as E } from './index-24a58ae8.js';
import { r as A } from './sql-1ec4f4b4.js';
function T(E, A) {
  for (var T = 0; T < A.length; T++) {
    const R = A[T];
    if ('string' != typeof R && !Array.isArray(R))
      for (const A in R)
        if ('default' !== A && !(A in E)) {
          const T = Object.getOwnPropertyDescriptor(R, A);
          T &&
            Object.defineProperty(
              E,
              A,
              T.get ? T : { enumerable: !0, get: () => R[A] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(E, Symbol.toStringTag, { value: 'Module' }),
  );
}
var R, N;
var I = (function () {
  if (N) return R;
  N = 1;
  var E = A();
  function T(A) {
    A.register(E),
      (function (E) {
        var A = (E.languages.plsql = E.languages.extend('sql', {
            comment: [/\/\*[\s\S]*?\*\//, /--.*/],
          })),
          T = A.keyword;
        Array.isArray(T) || (T = A.keyword = [T]),
          T.unshift(
            /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i,
          );
        var R = A.operator;
        Array.isArray(R) || (R = A.operator = [R]), R.unshift(/:=/);
      })(A);
  }
  return (R = T), (T.displayName = 'plsql'), (T.aliases = []), R;
})();
const O = T({ __proto__: null, default: E(I) }, [I]);
export { O as p };
